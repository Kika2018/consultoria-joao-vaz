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


type DbStatement = { bind: (...values: unknown[]) => { run: () => Promise<unknown> } };
type DbBinding = { prepare: (sql: string) => DbStatement };
type MentoriaEnv = { MENTORIA_DB?: DbBinding };

const fields = [
  "nome","email","idade","situacao","formacao","temIdeia","descricaoIdeia",
  "faseIdeia","experiencia","experienciaDetalhe","ia","usoIa","motivacao",
  "desafio","disponibilidade","horarioPreferido","origem",
] as const;

async function submitMentoria(request: Request, env: MentoriaEnv): Promise<Response> {
  const reply = (status: number, message: string) => Response.json({message}, {
    status, headers: {"cache-control":"no-store","x-content-type-options":"nosniff"}
  });
  if (request.method !== "POST") return reply(405,"Método não permitido.");
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return reply(403,"Origem não permitida.");
  if ((Number(request.headers.get("content-length")) || 0) > 14000) return reply(413,"Formulário demasiado grande.");
  if (!request.headers.get("content-type")?.includes("application/json")) return reply(415,"Formato inválido.");
  if (!env.MENTORIA_DB) return reply(503,"As candidaturas ainda não estão disponíveis. Tenta mais tarde.");

  let raw: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 14000) return reply(413,"Formulário demasiado grande.");
    const decoded: unknown = JSON.parse(body);
    if (!decoded || typeof decoded !== "object" || Array.isArray(decoded)) return reply(400,"Dados inválidos.");
    raw = decoded as Record<string, unknown>;
  } catch { return reply(400,"Dados inválidos."); }

  // Campo invisível: candidaturas automatizadas são descartadas sem persistência.
  if (raw.website) return reply(200,"Candidatura recebida.");
  if (raw.privacidade !== true) return reply(400,"Confirma a informação de privacidade.");
  const data: Record<string, string> = {};
  for (const key of fields) {
    const value = raw[key];
    if (value !== undefined && typeof value !== "string") return reply(400,"Dados inválidos: "+key);
    data[key] = (value ?? "").toString().trim();
    if (data[key].length > 1200) return reply(400,"Resposta demasiado longa.");
  }
  const required = ["nome","email","idade","situacao","temIdeia","experiencia","ia","motivacao","desafio","disponibilidade","horarioPreferido","origem"];
  if (required.some(key => !data[key])) return reply(400,"Preenche os campos obrigatórios.");
  const idade = Number(data.idade);
  if (!Number.isInteger(idade) || idade < 18 || idade > 120) return reply(400,"A participação é reservada a adultos.");
  if (data.nome.length > 120 || data.email.length > 254 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email))
    return reply(400,"Verifica o nome e o email.");
  if (data.motivacao.length < 30) return reply(400,"Explica um pouco melhor a tua motivação.");
  if (new Date() > new Date("2027-01-10T23:59:59Z")) return reply(410,"As candidaturas desta edição estão encerradas.");

  try {
    await env.MENTORIA_DB.prepare(
      `INSERT INTO candidaturas (
        id,nome,email,idade,situacao,formacao,tem_ideia,descricao_ideia,fase_ideia,
        experiencia,experiencia_detalhe,ia,uso_ia,motivacao,desafio,disponibilidade,origem,
        horario_preferido,consentimento_informativo,consentimento_marketing
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    ).bind(
      crypto.randomUUID(),data.nome,data.email.toLowerCase(),idade,data.situacao,
      data.formacao,data.temIdeia,data.descricaoIdeia,data.faseIdeia,
      data.experiencia,data.experienciaDetalhe,data.ia,data.usoIa,
      data.motivacao,data.desafio,data.disponibilidade,data.origem,data.horarioPreferido,
      1,raw.comunicacoes === true ? 1 : 0
    ).run();
    return reply(201,"Candidatura recebida. Obrigado! Entraremos em contacto após a análise.");
  } catch (err) {
    console.error("Falha na gravação de candidatura:", err instanceof Error ? err.message : "desconhecida");
    if (String(err).includes("UNIQUE constraint")) return reply(409,"Este email já tem uma candidatura registada.");
    return reply(503,"Não foi possível guardar a candidatura. Tenta novamente.");
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const path = new URL(request.url).pathname;
      if (path === "/api/candidaturas") return await submitMentoria(request, env as MentoriaEnv);
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
