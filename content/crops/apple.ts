import type { CropContent } from '@/types/content';

export const apple: CropContent = {
  id: 'crop-apple',
  slug: 'apple',
  contentType: 'crop',
  title: 'Apple',
  scientificName: 'Malus domestica (syn. Malus pumila)',
  alternativeNames: ['Domestic apple', 'Orchard apple'],
  category: 'Tree fruit crop',
  subcategory: 'Temperate pome fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Apple is a temperate deciduous tree fruit grown worldwide for fresh consumption, juice, and processed products. Orchards are established from grafted trees and cropped for many years before replanting.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Apple is one of the most widely grown temperate tree fruits, cultivated across cool and cold-temperate regions for fresh eating, juice, cider, and processed foods. Commercial orchards are built from grafted trees rather than seedlings, since apple does not reliably come true from seed and grafting allows growers to combine a chosen fruiting variety with a rootstock selected for size control, anchorage, and disease tolerance.',
    },
    {
      type: 'paragraph',
      text: 'Most apple cultivars require cross-pollination from a different, compatible variety to set a commercial crop, so orchard design typically includes pollinizer trees and relies on insect pollinators. Once established, an orchard can remain productive for decades, making rootstock choice, spacing, and training system long-term decisions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Malus domestica' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, juice and cider, processed foods',
    },
    {
      label: 'Climate',
      value:
        'Temperate; requires a winter chilling period for normal flowering',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams; poor tolerance of waterlogging',
      note: 'Rootstock choice strongly affects vigor, soil, and site tolerance.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Apple trees are grown as grafted, long-lived perennials rather than as an annually replanted crop. Global production spans large commercial orchards using dwarfing rootstocks and high-density plantings, as well as traditional standard-tree orchards still found in many regions.',
        },
        {
          type: 'paragraph',
          text: 'Because apple is propagated clonally and cropped over many seasons, orchard-level decisions such as rootstock, cultivar, and training system are made once at establishment and shape management for the life of the planting. Regional agronomic detail is therefore highly site- and market-specific.',
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
            { term: 'Genus', description: 'Malus' },
            {
              term: 'Principal species',
              description: 'Malus domestica (cultivated apple)',
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
          text: 'The cultivated apple traces much of its ancestry to wild Malus populations native to Central Asia, with subsequent hybridization and selection as the crop moved along historical trade routes into Europe and, eventually, worldwide. It is now grown commercially across temperate regions on every populated continent.',
        },
        {
          type: 'paragraph',
          text: 'Production statistics, leading cultivars, and trade patterns shift over time and by region; current figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Apple trees require a period of winter chilling to break dormancy and flower normally the following spring; the chilling requirement varies by cultivar and is a key factor in matching varieties to a given climate.',
        },
        {
          type: 'paragraph',
          text: "Spring frost during bloom is one of the most significant climate risks for apple, since flowers and young fruitlets are frost-sensitive and damage can substantially reduce or eliminate a season's crop.",
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Apple performs best on deep, well-drained soils with good structure and moisture-holding capacity. Loams and sandy loams are generally favored, and the crop is intolerant of prolonged waterlogging, which restricts rooting and increases the risk of root diseases.',
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
          text: 'Establishing an apple orchard begins with choosing a rootstock and cultivar combination suited to the site, market, and desired tree size, since rootstock largely determines vigor, precocity, and the training system used.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for size control, anchorage, and site adaptation',
            'Cultivar and pollinizer selection for cross-pollination and fruit quality',
            'Training and pruning system matched to planting density (e.g. tall spindle, central leader)',
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
          text: 'Nitrogen influences vegetative vigor and must be balanced against excessive shoot growth that can shade fruit and delay flowering. Potassium supports fruit size and quality, while calcium status is closely linked to fruit firmness and storage disorders such as bitter pit.',
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
          text: 'Apple is grown both rain-fed and under irrigation, with water demand highest during cell division and fruit enlargement. Drip irrigation is widely used in modern high-density orchards to apply water precisely to the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during critical fruit-growth stages while preventing waterlogging, which apple tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Apple scab is one of the most economically important diseases of apple in humid growing regions, causing lesions on leaves and fruit. Powdery mildew is also widespread, affecting shoots, leaves, and fruit finish. Insect pests include codling moth, whose larvae bore into fruit, and aphids, which can distort growth and transmit viruses.',
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
          text: 'Apple is picked by hand at a maturity stage assessed through indicators such as background color, firmness, and starch conversion, since fruit intended for long-term storage is typically harvested at a different maturity than fruit for immediate sale. Controlled-atmosphere storage is widely used to extend the marketing season.',
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
            'Fresh-market eating apples',
            'Juice, cider, and other beverages',
            'Processing into sauce, pie filling, and dried products',
            'Cull fruit and pomace used in animal feed or as a soil amendment',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'apple-scab' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'codling-moth' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'orange' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Rootstock, cultivar, and chilling requirements are region- and site-specific.',
  climateContext:
    'Temperate deciduous tree fruit requiring winter chill; vulnerable to spring frost during bloom.',
  limitations: [
    'Rootstock, spacing, and chilling-hour specifics are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global apple production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Apple scab and codling moth compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for apple',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Apple cultivar and orchard management research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Apple',
    description:
      'A structured, evidence-based reference on apple: classification, climate and soil needs, orchard establishment, nutrition, diseases, pests, and uses.',
    keywords: ['apple', 'Malus domestica', 'tree fruit', 'apple orchard'],
  },
  structuredData: { article: true },
};
