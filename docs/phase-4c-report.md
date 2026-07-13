# Phase 4C report — Geographic & Agroecological Depth

**Branch:** `feat/phase-4c-geographic-depth` (base: main `3494b60`). **Not deployed.**

## Delivered

A sourced, subnational layer beneath the Phase 3B country model — climate/
agroecological zones and administrative-region agriculture profiles — with no
fabricated numbers.

- **18 agroecological zones** (Köppen–Geiger): `Af, Am, Aw, BWh, BWk, BSh, BSk,
Csa, Csb, Cfa, Cfb, Cwa, Dfa, Dfb, Dfc, Dwa, Dsb, ET`. Each carries climate,
  growing-period, soil/vegetation, and agricultural-relevance context plus
  WMO/NOAA sources and limitations.
- **63 subnational region profiles across 10 countries** — United States (13),
  Canada (5), Australia (7), Brazil (7), France (7), Germany (6), Spain (4),
  Italy (5), Poland (3), India (6). Each keyed to its official **ISO 3166-2**
  code, region-specific (no sliced country prose), and linked to published
  crop/livestock entities via typed connections.
- **Model:** `types/region.ts` — `AgroecologicalZone` + `RegionProfile`.
- **Data:** `data/geo/zones.ts` (18 zones via a `z()` factory) and
  `data/geo/regions/*.ts` (one file per region, auto-barrelled by
  `scripts/build-region-index.mjs`).
- **Registry:** `lib/geo/region-registry.ts` — `REGIONS`, `ZONES`,
  `regionsForCountry`, `getRegion`, `allRegions`, `regionPath`,
  `countriesWithRegions`, `zonesSorted`, `getZone`, `zonePath`.
- **Routes:** `/agroecological-zones` hub + `/agroecological-zones/[slug]`;
  `/countries/[country]/regions` list + `/countries/[country]/regions/[region]`
  profile. Country profiles link to their region list when regions exist.
- **Wiring:** all zone + region routes added to the sitemap
  (`lib/seo/routes.ts`), indexed for search (`lib/search/documents.ts`,
  `types/search.ts` gains `region` + `agroecological-zone`), and an
  "Agroecological Zones" nav section (`lib/site.ts`).
- **Validators** (`lib/geo/validate-regions.ts`, in `content:validate`): unique
  zone slugs/codes, valid climate group, registered zone sources; unique region
  key/`regionId`, ISO3 country code, resolving published parent country, ISO
  3166-2 official code, referenced Köppen codes exist, non-empty
  crop/livestock/institution/limitation/source lists, registered sources,
  statistic completeness, and every content connection resolves.
- **Tests:** `tests/phase4c.test.ts` — 20 tests (zone/region integrity, registry
  helpers, validator clean, sitemap + search coverage).
- **Docs:** `docs/geographic-depth.md`.

## Anti-fabrication decisions worth recording

- **No `statistic` on any of the 63 profiles.** No region-level figure could be
  attributed to a specific official source with a year and unit, so the field
  was omitted everywhere rather than guessed. Numbers are deferred to the named
  statistical offices (USDA NASS, IBGE/CONAB, Agreste, Destatis, ISTAT, GUS,
  MAPA/INE, etc.).
- **Köppen substitutions flagged**, not forced: Bahia's coastal `As` (outside the
  registered set) was represented as `Am`; Washington's dry-summer Palouse uses
  `Dsb`. Each is noted in the region's `limitations`.
- **Only real content connections.** Crops without a page (e.g. hops) are
  described in prose but not linked; connections resolve to existing published
  crop/livestock entities only. `canola` links via the existing `oilseed-rape`
  slug (noted in limitations).
- **Accuracy caveats embedded** where legacy rankings mislead: Florida citrus
  greening (HLB), Apulia _Xylella_ olive dieback, Castilla-La Mancha aquifer
  overdraft.

## Infrastructure fix

`data/geo/regions.ts` (Phase 3B World-Bank macro-regions) was shadowing the new
`data/geo/regions/` directory in module resolution. Renamed it to
`data/geo/wb-regions.ts` and updated its three importers
(`lib/geo/registry.ts`, `lib/geo/validate-geo.ts`, `tests/phase3b.test.ts`); the
3B `REGIONS` export itself is unchanged.

## Validation (all green, local)

- `tsc --noEmit` — 0 errors.
- `next lint` — 0 warnings/errors.
- `content:validate` — 0 errors, 0 warnings (493 content items; region + zone
  validators pass).
- `vitest run` — **143 tests pass** (123 prior + 20 new Phase 4C).
- `next build` — succeeds; prerenders 63 region profiles, 10 region lists, and
  18 zone pages + the zone hub.
- `search:index` — 712 documents (631 prior + 63 regions + 18 zones).

## Not done (by instruction)

No deployment. No Vercel project/link, no `vercel`/CLI/token, no DNS/domain, no
IndexNow/sitemap submission. Deployment status remains **AWAITING USER — Vercel
project linking.**
