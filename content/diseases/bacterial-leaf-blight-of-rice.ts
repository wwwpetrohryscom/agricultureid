import type { PlantDiseaseContent } from '@/types/content';

export const bacterialLeafBlightOfRice: PlantDiseaseContent = {
  id: 'plant-disease-bacterial-leaf-blight-of-rice',
  slug: 'bacterial-leaf-blight-of-rice',
  contentType: 'plant-disease',
  title: 'Bacterial Leaf Blight of Rice',
  scientificName: 'Xanthomonas oryzae pv. oryzae',
  alternativeNames: [
    'Bacterial blight of rice',
    'BLB',
    'Kresek (seedling phase)',
  ],
  category: 'Plant disease',
  subcategory: 'Bacterial disease',
  causalAgent: 'Bacterium Xanthomonas oryzae pv. oryzae',
  pathogenType: 'bacterial',
  summary:
    'Bacterial leaf blight is a major bacterial disease of rice caused by Xanthomonas oryzae pv. oryzae. It produces water-soaked, yellow-margined lesions that spread from leaf tips, and a severe seedling wilt called kresek, particularly in warm, wet conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bacterial leaf blight is one of the most serious bacterial diseases of rice, caused by the bacterium Xanthomonas oryzae pv. oryzae. It is especially damaging in warm, humid lowland and irrigated rice systems, where it can spread rapidly through fields and reduce grain fill by destroying leaf area.',
    },
    {
      type: 'paragraph',
      text: 'The disease has two main expressions: a leaf-blight phase in which lesions develop from the leaf tips and margins, and a more destructive seedling phase called kresek, in which young plants wilt and can die soon after transplanting. Management relies heavily on resistant varieties, healthy seed, and water and nutrient practices that reduce spread.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Bacterial disease (Xanthomonas oryzae pv. oryzae)',
    },
    {
      label: 'Key sign',
      value:
        'Water-soaked lesions turning yellow to straw-coloured, spreading from leaf tips and margins',
    },
    { label: 'Hosts', value: 'Rice' },
    {
      label: 'Favoured by',
      value: 'Warm temperatures, high humidity, rain, wind, and standing water',
    },
    {
      label: 'Spread',
      value:
        'Bacteria in irrigation water, rain splash, wind-driven rain, and on seed and residue',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, clean seed, balanced nutrition, water management, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'In the leaf-blight phase, lesions begin as water-soaked streaks near the leaf tips and margins, then enlarge and turn yellow to straw-coloured with a wavy margin, often extending down the leaf. In humid conditions, droplets of bacterial ooze may form on lesions and dry into small beads. In the kresek phase, young transplanted seedlings wilt, roll, and turn yellow to grey-green before dying, sometimes leading to loss of whole hills.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Bacterial leaf blight can be confused with bacterial leaf streak and with drought or nutrient injury. A simple test for bacterial ooze from a cut lesion, and laboratory confirmation, help distinguish it from fungal and abiotic causes.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Xanthomonas oryzae pv. oryzae survives on infected rice residue, in weeds and volunteer rice, and can be carried on seed. The bacteria enter plants through natural openings such as leaf pores (hydathodes) and through wounds, then multiply and move within the water-conducting tissue. They spread within and between fields in irrigation and rain water, in wind-driven rain, and through contact between plants.',
        },
        {
          type: 'list',
          items: [
            'Bacteria survive on residue, weeds, volunteer rice, and seed',
            'They enter through leaf pores and wounds, especially after storms',
            'Multiplication in the vascular tissue drives lesion spread',
            'Irrigation water, rain splash, and wind-driven rain move bacteria between plants',
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
          text: 'Rice is the primary host. The disease is favoured by warm temperatures, high humidity, heavy rain and wind that wound plants and spread bacteria, deep standing water, and high nitrogen fertilisation that produces lush, susceptible growth. Storms and flooding often precede outbreaks because they injure plants and move inoculum.',
        },
        {
          type: 'list',
          items: [
            'Warm, humid weather with frequent rain and wind',
            'Deep or stagnant standing water in the field',
            'High or unbalanced nitrogen that produces lush growth',
            'Wounding from storms, flooding, or handling during transplanting',
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
          text: 'Because chemical options are limited for bacterial diseases, management depends heavily on resistant varieties and cultural practices that reduce inoculum, wounding, and spread. Balanced nutrition and careful water management are particularly important.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant varieties suited to the local pathogen populations',
            'Use clean, healthy seed and remove infected residue and weed hosts',
            'Apply nitrogen in balanced, split amounts rather than heavy single doses',
            'Manage water to avoid deep, stagnant flooding where feasible',
            'Minimise plant injury during transplanting and field operations',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of control products must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'rice' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'rice-blast' },
    { type: 'plant-disease', slug: 'sheath-blight' },
    { type: 'plant-disease', slug: 'brown-spot-of-rice' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global in rice-growing regions; most damaging in warm, humid lowland and irrigated systems in tropical and subtropical Asia and beyond.',
  climateContext:
    'Favoured by warm, humid weather with heavy rain and wind that wound plants and spread bacteria in water; deep standing water and high nitrogen increase severity.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Pathogen populations differ by region, which affects which resistant varieties remain effective; consult local authorities for current status.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'irri',
      citedFor: 'Rice-specific biology, symptoms, and integrated management',
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
    title: 'Bacterial Leaf Blight of Rice',
    description:
      'Bacterial leaf blight of rice overview: Xanthomonas oryzae pv. oryzae biology, leaf-blight and kresek phases, and integrated management in rice.',
    keywords: [
      'bacterial leaf blight of rice',
      'Xanthomonas oryzae',
      'rice bacterial blight',
      'kresek',
    ],
  },
  structuredData: { article: true },
};
