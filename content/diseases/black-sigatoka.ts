import type { PlantDiseaseContent } from '@/types/content';

export const blackSigatoka: PlantDiseaseContent = {
  id: 'disease-black-sigatoka',
  slug: 'black-sigatoka',
  contentType: 'plant-disease',
  title: 'Black Sigatoka',
  scientificName: 'Pseudocercospora fijiensis (syn. Mycosphaerella fijiensis)',
  alternativeNames: ['Black leaf streak disease'],
  category: 'Plant disease',
  subcategory: 'Fungal foliar disease',
  causalAgent: 'Fungus Pseudocercospora fijiensis',
  pathogenType: 'fungal',
  summary:
    'Black Sigatoka, also known as black leaf streak disease, is a major fungal foliar disease of banana caused by Pseudocercospora fijiensis. It progressively destroys leaf tissue, reducing photosynthetic capacity, plant vigour, and bunch yield and quality, and is favoured by warm, humid, rainy conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: "Black Sigatoka, caused by the fungus Pseudocercospora fijiensis, is one of the most economically significant diseases of banana worldwide. It progressively damages leaf tissue, reducing the plant's ability to photosynthesise and fill developing bunches.",
    },
    {
      type: 'paragraph',
      text: 'Because banana plants continuously produce new leaves in warm, humid climates, the disease can cycle repeatedly through the growing period, and susceptibility varies considerably between banana genotypes, with some dessert cultivars particularly vulnerable.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Fungal foliar disease (Pseudocercospora fijiensis)',
    },
    {
      label: 'Key sign',
      value:
        'Dark brown to black streaked leaf lesions with yellow halos that coalesce into large necrotic areas',
    },
    { label: 'Hosts', value: 'Banana' },
    {
      label: 'Favoured by',
      value: 'Warm temperatures with high humidity and frequent rainfall',
    },
    {
      label: 'Spread',
      value: 'Airborne ascospores and rain-splashed conidia',
    },
    {
      label: 'Management basis',
      value:
        'Less-susceptible cultivars, leaf removal, canopy and drainage management, and monitoring',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Initial symptoms appear as light streaks on leaves that develop into dark brown to black elongated lesions, often surrounded by yellow halos. Under heavy disease pressure, lesions coalesce into large necrotic areas that can destroy most of the leaf surface.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Black Sigatoka can resemble the related but generally less damaging yellow Sigatoka disease. Where identification affects a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'The fungus produces both airborne ascospores and rain-splashed conidia, both contributing to spread within and between plantations. Infection requires a period of leaf wetness after spores land, and the disease cycles repeatedly through the season on the continuously produced new leaves typical of banana.',
        },
        {
          type: 'list',
          items: [
            'Airborne ascospores can travel between plants and plantations',
            'Rain-splashed conidia spread the fungus over shorter distances within a plantation',
            'Continuous new leaf production in favourable climates allows year-round disease cycling',
          ],
        },
      ],
    },
    {
      id: 'affected-hosts',
      heading: 'Affected hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Banana is the primary host of black Sigatoka. Susceptibility varies considerably between genotypes, with some dessert banana cultivars highly susceptible and some other types showing greater tolerance.',
        },
      ],
    },
    {
      id: 'risk-factors',
      heading: 'Risk factors',
      body: [
        {
          type: 'list',
          items: [
            'Warm temperatures combined with high humidity and frequent rainfall',
            'Dense plantings and closed canopies that retain leaf wetness',
            'Susceptible cultivars',
            'Poor field drainage contributing to prolonged canopy humidity',
          ],
        },
      ],
    },
    {
      id: 'prevention-and-monitoring',
      heading: 'Prevention and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because black Sigatoka cycles continuously in favourable climates, management combines cultivar choice, sanitation, and canopy conditions that reduce leaf wetness duration.',
        },
        {
          type: 'list',
          items: [
            'Use less-susceptible cultivars where suited to the local market',
            'Remove and destroy heavily infected leaves to reduce inoculum',
            'Manage plant density and field drainage to improve airflow and reduce leaf wetness duration',
            'Follow regional forecasting or warning systems where available',
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
  hostCrops: [{ type: 'crop', slug: 'banana' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'wind' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Widespread in tropical and subtropical banana-growing regions worldwide, with severity varying by climate, cultivar, and plantation management.',
  climateContext:
    'Favoured by warm temperatures combined with high humidity and frequent rainfall, which supports both spore production and the leaf wetness needed for infection.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Cultivar susceptibility and appropriate management vary by banana type and production system and are not detailed here.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'cgiar',
      citedFor: 'Banana disease research and management context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global banana production and disease context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Black Sigatoka',
    description:
      'Black Sigatoka explained: Pseudocercospora fijiensis biology, leaf streak identification, disease cycle, risk factors, and prevention guidance for banana.',
    keywords: [
      'black sigatoka',
      'black leaf streak',
      'banana disease',
      'Pseudocercospora fijiensis',
    ],
  },
  structuredData: { article: true },
};
