import type { SoilTopicContent } from '@/types/content';

export const soilSodicity: SoilTopicContent = {
  id: 'soil-topic-soil-sodicity',
  slug: 'soil-sodicity',
  contentType: 'soil-topic',
  title: 'Soil Sodicity',
  topicClass: 'chemical',
  alternativeNames: ['Sodic soil condition', 'Exchangeable sodium'],
  category: 'Soil chemical property',
  subcategory: 'Salt-affected soils',
  summary:
    'Sodicity is the condition in which a high proportion of a soil exchange sites are occupied by sodium. Excess exchangeable sodium disperses clay, destroying structure and causing poor infiltration, waterlogging, crusting, and hard-setting that impair root growth.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil sodicity refers to an excess of exchangeable sodium held on the soil cation exchange sites relative to other cations such as calcium and magnesium. Unlike salinity, which concerns the total concentration of soluble salts, sodicity is a structural problem: sodium causes clay particles to repel one another and disperse, breaking down the aggregates that give soil its structure.',
    },
    {
      type: 'paragraph',
      text: 'Sodicity and salinity are related but distinct, and a soil can be sodic, saline, both, or neither. The two require different management: salinity is managed mainly by leaching salts, whereas sodicity typically requires supplying calcium, often as gypsum, to displace sodium before excess salts are leached. Sodicity is commonly described using the proportion of exchangeable sodium or a measure of sodium relative to calcium and magnesium in solution.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value:
        'A high proportion of exchangeable sodium on the soil exchange sites',
    },
    {
      label: 'Core problem',
      value: 'Sodium disperses clay, destroying aggregates and soil structure',
    },
    {
      label: 'Symptoms',
      value:
        'Poor infiltration, waterlogging, surface crusting, and hard-setting when dry',
    },
    {
      label: 'Distinct from salinity',
      value:
        'Salinity is total soluble salt; sodicity is the dominance of sodium on exchange sites',
    },
    {
      label: 'Typical amendment',
      value:
        'Calcium sources such as gypsum to displace sodium, followed by leaching',
    },
    {
      label: 'Why it matters',
      value:
        'Degrades structure, drainage, and root growth, reducing productivity',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What sodicity is',
      body: [
        {
          type: 'paragraph',
          text: 'Cations held on clay surfaces influence how clay particles interact. Calcium and magnesium tend to hold aggregates together, whereas a dominance of sodium causes clay particles to swell and disperse when wetted. Sodicity is therefore defined by the relative amount of sodium on the exchange complex, and its damage appears as the collapse of structure rather than as a direct toxic salt effect.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Exchangeable sodium',
              description:
                'Sodium held on the soil cation exchange sites; a high share of it defines a sodic soil.',
            },
            {
              term: 'Dispersion',
              description:
                'The separation of clay particles caused by excess sodium, which destroys aggregates.',
            },
            {
              term: 'Sodicity versus salinity',
              description:
                'Salinity concerns total soluble salt; sodicity concerns the dominance of sodium, and they are managed differently.',
            },
          ],
        },
      ],
    },
    {
      id: 'effects',
      heading: 'How sodicity damages soil',
      body: [
        {
          type: 'paragraph',
          text: 'When sodium-rich clay disperses, the fine particles clog pores and seal the soil. This collapses structure, drastically reduces water infiltration and drainage, and promotes surface crusting and waterlogging. On drying, sodic soils often set hard and become difficult for roots and seedlings to penetrate. The combined effect is poor aeration, poor water movement, and restricted root growth.',
        },
        {
          type: 'list',
          items: [
            'Clay dispersion collapses aggregates and blocks pores, sharply lowering infiltration and drainage',
            'Surface sealing and crusting impede emergence and increase runoff and erosion',
            'Waterlogging near the surface reduces aeration and root function',
            'Hard-setting on drying restricts root penetration and makes tillage difficult',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Because sodicity is a structural rather than a purely chemical problem, simply leaching a sodic soil with low-salt water can worsen dispersion; calcium usually needs to be supplied first.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing sodic soils',
      body: [
        {
          type: 'paragraph',
          text: 'Reclaiming sodic soils generally involves supplying a soluble source of calcium, most commonly gypsum, to displace sodium from the exchange sites, then leaching the displaced sodium below the root zone with adequate drainage. Maintaining organic matter and protecting surface structure support the process, and improvements can be slow, particularly in heavy clays.',
        },
        {
          type: 'list',
          items: [
            'Apply calcium amendments such as gypsum to displace exchangeable sodium',
            'Ensure adequate drainage so displaced sodium and salts can be leached away',
            'Protect surface structure and build organic matter to resist dispersion and crusting',
            'Confirm sodicity with soil testing and distinguish it from salinity before choosing treatment',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-crusting' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'nutrient', slug: 'sodium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'fertilizer', slug: 'gypsum' },
    { type: 'soil', slug: 'saline-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  glossaryTerms: ['soil-texture', 'soil-ph'],
  geographicScope:
    'Global, but sodicity is most common in arid and semi-arid regions and in irrigated lands where sodium accumulates; severity depends on local soil, water quality, and drainage.',
  climateContext:
    'Sodicity develops most readily under arid and semi-arid conditions and where irrigation water is high in sodium relative to calcium and magnesium, allowing sodium to build up on the exchange complex.',
  limitations: [
    'Sodicity is defined by exchangeable sodium and related indices whose thresholds are established through soil testing, not by field appearance alone.',
    'Reclamation with calcium amendments and leaching can be slow and requires adequate drainage, which is not always feasible.',
    'This entry describes general principles; treatment should be based on soil analysis that distinguishes sodicity from salinity.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Sodic soils, exchangeable sodium, and reclamation',
    },
    { sourceId: 'fao-soils', citedFor: 'Salt-affected and sodic soils' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Management of sodic soils and water quality',
    },
    { sourceId: 'isric', citedFor: 'Global salt-affected soil data' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Sodicity',
    description:
      'Soil sodicity explained: how excess exchangeable sodium disperses clay and destroys structure, how it differs from salinity, and how gypsum reclaims it.',
    keywords: [
      'soil sodicity',
      'sodic soil',
      'exchangeable sodium',
      'gypsum reclamation',
    ],
  },
  structuredData: { article: true },
};
