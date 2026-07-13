import type { ClimateContent } from '@/types/content';

export const photoperiod: ClimateContent = {
  id: 'climate-photoperiod',
  slug: 'photoperiod',
  contentType: 'climate',
  title: 'Photoperiod',
  alternativeNames: ['Day length', 'Daylength'],
  category: 'Climate metric',
  subcategory: 'Light and development',
  climateClass: 'metric',
  summary:
    'Photoperiod is the length of the daily light period, which varies with latitude and season and acts as a reliable environmental signal that many crops use to time flowering and other developmental changes through a response called photoperiodism.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Photoperiod is the duration of light in the daily cycle — in practice, the day length experienced at a location, which changes through the year and with distance from the equator. Because this change is astronomically fixed and highly predictable, plants have evolved to use it as a dependable cue for timing developmental events, above all the switch from vegetative growth to flowering.',
    },
    {
      type: 'paragraph',
      text: 'The developmental response of plants to day length is called photoperiodism. Crops are broadly grouped as short-day plants, which tend to flower as days shorten; long-day plants, which tend to flower as days lengthen; and day-neutral plants, whose flowering is largely independent of day length. This sensitivity is why the same variety can behave very differently when moved to a different latitude.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value: 'The length of the daily light period (day length)',
    },
    {
      label: 'What drives it',
      value:
        'Latitude and time of year, following predictable astronomical patterns',
    },
    {
      label: 'Plant response',
      value:
        'Photoperiodism — using day length to time flowering and other changes',
    },
    {
      label: 'Response groups',
      value: 'Short-day, long-day, and day-neutral plants',
    },
    {
      label: 'Practical importance',
      value:
        'Determines whether a variety flowers appropriately at a given latitude',
    },
    {
      label: 'Related but distinct',
      value: 'Separate from temperature-driven cues such as vernalization',
    },
  ],
  sections: [
    {
      id: 'what-photoperiod-is',
      heading: 'What photoperiod is',
      body: [
        {
          type: 'paragraph',
          text: 'Photoperiod refers to how much of each 24-hour cycle is light. It lengthens toward summer and shortens toward winter, and the size of that seasonal swing grows with latitude, so day length is a signal that encodes both the time of year and, indirectly, the location. Plants sense day length through the balance of light and darkness and translate it into developmental decisions.',
        },
        {
          type: 'paragraph',
          text: 'Physiologically, many photoperiodic responses depend more on the length of the uninterrupted dark period than on light alone, which is why a brief interruption of the night can alter a plant’s response. For practical agronomy, however, day length is the usual working description.',
        },
      ],
    },
    {
      id: 'how-crops-respond',
      heading: 'How crops respond',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Short-day plants',
              description:
                'Tend to flower when day length is below a critical value, associated with the shortening days of late summer and autumn; examples include many rice and soybean types.',
            },
            {
              term: 'Long-day plants',
              description:
                'Tend to flower when day length exceeds a critical value, associated with the long days of late spring and summer; examples include many temperate cereals and some vegetables.',
            },
            {
              term: 'Day-neutral plants',
              description:
                'Flower largely in response to other cues such as age or temperature, with little direct dependence on day length.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'These categories are simplifications: sensitivity varies by species and variety, and photoperiod usually interacts with temperature and plant development rather than acting alone.',
        },
      ],
    },
    {
      id: 'why-it-matters-in-agriculture',
      heading: 'Why it matters in agriculture',
      body: [
        {
          type: 'paragraph',
          text: 'Photoperiod sensitivity governs whether a crop variety flowers at an appropriate time in a given location. A variety adapted to one latitude may flower too early or too late — or fail to flower properly — if grown where day lengths differ, which is a central consideration when moving varieties between regions or breeding for new areas. In protected cropping, day length can also be manipulated with artificial lighting or shading to control flowering in some ornamental and horticultural crops.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because varieties differ in their photoperiod requirements, matching a variety to the day-length regime of the intended growing region is important; a variety suited to one latitude is not automatically suited to another.',
        },
      ],
    },
    {
      id: 'limitations-and-considerations',
      heading: 'Limitations and considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Photoperiod is only one of several signals controlling development, working together with temperature, accumulated heat, and the plant’s own developmental stage. This entry describes the concept and general response categories; the critical day lengths and sensitivities that matter for a particular crop are variety-specific and determined through research rather than given here.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'temperature' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  glossaryTerms: ['cultivar', 'agronomy'],
  geographicScope:
    'A general explanation of photoperiod and photoperiodism. Day length varies with latitude and season, and crop responses to it are variety-specific rather than universal.',
  climateContext:
    'Photoperiod is an astronomical rather than weather-driven factor, but it interacts closely with temperature and season in determining crop development.',
  limitations: [
    'This entry explains the photoperiod concept and response categories; it does not give critical day lengths or sensitivities for specific crops, which are variety-specific.',
    'Photoperiod acts together with temperature and development, and the short-day / long-day / day-neutral grouping is a simplification.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Crop adaptation and photoperiod sensitivity context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Research on photoperiodism and crop flowering',
    },
    { sourceId: 'noaa', citedFor: 'Day-length and seasonal solar patterns' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Photoperiod (Day Length)',
    description:
      'Photoperiod explained: how day length signals flowering through photoperiodism, the short-day/long-day/day-neutral groups, and why latitude matters.',
    keywords: [
      'photoperiod',
      'day length',
      'photoperiodism',
      'short-day plants',
    ],
  },
  structuredData: { article: true },
};
