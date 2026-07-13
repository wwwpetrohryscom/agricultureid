import type { ClimateContent } from '@/types/content';

export const solarRadiation: ClimateContent = {
  id: 'climate-solar-radiation',
  slug: 'solar-radiation',
  contentType: 'climate',
  title: 'Solar Radiation',
  alternativeNames: ['Solar irradiance', 'Insolation'],
  category: 'Climate metric',
  subcategory: 'Energy and light',
  climateClass: 'metric',
  summary:
    'Solar radiation is the energy the sun delivers to the Earth’s surface. It powers photosynthesis and evapotranspiration and drives temperature, making it a fundamental input to crop growth and to the water and energy balance of farmland.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Solar radiation is the electromagnetic energy arriving from the sun. At the crop canopy it supplies the light used in photosynthesis, provides the energy that evaporates water from soil and plants, and warms the air, soil, and plant surfaces. Because almost all the energy captured by crops originates as sunlight, solar radiation is one of the most fundamental climate factors in agriculture.',
    },
    {
      type: 'paragraph',
      text: 'It is described in two main ways: as irradiance, the rate at which energy arrives on a surface, and as insolation, the total energy received over a day or season. Only part of the total spectrum — the visible waveband known as photosynthetically active radiation (PAR) — can be used directly in photosynthesis, which is why both the amount and the usable fraction of radiation matter for crops.',
    },
  ],
  keyFacts: [
    { label: 'Definition', value: 'Solar energy reaching the Earth’s surface' },
    {
      label: 'Two descriptions',
      value:
        'Irradiance (rate of energy arrival) and insolation (total energy over time)',
    },
    {
      label: 'Usable fraction',
      value:
        'Photosynthetically active radiation (PAR) is the part used in photosynthesis',
    },
    {
      label: 'Agricultural roles',
      value:
        'Drives photosynthesis, evapotranspiration, and surface temperature',
    },
    {
      label: 'What reduces it',
      value: 'Cloud cover, atmospheric conditions, shading, and low sun angle',
    },
    {
      label: 'Varies with',
      value: 'Latitude, season, time of day, and weather',
    },
  ],
  sections: [
    {
      id: 'what-solar-radiation-is',
      heading: 'What solar radiation is',
      body: [
        {
          type: 'paragraph',
          text: 'Solar radiation is the flow of energy from the sun that reaches the land surface, where it is partly reflected, partly absorbed, and partly used by plants. The amount reaching a field depends on the sun’s angle (set by latitude, season, and time of day) and on what the atmosphere does to the beam — clouds, water vapour, dust, and pollution all reduce and scatter incoming radiation.',
        },
        {
          type: 'paragraph',
          text: 'The energy is often split into direct radiation, arriving straight from the sun, and diffuse radiation, scattered by the atmosphere and reaching the crop from all directions. Diffuse light can penetrate a canopy more evenly, which is one reason radiation quality as well as quantity matters for crop growth.',
        },
      ],
    },
    {
      id: 'roles-in-crop-production',
      heading: 'Roles in crop production',
      body: [
        {
          type: 'list',
          items: [
            'Supplies the light energy that photosynthesis converts into plant biomass',
            'Provides the energy that drives evaporation and transpiration (evapotranspiration)',
            'Warms soil, air, and plant surfaces, influencing development and stress',
            'Interacts with the canopy: how much light crops intercept shapes their growth',
            'Underpins estimates of crop water demand used in irrigation scheduling',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because radiation drives both growth and water loss at once, it links crop productivity and water use closely: the same energy that builds biomass also determines how much water the crop transpires.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why it matters',
      body: [
        {
          type: 'paragraph',
          text: 'The supply of solar radiation sets an upper limit on how much a crop can grow: with ample water and nutrients, biomass production is closely tied to how much light the canopy intercepts and uses. Low radiation during key stages — for example under persistent cloud — can limit yield, while in protected cropping, supplementary lighting is sometimes used to raise light levels. Radiation data also feed the calculations behind evapotranspiration and irrigation planning.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'More radiation is not always better in isolation: very high radiation combined with heat and limited water can increase stress, so its effect depends on the accompanying temperature and water supply.',
        },
      ],
    },
    {
      id: 'measurement-and-limitations',
      heading: 'Measurement and limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Solar radiation is measured with instruments such as pyranometers and is a standard part of agricultural weather records and models. This entry describes the concept and its roles qualitatively; specific radiation levels and their crop responses vary with location, season, and crop, and are not given here.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'vapor-pressure-deficit' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'vertical-farming' },
  ],
  glossaryTerms: ['evapotranspiration', 'yield'],
  geographicScope:
    'A general explanation of solar radiation in agriculture. Radiation levels vary strongly with latitude, season, and weather; crop responses to them are context-specific.',
  climateContext:
    'Solar radiation is a primary climate driver: it powers photosynthesis and evapotranspiration and interacts with temperature and water supply in determining crop growth and stress.',
  limitations: [
    'This entry explains the concept and roles of solar radiation; it does not give radiation levels or crop-specific responses, which vary with location, season, and crop.',
    'The effect of radiation depends on accompanying temperature and water supply and cannot be interpreted in isolation.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Measurement and standards for solar radiation',
    },
    { sourceId: 'noaa', citedFor: 'Solar radiation and surface energy data' },
    {
      sourceId: 'fao',
      citedFor: 'Role of solar radiation in crop growth and water use',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Solar Radiation in Agriculture',
    description:
      'Solar radiation explained: how sunlight powers photosynthesis and evapotranspiration, the role of PAR, and why it sets crop growth potential.',
    keywords: [
      'solar radiation',
      'solar irradiance',
      'insolation',
      'photosynthetically active radiation',
    ],
  },
  structuredData: { article: true },
};
