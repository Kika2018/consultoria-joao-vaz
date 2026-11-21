import { createFileRoute } from "@tanstack/react-router";
export const Route=createFileRoute("/privacidade")({
  head:()=>({meta:[{title:"Privacidade — Candidaturas Mentoria | João Vaz"},{name:"description",content:"Informação sobre o tratamento dos dados pessoais fornecidos na candidatura à Mentoria Empreendedora."}]}),
  component:Privacidade
});
function Privacidade(){
  return <div className="min-h-screen bg-background px-6 py-20 text-foreground md:px-12">
    <main className="mx-auto max-w-3xl">
      <a href="/mentoria#candidatura" className="text-sm text-bronze">← Voltar à candidatura</a>
      <p className="mt-12 text-xs tracking-[.23em] text-bronze">INFORMAÇÃO DE PRIVACIDADE</p>
      <h1 className="mt-5 font-serif text-4xl md:text-5xl">Os teus dados, com respeito.</h1>
      <div className="mt-9 space-y-6 text-base leading-8 text-muted-foreground">
        <p><strong className="text-foreground">Responsável pelo tratamento:</strong> João Vaz. Contacto: <a href="mailto:geral@joaovaz.co" className="text-bronze underline">geral@joaovaz.co</a>.</p>
        <p><strong className="text-foreground">Finalidade:</strong> receber, organizar, analisar e responder às candidaturas ao projeto-piloto de Mentoria Empreendedora, incluindo contacto com candidatos selecionados e não selecionados. O preenchimento é voluntário, mas os campos assinalados são necessários para avaliar a candidatura.</p>
        <p><strong className="text-foreground">Base legal:</strong> diligências prévias solicitadas pelo candidato e, quando aplicável, o consentimento que assinala expressamente. O envio de futuras comunicações sobre iniciativas e conteúdos é inteiramente opcional e tem consentimento separado.</p>
        <p><strong className="text-foreground">Que dados:</strong> identificação e email, idade, percurso académico e profissional, ideias e experiência empreendedora, utilização de IA, motivação, desafios, disponibilidade e origem da candidatura. Evita escrever informações confidenciais ou dados sensíveis.</p>
        <p><strong className="text-foreground">Acesso e armazenamento:</strong> as respostas ficam guardadas numa base de dados alojada na Cloudflare, acessível apenas a pessoas autorizadas pelo responsável. Não são apresentadas publicamente nem existe uma seleção automatizada.</p>
        <p><strong className="text-foreground">Conservação:</strong> os dados das candidaturas não selecionadas destinam-se a ser eliminados até 90 dias após a comunicação dos resultados, salvo obrigação legal ou pedido de conservação autorizado. Os dados dos participantes selecionados podem ser conservados durante a execução do programa e pelos prazos legais aplicáveis. O consentimento opcional para futuras comunicações pode ser retirado a qualquer momento.</p>
        <p><strong className="text-foreground">Direitos:</strong> podes pedir acesso, correção, apagamento, limitação, oposição quando aplicável e retirada de consentimento, através do email indicado. Tens também direito a apresentar reclamação à CNPD.</p>
        <p><strong className="text-foreground">Prestadores:</strong> a infraestrutura técnica utiliza a Cloudflare. O processamento e armazenamento estão sujeitos às condições de proteção de dados do prestador, incluindo as garantias aplicáveis a transferências internacionais.</p>
      </div>
      <a href="/mentoria#candidatura" className="mt-10 inline-flex border border-bronze px-6 py-4 text-xs tracking-wider text-foreground">VOLTAR À CANDIDATURA →</a>
    </main>
  </div>;
}
