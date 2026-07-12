import type { CropContent } from '@/types/content';

export const sesame: CropContent = {
  id: 'crop-sesame',
  slug: 'sesame',
  contentType: 'crop',
  title: 'Sesame',
  scientificName: 'Sesamum indicum',
  alternativeNames: ['Benne', 'Gingelly', 'Til'],
  category: 'Oilseed crop',
  subcategory: 'Annual oilseed crop',
  botanicalFamily: 'Pedaliaceae (sesame family)',
  lifecycle: 'Annual',
  summary:
    'Sesame is a warm-season annual oilseed grown for its small, oil-rich seeds, valued for drought tolerance and adaptability to marginal soils across tropical and subtropical regions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sesame is one of the oldest cultivated oilseed crops, grown for seeds that are high in oil content and used both whole and pressed into oil. Its deep taproot and modest input requirements make it well suited to smallholder production in semi-arid environments.',
    },
    {
      type: 'paragraph',
      text: 'Traditional cultivars are prone to seed-pod shattering at maturity, which can cause significant field losses; non-shattering and more uniformly maturing cultivars have been developed to support mechanized harvest.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Pedaliaceae (sesame family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Sesamum indicum' },
    {
      label: 'Primary uses',
      value: 'Edible oil, whole seed for food, oilseed meal',
    },
    {
      label: 'Climate',
      value: 'Warm season; notably drought- and heat-tolerant',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams; poor tolerance of waterlogging',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Sesame is grown across warm regions of Asia, Africa, and the Americas, largely by smallholder farmers, and is valued for its ability to produce a crop under relatively low rainfall and on soils of modest fertility.',
        },
        {
          type: 'paragraph',
          text: 'Because much production still relies on manual harvest of shattering-type cultivars, agronomic practices and mechanization levels differ considerably between regions and production scales.',
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
            { term: 'Family', description: 'Pedaliaceae (sesame family)' },
            { term: 'Genus', description: 'Sesamum' },
            {
              term: 'Principal species',
              description: 'Sesamum indicum (cultivated sesame)',
            },
            {
              term: 'Growth habit',
              description:
                'Erect annual herb producing capsules (pods) that split open to release small oil-rich seeds at maturity',
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
          text: 'Sesame is believed to have originated in Africa or the Indian subcontinent and is among the earliest oilseed crops used by humans, with cultivation spreading across Asia, Africa, and later the Americas along historical trade routes.',
        },
        {
          type: 'paragraph',
          text: 'It is grown today across tropical and subtropical regions worldwide, with production concentrated in parts of Asia and Africa. Production and trade figures are compiled by FAO and national statistical services.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sesame requires a warm growing season and performs well under conditions of moderate drought, reflecting its deep root system and efficient water use, though establishment benefits from adequate soil moisture.',
        },
        {
          type: 'paragraph',
          text: 'Excess rainfall or waterlogging during flowering and pod development, especially near harvest, can reduce yield and increase disease pressure and pod-shattering losses.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sesame is best suited to well-drained sandy loam soils, though it tolerates a range of soil types provided drainage is adequate; the crop is intolerant of waterlogging, which quickly damages the root system.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability, particularly drainage capacity, should be assessed with local soil survey information before establishment.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Sesame is established from a fine, well-prepared seedbed, since its small seeds require shallow, even placement for reliable emergence.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection for shatter resistance and uniform maturity where mechanized harvest is planned',
            'Fine, firm seedbed preparation suited to small-seeded establishment',
            'Timely weed control during early growth, when the crop competes poorly with weeds',
            'Rotation with other crops to manage soil-borne disease pressure',
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
          text: 'Nitrogen supports vegetative growth and capsule set, though sesame generally has modest fertility requirements compared with many other oilseed crops, consistent with its role in low-input farming systems.',
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
          text: 'Sesame is grown predominantly under rain-fed conditions in semi-arid production regions, reflecting its drought tolerance, though supplemental irrigation is used in some systems to support establishment and flowering.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop is sensitive to waterlogging, irrigation and drainage are managed to avoid saturated soil conditions.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt is a significant soil-borne disease of sesame, causing vascular wilting and yield loss, while bacterial leaf spot can affect foliage under humid conditions. Aphids and whiteflies are common sap-feeding pests that can also transmit plant viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Because capsules mature and dry unevenly and traditional cultivars shatter readily, sesame is often cut and stacked to dry before threshing, timed carefully to minimize seed loss. Non-shattering cultivars allow direct combine harvesting where adopted.',
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
            'Edible oil extraction for cooking and food processing',
            'Whole and processed seed used in baking, confectionery, and traditional foods',
            'Oilseed meal remaining after oil extraction used as animal feed',
            'Traditional uses in local cuisines across producing regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'safflower' },
    { type: 'crop', slug: 'sunflower' },
  ],
  glossaryTerms: ['annual-crop', 'yield', 'macronutrient'],
  geographicScope:
    'Global overview of production across tropical and subtropical regions. Mechanization level differs greatly by region.',
  climateContext:
    'Warm-season crop with notable drought and heat tolerance; sensitive to waterlogging and excess rain near harvest.',
  limitations: [
    'Shattering behavior, harvest method, and mechanization vary by cultivar and region and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global sesame production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Sesame disease and pest compendium data' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sesame',
    description:
      'An evidence-based reference on sesame: classification, climate and soil needs, agronomy, nutrition, diseases, pests, harvest, and oilseed uses.',
    keywords: [
      'sesame',
      'Sesamum indicum',
      'oilseed crop',
      'sesame cultivation',
    ],
  },
  structuredData: { article: true },
};
