# Deploy — Cloudflare Workers (joaovaz.co)

This project is a TanStack Start app targeting **Cloudflare Workers** (SSR + server functions). Deployment is automated from GitHub via `.github/workflows/deploy.yml`.

## 1. One-time Cloudflare setup

1. Create a Cloudflare account (free tier is enough) and note your **Account ID** (Workers & Pages → right sidebar).
2. Create an API token: **My Profile → API Tokens → Create Token → "Edit Cloudflare Workers"** template. Copy the token.
3. Add `joaovaz.co` as a zone in Cloudflare (Add a Site) and update your registrar's nameservers to the ones Cloudflare provides. Wait for the zone to go active.

## 2. GitHub secrets

In the GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**:

- `CLOUDFLARE_API_TOKEN` — the token from step 1.2
- `CLOUDFLARE_ACCOUNT_ID` — the Account ID from step 1.1

## 3. First deploy

Push to `main` (or run the workflow manually from the **Actions** tab). The workflow installs deps, runs `bun run build`, and runs `wrangler deploy`. The Worker is named `joaovaz-co` (see `wrangler.jsonc`).

After the first successful deploy you'll have a URL like `https://joaovaz-co.<your-subdomain>.workers.dev`.

## 4. Bind the custom domain `joaovaz.co`

In the Cloudflare dashboard: **Workers & Pages → joaovaz-co → Settings → Domains & Routes → Add → Custom Domain**.

- Add `joaovaz.co`
- Add `www.joaovaz.co` (optional, for the www variant)

Cloudflare creates the DNS records and provisions SSL automatically. No manual DNS edits needed as long as the zone is on Cloudflare.

The repo's `CNAME` file is only relevant for GitHub Pages and is ignored by Cloudflare Workers — safe to leave or delete.

## Notes

- No code, design, content, or functionality changes were made. Only `wrangler.jsonc` (worker name + observability) and the GitHub Actions workflow were added.
- Local dev is unchanged: `bun dev`.
- To deploy manually from your machine: `bunx wrangler login && bunx wrangler deploy`.
