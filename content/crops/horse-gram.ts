import type { CropContent } from '@/types/content';

export const horseGram: CropContent = {
  id: 'crop-horse-gram',
  slug: 'horse-gram',
  contentType: 'crop',
  title: 'Horse Gram',
  scientificName: 'Macrotyloma uniflorum',
  alternativeNames: ['Kulthi', 'Hurali', 'Madras gram'],
  category: 'Pulse crop',
  subcategory: 'Drought-hardy grain legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Horse gram is grown on the residual moisture of a finished monsoon, sown late into drying soil where no other pulse would set seed, and it tolerates salinity as well as drought.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Horse gram is a grain legume of South Asia, grown mainly in southern and central India and in Nepal, Sri Lanka and parts of Africa and Australia. It is one of the most drought-tolerant pulses in cultivation and it also tolerates saline conditions.',
    },
    {
      type: 'paragraph',
      text: 'Its place in the cropping calendar follows from that. It is sown late in the season, often on land that has already carried a crop, and it matures on stored soil moisture rather than on rainfall. Where the pulse choices are horse gram or nothing, it is horse gram.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    { label: 'Genus', value: 'Macrotyloma, not Vigna' },
    {
      label: 'Tolerances',
      value: 'Among the most drought- and salinity-tolerant cultivated pulses',
    },
    {
      label: 'Position in the calendar',
      value: 'Sown late, maturing on residual soil moisture',
    },
    { label: 'Uses', value: 'Human food, animal feed and green manure' },
    {
      label: 'Research status',
      value:
        'No sequenced reference genome as of the cited literature; improvement largely by selection',
    },
  ],
  sections: [
    {
      id: 'residual-moisture',
      heading: 'A crop for the end of the season',
      body: [
        {
          type: 'paragraph',
          text: 'Horse gram is sown as the rains finish and grows on what is left in the profile, which is why it appears on land that has just carried a cereal and on ground too dry for chickpea or pigeon pea. Managing it means managing what moisture remains rather than what falls.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'salinity',
      heading: 'Drought and salinity together',
      body: [
        {
          type: 'paragraph',
          text: 'Tolerance of drought and of salinity together is unusual in a pulse, and it is why the crop appears in reclamation and marginal-land programmes as well as in ordinary rotations. Both tolerances are relative rather than absolute and depend on stage and severity.',
        },
      ],
    },
    {
      id: 'genus',
      heading: 'Macrotyloma, not Vigna',
      body: [
        {
          type: 'paragraph',
          text: 'Horse gram is often listed among the Asian Vigna pulses and it is not one; Macrotyloma is a separate genus. Its disease profile, its crossing relationships and its germplasm collections are correspondingly separate, and treating it as a Vigna in a breeding or rotation plan is a category error.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'feed',
      heading: 'Fed as much as eaten',
      body: [
        {
          type: 'paragraph',
          text: 'A large part of the crop is fed to livestock — the English name records this — while the seed is also a human food in southern India, where it is used in preparations that require long cooking. A grower may take the crop either way, and the market for the two differs.',
        },
      ],
    },
    {
      id: 'hard-seed',
      heading: 'Hard seed and long cooking',
      body: [
        {
          type: 'paragraph',
          text: 'The seed is hard and requires extended cooking or soaking, and hard-seededness also affects germination in the field. This is a real constraint on household use and a stated target of the limited breeding work on the crop.',
        },
      ],
    },
    {
      id: 'green-manure',
      heading: 'Green manure and cover',
      body: [
        {
          type: 'paragraph',
          text: 'Horse gram is grown as a cover and green-manure crop on dry land, where it produces biomass and fixes nitrogen under conditions that defeat other legumes. That use does not require the crop to reach maturity and is less exposed to end-of-season drought.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'research',
      heading: 'A crop without a reference genome',
      body: [
        {
          type: 'paragraph',
          text: 'Published transcriptome work on horse gram notes the absence of a sequenced genome, which limits how far drought-tolerance mechanisms can be traced. Improvement has proceeded largely by selection within landraces, which is the ordinary position of an underused pulse.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'A legume where a legume is difficult',
      body: [
        {
          type: 'paragraph',
          text: "Because it fits the dry end of the season, horse gram can supply a legume break in rotations that otherwise carry only cereals, adding nitrogen and breaking cereal disease cycles. In semi-arid rainfed systems that opportunity is scarce and is much of the crop's agronomic value.",
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names and confusion',
      body: [
        {
          type: 'paragraph',
          text: 'Kulthi, hurali, kollu and Madras gram all refer to this crop, and "gram" is also used for chickpea (Bengal gram), black gram and green gram, which are different species in different genera. Matching a market record for any "gram" requires resolving which crop is meant.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'charcoal-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'stink-bugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'vertisol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'saline-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'black-gram' },
    { type: 'crop', slug: 'mung-bean' },
    { type: 'crop', slug: 'cowpea' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Southern and central India, Nepal and Sri Lanka; also grown in parts of Africa, Australia and the West Indies.',
  climateContext:
    'Semi-arid; sown late and matured on residual soil moisture, with tolerance of drought and moderate salinity.',
  limitations: [
    'Drought and salinity tolerance are relative to other pulses and depend on growth stage and severity; no thresholds are given.',
    'Hard-seededness and cooking behaviour vary between landraces.',
    'Formal varietal recommendations are regional and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'icar', citedFor: 'Indian pulse agronomy and germplasm' },
    { sourceId: 'cgiar', citedFor: 'Underutilised legume research' },
    { sourceId: 'cabi', citedFor: 'Macrotyloma uniflorum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'Grain legume production context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Horse Gram',
    description:
      'Macrotyloma uniflorum as a crop: sown late onto residual moisture, drought and salinity tolerance, a Macrotyloma not a Vigna, hard seed and green-manure use.',
    keywords: [
      'horse gram',
      'Macrotyloma uniflorum',
      'kulthi',
      'drought tolerant pulse',
      'residual moisture',
    ],
  },
  structuredData: { article: true },
};
