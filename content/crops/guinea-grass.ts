import type { CropContent } from '@/types/content';

export const guineaGrass: CropContent = {
  id: 'crop-guinea-grass',
  slug: 'guinea-grass',
  contentType: 'crop',
  title: 'Guinea Grass',
  scientificName: 'Megathyrsus maximus',
  alternativeNames: [
    'Panicum maximum (former name)',
    'Green panic',
    'Tanzania grass',
  ],
  category: 'Forage crop',
  subcategory: 'Tall tropical perennial tussock grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Guinea grass is the tropical pasture grass that tolerates shade, which is why it is the one sown under coconut and in silvopastoral systems where a sun-demanding grass would thin out and disappear.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Guinea grass is a tall African tussock grass grown for pasture across the tropics. It carries high yield and good feeding value when kept vegetative, and like signal grass it reproduces largely by apomixis, so its cultivars are fixed genotypes reproduced through seed.',
    },
    {
      type: 'paragraph',
      text: 'What separates it from the other large tropical grasses is shade tolerance. It persists and produces under a tree canopy, which makes it the grass of choice beneath coconut plantations and in silvopastoral systems, where most sun-demanding tropical grasses thin out over a few seasons.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Accepted name',
      value: 'Megathyrsus maximus, transferred from Panicum',
    },
    {
      label: 'Habit',
      value: 'Tall tussock grass, commonly reaching two metres or more',
    },
    {
      label: 'Distinguishing trait',
      value: 'Tolerates shade better than the other large tropical grasses',
    },
    { label: 'Reproduction', value: 'Largely apomictic' },
    {
      label: 'Principal systems',
      value: 'Cut-and-carry, rotational grazing, and pasture under tree canopy',
    },
  ],
  sections: [
    {
      id: 'shade',
      heading: "Shade tolerance is the crop's niche",
      body: [
        {
          type: 'paragraph',
          text: 'Most high-yielding tropical grasses need full sun and decline under a canopy. Guinea grass produces useful forage in partial shade, which is why it is sown under coconut, in oil palm interrows during the early years, and in silvopastoral systems combining timber or fruit trees with grazing. That single trait determines most of where it is planted.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'height',
      heading: 'A tall grass with a management problem',
      body: [
        {
          type: 'paragraph',
          text: 'The tussock grows to two metres and beyond, and forage quality falls sharply once it stems and flowers. Grazing management therefore has to keep pace with a fast-growing tall grass, and understocked guinea grass becomes a coarse, low-value stand within weeks rather than months.',
        },
      ],
    },
    {
      id: 'cultivars',
      heading: 'Cultivars differ more than the species suggests',
      body: [
        {
          type: 'paragraph',
          text: 'Selections range from tall, thick-stemmed types used for cut-and-carry to fine-stemmed, lower-growing types suited to grazing, and they behave differently enough that a recommendation for one is not a recommendation for the species. Because the crop is apomictic, each of those is a fixed clone reproduced through seed.',
        },
      ],
    },
    {
      id: 'fertility',
      heading: 'Needs better soil than signal grass',
      body: [
        {
          type: 'paragraph',
          text: 'Guinea grass is more demanding of fertility, and particularly of nitrogen, than the Urochloa grasses, and it performs poorly on the most acid and infertile tropical soils where signal grass still produces. The choice between the two is usually made on soil rather than on yield potential.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed production and dormancy',
      body: [
        {
          type: 'paragraph',
          text: 'Seed sheds readily as it ripens and carries dormancy after harvest, so seed lots are variable and stands establish unevenly. Storing seed for some months after harvest to allow dormancy to break is standard, and sowing fresh seed is a common cause of a failed establishment.',
        },
      ],
    },
    {
      id: 'cut-and-carry',
      heading: 'Cut-and-carry and hedgerows',
      body: [
        {
          type: 'paragraph',
          text: 'As with napier grass, guinea grass is widely cut and carried to stalled animals in smallholder systems, and it is planted on field boundaries and terrace risers where it holds soil and produces fodder from land that grows nothing else.',
        },
      ],
    },
    {
      id: 'invasive',
      heading: 'A serious weed outside pasture',
      body: [
        {
          type: 'paragraph',
          text: 'Guinea grass has naturalised widely and is a listed invasive in Hawaii, parts of Australia, the Pacific and the Americas, where its bulk carries fire into vegetation not adapted to it. The fire cycle it creates is the reason it is treated as more than an ordinary pasture escape.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'name',
      heading: 'Panicum no longer',
      body: [
        {
          type: 'paragraph',
          text: 'Both authorities accept Megathyrsus maximus, and the older name Panicum maximum remains in near-universal use in seed catalogues and older literature. Some sources also use Urochloa maxima. All three names must be recognised when matching records.',
        },
      ],
    },
    {
      id: 'drought',
      heading: 'Drought and dry season',
      body: [
        {
          type: 'paragraph',
          text: 'The grass survives a marked dry season by dying back to the crown and regrowing on the first rains, and it is more drought-tolerant than napier grass though less so than buffel grass. It does not tolerate waterlogging, and stands on poorly drained ground thin quickly.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'white-grubs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'napier-grass' },
    { type: 'crop', slug: 'signal-grass' },
    { type: 'crop', slug: 'rhodes-grass' },
  ],
  glossaryTerms: ['perennial-crop', 'forage'],
  geographicScope:
    'Native to tropical Africa; sown across tropical America, Asia, the Pacific and northern Australia. A listed invasive in several of those regions.',
  climateContext:
    'Humid and subhumid tropics; shade-tolerant, drought-hardy through a dry season and intolerant of waterlogging.',
  limitations: [
    'Cultivar behaviour differs widely and species-level statements do not describe any particular selection.',
    'Invasive listings and fire-risk assessments are region-specific and are not reproduced here.',
    'Shade tolerance is relative to other tropical grasses and is not a specification for any canopy density.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Tropical grassland and pasture context' },
    { sourceId: 'cgiar', citedFor: 'Tropical forage germplasm research' },
    {
      sourceId: 'cabi',
      citedFor: 'Megathyrsus maximus compendium data and invasive status',
    },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and distribution',
    },
    { sourceId: 'au-qld-dpi', citedFor: 'Queensland pasture species guidance' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Guinea Grass',
    description:
      'Megathyrsus maximus as a crop: shade tolerance as its niche under coconut and in silvopasture, apomixis, fertility demand, seed dormancy and invasive status.',
    keywords: [
      'guinea grass',
      'Megathyrsus maximus',
      'Panicum maximum',
      'shade tolerant pasture',
      'silvopasture',
    ],
  },
  structuredData: { article: true },
};
