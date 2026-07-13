# Phase 4B report — Comparison Intelligence

**Branch:** `feat/phase-4b-comparison-intelligence` (base: main `a60e74e`). **Not deployed.**

## Delivered

Curated, evidence-based comparisons of compatible entities — **not** a Cartesian
product.

- **57 comparisons**: 18 crop, 12 cultivar, 10 breed, 7 fertilizer, 10 country
  (within the brief's ceilings; not padded).
- **Resolution from source entities** (`lib/comparison/dimensions.ts` +
  `resolve.ts`): every cell is read from the source entry at render time — facts
  are never duplicated. Empty rows are dropped; absent values show `—`.
- **Country comparisons** enforce a **common year** per indicator (same
  indicator/unit/dataset), flag estimates, and show source/version provenance —
  no overall "winner" is computed.
- **Routes**: `/compare` hub, `/compare/<type>/<slug>` fixed editorial pages
  (indexed, in sitemap), and `/compare/custom` ad-hoc builder that is **noindex**
  and sitemap-excluded (no uncontrolled indexable combinations).
- **Search**: 57 comparison documents added to the index (631 total).
- **Schema**: `WebPage` + `BreadcrumbList` + a justified `ItemList` of the
  compared entities. No Product/Review/Rating.
- **Validators** (`lib/comparison/validate-comparison.ts`, in `content:validate`):
  unique slugs/SEO, ≥2 compatible resolving entities, valid dimensions/indicators,
  present methodology/limitations/resolving sources.

## Validation (deterministic gate — all green)

`format:check` ✓ · `typecheck` ✓ · `lint` ✓ · `content:validate` **0/0** ·
`test` **123 passed** (+7 in `tests/phase4b.test.ts`) · `build` **682 static
pages** · `search:benchmark` 17/17 TOP-1 · `data:validate` 0 errors.

No validator weakened; no existing content/dataset modified.

## Notes

- Fertilizer comparisons convert grades/classes only — no application rates,
  brands, or product recommendations.
- The custom comparison route accepts only compatible, published entities and is
  noindex; the fixed curated pages carry the indexable value.
