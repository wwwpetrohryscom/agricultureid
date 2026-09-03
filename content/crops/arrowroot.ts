import type { CropContent } from '@/types/content';

export const arrowroot: CropContent = {
  id: 'crop-arrowroot',
  slug: 'arrowroot',
  contentType: 'crop',
  title: 'Arrowroot',
  scientificName: 'Maranta arundinacea',
  alternativeNames: [
    'West Indian arrowroot',
    'Bermuda arrowroot',
    'Maranta starch',
  ],
  category: 'Root and tuber crop',
  subcategory: 'Rhizome crop grown for extracted starch',
  botanicalFamily: 'Marantaceae',
  lifecycle: 'Perennial grown on a long annual cycle',
  summary:
    'Arrowroot is a rhizome crop grown almost entirely for extracted starch, dug after ten to twelve months and processed within days because the rhizome deteriorates fast once lifted.',
  introduction: [
    {
      type: 'paragraph',
      text: "Arrowroot is unusual among the corpus's root crops in that the rhizome is rarely eaten as such. It is grown to be washed, rasped and settled into a very fine white starch, and the crop's economics are the economics of that extraction: yield is measured in starch rather than in fresh weight, and a crop that cannot reach a processing point quickly is worth little.",
    },
    {
      type: 'paragraph',
      text: 'The plant is a perennial of the Marantaceae grown on a ten to twelve month cycle from rhizome pieces. Its long season and its dependence on prompt processing have kept it a smallholder crop tied to local starch works rather than one that has scaled into international trade.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Marantaceae' },
    {
      label: 'Life cycle',
      value: 'Perennial, lifted on a ten to twelve month cycle',
    },
    { label: 'Scientific name', value: 'Maranta arundinacea' },
    { label: 'Harvested part', value: 'Rhizome, processed for starch' },
    { label: 'Propagation', value: 'Rhizome pieces with a bud, not seed' },
    {
      label: 'Perishability',
      value: 'Rhizomes deteriorate within days of lifting',
    },
    { label: 'Climate', value: 'Humid tropics with a long growing season' },
  ],
  sections: [
    {
      id: 'starch',
      heading: 'A crop grown to be extracted',
      body: [
        {
          type: 'paragraph',
          text: "Arrowroot starch is prized for very small granule size and bland flavour, which is why it survives in specialist food and, historically, in invalid and infant diets. The grower's product is a rhizome; the market's product is a powder. Every decision in the crop — planting density, lifting date, distance to the mill — is made against starch recovery rather than fresh tonnage, and a fresh-weight yield figure on its own tells a reader very little.",
        },
      ],
    },
    {
      id: 'lift-and-process',
      heading: 'Lifted and processed within days',
      body: [
        {
          type: 'paragraph',
          text: 'Once out of the ground the rhizome loses starch quality quickly and cannot be stored in the way a yam or a cassava root can be for a time. Harvest is therefore staged against processing capacity rather than against the calendar alone, and the crop has historically been grown within reach of a starch works. This is the same constraint that shapes cassava for starch, and it is sharper here.',
        },
      ],
    },
    {
      id: 'long-season',
      heading: 'Ten to twelve months in the ground',
      body: [
        {
          type: 'paragraph',
          text: 'The rhizome fills late, so lifting early costs starch disproportionately. A season of that length ties up land for most of a year and rules the crop out of short rotations, which is one reason it occupies marginal and garden land more often than field land.',
        },
      ],
    },
    {
      id: 'planting-material',
      heading: 'Propagated from its own crop',
      body: [
        {
          type: 'paragraph',
          text: 'Planting material is rhizome pieces held back from the harvest, so seed cost is a yield cost and disease travels with the planting material from one cycle to the next. A grower expanding an area is not buying seed but foregoing starch.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: 'A long-season rhizome crop draws on soil reserves over many months and responds to organic matter on the light soils it is usually grown on. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: 'Rhizome rots in poorly drained ground and nematodes in continuously cropped soils are the main constraints; foliar problems are secondary in a crop grown for an underground organ. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'Deep, friable, well-drained soils allow the rhizome to expand and to be lifted whole, and drainage matters more than fertility. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Rotation and continuous cropping',
      body: [
        {
          type: 'paragraph',
          text: 'Continuous arrowroot builds up nematodes and rhizome rots, and because planting material comes from the previous crop the problem is carried forward as well as left behind. Growers who rotate the crop have to find something else to occupy ground for the intervening period, which on small holdings is the binding constraint.',
        },
      ],
    },
    {
      id: 'decline',
      heading: 'A crop that lost its market',
      body: [
        {
          type: 'paragraph',
          text: 'Arrowroot starch was a significant Caribbean export in the nineteenth and early twentieth centuries and lost most of that market to cheaper maize and cassava starches. What remains is a specialist trade, and the crop persists where a local starch works and a local market for a fine starch both survive.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'ferralsol' },
  ],
  connections: [
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'taro' },
    { type: 'crop', slug: 'sweet-potato' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'taro' },
    { type: 'crop', slug: 'tannia' },
    { type: 'crop', slug: 'sweet-potato' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation', 'cultivar'],
  geographicScope:
    'Grown in the Caribbean, in West Africa, in South and South East Asia and in parts of the Pacific. The FAO Crop Calendar records sowing and harvest windows in three countries.',
  climateContext:
    'A humid tropical crop needing a long warm growing season and reliable moisture through rhizome fill. It does not tolerate frost and yields poorly where the season is shortened by drought.',
  limitations: [
    'Arrowroot is not separated in most national production statistics and is frequently absorbed into an undifferentiated roots and tubers category.',
    'Planting material is held back from each harvest, so what a grower plants is whatever the previous cycle produced rather than a named variety.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-crop-calendar',
      citedFor: 'Sowing and harvest windows recorded across three countries',
    },
    { sourceId: 'cabi', citedFor: 'Maranta arundinacea compendium data' },
    { sourceId: 'usda-grin', citedFor: 'Nomenclature and germplasm records' },
    { sourceId: 'iita', citedFor: 'Tropical root and tuber crop research' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Arrowroot',
    description:
      'Arrowroot (Maranta arundinacea): a rhizome crop grown for extracted starch, lifted after ten to twelve months and processed within days.',
    keywords: [
      'arrowroot',
      'Maranta arundinacea',
      'starch crop',
      'rhizome',
      'root crop',
    ],
  },
  structuredData: { article: true },
};
