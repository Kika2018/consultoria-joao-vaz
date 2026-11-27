import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de privacidade | João Vaz" },
      { name: "description", content: "Informação sobre os dados pessoais recolhidos através do formulário de contacto de joaovaz.co." },
    ],
  }),
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground" id="top">
      <SiteNav />
      <main className="px-6 pb-20 pt-32 md:px-12 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>PRIVACIDADE</SectionLabel>
          <h1 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">Política de <span className="italic text-bronze">privacidade.</span></h1>
          <div className="mt-10 space-y-8 text-base leading-8 text-muted-foreground">
            <section>
              <h2 className="font-serif text-2xl text-foreground">Quem trata os teus dados</h2>
              <p className="mt-2">Sou João Vaz, responsável pelo contacto recebido através do site joaovaz.co. Podes contactar-me pelo endereço <a href="mailto:geral@joaovaz.co" className="underline underline-offset-4 hover:text-bronze">geral@joaovaz.co</a>.</p>
              <p className="mt-2">Informação de identificação adicional do responsável, caso aplicável: [PREENCHER].</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-foreground">Que dados recolho e porquê</h2>
              <p className="mt-2">Quando me envias um pedido pelo formulário, recebo o nome, o email, o motivo do contacto, a mensagem e, caso o indiques, o telefone. Utilizo esses dados apenas para analisar o teu pedido e responder-te. Não utilizo o formulário para subscreveres uma lista de marketing.</p>
              <p className="mt-2">O envio depende da tua aceitação expressa do tratamento dos dados para resposta ao pedido. Podes retirar esse consentimento através do contacto acima, sem afetar o tratamento realizado antes da retirada.</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-foreground">Como é processado o envio</h2>
              <p className="mt-2">Utilizo o serviço Formspree para receber e encaminhar os pedidos enviados pelo formulário. Os dados submetidos passam por esse serviço, de acordo com as suas condições e política de privacidade. Podes consultar a <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-bronze">política de privacidade do Formspree</a>. Os pedidos chegam ao endereço de email configurado no serviço.</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-foreground">Conservação e destinatários</h2>
              <p className="mt-2">Prazo de conservação dos pedidos: [PREENCHER]. Os dados podem ser tratados pelo serviço Formspree e pelos prestadores de email necessários para a resposta. Verificar os locais de tratamento, eventuais transferências internacionais e medidas aplicáveis antes da publicação: [PREENCHER].</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-foreground">Os teus direitos</h2>
              <p className="mt-2">Podes pedir acesso, retificação, apagamento ou limitação do tratamento dos teus dados, e exercer outros direitos aplicáveis, escrevendo para <a href="mailto:geral@joaovaz.co" className="underline underline-offset-4 hover:text-bronze">geral@joaovaz.co</a>. Também podes apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD).</p>
            </section>
          </div>
          <a href="/#contacto" className="mt-12 inline-flex items-center gap-2 border border-bronze px-7 py-4 text-xs tracking-editorial hover:bg-bronze hover:text-background">VOLTAR AO CONTACTO →</a>
        </div>
      </main>
      <footer className="border-t border-border px-6 py-8 md:px-12">
        <div className="mx-auto max-w-7xl text-sm text-muted-foreground">João Vaz · joaovaz.co</div>
      </footer>
    </div>
  );
}
