import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

type ContactInput = {
  nome?: unknown;
  email?: unknown;
  motivo?: unknown;
  telefone?: unknown;
  mensagem?: unknown;
  consentimento?: unknown;
  website?: unknown;
};

const json = (data: object, status: number) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

async function handleContact(request: Request, env: unknown): Promise<Response> {
  if (request.method !== "POST") {
    return json({ error: "Método não permitido." }, 405);
  }

  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ error: "Origem não autorizada." }, 403);
  }

  if (!(request.headers.get("content-type") || "").toLowerCase().includes("application/json")) {
    return json({ error: "Formato de envio inválido." }, 415);
  }

  const limit = 12_000;
  if (Number(request.headers.get("content-length") || 0) > limit) {
    return json({ error: "O pedido é demasiado longo." }, 413);
  }

  let raw: string;
  try {
    raw = await request.text();
    if (raw.length > limit) return json({ error: "O pedido é demasiado longo." }, 413);
  } catch {
    return json({ error: "Não consegui ler o pedido." }, 400);
  }

  let input: ContactInput;
  try {
    input = JSON.parse(raw) as ContactInput;
    if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error();
  } catch {
    return json({ error: "Dados inválidos." }, 400);
  }

  // Campo invisível: não aceitar pedidos automatizados que o preencham.
  if (input.website) return json({ ok: true }, 200);

  const nome = typeof input.nome === "string" ? input.nome.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const motivo = typeof input.motivo === "string" ? input.motivo.trim() : "";
  const telefone = typeof input.telefone === "string" ? input.telefone.trim() : "";
  const mensagem = typeof input.mensagem === "string" ? input.mensagem.trim() : "";

  const motivosPermitidos = [
    "Mentoria online de empreendedorismo",
    "Formação para Organizações",
    "Outro assunto",
  ];
  if (
    !nome || nome.length > 150 ||
    !email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !motivosPermitidos.includes(motivo) ||
    telefone.length > 50 ||
    !mensagem || mensagem.length > 5000 ||
    input.consentimento !== true
  ) {
    return json({ error: "Verifica os campos e aceita o consentimento antes de enviar." }, 400);
  }

  // O destino nunca é enviado ao navegador nem guardado no código.
  const endpoint = (env as { FORMSPREE_ENDPOINT?: string })?.FORMSPREE_ENDPOINT;
  if (
    typeof endpoint !== "string" ||
    !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)
  ) {
    return json({ error: "O envio está temporariamente indisponível. Tenta novamente mais tarde." }, 503);
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        name: nome,
        email,
        motivo,
        telefone,
        message: mensagem,
        consentimento: "Aceito que os meus dados sejam usados para responder a este pedido",
        _subject: "Novo pedido de contacto — " + motivo + " — João Vaz",
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) {
      console.error("Formspree não aceitou o contacto. HTTP:", response.status);
      return json({ error: "Não foi possível enviar o pedido. Tenta novamente." }, 502);
    }
    return json({ ok: true }, 200);
  } catch (error) {
    console.error("Falha na ligação à plataforma de formulários:", error);
    return json({ error: "Não foi possível enviar o pedido. Verifica a ligação e tenta novamente." }, 502);
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    if (new URL(request.url).pathname === "/api/contacto") {
      return handleContact(request, env);
    }
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
