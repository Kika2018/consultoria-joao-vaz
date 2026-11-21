import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/mentoria")({
  head: () => ({
    meta: [
      { title: "Mentoria Empreendedora — Da Ideia à Ação | João Vaz" },
      { name: "description", content: "Projeto-piloto de mentoria empreendedora para 5 a 10 jovens dos 20 aos 35 anos, com ou sem ideias de negócio e independentemente da formação académica." },
      { property: "og:title", content: "Mentoria Empreendedora — João Vaz" },
      { property: "og:description", content: "Descobrir oportunidades. Estruturar ideias. Dar o primeiro passo." },
    ],
    links: [{rel: "canonical", href: "https://joaovaz.co/mentoria"}],
  }),
  component: MentoriaPage,
});

const etapas = [
  ["01", "Descobrir", "Identificar motivações, competências, problemas do dia a dia e oportunidades por explorar."],
  ["02", "Estruturar", "Dar forma a uma ideia, ou descobrir um caminho para desenvolver uma primeira oportunidade."],
  ["03", "Validar", "Ouvir pessoas reais, testar hipóteses e reduzir a incerteza antes de investir."],
  ["04", "Agir", "Sair com próximos passos claros e um plano de ação para 30 dias."],
];

function MentoriaPage() {
  const email = "geral@joaovaz.co";
  const assunto = encodeURIComponent("Interesse no projeto-piloto de Mentoria Empreendedora");
  const corpo = encodeURIComponent("Olá João,\n\nTenho interesse em saber mais sobre o projeto-piloto de Mentoria Empreendedora.\n\nNome:\nIdade:\nO que procuro nesta mentoria:\n\nObrigado.");
  const contacto = `mailto:${email}?subject=${assunto}&body=${corpo}`;
  return (
    <div className="min-h-screen bg-background text-foreground" id="top">
      <SiteNav/>
      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-48">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50" style={{background:"radial-gradient(ellipse 60% 70% at 80% 30%, #243a56 0%, transparent 75%)"}}/>
          <div className="relative mx-auto max-w-7xl">
            <p className="text-[11px] uppercase tracking-[.23em] text-bronze">DA IDEIA À AÇÃO · MENTORIA EMPREENDEDORA</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.1rem,7vw,6.5rem)] leading-[1.04] tracking-tight">Não precisas de ter uma ideia.<br/><em className="text-bronze">Precisas de começar.</em></h1>
            <p className="mt-9 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">Tens entre 20 e 35 anos e gostavas de criar algo teu, explorar oportunidades ou desenvolver uma mentalidade empreendedora? Este espaço é para ti — com ou sem licenciatura, com ou sem uma ideia definida.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={contacto} className="inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background hover:opacity-90">QUERO SABER MAIS →</a>
              <a href="#como-funciona" className="inline-flex min-h-14 items-center border border-bronze px-7 text-xs tracking-wider text-foreground hover:bg-bronze hover:text-background">COMO FUNCIONA ↓</a>
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-20 md:px-12 md:py-28" id="como-funciona">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] tracking-[.23em] text-bronze">PROJETO-PILOTO</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl">5 a 10 jovens.<br/><em className="text-bronze">Um primeiro passo real.</em></h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground">Acompanhamento próximo e acessível, com uma contribuição simbólica. O valor e o formato final serão comunicados antes das inscrições, sem compromisso nesta fase de manifestação de interesse.</p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {etapas.map(([n,title,body])=><article key={n} className="border-t border-bronze/50 pt-6"><p className="font-serif text-3xl text-bronze">{n}</p><h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p></article>)}
            </div>
          </div>
        </section>
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-[11px] tracking-[.23em] text-bronze">PARA QUEM</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">Não é o diploma que define o teu ponto de partida.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>Para jovens adultos que querem experimentar, aprender a reconhecer oportunidades, pensar como empreendedores ou desenvolver uma ideia que já têm.</p>
              <p>Não tens de criar uma empresa nem de chegar com um plano de negócios. O objetivo é ganhar clareza e capacidade de ação, sem promessas fáceis de sucesso.</p>
              <p>Se um projeto demonstrar potencial e existir interesse mútuo, poderá ser avaliada uma proposta de consultoria profissional separada da mentoria — com condições próprias e respeito pela autoria das ideias.</p>
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="text-[11px] tracking-[.23em] text-bronze">MANIFESTAÇÃO DE INTERESSE</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">Tens vontade de avançar?</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">Esta é uma primeira fase de interesse no projeto-piloto, não uma inscrição definitiva. Envia-me uma breve apresentação e o que gostavas de explorar.</p>
            <a href={contacto} className="mt-9 inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background">CONTACTAR SOBRE A MENTORIA →</a>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">Ao clicar, abre o teu programa de email. Nenhum dado é recolhido diretamente por esta página.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-6 py-10 md:px-12"><div className="mx-auto flex max-w-7xl justify-between gap-5 text-sm text-muted-foreground"><a href="/" className="hover:text-bronze">← Voltar ao site</a><span>João Vaz · joaovaz.co</span></div></footer>
    </div>
  );
}
