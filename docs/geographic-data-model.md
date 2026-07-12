# Geographic data model (Phase 3B)

Phase 3B adds date-versioned country agriculture profiles built on official,
open data. The governing principle is a hard separation between **stable
descriptive facts** (evergreen prose) and **volatile statistics** (dated,
versioned, sourced numbers). Statistics are never written into prose.

## Types (`types/geo.ts`)

| Type                        | Role                                                                                                                                                                                                      |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AgriculturalIndicator`     | A curated World Bank WDI indicator: id, unit, category, methodology, `estimateFlag`, `comparable`, source. Units/methodology live here, not on each number.                                               |
| `DatasetSnapshot`           | An immutable, versioned capture of one indicator for all countries — with dataset version, retrieval date, license, coverage, checksum, and rows. See [dataset-snapshots.md](./dataset-snapshots.md).     |
| `SnapshotRow`               | `{ iso3, year, value }` — one observation.                                                                                                                                                                |
| `AgriculturalStatistic`     | A single observation resolved from a snapshot, carrying full provenance (year, unit, sourceDataset, sourceVersion, retrievedAt, revisionStatus, estimateFlag). What the UI renders — never a bare number. |
| `DerivedAgriculturalValue`  | A computed value with formula id/version, calc version, inputs (+ input source versions), assumptions, limitations. See [derived-values.md](./derived-values.md).                                         |
| `CountryAgricultureProfile` | Stable descriptive facts (climate zones, dominant crop/livestock systems, irrigation context, institutions, overview) + which indicators to highlight. **No volatile numbers.**                           |
| `RegionAgricultureProfile`  | A World Bank region grouping with member countries filled at runtime.                                                                                                                                     |

## Source

Country statistics come from **World Bank Open Data (World Development
Indicators)** — open (CC BY 4.0), versioned (`lastupdated`), machine-readable,
and compiled from FAO and national statistics. FAOSTAT's API now requires a key
(returns `Missing Authorization Header`), so the World Bank API — which carries
the same underlying FAO series plus World Bank compilation — was chosen as the
keyless, openly-licensed source. This is a documented senior decision, not a
silent one. We do not scrape dashboards or search results.

## Data flow

1. `scripts/fetch-worldbank.mjs` pulls the indicator set for all countries and
   writes immutable snapshots to `data/snapshots/`.
2. `lib/geo/snapshots.ts` loads snapshots at build time (server-only; never
   bundled to the client) and resolves `AgriculturalStatistic`s with provenance.
3. `data/geo/profiles/*` hold the evergreen `CountryAgricultureProfile`s.
4. Routes (`/countries`, `/countries/[country]`, `/agricultural-data`,
   `/agricultural-data/[indicator]`, `/datasets`, `/datasets/[dataset]`,
   `/regions/[region]`, `/methodology/data`) render stable overview + dated data
   side by side, always with source and version.

## Honesty rules (enforced by `lib/geo/validate-geo.ts`)

- Every statistic shows its year, unit, source, and dataset version.
- Modeled indicators (e.g. employment in agriculture) are flagged as estimates.
- Non-comparable indicators (index bases) are not framed as cross-country
  rankings; country tables order alphabetically and label each row's own year.
- Profile overviews may not embed large volatile numbers (validator warns).
- Region names track the World Bank's current classification (which recently
  renamed the MENA region and moved Pakistan/Afghanistan into it).
