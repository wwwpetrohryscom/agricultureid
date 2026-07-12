import type { MachineryContent } from '@/types/content';

export const transplanter: MachineryContent = {
  id: 'machinery-transplanter',
  slug: 'transplanter',
  contentType: 'machinery',
  title: 'Transplanter',
  alternativeNames: ['Rice transplanter', 'Vegetable transplanter'],
  category: 'Agricultural machinery',
  subcategory: 'Transplanting equipment',
  machineryClass: 'seeding',
  summary:
    'A transplanter mechanically sets young seedlings, raised beforehand in a nursery or trays, into the field at a set spacing and depth, replacing manual transplanting for crops such as rice and many vegetables.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A transplanter establishes a crop from seedlings rather than from seed sown directly in the field, taking young plants raised in a nursery bed, plug trays, or seedling mats and placing them into prepared soil at a set spacing and depth. This approach is used where starting plants under controlled conditions before field planting improves establishment, uniformity, or allows a head start on the growing season.',
    },
    {
      type: 'paragraph',
      text: 'Mechanical transplanters replace what was traditionally intensive manual labour — most notably in flooded rice paddies, where hand transplanting of rice seedlings has long been a labour-intensive task — with equipment that picks up, separates, and sets seedlings continuously as it moves through the field.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value:
        'Placing pre-raised seedlings into the field at set spacing and depth',
    },
    {
      label: 'Key components',
      value:
        'Seedling tray/mat holder, picking or feeding mechanism, and planting arms or fingers',
    },
    {
      label: 'Common crops',
      value:
        'Rice, tomato, cabbage, and other crops commonly established from nursery seedlings',
    },
    {
      label: 'Typical seedling source',
      value:
        'Nursery beds, plug trays, or seedling mats raised before field planting',
    },
    {
      label: 'Common configurations',
      value: 'Walk-behind, ride-on, and rice-specific paddy transplanters',
    },
    {
      label: 'Operating consideration',
      value:
        'Seedling age, mat/tray uniformity, and field water level (for paddy rice) affect performance',
    },
  ],
  sections: [
    {
      id: 'what-a-transplanter-is',
      heading: 'What a transplanter is',
      body: [
        {
          type: 'paragraph',
          text: 'A transplanter is defined by handling live seedlings rather than seed, requiring a fundamentally different mechanism from planters or seed drills: instead of metering and dropping individual seeds, it must pick up, separate, and set intact young plants without excessive damage to roots or stems.',
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
            'Seedling trays or mats, raised in advance in a nursery, are loaded onto the transplanter',
            'A picking or feeding mechanism separates individual seedlings from the tray or mat',
            'Planting arms or fingers place each seedling into the soil at a set spacing and depth',
            'Following components, or the soil itself, firm the seedling in place',
          ],
        },
      ],
    },
    {
      id: 'role-in-the-production-cycle',
      heading: 'Role in the production cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Transplanting bridges nursery production and field establishment, and its timing and accuracy affect how quickly and uniformly a crop establishes after the stress of the move from nursery to field. For paddy rice, mechanical transplanters have significantly reduced the labour burden of an operation historically done by hand, while for vegetable crops, transplanters support consistent spacing and stand establishment at commercial scale.',
        },
        {
          type: 'paragraph',
          text: 'Seedlings used for transplanting are frequently raised under protected nursery or greenhouse conditions before being hardened off and moved to the transplanter for field setting, linking transplanting operations closely to nursery management practices.',
        },
      ],
    },
    {
      id: 'types-and-variations',
      heading: 'Types and variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Rice (paddy) transplanter',
              description:
                'Walk-behind or ride-on machines designed to set rice seedling mats into flooded or puddled paddy soil in rows.',
            },
            {
              term: 'Vegetable transplanter',
              description:
                'Ride-on or tractor-mounted units that place plug-tray seedlings such as tomato or cabbage into open field beds.',
            },
            {
              term: 'Semi-automatic transplanter',
              description:
                'Requires an operator to manually feed individual seedlings while the machine handles placement and depth.',
            },
          ],
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Seedling age, root-ball or mat uniformity, and moisture at the time of transplanting strongly affect how well seedlings survive the move and establish in the field, and field conditions — puddled water depth for rice, or soil tilth for vegetables — must suit the specific transplanter design.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Optimal seedling age, spacing, and field conditions for transplanting are crop- and region-specific; nursery and agronomic guidance should inform these decisions rather than a fixed rule.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'planter' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  geographicScope:
    'General overview of transplanters as used in rice and vegetable establishment worldwide. Machine scale and design vary by crop and region.',
  limitations: [
    'This entry describes transplanter function and types in general terms; it does not specify seedling ages or spacings, which are crop- and region-specific.',
    'Seedling survival and establishment also depend on nursery practices and field conditions not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Mechanical transplanting principles',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Transplant establishment research context',
    },
    { sourceId: 'ahdb', citedFor: 'Vegetable transplanting guidance context' },
    {
      sourceId: 'fao',
      citedFor:
        'Role of transplanting in rice and vegetable production systems',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Transplanter',
    description:
      'Transplanters explained: how nursery-raised seedlings are picked and set into the field, their role in rice and vegetable production, and machine types.',
    keywords: [
      'transplanter',
      'rice transplanter',
      'vegetable transplanting',
      'seedling establishment',
    ],
  },
  structuredData: { article: true },
};
