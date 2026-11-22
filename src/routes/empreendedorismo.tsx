import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/empreendedorismo")({
  head: () => ({
    meta: [
      { title: "Empreendedorismo — Empreendedorismo | João Vaz" },
      { name: "description", content: "Descobrir oportunidades, desenvolver mentalidade empreendedora e transformar ideias em ações concretas — com ou sem uma ideia inicial." },
      { property: "og:title", content: "Empreendedorismo — João Vaz" },
      { property: "og:description", content: "Um espaço para explorar oportunidades, pensar como empreendedor e começar a agir." }
    ],
    links: [{rel:"canonical",href:"https://joaovaz.co/empreendedorismo"}]
  }),
  component: EmpreendedorismoPage,
});

function EmpreendedorismoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" id="top">
      <SiteNav />
      <main>
        <section className="px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[.23em] text-bronze">EMPREENDEDORISMO</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3rem,6.5vw,6.3rem)] leading-[1.05]">O teu percurso não define <em className="text-bronze">o teu potencial.</em></h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">Queres criar algo teu? Tens uma ideia e não sabes por onde começar? Ou gostavas de aprender a identificar oportunidades? Aqui encontras uma abordagem prática ao empreendedorismo, com experiência, método e sem promessas de sucesso fácil.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="mailto:geral@joaovaz.co?subject=Interesse%20na%20Mentoria%20Empreendedora" className="inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background">PEDIR INFORMAÇÕES SOBRE A MENTORIA →</a>
              <a href="/ebook" className="inline-flex min-h-14 items-center border border-bronze px-7 text-xs tracking-wider text-foreground">EXPLORAR O EBOOK →</a>
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] tracking-[.23em] text-bronze">COMO PODES COMEÇAR</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl">Da vontade à <em className="text-bronze">ação.</em></h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <article className="border-t border-bronze/50 pt-6"><span className="font-serif text-3xl text-bronze">01</span><h3 className="mt-5 font-serif text-2xl">Descobrir oportunidades</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Explorar interesses, observar problemas reais e desenvolver uma forma de pensar mais empreendedora.</p></article>
              <article className="border-t border-bronze/50 pt-6"><span className="font-serif text-3xl text-bronze">02</span><h3 className="mt-5 font-serif text-2xl">Estruturar ideias</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Dar clareza a uma ideia, compreender quem poderá beneficiar dela e criar hipóteses testáveis.</p></article>
              <article className="border-t border-bronze/50 pt-6"><span className="font-serif text-3xl text-bronze">03</span><h3 className="mt-5 font-serif text-2xl">Dar o primeiro passo</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Aprender a validar, definir prioridades e construir um plano simples para avançar.</p></article>
            </div>
          </div>
        </section>
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-[11px] tracking-[.23em] text-bronze">MENTORIA EMPREENDEDORA</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">Não tens de fazer tudo sozinho.</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">Está em preparação um programa de mentoria prática e acessível, para pessoas de diferentes idades e percursos profissionais, com ou sem formação superior e com ou sem uma ideia de negócio definida. Se um projeto demonstrar potencial, uma eventual consultoria será sempre avaliada à parte.</p>
            <a href="mailto:geral@joaovaz.co?subject=Interesse%20na%20Mentoria%20Empreendedora" className="mt-9 inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background">MANIFESTAR INTERESSE →</a>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-6 py-10 md:px-12"><div className="mx-auto flex max-w-7xl justify-between gap-5 text-sm text-muted-foreground"><a href="/" className="hover:text-bronze">← Voltar ao site</a><span>João Vaz · joaovaz.co</span></div></footer>
    </div>
  );
}
