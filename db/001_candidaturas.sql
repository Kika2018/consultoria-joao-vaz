-- Dados pessoais: acesso apenas na conta Cloudflare do proprietário.
CREATE TABLE IF NOT EXISTS candidaturas (
  id TEXT PRIMARY KEY,
  criada_em TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  estado TEXT NOT NULL DEFAULT 'Recebida'
    CHECK (estado IN ('Recebida','Em análise','Selecionada','Lista de espera','Não selecionada')),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  idade INTEGER NOT NULL,
  situacao TEXT NOT NULL,
  formacao TEXT,
  tem_ideia TEXT NOT NULL,
  descricao_ideia TEXT,
  fase_ideia TEXT,
  experiencia TEXT NOT NULL,
  experiencia_detalhe TEXT,
  ia TEXT NOT NULL,
  uso_ia TEXT,
  motivacao TEXT NOT NULL,
  desafio TEXT NOT NULL,
  disponibilidade TEXT NOT NULL,
  horario_preferido TEXT NOT NULL,
  origem TEXT NOT NULL,
  consentimento_informativo INTEGER NOT NULL DEFAULT 1,
  consentimento_marketing INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_candidaturas_data ON candidaturas(criada_em DESC);
CREATE INDEX IF NOT EXISTS idx_candidaturas_estado ON candidaturas(estado);
