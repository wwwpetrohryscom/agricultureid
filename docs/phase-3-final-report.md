# Phase 3 — final consolidated report

Four programs, executed in strict order, each on its own branch, each fully
validated and pushed. **Nothing merged; nothing deployed.**

## Branches, base commits, and dependency chain

`main` (995f11b, Phase 2.1 merged) ← **3A** ← **3B** ← **3C** ← **3D**

| Program | Branch                                  | Base                       | Head      | Commits | Pushed |
| ------- | --------------------------------------- | -------------------------- | --------- | ------- | ------ |
| 3A      | `feat/phase-3a-cultivars-breeds`        | `main` @ 995f11b (rebased) | `1742ab9` | 2 waves | ✓      |
| 3B      | `feat/phase-3b-geographic-intelligence` | 3A @ 1742ab9               | `7bed3d8` | 2 waves | ✓      |
| 3C      | `feat/phase-3c-agricultural-tools`      | 3B @ 7bed3d8               | `f49f2f2` | 2 waves | ✓      |
| 3D      | `feat/phase-3d-search-graph-ux`         | 3C @ f49f2f2               | `725e9c0` | 2 waves | ✓      |

**Base-commit note:** Phase 2.1 was squash-merged into `main` (PRs #3, #4) while
3A was in flight, so 3A (which carried the original 2.1 commits) was rebased onto
the new `main` — the redundant 2.1 commits dropped, only genuine 3A changes on
top. PR #5 (3A→main) is **MERGEABLE**. Recommended merge order = the chain above,
oldest first, each behind its own review.

**Deployment status:** none. No program merged; nothing deployed to Vercel.

## Content & data added

|                             | Count                                        |
| --------------------------- | -------------------------------------------- |
| Cultivars (3A)              | 77 across 15 crops                           |
| Breeds (3A)                 | 71 across 6 species                          |
| Country profiles (3B)       | 40 across 7 World Bank regions               |
| Dataset snapshots (3B)      | 16 indicator + 1 country-metadata            |
| Indicators (3B)             | 16 (World Bank WDI)                          |
| Statistical rows (3B)       | 71,888 observations                          |
| Derived-value formulas (3B) | 1 (arable share of agricultural land)        |
| Calculators (3C)            | 7                                            |
| Formulas (3C)               | 12 (formula v1.0.0 / calc v1), 18 test cases |
| Search documents (3D)       | 574 (18 entity types)                        |
| Synonyms (3D)               | 27                                           |
| Search facets (3D)          | 5                                            |
| Semantic edges (graph)      | 4,476 (0 incorrect reciprocity)              |

**Registries used:** FAO DAD-IS, USDA GRIN, UPOV (PLUTO), CPVO, EU Common
Catalogue, The Livestock Conservancy, IITA, ICAR, Embrapa (3A); World Bank Open
Data / WDI (3B). No registry identifier or URL was fabricated.

## Build / pages / sitemap

- Static pages: 380 (Phase 2.1) → **530** (3A) → **612** (3B) → **620** (3C) →
  **622** (3D).
- Sitemap: static routes + all published content + geo routes (country /
  indicator / dataset / region) + tool routes + `/explore`. `/search` is
  `noindex` and excluded. Deterministic generation.

## Validation (deterministic gate — green at every program's tip)

`format:check` · `typecheck` · `lint` (0 warnings) · `content:validate`
(0 errors, 0 warnings) · `test` · `build` · `audit`. Network checks
(`source:health`, `audit:images`) are non-blocking and separate.

- Tests: 55 (pre-3A) → 67 → 79 → 93 → **107**.
- New validators, none weakened: 3A sub-entity gates (parent resolution,
  jurisdiction-aware status, unsourced-resistance/yield, image identity); 3B geo
  gates (snapshot checksum/metadata, unit match, dup indicator/year/jurisdiction,
  region-matches-metadata, no-volatile-prose); 3C formula-registry gate (**runs
  every formula test case at build**); 3D search gates (no unpublished in index,
  synonym safety, stale-index checksum).

## Source & image licensing

- 3A sub-entities launched **imageless by design** (no wrong-identity photos);
  the `ImageMeta.identityConfidence` model + gate is ready for verified images.
  Existing 228 licensed images unchanged.
- 3B data is **World Bank Open Data, CC BY 4.0**; no images added.
- 3C/3D added no images.

## Unresolved scientific / legal risks (documented, not hidden)

- **Cultivar corpus below the per-category target** (77 vs 120–180): only real,
  documented cultivars were authored (no padding), per the brief.
- **Cassava TMS 30572 / TME 419** modeled `registered` (Nigeria) via IITA; IITA
  is the breeder, not the release authority — flagged on the page and in the 3A
  report (a reviewer could prefer `unknown`/`historical`).
- **Type/group names** (Basmati, San Marzano, Acala/Pima, bean market classes)
  modeled as groups, not single cultivars; GI ≠ plant-variety protection stated.
- **World Bank** data is compiled/revised and partly modeled (employment est.);
  irrigation coverage sparse; coverage is a curated 40-country launch set.
- **Bushel weights** are legal/customary standards, not lot test weights.
- **Search typo tolerance** is deliberately conservative (hints, not silent
  auto-correct); the index is loaded whole (fine at 574 docs).
- Phase 2.1 unresolved-issues registry (cassava-bacterial-blight, SWD/Tephritidae,
  honey-bee sterility) remains as recorded; 3D's SWD synonym carries that caveat.

No independent scientific verification, legal approval, professional agronomic
review, complete global coverage, or real-time data is claimed. Statistics are
dated/versioned World Bank figures; calculator outputs are educational references,
not prescriptions.

## Recommended Phase 4

1. **Verified sub-entity imagery** — a Commons/official image wave for cultivars
   and breeds using the existing identity-confidence gate.
2. **Deepen the corpus** — more cultivars toward the 120–180 target; dedicated
   cassava-bacterial-blight and spotted-wing-drosophila entries (closes 2.1 items).
3. **Geographic depth** — more countries + regional (sub-national) profiles;
   automated snapshot refresh (scheduled `fetch-worldbank` → PR) with snapshot
   diffing; add AQUASTAT/Eurostat where openly licensed.
4. **Calculator modules** — sourced, crop-contextual extensions (e.g. GDD crop
   models) behind explicit provenance; more commodity bushel weights.
5. **Search at scale** — sharded/worker-backed index and server search route if
   the corpus grows an order of magnitude; optional compact graph visualization.
6. **Merge & deploy** — merge the chain (3A→3B→3C→3D) behind review, then a first
   Vercel deployment, once authorized.
