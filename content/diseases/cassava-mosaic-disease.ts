import type { PlantDiseaseContent } from '@/types/content';

export const cassavaMosaicDisease: PlantDiseaseContent = {
  id: 'plant-disease-cassava-mosaic-disease',
  slug: 'cassava-mosaic-disease',
  contentType: 'plant-disease',
  title: 'Cassava Mosaic Disease',
  scientificName: 'Cassava mosaic geminiviruses (genus Begomovirus)',
  alternativeNames: ['CMD', 'African cassava mosaic'],
  category: 'Plant disease',
  subcategory: 'Viral disease',
  causalAgent:
    'Cassava mosaic geminiviruses (Begomovirus), such as African cassava mosaic virus, transmitted by whitefly',
  pathogenType: 'viral',
  summary:
    'Cassava mosaic disease is a viral disease of cassava caused by cassava mosaic geminiviruses and spread by whiteflies and infected cuttings. It produces leaf mosaic, distortion, and stunting, and is one of the most damaging constraints on cassava production in Africa.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cassava mosaic disease is caused by a group of whitefly-transmitted geminiviruses (genus Begomovirus) collectively known as cassava mosaic viruses. It is one of the most important diseases of cassava, particularly across sub-Saharan Africa and parts of Asia, where it can severely reduce the size and quality of the storage roots that make cassava a staple food.',
    },
    {
      type: 'paragraph',
      text: 'The disease spreads in two main ways: through the whitefly vector, which moves the virus between plants, and through the widespread practice of propagating cassava from stem cuttings, which carry the virus into new plantings when taken from infected plants. This dual spread makes clean planting material and resistant varieties central to management.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Viral disease (cassava mosaic geminiviruses)' },
    {
      label: 'Key sign',
      value:
        'Yellow-green leaf mosaic, leaf distortion and reduction, and plant stunting',
    },
    { label: 'Hosts', value: 'Cassava' },
    {
      label: 'Favoured by',
      value: 'High whitefly populations and use of infected cuttings',
    },
    {
      label: 'Spread',
      value: 'Whitefly vector and infected stem cuttings used for propagation',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, clean planting material, roguing, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Infected leaves show a characteristic mosaic of yellow and green patches, often with distortion, twisting, and reduction in leaf size. Severely affected plants are stunted, with small, misshapen leaves and reduced canopy, and produce fewer and smaller storage roots. Symptom severity varies with the virus involved, the variety, the age of the plant at infection, and whether the plant grew from an infected cutting or was infected later by whitefly.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Mosaic and distortion symptoms can vary widely and be confused with nutrient disorders or mite damage. Because management depends on confirming the virus, laboratory testing supports reliable diagnosis where symptoms are ambiguous.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava mosaic viruses are transmitted from plant to plant by whiteflies and are carried over in infected cuttings used for propagation. When a grower plants a cutting taken from an infected plant, the resulting plant is infected from the start. Whiteflies then acquire the virus from infected plants and transmit it to healthy ones, allowing the disease to build up within and spread between fields.',
        },
        {
          type: 'list',
          items: [
            'Infected stem cuttings carry the virus directly into new plantings',
            'Whiteflies transmit the virus between plants in the field',
            'High whitefly populations accelerate field-to-field spread',
            'Volunteer and neighbouring infected cassava act as virus reservoirs',
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
          text: 'Cassava is the primary host of concern. The disease is favoured by abundant whitefly populations, the routine use of cuttings from unselected or infected plants, and continuous cassava cultivation that maintains virus reservoirs. Warm conditions that favour whitefly activity increase transmission.',
        },
        {
          type: 'list',
          items: [
            'High whitefly populations and conditions that favour the vector',
            'Use of cuttings taken from infected or unselected plants',
            'Continuous cassava with nearby infected plants as reservoirs',
            'Susceptible varieties that express severe symptoms',
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
          text: 'Because the virus spreads through both cuttings and whiteflies, management combines resistant varieties, clean planting material, and removal of infected plants. Using healthy cuttings and improved varieties has been central to reducing the impact of the disease in affected regions.',
        },
        {
          type: 'list',
          items: [
            'Plant resistant or tolerant varieties recommended for the local area',
            'Use clean, virus-tested planting material from healthy mother plants',
            'Select cuttings only from symptom-free plants',
            'Remove and destroy infected plants (roguing) to reduce virus sources',
            'Manage whitefly populations and nearby infected reservoirs where feasible',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of insecticides or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'cassava' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'cassava-brown-streak-disease' },
    { type: 'plant-disease', slug: 'tobacco-mosaic-virus' },
    { type: 'plant-disease', slug: 'maize-lethal-necrosis' },
  ],
  connections: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Widespread across sub-Saharan Africa and present in parts of Asia; a leading constraint on cassava production in many smallholder systems.',
  climateContext:
    'Spread depends on whitefly activity and the use of infected cuttings rather than on a specific climate; warm conditions that favour whiteflies increase transmission.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Several distinct viruses and strains cause the disease, and their distribution and severity vary by region.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor:
        'Cassava-specific epidemiology, resistant varieties, and clean-seed systems',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Virus biology, transmission, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Virus nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Cassava Mosaic Disease (CMD)',
    description:
      'Cassava mosaic disease overview: cassava mosaic geminivirus biology, leaf mosaic and stunting, whitefly and cutting spread, and management in cassava.',
    keywords: [
      'cassava mosaic disease',
      'cassava mosaic virus',
      'begomovirus',
      'cassava disease',
    ],
  },
  structuredData: { article: true },
};
