import type { CropContent } from '@/types/content';

export const soybean: CropContent = {
  id: 'crop-soybean',
  slug: 'soybean',
  contentType: 'crop',
  title: 'Soybean',
  scientificName: 'Glycine max',
  alternativeNames: ['Soya bean', 'Soybeans'],
  category: 'Legume crop',
  subcategory: 'Grain and oilseed legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Soybean is an annual legume grown worldwide for its protein- and oil-rich seed, used extensively in food, animal feed, and industrial products, and valued in cropping systems for its symbiotic nitrogen fixation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soybean is one of the most widely grown oilseed and protein crops in the world. Its seed is processed into vegetable oil and high-protein meal that forms a major component of livestock feed rations, alongside substantial direct use in human food products.',
    },
    {
      type: 'paragraph',
      text: 'As a member of the legume family, soybean forms a symbiotic relationship with Bradyrhizobium bacteria in root nodules, through which the crop can fix atmospheric nitrogen. Its flowering is also sensitive to day length, and varieties are grouped into maturity groups suited to particular latitudes.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Glycine max' },
    {
      label: 'Primary uses',
      value: 'Vegetable oil, protein meal for feed, food products',
    },
    {
      label: 'Climate',
      value: 'Warm temperate to subtropical; day-length sensitive flowering',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams; generally favors near-neutral soil pH',
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
          text: 'Soybean combines a relatively high seed protein and oil content with the ability to supply part of its own nitrogen needs through symbiotic fixation, which distinguishes it agronomically from cereal crops grown in rotation with it.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from smallholder systems to large mechanized operations, and soybean is commonly grown in rotation with cereals such as maize. Agronomic detail such as maturity group selection and planting date is set locally according to latitude and season length.',
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
            { term: 'Family', description: 'Fabaceae (legume family)' },
            { term: 'Genus and species', description: 'Glycine max' },
            {
              term: 'Growth habit',
              description:
                'Bushy annual with trifoliate leaves, producing pods that typically contain two to four seeds',
            },
            {
              term: 'Root system',
              description:
                'Taproot bearing nodules that host nitrogen-fixing Bradyrhizobium bacteria',
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
          text: 'Soybean was domesticated in East Asia from its wild relative Glycine soja and was cultivated in China for millennia before spreading to other parts of Asia. It was subsequently introduced to other continents and expanded rapidly during the twentieth century as an oilseed and feed crop.',
        },
        {
          type: 'paragraph',
          text: 'Soybean is now grown across the Americas, Asia, and increasingly other regions. Current data on planted area, production, and trade by country are compiled by FAO and national agricultural statistics agencies and should be taken from those primary sources.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean is a warm-season crop typically grown where a sufficiently long frost-free period is available. Flowering is triggered by day length in many varieties, so maturity groups are matched to local latitude to ensure the crop flowers and matures within the growing season.',
        },
        {
          type: 'paragraph',
          text: 'Heat and moisture stress during flowering and pod fill can reduce seed set and yield, which is one reason planting date and variety maturity are chosen carefully for local conditions.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean performs well on deep, well-drained loams with good structure. It is sensitive to waterlogging and compaction, both of which restrict root and nodule development and can increase the risk of root and stem diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil drainage class and pH should be assessed with local soil survey data, since both affect nodulation and disease risk.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'In fields without a recent history of soybean production, seed is often treated with a rhizobial inoculant to ensure effective nodulation. Maturity group, row spacing, and seeding rate are set according to local latitude, soil, and equipment.',
        },
        {
          type: 'list',
          items: [
            'Maturity group selection matched to local day length and season length',
            'Inoculation with compatible Bradyrhizobium strains in fields new to soybean production',
            'Crop rotation, commonly with cereals such as maize, to manage pests, diseases, and soil structure',
            'Weed management during early growth, before the canopy closes',
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
          text: 'Effective nitrogen fixation can supply a substantial share of the crop nitrogen requirement, though this depends on successful nodulation and soil conditions. Phosphorus and potassium remain important, particularly on soils with limited native supply, and requirements depend on soil tests and target yield.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and inoculation programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean is grown both rain-fed and under irrigation. Water demand is highest during flowering and pod fill, and moisture stress during this period can noticeably reduce yield.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is used, scheduling is generally based on estimated crop evapotranspiration and local climate data, following methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean is affected by root and stem rot diseases associated with several soilborne fungi and oomycetes, particularly under wet or compacted soil conditions, as well as by foliar diseases whose importance varies by region. The soybean aphid and other insect pests can reduce yield and, in some cases, transmit viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management typically combines resistant varieties, crop rotation, drainage improvement, field monitoring, and, where warranted, locally authorized control measures used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean is harvested once pods and seeds have matured and dried to a moisture content suitable for combining and safe storage. Harvest timing balances yield and quality against the risk of pod shattering and weather-related losses.',
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
            'Crushing into vegetable oil and high-protein meal for livestock feed',
            'Food products including soy milk, tofu, and fermented foods in some cuisines',
            'Whole or processed soybeans used directly in animal feed rations',
            'Industrial applications such as biodiesel feedstock in some regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'root-rot' }],
  commonPests: [{ type: 'pest', slug: 'aphids' }],
  suitableSoils: [{ type: 'soil', slug: 'loam-soil' }],
  relatedTopics: [{ type: 'crop', slug: 'maize' }],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'cover-crop',
    'macronutrient',
  ],
  geographicScope:
    'Global overview. Maturity group selection, inoculation practice, and input levels are region-specific and depend on local latitude, day length, and soil conditions.',
  climateContext:
    'Warm-season, day-length-sensitive legume grown across temperate to subtropical regions, rain-fed or irrigated.',
  limitations: [
    'Maturity group selection is tied to local day length and season length and is not reduced to a single universal recommendation here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT and USDA NASS.',
    'Nitrogen fixation reduces, but does not necessarily eliminate, the need for supplemental nitrogen; actual requirements depend on soil and nodulation status.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of soybean in global food and feed systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-nass', citedFor: 'U.S. soybean production statistics' },
    { sourceId: 'usda-ars', citedFor: 'Soybean disease and pest research' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Regional soybean agronomy guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soybean',
    description:
      'An evidence-based reference on soybean: classification, climate and soil requirements, nitrogen fixation, agronomy, diseases, pests, and uses.',
    keywords: ['soybean', 'Glycine max', 'legume crop', 'oilseed'],
  },
  structuredData: { article: true },
};
