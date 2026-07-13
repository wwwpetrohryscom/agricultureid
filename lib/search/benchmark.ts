import { buildSearchDocuments } from '@/lib/search/documents';
import { buildIndex, search, type SearchIndex } from '@/lib/search/engine';
import { SYNONYMS } from '@/data/search/synonyms';

/**
 * Search-quality benchmark (Phase 3D). Each case declares the query and the set
 * of acceptable top results (by a lowercased title substring and/or entity
 * type). A case passes when the top result satisfies its expectation — this is
 * the "no dangerous false equivalence" gate as well as a relevance gate.
 */
export interface Benchmark {
  query: string;
  /** Top result's lowercased title must include one of these. */
  titleIncludes?: string[];
  /** …or its entity type must be one of these. */
  types?: string[];
  note?: string;
}

export const BENCHMARKS: Benchmark[] = [
  { query: 'corn', titleIncludes: ['maize'], note: 'synonym' },
  { query: 'maize', titleIncludes: ['maize'] },
  { query: 'zea mays', titleIncludes: ['maize'], note: 'scientific name' },
  { query: 'ammonium nitrate', titleIncludes: ['ammonium nitrate'] },
  { query: 'nitrogen fertilizer', types: ['fertilizer', 'nutrient'] },
  { query: 'powdery mildew wheat', titleIncludes: ['powdery mildew', 'wheat'] },
  { query: 'drip irrigation tomato', titleIncludes: ['drip irrigation'] },
  { query: 'holstein cattle', titleIncludes: ['holstein'] },
  { query: 'durum wheat', titleIncludes: ['wheat', 'svevo', 'kronos'] },
  { query: 'sandy soil potato', titleIncludes: ['sandy soil'] },
  {
    query: 'growng degree days',
    titleIncludes: ['growing degree'],
    note: 'typo tolerance',
  },
  {
    query: 'colorado beetle',
    titleIncludes: ['colorado potato beetle'],
    note: 'synonym',
  },
  {
    query: 'spotted wing drosophila',
    titleIncludes: ['fruit flies'],
    note: 'synonym → tephritid entry',
  },
  { query: 'holstein', titleIncludes: ['holstein'] },
  {
    query: 'united states',
    titleIncludes: ['united states'],
    types: ['country'],
  },
  { query: 'cereal yield', titleIncludes: ['cereal yield'] },
  {
    query: 'seed rate',
    titleIncludes: ['seed-rate', 'seed rate'],
    types: ['tool'],
  },
];

export function benchmarkIndex(): SearchIndex {
  return buildIndex(buildSearchDocuments(), SYNONYMS);
}

export interface BenchmarkResult {
  query: string;
  pass: boolean;
  topTitle: string;
  topType: string;
}

export function runBenchmark(index = benchmarkIndex()): BenchmarkResult[] {
  return BENCHMARKS.map((b) => {
    const r = search(index, b.query, { limit: 5 });
    const top = r.results[0];
    const title = (top?.doc.title ?? '').toLowerCase();
    const type = top?.doc.type ?? '';
    const titleOk = b.titleIncludes
      ? b.titleIncludes.some((s) => title.includes(s.toLowerCase()))
      : false;
    const typeOk = b.types ? b.types.includes(type) : false;
    const pass = Boolean(top) && (titleOk || typeOk);
    return {
      query: b.query,
      pass,
      topTitle: top?.doc.title ?? '(none)',
      topType: type,
    };
  });
}

export function benchmarkPrecision(): number {
  const results = runBenchmark();
  return results.filter((r) => r.pass).length / results.length;
}
