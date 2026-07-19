# AgricultureID

**Global Agriculture Knowledge and Intelligence** — a structured, evidence-based
reference platform covering crops, soils, plant diseases, pests, livestock, and
the agricultural systems that connect them.

- **Domain:** [agricultureid.com](https://agricultureid.com)
- **Stack:** Next.js (App Router) · React · TypeScript (strict) · Tailwind CSS
- **Rendering:** static generation, server components by default, minimal client JS
- **Phase:** Phase 2 — an expanded, deeply interconnected agricultural knowledge
  graph built on the Phase 1 foundation

AgricultureID is designed to feel like a professional agricultural encyclopedia
and structured data reference — not a generic blog. Every public entry follows a
typed content model, cites authoritative sources, and states its geographic
scope and limitations.

---

## Product purpose

Make reliable agricultural knowledge easy to find, easy to trust, and clearly
sourced — for farmers, agronomists, researchers, students, and agricultural
businesses. We do not exaggerate authority or coverage, invent statistics or
institutions, or present region-specific advice as if it were universal.

## Local setup

Requirements: **Node.js ≥ 18.18** (see `.nvmrc` for the recommended version) and
npm.

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:3000
```

No database, authentication, CMS, or external services are required to run the
site. Environment variables are all optional (see `.env.example`).

## Scripts

| Script                     | Purpose                                                             |
| -------------------------- | ------------------------------------------------------------------- |
| `npm run dev`              | Start the development server                                        |
| `npm run build`            | Production build (static generation)                                |
| `npm run start`            | Serve the production build                                          |
| `npm run lint`             | ESLint (Next core-web-vitals + TypeScript + Prettier)               |
| `npm run typecheck`        | TypeScript type checking (`tsc --noEmit`)                           |
| `npm run format`           | Format the codebase with Prettier                                   |
| `npm run format:check`     | Verify formatting                                                   |
| `npm run test`             | Run the Vitest test suite                                           |
| `npm run content:validate` | Content integrity gate (fails on any structural error)              |
| `npm run content:report`   | Print a knowledge-graph and content report (informational)          |
| `npm run validate`         | `format:check` + `typecheck` + `lint` + `content:validate` + `test` |

## Architecture overview

```
app/            App Router routes (hubs, [slug] pages, legal pages, sitemap, robots)
components/     Presentation: layout, navigation, content, cards, seo, ui, analytics
content/        Typed content DATA (crops, soils, diseases, pests, livestock,
                nutrients, fertilizers, soil-topics, machinery, climate,
                farming-systems, irrigation-methods)
data/           Source registry and glossary data
lib/            Logic: content registry/graph, seo, schema, sources, validation, site config
public/         Static assets and brand files
scripts/        Content validation and reporting (run via tsx)
styles/         Global CSS and design tokens
tests/          Vitest infrastructure tests
types/          Content and source type definitions
docs/           Architecture, content model, editorial, SEO, licensing, scaling docs
.github/        CI workflow
```

Clear separation is maintained between presentation (`components/`), content data
(`content/`, `data/`), structured data (`lib/schema/`), sources
(`data/sources.ts`, `lib/sources/`), metadata (`lib/seo/`), validation
(`lib/validation/`), and business logic (`lib/content/`). See
[docs/architecture.md](docs/architecture.md).

## Content workflow

1. Add a typed data file under `content/<type>/<slug>.ts` (see an existing entry
   as a template — e.g. `content/crops/wheat.ts`).
2. Register it in the matching `content/<type>/index.ts`.
3. Reference sources by id from the registry in `data/sources.ts`, and link
   related pages with typed `ContentRef`s.
4. Run `npm run content:validate` — it fails the build on missing sources,
   duplicate slugs/metadata, unresolved links, malformed dates/URLs, placeholder
   text, orphans, and more.

The content model is documented in
[docs/content-model.md](docs/content-model.md); sourcing standards in
[docs/editorial-and-sources.md](docs/editorial-and-sources.md).

## Validation workflow

Run everything the way CI does:

```bash
npm run validate   # format:check + typecheck + lint + content:validate + test
npm run build      # production build
```

The GitHub Actions workflow in `.github/workflows/validate.yml` runs the same
steps on every push and pull request to `main`.

## Deployment notes

The project targets **Vercel** with zero required configuration. It uses static
generation for all pages plus a small set of security headers (see
`next.config.mjs`). Set `NEXT_PUBLIC_SITE_URL` if deploying to a non-production
origin so canonical URLs and the sitemap resolve correctly. WebmasterID
analytics loads on every page (see `components/analytics/Analytics.tsx` and the
privacy policy at `/privacy`).

## Current scope

**345 sourced, interconnected reference entries** across 12 content types
(380 static pages), forming a densely linked agricultural knowledge graph
(~3,980 typed relationships, no orphaned or weakly-linked pages):

| Type            | Entries | Type               | Entries |
| --------------- | ------- | ------------------ | ------- |
| Crops           | 127     | Fertilizers        | 28      |
| Pests           | 33      | Soil health topics | 19      |
| Plant diseases  | 26      | Machinery          | 18      |
| Livestock       | 24      | Farming systems    | 15      |
| Plant nutrients | 17      | Climate factors    | 14      |
| Soils           | 13      | Irrigation methods | 11      |

- A source registry of 39 authoritative organizations and publications
- Every page carries a lead image: a **verified Wikimedia Commons photograph**
  (CC0 / Public domain / CC BY / CC BY-SA only, self-hosted with attribution)
  for concrete entities, or an **original SVG diagram** for abstract topics
- Full trust and legal set: about, editorial policy, methodology, corrections,
  contact, privacy, terms, disclaimer
- SEO foundation (canonical URLs, metadata, sitemap, robots, Open Graph,
  breadcrumbs, careful schema.org), a typed cross-type knowledge graph, and
  content + image validation gates

The knowledge graph connects, for example, a crop to the nutrients it needs, the
fertilizers that supply them, its diseases and pests, suitable soils, irrigation
methods, climate factors, and machinery — with reciprocity computed
automatically. See [docs/content-model.md](docs/content-model.md).

## Future phases

See [docs/scaling-plan.md](docs/scaling-plan.md) for the roadmap toward crop
varieties, breed profiles, more diseases/pests, soil classifications, tools and
calculators, geographic pages, official datasets, and multilingual expansion.

## License

Code is released under the [MIT License](LICENSE). Cited source materials remain
the property of their respective owners. Brand assets are original works (see
[docs/image-licensing.md](docs/image-licensing.md)).
