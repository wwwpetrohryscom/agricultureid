# Architecture

AgricultureID is a statically generated Next.js (App Router) application designed
to scale to tens of thousands of evidence-based reference pages while keeping the
client-side JavaScript footprint minimal.

## Guiding principles

- **Static by default.** Every route is prerendered at build time
  (`○ Static` / `● SSG`). There is no database, CMS, or runtime backend in
  Phase 1.
- **Server components by default.** The only client component in the shell is the
  mobile navigation disclosure (`components/navigation/MobileMenu.tsx`).
- **Content as typed data.** Pages are generated from typed data objects, not
  hand-written HTML or markdown, so rendering is deterministic and there is no
  unsafe HTML-injection surface.
- **Separation of concerns.** Presentation, content data, structured data,
  sources, metadata, validation, and business logic each live in their own area.

## Layered structure

| Layer           | Location                          | Responsibility                                                |
| --------------- | --------------------------------- | ------------------------------------------------------------- |
| Routing / pages | `app/`                            | Route definitions, `generateStaticParams`, `generateMetadata` |
| Presentation    | `components/`                     | Layout, navigation, content rendering, cards, SEO, UI         |
| Content data    | `content/`, `data/`               | Typed content entries, source registry, glossary              |
| Business logic  | `lib/content/`                    | Registry, resolution, knowledge graph                         |
| Metadata / SEO  | `lib/seo/`                        | Canonical URLs, metadata builders, breadcrumbs, routes        |
| Structured data | `lib/schema/`                     | schema.org JSON-LD builders                                   |
| Provenance      | `data/sources.ts`, `lib/sources/` | Source registry and lookup                                    |
| Validation      | `lib/validation/`, `scripts/`     | Content integrity checks and reporting                        |
| Types           | `types/`                          | Content and source type definitions                           |
| Configuration   | `lib/site.ts`                     | Brand, origin, navigation, content-type mapping               |

## Data flow for a content page

1. A typed entry (e.g. `content/crops/wheat.ts`) is registered in
   `content/crops/index.ts`, which is aggregated by `content/index.ts`.
2. `lib/content/registry.ts` builds lookup maps, resolves references, and exposes
   `getContent`, `getContentByType`, `contentPath`, and sorted collections.
3. The route `app/crops/[slug]/page.tsx` calls `generateStaticParams` (from the
   registry) and renders `components/content/ContentArticle.tsx`.
4. `ContentArticle` renders the structured blocks, key facts, scope/limitations,
   sources, and related content, and emits WebPage + Article + BreadcrumbList
   JSON-LD.
5. `lib/content/graph.ts` computes typed and reciprocal relationships used for
   internal linking and (modelled) orphan detection. That orphan check
   (`computeReachable`) is a registry model, not a crawl, and seeds every page as
   reachable before propagating — so it cannot report a non-empty orphan list.
   Real orphans come from `npm run seo:rendered`; see
   [`rendered-link-audit.md`](rendered-link-audit.md).

## Rendering and performance

- System font stacks (no network font fetch) keep builds deterministic and avoid
  layout shift and render-blocking font requests.
- Tailwind CSS with design tokens (`tailwind.config.ts`) produces small, purged
  CSS.
- Security headers are set in `next.config.mjs`.
- `outputFileTracingRoot` is pinned to the project directory for correct Vercel
  output tracing.

## Why these choices

- **App Router + static generation** matches a content platform whose value is in
  fast, indexable, low-JS pages.
- **Typed content + validation** lets the project scale content contributions
  safely: structural mistakes fail the build rather than reaching production.
- **A single `ContentArticle` renderer** shared by all five content types keeps
  routes thin and presentation consistent as new types are added.
