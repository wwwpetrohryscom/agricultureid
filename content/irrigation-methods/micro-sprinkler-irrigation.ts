import type { IrrigationMethodContent } from '@/types/content';

export const microSprinklerIrrigation: IrrigationMethodContent = {
  id: 'irrigation-micro-sprinkler-irrigation',
  slug: 'micro-sprinkler-irrigation',
  contentType: 'irrigation-method',
  title: 'Micro-Sprinkler Irrigation',
  methodClass: 'localized',
  alternativeNames: ['Micro-jet irrigation', 'Micro-spray irrigation'],
  category: 'Irrigation method',
  subcategory: 'Localized irrigation',
  summary:
    'Micro-sprinkler irrigation applies water through small, low-pressure sprinkler or spray heads set close to the crop, wetting a limited area around each plant or a strip along the row rather than the whole field surface.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Micro-sprinkler systems use small emitters mounted on stakes or risers that spray water over a partial- to full-circle pattern at low pressure and flow, wetting a defined area around each plant. They are commonly used as an alternative to drip in orchard and vineyard row crops, where a wider wetted area or additional benefits such as frost or heat mitigation are wanted.',
    },
    {
      type: 'paragraph',
      text: 'Micro-sprinkler irrigation differs from drip irrigation in wetting a surface area through spray rather than delivering water at a fixed point, and it differs from conventional sprinkler irrigation in its much smaller wetted radius, lower flow rate, and lower operating pressure aimed at each plant rather than the whole field.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Localized irrigation' },
    {
      label: 'Core components',
      value:
        'Small sprinkler or spray emitters on risers or stakes, laterals, and a filtered, often pressure-regulated supply line',
    },
    {
      label: 'Typical wetting pattern',
      value:
        'Partial- to full-circle spray wetting a defined area around each plant or along a row',
    },
    {
      label: 'Common crops',
      value:
        'Orchard and vineyard crops and other widely spaced perennial plantings',
    },
    {
      label: 'Additional uses',
      value:
        'Some systems are also used for frost protection or evaporative cooling in orchards',
    },
    {
      label: 'Key requirement',
      value:
        'Filtration and pressure regulation to maintain uniform emitter output',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Water is filtered and pressure-regulated before entering the distribution network',
            'A mainline and laterals carry water to individual field sections',
            'Micro-sprinkler heads mounted on risers or stakes are positioned near each tree or plant',
            'Each head sprays water over a defined radius rather than a single point',
            'Soluble fertilizer can be injected into the system (fertigation) alongside irrigation',
          ],
        },
      ],
    },
    {
      id: 'where-it-suits',
      heading: 'Where it suits',
      body: [
        {
          type: 'paragraph',
          text: 'Micro-sprinkler irrigation suits orchard and vineyard crops and other widely spaced perennial plantings, including situations where a larger wetted radius aids the root development of newly established trees.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'It is less common in closely spaced row crops, where drip tape systems are typically more practical.',
        },
      ],
    },
    {
      id: 'comparison-with-related-methods',
      heading: 'Comparison with related methods',
      body: [
        {
          type: 'table',
          caption:
            'Wetted area and typical use by localized/pressurized method',
          columns: ['Method', 'Typical wetted area', 'Typical use'],
          rows: [
            [
              'Drip irrigation',
              'Point-source, near the root zone',
              'Row and orchard crops needing precise per-plant delivery',
            ],
            [
              'Micro-sprinkler irrigation',
              'Partial- to full-circle spray around the plant',
              'Orchard and vineyard crops, sometimes frost or heat mitigation',
            ],
            [
              'Sprinkler irrigation',
              'Whole field or large sections',
              'Broadacre and closely spaced field crops',
            ],
          ],
        },
      ],
    },
    {
      id: 'efficiency-and-management',
      heading: 'Efficiency and management',
      body: [
        {
          type: 'paragraph',
          text: "Because water is sprayed over a wider surface than a drip emitter's point delivery, micro-sprinkler application efficiency is generally somewhat lower than point-source drip, with more surface exposed to evaporation, but it remains higher than full-field sprinkler methods. Matching output to crop water demand through scheduling is still necessary to realize efficiency gains.",
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'As with drip systems, filtration and periodic maintenance are needed to prevent emitter clogging from sediment or mineral precipitates.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Design and rates are site-specific',
          text: 'Emitter spacing, flow rate, and operating pressure must be matched to the crop, soil, and water quality; AgricultureID does not publish universal micro-sprinkler design specifications.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  connections: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'olive' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'Used across orchard and vineyard production worldwide; suitability and design depend on local water quality, crop spacing, and climate.',
  climateContext:
    'Some micro-sprinkler systems are used for frost protection or evaporative cooling in orchards, in addition to routine irrigation.',
  limitations: [
    'This entry describes general function and use, not specific emitter spacing, flow, or pressure specifications.',
    'Efficiency depends on matching output to crop water demand through proper scheduling.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Micro-irrigation principles and crop water use',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Micro-irrigation system design and maintenance context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Irrigation management context for horticultural crops',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of localized irrigation in water-use efficiency',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Micro-Sprinkler Irrigation',
    description:
      'Micro-sprinkler irrigation explained: how low-pressure spray emitters wet a defined zone around orchard and vineyard crops, and where it fits.',
    keywords: [
      'micro-sprinkler irrigation',
      'micro-irrigation',
      'orchard irrigation',
      'localized irrigation',
    ],
  },
  structuredData: { article: true },
};
