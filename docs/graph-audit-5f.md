# Graph audit (Phase 5F, §5 and §6)

Every number here comes from [`scripts/graph-inbound-audit.ts`](../scripts/graph-inbound-audit.ts).
Run it: `npx tsx scripts/graph-inbound-audit.ts`.

Corpus at time of audit: **1,068 published pages, 11,082 semantic edges.**

## §5 — Zero-inbound

### The metric measures reciprocity, not isolation

**213 published pages have no inbound semantic edge.** All 213 were classified;
none were sampled.

The first thing the classification found is that the number does not mean what
it looks like:

- **0** of the 213 are isolates. Every one has outgoing edges.
- **206** of the 213 declare a relation whose **inverse is already defined** in
  `INVERSE_RELATION`. The inbound edge is _entailed by the page's own content_ —
  it does not need to be invented, authored, or guessed. It needs to be
  materialised.
- **213** of the 213 have a **rendered inbound link** on a real page (below).

`allSemanticEdges()` returns declared edges only; it never materialises any of
the 58 inverses the vocabulary defines (10 of them symmetric). So "inbound
degree" counts _how many authors wrote a ref at this page_ — a fact about
editorial reciprocity, not about the graph's connectivity.

### Classification

| Class                         | Count   | Basis                                                                                     |
| ----------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| `entity-needs-inbound`        | **105** | Declares a typed relation whose defined inverse would make the target point back          |
| `defect`                      | **101** | cultivar/breed — nav computes the parent→child inverse, the graph does not                |
| `intentionally-isolated`      | **7**   | Only generic/symmetric or non-invertible outgoing relations; no typed inbound is entailed |
| `root-hub`                    | 0       | —                                                                                         |
| `utility-tool`                | 0       | —                                                                                         |
| `legal-editorial-methodology` | 0       | —                                                                                         |
| `dataset-snapshot`            | 0       | —                                                                                         |

The four zero rows are zero **by construction, not by luck**: zero-inbound is
computed over `PUBLISHED_CONTENT`, which contains only entity pages. Hubs,
tools, legal/methodology pages and dataset snapshots are not content items, hold
no `ContentRef` fields, and are not in the semantic graph at all. They cannot
appear in this table in either direction — a fact the graph should not be read as
a judgement about them.

### By content type and route

| Content type          | Route                   | Count   |
| --------------------- | ----------------------- | ------- |
| `cultivar`            | `/cultivars`            | 54      |
| `breed`               | `/breeds`               | 47      |
| `post-harvest-defect` | `/post-harvest-defects` | 26      |
| `crop`                | `/crops`                | 23      |
| `pest`                | `/pests`                | 22      |
| `fertilizer`          | `/fertilizers`          | 9       |
| `post-harvest`        | `/post-harvest`         | 8       |
| `plant-disease`       | `/plant-diseases`       | 7       |
| `commodity`           | `/commodities`          | 5       |
| `machinery`           | `/machinery`            | 3       |
| `farming-system`      | `/farm-systems`         | 3       |
| `soil`                | `/soils`                | 2       |
| `soil-topic`          | `/soil-health`          | 2       |
| `climate`             | `/climate`              | 2       |
| **Total**             |                         | **213** |

Content type and route are 1:1 here, so the two breakdowns carry the same
information. Both are given because they answer different questions: the route
column is what an SEO report would group by.

### The 101 cultivars/breeds are a defect, and the evidence is in the repo

All 101 have a **published parent**. The parent page renders them: `graph.ts`
`childRefs()` computes crop→cultivar and livestock→breed edges at read time, and
`ParentSubEntities` prints them.

So the platform **already computes this exact inverse** — in `lib/content/graph.ts`,
for navigation. `lib/content/relations.ts` does not, for the graph. One module
derives `hasCultivar`; the other reports the cultivar as unreferenced. That is
not a content gap; it is two modules disagreeing about the same fact.

### The 105 `entity-needs-inbound`, and the exact edge available for each

These are the pages where an honest inbound edge exists and simply is not
recorded. The evidence is the page's own typed declaration plus a defined
inverse — **no connection is invented**:

| Group                 | n       | Entailed inverse (pages)                                                                                           | Reads as                                    |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| `post-harvest-defect` | 26      | `reducedByProcess` ⁻¹ = `reduces` (26)                                                                             | the process reduces this defect             |
| `crop`                | 23      | `susceptibleTo` ⁻¹ = `affects` (23), `suitableForSoil` ⁻¹ = `suitableFor` (23), `irrigatedBy` ⁻¹ = `irrigates` (9) | the disease affects this crop               |
| `pest`                | 22      | `affects` ⁻¹ = `susceptibleTo` (22)                                                                                | the crop is susceptible to this pest        |
| `fertilizer`          | 9       | `suppliesNutrient` ⁻¹ = `suppliedByFertilizer` (9)                                                                 | the nutrient is supplied by this fertilizer |
| `plant-disease`       | 7       | `affects` ⁻¹ = `susceptibleTo` (7)                                                                                 | the crop is susceptible to this disease     |
| `post-harvest`        | 7       | `gradedUnder` ⁻¹ = `gradeAppliesTo` (5), `monitoredWith` ⁻¹ = `monitors` (2)                                       | the grade/method applies to this operation  |
| `commodity`           | 5       | `harvestedFrom` ⁻¹ = `harvestedAs` (5)                                                                             | the crop is harvested as this commodity     |
| `soil`                | 2       | `suitableFor` ⁻¹ = `suitableForSoil` (2)                                                                           | the crop is suited to this soil             |
| `climate`             | 2       | `affects` ⁻¹ = `susceptibleTo` (2)                                                                                 | the crop is sensitive to this factor        |
| `farming-system`      | 2       | `includesCrop` ⁻¹ = `partOfFarmingSystem` (2)                                                                      | the crop is part of this system             |
| **Total**             | **105** |                                                                                                                    |                                             |

A further 21 crops would also gain `partOfFarmingSystem` ⁻¹ = `includesCrop`;
those are sound because the source is a crop (see the type-safety defect below).

Worked example: `crop:amaranth` has zero inbound. It declares
`commonDiseases → plant-disease:damping-off`, mapped to `susceptibleTo`, whose
defined inverse is `affects`. `damping-off affects amaranth` is therefore
entailed by what the amaranth page already says. The damping-off page does not
list amaranth in `hostCrops`, so no edge exists — but the fact does.

**206 of 213 have such an edge available. 7 do not.**

### The 7 with no honest inbound edge — proposed allowlist

For these, no typed inbound is entailed: their outgoing relations are either the
symmetric generic `relatedConcept` or relations with no defined inverse. Nothing
in the corpus asserts anything precise about them.

| Page                            | Outgoing relations                                         | Proposed allowlist reason                                                                           |
| ------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `soil-topic:nitrogen-cycle`     | `relatedConcept`, `affectsNutrientAvailability`            | `affectsNutrientAvailability` has no defined inverse                                                |
| `soil-topic:water-infiltration` | `relatedConcept` only                                      | A process description. Its links are topical; no typed relation is true of it.                      |
| `machinery:chisel-plough`       | `relatedConcept`, `partOfFarmingSystem`, `usedToCultivate` | only invertible relation is the type-unsafe `partOfFarmingSystem`; `usedToCultivate` has no inverse |
| `machinery:manure-spreader`     | `relatedConcept`, `usedToApply`, `partOfFarmingSystem`     | same; `usedToApply` has no inverse                                                                  |
| `machinery:power-harrow`        | `relatedConcept`, `usedToCultivate`                        | `usedToCultivate` has no defined inverse                                                            |
| `farming-system:agroecology`    | `relatedConcept` only                                      | A framing concept. Its links are topical by nature; no typed relation is true of it.                |
| `post-harvest:wooden-crate`     | `appliesToCommodity`, `relatedConcept`                     | `appliesToCommodity` has no defined inverse                                                         |

**Five of the seven are blocked by the inverse map, not by the content.** Define
inverses for `usedToCultivate` / `usedToApply` / `appliesToCommodity` /
`affectsNutrientAvailability`, and fix `partOfFarmingSystem`, and five of these
acquire an entailed inbound edge. Only `water-infiltration` and `agroecology` are
genuinely, defensibly generic — so the allowlist that should actually exist has
**two** rows, not seven.

### Rendered links vs semantic edges vs sitemap

These are three different questions and the audit answers them separately.

| Measure                                             | Count                                       |
| --------------------------------------------------- | ------------------------------------------- |
| Semantic zero-inbound                               | **213**                                     |
| Rendered-link zero-inbound (excluding hub listings) | **0**                                       |
| Sitemap-only reachable (in sitemap, no nav path)    | **0**                                       |
| Intentional allowlist                               | **0** (none exists today; 7 proposed above) |

All 213 semantic zero-inbound pages have a rendered inbound link:

- **101** via `ParentSubEntities` on their parent crop/livestock page;
- **112** via `RelatedContent`, which renders `relatedGroupsFor` = outgoing
  **∪ inbound** refs — so a page that points at X is itself printed on X's page.

Verified against the components, not assumed: `ContentArticle` (rendered by every
`app/*/[slug]/page.tsx`) mounts `RelationPanels`, `ParentSubEntities`,
`CommodityPathways`, `TradePanels` and `RelatedContent`. **None of them slice or
cap.** Every hub (`EntryGrid`/`HubIndex`) enumerates every published item of its
type with no slicing.

### What the SEO audit's "0 orphans" actually means

**It is not rendered-link-based, and it is not a crawl.** Stated plainly, because
the number is easy to over-read:

`seoAudit()` reports `crawl.unreachable = 0` over 1,361 routes. That comes from
`crawlDepth()` → `navGraph()`, which is a **hand-written model** of navigation,
not a traversal of rendered JSX. Two properties follow.

**1. It is guaranteed by hub enumeration alone.** `navGraph` adds an edge from
each type's hub to every published item of that type, and all 27 content types
have an `active` nav section. Every content page is therefore at depth ≤ 2 from
home before a single content→content link is considered. The depth histogram
shows it: `0:1  1:45  2:1242  3:10  4:63`. **The audit would report 0 orphans
even if no page linked to any other page.** It is a statement that hubs list
their items — which is true and worth knowing, and is not a statement about
interlinking.

**2. Its content→content component is wrong.** `navGraph` takes those edges from
`outgoingRefs()` in `lib/content/graph.ts` — which is still the hand-maintained
`switch (item.contentType)` that Phase 5F removed from `relations.ts`. It handles
seven types plus `relatedTopics`/`connections`. Consequently:

| Type                 | `outgoingRefs` | `semanticEdges` |
| -------------------- | -------------- | --------------- |
| `logistics-concept`  | **0**          | 784             |
| `supply-chain-risk`  | **0**          | 391             |
| `market-term`        | **0**          | 358             |
| `standard-reference` | **0**          | 209             |
| `trade-concept`      | 27             | 406             |

The model therefore sees **114 pages as linked only by their hub** (market-term
26, logistics-concept 23, standard-reference 23, trade-concept 22,
supply-chain-risk 20). They are not: `TradePanels` renders every Phase 5D typed
field as links. The model is wrong in the safe direction — it understates
reachability — but it is the same bug, in the same shape, in the module Phase 5F
did not touch.

Note the two populations are **disjoint** (overlap: 0). The 213 semantic
zero-inbound pages and the 114 model-hub-only pages share no members. They are
different failures of different modules and must not be conflated.

### 208 edges render nowhere

The panel model turned up a regression Phase 5F introduced.

**208 semantic edges are rendered by no panel at all** — every one of them
`post-harvest --applicableCommodities--> commodity` (`appliesToCommodity`).

`RelationPanels` renders `ORDER.filter(r => byRelation.has(r))`, and
`appliesToCommodity` **is not in `ORDER`** (nor in `RELATION_HEADING`).
`TradePanels` does not handle `post-harvest`. `outgoingRefs` does not include
`applicableCommodities`, so `RelatedContent` does not print them either.

The mechanism is worth stating exactly, because it is counter-intuitive:
`ref-fields.ts` records that on post-harvest this field previously "had NO
mapping and fell back to a generic `relatedConcept`". `relatedConcept` **is** in
`ORDER`. So before Phase 5F these 208 links rendered under "Related topics";
mapping the field to the more precise `appliesToCommodity` **removed them from
the page**. The relation got more accurate and the reader got less.

This is the failure `RelationPanels`' own comment warns about — "a relation with
no entry here is silently invisible" — recurring in the same commit that
documents it. No page is orphaned by it (the commodities are reachable
elsewhere), but 208 authored assertions are invisible.

## §6 — `relatedConcept`

### It is 34.1%, not 37%

| Measure                                                        | Count     | Share     |
| -------------------------------------------------------------- | --------- | --------- |
| All semantic edges                                             | 11,082    | 100%      |
| Edges from a generic field (`connections`/`relatedTopics`)     | 5,996     | **54.1%** |
| …of those, upgraded to a precise relation by `genericRelation` | 2,217     | 20.0%     |
| …of those, remaining `relatedConcept`                          | **3,779** | **34.1%** |
| `relatedConcept` from a non-generic field                      | **0**     | 0%        |

`graph-discovery.md` says "37% of edges are the generic `relatedConcept`". The
measured figure is **34.1%**, and the sentence also conflates two numbers: 54.1%
of edges _come from_ a generic field, but `genericRelation` upgrades 2,217 of
them to precise relations from the endpoint types. The doc should be corrected on
both counts.

Every `relatedConcept` edge originates in `connections` (2,093) or
`relatedTopics` (1,686). **No precise field ever degrades to `relatedConcept`** —
the `?? 'relatedConcept'` fallback in `semanticEdges` never fires.

### Distribution

**By source type** (top): `post-harvest` 498, `crop` 419, `commodity` 405,
`pest` 288, `soil-topic` 270, `commodity-product` 232, `fertilizer` 220,
`plant-disease` 184, `soil` 155, `machinery` 139, `quality-attribute` 136,
`farming-system` 135, `processing-method` 133, `climate` 114,
`irrigation-method` 109, `nutrient` 80, `quality-measurement` 57, `livestock` 55,
`breed` 43, `post-harvest-defect` 36, `trade-concept` 27, `cultivar` 23,
`commodity-grade` 21.

**By target type** (top): `post-harvest` 864, `crop` 780, `soil-topic` 436,
`farming-system` 225, `pest` 187, `fertilizer` 171, `plant-disease` 143,
`machinery` 139, `quality-attribute` 124, `climate` 120, `soil` 114,
`irrigation-method` 99, `livestock` 94, `nutrient` 87, `commodity` 87,
`commodity-product` 68, `commodity-grade` 26, `quality-measurement` 9,
`standard-reference` 6.

**By source field**: `connections` 2,093 · `relatedTopics` 1,686.

**Top type pairs**: `crop→crop` 366, `commodity→post-harvest` 329,
`post-harvest→crop` 245, `post-harvest→post-harvest` 243, `pest→pest` 160,
`plant-disease→plant-disease` 121, `fertilizer→fertilizer` 118,
`soil-topic→soil-topic` 110, `processing-method→quality-attribute` 91,
`fertilizer→soil-topic` 87, `machinery→machinery` 87.

**Highest-degree `relatedConcept` nodes** (top 15, in+out):

| Node                                            | Degree |
| ----------------------------------------------- | ------ |
| `post-harvest:sorting-and-grading`              | 108    |
| `post-harvest:storage-moulds-and-mycotoxins`    | 81     |
| `post-harvest:moisture-content-and-equilibrium` | 75     |
| `farming-system:conservation-agriculture`       | 65     |
| `post-harvest:packing-and-packaging`            | 63     |
| `soil-topic:soil-ph`                            | 62     |
| `soil-topic:soil-organic-matter`                | 62     |
| `post-harvest:grain-storage`                    | 58     |
| `post-harvest:stored-grain-insects`             | 58     |
| `post-harvest:postharvest-food-loss`            | 57     |
| `soil-topic:soil-drainage`                      | 55     |
| `post-harvest:grain-drying`                     | 53     |
| `soil-topic:soil-structure`                     | 52     |
| `post-harvest:grain-cleaning`                   | 52     |
| `crop:wheat`                                    | 48     |

**1,707 (45.2% of `relatedConcept`, 15.4% of all edges) are same-type** —
crop→crop, pest→pest, and so on.

### Are they rendered? Yes — all of them

`relatedConcept` is in `RelationPanels`' `ORDER` (heading "Related topics",
ordered last: "it is the fallback, not the headline"), and every `connections`/
`relatedTopics` ref is additionally in `outgoingRefs`, so `RelatedContent` prints
it too. Unlike `appliesToCommodity`, **no `relatedConcept` edge is invisible.**
34.1% of the graph is generic _and on the page_.

### Classification of a 46-edge sample

Stratified: up to 2 per source type across all 23 source types that emit
`relatedConcept`. Classified by reading both endpoints' content.

| Class               | n      | Share |
| ------------------- | ------ | ----- |
| `genuinely-generic` | **23** | 50%   |
| `vocabulary-gap`    | **11** | 24%   |
| `evidence-gap`      | **12** | 26%   |
| `incorrect`         | **0**  | 0%    |

**`genuinely-generic` (23).** Overwhelmingly same-type sibling links where
nothing more precise is true: `crop:lemon → crop:orange` (both citrus),
`fertilizer:agricultural-lime → fertilizer:gypsum`, `pest:aphids →
pest:whiteflies`, `soil:alluvial-soil → soil:chernozem`,
`nutrient:boron → nutrient:calcium`. Also
`commodity-product:almond-hulls → crop:almond`, where the precise relation is
already expressible as a two-hop path (`derivedFrom` → commodity →
`sourceCrop`), making the generic edge a shortcut rather than a gap; and
`commodity-grade:usda-barley-grades → crop:barley`, where the grade applies to
the _commodity_, not the living crop — a distinction the platform draws
deliberately.

**`vocabulary-gap` (11).** A precise relation should exist and does not:

- `soil-topic:available-water-capacity → soil-topic:field-capacity` — AWC is
  _defined as_ the water held between field capacity and wilting point. The
  content says so explicitly. There is no definitional-dependency relation.
- `pest:mediterranean-fruit-fly → pest:fruit-flies` — taxonomic membership
  (medfly is a tephritid; the target page is "family Tephritidae"). No
  taxonomic relation exists for pests, though `cultivarOf`/`breedOf` set the
  precedent elsewhere.
- `post-harvest-defect:anthracnose-postharvest → plant-disease:anthracnose` —
  the same pathogen, infecting in-field and erupting post-harvest. The content
  states the mechanism. No defect↔disease relation exists.
- `nutrient:manganese → soil-topic:soil-drainage` — the reverse
  (`affectsNutrientAvailability`) is declared, but has **no defined inverse**.
- `livestock:guinea-fowl → pest:slugs` — `feedsOn` exists and the content says
  guinea fowl forage invertebrates; `genericRelation` has no `livestock→pest`
  entry.
- `breed:american-quarter-horse → crop:alfalfa`, `breed:marans → crop:maize` —
  `livestock→crop` is `feedsOn`; `breed→crop` is unmapped.

**`evidence-gap` (12).** A precise relation might hold, but the content does not
establish it. The recurring shape is a **crop/commodity confusion**:
`post-harvest:aerated-storage → crop:wheat`,
`processing-method:beet-diffusion-extraction → crop:sugar-beet`. Aerated storage
applies to wheat _grain_ (the commodity); the typed fields
(`applicableCommodities`, `inputCommodities`) target commodities, and the generic
edge points at the crop instead. Defensible as a topical association; not
evidence for a typed one.

**`incorrect` (0).** No sampled edge asserted something false. `relatedConcept`
is hard to be wrong with — which is the point of it.

### Replacement candidates: 4, all of them the same relation

The bar, per the audit brief: the precise relation must be semantically correct,
direction clear, supporting content present, **and inverse behaviour defined**.
The only non-speculative evidence for a precise relation on a generic edge A→B is
that **B already declares a precise edge back to A**.

Measured: **32 of 3,779** `relatedConcept` edges have a precise reverse edge at
all. Of those, **9** have a reverse whose inverse is defined. Of those 9, **4**
are type-safe:

| Edge                                                                         | Reverse declared on the other page                     | Proposed   |
| ---------------------------------------------------------------------------- | ------------------------------------------------------ | ---------- |
| `quality-measurement:electronic-moisture-meter → post-harvest:grain-storage` | `grain-storage.monitoringMethods` → `monitoredWith`    | `monitors` |
| `quality-measurement:grain-probe-sampling → post-harvest:grain-storage`      | `grain-storage.monitoringMethods` → `monitoredWith`    | `monitors` |
| `quality-measurement:temperature-probe → post-harvest:grain-storage`         | `grain-storage.monitoringMethods` → `monitoredWith`    | `monitors` |
| `quality-measurement:temperature-probe → post-harvest:hermetic-storage`      | `hermetic-storage.monitoringMethods` → `monitoredWith` | `monitors` |

All four bars are met: `monitors`/`monitoredWith` are a defined inverse pair,
direction is unambiguous (the instrument monitors the operation), and the
supporting content is the operation's own declared `monitoringMethods` field.

**The remaining 5 of the 9 are not candidates — they are a bug** (next section).

**This must not be implemented as a type-pair rule.** Adding
`quality-measurement → post-harvest: 'monitors'` to `genericRelation` would
assert `monitors` on **42** edges, of which only these 4 have any evidence — it
would invent 38, including `penetrometer → cold-chain` and
`colorimeter → sorting-and-grading`, where no page declares a monitoring
relationship. `genericRelation` is keyed by type pair and structurally cannot
distinguish the 4 from the 38. The honest routes are to author the reciprocal
field, or to materialise the defined inverse of `monitoredWith` at read time.

**No mechanical reduction of the 34.1% is available or proposed.** 45.2% of
`relatedConcept` is same-type sibling links. It is tempting to note that the
vocabulary already has `relatedCultivar`, `relatedBreed`, `relatedTradeConcept`,
`relatedLogisticsConcept`, `relatedStandard`, `relatedMarketTerm`, `relatedRisk`
and `relatedProcessingStep`, and to complete the pattern with `relatedCrop`,
`relatedPest`, and so on. **That would be decoration.** `relatedCrop` carries no
information that `relatedConcept` plus the two endpoint types does not already
carry; it would move ~1,700 edges out of the generic bucket and add nothing a
reader or a machine could use. The percentage would fall and the graph would be
no better. The existing `related<Type>` relations are arguably already in this
position.

## Vocabulary defects found on the way

### `partOfFarmingSystem`'s inverse is wrong

`INVERSE_RELATION.partOfFarmingSystem = 'includesCrop'`, which asserts the target
is a **crop**. Its edges by source type:

| Source      | Edges   |
| ----------- | ------- |
| `crop`      | 117     |
| `breed`     | 80      |
| `machinery` | 30      |
| **Total**   | **227** |

**110 of 227 have a non-crop source.** Inverting them asserts
`conservation-agriculture includesCrop chisel-plough` — that a farming system
"includes the crop" a plough, or a cattle breed. This is the source of the 5
non-candidates above.

It is **latent today**, because inverses are never materialised. It becomes live
the moment anyone acts on §5's finding that the 213 should gain their entailed
inverse edges. **The §5 fix activates the §6 bug**; they cannot be done
independently.

### 21 relations in use have no defined inverse

`relations.ts` states the requirement itself — "an inverse map has to be
involutive, or walking the graph backwards silently dead-ends". 21 relations,
covering **2,471 edges (22.3% of the graph)**, dead-end:

| Relation                      | Edges |
| ----------------------------- | ----- |
| `appliesToCommodity`          | 444   |
| `requiresNutrient`            | 310   |
| `sensitiveToClimate`          | 265   |
| `riskIncreasesUnder`          | 265   |
| `damagesCommodity`            | 178   |
| `appliedToCrop`               | 120   |
| `storedUsing`                 | 113   |
| `assessesQuality`             | 113   |
| `dependsOnOperation`          | 109   |
| `adaptedToClimate`            | 100   |
| `managedWith`                 | 94    |
| `cultivatedWith`              | 73    |
| `producedByProcess`           | 54    |
| `adaptedToSoil`               | 49    |
| `feedsOn`                     | 46    |
| `associatedWithDeficiency`    | 41    |
| `affectsNutrientAvailability` | 23    |
| `usedToCultivate`             | 23    |
| `usesEquipment`               | 21    |
| `usedToHarvest`               | 20    |
| `usedToApply`                 | 10    |

This is why 5 of the 7 `intentionally-isolated` pages are isolated, and why 23 of
the 32 `relatedConcept`-with-precise-reverse edges are not candidates.

## Known limitations

- **The rendered-link graph is modelled, not crawled.** No browser or HTML parse
  was involved. `trueRenderedInbound()` reimplements the five panels
  `ContentArticle` mounts, reading `ORDER` out of `RelationPanels.tsx` and the
  `entries(item.X)` field list out of `TradePanels.tsx` at runtime so those two
  cannot drift silently. `OWNED_BY_DEDICATED_PANEL` **is** restated in the script
  and can drift. A real crawl of the built output would be strictly better
  evidence, and is not what this is.
- **`CommodityPathways` is credited with rendering `primaryProducts`/
  `coProducts`/`byProducts`, which it never reads.** It derives the same links
  from the product side (`derivedFrom` + `productClass`), and the commodity
  validator enforces reciprocity between the two, so the rendered link set should
  be identical. The audit relies on that validator being correct rather than
  checking the two sets against each other. Those three fields are, strictly,
  read by no renderer.
- **The 46-edge sample is 1.2% of `relatedConcept`.** The class shares (50/24/26)
  are indicative, not measured over the population. The candidate count (4) is
  **not** a sample — it is exhaustive over all 3,779.
- **"Evidence" for a `relatedConcept` edge is unavoidably thin.** A generic field
  holds a bare ref with no author annotation, so classification rests on reading
  both endpoints and judging what could be true. Two readers would not produce
  the same 23/11/12 split. The exhaustive machine-checked findings — 4 candidates,
  32 with precise reverses, 208 unrendered, 110 type-unsafe — do not depend on
  that judgement; the sample classification does.
- **`intentionally-isolated` is a proposal, not a decision.** No allowlist exists
  in the codebase. The 7 rows are what an allowlist would need to say, and 5 of
  them would be dissolved by fixing the inverse map instead — which is the better
  outcome and the one this audit recommends.
- **`declaredRefs` and this audit share `isContentRefValue`'s definition of a
  ref.** A ref shape neither module recognises is invisible to both. That is the
  same class of blind spot Phase 5F's gate was written to avoid, and it is not
  closed here.
- **Zero-inbound was computed against `ALL_CONTENT` as source.** `ALL_CONTENT`
  and `PUBLISHED_CONTENT` are currently identical (1,068 items, no drafts), so
  the distinction is untested. It will matter the first time something is
  unpublished.

## Related

- [`graph-discovery.md`](./graph-discovery.md) — structural discovery; the 37% and 213 figures it cites are corrected here
- [`semantic-relations.md`](./semantic-relations.md) — the controlled vocabulary
- [`graph-ux.md`](./graph-ux.md) — how relations are surfaced
- [`seo-architecture.md`](./seo-architecture.md) — routes, sitemap, crawl depth
- [`seo-discovery.md`](./seo-discovery.md) — the audit whose "0 orphans" is characterised above
