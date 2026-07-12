import type { PlantDiseaseContent } from '@/types/content';

export const wheatLeafRust: PlantDiseaseContent = {
  id: 'disease-wheat-leaf-rust',
  slug: 'wheat-leaf-rust',
  contentType: 'plant-disease',
  title: 'Wheat Leaf Rust',
  scientificName: 'Puccinia triticina',
  alternativeNames: ['Brown rust'],
  category: 'Plant disease',
  subcategory: 'Fungal rust disease',
  causalAgent: 'Fungus Puccinia triticina',
  pathogenType: 'fungal',
  summary:
    'Wheat leaf rust is one of the most widespread rust diseases of wheat, caused by the fungus Puccinia triticina. It produces orange-brown pustules on leaves and can reduce yield when infection develops early and spreads widely under favourable weather.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wheat leaf rust, also called brown rust, is caused by Puccinia triticina, a highly specialised fungus that depends on living wheat tissue to complete its life cycle. It occurs in nearly every wheat-growing region of the world and is one of the three classic wheat rust diseases, alongside stripe rust and stem rust.',
    },
    {
      type: 'paragraph',
      text: 'The fungus produces enormous numbers of wind-dispersed spores that can travel long distances, allowing epidemics to build up over a season and, in some regions, to move between production areas as the growing season progresses from south to north or between hemispheres.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal rust disease (Puccinia triticina)' },
    {
      label: 'Key sign',
      value:
        'Small, round to oval orange-brown pustules scattered on the upper leaf surface',
    },
    {
      label: 'Hosts',
      value:
        'Wheat is the primary host; barley is affected by a related leaf rust fungus',
    },
    {
      label: 'Favoured by',
      value: 'Moderate temperatures with dew or free moisture on leaves',
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
          text: 'Leaf rust appears as small, round to oval pustules of orange-brown spores, mostly scattered across the upper surface of leaves rather than arranged in the linear stripes typical of stripe rust. Pustules rupture the leaf surface (epidermis) as they mature, and heavily infected leaves can yellow and die back prematurely, reducing the green leaf area available for grain fill.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Leaf rust, stripe rust, and stem rust can be confused in the field, especially early in an epidemic. Pustule arrangement and colour are useful clues, but confirmation from a diagnostic laboratory or extension service is recommended when a management decision depends on the distinction.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Once established, Puccinia triticina cycles repeatedly through the season: spores produced on infected leaves germinate and infect new tissue, and a fresh generation of pustules can appear roughly seven to ten days later under favourable weather, allowing disease pressure to build rapidly if conditions stay favourable.',
        },
        {
          type: 'list',
          items: [
            'Volunteer wheat plants and infected residue can carry the fungus between growing seasons in some regions',
            'In regions with mild winters, the fungus can survive on living wheat through the cold season',
            'Long-distance, wind-borne spore movement can introduce new inoculum into a region each season',
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
          text: 'Wheat is the primary and most economically important host of Puccinia triticina. Barley is affected by a closely related rust fungus, Puccinia hordei, which causes a similar leaf rust disease with comparable symptoms and biology; the two are often discussed together as cereal leaf rusts even though they are caused by distinct, host-specialised fungal species.',
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
            'Moderate temperatures combined with dew, rain, or high humidity during the growing season',
            'Susceptible varieties, especially where a single resistance gene has become widely deployed',
            'Dense, lush canopies produced by high nitrogen supply',
            'Nearby volunteer wheat or infected crop residue carrying the fungus over from a previous season',
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
          text: 'Because leaf rust spreads quickly once established and can arrive from outside a field or region, management relies on reducing susceptibility ahead of the season and detecting problems early rather than reacting after an epidemic is underway.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant or tolerant varieties recommended for the local region',
            'Avoid excessive nitrogen that produces dense, highly susceptible canopies',
            'Destroy volunteer wheat plants that can carry the fungus between seasons',
            'Follow regional rust forecasting and survey information from extension or agricultural authorities',
            'Scout fields regularly, particularly during periods of favourable weather',
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
    { type: 'plant-disease', slug: 'wheat-stripe-rust' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'urea' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; wheat leaf rust occurs in almost all wheat-growing regions, with severity varying by season, region, and the resistance genes present in local varieties.',
  climateContext:
    'Favoured by moderate temperatures together with dew, rain, or high humidity that allow spores to germinate and infect leaf tissue.',
  limitations: [
    'This is a general overview and does not replace field diagnosis or region-specific extension guidance.',
    'Rust pathogen populations shift over time and by region, which affects which resistance genes remain effective; consult local authorities for current status.',
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
      sourceId: 'iastate-extension',
      citedFor: 'Field-level identification and risk factors',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Wheat Leaf Rust',
    description:
      'Wheat leaf rust explained: Puccinia triticina biology, disease cycle, affected hosts, risk factors, and prevention and monitoring guidance.',
    keywords: [
      'wheat leaf rust',
      'Puccinia triticina',
      'brown rust',
      'wheat disease',
    ],
  },
  structuredData: { article: true },
};
