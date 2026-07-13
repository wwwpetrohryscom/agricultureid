# Comparison model (Phase 4B)

Curated, evidence-based comparisons of **compatible** entities — deliberately not
a Cartesian product of every pair.

## Model

- `types/comparison.ts` — `Comparison` (+ compact `ComparisonSeed`) and the
  resolved shape. `data/comparisons.ts` holds the curated seeds; `lib/comparison/
registry.ts` builds full records and derives unique SEO.
- **Resolution from source entities** (`lib/comparison/dimensions.ts`,
  `lib/comparison/resolve.ts`): comparison cells are read from each source entry
  at render time — facts are never duplicated in the comparison record. Absent or
  non-comparable values render `—`; entirely-empty rows are dropped (no empty
  headings).

## Country comparisons

Country comparisons compare **the same indicator, same unit, same World Bank
dataset**, at the **latest year for which every compared country has a value** —
a common year is enforced per indicator row, so a comparison never mixes
incompatible years. Modeled indicators (e.g. employment) are flagged; index
indicators carry a caveat. A source/version/retrieval provenance line is shown.
**No overall “winner” is computed.**

## What is NOT done

- No Cartesian generation of all pairs; only hand-selected, high-value
  comparisons (57 across crops/cultivars/breeds/fertilizers/countries).
- No "X is better than Y" ranking; no yield/profitability comparison without
  matched geography, year, unit, and system; no product/brand/rate recommendation
  in fertilizer comparisons.
- No `Product`, `Review`, or `Rating` schema — fixed comparison pages use
  `WebPage`, `BreadcrumbList`, and a justified `ItemList` of the compared entities.

## Routes & indexing

- Fixed editorial pages: `/compare` (hub) and `/compare/<type>/<slug>` — indexed
  and in the sitemap.
- `/compare/custom?type=&ids=` builds an ad-hoc comparison from compatible,
  published entities and is **`noindex`** and excluded from the sitemap, so
  arbitrary user combinations never create indexable URLs.

## Validation

`lib/comparison/validate-comparison.ts` (in `content:validate`) checks unique
slugs + SEO, ≥2 compatible resolving entities, valid dimensions/indicators, and
present methodology/limitations/resolving sources.
