import type { PlantDiseaseContent } from '@/types/content';

export const cassavaBrownStreakDisease: PlantDiseaseContent = {
  id: 'plant-disease-cassava-brown-streak-disease',
  slug: 'cassava-brown-streak-disease',
  contentType: 'plant-disease',
  title: 'Cassava Brown Streak Disease',
  scientificName:
    'Cassava brown streak virus and Ugandan cassava brown streak virus (genus Ipomovirus)',
  alternativeNames: ['CBSD', 'Brown streak'],
  category: 'Plant disease',
  subcategory: 'Viral disease',
  causalAgent:
    'Ipomoviruses (family Potyviridae): Cassava brown streak virus and Ugandan cassava brown streak virus, transmitted by whitefly',
  pathogenType: 'viral',
  summary:
    'Cassava brown streak disease is a viral disease of cassava caused by ipomoviruses spread by whiteflies and infected cuttings. It is especially damaging because it causes a dry, corky brown rot inside the storage roots, often with few obvious leaf symptoms.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cassava brown streak disease is caused by two closely related ipomoviruses, Cassava brown streak virus and Ugandan cassava brown streak virus (family Potyviridae). It is one of the most serious threats to cassava in East and Central Africa, and it is particularly damaging because its greatest impact is on the storage roots, which are the harvested product.',
    },
    {
      type: 'paragraph',
      text: 'Unlike some other cassava virus diseases, brown streak often causes only limited leaf symptoms while producing a dry, brown, corky necrosis inside the roots that can make them unusable. Because the damage may not be visible until harvest, the disease can spread widely before growers recognise its impact, making clean planting material and resistant varieties essential.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Viral disease (cassava brown streak ipomoviruses)',
    },
    {
      label: 'Key sign',
      value:
        'Dry, brown, corky necrosis inside storage roots, sometimes with leaf chlorosis and stem streaks',
    },
    { label: 'Hosts', value: 'Cassava' },
    {
      label: 'Favoured by',
      value: 'Whitefly populations and use of infected cuttings',
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
          text: 'Leaf symptoms, when present, appear as a yellow chlorosis along the veins or in blotches between the veins, and brown streaks can develop on the stems. The most important and damaging symptom, however, is internal: a dry, brown, corky necrosis within the storage roots, sometimes with surface constrictions. Because roots can be badly affected while foliage looks relatively healthy, the disease is often underestimated until harvest.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Root necrosis may not be visible without cutting the roots, so plants can appear healthy while carrying serious damage. Laboratory testing and careful root inspection support reliable diagnosis, and suspected new outbreaks should be reported to plant-health authorities.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Pathogen and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'The cassava brown streak viruses are transmitted by whiteflies and are carried over in infected cuttings used for propagation. As with other cassava virus diseases, planting cuttings from infected plants introduces the virus directly, while whiteflies spread it between plants in the field. The disease tends to intensify over successive cycles of propagation from infected material.',
        },
        {
          type: 'list',
          items: [
            'Infected cuttings carry the viruses directly into new plantings',
            'Whiteflies transmit the viruses between plants in the field',
            'Repeated propagation from infected plants intensifies the disease',
            'Neighbouring infected cassava acts as a virus reservoir',
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
          text: 'Cassava is the primary host of concern. The disease is favoured by whitefly populations, use of cuttings from infected plants, and continuous cassava cultivation that maintains virus reservoirs. Its spread has been associated with the movement of infected planting material and with conditions that support high whitefly numbers.',
        },
        {
          type: 'list',
          items: [
            'High whitefly populations and conditions that favour the vector',
            'Use of cuttings from infected or unselected plants',
            'Continuous cassava with nearby infected plants as reservoirs',
            'Movement of infected planting material into new areas',
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
          text: 'Management mirrors that of other cassava virus diseases: resistant or tolerant varieties, clean planting material, and removal of infected plants, combined with vigilance because root damage can be hidden. Coordinated clean-seed systems are particularly important given the hidden nature of the disease.',
        },
        {
          type: 'list',
          items: [
            'Plant resistant or tolerant varieties recommended for the local area',
            'Use clean, virus-tested planting material from healthy mother plants',
            'Select cuttings only from plants confirmed free of the disease',
            'Remove and destroy infected plants to reduce virus sources',
            'Manage whitefly populations and reservoirs where feasible',
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
    { type: 'plant-disease', slug: 'cassava-mosaic-disease' },
    { type: 'plant-disease', slug: 'tobacco-mosaic-virus' },
  ],
  connections: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Widespread in East and Central Africa, including coastal lowlands and increasingly higher-altitude areas; a major and expanding threat to cassava production.',
  climateContext:
    'Spread depends on whitefly activity and infected cuttings rather than on a specific climate; warm conditions favouring whiteflies increase transmission.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Two distinct viruses cause the disease and root damage can be hidden until harvest, complicating field assessment.',
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
    title: 'Cassava Brown Streak Disease (CBSD)',
    description:
      'Cassava brown streak disease overview: ipomovirus biology, hidden root necrosis, whitefly and cutting spread, and clean-seed management in cassava.',
    keywords: [
      'cassava brown streak disease',
      'CBSD',
      'cassava brown streak virus',
      'cassava disease',
    ],
  },
  structuredData: { article: true },
};
