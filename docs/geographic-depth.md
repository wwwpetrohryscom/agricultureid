# Geographic & agroecological depth (Phase 4C)

Phase 4C adds two sourced, structured layers beneath the country-level
geographic model of Phase 3B:

1. **Agroecological zones** — a curated Köppen–Geiger climate/agroecological
   classification, each zone described for its agricultural relevance.
2. **Subnational region profiles** — curated agriculture profiles for
   first-order administrative units (states, regions, voivodeships, …) keyed to
   their official **ISO 3166-2** codes.

Both layers are _descriptive and referential_, not statistical dumps: they carry
no fabricated numbers. Where a subnational figure would be needed, the profile
points to the official statistical office rather than inventing a value.

## Agroecological zones

- **Model:** [`types/region.ts`](../types/region.ts) → `AgroecologicalZone`.
- **Data:** [`data/geo/zones.ts`](../data/geo/zones.ts) — 18 Köppen zones
  (`Af, Am, Aw, BWh, BWk, BSh, BSk, Csa, Csb, Cfa, Cfb, Cwa, Dfa, Dfb, Dfc,
Dwa, Dsb, ET`), each built through a `z()` factory that stamps the shared
  `system` (`Köppen-Geiger climate classification`) and provenance.
- **Fields:** `classification` (the Köppen code), `name`, `group`
  (`tropical | arid | temperate | continental | polar`), climate/growing-period/
  soil-vegetation context, `agriculturalRelevance`, `geographicScope`,
  `sourceReferences`, and `limitations`.
- **Indexing:** `ZONE_BY_SLUG` and `ZONE_BY_CODE` (maps). Regions reference
  zones **by Köppen code**, and the validator enforces that every referenced
  code exists in `ZONE_BY_CODE`.
- **Sources:** WMO / NOAA climate references (registered source IDs only).

## Subnational region profiles

- **Model:** [`types/region.ts`](../types/region.ts) → `RegionProfile`.
- **Data:** [`data/geo/regions/`](../data/geo/regions/) — one file per region,
  each exporting a camelCase `RegionProfile`. The barrel
  [`index.ts`](../data/geo/regions/index.ts) is **auto-generated** by
  [`scripts/build-region-index.mjs`](../scripts/build-region-index.mjs); never
  hand-edit it — add a file and re-run the generator.
- **Coverage (63 regions across 10 countries):** United States (13 states),
  Canada (Prairie + core provinces), Australia (states/territories), Brazil
  (7 states), France (7 regions), Germany (6 Länder), Spain (4 comunidades),
  Italy (5 regions), Poland (3 voivodeships), India (6 states).
- **Each profile is region-specific**, not sliced country text — e.g. Iowa =
  rainfed maize–soybean + the largest US hog concentration; Aragón = irrigated
  Ebro maize/Calanda peaches + Spain's largest pig herd; Mato Grosso =
  soybean/safrinha-maize/cotton/beef.
- **Fields:** ISO3 `countryCode`, `countrySlug`, `officialCode` (ISO 3166-2),
  `adminLevel`, climate/land context, `agroecologicalZones` (Köppen codes),
  crop/livestock systems, irrigation context, `officialInstitutions`, an
  optional single `statistic` (value+unit+year+source — omitted rather than
  guessed), `dataCoverage`, `sourceReferences`, `connections` (typed refs to
  published crop/livestock entities), and `limitations`.

## Routes

| Route                                   | Purpose                            | Indexed |
| --------------------------------------- | ---------------------------------- | ------- |
| `/agroecological-zones`                 | Zone hub, grouped by climate group | yes     |
| `/agroecological-zones/[slug]`          | One zone (e.g. `koppen-cfb`)       | yes     |
| `/countries/[country]/regions`          | Region list for a country          | yes     |
| `/countries/[country]/regions/[region]` | Region profile                     | yes     |

Country profile pages link to their region list when regions exist
([`components/geo/CountryProfileView.tsx`](../components/geo/CountryProfileView.tsx)).
All zone and region routes are emitted into the sitemap
([`lib/seo/routes.ts`](../lib/seo/routes.ts)) and indexed for site search
([`lib/search/documents.ts`](../lib/search/documents.ts)).

## Registry & validation

- **Registry:** [`lib/geo/region-registry.ts`](../lib/geo/region-registry.ts) —
  `REGIONS`, `ZONES`, `regionsForCountry`, `getRegion`, `allRegions`,
  `regionPath`, `countriesWithRegions`, `zonesSorted`, `getZone`, `zonePath`.
- **Validator:** [`lib/geo/validate-regions.ts`](../lib/geo/validate-regions.ts)
  → `regionIssues()`, wired into `content:validate`. It enforces: unique zone
  slugs/codes, valid climate group, zone sources registered; unique region
  key/`regionId`, ISO3 country code, a resolving **published** parent country
  profile, ISO 3166-2 `officialCode`, referenced Köppen codes exist, non-empty
  crop/livestock/institution/limitation/source lists, registered sources,
  statistic completeness (value+unit+year+source), and that every `connection`
  resolves to a real published entity.

## Module-resolution note

`data/geo/regions/` (this directory) would otherwise be shadowed by the Phase 3B
World-Bank macro-region file, which was renamed to
[`data/geo/wb-regions.ts`](../data/geo/wb-regions.ts) so `@/data/geo/regions`
resolves to the subnational directory barrel. The 3B `REGIONS` export is
unchanged; only its import path moved.

## Guarantees

- No fabricated statistics — the `statistic` field is omitted wherever a value
  could not be attributed to an official source with a year and unit.
- No generic AI photography; region pages are text/data only.
- Every Köppen code, source ID, and content connection is validated offline in
  `content:validate`; the build prerenders all 63 region profiles, 10 region
  lists, and 18 zone pages.
