import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "João Vaz — Mentoria online de empreendedorismo" },
      { name: "description", content: "Ajudo-te a explorar oportunidades, testar uma ideia e dar o primeiro passo. Mentoria online em pequenos grupos, com ferramentas práticas e espaço para perguntas." },
      { property: "og:title", content: "João Vaz — Mentoria online de empreendedorismo" },
      { property: "og:description", content: "Tens uma ideia ou queres encontrar uma oportunidade? Ajudo-te a investigar, testar e decidir o próximo passo." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap" },
    ],
  }),
  component: Index,
});

const temas = [
  { n: "01", titulo: "Oportunidades e IKIGAI", texto: "Ajudo-te a reconhecer competências, interesses e problemas que merecem ser explorados." },
  { n: "02", titulo: "Conversas com clientes reais", texto: "Preparamos perguntas e procuramos perceber o que as pessoas fazem e de que precisam, em vez de assumir respostas." },
  { n: "03", titulo: "Business Model Canvas", texto: "Trabalhamos uma primeira versão do modelo de negócio, com hipóteses que ainda precisam de ser verificadas." },
  { n: "04", titulo: "Primeiro teste e IA prática", texto: "Definimos um teste pequeno e utilizamos IA para pesquisar, estruturar perguntas e organizar os próximos passos, sempre com espírito crítico." },
];

const principios = [
  { n: "01", titulo: "Contexto antes de conteúdo", texto: "Começo por ouvir o que procuras e perceber o ponto em que estás. Adapto os exercícios às questões do grupo." },
  { n: "02", titulo: "Aprendizagem pela prática", texto: "Prefiro trabalhar com exemplos e situações reais. A teoria serve para apoiar decisões, não para ocupar a sessão." },
  { n: "03", titulo: "Testar antes de gastar", texto: "Dou prioridade a pequenas experiências que ajudem a reduzir dúvidas antes de comprometer tempo ou dinheiro." },
];

function Index() {
  const [motivoContacto, setMotivoContacto] = useState("Mentoria online de empreendedorismo");
  const [estadoContacto, setEstadoContacto] = useState<"parado" | "enviando" | "sucesso" | "erro">("parado");
  const [erroContacto, setErroContacto] = useState("");
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* 1. TOPO */}
      <section className="relative overflow-hidden px-6 pb-12 pt-24 md:px-12 md:pb-16 md:pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60" style={{ background: "radial-gradient(ellipse 55% 75% at 75% 60%, #243a56 0%, transparent 73%)" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:min-h-[590px] md:grid-cols-[1.15fr_0.85fr] md:gap-9">
          <div className="relative z-10 py-2 md:py-3">
            <p className="text-[11px] uppercase tracking-[.23em] text-bronze">MENTORIA ONLINE · EMPREENDEDORISMO</p>
            <h1 className="mt-5 max-w-[750px] font-serif text-[clamp(2.55rem,8vw,3.3rem)] leading-[1.06] tracking-tight text-foreground md:text-[clamp(3rem,5.4vw,5.6rem)]">
              Tens uma ideia?<br />Vamos <span className="italic text-bronze">testá-la.</span>
            </h1>
            <span className="mt-6 block h-px w-20 bg-bronze" />
            <p className="mt-6 max-w-xl text-base leading-7 text-foreground/90 md:text-lg md:leading-8">
              Ajudo-te a explorar a tua ideia, a perceber para quem pode fazer sentido e a preparar um primeiro passo concreto, sem precisares de deixar o teu emprego para começar.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              Ainda não tens uma ideia definida? Também podemos começar por descobrir oportunidades.
            </p>
            <a href="#contacto" onClick={() => setMotivoContacto("Mentoria online de empreendedorismo")} className="mt-8 inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background transition-colors hover:bg-bronze/90">
              QUERO SABER MAIS SOBRE A MENTORIA →
            </a>
          </div>
          <div className="relative mx-auto hidden w-full bg-[#071525] md:ml-auto md:mr-6 md:block md:max-w-[410px] md:p-7" aria-label="Fotografia profissional de João Vaz">
            <img src="/joao-vaz-retrato.svg" alt="João Vaz" width="420" height="525" fetchPriority="high" className="block h-auto w-full object-contain" />
          </div>
        </div>
      </section>

      {/* 2. MENTORIA */}
      <section id="mentoria" className="scroll-mt-24 bg-ink px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>A MENTORIA</SectionLabel>
          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">Da ideia ao <span className="italic text-bronze">primeiro teste.</span></h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            Estou a preparar uma mentoria online de empreendedorismo em pequenos grupos. Quero criar um espaço para pensar, fazer perguntas, experimentar ferramentas e analisar as ideias sem pressas nem receitas prontas.
          </p>
          <div className="mt-9 grid gap-8 border-y border-border py-8 md:grid-cols-3 md:gap-10">
            <article>
              <h3 className="font-serif text-2xl">Para quem é</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Para pessoas adultas que querem explorar uma ideia, começar um projeto próprio ou descobrir uma oportunidade. Se tens emprego e queres testar algo em paralelo, também é para ti. Não precisas de experiência prévia.
              </p>
            </article>
            <article>
              <h3 className="font-serif text-2xl">Para quem não é</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Se procuras uma fórmula rápida, resultados garantidos ou alguém que construa o teu negócio por ti, este não é o formato que proponho. Vais precisar de participar e de experimentar.
              </p>
            </article>
            <article>
              <h3 className="font-serif text-2xl">Formato</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Proponho grupos de 5 a 10 pessoas, online e em direto, ao longo de quatro semanas: quatro sessões de duas horas. Horários: <span className="text-foreground">[PREENCHER]</span>. As condições finais serão confirmadas antes da abertura de inscrições.
              </p>
            </article>
          </div>
          <h3 className="mt-10 font-serif text-3xl md:text-4xl">O que vamos trabalhar</h3>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {temas.map((tema) => (
              <article key={tema.n} className="grid gap-3 py-5 md:grid-cols-12 md:gap-6">
                <span className="font-serif text-xl text-bronze md:col-span-1">{tema.n}</span>
                <h4 className="font-serif text-2xl md:col-span-4">{tema.titulo}</h4>
                <p className="text-sm leading-7 text-muted-foreground md:col-span-7 md:text-base">{tema.texto}</p>
              </article>
            ))}
          </div>
          <a href="#contacto" onClick={() => setMotivoContacto("Mentoria online de empreendedorismo")} className="mt-8 inline-flex items-center gap-3 border border-bronze px-7 py-4 text-xs tracking-wider text-foreground transition-colors hover:bg-bronze hover:text-background">
            QUERO FAZER UMA PERGUNTA SOBRE A MENTORIA →
          </a>
        </div>
      </section>

      {/* 3. SOBRE */}
      <section id="sobre" className="scroll-mt-24 md:scroll-mt-0 px-6 py-16 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:px-12 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <SectionLabel>SOBRE MIM</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              O que aprendi <span className="italic text-bronze">no terreno.</span>
            </h2>
            <div className="mx-auto mt-8 w-full max-w-[290px] bg-[#071525] p-5 md:hidden" aria-label="Fotografia profissional de João Vaz">
              <img src="/joao-vaz-retrato.svg" alt="João Vaz" width="420" height="525" loading="lazy" className="block h-auto w-full object-contain" />
            </div>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground md:col-span-7 md:col-start-6 md:text-lg">
            <p>Trabalho há mais de duas décadas nas áreas comercial e de desenvolvimento de negócio. Ao longo deste percurso, aprendi a ouvir clientes, a analisar problemas, a negociar e a transformar hipóteses em decisões.</p>
            <p>Sou formador e levo para as sessões ferramentas práticas, exemplos da minha experiência e espaço para questionar ideias. Não parto do princípio de que existe um caminho igual para todas as pessoas.</p>
            <p>Complemento a experiência prática com formação em Negociação Avançada pela Nova SBE, Foresight, Strategy &amp; Innovation pelo ISEG, Certificado de Competências Pedagógicas (CCP) e Strategic AI.</p>
          </div>
        </div>
      </section>

      {/* 4. COMO TRABALHO */}
      <section id="metodo" className="scroll-mt-24 md:scroll-mt-0 bg-ink px-6 py-16 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:px-12 md:py-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>COMO TRABALHO</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">Ouvir, experimentar, <span className="italic text-bronze">ajustar.</span></h2>
          <div className="mt-9 grid gap-8 md:grid-cols-3 md:gap-10">
            {principios.map((principio) => (
              <article key={principio.n} className="border-t border-bronze/40 pt-5">
                <span className="font-serif text-lg text-bronze">{principio.n}</span>
                <h3 className="mt-4 font-serif text-2xl">{principio.titulo}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">{principio.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORGANIZAÇÕES */}
      <section id="organizacoes" className="scroll-mt-24 md:scroll-mt-0 px-6 py-14 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:px-12 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel>ORGANIZAÇÕES</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">Formação para <span className="italic text-bronze">equipas.</span></h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              Também trabalho com organizações. Preparo formação prática em comunicação, empatia, vendas e inteligência artificial, de acordo com o contexto e os objetivos de cada equipa.
            </p>
            <a href="#contacto" onClick={() => setMotivoContacto("Formação para Organizações")} className="mt-6 inline-flex min-h-12 items-center border border-bronze px-6 text-xs tracking-wider transition-colors hover:bg-bronze hover:text-background">
              FALAR COMIGO SOBRE FORMAÇÃO →
            </a>
          </div>
        </div>
      </section>

      {/* 6. EBOOK */}
      <section id="ebook" className="scroll-mt-24 md:scroll-mt-0 bg-ink px-6 py-16 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:px-12 md:py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>EBOOK GRATUITO</SectionLabel>
            <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">Da Ideia <span className="italic text-bronze">à Ação.</span></h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Escrevi este guia para partilhar reflexões e exercícios sobre decisões, empatia, comunicação, pensamento empreendedor e utilização prática de IA. Podes lê-lo gratuitamente e ao teu ritmo.
            </p>
            <a href="/ebook" className="mt-7 inline-flex min-h-12 items-center border border-bronze px-7 text-xs tracking-wider text-foreground transition-colors hover:bg-bronze hover:text-background">
              CONHECER O EBOOK GRATUITO →
            </a>
          </div>
          <div className="md:col-span-5">
            <a href="/ebook" aria-label="Conhecer o eBook Da Ideia à Ação" className="mx-auto flex aspect-[148/210] max-w-[225px] flex-col bg-[#0D1B2A] p-7 shadow-2xl ring-1 ring-[#A8874A]/40">
              <span className="text-xs tracking-widest text-[#F5F0EB]">João Vaz</span>
              <span className="mt-10 h-px w-16 bg-[#A8874A]" />
              <span className="flex flex-1 items-center font-serif text-4xl leading-tight text-[#F5F0EB]">Da Ideia<br />à Ação</span>
              <span className="text-xs leading-relaxed text-[#F5F0EB]">Pensar melhor, compreender pessoas e passar à prática.</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. CONTACTO */}
      <section id="contacto" className="scroll-mt-24 md:scroll-mt-0 px-6 py-16 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:px-12 md:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-10">
            <div className="md:col-span-5">
              <SectionLabel>CONTACTO</SectionLabel>
              <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">Vamos <span className="italic text-bronze">conversar.</span></h2>
              <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
                Se queres saber mais sobre a mentoria ou falar comigo sobre formação, conta-me o que procuras. Respondo-te por email.
              </p>
              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-[11px] tracking-editorial text-bronze">E-MAIL</p>
                  <a href="mailto:geral@joaovaz.co" className="mt-2 inline-block font-serif text-xl text-foreground hover:text-bronze">geral@joaovaz.co</a>
                </div>
                <div>
                  <p className="text-[11px] tracking-editorial text-bronze">LOCALIZAÇÃO</p>
                  <p className="mt-2 font-serif text-xl text-foreground">Lisboa, Portugal</p>
                </div>
              </div>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (estadoContacto === "enviando") return;
                setEstadoContacto("enviando");
                setErroContacto("");
                const formulario = e.currentTarget;
                const data = new FormData(formulario);
                try {
                  const response = await fetch("/api/contacto", {
                    method: "POST",
                    headers: { "content-type": "application/json", accept: "application/json" },
                    body: JSON.stringify({
                      nome: String(data.get("nome") ?? ""),
                      email: String(data.get("email") ?? ""),
                      motivo: String(data.get("motivo") ?? ""),
                      telefone: String(data.get("telefone") ?? ""),
                      mensagem: String(data.get("mensagem") ?? ""),
                      consentimento: data.get("consentimento") === "on",
                      website: String(data.get("website") ?? ""),
                    }),
                  });
                  const result = await response.json() as { ok?: boolean; error?: string };
                  if (!response.ok || !result.ok) {
                    throw new Error(result.error || "Não foi possível enviar o pedido. Tenta novamente.");
                  }
                  setEstadoContacto("sucesso");
                  formulario.reset();
                  setMotivoContacto("Mentoria online de empreendedorismo");
                } catch (error) {
                  setErroContacto(error instanceof Error ? error.message : "Não foi possível enviar o pedido. Tenta novamente.");
                  setEstadoContacto("erro");
                }
              }}
              className="space-y-7 md:col-span-6 md:col-start-7 md:space-y-4"
            >
              <Field name="nome" label="NOME COMPLETO" placeholder="O teu nome completo" required />
              <Field name="email" label="E-MAIL" type="email" placeholder="o.teu@email.pt" required />
              <label className="block">
                <span className="text-[11px] tracking-editorial text-muted-foreground">MOTIVO DO CONTACTO</span>
                <select
                  name="motivo"
                  value={motivoContacto}
                  onChange={(e) => setMotivoContacto(e.target.value)}
                  required
                  className="mt-3 w-full rounded-none border-b border-border bg-background pb-3 font-serif text-lg text-foreground focus:border-bronze focus:outline-none md:mt-1 md:pb-2"
                >
                  <option value="Mentoria online de empreendedorismo">Mentoria online de empreendedorismo</option>
                  <option value="Formação para Organizações">Formação para Organizações</option>
                  <option value="Outro assunto">Outro assunto</option>
                </select>
              </label>
              <Field name="telefone" label="TELEFONE (OPCIONAL)" type="tel" placeholder="+351, se preferires contacto telefónico" />
              <FieldArea name="mensagem" label="MENSAGEM" placeholder="Conta-me brevemente o que procuras…" required />
              <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                <input type="checkbox" name="consentimento" required className="mt-1.5 h-4 w-4 shrink-0 accent-[var(--bronze)]" />
                <span>
                  Aceito que os meus dados sejam usados para responder a este pedido.
                  {" "}<a href="/politica-de-privacidade" className="underline underline-offset-4 transition-colors hover:text-bronze">Política de privacidade</a>.
                </span>
              </label>
              <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                <label>Deixa este campo vazio<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <div className="space-y-3 md:space-y-2">
                <button type="submit" disabled={estadoContacto === "enviando"}
                  className="group inline-flex min-h-12 items-center gap-3 border border-bronze px-7 py-3 text-[11px] tracking-editorial text-foreground transition-colors hover:bg-bronze hover:text-background disabled:cursor-wait disabled:opacity-60">
                  {estadoContacto === "enviando" ? "A ENVIAR…" : "ENVIAR PEDIDO DE CONTACTO"}
                  <span aria-hidden="true">→</span>
                </button>
                {estadoContacto === "sucesso" && (
                  <p role="status" aria-live="polite" className="text-sm leading-6 text-foreground">
                    Recebi o teu pedido. Respondo-te por email em breve.
                  </p>
                )}
                {estadoContacto === "erro" && (
                  <p role="alert" className="text-sm leading-6 text-foreground">
                    {erroContacto} Se o problema continuar, escreve-me para <a href="mailto:geral@joaovaz.co" className="underline underline-offset-4">geral@joaovaz.co</a>.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="border-t border-border px-6 py-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-serif text-sm text-muted-foreground">João Vaz · Todos os direitos reservados</p>
          <a href="/politica-de-privacidade" className="mt-2 inline-block text-xs text-muted-foreground underline-offset-4 hover:text-bronze hover:underline">Política de privacidade</a>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, placeholder, type = "text", name, required = false }: {
  label: string; placeholder: string; type?: string; name?: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-editorial text-muted-foreground">{label}</span>
      <input type={type} name={name} required={required} placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-bronze focus:outline-none md:mt-1 md:pb-2" />
    </label>
  );
}

function FieldArea({ label, placeholder, name, required = false }: {
  label: string; placeholder: string; name?: string; required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-editorial text-muted-foreground">{label}</span>
      <textarea rows={3} name={name} required={required} placeholder={placeholder}
        className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-bronze focus:outline-none md:mt-1 md:h-16 md:pb-2" />
    </label>
  );
}
