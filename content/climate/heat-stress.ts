import type { ClimateContent } from '@/types/content';

export const heatStress: ClimateContent = {
  id: 'climate-heat-stress',
  slug: 'heat-stress',
  contentType: 'climate',
  title: 'Heat Stress',
  category: 'Climate factor',
  subcategory: 'Thermal stress',
  climateClass: 'temperature',
  summary:
    'Heat stress occurs when temperatures exceed the physiological tolerance of crops or livestock long enough to impair growth, reproduction, or productivity. Tolerance thresholds differ by species, breed or cultivar, and acclimatisation, so effects are assessed relative to the specific organism rather than a single global temperature value.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Heat stress describes the physiological strain that occurs when an organism’s heat load — from air temperature, radiation, humidity, and its own metabolic activity — exceeds its capacity to dissipate heat and maintain normal function. In agriculture, the concept applies both to crops, where sustained high temperatures during sensitive growth stages can impair processes such as pollination and photosynthesis, and to livestock, where animals must expend energy on cooling mechanisms such as panting or sweating, which can reduce feed intake, growth, and reproductive performance.',
    },
    {
      type: 'paragraph',
      text: 'Because heat tolerance varies by species, breed or cultivar, life stage, and prior acclimatisation, there is no single universal temperature at which heat stress begins. Researchers and advisers typically use indices that combine temperature with humidity, and sometimes other factors such as wind or solar radiation, to estimate heat-stress risk for a given species or crop in a given environment.',
    },
  ],
  keyFacts: [
    {
      label: 'Core concept',
      value:
        'Physiological strain when heat load exceeds an organism’s capacity to dissipate heat',
    },
    {
      label: 'Crop effects',
      value:
        'Reduced photosynthesis, impaired pollen viability and fertilisation, and quality effects during sensitive stages',
    },
    {
      label: 'Livestock effects',
      value:
        'Reduced feed intake, growth, milk or egg production, and reproductive performance',
    },
    {
      label: 'Key factor',
      value:
        'Temperature combined with humidity (and other conditions) determines effective heat load, not temperature alone',
    },
    {
      label: 'Assessment tools',
      value:
        'Species- or context-specific heat-stress indices rather than a single universal threshold',
    },
    {
      label: 'Management',
      value:
        'Shade, ventilation, water access, and cultivar/breed selection for heat tolerance',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What heat stress is',
      body: [
        {
          type: 'paragraph',
          text: 'Heat stress is a mismatch between the heat an organism gains, or generates, and its ability to lose that heat to the environment. In plants, this shows up as physiological disruption — for example, reduced photosynthetic efficiency or damage to pollen — rather than the active cooling response seen in animals, which instead rely on behaviours and physiological mechanisms such as increased respiration rate, panting, or sweating to shed excess heat.',
        },
      ],
    },
    {
      id: 'why-it-matters-for-crops',
      heading: 'Why it matters for crops',
      body: [
        {
          type: 'paragraph',
          text: 'High temperatures during flowering can reduce pollen viability and successful fertilisation in many crops, directly limiting yield potential. Sustained heat can also depress photosynthetic efficiency and accelerate development, shortening the grain- or fruit-fill period, and can affect fruit and grain quality through effects such as sunscald or altered composition.',
        },
      ],
    },
    {
      id: 'effects-on-livestock',
      heading: 'Effects on livestock',
      body: [
        {
          type: 'paragraph',
          text: 'In livestock, heat stress commonly reduces feed intake and growth, lowers milk yield in dairy cattle and egg production in poultry, and can reduce fertility. In severe or prolonged heat events, particularly where animals cannot access shade, water, or effective cooling, heat stress can increase mortality risk.',
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
            'For crops — heat-tolerant cultivars, adjusted planting dates to shift sensitive stages away from typical peak-heat periods, shading or reflective mulches, and evaporative cooling via irrigation in some systems',
            'For livestock — shade structures, increased ventilation or fans, ready access to drinking water, and adjustments to feeding times and stocking density during hot periods',
          ],
        },
      ],
    },
    {
      id: 'monitoring-and-indices',
      heading: 'Monitoring and indices',
      body: [
        {
          type: 'paragraph',
          text: 'Heat-stress risk is commonly tracked using indices that combine temperature and humidity, such as temperature–humidity indices used in livestock management, and, for crops, by monitoring the coincidence of forecast heat events with sensitive growth stages. Specific index thresholds are typically defined per species, breed, or crop by research institutions rather than applied universally.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'tomato' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
  ],
  glossaryTerms: ['yield'],
  geographicScope:
    'Global overview; heat-stress thresholds and impacts vary by species, breed or cultivar, acclimatisation, and local climate.',
  limitations: [
    'This is a general overview of heat stress in crops and livestock, not species-, breed-, or cultivar-specific thresholds.',
    'No universal temperature or index values are given; heat-stress risk should be assessed using recognised, context-specific tools and professional guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Temperature extremes and climate monitoring',
    },
    { sourceId: 'noaa', citedFor: 'Heat event monitoring and climate data' },
    { sourceId: 'fao', citedFor: 'Heat-stress effects on crops and livestock' },
    { sourceId: 'woah', citedFor: 'Livestock heat stress and welfare context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Heat Stress',
    description:
      'A reference on heat stress: how excess heat affects crop pollination and yield and livestock intake and productivity, with management approaches.',
    keywords: [
      'heat stress',
      'crop heat stress',
      'livestock heat stress',
      'thermal tolerance',
    ],
  },
  structuredData: { article: true },
};
