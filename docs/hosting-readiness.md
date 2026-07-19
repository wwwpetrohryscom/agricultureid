# Hosting readiness

This document states what is required to deploy AgricultureID and confirms the
current, deliberate deployment status.

## Deployment status

**AWAITING USER — Vercel project linking.**

The repository is deploy-ready but has **not** been deployed. By instruction, no
Vercel project has been created or linked, no CLI/token/deploy has been run, no
domain or DNS has been configured, and no sitemaps or IndexNow have been
submitted. The user will link the GitHub repository to Vercel manually via the
Git integration when ready.

## Build & output

- **Framework:** Next.js 15 (App Router, React 19), TypeScript strict.
- **Output:** static + serverless compatible. All content, hub, geo, tool, and
  comparison pages are prerendered (`○ Static` / `● SSG`); the only `noindex`
  route is `/compare/custom`.
- **Build command:** `npm run build` (runs `search:index` via `prebuild`, then
  `next build`). No environment variables are required to build; the canonical
  origin defaults to `https://agricultureid.com` and is overridable with
  `NEXT_PUBLIC_SITE_URL`.
- **Node:** ≥ 18.18 (see `engines`).

## Performance profile (static analysis of the production build)

- **Shared First Load JS:** ~102 kB (two chunks, ~46 kB + ~54 kB).
- **Per content page First Load JS:** ~106 kB; page-specific JS is a few hundred
  bytes (content is data-driven, server-rendered HTML).
- **Search index:** 866 documents, ~691 kB raw / ~96 kB gzipped, fetched
  client-side on demand (not part of initial load).
- **Sitemap:** a single static `/sitemap.xml` listing every indexable URL
  (~1,361) — not sharded (see `app/sitemap.ts`).
- No blocking third-party scripts; a strict CSP is compatible (see
  `next.config`). Images, when present, are self-hosted and licensed.

These are healthy figures for a content/reference site: the shared JS is modest,
every page is static HTML, and the heaviest asset (the search index) loads lazily.

## Pre-deployment checklist (for the user, when ready)

1. Link the GitHub repo to a Vercel project via the Git integration.
2. Framework preset: **Next.js**. Build command `npm run build`; install
   `npm install`. No env vars required (optionally set `NEXT_PUBLIC_SITE_URL`).
3. Verify the first production deployment renders the home page, a content page,
   a country/region page, a tool, and `/sitemap.xml` (the full sitemap — it must
   return 200 `application/xml`, not a 404).
4. Point the custom domain and configure DNS.
5. Submit `/sitemap.xml` to Search Console / Bing Webmaster (and IndexNow if
   used) — **only after** the user decides to.

## What is verified before hosting

- `tsc`, `next lint`, `content:validate` (0 errors/warnings), `vitest`, and
  `next build` all pass (CI: "Format, types, lint, content, tests, build").
- SEO audit (`npm run seo:audit`) and search benchmark
  (`npm run search:benchmark`) report zero errors and are enforced by tests.
- No secrets, tokens, or analytics keys are committed; the data snapshots are
  checksummed and licensed (World Bank WDI, CC BY 4.0).
