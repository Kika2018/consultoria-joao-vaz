import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/empreendedorismo")({
  head: () => ({
    meta: [
      { title: "Empreendedorismo e Mentoria | João Vaz" },
      { name: "description", content: "Ajudo-te a explorar oportunidades, questionar uma ideia e preparar um primeiro teste. Mentoria online de empreendedorismo." },
      { property: "og:title", content: "Empreendedorismo — João Vaz" },
      { property: "og:description", content: "Ajudo-te a explorar oportunidades, testar ideias e dar o primeiro passo." }
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
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3rem,6.5vw,6.3rem)] leading-[1.05]">Queres testar uma ideia? <em className="text-bronze">Vamos conversar.</em></h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">Ajudo-te a explorar oportunidades, a compreender melhor uma ideia e a preparar um primeiro teste. Se ainda não tens uma ideia definida, podemos começar por observar problemas e necessidades reais.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="/#contacto" className="inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background">QUERO SABER MAIS SOBRE A MENTORIA →</a>
              <a href="/ebook" className="inline-flex min-h-14 items-center border border-bronze px-7 text-xs tracking-wider text-foreground">EXPLORAR O EBOOK →</a>
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] tracking-[.23em] text-bronze">COMO PODES COMEÇAR</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl">Da vontade à <em className="text-bronze">ação.</em></h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <article className="border-t border-bronze/50 pt-6"><span className="font-serif text-3xl text-bronze">01</span><h3 className="mt-5 font-serif text-2xl">Descobrir oportunidades</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Vamos explorar os teus interesses e observar problemas reais que possam merecer atenção.</p></article>
              <article className="border-t border-bronze/50 pt-6"><span className="font-serif text-3xl text-bronze">02</span><h3 className="mt-5 font-serif text-2xl">Estruturar ideias</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Ajudo-te a esclarecer uma ideia, perceber quem poderá beneficiar dela e formular hipóteses a testar.</p></article>
              <article className="border-t border-bronze/50 pt-6"><span className="font-serif text-3xl text-bronze">03</span><h3 className="mt-5 font-serif text-2xl">Dar o primeiro passo</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">Vamos preparar um primeiro teste, organizar prioridades e pensar no passo seguinte.</p></article>
            </div>
          </div>
        </section>
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-[11px] tracking-[.23em] text-bronze">MENTORIA EMPREENDEDORA</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">Não precisas de começar sem orientação.</h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">Estou a preparar uma mentoria online em pequenos grupos, para pessoas adultas, com ou sem uma ideia de negócio definida. Vamos trabalhar oportunidades, IKIGAI, conversas com potenciais clientes, Business Model Canvas, um primeiro teste e ferramentas de IA. Os horários serão definidos antes da abertura de inscrições.</p>
            <a href="/#contacto" className="mt-9 inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background">FAZER UMA PERGUNTA →</a>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-6 py-10 md:px-12"><div className="mx-auto flex max-w-7xl justify-between gap-5 text-sm text-muted-foreground"><a href="/" className="hover:text-bronze">← Voltar à página inicial</a><span>João Vaz · joaovaz.co · <a href="/politica-de-privacidade" className="underline-offset-4 hover:text-bronze hover:underline">Política de privacidade</a></span></div></footer>
    </div>
  );
}
