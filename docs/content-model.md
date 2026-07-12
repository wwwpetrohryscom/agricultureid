# Content model

All structured content is authored as typed TypeScript objects and validated at
build time. Types live in [`types/content.ts`](../types/content.ts).

## Base model

Every content entry extends `BaseContent`:

| Field              | Type                    | Notes                                                        |
| ------------------ | ----------------------- | ------------------------------------------------------------ |
| `id`               | `string`                | Globally unique, e.g. `crop-wheat`                           |
| `slug`             | `string`                | Kebab-case, unique within its content type                   |
| `contentType`      | `ContentType`           | `crop` \| `soil` \| `plant-disease` \| `pest` \| `livestock` |
| `title`            | `string`                | Display title                                                |
| `scientificName`   | `string?`               | Where relevant                                               |
| `alternativeNames` | `string[]?`             | Common synonyms                                              |
| `category`         | `string`                | Human-readable category label                                |
| `subcategory`      | `string?`               |                                                              |
| `summary`          | `string`                | One–two sentences; used in cards and metadata fallback       |
| `introduction`     | `ContentBlock[]`        | Opening prose                                                |
| `keyFacts`         | `KeyFact[]`             | Scannable facts panel                                        |
| `sections`         | `ContentSection[]`      | Body sections with stable anchor ids                         |
| `relatedTopics`    | `ContentRef[]?`         | Generic related pages                                        |
| `sourceReferences` | `SourceReference[]`     | Citations by source id (required for published pages)        |
| `glossaryTerms`    | `string[]?`             | Glossary slugs                                               |
| `reviewedAt`       | `string?`               | ISO date                                                     |
| `updatedAt`        | `string`                | ISO date                                                     |
| `geographicScope`  | `string`                | Explicit statement of applicability                          |
| `climateContext`   | `string?`               |                                                              |
| `limitations`      | `string[]`              | Honest limitations and uncertainty                           |
| `editorialStatus`  | `EditorialStatus`       | `draft` \| `in-review` \| `published`                        |
| `image`            | `ImageMeta?`            | With licensing/provenance fields when a photo is used        |
| `seo`              | `SeoMeta`               | Unique title + description                                   |
| `structuredData`   | `StructuredDataConfig?` | Opt into Article schema                                      |

Only `editorialStatus: 'published'` entries are routed, indexed, sitemapped, and
counted in the knowledge graph.

## Content blocks

Body content is a discriminated union (`ContentBlock`) rendered safely by
`components/content/ContentBlocks.tsx` — no raw HTML:

- `paragraph` — a block of text
- `list` — ordered or unordered items
- `definitionList` — term/description pairs
- `table` — columns, rows, optional caption (scrolls horizontally on mobile)
- `callout` — `note` \| `caution` \| `important`, for scope and safety notes

## Domain-specific extensions

Each content type adds typed relationship and classification fields:

- **`CropContent`** — `botanicalFamily`, `lifecycle`, `commonDiseases`,
  `commonPests`, `suitableSoils`
- **`SoilContent`** — `texture`, `suitedCrops`
- **`PlantDiseaseContent`** — `causalAgent`, `pathogenType`, `hostCrops`
- **`PestContent`** — `pestGroup`, `hostCrops`
- **`LivestockContent`** — `primaryProducts`, `productionSystems`

Relationship fields hold `ContentRef` objects (`{ type, slug }`) that must
resolve to existing entries. `lib/content/graph.ts` computes reciprocal links so,
for example, a disease page lists every crop that names it as a host.

## Adding an entry

1. Create `content/<type>/<slug>.ts` exporting a typed const.
2. Import and register it in `content/<type>/index.ts`.
3. Cite sources by id from `data/sources.ts`.
4. Run `npm run content:validate`.

## What the model deliberately avoids

- Universal planting dates, fertilizer/pesticide rates, irrigation volumes,
  yields, or profitability figures without geographic and evidentiary context.
- Prescriptive chemical or veterinary treatment instructions on disease, pest,
  and livestock pages.
- Fabricated statistics, datasets, author credentials, or review claims.
