import type { SoilTopicContent } from '@/types/content';

export const baseSaturation: SoilTopicContent = {
  id: 'soil-topic-base-saturation',
  slug: 'base-saturation',
  contentType: 'soil-topic',
  title: 'Base Saturation',
  topicClass: 'chemical',
  alternativeNames: ['Percent base saturation', 'Base saturation percentage'],
  category: 'Soil chemical property',
  subcategory: 'Cation status',
  summary:
    'Base saturation is the proportion of a soil cation exchange capacity occupied by base cations such as calcium, magnesium, potassium, and sodium, rather than by acidic cations. It is closely tied to soil pH and indicates the reserve of these nutrient cations.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Base saturation is the percentage of a soil cation exchange capacity that is occupied by the base cations, principally calcium, magnesium, potassium, and sodium, as opposed to the acidic cations hydrogen and aluminium. It summarises, in a single figure, how much of the soil exchange complex is filled with these nutrient-supplying cations rather than with the cations associated with acidity.',
    },
    {
      type: 'paragraph',
      text: 'Base saturation is closely linked to soil pH: soils with high base saturation tend to be neutral to alkaline, while soils with low base saturation tend to be acidic because a larger share of exchange sites is held by hydrogen and aluminium. It is therefore both an indicator of the reserve of exchangeable nutrient cations and a useful companion to pH in understanding a soil chemistry.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value: 'The share of cation exchange capacity occupied by base cations',
    },
    {
      label: 'Base cations',
      value: 'Calcium, magnesium, potassium, and sodium',
    },
    {
      label: 'Acidic cations',
      value:
        'Hydrogen and aluminium, which occupy the remaining exchange sites',
    },
    {
      label: 'Relationship to pH',
      value:
        'High base saturation accompanies neutral to alkaline soils; low base saturation accompanies acidic soils',
    },
    {
      label: 'Raised by',
      value:
        'Liming and additions of base cations; lowered by leaching and acidification',
    },
    {
      label: 'Why it matters',
      value:
        'Indicates the reserve of nutrient cations and is used in soil classification',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What base saturation is',
      body: [
        {
          type: 'paragraph',
          text: 'The cation exchange capacity of a soil is the total amount of exchangeable cations it can hold. These sites are shared between base cations, which supply nutrients, and acidic cations, which contribute to acidity. Base saturation expresses the base cations as a percentage of the total exchange capacity, so a soil in which most exchange sites hold calcium, magnesium, and potassium has a high base saturation.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Base cations',
              description:
                'Calcium, magnesium, potassium, and sodium held on exchange sites, supplying nutrient cations.',
            },
            {
              term: 'Acidic cations',
              description:
                'Hydrogen and aluminium, whose dominance on the exchange complex is associated with soil acidity.',
            },
            {
              term: 'Cation exchange capacity',
              description:
                'The total capacity of a soil to hold exchangeable cations, of which base saturation is a fraction.',
            },
          ],
        },
      ],
    },
    {
      id: 'relationship-to-ph',
      heading: 'Base saturation and soil pH',
      body: [
        {
          type: 'paragraph',
          text: 'Base saturation and pH move together. As soils weather and leach in humid climates, base cations are removed and replaced by hydrogen and aluminium, lowering both base saturation and pH. Liming reverses this by adding calcium and magnesium and neutralising acidity, raising base saturation. Highly weathered tropical soils commonly have low base saturation, while soils of drier regions and those over limestone tend to have high base saturation.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Some classification systems use a base saturation threshold, conventionally set at fifty percent, to help separate more fertile soils from strongly leached, acidic ones.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why it matters',
      body: [
        {
          type: 'paragraph',
          text: 'Base saturation indicates the reserve of exchangeable nutrient cations available to replenish the soil solution, so high base saturation generally reflects a good supply of calcium, magnesium, and potassium. It is also used, alongside pH and cation exchange capacity, to interpret soil test results and to distinguish soil types in classification. Because it depends on cation exchange capacity, the same base saturation means a larger nutrient reserve in a soil of higher exchange capacity.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing base saturation',
      body: [
        {
          type: 'list',
          items: [
            'Apply lime to raise base saturation and reduce acidity in leached, acidic soils',
            'Supply calcium, magnesium, and potassium where soil tests show low reserves of these base cations',
            'Interpret base saturation together with pH and cation exchange capacity rather than in isolation',
            'Expect naturally low base saturation in highly weathered humid-tropical soils and manage acidity accordingly',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  connections: [
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'agricultural-lime' },
    { type: 'soil-topic', slug: 'soil-testing' },
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'chernozem' },
  ],
  glossaryTerms: ['soil-ph', 'soil-texture', 'macronutrient'],
  geographicScope:
    'Global. Base saturation is a universal soil chemical property, but typical values differ by climate and parent material, being low in humid, highly weathered soils and high in drier or calcareous soils.',
  limitations: [
    'Base saturation depends on the method used to measure cation exchange capacity, so values from different methods are not always directly comparable.',
    'It indicates the reserve of base cations but not their immediate availability, which also depends on pH and other factors.',
    'Classification thresholds such as fifty percent are conventions used in specific systems and should not be treated as universal fertility limits.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Base saturation, cation exchange, and soil classification',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Base saturation and soil chemical status',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Interpreting base saturation in soil tests',
    },
    { sourceId: 'isric', citedFor: 'Global soil chemical property data' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Base Saturation',
    description:
      'Base saturation explained: the share of cation exchange capacity held by base cations, its link to soil pH, and how liming and leaching change it.',
    keywords: [
      'base saturation',
      'cation exchange capacity',
      'base cations',
      'soil pH',
    ],
  },
  structuredData: { article: true },
};
