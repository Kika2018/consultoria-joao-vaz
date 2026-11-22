import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/mentoria")({
  head: () => ({
    meta: [
      { title: "Mentoria Empreendedora — Da Ideia à Ação | João Vaz" },
      { name: "description", content: "Projeto-piloto de mentoria empreendedora para 5 a 10 participantes adultos, com ou sem ideias de negócio e independentemente da formação académica." },
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

type Candidatura = {
  nome: string; email: string; idade: string; situacao: string; formacao: string;
  temIdeia: string; descricaoIdeia: string; faseIdeia: string; experiencia: string;
  experienciaDetalhe: string; ia: string; usoIa: string; motivacao: string;
  desafio: string; disponibilidade: string; horarioPreferido: string; origem: string;
};
const camposIniciais: Candidatura = {
  nome:"",email:"",idade:"",situacao:"",formacao:"",temIdeia:"",descricaoIdeia:"",faseIdeia:"",
  experiencia:"",experienciaDetalhe:"",ia:"",usoIa:"",motivacao:"",desafio:"",disponibilidade:"",horarioPreferido:"",origem:""
};
const fieldClass = "mt-2 block w-full rounded-none border border-bronze/30 bg-background px-4 py-3 text-base text-foreground outline-none focus:border-bronze focus:ring-1 focus:ring-bronze";
const labelClass = "block text-sm font-medium text-foreground";
function MentoriaPage() {
  const [dados,setDados] = useState<Candidatura>(camposIniciais);
  const [privacidade,setPrivacidade] = useState(false);
  const [comunicacoes,setComunicacoes] = useState(false);
  const [estadoEnvio,setEstadoEnvio] = useState<"inicial"|"aEnviar"|"sucesso"|"erro">("inicial");
  const [mensagemEnvio,setMensagemEnvio] = useState("");
  const [website,setWebsite] = useState("");
  const setCampo = (campo:keyof Candidatura,valor:string) => setDados(d=>({...d,[campo]:valor}));
  const submeter = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacidade || estadoEnvio === "aEnviar") return;
    setEstadoEnvio("aEnviar");
    setMensagemEnvio("");
    try {
      const res = await fetch("/api/candidaturas",{
        method:"POST",headers:{"content-type":"application/json"},
        body:JSON.stringify({...dados,privacidade,comunicacoes,website})
      });
      const resposta = await res.json() as {message?:string};
      if (!res.ok) throw new Error(resposta.message || "Não foi possível enviar a candidatura.");
      setEstadoEnvio("sucesso");
      setMensagemEnvio("Candidatura recebida! A seleção é manual; receberás uma resposta após a análise.");
      setDados(camposIniciais);
      setPrivacidade(false);
      setComunicacoes(false);
    } catch (erro) {
      setEstadoEnvio("erro");
      setMensagemEnvio(erro instanceof Error ? erro.message : "Ocorreu um erro. Tenta novamente.");
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground" id="top">
      <header className="absolute inset-x-0 top-0 z-20 px-6 py-6 md:px-12 md:py-8"><div className="mx-auto flex max-w-7xl items-center justify-between"><a href="/" className="font-serif text-lg tracking-[.18em] text-foreground">JOÃO VAZ</a><span className="text-[10px] tracking-[.18em] text-bronze">DA IDEIA À AÇÃO</span></div></header>
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-48">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-50" style={{background:"radial-gradient(ellipse 60% 70% at 80% 30%, #243a56 0%, transparent 75%)"}}/>
          <div className="relative mx-auto max-w-7xl">
            <p className="text-[11px] uppercase tracking-[.23em] text-bronze">DA IDEIA À AÇÃO · MENTORIA EMPREENDEDORA</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.1rem,7vw,6.5rem)] leading-[1.04] tracking-tight">Não precisas de ter uma ideia.<br/><em className="text-bronze">Precisas de começar.</em></h1>
            <p className="mt-9 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">Gostavas de criar algo teu, descobrir oportunidades ou desenvolver uma mentalidade empreendedora? O teu percurso académico não é uma barreira.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs tracking-wider text-bronze">
              <span className="border border-bronze/40 px-3 py-2">CANDIDATURAS ATÉ 10 JAN 2027</span>
              <span className="border border-bronze/40 px-3 py-2">5 A 10 PARTICIPANTES</span>
              <span className="border border-bronze/40 px-3 py-2">VALOR SIMBÓLICO A DEFINIR</span>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#candidatura" className="inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background hover:opacity-90">QUERO CANDIDATAR-ME →</a>
              <a href="#como-funciona" className="inline-flex min-h-14 items-center border border-bronze px-7 text-xs tracking-wider text-foreground hover:bg-bronze hover:text-background">COMO FUNCIONA ↓</a>
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-20 md:px-12 md:py-28" id="como-funciona">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] tracking-[.23em] text-bronze">O PROGRAMA</p>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl">Uma oportunidade para <em className="text-bronze">avançar.</em></h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground">Acompanhamento prático e próximo. Não precisas de ter uma empresa, uma ideia fechada ou formação superior. O objetivo é construir clareza, capacidade de iniciativa e um plano de ação.</p>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">{etapas.map(([n,title,body])=><article key={n} className="border-t border-bronze/50 pt-6"><p className="font-serif text-3xl text-bronze">{n}</p><h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p></article>)}</div>
          </div>
        </section>
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-16">
            <div><p className="text-[11px] tracking-[.23em] text-bronze">COMO FUNCIONA A SELEÇÃO</p><h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">A vontade de avançar conta mais do que a idade.</h2></div>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>Todas as candidaturas serão analisadas individualmente por João Vaz. A seleção dos 5 a 10 participantes não é automática: valorizamos a motivação, a curiosidade e a disponibilidade para agir.</p>
              <p>As candidaturas encerram a 10 de janeiro de 2027. A análise está prevista para 11 a 17 de janeiro e a comunicação aos selecionados para 18 a 20 de janeiro.</p>
              <p>O valor simbólico e as condições serão comunicados antes da confirmação de participação. Eventual consultoria futura será sempre independente e sujeita a acordo.</p>
            </div>
          </div>
        </section>
        <section className="bg-ink px-6 py-20 md:px-12 md:py-28" id="candidatura">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] tracking-[.23em] text-bronze">CANDIDATURA · PROJETO-PILOTO</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">Conta-me um pouco sobre ti.</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">Não há respostas certas nem erradas. Quero perceber o teu ponto de partida e o que procuras. A candidatura não garante seleção.</p>
            <form onSubmit={submeter} className="mt-10 space-y-9">
              <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="c-website">Não preencher</label><input id="c-website" tabIndex={-1} autoComplete="off" value={website} onChange={e=>setWebsite(e.target.value)}/></div>
              <fieldset className="space-y-5 border-t border-bronze/50 pt-7">
                <legend className="pr-3 font-serif text-2xl">01 · Quem és</legend>
                <div><label htmlFor="c-nome" className={labelClass}>Nome completo *</label><input id="c-nome" required maxLength={120} autoComplete="name" className={fieldClass} value={dados.nome} onChange={e=>setCampo("nome",e.target.value)} /></div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div><label htmlFor="c-email" className={labelClass}>Email *</label><input type="email" id="c-email" required autoComplete="email" className={fieldClass} value={dados.email} onChange={e=>setCampo("email",e.target.value)}/></div>
                  <div><label htmlFor="c-idade" className={labelClass}>Idade *</label><input id="c-idade" type="number" required min={18} max={120} className={fieldClass} value={dados.idade} onChange={e=>setCampo("idade",e.target.value)}/></div>
                </div>
                <div><label htmlFor="c-situacao" className={labelClass}>O que fazes atualmente? *</label><select id="c-situacao" required className={fieldClass} value={dados.situacao} onChange={e=>setCampo("situacao",e.target.value)}><option value="">Seleciona uma opção</option>{["Estudo","Trabalho por conta de outrem","Trabalho por conta própria","Procuro emprego","Estudo e trabalho","Outra situação"].map(x=><option key={x}>{x}</option>)}</select></div>
                <div><label htmlFor="c-formacao" className={labelClass}>Percurso académico (opcional)</label><select id="c-formacao" className={fieldClass} value={dados.formacao} onChange={e=>setCampo("formacao",e.target.value)}><option value="">Prefiro não indicar</option>{["Até ao 9.º ano","Secundário incompleto","Secundário concluído","Ensino profissional","Licenciatura em curso","Licenciatura concluída","Pós-graduação / mestrado","Outro"].map(x=><option key={x}>{x}</option>)}</select></div>
              </fieldset>
              <fieldset className="space-y-5 border-t border-bronze/50 pt-7">
                <legend className="pr-3 font-serif text-2xl">02 · Ideias e experiência</legend>
                <div><label htmlFor="c-ideia" className={labelClass}>Tens atualmente uma ideia de negócio? *</label><select id="c-ideia" required className={fieldClass} value={dados.temIdeia} onChange={e=>setCampo("temIdeia",e.target.value)}><option value="">Seleciona uma opção</option><option>Sim, tenho uma ideia definida</option><option>Tenho algumas ideias, mas nada estruturado</option><option>Não, quero descobrir oportunidades</option></select></div>
                {dados.temIdeia && !dados.temIdeia.startsWith("Não") && <div className="space-y-5"><div><label htmlFor="c-descricao" className={labelClass}>Que ideia ou problema gostavas de explorar? (sem detalhes confidenciais)</label><textarea id="c-descricao" rows={3} maxLength={800} className={fieldClass} value={dados.descricaoIdeia} onChange={e=>setCampo("descricaoIdeia",e.target.value)}/></div><div><label htmlFor="c-fase" className={labelClass}>Em que fase está a tua ideia?</label><select id="c-fase" className={fieldClass} value={dados.faseIdeia} onChange={e=>setCampo("faseIdeia",e.target.value)}><option value="">Seleciona uma opção</option>{["Só na minha cabeça","Já falei com potenciais clientes","Já fiz testes ou um protótipo","Já tenho clientes ou vendas"].map(x=><option key={x}>{x}</option>)}</select></div></div>}
                <div><label htmlFor="c-experiencia" className={labelClass}>Já tiveste alguma experiência empreendedora? *</label><select id="c-experiencia" required className={fieldClass} value={dados.experiencia} onChange={e=>setCampo("experiencia",e.target.value)}><option value="">Seleciona uma opção</option>{["Nunca, mas tenho curiosidade","Já tentei lançar uma ideia","Já vendi um produto ou serviço por iniciativa própria","Já criei ou participei num negócio"].map(x=><option key={x}>{x}</option>)}</select></div>
                {dados.experiencia && dados.experiencia!=="Nunca, mas tenho curiosidade" && <div><label htmlFor="c-detalhe" className={labelClass}>O que aprendeste com essa experiência? (opcional)</label><textarea id="c-detalhe" rows={3} maxLength={700} className={fieldClass} value={dados.experienciaDetalhe} onChange={e=>setCampo("experienciaDetalhe",e.target.value)}/></div>}
              </fieldset>
              <fieldset className="space-y-5 border-t border-bronze/50 pt-7">
                <legend className="pr-3 font-serif text-2xl">03 · IA e aprendizagem</legend>
                <div><label htmlFor="c-ia" className={labelClass}>Qual é a tua experiência com inteligência artificial? *</label><select id="c-ia" required className={fieldClass} value={dados.ia} onChange={e=>setCampo("ia",e.target.value)}><option value="">Seleciona uma opção</option>{["Ainda não utilizo","Utilizo ocasionalmente","Utilizo frequentemente para estudar ou trabalhar","Já utilizo IA em projetos ou negócios"].map(x=><option key={x}>{x}</option>)}</select></div>
                <div><label htmlFor="c-usoia" className={labelClass}>Como utilizas ou gostarias de utilizar IA? (opcional)</label><textarea id="c-usoia" rows={3} maxLength={600} className={fieldClass} value={dados.usoIa} onChange={e=>setCampo("usoIa",e.target.value)}/></div>
              </fieldset>
              <fieldset className="space-y-5 border-t border-bronze/50 pt-7">
                <legend className="pr-3 font-serif text-2xl">04 · Motivação e compromisso</legend>
                <div><label htmlFor="c-motivacao" className={labelClass}>Porque te queres candidatar a esta mentoria? *</label><textarea id="c-motivacao" required minLength={30} maxLength={1200} rows={4} className={fieldClass} placeholder="O que gostavas de descobrir, aprender ou conseguir fazer?" value={dados.motivacao} onChange={e=>setCampo("motivacao",e.target.value)}/></div>
                <div><label htmlFor="c-desafio" className={labelClass}>O que te impede, neste momento, de avançar? *</label><select id="c-desafio" required className={fieldClass} value={dados.desafio} onChange={e=>setCampo("desafio",e.target.value)}><option value="">Seleciona uma opção</option>{["Não sei que ideia escolher","Falta-me confiança ou orientação","Não sei como testar uma ideia","Falta-me tempo ou organização","Falta-me conhecimento ou recursos","Outro motivo"].map(x=><option key={x}>{x}</option>)}</select></div>
                <div><label htmlFor="c-disp" className={labelClass}>Consegues dedicar tempo à mentoria e realizar pequenas tarefas entre sessões? *</label><select id="c-disp" required className={fieldClass} value={dados.disponibilidade} onChange={e=>setCampo("disponibilidade",e.target.value)}><option value="">Seleciona uma opção</option>{["Sim, tenho disponibilidade","Depende dos horários","Ainda preciso de avaliar"].map(x=><option key={x}>{x}</option>)}</select></div>
                <div><label htmlFor="c-horario" className={labelClass}>Qual o horário que preferes para as sessões online? *</label><select id="c-horario" required className={fieldClass} value={dados.horarioPreferido} onChange={e=>setCampo("horarioPreferido",e.target.value)}><option value="">Seleciona uma opção</option>{["Dias úteis, 19h00–21h00","Dias úteis, 20h00–22h00","Sábado, 10h00–12h00","Tenho flexibilidade para qualquer uma destas opções"].map(x=><option key={x}>{x}</option>)}</select><p className="mt-2 text-xs text-muted-foreground">A preferência é indicativa. O horário definitivo será comunicado antes da confirmação da participação.</p></div>
                <div><label htmlFor="c-origem" className={labelClass}>Onde soubeste deste projeto? *</label><select id="c-origem" required className={fieldClass} value={dados.origem} onChange={e=>setCampo("origem",e.target.value)}><option value="">Seleciona uma opção</option>{["Instagram — anúncio","Instagram — publicação / partilha","Facebook — anúncio","Facebook — publicação / partilha","Recomendação de alguém","Outro canal"].map(x=><option key={x}>{x}</option>)}</select></div>
              </fieldset>
              <div className="space-y-4 border-t border-bronze/50 pt-7 text-sm leading-6 text-muted-foreground">
                <label className="flex items-start gap-3"><input type="checkbox" required checked={privacidade} onChange={e=>setPrivacidade(e.target.checked)} className="mt-1 accent-[#A8874A]"/><span>Li a <a href="/privacidade" target="_blank" rel="noopener noreferrer" className="text-bronze underline">informação de privacidade</a> e compreendo que os dados serão utilizados para avaliar e responder à minha candidatura. *</span></label>
                <label className="flex items-start gap-3"><input type="checkbox" checked={comunicacoes} onChange={e=>setComunicacoes(e.target.checked)} className="mt-1 accent-[#A8874A]"/><span>Gostaria de receber futuras informações sobre iniciativas e conteúdos de João Vaz. (Opcional; não influencia a seleção.)</span></label>
                <p className="text-xs">As candidaturas são analisadas pessoalmente por João Vaz, sem seleção automática. Não incluas informações confidenciais da tua ideia no formulário.</p>
              </div>
              <div className="border border-bronze/40 bg-background/70 p-5">
                <p className="text-sm font-semibold text-foreground">Antes de enviares</p>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">A candidatura é gratuita e não garante participação. As respostas ficam guardadas numa base de dados privada e serão analisadas pessoalmente por João Vaz.</p>
                <button type="submit" disabled={estadoEnvio === "aEnviar"} className="mt-5 inline-flex min-h-14 items-center border border-bronze bg-bronze px-7 text-xs font-semibold tracking-wider text-background disabled:opacity-50">{estadoEnvio === "aEnviar" ? "A ENVIAR..." : "ENVIAR CANDIDATURA →"}</button>
                {mensagemEnvio && <p role="status" aria-live="polite" className={`mt-3 text-sm ${estadoEnvio==="erro"?"text-red-400":"text-foreground"}`}>{mensagemEnvio}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-6 py-10 md:px-12"><div className="mx-auto flex max-w-7xl justify-between gap-5 text-sm text-muted-foreground"><a href="/" className="hover:text-bronze">← Voltar ao site</a><span>João Vaz · joaovaz.co</span></div></footer>
    </div>
  );
}
