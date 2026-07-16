# Post-harvest content type (Phase 4D)

Phase 4D introduces **post-harvest** as a first-class structured content type,
alongside a broad knowledge-base expansion across the existing types.

## Why a new type

Everything AgricultureID documented before Phase 4D concerned growing a crop or
raising an animal. What happens _after_ harvest — drying, cooling, storage,
handling, processing, and loss reduction — is a distinct, well-documented
domain (FAO, USDA-ARS, IRRI, CIP, IITA) that did not fit any existing type.
Rather than stretch `crop` or `machinery`, post-harvest is modelled as its own
type so its pages, hub, nav, sitemap, and search facet are explicit.

## Model

`PostHarvestContent` ([`types/content.ts`](../types/content.ts)) extends the
shared `BaseContent`, adding one discriminator:

```ts
postHarvestClass?:
  | 'handling' | 'drying' | 'cooling' | 'storage'
  | 'processing' | 'quality' | 'loss-management'
```

All relationships (to crops, machinery, and to sibling post-harvest topics) use
the generic `connections` / `relatedTopics` graph fields — no bespoke typed
relation arrays — so the type stays simple while still participating fully in the
knowledge graph.

## End-to-end wiring

Adding a content type touches a fixed, documented set of seams — all updated for
post-harvest:

| Concern                                | File                                                                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Type + `AnyContent` union              | [`types/content.ts`](../types/content.ts)                                                                                                                          |
| Type union, route, labels, nav section | [`lib/site.ts`](../lib/site.ts) — `CONTENT_TYPES`, `CONTENT_TYPE_ROUTE`, `CONTENT_TYPE_LABEL(_PLURAL)`, `SECTIONS`, `REFERENCE_NAV`                                |
| Data barrel generator                  | [`scripts/build-indexes.mjs`](../scripts/build-indexes.mjs) — `['post-harvest','postHarvest','PostHarvestContent']`                                                |
| Content aggregation                    | [`content/index.ts`](../content/index.ts) — `POST_HARVEST` + `ALL_CONTENT`                                                                                         |
| Registry re-export                     | [`lib/content/registry.ts`](../lib/content/registry.ts)                                                                                                            |
| Hub + detail routes                    | [`app/post-harvest/page.tsx`](../app/post-harvest/page.tsx), [`app/post-harvest/[slug]/page.tsx`](../app/post-harvest/[slug]/page.tsx)                             |
| Sitemap                                | [`lib/seo/routes.ts`](../lib/seo/routes.ts) — hub in `STATIC_ROUTES`; detail pages auto-included from `PUBLISHED_CONTENT`                                          |
| Search                                 | [`types/search.ts`](../types/search.ts) (`SearchEntityType`) + [`lib/search/documents.ts`](../lib/search/documents.ts) (label; docs auto-built from `contentType`) |

The registry (`getContentByType`, `contentTypeSorted`), validators, breadcrumbs,
structured data, and the `ContentArticle` renderer are all type-generic, so they
required no changes — the new type flows through them automatically.

## Content

The type ships with **22 entries** spanning every `postHarvestClass`: grain
drying, grain storage, cold storage, hermetic storage, controlled-atmosphere
storage, modified-atmosphere packaging, precooling, ethylene management, fruit
ripening, curing, sun drying, grain cleaning, threshing & shelling, sorting &
grading, packing & packaging, cold chain, stored-grain insects, storage moulds &
mycotoxins, potato storage, onion & garlic curing, post-harvest food loss, and
moisture content & equilibrium.

Each is descriptive and principle-based: it explains what the operation is, why
it matters for quality and loss reduction, and how it is managed — **without**
publishing commodity-specific storage settings or fabricated figures, which
depend on the crop, cultivar, and local conditions.

## Guarantees

- No fabricated numbers; quantitative specifics are avoided or attributed.
- Every source is a registered registry ID; every cross-reference resolves to a
  published page (enforced by `content:validate`).
- No images (image licensing is gated separately).
- Fully covered by [`tests/phase4d.test.ts`](../tests/phase4d.test.ts) — type
  wiring, required fields, source validity, reference resolution, and sitemap +
  search coverage.

---

## Phase 5B — the type, strengthened

Phase 5B extended `post-harvest` from a concept type into the process/system
model, rather than splitting storage and packaging into new page types. That
choice was forced by two facts: separate types would have duplicated existing
pages (`hermetic-storage`, `cold-storage`, `packing-and-packaging`, …), which the
anti-spam rule forbids; and Phase 5A had already wired **130 commodity→storage
edges** into these slugs, all of which would have broken.

Fields added (all optional unless noted): `applicableCommodityClasses`,
`applicableCommodities`, `processStage`, `operatingPrinciple`, `equipment`,
`measurableInputs`, `measurableOutputs`, `qualityEffects`, `riskFactors`,
`environmentalContext`, `monitoringMethods`, `safetyLimitations`,
`relevantStandards`.

**Class-conditional rule:** an entry classed `storage` or `cooling` **must**
declare `operatingPrinciple` and `riskFactors`. A storage system without its
principle or its failure modes is a shell.

**`storageSystems` is now type-checked by class.** A commodity is _held in_ a
store; it only _passes through_ a drying, curing, or grading operation. The edge
therefore requires `postHarvestClass ∈ {storage, cooling}` — a rule that
immediately corrected 17 Phase 5A edges.

The type now holds 59 entries: processes, storage systems, and packaging systems,
discriminated by `postHarvestClass`. Three sibling types cover what it does not:
[`quality-attribute`, `post-harvest-defect`, `quality-measurement`](storage-and-quality-methodology.md).
