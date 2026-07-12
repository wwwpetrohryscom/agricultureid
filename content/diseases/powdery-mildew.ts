import type { PlantDiseaseContent } from '@/types/content';

export const powderyMildew: PlantDiseaseContent = {
  id: 'disease-powdery-mildew',
  slug: 'powdery-mildew',
  contentType: 'plant-disease',
  title: 'Powdery Mildew',
  scientificName: 'Fungi of the order Erysiphales (e.g. Blumeria graminis)',
  alternativeNames: ['White mildew'],
  category: 'Plant disease',
  subcategory: 'Fungal foliar disease',
  causalAgent: 'Obligate fungal parasites in the order Erysiphales',
  pathogenType: 'fungal',
  summary:
    'Powdery mildew is a group of common fungal diseases producing white, powdery growth on leaves and stems. Host-specific species affect many crops, and management relies mainly on prevention and monitoring.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Powdery mildew is not a single disease but a group of closely related fungal diseases caused by species in the order Erysiphales. They are among the most recognisable plant diseases because of the characteristic white to grey powdery coating they produce on the surface of leaves, shoots, and sometimes fruit.',
    },
    {
      type: 'paragraph',
      text: 'Individual powdery mildew fungi tend to be highly host-specific: the species that affects cereals differs from those affecting cucurbits, grapes, or ornamentals. The general biology and management principles, however, are broadly similar across hosts.',
    },
  ],
  keyFacts: [
    { label: 'Type', value: 'Fungal foliar disease (order Erysiphales)' },
    {
      label: 'Key sign',
      value: 'White to grey powdery growth on leaf surfaces',
    },
    {
      label: 'Hosts',
      value: 'Many crops; individual species are host-specific',
    },
    {
      label: 'Favoured by',
      value: 'Moderate temperatures, high humidity, low leaf wetness',
    },
    { label: 'Spread', value: 'Airborne spores' },
    {
      label: 'Management basis',
      value: 'Resistant varieties, airflow, monitoring, authorized products',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The clearest sign of powdery mildew is a white or greyish, powdery or felt-like growth on the upper or lower surfaces of leaves, on stems, and sometimes on flowers or fruit. Affected leaves may yellow, distort, or drop prematurely as infection progresses.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Several disorders can look superficially similar. Where identification matters for management decisions, confirm with a diagnostic laboratory or extension service.',
        },
      ],
    },
    {
      id: 'biology',
      heading: 'Biology and disease cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew fungi are obligate parasites, meaning they require living host tissue to grow. They colonise the plant surface and draw nutrients through specialised structures that penetrate epidermal cells. Spores produced on the powdery growth are carried by air currents to new tissue and other plants.',
        },
        {
          type: 'paragraph',
          text: 'Unusually among fungal diseases, many powdery mildews are favoured by high humidity but do not require free water on the leaf to infect, which allows them to develop under drier conditions than many other foliar pathogens.',
        },
      ],
    },
    {
      id: 'hosts',
      heading: 'Affected hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildews affect a wide range of agricultural and horticultural plants, including cereals such as wheat and barley, many vegetables and cucurbits, grapevine, and numerous ornamentals. Because the fungi are largely host-specific, the presence of powdery mildew on one crop does not necessarily threaten unrelated crops nearby.',
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
            'Moderate temperatures combined with high humidity',
            'Dense canopies and poor air circulation',
            'Shaded, sheltered conditions that keep humidity high',
            'Susceptible varieties and excessive, lush growth',
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
          text: 'Because powdery mildews are widespread and spread readily, management emphasises prevention and early detection rather than eradication.',
        },
        {
          type: 'list',
          items: [
            'Choose resistant or tolerant varieties where available',
            'Improve air movement through appropriate spacing and canopy management',
            'Avoid conditions that produce dense, humid canopies',
            'Scout regularly so that any response can be timely and targeted',
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
    { type: 'crop', slug: 'tomato' },
  ],
  relatedTopics: [{ type: 'plant-disease', slug: 'late-blight' }],
  glossaryTerms: ['inoculum', 'host-plant', 'integrated-pest-management'],
  geographicScope:
    'Global overview of a widespread disease group; specific species, severity, and guidance vary by region and host.',
  climateContext:
    'Favoured by moderate temperatures and high humidity; can develop without free leaf moisture.',
  limitations: [
    'This is a general overview of a disease group, not a diagnosis for any specific crop or region.',
    'Control-product recommendations are jurisdiction-specific and are deliberately not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Powdery mildew biology and host range' },
    { sourceId: 'eppo-gd', citedFor: 'Pathogen nomenclature and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification and management principles',
    },
    { sourceId: 'rhs', citedFor: 'General symptoms and horticultural context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Powdery Mildew',
    description:
      'Powdery mildew explained: identification, fungal biology, affected hosts, risk factors, and prevention and monitoring principles for this common disease group.',
    keywords: [
      'powdery mildew',
      'Erysiphales',
      'fungal disease',
      'plant disease',
    ],
  },
  structuredData: { article: true },
};
