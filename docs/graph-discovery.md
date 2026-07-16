# Graph discovery (Phase 5F)

## The bug this file exists because of

`refsWithField` — the function that turns a page's typed reference fields into
knowledge-graph edges — was a hand-maintained `switch` on `contentType`. Fourteen
types had a case. Each new type had to remember to add itself.

Phase 5D's five types never did. So:

| Type                 | Declared refs | Edges emitted              |
| -------------------- | ------------- | -------------------------- |
| `logistics-concept`  | many          | **0**                      |
| `standard-reference` | many          | **0**                      |
| `market-term`        | many          | **0**                      |
| `supply-chain-risk`  | many          | **0**                      |
| `trade-concept`      | many          | only generic `connections` |

`cold-chain-failure` declared **seven** affected commodities and **six** related
risks and contributed **nothing** to the graph. Phase 5C's generated `producedBy`
inverse was invisible for the same reason.

**Nothing failed.** Every gate was green. The Phase 5D tests looked like this:

```ts
for (const x of TRADE_CONCEPTS)
  for (const e of semanticEdges(x))
    expect(RELATION_TYPES.has(e.relation)).toBe(true);
```

That is **vacuously true of an empty set**. A test that iterates a collection and
asserts a property of each member proves nothing when the collection is empty —
and the emptiness was the bug. The validator was no better: it checked that every
ref _resolves_, which they all did, because resolution reads the content, not the
graph.

Restoring the missing edges recovered **2,175** of them, with **zero** lost.

## The fix: discover refs structurally

```ts
function refsWithField(item) {
  for (const [field, value] of Object.entries(item)) {
    if (isContentRef(value)) …
    else if (Array.isArray(value)) for (const v of value) if (isContentRef(v)) …
  }
}
```

A new content type is in the graph the moment it declares a ref. There is nothing
to remember, so there is nothing to forget.

### Why `isContentRef` is safe

It requires `type` **and** `slug`, and requires `type` to be a real content type.
That last clause is what makes structural discovery safe rather than reckless: a
`ContentBlock` also carries a `type` (`"paragraph"`, `"callout"`), but has no
`slug` and no content-type value, so authored prose can never be mistaken for
structure. `FieldCitation` carries `sourceId`, not `type`/`slug`. `CommodityCode`
carries `system`/`code`.

### Why one level deep

References live at the top level or in a top-level array — never nested inside
prose. Recursing deeper would buy nothing and would start walking authored
content looking for structure.

### Field ordering matters

`semanticEdges` dedupes by target and keeps the first non-generic relation. So
`refsWithField` returns generic fields (`connections`, `relatedTopics`) **last**:
a target named by both a typed field and `connections` must meet the typed field
first, or a precise relation would be recorded as a bare `relatedConcept`.

## What the restored edges exposed

Making 2,175 edges visible immediately produced **842 reciprocity errors** —
which were themselves informative, and split into two very different groups.

### 826: relations that are genuinely symmetric

`relatedTradeConcept`, `relatedLogisticsConcept`, `relatedStandard`,
`relatedMarketTerm`, `relatedRisk`. "A is related to B" is true exactly when "B
is related to A", and Phase 5D's reciprocity generator makes them mutual in the
content — correctly. The relations simply never declared themselves symmetric, so
the graph flagged its own correct data. Fixed by declaring each its own inverse.

### 16: a relation pointing the wrong way

`associatedDocuments` was mapped to a directional `documents` relation. But the
field states an **association**: a bill of lading and a packing list accompany
each other in a document set, and neither documents the other.

The honest fix was a symmetric `associatedDocument` relation — not a direction.
Choosing a direction would have meant **inventing information the content does
not carry** in order to satisfy a checker. `documents`/`documentedBy` were
removed: they existed only for that one mis-mapping.

## The gate

[`tests/phase5f.test.ts`](../tests/phase5f.test.ts) asserts the direction the old
tests missed — **what the content declares must reach the graph**:

- every distinct ref target a page declares emits an edge;
- no content type declaring refs contributes zero edges;
- the Phase 5D types each average more than one edge per page;
- a synthetic type with an unregistered field still yields its refs, while prose
  blocks and unknown types are ignored.

The test derives what the graph _should_ contain **without calling
`refsWithField`**, so a bug in the graph's own discovery cannot hide behind a test
that reuses it. This is the same principle that the dry-basis blending bug taught
in Phase 5E: a check that reuses the thing under test proves nothing.

## Known limitations

- **37% of edges are the generic `relatedConcept`**, from `connections` and
  `relatedTopics`. That is the documented conservative default — a generic field
  cannot assert a precise relation — but it does mean over a third of the graph
  carries no semantic detail beyond "these are related".
- **213 published pages still have zero inbound edges** (down from 361). They are
  reachable from their hub, so they are not orphans by the SEO audit's standard,
  but nothing else in the corpus points at them.
- **Structural discovery cannot know intent.** If a future field holds a
  `ContentRef` that is deliberately _not_ a graph edge, the walker will emit it
  anyway. No such field exists today; if one ever does, it needs an explicit
  exclusion rather than a silent surprise.
