# Scientific-audit methodology

This documents how AgricultureID audits factual and semantic integrity (Phase
2.1), as distinct from the structural validation that has existed since Phase 1.

## Two layers of assurance

1. **Structural integrity (deterministic, offline, CI-gating).**
   `npm run content:validate` — resolvable references, unique metadata, valid
   dates/URLs, no placeholder text, no registry-modelled orphans (a model, not a
   crawl — real rendered orphans come from `npm run seo:rendered`, see
   [`rendered-link-audit.md`](rendered-link-audit.md)), sitemap coverage, and now:
   semantic-relation validity, field-provenance rules, evidence-tier rules,
   image licensing/identity completeness, and safety rules.

2. **Factual & semantic integrity.**
   - **Automated full-corpus audits** (`npm run audit`, `npm run audit:images`,
     `npm run source:health`): quantitative-claim scan, duplication detection,
     source tier/specificity, provenance completeness, graph quality, image
     identity (against Wikimedia Commons metadata), and source reachability.
   - **Stratified manual deep review**: close reading of a stratified sample of
     entries against established agronomic/scientific knowledge.

## What the automated audits check

| Audit               | Tool                       | Checks                                                                                                     |
| ------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Quantitative claims | `audit`                    | every numeric token; whether it has provenance + context                                                   |
| Duplication         | `audit`                    | repeated text ≥ N pages; intentional safety/method text whitelisted                                        |
| Sources             | `audit`                    | usage frequency, evidence tier, URL specificity, Tier‑3‑only pages                                         |
| Graph quality       | `audit`                    | edges by relation, degree extremes, generic share, reciprocity                                             |
| Provenance          | `audit`                    | pages/claims with provenance; quantitative pages missing it                                                |
| Safety              | validator                  | required callout on safety pages; no prescriptive dose/interval/vet dosage; no crop health-efficacy claims |
| Image identity      | `audit:images`             | subject keyword match against Commons metadata                                                             |
| Image licensing     | `audit:images` + validator | creator/source/license/licenseUrl/attribution/modification present; compatible license                     |
| Source health       | `source:health`            | reachability, redirects, dead-link candidates (non-gating)                                                 |

## Stratified deep-review design

At least 60 entries, stratified across every content type (≥15 crops, ≥6
fertilizers, ≥5 nutrients, ≥5 pests, ≥5 diseases, ≥4 livestock, ≥4 soils/soil
topics, ≥4 machinery, ≥4 irrigation, ≥4 farming systems, ≥4 climate), spanning
both high-degree and low-degree graph nodes. Each entry is checked for: correct
scientific names/classification, correct agronomic/biological claims, precise
terminology, correct relationship semantics (hosts, associations), safety
framing, and honest geographic/uncertainty caveats.

## Honesty boundary (important)

The deep review is a rigorous, domain-knowledge-based expert-style review — it is
**not** independent verification of every claim against the primary literature,
and it does not confer credentialed expert sign-off. Reviewers correct only clear,
substantiated errors and **flag** uncertain items rather than guessing.
Corrections and residual uncertainties are recorded in
[phase-2-1-audit-report.md](phase-2-1-audit-report.md). We do not claim
scientific verification that was not performed.
