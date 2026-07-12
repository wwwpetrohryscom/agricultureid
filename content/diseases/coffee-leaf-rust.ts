import type { PlantDiseaseContent } from '@/types/content';

export const coffeeLeafRust: PlantDiseaseContent = {
  id: 'disease-coffee-leaf-rust',
  slug: 'coffee-leaf-rust',
  contentType: 'plant-disease',
  title: 'Coffee Leaf Rust',
  scientificName: 'Hemileia vastatrix',
  alternativeNames: ['Coffee rust', 'Roya'],
  category: 'Plant disease',
  subcategory: 'Fungal rust disease',
  causalAgent: 'Fungus Hemileia vastatrix',
  pathogenType: 'fungal',
  summary:
    'Coffee leaf rust is caused by the fungus Hemileia vastatrix, producing orange-yellow powdery pustules on the underside of coffee leaves that lead to premature leaf drop, reduced photosynthetic capacity, and yield loss, particularly in susceptible arabica coffee.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Coffee leaf rust, caused by Hemileia vastatrix, is one of the most significant diseases of coffee worldwide. It produces characteristic powdery, orange-yellow pustules on the underside of leaves, and heavy infection causes premature leaf drop that weakens trees and reduces yield.',
    },
    {
      type: 'paragraph',
      text: 'Arabica coffee is generally more susceptible than robusta coffee, though susceptibility also varies by cultivar and by the numerous known races of the pathogen. Shade management, plant nutrition, and prevailing weather all influence how severely an outbreak develops in a given season.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal rust disease (Hemileia vastatrix)' },
    {
      label: 'Key sign',
      value:
        'Yellow-orange, powdery pustules mainly on the underside of leaves, with corresponding pale spots above',
    },
    {
      label: 'Hosts',
      value: 'Coffee, with arabica generally more susceptible than robusta',
    },
    {
      label: 'Favoured by',
      value:
        'Warm temperatures with humidity and leaf wetness from rain or dew',
    },
    {
      label: 'Spread',
      value: 'Wind-dispersed and rain-splashed spores',
    },
    {
      label: 'Management basis',
      value:
        'Resistant cultivars, shade and density management, and balanced plant nutrition',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: "Yellow-orange, powdery pustules develop mainly on the underside of leaves, with corresponding pale yellow spots visible on the upper surface. Heavily infected leaves drop prematurely, progressively thinning the canopy and reducing the tree's capacity to fill developing cherries.",
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Coffee leaf rust can resemble other leaf spots and nutrient-deficiency symptoms at low severity. Where identification affects a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Spores are dispersed mainly by wind and rain splash and germinate in the presence of free moisture on the leaf surface. Hemileia vastatrix is an obligate parasite requiring living coffee tissue, and repeated infection cycles can build up over a growing season under warm, humid conditions.',
        },
        {
          type: 'list',
          items: [
            'Free moisture on leaves, from rain or dew, is needed for spore germination and infection',
            'Wind carries spores between plants and can move inoculum across a plantation and beyond',
            'Numerous distinct races of the pathogen exist, affecting which cultivars remain resistant over time',
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
          text: 'Coffee is the host of Hemileia vastatrix. Arabica coffee is generally more susceptible than robusta coffee, and susceptibility varies further among individual cultivars and with the pathogen races present locally.',
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
            'Warm temperatures combined with humidity and leaf wetness from rain or dew',
            'Dense, heavily shaded, or poorly ventilated plantings that retain leaf moisture',
            'Susceptible cultivars',
            'Plant stress from heavy bearing loads or inadequate nutrition, which can reduce resilience',
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
          text: 'Because coffee leaf rust depends on leaf wetness and can build up over a season, prevention combines cultivar choice, canopy and shade management, and maintaining tree vigour through balanced nutrition.',
        },
        {
          type: 'list',
          items: [
            'Plant rust-resistant cultivars where suited to the region and market',
            'Manage shade levels and plant density to improve airflow and reduce leaf wetness duration',
            'Maintain balanced plant nutrition to support tree vigour and resilience',
            'Monitor and prune to remove severely affected leaves and improve canopy conditions',
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
  hostCrops: [{ type: 'crop', slug: 'coffee' }],
  relatedTopics: [
    { type: 'plant-disease', slug: 'black-sigatoka' },
    { type: 'plant-disease', slug: 'rice-blast' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Widespread in coffee-growing regions worldwide, with severity varying by climate, cultivar, shade management, and the pathogen races present locally.',
  climateContext:
    'Favoured by warm temperatures combined with humidity and leaf wetness from rain or dew; shade and canopy management influence how much leaf wetness accumulates on a given planting.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Pathogen races and cultivar resistance shift over time and by region; consult local authorities and breeding programmes for current status.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'cgiar',
      citedFor: 'Coffee disease research and management context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global coffee production and disease context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Coffee Leaf Rust',
    description:
      'Coffee leaf rust explained: Hemileia vastatrix biology, pustule identification, disease cycle, risk factors, and shade and nutrition management guidance.',
    keywords: [
      'coffee leaf rust',
      'Hemileia vastatrix',
      'coffee disease',
      'coffee rust',
    ],
  },
  structuredData: { article: true },
};
