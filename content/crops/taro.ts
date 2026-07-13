import type { CropContent } from '@/types/content';

export const taro: CropContent = {
  id: 'crop-taro',
  slug: 'taro',
  contentType: 'crop',
  title: 'Taro',
  scientificName: 'Colocasia esculenta',
  alternativeNames: ['Dasheen', 'Cocoyam', 'Eddoe', 'Kalo', 'Arbi'],
  category: 'Root and tuber crop',
  subcategory: 'Corm-producing aroid',
  botanicalFamily: 'Araceae (aroids)',
  lifecycle: 'Perennial, usually grown as an annual',
  summary:
    'Taro is a tropical aroid grown for its starchy edible corms and nutritious leaves, cultivated in both wetland and upland systems, and an important staple across the Pacific, Africa, and Asia.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Taro is a tropical and subtropical crop of the arum family grown primarily for its large, starchy underground corm, and in many regions also for its edible leaves and leaf stalks. It is a staple food across the Pacific Islands, parts of Africa, South and Southeast Asia, and the Caribbean.',
    },
    {
      type: 'paragraph',
      text: 'Taro is distinctive among staple root crops for its adaptation to wet conditions: it can be grown in flooded paddies much like rice, as well as in well-drained upland fields. Its raw tissues contain calcium oxalate crystals, so the corms and leaves must be thoroughly cooked before eating.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Araceae (aroids)' },
    { label: 'Life cycle', value: 'Perennial, usually grown as an annual' },
    { label: 'Scientific name', value: 'Colocasia esculenta' },
    {
      label: 'Primary uses',
      value: 'Starchy corms as a staple food; leaves and stalks as a vegetable',
    },
    {
      label: 'Climate',
      value: 'Warm, humid tropics and subtropics; frost-sensitive',
    },
    {
      label: 'Soil preference',
      value:
        'Moisture-retentive loams and clays; suits wetland and upland culture',
      note: 'One of the few staple crops adapted to flooded, paddy-like conditions.',
    },
    {
      label: 'Preparation note',
      value:
        'Contains calcium oxalate; must be thoroughly cooked before eating',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Taro is grown mainly for its starchy corm, a dietary staple boiled, baked, pounded into paste, or processed into flour and other products, and in many cultures its young leaves and leaf stalks are cooked as vegetables. Wetland (flooded) and upland (rain-fed) production systems are both widespread.',
        },
        {
          type: 'paragraph',
          text: 'Related aroids, including tannia (Xanthosoma), are also called cocoyam and grown for similar purposes; taro (Colocasia) is the type addressed here.',
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
            { term: 'Family', description: 'Araceae (arum or aroid family)' },
            { term: 'Genus and species', description: 'Colocasia esculenta' },
            {
              term: 'Growth habit',
              description:
                'Herbaceous perennial forming a central starchy corm and large heart- or arrow-shaped leaves on long stalks',
            },
            {
              term: 'Edible parts',
              description:
                'Corm and cormels, and, in many types, the young leaves and leaf stalks',
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
          text: 'Taro is one of the oldest cultivated crops, generally considered to have been domesticated in South or Southeast Asia, from where it spread across the Pacific, into Africa, and to the Caribbean. It remains a culturally and nutritionally important staple in the Pacific Islands.',
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
          text: 'Taro requires a warm, humid climate with a long growing season and abundant moisture, and is sensitive to frost and cool temperatures. It is well suited to high-rainfall tropical and subtropical environments.',
        },
        {
          type: 'paragraph',
          text: 'Its long growing period and high water requirement mean it is best adapted to regions with either reliable rainfall or access to irrigation and wetland culture.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Taro grows best on deep, fertile, moisture-retentive loams and clays. Uniquely among major staple crops, wetland taro is grown in standing water on soils that hold water well, while upland taro is grown on well-drained but consistently moist soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Taro’s tolerance of saturated, paddy-like soils sets it apart from most root and tuber crops, which require good drainage.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Taro is propagated vegetatively, typically from the tops of harvested corms, small cormels, or suckers rather than from seed. Planting material selection, water management, and weed control are central to establishment in both wetland and upland systems.',
        },
        {
          type: 'list',
          items: [
            'Vegetative planting material (corm tops, cormels, or suckers) from healthy stock',
            'Choice of wetland (flooded) or upland (rain-fed) system to match land and water',
            'Water management, including flooding for paddy taro and irrigation for upland taro',
            'Weed control during the long establishment period',
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
          text: 'Taro’s long growth cycle and high yield of corm biomass give it substantial nutrient demands, with nitrogen and potassium important for growth and corm development. Wetland culture affects nutrient availability and management.',
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
          text: 'Water supply is central to taro production. Wetland taro is grown under continuous or intermittent flooding, similar to lowland rice, while upland taro depends on high rainfall or irrigation to maintain the consistently moist conditions it needs.',
        },
        {
          type: 'paragraph',
          text: 'Reliable moisture throughout the long growing season is a key determinant of corm yield and quality.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Taro leaf blight, caused by an oomycete pathogen, is the most serious disease of taro in many regions and can devastate susceptible crops under humid conditions; corm and root rots caused by soilborne fungi also cause storage and field losses. (Taro leaf blight has no dedicated reference entry in this dataset and is therefore not linked here.)',
        },
        {
          type: 'paragraph',
          text: 'Taro beetles, aphids that transmit viruses, spider mites, and root-feeding nematodes are among the pests affecting the crop. Management combines healthy planting material, resistant varieties where available, field sanitation, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Taro corms are harvested by lifting the whole plant once the corm has matured, usually many months after planting. Corms are perishable and prone to rot in storage, so they are often harvested as needed and handled carefully.',
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
            'Corms boiled, baked, pounded into paste (such as poi), or processed into flour and chips',
            'Young leaves and leaf stalks cooked as vegetables in many cuisines',
            'A cultural and dietary staple across the Pacific, Africa, Asia, and the Caribbean',
            'All parts require thorough cooking to break down calcium oxalate before eating',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'root-rot' }],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'yam' },
    { type: 'crop', slug: 'cassava' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'soil-topic', slug: 'waterlogging' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: ['perennial-crop', 'yield'],
  geographicScope:
    'Global overview centered on the Pacific, Asia, and Africa. Wetland and upland systems differ substantially in management.',
  climateContext:
    'Warm, humid tropical staple with a long growing season and high water requirement; uniquely adapted to flooded culture.',
  limitations: [
    'Wetland and upland production systems differ in water and nutrient management and are not reduced to universal guidance here.',
    'Taro leaf blight, the most serious disease, has no dedicated reference entry in this dataset, so it is not linked.',
    'All edible parts require thorough cooking to break down calcium oxalate.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of taro as a tropical root staple' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Taro crop, disease, and pest compendium data',
    },
    { sourceId: 'britannica', citedFor: 'Botanical description and food use' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Taro (Colocasia esculenta)',
    description:
      'An evidence-based reference on taro: aroid botany, wetland and upland culture, corm and leaf uses, water needs, diseases, pests, and preparation.',
    keywords: ['taro', 'Colocasia esculenta', 'dasheen', 'cocoyam'],
  },
  structuredData: { article: true },
};
