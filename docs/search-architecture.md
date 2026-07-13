# Search architecture (Phase 3D)

AgricultureID uses a **build-time search index with a custom weighted inverted
index** — no hosted service, no database, and not a naive client-side array
filter.

## Why a custom inverted index

The corpus (~574 documents) is small enough to index in the browser but needs
real relevance: exact-first ranking, synonym expansion, scientific-name search,
and conservative typo tolerance without over-correcting short or scientific
terms. A custom engine (`lib/search/engine.ts`) gives exact control over all of
these; it also avoids adding Algolia/Elasticsearch/Meilisearch/Typesense (which
would require explicit authorization) or a heavy client dependency.

## Data flow

1. `lib/search/documents.ts` (server) builds one `SearchDoc` per **published**
   entity across every type — content (crops … cultivars, breeds), glossary,
   countries, indicators, and tools. It stores only searchable text (names,
   scientific name, category, parent, summary, relationship labels, sources,
   country/region) — **never full article bodies or unpublished content**.
2. `scripts/build-search-index.ts` serializes the docs (summaries trimmed) plus
   the synonym registry to `public/search-index.json` with a checksum. It runs
   as a `prebuild` step, so production is always fresh.
3. The client (`SearchApp`) lazy-loads `/search-index.json` only on `/search`,
   and builds the inverted index in-browser via the **isomorphic** engine.

## Index & performance

- Documents: **574**. Raw payload ~492 kB; **~65 kB gzipped**.
- Loaded lazily on the search page only — not shipped on every page. Article
  bodies are never included. Query latency is sub-millisecond for this corpus.
- The engine is deterministic; the same documents produce the same index.

## Ranking

Weighted fields (title 10, names 8, scientific name 7, parent/category/country
4, region/relation/source/glossary 2–3, summary 1). Match types are scored by
factor: exact (4) > synonym (3) > prefix (2) > typo (1). Scores are boosted by
the fraction of query terms matched (AND-preference) and a large exact-title
bonus, so precise matches lead.

## Typo tolerance (conservative)

Single-edit (insert/delete/substitute/adjacent-transpose) tolerance applies
**only** to query tokens ≥ 5 characters that have no exact match — short and
scientific terms are not fuzzily rewritten. Corrections and matched aliases are
surfaced to the user as "related terms", never silently substituted.

## Facets

`entityType`, `category`, `country`, `region`, and `source` facet counts are
computed from the filtered result set; empty facets are not shown. Selecting a
facet filters results and recomputes counts.

## SEO

`/search` is `robots: noindex, follow` (query-dependent results are not indexed);
`/explore` (the knowledge-graph browse view) is indexable and in the sitemap. The
header quick-search routes into the full `/search` on Enter or "search
everything".

## Validation

`lib/search/validate-search.ts` (in `content:validate`) fails on: unpublished
content in the index, duplicate documents, missing/broken canonical routes,
missing entityType facet, ambiguous/ self-referential synonyms, and a **stale
index checksum** (the committed `public/search-index.json` must match a fresh
build — run `npm run search:index`).
