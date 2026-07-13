# Phase 4E report — SEO, Discovery, Performance & Repository Readiness

**Branch:** `feat/phase-4e-seo-readiness` (base: main `88ccf9f`). **Not deployed.**

## Delivered

Discovery, search-quality, and hosting-readiness hardening for the now-916-URL
site — every concern backed by a deterministic, test-enforced audit. No content
changed.

### Sharded sitemap

`app/sitemap.ts` now uses Next.js `generateSitemaps` to emit a **sitemap index +
4 section shards** (`pages` 34, `content` 647, `geo` 171, `tools` 64 = 916). The
build prerenders `/sitemap/0..3.xml`; `robots.txt` points to the index. Sections
come from `sectionedRoutes()`; `allRoutes()` flattens them so the two can't drift.

### SEO / discovery audit (`lib/seo/audit.ts`, `npm run seo:audit`)

- **Crawl-depth audit** — BFS over the real internal-link graph (nav + footer +
  hub listings + country→region nesting + content graph). Max depth **4**, >85%
  of pages within 2 clicks, **0 orphans**.
- **Metadata audit** — sitemap path uniqueness/format, https canonicals, priority
  range, and every published page present exactly once.
- **Structured-data audit** — every content page's `WebPage`/`BreadcrumbList`
  (+`Article`) builds with the right `@type` and never throws.
- **Accessibility audit** — single H1, non-empty headings/labels, tables with
  headers and non-ragged rows, no empty blocks.

Two internal-linking model gaps were found and fixed during development; the
footer link groups were centralised in `lib/site.ts` as a single source of truth
shared by the footer component and the audit.

### Search benchmark (`lib/search/benchmark.ts`, `npm run search:benchmark`)

Expanded from 20 → **82 cases** with four measured dimensions:
**top-1 100%**, **top-3 100%**, **false positives 0**, **unsafe equivalences 0**
(5 guard cases: early/late blight, downy/powdery mildew, SOP/MOP, soybean-cyst /
root-knot nematode, northern/southern corn leaf blight). Cases span exact,
synonym, scientific-name, typo, multi-word, and unsafe-equivalence kinds.

### Performance & hosting readiness (`docs/hosting-readiness.md`)

Static analysis of the production build: ~102 kB shared First Load JS, ~106 kB
per content page, all pages prerendered, search index (~96 kB gzipped) lazy-loaded.
A pre-deployment checklist documents exactly what the user does to link Vercel.

## Tests & docs

- `tests/phase4e.test.ts` — **14 tests** (sitemap sharding partition/limits,
  crawl depth + 0 orphans, metadata/structured-data/accessibility 0 errors,
  benchmark ≥75 cases at 100% top-1/top-3 with 0 false positives + unsafe
  equivalences).
- `docs/seo-discovery.md`, `docs/hosting-readiness.md`, this report.
- `package.json`: added `seo:audit`; `search:benchmark` upgraded to report the
  four dimensions and fail on any regression.

## Validation (local, all green)

- `tsc --noEmit` 0 · `next lint` 0 · `content:validate` 0/0 (647 published) ·
  `vitest` **167 tests pass** (153 prior + 14 new) · `next build` succeeds and
  prerenders the 4 sitemap shards.
- `npm run seo:audit` — 0 errors · `npm run search:benchmark` — 82/82, 0 failures.

## Not done (by instruction)

No deployment. No Vercel project/link, no `vercel`/CLI/token, no DNS/domain, no
IndexNow/sitemap submission. Deployment status remains **AWAITING USER — Vercel
project linking** (see `docs/hosting-readiness.md`).
