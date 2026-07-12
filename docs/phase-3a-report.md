# Phase 3A report — cultivars & breeds

**Branch:** `feat/phase-3a-cultivars-breeds`
**Base:** `audit/phase-2-scientific-integrity @ 3878989` (documented in
[`phase-3-architecture.md`](./phase-3-architecture.md); `main` still lacks the
Phase 2.1 provenance/evidence/safety infrastructure Phase 3 requires).
**Deployment:** none. Not merged, not deployed.

## Corpus

| Metric                  | Value             |
| ----------------------- | ----------------- |
| Cultivar records        | **77**            |
| Breed records           | **71**            |
| Sub-entity total        | **148**           |
| Total published content | 493 (was 345)     |
| Static pages built      | **530** (was 380) |

### Cultivars by parent crop (15 crops)

potato 10, apple 10, grape 9, wheat 9, tomato 8, rice 7, maize 5, barley 4,
almond 3, soybean 3, common-bean 3, cotton 2, cassava 2, sorghum 1, oats 1.

### Breeds by parent species (6 species)

cattle 18, sheep 13, chicken 12, goat 10, pig 9, horse 9.

### Registry-status distribution (cultivars)

`historical` 68 · `listed` 5 · `registered` 3 · `expired` 1. No status is asserted
without a jurisdiction and a registry reference or provenanced claim. `historical`
is used for heritage/reference/landrace records whose current registry status is
not independently verified — an honest "not a current commercial listing", never a
guess. `expired` is Honeycrisp (lapsed US Plant Patent PP7197, recorded with the
patent-vs-PVP distinction). `registered` records (Swarna/MTU 7029 in India;
IITA cassava TMS 30572 and TME 419 in Nigeria) each carry a jurisdiction and a
registry reference.

## Official registries used

FAO DAD-IS, USDA GRIN, UPOV (PLUTO), CPVO, EU Common Catalogue, The Livestock
Conservancy, IITA, ICAR, Embrapa (all evidence-tiered in the source registry),
plus national herd books / breed associations and the Vitis International Variety
Catalogue **named without a fabricated sourceId/recordId/URL** where they are not
registry sources. No registry identifier or deep URL was invented.

## Field-level provenance

10 cultivars carry Tier-1 `ProvenancedClaim`s for their one defining sourced
trait, rather than asserting it as bare prose:

- **Documented parentage** (grape): Cabernet Sauvignon, Chardonnay, Merlot
  (DNA-based parentage).
- **Disease/pest resistance** (only where Tier-1 supported): soybean Williams 82
  (Rps1-k), Forrest (SCN, Rhg1/Rhg4), Lee (Rxp); rice IR36 (grassy-stunt via
  _O. nivara_); cassava TMS 30572, TME 419 (cassava mosaic disease).
- **Reference-genome role**: rice Nipponbare.

Every other record **omits** resistance/yield claims rather than assert them
unsourced — e.g. Maris Piper's well-known PCN resistance was deliberately left
out because it was not attached to a Tier-1/2 citation. This is enforced: the
validator fails any resistance/yield field lacking a Tier-1/2 provenanced claim.

## Images and licensing

Sub-entities launched **without photographs, by design**: a generic species photo
presented as cultivar/breed-level identification would be dishonest, and verifying
a correct-identity, correctly-licensed image for 148 records was out of scope for
this wave. Each page renders an original AgricultureID illustrative diagram
instead. The model and validator are ready for verified images: `ImageMeta`
carries an `identityConfidence` field (`exactEntity` / `representativeParentSpecies`
/ `habitatOrUseContext` / `unavailable`), the validator requires it on any attached
sub-entity image, and the figure caption discloses the modification and (for
parent-species images) the representative status. Adding confident images is a
clean follow-up wave. Image licensing status: **n/a this wave (no images added);
existing 228 licensed images unchanged.**

## Relationships (graph)

- Total semantic edges: **4,476** (was ~3,948). Incorrect reciprocal edges: **0**.
- New edges: `cultivarOf` 77, `breedOf` 71, `adaptedToClimate` 100 (+ `adaptedToSoil`,
  `relatedCultivar`, `relatedBreed` where authored). Parent→child navigation is
  modeled so every sub-entity is reachable; **weakly-linked: 0; orphans: 0**.
- 14 new relation types added to the controlled vocabulary; `cultivarOf↔hasCultivar`
  and `breedOf↔hasBreed` are the only new defined inverses (symmetric-safe).

## Validation results (deterministic gate — all green)

| Check              | Result                                             |
| ------------------ | -------------------------------------------------- |
| `format:check`     | pass                                               |
| `typecheck`        | pass                                               |
| `lint`             | pass (0 warnings)                                  |
| `content:validate` | **0 errors, 0 warnings**                           |
| `test`             | **67 passed** (10 files; +`tests/phase3a.test.ts`) |
| `build`            | **530 static pages**                               |
| `audit`            | 4,476 edges, 0 incorrect reciprocity               |

Phase 3A validators added: parent-species resolution, jurisdiction-aware status,
unsourced-registration, unsourced-resistance/yield (Tier 1–2 required),
taxon-genus consistency, duplicate-name-within-parent, image-identity confidence,
registry-reference resolution, and anti-thin (limitations + sources + ≥2 sections).
No existing validator was weakened. The duplication audit's intentional-marker
list was extended with standardized cultivar/breed **scope/status disclaimers**
(which should read identically everywhere); substantive prose is not whitelisted,
and genuine templating remains counted (3 shared apple botanical facts, within the
pre-existing ≤3 tolerance).

## Unresolved nomenclature / modeling risks

Recorded honestly on the pages themselves and summarized here:

- **Type/group names modeled as single records** — Basmati (rice), Roma & San
  Marzano (tomato), Acala & Pima (cotton), Pinto/Navy/Red Kidney (bean) are
  **seed-type / varietal groups**, not single cultivars. Each page states this in
  prose and `limitations`; status is `historical`.
- **GI ≠ plant-variety protection** — San Marzano (PDO) and Basmati (GI) protect a
  name/origin, not a plant variety. Pages keep `registrationStatus: 'historical'`
  and explain the distinction; they do **not** cite the EU variety catalogue for a
  GI food scheme.
- **Cassava "registered" (Nigeria)** — TMS 30572 / TME 419 are set `registered`
  with an IITA registry reference; IITA is the breeding institute, not the national
  release authority. Pages state formal release is administered by Nigerian
  authorities. A reviewer could prefer `unknown`/`historical`; flagged, not hidden.
- **Chance-seedling apple history** — Granny Smith, Braeburn, Cox, Bramley,
  McIntosh have approximate/traditional origin years (left out of `yearReleased`,
  noted in prose/limitations).
- **Conservation status** — set to a specific FAO category only where confident;
  otherwise `unknown` with prose context (national conservation-body attention is
  described but not forced into the global enum). Never guessed.

None of these render a disputed point as a definitive public claim.

## Commits

See branch history (`feat/phase-3a-cultivars-breeds`): infrastructure + models +
routes + validators + docs + tests, then the breed corpus, then the cultivar
corpus. Pushed after the full deterministic gate passed. **Not merged; not
deployed.**
