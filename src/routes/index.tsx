import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "João Vaz — Formação Corporativa e Empreendedorismo" },
      {
        name: "description",
        content:
          "João Vaz — Formação prática para empresas e para pessoas que querem explorar oportunidades e desenvolver projetos.",
      },
      { property: "og:title", content: "João Vaz — Empresas e Empreendedorismo" },
      {
        property: "og:description",
        content:
          "Pessoas que aprendem. Ideias que avançam. Formação corporativa, desenvolvimento comercial e empreendedorismo.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const areas = [
  {
    n: "01",
    title: "Formação Comercial",
    body: "Programas dirigidos a equipas de vendas e gestão comercial, com enfoque na relação com o cliente, na argumentação e na criação consistente de valor ao longo do ciclo comercial.",
  },
  {
    n: "02",
    title: "Comunicação & Liderança",
    body: "Trabalho com líderes e quadros intermédios sobre clareza de discurso, presença, decisão e a capacidade de alinhar equipas em contextos de mudança.",
  },
  {
    n: "03",
    title: "Relação com o Cliente",
    body: "Métodos práticos para compreender o cliente, qualificar contexto e desenhar experiências coerentes — do primeiro contacto à relação de longo prazo.",
  },
  {
    n: "04",
    title: "Comunicação com Impacto",
    body: "Comunicação verbal e não-verbal aplicada a apresentações executivas, negociação e contextos de elevada exposição.",
  },
];

const credentials = [
  { institution: "IPAM", title: "Licenciatura em Gestão de Marketing" },
  { institution: "ISEG", title: "Pós-Graduação em Foresight, Strategy & Innovation" },
  { institution: "Nova SBE", title: "Formação Executiva em Negociação Avançada" },
  { institution: "IEFP", title: "Certificado de Competências Pedagógicas (CCP)" },
  { institution: "Lisbon Digital School", title: "Strategic AI Executive Training" },
];

const principles = [
  {
    n: "01",
    title: "Contexto antes de conteúdo",
    body: "Cada intervenção começa por um diagnóstico próximo da realidade da organização. O programa é construído a partir do que existe, não a partir de um modelo pré-definido.",
  },
  {
    n: "02",
    title: "Aprendizagem pela prática",
    body: "As sessões privilegiam a aplicação ao trabalho real. A teoria é instrumento de suporte; o objectivo é a mudança consistente de comportamento.",
  },
  {
    n: "03",
    title: "Continuidade no terreno",
    body: "O valor de uma formação confirma-se nas semanas seguintes. Cada programa prevê acompanhamento e ferramentas práticas para aplicação no quotidiano das equipas.",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO — uma marca, duas áreas, mantendo a fotografia original */}
      <section className="relative overflow-hidden px-6 pb-10 pt-24 md:px-12 md:pb-10 md:pt-[92px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60" style={{background:"radial-gradient(ellipse 55% 75% at 75% 60%, #243a56 0%, transparent 73%)"}}/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 md:min-h-[560px] md:grid-cols-[1.15fr_0.85fr] md:gap-9">
          <div className="relative z-10 py-2 md:py-3">
            <p className="text-[11px] uppercase tracking-[.23em] text-bronze">FORMAÇÃO · EMPREENDEDORISMO · DESENVOLVIMENTO</p>
            <h1 className="mt-5 max-w-[750px] font-serif text-[clamp(2.9rem,9.3vw,3.8rem)] leading-[1.04] tracking-tight text-foreground md:mt-5 md:text-[clamp(3rem,5.4vw,5.6rem)]">
              Pessoas que <span className="italic text-bronze">aprendem.</span><br />
              Ideias que <span className="italic text-bronze">avançam.</span>
            </h1>
            <span className="mt-5 block h-px w-20 bg-bronze md:mt-6"/>
            <p className="mt-5 max-w-xl text-base leading-7 text-foreground/85 md:mt-5 md:text-lg md:leading-8">
              Formação prática, experiência real e ferramentas para desenvolver pessoas, equipas e projetos.
            </p>
            <div className="mt-6 max-w-2xl border-t border-bronze/45 md:mt-6">
              <a href="#areas" className="group flex items-start justify-between gap-5 border-b border-bronze/35 py-4 transition-colors hover:border-bronze md:py-4">
                <span className="block">
                  <span className="block font-serif text-[clamp(1.55rem,2.3vw,2.1rem)] leading-tight text-foreground transition-colors group-hover:text-bronze">Formação para Organizações</span>
                  <span className="mt-2 block text-sm leading-6 text-muted-foreground">Vendas, comunicação, liderança, empreendedorismo e IA.</span>
                </span>
                <span aria-hidden="true" className="pt-1 text-2xl text-bronze transition-transform group-hover:translate-x-1">↗</span>
              </a>
              <a href="/empreendedorismo" className="group flex items-start justify-between gap-5 border-b border-bronze/35 py-4 transition-colors hover:border-bronze md:py-4">
                <span className="block">
                  <span className="block font-serif text-[clamp(1.55rem,2.3vw,2.1rem)] leading-tight text-foreground transition-colors group-hover:text-bronze">Empreendedorismo &amp; Projetos</span>
                  <span className="mt-2 block text-sm leading-6 text-muted-foreground">Descobrir oportunidades, desenvolver ideias e criar algo próprio.</span>
                </span>
                <span aria-hidden="true" className="pt-1 text-2xl text-bronze transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[290px] bg-[#071525] p-5 md:ml-auto md:mr-6 md:max-w-[410px] md:p-7" aria-label="Fotografia profissional de João Vaz">
            <img src="/joao-vaz-retrato.svg" alt="João Vaz, formador em desenvolvimento comercial e empreendedorismo" width="420" height="525" fetchPriority="high" className="block h-auto w-full object-contain"/>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-ink px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel>SOBRE</SectionLabel>
            <h2 className="mt-8 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Uma carreira
              <br />
              construída
              <br />
              <span className="italic text-bronze/90">no terreno.</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-lg">
            <p>
              Mais de duas décadas de actividade entre o sector comercial, a
              indústria da saúde e o empreendedorismo, em organizações
              nacionais e internacionais com forte exigência de resultados.
            </p>
            <p>
              O percurso integra responsabilidades em desenvolvimento de
              negócio, gestão de equipas comerciais, negociação e colaboração
              próxima com áreas de marketing, marca e estratégia de cliente.
            </p>
            <p>
              Da experiência fica um método: ouvir antes de propor, adaptar
              cada intervenção ao contexto e trabalhar lado a lado com quem
              decide e com quem executa.
            </p>
            <p>
              Hoje, acompanha organizações que valorizam liderança,
              desenvolvimento comercial e aprendizagem aplicada à realidade
              das equipas.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="scroll-mt-24 px-6 py-14 md:flex md:min-h-[calc(100svh-6rem)] md:flex-col md:justify-center md:px-12 md:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel>ÁREAS DE EXPERTISE</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground md:mt-3 md:text-5xl md:leading-[1.05]">
                Onde a experiência
                <br />
                encontra <span className="italic text-bronze/90">impacto.</span>
              </h2>
            </div>
          </div>

          <div className="mt-8 divide-y divide-border border-y border-border md:mt-5">
            {areas.map((a) => (
              <article
                key={a.n}
                className="group grid gap-4 py-7 transition-colors hover:bg-foreground/[0.02] md:grid-cols-12 md:items-start md:gap-6 md:py-3.5"
              >
                <div className="md:col-span-1">
                  <span className="font-serif text-2xl text-bronze">
                    {a.n}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl text-foreground md:text-[1.65rem] md:leading-tight">
                    {a.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-base md:leading-6">
                    {a.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" className="bg-ink px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel>FILOSOFIA</SectionLabel>
              <h2 className="mt-8 font-serif text-4xl leading-tight text-foreground md:text-6xl">
                O modo de
                <br />
                <span className="italic text-bronze/90">trabalhar.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                A formação que não altera comportamentos dificilmente justifica
                o tempo investido. Cada intervenção é desenhada para produzir
                efeito duradouro — proporcional à dimensão, ao sector e à
                cultura da organização.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {principles.map((p) => (
              <div key={p.n} className="space-y-5">
                <span className="font-serif text-lg text-bronze">{p.n}</span>
                <span className="block h-px w-10 bg-bronze/40" />
                <h3 className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO & CERTIFICAÇÕES */}
      <section id="formacao" className="scroll-mt-24 px-6 py-14 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:px-12 md:py-7">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <SectionLabel>FORMAÇÃO &amp; CERTIFICAÇÕES</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:mt-4 md:text-[2.75rem]">
                Percurso
                <br />
                <span className="italic text-bronze/90">académico.</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="divide-y divide-border border-y border-border">
                {credentials.map((c) => (
                  <li
                    key={c.title}
                    className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6 md:py-4"
                  >
                    <p className="text-[11px] tracking-editorial text-bronze md:col-span-4">
                      {c.institution.toUpperCase()}
                    </p>
                    <p className="font-serif text-xl leading-snug text-foreground md:col-span-8 md:text-[1.4rem] md:leading-snug">
                      {c.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EBOOK GRATUITO */}
      <section id="ebook" className="bg-ink px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>EBOOK GRATUITO</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl leading-tight text-foreground md:text-7xl">
              Da Ideia <span className="italic text-bronze/90">à Ação.</span>
            </h2>
            <p className="mt-7 max-w-xl font-serif text-2xl leading-relaxed text-foreground">
              Pensar melhor, compreender pessoas e transformar conhecimento em resultados.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Um guia com reflexões, experiências e exercícios práticos sobre decisões, empatia,
              comunicação, pensamento empreendedor e inteligência artificial.
            </p>
            <a
              className="mt-10 inline-flex items-center gap-3 border border-bronze px-8 py-4 text-[11px] tracking-editorial text-foreground transition-colors hover:bg-bronze hover:text-primary-foreground"
              href="/ebook"
            >
              CONHECER O EBOOK GRATUITO <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="md:col-span-5">
            <a href="/ebook" aria-label="Conhecer o eBook Da Ideia à Ação" className="mx-auto flex aspect-[148/210] max-w-[270px] flex-col bg-[#0D1B2A] p-8 shadow-2xl ring-1 ring-[#A8874A]/40">
              <span className="text-xs tracking-widest text-[#F5F0EB]">João Vaz</span>
              <span className="mt-10 h-px w-16 bg-[#A8874A]"/>
              <span className="flex flex-1 items-center font-serif text-5xl leading-tight text-[#F5F0EB]">Da Ideia<br/>à Ação</span>
              <span className="text-xs leading-relaxed text-[#F5F0EB]">Pensar melhor, compreender pessoas e transformar conhecimento em resultados.</span>
              <span className="mt-8 h-px w-12 bg-[#A8874A]"/>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionLabel>CONTACTO</SectionLabel>
              <h2 className="mt-8 font-serif text-5xl leading-tight text-foreground md:text-7xl">
                Vamos
                <br />
                <span className="italic text-bronze/90">conversar.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                Cada projecto começa por uma conversa. A conversa começa com
                contexto, não com fórmulas pré-definidas.
              </p>

              <div className="mt-14 space-y-8">
                <div>
                  <p className="text-[11px] tracking-editorial text-bronze">
                    E-MAIL
                  </p>
                  <a
                    href="mailto:geral@joaovaz.co"
                    className="mt-2 inline-block font-serif text-xl text-foreground transition-colors hover:text-bronze md:text-2xl"
                  >
                    geral@joaovaz.co
                  </a>
                </div>
                <div>
                  <p className="text-[11px] tracking-editorial text-bronze">
                    LOCALIZAÇÃO
                  </p>
                  <p className="mt-2 font-serif text-xl text-foreground md:text-2xl">
                    Lisboa, Portugal
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const nome = String(data.get("nome") ?? "");
                const email = String(data.get("email") ?? "");
                const empresa = String(data.get("empresa") ?? "");
                const telefone = String(data.get("telefone") ?? "");
                const mensagem = String(data.get("mensagem") ?? "");
                const subject = "Pedido de contacto — João Vaz";
                const body = `Nome: ${nome}\nE-mail: ${email}\nEmpresa: ${empresa}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
                window.location.href = `mailto:geral@joaovaz.co?subject=${encodeURIComponent(
                  subject,
                )}&body=${encodeURIComponent(body)}`;
              }}
              className="space-y-8 md:col-span-6 md:col-start-7"
            >
              <Field name="nome" label="NOME" placeholder="O seu nome" required />
              <Field name="email" label="E-MAIL" type="email" placeholder="o.seu@email.pt" required />
              <Field name="empresa" label="EMPRESA" placeholder="Nome da organização" required />
              <Field name="telefone" label="TELEFONE (OPCIONAL)" type="tel" placeholder="+351" />
              <FieldArea
                name="mensagem"
                label="MENSAGEM (OPCIONAL)"
                placeholder="Descreva brevemente o que procura…"
              />
              <div className="space-y-3">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 border border-bronze px-8 py-4 text-[11px] tracking-editorial text-foreground transition-colors hover:bg-bronze hover:text-primary-foreground"
                >
                  AGENDAR REUNIÃO
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <p className="text-[11px] tracking-editorial text-muted-foreground">
                  RESPOSTA EM 24–48H ÚTEIS.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-serif text-sm text-muted-foreground">
            João Vaz · Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  name,
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-editorial text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-bronze focus:outline-none"
      />
    </label>
  );
}

function FieldArea({
  label,
  placeholder,
  name,
}: {
  label: string;
  placeholder: string;
  name?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-editorial text-muted-foreground">
        {label}
      </span>
      <textarea
        rows={4}
        name={name}
        placeholder={placeholder}
        className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-bronze focus:outline-none"
      />
    </label>
  );
}
