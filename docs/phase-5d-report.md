# Phase 5D — Trade, Logistics, Standards, and Market Data

Base: merged main `ddd33cb` (Phase 5C). Branch: `feat/phase-5d-trade-logistics-standards`.

## What shipped

|                   |                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| New content types | 5 — `trade-concept`, `logistics-concept`, `standard-reference`, `market-term`, `supply-chain-risk` |
| New pages         | 126 (32 trade · 23 logistics · 25 standards · 26 market terms · 20 risks)                          |
| New routes        | `/trade`, `/logistics`, `/standards`, `/market-terms`, `/supply-chain-risks`                       |
| New dataset       | FAOSTAT Detailed Trade Matrix snapshot — 64 commodities, 13,529 reporter-observations              |
| New sources       | 24 (73 total), each explicitly evidence-tiered                                                     |
| Corpus            | 1,068 items · 8,907 semantic edges · 1,350 routes                                                  |
| Sitemap           | new `trade` shard (126 entries); hubs stay in `pages`                                              |

## The model: 9 proposed entities → 5 types

§2 required inspecting existing types before creating new ones. Four of the
brief's entities did not earn a type:

| Brief entity                 | Decision                                             | Why                                                                                             |
| ---------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `TransportModeEntry`         | field `logisticsClass: 'transport-mode'`             | a "sea freight" page and a "palletisation" page share intent, rendering, and relation semantics |
| `CertificationConceptEntry`  | field `standardClass: 'certification-scheme'`        | a scheme is a standard plus conformity assessment — same body, edition, copyright constraints   |
| `TradeDatasetEntry`          | reused Phase 4A `DatasetRegistryEntry` + `/datasets` | already models this, down to an `api-key-required` access flag                                  |
| `CommodityTradeProfileEntry` | a panel on `/commodities/[slug]`                     | trade figures are a view over the commodity that already owns the subject                       |

There is deliberately **no `/trade-data` route** — it would compete with
`/datasets` and `/commodities` for the same queries. `tests/phase5d.test.ts`
asserts all four decisions, so re-adding them fails the build.

## The data: what the sources actually allowed

**UN Comtrade returns HTTP 401** — registration/subscription required. Per §5 it
is documented, not faked: it has a source record, and
[`trade-data-licensing.md`](trade-data-licensing.md) states why there is no
integration. **FAOSTAT bulk is open** (HTTP 206) under CC BY 4.0, so the
Detailed Trade Matrix became the source: 8.5 GB streamed in one pass (52.4M rows
scanned, 1.26M kept), reference year 2022.

### Four findings that shaped the pipeline

1. **FAOSTAT ships aggregates as reporters.** `World` (5000), `Western Europe`
   (5404) and friends appear alongside countries. Codes ≥5000 are excluded and
   world totals are recomputed by summing real reporters. Without this, "World"
   ranks as the top exporter of everything.

2. **Non-reporting is invisible in coverage counts — and it matters.** The
   Russian Federation reported wheat exports in 2020 (37.3 Mt) and 2021 (27.3 Mt,
   rank #1) but **not 2022**. A naive 2022 "top wheat exporters" table shows
   Australia at #1 and silently omits the world's largest exporter. Reporter
   counts never reveal this — coverage stayed ~155 either way. Hence
   `notableNonReporters`, computed per commodity and rendered as a caution
   beside the table. 29 of 64 commodities carry one. **Absent is not zero.**

3. **Mirror gaps are real, and biggest where reporting is thinnest.** Reported
   world imports and exports of the same item-year disagree: wheat −1.0%, green
   coffee +1.4%, soybeans −5.1%, cocoa +6.0%; median 15.8%. The extremes are
   thin-reporting artefacts — sugarcane reaches 625% because it is crushed at
   origin and barely traded, and brown rice 109.5% on six reporting exporters.
   This is a property of reported trade, not an error in it, so no threshold is
   asserted; the test recomputes the gap from the totals it claims to compare,
   and reporter counts travel with every figure.

4. **A production item code does not imply a trade item.** Seed cotton has
   FAOSTAT production item 328 but no trade item — it is ginned at origin. This
   is why the concordance is not simply "read `commodityCodes`".

### The concordance

[`data/trade/faostat-concordance.ts`](../data/trade/faostat-concordance.ts) maps
**64 of 81 commodities** and excludes 17, each with a reason. A commodity is
mapped only when exactly one FAOSTAT trade item corresponds to it; it is
excluded when no trade item exists, when the only candidate bundles it with
other commodities (`aggregate-item`), when the item definition could not be
matched confidently (`ambiguous-item`), or when it is split across items
(`split-item`).

Excluding major commodities was deliberate: **mangoes** (item 571 is "Mangoes;
guavas and mangosteens"), **table and wine grapes** (item 560 is one combined
"Grapes"), **lemons** ("Lemons and limes"), **broccoli** ("Cauliflowers and
broccoli"). A mango figure that silently includes guavas is worse than no mango
figure. The test asserts all 81 commodities are accounted for exactly once.

The concordance was derived independently and cross-checked against the FAOSTAT
codes already on commodity pages: **19 of 21 agreed, 0 disagreed** — and the
cross-check caught a real bug, `wheat-grain` having been dropped from the
mapping entirely. A test now asserts the two never drift.

## The validator: three rules that carry the phase

[`lib/trade/validate-trade.ts`](../lib/trade/validate-trade.ts). Each exists
because the failure would be invisible to every other check:

- **`mkt-price-like-figure`** — no currency, percentage, or per-tonne figure on a
  market-term page. A definition never needs a number, and an illustrative one
  reads as a quotation. (Counterpart of Phase 5B's `LOOKS_LIKE_A_VALUE`.)
- **`risk-assigns-a-level`** — no "high risk" / "risk score" language. The risk
  model has no likelihood or severity field _by design_; this stops the claim
  being smuggled back as prose.
- **`std-is-really-a-grade`** — a `standard-reference` in the `quality-grading`
  domain scoped to exactly one commodity is a `commodity-grade`, and is rejected
  so `/standards` and `/commodity-grades` cannot compete for one intent.

Both scanners strip the required disclaimer before matching, since the
disclaimers necessarily contain the very words they forbid.

## Migration: two standards that were in the wrong place

`codex-standards-overview` and `unece-fresh-produce-standards` were filed as
`commodity-grade` with `gradedCommodity: green-coffee` and `fresh-apples`. The
token commodity was the tell — it existed only to satisfy a required field.
Codex is not a grade of green coffee. Both moved to `standard-reference`
(19 references repointed across 14 files); `commodity-grade` is now 6 entries,
all genuine USDA commodity grades with a real `gradedCommodity`.

The Phase 5B rule restricting `relevantStandards` to `commodity-grade` was
**widened**, not weakened: the ref must still resolve and must still be one of
two valid types. Before 5D, `commodity-grade` was the only place a standard
could live.

## Bugs this phase caught

- **My own `FIELD_RELATION` collision.** I added `relevantStandards`,
  `applicableCommodities`, and `affectedCommodities` on the stated assumption
  that field names are unique per type. They are not — `relevantStandards` means
  `gradedUnder` on a post-harvest operation but `governedByStandard` on a trade
  concept. JS last-wins was silently handing 5D fields the 5B relations. Fixed
  with `TYPED_FIELD_RELATION`, keyed `contentType.field` and consulted first.
- **A non-involutive inverse.** `exposedToRisk: 'riskAffects'` was declared
  without the reverse, so the graph dead-ended walking backwards.
- **An empty table header** on `market-depth`, caught by the accessibility audit.
- **The `wheat-grain` concordance gap**, caught by the cross-check above.
- **Phase 4A's dataset test** asserted every dataset resolves to a World Bank
  indicator with `expectedColumns === ['iso3','year','value']` — stricter than
  `types/data-ops.ts`'s own design intent ("nothing here assumes the World Bank
  cadence"). Scoped to World Bank datasets, with a new test exercising the
  multi-provider claim rather than dropping the coverage.

## Reciprocity is generated, not hand-written

Following Phase 5C's `producedBy`,
[`scripts/build-trade-reciprocity.mjs`](../scripts/build-trade-reciprocity.mjs)
computes the symmetric closure of `relatedConcepts` / `relatedLogistics` /
`relatedStandards` / `relatedTerms` / `relatedRisks` — 161 one-way edges were
made symmetric. A one-way "related" link is a door the reader walks through and
cannot walk back.

## Known limitations

- **The logistics no-numbers rule has no scanner.** Market terms and risks have
  automated ones; logistics relies on editorial discipline. An audit of the 23
  pages found zero numeric temperatures, transit times, or capacities, but
  nothing enforces it on the next page written. This is the phase's clearest
  enforcement gap.
- **Editions are mostly descriptive.** For 23 of 25 standards no edition number
  is asserted, because guessing one would be precisely wrong. Only the WTO SPS
  and TBT Agreements carry dates (Marrakesh 1994 / in force 1995), as settled
  historical fact rather than a revisable edition.
- **Trade figures are one dataset, one year, one version.** They describe what
  reporters declared in 2022, not what moved, and not a market.
- **The checksum covers the file, not the upstream extraction.** It proves the
  snapshot has not been edited since generation; it cannot prove the 8.5 GB
  source was read correctly. The ground-truth spot checks (China's 91.1 Mt
  soybean imports, Brazil leading coffee) are what stand behind that.
- **`std-is-really-a-grade` catches the structural case only.** A standard
  scoped to two commodities in a grading domain would pass and might still
  belong in `commodity-grade`. As with Phase 5C's chain rule, the validator is
  necessary but not sufficient.

## Gates on the final branch state

| Gate               | Result                                              |
| ------------------ | --------------------------------------------------- |
| `format:check`     | ✓                                                   |
| `typecheck`        | 0 errors                                            |
| `lint`             | 0 warnings                                          |
| `content:validate` | **0 errors, 0 warnings** (1,068 items)              |
| `vitest`           | **253 passed** (22 files)                           |
| `build`            | ✓ 102 kB shared JS                                  |
| `audit`            | 0 missing quantitative provenance                   |
| `seo:audit`        | **0 errors, 0 orphans** (1,350 routes, max depth 4) |
| `search:benchmark` | 82/82 · TOP-1 100% · 0 unsafe equivalences          |
| `data:validate`    | 0 errors, 0 warnings                                |

## Deployment

Nothing was deployed. No Vercel project was created or connected, no CLI
installed, no DNS touched, no sitemap or IndexNow submitted, no analytics
activated.

**Status: `AWAITING USER — Vercel project linking`.**
