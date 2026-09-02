# Crop encyclopedia Waves 39–42 — baseline

Recorded 2026-09-02 against merged `main` at `6a13137`. Worktree clean, no open
PRs, no remote feature branches. Local `main` equals `origin/main`.

Every figure below was measured from the repository. The brief's reported
baseline matched in every particular, which is worth stating because the
previous programme's did not.

## Corpus

|                                     |          |
| ----------------------------------- | -------- |
| Verified crop identities            | 350      |
| Published crop articles             | 165      |
| Data-only taxa                      | 185      |
| Families / genera represented       | 74 / 213 |
| Published knowledge hubs            | 12       |
| Declared multi-taxon concept scopes | 11       |

## Editorial status of the 189 researched candidates

| Outcome                        | n      |
| ------------------------------ | ------ |
| `READY_BUT_DEFER_EDITORIAL`    | **54** |
| `DATA_ONLY_SUFFICIENT`         | 98     |
| `AGRICULTURAL_CONCEPT_COMPLEX` | 24     |
| `PROMOTE_FULL_PROFILE`         | 5      |
| `TAXONOMY_COMPLEX`             | 4      |
| `DUPLICATES_EXISTING_CONCEPT`  | 3      |
| `LOW_EDITORIAL_PRIORITY`       | 1      |

Unreviewed candidates: **0**.

### The 54 ready crops, by cohort

- **forage and pasture (8)** — berseem clover, birdsfoot trefoil, cocksfoot,
  Italian ryegrass, napier grass, sainfoin, tall fescue, timothy
- **vegetables (8)** — bitter gourd, Brussels sprouts, chayote, Chinese cabbage,
  daikon, pak choi, tomatillo, water spinach
- **oilseeds (7)** — camelina, chia, Ethiopian mustard, jatropha, jojoba,
  niger seed, perilla
- **cereals (6)** — einkorn, emmer, foxtail millet, proso millet, spelt,
  wild rice
- **fruit (5)** — see repository listing
- **spices and herbs (4)** — cassia cinnamon, fenugreek, star anise, wasabi
- **pulses (3)** — adzuki bean, lima bean, winged bean
- **industrial (3)** — miscanthus, stevia, switchgrass
- **fibre (2)** — abaca, sisal
- **roots and tubers (2)** — Jerusalem artichoke, oca
- **nuts (1)** — Brazil nut
- **beverage (1)** — yerba maté

## Cross-layer coverage, of 165 published crops

| Layer                | Crops |
| -------------------- | ----- |
| soils                | 165   |
| climate              | 156   |
| relatedCrops         | 76    |
| biosecurity          | 64    |
| markets              | 57    |
| extension            | 45    |
| cultivars            | 15    |
| economics            | 9     |
| varietyRegistrations | 8     |
| calendars            | 6     |
| trade                | 0     |

## Routes, search and build

|                             |                                    |
| --------------------------- | ---------------------------------- |
| Rendered pages              | 1,597                              |
| Total routes / sitemap URLs | 1,596                              |
| Crop routes                 | 166 (165 articles + `/crops/taxa`) |
| Hub routes                  | 12                                 |
| Search documents            | 1,768                              |
| Search benchmark cases      | 309 (8 documented known issues)    |
| Search index, gzipped       | 194,329 bytes                      |
| Tests                       | 1,121 across 64 files              |
| Deterministic validators    | 31                                 |
| Build duration              | 24 s                               |
| First Load JS, shared       | 102 kB                             |
| Largest crop route          | `/crops/taxa`, 688 kB              |
| Largest hub route           | `/crops/groups/vegetables`, 228 kB |

## Standing constraints carried into Wave 39

- Trade coverage is deliberately zero; `BOTANICAL_SCOPE_AVAILABLE` was recorded
  after confirming EU Regulation 2019/2072 annexes carry a botanical scope.
- Crop calendars cannot be expanded from the source already in use: its
  machine-readable release returns 404 and the PDF resists extraction.
- Nine commodity→crop mappings are `BROADER_CROP_CONCEPT` and must not be
  attributed to a constituent species.
- Two reused-prose pairs remain, both legitimate; longest identical run 34 words.
