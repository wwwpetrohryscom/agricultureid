import { describe, expect, it } from 'vitest';
import { buildSearchDocuments } from '@/lib/search/documents';
import {
  buildIndex,
  search,
  withinOneEdit,
  tokenize,
} from '@/lib/search/engine';
import { SYNONYMS } from '@/data/search/synonyms';
import { runBenchmark, benchmarkPrecision } from '@/lib/search/benchmark';
import { searchIssues } from '@/lib/search/validate-search';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';

const docs = buildSearchDocuments();
const index = buildIndex(docs, SYNONYMS);

function topId(q: string, opts = {}) {
  return search(index, q, opts).results[0]?.doc.id;
}

describe('phase 3D — index integrity', () => {
  it('indexes a substantial, unique, published corpus', () => {
    expect(docs.length).toBeGreaterThan(500);
    const ids = new Set(docs.map((d) => d.id));
    expect(ids.size).toBe(docs.length);
    for (const d of docs) {
      expect(d.route.startsWith('/'), d.id).toBe(true);
      expect(d.facets.entityType?.length, d.id).toBeTruthy();
    }
  });

  it('never indexes unpublished content', () => {
    const publishedKeys = new Set(
      PUBLISHED_CONTENT.map((c) => `${c.contentType}:${c.slug}`),
    );
    const contentTypes = new Set(PUBLISHED_CONTENT.map((c) => c.contentType));
    for (const d of docs)
      if (contentTypes.has(d.type as never))
        expect(publishedKeys.has(d.id), d.id).toBe(true);
  });

  it('search validator reports no errors', () => {
    expect(searchIssues().filter((i) => i.level === 'error')).toEqual([]);
  });
});

describe('phase 3D — relevance & synonyms', () => {
  it('exact common name ranks first', () => {
    expect(topId('maize')).toBe('crop:maize');
  });
  it('synonyms resolve (corn → maize, colorado beetle → beetle)', () => {
    expect(topId('corn')).toBe('crop:maize');
    expect(topId('colorado beetle')).toBe('pest:colorado-potato-beetle');
  });
  it('scientific names resolve', () => {
    expect(topId('zea mays')).toBe('crop:maize');
  });
  it('country and indicator queries resolve', () => {
    expect(topId('united states')).toBe('country:united-states');
    expect(topId('cereal yield')).toBe('indicator:cereal-yield');
  });
});

describe('phase 3D — conservative typo tolerance', () => {
  it('tolerates a single-edit typo on a longer term', () => {
    expect(withinOneEdit('growing', 'growng')).toBe(true);
    expect(topId('growng degree days')).toMatch(/growing-degree-days/);
  });
  it('does not over-correct across ≥2 edits', () => {
    expect(withinOneEdit('rice', 'rage')).toBe(false);
  });
  it('handles adjacent-transposition typos', () => {
    expect(withinOneEdit('wheat', 'wheta')).toBe(true);
  });
});

describe('phase 3D — facets & benchmark', () => {
  it('facet filtering narrows results by entity type', () => {
    const all = search(index, 'wheat', {});
    const cropsOnly = search(index, 'wheat', {
      facets: { entityType: 'crop' },
    });
    expect(cropsOnly.total).toBeLessThan(all.total);
    expect(cropsOnly.results.every((r) => r.doc.type === 'crop')).toBe(true);
  });

  it('facet counts are derived from the result set (no empty facets)', () => {
    const res = search(index, 'soil', {});
    for (const group of Object.values(res.facets))
      for (const f of group!) expect(f.count).toBeGreaterThan(0);
  });

  it('passes the full search benchmark', () => {
    const results = runBenchmark(index);
    const failures = results.filter((r) => !r.pass);
    expect(failures, JSON.stringify(failures)).toEqual([]);
    expect(benchmarkPrecision()).toBe(1);
  });
});

describe('phase 3D — tokenizer', () => {
  it('normalizes accents and splits on non-alphanumerics', () => {
    expect(tokenize('Désirée potato')).toEqual(['desiree', 'potato']);
    expect(tokenize('N-P-K 15/15/15')).toEqual([
      'n',
      'p',
      'k',
      '15',
      '15',
      '15',
    ]);
  });
});
