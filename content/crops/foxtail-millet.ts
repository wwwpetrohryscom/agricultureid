import type { CropContent } from '@/types/content';

export const foxtailMillet: CropContent = {
  id: 'crop-foxtail-millet',
  slug: 'foxtail-millet',
  contentType: 'crop',
  title: 'Foxtail Millet',
  scientificName: 'Setaria italica',
  alternativeNames: ['Italian millet', 'Korakan (regional)'],
  category: 'Cereal grain',
  subcategory: 'Small millet',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Foxtail millet is the fastest of the cultivated cereals to maturity, which makes it the crop sown when something else has failed and the season is already half gone.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Foxtail millet completes a crop in a very short season, and that is its agricultural function. It is grown as a staple across parts of China and India, and it is grown almost everywhere else as a contingency — the crop put in when the monsoon arrives late, when a first sowing fails, or when a field comes free too late for anything slower.',
    },
    {
      type: 'paragraph',
      text: 'It is a C4 grass of dry country, undemanding of fertility, and it produces something on land and in seasons that would otherwise yield nothing.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Photosynthetic pathway', value: 'C4' },
    {
      label: 'Distinguishing trait',
      value: 'Among the shortest seasons of any cultivated cereal',
    },
    {
      label: 'Principal regions',
      value: 'Northern China, India and parts of the Korean peninsula',
    },
    {
      label: 'Secondary use',
      value: 'Widely grown as birdseed and as a short-season forage',
    },
    { label: 'Storage', value: 'Keeps well; a traditional reserve grain' },
  ],
  sections: [
    {
      id: 'short-season',
      heading: 'The season is the point',
      body: [
        {
          type: 'paragraph',
          text: 'Foxtail millet matures faster than sorghum, pearl millet or maize, and that speed is why it exists in the rotation. A crop that can be sown late and still finish converts a failed season into a partial one, which in subsistence systems is the difference between a shortfall and nothing.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'china',
      heading: 'A staple with a long history',
      body: [
        {
          type: 'paragraph',
          text: 'Foxtail millet was among the founding crops of northern Chinese agriculture and remains a staple grain there and in parts of India, eaten as porridge, as steamed grain and in fermented preparations. Its status as a minor crop in world statistics reflects trade rather than the number of people who eat it.',
        },
      ],
    },
    {
      id: 'drought',
      heading: 'Drought escape rather than drought tolerance',
      body: [
        {
          type: 'paragraph',
          text: 'The crop deals with dry conditions largely by finishing before the water runs out. That is a different strategy from sorghum, which endures drought while standing, and it means foxtail millet suits erratic rainfall better than prolonged drought.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Small seed and weak seedlings',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is very small and must be sown shallow into a fine, firm seedbed; deep sowing is the usual cause of failure. Seedlings compete poorly for the first weeks, so early weeding is the crop’s largest labour demand, as it is across the small millets.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'fertility',
      heading: 'Low input by design',
      body: [
        {
          type: 'paragraph',
          text: 'Foxtail millet responds to nitrogen but is grown in systems where little is applied, and it produces acceptably on soils too poor for a demanding cereal. Heavy nitrogen produces lodging in a thin-stemmed crop that gains little from it.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'birdseed',
      heading: 'The other market',
      body: [
        {
          type: 'paragraph',
          text: 'A large part of world foxtail millet production goes into birdseed rather than human food, which is why trade figures and consumption figures describe different crops. A grower may be selling into either market, and the quality specification differs.',
        },
      ],
    },
    {
      id: 'forage',
      heading: 'Grown as fodder',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is also cut for hay and green fodder, sometimes as a catch crop between main crops, and forage types differ from grain types in habit and in harvest timing. The dual use is one reason area statistics for it are unreliable.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest and threshing',
      body: [
        {
          type: 'paragraph',
          text: 'The panicle is dense and holds its grain reasonably well, so the harvest window is not as tight as in shattering-prone millets. Threshing and cleaning of very small grain is laborious at smallholder scale, and it is the step where losses concentrate.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Why it is kept',
      body: [
        {
          type: 'paragraph',
          text: 'Foxtail millet stores well in traditional stores with low insect damage, which is a large part of its value in systems without formal storage. A grain that can be held between seasons is worth more to a household than its yield alone suggests.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'winnowing' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'finger-millet' },
    { type: 'crop', slug: 'sorghum' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Northern China, India, Korea and parts of Central Asia, with birdseed production in Europe and North America.',
  climateContext:
    'Warm-season C4 cereal of dry country; escapes drought through a short season rather than enduring it.',
  limitations: [
    'Production statistics conflate grain, birdseed and forage use and are not reliable as food-crop figures.',
    'Season length varies substantially between types and environments; the comparison with other cereals is qualitative here.',
    'A large share of production is consumed on farm and does not enter reported statistics.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Small millet production and food use' },
    {
      sourceId: 'icar',
      citedFor: 'Indian small millet agronomy and varieties',
    },
    { sourceId: 'cgiar', citedFor: 'Millet improvement research' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Setaria italica compendium data' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Foxtail Millet',
    description:
      'Setaria italica as a crop: the shortest-season cultivated cereal, a staple in China and India, drought escape, and the birdseed market that dominates trade.',
    keywords: [
      'foxtail millet',
      'Setaria italica',
      'small millet',
      'short-season cereal',
      'catch crop',
    ],
  },
  structuredData: { article: true },
};
