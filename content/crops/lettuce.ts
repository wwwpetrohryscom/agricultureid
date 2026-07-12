import type { CropContent } from '@/types/content';

export const lettuce: CropContent = {
  id: 'crop-lettuce',
  slug: 'lettuce',
  contentType: 'crop',
  title: 'Lettuce',
  scientificName: 'Lactuca sativa',
  alternativeNames: ['Garden lettuce'],
  category: 'Vegetable crop',
  subcategory: 'Leafy vegetable',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Annual',
  summary:
    'Lettuce is a fast-growing annual leafy vegetable grown mainly for fresh salad use, cultivated in open fields, high tunnels, and hydroponic systems across many climates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lettuce is grown for its leaves or compact leafy head, harvested well before the plant would naturally bolt and flower. Types range from crisphead (iceberg) and romaine to loose-leaf and butterhead, each with different growth habits, textures, and production requirements.',
    },
    {
      type: 'paragraph',
      text: 'The crop has a short growth cycle and a shallow, relatively limited root system, which makes it responsive to management but also sensitive to short-term stress. Lettuce is grown both in open-field systems and increasingly in protected and soilless (hydroponic) production.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Lactuca sativa' },
    {
      label: 'Primary uses',
      value: 'Fresh salad and garnish use; pre-cut and packaged salad products',
    },
    {
      label: 'Climate',
      value:
        'Cool-season crop; bolts (flowers) readily under heat and long days',
    },
    {
      label: 'Soil preference',
      value:
        'Fertile, well-drained loams and sandy loams high in organic matter',
      note: 'Optimal ranges are variety- and system-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Lettuce is grown across a range of types and systems, from field-grown crisphead lettuce harvested by machine to hydroponically grown leaf and butterhead types marketed as living lettuce or pre-packaged greens.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop matures quickly and is often grown in successive plantings to maintain continuous supply, timing, spacing, and post-harvest handling are closely managed to align with market demand.',
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
            { term: 'Family', description: 'Asteraceae (daisy family)' },
            { term: 'Genus and species', description: 'Lactuca sativa' },
            {
              term: 'Growth habit',
              description:
                'Annual forming a rosette or compact head of leaves; bolts to a flowering stalk under long days and heat',
            },
            {
              term: 'Common types',
              description:
                'Crisphead, romaine, butterhead, loose-leaf, and stem (celtuce) types',
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
          text: 'Cultivated lettuce is derived from wild Lactuca species native to the Mediterranean and Near East, with cultivation recorded in antiquity in Egypt and later spreading through the Mediterranean, Europe, and eventually worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Lettuce is now grown across a very wide range of countries and production systems. Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lettuce is a cool-season crop that grows best within a moderate temperature range; heat and long day length together trigger bolting, in which the plant elongates and flowers, ending marketable leaf or head production.',
        },
        {
          type: 'paragraph',
          text: 'Because bolting sensitivity varies by cultivar, cultivar selection and planting timing are matched to local season length, and protected culture is used in many regions to extend production into warmer or cooler periods.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lettuce performs best on fertile, well-drained loams and sandy loams with high organic matter content and reliable moisture-holding capacity, reflecting its shallow root system and rapid growth rate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'In soilless and hydroponic systems, nutrient solution management substitutes for soil fertility management; local system guidance should be followed.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Lettuce is established from direct seeding or transplants, often in successive plantings spaced over time to provide continuous harvest. Because the crop competes poorly with weeds during its short cycle, early weed control is important.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to bolting tolerance and intended production season',
            'Successive plantings to spread harvest over an extended period',
            'Close spacing management appropriate to head or leaf type',
            'Prompt weed control given the crop’s short growing cycle and shallow rooting',
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
          text: 'Nitrogen availability strongly influences leaf growth rate and quality, while calcium availability in the growing tissue is linked to tipburn, a physiological leaf-margin disorder. Requirements depend on soil or nutrient-solution supply, cultivar, and production system.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region- and system-specific',
          text: 'Fertilizer and nutrient-solution programs should follow local soil tests, water analysis, and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Because of its shallow root system and high water content, lettuce requires frequent, consistent irrigation; moisture stress can reduce quality and increase the risk of tipburn and bitterness. Drip and sprinkler irrigation are both used in field production.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements in open-field production are estimated from evapotranspiration and local climate data, following methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew is a major foliar disease of lettuce in cool, humid conditions, and gray mold (Botrytis) can affect leaves and heads, particularly under damp conditions or in storage. Aphids, cutworms, and slugs are among the common pests affecting establishment and leaf quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, sanitation, field or greenhouse monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Lettuce is harvested at the target leaf or head size before bolting begins, either by cutting the whole head or plant or by repeated leaf picking in cut-and-come-again systems. Rapid post-harvest cooling is important to maintain quality given the crop’s high water content and perishability.',
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
            'Fresh use in salads, sandwiches, and as a garnish',
            'Pre-cut and packaged salad and salad-mix products',
            'Cooked or grilled use in some cuisines',
            'Living lettuce sold with roots intact from hydroponic systems in some markets',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'slugs' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'cabbage' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'hydroponics' },
    { type: 'fertilizer', slug: 'compost' },
  ],
  glossaryTerms: [
    'annual-crop',
    'cultivar',
    'evapotranspiration',
    'integrated-pest-management',
  ],
  geographicScope:
    'Global overview. Cultivar bolting tolerance, production system, and input levels are region- and system-specific.',
  climateContext:
    'Cool-season leafy vegetable prone to bolting under heat and long days; grown in open fields, protected culture, and hydroponic systems.',
  limitations: [
    'Bolting sensitivity and planting timing are cultivar- and region-specific and are not reduced to universal guidance here.',
    'Nutrient-solution and fertility programs in soilless systems differ substantially from soil-based recommendations.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of lettuce in global vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'uc-ipm', citedFor: 'Integrated pest management for lettuce' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Lettuce production and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Lettuce',
    description:
      'A structured reference on lettuce: classification, bolting and climate sensitivity, soil and water needs, diseases, pests, and salad uses.',
    keywords: [
      'lettuce',
      'Lactuca sativa',
      'leafy vegetable',
      'lettuce agronomy',
    ],
  },
  structuredData: { article: true },
};
