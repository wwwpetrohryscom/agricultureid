import type { PlantDiseaseContent } from '@/types/content';

export const blackRotOfCrucifers: PlantDiseaseContent = {
  id: 'plant-disease-black-rot-of-crucifers',
  slug: 'black-rot-of-crucifers',
  contentType: 'plant-disease',
  title: 'Black Rot of Crucifers',
  scientificName: 'Xanthomonas campestris pv. campestris',
  alternativeNames: ['Black rot of brassicas', 'Bacterial black rot'],
  category: 'Plant disease',
  subcategory: 'Bacterial disease',
  causalAgent: 'Bacterium Xanthomonas campestris pv. campestris',
  pathogenType: 'bacterial',
  summary:
    'Black rot is a major bacterial disease of brassica crops caused by Xanthomonas campestris pv. campestris. It produces V-shaped yellow lesions at leaf margins with blackened veins and can spread systemically, making seed health and sanitation central to management.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Black rot, caused by the bacterium Xanthomonas campestris pv. campestris, is regarded as one of the most important diseases of cultivated brassicas worldwide. It affects a wide range of cruciferous crops, including cabbage, broccoli, cauliflower, kale, and related plants, and can cause serious losses in both field and seed production.',
    },
    {
      type: 'paragraph',
      text: 'The disease is characterised by V-shaped yellow lesions that develop at the leaf margins, with the veins in and around the lesions turning black as the bacteria colonise the water-conducting tissue. Because the bacterium is readily carried on seed and spreads in water, seed health, sanitation, and rotation are the foundations of its management.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Bacterial disease (Xanthomonas campestris pv. campestris)',
    },
    {
      label: 'Key sign',
      value: 'V-shaped yellow lesions at leaf margins with blackened veins',
    },
    {
      label: 'Hosts',
      value: 'Brassicas, including cabbage, broccoli, cauliflower, and kale',
    },
    {
      label: 'Favoured by',
      value: 'Warm, wet, humid weather and overhead moisture',
    },
    {
      label: 'Spread',
      value:
        'Infected seed and transplants, splashing water, and contaminated tools and residue',
    },
    {
      label: 'Management basis',
      value:
        'Clean seed and transplants, sanitation, rotation, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Classic symptoms are yellow, V-shaped lesions that begin at the leaf margins and point inward toward the midrib, following the pattern of water flow into the leaf. The veins within and beyond the lesions blacken as the bacteria move through the vascular system, and cutting the stem may reveal darkened vascular tissue. Severely affected plants can be stunted, drop leaves, and become predisposed to secondary soft rots.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The V-shaped marginal lesions with blackened veins are strongly indicative of black rot, but confirmation may require laboratory testing, especially to distinguish it from other leaf spots and from nutrient effects.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Xanthomonas campestris pv. campestris survives on and in infected seed, in crop residue, and on cruciferous weeds and volunteers. The bacteria enter leaves mainly through the natural water-releasing pores at the leaf margins (hydathodes) and through wounds, then colonise the vascular system. They spread within crops by splashing rain and irrigation water, on tools and equipment, and by movement of infected transplants.',
        },
        {
          type: 'list',
          items: [
            'Infected seed and transplants are primary sources of the bacterium',
            'Bacteria enter through leaf-margin pores and wounds',
            'Colonisation of the vascular system drives the V-shaped lesions',
            'Splashing water, tools, and residue spread the disease within crops',
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
          text: 'A wide range of brassica crops is affected, including cabbage, broccoli, cauliflower, kale, and related mustards and radishes, along with cruciferous weeds that act as reservoirs. Warm, wet, humid conditions with rain, dew, and overhead irrigation strongly favour infection and spread, and dense plantings that stay wet increase risk.',
        },
        {
          type: 'list',
          items: [
            'Warm, wet, humid weather with rain, dew, or overhead irrigation',
            'Use of infected seed or transplants',
            'Cruciferous weeds and volunteers that reservoir the bacterium',
            'Wounding and handling of wet plants that spreads bacteria',
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
          text: 'Because the bacterium is seed-borne and spread in water, management begins with clean seed and transplants and relies on sanitation, rotation, and water management to limit spread. There is no in-crop cure once plants are systemically infected, so prevention is key.',
        },
        {
          type: 'list',
          items: [
            'Use certified, tested, or treated seed and healthy transplants',
            'Rotate away from brassicas and control cruciferous weeds and volunteers',
            'Avoid working in and handling plants when foliage is wet',
            'Reduce overhead moisture and improve drying where feasible',
            'Sanitise tools and equipment and remove infected residue',
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
  hostCrops: [
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'cauliflower' },
    { type: 'crop', slug: 'kale' },
    { type: 'crop', slug: 'mustard' },
    { type: 'crop', slug: 'radish' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; a leading disease of brassica crops in warm, humid vegetable- and seed-producing regions worldwide.',
  climateContext:
    'Favoured by warm, wet, humid conditions with rain, dew, and overhead irrigation that move bacteria and keep foliage wet; infected seed starts many outbreaks.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'The bacterium has several races and a wide host range, and severity depends strongly on seed health and weather.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Brassica black-rot identification and integrated management',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Black Rot of Crucifers (Brassicas)',
    description:
      'Black rot overview: Xanthomonas campestris pv. campestris biology, V-shaped marginal lesions with blackened veins, and seed-focused management in brassicas.',
    keywords: [
      'black rot of crucifers',
      'Xanthomonas campestris',
      'brassica black rot',
      'cabbage disease',
    ],
  },
  structuredData: { article: true },
};
