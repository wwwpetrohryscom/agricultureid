# SEO & discovery (Phase 4E)

Phase 4E hardens how the site is discovered, crawled, and searched, and adds a
deterministic, test-enforced audit for each concern. Nothing here changes
content; it improves how the existing 916 indexable pages are surfaced.

## Sharded sitemap

The sitemap is split into a **sitemap index** plus four section sitemaps
([`app/sitemap.ts`](../app/sitemap.ts) via Next.js `generateSitemaps`):

| Shard     | `/sitemap/N.xml` | URLs | Contents                                                                |
| --------- | ---------------- | ---: | ----------------------------------------------------------------------- |
| `pages`   | 0                |   34 | static, overview, reference, legal                                      |
| `content` | 1                |  647 | every structured content entry                                          |
| `geo`     | 2                |  171 | countries, indicators, datasets, WB regions, zones, subnational regions |
| `tools`   | 3                |   64 | calculator tools + fixed comparisons                                    |

`robots.txt` points to `/sitemap.xml` (the index). Each shard stays far under the
50,000-URL limit, so the sitemap scales as content grows. Sections come from
[`sectionedRoutes()`](../lib/seo/routes.ts); `allRoutes()` flattens them, so the
flat and sharded views can never drift.

## Crawl depth & internal linking

[`crawlDepth()`](../lib/seo/audit.ts) BFS-walks the **real internal-link graph** a
crawler would traverse — home → header/footer nav → hub `EntryGrid` listings →
country→region nesting → content-to-content graph edges — not the flat sitemap.

- **Max click-depth: 4** (only subnational region profiles, nested under
  `countries → country → regions → region`).
- **> 85% of pages within 2 clicks** of home.
- **0 orphans**: every indexable sitemap URL is reachable by internal navigation.

The audit found and fixed two internal-linking gaps during development (the
footer link groups were centralised in [`lib/site.ts`](../lib/site.ts) as a single
source of truth shared by the footer and the audit).

## Metadata & structured data

- Per-page metadata ([`lib/seo/metadata.ts`](../lib/seo/metadata.ts)): canonical
  URL, Open Graph, Twitter card, and `robots` (only `/compare/custom` is
  `noindex`). SEO title/description uniqueness and length are enforced in
  `content:validate`.
- Structured data ([`lib/schema/jsonld.ts`](../lib/schema/jsonld.ts)): every
  content page emits `WebPage` + `BreadcrumbList`, and encyclopedic entries add
  `Article`. [`structuredDataAudit()`](../lib/seo/audit.ts) verifies each page's
  schema builds with the right `@type` and never throws.

## Accessibility

[`accessibilityAudit()`](../lib/seo/audit.ts) runs deterministic, content-level
checks: a single H1 (the title; sections render as H2), non-empty headings and
key-fact labels, tables with column headers and non-ragged rows, and no empty
content blocks. Rendering-level checks (contrast, focus order) are out of scope
for a static audit.

## Search benchmark

The search benchmark ([`lib/search/benchmark.ts`](../lib/search/benchmark.ts))
expanded from 20 to **82 cases** across exact lookups, synonyms, scientific
names, typos, multi-word intent, and unsafe-equivalence guards. It measures four
things:

- **top-1** — the top result is correct: **100%**.
- **top-3** — a correct result appears in the first three: **100%**.
- **false positives** — the top result contains a forbidden term: **0**.
- **unsafe equivalences** — distinct entities conflated (early vs late blight,
  downy vs powdery mildew, SOP vs MOP, soybean-cyst vs root-knot nematode,
  northern vs southern corn leaf blight): **0** across 5 guard cases.

Run it with `npm run search:benchmark`.

## Running the audits

```
npm run seo:audit         # sitemap, crawl depth, structured data, accessibility
npm run search:benchmark  # search relevance + safety
```

Both are also enforced in the test suite
([`tests/phase4e.test.ts`](../tests/phase4e.test.ts), 14 tests), so a regression
fails CI.
