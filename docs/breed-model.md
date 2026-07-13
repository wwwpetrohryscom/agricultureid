# Breed model

`BreedContent` (in [`types/content.ts`](../types/content.ts)) is a structured
record for a livestock breed, tied to its parent species, registries, and
authoritative sources — preferring FAO DAD-IS and official herd books. It
extends `BaseContent` and adds:

| Field                                                                                                                                     | Meaning                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `parentLivestock` (`ContentRef`, required)                                                                                                | Parent species; must resolve to a published livestock page. Drives the `breedOf` edge and the parent's "Notable breeds" panel. |
| `species`                                                                                                                                 | e.g. `Cattle (Bos taurus)`.                                                                                                    |
| `breedType`                                                                                                                               | e.g. Dairy, Beef, Dual-purpose, Wool, Meat, Egg-laying.                                                                        |
| `originCountry` / `originRegion`                                                                                                          | Where the breed developed, when documented.                                                                                    |
| `breedStatus`                                                                                                                             | Development/recognition status (registry-status token), separate from conservation status.                                     |
| `conservationStatus`                                                                                                                      | FAO DAD-IS–aligned risk category, only when authoritative — see below.                                                         |
| `registryReferences`                                                                                                                      | Structured links to FAO DAD-IS / herd books / conservation registries.                                                         |
| `primaryUses`, `physicalCharacteristics`, `productionCharacteristics`, `climateAdaptation`, `managementContext`, `geographicDistribution` | Descriptive fields, environment-contextualized.                                                                                |

## Conservation status

`ConservationStatus` uses FAO DAD-IS–aligned categories: `not-at-risk`,
`vulnerable`, `endangered`, `endangered-maintained`, `critical`,
`critical-maintained`, `extinct`, `unknown`. Conservation/risk status is
**date- and source-specific** — it is reported per source (e.g. FAO DAD-IS, The
Livestock Conservancy), not asserted as a fixed, timeless property of the breed.
The `SubEntityPanel` renders this caveat next to the value. An `extinct` breed
must not simultaneously carry an active `registered`/`listed` breedStatus (the
validator warns).

## Authoring rules

- Use only **real, documented** breeds. Prefer FAO DAD-IS, national herd-book
  organizations, recognized ministries, scientific breed-characterization
  publications, and authoritative conservation registries. Breed hobby blogs,
  marketplace listings, and breeder promotional copy are **not** primary evidence.
- Never invent a breed, an origin, a herd-book identifier, or a risk category.
  If risk status is not authoritatively known, use `unknown`.
- Characteristics vary with strain, management, and environment — write them as
  documented tendencies, not universal facts. Avoid unverified commercial
  production figures.
- Images: verify breed identity via the file description, categories, and source
  context; avoid images of visually similar breeds. If only a parent-species
  image is available, set `identityConfidence: 'representativeParentSpecies'`.

## Validation

Parent resolution, registry-reference resolution, extinct-vs-active status
combination, image identity confidence, and anti-thin checks are enforced in
`lib/validation/validate.ts` ("Cultivars & breeds").
