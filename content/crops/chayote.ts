import type { CropContent } from '@/types/content';

export const chayote: CropContent = {
  id: 'crop-chayote',
  slug: 'chayote',
  contentType: 'crop',
  title: 'Chayote',
  scientificName: 'Sicyos edulis',
  alternativeNames: [
    'Chocho',
    'Christophine',
    'Mirliton',
    'Sechium edule (former name)',
  ],
  category: 'Vegetable crop',
  subcategory: 'Perennial climbing cucurbit',
  botanicalFamily: 'Cucurbitaceae (gourd family)',
  lifecycle: 'Perennial',
  summary:
    'Chayote is a perennial cucurbit whose fruit contains a single large seed that germinates inside it, so the crop is planted by putting a whole fruit in the ground — and the roots are a second, separate harvest.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chayote departs from cucurbit convention in almost every way. The fruit holds one large flat seed rather than many small ones, and the seed germinates while still inside the fruit, so planting means burying a sprouting fruit rather than sowing seed.',
    },
    {
      type: 'paragraph',
      text: 'The vine is perennial where frost allows, cropping for years from one planting, and the tuberous roots that develop under an established plant are themselves eaten. One planting therefore yields two different products from opposite ends of the plant.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cucurbitaceae (gourd family)' },
    {
      label: 'Accepted name',
      value: 'Sicyos edulis, transferred from Sechium',
    },
    {
      label: 'Seed',
      value: 'A single large seed per fruit, germinating in situ',
    },
    { label: 'Propagation', value: 'The whole sprouting fruit is planted' },
    {
      label: 'Habit',
      value: 'Perennial vine where frost-free; cropping for several years',
    },
    {
      label: 'Second product',
      value: 'Tuberous roots, eaten in parts of its range',
    },
  ],
  sections: [
    {
      id: 'viviparous',
      heading: 'A fruit that sprouts on the shelf',
      body: [
        {
          type: 'paragraph',
          text: 'The single seed has no dormancy and germinates inside the intact fruit, which is why a chayote left in a kitchen sprouts. Planting material is therefore the marketable product itself, and there is no seed trade in the ordinary sense — a grower plants fruit, and a fruit that has begun to sprout is the planting unit.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'perennial',
      heading: 'A planting that lasts years',
      body: [
        {
          type: 'paragraph',
          text: 'Where winters are frost-free the vine persists and crops for several seasons from an established root system, which changes the economics: establishment is a one-off and the trellis is a long-term structure. Where frost occurs the crop is grown as an annual and replanted.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'roots',
      heading: 'The other harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Established plants form starchy tuberous roots that are dug and eaten in parts of Central America and elsewhere. Harvesting them ends the planting, so the two products are alternatives in time rather than a joint harvest, and a grower chooses when to convert a fruiting vine into a root crop.',
        },
      ],
    },
    {
      id: 'trellis',
      heading: 'Trellis and vigour',
      body: [
        {
          type: 'paragraph',
          text: 'The vine is extremely vigorous and needs a strong overhead structure; in gardens it is commonly grown over an arbour. Fruit hanging free below the canopy is cleaner and better shaped, and the same structure makes repeated picking practical.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'A genus that moved',
      body: [
        {
          type: 'paragraph',
          text: 'Both authorities now accept Sicyos edulis, transferring the species out of Sechium. Almost all horticultural literature, seed catalogues and trade documentation still use Sechium edule, so both names must be recognised when matching sources.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Picked young',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit is harvested young and tender, before the seed hardens and the flesh becomes fibrous. Left on the vine it becomes unmarketable and it sprouts, so picking frequency through the season is the main labour demand.',
        },
      ],
    },
    {
      id: 'photoperiod',
      heading: 'Flowering and daylength',
      body: [
        {
          type: 'paragraph',
          text: 'Chayote is a short-day plant in most types, flowering as daylength shortens, which concentrates production into a season even where the vine is perennial. That is why subtropical plantings crop in autumn rather than continuously.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Handling',
      body: [
        {
          type: 'paragraph',
          text: 'The fruit is thin-skinned and bruises easily, and it continues to develop after picking, so it is handled carefully and cooled. Its shelf life is limited by sprouting as much as by decay, which is unusual among vegetables.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Where it fits',
      body: [
        {
          type: 'paragraph',
          text: 'Chayote is a bulk, mild vegetable used cooked in stews, soups and stir-fries, and shoots and young leaves are eaten as greens in parts of Asia. A single species providing fruit, root and greens is a real part of its value in home and market-garden systems.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pumpkin' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'zucchini' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Mesoamerican in origin and grown across the tropics and subtropics, with significant production in Mexico, Costa Rica and Southeast Asia.',
  climateContext:
    'Frost-sensitive perennial vine; short-day flowering concentrates cropping into a season.',
  limitations: [
    'The perennial habit depends on frost-free conditions; in temperate regions the crop is annual and behaves differently.',
    'Photoperiod response varies between types and is not quantified here.',
    'Root harvest ends the planting and is an alternative to continued fruit production.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Tropical vegetable production context' },
    { sourceId: 'cabi', citedFor: 'Sicyos edulis compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cgiar', citedFor: 'Tropical horticulture research' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Chayote',
    description:
      'Sicyos edulis as a crop: a single seed germinating inside the fruit, planting whole fruit, the perennial vine, edible tuberous roots and short-day flowering.',
    keywords: [
      'chayote',
      'Sicyos edulis',
      'christophine',
      'mirliton',
      'viviparous seed',
    ],
  },
  structuredData: { article: true },
};
