import type { CropContent } from '@/types/content';

export const macadamia: CropContent = {
  id: 'crop-macadamia',
  slug: 'macadamia',
  contentType: 'crop',
  title: 'Macadamia',
  scientificName:
    'Macadamia integrifolia and Macadamia tetraphylla, and hybrids between the two, which make up most commercial cultivars',
  alternativeNames: ['Macadamia nut', 'Queensland nut'],
  category: 'Tree nut crop',
  subcategory: 'Evergreen nut tree',
  botanicalFamily: 'Proteaceae',
  lifecycle: 'Perennial',
  summary:
    'Macadamia is an evergreen tree native to Australia, grown for its round, hard-shelled nut valued for its rich kernel and used mainly as a premium snack and confectionery ingredient.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Macadamia is one of the few major commercial tree nuts native to Australia, where wild populations still occur in subtropical rainforest margins. Commercial cultivation began in Hawaii before expanding to other subtropical regions worldwide.',
    },
    {
      type: 'paragraph',
      text: 'The tree bears a hard, round shell enclosing a single kernel prized for its high oil content and distinctive flavor, which commands a premium price relative to most other tree nuts.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Proteaceae' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Macadamia integrifolia, M. tetraphylla' },
    {
      label: 'Primary uses',
      value: 'Snack nut, confectionery, and cooking oil',
    },
    {
      label: 'Climate',
      value: 'Subtropical to tropical, frost-sensitive',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained, slightly acidic loams and sandy loams',
      note: 'Optimal ranges vary by cultivar and region.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Macadamia is grown in dedicated orchards of grafted cultivars selected for kernel quality, nut retention, and disease tolerance. Trees are slow-growing and long-lived, typically taking several years to reach significant bearing.',
        },
        {
          type: 'paragraph',
          text: 'Commercial production is concentrated in a relatively small number of subtropical growing regions worldwide, reflecting the tree’s narrow climatic tolerance compared with many other tree nuts.',
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
            { term: 'Family', description: 'Proteaceae' },
            { term: 'Genus', description: 'Macadamia' },
            {
              term: 'Principal species',
              description:
                'Macadamia integrifolia; Macadamia tetraphylla; commercial hybrids of the two',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree bearing racemes of flowers followed by a hard, globose nut in a fleshy husk',
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
          text: 'Macadamia is native to subtropical rainforest areas of eastern Australia, where it was used by Aboriginal peoples long before European settlement. Commercial breeding and orchard development began in Hawaii in the early twentieth century, which for decades led global production.',
        },
        {
          type: 'paragraph',
          text: 'Australia, South Africa, Kenya, and Hawaii are now among the leading producing regions, with additional plantings in other subtropical countries. Production statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Macadamia requires a subtropical to tropical climate with well-distributed rainfall and moderate temperatures; it has little tolerance for frost, which can damage flowers, young growth, and even mature trees in severe cases.',
        },
        {
          type: 'paragraph',
          text: 'Trees are grown on well-drained, slightly acidic loams and sandy loams. Shallow or poorly drained soils increase the risk of root disease and restrict the tree’s relatively shallow root system.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Frost risk and drainage should be assessed carefully at the site level before establishing an orchard.',
        },
      ],
    },
    {
      id: 'cultivation-and-management',
      heading: 'Cultivation and management',
      body: [
        {
          type: 'list',
          items: [
            'Grafted cultivars selected for kernel recovery, nut retention, and regional disease tolerance',
            'Windbreaks commonly used, since macadamia flowers and immature nuts are vulnerable to wind damage',
            'Canopy management to maintain light penetration and ease mechanical harvesting',
            'Extended orchard establishment period before trees reach significant commercial bearing',
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
          text: 'Nitrogen supports canopy growth, while potassium is closely tied to nut fill and kernel development in macadamia, making its supply a key consideration in orchard nutrition programs.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf-tissue testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Consistent moisture during flowering and nut development supports yield and kernel quality, and irrigation is widely used in drier production regions or during periods of low rainfall.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling is based on local evapotranspiration estimates and soil moisture monitoring, since both prolonged drought and waterlogging can harm tree health.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Phytophthora root rot is one of the most significant diseases of macadamia, particularly on poorly drained sites, and husk and stem anthracnose can affect nuts and young growth under humid conditions. Thrips can scar developing nut husks, and weevils are documented pests affecting nuts in some producing regions.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Root rot (Phytophthora)',
              'Disease',
              'Most significant on poorly drained sites',
            ],
            [
              'Anthracnose',
              'Disease',
              'Affects husks and young growth in humid conditions',
            ],
            ['Thrips', 'Pest', 'Scarring damage to developing nut husks'],
            ['Weevils', 'Pest', 'Feed on nuts in some producing regions'],
          ],
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Mature nuts drop naturally from the tree and are collected from the orchard floor, typically by mechanical sweepers in commercial operations, then dehusked and dried before cracking and grading.',
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
            'Whole and processed kernels used as a premium snack nut, raw or roasted',
            'Confectionery and baking ingredient',
            'Macadamia oil pressed from kernels for culinary use',
            'Shells used in some regions as fuel or mulch',
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
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cashew' },
    { type: 'crop', slug: 'pistachio' },
    { type: 'crop', slug: 'walnut' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview; major production in Australia, South Africa, Kenya, and Hawaii, with additional plantings in other subtropical regions.',
  climateContext:
    'Subtropical to tropical evergreen tree crop with well-distributed rainfall needs and little tolerance for frost.',
  limitations: [
    'Kernel recovery and quality vary by cultivar, climate, and post-harvest handling, which are not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global macadamia production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Macadamia disease and pest compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Macadamia',
    description:
      'A structured, evidence-based reference on macadamia: classification, climate and soil needs, orchard care, diseases, pests, harvest, and uses.',
    keywords: [
      'macadamia',
      'Macadamia integrifolia',
      'tree nut crop',
      'macadamia orchard',
    ],
  },
  structuredData: { article: true },
};
