# Evidence hierarchy

Every registry source is classified into an evidence tier. Tiers are the single
source of truth in [`lib/sources/evidence.ts`](../lib/sources/evidence.ts)
(`EVIDENCE_TIER`) and are enforced by the content validator.

## Tiers

**Tier 1 — strongest.** National authorities, intergovernmental agencies,
official registries, peer-reviewed consensus literature, and recognized research
institutes. Examples: FAO / FAOSTAT / DAD-IS, USDA and its agencies (ARS, NRCS,
NASS, ERS, APHIS, FAS, PLANTS), European Commission, EFSA, EPPO / EPPO Global
Database, WOAH, WMO, NOAA, US EPA, National Academies (NRC), CGIAR centres
(CIMMYT, IRRI, CIP), ISRIC.

**Tier 2 — strong.** University extension publications, technical manuals, and
professional reference databases. Examples: CABI, UC IPM, university extension
services (Cornell, Iowa State, Minnesota, Penn State), AHDB, NCBI Taxonomy,
GBIF.

**Tier 3 — general context only.** Reputable secondary references. Examples:
RHS, Encyclopaedia Britannica, IFA (industry association).

## Rules enforced by the validator

- **Every source must be tiered.** `unclassifiedSources()` must be empty
  (`source-untiered` error otherwise).
- **No page may rely solely on Tier‑3 evidence.** Every published page has at
  least one Tier 1–2 source (verified in tests; current corpus: 0 Tier‑3‑only
  pages).
- **Quantitative and safety‑critical field claims require Tier 1–2 evidence.**
  A `ProvenancedClaim` with `quantitative: true` or `safetyCritical: true` must
  cite at least one Tier 1–2 source (`claim-weak-evidence` error otherwise).

Tier 3 sources are therefore never the sole support for a quantitative,
regulatory, safety‑critical, or treatment claim — they appear only as secondary
context (current usage: 54 of 1,515 references, always alongside Tier 1–2).
