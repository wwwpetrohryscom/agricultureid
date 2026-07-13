import type { PlantDiseaseContent } from '@/types/content';

export const earlyBlight: PlantDiseaseContent = {
  id: 'plant-disease-early-blight',
  slug: 'early-blight',
  contentType: 'plant-disease',
  title: 'Early Blight',
  scientificName: 'Alternaria solani (and related Alternaria species)',
  alternativeNames: ['Alternaria blight', 'Target spot (of potato)'],
  category: 'Plant disease',
  subcategory: 'Fungal leaf disease',
  causalAgent:
    'Fungus Alternaria solani, with related Alternaria species also involved on tomato',
  pathogenType: 'fungal',
  summary:
    'Early blight is a common fungal disease of potato and tomato caused by Alternaria solani. It produces dark leaf lesions with concentric rings resembling a target, usually starting on older foliage, and can also affect stems, fruit, and tubers.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Early blight is a widespread foliar and tuber or fruit disease of potato and tomato caused by the fungus Alternaria solani, with related Alternaria species contributing on tomato. Despite its name, it is not necessarily an early-season disease; the name distinguishes it from late blight, and it often becomes most damaging on older, stressed foliage later in the crop.',
    },
    {
      type: 'paragraph',
      text: 'The disease is recognised by its dark lesions marked with concentric rings that give a target-like appearance. Because it is favoured by warm conditions and alternating wet and dry periods, and because it tends to attack plants that are ageing or under stress, early blight is common in many potato and tomato growing regions and is managed through an integrated combination of measures.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal leaf disease (Alternaria solani)' },
    {
      label: 'Key sign',
      value:
        'Dark brown lesions with concentric rings (a target-like pattern) on older leaves',
    },
    {
      label: 'Hosts',
      value: 'Potato, tomato, and other solanaceous crops such as eggplant',
    },
    {
      label: 'Favoured by',
      value: 'Warm weather, alternating wet and dry periods, and plant stress',
    },
    {
      label: 'Spread',
      value:
        'Spores from infected residue and volunteers, then wind and rain splash',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, healthy vigorous plants, rotation and sanitation, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf symptoms begin as small dark spots, usually on the older, lower leaves, that enlarge into brown lesions with characteristic concentric rings surrounded by a yellow halo, giving a target-spot appearance. Heavily infected leaves yellow and die, and the disease can move up the plant. On tomato fruit and potato tubers, the fungus causes dark, sunken, leathery lesions, and stem infections can also occur.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The concentric-ring lesions on older leaves help distinguish early blight from late blight, which produces rapidly spreading water-soaked lesions. Where the distinction matters for management, a diagnostic laboratory can confirm the cause.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Alternaria solani survives between crops on infected residue, in soil, on volunteer plants, and on seed or tubers. Spores (conidia) produced on this residue and on lesions are dispersed by wind and rain splash to infect leaves, and repeating cycles build the disease through the season. Warm temperatures with alternating leaf wetness and drying, along with plant stress, strongly favour infection and sporulation.',
        },
        {
          type: 'list',
          items: [
            'Infected residue, volunteers, soil, and seed or tubers carry the fungus over',
            'Wind- and rain-dispersed conidia infect leaves, stems, fruit, and tubers',
            'Repeating cycles intensify the disease over the season',
            'Ageing and stressed plants are especially susceptible',
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
          text: 'Potato and tomato are the main hosts, with eggplant and other solanaceous plants also affected. Warm weather, dews and light rains that wet foliage followed by drying, and factors that stress or age the crop, such as poor nutrition, drought, or heavy fruit load, all increase susceptibility and severity.',
        },
        {
          type: 'list',
          items: [
            'Warm temperatures with alternating leaf wetness and drying',
            'Plant stress from poor nutrition, drought, or heavy crop load',
            'Infected residue and volunteer solanaceous plants nearby',
            'Susceptible varieties and older, senescing foliage',
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
          text: 'Because early blight is favoured by stress and ageing tissue, keeping plants vigorous and well nourished is a key part of management, alongside sanitation, rotation, and resistant varieties. An integrated approach reduces both inoculum and susceptibility.',
        },
        {
          type: 'list',
          items: [
            'Grow varieties with better early-blight tolerance where available',
            'Maintain vigorous, well-nourished plants to reduce susceptibility',
            'Use rotation and residue management to lower carry-over inoculum',
            'Remove volunteers and cull tubers or fruit that harbour the fungus',
            'Avoid practices that keep foliage wet for long periods where feasible',
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
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'eggplant' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'late-blight' },
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; common wherever potato and tomato are grown, with severity increasing under warm, stress-prone conditions and on ageing foliage.',
  climateContext:
    'Favoured by warm weather with alternating leaf wetness and drying; plant stress and senescing tissue markedly increase susceptibility.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Several Alternaria species are involved on tomato, and severity depends strongly on crop stress and variety.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and integrated management principles',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Potato and tomato early-blight management context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Early Blight of Potato and Tomato',
    description:
      'Early blight overview: Alternaria solani biology, target-spot leaf lesions, warm-weather disease cycle, and integrated management in potato and tomato.',
    keywords: [
      'early blight',
      'Alternaria solani',
      'target spot',
      'potato tomato disease',
    ],
  },
  structuredData: { article: true },
};
