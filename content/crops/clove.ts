import type { CropContent } from '@/types/content';

export const clove: CropContent = {
  id: 'crop-clove',
  slug: 'clove',
  contentType: 'crop',
  title: 'Clove',
  scientificName: 'Syzygium aromaticum',
  category: 'Spice crop',
  subcategory: 'Perennial tropical spice tree',
  botanicalFamily: 'Myrtaceae (myrtle family)',
  lifecycle: 'Perennial',
  summary:
    'Clove is a tropical evergreen tree grown for its aromatic, unopened flower buds, hand-picked and dried to produce the familiar dark brown spice used worldwide in cooking and flavoring.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Clove trees produce clusters of small flower buds that are harvested by hand before they open, then dried in the sun until they turn the characteristic dark brown color associated with the spice.',
    },
    {
      type: 'paragraph',
      text: 'Historically restricted to a small group of islands in what is now Indonesia, clove cultivation has since spread to other tropical regions, though production remains concentrated in a relatively limited number of countries.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Myrtaceae (myrtle family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Syzygium aromaticum' },
    { label: 'Primary uses', value: 'Dried flower bud as a culinary spice' },
    {
      label: 'Climate',
      value: 'Warm, humid tropical, often coastal',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained loams and sandy loams',
      note: 'Coastal and volcanic-derived soils are traditional in some producing regions.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Clove is grown mainly by smallholder farmers in a small number of tropical producing regions, often as part of diversified tree-crop systems alongside other spice and plantation crops.',
        },
        {
          type: 'paragraph',
          text: 'Because harvesting relies on hand-picking individual flower bud clusters, clove production remains a labor-intensive crop, closely tied to the seasonal timing of bud development.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Myrtaceae (myrtle family)' },
            { term: 'Genus', description: 'Syzygium' },
            { term: 'Principal species', description: 'Syzygium aromaticum' },
            {
              term: 'Growth habit',
              description:
                'Evergreen tropical tree with pyramidal habit, producing clusters of aromatic flower buds at branch tips',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Clove is native to the Maluku Islands (the historical Spice Islands) of what is now Indonesia, where it was a highly prized trade commodity for centuries before its cultivation spread to other tropical regions.',
        },
        {
          type: 'paragraph',
          text: 'Indonesia, Madagascar, and the island of Zanzibar in Tanzania are today among the leading producing regions. Production and trade figures are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Clove requires a warm, humid tropical climate with well-distributed rainfall and has essentially no tolerance for frost, restricting cultivation to consistently warm coastal and lowland tropical zones.',
        },
        {
          type: 'paragraph',
          text: 'Deep, well-drained loams and sandy loams support healthy root development. Poorly drained sites increase the risk of root disease, a significant limiting factor in clove cultivation.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site drainage should be assessed carefully with local soil survey information, given the tree’s sensitivity to waterlogging.',
        },
      ],
    },
    {
      id: 'cultivation-and-management',
      heading: 'Cultivation and management',
      body: [
        {
          type: 'list',
          items: [
            'Establishment from seedlings, since clove is generally propagated by seed rather than vegetative methods',
            'Wide spacing to accommodate the tree’s eventual size and to maintain airflow around the canopy',
            'Intercropping with other tree and spice crops in some traditional smallholder systems',
            'Long juvenile period before trees reach significant bud production, requiring sustained management over many years',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen supports canopy growth central to bud production, while potassium contributes to overall tree vigor and bud development across harvest seasons.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Clove is grown predominantly under rain-fed conditions in consistently humid tropical regions with well-distributed rainfall throughout the year.',
        },
        {
          type: 'paragraph',
          text: 'Supplemental drip irrigation is used in some newer plantings, primarily to support establishment of young trees before they reach full bearing.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot can weaken or kill trees on poorly drained sites, and anthracnose can affect leaves and young shoots under humid conditions. Mealybugs and aphids are common sap-feeding pests affecting foliage and young growth.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Root rot', 'Disease', 'Significant risk on poorly drained sites'],
            [
              'Anthracnose',
              'Disease',
              'Affects leaves and young shoots in humid conditions',
            ],
            ['Mealybugs', 'Pest', 'Sap-feeding insects on foliage and buds'],
            ['Aphids', 'Pest', 'Sap-feeding insects affecting young growth'],
          ],
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Flower bud clusters are hand-picked while still tightly closed, before the flowers open, and are then dried in the sun over several days until they reach the dark brown color and moisture content required for storage and sale.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Whole and ground dried flower buds used as a culinary spice',
            'Clove oil extracted from buds, leaves, or stems for the flavor and fragrance industries',
            'Use in spice blends and traditional cigarette manufacturing in some countries',
            'By-products such as clove stems and leaves used in lower-grade oil extraction',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'nutmeg' },
    { type: 'crop', slug: 'cinnamon' },
    { type: 'crop', slug: 'black-pepper' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of production concentrated in Indonesia, Madagascar, and Zanzibar (Tanzania), with smaller production elsewhere in the tropics.',
  climateContext:
    'Warm, humid tropical tree crop with no cold tolerance, traditionally grown in coastal and lowland zones.',
  limitations: [
    'Bud yield and quality vary by tree age, cultivar, and season and are not quantified here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global clove production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Clove disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Clove',
    description:
      'A structured, evidence-based reference on clove: classification, tropical climate needs, cultivation, diseases, pests, harvest, and spice uses.',
    keywords: [
      'clove',
      'Syzygium aromaticum',
      'spice crop',
      'clove bud cultivation',
    ],
  },
  structuredData: { article: true },
};
