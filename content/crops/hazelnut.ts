import type { CropContent } from '@/types/content';

export const hazelnut: CropContent = {
  id: 'crop-hazelnut',
  slug: 'hazelnut',
  contentType: 'crop',
  title: 'Hazelnut',
  scientificName: 'Corylus avellana',
  alternativeNames: ['Filbert', 'Cobnut'],
  category: 'Tree nut crop',
  subcategory: 'Temperate deciduous nut shrub/tree',
  botanicalFamily: 'Betulaceae (birch family)',
  lifecycle: 'Perennial',
  summary:
    'Hazelnut is a temperate deciduous nut plant, grown as a multi-stemmed shrub or trained to a single trunk, that flowers unusually early and is wind-pollinated rather than insect-pollinated. Orchards typically interplant multiple cultivars to align pollen availability with female flower receptivity.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hazelnut is a deciduous plant grown for its edible nut, cultivated either as a multi-stemmed shrub or trained to a single trunk depending on regional practice and the degree of mechanization used at harvest. It is grown across temperate regions with mild winters suited to its distinctively early flowering habit.',
    },
    {
      type: 'paragraph',
      text: 'Unlike almond, which depends on insect pollinators, hazelnut is wind-pollinated: male catkins release pollen that is carried by air movement to separate female flowers. Many cultivars also show a timing separation between male and female flower maturity on the same plant, so orchards commonly interplant multiple cultivars to help ensure pollen is available when female flowers are receptive.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Betulaceae (birch family)' },
    { label: 'Life cycle', value: 'Perennial deciduous shrub or tree' },
    { label: 'Main species', value: 'Corylus avellana' },
    {
      label: 'Pollination',
      value: 'Wind-pollinated, via male catkins and separate female flowers',
    },
    {
      label: 'Flowering timing',
      value:
        'Flowers notably early, in winter or very early spring in many growing regions',
    },
    {
      label: 'Growth form',
      value: 'Grown as a multi-stemmed shrub or trained to a single trunk',
      note: 'Choice depends on region and mechanization needs.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Hazelnut is grown as a long-lived perennial planting, established from rooted suckers, layered plants, or grafted material depending on region and cultivar. Its distinctive early flowering habit and reliance on wind rather than insects for pollination set it apart from most other temperate tree nut crops.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from traditional shrub-form plantings managed with multiple stems to single-trunk, tree-form orchards designed for mechanical harvest, with the choice shaped by regional tradition, labor availability, and equipment.',
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
            { term: 'Family', description: 'Betulaceae (birch family)' },
            { term: 'Genus', description: 'Corylus' },
            {
              term: 'Principal species',
              description: 'Corylus avellana (common hazel)',
            },
            {
              term: 'Pollination mechanism',
              description:
                'Wind-pollinated; male catkins release pollen carried by air movement to separate female flowers on the same or nearby plants',
            },
            {
              term: 'Flowering biology',
              description:
                'Often dichogamous, with male and female flower maturity on an individual plant offset in time, favoring cross-pollination from other cultivars',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous, multi-stemmed shrub by nature; commercially grown either as a shrub or trained to a single trunk',
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
          text: 'Corylus avellana is native to Europe and parts of Western Asia, where it has long grown wild in woodlands and hedgerows in addition to being cultivated. Commercial production has since expanded to other temperate regions with suitably mild winters.',
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
          text: 'Hazelnut requires a period of winter chilling to flower normally, but is distinctive among temperate tree nuts in flowering in winter or very early spring in many growing regions, well ahead of most other tree crops. This early bloom timing means frost during the flowering period is an important site consideration, even though the exact timing varies by region and cannot be generalized to a specific calendar window.',
        },
        {
          type: 'paragraph',
          text: 'Because pollination depends on wind rather than insects, calm, dry conditions during the bloom period support effective pollen dispersal, while prolonged wet or very windy weather can reduce pollination efficiency.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Hazelnut performs best on deep, well-drained soils with good structure; loams and sandy loams are generally favored. The crop has limited tolerance for waterlogging, which restricts rooting and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site drainage and soil depth should be assessed using local soil survey information and, where available, field testing, particularly given the plant’s multi-stemmed root system.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a hazelnut planting begins with choosing between a shrub-form or single-trunk training system, a decision shaped by regional tradition and whether mechanical harvest is planned. Because of dichogamy and reliance on wind pollination, cultivar selection places significant weight on interplanting two or more cultivars whose male and female flowering periods complement one another across the planting.',
        },
        {
          type: 'table',
          caption:
            'Wind pollination versus insect pollination across nut crops',
          columns: [
            'Crop',
            'Pollination mechanism',
            'Orchard design implication',
          ],
          rows: [
            [
              'Hazelnut',
              'Wind (male catkins to separate female flowers)',
              'Interplant multiple cultivars with complementary bloom timing; calm, dry conditions favor pollen dispersal',
            ],
            [
              'Almond',
              'Insect (commonly managed honey bees)',
              'Interplant compatible pollinizer cultivars; depends on adequate pollinator activity during bloom',
            ],
            [
              'Walnut',
              'Wind, with dichogamous timing on individual trees',
              'Interplant cultivars with offset male/female maturity to improve pollen availability',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Training system selection: multi-stemmed shrub versus single-trunk tree form',
            'Cultivar selection considering dichogamy and interplanting for pollination timing',
            'Sucker management, which is more intensive in shrub-form plantings',
            'Long-term canopy and orchard floor management across many productive years',
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
          text: 'Nitrogen supports vegetative growth and nut development, while potassium contributes to overall plant vigor and nut fill. Boron is a micronutrient of particular relevance to hazelnut, since deficiency can affect flowering and nut set.',
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
          text: 'Hazelnut is grown both rain-fed and under irrigation depending on region, with water demand rising through nut development. Drip irrigation is widely used in modern plantings to apply water efficiently to the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during sensitive growth stages while preventing waterlogging, which hazelnut tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect leaves, shoots, and developing nuts under humid conditions. Root rot, often linked to poorly drained or waterlogged sites, can weaken plants over time. Among insect pests, weevils — including the hazelnut (nut) weevil, Curculio nucum, a well-documented hazelnut-specific pest — can damage developing nuts, while aphids and mealybugs can affect foliage and shoot growth.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Hazelnut is harvested once nuts have matured and dropped from the husk, either naturally falling to the ground for mechanical sweeping and collection or, in some systems, gathered from the plant. Nuts are then dried to a moisture content suitable for storage and processing.',
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
            'Confectionery uses, including chocolate-hazelnut products and baking ingredients',
            'Hazelnut oil pressed from the kernel',
            'Processed products such as hazelnut paste and flour',
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
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'walnut' },
    { type: 'crop', slug: 'almond' },
    { type: 'crop', slug: 'pistachio' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar interplanting design, training system, and chilling requirements are region- and site-specific.',
  climateContext:
    'Temperate deciduous nut crop requiring winter chill; flowers unusually early, making late-winter frost an important site consideration.',
  limitations: [
    'Cultivar dichogamy pattern, interplanting design, and chilling requirements are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global hazelnut production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Hazelnut pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for hazelnut',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Hazelnut',
    description:
      'A structured, evidence-based reference on hazelnut: wind pollination, early flowering, orchard design, nutrition, diseases, and harvest.',
    keywords: ['hazelnut', 'Corylus avellana', 'tree nut', 'filbert'],
  },
  structuredData: { article: true },
};
