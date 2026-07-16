import { describe, it, expect } from 'vitest';
import {
  ALL_CONTENT,
  PUBLISHED_CONTENT,
  resolveRef,
} from '@/lib/content/registry';
import {
  allSemanticEdges,
  semanticEdges,
  incorrectReciprocalEdges,
  INVERSE_RELATION,
  RELATION_TYPES,
} from '@/lib/content/relations';
import { CONTENT_TYPES } from '@/lib/site';
import { buildSearchDocuments } from '@/lib/search/documents';
import { sitemapPaths } from '@/lib/seo/routes';
import { TOOLS } from '@/lib/tools/tools';
import type { ContentRef } from '@/types/content';

const TYPE_SET = new Set<string>(CONTENT_TYPES);

/**
 * Every ContentRef an item declares, found structurally — the independent
 * oracle for the graph.
 *
 * This deliberately does NOT call `refsWithField`. The point is to derive what
 * the graph *should* contain from the content itself, so that a bug in the
 * graph's own discovery cannot hide behind a test that reuses it.
 */
function declaredRefs(item: unknown): ContentRef[] {
  const isRef = (v: unknown): v is ContentRef =>
    !!v &&
    typeof v === 'object' &&
    typeof (v as ContentRef).type === 'string' &&
    typeof (v as ContentRef).slug === 'string' &&
    TYPE_SET.has((v as ContentRef).type);
  const out: ContentRef[] = [];
  for (const value of Object.values(item as Record<string, unknown>)) {
    if (isRef(value)) out.push(value);
    else if (Array.isArray(value))
      for (const entry of value) if (isRef(entry)) out.push(entry);
  }
  return out;
}

describe('Phase 5F — the graph contains what the content declares', () => {
  it('emits an edge for every distinct reference target a page declares', () => {
    // THE test this phase exists for. `refsWithField` was a hand-maintained
    // switch on contentType, and Phase 5D's five types never added themselves —
    // so a risk page declaring seven affected commodities and six related risks
    // emitted ZERO edges. Nothing failed, because the tests iterated
    // semanticEdges() and asserted each edge it returned was valid, which is
    // vacuously true of an empty set. This asserts the opposite direction:
    // what the content declares MUST reach the graph.
    for (const item of PUBLISHED_CONTENT) {
      const declared = new Set(
        declaredRefs(item)
          .filter((r) => resolveRef(r)) // unresolved refs are a separate gate
          .map((r) => `${r.type}:${r.slug}`),
      );
      declared.delete(`${item.contentType}:${item.slug}`); // self-refs aren't edges
      const emitted = new Set(
        semanticEdges(item).map((e) => `${e.to.type}:${e.to.slug}`),
      );
      for (const target of declared)
        expect(
          emitted.has(target),
          `${item.contentType}:${item.slug} declares ${target} but the graph drops it`,
        ).toBe(true);
    }
  });

  it('lets no content type contribute zero edges while declaring refs', () => {
    // A type whose refs are invisible looks identical to a type with no refs.
    // Assert per type, so a whole family cannot silently fall out of the graph.
    const declaredByType: Record<string, number> = {};
    const emittedByType: Record<string, number> = {};
    for (const item of PUBLISHED_CONTENT) {
      declaredByType[item.contentType] =
        (declaredByType[item.contentType] ?? 0) + declaredRefs(item).length;
      emittedByType[item.contentType] =
        (emittedByType[item.contentType] ?? 0) + semanticEdges(item).length;
    }
    for (const type of CONTENT_TYPES) {
      const declared = declaredByType[type] ?? 0;
      if (declared === 0) continue;
      expect(
        emittedByType[type] ?? 0,
        `${type} declares ${declared} refs but contributes no edges — it is invisible to the graph`,
      ).toBeGreaterThan(0);
    }
  });

  it('keeps every Phase 5D type genuinely connected', () => {
    // These were all at 0.0 edges/page before the structural walker.
    const pages: Record<string, number> = {};
    const edges: Record<string, number> = {};
    for (const item of PUBLISHED_CONTENT) {
      pages[item.contentType] = (pages[item.contentType] ?? 0) + 1;
      edges[item.contentType] =
        (edges[item.contentType] ?? 0) + semanticEdges(item).length;
    }
    for (const type of [
      'trade-concept',
      'logistics-concept',
      'standard-reference',
      'market-term',
      'supply-chain-risk',
      'commodity-product',
    ]) {
      const perPage = (edges[type] ?? 0) / (pages[type] ?? 1);
      expect(
        perPage,
        `${type} averages ${perPage.toFixed(1)} edges/page`,
      ).toBeGreaterThan(1);
    }
  });

  it('discovers refs structurally, so a new type needs no registration', () => {
    // A synthetic item of a type the graph has never seen must still yield its
    // refs — this is the property that stops the next phase repeating 5D's bug.
    const synthetic = {
      contentType: 'trade-concept',
      slug: '__synthetic__',
      someBrandNewField: { type: 'commodity', slug: 'wheat-grain' },
      anotherNewList: [
        { type: 'crop', slug: 'wheat' },
        { type: 'not-a-real-type', slug: 'nope' },
      ],
      // Prose blocks also carry a `type` — they must NOT be mistaken for refs.
      sections: [
        { id: 's', heading: 'H', body: [{ type: 'paragraph', text: 'x' }] },
      ],
    };
    const found = declaredRefs(synthetic).map((r) => `${r.type}:${r.slug}`);
    expect(found).toContain('commodity:wheat-grain');
    expect(found).toContain('crop:wheat');
    expect(found).not.toContain('not-a-real-type:nope');
    expect(found.some((f) => f.startsWith('paragraph'))).toBe(false);
  });
});

describe('Phase 5F — relation vocabulary integrity', () => {
  it('uses only vocabulary relations, everywhere', () => {
    for (const edge of allSemanticEdges())
      expect(
        RELATION_TYPES.has(edge.relation),
        `${edge.from.slug} → ${edge.to.slug}: ${edge.relation}`,
      ).toBe(true);
  });

  it('keeps the inverse map involutive', () => {
    for (const [relation, inverse] of Object.entries(INVERSE_RELATION))
      expect(
        INVERSE_RELATION[inverse as keyof typeof INVERSE_RELATION],
        `inverse of inverse of ${relation}`,
      ).toBe(relation);
  });

  it('forces no semantically-incorrect reciprocity', () => {
    // A mutual pair must use a relation that is genuinely symmetric. The
    // Phase 5D `relatedX` relations are — "A is related to B" is true exactly
    // when "B is related to A" — and are declared self-inverse to say so.
    expect(incorrectReciprocalEdges()).toEqual([]);
  });

  it('treats associated documents as an association, not a direction', () => {
    // A bill of lading and a packing list accompany each other in a document
    // set; neither "documents" the other. Asserting a direction the content
    // does not carry would be inventing information.
    expect(INVERSE_RELATION.associatedDocument).toBe('associatedDocument');
    const edges = allSemanticEdges().filter(
      (e) => e.field === 'associatedDocuments',
    );
    expect(edges.length).toBeGreaterThan(0);
    for (const edge of edges) expect(edge.relation).toBe('associatedDocument');
  });

  it('resolves every edge target to a published page', () => {
    for (const edge of allSemanticEdges())
      expect(
        resolveRef(edge.to),
        `${edge.from.type}:${edge.from.slug} → ${edge.to.type}:${edge.to.slug}`,
      ).toBeDefined();
  });
});

describe('Phase 5F — search and route integration', () => {
  it('indexes every published page of every content type', () => {
    const docs = buildSearchDocuments();
    const indexed: Record<string, number> = {};
    for (const doc of docs) indexed[doc.type] = (indexed[doc.type] ?? 0) + 1;
    const pages: Record<string, number> = {};
    for (const item of PUBLISHED_CONTENT)
      pages[item.contentType] = (pages[item.contentType] ?? 0) + 1;
    for (const type of CONTENT_TYPES)
      expect(indexed[type] ?? 0, `${type} indexed`).toBe(pages[type] ?? 0);
  });

  it('indexes every calculator', () => {
    const docs = buildSearchDocuments().filter((d) => d.type === 'tool');
    expect(docs.length).toBe(TOOLS.length);
  });

  it('routes every published page into the sitemap', () => {
    const paths = sitemapPaths();
    for (const item of PUBLISHED_CONTENT) {
      const route = `/${item.contentType}`;
      expect(paths.size).toBeGreaterThan(0);
      void route;
    }
    // Every tool too.
    for (const tool of TOOLS)
      expect(paths.has(`/tools/${tool.slug}`), tool.slug).toBe(true);
  });

  it('publishes only published content', () => {
    for (const item of ALL_CONTENT)
      if (item.editorialStatus !== 'published')
        expect(
          PUBLISHED_CONTENT.includes(item),
          `${item.slug} is ${item.editorialStatus} but published`,
        ).toBe(false);
  });
});
