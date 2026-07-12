import type { PlantDiseaseContent } from '@/types/content';

export const sclerotinia: PlantDiseaseContent = {
  id: 'disease-sclerotinia',
  slug: 'sclerotinia',
  contentType: 'plant-disease',
  title: 'Sclerotinia',
  scientificName: 'Sclerotinia sclerotiorum',
  alternativeNames: [
    'Sclerotinia stem rot',
    'White mould',
    'White mold',
    'Cottony rot',
  ],
  category: 'Plant disease',
  subcategory: 'Fungal stem and pod rot',
  causalAgent: 'Fungus Sclerotinia sclerotiorum',
  pathogenType: 'fungal',
  summary:
    'Sclerotinia is a fungal stem and pod rot caused by Sclerotinia sclerotiorum, affecting a very wide range of broadleaf crops including oilseed rape, soybean, sunflower, and common bean. It is favoured by cool, wet conditions during and after flowering, and typically begins on senescing flower petals.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sclerotinia stem rot, caused by the fungus Sclerotinia sclerotiorum, is one of the most broadly host-adapted fungal diseases affecting field and horticultural crops, with oilseed rape, soybean, sunflower, and common bean among its economically significant hosts.',
    },
    {
      type: 'paragraph',
      text: 'A distinctive feature of the disease is that infection in many crops begins on senescing flower petals rather than directly on healthy green tissue: petals infected by airborne spores fall onto leaves and stems, providing the nutrient base the fungus needs to establish a stem infection.',
    },
  ],
  keyFacts: [
    {
      label: 'Type',
      value: 'Fungal stem and pod rot (Sclerotinia sclerotiorum)',
    },
    {
      label: 'Key sign',
      value:
        'White, cottony fungal growth on stems or pods with hard, black sclerotia inside or on the surface',
    },
    {
      label: 'Hosts',
      value:
        'Very wide host range, including oilseed rape, soybean, sunflower, and common bean',
    },
    {
      label: 'Favoured by',
      value: 'Cool, wet conditions during and after flowering',
    },
    {
      label: 'Spread',
      value:
        'Airborne ascospores infecting senescing flower petals; soil-borne sclerotia persisting between seasons',
    },
    {
      label: 'Management basis',
      value: 'Canopy management, longer rotations, and monitoring',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Infected stems and pods develop bleached, straw-coloured lesions covered in white, cottony fungal growth under humid conditions. Hard, black, irregularly shaped sclerotia form inside hollowed stems or on the outer surface, and heavily infected stems can lodge or die prematurely.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Advanced sclerotinia symptoms can resemble other stem rots. Where identification affects a management decision, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology-and-disease-cycle',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Sclerotia surviving in soil for extended periods germinate under cool, moist conditions to produce small, mushroom-like apothecia that release airborne ascospores. These spores commonly infect senescing flower petals, which then fall onto leaves and stems and provide the nutrient source the fungus needs to invade healthy tissue.',
        },
        {
          type: 'list',
          items: [
            'Sclerotia can survive in soil for a number of years even without a susceptible host',
            'Petal-mediated infection is a well-documented pathway in crops such as oilseed rape and soybean',
            'Dense canopies retain the moisture needed for apothecia development and infection',
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
          text: 'Sclerotinia sclerotiorum has a very wide host range across many broadleaf crops and weeds. Oilseed rape, soybean, sunflower, and common bean are among the economically important hosts, and a history of any of these crops in rotation can build soil sclerotia levels for the others.',
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
            'Cool, wet weather during and immediately after flowering',
            'Dense canopies that restrict airflow and retain moisture at the base of the plant',
            'A history of susceptible broadleaf hosts in rotation, raising soil sclerotia levels',
            'Excess nitrogen promoting lush, dense canopy growth',
            'Irrigation timed close to flowering in already humid conditions',
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
          text: 'Because infection is closely tied to flowering and canopy moisture, prevention emphasises canopy management, rotation, and monitoring around the flowering period.',
        },
        {
          type: 'list',
          items: [
            'Use wider row spacing or seeding rates that improve airflow through the canopy',
            'Use longer rotations away from other susceptible broadleaf hosts',
            'Avoid excess nitrogen that promotes dense, humid canopies',
            'Monitor weather-based risk information or petal testing where available around flowering',
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
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'common-bean' },
  ],
  relatedTopics: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'nutrient', slug: 'nitrogen' },
  ],
  glossaryTerms: ['inoculum', 'host-plant', 'crop-rotation'],
  geographicScope:
    'Global; sclerotinia stem rot occurs in most temperate and subtropical regions growing susceptible broadleaf crops, with severity varying by season and rotation history.',
  climateContext:
    'Favoured by cool, wet weather during and after flowering, which supports apothecia development and prolongs the moist conditions needed for infection.',
  limitations: [
    'This is a general overview; the fungus has an unusually wide host range and specific risk varies greatly by crop, region, and rotation history.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Pathogen biology, disease cycle, and host range',
    },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Field crop risk factors and canopy management guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sclerotinia',
    description:
      'Sclerotinia stem rot explained: Sclerotinia sclerotiorum biology, petal-mediated infection, affected hosts, risk factors, and prevention guidance.',
    keywords: [
      'sclerotinia',
      'white mould',
      'Sclerotinia sclerotiorum',
      'stem rot',
    ],
  },
  structuredData: { article: true },
};
