import type { ClimateContent } from '@/types/content';

export const dew: ClimateContent = {
  id: 'climate-dew',
  slug: 'dew',
  contentType: 'climate',
  title: 'Dew',
  alternativeNames: ['Dewfall', 'Leaf wetness (dew)'],
  category: 'Climate factor',
  subcategory: 'Surface moisture',
  climateClass: 'water',
  summary:
    'Dew is water that condenses from the air onto cool surfaces such as leaves and soil, usually overnight, when those surfaces fall below the dew-point temperature. It adds a small amount of moisture but is agriculturally important mainly because the leaf wetness it creates influences plant diseases.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dew forms when a surface cools, typically on calm, clear nights, until its temperature drops to the dew point — the temperature at which the air next to it becomes saturated — so that water vapour condenses onto it as droplets. Plant leaves, which lose heat readily to a clear night sky, are common surfaces for dew to form, along with soil and other exposed materials.',
    },
    {
      type: 'paragraph',
      text: 'As a source of water, dew is generally minor compared with rainfall or irrigation, though in some arid environments it can be a meaningful supplement for certain plants and organisms. Its larger significance in agriculture is that the film of moisture it leaves on foliage — leaf wetness — provides conditions that many fungal and bacterial pathogens need to infect plants.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'Water condensed from air onto surfaces cooled to the dew point',
    },
    {
      label: 'When it forms',
      value: 'Typically on calm, clear nights when surfaces cool by radiation',
    },
    {
      label: 'Water contribution',
      value:
        'Usually minor compared with rainfall, but a supplement in some arid settings',
    },
    {
      label: 'Main agricultural relevance',
      value:
        'Creates leaf wetness that influences fungal and bacterial diseases',
    },
    {
      label: 'Related concept',
      value: 'Dew point — the temperature at which air becomes saturated',
    },
    {
      label: 'Favouring conditions',
      value: 'Clear skies, light wind, high humidity, and cooling surfaces',
    },
  ],
  sections: [
    {
      id: 'how-dew-forms',
      heading: 'How dew forms',
      body: [
        {
          type: 'paragraph',
          text: 'On clear, calm nights, surfaces such as leaves radiate heat to the sky and cool faster than the surrounding air. If a surface cools to the dew-point temperature of the adjacent air, water vapour condenses onto it as dew. Cloud cover, wind, and dry air all tend to reduce dew formation — clouds slow radiative cooling, wind mixes warmer air down to the surface, and dry air has a lower dew point that is harder to reach.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Dew is distinct from frost: when the surface cools below freezing, the deposited moisture forms frost (or the vapour deposits directly as ice) rather than liquid dew.',
        },
      ],
    },
    {
      id: 'dew-and-plant-disease',
      heading: 'Dew and plant disease',
      body: [
        {
          type: 'paragraph',
          text: 'The most agriculturally important effect of dew is the prolonged leaf wetness it produces. Many fungal and bacterial pathogens require a film of water on the leaf surface for their spores to germinate and infect, and the number of hours that leaves stay wet is a key variable in the development of diseases such as downy mildew, apple scab, and various leaf spots and blights. Powdery mildews are a notable exception: they infect under high humidity and are inhibited rather than favoured by a film of free water. Dew that persists into the morning extends this wetness period.',
        },
        {
          type: 'list',
          items: [
            'Overnight dew can supply the leaf wetness some pathogens need to infect',
            'The duration of leaf wetness is used in many disease-forecasting models',
            'Dense canopies and poor air movement can prolong wetness and raise disease risk',
            'Managing crop architecture and airflow can help leaves dry faster',
          ],
        },
      ],
    },
    {
      id: 'other-effects',
      heading: 'Other effects',
      body: [
        {
          type: 'paragraph',
          text: 'Beyond disease, dew provides a small direct input of moisture that can be a minor benefit in dry environments and can slightly ease water stress in some situations. Dew and the leaf wetness it creates also interact with the timing and effectiveness of some field operations, such as spraying and harvesting, which are often adjusted around morning wetness. Its role, however, is generally as a modifier rather than a major water source.',
        },
      ],
    },
    {
      id: 'limitations-and-considerations',
      heading: 'Limitations and considerations',
      body: [
        {
          type: 'paragraph',
          text: 'This entry explains dew as a concept and its main agricultural effects qualitatively. How much dew forms, how long leaves stay wet, and how that translates into disease risk depend on local climate, canopy, and the specific pathogens present, and are not quantified here.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'temperature' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'vapor-pressure-deficit' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'apple-scab' },
    { type: 'plant-disease', slug: 'late-blight' },
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'potato' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'A general explanation of dew and its agricultural effects. Dew frequency and its disease significance vary strongly with local climate, canopy, and pathogens.',
  climateContext:
    'Dew formation depends on nocturnal cooling, humidity, and calm conditions; its main agricultural role is in creating the leaf wetness that drives many plant diseases.',
  limitations: [
    'This entry explains dew qualitatively; it does not quantify dew amounts, leaf-wetness durations, or disease risk, which are location- and pathogen-specific.',
    'Dew is generally a minor water source; its significance is mainly through leaf wetness and disease rather than moisture supply.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Dew, dew point, and surface-moisture measurement',
    },
    {
      sourceId: 'noaa',
      citedFor: 'Nocturnal cooling and dew-formation conditions',
    },
    {
      sourceId: 'fao',
      citedFor: 'Leaf wetness and its role in plant disease context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Dew',
    description:
      'Dew explained: how water condenses on leaves at the dew point overnight, why the leaf wetness it creates drives plant disease, and its minor water role.',
    keywords: ['dew', 'dew point', 'leaf wetness', 'plant disease'],
  },
  structuredData: { article: true },
};
