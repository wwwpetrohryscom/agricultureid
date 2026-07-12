import type { PlantDiseaseContent } from '@/types/content';

export const bacterialWilt: PlantDiseaseContent = {
  id: 'disease-bacterial-wilt',
  slug: 'bacterial-wilt',
  contentType: 'plant-disease',
  title: 'Bacterial Wilt',
  scientificName:
    'Ralstonia solanacearum species complex; related Erwinia and Dickeya species cause similar wilts in some hosts and regions',
  alternativeNames: [
    'Ralstonia wilt',
    'Southern bacterial wilt',
    'Brown rot (potato)',
  ],
  category: 'Plant disease',
  subcategory: 'Bacterial vascular wilt',
  causalAgent:
    'Bacteria, principally the Ralstonia solanacearum species complex; related Erwinia/Dickeya species in some hosts',
  pathogenType: 'bacterial',
  summary:
    'Bacterial wilt is a soil-borne disease affecting tomato, potato, cassava, and ginger among many other crops, caused mainly by Ralstonia solanacearum. It produces rapid wilting and vascular browning and is favoured by warm, wet soil conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bacterial wilt is caused principally by bacteria in the Ralstonia solanacearum species complex, though related Erwinia and Dickeya species cause similar wilt diseases in some hosts and regions. The bacteria colonise the water-conducting xylem tissue, blocking water movement and causing often sudden wilting.',
    },
    {
      type: 'paragraph',
      text: 'The disease affects a very broad range of crops, including tomato, potato, cassava, and ginger, and is notoriously persistent because the bacteria can survive in soil, water, and infected plant material for extended periods, and can also be carried in vegetatively propagated planting material such as seed tubers or cuttings.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Bacterial vascular wilt (Ralstonia solanacearum species complex)',
    },
    {
      label: 'Key sign',
      value:
        'Rapid wilting, often with little prior yellowing, and milky bacterial ooze from a cut, water-suspended stem',
    },
    {
      label: 'Hosts',
      value:
        'Very wide host range, including tomato, potato, cassava, and ginger',
    },
    {
      label: 'Favoured by',
      value:
        'Warm temperatures combined with high soil moisture or waterlogging',
    },
    {
      label: 'Spread',
      value:
        'Contaminated soil, irrigation or surface water, infected planting material, and equipment',
    },
    {
      label: 'Management basis',
      value:
        'Clean planting material, drainage, sanitation, and rotation away from susceptible hosts',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial wilt often causes rapid wilting of whole plants or individual stems, sometimes with little preceding yellowing. A useful field diagnostic is the cut-stem test: a freshly cut, symptomatic stem suspended in a glass of clear water often streams a milky, thread-like bacterial ooze within a few minutes.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rapid wilting can have several causes. Where identification affects a management decision, confirm with a diagnostic laboratory or extension service, particularly given the regulatory status of Ralstonia solanacearum in some regions.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'The bacteria survive in soil, water, infected plant debris, and some weed hosts for extended periods. They enter plants through root wounds, natural openings, or infected vegetative planting material, then multiply within xylem vessels, physically and physiologically blocking water transport.',
        },
        {
          type: 'list',
          items: [
            'Infected seed tubers, cuttings, or other planting material can introduce the pathogen into a previously clean field',
            'Contaminated irrigation water and surface water can spread bacteria between plants and fields',
            'The bacteria can persist in soil and some weed hosts between susceptible crops',
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
          text: 'Bacterial wilt affects a very wide range of solanaceous and other crops. Tomato, potato, cassava, and ginger are notable hosts, and many other vegetatively propagated crops are also affected in different regions.',
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
            'Warm temperatures combined with high soil moisture or waterlogging',
            'Use of infected seed tubers, cuttings, or other planting material',
            'Movement of contaminated irrigation or surface water between fields',
            'Poorly drained soils that retain moisture around roots',
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
          text: 'Because bacterial wilt spreads through water, soil, and planting material rather than airborne spores, prevention centres on clean planting material, water management, and sanitation.',
        },
        {
          type: 'list',
          items: [
            'Use certified, pathogen-free seed tubers, cuttings, or other planting material',
            'Improve field drainage and avoid waterlogging where practical',
            'Avoid moving water, soil, or equipment between infected and clean fields',
            'Rotate away from susceptible hosts and remove infected plants and debris promptly',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of control products or soil treatments must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'ginger' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'verticillium-wilt' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'crop-rotation'],
  geographicScope:
    'Widespread in warm temperate, subtropical, and tropical regions; particularly damaging where warm, wet conditions coincide with susceptible crops and contaminated water or planting material.',
  climateContext:
    'Favoured by warm temperatures combined with high soil moisture; waterlogged or poorly drained soils increase both disease development and within-field spread.',
  limitations: [
    'This is a general overview; several related bacterial species and strains are involved, and the mix present varies by host and region.',
    'Ralstonia solanacearum is a regulated quarantine pest in some jurisdictions; regulatory requirements are not covered here and should be confirmed with local authorities.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'cip',
      citedFor: 'Bacterial wilt biology and management in potato',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Bacterial Wilt',
    description:
      'Bacterial wilt explained: Ralstonia solanacearum biology, cut-stem diagnosis, affected hosts, risk factors, and prevention and sanitation guidance.',
    keywords: [
      'bacterial wilt',
      'Ralstonia solanacearum',
      'vascular wilt',
      'soil-borne disease',
    ],
  },
  structuredData: { article: true },
};
