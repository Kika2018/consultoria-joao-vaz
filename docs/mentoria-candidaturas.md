# Configuração do piloto — Mentoria Empreendedora

A implementação do formulário encontra-se apenas na branch `preview/mentoria-empreendedora`, não no site principal.

## Infraestrutura
- Workflow: `.github/workflows/preview-mentoria.yml`
- Base de dados isolada para ensaios: `joaovaz-mentoria-candidaturas-teste`, Cloudflare D1
- Credencial D1 guardada como GitHub Actions secret: `CLOUDFLARE_D1_API_TOKEN`
- Segredo de publicação do Worker: `CLOUDFLARE_API_TOKEN`
- Esquema de tabelas: `db/001_candidaturas.sql`
- Endpoint: `POST /api/candidaturas`
- Os dados pessoais **não** devem ser expostos em endpoints públicos nem em logs.

## Antes do lançamento
- Verificar que as candidaturas são guardadas efetivamente em D1.
- Implementar acesso autenticado para avaliação do responsável.
- Rever privacidade, retenção e consentimentos.
- Implementar proteção adicional contra abuso e submissões automatizadas.
- Configurar base de dados de produção distinta da de testes.
- Não publicar a landing page com formulário de candidatura antes destes testes.
