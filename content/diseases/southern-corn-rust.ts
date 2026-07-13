import type { PlantDiseaseContent } from '@/types/content';

export const southernCornRust: PlantDiseaseContent = {
  id: 'plant-disease-southern-corn-rust',
  slug: 'southern-corn-rust',
  contentType: 'plant-disease',
  title: 'Southern Rust of Maize',
  scientificName: 'Puccinia polysora',
  alternativeNames: ['Southern corn rust', 'Polysora rust'],
  category: 'Plant disease',
  subcategory: 'Fungal rust disease',
  causalAgent: 'Fungus Puccinia polysora',
  pathogenType: 'fungal',
  summary:
    'Southern corn rust is a foliar rust disease of maize caused by Puccinia polysora. It produces dense, orange, mainly upper-surface pustules and can develop explosively in hot, humid weather, causing rapid loss of green leaf area.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Southern corn rust, caused by the fungus Puccinia polysora, is a warm-climate rust of maize that is distinct from the more temperate common corn rust. It produces small, densely clustered orange pustules, and under hot, humid conditions it can intensify very quickly, sometimes turning healthy leaves rust-coloured within a short period.',
    },
    {
      type: 'paragraph',
      text: 'Because Puccinia polysora generally does not overwinter in cooler regions, epidemics in those areas often depend on wind-borne spores arriving from warmer source regions each season. This long-distance dispersal, combined with rapid cycling in favourable weather, makes monitoring and resistant hybrids central to management.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal rust disease (Puccinia polysora)' },
    {
      label: 'Key sign',
      value: 'Dense, small, orange pustules mostly on the upper leaf surface',
    },
    { label: 'Hosts', value: 'Maize, including sweetcorn' },
    {
      label: 'Favoured by',
      value: 'Hot, humid weather with dew or frequent rain',
    },
    {
      label: 'Spread',
      value:
        'Wind-dispersed urediniospores, often arriving from warmer regions',
    },
    {
      label: 'Management basis',
      value:
        'Resistant hybrids, monitoring for arrival, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Southern rust produces small, circular to oval pustules that are densely clustered and predominantly on the upper leaf surface. The pustules are orange to light cinnamon-brown and release powdery spores. As the disease intensifies, leaves can become heavily covered, yellow, and die prematurely. Concentration of pustules on the upper surface helps distinguish it from common rust, whose pustules occur on both surfaces and are typically darker and more scattered.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Southern rust and common rust can be confused in the field. Pustule colour, density, and their location on the leaf surface are useful clues, but laboratory confirmation is recommended when the distinction affects a management decision.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Puccinia polysora is an obligate parasite that needs living maize tissue and produces repeating generations of wind-dispersed urediniospores. In warm regions it can persist year-round on maize, while in cooler regions epidemics typically begin when spores blow in from warmer areas. Under hot, humid conditions with dew, a new generation of pustules can form within a short interval, allowing very rapid build-up.',
        },
        {
          type: 'list',
          items: [
            'Requires living maize tissue and cannot survive on residue alone',
            'Wind-dispersed urediniospores can travel long distances between regions',
            'Hot, humid weather with dew drives rapid, repeating infection cycles',
            'Late arrival can still be damaging if it coincides with grain fill',
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
          text: 'Maize, including sweetcorn, is the host of southern rust. Unlike many maize leaf diseases, it is favoured by high rather than moderate temperatures, combined with high humidity and free moisture on the leaves. Warm-region source populations and prevailing winds strongly influence when and where the disease appears in a given season.',
        },
        {
          type: 'list',
          items: [
            'Hot temperatures combined with high humidity and dew or rain',
            'Proximity or wind connection to warm regions where the fungus persists',
            'Susceptible hybrids and late-planted crops still filling grain',
            'Prolonged periods of leaf wetness that favour rapid cycling',
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
          text: 'Because southern rust often arrives on the wind and can intensify rapidly, management relies on resistant hybrids and timely monitoring so that any response can be made before the disease overwhelms the upper canopy during grain fill.',
        },
        {
          type: 'list',
          items: [
            'Grow hybrids with better southern-rust tolerance where available',
            'Follow regional rust monitoring reports that track its northward movement',
            'Scout the upper leaves closely during hot, humid weather at grain fill',
            'Consider planting date to avoid the most susceptible stages coinciding with peak spore arrival',
            'Prioritise later-planted or later-maturing fields most at risk',
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
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sweetcorn' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'northern-corn-leaf-blight' },
    { type: 'plant-disease', slug: 'gray-leaf-spot' },
    { type: 'plant-disease', slug: 'stem-rust' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'wind' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global in warm maize regions; persists year-round in the tropics and warmer subtropics and moves seasonally into cooler areas on the wind.',
  climateContext:
    'Favoured by hot, humid weather with dew or rain; long-distance wind dispersal of spores from warm source regions often determines when epidemics begin.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Timing of spore arrival varies greatly by season and region, making outbreaks difficult to predict; consult local monitoring networks.',
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
      citedFor: 'Identification, monitoring, and management in maize',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Southern Corn Rust of Maize',
    description:
      'Southern corn rust overview: Puccinia polysora biology, dense orange pustules, wind-borne spread, and monitoring-based management in maize.',
    keywords: [
      'southern corn rust',
      'Puccinia polysora',
      'maize rust',
      'corn disease',
    ],
  },
  structuredData: { article: true },
};
