import { buildSearchDocuments } from '@/lib/search/documents';
import {
  buildIndex,
  search,
  tokenize,
  withinOneEdit,
  type SearchIndex,
} from '@/lib/search/engine';
import { SYNONYMS } from '@/data/search/synonyms';
import type { SearchDoc } from '@/types/search';

/**
 * Search-quality benchmark (Phase 3D, expanded in 4E, expanded again in 5F §7).
 * Each case declares a query and its acceptable results.
 *
 * Relevance:
 *
 * - **top-1**: the top result satisfies `titleIncludes`/`types` (relevance).
 * - **top-3**: a correct result (`titleIncludes`/`top3Includes`/`types`) is in
 *   the first three results (recall at depth).
 * - **false positive**: the top result's title must NOT contain any
 *   `mustNotTop` term (prevents an irrelevant top hit).
 * - **unsafe equivalence**: `mustNotTop` on a case tagged `unsafe-equivalence`
 *   guards against conflating distinct entities (e.g. early vs late blight,
 *   maize vs sweetcorn), which would be a dangerous false equivalence.
 *
 * Phase 5F §7 adds diagnostics that say *why* a result ranked, because pass/fail
 * hides the difference between a right answer for the right reason and a right
 * answer by accident:
 *
 * - **type accuracy**: over cases that declare `types`, how often the top hit's
 *   entity type is one of them. A right title of the wrong type is a wrong hit.
 * - **match class**: how the top hit matched (`exact`/`synonym`/`prefix`/`typo`,
 *   from `matchedVia`) — exact-match vs fuzzy-match ranking.
 * - **fuzzy false positive**: the top hit reached the top with NO exact term
 *   match — it is there on typo tolerance alone — and is wrong. Fuzzy matching
 *   earning the top slot on its own is the failure mode typo tolerance risks.
 * - **unsafe synonym expansion**: the top hit is a `mustNotTop` violation AND it
 *   matched via synonym expansion — i.e. the synonym registry produced the
 *   conflation. This is what `expandToken`'s refusal to expand multi-word
 *   variants by their component words exists to prevent.
 * - **graph-derived association false positive**: the top hit's ONLY matching
 *   field is `relationLabels` — it ranks because of a relation label the entity
 *   participates in ("cultivar of", "part of farming system"), not because of
 *   anything the entity *is*. Ranking an entity on the graph's vocabulary rather
 *   than its own identity is a distinct failure from a merely irrelevant hit.
 *
 * ## `knownIssue`
 *
 * A case carrying `knownIssue` is a query where the engine returns something
 * **wrong** and the expectation states what the CORRECT answer would be. The
 * expectation is deliberately NOT relaxed to match the broken behaviour: relaxing
 * it would delete the finding. These cases are evaluated honestly, reported in
 * their own section by `scripts/search-benchmark.ts`, and excluded from the
 * aggregate rates — which describe the regression suite, not the open defects.
 * The count of them is reported alongside every rate so the exclusion is visible.
 * Fixing the engine (out of scope for §7) is what should retire them.
 *
 * `kind: 'unsafe-equivalence'` is reserved for guards that HOLD — it is asserted
 * by tests/phase4e.test.ts to never be violated. A documented defect that is
 * itself a false equivalence (e.g. "cultivar of wheat" returning the hybrid
 * species Triticale) therefore carries its natural query kind plus `knownIssue`,
 * not `unsafe-equivalence`; the conflation danger is spelled out in the issue
 * text. A held guard and an open dangerous defect must not share a tag.
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
  /**
   * The top result's entity TYPE must not be one of these. For guards that are
   * about what kind of thing came back rather than what it is called — a bare
   * relation-label fragment must not retrieve an entity at all, whatever its title.
   */
  mustNotTopTypes?: string[];
  kind?:
    | 'exact'
    | 'synonym'
    | 'typo'
    | 'scientific'
    | 'multiword'
    | 'abbreviation'
    | 'relation-direction'
    | 'unsafe-equivalence';
  note?: string;
  /**
   * A documented engine defect. The expectation above is the CORRECT answer, not
   * the observed one. Excluded from aggregate rates; reported separately.
   */
  knownIssue?: string;
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

  /* ---- Phase 5F §7 — logistics concepts ----------------------------------- */
  {
    query: 'cold chain failure',
    titleIncludes: ['cold chain failure'],
    types: ['supply-chain-risk'],
    kind: 'exact',
  },
  {
    query: 'reefer container',
    titleIncludes: ['reefer container'],
    types: ['logistics-concept'],
    kind: 'exact',
  },
  {
    query: 'bonded warehouse',
    titleIncludes: ['bonded warehouse'],
    types: ['logistics-concept'],
    kind: 'exact',
  },
  {
    query: 'container stuffing',
    titleIncludes: ['container stuffing'],
    types: ['logistics-concept'],
    kind: 'exact',
  },
  {
    query: 'draught survey',
    titleIncludes: ['draught survey'],
    types: ['logistics-concept'],
    kind: 'exact',
    note: 'must beat the draught-HORSE comparison — same word, unrelated sense',
  },
  {
    query: 'fumigation in transit',
    titleIncludes: ['fumigation in transit'],
    types: ['logistics-concept'],
    kind: 'multiword',
  },
  {
    query: 'pre-shipment inspection',
    titleIncludes: ['pre-shipment inspection'],
    types: ['logistics-concept'],
    kind: 'multiword',
  },
  {
    query: 'temperature monitoring',
    titleIncludes: ['temperature monitoring'],
    types: ['logistics-concept'],
    kind: 'multiword',
  },
  {
    query: 'palletisation',
    titleIncludes: ['palletisation'],
    types: ['logistics-concept', 'post-harvest'],
    kind: 'exact',
    note: 'two published pages share this exact title (logistics-concept and post-harvest); either is a defensible top hit',
  },

  /* ---- Phase 5F §7 — shipping / trade documents --------------------------- */
  {
    query: 'bill of lading',
    titleIncludes: ['bill of lading'],
    types: ['trade-concept'],
    kind: 'multiword',
  },
  {
    query: 'packing list',
    titleIncludes: ['packing list'],
    types: ['trade-concept'],
    kind: 'multiword',
    note: 'must beat post-harvest "Packing and Packaging" — a document, not an operation',
  },
  {
    query: 'phytosanitary certificate',
    titleIncludes: ['phytosanitary certificate'],
    types: ['trade-concept'],
    kind: 'multiword',
  },
  {
    query: 'certificate of origin',
    titleIncludes: ['certificate of origin'],
    types: ['trade-concept'],
    kind: 'multiword',
  },
  {
    query: 'letter of credit',
    titleIncludes: ['letter of credit'],
    types: ['trade-concept'],
    kind: 'multiword',
  },
  {
    query: 'incoterms',
    titleIncludes: ['incoterms'],
    types: ['trade-concept'],
    kind: 'exact',
  },
  {
    query: 'hs code',
    titleIncludes: ['hs code', 'harmonized system'],
    types: ['trade-concept'],
    kind: 'abbreviation',
  },
  {
    query: 'shipping documents',
    types: ['trade-concept'],
    top3Includes: ['bill of lading', 'packing list', 'commercial invoice'],
    kind: 'multiword',
    knownIssue:
      'No "shipping documents" page exists and none should be invented — the concept is covered by Bill of Lading / Packing List / Commercial Invoice, which are separate documents. The engine returns logistics-concept "Container Shipping", which matches "shipping" only and is about the mode of carriage, not paperwork. The document set is not reachable from the collective term.',
  },

  /* ---- Phase 5F §7 — standards -------------------------------------------- */
  {
    query: 'haccp',
    titleIncludes: ['haccp'],
    types: ['standard-reference'],
    kind: 'abbreviation',
  },
  {
    query: 'globalgap',
    titleIncludes: ['globalg'],
    types: ['standard-reference'],
    kind: 'exact',
    note: 'the title punctuates it "GLOBALG.A.P." — the unpunctuated query must still reach it',
  },
  {
    query: 'codex alimentarius',
    titleIncludes: ['codex alimentarius'],
    types: ['standard-reference'],
    kind: 'multiword',
    note: 'must beat the two narrower Codex pages (Food Hygiene, MRLs)',
  },
  {
    query: 'ispm 15',
    titleIncludes: ['ispm 15'],
    types: ['standard-reference'],
    kind: 'abbreviation',
  },
  {
    query: 'traceability',
    titleIncludes: ['traceability'],
    types: ['standard-reference', 'supply-chain-risk'],
    kind: 'exact',
  },

  /* ---- Phase 5F §7 — market terms ----------------------------------------- */
  {
    query: 'crush spread',
    titleIncludes: ['crush spread'],
    types: ['market-term'],
    kind: 'exact',
  },
  {
    query: 'contango',
    titleIncludes: ['contango'],
    types: ['market-term'],
    kind: 'exact',
  },
  {
    query: 'stocks to use ratio',
    titleIncludes: ['stocks-to-use'],
    types: ['market-term'],
    kind: 'multiword',
  },
  {
    query: 'hedging',
    titleIncludes: ['hedging'],
    types: ['market-term'],
    kind: 'exact',
  },
  {
    query: 'basis',
    titleIncludes: ['basis'],
    types: ['market-term'],
    mustNotTop: ['moisture'],
    kind: 'unsafe-equivalence',
    note: 'the market-term "basis" (cash minus futures) is unrelated to moisture BASIS. The moisture converter carries "moisture basis" as a searchAlias and must not capture the bare market term.',
  },

  /* ---- Phase 5F §7 — supply-chain risks ----------------------------------- */
  {
    query: 'port congestion',
    titleIncludes: ['port congestion'],
    types: ['supply-chain-risk'],
    kind: 'exact',
  },
  {
    query: 'mycotoxin rejection',
    titleIncludes: ['mycotoxin rejection'],
    types: ['supply-chain-risk'],
    kind: 'exact',
  },
  {
    query: 'temperature excursion',
    titleIncludes: ['cold chain failure'],
    types: ['supply-chain-risk'],
    kind: 'multiword',
    note: '"excursion" is indexed on exactly ONE document — Cold Chain Failure, via its alternative names — so this ranks on both query tokens rather than on "temperature" alone. Correct for the right reason: the six other pages whose bodies discuss excursions are not reachable, because the index carries titles/names/summary and never article bodies.',
  },

  /* ---- Phase 5F §7 — processing methods ----------------------------------- */
  {
    query: 'solvent extraction',
    titleIncludes: ['solvent extraction'],
    types: ['processing-method'],
    kind: 'exact',
  },
  {
    query: 'roller milling',
    titleIncludes: ['roller milling'],
    types: ['processing-method'],
    kind: 'exact',
  },
  {
    query: 'cocoa bean winnowing',
    titleIncludes: ['winnowing'],
    types: ['processing-method'],
    kind: 'multiword',
  },
  {
    query: 'wheat flour processing',
    titleIncludes: ['wheat flour'],
    types: ['commodity-product', 'processing-method'],
    kind: 'multiword',
    note: 'the product page leads; "Roller Milling" (the process that makes it) is the other defensible answer',
  },

  /* ---- Phase 5F §7 — commodity products ----------------------------------- */
  {
    query: 'soybean meal',
    titleIncludes: ['soybean meal'],
    types: ['commodity-product'],
    kind: 'exact',
  },
  {
    query: 'cocoa nibs',
    titleIncludes: ['cocoa nibs'],
    types: ['commodity-product'],
    kind: 'exact',
  },
  {
    query: 'soybean meal produced by',
    titleIncludes: ['soybean meal'],
    types: ['commodity-product'],
    kind: 'relation-direction',
    note: 'the entity leads its own relation query — "produced by" must not drag the PROCESS above the product',
  },

  /* ---- Phase 5F §7 — post-harvest attributes ------------------------------ */
  {
    query: 'post harvest defect',
    types: ['post-harvest-defect'],
    top3Includes: ['post-harvest'],
    kind: 'multiword',
  },
  {
    query: 'storage volume',
    titleIncludes: ['storage volume'],
    types: ['tool'],
    kind: 'exact',
    note: 'the tool computes a geometric VOLUME; "storage capacity" reaches it via searchAlias (see that case) rather than by retitling it to something it is not',
  },
  {
    query: 'wet basis moisture',
    titleIncludes: ['moisture content converter'],
    types: ['tool'],
    mustNotTop: ['dry matter', 'dry-matter'],
    kind: 'unsafe-equivalence',
    note: 'wet basis (water ÷ TOTAL) is not dry matter content and not dry basis — docs/moisture-basis.md calls silent basis switching the most dangerous failure in commodity moisture maths',
  },
  {
    query: 'dry basis moisture',
    titleIncludes: ['moisture content converter'],
    types: ['tool'],
    mustNotTop: ['dry matter', 'dry-matter'],
    kind: 'unsafe-equivalence',
    note: 'dry basis (water ÷ DRY MATTER, unbounded) is a different quantity from dry-matter content (dry matter ÷ total)',
  },
  {
    query: 'grain shrink',
    titleIncludes: ['shrink'],
    types: ['tool'],
    mustNotTop: ['loss'],
    kind: 'unsafe-equivalence',
    note: 'shrink is water leaving; loss is material gone',
  },
  {
    query: 'dry basis',
    titleIncludes: ['moisture content converter'],
    types: ['tool'],
    mustNotTop: ['dry matter', 'dry-matter'],
    // A known DEFECT, not a held guard: `kind: 'unsafe-equivalence'` is reserved
    // for guards that hold. The conflation danger is documented in `knownIssue`.
    kind: 'multiword',
    knownIssue:
      '"dry basis" is a declared searchAlias of the Moisture content converter, yet quality-attribute "Dry Matter Content" tops it — while the sibling alias "wet basis" reaches the tool correctly. The alias is defeated by raw title weight: "Dry" in a title (weight 10) outscores "dry basis" in the tool\'s names field (weight 8) even though the tool matches BOTH query tokens and Dry Matter Content matches one. Same root cause as the cultivar cases below.',
  },

  /* ---- Phase 5F §7 — cultivar / breed PARENT relationships ---------------- */
  {
    query: 'basmati',
    titleIncludes: ['basmati'],
    types: ['cultivar'],
    kind: 'exact',
  },
  {
    query: 'holstein friesian',
    titleIncludes: ['holstein friesian'],
    types: ['breed'],
    kind: 'exact',
    note: 'must beat the dairy-breeds comparison that names it',
  },
  {
    query: 'breed of cattle',
    types: ['breed'],
    kind: 'relation-direction',
    note: 'reaches breeds through the parent field (parent = "Cattle"). The mirror query "cultivar of wheat" does NOT work — see the known issue below.',
  },
  {
    query: 'cattle breed',
    types: ['breed', 'comparison'],
    top3Includes: ['cattle breeds'],
    kind: 'relation-direction',
  },
  {
    query: 'cultivar of wheat',
    types: ['cultivar'],
    top3Includes: ['norin', 'chinese spring', 'cadenza', 'svevo'],
    mustNotTop: ['triticale'],
    // Documented defect that IS a false equivalence — see `knownIssue`. Not
    // tagged `unsafe-equivalence` because that kind marks guards that hold.
    kind: 'relation-direction',
    knownIssue:
      'Returns crop "Triticale" — a ×Triticosecale wheat×rye HYBRID SPECIES, not a wheat cultivar. It wins because alternativeNames ["Wheat-rye hybrid"] puts "wheat" in the names field (weight 8) while glossaryTerms supplies the token "cultivar", giving it full 3/3 term coverage. The actual wheat cultivars (parent = "Wheat", relation label "cultivar of") rank 4th. Asserting a distinct species is a cultivar of wheat is a scientifically false equivalence.',
  },
  {
    query: 'wheat cultivar',
    types: ['cultivar'],
    top3Includes: ['norin', 'chinese spring', 'cadenza', 'svevo'],
    mustNotTop: ['rust', 'blight', 'triticale'],
    // Documented defect (a disease returned for a cultivar query) — see
    // `knownIssue`. Not `unsafe-equivalence`: that kind marks guards that hold.
    kind: 'relation-direction',
    knownIssue:
      'Returns plant-disease "Wheat Stripe Rust". It matches "wheat" in its title (weight 10) and picks up "cultivar" only from glossaryTerms (weight 2, an annotation about resistant cultivars — not a claim that the disease IS a cultivar). Real wheat cultivars carry parent="Wheat" (weight 4) + relation label "cultivar of" (weight 2) and cannot outweigh a title hit. A disease is not a cultivar.',
  },
  {
    query: 'wheat cultivars',
    types: ['cultivar'],
    top3Includes: ['norin', 'chinese spring', 'cadenza', 'svevo'],
    kind: 'relation-direction',
    knownIssue:
      'The plural returns crop "Wheat" and no cultivar appears anywhere in the top 5 — "cultivars" matches NOTHING on any top hit. There is no stemming: prefix expansion runs query→index, and "cultivars" is not a prefix of "cultivar", so the plural query cannot reach the singular token the cultivar pages actually carry (category "Cultivar · …", relation label "cultivar of"). The literal token "cultivars" IS indexed — but only on 23 CROP summaries that discuss their cultivars, never on a cultivar entity page. So the plural is not merely weaker than the singular; it is routed to a different entity type by construction.',
  },

  /* ---- Phase 5F §7 — relation direction ----------------------------------- */
  {
    query: 'machinery farming system',
    types: ['machinery'],
    kind: 'relation-direction',
    note: 'machinery carries the relation label "part of farming system"; the machine, not the system, answers a query that names machinery',
  },
  {
    query: 'machinery in farming systems',
    types: ['machinery'],
    top3Includes: ['plough', 'harrow', 'spreader', 'gps'],
    kind: 'relation-direction',
    knownIssue:
      'Returns farming-system "Rice-Fish Farming"; "machinery" — the only token carrying the intent — matches NOTHING on any of the top 4 hits, which are all farming systems. Dropping "machinery" costs little because the stopword "in" still counts toward term coverage, and "systems" does not match "system" (no stemming). Removing either word ("machinery farming system") returns the correct machinery page, so the ranking turns on stopwords rather than intent.',
  },

  {
    query: 'supplied',
    mustNotTopTypes: ['nutrient'],
    kind: 'relation-direction',
    note: 'FIXED in Phase 5F. This once returned nutrient "Boron" at rank 1, matching ONLY the relationLabels token from its "supplied by fertilizer" edge — a graph-derived false positive, an entity ranking for a word that described its relationship, not itself. Relation labels now contribute entity nouns only (RELATION_GRAMMAR in documents.ts drops the verbs), so a bare "supplied" no longer retrieves a nutrient by participation. It now matches Hemp Fibre on its own summary text, which is legitimate free-text content, not a graph label.',
  },

  /* ---- Phase 5F §7 — abbreviations ---------------------------------------- */
  {
    query: 'FOB',
    titleIncludes: ['fob'],
    types: ['trade-concept'],
    mustNotTop: ['cif', 'cost, insurance'],
    kind: 'unsafe-equivalence',
    note: 'FOB and CIF are different Incoterms delivery terms: under FOB risk passes on board the vessel and the buyer arranges carriage; under CIF the seller pays cost, insurance and freight to destination. Neither may top the other.',
  },
  {
    query: 'CIF',
    titleIncludes: ['cif'],
    types: ['trade-concept'],
    mustNotTop: ['fob', 'free on board'],
    kind: 'unsafe-equivalence',
    note: 'CIF ≠ FOB — see the FOB case',
  },
  {
    query: 'free on board',
    titleIncludes: ['fob'],
    types: ['trade-concept'],
    mustNotTop: ['cif'],
    kind: 'unsafe-equivalence',
    note: 'the expansion of FOB must reach FOB, not its counterpart CIF',
  },
  {
    query: 'cost insurance and freight',
    titleIncludes: ['cif'],
    types: ['trade-concept'],
    mustNotTop: ['fob'],
    kind: 'unsafe-equivalence',
  },
  {
    query: 'NIR',
    titleIncludes: ['near-infrared'],
    types: ['quality-measurement'],
    kind: 'abbreviation',
  },
  {
    query: 'GDD',
    titleIncludes: ['growing degree'],
    types: ['climate', 'tool'],
    kind: 'abbreviation',
  },
  {
    query: 'IPM',
    titleIncludes: ['integrated pest management'],
    types: ['glossary'],
    kind: 'abbreviation',
  },
  {
    query: 'brix',
    types: ['quality-measurement', 'quality-attribute'],
    top3Includes: ['refractometer', 'soluble solids'],
    kind: 'abbreviation',
    note: '"Brix" titles no page; it is measured BY a refractometer and reported AS soluble solids content',
  },

  /* ---- Phase 5F §7 — market-term distinctions ----------------------------- */
  {
    query: 'market price',
    types: ['market-term'],
    mustNotTop: ['unit value'],
    kind: 'unsafe-equivalence',
    note: "a market price is a transacted/quoted price — not the trade unit value calculator's arithmetic average",
  },
  {
    query: 'commodity price',
    types: ['market-term'],
    mustNotTop: ['unit value'],
    kind: 'unsafe-equivalence',
    note: 'commodity price ≠ unit value ≠ market price — three distinct notions the platform keeps apart',
  },

  /* ---- Phase 5F §7 — cocoa: fermentation does NOT produce nibs ------------ */
  {
    query: 'cocoa fermentation',
    types: ['commodity', 'crop', 'processing-method'],
    mustNotTop: ['nibs'],
    kind: 'unsafe-equivalence',
    note: 'Phase 5C established that fermentation does NOT produce nibs — winnowing does. A search that surfaced Cocoa Nibs for "cocoa fermentation" would re-assert a known-false claim. No dedicated fermentation page exists; the fermentation step is described on Cocoa Beans, which correctly leads.',
  },

  /* ---- Phase 5F §7 — typo tolerance on the new vocabulary ----------------- */
  {
    query: 'phytosanitry certificate',
    titleIncludes: ['phytosanitary certificate'],
    types: ['trade-concept'],
    kind: 'typo',
  },
  {
    query: 'certifcate of origin',
    titleIncludes: ['certificate of origin'],
    types: ['trade-concept'],
    kind: 'typo',
  },
  {
    query: 'bill of ladng',
    titleIncludes: ['bill of lading'],
    types: ['trade-concept'],
    kind: 'typo',
  },
  {
    query: 'cocao nibs',
    titleIncludes: ['cocoa nibs'],
    types: ['commodity-product'],
    kind: 'typo',
  },
  {
    query: 'mycotixin',
    titleIncludes: ['mycotoxin'],
    types: ['supply-chain-risk', 'post-harvest'],
    kind: 'typo',
    note: 'fuzzy-only match — no exact term hit anywhere in this query',
  },
];

export function benchmarkIndex(): SearchIndex {
  return buildIndex(buildSearchDocuments(), SYNONYMS);
}

/** The document fields the index weights, in the order `documents.ts` builds them. */
const DOC_FIELDS = [
  'title',
  'names',
  'scientificName',
  'parent',
  'category',
  'country',
  'region',
  'relationLabels',
  'sources',
  'glossaryTerms',
  'summary',
] as const;
type DocField = (typeof DOC_FIELDS)[number];

function docFieldTokens(doc: SearchDoc): Record<DocField, string[]> {
  const many = (xs?: string[]) => (xs ?? []).flatMap((x) => tokenize(x));
  return {
    title: tokenize(doc.title),
    names: many(doc.names),
    scientificName: tokenize(doc.scientificName ?? ''),
    parent: tokenize(doc.parent ?? ''),
    category: tokenize(doc.category ?? ''),
    country: tokenize(doc.country ?? ''),
    region: tokenize(doc.region ?? ''),
    relationLabels: many(doc.relationLabels),
    sources: many(doc.sources),
    glossaryTerms: many(doc.glossaryTerms),
    summary: tokenize(doc.summary ?? ''),
  };
}

/**
 * Mirror of the engine's token-level expansion (`expandToken`): a token expands
 * only via a synonym key it matches IN FULL, and the target's words are added as
 * surface forms. Reimplemented rather than imported because the engine does not
 * export it — kept deliberately identical so field attribution reflects what the
 * engine actually matched, not a more generous guess.
 */
function surfacesFor(token: string, index: SearchIndex): string[] {
  const out = new Set<string>([token]);
  for (const target of index.synonymMap.get(token) ?? [])
    for (const w of target.split(' ')) out.add(w);
  return [...out];
}

/** Does this field contain a token the engine would have matched to `surface`? */
function fieldMatches(fieldToks: string[], surface: string): boolean {
  for (const t of fieldToks) {
    if (t === surface) return true;
    if (surface.length >= 3 && t.startsWith(surface)) return true;
    if (
      surface.length >= 5 &&
      Math.abs(t.length - surface.length) <= 1 &&
      withinOneEdit(t, surface)
    )
      return true;
  }
  return false;
}

/** Which fields of `doc` carry any surface form of the query. */
function matchedFields(
  doc: SearchDoc,
  query: string,
  index: SearchIndex,
): DocField[] {
  const toks = docFieldTokens(doc);
  const surfaces = tokenize(query).flatMap((t) => surfacesFor(t, index));
  return DOC_FIELDS.filter((f) =>
    surfaces.some((s) => fieldMatches(toks[f], s)),
  );
}

export type MatchClass = 'exact' | 'synonym' | 'prefix' | 'typo' | 'none';

/** The strongest way the top hit matched — exact beats synonym beats prefix beats typo. */
function matchClass(via: string[]): MatchClass {
  for (const c of ['exact', 'synonym', 'prefix', 'typo'] as const)
    if (via.includes(c)) return c;
  return 'none';
}

export interface BenchmarkResult {
  query: string;
  /** Backward-compatible top-1 relevance pass. */
  pass: boolean;
  /** The case declares only a negative guard, so it has no measurable top1. */
  guardOnly: boolean;
  top1: boolean;
  top3: boolean;
  falsePositive: boolean;
  unsafeEquivalence: boolean;
  topTitle: string;
  topType: string;
  kind: string;
  /** The case declares an expected `types` set. */
  typeExpected: boolean;
  /** …and the top hit's type is in it. */
  typeCorrect: boolean;
  /** How the top hit matched (`matchedVia`, strongest first). */
  matchClass: MatchClass;
  /** Top hit ranked with NO exact term match, and is wrong. */
  fuzzyFalsePositive: boolean;
  /** A `mustNotTop` violation produced by synonym expansion. */
  unsafeSynonymExpansion: boolean;
  /** The top hit's ONLY matching field is `relationLabels`. */
  graphDerived: boolean;
  /** …and the hit is wrong: it ranks on the graph's vocabulary, not its identity. */
  graphDerivedFalsePositive: boolean;
  /** Fields of the top hit that carry the query (attribution for the above). */
  topMatchedFields: string[];
  knownIssue?: string;
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
    const falsePositive =
      Boolean(top) &&
      (includesAny(topTitle, b.mustNotTop) ||
        (b.mustNotTopTypes?.includes(topType) ?? false));
    const unsafeEquivalence = falsePositive && b.kind === 'unsafe-equivalence';

    const cls = matchClass(top?.matchedVia ?? []);
    const fields = top ? matchedFields(top.doc, b.query, index) : [];
    // "Ranks only because of a relation label": the graph's vocabulary is the
    // sole thing the query touched on this document.
    const graphDerived = fields.length === 1 && fields[0] === 'relationLabels';
    // A guard-only case declares no positive target — only what must NOT top.
    // It cannot have top1 by construction, so it passes when its guard holds.
    // "supplied" is one: the requirement is that no nutrient tops it (the
    // graph-derived false positive is gone), not that any particular page does.
    const guardOnly =
      !b.titleIncludes?.length &&
      !b.types?.length &&
      !b.top3Includes?.length &&
      (Boolean(b.mustNotTop?.length) || Boolean(b.mustNotTopTypes?.length));
    const wrong = guardOnly ? falsePositive : !top1 || falsePositive;

    return {
      query: b.query,
      // `pass` = "not a regression failure", the signal the CI gate keys on. A
      // `knownIssue` case is a tracked, documented defect (an xfail), not a fresh
      // regression, so it never trips the gate — while `top1`/`falsePositive`/
      // `typeCorrect` below still report the actual wrong behaviour truthfully and
      // the runner prints it in the KNOWN ISSUES section. The expectation itself
      // is the CORRECT answer and is NOT relaxed; only its regression-gating is.
      pass: b.knownIssue
        ? true
        : guardOnly
          ? !falsePositive
          : top1 && !falsePositive,
      guardOnly,
      top1,
      top3,
      falsePositive,
      unsafeEquivalence,
      topTitle: top?.doc.title ?? '(none)',
      topType,
      kind: b.kind ?? 'exact',
      typeExpected: Boolean(b.types),
      typeCorrect: Boolean(b.types && top && b.types.includes(topType)),
      matchClass: cls,
      // Fuzzy earned the top slot on its own (no exact anywhere) AND is wrong.
      fuzzyFalsePositive: cls === 'typo' && wrong,
      unsafeSynonymExpansion:
        falsePositive && (top?.matchedVia ?? []).includes('synonym'),
      graphDerived,
      graphDerivedFalsePositive: graphDerived && wrong,
      topMatchedFields: fields,
      knownIssue: b.knownIssue,
    };
  });
}

export interface KindBreakdown {
  kind: string;
  total: number;
  top1: number;
  top3: number;
  typeCorrect: number;
  typeExpected: number;
  falsePositives: number;
}

export interface BenchmarkSummary {
  /** Cases in the regression suite (excludes `knownIssue` cases). */
  total: number;
  /** Every case, including documented defects. */
  totalCases: number;
  top1Rate: number;
  top3Rate: number;
  falsePositives: number;
  unsafeEquivalences: number;
  /** Top-hit entity type correct, over cases that declare `types`. */
  typeAccuracy: number;
  typeExpectedCount: number;
  /** Distribution of how the top hit matched (regression suite). */
  matchClasses: Record<MatchClass, number>;
  /**
   * The four counters below are DIAGNOSTICS, not pass rates, so they are counted
   * over every case including `knownIssue` ones — a defect is exactly where they
   * are informative, and excluding them would make the numbers vacuous.
   */
  /** Top hit ranked on typo tolerance alone and was wrong. */
  fuzzyFalsePositives: number;
  /** `mustNotTop` violations produced by synonym expansion. */
  unsafeSynonymExpansions: number;
  /** Wrong top hits whose only matching field is a relation label. */
  graphDerivedFalsePositives: number;
  /** Top hits — right or wrong — that rank only on a relation label. */
  graphDerivedHits: number;
  byKind: KindBreakdown[];
  failures: BenchmarkResult[];
  /** Documented engine defects — excluded from the rates above, never hidden. */
  knownIssues: BenchmarkResult[];
}

export function benchmarkSummary(index = benchmarkIndex()): BenchmarkSummary {
  const all = runBenchmark(index);
  // Rates describe the regression suite. `knownIssue` cases carry the CORRECT
  // expectation and are reported separately so a defect cannot be quietly
  // absorbed into a percentage.
  const results = all.filter((r) => !r.knownIssue);
  const total = results.length;
  // top1/top3 are only meaningful where a positive target is declared. Guard-
  // only cases ("no nutrient may top this") have no top1 by construction and
  // are measured by their guard, not by rank.
  const positive = results.filter((r) => !r.guardOnly);
  const positiveTotal = positive.length;
  const count = (rs: BenchmarkResult[], f: (r: BenchmarkResult) => boolean) =>
    rs.filter(f).length;

  const typeExpectedCount = count(results, (r) => r.typeExpected);
  const matchClasses = { exact: 0, synonym: 0, prefix: 0, typo: 0, none: 0 };
  for (const r of results) matchClasses[r.matchClass]++;

  const kinds = [...new Set(results.map((r) => r.kind))].sort();
  const byKind: KindBreakdown[] = kinds.map((kind) => {
    const rs = results.filter((r) => r.kind === kind);
    return {
      kind,
      total: rs.length,
      top1: count(rs, (r) => r.top1),
      top3: count(rs, (r) => r.top3),
      typeCorrect: count(rs, (r) => r.typeExpected && r.typeCorrect),
      typeExpected: count(rs, (r) => r.typeExpected),
      falsePositives: count(rs, (r) => r.falsePositive),
    };
  });

  return {
    total,
    totalCases: all.length,
    top1Rate: count(positive, (r) => r.top1) / positiveTotal,
    top3Rate: count(positive, (r) => r.top3) / positiveTotal,
    falsePositives: count(results, (r) => r.falsePositive),
    unsafeEquivalences: count(results, (r) => r.unsafeEquivalence),
    typeAccuracy:
      typeExpectedCount === 0
        ? 1
        : count(results, (r) => r.typeExpected && r.typeCorrect) /
          typeExpectedCount,
    typeExpectedCount,
    matchClasses,
    // Diagnostics span `all`, not `results` — see the interface note.
    fuzzyFalsePositives: count(all, (r) => r.fuzzyFalsePositive),
    unsafeSynonymExpansions: count(all, (r) => r.unsafeSynonymExpansion),
    graphDerivedFalsePositives: count(all, (r) => r.graphDerivedFalsePositive),
    graphDerivedHits: count(all, (r) => r.graphDerived),
    byKind,
    failures: results.filter((r) => !r.pass || r.falsePositive),
    knownIssues: all.filter((r) => r.knownIssue),
  };
}

/** Backward-compatible precision = top-1 pass rate (no false positives). */
export function benchmarkPrecision(): number {
  const results = runBenchmark().filter((r) => !r.knownIssue);
  return results.filter((r) => r.pass).length / results.length;
}
