import type { PlantDiseaseContent } from '@/types/content';

export const brownSpotOfRice: PlantDiseaseContent = {
  id: 'plant-disease-brown-spot-of-rice',
  slug: 'brown-spot-of-rice',
  contentType: 'plant-disease',
  title: 'Brown Spot of Rice',
  scientificName: 'Bipolaris oryzae (teleomorph Cochliobolus miyabeanus)',
  alternativeNames: ['Helminthosporium leaf spot of rice', 'Sesame leaf spot'],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent:
    'Fungus Bipolaris oryzae (teleomorph Cochliobolus miyabeanus; formerly Helminthosporium oryzae)',
  pathogenType: 'fungal',
  summary:
    'Brown spot is a fungal disease of rice caused by Bipolaris oryzae. It produces numerous small, brown, oval leaf spots and is strongly associated with nutrient-poor, stressed soils, making it a classic indicator of poor crop nutrition.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Brown spot of rice, caused by the fungus Bipolaris oryzae, is a widespread disease that affects the leaves and grains of rice. It is historically notable as a disease strongly linked to nutrient deficiency and soil stress, and it was associated with severe famine-era rice losses where crops were grown on impoverished soils.',
    },
    {
      type: 'paragraph',
      text: 'Because the disease is so closely tied to plant stress, it is often described as a disease of poor soils and undernourished crops. It produces numerous small brown spots on the leaves and can also discolour and shrivel grain, and both seed and residue carry the fungus between crops.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal leaf disease (Bipolaris oryzae)' },
    {
      label: 'Key sign',
      value:
        'Numerous small, oval, brown leaf spots, often with a paler centre',
    },
    { label: 'Hosts', value: 'Rice' },
    {
      label: 'Favoured by',
      value:
        'Nutrient-poor or stressed soils, warm humid weather, and leaf wetness',
    },
    {
      label: 'Spread',
      value:
        'Seed-borne and residue-borne spores, then wind and rain within the crop',
    },
    {
      label: 'Management basis',
      value:
        'Balanced soil fertility, healthy seed, resistant varieties, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Brown spot produces numerous small, circular to oval brown spots scattered across the leaves. As they develop, the spots often show a brown margin with a greyish or tan centre, and heavy infection can give leaves a speckled, sesame-seed appearance. The fungus also attacks the grain, producing brown to black discoloration and shrivelling, and can cause seedling blight from infected seed.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Brown spot can be confused with rice blast and with nutrient-deficiency symptoms. The rounded, evenly distributed spots and the strong link with poor soils are useful clues, and a diagnostic laboratory can confirm the pathogen.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Bipolaris oryzae survives on infected seed and crop residue and can also persist on weed hosts. Spores (conidia) produced on lesions and residue are dispersed by wind and rain splash to infect leaves and grains. Infected seed can carry the fungus into new crops and cause seedling infection, and warm, humid conditions with leaf wetness favour infection and sporulation.',
        },
        {
          type: 'list',
          items: [
            'Infected seed and residue carry the fungus between crops',
            'Wind- and rain-dispersed conidia infect leaves and grains',
            'Infected seed can cause seedling blight in new crops',
            'Plant stress from poor nutrition greatly increases susceptibility',
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
          text: 'Rice is the primary host. The single most important factor in severe brown spot is plant stress, particularly nutrient deficiency and unfavourable soils, which weaken the crop and make it far more susceptible. Warm, humid weather with prolonged leaf wetness then favours infection, and drought-stressed or poorly managed crops are especially vulnerable.',
        },
        {
          type: 'list',
          items: [
            'Nutrient-deficient, degraded, or otherwise stressful soils',
            'Warm, humid weather with prolonged leaf wetness',
            'Use of infected seed carrying the fungus',
            'Drought stress and other conditions that weaken the crop',
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
          text: 'Because brown spot is fundamentally a disease of stressed, undernourished crops, correcting soil fertility and reducing plant stress are the most effective measures, supported by healthy seed and resistant varieties.',
        },
        {
          type: 'list',
          items: [
            'Correct soil fertility and nutrient deficiencies through balanced fertilisation',
            'Use clean, tested, or treated seed to avoid seed-borne infection',
            'Grow resistant or tolerant varieties where available',
            'Manage water and other stresses to keep the crop vigorous',
            'Remove infected residue and volunteer hosts to reduce inoculum',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of seed treatments or other control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'rice' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'rice-blast' },
    { type: 'plant-disease', slug: 'bacterial-leaf-blight-of-rice' },
    { type: 'plant-disease', slug: 'sheath-blight' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'humidity' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'macronutrient',
  ],
  geographicScope:
    'Global in rice-growing regions; particularly severe on nutrient-poor and degraded soils in rainfed and stressed production systems.',
  climateContext:
    'Favoured by warm, humid weather with prolonged leaf wetness, but severity is driven above all by plant stress from poor soil nutrition.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Severity depends heavily on soil fertility and crop stress, which vary widely between fields and seasons.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor:
        'Rice-specific biology, nutrition links, and integrated management',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Brown Spot of Rice',
    description:
      'Brown spot of rice overview: Bipolaris oryzae biology, brown leaf and grain spots, links to poor soil nutrition, and integrated management in rice.',
    keywords: [
      'brown spot of rice',
      'Bipolaris oryzae',
      'Cochliobolus miyabeanus',
      'rice leaf spot',
    ],
  },
  structuredData: { article: true },
};
