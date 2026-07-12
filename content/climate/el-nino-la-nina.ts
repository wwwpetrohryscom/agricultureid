import type { ClimateContent } from '@/types/content';

export const elNinoLaNina: ClimateContent = {
  id: 'climate-el-nino-la-nina',
  slug: 'el-nino-la-nina',
  contentType: 'climate',
  title: 'El Niño–La Niña',
  climateClass: 'metric',
  alternativeNames: ['ENSO', 'El Niño-Southern Oscillation', 'La Niña'],
  category: 'Climate factor',
  subcategory: 'Ocean-atmosphere pattern',
  summary:
    'El Niño and La Niña are opposite phases of a recurring ocean-atmosphere pattern in the tropical Pacific, the El Niño-Southern Oscillation, that shifts rainfall and temperature patterns across many world regions on a multi-month to multi-year cycle, with effects that vary substantially by location.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The El Niño-Southern Oscillation (ENSO) describes a recurring variation in sea-surface temperature and atmospheric pressure across the tropical Pacific, oscillating between a warm phase (El Niño), a cool phase (La Niña), and a roughly neutral state in between. Climate agencies track ENSO status using sea-surface temperature indices and atmospheric pressure differences.',
    },
    {
      type: 'paragraph',
      text: 'ENSO phase is associated with shifted odds of wetter or drier, and warmer or cooler, conditions in particular regions, such as parts of the Americas, Australia, Southeast Asia, and southern Africa. The specific regional effect, and its strength, differ by region and by individual event: ENSO influences probabilities and tendencies rather than guaranteeing a particular outcome in any given season.',
    },
  ],
  keyFacts: [
    {
      label: 'Core definition',
      value:
        'A recurring warm (El Niño) and cool (La Niña) oscillation in tropical Pacific sea-surface temperature and atmospheric pressure',
    },
    {
      label: 'Cycle',
      value:
        'Events typically develop and persist over roughly nine months to two years, with irregular timing between events',
    },
    {
      label: 'Tracking',
      value:
        'Monitored via sea-surface temperature indices and atmospheric pressure differences by national and international meteorological agencies',
    },
    {
      label: 'Agricultural relevance',
      value:
        'Associated with shifted odds of wetter, drier, warmer, or cooler conditions in specific regions, not a guaranteed outcome',
    },
    {
      label: 'Regional variation',
      value:
        'The direction and strength of typical effects differ by region and by individual event',
    },
    {
      label: 'Neutral phase',
      value:
        'Conditions are not always clearly in an El Niño or La Niña phase; a neutral state also occurs',
    },
  ],
  sections: [
    {
      id: 'what-el-nino-and-la-nina-are',
      heading: 'What El Niño and La Niña are',
      body: [
        {
          type: 'paragraph',
          text: 'El Niño and La Niña are opposite phases of the same underlying ocean-atmosphere oscillation in the tropical Pacific, distinguished by warmer or cooler than average sea-surface temperatures and corresponding shifts in atmospheric pressure and circulation.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'El Niño',
              description:
                'The warm phase of ENSO, associated with above-average sea-surface temperatures in parts of the tropical Pacific.',
            },
            {
              term: 'La Niña',
              description:
                'The cool phase of ENSO, associated with below-average sea-surface temperatures in the same region.',
            },
            {
              term: 'ENSO-neutral',
              description:
                'A state in which sea-surface temperatures and atmospheric conditions are near their long-term average, without a clear El Niño or La Niña signal.',
            },
          ],
        },
      ],
    },
    {
      id: 'how-it-is-tracked',
      heading: 'How it is tracked',
      body: [
        {
          type: 'paragraph',
          text: 'Meteorological and oceanographic agencies track ENSO using sea-surface temperature indices calculated for defined regions of the tropical Pacific, combined with atmospheric pressure differences between the eastern and western Pacific. These observations are supplemented by periodic model-based outlooks issued by national and international climate agencies.',
        },
      ],
    },
    {
      id: 'typical-regional-associations',
      heading: 'Typical regional associations',
      body: [
        {
          type: 'table',
          caption:
            'General tendencies associated with ENSO phase (not certainties)',
          columns: ['Region (general)', 'Commonly associated tendency'],
          rows: [
            [
              'Parts of the southern United States and South America',
              'Tendency toward wetter conditions during some El Niño events',
            ],
            [
              'Parts of Australia and Southeast Asia',
              'Tendency toward drier conditions during some El Niño events',
            ],
            [
              'Same regions during La Niña',
              'Often broadly opposite tendencies to El Niño, though not a mirror image in every case',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'These are general tendencies drawn from historical patterns, not certainties for any specific season or location.',
        },
      ],
    },
    {
      id: 'why-farmers-and-agencies-monitor-it',
      heading: 'Why farmers and agencies monitor it',
      body: [
        {
          type: 'paragraph',
          text: 'Seasonal outlooks that reference ENSO phase can inform agricultural risk planning, such as variety choice, planting timing, or water storage decisions. These outlooks describe shifted probabilities of certain conditions, not certain outcomes, and should be treated accordingly.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This entry does not provide the current ENSO status or a forecast for any upcoming season.',
        },
      ],
    },
    {
      id: 'limitations-of-enso-based-outlooks',
      heading: 'Limitations of ENSO-based outlooks',
      body: [
        {
          type: 'list',
          items: [
            'Regional effects vary by event and are not identical from one El Niño or La Niña to the next',
            "Other climate drivers besides ENSO also influence any given season's weather",
            'Neutral periods and weak events tend to have less predictable regional effects',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'rainfall' },
  ],
  connections: [
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'coffee' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  geographicScope:
    'A global ocean-atmosphere pattern with regionally specific effects; this entry does not provide region-specific forecasts or the current ENSO status.',
  limitations: [
    'This is a general explainer, not a seasonal forecast or current ENSO status update.',
    'Regional effects vary by event and are expressed as shifted probabilities, not certainties.',
  ],
  sourceReferences: [
    {
      sourceId: 'noaa',
      citedFor: 'ENSO monitoring, indices, and climate outlooks',
    },
    {
      sourceId: 'wmo',
      citedFor:
        'ENSO classification and international climate monitoring standards',
    },
    {
      sourceId: 'fao',
      citedFor: 'ENSO-related agricultural risk and seasonal planning context',
    },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Rainfall variability and water availability context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'El Niño–La Niña',
    description:
      'El Niño and La Niña explained: the tropical Pacific ocean-atmosphere cycle, how it is tracked, and why its regional effects are tendencies, not certainties.',
    keywords: ['el nino', 'la nina', 'enso', 'climate pattern'],
  },
  structuredData: { article: true },
};
