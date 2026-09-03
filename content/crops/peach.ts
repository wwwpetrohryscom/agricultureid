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
      text: 'Peach rootstock choice is dominated by what is in the soil rather than by tree size. Replanting peach after peach runs into peach tree short life and into ring nematode, and the rootstocks that matter commercially — Nemaguard and its relatives — are chosen for nematode resistance first. The species includes both the familiar fuzzy-skinned peach and the smooth-skinned nectarine, which is a peach variant distinguished mainly by a single gene affecting skin texture rather than a separate species.',
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
          text: 'It is now grown commercially across temperate and subtropical regions on multiple continents.',
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
          text: 'Peach blooms early enough to be the orchard crop most often caught by spring frost in continental climates, and it does so on wood that also has to survive winter cold. The two hazards are not independent: a mild autumn that delays hardening leaves the same buds exposed to both, which is why peach acreage retreats from continental interiors towards lake and coastal margins.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Peach is grown on light-textured soils more often than the other stone fruits, and the reason is a disorder rather than a preference. Peach tree short life kills established trees outright, usually in the third to sixth year, and the recognised predisposing factors are a cluster: ring nematode populations, bacterial canker, winter injury to the bark, pruning too late in the dormant season, and soils below about pH 6.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because the disorder is a cluster rather than a single pathogen, management is a cluster too: rootstock choice, correcting soil pH before planting, delaying pruning until late winter, and pre-plant nematode assessment on replant ground. Rootstock susceptibility to ring nematode differs enough to matter, and local trial data should be preferred to a general recommendation.',
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
          text: 'Peach fruit sizes in a short final swell, and water stress in the three to four weeks before harvest costs size that cannot be recovered afterwards. The opposite error is as costly: heavy irrigation close to harvest dilutes soluble solids and softens fruit, so the schedule is usually eased back as maturity approaches rather than sustained.',
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
          text: "Brown rot is the disease that decides whether a peach crop reaches market. It infects blossoms in spring, survives in mummified fruit and cankers through the season, and then moves through ripening fruit quickly enough that a warm wet week before harvest can take a block that looked clean. Peach leaf curl is the other characteristic disease, and it is unusual in being controllable only before bud swell — once symptoms appear the season's treatment window has already closed.",
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
    { type: 'pest', slug: 'root-knot-nematode' },
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
