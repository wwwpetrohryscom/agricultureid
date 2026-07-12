import type { ClimateContent } from '@/types/content';

export const monsoon: ClimateContent = {
  id: 'climate-monsoon',
  slug: 'monsoon',
  contentType: 'climate',
  title: 'Monsoon',
  climateClass: 'water',
  alternativeNames: ['Monsoon season', 'Monsoon climate'],
  category: 'Climate factor',
  subcategory: 'Seasonal rainfall pattern',
  summary:
    'A monsoon is a seasonal reversal of prevailing winds that brings a pronounced wet season to large parts of South and Southeast Asia, West Africa, and other regions, followed by a markedly drier season, shaping cropping calendars across those areas.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Monsoon systems arise from large-scale seasonal reversals of prevailing winds, driven by differential heating between land and ocean, which bring moisture-laden air onshore during the wet monsoon and drier continental or offshore air during the dry season. Regional monsoon systems, such as the South Asian summer monsoon and the West African monsoon, differ in timing, duration, and reliability.',
    },
    {
      type: 'paragraph',
      text: 'Monsoon onset, duration, and total rainfall directly shape planting windows for major staple crops, such as rice, in monsoon-dependent regions. A late or unusually weak monsoon can significantly affect a growing season, while an unusually strong one can bring its own risks, such as flooding or waterlogging.',
    },
  ],
  keyFacts: [
    {
      label: 'Core definition',
      value:
        'A large-scale seasonal reversal of prevailing winds that brings a pronounced wet season followed by a drier season',
    },
    {
      label: 'Key regions',
      value:
        'South Asia, Southeast Asia, and West Africa are among the regions most associated with monsoon climates',
    },
    {
      label: 'Agricultural relevance',
      value:
        'Monsoon onset and rainfall amount directly shape planting windows for monsoon-dependent staple crops',
    },
    {
      label: 'Variability',
      value:
        'Onset timing, duration, and total rainfall vary considerably from year to year',
    },
    {
      label: 'Common crop response',
      value:
        'Cropping calendars in monsoon regions are typically built around expected wet-season timing',
    },
    {
      label: 'Monitoring',
      value:
        'National meteorological agencies track monsoon onset and progress each season using rainfall and wind observations',
    },
  ],
  sections: [
    {
      id: 'what-a-monsoon-is',
      heading: 'What a monsoon is',
      body: [
        {
          type: 'paragraph',
          text: 'A monsoon is characterized by a seasonal reversal of wind direction that brings a wet season with substantially more rainfall than the rest of the year, followed by a distinctly drier season.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Monsoon onset',
              description:
                'The point in the season when the wind reversal establishes and sustained rainfall begins.',
            },
            {
              term: 'Monsoon withdrawal',
              description:
                'The point when winds and rainfall shift back toward the dry-season pattern.',
            },
            {
              term: 'Monsoon trough',
              description:
                'A band of low pressure associated with concentrated rainfall during an active monsoon.',
            },
          ],
        },
      ],
    },
    {
      id: 'regional-monsoon-systems',
      heading: 'Regional monsoon systems',
      body: [
        {
          type: 'list',
          items: [
            'South Asian summer monsoon — brings the bulk of annual rainfall to much of the Indian subcontinent',
            'East Asian monsoon — affects rainfall patterns across parts of East Asia with a distinct seasonal wind shift',
            'West African monsoon — drives the wet season across the Sahel and adjacent regions',
            'Australian monsoon — brings a wet season to northern Australia in the austral summer',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters-for-agriculture',
      heading: 'Why it matters for agriculture',
      body: [
        {
          type: 'paragraph',
          text: 'Rice and other staple crop calendars in monsoon-dependent regions are typically built around the expected timing of monsoon rainfall. A delayed or weak monsoon can shorten the effective growing window or increase reliance on irrigation to bridge the gap, while heavy monsoon rainfall can bring flooding or waterlogging risk to low-lying fields.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The strength and timing of a monsoon in any given year cannot be predicted with precision far in advance; seasonal outlooks describe likelihoods, not certainties.',
        },
      ],
    },
    {
      id: 'variability-and-risk',
      heading: 'Variability and risk',
      body: [
        {
          type: 'paragraph',
          text: 'Year-to-year variability in monsoon onset and total rainfall is a major source of agricultural risk in monsoon-dependent regions. Weak or delayed monsoon years raise drought risk, while unusually strong or prolonged monsoon rainfall raises flooding and waterlogging risk.',
        },
      ],
    },
    {
      id: 'managing-monsoon-variability',
      heading: 'Managing monsoon variability',
      body: [
        {
          type: 'list',
          items: [
            'Irrigation to bridge dry spells within the monsoon season',
            'Rainwater harvesting to store surplus monsoon rainfall for later use',
            'Flexible planting windows or shorter-duration crop varieties',
            'Field drainage to manage waterlogging risk in heavy monsoon years',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'el-nino-la-nina' },
    { type: 'climate', slug: 'growing-season' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'irrigation-method', slug: 'rainwater-harvesting' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  geographicScope:
    'Most relevant to South and Southeast Asia, West Africa, and other regions with a defined monsoon climate; timing and reliability differ by regional monsoon system.',
  limitations: [
    "This entry describes monsoon systems in general terms; it does not forecast a specific season's onset or rainfall.",
    'No region-specific dates, rainfall totals, or thresholds are given, since these vary by regional monsoon system and by year.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Monsoon classification and seasonal monitoring standards',
    },
    { sourceId: 'noaa', citedFor: 'Monsoon and seasonal climate monitoring' },
    {
      sourceId: 'fao',
      citedFor: 'Monsoon-dependent cropping calendars and agricultural risk',
    },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Water availability and irrigation context in monsoon regions',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Monsoon',
    description:
      'Monsoon explained: how seasonal wind reversals bring pronounced wet and dry seasons, and why onset timing and rainfall variability matter for cropping.',
    keywords: [
      'monsoon',
      'monsoon season',
      'seasonal rainfall',
      'monsoon agriculture',
    ],
  },
  structuredData: { article: true },
};
