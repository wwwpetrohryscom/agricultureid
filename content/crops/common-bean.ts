import type { CropContent } from '@/types/content';

export const commonBean: CropContent = {
  id: 'crop-common-bean',
  slug: 'common-bean',
  contentType: 'crop',
  title: 'Common Bean',
  scientificName: 'Phaseolus vulgaris',
  alternativeNames: ['Dry bean', 'Snap bean', 'Kidney bean', 'Green bean'],
  category: 'Legume crop',
  subcategory: 'Grain and pulse legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Common bean is an annual legume grown worldwide for its edible seeds and pods, valued as a major dietary protein source and for its symbiotic nitrogen fixation in cropping systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Common bean is grown either for dry, mature seed — used for direct food consumption — or as a fresh, immature "snap" or "green" bean harvested for its pod. A single species, Phaseolus vulgaris, encompasses an unusually wide range of seed colors, sizes, and shapes across market classes.',
    },
    {
      type: 'paragraph',
      text: 'As a legume, common bean forms a symbiotic relationship with Rhizobium bacteria in root nodules, allowing the crop to fix atmospheric nitrogen, though the extent of fixation is generally more modest than in some other grain legumes and depends on effective nodulation.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Phaseolus vulgaris' },
    {
      label: 'Primary uses',
      value:
        'Dry beans for direct food use and canning; fresh snap beans as a vegetable',
    },
    {
      label: 'Climate',
      value:
        'Warm-season; frost-sensitive, with flowering and pod set vulnerable to heat stress',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams; sensitive to waterlogging and compaction',
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
          text: 'Common bean is grown across a very wide range of market classes, from small-seeded black and navy beans to large kidney and pinto types, as well as fresh snap bean cultivars bred for tender, stringless pods rather than seed quality.',
        },
        {
          type: 'paragraph',
          text: 'Growth habit varies between compact bush types, harvested in a single pass, and climbing (pole) types trained on supports, which typically produce over a longer period.',
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
            { term: 'Genus and species', description: 'Phaseolus vulgaris' },
            {
              term: 'Root system',
              description:
                'Taproot bearing nodules that host nitrogen-fixing Rhizobium bacteria',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Common growth habits',
          columns: ['Growth habit', 'Description', 'Typical management'],
          rows: [
            [
              'Bush (determinate)',
              'Compact, self-supporting plants that stop vegetative growth after flowering begins',
              'Often harvested in a single pass, with or without mechanical harvesters',
            ],
            [
              'Climbing / pole (indeterminate)',
              'Vining plants that continue vegetative growth and flowering over an extended period',
              'Typically trained on stakes, poles, or trellises; harvested repeatedly',
            ],
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
          text: 'Common bean was domesticated independently in Mesoamerica and in the Andean region of South America, making it a staple food crop across the Americas for millennia before European contact. It subsequently spread worldwide following the Columbian Exchange.',
        },
        {
          type: 'paragraph',
          text: 'Common bean is now grown across a broad range of climates on every populated continent. Current statistics on planted area, production, and trade by country are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Common bean is a warm-season crop sensitive to frost, requiring a frost-free period to complete its cycle. Flowering and pod set are notably vulnerable to heat stress, and high temperatures during this window can reduce pod number and seed set.',
        },
        {
          type: 'paragraph',
          text: 'Because of this sensitivity, planting timing and cultivar maturity are matched to local frost-free window length and expected temperature patterns during flowering.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Common bean performs best on well-drained loams with good structure. It is sensitive to waterlogging and soil compaction, both of which restrict root and nodule development and increase the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil drainage and structure should be assessed with local soil survey data, since both affect nodulation and disease risk.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'In fields without a recent history of bean production, seed may be treated with a compatible rhizobial inoculant to support effective nodulation. Growth habit — bush or climbing — determines spacing and whether support structures are needed.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to market type (dry or snap bean) and local frost-free period',
            'Inoculation with compatible Rhizobium strains in fields new to bean production',
            'Crop rotation, commonly with cereals, to manage soilborne diseases and pests',
            'Support structures for climbing types, where used',
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
          text: 'Biological nitrogen fixation can supply part of the crop’s nitrogen requirement where nodulation is effective, though generally less than in some other grain legumes. Phosphorus supports root and nodule development, and requirements depend on soil supply and target yield.',
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
          text: 'Common bean is grown both rain-fed and under irrigation. Moisture stress during flowering and pod fill is a key yield-limiting factor, and consistent water supply during this period is important where irrigation is available.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate data, following reference methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose is a major, often seed-transmitted fungal disease of common bean, and a complex of soilborne fungi can cause root rot, particularly under wet or compacted conditions. Aphids and root-knot nematodes are among the notable pests affecting the crop.',
        },
        {
          type: 'paragraph',
          text: 'Management combines the use of disease-free seed, resistant cultivars, crop rotation, field monitoring, and, where warranted, locally authorized control measures applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Dry beans are harvested once pods and seeds have matured and dried to a moisture content suitable for threshing and safe storage, typically by combining or hand harvest depending on scale. Snap beans are picked immature, at peak pod fill, often over multiple passes.',
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
            'Dry, mature seed used directly as a staple food and in canned bean products',
            'Fresh, immature pods (snap or green beans) used as a vegetable',
            'Bean flour and other processed food ingredients in some markets',
            'Crop residues used in some systems as animal feed or returned to the soil',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pea' },
    { type: 'crop', slug: 'soybean' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'frost' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'inoculum', 'macronutrient'],
  geographicScope:
    'Global overview. Market class, growth habit, and input levels are region-specific and depend on local climate and market.',
  climateContext:
    'Warm-season legume sensitive to frost and to heat stress at flowering; grown rain-fed and under irrigation across many climates.',
  limitations: [
    'Market class and growth habit selection are region- and market-specific decisions not reduced to universal guidance here.',
    'Nitrogen fixation reduces, but does not eliminate, the need for supplemental nitrogen in many soils.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of common bean in global food systems' },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'uc-ipm', citedFor: 'Integrated pest management for beans' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Bean production and disease guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Common Bean',
    description:
      'An evidence-based reference on common bean: classification, nitrogen fixation, climate and soil needs, diseases, pests, and food uses.',
    keywords: [
      'common bean',
      'Phaseolus vulgaris',
      'pulse legume',
      'bean agronomy',
    ],
  },
  structuredData: { article: true },
};
