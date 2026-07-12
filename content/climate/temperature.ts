import type { ClimateContent } from '@/types/content';

export const temperature: ClimateContent = {
  id: 'climate-temperature',
  slug: 'temperature',
  contentType: 'climate',
  title: 'Temperature',
  category: 'Climate factor',
  subcategory: 'Thermal environment',
  climateClass: 'temperature',
  summary:
    'Temperature — of air and soil — is a fundamental driver of plant metabolism, governing germination, growth rate, developmental timing, and the geographic and seasonal range over which a given crop can be grown.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Air and soil temperature influence nearly every biological process in crop production, from seed germination and root development to the rate of vegetative growth and the timing of flowering and maturity. Because these processes generally speed up with warmth, within a species-specific range, and slow down or stop outside it, temperature is often described as the primary "clock" driving plant development, alongside day length in many species.',
    },
    {
      type: 'paragraph',
      text: 'Temperature varies diurnally (day–night), seasonally, and geographically, and these patterns interact with elevation, proximity to large water bodies, and local topography to create microclimates that can differ meaningfully from regional averages. Matching crop and cultivar choice to the local temperature regime is one of the most basic decisions in agricultural planning.',
    },
  ],
  keyFacts: [
    {
      label: 'Core role',
      value:
        'Drives germination rate, vegetative growth, and developmental timing in crops',
    },
    {
      label: 'Key concept',
      value:
        'Species- and cultivar-specific temperature ranges for optimal growth, with slower growth outside that range',
    },
    {
      label: 'Related metric',
      value:
        'Growing degree days, which accumulate heat above a crop-specific base temperature',
    },
    {
      label: 'Extremes',
      value:
        'Both low-temperature (chilling, frost) and high-temperature (heat stress) extremes can damage crops',
    },
    {
      label: 'Variation',
      value:
        'Diurnal, seasonal, and microclimate variation all matter, not just averages',
    },
    {
      label: 'Measurement',
      value:
        'Recorded by national meteorological networks and on-farm weather stations',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What temperature is, in this context',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural temperature considerations distinguish air temperature, which affects above-ground growth and canopy processes, from soil temperature, which strongly influences germination, root growth, and nutrient availability. Both fluctuate diurnally and seasonally, and local factors such as elevation, aspect, and proximity to water bodies can create microclimates warmer or cooler than the surrounding region.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-crops',
      heading: 'Why it matters for crops',
      body: [
        {
          type: 'paragraph',
          text: 'Temperature governs the rate of enzyme-driven biological processes underlying germination, growth, and development, generally increasing up to a species-specific optimum and declining above it. This relationship underlies the concept of growing degree days, which sums accumulated warmth above a crop-specific base temperature as a way of tracking developmental progress. Temperature regimes also determine, at a broad level, which crops and cultivars are geographically and seasonally viable in a given location.',
        },
      ],
    },
    {
      id: 'effects',
      heading: 'Effects of extremes',
      body: [
        {
          type: 'paragraph',
          text: 'Low-temperature extremes can cause chilling injury in cold-sensitive species or frost damage when tissue temperatures fall to or below freezing, while high-temperature extremes can impair pollination, reduce photosynthetic efficiency, and accelerate development in ways that shorten grain- or fruit-fill periods — effects covered in more detail under frost and heat stress. Temperature also affects the development rate of many insect pests and pathogens, generally accelerating their life cycles as temperatures rise within their tolerance range.',
        },
      ],
    },
    {
      id: 'managing-or-adapting',
      heading: 'Managing and adapting',
      body: [
        {
          type: 'list',
          items: [
            'Selecting species and cultivars matched to the local thermal regime and season length',
            'Using protected cultivation, such as greenhouses, to extend a season or moderate extremes',
            'Adjusting planting dates to align sensitive growth stages with more favourable temperature windows',
            'Choosing sites with favourable microclimates, considering elevation, slope, and aspect',
          ],
        },
      ],
    },
    {
      id: 'regional-and-seasonal-variation',
      heading: 'Regional and seasonal variation',
      body: [
        {
          type: 'paragraph',
          text: 'Temperature regimes vary with latitude, elevation, and continentality (distance from moderating water bodies), producing very different growing conditions across regions at similar latitudes. Meteorological and agricultural agencies also monitor longer-term shifts in average and extreme temperatures, since these can gradually affect which crops and cultivars remain well suited to a given area over time.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'growing-season' },
  ],
  connections: [
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  glossaryTerms: ['evapotranspiration', 'annual-crop'],
  geographicScope:
    'Global overview; temperature regimes and their agricultural implications vary by latitude, elevation, and local microclimate.',
  limitations: [
    'This is a general overview of temperature as a climate factor, not region- or crop-specific thermal recommendations.',
    'No universal optimal-temperature values are given, since these are species- and cultivar-specific.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Temperature measurement and climate standards',
    },
    { sourceId: 'noaa', citedFor: 'Temperature monitoring and climate data' },
    { sourceId: 'fao', citedFor: 'Temperature effects on crop development' },
    {
      sourceId: 'usda-nass',
      citedFor: 'Crop progress and temperature-related condition data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Temperature',
    description:
      'A reference on temperature: its role in germination and growth, effects of extremes, regional and seasonal variation, and management approaches.',
    keywords: [
      'temperature',
      'crop temperature',
      'thermal environment',
      'growing conditions',
    ],
  },
  structuredData: { article: true },
};
