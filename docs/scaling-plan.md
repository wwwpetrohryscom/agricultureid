# Scaling plan

Phase 1 establishes a foundation deliberately sized for quality over volume. This
plan outlines a safe path to scale toward tens of thousands of high-quality,
evidence-based pages without compromising trust or performance.

## Principles that make scaling safe

- **Typed content + build-time validation.** Every new entry is checked for
  sources, unique metadata, resolvable links, valid dates, and more before it can
  ship. This is what makes large-scale contribution safe.
- **One renderer per concern.** New entries reuse `ContentArticle`, the source
  registry, and the knowledge graph, so consistency is automatic.
- **Static generation.** Pages are prerendered; scaling adds build time and files,
  not runtime complexity.
- **Provenance first.** The source registry scales independently of content, so
  authorities are reused rather than re-entered.

## Roadmap

### Near term — deepen existing types

- Grow crops toward **hundreds of pages**, then add **crop varieties/cultivars**
  as a sub-type linked to their parent crop.
- Expand **plant diseases** and **pests** with more species and clearer host
  graphs.
- Broaden **soil classifications** (e.g. WRB / USDA taxonomy groupings) beyond
  texture classes.
- Add **breed profiles** as a sub-type under livestock, sourced from official
  registries (e.g. FAO DAD-IS).

### Mid term — new sections and tools

- Build out **farm systems**, **machinery**, **irrigation**, and
  **plant nutrition** from overviews into full entry sets.
- Introduce **tools and calculators** (e.g. unit converters, simple agronomic
  calculators) with transparent formulas and derived-value labelling — only when
  they are genuinely useful, never as SEO shells.
- Add **agricultural data** guides that reference primary datasets and explain
  their methodology.

### Longer term — breadth and reach

- **Geographic agriculture pages** (country/region context) built from
  authoritative statistics, with explicit scope.
- **Official datasets** surfaced and referenced (not republished) with clear
  provenance.
- **Multilingual expansion**, introducing locale routing and translated content
  once the English corpus is mature.

## Operational scaling considerations

- **Content pipeline.** Keep authoring as typed data; consider generation tooling
  that still passes the same validation gates.
- **Build performance.** As page counts grow, tune Next.js static generation
  (worker/partitioning settings) and consider incremental strategies.
- **Sitemaps.** Move from a single sitemap to a sharded sitemap index when route
  counts grow large.
- **Search & discovery.** Add on-site search and richer hub filtering as the
  corpus grows.
- **Editorial throughput.** Preserve the evidence hierarchy and corrections
  process; scale review capacity alongside content volume.

## Guardrails that must not be relaxed

- No empty category shells or "coming soon" SEO pages.
- No universal rates/dates/yields or prescriptive treatment guidance without
  context.
- No fabricated statistics, datasets, authors, reviewers, or partnerships.
- No legally uncertain images.
- Every public page keeps unique metadata, a canonical URL, visible sources, and
  a place in the knowledge graph.
