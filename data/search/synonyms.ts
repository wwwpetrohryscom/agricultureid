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
];
