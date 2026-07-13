# Phase 3 architecture

Phase 3 extends AgricultureID along four independent programs, executed in
strict order, each on its own branch, each fully validated before the next
begins. Phase 3 **reuses** the Phase 2.1 scientific-integrity architecture
(typed content model, source registry, `FieldCitation`/`ProvenancedClaim`,
evidence tiers, semantic-relation vocabulary, safety validators, image
licensing gates, metadata/sitemap/schema). Nothing in Phase 2.1 is weakened.

## Base-commit provenance

Phase 3 depends on the Phase 2.1 infrastructure (field-level provenance,
evidence tiers, semantic relations, safety validators, image gates). That
infrastructure lives on `audit/phase-2-scientific-integrity`, which is **not yet
merged to `main`** (`main` is still the Phase 2 wave-3 commit `1a671dc`, which
lacks all of it).

Therefore Phase 3A is branched from the Phase 2.1 branch, and each later program
is branched from the previous program's branch:

| Program | Branch                                  | Base branch                             | Base commit |
| ------- | --------------------------------------- | --------------------------------------- | ----------- |
| 3A      | `feat/phase-3a-cultivars-breeds`        | `audit/phase-2-scientific-integrity`    | `3878989`   |
| 3B      | `feat/phase-3b-geographic-intelligence` | `feat/phase-3a-cultivars-breeds`        | _(3A head)_ |
| 3C      | `feat/phase-3c-agricultural-tools`      | `feat/phase-3b-geographic-intelligence` | _(3B head)_ |
| 3D      | `feat/phase-3d-search-graph-ux`         | `feat/phase-3c-agricultural-tools`      | _(3C head)_ |

**Dependency chain / merge order:** `main` ← Phase 2.1 ← 3A ← 3B ← 3C ← 3D.
This is documented, not silent. No branch is merged automatically. Recommended
merge order is the chain above, oldest first, each behind its own review.

## The four programs

1. **3A — Cultivars & breeds.** Structured sub-entity records (crop varieties,
   livestock breeds) tied to a parent species, geography, registries, and
   authoritative sources. New content types `cultivar` and `breed`; new routes
   `/cultivars` and `/breeds`; parent-page panels. See
   [`cultivar-model.md`](./cultivar-model.md), [`breed-model.md`](./breed-model.md),
   [`registry-status-semantics.md`](./registry-status-semantics.md).
2. **3B — Geographic agriculture intelligence.** Date-versioned country/region
   profiles built on official datasets, with immutable dataset snapshots and
   provenanced derived values. Volatile statistics are never written as
   evergreen prose.
3. **3C — Tools & calculators.** Transparent educational calculators grounded in
   a versioned formula registry (formula + implementation version, assumptions,
   limitations, sources). No prescriptive agronomic advice.
4. **3D — Search & knowledge-graph UX.** A build-time search index, synonym
   registry, faceted browse, and relation-aware navigation over the whole
   corpus.

## Integration model (why sub-entities reuse `BaseContent`)

`CultivarContent` and `BreedContent` extend `BaseContent`, so they inherit —
without duplication — the provenance model, evidence tiers, image licensing
gates, semantic-relation edges, breadcrumbs, canonical URLs, sitemap inclusion,
and schema. Sub-entity-specific fields (parent link, registry status/references,
adaptation, documented resistance/yield claims) are added on top and rendered by
a dedicated `SubEntityPanel`; parent crop/livestock pages render a
`ParentSubEntities` panel. The knowledge graph models the parent→child link as a
real navigation edge (`outgoingRefs`), so cultivars/breeds are reachable and not
orphaned or weakly linked.

## Non-negotiables (all programs)

- Preserve every existing public URL, registry, model, validator, and design.
- Never fabricate cultivars, breeds, statistics, formulas, registrations, or
  official status. Omit rather than invent.
- Prefer official/authoritative sources; never scrape search-engine results.
- Every graph-driving factual claim carries evidence; page-level source lists are
  not sufficient for registration, resistance, statistics, or constants.
- No thin pages: every sub-entity answers what it is, how it relates to its
  parent, where it is documented, what is known, and what is uncertain.
- Run the deterministic gate after every wave; run network checks non-blocking.
- Do not merge or deploy without explicit authorization.
