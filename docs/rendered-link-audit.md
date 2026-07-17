# Rendered-link audit (Phase 5F, §5 and §6)

Every number here comes from parsing the **emitted build output** —
`.next/server/app/**/*.html`, the real prerendered HTML — with
[`scripts/rendered-link-audit.ts`](../scripts/rendered-link-audit.ts).

Run it:

```
npm run build          # emits 1,362 HTML files to .next/server/app
npm run seo:rendered   # parses them; no server, deterministic
```

No registry relation, no sitemap membership, and no hypothetical hub link is
counted. Only `<a href>` anchors that exist in a real HTML file. The extractor
([`lib/seo/rendered-links.ts`](../lib/seo/rendered-links.ts)) is a pure function
of the HTML string and is fixtured in
[`tests/rendered-links.test.ts`](../tests/rendered-links.test.ts).

## Why this exists

`seoAudit()`'s reachability number — long reported as "0 orphans / max crawl
depth 4" — is not a crawl. It is a hand-written registry MODEL
(`registryNavModel()`, formerly `navGraph`). The model links every type hub to
every published item of that type, and all 27 content types have an `active`
section, so **every content page sits at modelled depth ≤ 2 before any
content→content link is considered.** It would report full reachability even if
no page linked to any other page. See
[`graph-audit-5f.md`](graph-audit-5f.md) §"What the SEO audit's '0 orphans'
actually means".

This audit is the crawl the model was mistaken for.

## Method

- **Route set.** Every emitted `*.html` file → its served path (`index.html` → `/`,
  `.html` stripped, trailing slash stripped). Cross-checked against
  `sitemapPaths()`.
- **Indexable.** Emitted, `robots` not `noindex`, and `<link rel="canonical">`
  points at the page's own path. 1,361 of 1,362 pages qualify (only
  `/_not-found` is noindex).
- **Edges.** Anchors classified internal / external / fragment / mailto / tel /
  other. Internal targets normalised (query, fragment, trailing slash, `.html`
  stripped; case preserved — segments are case-sensitive). Self-links dropped.
- **Depth.** BFS from `/` over rendered anchors between indexable pages only.
- **Broken.** Internal target with no emitted HTML **and** no literal on-demand
  route. Links to routes that exist but aren't prerendered (the noindex
  `/search`) are reported separately, not as broken.

## §5 — headline

| Measure              | Model (`seo:audit`)         | **Rendered (this audit)**                     |
| -------------------- | --------------------------- | --------------------------------------------- |
| Reachable from `/`   | 1,361 / 1,361               | **1,282 / 1,361 (94.2%)**                     |
| Unreachable from `/` | 0                           | **79**                                        |
| Max depth            | 4                           | **8**                                         |
| Depth histogram      | `0:1 1:45 2:1242 3:10 4:63` | `0:1 1:22 2:519 3:642 4:16 5:63 6:14 7:1 8:4` |

**The "0 orphans / depth 4" claim does not survive contact with the HTML.** The
real figures are 79 unreachable and max depth 8. The model's histogram peaks at
depth 2 (1,242 pages) because of hub→item enumeration it asserts but the pages
do not all render; the real histogram peaks at depth 3 (642) and has a long tail
the model cannot see.

Corpus: 1,362 emitted HTML pages · 85,883 anchors parsed · 47,935 internal edges
between indexable pages · 18 links present on every indexable page (site chrome).

## §5 — the 79 unreachable pages are four islands, none of them content

Unreachable ≠ isolated. The 79 form four weakly-connected islands that link
within themselves but that **nothing in the main graph links into**:

| Island                   | Pages | What it is                                        |
| ------------------------ | ----- | ------------------------------------------------- |
| `/compare` + comparisons | 58    | the compare hub and all 57 fixed comparison pages |
| `/tools` + tools         | 19    | the tools hub and all 18 calculator pages         |
| `/data-health`           | 1     | the source-health dashboard                       |
| `/explore`               | 1     | the discovery/search landing page                 |

Each comparison page links **up** to `/compare` (breadcrumb) and `/compare`
lists them, so the cluster is internally connected — but no crop, hub, header, or
footer anchor points at `/compare` or any comparison. Same for `/tools`. The
model asserted `home → /compare`, `home → /tools`, `home → /explore`,
`home → /data-health`, `home → /countries`, `home → /datasets`,
`home → /agroecological-zones`; **the rendered home page contains none of those
seven anchors.** The header renders six section links plus a curated handful of
content links; the footer renders about/legal/resource links. That is the whole
of the home page's outbound reach.

## §5 — zero rendered inbound (13) and the tools-hub defect

**13 indexable pages have zero rendered inbound links.** All 13 are in the
sitemap; none is a content/entity page:

- `/data-health`, `/explore`
- **11 of 18 calculator tools**: `bulk-density-calculator`,
  `commodity-blending-calculator`, `dry-matter-calculator`,
  `grain-moisture-shrink`, `moisture-content-converter`,
  `packaging-quantity-estimator`, `post-harvest-loss-calculator`,
  `processing-recovery-calculator`, `storage-capacity-estimator`,
  `trade-unit-value-calculator`, `water-removal-calculator`.

The tools finding is a concrete rendered-link bug: **the `/tools` hub lists only
7 of the 18 tools** it should. The 11 Phase-5 post-harvest/commodity calculators
are generated, in the sitemap, and reachable by URL, but no anchor anywhere on
the site points at them (`commodity-blending-calculator`: 0 inbound sitewide).
The model does not see this — `registryNavModel` iterates `TOOLS` and asserts
`/tools → every tool`, so it reports all 18 as linked.

`Reachable only via /explore (search): 0` — no indexable page depends solely on
the search landing page for its inbound link.

## §5 — link integrity

| Check                                             | Count | Notes                               |
| ------------------------------------------------- | ----- | ----------------------------------- |
| Broken internal links (href → no page, no route)  | **0** | —                                   |
| Redirect-only links (trailing slash / `.html`)    | **0** | `trailingSlash: false` is respected |
| Links to dynamic/noindex routes (not prerendered) | **1** | `/explore → /search` (intentional)  |

`/search` is a real route (`app/search/page.tsx`) that is `noindex`, query-driven,
and deliberately not prerendered or in the sitemap. It is not a dead link, so it
is reported separately rather than as broken.

## §6 — quality targets

| Target                                  | Rendered result                                       |
| --------------------------------------- | ----------------------------------------------------- |
| Unintended indexable rendered orphans   | **0** among content; **79** utility pages (see below) |
| Broken internal links                   | **0**                                                 |
| Sitemap-only entity pages               | **0**                                                 |
| Entity pages reachable via real anchors | **1,068 / 1,068 (100%)**                              |
| Entity pages with zero rendered inbound | **0**                                                 |
| Hubs within 1 click of `/`              | **9 of 35** active sections                           |
| Oversized relation panels               | **0**                                                 |
| Pages depending solely on search        | **0**                                                 |

**Entity depth distribution** (1,068 published content pages, registry-classified,
100% reachable): `1:5  2:495  3:565  4:3`. Every content page is within four
clicks of home and has at least one rendered inbound link. The knowledge base
itself is well-connected; the orphans are entirely the utility/editorial
clusters above.

**Hubs are the weak point.** Only 9 of 35 active section hubs are within one
click of `/`. Four (`/tools`, `/explore`, `/compare`, `/data-health`) are
unreachable; the rest sit at depth 2–7 (`/agroecological-zones` at 7), reached
only transitively through content cross-links rather than from home or a global
menu. The model puts all 35 at depth 1 by fiat.

**Oversized link blocks — threshold and result.** Threshold: **> 250 in-content
outbound links** on a single page (i.e. excluding the 18 chrome links every page
carries). Rationale: a page that dumps hundreds of equally-weighted links passes
little ranking signal per link and is hard to use; 250 is generous headroom over
the busiest legitimate hub. In-content outbound per page: min 0, p50 12, p90 36,
p99 100, **max 182**. **0 pages exceed the threshold** — no hub or relation panel
is oversized.

## Intentional exceptions

- **`/search`** — noindex, not prerendered, not in the sitemap. The single
  dynamic-route link (`/explore → /search`) is expected.
- **`/_not-found`** — the only emitted noindex page; excluded from the indexable
  set by design.

Everything else in the 79 unreachable / 13 zero-inbound sets is **not** an
accepted exception — it is a real internal-linking gap (compare cluster, tools
cluster, `/explore`, `/data-health`, and the 11 unlisted tools). This audit
records them; the fix (linking these hubs from home/nav and completing the tools
hub) is out of scope for §5/§6 and owned elsewhere.

## Known limitations

- **Static prerender, not a live crawl.** `next.config.mjs` sets no
  `output: 'export'`, so there is no `out/`. This audit parses
  `.next/server/app/**/*.html`, which is the HTML the server sends for
  static/SSG routes. Genuinely dynamic routes (`/search`) emit no HTML and are
  detected structurally (a `page.js` with no sibling `.html`), not parsed. A
  headless-browser crawl over a running server would additionally observe
  client-rendered anchors; none are known to exist, but this audit cannot prove
  their absence.
- **Anchors only.** Links surfaced exclusively through JS interaction (a
  client-side router push with no `<a href>`) are invisible here — by design:
  those are not crawlable links.
- **Indexability is read from the emitted page.** `canonical` and `robots` are
  parsed from the HTML, so a page whose canonical points elsewhere is treated as
  non-self-canonical and excluded. No page currently does this except intended
  ones.
- **Depth is anchor-reachability, not rendered prominence.** A link in a
  collapsed panel counts the same as one in the header. BFS depth measures "can a
  crawler get here", not "how prominent is the path".
- **Entity classification uses the registry.** Which routes are "entity pages"
  vs hubs comes from `PUBLISHED_CONTENT`. Only the classification does; every
  edge, depth, and orphan number is from HTML.
- **Numbers are pinned to one build.** They will move as content and components
  change. Re-run after any build; the script is deterministic for a given
  `.next/`.

## Related

- [`graph-audit-5f.md`](graph-audit-5f.md) — semantic-graph audit; its
  rendered-link section is modelled, and explicitly says so. This file is the
  crawl it deferred.
- [`seo-discovery.md`](seo-discovery.md) — corrected: its "0 orphans / depth 4"
  described the model, not a crawl.
- [`seo-architecture.md`](seo-architecture.md) — `computeReachable` and
  `registryReachabilityAudit` are registry models, labelled as such.
- [`lib/seo/audit.ts`](../lib/seo/audit.ts) — `registryReachabilityAudit()`
  (was `crawlDepth`), the model this audit replaces for reachability claims.
