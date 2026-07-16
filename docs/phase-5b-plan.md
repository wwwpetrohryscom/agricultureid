# Phase 5B — implementation plan (frozen before bulk authoring)

**Branch:** `feat/phase-5b-post-harvest-quality` · **Base:** merged main `9fcf4a9`.

## 1. The central constraint: no duplicate post-harvest intent

Phase 4D already shipped a `post-harvest` content type with 22 published entries
that already span processes, storage systems, cooling, packaging, and quality
concepts, discriminated by `postHarvestClass`. Phase 5A then wired **130
`storageSystems` references** from 81 commodities to those post-harvest slugs.

Creating separate `StorageSystemEntry` / `PackagingSystemEntry` page types would
therefore:

- duplicate the intent of existing pages (`hermetic-storage`, `cold-storage`,
  `controlled-atmosphere-storage`, `packing-and-packaging`, …), which the
  anti-spam rule forbids;
- break all 130 Phase 5A commodity→storage edges;
- force a Phase 5A validator change to accept a new target type.

**Decision.** Follow the brief's "create **or strengthen**":

- **Strengthen `post-harvest`** into the process/system model the brief
  describes, keeping its URLs and all 130 inbound 5A edges intact. It gains the
  5B fields (applicable commodities, stage, equipment, monitoring, risks,
  quality effects, safety limitations) and **class-conditional validation**.
- **Add three genuinely new types** that have no existing home and no duplicate
  intent:
  - `quality-attribute` — a measurable property of a lot (moisture content,
    water activity, test weight, firmness, soluble solids…);
  - `post-harvest-defect` — a deterioration/defect concept (bruising, chilling
    injury, sprouting, internal browning…);
  - `quality-measurement` — a method or instrument that measures an attribute
    (oven-drying, moisture meter, penetrometer, refractometer, NIR…).
- **Storage pests** go into the existing `pest` type (they are pests, and the
  type already models hosts) rather than a parallel `PostHarvestPestEntry`.

## 2. Frozen schema

### Strengthened `PostHarvestContent`

Existing: `postHarvestClass` (`handling|drying|cooling|storage|processing|quality|loss-management`).
Added (all optional unless noted):
`applicableCommodityClasses`, `applicableCommodities` (→ commodity refs),
`processStage`, `operatingPrinciple`, `equipment` (→ machinery refs),
`measurableInputs`, `measurableOutputs`, `qualityEffects`, `riskFactors`,
`environmentalContext`, `monitoringMethods` (→ quality-measurement refs),
`safetyLimitations`, `relevantStandards` (→ commodity-grade refs).

**Class-conditional rule (validator):** entries with `postHarvestClass` of
`storage` or `cooling` must declare `operatingPrinciple` and `riskFactors` — a
storage system described without its principle or its risks is a shell.

### New: `QualityAttributeContent`

`attributeClass` (`physical|chemical|biological|sensory|composite`),
`measurementBasis?` (e.g. wet basis / dry basis / as-received),
`typicalUnits?` (labels only — never values), `appliesToCommodities` (→ refs),
`measuredBy` (→ quality-measurement refs), `relatedDefects` (→ defect refs),
`qualityDomain` **(required)**, `notAnIndicatorOf` **(required)**.

`qualityDomain` is the brief's separation made structural — one of
`quality-measurement | commercial-grading | food-feed-safety | storage-stability
| processing-suitability`. `notAnIndicatorOf` forces every attribute page to say
what it does **not** tell you (moisture is not a safety verdict).

### New: `PostHarvestDefectContent`

`defectClass` (`mechanical|physiological|pathological|entomological|chemical|
handling`), `affectedCommodities` (→ refs), `causedByConditions`,
`reducedByProcesses` (→ post-harvest refs), `confusableWith?`,
`diagnosticLimitations` **(required)** — visual symptoms are never a definitive
diagnosis.

### New: `QualityMeasurementContent`

`measurementClass` (`instrumental|laboratory|sensory|visual|destructive|
non-destructive`), `measures` (→ quality-attribute refs, required non-empty),
`principle`, `sampleRequirement?`, `destructive?`, `referenceMethodNote?`,
`measurementLimitations` **(required)**.

### Relations added (with inverses)

`hasQualityAttribute`/`qualityAttributeOf`, `measuredBy`/`measures`,
`susceptibleToDefect`/`defectOf`, `reducedByProcess`/`reduces`,
`monitoredWith`/`monitors`, `damagesCommodity`.

## 3. Validator strengthening (never weakening)

1. **Tighten 5A's `storageSystems`**: it currently accepts any `post-harvest`
   target, so some commodities list `sun-drying`, `curing`,
   `sorting-and-grading`, and `modified-atmosphere-packaging` as storage
   systems. Those are processes. `storageSystems` will require
   `postHarvestClass ∈ {storage, cooling}`; offending refs move to
   `connections`, where they belong.
2. Class-conditional post-harvest requirements (above).
3. Quality attributes: `qualityDomain` valid; `notAnIndicatorOf` non-empty; any
   `typicalUnits` are unit **labels**, never values.
4. Defects: `diagnosticLimitations` non-empty; `reducedByProcesses` resolve to
   post-harvest entries.
5. Measurements: `measures` non-empty and resolving to quality attributes;
   `measurementLimitations` non-empty.
6. Reciprocity: `attribute.measuredBy` ↔ `measurement.measures`.

## 4. Scope (ceilings, not quotas)

| Kind                                                                          |         Target | Existing | Add |
| ----------------------------------------------------------------------------- | -------------: | -------: | --: |
| post-harvest processes (`handling/drying/cooling/processing/loss-management`) |          30–45 |       13 | ~22 |
| storage systems (`post-harvest`, class `storage`/`cooling`)                   |          20–30 |        7 | ~15 |
| packaging & handling systems (`post-harvest`, class `handling`)               |          15–25 |        2 | ~15 |
| quality attributes (new type)                                                 |          25–40 |        0 | ~30 |
| defects/deterioration (new type)                                              |          20–35 |        0 | ~26 |
| measurement concepts (new type)                                               |          15–25 |        0 | ~18 |
| storage pests (existing `pest` type)                                          | justified only |        0 |  ~8 |

## 5. Hard content rules

- **No universal moisture, temperature, duration, or storage recommendation.**
  Any quantitative value requires commodity + basis + unit + source +
  date/version + context + limitation, or it is omitted.
- Quality, commercial grading, food/feed safety, storage stability, and
  processing suitability are **distinct** — `qualityDomain` and
  `notAnIndicatorOf` enforce it on every attribute page.
- No fumigant/pesticide dosages, no controlled-atmosphere gas procedures, no
  confined-space entry procedures, no machinery operating instructions.
- Visual symptoms are never definitive diagnosis (`diagnosticLimitations`).
- No images in this phase; `imageIdentity`-style claims are not asserted.

## 6. Waves

1. Schema freeze + validator + routes + seeds (prove the model).
2. Storage-systems tightening + fix mis-typed 5A `storageSystems` refs.
3. Bulk authoring (parallel, per cluster).
4. Search/sitemap/panels integration.
5. Tests + docs.

Each wave runs: `format:check`, `typecheck`, `lint`, `content:validate`, `test`,
`build`, `validate`, `audit`, `seo:audit`, `search:benchmark`.

## 7. Deployment

None. Status remains **AWAITING USER — Vercel project linking**.
