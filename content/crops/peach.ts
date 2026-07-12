import type { CropContent } from '@/types/content';

export const peach: CropContent = {
  id: 'crop-peach',
  slug: 'peach',
  contentType: 'crop',
  title: 'Peach',
  scientificName: 'Prunus persica',
  alternativeNames: ['Nectarine'],
  category: 'Tree fruit crop',
  subcategory: 'Temperate stone fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Peach is a temperate deciduous stone fruit grown for fresh and processed fruit, encompassing both fuzzy-skinned peach and smooth-skinned nectarine, with cultivars bred across a wide range of chilling requirements.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Peach orchards are established from grafted trees combining a fruiting cultivar with a rootstock chosen for size control, anchorage, and site adaptation, as with other tree fruit crops. The species includes both the familiar fuzzy-skinned peach and the smooth-skinned nectarine, which is a peach variant distinguished mainly by a single gene affecting skin texture rather than a separate species.',
    },
    {
      type: 'paragraph',
      text: 'Unlike sweet cherry, most peach cultivars are self-fertile and do not require a separate pollinizer variety to set a commercial crop, simplifying orchard pollination design. Extensive breeding has also produced peach cultivars spanning a wide range of chilling requirements, from high-chill types suited to cold-winter climates to low-chill types adapted to subtropical growing regions, making peach one of the more climatically adaptable temperate tree fruits.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Prunus persica' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, canning, juice, and other processed products',
    },
    {
      label: 'Climate',
      value:
        'Temperate to subtropical; cultivars span a wide range of chilling requirements',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams and sandy soils; poor tolerance of waterlogging',
      note: 'Most peach cultivars are self-fertile, unlike sweet cherry.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Peach is grown as a grafted, long-lived perennial tree, generally shorter-lived and faster-cropping than some other tree fruit species. Production spans both fuzzy-skinned peach and its smooth-skinned nectarine variant, grown for fresh-market and processing markets.',
        },
        {
          type: 'paragraph',
          text: 'Because peach is propagated clonally, rootstock and cultivar decisions made at establishment shape orchard management for the productive life of the planting, with cultivar chilling requirement being a particularly important factor in matching varieties to a given climate.',
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
              description: 'Prunus persica (peach)',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a fruiting cultivar onto a selected rootstock',
            },
            {
              term: 'Nectarine',
              description:
                'A smooth-skinned variant of peach arising from a genetic difference in skin texture, grown and managed similarly to fuzzy-skinned peach',
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
          text: 'Peach originated in China, where it has a long history of cultivation, before spreading along historical trade routes through Central Asia into the Middle East, Europe, and eventually worldwide.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown commercially across temperate and subtropical regions on multiple continents. Production statistics and leading cultivars change over time and should be obtained from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Peach trees require a period of winter chilling to break dormancy and flower normally; the chilling requirement varies substantially by cultivar. Extensive breeding has produced peach cultivars spanning a wide range of chilling requirements, from high-chill types for cold-winter climates to low-chill types adapted to subtropical areas, making peach one of the most climatically adaptable temperate tree fruits.',
        },
        {
          type: 'paragraph',
          text: "Spring frost during bloom is a significant climate risk for peach in many regions, since flowers and young fruitlets are frost-sensitive and damage can substantially reduce a season's crop.",
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Peach performs best on deep, well-drained soils with good structure. Loams and sandy loams are generally favored, and the crop is intolerant of prolonged waterlogging, which restricts rooting and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock selection interacts with soil conditions, including drainage, depth, and replant history. Site assessment should draw on local soil survey information where available.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a peach orchard begins with choosing a rootstock and cultivar combination suited to the site, market, and local chilling accumulation. Most peach cultivars are self-fertile, unlike sweet cherry, which simplifies pollination planning, though orchards still benefit from insect pollinator activity.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for size control, anchorage, and site adaptation',
            'Cultivar selection matched to local chilling accumulation, from high-chill to low-chill types',
            'Training and pruning system matched to planting density',
            'Summer pruning and fruit thinning to manage fruit size and canopy light penetration',
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
          text: 'Nitrogen supports the vigorous annual shoot growth typical of peach, which fruits on one-year-old wood and therefore depends on regular renewal growth. Potassium supports fruit size and quality, while calcium status is linked to fruit firmness.',
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
          text: 'Peach is grown both rain-fed and under irrigation, with water demand highest during fruit development. Drip irrigation is widely used in modern orchards to apply water precisely to the root zone while avoiding the waterlogging peach tolerates poorly.',
        },
        {
          type: 'paragraph',
          text: 'Peach responds strongly to summer pruning and fruit thinning practices that improve light penetration and reduce fruit load, which growers combine with irrigation scheduling to influence fruit size; specific pruning and thinning intensities are managed according to cultivar and local conditions rather than a universal formula.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold can affect blossoms and ripening fruit, particularly under humid conditions, while powdery mildew affects shoots, leaves, and fruit finish. Bacterial leaf spot can cause lesions on leaves, twigs, and fruit in susceptible cultivars. Insect pests include aphids, which distort growth and can transmit viruses, fruit flies, which infest ripening fruit, and scale insects, which affect vigor.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Peach fruit ripens over a relatively short window and is generally hand-picked at a maturity stage assessed through background color and firmness, since the fruit is climacteric and continues to soften after harvest. Multiple picking passes are common within an orchard block as fruit ripens unevenly.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Peach vs. nectarine comparison',
          columns: ['Feature', 'Peach', 'Nectarine'],
          rows: [
            ['Skin', 'Fuzzy', 'Smooth'],
            [
              'Species relationship',
              'Prunus persica',
              'A skin-texture variant of Prunus persica',
            ],
            [
              'Typical use',
              'Fresh, canning, processing',
              'Mainly fresh market',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating peaches and nectarines',
            'Canned and processed fruit',
            'Juice and juice blends',
            'Dried peach products in some regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cherry' },
    { type: 'crop', slug: 'plum' },
    { type: 'crop', slug: 'apricot' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Rootstock, cultivar chilling requirement, and site suitability are region- and site-specific.',
  climateContext:
    'Temperate to subtropical deciduous stone fruit; breeding has produced cultivars across a wide range of chilling requirements, but bloom-time frost remains a risk.',
  limitations: [
    'Rootstock, cultivar chilling-hour specifics, and thinning intensity are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global peach production and cultivation context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Peach pest and disease compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for peach',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Peach cultivar and orchard management research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Peach',
    description:
      'A reference on peach and nectarine: classification, wide chilling-requirement range, self-fertility, soil needs, diseases, pests, and uses.',
    keywords: ['peach', 'Prunus persica', 'nectarine', 'stone fruit'],
  },
  structuredData: { article: true },
};
