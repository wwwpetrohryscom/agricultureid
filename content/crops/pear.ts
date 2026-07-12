import type { CropContent } from '@/types/content';

export const pear: CropContent = {
  id: 'crop-pear',
  slug: 'pear',
  contentType: 'crop',
  title: 'Pear',
  scientificName:
    'Pyrus communis (European pear); Pyrus pyrifolia (Asian pear)',
  alternativeNames: ['European pear', 'Asian pear', 'Nashi pear'],
  category: 'Tree fruit crop',
  subcategory: 'Temperate pome fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Pear is a temperate deciduous tree fruit grown from grafted trees for fresh consumption and processing. European and Asian pear types differ notably in texture and ripening behavior, and most cultivars require cross-pollination.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pear is a widely grown temperate pome fruit, closely related to apple within the rose family, and cultivated across cool and cold-temperate regions worldwide. Commercial orchards are established from grafted trees combining a chosen fruiting cultivar with a rootstock selected for the site, since pear does not come true from seed.',
    },
    {
      type: 'paragraph',
      text: 'Two broad groups are grown commercially: European pear (Pyrus communis), typically softer-fleshed and buttery when ripe, and Asian or nashi pear (Pyrus pyrifolia), typically crisp and apple-like in texture. Most pear cultivars are not reliably self-fertile and are planted with a compatible pollinizer variety to ensure a commercial crop.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    {
      label: 'Main species',
      value: 'Pyrus communis (European); Pyrus pyrifolia (Asian)',
    },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, canning, juice, and dried products',
    },
    {
      label: 'Climate',
      value:
        'Temperate; requires a winter chilling period for normal flowering',
    },
    {
      label: 'Notable trait',
      value:
        'European pear is typically picked underripe and ripened off the tree',
      note: 'Most European pear cultivars develop poor texture and flavor if left to ripen on the tree.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pear trees are grown as grafted, long-lived perennials, cropped over many seasons in a manner similar to apple. Production includes both European pear orchards, common in temperate regions of Europe, North America, and parts of the Southern Hemisphere, and Asian pear orchards, historically concentrated in East Asia but now grown more widely.',
        },
        {
          type: 'paragraph',
          text: 'Because the two pear groups differ in fruit texture, ripening behavior, and market handling, orchard and post-harvest practices are often specific to which type is grown. Site conditions, cultivar choice, and market destination should guide these decisions locally.',
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
            { term: 'Genus', description: 'Pyrus' },
            {
              term: 'Principal species',
              description:
                'Pyrus communis (European pear) and Pyrus pyrifolia (Asian or nashi pear)',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a fruiting cultivar onto a selected rootstock',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'European and Asian pear are distinct species within the same genus. They differ in typical fruit shape, flesh texture, and — importantly for growers and handlers — in how the fruit behaves as it ripens, described further under Harvest.',
        },
        {
          type: 'table',
          caption: 'European pear compared with Asian (nashi) pear',
          columns: ['Aspect', 'European pear', 'Asian pear'],
          rows: [
            [
              'Flesh texture',
              'Soft and buttery when ripe',
              'Crisp, apple-like, retained even when ripe',
            ],
            [
              'Ripening behavior',
              'Typically ripens best off the tree after harvest',
              'Many cultivars are commonly ripened closer to tree-ripeness',
            ],
            [
              'Typical use',
              'Fresh eating, canning, processing',
              'Fresh eating, generally consumed while crisp',
            ],
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
          text: 'European pear traces its cultivated ancestry to wild Pyrus populations of Europe and western Asia, with a long history of selection extending back to antiquity. Asian pear was independently domesticated from wild Pyrus species native to East Asia. Both groups have since spread to temperate growing regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Current production volumes, leading cultivars, and trade patterns vary by region and shift over time; figures should be obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pear trees require a period of winter chilling to break dormancy and flower normally the following spring; the chilling requirement varies by cultivar and species group and is a key factor in matching varieties to a given climate.',
        },
        {
          type: 'paragraph',
          text: 'As with other temperate tree fruits, spring frost during bloom is a significant risk, since open flowers and young fruitlets are sensitive to cold and damage can substantially reduce a season’s crop.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pear performs best on deep, well-drained soils with good structure and moisture-holding capacity. Loams and sandy loams are generally favored. Pear is intolerant of prolonged waterlogging, which restricts rooting and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock selection interacts strongly with soil conditions, including drainage, depth, and replant history. Site assessment should draw on local soil survey information and, where available, testing for orchard replant issues.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a pear orchard begins with choosing a rootstock and cultivar combination suited to the site, market, and desired tree size and form. Because most pear cultivars are not reliably self-fertile, orchard design typically includes one or more compatible pollinizer varieties planted to ensure adequate cross-pollination by insect pollinators.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for size control, anchorage, and site adaptation',
            'Cultivar and pollinizer selection, since most pear varieties require cross-pollination',
            'Training and pruning system matched to planting density and cultivar vigor',
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
          text: 'Nitrogen influences vegetative vigor and must be balanced against excessive shoot growth. Potassium supports fruit size and quality, while calcium status is linked to fruit firmness and storage quality. Boron is important for pollination, fruit set, and fruit quality in pear and is monitored where deficiency is a regional concern.',
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
          text: 'Pear is grown both rain-fed and under irrigation, with water demand highest during cell division and fruit enlargement. Drip irrigation is widely used in modern orchards to apply water precisely to the root zone while limiting foliage wetting.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during critical fruit-growth stages while preventing waterlogging, which pear tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fire blight, caused by the bacterium Erwinia amylovora, is one of the most economically damaging diseases of pear worldwide and is generally more severe on pear than on most apple cultivars, capable of killing blossoms, shoots, and entire limbs or trees in susceptible cultivars under favorable conditions. Apple scab can also affect pear in humid growing regions, causing leaf and fruit lesions.',
        },
        {
          type: 'paragraph',
          text: 'Among insect pests, pear psylla (a species of psyllid) is a genuinely major, pear-specific pest that feeds on foliage and excretes honeydew that promotes sooty mold, in addition to being able to weaken trees under heavy infestation. Codling moth larvae bore into fruit, and aphids can distort growth and transmit viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars, orchard sanitation, careful pruning to remove blighted tissue, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'European pear is a distinctive case among tree fruits in that most cultivars are picked while still firm and underripe and then ripened off the tree in controlled conditions; if left to ripen on the tree, many European pear cultivars develop a gritty texture from stone cells and fail to develop good eating quality. This makes harvest maturity assessment and post-harvest ripening management central to fruit quality.',
        },
        {
          type: 'paragraph',
          text: 'Asian pear cultivars are generally handled differently: many are commonly harvested closer to tree-ripeness and eaten while still crisp, rather than requiring an off-tree softening period, though practices vary by cultivar and market. Growers should follow guidance specific to the cultivar and type being grown.',
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
            'Fresh-market eating pears, both European and Asian types',
            'Canning and processing into sauce and dessert products',
            'Juice and other beverages',
            'Dried pear products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fire-blight' },
    { type: 'plant-disease', slug: 'apple-scab' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'codling-moth' },
    { type: 'pest', slug: 'psyllids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'peach' },
    { type: 'crop', slug: 'cherry' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Rootstock, cultivar, chilling, and pollinizer requirements are region- and site-specific.',
  climateContext:
    'Temperate deciduous tree fruit requiring winter chill; vulnerable to spring frost during bloom.',
  limitations: [
    'Rootstock, spacing, and chilling-hour specifics are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global pear production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Fire blight and pear psylla compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for pear',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Pear cultivar, ripening, and orchard management research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pear',
    description:
      'A structured, evidence-based reference on pear: European and Asian types, chilling needs, fire blight risk, off-tree ripening, and orchard care.',
    keywords: ['pear', 'Pyrus communis', 'Asian pear', 'tree fruit'],
  },
  structuredData: { article: true },
};
