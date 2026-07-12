import type { IrrigationMethodContent } from '@/types/content';

export const rainwaterHarvesting: IrrigationMethodContent = {
  id: 'irrigation-rainwater-harvesting',
  slug: 'rainwater-harvesting',
  contentType: 'irrigation-method',
  title: 'Rainwater Harvesting',
  methodClass: 'management',
  alternativeNames: ['Rainwater catchment', 'Water harvesting'],
  category: 'Irrigation method',
  subcategory: 'Water management strategy',
  summary:
    'Rainwater harvesting captures and stores rainfall or runoff — from field surfaces, catchment areas, or rooftops — in ponds, tanks, or soil-based structures for later use in irrigation, supplementing or extending other water sources.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rainwater harvesting spans a range of techniques, from simple in-field structures such as contour bunds and small check dams that capture runoff, to farm ponds and reservoirs, to rooftop or surface catchment systems feeding storage tanks. The shared purpose is capturing water during wet periods for use during dry spells or to supplement other irrigation sources.',
    },
    {
      type: 'paragraph',
      text: 'It is particularly valued in regions with pronounced wet and dry seasonality, such as monsoon climates, or where access to groundwater or canal irrigation is limited. Storage capacity, evaporation losses, and construction or maintenance costs constrain how much water can practically be captured and held.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Capturing and storing rainfall or runoff for later agricultural use rather than relying solely on direct rainfall or other water sources',
    },
    {
      label: 'Common techniques',
      value:
        'Farm ponds, check dams, contour trenches or bunds, and rooftop or surface catchment systems feeding storage tanks',
    },
    {
      label: 'Common context',
      value:
        'Regions with strongly seasonal rainfall, such as monsoon climates, or limited access to groundwater or canal irrigation',
    },
    {
      label: 'Storage considerations',
      value:
        'Effectiveness depends on catchment area, storage capacity, and evaporation or seepage losses',
    },
    {
      label: 'Use in practice',
      value:
        'Stored water is typically used to supplement irrigation during dry spells rather than fully replace other sources',
    },
    {
      label: 'Scale',
      value:
        'Ranges from small on-farm structures to community-scale reservoirs',
    },
  ],
  sections: [
    {
      id: 'common-techniques',
      heading: 'Common techniques',
      body: [
        {
          type: 'list',
          items: [
            'Farm ponds and small reservoirs that collect and store runoff',
            'Check dams and percolation tanks that slow runoff and encourage groundwater recharge',
            'Contour bunds and trenches that slow and capture surface runoff on sloped land',
            'Rooftop or surface catchment systems feeding storage tanks',
          ],
        },
        {
          type: 'paragraph',
          text: 'The appropriate technique depends on the catchment available, terrain, and the scale of storage needed for the intended use.',
        },
      ],
    },
    {
      id: 'why-it-is-used',
      heading: 'Why it is used',
      body: [
        {
          type: 'paragraph',
          text: 'Rainwater harvesting can bridge short dry spells within a wet season, extend water availability into the dry season, reduce dependence on groundwater pumping, and buffer some of the variability in seasonal rainfall.',
        },
      ],
    },
    {
      id: 'design-and-storage-considerations',
      heading: 'Design and storage considerations',
      body: [
        {
          type: 'table',
          caption: 'Key factors affecting rainwater harvesting performance',
          columns: ['Factor', 'Why it matters'],
          rows: [
            [
              'Catchment area and rainfall pattern',
              'Determines the potential volume of water that can be captured',
            ],
            [
              'Storage capacity',
              'Limits how much water can be held between rain events',
            ],
            [
              'Evaporation and seepage',
              'Reduce the effective stored volume over time',
            ],
            [
              'Water quality',
              'Affects suitability of stored water for irrigation versus other uses',
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
            'Can extend water availability into dry periods within or after the rainy season',
            'Reduces reliance on groundwater pumping or external water supplies',
            'Can be implemented at a range of scales, from small farm structures to community reservoirs',
          ],
        },
        {
          type: 'list',
          items: [
            'Does not create new water; it redistributes captured rainfall in time',
            'Construction and maintenance require investment and ongoing upkeep',
            'Storage volume is limited by catchment area, structure size, and evaporation or seepage losses',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry gives no universal capacity or yield figures; how much water can be harvested depends entirely on local rainfall, catchment, and storage design.',
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where rainwater harvesting is used',
      body: [
        {
          type: 'paragraph',
          text: 'Rainwater harvesting is practiced across smallholder and larger farming systems in seasonal-rainfall and water-scarce regions worldwide, often alongside other irrigation methods rather than as the sole water source.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'drought' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'crop', slug: 'sorghum' },
  ],
  geographicScope:
    'Practiced worldwide, especially in regions with strongly seasonal rainfall or limited groundwater or canal access; specific techniques and storage scale depend on local rainfall and terrain.',
  climateContext:
    'Most valuable in climates with pronounced wet and dry seasons, such as monsoon regions, where captured wet-season water can extend availability into drier months.',
  limitations: [
    'Rainwater harvesting redistributes captured rainfall rather than adding new water to a region.',
    'Storage capacity, evaporation, and seepage limit how much can practically be held; no universal capacity or yield figures are given.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Rainwater harvesting techniques and water-management context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Water harvesting in smallholder and rainfed farming systems',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Farm pond and water-storage structure guidance',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'On-farm water storage and irrigation supply context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rainwater Harvesting',
    description:
      'Rainwater harvesting explained: capturing and storing rainfall or runoff in ponds, check dams, and tanks to supplement irrigation between rains.',
    keywords: [
      'rainwater harvesting',
      'water harvesting',
      'farm ponds',
      'irrigation water management',
    ],
  },
  structuredData: { article: true },
};
