import type { CropContent } from '@/types/content';

export const passionFruit: CropContent = {
  id: 'crop-passion-fruit',
  slug: 'passion-fruit',
  contentType: 'crop',
  title: 'Passion Fruit',
  scientificName: 'Passiflora edulis',
  alternativeNames: ['Passionfruit', 'Maracujá', 'Granadilla (purple type)'],
  category: 'Fruit crop',
  subcategory: 'Tropical and subtropical vine fruit',
  botanicalFamily: 'Passifloraceae (passion flowers)',
  lifecycle: 'Perennial (short-lived climbing vine)',
  summary:
    'Passion fruit is a fast-growing climbing vine grown in the tropics and subtropics for its aromatic, juicy fruit, used fresh and for juice, produced in purple and yellow forms on a trellised, relatively short-lived crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Passion fruit is a vigorous, climbing, perennial vine grown for its rounded fruit filled with aromatic, juicy, seed-bearing pulp. Two main forms are cultivated: the purple passion fruit, better suited to cooler subtropical and highland conditions, and the yellow passion fruit, which is more vigorous and adapted to the warm lowland tropics.',
    },
    {
      type: 'paragraph',
      text: 'The crop is grown both for the fresh market and, on a large scale, for juice and concentrate, with Brazil and other tropical countries being major producers. Passion fruit vines are fast-growing but relatively short-lived, and they are typically trained on trellises for support and management.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Passifloraceae (passion flowers)' },
    { label: 'Life cycle', value: 'Perennial (short-lived climbing vine)' },
    { label: 'Scientific name', value: 'Passiflora edulis' },
    {
      label: 'Primary uses',
      value:
        'Fresh fruit and juice; pulp used in drinks, desserts, and processing',
    },
    {
      label: 'Climate',
      value:
        'Tropics and subtropics; purple type suits cooler areas, yellow type warm lowlands',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained, fertile loams and sandy loams',
      note: 'Very sensitive to waterlogging, which promotes root and collar rots.',
    },
    {
      label: 'Support',
      value: 'Grown as a trellised climbing vine',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Passion fruit is grown for its distinctive aromatic fruit, eaten fresh and widely processed into juice, concentrate, and flavoring. Purple and yellow types are chosen according to climate and market, and grafting of purple scions onto disease-tolerant rootstocks is used in some regions to manage soilborne problems.',
        },
        {
          type: 'paragraph',
          text: 'As a fast-growing but short-lived vine, passion fruit often comes into bearing quickly and is replanted after a few productive years, particularly where soilborne disease pressure is high.',
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
            {
              term: 'Family',
              description: 'Passifloraceae (passion-flower family)',
            },
            { term: 'Genus and species', description: 'Passiflora edulis' },
            {
              term: 'Growth habit',
              description:
                'Vigorous woody climbing vine with tendrils, distinctive flowers, and rounded fruit borne on new growth',
            },
            {
              term: 'Main forms',
              description:
                'Purple passion fruit (cooler areas) and yellow passion fruit (warm lowlands)',
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
          text: 'Passion fruit originated in South America, with Brazil a center of diversity and, today, a leading producer. It is now grown throughout the tropics and subtropics, including East Africa, South and Southeast Asia, Australia, and the Pacific.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production by country are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Passion fruit needs a frost-free, warm climate. The purple type is better adapted to cooler subtropical and highland conditions, while the yellow type thrives in warm, humid lowland tropics. Both are sensitive to frost, and strong winds can damage the vines and flowers.',
        },
        {
          type: 'paragraph',
          text: 'A distinct wet and dry pattern or managed irrigation supports flowering and fruiting, and pollination, sometimes assisted by hand or by managed bees, strongly affects fruit set in some types.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Passion fruit grows best on well-drained, fertile loams and sandy loams with good organic matter. It is very sensitive to waterlogging, which encourages the root and collar rots that are a leading cause of vine decline.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Excellent drainage is critical: waterlogged soils strongly predispose passion fruit to fusarium collar rot and phytophthora root rot.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Passion fruit is grown from seed or from grafted plants, trained onto a trellis for support, light interception, and ease of management. Pruning maintains productive new growth, and pollination management is important for good fruit set in some types.',
        },
        {
          type: 'list',
          items: [
            'Type (purple or yellow) and, where used, grafted plants matched to climate and disease pressure',
            'Trellising to support the vigorous climbing vine',
            'Pruning to promote fruiting on new growth and maintain an open canopy',
            'Attention to pollination, including managed bees or hand pollination where needed',
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
          text: 'Passion fruit is a vigorous, heavy-bearing crop with substantial nutrient demands, particularly for potassium and nitrogen to support continuous flowering and fruiting. Balanced nutrition sustains both vine growth and fruit quality.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Passion fruit needs consistent moisture for continuous flowering and fruiting, and yield and fruit size suffer under drought. Drip irrigation is widely used in commercial production, while good drainage is maintained to avoid the waterlogging that triggers root disease.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt and collar rot, along with root rots on wet soils, are major soilborne diseases that shorten vine life, and anthracnose and brown spot affect leaves and fruit. Virus diseases, including passion fruit woodiness, also cause losses.',
        },
        {
          type: 'paragraph',
          text: 'Fruit flies attack the fruit, and aphids, which transmit viruses, along with mites and other sap feeders, affect the vines. Management combines well-drained sites, tolerant rootstocks, clean planting material, sanitation, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Passion fruit is harvested when the fruit reaches full color; for many uses the fruit is collected after it drops naturally to the ground, at full ripeness. Fruit destined for the fresh market is picked on the vine slightly earlier to improve shelf life.',
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
            'Fresh fruit eaten out of hand, with the aromatic pulp and seeds scooped from the shell',
            'Juice and concentrate used in drinks, desserts, and food processing',
            'Pulp used as a flavoring in a wide range of products',
            'By-products of processing used in some regions as animal feed',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'guava' },
    { type: 'crop', slug: 'papaya' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'frost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview across the tropics and subtropics. Type choice (purple or yellow) depends strongly on climate.',
  climateContext:
    'Frost-sensitive climbing vine; purple type for cooler areas, yellow type for warm lowland tropics; very sensitive to waterlogging.',
  limitations: [
    'Type selection and grafting practices depend on climate and disease pressure and are not reduced to universal guidance here.',
    'Vines are relatively short-lived, especially under high soilborne disease pressure, requiring periodic replanting.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of passion fruit in tropical fruit production',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Passion fruit (maracujá) research and production in Brazil',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Passion fruit crop, disease, and pest compendium data',
    },
    { sourceId: 'britannica', citedFor: 'Botanical description and uses' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Passion Fruit (Passiflora edulis)',
    description:
      'An evidence-based reference on passion fruit: vine botany, purple and yellow types, trellising, drainage, diseases, pests, and fresh and juice uses.',
    keywords: [
      'passion fruit',
      'Passiflora edulis',
      'maracuja',
      'passionfruit vine',
    ],
  },
  structuredData: { article: true },
};
