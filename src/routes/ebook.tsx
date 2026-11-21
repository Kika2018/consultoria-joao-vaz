import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";

const bookUrl = "/da-ideia-a-acao.pdf";

export const Route = createFileRoute("/ebook")({
  head: () => ({
    meta: [
      { title: "Da Ideia à Ação — eBook gratuito | João Vaz" },
      { name: "description", content: "Um guia prático e gratuito de João Vaz sobre decisões, comunicação, empatia, pensamento empreendedor e inteligência artificial aplicada." },
      { property: "og:title", content: "Da Ideia à Ação — João Vaz" },
      { property: "og:description", content: "Pensar melhor, compreender pessoas e transformar conhecimento em resultados. eBook gratuito com exercícios práticos." },
      { property: "og:type", content: "book" },
      { property: "og:url", content: "https://joaovaz.co/ebook" },
    ],
    links: [{ rel: "canonical", href: "https://joaovaz.co/ebook" }],
  }),
  component: EbookPage,
});

function EbookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" id="top">
      <SiteNav />
      <main>
        <section className="px-6 pb-12 pt-24 md:px-12 md:pb-16 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_0.8fr] md:gap-14">
            <div>
              <p className="mb-3 text-[11px] tracking-[0.25em] text-bronze">EBOOK GRATUITO · JOÃO VAZ</p>
              <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">Da Ideia<br /><em className="text-bronze">à Ação.</em></h1>
              <p className="mt-5 max-w-xl font-serif text-xl leading-snug md:text-2xl">Pensar melhor, compreender pessoas e transformar conhecimento em resultados.</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">Um guia com reflexões, experiências profissionais e exercícios para quem quer passar das boas ideias à aplicação prática — no trabalho, nas equipas e nos projetos.</p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <a href={bookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background transition-opacity hover:opacity-90">LER O EBOOK GRATUITAMENTE ↗</a>
                <span className="text-sm text-muted-foreground">40 páginas · Acesso gratuito</span>
              </div>
              <p className="mt-4 max-w-lg text-xs leading-relaxed text-muted-foreground">A leitura abre diretamente em PDF, numa nova aba. Podes ler online ou guardar o ficheiro, sem criar conta.</p>
            </div>
            <div className="flex justify-center">
              <div className="relative flex aspect-[148/210] w-full max-w-[290px] flex-col bg-[#0D1B2A] px-9 pb-9 pt-12 shadow-[0_30px_70px_rgba(0,0,0,0.3)] md:px-11">
                <p className="text-sm tracking-wider text-[#F5F0EB]">João Vaz</p>
                <span className="mt-10 h-px w-16 bg-[#A8874A]"/>
                <div className="flex flex-1 flex-col justify-center">
                  <span className="font-serif text-6xl leading-[.99] text-[#F5F0EB] md:text-7xl">Da Ideia<br/>à Ação</span>
                </div>
                <p className="text-[13px] leading-5 text-[#F5F0EB]">Pensar melhor, compreender pessoas e transformar conhecimento em resultados.</p>
                <span className="mt-9 h-px w-12 bg-[#A8874A]"/>
                <p className="mt-5 text-[10px] tracking-[0.1em] text-[#A8874A]">PESSOAS PRIMEIRO · APLICAÇÃO IMEDIATA</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] tracking-[0.25em] text-bronze">O QUE VAIS ENCONTRAR</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">Conhecimento que se transforma em <em className="text-bronze">ação.</em></h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                ["01","Pensar antes de agir","Fazer melhores perguntas, reduzir incerteza e tomar decisões com critério."],
                ["02","Ouvir e comunicar","Empatia, confiança e relações profissionais mais relevantes."],
                ["03","Executar com propósito","Pensamento empreendedor, IA aplicada e um plano de ação de 30 dias."],
              ].map(([n,title,body]) => (
                <article key={n} className="border-t border-bronze/50 pt-6">
                  <span className="font-serif text-2xl text-bronze">{n}</span>
                  <h3 className="mt-5 font-serif text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 py-20 md:px-12 md:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-[11px] tracking-[0.2em] text-bronze">DA LEITURA À PRÁTICA</p>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl">O próximo passo é teu.</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">Lê ao teu ritmo e experimenta os exercícios no teu contexto profissional.</p>
            </div>
            <a href={bookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center border border-bronze px-7 text-xs tracking-wider transition-colors hover:bg-bronze hover:text-background">ABRIR O EBOOK ↗</a>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-5 text-sm text-muted-foreground"><a href="/" className="hover:text-bronze">← Voltar ao site</a><span>João Vaz · joaovaz.co</span></div>
      </footer>
    </div>
  );
}
