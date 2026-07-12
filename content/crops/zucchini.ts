import type { CropContent } from '@/types/content';

export const zucchini: CropContent = {
  id: 'crop-zucchini',
  slug: 'zucchini',
  contentType: 'crop',
  title: 'Zucchini',
  scientificName: 'Cucurbita pepo',
  alternativeNames: ['Courgette', 'Summer squash'],
  category: 'Vegetable crop',
  subcategory: 'Cucurbit (vine) vegetable',
  botanicalFamily: 'Cucurbitaceae (gourd family)',
  lifecycle: 'Annual',
  summary:
    'Zucchini is a fast-growing warm-season summer squash grown for its immature, tender fruit, valued for rapid, prolific production over a relatively short growing period.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Zucchini is a type of summer squash within the species Cucurbita pepo, harvested while the fruit skin and seeds are still soft and immature, unlike winter squash and pumpkin types of the same species that are harvested mature with a hardened rind.',
    },
    {
      type: 'paragraph',
      text: 'The crop grows rapidly under warm conditions, typically on a compact, bush-type plant rather than the long trailing vines of many other cucurbits, and produces fruit continuously over an extended harvest period once flowering begins.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cucurbitaceae (gourd family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Cucurbita pepo' },
    {
      label: 'Primary uses',
      value: 'Fresh-market and cooked vegetable',
    },
    {
      label: 'Climate',
      value:
        'Warm-season; frost-sensitive and fast-growing under warm conditions',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, well-drained loams',
      note: 'Consistent moisture supports rapid fruit development.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Zucchini is grown as a warm-season annual valued for its short time from planting to first harvest and its high, continuous yield once fruiting begins, making it a widely grown crop in both commercial and home garden settings.',
        },
        {
          type: 'paragraph',
          text: 'Its compact, bush-type growth habit distinguishes it from many other cucurbits and allows closer plant spacing than sprawling vine types.',
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
            { term: 'Family', description: 'Cucurbitaceae (gourd family)' },
            { term: 'Genus', description: 'Cucurbita' },
            { term: 'Principal species', description: 'Cucurbita pepo' },
            {
              term: 'Growth habit',
              description:
                'Fast-growing annual with a compact bush habit, bearing separate male and female flowers on the same plant',
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
          text: 'Cucurbita pepo was domesticated in the Americas, with squash among the earliest crops cultivated there. The zucchini type as commonly known today was developed relatively recently, with much of its modern popularization associated with northern Italian breeding in the 19th century before spreading globally.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown widely across temperate and warm regions worldwide; production and trade figures change over time and are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Zucchini requires warm soil and air temperatures for germination and rapid growth, and is sensitive to frost and chilling injury. It grows quickly under warm conditions, often reaching first harvest within roughly a month and a half of sowing in favorable climates.',
        },
        {
          type: 'paragraph',
          text: 'Field planting is timed to the local frost-free period, though protected culture and plastic mulches are used in some regions to extend the season.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Zucchini performs best on fertile, well-drained loams with good moisture-holding capacity, supporting the rapid vegetative growth and continuous fruit production characteristic of the crop.',
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
          text: 'Zucchini is established either by direct seeding after soil has warmed or from transplants for an earlier start, sown or set at a spacing suited to the compact bush habit of the crop.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection for fruit shape, color, and days to maturity',
            'Crop rotation with non-cucurbit crops to manage soil-borne disease and pest carryover',
            'Adequate pollinator activity, since fruit set depends on pollen transfer between separate male and female flowers',
            'Frequent harvesting, since fruit left on the plant quickly overmatures and can reduce further fruit set',
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
          text: 'Nitrogen supports the vigorous vegetative growth needed to sustain continuous fruiting, while potassium contributes to fruit development and quality over the harvest period.',
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
          text: 'Zucchini has high water demand during its rapid vegetative growth and fruiting period, and inconsistent moisture can reduce fruit quality and yield. Drip irrigation is widely used to supply consistent water directly to the root zone.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew is one of the most common diseases affecting zucchini foliage, particularly later in the season, and verticillium wilt can affect the crop where susceptible hosts have been grown repeatedly on the same land. Aphids and whiteflies are notable insect pests, both directly and as virus vectors.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Zucchini fruit is harvested while still immature, small, and tender, with skin soft enough to pierce easily with a fingernail; fruit left to mature further develops a harder skin and larger, tougher seeds, reducing quality. Frequent picking, often every one to two days during peak season, is typical.',
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
            'Fresh-market vegetable, eaten cooked or raw',
            'Processed products including preserved and frozen forms',
            'Edible flowers used as a specialty food item in some cuisines',
            'Crop residues sometimes used as livestock feed or incorporated into soil',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'verticillium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'temperature' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pumpkin' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'eggplant' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'yield', 'host-plant'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Fast-growing warm-season vegetable; frost-sensitive with rapid growth and continuous fruiting under warm conditions.',
  limitations: [
    'Harvest timing depends on fruit size and skin firmness at picking rather than a fixed day count, and preferences vary by market.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of summer squash in vegetable production systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Cucurbit disease and pest compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for summer squash',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Zucchini',
    description:
      'A structured, evidence-based reference on zucchini: classification, warm-season growth habits, soil, nutrition, diseases, pests, and uses.',
    keywords: ['zucchini', 'Cucurbita pepo', 'courgette', 'summer squash'],
  },
  structuredData: { article: true },
};
