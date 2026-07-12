import type { CropContent } from '@/types/content';

export const cumin: CropContent = {
  id: 'crop-cumin',
  slug: 'cumin',
  contentType: 'crop',
  title: 'Cumin',
  scientificName: 'Cuminum cyminum',
  category: 'Spice crop',
  subcategory: 'Annual seed spice herb',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Annual',
  summary:
    'Cumin is a low-growing annual herb of the carrot family grown for its small, ridged seeds, dried and used whole or ground as one of the most widely traded culinary spices.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cumin is a compact annual herb adapted to hot, dry growing conditions, historically associated with semi-arid production regions of the eastern Mediterranean, the Middle East, and South Asia.',
    },
    {
      type: 'paragraph',
      text: 'The plant produces small umbels of flowers followed by ridged, elongated seeds that are hand- or machine-harvested, dried, and cleaned before sale as whole seed or ground spice.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Cuminum cyminum' },
    { label: 'Primary uses', value: 'Whole and ground seed spice' },
    {
      label: 'Climate',
      value: 'Hot, dry, semi-arid; relatively low water requirement',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams and loams',
      note: 'Optimal ranges are region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cumin is grown mainly by smallholder and commercial farmers in semi-arid regions where its relatively low water requirement compared with many other spice crops makes it a viable dryland or lightly irrigated option.',
        },
        {
          type: 'paragraph',
          text: 'India is among the world’s largest producers and consumers of cumin, with cultivation concentrated in specific semi-arid states where the crop is grown in the cooler part of the year.',
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
            { term: 'Family', description: 'Apiaceae (carrot family)' },
            { term: 'Genus', description: 'Cuminum' },
            { term: 'Principal species', description: 'Cuminum cyminum' },
            {
              term: 'Growth habit',
              description:
                'Slender annual herb with thread-like leaves and small umbels bearing ridged, aromatic seeds',
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
          text: 'Cumin is native to the eastern Mediterranean and parts of the Middle East and has been used as a spice since antiquity, referenced in some of the earliest surviving written records of trade and cuisine.',
        },
        {
          type: 'paragraph',
          text: 'Today, India, alongside countries in the Middle East and North Africa, accounts for a large share of global production and trade. Production and price data are compiled by FAO and national agricultural and trade agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cumin is adapted to hot, dry conditions and is typically grown as a cool-season crop in semi-arid regions, relying on residual soil moisture or limited irrigation rather than high rainfall. Excess humidity and rainfall during flowering and seed set can favor disease and reduce yield and quality.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained sandy loams and loams are preferred; the crop generally tolerates soils of moderate fertility but performs poorly under waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because cumin is sensitive to excess moisture around flowering, drainage and rainfall timing are important site-selection considerations specific to each growing region.',
        },
      ],
    },
    {
      id: 'cultivation-and-management',
      heading: 'Cultivation and management',
      body: [
        {
          type: 'list',
          items: [
            'Sowing timed to the cooler, drier part of the growing season in semi-arid production areas',
            'Relatively low seeding rates and wide spacing to reduce humidity within the canopy and limit disease',
            'Weed control important during early establishment, as young cumin seedlings compete poorly with weeds',
            'Crop rotation used to manage soil-borne disease pressure, particularly Fusarium wilt',
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
          text: 'Nitrogen and phosphorus support early establishment and flowering, though cumin is generally considered a modest-input crop compared with many other spice and vegetable crops.',
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
          text: 'Cumin has a relatively low overall water requirement and is often grown with limited irrigation, applied mainly at establishment and key growth stages, in semi-arid production regions.',
        },
        {
          type: 'paragraph',
          text: 'Furrow irrigation is traditional in many production areas, while deficit irrigation strategies, applying less than full crop water demand, are used in some regions to conserve water without unacceptable yield loss.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt is one of the most significant diseases of cumin in major production regions, causing wilting and plant death, particularly under warm soil conditions. Powdery mildew can also affect foliage, especially under humid conditions. Aphids and thrips are common pests affecting foliage and flower heads.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Fusarium wilt',
              'Disease',
              'Major yield-limiting disease in warm soils',
            ],
            ['Powdery mildew', 'Disease', 'Common under humid conditions'],
            [
              'Aphids',
              'Pest',
              'Sap-feeding insects on foliage and flower heads',
            ],
            ['Thrips', 'Pest', 'Feed on leaves and flowers'],
          ],
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Cumin is harvested when seed heads mature and begin to dry, typically by cutting whole plants, which are then further dried, threshed, and cleaned before the seed is sold or processed.',
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
            'Whole and ground seed used as a widely traded culinary spice',
            'Key ingredient in many regional spice blends',
            'Cumin seed oil and oleoresin extracted for the flavor industry',
            'By-products such as chaff sometimes used as livestock feed in producing regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coriander' },
    { type: 'crop', slug: 'fennel' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview; India and countries in the Middle East and North Africa account for a large share of global production and trade.',
  climateContext:
    'Hot, dry, semi-arid annual crop with a comparatively low water requirement; sensitive to excess humidity and rainfall around flowering.',
  limitations: [
    'Water requirements and disease pressure vary by region and season and are not quantified here.',
    'Production and price statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global spice crop production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Cumin disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cumin',
    description:
      'A structured, evidence-based reference on cumin: classification, dryland climate needs, cultivation, diseases, pests, harvest, and spice uses.',
    keywords: [
      'cumin',
      'Cuminum cyminum',
      'spice crop',
      'cumin seed cultivation',
    ],
  },
  structuredData: { article: true },
};
