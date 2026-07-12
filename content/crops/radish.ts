import type { CropContent } from '@/types/content';

export const radish: CropContent = {
  id: 'crop-radish',
  slug: 'radish',
  contentType: 'crop',
  title: 'Radish',
  scientificName: 'Raphanus sativus',
  alternativeNames: ['Garden radish', 'Daikon (large-rooted types)'],
  category: 'Vegetable crop',
  subcategory: 'Root brassica',
  botanicalFamily: 'Brassicaceae (mustard family)',
  lifecycle: 'Annual (fast-maturing root crop)',
  summary:
    'Radish is a fast-maturing brassica root vegetable grown for its crisp, pungent taproot, notable for one of the shortest times from sowing to harvest of any common vegetable.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Radish is grown for its swollen taproot, which ranges across cultivars from small, round, brightly colored spring types to large, elongated daikon and winter radish types. It belongs to the mustard family along with cabbage, broccoli, and related brassicas.',
    },
    {
      type: 'paragraph',
      text: 'Small spring-type radishes are among the fastest-maturing common vegetables, often ready for harvest within a few weeks of sowing, while larger winter and daikon types require a longer growing period to reach full root size.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (mustard family)' },
    { label: 'Life cycle', value: 'Annual; small types mature very quickly' },
    { label: 'Main species', value: 'Raphanus sativus' },
    {
      label: 'Primary uses',
      value: 'Fresh-market root vegetable, salads, pickling',
    },
    {
      label: 'Climate',
      value:
        'Cool-season for best root quality; some types tolerate warmer conditions',
    },
    {
      label: 'Soil preference',
      value: 'Loose, well-drained, stone-free soils',
      note: 'Compacted or stony soils cause forked or misshapen roots.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Radish is grown as a fast, direct-seeded root crop, valued for quick turnover in rotation and succession planting; small spring types can often be sown and harvested multiple times within a single season in suitable climates.',
        },
        {
          type: 'paragraph',
          text: 'Production ranges from small-scale succession plantings for fresh markets to larger-scale cultivation of winter and daikon types, which are important vegetables in several Asian cuisines and are stored and processed on a larger scale than spring radish.',
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
            { term: 'Family', description: 'Brassicaceae (mustard family)' },
            { term: 'Genus', description: 'Raphanus' },
            {
              term: 'Principal species',
              description: 'Raphanus sativus (cultivated radish)',
            },
            {
              term: 'Growth habit',
              description:
                'Fast-growing annual broadleaf plant producing a swollen taproot; cultivar groups vary widely in root size, shape, and color',
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
          text: "Radish is believed to have originated in Southeast Asia or the eastern Mediterranean, with cultivation and diversification occurring across Asia and Europe over a very long history, producing today's wide range of root sizes, shapes, and colors adapted to different regional cuisines.",
        },
        {
          type: 'paragraph',
          text: 'It is now grown worldwide, from small home-garden plantings to significant commercial production of daikon and winter types in parts of Asia; production and trade figures change over time and are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Radish generally favors cool growing conditions for the best root texture and flavor; warm temperatures can accelerate bolting and produce smaller, more pungent, or pithy roots in many cultivars, though some heat-tolerant types are bred for warmer seasons.',
        },
        {
          type: 'paragraph',
          text: 'Its short duration to maturity, particularly in spring types, allows sowing across a wide window in temperate climates, fitting easily between other crops.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Radish requires loose, well-drained, stone-free soil to develop a smooth, well-shaped root; compacted, cloddy, or stony soils commonly cause forking, splitting, or misshapen roots that reduce market quality.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Fine seedbed preparation is particularly important for this crop given its direct effect on root shape. Soil suitability should be assessed with local soil survey information where available.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: "Radish is direct-seeded, since the crop does not transplant well once its taproot has begun developing, sown shallowly into a fine, loose seedbed at a spacing appropriate to the cultivar's eventual root size.",
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to root size, maturity speed, and local season',
            'Succession sowing of spring types to provide a continuous harvest',
            'Thinning where needed to avoid crowding, which can produce small or misshapen roots',
            'Crop rotation with non-brassica crops to manage soil-borne disease and pest carryover',
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
          text: 'Boron and potassium both support healthy root development, while excessive nitrogen can favor leafy top growth at the expense of root size in this fast-maturing crop.',
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
          text: 'Consistent moisture supports even root development and helps prevent splitting, since fluctuating water availability — particularly a dry period followed by heavy watering — is a common cause of root cracking in radish.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Clubroot and downy mildew, both typical brassica diseases, can affect radish under favorable conditions. Flea beetles are a particularly common pest of seedling radish, riddling leaves with small holes, while root-knot nematode can affect root quality in infested soils.',
        },
        {
          type: 'paragraph',
          text: 'Management combines crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Radish is harvested by pulling once roots reach the desired size, with spring types typically harvested young and small for the best texture, and winter and daikon types left to grow larger before lifting.',
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
            'Fresh-market vegetable, eaten raw in salads or as a garnish',
            'Pickled and fermented products, particularly for larger winter and daikon types',
            'Cooked vegetable in some regional cuisines',
            'Sprouted seed used as a specialty salad ingredient',
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
    { type: 'pest', slug: 'root-knot-nematode' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'beetroot' },
    { type: 'crop', slug: 'carrot' },
  ],
  glossaryTerms: ['annual-crop', 'soil-texture', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season root vegetable, generally best in mild temperatures; some types tolerate warmer conditions.',
  limitations: [
    'Root size, shape, and time to maturity vary enormously across spring and winter/daikon cultivar types; this entry is a general overview.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of radish in vegetable production systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Radish and brassica disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for radish',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Radish',
    description:
      'A structured, evidence-based reference on radish: classification, fast-maturing root cultivation, soil needs, diseases, pests, and uses.',
    keywords: ['radish', 'Raphanus sativus', 'root vegetable', 'brassica crop'],
  },
  structuredData: { article: true },
};
