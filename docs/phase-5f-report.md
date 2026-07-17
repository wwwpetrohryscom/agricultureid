# Phase 5F — Search, Graph, SEO, and Quality Integration

Base: merged main `af2af38` (Phase 5E). Branch: `feat/phase-5f-search-graph-seo`.

## What this phase actually was

Not new content — integration and honesty. It began by discovering that the
Phase 5D knowledge graph **did not exist**: `refsWithField`, which turns typed
reference fields into edges, was a hand-maintained `switch` on `contentType`, and
5D's five types never registered. `cold-chain-failure` declared seven affected
commodities and six related risks and emitted **zero** edges. Every gate was
green, because the tests iterated `semanticEdges()` and asserted each edge valid
— vacuously true of an empty set.

Fixing that surfaced a chain of related defects. The phase is the record of
finding and closing them.

## Headline numbers

|                                       | before                    | after                                          |
| ------------------------------------- | ------------------------- | ---------------------------------------------- |
| Semantic edges                        | 8,907                     | **11,230**                                     |
| — of which generated (never authored) | —                         | 202                                            |
| Cultivar/breed zero-inbound           | 101                       | **0**                                          |
| Total semantic zero-inbound           | 213                       | 112                                            |
| Type-unsafe inverses materialised     | (imminent)                | **0** (664 false edges averted)                |
| Graph-derived search false positives  | 1                         | **0**                                          |
| Rendered-HTML unreachable from `/`    | 79 (real) / "0" (claimed) | **0**                                          |
| Edges reaching a reader (rendered)    | ~65.6%                    | **80.6%** + the rest owned by dedicated panels |
| Tests                                 | 428                       | **453**                                        |

## The findings, in order

### 1. The graph was a hand-maintained switch, and it had two copies

`refsWithField` (semantic graph) and `outgoingRefs` (navigation) each carried
their own `switch (item.contentType)`. Neither knew about Phase 5D. Replaced both
with **structural discovery** — walk an item's own fields for `{type, slug}`
objects — so a new content type participates the moment it declares a ref.
Recovered **2,175 edges, zero lost** (verified by diffing target sets, not
trusting the change).

Structural discovery alone is too permissive, so **mapping is declared**
([`ref-fields.ts`](../lib/content/ref-fields.ts)): the walker finds candidate
refs, the registry says which fields are graph fields and what each asserts, and
a ref in an **unregistered** field is a hard `content:validate` error
(`graph-unmapped-ref-field`) rather than a guessed edge. Both properties: no
switch to forget, no field silently becoming an edge. Writing the registry closed
two live mapping gaps (`relatedOperations` → `relatedProcessingStep`;
`post-harvest.applicableCommodities` → `appliesToCommodity`).

`isContentRef` requires `type` **and** `slug` **and** a real content-type value —
which is why a `ContentBlock` (`type: 'paragraph'`, no slug) can never be
mistaken for structure. [`phase5f-fixtures.test.ts`](../tests/phase5f-fixtures.test.ts)
asserts this against a fixture stuffed with source refs, image metadata,
classification codes, prose blocks, and nested metadata.

### 2. Vacuous tests, replaced with a coverage gate

The old tests could pass on an empty edge set. [`graph-coverage.ts`](../lib/content/graph-coverage.ts)
asks the opposite question — _is anything missing?_ — by comparing **declared**
refs against **discovered** edges per type, and fails on a type that declares refs
but contributes nothing. This is the gate the 5D bug needed and never had.

### 3. Restoring the edges exposed 842 reciprocity errors — two very different kinds

- **826** were relations that genuinely _are_ symmetric (`relatedRisk`,
  `relatedStandard`, …). The content was right; the vocabulary never said the
  relation was self-inverse. Declared symmetric, **each with a mandatory
  rationale** — because declaring symmetry is also how you'd silence an error you
  should fix, so [`relation-spec.ts`](../lib/content/relation-spec.ts) requires
  and tests the reason.
- **16** were a relation pointing the **wrong way**: `associatedDocuments` was
  mapped to a directional `documents`, but a bill of lading and a packing list
  _accompany_ each other — neither documents the other. Choosing a direction
  would have invented information to satisfy a checker. Became symmetric
  `associatedDocument`; `documents`/`documentedBy` removed.

### 4. Three type-unsafe inverses — 664 edges of false claims averted

Inverse safety is now **derived from the corpus**, not declared — a hand-written
"this is safe" is true when written and false two phases later. Reading each
relation's observed source/target types found the original `partOfFarmingSystem`
defect **and two more**:

| inverse                                | edges | the false claim                                   |
| -------------------------------------- | ----- | ------------------------------------------------- |
| `partOfFarmingSystem⁻¹ = includesCrop` | 227   | a farming system "includes the **crop**" a plough |
| `affects⁻¹ = susceptibleTo`            | 411   | a crop is "susceptible to" **climate**            |
| `gradedUnder⁻¹ = gradeAppliesTo`       | 26    | a grade "applies to" a **post-harvest operation** |

Per the standing instruction, **no inverse is materialised**. Verdicts are
three-valued — `safe` (23), `type-unsafe` (3), `unverified` (9) — because an
inverse-only label like `hasCultivar` is unprovable from the data, not false, and
collapsing the two would overstate. `partOfFarmingSystem` took approach C (no
materialised inverse); inventing `includesMachinery`/`includesBreed` would be
creating relations merely to satisfy reciprocity.

### 5. Reverse presentation without false materialisation

[`reverse-lookup.ts`](../lib/content/reverse-lookup.ts) shows what points **at**
an entity using the **forward** relation, unchanged. A farming-system page shows
its 92 inbound via `partOfFarmingSystem`/`commonlyRaisedIn` verbatim, from eight
source types, with **no invented `includesCrop`**. This is how the type-unsafe
inverses reach a reader without a stored false claim.

### 6. The one safe inverse — 101 parent-child defects fixed at the shared layer

`graph.ts` computed the crop→cultivar edge for navigation; `relations.ts` did not
for the graph. Two modules disagreeing about one fact left **101 cultivar/breed
pages with zero inbound semantic edges**. Both now read the **one** registry
function (`cultivarsForCrop`/`breedsForLivestock`); the graph materialises
`hasCultivar`/`hasBreed` as **generated** edges — the only inverse safe to
materialise, because it is crop→cultivar and nothing else. Zero-inbound
cultivar/breed: **101 → 0**.

### 7. Generated edges never present as authored

Every edge carries `origin: declared | generated | inverse` and a generated edge
names its generator. `producedBy` and the parent-child edges are `generated`;
`RelationPanels` labels the former "Produced by (derived)". The validator rejects
a generated edge with no generator, a generator on a declared edge, and any
origin that disagrees with the registry.

### 8. Restoring edges to the graph rendered none of them

`RelationPanels` filtered by an `ORDER` list of Phase 2/3 relations only, and no
dedicated panel covered the 5B/5C relations — so the restored edges reached the
graph and **no reader**. [`renderable-relations.ts`](../lib/content/renderable-relations.ts)
now asserts every relation carrying edges reaches a reader (a heading, or a
dedicated panel for every source type); **0 unrenderable**, wired into
`content:validate`. Rendered coverage 65.6% → **80.6%**, the rest owned by
`TradePanels`/`CommodityPathways`/`SubEntityPanel`.

**A regression I caused, and its permanent guard.** Making
`post-harvest.applicableCommodities` precise moved it out of `ORDER`, silently
un-rendering **208 edges**. Fixed, and the renderable gate now catches exactly
this class.

### 9. A graph-derived search false positive

`RELATION_LABEL` turned relation **verbs** into retrievable tokens, so a bare
"supplied" returned nutrient "Boron" — ranking on the label of a
`suppliedByFertilizer` edge, not on anything about Boron. Relation labels now
contribute **entity nouns only** (`RELATION_GRAMMAR` drops the verbs). Graph-
derived false positives: **1 → 0**. Benchmark expanded 94 → **163** queries with
per-kind diagnostics; the 6 remaining known-issues are pre-existing _engine_
limits (no stemming; title weight), honestly recorded, never relaxed.

### 10. "0 orphans" was a model, not a crawl

`navGraph()` was called a crawl and reported "0 orphans, depth 4". It links each
hub to every item of its type, so every page is depth ≤2 before any content link
is considered — it would report 0 orphans if nothing linked to anything. A **real
crawl** over emitted HTML ([`rendered-link-audit.ts`](../scripts/rendered-link-audit.ts),
`npm run seo:rendered`) found **79 unreachable, max depth 8** — four utility
islands the home page never linked. Two concrete bugs, both fixed: the `/tools`
hub listed **7 of 18** tools (categories now derived from the tools), and the
utility hubs were in no footer. After the fixes: **0 unreachable, 0 sitemap-only,
0 broken links**. `navGraph`→`registryNavModel`; every doc claiming crawl depth
off the model corrected.

### 11. The §12 adversarial review caught two more — one of them mine

A nine-lens adversarial review (each finding then verified by three refute-first
skeptics) surfaced two confirmed defects the gates above had passed. Both are
fixed; the three other candidates were refuted on verification and left alone.

- **An inverted relation, rendered as a false claim.** `appliesToCommodities` is
  declared on a **quality-attribute** and points **at** commodities — the
  attribute _is an attribute of_ the commodity. It was mapped to the possessor-
  side relation `hasQualityAttribute` (commodity → attribute), exactly backwards,
  so all **208** edges read quality-attribute → commodity under that label. Every
  quality-attribute page rendered a panel headed "Quality attributes" listing
  _commodities_ — asserting that "Broken Kernels **has** quality attributes: maize
  grain, wheat grain, …". Remapped to the dependent-side `qualityAttributeOf`
  ("Quality attribute of"), the same convention already used for `derivedFrom →
derivedFromCommodity`. `hasQualityAttribute` becomes a 0-edge inverse-only
  label; the 208 edges are unchanged in number, correct in direction. This is the
  same class as the `documents`/`associatedDocument` mis-description from finding
  3 — a graph edge must not present a false claim to a reader — and it is guarded
  by a new corpus assertion (no `quality-attribute → commodity` edge may carry any
  label but `qualityAttributeOf`).
- **A vacuous test I wrote — the exact anti-pattern this phase exists to abolish.**
  The §9 "does not double-count" test computed the generic-vs-precise duplicate
  set, threw it away with `void`, and asserted `expect(true).toBe(true)`. It
  covered the dedup deliverable with nothing. The dedup/cap logic was trapped
  inside the `RelationPanels` component where no test could reach it; it is now a
  pure exported `buildRelationGroups`, and two real tests assert the property — a
  target shown under a precise relation is dropped from the generic panel, and the
  generic panel is capped while precise panels are not. A second, redundant
  `phase5f` sitemap test that asserted a loop-invariant (`paths.size > 0` per page,
  route computed and voided) was rewritten to assert real membership via the
  emitted `contentUrlPath` — the regression it claimed to guard now actually fails
  it.

The refuted three were the two symmetric/`producedByProcess` inverse-safety notes
(no code path materialises those inverses, so the guard hole is unreachable — a
latent-robustness observation, not a live defect) and the sitemap-vacuity finding
(a real gate in `sitemap.test.ts` already covered the invariant; the phase5f
duplicate was cleaned up anyway).

## Gates on the final branch state

| Gate               | Result                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `format:check`     | ✓                                                                                            |
| `typecheck`        | 0                                                                                            |
| `lint`             | 0                                                                                            |
| `content:validate` | **0 errors, 0 warnings** (now includes graph coverage + renderable)                          |
| `test`             | **453 passed** (28 files)                                                                    |
| `build`            | ✓                                                                                            |
| `audit`            | 0 missing quantitative provenance                                                            |
| `seo:audit`        | 0 errors (modelled registry reachability, labelled as such)                                  |
| `seo:rendered`     | **0 unreachable, 0 sitemap-only, 0 broken** (real HTML crawl, CI gate)                       |
| `search:benchmark` | 163 queries · TOP-1/TOP-3 100% (regression) · **0 graph-derived FP** · 0 unsafe equivalences |
| `data:validate`    | 0/0                                                                                          |
| `calc:contract`    | 0 violations                                                                                 |
| `graph:audit`      | coverage complete · 0 type-unsafe materialised · 0 unrenderable                              |

## Known limitations

- **112 pages still have zero semantic inbound edges** (down from 213). All are
  reachable in rendered HTML and none is an SEO orphan; nothing else in the
  corpus semantically points at them. Recorded in
  [`graph-audit-5f.md`](graph-audit-5f.md), classified, not invented away.
- **33.7% of edges are the generic `relatedConcept`.** The audit found only 4
  genuine precise-relation replacement candidates and explicitly declined to
  reduce the percentage mechanically. The generic panel is capped and
  de-duplicated so it cannot dominate, but the graph still carries a third of its
  edges as "related".
- **9 `unverified` inverses.** Inverse-only labels with no forward use; provable
  neither safe nor false from the corpus, so none is materialised.
- **The rendered crawl parses static HTML, not a running browser.** JS-only links
  that never emit an anchor are invisible to it — which is correct for SEO, since
  a crawler sees the same HTML.
- **`registryNavModel` remains a model.** It is retained (it is a useful
  build-time reachability check) but is no longer described as a crawl anywhere.

## Deployment

Nothing was deployed. No Vercel project, no CLI, no DNS, no sitemap or IndexNow
submission, no analytics.

**Status: `AWAITING USER — Vercel project linking`.**
