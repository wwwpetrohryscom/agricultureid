import type { CropContent } from '@/types/content';

export const kohlrabi: CropContent = {
  id: 'crop-kohlrabi',
  slug: 'kohlrabi',
  contentType: 'crop',
  title: 'Kohlrabi',
  scientificName: 'Brassica oleracea (Gongylodes group)',
  alternativeNames: ['German turnip', 'Turnip cabbage', 'Knol-khol'],
  category: 'Vegetable crop',
  subcategory: 'Swollen-stem brassica',
  botanicalFamily: 'Brassicaceae (cabbage family)',
  lifecycle: 'Biennial, grown as an annual',
  summary:
    'Kohlrabi is a cool-season brassica grown for its swollen, edible stem, a fast-maturing crop of the cabbage family eaten raw or cooked, valued for its mild, crisp, turnip-like flesh.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kohlrabi is a cool-season vegetable of the cabbage family grown for its distinctive swollen stem, which forms a rounded, bulb-like structure just above the soil. Despite its turnip-like appearance and name, the edible part is a modified stem, not a root, and it is eaten raw or cooked for its mild, sweet, crisp flesh.',
    },
    {
      type: 'paragraph',
      text: 'A member of the same species as cabbage, broccoli, and cauliflower, kohlrabi is fast-maturing and relatively easy to grow, and it comes in pale green (white) and purple-skinned forms. As a brassica, it shares many pests and diseases with its relatives, making crop rotation important.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (cabbage family)' },
    { label: 'Life cycle', value: 'Biennial, grown as an annual' },
    { label: 'Scientific name', value: 'Brassica oleracea (Gongylodes group)' },
    {
      label: 'Primary uses',
      value: 'Swollen stem eaten raw or cooked; young leaves also edible',
    },
    {
      label: 'Climate',
      value: 'Cool-season; fast-maturing and moderately hardy',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, moisture-retentive, well-drained loams; firm seedbed',
      note: 'Steady growth on rich, moist soils gives tender, non-fibrous stems.',
    },
    {
      label: 'Edible part',
      value: 'A swollen stem (not a root), formed above the soil surface',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Kohlrabi is grown for its swollen stem, harvested while still tender and crisp. Its rapid growth suits it to succession sowing and to filling short gaps in vegetable rotations, and it can be grown in spring, autumn, and, in mild areas, over winter.',
        },
        {
          type: 'paragraph',
          text: 'Steady, uninterrupted growth is the key to quality: stress or slow growth makes the stem woody and fibrous, so consistent moisture and fertility are emphasised.',
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
            {
              term: 'Family',
              description: 'Brassicaceae (cabbage or mustard family)',
            },
            {
              term: 'Botanical name',
              description: 'Brassica oleracea (Gongylodes group)',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial forming a swollen edible stem above ground, topped by long-stalked leaves; bolts to flower under stress or in its second year',
            },
            {
              term: 'Relatives',
              description:
                'The same species as cabbage, broccoli, cauliflower, and kale',
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
          text: 'Kohlrabi was developed in Europe from the wild cabbage lineage that gave rise to the diverse Brassica oleracea vegetables, and it is grown widely across Europe, Asia, and other temperate regions, being particularly popular in parts of central Europe and South and East Asia.',
        },
        {
          type: 'paragraph',
          text: 'Because it is a fresh vegetable, detailed production statistics are limited; available figures are compiled by FAO and national agencies and should be consulted directly.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Kohlrabi is a cool-season crop that grows best in mild conditions and is moderately frost-hardy, making it suitable for spring and autumn cropping and, in mild climates, winter production. Its fast maturity allows it to be fitted into short growing windows.',
        },
        {
          type: 'paragraph',
          text: 'Exposure of young plants to prolonged cold can trigger premature bolting, so sowing timing is chosen to avoid cold checks during establishment.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Kohlrabi grows best on fertile, moisture-retentive, well-drained loams with a firm seedbed. As with other brassicas, a soil pH that is not too acidic helps reduce the risk of clubroot, an important soilborne disease of the family.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rich, consistently moist soils keep kohlrabi growing steadily, producing tender stems; checks to growth make the stem woody.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Kohlrabi is direct-seeded or transplanted, in successional sowings for a continuous supply. Rotation away from other brassicas and attention to soil pH help manage clubroot and other shared problems, and steady growth is maintained for quality.',
        },
        {
          type: 'list',
          items: [
            'Successional sowing or transplanting for a continuous supply',
            'Rotation away from other brassicas to manage clubroot and shared pests',
            'Firm, fertile, moisture-retentive seedbed and steady growth for tender stems',
            'Timely harvest before the swollen stem becomes woody',
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
          text: 'Kohlrabi responds to fertile soils, with adequate nitrogen supporting rapid growth and balanced nutrition contributing to firm, tender stems. As a brassica, it can be sensitive to deficiencies of nutrients such as boron on some soils.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Consistent moisture is important to keep kohlrabi growing steadily and to prevent the stem from becoming woody or splitting, and irrigation is used where rainfall is insufficient. Uneven watering can cause growth checks and cracking of the swollen stem.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Clubroot, a soilborne disease causing swollen, distorted roots, is a major constraint on kohlrabi and other brassicas, managed largely through rotation, drainage, and soil pH. Downy mildew, damping-off, and bacterial diseases such as black rot also affect the crop.',
        },
        {
          type: 'paragraph',
          text: 'Flea beetles pit the leaves of young plants, and aphids (including the cabbage aphid), caterpillars, cutworms, and cabbage root fly also damage the crop. Management combines rotation, protection such as netting, sanitation, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Kohlrabi is harvested by cutting the swollen stem while it is still tender, typically at a young, moderate size before it becomes woody, though some modern types remain tender at a larger size. Trimmed stems are cooled and marketed, and young leaves can also be used.',
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
            'Swollen stem eaten raw, grated or sliced in salads and slaws',
            'Stem cooked in soups, stir-fries, roasts, and braises',
            'Young, tender leaves cooked as greens',
            'A fast, space-efficient vegetable for gardens and market production',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'broccoli' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'climate', slug: 'frost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'cultivar',
    'soil-ph',
    'yield',
  ],
  geographicScope:
    'Global overview across temperate regions, with particular popularity in central Europe and parts of Asia.',
  climateContext:
    'Cool-season, fast-maturing brassica; moderately frost-hardy; cold checks to young plants can trigger bolting.',
  limitations: [
    'Sowing timing to avoid bolting and woodiness is region-specific and not reduced to universal guidance here.',
    'Clubroot pressure depends strongly on rotation history, drainage, and soil pH.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of kohlrabi among brassica vegetables' },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification and nomenclature of Brassica oleracea',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Kohlrabi crop, disease, and pest compendium data',
    },
    { sourceId: 'rhs', citedFor: 'Kohlrabi cultivation guidance' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Kohlrabi (Brassica oleracea, Gongylodes)',
    description:
      'An evidence-based reference on kohlrabi: swollen-stem brassica botany, cool-season agronomy, soils, clubroot, flea beetles, harvest, and culinary uses.',
    keywords: [
      'kohlrabi',
      'Brassica oleracea',
      'German turnip',
      'swollen stem',
    ],
  },
  structuredData: { article: true },
};
