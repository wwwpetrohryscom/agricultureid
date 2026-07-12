import type { CropContent } from '@/types/content';

export const sweetcorn: CropContent = {
  id: 'crop-sweetcorn',
  slug: 'sweetcorn',
  contentType: 'crop',
  title: 'Sweetcorn',
  scientificName: 'Zea mays var. saccharata (and var. rugosa)',
  alternativeNames: ['Sweet corn', 'Corn on the cob'],
  category: 'Vegetable crop',
  subcategory: 'Annual grain-type vegetable',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Sweetcorn is a vegetable form of maize bred for high sugar content in the kernel, harvested immature at the milk stage and eaten fresh, canned, or frozen rather than dried for grain or feed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sweetcorn belongs to the same species as field maize but carries genetic mutations that slow the conversion of sugar to starch in the kernel, giving it a sweeter taste when harvested at the immature, milk stage rather than left to mature and dry.',
    },
    {
      type: 'paragraph',
      text: 'Unlike grain maize, sweetcorn is grown as a vegetable crop, with production and harvest timing centered on the relatively short window when ears are at peak eating quality.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Zea mays (sweet-type cultivars)' },
    {
      label: 'Primary uses',
      value: 'Fresh, canned, and frozen vegetable corn',
    },
    {
      label: 'Climate',
      value: 'Warm-season; frost-sensitive, requires warm soil for germination',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, well-drained loams and sandy loams',
      note: 'Optimal ranges vary by region and cultivar maturity group.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Sweetcorn is grown for fresh-market, processing (canning and freezing), and home-garden use, with cultivar groups differing in sugar retention, kernel color, and maturity length.',
        },
        {
          type: 'paragraph',
          text: 'Because kernel quality declines quickly after the optimal harvest stage, timing of harvest and rapid post-harvest cooling are important considerations, particularly for fresh-market production.',
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
            { term: 'Family', description: 'Poaceae (grass family)' },
            { term: 'Genus', description: 'Zea' },
            {
              term: 'Principal species',
              description:
                'Zea mays, sweet-type cultivars (var. saccharata and var. rugosa)',
            },
            {
              term: 'Growth habit',
              description:
                'Tall annual grass producing a single main stalk with tassel (male) and ear (female) inflorescences on the same plant',
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
          text: 'Sweetcorn originated from mutations in maize populations grown by Indigenous peoples in the Americas, where maize itself was domesticated thousands of years ago. Sweet types were selected and popularized in North America before spreading globally.',
        },
        {
          type: 'paragraph',
          text: 'Today, sweetcorn is grown widely across temperate and subtropical regions for fresh, canned, and frozen markets, with production data typically reported separately from grain maize statistics at the national level.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sweetcorn is a warm-season crop with no frost tolerance; seed germinates poorly in cold soil, and growth is fastest under warm days and nights with adequate sunlight.',
        },
        {
          type: 'paragraph',
          text: 'Fertile, well-drained loams and sandy loams support strong root and stalk development. Compacted or poorly drained soils restrict rooting and can increase disease pressure.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil temperature at planting is a key practical threshold for sweetcorn establishment and should be checked against local guidance before sowing.',
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
            'Cultivar selection matched to maturity length, sweetness type, and target market (fresh, canning, or freezing)',
            'Block planting rather than long single rows to support adequate wind pollination of ears',
            'Succession sowing used in fresh-market production to extend the harvest window',
            'Isolation from field maize and other corn types where seed and kernel purity matter',
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
          text: 'Nitrogen strongly influences stalk growth, ear development, and yield, making it a central input in sweetcorn nutrition programs, while potassium supports overall plant vigor and stalk strength.',
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
          text: 'Sweetcorn has a high water requirement, particularly around tasseling, silking, and ear fill, when moisture stress can significantly reduce yield and kernel quality.',
        },
        {
          type: 'paragraph',
          text: 'Center-pivot and drip irrigation are both used in commercial production depending on scale and region, with scheduling based on local evapotranspiration estimates.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Common smut, causing distinctive swollen galls on ears, stalks, and tassels, is a well-known disease of sweetcorn and other maize types, and downy mildew of maize can affect foliage in some production regions under favorable conditions. The fall armyworm and European corn borer are major caterpillar pests that damage foliage and ears, and aphids are common sap-feeding pests that can also spread viruses.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Common smut',
              'Disease',
              'Causes swollen galls on ears, stalks, and tassels',
            ],
            [
              'Downy mildew',
              'Disease',
              'Affects foliage under favorable regional conditions',
            ],
            [
              'Fall armyworm',
              'Pest',
              'Caterpillar pest damaging foliage and ears',
            ],
            [
              'European corn borer',
              'Pest',
              'Caterpillar pest boring into stalks and ears',
            ],
            ['Aphids', 'Pest', 'Sap-feeding insects that can spread viruses'],
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
          text: 'Ears are picked at the milk stage, when kernels are plump and sugar content is at its peak, either by hand for fresh-market sale or by mechanical harvester for processing, followed by rapid cooling to preserve sweetness and quality.',
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
            'Fresh ears eaten boiled, grilled, or roasted as a vegetable',
            'Canned and frozen kernels for retail and food-service markets',
            'Ingredient in prepared foods, soups, and salads',
            'Stalks and crop residue sometimes used as livestock forage or soil-incorporated residue after harvest',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'common-smut' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'pest', slug: 'european-corn-borer' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'urea' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'machinery', slug: 'planter' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview; grown widely across temperate and subtropical regions for fresh, canned, and frozen vegetable-corn markets.',
  climateContext:
    'Warm-season annual crop with no frost tolerance, requiring warm soil for germination and consistent moisture through tasseling and ear fill.',
  limitations: [
    'Sweet-type cultivar genetics (sugary, sugary-enhanced, and supersweet types) affect sweetness retention and are not detailed exhaustively here.',
    'Production statistics for sweetcorn are often reported together with or separately from field maize depending on the country, and should be checked against primary national or FAO datasets.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global vegetable and maize-type crop context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-nass', citedFor: 'Sweetcorn production statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Sweetcorn production and pest guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sweetcorn',
    description:
      'A structured, evidence-based reference on sweetcorn: classification, climate needs, cultivation, nutrition, diseases, pests, harvest, and vegetable uses.',
    keywords: [
      'sweetcorn',
      'Zea mays',
      'vegetable crop',
      'sweet corn cultivation',
    ],
  },
  structuredData: { article: true },
};
