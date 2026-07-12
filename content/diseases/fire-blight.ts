import type { PlantDiseaseContent } from '@/types/content';

export const fireBlight: PlantDiseaseContent = {
  id: 'disease-fire-blight',
  slug: 'fire-blight',
  contentType: 'plant-disease',
  title: 'Fire Blight',
  scientificName: 'Erwinia amylovora',
  alternativeNames: ['Bacterial fire blight'],
  category: 'Plant disease',
  subcategory: 'Bacterial blossom and shoot blight',
  causalAgent: 'Bacterium Erwinia amylovora',
  pathogenType: 'bacterial',
  summary:
    "Fire blight is a destructive bacterial disease of apple and other pome fruits, caused by Erwinia amylovora. It produces blossom blight and shoot dieback with a characteristic shepherd's-crook shape, and spreads via rain splash, wind, and flower-visiting insects during bloom.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Fire blight, caused by the bacterium Erwinia amylovora, is one of the most serious diseases of apple and other pome fruits. It can move rapidly through blossoms and young shoots during a favourable bloom period, and established cankers on branches or the trunk provide a source of bacteria for future seasons.',
    },
    {
      type: 'paragraph',
      text: 'Bloom-time spread is closely tied to weather and pollinator activity: bacterial ooze produced on cankers and blighted tissue is carried to open flowers by rain splash and wind, and insects visiting blossoms, including pollinating bees, can also move bacteria between flowers.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Bacterial blossom and shoot blight (Erwinia amylovora)',
    },
    {
      label: 'Key sign',
      value:
        "Blossoms and shoots that wilt, blacken, and die, with shoot tips often curling into a shepherd's-crook shape",
    },
    {
      label: 'Hosts',
      value: 'Apple, among other pome fruits and related ornamentals',
    },
    {
      label: 'Favoured by',
      value: 'Warm, wet, or humid weather during bloom',
    },
    {
      label: 'Spread',
      value:
        'Rain splash, wind, and flower-visiting insects, including pollinators',
    },
    {
      label: 'Management basis',
      value: 'Canker removal, resistant varieties, and bloom-time monitoring',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: "Infected blossoms wilt and blacken, and young shoots die back from the tip, often curling into a distinctive shepherd's-crook shape. Cankers on branches or the trunk can appear sunken and discoloured, and in humid conditions may ooze bacterial exudate.",
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Blossom and shoot blight symptoms can resemble frost damage or other blights. Where identification affects a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Bacteria overwinter at the margins of existing cankers and become active in spring, producing ooze that is carried to open blossoms by rain splash, wind, and insects, including pollinators. Bacteria multiply on the stigma surface before entering through natural openings or wounds, then can move systemically into shoots and branches.',
        },
        {
          type: 'list',
          items: [
            'Existing untreated cankers are a key source of bacteria at the start of the bloom period',
            'Hail or wind damage can create additional wounds allowing bacterial entry',
            'Vigorous, succulent shoot growth is more susceptible to systemic spread',
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
          text: 'Apple is a major host of fire blight among pome fruits. Closely related pome-fruit species and some ornamental relatives are also susceptible in many regions.',
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
            'Warm, wet, or humid weather coinciding with bloom',
            'Existing cankers providing a source of bacteria nearby',
            'Hail or wind damage creating wounds during susceptible periods',
            'Vigorous, succulent shoot growth from high nitrogen supply',
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
          text: 'Because fire blight can spread rapidly during a favourable bloom period, management combines reducing existing inoculum, limiting susceptible growth, and monitoring bloom-time weather.',
        },
        {
          type: 'list',
          items: [
            'Plant resistant or tolerant varieties and rootstocks where available',
            'Prune out and destroy cankers and blighted shoots well below visible symptoms, during dry weather',
            'Avoid excess nitrogen that promotes susceptible, succulent growth',
            'Monitor bloom-period weather-based risk information where available',
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
  hostCrops: [{ type: 'crop', slug: 'apple' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'apple-scab' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'hail' },
    { type: 'livestock', slug: 'honey-bees' },
    { type: 'nutrient', slug: 'nitrogen' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Widespread in temperate apple and pome-fruit growing regions; severity depends heavily on bloom-time weather and local canker management history.',
  climateContext:
    'Favoured by warm, wet, or humid weather during bloom, when open blossoms are most susceptible and bacteria are most readily spread by rain and wind.',
  limitations: [
    'This is a general overview; fire blight risk and appropriate response windows are highly weather- and orchard-specific.',
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
      citedFor: 'Orchard risk factors and canker management guidance',
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
    title: 'Fire Blight',
    description:
      'Fire blight explained: Erwinia amylovora biology, bloom-time spread, affected hosts, risk factors, and prevention and canker-management guidance.',
    keywords: [
      'fire blight',
      'Erwinia amylovora',
      'apple disease',
      'bacterial blight',
    ],
  },
  structuredData: { article: true },
};
