import type { CropContent } from '@/types/content';

export const cotton: CropContent = {
  id: 'crop-cotton',
  slug: 'cotton',
  contentType: 'crop',
  title: 'Cotton',
  scientificName:
    'Gossypium hirsutum (upland cotton); Gossypium barbadense (extra-long-staple cotton, including Pima and Egyptian types)',
  alternativeNames: ['Upland cotton', 'Pima cotton'],
  category: 'Fiber crop',
  subcategory: 'Annual fiber and oilseed crop',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Annual',
  summary:
    'Cotton is a warm-season crop grown for the fiber (lint) surrounding its seeds, along with cottonseed oil and meal. It is cultivated as an annual across tropical and warm-temperate regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cotton is grown primarily for the fiber, or lint, that develops around its seeds inside a protective boll. Although several Gossypium species are perennial shrubs in their native tropical habitats, cotton is cultivated commercially as an annual crop, planted from seed each season and harvested within a single growing period.',
    },
    {
      type: 'paragraph',
      text: 'Two species dominate world production: Gossypium hirsutum, or upland cotton, which accounts for the large majority of global output, and Gossypium barbadense, grown for extra-long-staple fiber prized for fine, high-quality textiles.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    {
      label: 'Life cycle',
      value: 'Annual (cultivated), though perennial in native tropical habit',
    },
    {
      label: 'Main species',
      value: 'Gossypium hirsutum, Gossypium barbadense',
    },
    {
      label: 'Primary uses',
      value: 'Textile fiber, cottonseed oil, cottonseed meal',
    },
    {
      label: 'Climate',
      value: 'Warm season crop requiring a long, frost-free period',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained soils across a wide texture range',
      note: 'Grown on soils from sandy loams to heavier clays depending on region.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton is a globally significant fiber crop, grown across warm-temperate and tropical production regions and supporting a large downstream textile industry. Beyond fiber, the seed is processed into cottonseed oil, an edible vegetable oil, and cottonseed meal, a protein-rich livestock feed.',
        },
        {
          type: 'paragraph',
          text: 'Production systems range from large, highly mechanized operations to smallholder cultivation, with input levels, irrigation, and pest-management approaches varying widely by region and production scale.',
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
            { term: 'Family', description: 'Malvaceae (mallow family)' },
            { term: 'Genus', description: 'Gossypium' },
            {
              term: 'Principal species',
              description:
                'Gossypium hirsutum (upland cotton) and Gossypium barbadense (extra-long-staple cotton)',
            },
            {
              term: 'Growth habit',
              description:
                'Broadleaf annual (cultivated) shrub producing a fibrous boll around the seed',
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
          text: 'Cotton fiber was independently domesticated in more than one region of the world, including Mesoamerica, where Gossypium hirsutum was developed, and South America, associated with Gossypium barbadense, alongside separate domestications of other Gossypium species in the Old World.',
        },
        {
          type: 'paragraph',
          text: 'Today cotton is grown across warm-temperate and tropical regions on multiple continents. Production and trade statistics are compiled by bodies such as FAO and USDA and should be taken from those primary datasets rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton requires a long, warm, frost-free growing season, with germination and early growth sensitive to cool soil temperatures. Adequate heat accumulation over the season supports boll development and fiber maturation.',
        },
        {
          type: 'paragraph',
          text: 'While cotton has some tolerance for heat, drought stress during flowering and boll development can reduce yield and fiber quality, making water availability at these stages a key management concern.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton is grown across a wide range of soil textures, from sandy loams to heavier clay soils, reflecting its deep rooting habit and moderate tolerance of a range of soil conditions, including some salinity relative to many other row crops.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Compacted or poorly drained soils restrict rooting and can increase disease pressure. Soil suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton is planted after soils have warmed sufficiently for reliable germination, with plant population and row spacing set locally according to moisture availability, equipment, and expected boll load.',
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to fiber-quality target and disease/pest pressure',
            'Crop rotation to manage soil-borne diseases and weed pressure',
            'Seedbed preparation appropriate to the local tillage system',
            'Management of vegetative growth to avoid excessive "rank" growth that can delay boll set',
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
          text: 'Nitrogen supports vegetative growth and boll development but is balanced carefully, since excess nitrogen can promote excessive vegetative growth at the expense of boll set and delay maturity. Potassium is important for fiber quality and is often in high demand during late-season boll fill.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton is grown both rain-fed and under irrigation, with furrow irrigation historically dominant in many production regions, alongside increasing use of more efficient methods such as drip and center-pivot systems.',
        },
        {
          type: 'paragraph',
          text: 'Water demand peaks around flowering and boll development, and drought stress during this window can reduce both yield and fiber quality.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt is a significant soil-borne fungal disease of cotton in many production regions, while bacterial blight can cause foliar and boll lesions under favorable conditions. Aphids, whiteflies, and spider mites are among the key insect and mite pests, with whiteflies also known for producing sticky honeydew that can stain lint.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring against locally established thresholds, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton bolls are harvested once open and the fiber has dried, typically after the crop has been defoliated to ease mechanical picking. Harvested seed cotton is then ginned to separate lint from seed before further processing.',
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
            'Textile fiber (lint) for yarn and fabric production',
            'Cottonseed oil as an edible vegetable oil',
            'Cottonseed meal as a protein source in livestock feed',
            'Linters (short fibers) used in cellulose-based products',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'fusarium-wilt' }],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'urea' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'alfalfa' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'economic-threshold', 'yield'],
  geographicScope:
    'Global overview. Irrigation method, variety, and input levels vary widely by production region.',
  climateContext:
    'Warm-season fiber crop requiring a long, frost-free growing season with adequate heat accumulation.',
  limitations: [
    'Planting dates, plant populations, and input levels are region-specific decisions not covered by universal values here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global cotton production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Cotton research and disease information',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Cotton disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for cotton',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cotton',
    description:
      'A structured, evidence-based reference on cotton: classification, climate and soil needs, agronomy, nutrition, diseases, pests, and uses.',
    keywords: ['cotton', 'Gossypium hirsutum', 'fiber crop', 'cotton agronomy'],
  },
  structuredData: { article: true },
};
