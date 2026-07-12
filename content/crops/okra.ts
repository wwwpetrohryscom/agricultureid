import type { CropContent } from '@/types/content';

export const okra: CropContent = {
  id: 'crop-okra',
  slug: 'okra',
  contentType: 'crop',
  title: 'Okra',
  scientificName: 'Abelmoschus esculentus',
  alternativeNames: ["Lady's finger", 'Gumbo'],
  category: 'Vegetable crop',
  subcategory: 'Warm-season fruiting vegetable',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Annual',
  summary:
    'Okra is a warm-season fruiting vegetable grown for its ridged, mucilaginous seed pods, valued for strong heat and drought tolerance across tropical, subtropical, and warm-temperate regions.',
  introduction: [
    {
      type: 'paragraph',
      text: "Okra is grown for its immature seed pods, harvested while young and tender, since older pods become fibrous and woody. It belongs to the mallow family, the same family as cotton, and shares that family's general tolerance for warm, sunny conditions.",
    },
    {
      type: 'paragraph',
      text: 'The crop is notably heat- and drought-tolerant relative to many other vegetables, making it an important warm-season crop in tropical and subtropical smallholder systems as well as home gardens and specialty markets in temperate regions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Abelmoschus esculentus' },
    {
      label: 'Primary uses',
      value: 'Fresh and cooked vegetable; dried and processed pod products',
    },
    {
      label: 'Climate',
      value: 'Warm-season; strong heat and reasonable drought tolerance',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams',
      note: 'Tolerant of a range of soils given adequate warmth.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Okra is grown as a warm-season annual valued for continuous pod production over an extended harvest period once flowering begins, similar in this respect to other warm-season fruiting vegetables.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from smallholder and home-garden cultivation in many tropical and subtropical countries to larger-scale commercial production supplying fresh and processing markets.',
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
            { term: 'Genus', description: 'Abelmoschus' },
            {
              term: 'Principal species',
              description: 'Abelmoschus esculentus (okra)',
            },
            {
              term: 'Growth habit',
              description:
                'Upright, branching warm-season annual bearing ridged, tapering seed pods',
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
          text: 'Okra is believed to have originated in Africa, with a long history of cultivation there before spreading to Asia, the Middle East, and the Americas through historical trade and, in the case of the Americas, the transatlantic slave trade. It remains an important crop across many tropical and subtropical regions today.',
        },
        {
          type: 'paragraph',
          text: 'Production and trade figures change over time and by region; current data are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Okra requires warm to hot temperatures throughout its growing period and is notably tolerant of heat that would stress many other vegetable crops, along with reasonable tolerance of intermittent drought once established.',
        },
        {
          type: 'paragraph',
          text: 'It is sensitive to cold and frost, so field planting is timed to the local frost-free period with soil already warmed.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Okra tolerates a fairly wide range of soil types provided drainage is adequate, performing well on well-drained loams and sandy loams, and is comparatively forgiving of moderate soil fertility limitations.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Okra is typically direct-seeded after soil has warmed, since seedlings are sensitive to cold soil, though transplants are used in some regions to gain an earlier start.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to pod shape, spine type, and local season length',
            'Crop rotation to manage soil-borne disease and pest carryover, particularly with other Malvaceae such as cotton',
            "Adequate plant spacing to support the crop's often tall, branching growth habit",
            'Frequent harvesting, since pods can quickly overmature and become fibrous',
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
          text: 'Nitrogen supports vegetative growth and sustained pod production, while potassium contributes to pod quality over the extended harvest period typical of the crop.',
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
          text: 'Okra is grown both rain-fed and under irrigation, showing reasonable tolerance of short dry periods once established, though consistent moisture during flowering and pod development supports more reliable yield and pod quality. Drip irrigation is commonly used where available.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew can affect foliage under favorable conditions, and fusarium wilt is a significant soil-borne disease risk in some regions. Aphids are a common pest, while stink bugs feed on developing pods and can affect quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Okra pods are harvested while young and tender, typically within a few days of flowering, since pods left longer on the plant quickly become fibrous and lose market quality. Frequent picking, often daily during peak season, is typical for continued production.',
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
            'Fresh and cooked vegetable, valued for its mucilaginous texture in many cuisines',
            'Dried, pickled, and frozen processed products',
            'Seed used in some regions as a coffee substitute or for oil extraction',
            'Fibrous stems used traditionally for cordage in some producing regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'stink-bugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'drought' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'growing-season' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'eggplant' },
    { type: 'crop', slug: 'zucchini' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'host-plant', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Warm-season vegetable with strong heat tolerance and reasonable drought tolerance; sensitive to cold and frost.',
  limitations: [
    'Harvest frequency needed to keep pods tender is high and region- and cultivar-specific rather than fixed.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of okra in warm-climate vegetable production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Okra disease and pest compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for okra',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Okra',
    description:
      'A structured, evidence-based reference on okra: classification, heat and drought tolerance, soil needs, diseases, pests, harvest, and uses.',
    keywords: [
      'okra',
      'Abelmoschus esculentus',
      'warm-season vegetable',
      'mallow family',
    ],
  },
  structuredData: { article: true },
};
