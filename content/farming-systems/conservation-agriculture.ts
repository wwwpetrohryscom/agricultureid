import type { FarmingSystemContent } from '@/types/content';

export const conservationAgriculture: FarmingSystemContent = {
  id: 'system-conservation-agriculture',
  slug: 'conservation-agriculture',
  contentType: 'farming-system',
  title: 'Conservation Agriculture',
  systemClass: 'production-approach',
  alternativeNames: ['Conservation tillage system'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'Conservation agriculture combines minimal mechanical soil disturbance, permanent soil cover, and diversified crop rotations to protect soil structure and reduce erosion while maintaining crop production.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Conservation agriculture is commonly described around three linked principles applied together: minimal mechanical soil disturbance (no-till or reduced-till planting), permanent organic soil cover from crop residues or cover crops, and diversified crop rotations or associations. Most definitions require all three principles in combination, though the exact criteria and terminology used differ somewhat between organizations and regions.',
    },
    {
      type: 'paragraph',
      text: 'The approach developed largely as a response to soil erosion and structural degradation under intensive tillage, and it has since been promoted in many regions as a way to protect and rebuild soil over time. Adopting it typically requires specialized direct-seeding equipment able to plant through residue, and it shifts weed management away from tillage toward other tools, since the soil is no longer regularly turned.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Minimal soil disturbance, permanent soil cover, and diversified rotations together',
    },
    {
      label: 'Origin / purpose',
      value:
        'Developed largely to reduce soil erosion and rebuild degraded soils',
    },
    {
      label: 'Weed management',
      value:
        'Relies on residue cover, rotation, and often herbicides or cover crops rather than tillage',
    },
    {
      label: 'Equipment need',
      value:
        'Requires direct-seeding / no-till drills able to plant through residue',
    },
    {
      label: 'Transition period',
      value:
        'Soil structure and biology typically take several years to visibly change after adoption',
    },
    {
      label: 'Adoption',
      value:
        'Practiced on a substantial and growing share of global cropland, though rates vary greatly by region',
    },
  ],
  sections: [
    {
      id: 'what-conservation-agriculture-is',
      heading: 'What conservation agriculture is',
      body: [
        {
          type: 'paragraph',
          text: 'Conservation agriculture is distinguished from simple no-till farming by requiring the combination of minimal disturbance, permanent soil cover, and rotational diversity, rather than any one of these practices on its own. Applying only one element — no-till alone, for example — is generally not considered full conservation agriculture under most definitions.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Minimal soil disturbance',
              description:
                'Planting directly into the soil with little or no mechanical tillage or inversion.',
            },
            {
              term: 'Permanent soil cover',
              description:
                'Keeping the soil surface covered year-round with crop residue or cover crops.',
            },
            {
              term: 'Crop rotation / diversification',
              description:
                'Growing a varied sequence of crops rather than repeating the same crop or a narrow rotation.',
            },
          ],
        },
      ],
    },
    {
      id: 'the-three-linked-principles',
      heading: 'The three linked principles',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Minimal mechanical soil disturbance — planting with direct-seeding equipment rather than plowing or intensive tillage',
            'Permanent organic soil cover — leaving crop residue on the surface or growing cover crops between cash crops',
            'Diversified crop rotations or associations — varying crops over time to break pest and disease cycles and diversify residue types',
          ],
        },
        {
          type: 'paragraph',
          text: 'Different organizations and regional programs apply somewhat different thresholds and terminology for what qualifies as conservation agriculture, so specific criteria should be checked against the relevant local standard or extension guidance rather than assumed universal.',
        },
      ],
    },
    {
      id: 'managing-weeds-and-residue-without-tillage',
      heading: 'Managing weeds and residue without tillage',
      body: [
        {
          type: 'paragraph',
          text: 'Without tillage as a weed-control tool, growers rely on a combination of residue cover that suppresses weed emergence, crop rotation that disrupts weed life cycles, cover crops, and, in many systems, herbicides to manage weeds that tillage would otherwise control.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'In some conservation-agriculture systems, greater reliance on herbicides for weed control raises its own management challenges, including the risk of herbicide-resistant weed populations developing over time. This is a genuine trade-off, not a solved problem.',
        },
      ],
    },
    {
      id: 'equipment-and-transition',
      heading: 'Equipment and transition',
      body: [
        {
          type: 'paragraph',
          text: 'Adopting conservation agriculture generally requires direct-seeding or no-till drills capable of placing seed accurately through surface residue, which is a different equipment investment from conventional tillage-based planting. The transition period after adoption can involve temporary yield variability and a shift in weed pressure as the soil and management system adjust.',
        },
        {
          type: 'table',
          caption:
            'Typical changes during the transition to conservation agriculture',
          columns: ['Stage', 'What tends to change'],
          rows: [
            [
              'First 1–3 years',
              'Weed-management adjustment, possible yield variability, new equipment and skills needed',
            ],
            [
              'Medium term (3–7 years)',
              'Gradual improvement in soil structure, organic matter, and water infiltration',
            ],
            [
              'Long term',
              'More established soil biological activity and, in many cases, greater resilience to erosion and drought stress',
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
            'Reduced soil erosion from wind and water',
            'Potential improvement in soil organic matter and water infiltration over time',
            'Lower fuel and labor use for tillage operations',
            'Continuous residue cover can improve moisture retention',
          ],
        },
        {
          type: 'list',
          items: [
            'Requires investment in specialized direct-seeding equipment',
            'Weed management can be more complex without tillage as a tool',
            'Transition period can bring temporary yield or weed-pressure challenges',
            'Some systems become more reliant on herbicides, with associated resistance-management concerns',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not provide universal erosion-reduction or yield figures for conservation agriculture. Outcomes are highly dependent on starting soil condition, climate, crop choice, and management, and should not be generalized from one context to another.',
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where conservation agriculture is used',
      body: [
        {
          type: 'paragraph',
          text: 'Conservation agriculture is practiced across many regions and climates worldwide, with particularly strong adoption in parts of the Americas and Australia, and growing interest elsewhere. Adoption depends on access to suitable direct-seeding equipment, markets and crop options for diversified rotations, and extension or technical support.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'machinery', slug: 'seed-drill' },
  ],
  glossaryTerms: ['cover-crop', 'crop-rotation', 'agronomy'],
  geographicScope:
    'Conservation agriculture is practiced across many regions and climates worldwide; suitable rotations, cover-cropping options, and weed-management strategies are strongly local.',
  climateContext:
    'Residue decomposition rates, soil-moisture dynamics, and weed pressure under reduced tillage all vary substantially with regional rainfall and temperature.',
  limitations: [
    'Definitions and criteria for "conservation agriculture" vary somewhat between organizations and regions; this entry describes commonly cited principles rather than one universal rulebook.',
    'The transition period and its effects on yield, weeds, and soil vary by starting soil condition, climate, and crop, so outcomes are not generalized here.',
    'This entry does not provide erosion-reduction or yield figures, since these are highly site- and management-dependent.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Conservation agriculture principles and global adoption',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'No-till, residue management, and soil conservation practices',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Research on conservation agriculture in diverse cropping systems',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Policy context for soil conservation practices',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Conservation Agriculture',
    description:
      'Conservation agriculture explained: minimal disturbance, permanent soil cover, and rotation combined, with weed management, equipment, and trade-offs.',
    keywords: [
      'conservation agriculture',
      'no-till farming',
      'soil erosion',
      'crop rotation',
    ],
  },
  structuredData: { article: true },
};
