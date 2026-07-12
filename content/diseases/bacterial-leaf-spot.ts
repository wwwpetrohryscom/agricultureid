import type { PlantDiseaseContent } from '@/types/content';

export const bacterialLeafSpot: PlantDiseaseContent = {
  id: 'disease-bacterial-leaf-spot',
  slug: 'bacterial-leaf-spot',
  contentType: 'plant-disease',
  title: 'Bacterial Leaf Spot',
  scientificName: 'Xanthomonas spp. and Pseudomonas syringae pv. species',
  alternativeNames: ['Bacterial spot'],
  category: 'Plant disease',
  subcategory: 'Bacterial disease',
  causalAgent:
    'Bacteria, most commonly Xanthomonas spp. and Pseudomonas syringae pathovars, depending on host and region',
  pathogenType: 'bacterial',
  summary:
    'Bacterial leaf spot is a disease of tomato and pepper caused mainly by Xanthomonas and Pseudomonas bacteria, producing small, water-soaked leaf and fruit lesions. It spreads readily in wet, warm conditions and through contaminated seed, water, and equipment.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bacterial leaf spot of tomato and pepper is caused mainly by several species of Xanthomonas, and in some regions by Pseudomonas syringae pathovars, that infect leaves, stems, and fruit. Unlike fungal or oomycete diseases, bacterial spot spreads through water and contact rather than through airborne spores.',
    },
    {
      type: 'paragraph',
      text: 'The disease can cause significant defoliation and reduced marketable yield, particularly where warm, wet weather coincides with susceptible growth stages, and it is notoriously difficult to eliminate once established because bacteria can persist in seed, soil debris, and volunteer plants.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value:
        'Bacterial disease (Xanthomonas spp., Pseudomonas syringae pathovars)',
    },
    {
      label: 'Key sign',
      value:
        'Small, water-soaked lesions that turn brown to black, often with a yellow halo',
    },
    {
      label: 'Hosts',
      value: 'Tomato and sweet pepper',
    },
    {
      label: 'Favoured by',
      value: 'Warm, wet, or humid weather and splashing water',
    },
    {
      label: 'Spread',
      value:
        'Rain splash, overhead irrigation, contaminated seed, transplants, and equipment',
    },
    {
      label: 'Management basis',
      value: 'Clean seed, sanitation, water management, and monitoring',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial leaf spot begins as small, water-soaked spots on leaves that enlarge and turn brown to black, frequently surrounded by a yellow halo. Heavily spotted leaves can yellow and drop, reducing canopy cover and fruit protection. On fruit, infection produces small, raised, scab-like spots that can affect marketability even though the fruit interior is usually unaffected.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Bacterial leaf spot can resemble some fungal leaf spots in the field. Because management responses differ for bacterial and fungal diseases, confirm identification with a diagnostic laboratory or extension service where the distinction matters.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'The causal bacteria enter leaves and fruit mainly through natural openings such as stomata and through wounds, multiplying in the water-soaked tissue before lesions become visible. Because the bacteria need free moisture to move and infect, disease development is closely tied to rain, dew, and irrigation practices that wet foliage.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Rain splash and overhead irrigation',
              description:
                'Move bacteria from infected to healthy tissue and between plants',
            },
            {
              term: 'Contaminated seed and transplants',
              description:
                'Can introduce the pathogen into a previously clean planting',
            },
            {
              term: 'Crop debris and volunteer plants',
              description:
                'Allow bacteria to survive between seasons in the field',
            },
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
          text: 'Tomato and sweet pepper are the principal hosts of bacterial leaf spot, both susceptible to leaf, stem, and fruit infection. Related solanaceous crops and some weeds can also host the bacteria in certain regions, which can complicate management where these plants grow near production fields.',
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
            'Warm, wet, or highly humid weather, especially with wind-driven rain',
            'Overhead irrigation and working in fields while foliage is wet',
            'Use of infected seed or transplants',
            'Handling plants or equipment that move between infected and healthy areas',
            'Dense plantings with limited air movement',
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
          text: 'Because bacterial leaf spot spreads through water and contact rather than airborne spores, prevention focuses on starting with clean planting material, minimising foliage wetness, and limiting mechanical spread.',
        },
        {
          type: 'list',
          items: [
            'Use certified, disease-free seed and transplants',
            'Choose resistant or tolerant varieties where available',
            'Avoid working in fields or handling plants while foliage is wet',
            'Use irrigation methods that minimise leaf wetting where practical',
            'Rotate away from tomato and pepper and remove infected debris and volunteer plants',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of bactericidal products or other control measures must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'sweet-pepper' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'tobacco-mosaic-virus' },
  ],
  connections: [
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global; bacterial leaf spot occurs wherever tomato and pepper are grown, with the greatest severity in warm, wet, or humid production regions and seasons.',
  climateContext:
    'Favoured by warm, wet, or humid conditions; splashing rain and overhead irrigation are the main drivers of within-field spread.',
  limitations: [
    'This is a general overview; several closely related bacterial species and strains are involved, and the mix present varies by region.',
    'Bactericidal control options are more limited than for fungal diseases, and effectiveness depends heavily on local conditions and product registration.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, host range, and disease cycle',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Vegetable crop risk factors and sanitation guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Bacterial Leaf Spot',
    description:
      'Bacterial leaf spot explained: Xanthomonas and Pseudomonas biology, affected hosts, risk factors, and prevention and monitoring guidance.',
    keywords: [
      'bacterial leaf spot',
      'Xanthomonas',
      'tomato disease',
      'pepper disease',
    ],
  },
  structuredData: { article: true },
};
