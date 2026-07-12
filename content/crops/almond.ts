import type { CropContent } from '@/types/content';

export const almond: CropContent = {
  id: 'crop-almond',
  slug: 'almond',
  contentType: 'crop',
  title: 'Almond',
  scientificName: 'Prunus dulcis (syn. Prunus amygdalus)',
  alternativeNames: ['Sweet almond'],
  category: 'Tree nut crop',
  subcategory: 'Temperate stone fruit grown for its seed',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Almond is a temperate deciduous tree grown for its edible seed, botanically a drupe closely related to peach and plum. Commercial orchards depend on cross-pollination between compatible cultivars and are managed as long-lived perennial plantings.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almond is a deciduous tree in the genus Prunus, the same genus as peach, plum, and cherry. Unlike those relatives, almond is grown not for its fleshy fruit but for the edible kernel, or seed, found inside a hard shell surrounded by a leathery hull. Commercial production is concentrated in regions with a Mediterranean-type climate offering mild, wet winters and long, dry, warm summers.',
    },
    {
      type: 'paragraph',
      text: 'Almond is largely self-incompatible, meaning most commercial cultivars cannot set an adequate crop with their own pollen. Orchard design therefore typically interplants two or more compatible cultivars with overlapping bloom periods, and growers rely on insect pollinators — most often managed honey bees — to move pollen between trees during the bloom window.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Prunus dulcis' },
    {
      label: 'Fruit type',
      value: 'Drupe grown for its seed (kernel), not its flesh',
    },
    {
      label: 'Pollination',
      value:
        'Largely self-incompatible; relies on cross-pollination by insects',
      note: 'Orchards typically interplant multiple compatible cultivars.',
    },
    {
      label: 'Climate',
      value:
        'Mediterranean-type; requires winter chilling and is frost-sensitive at bloom',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Almond trees are established as grafted, long-lived perennials and cropped over many seasons before an orchard is removed and replanted. Because the tree is grown for its seed rather than its fruit flesh, harvest, pollination biology, and processing all differ notably from related stone-fruit crops such as peach.',
        },
        {
          type: 'paragraph',
          text: 'Global production is concentrated where a reliably dry harvest period coincides with the winter chill needed for normal flowering, and orchard-level decisions such as cultivar selection, pollinizer design, and rootstock are made once at establishment and shape management for the life of the planting.',
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
            { term: 'Family', description: 'Rosaceae (rose family)' },
            { term: 'Genus', description: 'Prunus' },
            {
              term: 'Principal species',
              description: 'Prunus dulcis (cultivated almond)',
            },
            {
              term: 'Fruit structure',
              description:
                'A drupe (stone fruit) in which the edible portion is the seed, or kernel, enclosed in a hard endocarp (shell) beneath a leathery hull; unlike peach or plum, the fleshy mesocarp is not eaten',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a fruiting cultivar onto a selected rootstock',
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
          text: 'Almond is native to a region spanning parts of Central and Southwest Asia and the Eastern Mediterranean, where it was domesticated in antiquity. Cultivation spread throughout the Mediterranean basin over subsequent centuries, and it was later introduced to other Mediterranean-type climate regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Current production statistics, leading cultivars, and trade patterns shift over time and by region; up-to-date figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Almond requires a genotype-specific period of winter chilling to break dormancy and flower normally in spring. Because almond tends to bloom early relative to many other temperate tree crops, spring frost during or shortly after bloom is one of the most significant climate risks, as flowers and young fruit are frost-sensitive.',
        },
        {
          type: 'paragraph',
          text: 'A dry period around harvest is also important, since the hull-split and drying process that precedes hulling and shelling benefits from low humidity and limited rainfall.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Almond performs best on deep, well-drained soils with good aeration; loams and sandy loams are generally favored. The crop has limited tolerance for waterlogging and poor drainage, which restrict rooting and increase the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock choice interacts strongly with soil conditions, including drainage, texture, and replant history. Site assessment should draw on local soil survey information and, where available, testing for orchard replant issues.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing an almond orchard begins with selecting a rootstock and cultivar combination suited to the site and market. Because most cultivars are self-incompatible, orchard design places significant weight on choosing pollinizer cultivars with bloom periods that overlap the main cultivar and on ensuring adequate insect pollination during the bloom window.',
        },
        {
          type: 'table',
          caption: 'Orchard pollination design considerations for almond',
          columns: ['Consideration', 'Why it matters'],
          rows: [
            [
              'Pollinizer cultivar selection',
              'Most almond cultivars are self-incompatible and need compatible pollen from a different cultivar to set fruit',
            ],
            [
              'Bloom-period overlap',
              'Pollinizer and main cultivars must flower at overlapping times for cross-pollination to occur',
            ],
            [
              'Insect pollination',
              'Adequate fruit set depends on insect pollinators, commonly managed honey bees, moving pollen between trees during bloom',
            ],
            [
              'Planting pattern',
              'Rows or blocks are typically arranged so pollinizer trees are within reasonable foraging distance of the main cultivar',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for vigor, anchorage, and site adaptation',
            'Cultivar and pollinizer selection for cross-pollination and overlapping bloom',
            'Training and pruning system matched to planting density and mechanization',
            'Long-term orchard floor and canopy management across many productive years',
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
          text: 'Nitrogen supports vegetative growth and kernel development, while potassium influences kernel fill and overall tree condition. Boron and zinc are micronutrients of particular relevance to almond, since deficiencies in either can affect flowering, fruit set, and shoot growth.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local leaf and soil analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Almond is grown almost exclusively under irrigation in most commercial production regions, with water demand rising through kernel fill and continuing until hull split. Drip irrigation and micro-sprinkler irrigation are both widely used, applying water efficiently to the root zone while helping manage orchard floor conditions ahead of harvest.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid stress during sensitive growth stages while also supporting the dry orchard-floor conditions that mechanical harvest and drying require later in the season.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect blossoms, shoots, and developing fruit in humid or wet conditions, particularly around bloom. Root rot, often associated with poorly drained or waterlogged soils, can weaken or kill trees over time and is closely linked to site drainage and rootstock choice. Insect pests include aphids, which can distort new growth, along with weevils and mealybugs, which affect shoots, nuts, or general tree vigor depending on species and region.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant rootstocks and cultivars where available, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Almond harvest begins once the hull has split open, exposing the shell within. Nuts are typically removed from the tree by mechanical shaking onto the orchard floor, where they are left to dry before being swept, picked up, and transported for hulling and shelling to recover the kernel.',
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
            'Raw and roasted kernels for direct consumption',
            'Processed products such as almond flour, almond milk, and confectionery ingredients',
            'Almond oil pressed from the kernel',
            'By-products such as hulls and shells, used variously as livestock feed, bedding, or a soil amendment depending on region',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'walnut' },
    { type: 'crop', slug: 'pistachio' },
    { type: 'crop', slug: 'peach' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar, pollinizer design, and chilling requirements are region- and site-specific.',
  climateContext:
    'Mediterranean-type climate tree crop requiring winter chill and a dry harvest period; vulnerable to spring frost during early bloom.',
  limitations: [
    'Pollinizer selection, rootstock choice, and chilling-hour specifics are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global almond production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Almond pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for almond',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Almond cultivar and orchard management research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Almond',
    description:
      'A structured, evidence-based reference on almond: botany, pollination and chilling needs, orchard establishment, nutrition, and harvest practices.',
    keywords: ['almond', 'Prunus dulcis', 'tree nut', 'almond orchard'],
  },
  structuredData: { article: true },
};
