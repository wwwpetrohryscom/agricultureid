import type { CropContent } from '@/types/content';

export const lemon: CropContent = {
  id: 'crop-lemon',
  slug: 'lemon',
  contentType: 'crop',
  title: 'Lemon',
  scientificName: 'Citrus limon',
  alternativeNames: ['Lemon tree'],
  category: 'Tree fruit crop',
  subcategory: 'Subtropical/tropical evergreen citrus',
  botanicalFamily: 'Rutaceae (citrus family)',
  lifecycle: 'Perennial',
  summary:
    'Lemon is an evergreen citrus tree grown on grafted rootstocks for fresh fruit, juice, and zest across subtropical and mild-winter regions. It is notably frost-sensitive relative to many other citrus types and, under favorable conditions, can flower and fruit somewhat continuously through the year.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lemon is an evergreen tree in the citrus group, grown across subtropical and mild-winter climates for fresh fruit, juice, and zest and oil products. Commercial trees are grafted onto a rootstock chosen for the site, since rootstock strongly influences vigor, size, disease tolerance, and soil adaptation in citrus generally.',
    },
    {
      type: 'paragraph',
      text: 'A distinctive feature of lemon, compared with many other citrus types that flower in a single strong annual flush, is its tendency, in many growing regions and under favorable conditions, to flower and set fruit somewhat continuously or in repeated flushes through the year, allowing an extended harvest period. Lemon is also notably frost-sensitive, among the more cold-sensitive commercial citrus types.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rutaceae (citrus family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Citrus limon' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, juice, and zest or oil products',
    },
    {
      label: 'Climate',
      value:
        'Subtropical to mild-winter; notably frost-sensitive among commercial citrus types',
    },
    {
      label: 'Flowering habit',
      value: 'Can flower and fruit somewhat continuously in many regions',
      note: 'This differs from citrus types with a single strong annual bloom flush.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Lemon trees are grown as grafted, long-lived evergreen perennials in subtropical and mild-winter climates worldwide, including parts of the Mediterranean basin, the Americas, and other citrus-growing regions with suitable winter temperatures.',
        },
        {
          type: 'paragraph',
          text: 'Because lemon can flower and fruit repeatedly through much of the year in favorable climates, orchard management and harvest scheduling often differ from citrus types with a single concentrated bloom and harvest season, though practices vary considerably by region and cultivar.',
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
            { term: 'Family', description: 'Rutaceae (citrus family)' },
            { term: 'Genus', description: 'Citrus' },
            {
              term: 'Principal species',
              description: 'Citrus limon (cultivated lemon)',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree, commercially propagated by grafting a fruiting cultivar onto a selected citrus rootstock',
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
          text: 'Lemon is believed to have originated in Asia, arising through hybridization among ancestral citrus species, and spread historically along trade routes into the Mediterranean region and, later, to the Americas and other subtropical growing areas worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Current production volumes, leading cultivars, and trade patterns vary by region and change over time; figures should be obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lemon is adapted to subtropical and mild-winter climates and, among commercial citrus types, is notably more sensitive to frost and cold than many oranges and mandarins. Cold events can damage or kill foliage, twigs, and fruit, and site selection to avoid frost-prone locations is an important part of lemon production in marginal climates.',
        },
        {
          type: 'paragraph',
          text: 'In many growing regions and under favorable conditions, lemon can flower and set fruit in more than one flush per year rather than in a single strict annual cycle, which is a distinctive trait relative to many other citrus crops.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lemon performs best on deep, well-drained soils with good structure; loams and sandy loams are generally favored. Like citrus generally, lemon is intolerant of prolonged waterlogging, which restricts rooting and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock choice interacts strongly with soil conditions, including drainage, salinity, and disease pressure. Site assessment should draw on local soil survey information where available.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a lemon orchard begins with selecting a rootstock and cultivar combination suited to the site, since citrus rootstocks vary considerably in vigor, cold tolerance, disease resistance, and adaptation to soil salinity and drainage. Rootstock selection is a central, long-term decision in citrus orchard design.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for vigor, cold tolerance, disease resistance, and soil adaptation',
            'Cultivar selection matched to market, fruit characteristics, and local climate',
            'Site selection favoring protection from frost in marginal climates',
            'Training and canopy management appropriate to the planting system',
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
          text: 'Nitrogen strongly influences vegetative growth, flowering, and fruit yield in citrus. Zinc and boron are micronutrients of particular importance in citrus nutrition; zinc deficiency is commonly associated with characteristic leaf mottling and reduced growth, while boron supports flowering and fruit set, with deficiency or excess both capable of causing quality problems.',
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
          text: 'Lemon is grown both rain-fed in humid subtropical regions and under irrigation in drier citrus-growing areas. Drip irrigation and micro-sprinkler irrigation are both widely used in citrus, with micro-sprinklers also sometimes used for frost protection in vulnerable sites in addition to routine water delivery.',
        },
        {
          type: 'paragraph',
          text: 'Because lemon can flower and fruit over an extended period in many regions, water demand may be less sharply concentrated in a single season than in citrus types with a single bloom flush, though this varies by climate and cultivar.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Citrus canker, caused by the bacterium Xanthomonas citri, is a serious, quarantine-significant disease affecting citrus generally, including lemon, causing raised lesions on leaves, stems, and fruit and prompting strict regulatory controls in many regions to limit its spread. Anthracnose can also affect lemon, causing lesions on leaves, twigs, and fruit.',
        },
        {
          type: 'paragraph',
          text: 'Scale insects are common citrus pests that feed on bark, leaves, and fruit, sometimes promoting sooty mold through honeydew production. Fruit flies can damage fruit through larval feeding. Citrus psyllids, a group that includes vectors of huanglongbing (citrus greening) in some regions, are of major biosecurity concern to citrus industries worldwide; their presence and disease-vector status vary by region and should be assessed against local plant health authority guidance rather than assumed.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant rootstocks and cultivars where available, sanitation, monitoring, quarantine compliance, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Lemon is generally hand-harvested, with maturity assessed through indicators such as fruit color, size, and juice content, since lemon does not continue to ripen significantly after picking. Because flowering and fruit set can occur over an extended period in many regions, harvest may take place across multiple passes through the season rather than in a single concentrated window.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Selected citrus micronutrient needs relevant to lemon',
          columns: [
            'Nutrient',
            'Role in citrus nutrition',
            'Common deficiency sign',
          ],
          rows: [
            [
              'Nitrogen',
              'Supports vegetative growth, flowering, and fruit yield',
              'Pale foliage and reduced vigor',
            ],
            [
              'Zinc',
              'Supports normal leaf development and growth',
              'Leaf mottling and small, narrow leaves',
            ],
            [
              'Boron',
              'Supports flowering and fruit set',
              'Poor fruit set and fruit quality problems',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market fruit',
            'Juice for beverages, culinary, and food-processing uses',
            'Zest and essential oil extracted from the peel',
            'Pectin and other by-products from processing residues',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'citrus-canker' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'psyllids' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lime' },
    { type: 'crop', slug: 'grapefruit' },
    { type: 'crop', slug: 'orange' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview of subtropical and mild-winter citrus regions. Rootstock choice, frost risk, and flowering patterns vary by site and cultivar.',
  climateContext:
    'Subtropical to mild-winter evergreen citrus; notably frost-sensitive, with flowering that can occur in repeated flushes in many regions.',
  limitations: [
    'Rootstock recommendations, cold-hardiness thresholds, and flowering-flush timing are region- and cultivar-specific and not stated here as universal values.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global lemon and citrus production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Citrus canker and citrus pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for citrus',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Lemon',
    description:
      'A structured, evidence-based reference on lemon: citrus classification, frost sensitivity, rootstocks, micronutrients, canker risk, and processing uses.',
    keywords: ['lemon', 'Citrus limon', 'citrus', 'citrus canker'],
  },
  structuredData: { article: true },
};
