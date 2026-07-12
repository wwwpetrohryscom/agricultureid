import type { CropContent } from '@/types/content';

export const guava: CropContent = {
  id: 'crop-guava',
  slug: 'guava',
  contentType: 'crop',
  title: 'Guava',
  scientificName: 'Psidium guajava',
  alternativeNames: ['Common guava'],
  category: 'Tree fruit crop',
  subcategory: 'Tropical/subtropical evergreen tree',
  botanicalFamily: 'Myrtaceae (myrtle family)',
  lifecycle: 'Perennial',
  summary:
    'Guava is a hardy, adaptable evergreen tree grown across tropical and subtropical regions for fresh fruit and processed products such as juice, nectar, and paste.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Guava (Psidium guajava) is an evergreen tree grown throughout the tropics and warmer subtropics for its fruit, which is consumed fresh and processed into juice, nectar, paste, and preserves. It is a long-lived perennial that, once established, can crop for many years.',
    },
    {
      type: 'paragraph',
      text: 'Compared with many other tropical fruit trees, guava is notably hardy and adaptable, tolerating a fairly wide range of soils and moisture conditions once established. This adaptability has contributed to its wide distribution as both a commercial crop and a dooryard fruit tree.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Myrtaceae (myrtle family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    { label: 'Main species', value: 'Psidium guajava' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, juice and nectar, processed paste and preserves',
    },
    {
      label: 'Climate',
      value: 'Tropical and subtropical; adaptable across a range of conditions',
    },
    {
      label: 'Soil preference',
      value: 'Loam and sandy soils; tolerant of a fairly wide soil range',
      note: 'Propagation method (grafting, budding, or air-layering) affects trueness to cultivar type.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Guava is grown as a long-lived evergreen tree across tropical and subtropical growing regions, ranging from small dooryard plantings to commercial orchards managed for fresh-market and processing supply.',
        },
        {
          type: 'paragraph',
          text: 'The crop is valued in part for its hardiness: guava trees generally tolerate a wider range of soil types and moisture regimes than many other tropical fruit trees, which supports its adaptability to varied growing environments.',
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
            { term: 'Family', description: 'Myrtaceae (myrtle family)' },
            { term: 'Genus', description: 'Psidium' },
            {
              term: 'Principal species',
              description: 'Psidium guajava (common guava)',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree or large shrub, propagated clonally for cultivar trueness or, less commonly, from seed',
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
          text: 'Guava is native to the tropical Americas and has been widely distributed to tropical and subtropical regions worldwide, where it is now grown both as a commercial fruit crop and as a naturalized or dooryard tree in many areas.',
        },
        {
          type: 'paragraph',
          text: 'Current production areas, leading cultivars, and trade patterns change over time; up-to-date figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Guava is adapted to tropical and subtropical climates and grows best with warm temperatures year-round. It has some tolerance of drought and heat once established, though fruit set and quality benefit from adequate moisture during flowering and fruit development.',
        },
        {
          type: 'paragraph',
          text: 'The tree is sensitive to significant cold and frost, which limits its range at the cooler margins of subtropical production.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Guava performs well on loam and sandy soils and is notably adaptable relative to many other tropical fruit trees, tolerating a fairly wide range of soil textures and moisture conditions once established.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Despite its general adaptability, guava still benefits from reasonable drainage; site assessment should draw on local soil survey information, particularly on heavier or poorly drained soils.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Guava is most often propagated by grafting, budding, or air-layering to maintain trueness to a selected cultivar, since seedling trees show considerable variability in fruit characteristics. Seed propagation is used where variability is acceptable or for rootstock production.',
        },
        {
          type: 'list',
          items: [
            'Propagation method selection (grafting, budding, or air-layering) for cultivar trueness',
            'Tree spacing and canopy management, including pruning to a manageable size for harvest and pest management',
            'Fruit fly management planning from establishment, given its importance in guava production',
            'Long-term orchard floor management across many productive years',
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
          text: 'Nitrogen supports vegetative growth and flowering, potassium influences fruit size and quality, and zinc is a micronutrient commonly monitored in guava production to avoid deficiency symptoms affecting leaf and fruit development.',
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
          text: 'Guava tolerates periods of drought better than many other tropical fruit trees, but consistent moisture during flowering and fruit development supports fruit size and quality. Drip irrigation is commonly used in commercial plantings to supply water efficiently to the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling in guava production typically balances the crop’s inherent drought tolerance against the yield and quality benefits of avoiding stress during critical growth stages.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect guava leaves, twigs, and fruit, particularly under warm, humid conditions. Guava wilt disease, caused by Fusarium oxysporum f. sp. psidii, is a significant disease in several guava-growing regions, causing progressive wilting and dieback in affected trees.',
        },
        {
          type: 'paragraph',
          text: 'Fruit flies are one of the most significant limiting pest issues for fresh guava marketing in many regions, since infested fruit is unmarketable and quarantine restrictions can affect trade. Management often requires fruit bagging or other physical protection in addition to monitoring and sanitation. Mealybugs and scale insects are also common pests affecting tree vigor and fruit finish.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant planting material where available, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Guava is harvested by hand at a maturity stage assessed through indicators such as skin color and firmness, since fruit intended for distant markets is typically picked firmer than fruit for local, immediate sale. Fruit is generally handled carefully to avoid bruising and to limit exposure to fruit fly infestation after harvest.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Guava propagation methods compared',
          columns: ['Method', 'Trueness to cultivar', 'Typical use'],
          rows: [
            [
              'Seed',
              'Variable; does not reliably reproduce parent characteristics',
              'Rootstock production or where variability is acceptable',
            ],
            [
              'Grafting or budding',
              'True to the selected fruiting cultivar',
              'Commercial orchard establishment',
            ],
            [
              'Air-layering',
              'True to the parent tree',
              'Clonal propagation without a separate rootstock',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating fruit',
            'Juice and nectar',
            'Processed paste, preserves, and other value-added products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
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
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'papaya' },
    { type: 'crop', slug: 'pomegranate' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar choice, propagation practice, and pest pressure are region- and site-specific.',
  climateContext:
    'Tropical and subtropical evergreen tree with notable drought and heat tolerance relative to many tropical fruit trees; sensitive to significant cold.',
  limitations: [
    'Propagation method, spacing, and pest-management practices are site- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global guava production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Guava wilt and guava pest compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidance relevant to guava pests',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Guava',
    description:
      'A reference guide to guava: botanical classification, climate and soil adaptability, propagation, nutrition, fruit fly risk, harvest, and uses.',
    keywords: ['guava', 'Psidium guajava', 'tropical fruit', 'guava orchard'],
  },
  structuredData: { article: true },
};
