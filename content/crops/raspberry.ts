import type { CropContent } from '@/types/content';

export const raspberry: CropContent = {
  id: 'crop-raspberry',
  slug: 'raspberry',
  contentType: 'crop',
  title: 'Raspberry',
  scientificName: 'Rubus idaeus',
  alternativeNames: ['Red raspberry', 'European raspberry'],
  category: 'Fruit crop',
  subcategory: 'Perennial cane fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial (perennial root system; canes are typically biennial)',
  summary:
    'Raspberry is a perennial cane fruit grown for its soft, aggregate fruit, cultivated on a permanent root system whose above-ground canes typically live for two seasons in traditional (floricane) types.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Raspberry is grown as a perennial bramble fruit whose root system persists indefinitely while the above-ground canes have a more limited lifespan. In traditional floricane types, canes grow vegetatively in their first year, overwinter, then flower and fruit in their second year before dying back, so a planting always contains canes of two ages.',
    },
    {
      type: 'paragraph',
      text: "Primocane (fall-fruiting) types, by contrast, fruit on the current season's canes, allowing a single annual pruning approach and a later crop. Cultivar choice between these two fruiting habits shapes pruning, trellising, and harvest timing for the life of the planting.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    {
      label: 'Life cycle',
      value:
        'Perennial crown; canes typically biennial (floricane types) or annual (primocane types)',
    },
    { label: 'Main species', value: 'Rubus idaeus' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, processing, individually quick-frozen (IQF) fruit',
    },
    {
      label: 'Climate',
      value:
        'Cool to cool-temperate; sensitive to spring frost and summer heat stress',
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
          text: 'Raspberry is cultivated as a perennial planting, established once and cropped over multiple years, with management built around the specific fruiting habit — floricane or primocane — of the chosen cultivar.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from open-field plantings to protected culture under tunnels, which extends the marketing season and can reduce fruit damage from rain during harvest.',
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
              term: 'Principal species',
              description: 'Rubus idaeus (red raspberry)',
            },
            {
              term: 'Growth habit',
              description:
                'Perennial shrub with a persistent root system producing new canes each year; floricane types fruit on second-year canes, primocane types on first-year canes',
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
          text: 'Raspberry derives from wild Rubus idaeus populations native to temperate Europe and Asia, long selected and improved for larger, more uniform fruit. It is now grown commercially across temperate regions worldwide, with production concentrated where summers are mild.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Raspberry favors cool to mild temperate climates and is sensitive to high summer temperatures, which can reduce fruit quality and increase stress. Spring frost during flowering is a significant risk to yield.',
        },
        {
          type: 'paragraph',
          text: 'Most floricane cultivars have a winter chilling requirement to flower and fruit normally the following season, similar in principle to other temperate perennial fruit crops.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Raspberry performs best on deep, well-drained loams with good structure and moisture-holding capacity. The crop is notably intolerant of waterlogging, which sharply increases the risk of root rot in the perennial root system.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Raised beds or ridges are commonly used on heavier soils to improve drainage around the root zone. Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'planting-and-establishment',
      heading: 'Planting and establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Raspberry is established from certified virus-tested canes or tissue-cultured plants, generally trained onto a trellis or wire support system to keep canes upright and fruit accessible for harvest.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to fruiting habit (floricane or primocane), chilling requirement, and market window',
            'Trellis and training system suited to the chosen fruiting habit and row spacing',
            'Pruning timed and targeted differently for floricane (removing spent canes after fruiting) versus primocane types',
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
          text: 'Nitrogen supports cane growth but must be balanced to avoid excessive vegetative vigor at the expense of fruiting, while potassium contributes to fruit size and quality across the fruiting season.',
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
          text: 'Raspberry is the more drought-sensitive of the caneberries, and the reason is structural: the root system that produces its suckers sits shallow and wide, so the plant is exploring the layer that dries first. Primocane-fruiting types carry the additional difficulty of needing water in late summer, when supply is usually least reliable.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold (Botrytis) is one of the most significant diseases of raspberry, affecting flowers and ripening fruit especially in humid conditions, and anthracnose can affect canes and fruit. Aphids are a key pest both directly and as virus vectors, and spider mites can build up under hot, dry conditions.',
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
          text: 'Red raspberry differs structurally from blackberry in a way that governs how a planting behaves: it produces new canes from buds on the roots as well as the crown, so it spreads outward from where it was planted and the row has to be managed to a width rather than merely supported. Suckering between rows is routine work, not a sign of anything wrong.',
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
            'Fresh-market punnets, where the hollow receptacle-free fruit is fragile enough to set the whole supply chain',
            'Individually quick-frozen fruit, the outlet that absorbs the machine-harvested crop',
            'Purée and juice concentrate for dairy, bakery and beverage manufacture',
            'Leaf, harvested separately from the fruit crop for herbal infusion',
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
    { type: 'crop', slug: 'blackberry' },
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
    'Cool to cool-temperate cane fruit; sensitive to spring frost during bloom and to summer heat stress.',
  limitations: [
    'Fruiting habit (floricane versus primocane) substantially changes pruning and training practice and should be confirmed for the specific cultivar grown.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global raspberry production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Raspberry disease and pest compendium data',
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
    title: 'Raspberry',
    description:
      'A structured, evidence-based reference on raspberry: classification, cane fruiting habit, climate and soil needs, diseases, pests, and uses.',
    keywords: ['raspberry', 'Rubus idaeus', 'cane fruit', 'bramble fruit'],
  },
  structuredData: { article: true },
};
