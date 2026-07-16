# Phase 5 architecture — commodity, post-harvest, quality, trade & supply chain

Phase 5 adds a structured agricultural **commodity and supply-chain reference
system** on top of the Phase 1–4 platform. It is built as six sequential
programs, each on its own branch, each merged into `main` only after green CI.

| Program | Scope                                     | Branch                                    |
| ------- | ----------------------------------------- | ----------------------------------------- |
| 5A      | Commodity & product taxonomy              | `feat/phase-5a-commodity-taxonomy`        |
| 5B      | Post-harvest quality & storage            | `feat/phase-5b-post-harvest-quality`      |
| 5C      | Processing & product transformation       | `feat/phase-5c-processing-transformation` |
| 5D      | Trade, logistics, standards & market data | `feat/phase-5d-trade-logistics-standards` |
| 5E      | Commodity calculators & decision tools    | `feat/phase-5e-commodity-tools`           |
| 5F      | Search, graph, SEO & quality integration  | `feat/phase-5f-commodity-integration`     |

Merge order is strict: 5A → 5B → 5C → 5D → 5E → 5F. Each program starts from the
latest merged `main`; stacked unmerged branches are avoided.

## The organising principle

The platform already modelled the **living** side of agriculture: crops,
cultivars, livestock, breeds, soils, pests, diseases, nutrition, climate,
systems. Phase 5 models the **harvested** side: what leaves the field, what
happens to it, what it becomes, how it is described commercially, and how it
moves.

The seam between the two is deliberate and load-bearing:

```
crop ──harvestedAs──▶ commodity ──processedInto──▶ product
 │                        │
 │                        ├──producesCoProduct──▶ co-product
 │                        ├──producesByProduct──▶ by-product
 │                        ├──gradedUnder───────▶ grading standard
 │                        └──storedUsing───────▶ post-harvest system
 └── (agronomy, pests, soils, climate — unchanged)
```

A crop page never claims to produce flour. It links the commodities harvested
from it; each commodity links its own products. Every edge in that chain is
typed, reciprocal, and validated — never inferred from a shared parent.

## What each program contributes

- **5A — taxonomy.** Three content types (`commodity`, `commodity-product`,
  `commodity-grade`), the transformation relation vocabulary, classification
  codes, crop/livestock/commodity panels, and the validator that keeps crop and
  commodity separate. See [`commodity-taxonomy.md`](commodity-taxonomy.md),
  [`commodity-grade-model.md`](commodity-grade-model.md),
  [`commodity-classification.md`](commodity-classification.md).
- **5B — post-harvest quality & storage.** Processes, quality attributes,
  storage systems, defects, packaging, and measurement, tied to commodities.
- **5C — processing.** How a commodity becomes a product: methods, stages,
  outputs, loss points, environmental context.
- **5D — trade & logistics.** Versioned trade snapshots, transport, standards,
  certification, market terminology, supply-chain risks.
- **5E — calculators.** Moisture-basis conversion, shrink, storage capacity,
  water removal, blending, unit value — all on the versioned formula registry.
- **5F — integration.** Search, synonyms, facets, panels, comparisons, sitemap
  shards, structured data, rendered-link graph, and the expanded benchmark.

## Inherited guarantees (never weakened)

Phase 5 reuses, and must not weaken, the existing machinery: `FieldCitation` and
`ProvenancedClaim`, evidence tiers, the source registry, immutable dataset
snapshots, the versioned formula registry, image licensing and identity gates,
safety validators, content validation, canonical architecture, structured data,
the search index, and the internal-link graph.

Two rules govern every entry:

1. **No fabrication.** Grades, thresholds, moisture limits, storage periods,
   yields, losses, prices, trade volumes, conversion factors, legal
   requirements, and shelf life are never invented. A value is omitted rather
   than guessed.
2. **Every quantitative statement carries** value, unit, commodity context,
   geographic/standard context, source, date or version, methodology where
   relevant, and its limitation.

General post-harvest principles are never converted into universal operational
instructions. Safety-sensitive topics (mycotoxins, fumigation, controlled
atmospheres, confined spaces) are framed at reference level and directed to
labels, regulations, and qualified professionals.

## Deployment

Phase 5 performs **no deployment**. No Vercel project or link, no CLI or deploy
token, no domain or DNS, no analytics, no IndexNow or sitemap submission. The
deployment status remains **AWAITING USER — Vercel project linking**.
