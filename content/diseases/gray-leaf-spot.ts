import type { PlantDiseaseContent } from '@/types/content';

export const grayLeafSpot: PlantDiseaseContent = {
  id: 'plant-disease-gray-leaf-spot',
  slug: 'gray-leaf-spot',
  contentType: 'plant-disease',
  title: 'Gray Leaf Spot',
  scientificName: 'Cercospora zeae-maydis',
  alternativeNames: ['Grey leaf spot of maize', 'GLS'],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent:
    'Fungus Cercospora zeae-maydis (and the closely related Cercospora zeina)',
  pathogenType: 'fungal',
  summary:
    'Gray leaf spot is a foliar fungal disease of maize caused by Cercospora zeae-maydis. It produces long, narrow, grey-to-tan lesions bounded by the leaf veins and can sharply reduce grain fill when it develops early in humid, residue-rich systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Gray leaf spot is one of the most important foliar diseases of maize in many production regions, caused by the fungus Cercospora zeae-maydis (with the related Cercospora zeina responsible in some areas). It produces distinctive rectangular lesions that are limited by the leaf veins, giving them a characteristic blocky, grey-to-tan appearance as they mature.',
    },
    {
      type: 'paragraph',
      text: 'The disease has become more prominent with the spread of reduced tillage and continuous maize, because the fungus overwinters on maize residue left at the soil surface. When lesions reach the leaves around and above the ear during grain fill, they reduce photosynthesis and can cause significant yield loss and stalk weakening.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal leaf disease (Cercospora zeae-maydis)' },
    {
      label: 'Key sign',
      value:
        'Long, narrow, rectangular grey-to-tan lesions bounded by leaf veins',
    },
    { label: 'Hosts', value: 'Maize, including sweetcorn' },
    {
      label: 'Favoured by',
      value: 'Warm, humid weather with heavy dew and surface maize residue',
    },
    {
      label: 'Spread',
      value: 'Spores from infected residue, then wind and rain within the crop',
    },
    {
      label: 'Management basis',
      value:
        'Resistant hybrids, rotation and residue management, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Early symptoms are small, pinpoint spots that expand into long, narrow, rectangular lesions running parallel to the leaf and sharply limited by the veins, giving them straight sides. Mature lesions are grey to tan and, when numerous, can merge to blight large areas of leaf. Holding a leaf up to the light shows the veins clearly bounding each lesion, a key diagnostic feature.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Gray leaf spot can resemble other maize leaf diseases early on. The rectangular, vein-limited shape of mature lesions is the most reliable field clue; confirm with a diagnostic laboratory where a decision depends on it.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Cercospora zeae-maydis survives between seasons on infected maize residue at the soil surface. Under warm, humid conditions it produces spores (conidia) that are carried by wind and rain splash onto the lower leaves of a new crop. Repeating cycles of infection then move the disease up the plant, with heavy dew and high humidity strongly favouring spore production and infection.',
        },
        {
          type: 'list',
          items: [
            'Infected maize residue at the surface is the main source of inoculum',
            'Wind- and rain-dispersed conidia infect the lower leaves first',
            'Warm, humid nights with heavy dew favour sporulation and infection',
            'Repeating cycles carry lesions up toward the ear leaf during grain fill',
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
          text: 'Maize, including sweetcorn, is the host of this disease. Continuous maize with reduced tillage keeps large amounts of infected residue at the surface, and warm, humid, dew-prone weather then drives infection. Fields in river bottoms, sheltered sites, and areas with long periods of leaf wetness tend to see the most severe development.',
        },
        {
          type: 'list',
          items: [
            'Continuous maize with surface residue retained under reduced tillage',
            'Warm temperatures with high humidity and prolonged heavy dew',
            'Sheltered, low-lying fields where leaf wetness persists',
            'Susceptible hybrids that allow rapid lesion development',
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
          text: 'Management combines resistant hybrids with practices that reduce residue-borne inoculum. Because the disease is driven by overwintering residue, rotation and residue handling are particularly effective in continuous-maize systems.',
        },
        {
          type: 'list',
          items: [
            'Select hybrids with good gray-leaf-spot resistance ratings',
            'Rotate away from maize and manage residue to reduce carry-over inoculum',
            'Scout the ear leaf and leaves above it from tasselling through grain fill',
            'Favour practices that reduce prolonged leaf wetness where feasible',
            'Prioritise higher-risk fields such as sheltered or river-bottom sites',
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
    { type: 'plant-disease', slug: 'tar-spot-of-corn' },
    { type: 'plant-disease', slug: 'common-smut' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; important across maize-growing regions with humid summers, especially where continuous maize and reduced tillage retain residue.',
  climateContext:
    'Favoured by warm, humid weather with heavy dew and long periods of leaf wetness; surface maize residue supplies the inoculum that starts each season.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Two closely related Cercospora species cause the disease in different regions, and hybrid reactions vary; consult local authorities for current status.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Identification and residue-based management in maize',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize gray-leaf-spot resistance and management context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Gray Leaf Spot of Maize',
    description:
      'Gray leaf spot overview: Cercospora zeae-maydis biology, rectangular vein-limited lesions, humid-residue disease cycle, and integrated management in maize.',
    keywords: [
      'gray leaf spot',
      'Cercospora zeae-maydis',
      'maize disease',
      'corn leaf disease',
    ],
  },
  structuredData: { article: true },
};
