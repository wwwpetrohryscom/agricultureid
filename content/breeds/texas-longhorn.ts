import type { BreedContent } from '@/types/content';

export const texasLonghorn: BreedContent = {
  id: 'breed-texas-longhorn',
  slug: 'texas-longhorn',
  contentType: 'breed',
  title: 'Texas Longhorn',
  category: 'Cattle breed',
  species: 'Cattle (Bos taurus)',
  alternativeNames: ['Longhorn'],
  summary:
    'The Texas Longhorn is a hardy North American beef breed descended from Spanish colonial cattle, famous for its very long horns, varied colours, and adaptation to harsh rangeland.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Texas Longhorn is a beef breed of the southern United States descended from cattle brought to the Americas by Spanish colonists. Over centuries, many of these cattle ranged semi-feral across Texas and northern Mexico, and natural selection under harsh conditions produced an exceptionally hardy animal.',
    },
    {
      type: 'paragraph',
      text: 'The breed is best known for its very long, wide-spreading horns and its wide range of coat colours and patterns. Once central to the historic cattle drives of the American West, the Texas Longhorn was later conserved and organised into a registered breed valued for hardiness, fertility, and longevity.',
    },
  ],
  keyFacts: [
    { label: 'Breed type', value: 'Beef (heritage)' },
    { label: 'Species', value: 'Bos taurus' },
    {
      label: 'Origin',
      value: 'Southern United States, from Spanish colonial cattle',
    },
    { label: 'Horns', value: 'Very long, wide-spreading' },
    { label: 'Coat', value: 'Highly variable in colour and pattern' },
    {
      label: 'Notable trait',
      value: 'Hardiness, fertility, longevity, calving ease',
    },
    {
      label: 'Registries',
      value: 'FAO DAD-IS; Texas Longhorn breed associations',
    },
  ],
  sections: [
    {
      id: 'origin-and-development',
      heading: 'Origin and development',
      body: [
        {
          type: 'paragraph',
          text: 'The Texas Longhorn descends from Iberian cattle introduced by Spanish settlers, which spread and often ranged with little management across the southern plains of North America. Generations of survival under drought, heat, predators, and sparse forage shaped a hardy, resourceful breed.',
        },
        {
          type: 'paragraph',
          text: 'After the era of the great cattle drives, numbers fell as specialised beef breeds were introduced, and deliberate conservation efforts preserved the breed. It is now maintained through breed associations, and heritage-livestock organisations have monitored its status.',
        },
      ],
    },
    {
      id: 'characteristics-and-use',
      heading: 'Characteristics and use',
      body: [
        {
          type: 'paragraph',
          text: 'Texas Longhorns are moderate-sized cattle defined by their long horns and remarkable diversity of coat colour and pattern. They are kept for beef, for conservation and heritage purposes, and increasingly for lean beef and for their ornamental and historical appeal.',
        },
        {
          type: 'paragraph',
          text: 'The breed is valued for traits shaped by its history: hardiness, foraging ability on poor range, fertility, ease of calving, and longevity. Longhorn genetics are sometimes introduced into commercial herds to add hardiness and calving ease.',
        },
      ],
    },
    {
      id: 'adaptation-and-management',
      heading: 'Adaptation and management',
      body: [
        {
          type: 'paragraph',
          text: 'The Texas Longhorn is well adapted to hot, dry rangeland and is regarded as tolerant of drought and heat and able to use sparse and variable forage. These traits make it suited to extensive, low-input systems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The breed’s long horns require appropriate handling facilities and space; hardiness and drought tolerance are general strengths that still depend on adequate water, forage, and management in any given environment.',
        },
      ],
    },
  ],
  parentLivestock: { type: 'livestock', slug: 'cattle' },
  breedType: 'Beef',
  originCountry: 'United States',
  originRegion:
    'Texas and the southern United States; ancestry from Spanish colonial cattle',
  breedStatus: 'registered',
  conservationStatus: 'unknown',
  registryReferences: [
    {
      registry: 'FAO DAD-IS',
      sourceId: 'fao-dad-is',
      jurisdiction: 'Global',
      asOf: '2026-07-12',
      note: 'Recorded as a breed of the United States.',
    },
    {
      registry: 'Texas Longhorn breed associations',
      jurisdiction: 'United States',
      note: 'Breed associations maintain the herd registers; record identifiers are not asserted here.',
    },
  ],
  primaryUses: [
    'Beef production',
    'Heritage conservation',
    'Crossbreeding for hardiness and calving ease',
  ],
  physicalCharacteristics:
    'Moderate-sized cattle defined by very long, wide-spreading horns and a wide diversity of coat colours and patterns.',
  productionCharacteristics:
    'A hardy heritage beef breed valued for foraging ability, fertility, calving ease, and longevity rather than for maximum growth; sometimes used to add hardiness to commercial herds. Specific figures depend on line, nutrition, and system and are not stated here.',
  climateAdaptation:
    'Well adapted to hot, dry rangeland; regarded as tolerant of drought and heat and able to use sparse, variable forage.',
  managementContext:
    'Suited to extensive, low-input systems; long horns require appropriate handling facilities and space.',
  geographicDistribution:
    'Concentrated in the United States, particularly the south, with smaller populations elsewhere.',
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  glossaryTerms: ['ruminant', 'forage'],
  geographicScope:
    'Global overview of the breed; registry rules and management vary, and the breed is concentrated in North America.',
  climateContext:
    'A heat- and drought-tolerant beef breed developed under harsh rangeland conditions.',
  limitations: [
    'Texas Longhorn characteristics and performance vary with line, management, and environment; hardiness, drought tolerance, and calving ease are general strengths rather than fixed values.',
    'No growth, carcass, or fertility figures are stated here because they depend on genetics, nutrition, and system; current data should come from breed associations and recording.',
    'FAO DAD-IS records the Texas Longhorn conservation status by country and population and updates it over time, so no single global risk category is assigned here (shown as unknown); heritage organisations separately monitor the breed.',
    'Herd health, welfare, and breeding decisions are governed by local regulation and veterinary advice and fall outside this record.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Breed record and status',
    },
    {
      sourceId: 'livestock-conservancy',
      citedFor: 'Breed history and conservation status in North America',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General breed history and description',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Texas Longhorn (cattle breed)',
    description:
      'Texas Longhorn cattle: hardy North American heritage beef breed with very long horns, descended from Spanish colonial cattle and adapted to harsh rangeland.',
    keywords: [
      'Texas Longhorn',
      'heritage cattle breed',
      'rangeland cattle',
      'long horns',
    ],
  },
  structuredData: { article: true },
};
