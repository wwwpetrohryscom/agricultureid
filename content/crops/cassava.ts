import type { CropContent } from '@/types/content';

export const cassava: CropContent = {
  id: 'crop-cassava',
  slug: 'cassava',
  contentType: 'crop',
  title: 'Cassava',
  scientificName: 'Manihot esculenta',
  alternativeNames: ['Manioc', 'Yuca', 'Tapioca plant'],
  category: 'Root and tuber crop',
  subcategory: 'Tropical root crop',
  botanicalFamily: 'Euphorbiaceae (spurge family)',
  lifecycle:
    'Perennial shrub, commonly grown on an annual-to-biennial harvest cycle',
  summary:
    'Cassava is a woody perennial shrub grown throughout the tropics for its starchy storage roots, valued for drought tolerance and its ability to crop on soils too poor for many other staples.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cassava is propagated vegetatively from stem cuttings rather than from seed, and its enlarged storage roots accumulate starch that makes it a major source of dietary calories across much of the tropics, particularly in food-security contexts where other staples struggle.',
    },
    {
      type: 'paragraph',
      text: 'Cultivars are broadly grouped as "sweet" or "bitter" according to the concentration of cyanogenic glucosides in the roots; bitter types require processing such as grating, pressing, and cooking or fermentation before consumption to reduce these compounds to safe levels, an important agronomic and food-safety distinction rather than a health claim.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Euphorbiaceae (spurge family)' },
    {
      label: 'Life cycle',
      value: 'Perennial shrub, harvested annually to biennially',
    },
    { label: 'Main species', value: 'Manihot esculenta' },
    {
      label: 'Primary uses',
      value: 'Staple food starch, animal feed, industrial starch',
    },
    {
      label: 'Climate',
      value:
        'Tropical and subtropical; notably drought-tolerant once established',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy and lateritic soils; tolerates low fertility',
      note: 'Tolerance varies by cultivar and local growing conditions.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava is grown predominantly by smallholder farmers across the tropics, prized for its flexibility: roots can often be left in the ground beyond physiological maturity and harvested as needed, functioning as a form of on-farm food storage.',
        },
        {
          type: 'paragraph',
          text: 'Its tolerance of poor soils, erratic rainfall, and low-input management makes it an important food-security crop, though yields respond substantially to improved varieties and better agronomic practice where these are available.',
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
            { term: 'Family', description: 'Euphorbiaceae (spurge family)' },
            { term: 'Genus', description: 'Manihot' },
            {
              term: 'Principal species',
              description: 'Manihot esculenta (cultivated cassava)',
            },
            {
              term: 'Growth habit',
              description:
                'Woody perennial shrub propagated from stem cuttings, grown for enlarged starchy storage roots',
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
          text: 'Cassava originates from South America, where it was domesticated by indigenous peoples, and was subsequently introduced to Africa and Asia by traders, becoming deeply embedded in food systems across the tropics.',
        },
        {
          type: 'paragraph',
          text: 'It is now grown across tropical Africa, Asia, and Latin America, with Africa accounting for a large share of global production. Current production and trade figures are compiled by FAO and national statistical services.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava is well adapted to warm, humid to subhumid tropical climates and tolerates extended dry periods better than most staple crops, shedding leaves under drought stress and resuming growth once moisture returns.',
        },
        {
          type: 'paragraph',
          text: 'The crop is frost-sensitive and cold intolerant, restricting production to frost-free tropical and warm subtropical zones.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava tolerates a wide range of soils, including sandy and lateritic soils of relatively low fertility, and is often grown on marginal land where other crops perform poorly. Well-drained soils are preferred, since waterlogging can cause root rot.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Very compacted or poorly drained soils restrict root bulking and increase disease risk. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava is established by planting mature stem cuttings, selected from disease-free plants, either horizontally, at an angle, or vertically depending on local practice and soil moisture conditions.',
        },
        {
          type: 'list',
          items: [
            'Selection of clean, disease-free planting material from healthy stems',
            'Land preparation appropriate to soil type, often involving mounding or ridging in heavier or wetter soils',
            'Weed control during early establishment, when the crop canopy has not yet closed',
            'Intercropping with legumes or vegetables during the early growth phase in many smallholder systems',
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
          text: 'Potassium is removed in large amounts by cassava roots and strongly influences root bulking and starch content, while nitrogen supports canopy development. Cassava can produce a harvest on low-fertility soils, but yields respond to improved nutrient management.',
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
          text: 'Cassava is grown predominantly under rain-fed conditions given its drought tolerance, though supplemental irrigation can improve establishment and yield in areas with pronounced dry seasons or on very sandy soils.',
        },
        {
          type: 'paragraph',
          text: 'Water stress during root bulking has less impact on cassava than on many other staple crops, a key reason for its role in drought-prone farming systems.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava bacterial blight causes wilting and dieback and can spread rapidly under wet, windy conditions, while anthracnose affects stems and can weaken planting material for the following season. Mealybugs and whiteflies are significant sap-feeding pests; whiteflies are also vectors of important cassava viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on clean planting material, resistant or tolerant varieties where available, field sanitation, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Roots are typically harvested by hand, lifted from the soil, from around eight months to two years after planting depending on cultivar and intended use. Because roots deteriorate rapidly once lifted, harvest is often timed close to processing or sale.',
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
            'Staple food starch, consumed fresh, dried, or processed (e.g. as flour or granules)',
            'Industrial starch for food and non-food manufacturing',
            'Animal feed from roots, leaves, and processing by-products',
            'Planting stems retained as propagation material for the next crop cycle',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'bacterial-wilt' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'cultivator' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'yam' },
    { type: 'crop', slug: 'sweet-potato' },
  ],
  glossaryTerms: ['perennial-crop', 'yield', 'macronutrient'],
  geographicScope:
    'Global overview of tropical production. Cultivar choice, processing methods, and cropping cycles vary widely by region.',
  climateContext:
    'Warm, humid-to-subhumid tropical crop with strong drought tolerance and no cold or frost tolerance.',
  limitations: [
    'Cyanogenic potential and required processing steps differ substantially between sweet and bitter cultivars and are not detailed here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global cassava production and food-security role',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cip',
      citedFor: 'Root and tuber crop research and agronomy',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Cassava disease and pest compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cassava',
    description:
      'A structured, evidence-based reference on cassava: classification, climate and soil tolerance, establishment, nutrition, diseases, pests, and food uses.',
    keywords: [
      'cassava',
      'Manihot esculenta',
      'root crop',
      'cassava cultivation',
    ],
  },
  structuredData: { article: true },
};
