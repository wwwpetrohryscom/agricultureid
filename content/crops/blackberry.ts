import type { CropContent } from '@/types/content';

export const blackberry: CropContent = {
  id: 'crop-blackberry',
  slug: 'blackberry',
  contentType: 'crop',
  title: 'Blackberry',
  scientificName:
    'Rubus fruticosus aggregate (cultivated blackberries are largely complex Rubus hybrids)',
  alternativeNames: ['Bramble', 'Thornless blackberry'],
  category: 'Fruit crop',
  subcategory: 'Perennial cane fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial (perennial root system; canes are typically biennial)',
  summary:
    'Blackberry is a perennial cane fruit related to raspberry, grown for its dark aggregate fruit on a permanent root system, with modern thornless and primocane-fruiting cultivars widely used in commercial production.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Blackberry is grown as a perennial bramble fruit, closely related to raspberry within the genus Rubus. Cultivated blackberries are typically complex hybrids selected for traits such as thornlessness, upright or semi-erect growth habit, and improved fruit size and firmness, rather than a single wild species grown unchanged.',
    },
    {
      type: 'paragraph',
      text: "As in raspberry, cultivars differ in fruiting habit: traditional floricane types fruit on second-year canes, while primocane types fruit on the current season's canes, extending the harvest season and simplifying pruning in many production systems.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    {
      label: 'Life cycle',
      value:
        'Perennial crown; canes typically biennial (floricane types) or annual (primocane types)',
    },
    {
      label: 'Main species',
      value: 'Rubus fruticosus aggregate and modern hybrid cultivars',
    },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, processing, individually quick-frozen (IQF) fruit',
    },
    {
      label: 'Climate',
      value:
        'Temperate to warm-temperate; generally more heat-tolerant than raspberry',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams; poor tolerance of waterlogging',
      note: 'Root rot risk rises sharply in poorly drained soils.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Blackberry is cultivated as a perennial planting managed around the trailing, semi-erect, or erect growth habit and the floricane or primocane fruiting type of the chosen cultivar, with modern breeding having substantially reduced or eliminated thorns in many commercial cultivars.',
        },
        {
          type: 'paragraph',
          text: 'Production spans open-field plantings and, increasingly, protected culture under tunnels, which extends the season and can improve fruit quality by reducing rain damage during harvest.',
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
            { term: 'Genus', description: 'Rubus' },
            {
              term: 'Principal taxa',
              description:
                'Rubus fruticosus aggregate (European blackberry) and numerous complex interspecific hybrid cultivars',
            },
            {
              term: 'Growth habit',
              description:
                'Perennial shrub with trailing, semi-erect, or erect canes; floricane types fruit on second-year canes, primocane types on first-year canes',
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
          text: 'Wild blackberries occur natively across temperate regions of Europe, Asia, and the Americas, and modern cultivated types trace to breeding programs, particularly in North America, that combined multiple wild Rubus species to develop thornless, higher-yielding, and firmer-fruited cultivars.',
        },
        {
          type: 'paragraph',
          text: 'Commercial production is now established across temperate and warm-temperate regions worldwide; production and trade statistics are compiled by national and international bodies and change over time.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Blackberry generally tolerates warmer summer conditions better than raspberry, allowing production in a somewhat wider range of temperate and warm-temperate climates, though cultivars still vary in heat and cold tolerance.',
        },
        {
          type: 'paragraph',
          text: 'Spring frost during flowering remains a risk to yield, and many floricane cultivars have a winter chilling requirement for normal flowering the following season.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Blackberry performs best on deep, well-drained loams with good structure and moisture-holding capacity, and — as with raspberry — is intolerant of prolonged waterlogging, which increases the risk of root rot in the perennial root system.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Raised beds or ridges are commonly used on heavier soils to improve drainage. Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'planting-and-establishment',
      heading: 'Planting and establishment',
      body: [
        {
          type: 'paragraph',
          text: "Blackberry is established from certified nursery plants, generally trained onto a trellis or wire support system suited to the cultivar's growth habit — trailing types require more extensive training than erect types.",
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to growth habit (trailing, semi-erect, erect), thornlessness, fruiting type, and market window',
            'Trellis and training system suited to the chosen growth habit',
            'Pruning targeted differently for floricane versus primocane types',
            'Site drainage improvement where native soils are heavier or prone to waterlogging',
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
          text: 'Nitrogen supports cane growth but is managed to avoid excessive vegetative vigor at the expense of fruiting, while potassium contributes to fruit size and quality across the harvest season.',
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
          text: 'Blackberry has a relatively shallow, fibrous root system with limited drought tolerance, and water demand is highest during fruit development. Drip irrigation is widely used to supply consistent moisture while avoiding the waterlogging the crop tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold (Botrytis) can affect flowers and ripening fruit, particularly in humid conditions, and anthracnose can affect canes and fruit. Aphids and spider mites are among the key insect and mite pests, the former also of concern as virus vectors.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, canopy management for airflow, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Blackberry is harvested by hand for fresh-market fruit, picked frequently at full color and flavor development since ripening does not continue meaningfully after picking. Mechanical harvesting is used mainly for processing fruit destined for freezing or manufacturing.',
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
            'Fresh-market eating berries',
            'Individually quick-frozen (IQF) fruit for food manufacturing',
            'Processed products including jam, juice, and bakery fillings',
            'Flavoring and extract uses in food and beverage products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'raspberry' },
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'cranberry' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar, trellising, and chilling-requirement specifics are region- and site-specific.',
  climateContext:
    'Temperate to warm-temperate cane fruit, generally more heat-tolerant than raspberry; still vulnerable to spring frost during bloom.',
  limitations: [
    'Cultivated blackberries are largely complex interspecific hybrids, so growth habit and fruiting type vary substantially by cultivar and should be confirmed before planting.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global blackberry production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Blackberry disease and pest compendium data',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Cane fruit cultivar and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Blackberry',
    description:
      'A structured, evidence-based reference on blackberry: hybrid classification, growth habits, climate and soil needs, diseases, pests, and uses.',
    keywords: ['blackberry', 'Rubus fruticosus', 'cane fruit', 'bramble fruit'],
  },
  structuredData: { article: true },
};
