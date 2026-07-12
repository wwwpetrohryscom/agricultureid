import type { PlantDiseaseContent } from '@/types/content';

export const downyMildew: PlantDiseaseContent = {
  id: 'disease-downy-mildew',
  slug: 'downy-mildew',
  contentType: 'plant-disease',
  title: 'Downy Mildew',
  scientificName:
    'Multiple genera (e.g. Plasmopara, Peronospora, Pseudoperonospora, Bremia spp.)',
  alternativeNames: ['Downy mildews'],
  category: 'Plant disease',
  subcategory: 'Oomycete foliar disease',
  causalAgent:
    'A group of host-specialised oomycetes in the family Peronosporaceae, including Plasmopara, Peronospora, Pseudoperonospora, and Bremia species',
  pathogenType: 'oomycete',
  summary:
    'Downy mildew is a group of oomycete diseases, not a single pathogen, that produce yellow leaf patches and a characteristic fuzzy sporulation on the underside of leaves. Different host-specialised species affect grapevine, cucurbits, lettuce, sunflower, and many other crops.',
  introduction: [
    {
      type: 'paragraph',
      text: '"Downy mildew" describes a group of related but distinct diseases caused by obligate, host-specialised oomycetes in the family Peronosporaceae. Well-known examples include Plasmopara viticola on grapevine, Pseudoperonospora cubensis on cucurbits such as cucumber, Bremia lactucae on lettuce, and Plasmopara halstedii on sunflower.',
    },
    {
      type: 'paragraph',
      text: 'Although the causal organisms differ by host, downy mildews share a broadly similar biology: they thrive in humid, wet conditions, spread rapidly by wind- and rain-dispersed sporangia, and are managed mainly through prevention, resistant varieties, and canopy conditions that limit leaf wetness.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Oomycete foliar disease group (family Peronosporaceae)',
    },
    {
      label: 'Key sign',
      value:
        'Angular yellow patches on the upper leaf surface with grey-to-purple fuzzy growth underneath',
    },
    {
      label: 'Hosts',
      value: 'Many crops; individual species are largely host-specific',
    },
    {
      label: 'Favoured by',
      value:
        'High humidity, free moisture on leaves, and moderate-to-cool temperatures',
    },
    {
      label: 'Spread',
      value:
        'Wind- and rain-dispersed sporangia; some species also survive in soil as oospores',
    },
    {
      label: 'Management basis',
      value:
        'Resistant varieties, canopy and irrigation management, monitoring',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew typically produces pale green to yellow patches on the upper leaf surface, often bounded by the leaf veins so that they appear angular rather than rounded. On the corresponding underside, especially in humid or damp conditions, a fuzzy grey, purplish, or white sporulating growth develops, most visible early in the morning while dew is still present.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Downy mildew is easily confused with powdery mildew, but the two differ in biology, favoured conditions, and appearance: downy mildew growth is mainly on the leaf underside and needs leaf moisture, while powdery mildew grows on either surface and does not require free water. Confirm with a diagnostic laboratory where identification matters for a decision.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew oomycetes produce sporangia on infected leaf undersides that are carried by wind and rain splash to new leaves and plants, where they can release swimming zoospores under wet conditions that actively move toward and infect fresh tissue. This cycle can repeat every few days when humidity stays high and leaves remain wet for extended periods.',
        },
        {
          type: 'list',
          items: [
            'Foliage-infecting species (e.g. on grape and cucurbits) survive between seasons mainly in infected plant debris',
            'Some species, such as the sunflower downy mildew pathogen, also produce long-lived oospores in soil that can infect roots and cause systemic seedling infection',
            'Cool, humid nights with dew formation favour sporulation and new infections',
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
          text: 'Because downy mildew species are largely host-specific, the crops most commonly affected include grapevine, cucurbits such as cucumber, lettuce, sunflower, and members of the brassica and onion families, among others. The presence of downy mildew on one crop does not indicate risk to unrelated crops nearby, since the causal oomycetes rarely cross between very different host groups.',
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
            'Prolonged leaf wetness from rain, dew, fog, or overhead irrigation',
            'High humidity combined with moderate-to-cool temperatures',
            'Dense canopies with poor air circulation that trap moisture',
            'Susceptible varieties and continuous cropping of the same host',
            'For soil-borne species, wet soils around germination and establishment',
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
          text: 'Because downy mildews spread quickly under favourable weather, management focuses on reducing leaf wetness, choosing resistant varieties, and detecting infection early.',
        },
        {
          type: 'list',
          items: [
            'Choose resistant or tolerant varieties where available',
            'Improve air movement through appropriate spacing and canopy management',
            'Avoid overhead irrigation practices that extend leaf wetness, where practical',
            'Improve drainage and avoid waterlogged soils for species with a soil-borne stage',
            'Scout regularly, especially during humid, wet weather',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any use of fungicides, oomycete-specific products, or other control measures must follow current, locally authorized recommendations and product labels. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'sunflower' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'late-blight' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global; individual downy mildew species occur wherever their specific hosts are grown, with the greatest risk in humid regions and seasons.',
  climateContext:
    'Favoured by high humidity, prolonged leaf wetness, and moderate-to-cool temperatures; most species require free moisture for spore germination and infection.',
  limitations: [
    'This is a general overview of a disease group, not a diagnosis for any specific crop or region.',
    'Individual downy mildew species differ in host range and favoured conditions; region- and crop-specific extension guidance should be consulted.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Downy mildew biology and host range across crops',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    { sourceId: 'rhs', citedFor: 'General symptoms and horticultural context' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Vegetable and grape downy mildew risk factors',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Downy Mildew',
    description:
      'Downy mildew overview: oomycete biology, disease cycle, affected hosts including grape and cucumber, risk factors, and prevention and monitoring guidance.',
    keywords: [
      'downy mildew',
      'oomycete disease',
      'grape disease',
      'plant disease',
    ],
  },
  structuredData: { article: true },
};
