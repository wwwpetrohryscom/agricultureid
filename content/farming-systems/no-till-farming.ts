import type { FarmingSystemContent } from '@/types/content';

export const noTillFarming: FarmingSystemContent = {
  id: 'system-no-till-farming',
  slug: 'no-till-farming',
  contentType: 'farming-system',
  title: 'No-Till Farming',
  systemClass: 'production-approach',
  alternativeNames: ['Zero tillage', 'No-till agriculture'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'No-till farming establishes crops directly into undisturbed soil and the residue of the previous crop, avoiding plowing or discing to reduce soil disturbance, erosion, and moisture loss.',
  introduction: [
    {
      type: 'paragraph',
      text: 'No-till farming replaces full-width tillage with direct seeding: specialized planters or drills cut a narrow slot through surface residue and place seed into undisturbed soil, rather than the soil being plowed or disced beforehand. Prior-crop residue is left on the surface instead of being incorporated, which protects the soil from raindrop impact and helps retain moisture.',
    },
    {
      type: 'paragraph',
      text: 'No-till is one of the three defining pillars of conservation agriculture, alongside permanent soil cover and diversified crop rotation, though the term "no-till" specifically refers to the tillage practice itself rather than the broader system. It can be adopted on its own or combined with cover cropping and rotation for fuller conservation-agriculture benefits.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Crop establishment directly into undisturbed soil without plowing or discing',
    },
    {
      label: 'Core equipment',
      value:
        'Specialized no-till seed drills or planters that cut through residue and place seed with minimal soil disturbance',
    },
    {
      label: 'Residue management',
      value:
        'Prior-crop residue is left on the soil surface rather than incorporated',
    },
    {
      label: 'Relationship to conservation agriculture',
      value:
        'One of three pillars of conservation agriculture, alongside soil cover and crop rotation',
    },
    {
      label: 'Weed management shift',
      value:
        'Often relies more on herbicides or cover crops for weed control since tillage no longer buries weeds',
    },
    {
      label: 'Adoption',
      value:
        'Widely adopted in parts of the Americas and Australia for major grain crops; growing elsewhere',
    },
  ],
  sections: [
    {
      id: 'what-no-till-farming-is',
      heading: 'What no-till farming is',
      body: [
        {
          type: 'paragraph',
          text: 'No-till farming is defined by the absence of mechanical soil inversion or full-width tillage before planting. Seed is placed through surface residue directly into soil that has not been plowed, disced, or otherwise disturbed beyond the narrow slot the planter opens.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'No-till',
              description:
                'Crop establishment without plowing, discing, or other full-width tillage before planting.',
            },
            {
              term: 'Residue cover',
              description:
                'Prior-crop stalks, stubble, or leaves left on the soil surface rather than incorporated by tillage.',
            },
            {
              term: 'Conservation agriculture',
              description:
                'A broader system combining no-till with permanent soil cover and diversified rotation.',
            },
          ],
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Residue from the previous crop is left on the field rather than incorporated by tillage',
            'A no-till drill or planter cuts a narrow slot through the residue and soil surface',
            'Seed is placed at the correct depth into undisturbed soil beneath the slot',
            'The slot is closed and firmed, often by a following press wheel',
            'Weeds are managed through herbicides, cover crops, or crop competition rather than burial by tillage',
          ],
        },
      ],
    },
    {
      id: 'principles-and-practices',
      heading: 'Principles and practices',
      body: [
        {
          type: 'list',
          items: [
            'Minimizing or eliminating mechanical soil disturbance across the field',
            'Maintaining residue cover to protect the soil surface between crops',
            'Using equipment designed to handle residue without clogging or hairpinning',
            'Adjusting planting depth and downforce to compensate for firmer, undisturbed soil',
            'Often paired with cover crops or diversified rotations to support weed and pest management',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because tillage is not available to bury weed seed or disrupt weed seedlings, no-till systems typically place more weight on herbicide programs, cover crops, or crop competition to manage weeds.',
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
            'Reduces soil disturbance, which can lower erosion risk and support soil structure over time',
            'Retained residue can improve moisture retention and reduce evaporative loss',
            'Can reduce fuel and labor use associated with tillage operations',
            'Supports higher soil organic matter accumulation near the surface in many settings',
          ],
        },
        {
          type: 'list',
          items: [
            'Requires specialized planting equipment suited to residue and firmer soils',
            'Weed control often shifts toward herbicides, raising resistance-management considerations',
            'Some poorly drained or compacted soils may still benefit from occasional targeted tillage',
            'Transition can involve a learning period as growers adjust equipment and management',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry makes no yield or profitability claim for no-till relative to tilled systems; outcomes depend heavily on soil type, climate, crop, and management skill.',
        },
      ],
    },
    {
      id: 'where-no-till-is-used',
      heading: 'Where no-till is used',
      body: [
        {
          type: 'paragraph',
          text: 'No-till is most widely adopted in broadacre grain and oilseed production, such as wheat, maize, and soybean, where suitable planting equipment and herbicide options are accessible. It is less common for crops requiring soil disturbance at harvest, such as root and tuber crops.',
        },
        {
          type: 'table',
          caption: 'Typical no-till adoption patterns',
          columns: ['Context', 'Typical pattern'],
          rows: [
            [
              'Broadacre grain crops (wheat, maize, soybean)',
              'Widely adopted where suitable equipment and herbicides are accessible',
            ],
            [
              'Root and tuber crops',
              'Less common, since harvest itself disturbs the soil',
            ],
            [
              'Poorly drained or compacted soils',
              'May still require occasional targeted tillage alongside no-till practices',
            ],
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'contour-farming' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'subsoiler' },
  ],
  glossaryTerms: ['crop-rotation', 'cover-crop'],
  geographicScope:
    'Practiced worldwide, but adoption and suitability vary with soil type, climate, herbicide access, and availability of no-till planting equipment.',
  limitations: [
    'This entry describes no-till farming in general terms and makes no universal yield or profitability comparison with tilled systems.',
    'Suitability varies by soil type; some poorly drained or compacted soils may still require occasional targeted tillage.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'No-till as a pillar of conservation agriculture',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'No-till practice standards and soil health context',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'No-till equipment and residue management guidance',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on conservation agriculture systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'No-Till Farming',
    description:
      'No-till farming explained: direct seeding into undisturbed soil and residue, how it works, and its honest benefits and trade-offs for erosion and weeds.',
    keywords: [
      'no-till farming',
      'zero tillage',
      'conservation tillage',
      'soil erosion',
    ],
  },
  structuredData: { article: true },
};
