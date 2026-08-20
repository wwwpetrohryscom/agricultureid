# Canonical jurisdictions vs RegionProfile

## The decision

A subnational agricultural authority resolves against a **canonical
jurisdiction** (`data/jurisdictions`), not against a **`RegionProfile`**
(`data/geo/regions`).

These encode two different facts, and Wave 3 conflated them:

| Fact                                                                                 | Where it lives          | Required?           |
| ------------------------------------------------------------------------------------ | ----------------------- | ------------------- |
| Rhode Island exists, is a US state, and is `US-RI`                                   | `CanonicalJurisdiction` | always              |
| AgricultureID has researched Rhode Island's climate, crops, livestock and irrigation | `RegionProfile`         | optional enrichment |

## Why it had to change

`RegionProfile` mandates `climateContext`, `agroecologicalZones`,
`agriculturalLandContext`, `majorCropSystems`, `majorLivestockSystems`,
`irrigationContext`, `dataCoverage` and `limitations` — all substantive
agronomy. Requiring it for **identity** meant that representing a state's
department of agriculture first required inventing that state's farming
systems.

That capped Wave 3 at 22 of 71 jurisdictions. The remaining 46 were not
unverifiable — most had perfectly good official authority sites. They were
blocked by an architectural constraint that asked the wrong question.

The alternative — relaxing `RegionProfile` so profiles could be created empty —
would have been far worse: it converts a strict quality gate into a formality
and invites placeholder agronomy into the corpus.

## The invariant that was replaced

Before:

> a subnational authority's `regionId` must resolve to a `RegionProfile`

After:

> a subnational authority's `jurisdictionId` must resolve to a
> `CanonicalJurisdiction`, **and** that jurisdiction's parent country must match
> the authority's, **and** the authority's government level must be coherent
> with the jurisdiction's kind

This is **stricter**, not weaker. The old rule never checked that a US authority
pointed at a US subdivision, nor that a body bound to a subdivision wasn't
declaring itself national. Both are now hard errors.

## The link is derived, never stored

`RegionProfile.officialCode` already holds the ISO 3166-2 code, so
`regionProfileFor(jurisdictionId)` matches on it. There is no boolean flag and
no duplicated pointer, so the two layers cannot drift apart.

## Rules

- **Never** create a `RegionProfile` to unlock an authority. If the agronomy
  has not been researched, the jurisdiction simply has no profile — a normal,
  valid state that `tests/jurisdictions.test.ts` asserts explicitly.
- **Never** put climate, crop, livestock, irrigation or statistics on a
  `CanonicalJurisdiction`. The validator fails the build if such a field appears.
- **Never** reintroduce `regionId` on an authority. One canonical field; a test
  asserts the retired field is absent so a dual source of truth cannot return.
- Canonical jurisdictions are a **data identity layer**. They get no routes, no
  pages and no sitemap entries.

## How to add things

**A jurisdiction** — add one entry to `data/jurisdictions/index.ts` with its ISO
3166-2 id, official name, parent country, subdivision code and kind. No
research beyond identity is needed. Update the expected cardinality in
`scripts/jurisdictions-validate.ts` and `tests/jurisdictions.test.ts`.

**A subnational authority** — set `jurisdictionId` to the ISO 3166-2 id. Nothing
else about geo is required.

**A `RegionProfile` later** — add it under `data/geo/regions` with
`officialCode` set to the same ISO 3166-2 id. The link appears automatically;
no authority record changes.
