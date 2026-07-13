import type { PlantDiseaseContent } from '@/types/content';

export const soybeanRust: PlantDiseaseContent = {
  id: 'plant-disease-soybean-rust',
  slug: 'soybean-rust',
  contentType: 'plant-disease',
  title: 'Soybean Rust',
  scientificName: 'Phakopsora pachyrhizi',
  alternativeNames: ['Asian soybean rust', 'ASR'],
  category: 'Plant disease',
  subcategory: 'Fungal rust disease',
  causalAgent:
    'Fungus Phakopsora pachyrhizi (Asian soybean rust; the related Phakopsora meibomiae causes a milder New World rust)',
  pathogenType: 'fungal',
  summary:
    'Soybean rust is a foliar rust disease of soybean caused by Phakopsora pachyrhizi. It produces small tan to reddish-brown pustules on the underside of leaves and can cause rapid defoliation and yield loss in warm, humid conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soybean rust, caused by the fungus Phakopsora pachyrhizi, is one of the most damaging foliar diseases of soybean in warm, humid production regions. The pathogen produces urediniospores on the underside of leaves and can spread rapidly through a crop, causing premature leaf drop that shortens the grain-filling period and reduces yield.',
    },
    {
      type: 'paragraph',
      text: 'The fungus is an obligate parasite with a wide host range among legumes, and it disperses over long distances on the wind, which allows it to move into new regions each season from areas where it overwinters on living hosts. Its ability to reproduce quickly under favourable conditions makes early detection and timely management important.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal rust disease (Phakopsora pachyrhizi)' },
    {
      label: 'Key sign',
      value:
        'Small tan to reddish-brown pustules on the underside of leaves, with yellowing above',
    },
    {
      label: 'Hosts',
      value: 'Soybean and other legumes, including common bean',
    },
    {
      label: 'Favoured by',
      value: 'Warm, humid weather with extended leaf wetness',
    },
    {
      label: 'Spread',
      value: 'Wind-dispersed urediniospores, often over long distances',
    },
    {
      label: 'Management basis',
      value:
        'Monitoring, resistant or tolerant varieties where available, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Symptoms usually begin on the lower leaves as small, angular, tan to grey-green lesions bounded by veins, with corresponding yellowing on the upper surface. On the underside of these lesions, small raised pustules (uredinia) develop and release masses of pale spores. As the disease intensifies, leaves yellow and drop prematurely, often working up the plant from the bottom.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Early lesions can be mistaken for other leaf spots or for bacterial diseases. Examining the leaf underside with a hand lens for the raised, spore-producing pustules is the key step, and a diagnostic laboratory can confirm the pathogen.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Phakopsora pachyrhizi is an obligate parasite that needs living host tissue and cannot survive on residue. It survives on legume hosts in frost-free areas and produces repeating generations of wind-dispersed urediniospores. These can be carried long distances to initiate infections in new regions, and under warm, moist conditions a new generation of pustules forms within a short interval, allowing rapid build-up.',
        },
        {
          type: 'list',
          items: [
            'Requires living legume hosts and cannot overwinter on dead residue',
            'Survives on living hosts in frost-free areas between seasons',
            'Wind-dispersed urediniospores can move long distances into new regions',
            'Warm, humid weather drives rapid, repeating infection cycles',
          ],
        },
      ],
    },
    {
      id: 'hosts-and-conditions',
      heading: 'Hosts and favourable conditions',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean is the most economically important host, but the fungus infects a wide range of legumes, including common bean and various wild and cultivated species that can act as reservoirs. Warm temperatures combined with high humidity, frequent rain, and long periods of leaf wetness strongly favour infection and spread.',
        },
        {
          type: 'list',
          items: [
            'Warm temperatures with high humidity and prolonged leaf wetness',
            'Frequent rainfall or heavy dew during the growing season',
            'Nearby legume reservoirs and overwintering hosts in frost-free areas',
            'Dense canopies that keep the lower leaves humid and shaded',
          ],
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because soybean rust can arrive on the wind and intensify quickly, management relies on regional monitoring and early detection so that timely decisions can be made, combined with resistant or tolerant varieties where they are available.',
        },
        {
          type: 'list',
          items: [
            'Follow regional rust monitoring and forecasting networks',
            'Scout the lower canopy regularly during warm, humid weather',
            'Grow resistant or tolerant varieties where recommended',
            'Avoid excessively dense canopies that hold humidity in the lower leaves',
            'Prioritise later-planted or later-maturing crops still filling pods',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of fungicides or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'common-bean' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'coffee-leaf-rust' },
    { type: 'plant-disease', slug: 'stem-rust' },
    { type: 'plant-disease', slug: 'sudden-death-syndrome' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'wind' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global in warm, humid soybean regions; overwinters on living hosts in frost-free areas and moves seasonally into cooler regions on the wind.',
  climateContext:
    'Favoured by warm, humid weather with frequent rain or dew and prolonged leaf wetness; long-distance wind dispersal often determines when epidemics begin in a region.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Timing of spore arrival and pathogen populations vary greatly by season and region; consult local monitoring networks.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Identification, monitoring, and management in soybean',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Soybean Rust (Asian Soybean Rust)',
    description:
      'Soybean rust overview: Phakopsora pachyrhizi biology, underside leaf pustules, wind-borne spread, and monitoring-based management in soybean.',
    keywords: [
      'soybean rust',
      'Phakopsora pachyrhizi',
      'asian soybean rust',
      'soybean disease',
    ],
  },
  structuredData: { article: true },
};
