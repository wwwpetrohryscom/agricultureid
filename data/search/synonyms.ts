import type { SynonymEntry } from '@/types/search';

/**
 * Typed synonym registry (Phase 3D). Used to expand queries so common/regional
 * names, spelling variants, and scientific aliases find the right entity. We do
 * NOT create unsafe equivalence between scientifically distinct terms; broader/
 * narrower links are marked as such, not treated as identity.
 *
 * `exact`/`spelling`/`regional` variants expand bidirectionally; `broader`/
 * `narrower`/`deprecated` are directional hints (variant → canonical).
 */
export const SYNONYMS: SynonymEntry[] = [
  {
    canonical: 'maize',
    variants: ['corn', 'indian corn'],
    kind: 'exact',
    note: 'Zea mays',
  },
  {
    canonical: 'oilseed-rape',
    variants: ['rapeseed', 'oilseed rape', 'canola'],
    kind: 'regional',
    note: 'Canola is a specific low-erucic/low-glucosinolate type of rapeseed.',
  },
  {
    canonical: 'eggplant',
    variants: ['aubergine', 'brinjal'],
    kind: 'regional',
  },
  {
    canonical: 'zucchini',
    variants: ['courgette', 'baby marrow'],
    kind: 'regional',
  },
  {
    canonical: 'chickpea',
    variants: ['garbanzo', 'garbanzo bean', 'bengal gram'],
    kind: 'exact',
  },
  {
    canonical: 'groundnut',
    variants: ['peanut', 'monkey nut'],
    kind: 'regional',
  },
  {
    canonical: 'cattle',
    variants: ['bovine', 'cow', 'cows', 'bull', 'ox'],
    kind: 'broader',
    note: 'Bovine is broader than domestic cattle.',
  },
  {
    canonical: 'sorghum',
    variants: ['milo', 'great millet', 'guinea corn'],
    kind: 'regional',
  },
  {
    canonical: 'common-bean',
    variants: [
      'dry bean',
      'french bean',
      'kidney bean',
      'navy bean',
      'pinto bean',
    ],
    kind: 'narrower',
  },
  {
    canonical: 'coriander',
    variants: ['cilantro', 'chinese parsley'],
    kind: 'regional',
  },
  {
    canonical: 'sweetcorn',
    variants: ['sweet corn', 'sugar corn'],
    kind: 'exact',
  },
  {
    canonical: 'cassava',
    variants: ['manioc', 'yuca', 'tapioca plant'],
    kind: 'regional',
  },
  {
    canonical: 'sugar-beet',
    variants: ['sugarbeet', 'beet sugar crop'],
    kind: 'spelling',
  },
  { canonical: 'sunflower', variants: ['sunflowers'], kind: 'spelling' },
  {
    canonical: 'soybean',
    variants: ['soya', 'soya bean', 'soja'],
    kind: 'regional',
  },
  // Fertilizer naming variants
  { canonical: 'urea', variants: ['carbamide'], kind: 'exact' },
  {
    canonical: 'muriate-of-potash',
    variants: ['potassium chloride', 'mop', 'kcl'],
    kind: 'exact',
  },
  { canonical: 'diammonium-phosphate', variants: ['dap'], kind: 'exact' },
  { canonical: 'monoammonium-phosphate', variants: ['map'], kind: 'exact' },
  { canonical: 'triple-superphosphate', variants: ['tsp'], kind: 'exact' },
  {
    canonical: 'elemental-sulfur',
    variants: ['elemental sulphur', 'sulphur', 'sulfur'],
    kind: 'spelling',
  },
  // Machinery naming variants
  {
    canonical: 'combine-harvester',
    variants: ['combine', 'combine harvester', 'thresher'],
    kind: 'exact',
  },
  { canonical: 'tractor', variants: ['tractors'], kind: 'spelling' },
  // Spelling variants (British/American)
  { canonical: 'fertilizer', variants: ['fertiliser'], kind: 'spelling' },
  { canonical: 'plough', variants: ['plow'], kind: 'spelling' },
  // Pest common names
  {
    canonical: 'colorado-potato-beetle',
    variants: ['colorado beetle', 'potato beetle'],
    kind: 'exact',
  },
  {
    canonical: 'fruit-flies',
    variants: ['fruit fly', 'spotted wing drosophila', 'swd'],
    kind: 'broader',
    note: 'SWD (Drosophilidae) differs from the tephritid fruit flies profiled; see the entry’s note.',
  },
  /* ---- Phase 5E — calculator vocabulary ---------------------------------
   *
   * Deliberately conservative. The pairs §21 names are NOT synonyms and are
   * absent from this registry on purpose:
   *
   *   unit value ≠ price          — a unit value is an arithmetic average of a
   *                                 reported aggregate; no transaction need have
   *                                 occurred at it.
   *   shrink ≠ loss               — shrink is water leaving; loss is material
   *                                 gone. A lot that shrinks lost no substance.
   *   bulk density ≠ test weight  — test weight is a graded measurement by a
   *                                 specified apparatus; bulk density is a ratio.
   *   recovery ≠ yield            — recovery is output ÷ input; yield is
   *                                 production per unit area.
   *   package count ≠ logistics   — a count is not a plan.
   *
   * Making any of those `exact` would let a search for one return the other as
   * if they were the same quantity. tests/phase5e.test.ts and the search
   * benchmark both assert they stay distinct.
   */
  {
    canonical: 'moisture-content-converter',
    variants: [
      'moisture basis',
      'wet basis',
      'dry basis',
      'wet-basis',
      'dry-basis',
    ],
    kind: 'narrower',
    note: 'Basis vocabulary points at the converter; the bases themselves are distinct quantities, not synonyms of each other.',
  },
  {
    canonical: 'grain-moisture-shrink',
    variants: ['moisture shrink', 'grain shrink', 'shrink'],
    kind: 'narrower',
    note: 'Shrink is water removal expressed as a mass fraction — NOT a synonym of loss.',
  },
  {
    canonical: 'bulk-density-calculator',
    variants: ['bulk density'],
    kind: 'narrower',
    note: 'Deliberately NOT linked to "test weight", which is a distinct graded measurement.',
  },
  {
    canonical: 'commodity-blending-calculator',
    variants: ['blending', 'blend'],
    kind: 'narrower',
  },
  {
    canonical: 'processing-recovery-calculator',
    variants: ['processing recovery', 'recovery'],
    kind: 'narrower',
    note: 'Deliberately NOT linked to "yield", which means production per unit area.',
  },
  {
    canonical: 'trade-unit-value-calculator',
    variants: ['unit value'],
    kind: 'narrower',
    note: 'Deliberately NOT linked to "price". A unit value is not a price.',
  },
  {
    canonical: 'packaging-quantity-estimator',
    variants: ['packaging count', 'package count'],
    kind: 'narrower',
  },
];
