import type { CropContent } from '@/types/content';

export const chiliPepper: CropContent = {
  id: 'crop-chili-pepper',
  slug: 'chili-pepper',
  contentType: 'crop',
  title: 'Chili pepper',
  scientificName: 'Capsicum annuum (and related cultivated Capsicum species)',
  alternativeNames: ['Chile pepper', 'Chilli'],
  category: 'Vegetable crop',
  subcategory: 'Solanaceous fruiting vegetable and spice crop',
  botanicalFamily: 'Solanaceae (nightshade family)',
  lifecycle: 'Perennial shrub, commonly cultivated as an annual',
  summary:
    'Chili pepper is a fruiting Solanaceous crop grown for pods ranging from mild to intensely pungent, used fresh, dried, or processed as a vegetable and spice across a wide range of climates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chili pepper belongs to the same genus as sweet (bell) pepper but includes cultivars selected for pungency, driven by capsaicinoid compounds concentrated mainly in the internal placental tissue of the fruit rather than the flesh.',
    },
    {
      type: 'paragraph',
      text: 'Although chili pepper is a tender perennial shrub in frost-free climates, it is most often grown commercially as an annual crop, established from transplants and harvested within a single growing season in temperate regions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Solanaceae (nightshade family)' },
    {
      label: 'Life cycle',
      value: 'Perennial shrub, commonly grown as an annual',
    },
    { label: 'Main species', value: 'Capsicum annuum (and related species)' },
    {
      label: 'Primary uses',
      value: 'Fresh, dried, and processed pods as a vegetable and spice',
    },
    {
      label: 'Climate',
      value: 'Warm-season; frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams',
      note: 'Consistent moisture and calcium supply reduce fruit disorders.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Chili pepper is grown across a wide range of climates, from open-field production in warm regions to protected cultivation under greenhouses or high tunnels in cooler climates, reflecting its broad culinary and commercial importance.',
        },
        {
          type: 'paragraph',
          text: 'Cultivars vary enormously in pod shape, size, color, and pungency, supporting both fresh-market vegetable use and dried, powdered, and processed spice products.',
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
            { term: 'Family', description: 'Solanaceae (nightshade family)' },
            { term: 'Genus', description: 'Capsicum' },
            {
              term: 'Principal species',
              description:
                'Capsicum annuum, with related cultivated species including C. frutescens and C. chinense',
            },
            {
              term: 'Growth habit',
              description:
                'Tender perennial shrub commonly grown as an annual, producing fruit whose pungency is concentrated in internal placental tissue',
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
          text: 'Chili peppers originate from Central and South America, where they were domesticated over thousands of years before being spread globally following European contact, becoming deeply integrated into cuisines across Asia, Africa, and the Americas.',
        },
        {
          type: 'paragraph',
          text: 'The crop is grown today across warm cropping regions worldwide. Production and trade figures are compiled by FAO and national agricultural statistics services.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Chili pepper requires warm growing conditions and is sensitive to frost, restricting outdoor field production to the frost-free season in temperate climates or year-round cultivation in warmer regions and protected structures.',
        },
        {
          type: 'paragraph',
          text: 'Extreme heat during flowering can cause flower and young fruit drop, while cool temperatures slow growth and fruit development.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Chili pepper performs best on well-drained loam and sandy loam soils with good structure, supporting the crop’s moderate but sensitive root system.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Waterlogging increases the risk of root diseases, and inconsistent moisture is linked to fruit disorders. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Chili pepper is typically established from transplants raised in trays or seedbeds, set out once the risk of frost has passed and soil temperatures have warmed sufficiently for good root establishment.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection for pungency level, pod type, and market use',
            'Transplanting timed to frost-free conditions and adequate soil warmth',
            'Staking or support in some production systems to manage fruit load',
            'Rotation away from other Solanaceous crops to manage shared soil-borne diseases',
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
          text: 'Nitrogen supports vegetative growth and fruit set, while calcium status is closely linked to fruit quality, since deficiency or inconsistent uptake is associated with blossom end rot, a common fruit disorder in Solanaceous vegetables.',
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
          text: 'Chili pepper benefits from consistent soil moisture, particularly during flowering and fruit development, since irregular watering is associated with fruit disorders such as blossom end rot.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is widely used in both open-field and protected production to apply water precisely and maintain even soil moisture.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial leaf spot can cause lesions on leaves and fruit, reducing marketable quality, while anthracnose affects ripening fruit, particularly under warm, humid conditions. Thrips are significant pests both for direct feeding damage and as vectors of certain viruses, and aphids can also transmit viruses while feeding on foliage.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Pods are hand-picked at green (immature) or fully colored (mature) stages depending on cultivar and market, with some production also harvested for drying, in which pods are left to mature and dry further before processing.',
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
            'Fresh-market vegetable use in a wide range of cuisines',
            'Dried and powdered spice products',
            'Processing into sauces, pastes, and preserved products',
            'Oleoresin extraction for food-industry flavoring and coloring',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'machinery', slug: 'transplanter' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sweet-pepper' },
    { type: 'crop', slug: 'tomato' },
  ],
  glossaryTerms: ['cultivar', 'integrated-pest-management', 'yield'],
  geographicScope:
    'Global overview of production spanning open-field and protected cultivation across warm and temperate regions.',
  climateContext:
    'Warm-season, frost-sensitive fruiting vegetable; grown as an annual across most commercial production regions.',
  limitations: [
    'Pungency level, cultivar type, and processing method vary enormously by region and market and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global chili pepper production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Chili pepper disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for peppers',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chili pepper',
    description:
      'An evidence-based reference on chili pepper: classification, climate and soil needs, crop management, nutrition, diseases, pests, and uses.',
    keywords: [
      'chili pepper',
      'Capsicum annuum',
      'chile',
      'pepper cultivation',
    ],
  },
  structuredData: { article: true },
};
