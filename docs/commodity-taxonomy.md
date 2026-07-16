# Commodity taxonomy (Phase 5A)

## The rule this model exists to enforce

A **crop** is a living plant. A **commodity** is the harvested, traded thing. A
**commodity product** is what a commodity is transformed into. These are three
different entities with three different bodies of evidence, and AgricultureID
never conflates them.

The distinction is not pedantry. A wheat plant has an agronomy, a growth cycle,
diseases, and soil requirements. Wheat grain has a moisture content, a test
weight, a grade, a storage behaviour, and a classification code. A claim that is
true of one is frequently false of the other, and a page that mixes them is
reliable about neither.

| Entity    | Type                | Example                     | Described by                                           |
| --------- | ------------------- | --------------------------- | ------------------------------------------------------ |
| Crop      | `crop`              | Wheat (_Triticum aestivum_) | agronomy, pests, soils, climate                        |
| Commodity | `commodity`         | Wheat grain                 | harvested part, class, grade, moisture, storage, codes |
| Product   | `commodity-product` | Wheat flour, wheat bran     | process, fraction, uses, quality attributes            |
| Grade     | `commodity-grade`   | US Standards for Wheat      | body, jurisdiction, edition, factors                   |

## Modelling decisions

### Commodities are content types, not a parallel model

`commodity`, `commodity-product`, and `commodity-grade` are first-class content
types extending `BaseContent`. They therefore inherit — rather than re-implement
— field-level provenance (`claims`/`FieldCitation`), the source registry,
evidence tiers, SEO uniqueness, limitations, editorial status, structured data,
search indexing, and the sitemap. See `types/commodity.ts` for the frozen
vocabulary and `types/content.ts` for the interfaces.

### Uses are a field, not a page

`CommodityUse` (`food`, `feed`, `industrial`, `seed`, `fibre`, `oil`,
`beverage`, `energy`) is a controlled vocabulary field on commodities and
products. It is deliberately **not** a page type: a `/uses/food` page would be a
registry-field listing with no distinct reference value, which the anti-spam rule
forbids. Uses drive facets and panels instead.

### One parent, always

Every commodity is anchored to **exactly one** `sourceCrop` **or**
`sourceLivestock`, which must resolve to a published page. The field names are
deliberately distinct from the cultivar/breed `parentCrop`/`parentLivestock`, so
commodity edges can never be mistaken for cultivar parentage in the relation
mapping.

Several distinct commodities may share one crop parent when they are genuinely
distinct traded things — this is correct, not duplication:

- `rice` → rice paddy, brown rice, milled rice (distinct traded forms; the
  milling chain between them is prose + `relatedTopics`, and belongs to the
  processing model, not a product pathway);
- `grape` → table grapes, wine grapes (different quality basis entirely);
- `coffee` → coffee cherries, green coffee;
- `cotton` → seed cotton, cotton lint, cottonseed.

The validator rejects two commodities with the _same title_ under the same
parent.

## Transformation pathways

Pathways are explicit, typed, and reciprocal. A commodity declares
`primaryProducts` / `coProducts` / `byProducts`; each product declares
`derivedFrom` and a `productClass`. The validator requires both directions to
agree — a one-way edge is a build error.

| Class             | Meaning                            | Example                     |
| ----------------- | ---------------------------------- | --------------------------- |
| `primary-product` | the main intended output           | wheat grain → flour         |
| `co-product`      | deliberate, valuable, simultaneous | soybeans → meal **and** oil |
| `by-product`      | residual, lower value              | sugarcane → bagasse         |

**A pathway is never inferred from a shared crop parent.** Two things made from
the same plant are not automatically made from each other. Every edge must be
scientifically and commercially real.

Relation types added in 5A (`lib/content/relations.ts`), with inverses:
`harvestedAs`/`harvestedFrom`, `processedInto`/`derivedFromCommodity`,
`producesCoProduct`/`coProductOf`, `producesByProduct`/`byProductOf`,
`gradedUnder`/`gradeAppliesTo`, and `storedUsing`.

## Routes and panels

| Route                                               | Purpose                        |
| --------------------------------------------------- | ------------------------------ |
| `/commodities`, `/commodities/[slug]`               | commodity hub + entries        |
| `/commodity-products`, `/commodity-products/[slug]` | product hub + entries          |
| `/commodity-grades`, `/commodity-grades/[slug]`     | grading-standard hub + entries |

Crop and livestock pages render a **Harvested commodities** panel; commodity
pages render **Primary products**, **Co-products**, **By-products**, and
**Grading standards** panels. Every panel is omitted when empty — no shell
headings. Crucially, a crop page links _commodities_, not products: the bridge
from plant to product always runs through the commodity.

## Images

Commodity images use their own identity vocabulary (`types/commodity.ts`):
`exactCommodity`, `processedProduct`, `parentCropRepresentative`,
`handlingContext`, `unavailable`. A living-crop photo must never be presented as
the harvested or processed commodity without the `parentCropRepresentative`
label. Phase 5A ships with `imageIdentity: 'unavailable'` throughout — no images
were added.

## Validation (`lib/commodity/validate-commodity.ts`)

Wired into `content:validate`. Errors on: commodity without exactly one resolving
published parent; wrong parent type; duplicate commodity under a parent; unknown
class/use/form/image-identity; unsupported or unversioned classification code
(HS/CN require an edition); pathway targeting a non-product; pathway class
mismatch; non-reciprocal pathway (either direction); product whose `derivedFrom`
is not a commodity; grade missing body/jurisdiction/edition/legal status/
reproduction limitations; grade criterion with a value but no unit; quantitative
grade criteria without Tier 1–2 provenance; orphan commodity.
