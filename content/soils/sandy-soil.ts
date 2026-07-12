import type { SoilContent } from '@/types/content';

export const sandySoil: SoilContent = {
  id: 'soil-sandy',
  slug: 'sandy-soil',
  contentType: 'soil',
  title: 'Sandy Soil',
  alternativeNames: ['Light soil', 'Coarse-textured soil'],
  category: 'Soil texture',
  subcategory: 'Coarse-textured mineral soil',
  texture: 'Coarse (dominated by sand-sized particles)',
  summary:
    'Sandy soil is a coarse-textured mineral soil dominated by sand-sized particles. It drains quickly and warms early in spring but holds little water and few nutrients, so it needs frequent, careful management.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sandy soil is defined by a high proportion of sand-sized particles, the largest of the three mineral soil fractions. Large particles create large pore spaces, so water and dissolved nutrients move through sandy soil rapidly rather than being held near plant roots.',
    },
    {
      type: 'paragraph',
      text: 'Because sand particles have relatively little surface area and are chemically inert compared with clay, sandy soils have low natural fertility and low water storage. These traits shape almost every management decision made on them, from irrigation scheduling to fertilizer timing.',
    },
  ],
  keyFacts: [
    { label: 'Texture class', value: 'Coarse (sand and loamy sands)' },
    {
      label: 'Dominant particle',
      value: 'Sand (the largest mineral particle size)',
    },
    { label: 'Drainage', value: 'Fast; low risk of waterlogging' },
    {
      label: 'Water holding',
      value:
        'Low; water moves through quickly and is available for a short period',
    },
    {
      label: 'Nutrient retention',
      value: 'Low cation exchange capacity; nutrients leach readily',
    },
    {
      label: 'Workability',
      value: 'Easy to work across a wide moisture range; warms early in spring',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Soil texture describes the relative proportions of sand, silt, and clay particles. Sandy soils are those in which sand-sized particles dominate physical behaviour. Because sand grains are large and do not bind water or nutrients tightly, sandy soils behave very differently from fine-textured clay soils.',
        },
      ],
    },
    {
      id: 'properties',
      heading: 'Physical and chemical properties',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Water retention',
              description:
                'Low total storage; large pore spaces allow water to drain past the root zone quickly, increasing drought risk between irrigation or rainfall events.',
            },
            {
              term: 'Aeration',
              description:
                'Large pore spaces give excellent air movement, so waterlogging and root oxygen deficiency are rare.',
            },
            {
              term: 'Nutrient holding',
              description:
                'A low cation exchange capacity means nutrient cations such as potassium and nitrogen leach readily, particularly after heavy rain or irrigation.',
            },
            {
              term: 'Structure',
              description:
                'Sandy soils have little natural aggregation; they are loose and single-grained rather than forming stable clods.',
            },
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Managing sandy soils centres on compensating for low water and nutrient retention. Because inputs move through the profile quickly, irrigation and fertilizer are generally most effective when applied in smaller, more frequent amounts rather than large, infrequent doses.',
        },
        {
          type: 'list',
          items: [
            'Irrigate more frequently but with smaller amounts to reduce drainage losses below the root zone',
            'Split fertilizer applications to limit leaching, especially of nitrogen',
            'Add organic matter to improve water and nutrient holding capacity over time',
            'Maintain ground cover to reduce wind erosion, to which loose sandy soils are prone',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Sandy soils warm and dry out earlier in spring than finer-textured soils, which can allow earlier field access and planting where local conditions permit.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Free-draining sandy soils suit crops that are sensitive to waterlogging or that benefit from loose, easily penetrated soil for root and tuber development, such as potatoes. Deep-rooted, drought-tolerant crops such as sunflower can also perform well where sandy soils are managed with adequate irrigation or timed to rainfall. Crops with high, steady water and nutrient demands are generally more challenging on sandy soils without intensive irrigation and fertility management.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a sandy soil',
      body: [
        {
          type: 'paragraph',
          text: 'Texture can be estimated in the field by feel — sandy soils feel gritty and will not form a cohesive ribbon or ball when moist — and confirmed by laboratory particle-size analysis. Soil survey information and local testing provide the most reliable basis for irrigation and fertility decisions.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Because sandy soils vary widely in depth and underlying material, local soil survey or on-site testing should guide irrigation and nutrient management rather than general texture-class descriptions alone.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sunflower' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  glossaryTerms: ['soil-texture', 'macronutrient', 'cover-crop'],
  geographicScope:
    'General soil-science overview applicable worldwide; local soils vary and should be assessed directly.',
  climateContext:
    'Sandy soil behaviour interacts strongly with climate — low water storage makes crops on sandy soils more sensitive to rainfall variability and drought.',
  limitations: [
    'Individual fields vary; texture classes are general descriptions, not substitutes for local soil survey or testing.',
    'Irrigation and fertilizer timing depend on local weather, soil depth, and crop needs and cannot be generalised to fixed schedules.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil texture, drainage, and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil function and classification context',
    },
    { sourceId: 'isric', citedFor: 'Global soil properties and information' },
    { sourceId: 'usda-plants', citedFor: 'Crop–soil suitability context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sandy Soil',
    description:
      'How sandy soil behaves: coarse texture, fast drainage, low water and nutrient retention, irrigation and fertility management, and crop suitability.',
    keywords: ['sandy soil', 'soil texture', 'light soil', 'soil drainage'],
  },
  structuredData: { article: true },
};
