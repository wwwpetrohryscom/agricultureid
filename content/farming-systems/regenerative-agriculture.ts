import type { FarmingSystemContent } from '@/types/content';

export const regenerativeAgriculture: FarmingSystemContent = {
  id: 'system-regenerative-agriculture',
  slug: 'regenerative-agriculture',
  contentType: 'farming-system',
  title: 'Regenerative Agriculture',
  systemClass: 'production-approach',
  alternativeNames: ['Regenerative farming'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'Regenerative agriculture is a set of practices — often including reduced tillage, cover cropping, diverse rotations, and livestock integration — aimed at rebuilding soil health, biodiversity, and water function. Definitions vary across users and the term continues to evolve.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Regenerative agriculture describes a cluster of practices oriented toward improving, rather than merely maintaining, the biological, physical, and hydrological condition of farmland over time. Commonly cited practices include minimizing soil disturbance, keeping soil covered and rooted for more of the year, diversifying rotations, and integrating livestock — but unlike organic farming, there is no single, universally accepted certification or rulebook that defines it.',
    },
    {
      type: 'paragraph',
      text: 'Because the term is used by farmers, companies, researchers, and certification schemes with somewhat different emphases — some defining it by the practices used, others by measurable soil or biodiversity outcomes — “regenerative” is best treated as an evolving, outcome-oriented goal rather than a fixed production system. It is also not exclusive: regenerative practices can be layered onto conventional, organic, or integrated crop–livestock operations.',
    },
  ],
  keyFacts: [
    {
      label: 'Core aim',
      value: 'Improve soil health, biodiversity, and water cycling over time',
    },
    {
      label: 'Definition status',
      value:
        'No single universal definition or certification; usage varies and continues to evolve',
    },
    {
      label: 'Common practices',
      value:
        'Reduced or no tillage, cover cropping, diverse rotations, livestock integration',
    },
    {
      label: 'Outcome focus',
      value:
        'Often assessed by trends in soil organic matter and biological activity rather than a fixed practice list',
    },
    {
      label: 'Overlap with other systems',
      value:
        'Can be combined with organic, conventional, or conservation approaches',
    },
    {
      label: 'Evidence base',
      value:
        'Growing body of research; effects are strongly context- and time-dependent',
    },
  ],
  sections: [
    {
      id: 'what-regenerative-agriculture-is',
      heading: 'What regenerative agriculture is',
      body: [
        {
          type: 'paragraph',
          text: 'Regenerative agriculture is generally described in terms of intent — leaving soil, water, and biodiversity in better condition than before — rather than a fixed set of certified rules. Different organizations and researchers emphasize different practices or outcome metrics, so the same farm might be called “regenerative” by one definition and not by another.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A term still being defined',
          text: 'Unlike organic farming, "regenerative agriculture" has no single global standard or certifying authority. This entry describes commonly cited practices and goals; it should not be read as a fixed or universally agreed definition.',
        },
      ],
    },
    {
      id: 'core-practices',
      heading: 'Core practices commonly associated with the term',
      body: [
        {
          type: 'list',
          items: [
            'Reducing or eliminating tillage to limit soil disturbance',
            'Keeping soil covered with cover crops or residue for more of the year',
            'Diversifying crop rotations rather than growing one or two crops repeatedly',
            'Integrating livestock grazing with cropland, often through cover crops or residue grazing',
            'Minimizing bare fallow periods to keep living roots in the soil',
          ],
        },
      ],
    },
    {
      id: 'how-it-is-intended-to-work',
      heading: 'How it is intended to work',
      body: [
        {
          type: 'paragraph',
          text: 'The practices above are generally intended to work together: less physical disturbance and more continuous living roots support soil organisms and aggregate formation, while diversified rotations and cover crops add organic matter and interrupt pest and disease cycles. Over time, proponents argue this can improve water infiltration, nutrient cycling, and resilience to weather extremes, although the pace and size of these changes depend heavily on starting soil condition and climate.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'No-till / reduced tillage',
              description:
                'Planting with minimal or no mechanical soil inversion, leaving residue on the surface.',
            },
            {
              term: 'Cover crop',
              description:
                'A crop grown primarily to protect and build soil rather than for direct harvest.',
            },
            {
              term: 'Soil organic matter',
              description:
                'The organic component of soil that influences fertility, structure, and water-holding capacity.',
            },
          ],
        },
      ],
    },
    {
      id: 'measuring-outcomes',
      heading: 'Measuring outcomes',
      body: [
        {
          type: 'paragraph',
          text: 'Because regenerative agriculture is often defined by outcomes as much as practices, farms and researchers track a range of soil and ecological indicators over multiple seasons to gauge progress, rather than relying on a single metric or a single season’s result.',
        },
        {
          type: 'table',
          caption: 'Commonly tracked indicators',
          columns: ['Indicator', 'What it reflects'],
          rows: [
            [
              'Soil organic matter / carbon',
              'Long-term trend in organic inputs versus decomposition',
            ],
            [
              'Water infiltration rate',
              'How readily rainfall enters the soil rather than running off',
            ],
            [
              'Aggregate stability',
              'Structural resilience of soil to breakdown and erosion',
            ],
            [
              'Biodiversity counts',
              'Presence and diversity of soil organisms, insects, or plant species',
            ],
          ],
        },
      ],
    },
    {
      id: 'benefits-and-trade-offs',
      heading: 'Benefits and trade-offs',
      body: [
        {
          type: 'list',
          items: [
            'Potential improvements in soil organic matter, structure, and water infiltration over time',
            'Reduced erosion risk from continuous cover and less disturbance',
            'Greater rotational diversity, which can spread production and market risk',
            'Possible synergies with grazing livestock and nutrient cycling',
          ],
        },
        {
          type: 'list',
          items: [
            'Transition period can bring yield variability while soil and management adjust',
            'Soil and biodiversity changes typically take years to become measurable',
            'Requires new skills, equipment, or planning (e.g., cover-crop termination, grazing logistics)',
            'Lack of a single standard makes claims of "regenerative" difficult to verify or compare',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not provide yield, profitability, or carbon-sequestration figures. Reported outcomes vary widely across studies, soils, climates, and time frames, and should not be generalized from one context to another.',
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where it is used',
      body: [
        {
          type: 'paragraph',
          text: 'Practices described as regenerative are used across a wide range of climates and farm types worldwide, from row-crop operations adopting no-till and cover crops to grazing systems using managed rotational grazing. Adoption is growing but remains a minority of global cropland, and specific practices are adapted to local soils, crops, and climate rather than applied as a fixed package.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'machinery', slug: 'seed-drill' },
  ],
  glossaryTerms: ['cover-crop', 'crop-rotation', 'agronomy'],
  geographicScope:
    'Practices described here are used across many climates and farm types worldwide; specific techniques and their effects are strongly site-dependent.',
  climateContext:
    'Rates of soil organic matter change and cover-crop performance depend heavily on regional temperature and rainfall patterns.',
  limitations: [
    'The term "regenerative agriculture" lacks a single, universally accepted definition or certification, unlike organic standards; this entry describes commonly cited practices and goals rather than a fixed rulebook.',
    'Soil and biodiversity outcomes depend heavily on starting conditions, climate, and time frame, so this entry does not claim guaranteed or universal results.',
    'It does not provide yield or carbon-sequestration figures, since these vary too widely across studies, soils, and climates to generalize.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sustainable and regenerative production concepts',
    },
    { sourceId: 'usda-nrcs', citedFor: 'Soil health principles and practices' },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on soil health and diversified farming systems',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Policy context for soil and biodiversity practices',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Regenerative Agriculture',
    description:
      'Regenerative agriculture explained: commonly cited practices, how they are meant to rebuild soil health, and why the term still lacks one agreed definition.',
    keywords: [
      'regenerative agriculture',
      'soil health',
      'cover crops',
      'no-till farming',
    ],
  },
  structuredData: { article: true },
};
