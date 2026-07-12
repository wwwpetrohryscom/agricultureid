import type { NutrientContent } from '@/types/content';

export const cobalt: NutrientContent = {
  id: 'nutrient-cobalt',
  slug: 'cobalt',
  contentType: 'nutrient',
  title: 'Cobalt',
  symbol: 'Co',
  alternativeNames: ['Co'],
  category: 'Plant nutrient',
  subcategory: 'Beneficial element',
  nutrientClass: 'beneficial',
  summary:
    'Cobalt is a beneficial element not required by most plants directly, but essential to the rhizobia bacteria that fix atmospheric nitrogen in legume root nodules, making it agronomically important wherever symbiotic nitrogen fixation drives crop nutrition.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cobalt (Co) is not classed as an essential nutrient for plants in general, since no confirmed metabolic role has been established in most species without symbiotic nitrogen fixation. However, it is essential to the rhizobia and other nitrogen-fixing bacteria that form nodules on legume roots, where cobalt is a required cofactor for vitamin B12 (cobalamin) synthesis.',
    },
    {
      type: 'paragraph',
      text: 'Because vitamin B12-dependent enzymes support key steps in bacterial nitrogen fixation and nodule metabolism, an adequate cobalt supply can influence how effectively a legume crop benefits from its symbiotic relationship, even though the host plant itself has no direct requirement for the element.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Co' },
    {
      label: 'Class',
      value: 'Beneficial element (not essential for most plants)',
    },
    {
      label: 'Primary role',
      value:
        'Cofactor for vitamin B12 (cobalamin) synthesis in nitrogen-fixing rhizobia',
    },
    {
      label: 'Who benefits',
      value: 'Legumes and other plants relying on symbiotic nitrogen fixation',
    },
    {
      label: 'Deficiency effect',
      value:
        'Reduced nodule function and nitrogen-fixation efficiency, not a direct plant symptom',
    },
    {
      label: 'Wider relevance',
      value: 'Also an essential nutrient for grazing ruminant livestock',
    },
  ],
  sections: [
    {
      id: 'role-in-nitrogen-fixation',
      heading: 'Role in nitrogen fixation',
      body: [
        {
          type: 'paragraph',
          text: 'Cobalt’s agronomic importance stems almost entirely from its role inside the bacteroids of legume root nodules, where it is required for the rhizobia to synthesise vitamin B12. B12-dependent enzymes support several steps in bacterial metabolism that underpin efficient nitrogen fixation.',
        },
        {
          type: 'paragraph',
          text: 'Because the host legume relies on its rhizobial partners for a large share of its nitrogen supply, an inadequate cobalt supply to the bacteria can indirectly limit the nitrogen available to the plant, even though the plant itself has no known direct cobalt requirement outside this symbiosis.',
        },
      ],
    },
    {
      id: 'availability-in-soil',
      heading: 'Availability in soil',
      body: [
        {
          type: 'paragraph',
          text: 'Cobalt availability in soil depends on parent material, weathering, organic matter content, and soil pH. It tends to be more soluble and available in acidic soils and less available in alkaline or highly calcareous soils, where it can be bound more tightly to soil minerals.',
        },
        {
          type: 'list',
          items: [
            'Naturally low-cobalt soils are often derived from cobalt-poor parent material, such as certain sandy or heavily leached soils',
            'Higher soil pH generally reduces cobalt solubility and availability',
            'Organic matter can bind cobalt, affecting how much remains available in solution',
          ],
        },
      ],
    },
    {
      id: 'where-beneficial-or-deficiency',
      heading: 'Where cobalt is beneficial or limiting',
      body: [
        {
          type: 'paragraph',
          text: 'Cobalt is of practical interest mainly for legume crops that depend on symbiotic nitrogen fixation, such as soybean, common bean, and alfalfa. On soils naturally low in available cobalt, nodule function and nitrogen fixation can be less efficient, indirectly limiting legume growth even when soil nitrogen tests otherwise seem adequate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because cobalt deficiency acts indirectly through the rhizobia rather than the plant itself, its effects can be difficult to distinguish from general nitrogen deficiency without targeted soil or nodule assessment.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Cobalt’s role sits alongside molybdenum in supporting biological nitrogen fixation: molybdenum is a component of the nitrogenase enzyme itself, while cobalt supports the bacterial cobalamin pathway. Both elements are therefore relevant to legume nitrogen nutrition through distinct mechanisms, and neither substitutes for the other.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Practical considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Cobalt is also an essential trace element for animal nutrition, since ruminants require dietary vitamin B12 that is itself synthesised by cobalt-dependent rumen microbes. Forage grown on cobalt-deficient soils can therefore contribute to cobalt or vitamin B12 deficiency in grazing livestock, linking soil cobalt status to both crop and animal management in mixed farming systems.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Confirm before acting',
          text: 'Cobalt deficiency is a localised, soil- and system-specific issue. Confirm status through soil or tissue testing and follow regional guidance before considering cobalt-containing inputs or livestock supplementation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'molybdenum' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph', 'ruminant'],
  geographicScope:
    'Relevant wherever legume crops depend on symbiotic nitrogen fixation, particularly on naturally cobalt-poor soils; soil cobalt status and its practical significance vary considerably by region.',
  climateContext:
    'Cobalt availability is primarily governed by soil chemistry rather than climate, though leaching in high-rainfall regions can contribute to naturally low soil cobalt over time.',
  limitations: [
    'Cobalt is not an established essential nutrient for most plants; its relevance here is specific to legume-rhizobia nitrogen fixation.',
    'Soil and forage cobalt status should be confirmed through testing rather than assumed from general regional patterns.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cobalt in soil-plant-animal nutrient cycling',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Cobalt behaviour and availability in soils',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Legume nutrition and micronutrient management context',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Nitrogen fixation and micronutrient interactions',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cobalt',
    description:
      'Cobalt as a beneficial plant nutrient: its role in rhizobial nitrogen fixation, soil availability, legume relevance, and links to livestock nutrition.',
    keywords: [
      'cobalt',
      'beneficial element',
      'nitrogen fixation',
      'legume nutrition',
    ],
  },
  structuredData: { article: true },
};
