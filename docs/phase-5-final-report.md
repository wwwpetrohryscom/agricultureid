# Phase 5 — Final Consolidated Report

Commodities, post-harvest, processing, trade, tools, and the integration that
made them one graph. Six merged pull requests, `af2af38`'s predecessor `518d481`
through `10a5cd7` on `main`.

## Where the corpus stands

| Measure                      | Value                                       |
| ---------------------------- | ------------------------------------------- |
| Published content items      | **1,068**                                   |
| Content types                | **27**                                      |
| Calculators / decision tools | **18**                                      |
| Semantic edges               | **11,230** — 11,028 declared, 202 generated |
| — generic `relatedConcept`   | 3,779 (33.7%)                               |
| Sources                      | 74                                          |
| Glossary terms               | 18                                          |
| Tests                        | **453** across 28 files                     |

Every gate green on `main` (`10a5cd7`): `format` · `typecheck` 0 · `lint` 0 ·
`content:validate` 0/0 · `test` 453 · `build` · `audit` 0 · `seo:audit` ·
`seo:rendered` 0 unreachable / 0 sitemap-only / 0 broken · `search:benchmark`
0 graph-derived FP · `data:validate` 0/0 · `calc:contract` 0 · `graph:audit`
0 unrenderable / 0 type-unsafe materialised.

## The phases, in order

| Phase   | PR  | Merged    | Delivered                                                                                                                                                                                                         |
| ------- | --- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **5A**  | #18 | `9fcf4a9` | Commodity & product taxonomy — `commodity`, `commodity-product`, `commodity-grade`; transformation pathways. 3 search-engine bug fixes.                                                                           |
| **5B**  | #19 | `87c883e` | Post-harvest quality & storage — `post-harvest`, `quality-attribute`, `post-harvest-defect`, `quality-measurement`. Caught 17 real 5A errors.                                                                     |
| **5C**  | #20 | `ddd33cb` | Processing & product transformation — `processing-method`; chain-check validator; derived `producedBy` generator.                                                                                                 |
| **5D**  | #21 | `518d481` | Trade, logistics, standards, market data — 5 types / 126 pages; FAOSTAT trade snapshot; `notableNonReporters`; concordance 64/81.                                                                                 |
| **5E**  | #22 | `46b07d3` | Commodity calculators & decision tools — 11 new tools on an execution-checked formula registry. Dry-basis blending bug caught by adversarial review before merge.                                                 |
| **5E′** | #24 | `af2af38` | Correction — yield-converter rebuilt on the registry (6 primitives, kg/ha pivot), sourced bushel standards with jurisdiction, no generic-bushel fallback, execution-enforced `calc:contract` gate (0 violations). |
| **5F**  | #25 | `10a5cd7` | Search, graph, SEO & quality **integration** — see below.                                                                                                                                                         |

(PR #23 was a content-identical no-op duplicate of #22, `00dee21`.)

## The through-line: content is only as good as the graph that connects it

Phases 5A–5E each added typed content that _declared_ relationships — a commodity
processed into a product, a quality attribute of a grain, a standard governing a
trade term. Phase 5F asked whether any of it was actually connected, and the
answer was: much less than the green gates implied.

- **The knowledge graph did not exist for 5D.** The typed-ref → edge function was
  a hand-maintained `switch (contentType)` that never learned the new types;
  `cold-chain-failure` declared thirteen references and emitted **zero** edges.
  The tests passed because they iterated the (empty) edge set and validated each
  member. Structural discovery replaced the switch and recovered **2,175 edges,
  zero lost**.
- **Reciprocity, inverses, and honesty.** Restoring edges surfaced 842 reciprocity
  errors (826 genuinely symmetric, declared so with mandatory rationale; 16
  wrong-direction, fixed at the vocabulary). Inverse safety is now **derived from
  the corpus** — three type-unsafe inverses (664 edges) were found and **none
  materialised**; their reverse reaches readers by lookup over the forward edges.
- **A real crawl replaced a model that called itself one.** `navGraph` reported
  "0 orphans" because it linked every hub to every item by construction. A crawl
  over emitted HTML found 79 pages unreachable from `/`; after fixing the `/tools`
  hub and footer, **0 unreachable, 0 broken, 1,361/1,361 reachable**.
- **The adversarial review caught two more — one of them self-inflicted.** A
  quality-attribute field was mapped to the inverted relation, rendering "Broken
  Kernels _has_ quality attributes: maize grain, wheat grain, …" on ~30 pages;
  remapped to the dependent-side `qualityAttributeOf`. And a Phase 5F test written
  to guard the generic-panel dedup asserted `expect(true).toBe(true)` — the exact
  vacuous-test pattern the phase set out to abolish — now replaced by real
  assertions against an extracted, testable helper.

Full detail: [`phase-5f-report.md`](phase-5f-report.md),
[`graph-audit-5f.md`](graph-audit-5f.md),
[`rendered-link-audit.md`](rendered-link-audit.md).

## What is deliberately _not_ solved

- **33.7% of edges are the generic `relatedConcept`.** The audit found only four
  genuine precise-relation candidates and declined to reduce the number
  mechanically. The generic panel is capped and de-duplicated so it cannot
  dominate a page, but a third of the graph is still "related".
- **112 pages have zero inbound semantic edges** (down from 213). All are
  reachable in rendered HTML; nothing in the corpus semantically points at them.
  Classified, not invented away.
- **9 `unverified` inverses** — inverse-only labels provable neither safe nor
  false from the corpus, so none is materialised.
- **The rendered crawl reads static HTML, not a browser.** Correct for SEO; a
  JS-only link that emits no anchor is invisible to it, as it is to a crawler.

## Deployment

Nothing was deployed at any point in Phase 5. No Vercel project was created or
linked, no CLI or deploy token was used, no production config or DNS was touched,
no analytics was activated, and no sitemap or IndexNow submission was made. The
corpus is production-ready and unshipped.

**Status: `AWAITING USER — Vercel project linking`.**
