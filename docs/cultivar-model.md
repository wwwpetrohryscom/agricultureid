# Cultivar model

`CultivarContent` (in [`types/content.ts`](../types/content.ts)) is a structured
record for a crop variety, cultivar, landrace, or documented hybrid — **not** a
generic article. It extends `BaseContent`, so it carries the full provenance,
evidence-tier, image-licensing, and semantic-relation machinery, plus:

| Field                                                                                                                           | Meaning                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `parentCrop` (`ContentRef`, required)                                                                                           | The parent crop species; must resolve to a published crop. Drives the `cultivarOf` edge and the parent's "Notable cultivars" panel. |
| `acceptedName`                                                                                                                  | Accepted denomination if it differs from the display title.                                                                         |
| `botanicalTaxon`                                                                                                                | e.g. `Triticum aestivum`. Genus is checked against the parent crop's `scientificName`.                                              |
| `cultivarType`                                                                                                                  | e.g. Cultivar, Landrace, F1 hybrid, Inbred line, Clonal selection.                                                                  |
| `breedingType`                                                                                                                  | e.g. Selection, Cross-breeding, Mutation, Open-pollinated.                                                                          |
| `originCountry` / `originRegion`                                                                                                | Where it was developed, when documented.                                                                                            |
| `yearReleased`                                                                                                                  | Year of release/registration **when reliably documented** — never invented.                                                         |
| `breederOrInstitution`                                                                                                          | Breeder/institution **when reliably documented**.                                                                                   |
| `registrationStatus` (required)                                                                                                 | One of the registry-status tokens — see [registry-status-semantics.md](./registry-status-semantics.md).                             |
| `registrationJurisdiction`                                                                                                      | Required when status is `listed`/`registered`/`protected`.                                                                          |
| `registrationAsOf`                                                                                                              | ISO date/version the status reflects.                                                                                               |
| `registryReferences`                                                                                                            | Structured links to authoritative registry records. IDs/URLs never invented.                                                        |
| `protectedStatus`                                                                                                               | Plant-variety-protection detail, separate from patents.                                                                             |
| `maturityClass`, `growthHabit`, `intendedUse`, `climateAdaptation`, `soilAdaptation`, `qualityTraits`, `geographicAvailability` | Descriptive traits, region-contextualized.                                                                                          |
| `diseaseResistanceClaims` / `pestResistanceClaims`                                                                              | Documented resistance claims. **Each requires a Tier 1–2 provenanced `resistance` claim** or the validator fails.                   |
| `yieldCharacteristics`                                                                                                          | Only when sourced and contextualized. **Requires a Tier 1–2 provenanced `yield` claim.**                                            |

## Authoring rules

- Use only **real, documented** cultivars (reference-genome lines, Green-Revolution
  varieties, PDO/PGI or heritage varieties, registry-listed varieties). Never
  invent a cultivar, a release year, a breeder, or a registry identifier.
- Prefer registry sources: UPOV/PLUTO, CPVO, USDA GRIN, EU Common Catalogue,
  CGIAR crop databases (IRRI, CIMMYT, CIP, IITA), ICAR, Embrapa, or peer-reviewed
  varietal descriptions. Seed-retailer marketing, breeder promo copy, hobby blogs,
  and marketplace listings are **not** primary evidence.
- Omit `yieldCharacteristics` and resistance claims unless you can cite Tier 1–2
  evidence for them; a page is better honest-and-quiet than confidently wrong.
- Registration ≠ availability ≠ recommendation ≠ patent. Model status precisely
  and always render the status-semantics caveat (the `SubEntityPanel` does this).
- Images: prefer an image identified to the cultivar; if only a parent-species
  image is available, set `identityConfidence: 'representativeParentSpecies'` so
  the figure discloses it. Never imply cultivar-level identification from a
  generic species photo.

## Validation (see `lib/validation/validate.ts`, "Cultivars & breeds")

Parent resolution, jurisdiction-aware status, unsourced-registration, unsourced
resistance/yield, taxon-genus consistency, duplicate-name-within-parent, image
identity confidence, and anti-thin checks are all enforced at build time.
