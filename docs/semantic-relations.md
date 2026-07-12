# Semantic relations

Knowledge-graph edges carry a typed semantic relation from a controlled
vocabulary (`RelationType` in [`types/content.ts`](../types/content.ts)). The
edge-derivation logic is in [`lib/content/relations.ts`](../lib/content/relations.ts).

## How relations are assigned

1. **Strongly-typed fields → precise, content-verified relations.** These are
   authored per-entity and their semantics are unambiguous:

   | Field (on)              | Relation          | Example                         |
   | ----------------------- | ----------------- | ------------------------------- |
   | `commonDiseases` (crop) | `susceptibleTo`   | wheat → powdery-mildew          |
   | `commonPests` (crop)    | `susceptibleTo`   | potato → colorado-potato-beetle |
   | `suitableSoils` (crop)  | `suitableForSoil` | wheat → loam-soil               |
   | `suitedCrops` (soil)    | `suitableFor`     | clay-soil → wheat               |
   | `hostCrops` (disease)   | `affects`         | late-blight → potato            |
   | `hostCrops` (pest)      | `affects`         | aphids → wheat                  |

2. **Generic `connections` → a documented, deterministic (from-type → to-type)
   mapping.** Structurally clear pairs get specific relations
   (`crop → irrigation-method` = `irrigatedBy`, `fertilizer → nutrient` =
   `suppliesNutrient`, `nutrient → fertilizer` = `suppliedByFertilizer`,
   `livestock → crop` = `feedsOn`, `farming-system → livestock` =
   `includesLivestock`, `machinery → crop` = `usedToCultivate`/`usedToHarvest`/
   `usedToApply` by `machineryClass`, …). **Ambiguous pairs resolve to
   `relatedConcept`** rather than asserting causation. `relatedTopics` edges are
   always `relatedConcept`.

This split is deliberate: relation _types_ on typed fields are content-verified,
while relation _types_ on generic connections are derived structurally and
documented — they are not claimed to be independently source-verified per edge.

## Direction, dedup, and reciprocity

- Every edge is directed (`from` → `to`).
- Edges are **deduplicated per entity**: at most one edge between two entities;
  if declared via multiple fields, the most specific (non-`relatedConcept`)
  relation wins.
- **Reciprocity is not forced.** Reverse relationships are computed for display
  only. `INVERSE_RELATION` defines inverses **only where they are semantically
  equivalent** (`affects`↔`susceptibleTo`, `suppliesNutrient`↔
  `suppliedByFertilizer`, `irrigatedBy`↔`irrigates`, `partOfFarmingSystem`↔
  `includesCrop`, `commonlyRaisedIn`↔`includesLivestock`, `relatedConcept`
  self‑inverse). A reciprocal edge that reuses a non-symmetric relation is a
  validation error.

## Validation gates

`content:validate` fails on: unknown relation types (`bad-relation`), duplicate
semantic edges (`duplicate-edge`), and semantically-incorrect forced reciprocity
(`incorrect-reciprocity`). Entity resolution is enforced elsewhere
(`unresolved-ref`). `npm run audit` reports the full edge distribution, generic
share, degree extremes, and reciprocity check.

## Current distribution

~3,950 edges; ~64% carry a specific (non-generic) relation. Top relations:
`susceptibleTo`, `requiresNutrient`, `suitableForSoil`, `sensitiveToClimate`,
`affects`, `riskIncreasesUnder`.
