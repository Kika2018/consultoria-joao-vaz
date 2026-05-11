import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "João Vaz — Formação Corporativa & Desenvolvimento Comercial" },
      {
        name: "description",
        content:
          "João Vaz — Formação corporativa, desenvolvimento comercial e comunicação com impacto. Pessoas que aprendem. Organizações que crescem.",
      },
      { property: "og:title", content: "João Vaz — Formação Corporativa" },
      {
        property: "og:description",
        content:
          "Pessoas que aprendem. Organizações que crescem. Formação corporativa e desenvolvimento comercial.",
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
    title: "Customer Centricity",
    body: "Métodos práticos para compreender o cliente, qualificar contexto e desenhar experiências coerentes — do primeiro contacto à relação de longo prazo.",
  },
  {
    n: "04",
    title: "Comunicação com Impacto",
    body: "Comunicação verbal e não-verbal aplicada a apresentações executivas, negociação e contextos de elevada exposição.",
  },
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
    body: "O valor de uma formação confirma-se nas semanas seguintes. Cada programa prevê acompanhamento e instrumentos de aplicação no quotidiano das equipas.",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-32 md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 40%, color-mix(in oklab, var(--bronze) 10%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-editorial text-bronze">
              FORMAÇÃO CORPORATIVA &nbsp;·&nbsp; DESENVOLVIMENTO COMERCIAL
            </p>
            <h1 className="mt-10 font-serif text-7xl leading-[0.95] tracking-tight text-foreground md:text-[10rem]">
              João
              <br />
              <span className="italic">Vaz</span>
            </h1>
            <span className="mt-10 block h-px w-20 bg-bronze" />
            <p className="mt-10 max-w-xl font-serif text-2xl italic leading-relaxed text-foreground/90 md:text-3xl">
              Pessoas que aprendem.
              <br />
              Organizações que crescem.
            </p>
            <div className="mt-12">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-3 border border-bronze px-8 py-4 text-[11px] tracking-editorial text-foreground transition-colors hover:bg-bronze hover:text-primary-foreground"
              >
                VAMOS CONVERSAR
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
            <span className="text-[10px] tracking-editorial text-muted-foreground">
              SCROLL
            </span>
            <span className="h-12 w-px bg-border" />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-ink px-6 py-32 md:px-12 md:py-40">
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
              Hoje, acompanha empresas que procuram desenvolver os seus
              quadros comerciais e de liderança com seriedade, discrição e
              resultados verificáveis no terreno.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <SectionLabel>ÁREAS DE EXPERTISE</SectionLabel>
              <h2 className="mt-8 font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Onde a experiência
                <br />
                encontra <span className="italic text-bronze/90">impacto.</span>
              </h2>
            </div>
          </div>

          <div className="mt-20 divide-y divide-border border-y border-border">
            {areas.map((a) => (
              <article
                key={a.n}
                className="group grid gap-6 py-10 transition-colors hover:bg-foreground/[0.02] md:grid-cols-12 md:gap-12 md:py-12"
              >
                <div className="md:col-span-1">
                  <span className="font-serif text-2xl text-bronze">
                    {a.n}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                    {a.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {a.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" className="bg-ink px-6 py-32 md:px-12 md:py-40">
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

          <div className="mt-24 grid gap-12 md:grid-cols-3 md:gap-10">
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

      {/* CONTACTO */}
      <section id="contacto" className="px-6 py-32 md:px-12 md:py-40">
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
                Se procura uma abordagem prática, humana e ajustada à realidade
                da sua equipa, a conversa começa aqui.
              </p>

              <div className="mt-14 space-y-8">
                <div>
                  <p className="text-[11px] tracking-editorial text-bronze">
                    E-MAIL
                  </p>
                  <a
                    href="mailto:geral@joaovaz.pt"
                    className="mt-2 inline-block font-serif text-xl text-foreground transition-colors hover:text-bronze md:text-2xl"
                  >
                    geral@joaovaz.pt
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
              onSubmit={(e) => e.preventDefault()}
              className="space-y-8 md:col-span-6 md:col-start-7"
            >
              <Field label="NOME" placeholder="O seu nome" />
              <Field label="E-MAIL" type="email" placeholder="o.seu@email.pt" />
              <Field label="EMPRESA" placeholder="Nome da organização" />
              <FieldArea
                label="MENSAGEM"
                placeholder="Descreva brevemente o que procura…"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-3 border border-bronze px-8 py-4 text-[11px] tracking-editorial text-foreground transition-colors hover:bg-bronze hover:text-primary-foreground"
              >
                VAMOS CONVERSAR
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-serif text-lg tracking-[0.18em] text-foreground">
            João Vaz
          </p>
          <p className="text-[11px] tracking-editorial text-muted-foreground">
            © 2025 — TODOS OS DIREITOS RESERVADOS
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
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-editorial text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-bronze focus:outline-none"
      />
    </label>
  );
}

function FieldArea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-editorial text-muted-foreground">
        {label}
      </span>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="mt-3 w-full resize-none border-b border-border bg-transparent pb-3 font-serif text-lg text-foreground placeholder:text-muted-foreground/50 focus:border-bronze focus:outline-none"
      />
    </label>
  );
}
