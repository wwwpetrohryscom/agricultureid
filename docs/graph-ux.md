# Knowledge-graph UX (Phase 3D)

Phase 3D surfaces the semantic knowledge graph (built in Phase 2.1 and extended
in 3A/3B) as navigable UI, using **only supported semantic edges** — no
force-directed graph as the primary experience.

## Relation panels (entity pages)

`components/graph/RelationPanels.tsx` renders an entity's outgoing semantic edges
grouped by relation type, each with a human heading (e.g. "Susceptible to",
"Nutrients required", "Supplied by fertilizers", "Suitable soils", "Climate
sensitivity", "Machinery", "Farming systems"). Rules:

- Only relations that actually have edges appear — **no empty headings**.
- Targets must resolve to a **published** entity.
- Cultivars/breeds are surfaced through the dedicated `ParentSubEntities` panel,
  not duplicated here.

These sit on every content page (via `ContentArticle`) alongside the existing
reciprocal `RelatedContent`, giving a relation-aware view of the graph.

## Explore page

`/explore` is a browse-first knowledge-graph overview: entity counts by type,
the controlled relationship vocabulary with edge counts, and the most-connected
entries as entry points. It links to full-text search. It is indexable and in
the sitemap (unlike the query-dependent `/search`).

## Why not a force-directed graph

Per the brief, an unusable force-directed graph is avoided as the primary UX.
Relation panels, grouped lists, and faceted search are the primary navigation; a
compact visualization could be added later as a secondary enhancement without
changing the data model.

## Graph-driven ranking

The graph already powers related-content ranking (direct semantic relationship,
reciprocal links, parent/child, shared type). Search ranking additionally weights
relationship labels and names, so an entity's role in the graph improves its
findability.
