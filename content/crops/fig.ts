import type { CropContent } from '@/types/content';

export const fig: CropContent = {
  id: 'crop-fig',
  slug: 'fig',
  contentType: 'crop',
  title: 'Fig',
  scientificName: 'Ficus carica',
  alternativeNames: ['Common fig'],
  category: 'Tree fruit crop',
  subcategory: 'Subtropical deciduous/evergreen tree',
  botanicalFamily: 'Moraceae (mulberry family)',
  lifecycle: 'Perennial',
  summary:
    'Fig is a subtropical deciduous tree fruit grown for fresh and dried fruit, notable for its unusual enclosed inflorescence and for tolerating heat and drought better than many other tree fruits.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fig is a long-cultivated tree fruit adapted to warm, dry summers and mild winters, though it is grown in a range of subtropical and warm-temperate climates worldwide. Commercial plantings are established almost exclusively from cuttings rather than seed, since fig roots readily from hardwood cuttings and this preserves the characteristics of a chosen cultivar.',
    },
    {
      type: 'paragraph',
      text: 'The crop is valued for both fresh consumption and drying, and its fruiting structure is botanically distinctive: what is eaten as the "fruit" is technically a syconium, a fleshy, inverted receptacle enclosing many tiny flowers, making the true fruits (small drupelets) hidden inside rather than visible on the surface.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Moraceae (mulberry family)' },
    { label: 'Life cycle', value: 'Perennial deciduous or evergreen tree' },
    { label: 'Main species', value: 'Ficus carica' },
    { label: 'Primary uses', value: 'Fresh fruit, dried fruit, preserves' },
    {
      label: 'Climate',
      value:
        'Subtropical to warm-temperate; tolerates heat and drought once established',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams and sandy soils; poor tolerance of waterlogging',
      note: 'Fig is comparatively adaptable to marginal soils provided drainage is good.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Fig is grown as a long-lived perennial tree or large shrub, propagated clonally by cuttings rather than replanted annually. Production ranges from smallholder and dooryard plantings to commercial orchards managed for fresh-market or drying fruit.',
        },
        {
          type: 'paragraph',
          text: 'Because fig is propagated vegetatively and can crop for many years from a single planting, cultivar choice, training, and site selection made at establishment shape management for the life of the planting, similar to other perennial tree fruit crops.',
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
            { term: 'Family', description: 'Moraceae (mulberry family)' },
            { term: 'Genus', description: 'Ficus' },
            {
              term: 'Principal species',
              description: 'Ficus carica (common fig)',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous or semi-evergreen tree or large shrub, commercially propagated from hardwood cuttings',
            },
            {
              term: 'Fruiting structure',
              description:
                'The edible "fruit" is a syconium — an inverted, fleshy receptacle enclosing numerous tiny flowers, with the true fruits forming as small drupelets inside it',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Fig reproduction involves a genuinely unusual pollination system in some cultivar groups: Smyrna-type figs require pollination by a specific fig wasp (a process called caprification) to develop normally, while common-type fig cultivars set fruit without pollination. The pollination requirement therefore depends on the cultivar type grown, and growers select cultivars appropriate to whether a pollinator wasp and compatible caprifig source are available in their region.',
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Fig is native to the Mediterranean basin and western Asia and has been cultivated since antiquity, spreading with human settlement across the Mediterranean and later to other warm, dry-summer regions of the world with suitable climates.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown commercially in Mediterranean-climate and other warm subtropical regions on multiple continents. Production and trade figures shift over time and should be obtained from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Fig is well adapted to hot, dry summer conditions and tolerates drought and heat stress better than many other tree fruit crops once trees are established. This makes it a common choice in Mediterranean-type and semi-arid climates.',
        },
        {
          type: 'paragraph',
          text: 'Fig is intolerant of waterlogged soils and prolonged excess moisture, which increases the risk of root rot, so climate suitability is closely tied to soil drainage as much as rainfall or temperature alone.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Fig grows well on a range of soils, including loams and sandy soils, and is often noted for tolerating relatively poor or shallow soils better than many other fruit trees, provided drainage is adequate. Good drainage is the single most important soil requirement, since the crop is intolerant of waterlogging and prone to root rot in saturated conditions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site selection should prioritize drainage over soil fertility. Local soil survey information and testing for drainage limitations are recommended before establishment.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Fig orchards are established from rooted hardwood cuttings of the desired cultivar rather than from seed, since propagation by cuttings preserves fruit type, pollination behavior, and other cultivar traits.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to common-type or Smyrna-type fruiting habit and local pollinator availability',
            'Propagation from hardwood cuttings to maintain true-to-type trees',
            'Training and pruning to manage tree size and encourage fruiting wood',
            "Site selection emphasizing drainage given the crop's sensitivity to waterlogging",
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
          text: 'Potassium supports fruit development and quality in fig, as in many tree fruit crops, while boron plays a role in fruit set and development. Excessive nitrogen can favor vegetative growth at the expense of fruiting and fruit quality.',
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
          text: 'Fig tolerates drought well once established, and deficit irrigation strategies are sometimes used deliberately to manage vigor and fruit quality. Drip irrigation is commonly used in commercial plantings to apply water efficiently to the root zone while avoiding prolonged soil saturation.',
        },
        {
          type: 'paragraph',
          text: 'Irregular water supply, such as a dry period followed by heavy irrigation or rain, is a recognized cause of fruit splitting and souring in fig. Consistent moisture management during fruit development helps reduce this quality risk, while still avoiding the waterlogging the crop tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: "Anthracnose can affect fig leaves and fruit, particularly under humid conditions, while root rot is a significant risk in poorly drained or overwatered soils given the crop's general intolerance of waterlogging. Insect pests include scale insects and mealybugs, which can affect vigor and fruit quality, and fruit flies, which can infest ripening fruit.",
        },
        {
          type: 'paragraph',
          text: 'Management combines site drainage, sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Fig fruit does not continue to ripen appreciably after picking, so fruit intended for fresh sale is typically harvested at or near full ripeness, identified by softening, color change, and sometimes a drooping stalk. Fruit for drying may be allowed to partially dry on the tree before harvest. Because ripe fruit is soft and perishable, harvest is generally done by hand and often requires multiple passes through the season.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Main fig product forms',
          columns: ['Product form', 'Typical use'],
          rows: [
            [
              'Fresh fig',
              'Fresh eating; short shelf life due to fruit softness',
            ],
            [
              'Dried fig',
              'Long-storage product for direct consumption or processing',
            ],
            [
              'Processed fig',
              'Preserves, pastes, and ingredients in baked goods',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating figs',
            'Dried figs for extended storage and export',
            'Preserves, jams, and confectionery ingredients',
            'Processed pastes and fillings for baked goods',
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
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pomegranate' },
    { type: 'crop', slug: 'date-palm' },
    { type: 'crop', slug: 'olive' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar choice, pollination requirements, and site suitability are region-specific.',
  climateContext:
    'Subtropical to warm-temperate tree fruit, notably tolerant of heat and drought once established; intolerant of waterlogging.',
  limitations: [
    'Cultivar pollination requirements (common-type versus Smyrna-type) and regional pollinator availability are site-specific and not covered by universal guidance here.',
    'Production statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global fig production and cultivation context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Fig pest and disease compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for fig',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fig',
    description:
      'An evidence-based reference on fig: classification, syconium fruiting structure, climate and soil needs, establishment, diseases, pests, and uses.',
    keywords: ['fig', 'Ficus carica', 'tree fruit', 'fig cultivation'],
  },
  structuredData: { article: true },
};
