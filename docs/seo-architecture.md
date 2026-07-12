# SEO architecture

SEO is treated as an engineering concern with deterministic, validated output.

## Canonical URLs and metadata

- The canonical origin is centralised in `lib/site.ts` (`SITE.url`), overridable
  with `NEXT_PUBLIC_SITE_URL`.
- `lib/seo/metadata.ts#buildMetadata` produces per-page metadata: a canonical
  path, unique title (with a deterministic `· AgricultureID` suffix), unique
  description, Open Graph, and Twitter cards.
- The root layout (`app/layout.tsx`) sets `metadataBase`, the title template, and
  site-wide defaults, and emits `Organization` + `WebSite` JSON-LD once.
- Every content entry carries a unique `seo.title` and `seo.description`;
  uniqueness is enforced by validation and tested.

## Robots and sitemap

- `app/robots.ts` allows all indexing and points to the sitemap.
- `app/sitemap.ts` is generated from `lib/seo/routes.ts#allRoutes`, which
  enumerates every indexable static route plus every published content page with
  its `updatedAt` as `lastModified`.
- Validation asserts that every published page appears in the sitemap; sections
  intentionally not built in Phase 1 (machinery, tools) are absent — no empty
  shells.

## Structured data (schema.org)

Builders live in `lib/schema/jsonld.ts`. We only emit schema the visible page
genuinely satisfies:

- `Organization` + `WebSite` — site identity (once, in the layout)
- `WebPage` + `BreadcrumbList` — every page
- `Article` — encyclopedic entries that opt in (`structuredData.article`), with
  the organization as author/publisher (no fabricated individual authors)
- `DefinedTerm` — glossary entries
- `ItemList` — category index pages

We deliberately do **not** emit `FAQPage`, `HowTo`, `Review`, `Product`, or
`Dataset` schema, or fabricate ratings, authors, or dates.

## Semantics and accessibility

- One `<main>` landmark per page (owned by the layout), semantic headings, and a
  single `<h1>` per page.
- Accessible breadcrumbs (`components/navigation/Breadcrumbs.tsx`) that also emit
  matching `BreadcrumbList` structured data.
- A skip link, visible focus styles, and reduced-motion handling in
  `styles/globals.css`.

## Internal linking and the knowledge graph

- Typed relationships (`lib/content/graph.ts`) connect crops ↔ diseases, pests,
  and soils, and are rendered as "Related topics" with reciprocity.
- `computeReachable` guarantees every published page is reachable from a hub;
  orphans fail validation.
- `npm run content:report` prints pages by type, edge counts, orphans, and
  weakly-linked pages.

## Images and social previews

- Original, typographic Open Graph and Twitter images (1200×630) and an original
  SVG/PNG favicon set — no third-party photography. See
  [image-licensing.md](image-licensing.md).

## What the build gate enforces

`npm run content:validate` fails on: unknown/duplicate source ids, malformed URLs
or dates, missing sources, duplicate slugs/canonical URLs/titles/descriptions,
unresolved relationship or glossary links, missing required fields, placeholder
text, orphaned pages, sitemap gaps, and structured-data generation errors.
