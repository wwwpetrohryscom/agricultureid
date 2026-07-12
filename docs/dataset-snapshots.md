# Dataset snapshots (Phase 3B)

A **dataset snapshot** is an immutable, versioned capture of one indicator from
an official source, stored under `data/snapshots/`. Snapshots make statistics
reproducible and auditable: every number on the site traces to a specific
snapshot with a known version, retrieval date, and integrity checksum.

## Shape (`DatasetSnapshot`)

```
worldbank__<INDICATOR>__<datasetVersion>.json
{
  snapshotId, source, sourceUrl, apiQuery,
  indicatorId, indicatorName, unit, estimateFlag,
  datasetVersion,   // the provider's last-updated date
  retrievedAt,      // ISO date we fetched it
  license,          // CC BY 4.0
  rowCount, coveredYears: [minYear, maxYear], jurisdictionCount,
  transformationVersion,
  limitations,
  checksum,         // sha256 over `rows`
  rows: [{ iso3, year, value }, ...]
}
```

## Immutability

- The filename embeds the dataset version. A changed provider version produces a
  **new file** — snapshots are never overwritten in place. `fetch-worldbank.mjs`
  refuses to overwrite an existing versioned file.
- The `checksum` is a SHA-256 over the row array. `checksumValid()` recomputes and
  compares; the validator fails on a mismatch and the `/datasets/[dataset]` page
  displays the verification result.
- `retrievedAt` is fixed to the retrieval date (not `Date.now()`), so builds are
  deterministic.

## Regeneration

`node scripts/fetch-worldbank.mjs` re-fetches the curated indicator set for all
countries and writes any snapshots whose version is not already on disk. It also
writes `worldbank__countries.json` (country metadata: region, income level,
capital, coordinates), excluding World Bank aggregate regions.

## Current snapshots

16 indicators across land, production, yield, economy, inputs, environment, and
population, plus the country-metadata snapshot — all at World Bank dataset
version `2026-07-01`, retrieved `2026-07-12`, covering 2000–2024 with 180–217
jurisdictions each. The `/datasets` page lists them with coverage and version;
each `/datasets/[dataset]` page shows full provenance and the checksum.

## Limitations

World Bank series are compiled from FAO and national sources and are periodically
revised; some (e.g. employment in agriculture) are modeled estimates; irrigation
coverage is sparse. For authoritative current figures, consult the primary
dataset linked on each page.
