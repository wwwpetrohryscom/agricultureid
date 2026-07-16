import { buildSearchDocuments } from '@/lib/search/documents';
import { buildIndex, search, type SearchIndex } from '@/lib/search/engine';
import { SYNONYMS } from '@/data/search/synonyms';

/**
 * Search-quality benchmark (Phase 3D, expanded in Phase 4E). Each case declares
 * a query and its acceptable results. A case measures four things:
 *
 * - **top-1**: the top result satisfies `titleIncludes`/`types` (relevance).
 * - **top-3**: a correct result (`titleIncludes`/`top3Includes`/`types`) is in
 *   the first three results (recall at depth).
 * - **false positive**: the top result's title must NOT contain any
 *   `mustNotTop` term (prevents an irrelevant top hit).
 * - **unsafe equivalence**: `mustNotTop` on a case tagged `unsafe-equivalence`
 *   guards against conflating distinct entities (e.g. early vs late blight,
 *   maize vs sweetcorn), which would be a dangerous false equivalence.
 */
export interface Benchmark {
  query: string;
  /** Top/near-top result's lowercased title must include one of these. */
  titleIncludes?: string[];
  /** …or its entity type must be one of these. */
  types?: string[];
  /** Additional acceptable titles when checking the top-3 window. */
  top3Includes?: string[];
  /** The top result's title must NOT include any of these (guard). */
  mustNotTop?: string[];
  kind?:
    | 'exact'
    | 'synonym'
    | 'typo'
    | 'scientific'
    | 'multiword'
    | 'unsafe-equivalence';
  note?: string;
}

export const BENCHMARKS: Benchmark[] = [
  /* ---- Exact entity lookups across every type ----------------------------- */
  { query: 'maize', titleIncludes: ['maize'], kind: 'exact' },
  { query: 'wheat', titleIncludes: ['wheat'], kind: 'exact' },
  { query: 'rice', titleIncludes: ['rice'], kind: 'exact' },
  { query: 'soybean', titleIncludes: ['soybean'], kind: 'exact' },
  { query: 'potato', titleIncludes: ['potato'], kind: 'exact' },
  { query: 'cassava', titleIncludes: ['cassava'], kind: 'exact' },
  { query: 'pigeon pea', titleIncludes: ['pigeon pea'], kind: 'exact' },
  { query: 'cowpea', titleIncludes: ['cowpea'], kind: 'exact' },
  { query: 'teff', titleIncludes: ['teff'], kind: 'exact' },
  { query: 'dragon fruit', titleIncludes: ['dragon fruit'], kind: 'exact' },
  { query: 'clay soil', titleIncludes: ['clay soil'], kind: 'exact' },
  { query: 'chernozem', titleIncludes: ['chernozem'], kind: 'exact' },
  { query: 'ferralsol', titleIncludes: ['ferralsol'], kind: 'exact' },
  { query: 'histosol', titleIncludes: ['histosol'], kind: 'exact' },
  { query: 'urea', titleIncludes: ['urea'], kind: 'exact' },
  {
    query: 'ammonium nitrate',
    titleIncludes: ['ammonium nitrate'],
    kind: 'exact',
  },
  {
    query: 'anhydrous ammonia',
    titleIncludes: ['anhydrous ammonia'],
    kind: 'exact',
  },
  { query: 'gypsum', titleIncludes: ['gypsum'], kind: 'exact' },
  { query: 'nitrogen', titleIncludes: ['nitrogen'], kind: 'exact' },
  {
    query: 'zinc',
    titleIncludes: ['zinc'],
    types: ['nutrient', 'fertilizer'],
    kind: 'exact',
  },
  {
    query: 'cation exchange capacity',
    titleIncludes: ['cation exchange'],
    kind: 'exact',
  },
  {
    query: 'soil organic matter',
    titleIncludes: ['soil organic matter'],
    kind: 'exact',
  },
  { query: 'nitrogen cycle', titleIncludes: ['nitrogen cycle'], kind: 'exact' },
  { query: 'bulk density', titleIncludes: ['bulk density'], kind: 'exact' },
  {
    query: 'combine harvester',
    titleIncludes: ['combine harvester'],
    kind: 'exact',
  },
  { query: 'power harrow', titleIncludes: ['power harrow'], kind: 'exact' },
  {
    query: 'potato harvester',
    titleIncludes: ['potato harvester'],
    kind: 'exact',
  },
  {
    query: 'drip irrigation',
    titleIncludes: ['drip irrigation'],
    kind: 'exact',
  },
  {
    query: 'center pivot',
    titleIncludes: ['center pivot', 'centre pivot'],
    kind: 'exact',
  },
  { query: 'agroforestry', titleIncludes: ['agroforestry'], kind: 'exact' },
  {
    query: 'no-till farming',
    titleIncludes: ['no-till', 'no till'],
    kind: 'exact',
  },
  {
    query: 'growing degree days',
    titleIncludes: ['growing degree'],
    kind: 'exact',
  },
  { query: 'vernalization', titleIncludes: ['vernalization'], kind: 'exact' },
  { query: 'photoperiod', titleIncludes: ['photoperiod'], kind: 'exact' },
  { query: 'holstein', titleIncludes: ['holstein'], kind: 'exact' },
  { query: 'grain drying', titleIncludes: ['grain drying'], kind: 'exact' },
  {
    query: 'hermetic storage',
    titleIncludes: ['hermetic storage'],
    kind: 'exact',
  },
  { query: 'cold storage', titleIncludes: ['cold storage'], kind: 'exact' },
  {
    query: 'controlled atmosphere storage',
    titleIncludes: ['controlled atmosphere'],
    kind: 'exact',
  },
  {
    query: 'aphids',
    titleIncludes: ['aphids'],
    types: ['pest'],
    kind: 'exact',
  },
  {
    query: 'coffee berry borer',
    titleIncludes: ['coffee berry borer'],
    kind: 'exact',
  },
  {
    query: 'brown planthopper',
    titleIncludes: ['brown planthopper'],
    kind: 'exact',
  },
  { query: 'powdery mildew', titleIncludes: ['powdery mildew'], kind: 'exact' },
  { query: 'panama disease', titleIncludes: ['panama disease'], kind: 'exact' },
  { query: 'huanglongbing', titleIncludes: ['huanglongbing'], kind: 'exact' },
  {
    query: 'united states',
    titleIncludes: ['united states'],
    types: ['country'],
    kind: 'exact',
  },
  { query: 'cereal yield', titleIncludes: ['cereal yield'], kind: 'exact' },
  {
    query: 'seed rate calculator',
    titleIncludes: ['seed'],
    types: ['tool'],
    kind: 'exact',
  },

  /* ---- Synonyms / alternative names --------------------------------------- */
  {
    query: 'corn',
    titleIncludes: ['maize'],
    mustNotTop: ['tar spot', 'rust', 'blight'],
    kind: 'synonym',
    note: 'corn → maize crop, not a corn disease',
  },
  {
    query: 'groundnut',
    titleIncludes: ['groundnut', 'peanut'],
    kind: 'synonym',
  },
  { query: 'peanut', titleIncludes: ['groundnut', 'peanut'], kind: 'synonym' },
  {
    query: 'canola',
    titleIncludes: ['oilseed rape', 'canola'],
    kind: 'synonym',
  },
  {
    query: 'colorado beetle',
    titleIncludes: ['colorado potato beetle'],
    kind: 'synonym',
  },
  {
    query: 'sweetcorn',
    titleIncludes: ['sweetcorn', 'sweet corn'],
    mustNotTop: ['maize —'],
    kind: 'synonym',
  },
  {
    query: 'muriate of potash',
    titleIncludes: ['muriate of potash', 'potassium chloride'],
    kind: 'synonym',
  },
  { query: 'epsom salt', titleIncludes: ['epsom'], kind: 'synonym' },
  { query: 'garbanzo', titleIncludes: ['chickpea'], kind: 'synonym' },

  /* ---- Scientific names --------------------------------------------------- */
  { query: 'zea mays', titleIncludes: ['maize'], kind: 'scientific' },
  { query: 'triticum aestivum', titleIncludes: ['wheat'], kind: 'scientific' },
  { query: 'oryza sativa', titleIncludes: ['rice'], kind: 'scientific' },
  { query: 'solanum tuberosum', titleIncludes: ['potato'], kind: 'scientific' },
  {
    query: 'alternaria solani',
    titleIncludes: ['early blight'],
    kind: 'scientific',
  },
  {
    query: 'phakopsora pachyrhizi',
    titleIncludes: ['soybean rust'],
    kind: 'scientific',
  },

  /* ---- Typo tolerance ----------------------------------------------------- */
  {
    query: 'growng degree days',
    titleIncludes: ['growing degree'],
    kind: 'typo',
  },
  { query: 'nitogen', titleIncludes: ['nitrogen'], kind: 'typo' },
  { query: 'phosphorous', titleIncludes: ['phosphorus'], kind: 'typo' },
  { query: 'mayze', titleIncludes: ['maize'], kind: 'typo' },
  { query: 'cassaava', titleIncludes: ['cassava'], kind: 'typo' },
  {
    query: 'irigation',
    types: ['irrigation-method'],
    top3Includes: ['irrigation'],
    kind: 'typo',
  },

  /* ---- Multi-word intent -------------------------------------------------- */
  {
    query: 'nitrogen fertilizer',
    types: ['fertilizer', 'nutrient'],
    kind: 'multiword',
  },
  {
    query: 'powdery mildew wheat',
    titleIncludes: ['powdery mildew', 'wheat'],
    kind: 'multiword',
  },
  {
    query: 'drip irrigation tomato',
    titleIncludes: ['drip irrigation'],
    kind: 'multiword',
  },
  {
    query: 'sandy soil potato',
    titleIncludes: ['sandy soil'],
    kind: 'multiword',
  },
  {
    query: 'rice storage pests',
    types: ['post-harvest', 'pest'],
    top3Includes: ['grain', 'stored', 'insect'],
    kind: 'multiword',
  },
  {
    query: 'wheat leaf disease',
    types: ['plant-disease'],
    top3Includes: ['blotch', 'rust', 'blight', 'spot'],
    kind: 'multiword',
  },
  {
    query: 'maize vs sorghum',
    types: ['comparison'],
    top3Includes: ['maize', 'sorghum'],
    kind: 'multiword',
  },

  /* ---- Unsafe-equivalence guards (distinct entities must not be conflated) -- */
  {
    query: 'late blight',
    titleIncludes: ['late blight'],
    mustNotTop: ['early blight'],
    kind: 'unsafe-equivalence',
    note: 'late ≠ early blight',
  },
  {
    query: 'early blight',
    titleIncludes: ['early blight'],
    mustNotTop: ['late blight'],
    kind: 'unsafe-equivalence',
    note: 'early ≠ late blight',
  },
  {
    query: 'downy mildew',
    titleIncludes: ['downy mildew'],
    mustNotTop: ['powdery mildew'],
    kind: 'unsafe-equivalence',
    note: 'downy ≠ powdery mildew',
  },
  {
    query: 'northern corn leaf blight',
    titleIncludes: ['northern leaf blight', 'northern corn leaf blight'],
    mustNotTop: ['southern'],
    kind: 'unsafe-equivalence',
  },
  {
    query: 'sulfate of potash',
    titleIncludes: ['sulfate of potash'],
    kind: 'exact',
    note: 'exact SOP term (the potash comparison legitimately names both SOP and MOP)',
  },
  {
    query: 'soybean cyst nematode',
    titleIncludes: ['soybean cyst'],
    mustNotTop: ['root-knot', 'potato cyst'],
    kind: 'unsafe-equivalence',
  },
  /* ---- Phase 5E — calculator distinctions that must NOT be conflated -------
   * Each of these is a quantity people routinely treat as a synonym of another
   * and which this platform must keep apart. They are the reason the Phase 5E
   * synonym entries are `narrower` rather than `exact`. */
  {
    query: 'unit value',
    titleIncludes: ['unit value'],
    mustNotTop: ['price'],
    kind: 'unsafe-equivalence',
    note: 'a unit value is an arithmetic average of a reported aggregate — not a market price',
  },
  {
    query: 'moisture shrink',
    titleIncludes: ['shrink'],
    mustNotTop: ['loss'],
    kind: 'unsafe-equivalence',
    note: 'shrink is water leaving; loss is material gone',
  },
  {
    query: 'post-harvest loss',
    titleIncludes: ['loss'],
    mustNotTop: ['shrink'],
    kind: 'unsafe-equivalence',
    note: 'loss ≠ shrink',
  },
  {
    query: 'bulk density',
    titleIncludes: ['bulk density'],
    mustNotTop: ['test weight'],
    kind: 'unsafe-equivalence',
    note: 'bulk density is a ratio; test weight is a graded measurement',
  },
  {
    query: 'processing recovery',
    titleIncludes: ['recovery'],
    mustNotTop: ['yield'],
    kind: 'unsafe-equivalence',
    note: 'recovery is output ÷ input; yield is production per unit area',
  },
  {
    query: 'yield converter',
    titleIncludes: ['yield'],
    mustNotTop: ['recovery'],
    kind: 'unsafe-equivalence',
    note: 'yield ≠ recovery',
  },

  /* ---- Phase 5E — calculator lookups -------------------------------------- */
  {
    query: 'dry matter calculator',
    titleIncludes: ['dry-matter'],
    kind: 'multiword',
    note: 'the tool is titled "Dry-matter calculator" — hyphenated',
  },
  {
    query: 'water removal',
    titleIncludes: ['water removal'],
    kind: 'multiword',
  },
  { query: 'wet basis', types: ['tool'], kind: 'multiword' },
  {
    query: 'storage capacity',
    titleIncludes: ['storage volume'],
    kind: 'multiword',
    note: 'the tool is deliberately titled "volume", not "capacity" — a geometric volume is not a capacity. The query reaches it via a searchAlias rather than by renaming the tool to something it is not.',
  },
  {
    query: 'packaging quantity',
    titleIncludes: ['packaging'],
    kind: 'multiword',
  },
  {
    query: 'commodity blending',
    titleIncludes: ['blending'],
    kind: 'multiword',
  },
];

export function benchmarkIndex(): SearchIndex {
  return buildIndex(buildSearchDocuments(), SYNONYMS);
}

export interface BenchmarkResult {
  query: string;
  /** Backward-compatible top-1 relevance pass. */
  pass: boolean;
  top1: boolean;
  top3: boolean;
  falsePositive: boolean;
  unsafeEquivalence: boolean;
  topTitle: string;
  topType: string;
  kind: string;
}

function includesAny(haystack: string, needles?: string[]): boolean {
  if (!needles || needles.length === 0) return false;
  return needles.some((s) => haystack.includes(s.toLowerCase()));
}

export function runBenchmark(index = benchmarkIndex()): BenchmarkResult[] {
  return BENCHMARKS.map((b) => {
    const r = search(index, b.query, { limit: 5 });
    const top = r.results[0];
    const topTitle = (top?.doc.title ?? '').toLowerCase();
    const topType = top?.doc.type ?? '';

    const satisfies = (title: string, type: string, extra?: string[]) =>
      includesAny(title, b.titleIncludes) ||
      includesAny(title, extra) ||
      (b.types ? b.types.includes(type) : false);

    const top1 = Boolean(top) && satisfies(topTitle, topType);
    const top3 =
      top1 ||
      r.results
        .slice(0, 3)
        .some((res) =>
          satisfies(res.doc.title.toLowerCase(), res.doc.type, b.top3Includes),
        );
    const falsePositive = Boolean(top) && includesAny(topTitle, b.mustNotTop);
    const unsafeEquivalence = falsePositive && b.kind === 'unsafe-equivalence';

    return {
      query: b.query,
      pass: top1 && !falsePositive,
      top1,
      top3,
      falsePositive,
      unsafeEquivalence,
      topTitle: top?.doc.title ?? '(none)',
      topType,
      kind: b.kind ?? 'exact',
    };
  });
}

export interface BenchmarkSummary {
  total: number;
  top1Rate: number;
  top3Rate: number;
  falsePositives: number;
  unsafeEquivalences: number;
  failures: BenchmarkResult[];
}

export function benchmarkSummary(index = benchmarkIndex()): BenchmarkSummary {
  const results = runBenchmark(index);
  const total = results.length;
  const top1 = results.filter((r) => r.top1).length;
  const top3 = results.filter((r) => r.top3).length;
  const falsePositives = results.filter((r) => r.falsePositive).length;
  const unsafeEquivalences = results.filter((r) => r.unsafeEquivalence).length;
  return {
    total,
    top1Rate: top1 / total,
    top3Rate: top3 / total,
    falsePositives,
    unsafeEquivalences,
    failures: results.filter((r) => !r.pass || r.falsePositive),
  };
}

/** Backward-compatible precision = top-1 pass rate (no false positives). */
export function benchmarkPrecision(): number {
  const results = runBenchmark();
  return results.filter((r) => r.pass).length / results.length;
}
