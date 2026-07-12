import type { CropContent } from '@/types/content';

export const pomegranate: CropContent = {
  id: 'crop-pomegranate',
  slug: 'pomegranate',
  contentType: 'crop',
  title: 'Pomegranate',
  scientificName: 'Punica granatum',
  alternativeNames: ['Pomegranate tree'],
  category: 'Tree fruit crop',
  subcategory: 'Deciduous/semi-deciduous shrub or small tree',
  botanicalFamily: 'Lythraceae',
  lifecycle: 'Perennial',
  summary:
    'Pomegranate is a deciduous or semi-deciduous fruiting shrub or small tree adapted to semi-arid and Mediterranean-type climates, grown for its juice-filled seed arils used fresh and in processed products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pomegranate is a long-lived perennial fruiting shrub or small tree cultivated across semi-arid, Mediterranean, and subtropical regions. Commercial plantings are typically established from cuttings of selected cultivars, since this preserves fruit characteristics such as aril color, seed hardness, and juice content.',
    },
    {
      type: 'paragraph',
      text: 'The crop is notable for its drought and heat tolerance once established, which has made it well suited to marginal and water-limited growing environments, alongside its long history of cultivation in the Middle East, the Mediterranean basin, and South Asia.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lythraceae' },
    {
      label: 'Life cycle',
      value: 'Perennial deciduous or semi-deciduous shrub/tree',
    },
    { label: 'Main species', value: 'Punica granatum' },
    { label: 'Primary uses', value: 'Fresh arils, juice, processed products' },
    {
      label: 'Climate',
      value:
        'Semi-arid and Mediterranean-type; notably drought- and heat-tolerant once established',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams and sandy soils; adaptable to a range of soil conditions',
      note: 'Consistent water supply during fruit development supports juice content and reduces cracking.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pomegranate is grown as a long-lived perennial planting, propagated clonally from cuttings and cropped for many years. Production ranges from smallholder plantings to commercial orchards managed for fresh-market fruit or juice processing.',
        },
        {
          type: 'paragraph',
          text: 'Because pomegranate is propagated vegetatively and crops over many seasons, cultivar selection and site choice made at establishment strongly influence yield, fruit quality, and management for the life of the planting.',
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
            { term: 'Family', description: 'Lythraceae' },
            { term: 'Genus', description: 'Punica' },
            {
              term: 'Principal species',
              description: 'Punica granatum (pomegranate)',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous or semi-deciduous shrub or small tree, commercially propagated from cuttings',
            },
            {
              term: 'Fruit type',
              description:
                'A large berry (balausta) with a tough rind enclosing numerous juice-filled seed arils',
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
          text: 'Pomegranate is native to a region spanning Iran and the surrounding areas of Central and South Asia, and it has been cultivated since antiquity across the Mediterranean basin, the Middle East, and South Asia.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown commercially across many semi-arid and Mediterranean-type climate regions worldwide. Production, trade, and cultivar-popularity figures shift over time and are best obtained from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pomegranate is notably drought- and heat-tolerant once established, and it is well adapted to semi-arid and Mediterranean-type climates with hot, dry summers. This tolerance has made it a common choice for water-limited growing regions where many other tree fruit crops struggle.',
        },
        {
          type: 'paragraph',
          text: "Despite this general hardiness, fruit quality — including juice content and resistance to cracking — benefits from a consistent water supply during fruit development, so climate suitability should account for both the crop's tolerance of dry conditions and the quality trade-offs of water stress at critical stages.",
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pomegranate is adaptable to a range of soils, including loams and sandy soils, and generally tolerates a broader range of soil conditions than many other tree fruit crops. Good drainage remains important, as the crop performs poorly on persistently waterlogged sites.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'While pomegranate is comparatively tolerant of marginal soils, site assessment should still draw on local soil survey information, particularly regarding drainage and salinity where relevant.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Pomegranate plantings are typically established from hardwood cuttings of a selected cultivar, which root readily and preserve fruit characteristics such as aril color, seed texture, and juice content.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection for fruit quality traits and adaptation to local climate',
            'Propagation from cuttings to maintain true-to-type plantings',
            'Training as a single-trunk tree or multi-stemmed shrub depending on management goals',
            'Pruning to maintain an open canopy and manage fruiting wood over the life of the planting',
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
          text: "Potassium supports fruit development and juice quality in pomegranate, as in many fruiting shrubs and trees, while boron plays a role in flowering and fruit set. Nutrient management should also account for the crop's tolerance of a range of soil fertility levels.",
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
          text: "Pomegranate is grown both rain-fed in suitable semi-arid climates and under irrigation, with drip irrigation widely used in commercial plantings to apply water efficiently while managing vigor. Deficit irrigation strategies are sometimes used deliberately, reflecting the crop's drought tolerance.",
        },
        {
          type: 'paragraph',
          text: 'Irregular water supply, particularly a dry period followed by heavy irrigation or rain near harvest, is a recognized cause of fruit cracking in pomegranate, which reduces marketable yield. Maintaining more consistent water availability during fruit development can help reduce this quality risk, alongside supporting juice content.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Bacterial blight, a leaf-and-fruit spot caused by Xanthomonas bacteria, is a genuinely significant disease of pomegranate in several major growing regions, causing lesions on leaves, fruit, and sometimes stems. Gray mold can affect fruit, particularly under humid conditions or in storage. Insect pests include aphids, which can distort growth, fruit flies, which infest ripening fruit, and mealybugs, which affect vigor and fruit quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels. Fruit cracking, a common physiological and quality issue linked to irrigation irregularity rather than disease, is managed primarily through consistent water management.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Pomegranate fruit does not continue to ripen significantly after picking, so harvest timing is based on maturity indicators such as rind color and sound (a metallic ring when tapped), since the fruit must be picked at or near full ripeness for good quality. Harvest is generally done by hand, with careful handling to avoid bruising the rind.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Main pomegranate product forms',
          columns: ['Product form', 'Typical use'],
          rows: [
            ['Fresh arils', 'Fresh eating and garnish; whole fruit for retail'],
            ['Juice', 'Beverages and juice blends'],
            [
              'Processed products',
              'Concentrates, syrups (e.g. grenadine-style), and extracts',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market whole fruit and packaged arils',
            'Juice and juice blends',
            'Concentrates, syrups, and extracts used in food and beverage products',
            'Ornamental and dooryard planting in suitable climates',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'fig' },
    { type: 'crop', slug: 'date-palm' },
    { type: 'crop', slug: 'grape' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar choice, irrigation strategy, and site suitability are region-specific.',
  climateContext:
    'Semi-arid and Mediterranean-type tree fruit crop, notably tolerant of drought and heat once established.',
  limitations: [
    'Irrigation scheduling and cultivar recommendations for cracking resistance are site- and market-specific and not covered by universal values here.',
    'Production statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global pomegranate production and cultivation context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Pomegranate pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for pomegranate',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pomegranate',
    description:
      'A reference on pomegranate: classification, drought and heat tolerance, soil needs, orchard establishment, cracking risk, diseases, and uses.',
    keywords: [
      'pomegranate',
      'Punica granatum',
      'tree fruit',
      'pomegranate cultivation',
    ],
  },
  structuredData: { article: true },
};
