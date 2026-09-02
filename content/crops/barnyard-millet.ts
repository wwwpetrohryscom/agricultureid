import type { CropContent } from '@/types/content';

export const barnyardMillet: CropContent = {
  id: 'crop-barnyard-millet',
  slug: 'barnyard-millet',
  contentType: 'crop',
  title: 'Barnyard Millet',
  scientificName: 'Echinochloa frumentacea',
  alternativeNames: ['Indian barnyard millet', 'Sawa millet', 'Sanwa'],
  category: 'Cereal crop',
  subcategory: 'Very short-season small millet',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Barnyard millet ripens faster than any other cultivated cereal — reported at around 45 days under favourable conditions — which makes it the crop of the failed season and the late monsoon rather than of the planned rotation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Barnyard millet is a small millet grown in India, Nepal, China, Japan and Korea, and it is the fastest-maturing cereal in cultivation. Reports put it at around 45 days to ripeness under favourable temperature and moisture, and commonly 45 to 60 days in the field.',
    },
    {
      type: 'paragraph',
      text: "That single number defines the crop's role. It is sown when the monsoon arrives late, when a first sowing has failed, or into a window between two other crops, and it produces grain in a period where no other cereal would reach harvest.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Reported maturity',
      value:
        'Around 45 days under favourable conditions; commonly 45 to 60 days',
    },
    {
      label: 'Position among cereals',
      value: 'The fastest-maturing cultivated cereal',
    },
    {
      label: 'Species',
      value:
        'Echinochloa frumentacea in India; Echinochloa esculenta is the Japanese species',
    },
    {
      label: 'Wild relative',
      value: 'Closely related to the weed Echinochloa crus-galli',
    },
    { label: 'Uses', value: 'Grain for food and the whole plant as fodder' },
  ],
  sections: [
    {
      id: 'speed',
      heading: 'The season length is the crop',
      body: [
        {
          type: 'paragraph',
          text: 'Maturity around 45 days puts barnyard millet outside the comparison other cereals belong to. It is not chosen against rice or maize on yield; it is chosen because those cannot finish in the time available. In the Indian hills it is the crop sown after a delayed monsoon, and in double-cropping systems it fits a gap that would otherwise be fallow.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'two-species',
      heading: 'Two cultivated species, one name',
      body: [
        {
          type: 'paragraph',
          text: 'Indian barnyard millet is Echinochloa frumentacea and Japanese barnyard millet is Echinochloa esculenta, and both are called barnyard millet in English. They were domesticated separately from different wild ancestors, and agronomic and germplasm records for one do not describe the other.',
        },
      ],
    },
    {
      id: 'weed-relative',
      heading: 'A crop with a notorious weed for a relative',
      body: [
        {
          type: 'paragraph',
          text: 'Echinochloa crus-galli, barnyard grass, is one of the most damaging weeds of rice worldwide, and it is closely related to the cultivated barnyard millets. In the field the crop and the weed are difficult to distinguish at the seedling stage, which makes weeding a skilled job and makes seed purity a genuine issue.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'fodder',
      heading: 'Grain and fodder from one crop',
      body: [
        {
          type: 'paragraph',
          text: "The straw is palatable and the whole crop is also cut green for fodder, so a planting can be taken either way depending on how the season turns out. That optionality is part of the crop's value in mixed farming systems, where the decision can be made late.",
        },
      ],
    },
    {
      id: 'altitude',
      heading: 'Hill agriculture',
      body: [
        {
          type: 'paragraph',
          text: 'In India the crop is concentrated in the Himalayan foothills and central hill districts, where the season is short and the ground is poor. Its role there is a staple in rainfed systems rather than a niche grain, and most of the research on it comes from Indian institutions working in those regions.',
        },
      ],
    },
    {
      id: 'small-seed',
      heading: 'A very small seed',
      body: [
        {
          type: 'paragraph',
          text: 'The grain is small and husked, and dehulling small millets is the main post-harvest constraint on their use: hand pounding is slow and the machinery that suits rice does not suit them. Dehulling equipment for small millets is a stated development priority and a real barrier to expanding the crop.',
        },
      ],
    },
    {
      id: 'diversity',
      heading: 'A large and lightly used germplasm base',
      body: [
        {
          type: 'paragraph',
          text: 'Indian national genebank collections hold well over a thousand accessions of this species, and phenotyping work on them is recent. Formal varietal improvement is thin relative to that diversity, which is the ordinary position of a small millet: much material, little breeding.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'water',
      heading: 'Water and waterlogging',
      body: [
        {
          type: 'paragraph',
          text: 'The crop tolerates both drought and short periods of waterlogging better than most cereals, which suits the uncertain rainfall of the systems it is grown in. It is that tolerance of both extremes, rather than exceptional performance in either, that keeps it in the rotation.',
        },
      ],
    },
    {
      id: 'blast',
      heading: 'Disease',
      body: [
        {
          type: 'paragraph',
          text: "Blast and grain smut are the diseases most often reported, and blast affects millets across the group. Because the crop is in the field for so short a time, disease pressure builds less than in a long-season cereal, which is a secondary benefit of the crop's speed.",
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'rice-blast' },
    { type: 'plant-disease', slug: 'common-smut' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'foxtail-millet' },
    { type: 'crop', slug: 'proso-millet' },
    { type: 'crop', slug: 'finger-millet' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'India and Nepal, where it is a hill-country staple, and Japan, Korea and China for the related Echinochloa esculenta.',
  climateContext:
    'Warm-season rainfed cereal; tolerant of both drought and short waterlogging, and grown where the season is too short for other cereals.',
  limitations: [
    'Maturity figures are reported ranges from trial and review literature and depend on temperature and moisture.',
    'The two cultivated Echinochloa species share an English name and records for one should not be read as describing the other.',
    'Formal varietal recommendations are regional and are not reproduced here.',
  ],
  sourceReferences: [
    {
      sourceId: 'icar',
      citedFor: 'Indian small millet agronomy and germplasm',
    },
    { sourceId: 'cgiar', citedFor: 'Small millet germplasm research' },
    { sourceId: 'cabi', citedFor: 'Echinochloa frumentacea compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'Millet production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Barnyard Millet',
    description:
      'Echinochloa frumentacea as a crop: the fastest-maturing cultivated cereal, two species under one name, a weedy close relative and small-millet dehulling.',
    keywords: [
      'barnyard millet',
      'Echinochloa frumentacea',
      'sawa millet',
      'fastest maturing cereal',
      'small millet',
    ],
  },
  structuredData: { article: true },
};
