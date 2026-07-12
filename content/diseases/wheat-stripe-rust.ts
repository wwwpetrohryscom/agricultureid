import type { PlantDiseaseContent } from '@/types/content';

export const wheatStripeRust: PlantDiseaseContent = {
  id: 'disease-wheat-stripe-rust',
  slug: 'wheat-stripe-rust',
  contentType: 'plant-disease',
  title: 'Wheat Stripe Rust',
  scientificName: 'Puccinia striiformis',
  alternativeNames: ['Yellow rust'],
  category: 'Plant disease',
  subcategory: 'Fungal rust disease',
  causalAgent: 'Fungus Puccinia striiformis',
  pathogenType: 'fungal',
  summary:
    'Wheat stripe rust, also called yellow rust, is caused by the fungus Puccinia striiformis. It produces distinctive yellow-orange pustules arranged in stripes along the leaf veins and, unlike some other wheat rusts, can develop and spread under relatively cool conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Stripe rust is caused by Puccinia striiformis, a fungus that includes forms adapted to different cereal hosts, most importantly Puccinia striiformis f. sp. tritici on wheat and Puccinia striiformis f. sp. hordei on barley. The wheat-adapted form is a major cause of yield loss in cool, temperate wheat-growing regions worldwide.',
    },
    {
      type: 'paragraph',
      text: 'Compared with leaf rust, stripe rust tends to develop at lower temperatures and can spread rapidly during cool, moist spring weather, sometimes appearing earlier in the season than other wheat rusts and reaching damaging levels before conditions warm.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal rust disease (Puccinia striiformis)' },
    {
      label: 'Key sign',
      value:
        'Yellow-orange pustules arranged in narrow stripes running parallel to leaf veins',
    },
    {
      label: 'Hosts',
      value:
        'Wheat and barley, affected by different formae speciales of the same fungal species',
    },
    {
      label: 'Favoured by',
      value:
        'Cool temperatures with moisture on the leaf surface; can develop earlier in the season than other rusts',
    },
    {
      label: 'Spread',
      value: 'Wind-dispersed urediniospores, sometimes over long distances',
    },
    {
      label: 'Management basis',
      value: 'Resistant varieties, monitoring, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Stripe rust is identified by its yellow to orange pustules arranged in narrow stripes that run parallel to the leaf veins, a pattern that distinguishes it from the scattered, rounded pustules of leaf rust. Stripes typically appear first on lower, older leaves and progress upward through the canopy as the epidemic develops; in severe cases the fungus can also affect leaf sheaths and spikes.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Young stripe rust infections can be subtle, especially on resistant varieties showing only a partial reaction. Confirm identification with a diagnostic laboratory or extension service where a management decision depends on it.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Puccinia striiformis produces urediniospores that germinate and infect wheat tissue at cooler temperatures than most other rust fungi, allowing it to establish during cool, humid spring weather while remaining capable of causing damage into the early stages of grain fill. Repeated infection cycles can occur every one to two weeks under favourable conditions.',
        },
        {
          type: 'table',
          caption: 'Stripe rust compared with leaf rust',
          columns: ['Feature', 'Stripe rust', 'Leaf rust'],
          rows: [
            [
              'Pustule pattern',
              'Narrow stripes along veins',
              'Scattered round to oval spots',
            ],
            [
              'Temperature preference',
              'Cooler conditions',
              'Moderate conditions',
            ],
            [
              'Typical onset',
              'Often earlier in the season',
              'Often mid-to-late season',
            ],
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
          text: 'Wheat is the principal host of concern, affected by the tritici forma specialis of Puccinia striiformis. Barley is affected by the related hordei forma specialis of the same fungal species, producing a comparable striped pustule pattern and following broadly similar disease-cycle and risk principles.',
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
            'Cool, moist conditions during autumn, winter, or spring growth',
            'Susceptible varieties, especially where a single resistance gene has become widely deployed',
            'Dense, lush canopies produced by high nitrogen supply',
            'New, more aggressive pathogen strains that overcome previously effective resistance genes',
            'Inoculum arriving from other regions on prevailing winds',
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
          text: 'Because stripe rust can establish under cool conditions earlier in the season than other wheat rusts, and because new pathogen strains periodically overcome existing resistance, management emphasises variety choice, surveillance, and timely detection.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant or tolerant varieties recommended for the local region',
            'Avoid excessive nitrogen that produces dense, highly susceptible canopies',
            'Follow regional rust forecasting, race-tracking, and survey information from extension or agricultural authorities',
            'Scout fields regularly from early growth stages onward, especially in cool, humid weather',
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
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'frost' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'urea' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'cultivar',
  ],
  geographicScope:
    'Global; wheat stripe rust is most damaging in cool, temperate wheat-growing regions and at higher elevations, with severity varying by season and by the resistance genes present in local varieties.',
  climateContext:
    'Favoured by cool temperatures together with moisture on the leaf surface; can develop earlier in the season, and at lower temperatures, than other wheat rusts.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Stripe rust pathogen populations change over time and by region, affecting which resistance genes remain effective; consult local authorities for current status.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'cimmyt',
      citedFor: 'Global wheat rust monitoring and resistance breeding context',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Regional risk factors and monitoring guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Wheat Stripe Rust',
    description:
      'Wheat stripe rust explained: Puccinia striiformis biology, disease cycle, affected hosts, risk factors, and prevention and monitoring guidance.',
    keywords: [
      'wheat stripe rust',
      'yellow rust',
      'Puccinia striiformis',
      'wheat disease',
    ],
  },
  structuredData: { article: true },
};
