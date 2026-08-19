# Hosting readiness

This document states what is required to deploy AgricultureID and confirms the
current, deliberate deployment status.

## Deployment status

**AWAITING USER — Netlify site creation.**

The repository is Netlify-ready. No Netlify site has been created or linked, no
CLI/token/deploy has been run, no DNS has been changed, and no sitemaps or
IndexNow have been submitted. The user will import the GitHub repository into
Netlify manually via the Git integration when ready.

Hosting previously targeted Vercel. The migration is repository-side only and is
fully reversible — see
[`netlify-deployment.md`](netlify-deployment.md) for build settings, the
environment-variable table, the DNS sequence, and the rollback plan.

## Build & output

- **Framework:** Next.js 15 (App Router, React 19), TypeScript strict.
- **Output:** static + serverless compatible. All content, hub, geo, tool, and
  comparison pages are prerendered (`○ Static` / `● SSG`); the only `noindex`
  route is `/compare/custom`.
- **Build command:** `npm run build` (runs `search:index` via `prebuild`, then
  `next build`). No environment variables are required to build; the canonical
  origin defaults to `https://agricultureid.com` and is overridable with
  `NEXT_PUBLIC_SITE_URL`.
- **Node:** ≥ 18.18 (see `engines`); pinned to 20 for CI and hosting via
  `.nvmrc`.

## Performance profile (static analysis of the production build)

- **Shared First Load JS:** ~102 kB (two chunks, ~46 kB + ~54 kB).
- **Per content page First Load JS:** ~106 kB; page-specific JS is a few hundred
  bytes (content is data-driven, server-rendered HTML).
- **Search index:** 1,298 documents, ~1,068 kB raw / ~150 kB gzipped, fetched
  client-side on demand (not part of initial load).
- **Sitemap:** a single static `/sitemap.xml` listing every indexable URL
  (~1,361) — not sharded (see `app/sitemap.ts`).
- No blocking third-party scripts; a strict CSP is compatible (see
  `next.config`). Images, when present, are self-hosted and licensed.

These are healthy figures for a content/reference site: the shared JS is modest,
every page is static HTML, and the heaviest asset (the search index) loads lazily.

## Pre-deployment checklist (for the user, when ready)

1. Import the GitHub repo into Netlify via the Git integration.
2. Accept the auto-detected Next.js settings. Build command `npm run build`;
   leave the publish directory **blank**. No env vars required — leave
   `NEXT_PUBLIC_SITE_URL` unset so previews emit production canonicals.
3. Verify the first `*.netlify.app` deployment renders the home page, a content
   page, a country/region page, a tool, and `/sitemap.xml` (the full sitemap —
   it must return 200 `application/xml`, not a 404).
4. Only after that passes, add the custom domain and change DNS to the records
   Netlify displays. Do not guess DNS values in advance.
5. Submit `/sitemap.xml` to Search Console / Bing Webmaster (and IndexNow if
   used) — **only after** the user decides to.

The full sequence, including TLS/redirect verification and rollback, is in
[`netlify-deployment.md`](netlify-deployment.md).

## What is verified before hosting

- `tsc`, `next lint`, `content:validate` (0 errors/warnings), `vitest`, and
  `next build` all pass (CI: "Format, types, lint, content, tests, build").
- SEO audit (`npm run seo:audit`) and search benchmark
  (`npm run search:benchmark`) report zero errors and are enforced by tests.
- No secrets, tokens, or analytics keys are committed; the data snapshots are
  checksummed and licensed (World Bank WDI, CC BY 4.0).
