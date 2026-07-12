# Phase 2.1 — Scientific-integrity audit report

Branch: `audit/phase-2-scientific-integrity`. This report records what was
audited, what was found, and what was corrected. It is deliberately explicit
about the **boundary of verification** (see "Honesty statement" at the end).

## Scope

- **Automated full-corpus audit:** all 345 published entries, all ~3,950 semantic
  edges, all 228 images, all 39 sources, all field metadata, and all quantitative
  claims — via `content:validate`, `audit`, `audit:images`, `source:health`.
- **Stratified manual deep review:** 60 entries (below), read closely against
  established agronomic/scientific knowledge, spanning high- and low-degree
  graph nodes.

### Deep-review sample (60)

- Crops (15): wheat, maize, rice, potato, tomato, soybean, cotton, coffee,
  banana, apple, blueberry, quinoa, cassava, oil-palm, saffron
- Fertilizers (6): urea, diammonium-phosphate, muriate-of-potash, compost,
  agricultural-lime, chelated-micronutrients
- Nutrients (5): nitrogen, phosphorus, potassium, boron, molybdenum
- Pests (5): aphids, colorado-potato-beetle, fall-armyworm, spider-mites,
  root-knot-nematode
- Diseases (5): late-blight, powdery-mildew, wheat-stripe-rust, rice-blast,
  fusarium-wilt
- Livestock (4): cattle, chickens, honey-bees, farmed-fish
- Soils / soil health (4): clay-soil, sandy-soil, cation-exchange-capacity,
  soil-ph
- Machinery (4): tractor, combine-harvester, sprayer, seed-drill
- Irrigation (4): drip-irrigation, sprinkler-irrigation, deficit-irrigation,
  fertigation
- Farming systems (4): organic-farming, regenerative-agriculture, hydroponics,
  conservation-agriculture
- Climate (4): drought, frost, growing-degree-days, temperature

## Findings and corrections

### Corrected (substantiated)

| Severity | Page               | Issue                                                                                                                                                              | Correction                                                                                                   |
| -------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| Critical | crop/maize         | `commonDiseases` linked `fusarium-wilt`, a vascular-wilt page whose hosts are tomato/soybean; maize's real Fusarium issues are stalk/ear rots (different disease). | Re-linked to `common-smut` (Ustilago maydis), the correct maize disease already in the corpus.               |
| Critical | crop/cotton        | `commonDiseases` linked `bacterial-leaf-spot`, scoped to tomato/sweet-pepper; cotton is not a host.                                                                | Removed the incorrect link (kept the correct `fusarium-wilt`). No slug invented for cotton bacterial blight. |
| Minor    | nutrient/potassium | `connections` included `cattle` with no supporting text on the page.                                                                                               | Removed the unsupported edge.                                                                                |
| Systemic | 27 files           | Provenance `retrievedDate` was `2026-07-13` — one day in the future.                                                                                               | Corrected all occurrences to `2026-07-12`.                                                                   |

### Flagged, not changed (uncertain — recorded honestly)

- **crop/blueberry → `fruit-flies`**: blueberry's dominant modern fly pest is
  spotted-wing drosophila (Drosophilidae), taxonomically distinct from
  Tephritidae; but blueberry maggot (Rhagoletis, a Tephritid) is a genuine host
  pest, so the link is defensible. No dedicated slug exists for either species.
- **crop/cassava → `bacterial-wilt`**: the disease page attributes cassava
  disease to Ralstonia and lists cassava as a host (citing CIP); the classic
  cassava bacterial disease is Xanthomonas bacterial blight. Left as authored.
- **livestock/honey-bees**: workers described as "sterile" — functionally
  non-reproductive is more precise, but the shorthand is common and defensible.
- Several **incompleteness** flags (e.g. rice/coffee/banana pest lists omitting
  planthoppers / coffee berry borer / burrowing nematode). Adding entities is
  out of Phase 2.1 scope (no new pages), so these were left for a later wave.

### No issues found

45 of the 60 deep-reviewed entries required no change; taxonomy, pathogen typing
(late blight = oomycete, spider mites = arachnids, etc.), soil physics/chemistry,
machinery function, and safety framing were correct. The corpus was already
written with strong discipline: no universal rates/dates/yields, region-specific
caveats throughout, and safety callouts on every disease/pest/fertilizer/
livestock page.

## Field-level provenance

- Added `ProvenancedClaim` provenance to **30 pages** carrying quantitative
  claims (fertilizer analysis grades, atmospheric %, freezing point, soil pH
  ranges, insect morphology, growth/rotation durations). Every quantitative
  claim now cites ≥1 Tier 1–2 source and is contextualized. 0 quantitative pages
  remain without provenance.

## Sources

- All 39 sources classified into evidence tiers (T1 = 27, T2 = 9, T3 = 3).
- Reference tier distribution: T1 = 967, T2 = 494, T3 = 54. **0 pages sourced
  only by Tier 3.**
- Source specificity classified honestly: most registry URLs are organization or
  program landing pages (a durable-link choice); field-level provenance carries
  the specific locators. No sources were added, replaced, or removed in this
  phase; no public URLs were changed.
- Source-health run (non-gating): 6 benign redirects; 9 flagged unreachable to an
  automated client — all `403`/timeout from bot-mitigated authoritative sites
  (verified reachable in a browser), not confirmed dead links. See
  [source-health.md](source-health.md).

## Semantic relationships

- Replaced untyped edges with a 25-type controlled vocabulary. ~3,950 edges;
  **~64% carry a specific (non-generic) relation**; the rest are conservatively
  `relatedConcept`. 0 duplicate edges, 0 incorrect forced reciprocity, 0 orphans,
  0 weakly-linked. See [semantic-relations.md](semantic-relations.md).

## Images

- All 228 audited against Wikimedia Commons metadata: **0 licensing/attribution
  issues, 0 identity mismatches.**
- 8 images replaced for not clearly depicting their subject; 37 PD/CC0 images
  given a `licenseUrl`; modification disclosure added to all 228 and rendered in
  captions; a diagnostic caution added to disease/pest images. See
  [image-identity-and-licensing.md](image-identity-and-licensing.md).

## Duplication

- 36 repeated strings ≥ 4 pages; 24 are intentional safety/methodology caveats
  (whitelisted). The rest are minor, accurate, non-misleading (e.g. rootstock/
  grafting text shared across tree-fruit crops). Per the brief, no mechanical
  rewriting was done.

## Safety

- Automated safety audit: **0 violations** (required callout present on all
  safety pages; no prescriptive doses, spray intervals, or veterinary dosages; no
  crop health-efficacy claims). Now enforced as a validator gate.

## Tests & validators added

- `tests/audit.test.ts` (evidence hierarchy, field-provenance resolution +
  tier rules, semantic-relation vocabulary/dedup/reciprocity/direction, image
  completeness, safety, duplication). Suite total: **52 tests**.
- New validator gates: semantic-relation validity, field-provenance rules,
  evidence-tier classification + Tier 1–2 for quantitative/safety claims, image
  licenseUrl/creator/source/modification, and safety rules.

## Validation results (exact)

`format:check` ✓ · `typecheck` ✓ · `lint` ✓ · `content:validate` 0 errors /
0 warnings ✓ · `test` 52 passed ✓ · `build` ✓ (see the final report for the page
count). Network audits (`audit:images`, `source:health`) run separately and are
non-gating.

## Remaining risks (medium/low)

- **Verification boundary (see below).** Deep review is expert-style, not
  primary-literature re-verification.
- A few taxonomic nuances flagged but unresolved (blueberry/cassava pest-disease
  species) because resolving them would require new content out of scope here.
- Registry URLs are org/program landing pages; deep-link specificity for all
  1,515 references is delivered via field-level provenance for audited claims,
  not for every reference — a documented, ongoing improvement.
- Source-health depends on external sites with bot mitigation; codes must be read
  as described in [source-health.md](source-health.md).

## Honesty statement

This audit performed: (1) complete automated, deterministic checks over the whole
corpus; (2) an automated identity check of every image against live Wikimedia
Commons metadata; (3) an automated reachability check of every source URL; and
(4) a close, domain-knowledge-based expert-style manual review of 60 stratified
entries that corrected clear errors and flagged uncertainties. It did **not**
independently re-verify every claim on all 345 pages against the primary
literature, and it does not constitute credentialed expert sign-off. No
scientific verification beyond what is described here is claimed.
