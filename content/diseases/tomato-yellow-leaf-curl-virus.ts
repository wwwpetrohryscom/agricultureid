import type { PlantDiseaseContent } from '@/types/content';

export const tomatoYellowLeafCurlVirus: PlantDiseaseContent = {
  id: 'plant-disease-tomato-yellow-leaf-curl-virus',
  slug: 'tomato-yellow-leaf-curl-virus',
  contentType: 'plant-disease',
  title: 'Tomato Yellow Leaf Curl Virus',
  scientificName: 'Tomato yellow leaf curl virus (genus Begomovirus)',
  alternativeNames: ['TYLCV', 'Tomato yellow leaf curl disease'],
  category: 'Plant disease',
  subcategory: 'Viral disease',
  causalAgent:
    'Tomato yellow leaf curl virus (Begomovirus), transmitted by the whitefly Bemisia tabaci',
  pathogenType: 'viral',
  summary:
    'Tomato yellow leaf curl virus is a whitefly-transmitted begomovirus that causes one of the most damaging virus diseases of tomato. Infected plants show upward leaf curling, yellowing, and severe stunting, with heavy losses when young plants are infected.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tomato yellow leaf curl virus (TYLCV) is a begomovirus that causes a severe and widespread disease of tomato, especially in warm regions where its whitefly vector is abundant. It is transmitted by the whitefly Bemisia tabaci and can spread rapidly through a crop, causing dramatic stunting and yield loss, particularly when plants are infected while young.',
    },
    {
      type: 'paragraph',
      text: 'The disease is often described as a complex because several related begomoviruses can cause similar symptoms in different regions. Because the virus is spread efficiently by whiteflies and can move on infected transplants, management depends heavily on clean planting material, resistant varieties, and whitefly management.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Viral disease (Tomato yellow leaf curl virus, a begomovirus)',
    },
    {
      label: 'Key sign',
      value:
        'Upward curling and yellowing of leaves, cupping, and severe stunting of the plant',
    },
    {
      label: 'Hosts',
      value: 'Tomato, with common bean and some other plants also affected',
    },
    {
      label: 'Favoured by',
      value: 'High whitefly populations and use of infected transplants',
    },
    {
      label: 'Spread',
      value: 'The whitefly Bemisia tabaci and movement of infected transplants',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, clean transplants, whitefly management, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'symptoms-and-identification',
      heading: 'Symptoms and identification',
      body: [
        {
          type: 'paragraph',
          text: 'Infected tomato plants show leaves that curl upward and inward, become cupped, and turn yellow between the veins, especially at the growing tips. Plants infected when young are severely stunted with a bushy appearance and drop many flowers, resulting in little or no fruit. Plants infected later tend to show milder symptoms and less yield loss because much of the crop is already set.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Leaf curling and yellowing can also result from herbicide injury, nutrient disorders, or physiological stress. Because management depends on confirming the virus, laboratory testing supports reliable diagnosis where symptoms are ambiguous.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Tomato yellow leaf curl virus is transmitted by the whitefly Bemisia tabaci. Whiteflies acquire the virus while feeding on infected plants and can then transmit it to healthy plants, retaining the ability to infect for an extended period. The virus does not spread by simple contact or on tools, but it moves readily on infected transplants and through populations of viruliferous whiteflies moving between crops and weed hosts.',
        },
        {
          type: 'list',
          items: [
            'Whiteflies acquire the virus from infected plants and transmit it while feeding',
            'Infected transplants can introduce the virus into a new planting',
            'Weed and volunteer hosts act as reservoirs between tomato crops',
            'High whitefly populations drive rapid spread within and between fields',
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
          text: 'Tomato is the principal crop affected, with common bean and various other cultivated and weed plants also able to host the virus or related begomoviruses. The disease is favoured by high populations of the whitefly vector, warm conditions that support whitefly activity, and continuous or overlapping tomato cropping that maintains virus reservoirs.',
        },
        {
          type: 'list',
          items: [
            'High whitefly populations and warm conditions that favour the vector',
            'Use of infected transplants or nearby infected crops',
            'Weed and volunteer hosts that reservoir the virus',
            'Continuous or overlapping tomato production that sustains the cycle',
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
          text: 'Because the virus is spread by whiteflies and on transplants, management combines resistant varieties, clean planting material, and whitefly management, with special emphasis on protecting young plants during the most vulnerable early growth stages.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant or tolerant tomato varieties where available',
            'Use clean, virus-free transplants raised under protection from whiteflies',
            'Manage whitefly populations and remove weed and volunteer reservoirs',
            'Protect young plants, which are most vulnerable to severe infection',
            'Consider crop-free periods and area-wide coordination where feasible',
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
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'common-bean' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'tobacco-mosaic-virus' },
    { type: 'plant-disease', slug: 'cassava-mosaic-disease' },
    { type: 'plant-disease', slug: 'early-blight' },
  ],
  connections: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Widespread in warm tomato-growing regions across the Mediterranean, Middle East, Asia, Africa, and the Americas wherever the whitefly vector occurs.',
  climateContext:
    'Spread depends on whitefly activity and infected transplants rather than a specific climate; warm conditions that favour whiteflies increase transmission.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'A complex of related begomoviruses causes similar disease in different regions, affecting which resistant varieties are effective.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Virus biology, transmission, and host range',
    },
    {
      sourceId: 'eppo-gd',
      citedFor: 'Virus nomenclature, distribution, and regulatory status',
    },
    {
      sourceId: 'efsa',
      citedFor: 'Pest risk and phytosanitary context in Europe',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Tomato Yellow Leaf Curl Virus (TYLCV)',
    description:
      'Tomato yellow leaf curl virus overview: begomovirus biology, whitefly spread, leaf curling and stunting symptoms, and integrated management in tomato.',
    keywords: [
      'tomato yellow leaf curl virus',
      'TYLCV',
      'begomovirus',
      'tomato whitefly virus',
    ],
  },
  structuredData: { article: true },
};
