/**
 * Wave 46 — the search claims, checked independently of the engine's own report.
 */
import { describe, expect, it } from 'vitest';
import { BENCHMARKS, benchmarkIndex } from '@/lib/search/benchmark';
import { search, finalScore, saturate } from '@/lib/search/engine';
import { CROP_ALIASES, CROP_SEARCH_POINTERS } from '@/data/crop-aliases';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';

describe('a known issue is a decision, not a description', () => {
  it('gives every known issue a disposition', () => {
    for (const b of BENCHMARKS)
      if (b.knownIssue)
        expect(
          b.disposition,
          `"${b.query}" is recorded as a known issue with no disposition`,
        ).toBeTruthy();
  });

  it('gives no disposition to a case that is not a known issue', () => {
    for (const b of BENCHMARKS)
      if (b.disposition) expect(b.knownIssue, `"${b.query}"`).toBeTruthy();
  });
});

describe('the score breakdown is the score', () => {
  const index = benchmarkIndex();

  it('sums to the number the ranking used, on every result of every shape', () => {
    for (const q of [
      'wheat',
      'tart cherry',
      'ricinoleic acid',
      'red bean',
      'wheat price',
      'triticum turgidum',
      'brassica',
    ]) {
      for (const r of search(index, q, { limit: 8, explain: true }).results) {
        expect(r.parts, `${q} → ${r.doc.title}`).toBeDefined();
        expect(finalScore(r.parts!), `${q} → ${r.doc.title}`).toBeCloseTo(
          r.score,
          9,
        );
      }
    }
  });
});

describe('field frequency saturates', () => {
  it('is the identity when a term occupies one field', () => {
    expect(saturate(10, 10)).toBe(10);
    expect(saturate(1, 1)).toBe(1);
  });

  it('rewards a second field and never five times a first', () => {
    const one = saturate(10, 10);
    const many = saturate(30, 10);
    expect(many).toBeGreaterThan(one);
    expect(many).toBeLessThan(one * 2);
  });

  it('cannot be outrun: an unbounded sum stays bounded', () => {
    expect(saturate(1000, 10)).toBeLessThan(17);
  });
});

describe('a glossary annotation is not a subject', () => {
  it('keeps a page that merely mentions cultivars out of the cultivar answer', () => {
    const top = search(benchmarkIndex(), 'wheat cultivar', {
      limit: 3,
    }).results;
    expect(top.map((r) => r.doc.type)).not.toContain('plant-disease');
  });
});

describe('shared aliases surface every crop that carries them', () => {
  const index = benchmarkIndex();
  it('never resolves a shared name to one crop', () => {
    for (const r of CROP_ALIASES) {
      if (r.kind !== 'SHARED_ALIAS' && r.kind !== 'AMBIGUOUS_ALIAS') continue;
      const ids = search(index, r.alias, { limit: 6 }).results.map(
        (x) => x.doc.id,
      );
      for (const slug of r.crops)
        expect(ids, `${r.alias} → ${slug}`).toContain(`crop:${slug}`);
    }
  });
});

describe('a search pointer is not a name', () => {
  const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop') as {
    slug: string;
    alternativeNames?: string[];
  }[];
  it('never duplicates an alternative name', () => {
    for (const p of CROP_SEARCH_POINTERS) {
      const c = crops.find((x) => x.slug === p.cropSlug)!;
      const names = (c.alternativeNames ?? []).map((n) => n.toLowerCase());
      expect(names, p.term).not.toContain(p.term.toLowerCase());
    }
  });

  it('reaches the crop it points at', () => {
    const index = benchmarkIndex();
    for (const p of CROP_SEARCH_POINTERS)
      expect(
        search(index, p.term, { limit: 1 }).results[0]?.doc.id,
        p.term,
      ).toBe(`crop:${p.cropSlug}`);
  });
});
