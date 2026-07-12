import type { CropContent } from '@/types/content';

export const beetroot: CropContent = {
  id: 'crop-beetroot',
  slug: 'beetroot',
  contentType: 'crop',
  title: 'Beetroot',
  scientificName: 'Beta vulgaris subsp. vulgaris',
  alternativeNames: ['Table beet', 'Garden beet', 'Red beet'],
  category: 'Vegetable crop',
  subcategory: 'Root vegetable',
  botanicalFamily: 'Amaranthaceae (formerly Chenopodiaceae)',
  lifecycle: 'Biennial, grown as an annual for root harvest',
  summary:
    'Beetroot is a root vegetable grown for its sweet, deeply colored taproot, closely related to sugar beet and spinach, and notable among vegetables for a beneficial response to sodium fertilization.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Beetroot is a cultivated group within Beta vulgaris grown for its swollen taproot, typically deep red or, in some cultivars, golden or striped, valued fresh, pickled, and processed. It shares its species with sugar beet, chard, and mangel-wurzel, differing mainly in the traits selected for by breeders.',
    },
    {
      type: 'paragraph',
      text: 'Like carrot and other biennial root vegetables, beetroot flowers and sets seed only after exposure to cold the following season, but it is grown commercially as an annual harvested for its root within the first year of growth.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value: 'Amaranthaceae (formerly Chenopodiaceae)',
    },
    {
      label: 'Life cycle',
      value: 'Biennial, grown as an annual for root harvest',
    },
    { label: 'Main species', value: 'Beta vulgaris' },
    {
      label: 'Primary uses',
      value:
        'Fresh, cooked, and pickled root vegetable; juice and processed products',
    },
    {
      label: 'Climate',
      value: 'Cool-season; tolerates a range of temperate conditions',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained loams and sandy loams',
      note: 'Firm, stone-free soil supports even root shape.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Beetroot is grown for its edible taproot, harvested at a range of sizes from small, tender baby beets to larger roots intended for storage and processing. Deeply pigmented cultivars derive their color from betalain compounds distinctive to the genus Beta and a few related plant families.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from home garden and fresh-market cultivation to larger-scale plantings supplying canning, pickling, and juice industries.',
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
              description:
                'Amaranthaceae (formerly classified in Chenopodiaceae)',
            },
            { term: 'Species', description: 'Beta vulgaris' },
            {
              term: 'Cultivar group',
              description:
                'Table beet / garden beet (grown for its root, distinct from sugar beet and chard selections of the same species)',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial broadleaf plant grown as an annual, producing a swollen taproot and a rosette of edible leaves',
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
          text: 'Beetroot derives from wild sea beet (Beta vulgaris subsp. maritima), native to coastal areas of Europe, North Africa, and western Asia, with root-type selections developed over centuries of cultivation across Europe before spreading globally.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown widely in temperate regions worldwide; production and trade figures change over time and are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Beetroot favors cool to moderate temperatures and tolerates a range of temperate conditions, though prolonged exposure to cold early in growth can trigger premature bolting through vernalization, similar to other biennial root crops.',
        },
        {
          type: 'paragraph',
          text: 'High temperatures can affect root color intensity and quality in some cultivars, making planting-date choice a regionally specific decision.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Beetroot performs best on deep, well-drained loams and sandy loams free of stones and large clods, which supports even, well-shaped root development, alongside reasonable fertility to support both root and leaf growth.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: "Beetroot is typically direct-seeded, with the crop's multi-germ seed clusters (in some cultivars) often requiring thinning to achieve appropriate plant spacing for good root size.",
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to root color, size, and local season length',
            'Thinning of seedlings where multi-germ seed produces clustered plants',
            'Crop rotation to manage soil-borne disease pressure',
            'Timely weed management during early establishment',
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
          text: 'Boron deficiency is a notable concern in beetroot and its relatives, causing internal browning and heart rot of the root. Beetroot is also one of relatively few crops known to respond positively to sodium fertilization, reflecting its evolutionary origin in coastal, saline habitats, alongside its more conventional requirements for potassium and nitrogen.',
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
          text: 'Consistent soil moisture supports even root development in beetroot, with water stress capable of producing woody, poorly developed roots, while excess water can affect root quality and encourage disease. Both sprinkler and drip irrigation are used depending on scale.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot and common scab can affect root quality, particularly in poorly drained or previously infested soils. Aphids are a common pest, both directly and as virus vectors, while leaf miners tunnel within leaf tissue, reducing photosynthetic area and market quality of beet greens.',
        },
        {
          type: 'paragraph',
          text: 'Management combines crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Beetroot is harvested by pulling or lifting once roots reach the desired size, with smaller, more tender roots typically preferred for fresh markets and larger roots used for processing and longer storage.',
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
            'Fresh and cooked root vegetable',
            'Pickled and canned processed products',
            'Juice and natural food-coloring extracts',
            'Leaves used as a leafy green, similar to chard, in some cuisines',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'common-scab' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'sodium' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'machinery', slug: 'seed-drill' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'radish' },
  ],
  glossaryTerms: ['annual-crop', 'micronutrient', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season root vegetable tolerant of a range of temperate conditions; prolonged early cold can trigger bolting.',
  limitations: [
    'Sodium responsiveness and optimal application, where used, is best confirmed through local soil testing and extension guidance rather than assumed for every soil type.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of beetroot in vegetable production systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Beet disease and pest compendium data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Beet crop cultivar and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Beetroot',
    description:
      'A structured, evidence-based reference on beetroot: classification, root cultivation, boron and sodium nutrition, diseases, pests, and uses.',
    keywords: ['beetroot', 'Beta vulgaris', 'table beet', 'root vegetable'],
  },
  structuredData: { article: true },
};
