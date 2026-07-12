import type { ClimateContent } from '@/types/content';

export const growingSeason: ClimateContent = {
  id: 'climate-growing-season',
  slug: 'growing-season',
  contentType: 'climate',
  title: 'Growing Season',
  alternativeNames: ['Frost-free period', 'Vegetative period'],
  category: 'Climate metric',
  subcategory: 'Seasonal concept',
  climateClass: 'metric',
  summary:
    'The growing season is the period within a year when temperature, moisture, and daylight conditions allow crop growth. It is commonly defined by the frost-free period in temperate regions and by rainfall onset and cessation in tropical and dryland climates, and its length shapes which crops and how many cropping cycles are possible.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The growing season describes the portion of the year during which conditions are suitable for crop growth, but what actually defines its start and end differs by climate and crop. In temperate regions, the growing season is often approximated as the frost-free period between the last spring frost and the first autumn frost. In tropical and dryland regions, where frost is rare or absent, the growing season is more often defined by the onset and end of the rainy season, since moisture rather than temperature is usually the limiting factor. At high latitudes or elevations, day length and cumulative warmth can also constrain the effective growing period.',
    },
    {
      type: 'paragraph',
      text: 'Because the growing season combines several underlying factors — temperature, moisture, and day length — its length and reliability vary not only by location but from year to year, and can be extended in practice through irrigation, in moisture-limited regions, or protected cultivation such as greenhouses and high tunnels, in temperature-limited regions.',
    },
  ],
  keyFacts: [
    {
      label: 'Core concept',
      value:
        'The period when temperature, moisture, and daylight allow crop growth',
    },
    {
      label: 'Temperate definition',
      value:
        'Commonly approximated as the frost-free period (last spring frost to first autumn frost)',
    },
    {
      label: 'Tropical/dryland definition',
      value:
        'Commonly defined by rainy-season onset and cessation rather than frost',
    },
    {
      label: 'Practical significance',
      value:
        'Determines viable crops, cultivar maturity-length choice, and the number of possible cropping cycles per year',
    },
    {
      label: 'Extension methods',
      value:
        'Irrigation (moisture-limited regions) and protected cultivation (temperature-limited regions)',
    },
    {
      label: 'Variability',
      value:
        'Length and reliability vary by latitude, elevation, and year-to-year climate variation',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What the growing season is',
      body: [
        {
          type: 'paragraph',
          text: 'There is no single global definition of the growing season; it is defined relative to whichever factor is most limiting locally. In frost-prone temperate climates, that factor is usually temperature, so the frost-free period is the standard proxy. In many tropical and dryland climates, frost rarely or never occurs, so rainfall onset and cessation define the practical growing window instead.',
        },
      ],
    },
    {
      id: 'how-it-is-measured',
      heading: 'How it is measured',
      body: [
        {
          type: 'paragraph',
          text: 'In temperate regions, meteorological services track historical first- and last-frost dates from long-term weather records to estimate the typical frost-free period, and some approaches instead use sustained temperature thresholds or accumulated growing degree days to mark the start and end of the active growth period. In tropical and dryland regions, growing-season length is more often assessed from rainfall onset and cessation, using rain-gauge records and, increasingly, satellite rainfall estimates.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-crops',
      heading: 'Why it matters for crops',
      body: [
        {
          type: 'paragraph',
          text: 'Growing-season length determines which crops and cultivar maturity groups are viable in a location and whether multiple cropping cycles, such as double cropping, are feasible within a year. Growers in regions with a shorter growing season generally favour faster-maturing cultivars, while longer or more reliable seasons allow slower-maturing, potentially higher-yielding options.',
        },
      ],
    },
    {
      id: 'factors-affecting-length',
      heading: 'Factors affecting length',
      body: [
        {
          type: 'list',
          items: [
            'Latitude and elevation — both generally shorten the frost-free or thermally suitable period.',
            'Local topography and microclimate — for example, low-lying frost pockets can locally shorten the effective season.',
            'Year-to-year climate variability — growing-season length fluctuates around a long-term average rather than being fixed.',
            'Longer-term climate trends — which meteorological agencies monitor for their effect on frost dates and rainy-season timing over time.',
          ],
        },
      ],
    },
    {
      id: 'managing-within-the-season',
      heading: 'Managing within the season',
      body: [
        {
          type: 'paragraph',
          text: 'Growers time planting and cultivar selection to the expected season length, use succession or staggered planting to spread harvest timing and risk, and extend the effective season using protected cultivation, such as greenhouses or high tunnels, or irrigation scheduling where moisture rather than temperature is the limiting factor.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  connections: [
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'vertical-farming' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  glossaryTerms: ['annual-crop', 'perennial-crop', 'yield'],
  geographicScope:
    'Global overview; growing-season definitions, length, and reliability vary by climate zone, latitude, elevation, and year.',
  limitations: [
    'This entry explains the growing-season concept; it does not provide specific frost dates, rainy-season timing, or season-length values for any location.',
    'Growing-season length varies year to year around a long-term average and should be assessed using local meteorological records.',
  ],
  sourceReferences: [
    {
      sourceId: 'noaa',
      citedFor: 'Frost-date records and growing-season statistics',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'Crop calendars and growing-season condition data',
    },
    {
      sourceId: 'fao',
      citedFor: 'Growing-season concepts and cropping-calendar context',
    },
    {
      sourceId: 'wmo',
      citedFor: 'Meteorological data standards underlying season definitions',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Growing Season',
    description:
      'A reference on the growing season: how it is defined and measured in temperate and tropical climates, why its length matters, and how it can be extended.',
    keywords: [
      'growing season',
      'frost-free period',
      'cropping calendar',
      'season length',
    ],
  },
  structuredData: { article: true },
};
