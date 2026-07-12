import type { SoilContent } from '@/types/content';

export const claySoil: SoilContent = {
  id: 'soil-clay',
  slug: 'clay-soil',
  contentType: 'soil',
  title: 'Clay Soil',
  alternativeNames: ['Heavy soil', 'Fine-textured soil'],
  category: 'Soil texture',
  subcategory: 'Fine-textured mineral soil',
  texture: 'Fine (dominated by clay-sized particles)',
  summary:
    'Clay soil is a fine-textured mineral soil dominated by clay-sized particles. It holds water and nutrients well but drains slowly and can be difficult to work when wet or dry.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Clay soil is defined by a high proportion of clay-sized particles, the smallest of the mineral fractions. This fine texture gives clay soils a large surface area, which allows them to retain water and nutrients effectively but also makes them prone to slow drainage, compaction, and a narrow window of good workability.',
    },
    {
      type: 'paragraph',
      text: 'In practice, few soils are pure clay; most are clay loams or silty clays in which clay is the dominant influence. Understanding how clay behaves helps explain management challenges and opportunities across many agricultural soils.',
    },
  ],
  keyFacts: [
    { label: 'Texture class', value: 'Fine (clay and clay loams)' },
    {
      label: 'Dominant particle',
      value: 'Clay (the smallest mineral particle size)',
    },
    { label: 'Drainage', value: 'Slow; prone to waterlogging when saturated' },
    {
      label: 'Water holding',
      value:
        'High total water storage; part is tightly held and less available',
    },
    { label: 'Nutrient retention', value: 'High cation exchange capacity' },
    {
      label: 'Workability',
      value: 'Narrow moisture window; sticky when wet, hard when dry',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Soil texture describes the relative proportions of sand, silt, and clay particles. Clay soils are those in which clay-sized particles dominate the physical behaviour of the soil. Because clay particles are chemically active and hold water strongly, clay soils behave very differently from coarse, sandy soils.',
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
                'High total storage, but a significant fraction is held so tightly it is not readily available to plants.',
            },
            {
              term: 'Aeration',
              description:
                'Small pore spaces limit air movement; roots can suffer when soils are saturated.',
            },
            {
              term: 'Nutrient holding',
              description:
                'A high cation exchange capacity means clay soils retain nutrient cations such as potassium, calcium, and magnesium well.',
            },
            {
              term: 'Structure',
              description:
                'Well-aggregated clay soils can be productive; poorly structured or compacted clays restrict rooting and drainage.',
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
          text: 'Managing clay soils centres on protecting and improving structure so that water can drain and roots can grow. Working clay soils at the wrong moisture content — too wet in particular — causes compaction and smearing that can take years to remedy.',
        },
        {
          type: 'list',
          items: [
            'Time tillage and traffic to soil moisture to avoid compaction and smearing',
            'Add organic matter to improve aggregation and drainage over time',
            'Maintain cover and rooting to stabilise structure and reduce surface sealing',
            'Address drainage where waterlogging is persistent, following local guidance',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Compaction on clay soils is easier to prevent than to fix. Avoid heavy traffic and cultivation when the soil is wet.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Well-structured clay and clay-loam soils suit crops that benefit from good moisture and nutrient retention, including many cereals such as wheat. Their slow drainage makes them less suited to crops that require light, free-draining soils, such as many root vegetables, unless drainage and structure are actively managed.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a clay soil',
      body: [
        {
          type: 'paragraph',
          text: 'Texture can be estimated in the field by feel — clay soils feel sticky and can be moulded into a ribbon when moist — and confirmed by laboratory particle-size analysis. Soil survey information and local testing provide the most reliable basis for management decisions.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
    { type: 'soil', slug: 'peat-soil' },
  ],
  glossaryTerms: ['soil-texture', 'soil-ph', 'cover-crop'],
  geographicScope:
    'General soil-science overview applicable worldwide; local soils vary and should be assessed directly.',
  climateContext:
    'Clay behaviour interacts strongly with climate — wetting and drying cycles affect structure and workability.',
  limitations: [
    'Individual fields vary; texture classes are general descriptions, not substitutes for local soil survey or testing.',
    'Management timing depends on local weather and soil moisture and cannot be generalised to fixed dates.',
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
    title: 'Clay Soil',
    description:
      'How clay soil behaves: texture, water and nutrient retention, drainage, workability, management to protect structure, and crop suitability.',
    keywords: ['clay soil', 'soil texture', 'heavy soil', 'soil management'],
  },
  structuredData: { article: true },
};
