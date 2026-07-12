import type { PlantDiseaseContent } from '@/types/content';

export const stemRust: PlantDiseaseContent = {
  id: 'disease-stem-rust',
  slug: 'stem-rust',
  contentType: 'plant-disease',
  title: 'Stem Rust',
  scientificName:
    'Puccinia graminis (host-specialised formae speciales, e.g. f. sp. tritici on wheat)',
  alternativeNames: ['Black rust', 'Black stem rust'],
  category: 'Plant disease',
  subcategory: 'Fungal rust disease',
  causalAgent: 'Fungus Puccinia graminis',
  pathogenType: 'fungal',
  summary:
    'Stem rust is a historically damaging fungal rust disease of wheat, barley, oats, and rye, caused by Puccinia graminis. It produces elongated, reddish-brown pustules mainly on stems and leaf sheaths and can cause severe yield loss when a virulent race meets susceptible varieties under favourable weather.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Stem rust, caused by the fungus Puccinia graminis, is one of the three classic cereal rust diseases alongside leaf rust and stripe rust. Distinct, host-specialised forms of the fungus attack different cereals: Puccinia graminis f. sp. tritici on wheat and Puccinia graminis f. sp. secalis on rye are the best known, though the fungus also affects barley and oats.',
    },
    {
      type: 'paragraph',
      text: 'The disease has repeatedly caused severe historical epidemics, and the emergence of new virulent lineages, such as the Ug99 group first identified in East Africa, has periodically renewed international concern over resistance breakdown in widely grown wheat varieties. In some regions, the fungus completes a sexual stage on an alternate host, the barberry shrub (Berberis spp.), which generates new genetic combinations.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal rust disease (Puccinia graminis)' },
    {
      label: 'Key sign',
      value:
        'Elongated, reddish-brown to black pustules mainly on stems and leaf sheaths',
    },
    {
      label: 'Hosts',
      value:
        'Wheat, barley, oats, and rye, with host-specialised forms of the fungus',
    },
    {
      label: 'Favoured by',
      value: 'Warm temperatures with dew or free moisture on foliage',
    },
    {
      label: 'Spread',
      value:
        'Wind-dispersed urediniospores, sometimes over long distances between regions',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, barberry management where relevant, monitoring, and locally authorized guidance',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Stem rust produces elongated, blister-like pustules filled with reddish-brown spores, mainly on stems and leaf sheaths but sometimes on leaves and heads. As pustules mature they rupture the plant surface, giving affected tissue a rough, torn appearance, and heavily infected stems can weaken and lodge.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Stem rust can be confused with leaf rust and stripe rust in the field, particularly early in an epidemic. Pustule location, shape, and colour are useful clues, but confirmation from a diagnostic laboratory or extension service is recommended when a management decision depends on the distinction.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Puccinia graminis is an obligate parasite that depends on living cereal tissue for most of its life cycle. Repeating cycles of wind-dispersed urediniospores allow disease to build up rapidly through a season under favourable warm, moist conditions, with a new generation of pustules appearing roughly one to two weeks after infection.',
        },
        {
          type: 'list',
          items: [
            'Volunteer cereal plants and infected residue can carry the fungus between growing seasons in some regions',
            'Where present, barberry acts as an alternate host allowing a sexual stage that generates new genetic variation in the pathogen',
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
          text: 'Wheat is the most economically significant host of stem rust, but barley, oats, and rye are also affected by forms of Puccinia graminis adapted to those hosts. Susceptibility varies considerably between cultivars and over time as pathogen populations shift.',
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
            'Warm temperatures combined with dew, rain, or high humidity during the growing season',
            'Susceptible varieties, especially where a single resistance gene has become widely deployed',
            'Nearby susceptible barberry plants in regions where the alternate host occurs',
            'Inoculum arriving from other regions on prevailing winds',
            'Dense, lush canopies produced by high nitrogen supply',
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
          text: 'Because stem rust can spread quickly across large distances once established, management relies heavily on genetic resistance, regional monitoring, and early detection rather than reacting after an epidemic is underway.',
        },
        {
          type: 'list',
          items: [
            'Grow resistant or tolerant varieties recommended for the local region',
            'Follow regional rust surveillance and forecasting information from extension or agricultural authorities',
            'Manage or avoid susceptible barberry plantings where regulated in the local area',
            'Avoid excessive nitrogen that produces dense, highly susceptible canopies',
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
    { type: 'crop', slug: 'oats' },
    { type: 'crop', slug: 'rye' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'wheat-leaf-rust' },
    { type: 'plant-disease', slug: 'wheat-stripe-rust' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'wind' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'urea' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: [
    'inoculum',
    'host-plant',
    'integrated-pest-management',
    'crop-rotation',
  ],
  geographicScope:
    'Global; stem rust has historically occurred in nearly all wheat, barley, oat, and rye growing regions, with severity varying by season, region, and the resistance genes present in local varieties.',
  climateContext:
    'Favoured by warm temperatures together with dew, rain, or high humidity that allow spores to germinate and infect plant tissue; long-distance wind dispersal can move spores between regions and seasons.',
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
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Stem Rust',
    description:
      'Stem rust explained: Puccinia graminis biology, disease cycle, affected cereal hosts, risk factors, and prevention and monitoring guidance.',
    keywords: ['stem rust', 'Puccinia graminis', 'black rust', 'wheat disease'],
  },
  structuredData: { article: true },
};
