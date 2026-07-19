# SEO & discovery (Phase 4E)

Phase 4E hardens how the site is discovered, crawled, and searched, and adds a
deterministic, test-enforced audit for each concern. Nothing here changes
content; it improves how the existing 916 indexable pages are surfaced.

## Sitemap

> **This section previously described a "sharded sitemap": a sitemap index plus
> four section sitemaps emitted by Next.js `generateSitemaps`. That was wrong.**
> `generateSitemaps` serves the shards at `/sitemap/N.xml` but emits **no**
> `/sitemap.xml` index, so the URL `robots.txt` advertises returned **404** in
> production. Fixed 2026-07-19: the sitemap is a single `/sitemap.xml`.

The sitemap is a single file at `/sitemap.xml`
([`app/sitemap.ts`](../app/sitemap.ts)) listing every indexable route. At ~1.4k
URLs it is far under the sitemaps.org ceiling (50,000 URLs / 50 MB uncompressed),
so one sitemap is sufficient and is exactly what `robots.txt` points to and what
crawlers fetch first. Routes come from [`allRoutes()`](../lib/seo/routes.ts),
which assembles the stable section groupings in `sectionedRoutes()`; a
route-level test asserts `/sitemap.xml` carries one absolute-URL entry per
indexable path.

If the corpus ever nears 50,000 URLs, add a real `<sitemapindex>` at
`/sitemap.xml` via a route handler — do not rely on `generateSitemaps` to create
the index.

## Modelled registry reachability (NOT crawl depth)

> **This section previously claimed `crawlDepth()` walked "the real internal-link
> graph a crawler would traverse", with "max click-depth 4" and "0 orphans".
> That was wrong.** The function parsed no HTML. It walked a hand-written model.
> The real figures, measured from emitted HTML, are **max depth 8** and **79
> pages unreachable from `/`**. See
> [`rendered-link-audit.md`](./rendered-link-audit.md).

[`registryReachabilityAudit()`](../lib/seo/audit.ts) (formerly `crawlDepth`)
BFS-walks [`registryNavModel()`](../lib/seo/audit.ts) — a **model** of navigation
asserted from the registry, not a traversal of rendered output. It reports:

- **Max modelled depth: 4**
- **> 85% of pages within 2 modelled hops** of home
- **0 sitemap pages unlisted by the model**

None of those are crawl findings. The model links every type hub to every
published item of that type, and all 27 content types have an `active` section,
so **every content page is at modelled depth ≤ 2 before any content→content link
is considered** — the model would report full reachability even if no page linked
to any other page. `tests/phase4e.test.ts` pins exactly that property.

What the model is good for: confirming the registry believes every page is listed
somewhere. What it cannot tell you: whether a crawler can reach a page.

## Rendered-link audit (the real one)

[`scripts/rendered-link-audit.ts`](../scripts/rendered-link-audit.ts) parses the
emitted HTML from `npm run build` and BFS-walks the actual `<a href>` anchors.
Every orphan / crawl-depth / rendered-reachability claim must come from it:

```
npm run build && npm run seo:rendered
```

Findings are in [`rendered-link-audit.md`](./rendered-link-audit.md).

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
npm run seo:audit         # sitemap, MODELLED registry reachability, schema, a11y
npm run build             # required before seo:rendered — it parses build output
npm run seo:rendered      # REAL rendered-HTML links: orphans, crawl depth
npm run search:benchmark  # search relevance + safety
```

Both are also enforced in the test suite
([`tests/phase4e.test.ts`](../tests/phase4e.test.ts), 14 tests), so a regression
fails CI.
