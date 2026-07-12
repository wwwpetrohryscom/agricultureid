import type { IrrigationMethodContent } from '@/types/content';

export const deficitIrrigation: IrrigationMethodContent = {
  id: 'irrigation-deficit-irrigation',
  slug: 'deficit-irrigation',
  contentType: 'irrigation-method',
  title: 'Deficit Irrigation',
  methodClass: 'management',
  alternativeNames: ['Regulated deficit irrigation'],
  category: 'Irrigation method',
  subcategory: 'Water management strategy',
  summary:
    "Deficit irrigation is a deliberate water-management strategy that applies less water than a crop's full water requirement at defined growth stages, accepting some water stress in exchange for water savings or, for some crops, quality effects.",
  introduction: [
    {
      type: 'paragraph',
      text: "Deficit irrigation is planned rather than accidental: irrigation is deliberately reduced below the crop's estimated full water requirement, typically timed to growth stages where the crop is relatively less sensitive to water stress, while critical stages such as flowering or early fruit set generally still receive fuller irrigation.",
    },
    {
      type: 'paragraph',
      text: 'It is most often discussed for perennial fruit and wine-grape production, where controlled water stress can affect fruit characteristics, and in water-scarce regions where fully irrigating every crop on a farm is not feasible. Effective deficit levels and timing are crop- and cultivar-specific, and are typically determined through local trials rather than a universal formula.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Deliberate, planned application of less than full crop water requirement at selected growth stages',
    },
    {
      label: 'Core principle',
      value:
        'Deficits are typically timed to growth stages less sensitive to water stress; critical stages usually still receive fuller irrigation',
    },
    {
      label: 'Distinguishing from drought',
      value: 'A planned management strategy, not an unplanned water shortage',
    },
    {
      label: 'Common application',
      value:
        'Perennial fruit and wine-grape production, and water-scarce regions managing limited supply across a farm',
    },
    {
      label: 'Monitoring inputs',
      value:
        'Often guided by evapotranspiration estimates, soil-moisture monitoring, or plant-based water-status indicators',
    },
    {
      label: 'Risk',
      value:
        'Applying too great a deficit or at the wrong stage can reduce yield or quality rather than improve outcomes',
    },
  ],
  sections: [
    {
      id: 'what-deficit-irrigation-is',
      heading: 'What deficit irrigation is',
      body: [
        {
          type: 'paragraph',
          text: 'Deficit irrigation applies a known, deliberate shortfall relative to estimated crop water requirement, rather than irrigating to fully replace all water used by the crop.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Deficit irrigation',
              description:
                'Deliberately applying less water than the estimated full crop water requirement.',
            },
            {
              term: 'Regulated deficit irrigation',
              description:
                'A form of deficit irrigation timed specifically to growth stages less sensitive to water stress.',
            },
            {
              term: 'Crop water requirement',
              description:
                'The estimated volume of water a crop needs over a period to meet its evapotranspiration demand.',
            },
          ],
        },
      ],
    },
    {
      id: 'how-it-is-applied',
      heading: 'How it is applied',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Identify growth stages that are relatively tolerant of water stress',
            "Estimate the crop's full water use for the season, typically from evapotranspiration data",
            'Apply a reduced volume during the targeted stress-tolerant stage',
            'Monitor plant or soil moisture response to the reduced irrigation',
            'Resume fuller irrigation at critical growth stages, such as flowering or fruit set',
          ],
        },
      ],
    },
    {
      id: 'where-it-is-used',
      heading: 'Where it is used',
      body: [
        {
          type: 'paragraph',
          text: 'Deficit irrigation is used in wine-grape production to manage vine vigor and fruit characteristics, in some orchard crops, and in water-scarce irrigation districts where allocating limited water across a whole farm requires trade-offs between crops or fields.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Appropriate deficit levels and timing are crop- and cultivar-specific; this entry does not provide universal targets.',
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
            'Can reduce total irrigation water use compared with fully meeting crop water demand',
            'For some wine-grape and orchard crops, controlled stress can influence fruit characteristics valued in certain markets',
            'Provides a structured way to allocate limited water across multiple crops or fields',
          ],
        },
        {
          type: 'list',
          items: [
            'Requires accurate knowledge of crop growth stages and their relative sensitivity to water stress',
            'Poorly timed or excessive deficits can reduce yield or quality rather than improve outcomes',
            'Determining appropriate deficit levels typically requires local trial data rather than a universal formula',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'No universal deficit percentage or timing is given here; appropriate targets depend on crop, cultivar, soil, and climate.',
        },
      ],
    },
    {
      id: 'monitoring-and-decision-tools',
      heading: 'Monitoring and decision tools',
      body: [
        {
          type: 'paragraph',
          text: "Deficit irrigation decisions are commonly informed by evapotranspiration-based scheduling, soil-moisture sensors, and, in some systems, plant-based water-status indicators, combined with knowledge of the crop's growth-stage sensitivity to water stress.",
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'fertigation' },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'olive' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  glossaryTerms: ['evapotranspiration', 'yield'],
  geographicScope:
    'Applied in water-scarce and irrigated perennial-crop regions worldwide; specific deficit levels and timing are crop-, cultivar-, and region-specific.',
  climateContext:
    'Deficit irrigation is most often discussed in dry or seasonally water-limited climates, where irrigation supply constraints make full crop water replacement impractical for every field.',
  limitations: [
    'No universal deficit percentage or timing is given, since appropriate targets depend on crop, cultivar, soil, and climate.',
    'Poorly timed deficits can reduce yield or quality rather than provide a benefit.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor:
        'Deficit irrigation principles and crop water-stress management',
    },
    {
      sourceId: 'fao',
      citedFor: 'Crop water requirement and scheduling context',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Irrigation management guidance for horticultural and orchard crops',
    },
    { sourceId: 'usda-nrcs', citedFor: 'Irrigation water management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Deficit Irrigation',
    description:
      'Deficit irrigation explained: applying less than full crop water needs at selected growth stages, common uses, and its risks if mistimed.',
    keywords: [
      'deficit irrigation',
      'regulated deficit irrigation',
      'water management',
      'irrigation scheduling',
    ],
  },
  structuredData: { article: true },
};
