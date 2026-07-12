import type { CropContent } from '@/types/content';

export const watermelon: CropContent = {
  id: 'crop-watermelon',
  slug: 'watermelon',
  contentType: 'crop',
  title: 'Watermelon',
  scientificName: 'Citrullus lanatus',
  alternativeNames: ['Water melon'],
  category: 'Vine fruit crop',
  subcategory: 'Warm-season cucurbit',
  botanicalFamily: 'Cucurbitaceae (cucurbit family)',
  lifecycle: 'Annual',
  summary:
    'Watermelon is a warm-season annual vine crop grown for its large, juicy fruit. It is direct-seeded or transplanted each season and requires warm soil, ample space, and typically insect pollination to set fruit.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Watermelon is a trailing annual vine cultivated worldwide in warm climates for its large fruit, prized for high water content and sweetness. Unlike tree or shrub fruit crops, a watermelon planting is established anew each season from seed or transplants and completes its life cycle within a single growing season.',
    },
    {
      type: 'paragraph',
      text: 'Many modern seedless watermelon cultivars are triploid hybrids that produce little to no viable seed. Because triploid plants have reduced pollen viability, growers typically interplant a diploid (seeded) pollinizer variety nearby to supply pollen for fruit set, an arrangement that makes pollination planning an important part of seedless watermelon production.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cucurbitaceae (cucurbit family)' },
    { label: 'Life cycle', value: 'Annual trailing vine' },
    { label: 'Main species', value: 'Citrullus lanatus' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit; rind and seed used in some regional foods',
    },
    {
      label: 'Climate',
      value: 'Warm-season crop; sensitive to cold soil and frost',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams and loams',
      note: 'Good drainage and soil warmth at planting are important; specifics vary by region.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Watermelon is grown as an annual crop, re-established every season from direct-seeded or transplanted young plants rather than from a permanent planting. Its long, trailing vines require considerable ground space or trellising, and commercial production ranges from open-field plantings to plasticulture systems using raised beds and mulch.',
        },
        {
          type: 'paragraph',
          text: 'Fruit set depends on successful pollination of the flowers, most commonly by bees, and on adequate warmth throughout the growing period. Because the crop is reseeded annually, decisions such as cultivar type, spacing, and pollinizer arrangement are made fresh each season.',
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
            { term: 'Family', description: 'Cucurbitaceae (cucurbit family)' },
            { term: 'Genus', description: 'Citrullus' },
            {
              term: 'Principal species',
              description: 'Citrullus lanatus (cultivated watermelon)',
            },
            {
              term: 'Growth habit',
              description:
                'Trailing annual vine with tendrils, large lobed leaves, and separate male and female flowers on the same plant',
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
          text: 'Watermelon is believed to have originated in Africa, where wild and semi-domesticated relatives of Citrullus lanatus are still found, before spreading through the Mediterranean, the Middle East, and Asia in antiquity and later reaching the Americas. It is now grown commercially in warm regions on every populated continent.',
        },
        {
          type: 'paragraph',
          text: 'Production areas, leading cultivar types, and trade volumes change over time; current figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Watermelon is a heat-loving crop that grows poorly in cool conditions and is intolerant of frost at any growth stage. Seed germination and early growth are strongly influenced by soil temperature, and cool soils can delay emergence and increase the risk of seedling disease.',
        },
        {
          type: 'paragraph',
          text: 'Extended periods of high daytime and nighttime heat during flowering can affect pollination and fruit set, making heat stress a relevant climate risk factor alongside the crop’s general warmth requirement.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Watermelon performs best on deep, well-drained soils that warm quickly in spring, with sandy loams and loams widely favored for early-season planting. Good drainage is important, since the crop is intolerant of waterlogged or poorly aerated soils, which favor root and vine diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil type interacts with planting date, mulching, and irrigation choice. Site-specific soil assessment should draw on local soil survey information.',
        },
      ],
    },
    {
      id: 'field-establishment',
      heading: 'Field establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Watermelon fields are established from direct-seeded plantings or from transplants raised in advance and set out once soil and air temperatures are suitable. Because vines spread widely, row and plant spacing are set to allow room for vine growth while supporting field operations.',
        },
        {
          type: 'list',
          items: [
            'Seedbed or bed preparation, often with plastic mulch to warm soil and manage weeds',
            'Direct seeding or transplanting once soil temperature is adequate for germination and establishment',
            'Wide plant and row spacing to accommodate long trailing vines',
            'Pollinizer planning for seedless (triploid) cultivars, which require interplanted diploid (seeded) varieties to supply viable pollen',
            'Reliance on bee activity, managed or wild, for flower pollination and fruit set',
          ],
        },
        {
          type: 'table',
          caption:
            'Diploid (seeded) versus triploid (seedless) watermelon types',
          columns: ['Type', 'Ploidy', 'Seed', 'Role in the field'],
          rows: [
            [
              'Diploid',
              'Standard (2n)',
              'Produces viable seed',
              'Grown for seeded fruit, and interplanted as a pollen source for seedless blocks',
            ],
            [
              'Triploid',
              'Seedless hybrid (3n)',
              'Produces little to no viable seed',
              'Requires a nearby diploid pollinizer for fruit set; grown for seedless fresh-market fruit',
            ],
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
          text: 'Nitrogen supports vine and foliage growth but is typically moderated as the crop moves into flowering and fruiting, since excessive vegetative growth can come at the expense of fruit set and quality. Potassium is closely associated with fruit size, sugar accumulation, and overall fruit quality in watermelon.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and tissue testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Watermelon has substantial water needs during vine establishment and fruit development, and drip irrigation is widely used to deliver water and nutrients directly to the root zone, particularly in plasticulture systems. Deficit irrigation strategies, which deliberately apply less than full crop water demand at certain stages, are sometimes used to manage costs or water availability while limiting effects on fruit quality.',
        },
        {
          type: 'paragraph',
          text: 'Reducing irrigation as fruit approaches maturity is a common practice aimed at improving fruit quality, though the appropriate timing and degree of any water reduction depend on local conditions and should follow regional guidance.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew and powdery mildew are two of the most significant foliar diseases of watermelon, both capable of rapidly reducing leaf area and, in turn, fruit yield and quality if unmanaged. Fusarium wilt is a classic soilborne disease of watermelon, caused by a soil-inhabiting fungus that persists in fields for years; management relies heavily on resistant or tolerant rootstocks used in grafted transplants, together with crop rotation, since the pathogen is difficult to eliminate once established in a field.',
        },
        {
          type: 'paragraph',
          text: 'Common insect pests include aphids and whiteflies, both of which can also transmit plant viruses, and spider mites, which can build up rapidly in hot, dry conditions and cause leaf stippling and decline.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or grafted cultivars, crop rotation, sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Watermelon fruit does not continue to ripen appreciably after picking, so harvest timing relies on assessing maturity while fruit is still on the vine. Common indicators include the color of the ground spot (the area of rind that rested on the soil), browning and drying of the tendril nearest the fruit, and the dull, hollow sound produced when a mature fruit is thumped. These signs are used in combination rather than relying on a fixed number of days from planting, since maturation timing varies with cultivar and growing conditions.',
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
            'Fresh-market whole and cut fruit',
            'Fresh-cut and processed fruit products, including juice',
            'Rind used in some regional cuisines, such as pickles or preserves',
            'Seeds roasted and eaten as a snack in some cultures and cultivar types grown specifically for seed',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'melon' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'pumpkin' },
  ],
  glossaryTerms: [
    'annual-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar choice, spacing, planting dates, and irrigation practices are region-specific.',
  climateContext:
    'Warm-season annual vine crop; requires warm soil for establishment and is intolerant of frost.',
  limitations: [
    'Cultivar selection, plant spacing, and irrigation scheduling are examples of region-specific decisions not covered by universal values here.',
    'Production and yield statistics change over time and should be taken from primary datasets such as FAOSTAT.',
    'Disease and pest pressure varies substantially by region and season and should be assessed against local monitoring and extension guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global watermelon production and agronomy context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Watermelon pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for watermelon',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Watermelon',
    description:
      'An evidence-based reference on watermelon: classification, climate and soil needs, field establishment, pollination, diseases, pests, and harvest signs.',
    keywords: [
      'watermelon',
      'Citrullus lanatus',
      'cucurbit crop',
      'watermelon growing',
    ],
  },
  structuredData: { article: true },
};
