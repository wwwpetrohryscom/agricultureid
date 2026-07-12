import type { SoilTopicContent } from '@/types/content';

export const soilCrusting: SoilTopicContent = {
  id: 'soil-topic-soil-crusting',
  slug: 'soil-crusting',
  contentType: 'soil-topic',
  title: 'Soil Crusting',
  topicClass: 'physical',
  alternativeNames: ['Surface sealing'],
  category: 'Soil physical process',
  subcategory: 'Surface structural degradation',
  summary:
    'Soil crusting is the formation of a thin, dense layer at the soil surface, typically caused by raindrop impact breaking down unprotected aggregates, which can impede seedling emergence, reduce water infiltration, and increase runoff.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil crusting begins when raindrop impact on bare, unprotected soil breaks weakly bound aggregates into finer particles, which then disperse and settle into surface pores as the soil dries, forming a thin, dense, often hard layer at the immediate surface.',
    },
    {
      type: 'paragraph',
      text: 'Crusting is most pronounced on soils with weak aggregate stability, low organic matter, and a silty or fine sandy texture, and is worsened by a lack of surface cover to intercept raindrop energy before it reaches bare soil.',
    },
  ],
  keyFacts: [
    {
      label: 'Cause',
      value:
        'Raindrop impact on bare, weakly aggregated soil, followed by drying',
    },
    {
      label: 'Most vulnerable soils',
      value:
        'Silty or fine sandy soils with low organic matter and weak aggregation',
    },
    {
      label: 'Key effects',
      value:
        'Impeded seedling emergence, reduced infiltration, increased runoff',
    },
    {
      label: 'Assessed by',
      value:
        'Visual inspection of surface hardness and seedling emergence patterns',
    },
    {
      label: 'Worsened by',
      value: 'Lack of surface residue or vegetative cover; intense rainfall',
    },
    {
      label: 'Managed by',
      value:
        'Maintaining surface residue, building organic matter, gypsum on sodic-prone soils',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil crusting is',
      body: [
        {
          type: 'paragraph',
          text: 'Crusting develops as raindrop impact detaches fine particles from weakly bound surface aggregates; these particles then clog surface pores and, on drying, bind into a thin, dense layer that can be substantially harder than the soil immediately beneath it.',
        },
        {
          type: 'list',
          items: [
            'Structural crusts form from aggregate breakdown and particle redistribution by raindrop impact',
            'Depositional crusts can also form where sediment-laden runoff settles and dries on the surface',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why crusting matters',
      body: [
        {
          type: 'paragraph',
          text: 'A hardened surface crust can physically impede small-seeded crops from emerging, particularly if it forms after planting but before seedlings break through, contributing to poor or uneven stands. Crusting also reduces water infiltration, increasing runoff and, in turn, erosion risk on sloping land.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How crusting is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Crusting is generally identified through field observation: a visibly hardened, often cracked surface layer, poor or delayed seedling emergence following a rainfall event after planting, and visible ponding or increased runoff during subsequent rain.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Crust severity depends on the timing of rainfall relative to planting and drying conditions afterward, so its occurrence can vary considerably between seasons on the same field.',
        },
      ],
    },
    {
      id: 'influencing-factors',
      heading: 'Factors influencing crusting risk',
      body: [
        {
          type: 'table',
          caption:
            'General factors affecting crusting risk (not universal figures)',
          columns: ['Factor', 'General influence'],
          rows: [
            [
              'Soil texture',
              'Silty and fine sandy soils are generally more crust-prone than well-aggregated clay or organic soils',
            ],
            [
              'Organic matter and aggregate stability',
              'Higher organic matter and stronger aggregation generally reduce crusting risk',
            ],
            [
              'Surface cover',
              'Residue or vegetative cover intercepts raindrop energy and generally reduces crusting',
            ],
            [
              'Sodium content',
              'Elevated exchangeable sodium can worsen aggregate breakdown and crusting',
            ],
          ],
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing and preventing crusting',
      body: [
        {
          type: 'paragraph',
          text: 'Prevention generally focuses on protecting the surface from direct raindrop impact and building aggregate stability, so that even where rain is intense, the surface resists breakdown and sealing.',
        },
        {
          type: 'list',
          items: [
            'Maintain crop residue or cover crops to intercept raindrop energy before it reaches bare soil',
            'Build soil organic matter to improve aggregate stability over time',
            'Apply gypsum on sodic-prone soils where elevated exchangeable sodium contributes to crusting',
            'Adjust planting depth and timing to reduce the chance of a crust forming over emerging seedlings',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'The most effective combination of practices depends on local soil texture, sodium status, and rainfall pattern; there is no single universal fix for crusting.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  connections: [
    { type: 'soil', slug: 'silt-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'fertilizer', slug: 'gypsum' },
    { type: 'crop', slug: 'onion' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: ['cover-crop'],
  geographicScope:
    'General soil-science overview applicable worldwide; crusting risk depends on local soil texture, sodium status, rainfall intensity, and management.',
  climateContext:
    'Regions with intense rainfall following dry periods are generally more prone to crusting on susceptible soils.',
  limitations: [
    'Crusting severity depends on the interaction of soil texture, sodium status, rainfall timing, and cover, and is not quantified with a single figure here.',
    'This entry describes general principles; site-specific management should be guided by local soil testing and observation.',
    'Small-seeded crops are disproportionately affected; this entry does not list every crop-specific sensitivity.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil surface crusting causes and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil surface sealing and structural degradation',
    },
    { sourceId: 'isric', citedFor: 'Global soil physical property data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil crusting assessment and prevention guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Crusting',
    description:
      'Soil crusting explained: how raindrop impact seals the surface, effects on seedling emergence and infiltration, and prevention practices.',
    keywords: [
      'soil crusting',
      'surface sealing soil',
      'seedling emergence crust',
      'soil aggregate stability',
    ],
  },
  structuredData: { article: true },
};
