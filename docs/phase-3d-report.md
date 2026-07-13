# Phase 3D report — search & knowledge-graph UX

**Branch:** `feat/phase-3d-search-graph-ux`
**Base:** `feat/phase-3c-agricultural-tools @ f49f2f2` (chain: main←3A←3B←3C←3D,
documented in [`phase-3-architecture.md`](./phase-3-architecture.md)).
**Deployment:** none. Not merged, not deployed.

## What shipped

A real search and graph-navigation layer over the whole corpus — a build-time
custom weighted inverted index (no hosted service, no naive array filter), a
typed synonym registry, conservative typo tolerance, faceted browse, relation
panels, an explore page, and a passing benchmark.

| Metric              | Value                                                           |
| ------------------- | --------------------------------------------------------------- |
| Documents indexed   | **574** (all published entities across 18 types)                |
| Unique tokens       | 4,469                                                           |
| Synonym entries     | 27                                                              |
| Facets              | 5 (entity type, category, country, region, source)              |
| Index size          | ~492 kB raw, **~65 kB gzipped** (lazy-loaded on `/search` only) |
| Query latency       | **~0.19 ms** average (in-process, 574-doc corpus)               |
| Benchmark precision | **100%** (17/17 cases)                                          |
| Relation panels     | added to every entity page                                      |
| Static pages built  | **622** (was 620 after 3C)                                      |
| Tests               | **107 passed** (13 files; +`tests/phase3d.test.ts`, 14 cases)   |

## Architecture

See [`search-architecture.md`](./search-architecture.md). Documents are built
server-side from every **published** entity (content, glossary, countries,
indicators, tools) with only searchable text — never article bodies or
unpublished content. `scripts/build-search-index.ts` (a `prebuild` step)
serializes them + the synonym registry to `public/search-index.json` with a
checksum; the client lazy-loads it on `/search` and builds the inverted index
in-browser via the isomorphic engine.

## Search quality

- **Exact-first ranking** with weighted fields (title 10 … summary 1) and match-
  type factors (exact 4 > synonym 3 > prefix 2 > typo 1), boosted by query-term
  coverage and an exact-title bonus.
- **Synonyms** (`data/search/synonyms.ts`): maize↔corn, chickpea↔garbanzo,
  aubergine↔eggplant, colorado beetle→colorado-potato-beetle, etc. Scientifically
  distinct terms are never made `exact` (canola is `regional` w/ note; SWD is
  `broader`→fruit-flies with the Phase 2.1 caveat). See [`synonym-policy.md`](./synonym-policy.md).
- **Scientific-name search** (zea mays → maize).
- **Conservative typo tolerance**: single-edit only, tokens ≥ 5 chars, no exact
  match, never over-correcting short/scientific terms; corrections surfaced as
  "related terms", never silently applied.
- **Facets** computed from the filtered result set; no empty facets.

Benchmark (`lib/search/benchmark.ts`, 17 cases incl. the brief's examples: corn,
maize, zea mays, ammonium nitrate, nitrogen fertilizer, powdery mildew wheat,
drip irrigation tomato, holstein cattle, durum wheat, sandy soil potato, growng
degree days, colorado beetle, spotted wing drosophila) passes at 100% — the "no
dangerous false equivalence" gate.

## Knowledge-graph UX

See [`graph-ux.md`](./graph-ux.md). `RelationPanels` groups an entity's supported
semantic edges by relation with human headings (Susceptible to, Nutrients
required, Supplied by fertilizers, Suitable soils, …), showing only relations
with real edges (no empty headings) and published targets. `/explore` is a
browse-first graph overview (entity counts by type, the relation vocabulary with
counts, most-connected entries). No force-directed graph as primary UX.

## SEO

`/search` is `noindex, follow` (query-dependent) and not in the sitemap;
`/explore` is indexable and in the sitemap. The header quick-search now routes
into the full `/search` (Enter / "search everything"), so the corpus is no longer
served by a naive client-side array filter.

## Performance

Index is lazy-loaded only on the search page (~65 kB gzipped), never on every
page, and article bodies are excluded. Sub-millisecond query latency; deterministic
build (same documents → same index; checksum-verified).

## Validation results (deterministic gate — all green)

| Check              | Result                               |
| ------------------ | ------------------------------------ |
| `format:check`     | pass (index JSON `.prettierignore`d) |
| `typecheck`        | pass                                 |
| `lint`             | pass (0 warnings)                    |
| `content:validate` | **0 errors, 0 warnings**             |
| `test`             | **107 passed**                       |
| `build`            | **622 static pages**                 |
| `audit`            | 4,476 edges, 0 incorrect reciprocity |

`lib/search/validate-search.ts` fails on: unpublished content in the index,
duplicate documents, broken canonical routes, missing entityType facet, ambiguous
or self-referential synonyms, and a stale index checksum.

## Notes / limitations

- The index is built for the current corpus size (574 docs) and loaded whole; if
  the corpus grows by an order of magnitude, a sharded or worker-backed index
  would be the next step (documented in the architecture).
- Typo tolerance is deliberately conservative; some aggressive misspellings will
  return the "related terms" hint rather than an auto-correct.

## Commits

Branch history: search model + synonym registry + engine + document builder +
index generator, then UI (search app, header integration, relation panels,
explore), then validators + benchmark + tests + docs + report. Pushed after the
full deterministic gate passed. **Not merged; not deployed.**
