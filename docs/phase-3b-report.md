# Phase 3B report — geographic agriculture intelligence

**Branch:** `feat/phase-3b-geographic-intelligence`
**Base:** `feat/phase-3a-cultivars-breeds` (rebased onto the now-merged `main` at
`995f11b`; documented in [`phase-3-architecture.md`](./phase-3-architecture.md)).
**Deployment:** none. Not merged, not deployed.

## What shipped

Date-versioned country agriculture profiles built on **real, official, open
data**, with a hard separation between stable descriptive facts and dated,
versioned statistics.

| Metric                          | Value                                                    |
| ------------------------------- | -------------------------------------------------------- |
| Country profiles                | **40**                                                   |
| Regions                         | 7 (World Bank groupings)                                 |
| Indicators                      | **16** (World Bank WDI)                                  |
| Dataset snapshots               | **16** indicator snapshots + 1 country-metadata snapshot |
| Statistical rows (observations) | **71,888**                                               |
| Derived values                  | 1 formula (arable share of agricultural land)            |
| Static pages built              | **612** (was 530 after 3A)                               |

## Data source (senior decision, documented)

FAOSTAT's API now requires an API key (returns `Missing Authorization Header`),
so 3B standardises on **World Bank Open Data (World Development Indicators)** —
keyless, openly licensed (**CC BY 4.0**), versioned (`lastupdated`), and carrying
the same underlying FAO series plus World Bank compilation. We do **not** scrape
dashboards or search results. All snapshots are at dataset version `2026-07-01`,
retrieved `2026-07-12`, covering 2000–2024.

## Countries (40, by region)

- **North America:** United States, Canada
- **Latin America & Caribbean:** Brazil, Argentina, Mexico, Chile, Peru, Colombia
- **Europe & Central Asia:** France, Germany, Spain, Italy, Netherlands, United
  Kingdom, Ukraine, Poland, Czechia, Romania, Hungary, Portugal, Greece, Turkiye
- **East Asia & Pacific:** China, Japan, Korea (Rep.), New Zealand, Australia,
  Indonesia, Viet Nam, Thailand
- **South Asia:** India
- **Middle East, North Africa, Afghanistan & Pakistan:** Pakistan, Morocco,
  Egypt (Arab Rep.), Saudi Arabia, United Arab Emirates
- **Sub-Saharan Africa:** South Africa, Kenya, Ethiopia, Nigeria

## Indicators (16)

Agricultural land (% and sq. km), arable land (% and per person), cereal yield,
cereal production, crop/food/livestock production indices, agriculture value
added (% GDP), employment in agriculture (modeled estimate — flagged), fertilizer
consumption, forest area, irrigated agricultural land, average precipitation,
rural population.

## Snapshot architecture

Each indicator is captured as an **immutable, versioned, checksummed** snapshot
(`data/snapshots/worldbank__<indicator>__<version>.json`). Snapshots record source,
dataset version, retrieval date, license, coverage, row count, and a SHA-256 over
the rows. A changed dataset version is a new file — never an overwrite. The
`/datasets/[dataset]` page shows full provenance and verifies the checksum live.

## Statistical honesty (enforced)

- Every statistic carries year, unit, source, and dataset version. No figure is
  written into evergreen prose (validator warns on volatile numbers in overviews).
- Modeled indicators (employment in agriculture) are flagged as estimates.
- Non-comparable indicators (index bases) are not framed as cross-country
  rankings; country tables order alphabetically and label each row's own year.
- Derived values record formula id/version, calc version, inputs, and input
  source versions, and never extrapolate (no common year → no value).

## Routes

`/countries`, `/countries/[country]`, `/agricultural-data`,
`/agricultural-data/[indicator]`, `/datasets`, `/datasets/[dataset]`,
`/regions/[region]`, `/methodology/data`. All are in the sitemap. Charts are
server-rendered SVG with bars from a zero baseline (no misleading truncation) and
an always-available data-table fallback.

## Validation results (deterministic gate — all green)

| Check              | Result                                                |
| ------------------ | ----------------------------------------------------- |
| `format:check`     | pass (snapshots `.prettierignore`d as generated data) |
| `typecheck`        | pass                                                  |
| `lint`             | pass (0 warnings)                                     |
| `content:validate` | **0 errors, 0 warnings**                              |
| `test`             | **79 passed** (11 files; +`tests/phase3b.test.ts`)    |
| `build`            | **612 static pages**                                  |
| `audit`            | 4,476 semantic edges, 0 incorrect reciprocity         |

New geo validators (`lib/geo/validate-geo.ts`): snapshot metadata + checksum,
row-count integrity, duplicate indicator/year/jurisdiction, unit match, unknown
country codes, derived-value formula provenance, and per-profile checks (valid
region, **region matches authoritative metadata**, resolvable code, valid
indicators/sources, resolvable connections, no volatile prose numbers, anti-thin).

## Missing-data limitations

Irrigation coverage is sparse (only ~121 jurisdictions). World Bank series are
compiled from FAO and national sources and periodically revised; some are modeled
estimates; national urban/rural and land-use definitions differ. Country coverage
is a curated launch set of 40, not global. These are stated on the pages and in
`/methodology/data`.

## Unresolved / judgement calls

- **Turkiye** placed in `Europe & Central Asia` to match its World Bank metadata
  region (a validator now enforces profile-region = metadata-region).
- Institution URLs were included only where a stable domain was confident;
  volatile ministry names were described rather than deep-linked.
- Some economically important crops lacked an existing content slug and were
  covered in prose rather than as graph connections (no fabricated links).

## Commits

See branch history: geographic model + snapshot pipeline + real data + routes +
charts + validators, then country profiles, then tests + docs + report. Pushed
after the full deterministic gate passed. **Not merged; not deployed.**
