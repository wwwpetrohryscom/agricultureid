import type { CropContent } from '@/types/content';

export const walnut: CropContent = {
  id: 'crop-walnut',
  slug: 'walnut',
  contentType: 'crop',
  title: 'Walnut',
  scientificName: 'Juglans regia',
  alternativeNames: ['Persian walnut', 'English walnut'],
  category: 'Tree nut crop',
  subcategory: 'Temperate deciduous nut tree',
  botanicalFamily: 'Juglandaceae (walnut family)',
  lifecycle: 'Perennial',
  summary:
    'Walnut is a temperate deciduous tree grown for its edible kernel and, in some regions, for valuable timber. Flowering biology that separates male and female maturity on the same tree makes cultivar interplanting an important orchard-design consideration.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Walnut is a long-lived deciduous tree valued both for its nut crop and, in some production systems, for its timber. Commercial orchards are established from grafted trees selected for nut quality, productivity, and adaptation to the local climate, and can remain productive for many decades.',
    },
    {
      type: 'paragraph',
      text: 'Walnut is monoecious, meaning a single tree bears both male flowers (catkins) and female flowers separately, rather than having distinct male and female trees. Many cultivars are also dichogamous, with male and female flowers on the same tree maturing at different times, which reduces self-pollination and is a key reason growers often interplant cultivars with complementary bloom timing.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Juglandaceae (walnut family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Juglans regia' },
    {
      label: 'Flowering habit',
      value:
        'Monoecious, often dichogamous (male and female flowers mature at different times)',
    },
    {
      label: 'Primary uses',
      value: 'Edible kernel, walnut oil, and in some regions timber',
    },
    {
      label: 'Climate',
      value:
        'Temperate; requires a winter chilling period for normal flowering',
      note: 'Sensitive to late spring frost during flowering.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Walnut trees are grown as grafted, long-lived perennials, with orchard decisions made at establishment shaping production for decades afterward. Because the species is grown in some regions for both nuts and timber, tree spacing and management can differ notably between orchards focused primarily on nut yield and those managed with a secondary timber objective.',
        },
        {
          type: 'paragraph',
          text: 'Global production spans large commercial orchards as well as traditional plantings, with cultivar choice, pollination design, and site climate all shaping how an individual orchard is managed.',
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
            { term: 'Family', description: 'Juglandaceae (walnut family)' },
            { term: 'Genus', description: 'Juglans' },
            {
              term: 'Principal species',
              description: 'Juglans regia (Persian or English walnut)',
            },
            {
              term: 'Flowering biology',
              description:
                'Monoecious, bearing separate male (catkin) and female flowers on the same tree; many cultivars are dichogamous, with male and female flowers on an individual tree maturing at different times',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a selected cultivar onto a chosen rootstock',
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
          text: 'Juglans regia is native to a broad region extending from Southeastern Europe through Central Asia to parts of the Himalayas and Western China, and it has been cultivated and traded along historical routes for millennia. It is now grown commercially in temperate zones across multiple continents.',
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
          text: 'Walnut requires a period of winter chilling to break dormancy and flower normally in spring, with the specific requirement varying by cultivar. Because flowering can occur relatively early in the season in some climates, late spring frost is a significant risk, as it can damage catkins, female flowers, and young nutlets.',
        },
        {
          type: 'paragraph',
          text: 'Site selection often favors locations with reduced frost risk during the flowering window, such as elevated or well-drained-air sites, though the appropriate choice depends heavily on local topography and climate.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Walnut performs best on deep, well-drained soils with good structure; loams and sandy loams are generally favored. The species develops an extensive root system and has limited tolerance for waterlogging, which restricts rooting depth and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock and soil interact strongly, including with respect to drainage, depth, and site history. Site assessment should draw on local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a walnut orchard begins with selecting a rootstock and cultivar suited to the site and market. Because dichogamy causes male and female flower maturity to be offset within many individual cultivars, orchards are commonly planted with two or more cultivars whose bloom timing complements one another, improving the chance that pollen is available when female flowers are receptive.',
        },
        {
          type: 'table',
          caption:
            'Dichogamy types in walnut and why cultivar interplanting matters',
          columns: ['Dichogamy type', 'Description', 'Orchard implication'],
          rows: [
            [
              'Protandrous',
              'Male flowers (catkins) shed pollen before the same tree’s female flowers become receptive',
              'Needs a compatible protogynous or overlapping cultivar nearby as a pollen source',
            ],
            [
              'Protogynous',
              'Female flowers become receptive before the same tree’s male flowers shed pollen',
              'Needs a compatible protandrous or overlapping cultivar nearby as a pollen source',
            ],
            [
              'Cultivar interplanting',
              'Two or more cultivars with complementary bloom timing are planted together',
              'Improves the likelihood of adequate pollen availability across the flowering window',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for vigor, anchorage, and site adaptation',
            'Cultivar selection considering dichogamy type and interplanting for pollination timing',
            'Training and pruning system matched to planting density and, where relevant, dual nut/timber objectives',
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
          text: 'Nitrogen supports vegetative growth and kernel development, while potassium contributes to overall tree vigor and nut fill. Zinc is a micronutrient of particular relevance to walnut, since deficiency can affect shoot growth and leaf development.',
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
          text: 'Walnut is grown both rain-fed and under irrigation depending on region, with water demand rising through nut development and kernel fill. Drip irrigation is widely used in modern orchards to apply water efficiently to the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during sensitive growth stages while preventing waterlogging, which walnut tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect leaves, shoots, and developing nuts, particularly in humid conditions. Root rot, often linked to poorly drained or waterlogged sites, can weaken or kill trees over time. Among insect pests, codling moth — better known as a pest of pome fruit — is also a documented pest of walnut, with larvae boring into developing nuts; aphids and weevils can additionally affect foliage, shoots, or nuts depending on species and region.',
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
          text: 'Walnut is typically harvested by mechanically shaking nuts from the tree once the hull has begun to split, similar in principle to almond harvest. After collection, nuts are hulled to remove the outer husk and then dried to a moisture content suitable for storage and processing.',
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
            'Raw and roasted kernels for direct consumption and baking',
            'Walnut oil pressed from the kernel',
            'Confectionery and processed food ingredients',
            'In some regions and species, valuable timber from mature trees managed for wood production',
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
    { type: 'pest', slug: 'codling-moth' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'almond' },
    { type: 'crop', slug: 'pistachio' },
    { type: 'crop', slug: 'hazelnut' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar, pollination-timing design, and chilling requirements are region- and site-specific.',
  climateContext:
    'Temperate deciduous tree crop requiring winter chill; vulnerable to late spring frost during flowering.',
  limitations: [
    'Cultivar dichogamy type, interplanting design, and chilling-hour specifics are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global walnut production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Walnut pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for walnut',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Walnut cultivar and orchard management research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Walnut',
    description:
      'A structured, evidence-based reference on walnut: flowering biology, chilling needs, orchard design, nutrition, harvest, and culinary uses.',
    keywords: ['walnut', 'Juglans regia', 'tree nut', 'walnut orchard'],
  },
  structuredData: { article: true },
};
