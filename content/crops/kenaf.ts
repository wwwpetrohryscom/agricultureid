import type { CropContent } from '@/types/content';

export const kenaf: CropContent = {
  id: 'crop-kenaf',
  slug: 'kenaf',
  contentType: 'crop',
  title: 'Kenaf',
  scientificName: 'Sabdariffa cannabina',
  alternativeNames: [
    'Hibiscus cannabinus (former name)',
    'Mesta',
    'Java jute',
    'Deccan hemp',
  ],
  category: 'Fibre crop',
  subcategory: 'Annual bast fibre crop',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Annual',
  summary:
    "Kenaf yields two different fibres from one stem — a long bast fibre from the bark and a short, light core from the pith — and the core, which older accounts treated as waste, now carries much of the crop's value.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Kenaf is an annual bast fibre crop grown mainly in India, China and Bangladesh, where it is often called mesta and is grown alongside and traded with jute. The plant reaches several metres in a season and is cut, retted and stripped for its bark fibre.',
    },
    {
      type: 'paragraph',
      text: 'What distinguishes it from jute is what is left over. The woody core inside the bark is light, absorbent and low in density, and it has become a product in its own right — animal bedding, oil-absorbent, particleboard and packing material — so kenaf is a two-fibre crop rather than a bast crop with a waste stream.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    {
      label: 'Accepted name',
      value: 'Sabdariffa cannabina, segregated from Hibiscus',
    },
    {
      label: 'Two fibres',
      value:
        'Long bast fibre from the bark and short light core fibre from the pith',
    },
    {
      label: 'Reported bast composition',
      value: 'Around 53 to 66 per cent cellulose with 8 to 16 per cent lignin',
    },
    { label: 'Retting', value: 'Water or dew retting, as for jute' },
    { label: 'Principal producers', value: 'India, China and Bangladesh' },
  ],
  sections: [
    {
      id: 'two-fibres',
      heading: 'Bark and core are separate products',
      body: [
        {
          type: 'paragraph',
          text: 'The bast fibre from the bark is long and strong and goes into cordage, sacking, geotextiles and composites. The core is short, light and highly absorbent and is used for animal bedding, oil spill absorbents, particleboard and packing. A processor that can sell both takes far more value from the same stem, and much of the modern interest in kenaf rests on that second stream rather than on the fibre trade it grew up in.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'name',
      heading: 'A genus that moved',
      body: [
        {
          type: 'paragraph',
          text: 'Both authorities now accept Sabdariffa cannabina, taking the species out of Hibiscus. Essentially the entire fibre literature, seed trade and statistical record uses Hibiscus cannabinus, and both names have to be recognised when matching sources. The change is recent and has not reached the trade.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'mesta',
      heading: 'Mesta is not one plant',
      body: [
        {
          type: 'paragraph',
          text: 'In India the fibre marketed as mesta comes from kenaf and from roselle, Hibiscus sabdariffa, and the two are traded together. Statistics reported for mesta therefore cover two species, which is a real limit on any production figure attributed to kenaf alone in South Asia.',
        },
      ],
    },
    {
      id: 'retting',
      heading: 'Retting sets the grade',
      body: [
        {
          type: 'paragraph',
          text: 'As with jute, the bast fibre is freed by retting the cut stems in water or by dew, and how well that is controlled decides colour, strength and cleanliness. Water retting needs standing water that is not always available, and it is the step where fibre quality is most often lost.',
        },
      ],
    },
    {
      id: 'speed',
      heading: 'A very fast biomass crop',
      body: [
        {
          type: 'paragraph',
          text: 'Kenaf reaches several metres in a single season and produces a large quantity of dry matter, which is why it appears repeatedly in fibre, paper and bioenergy feasibility work. Yield of biomass has rarely been the constraint; processing and market development have been.',
        },
      ],
    },
    {
      id: 'paper',
      heading: 'The paper argument',
      body: [
        {
          type: 'paragraph',
          text: 'Kenaf has been promoted as a non-wood pulp source for paper for decades, on the strength of its fibre and its annual cycle. The pulping economics have kept it a small specialty in practice, and AgricultureID records the argument and the outcome rather than repeating the promise.',
        },
      ],
    },
    {
      id: 'photoperiod',
      heading: 'Short-day flowering',
      body: [
        {
          type: 'paragraph',
          text: 'Kenaf is short-day and flowers as daylength shortens, so at low latitudes it flowers early and stays short, while at higher latitudes it grows tall before flowering. Fibre growers want vegetative growth, so latitude and sowing date set how much stem the crop makes.',
        },
      ],
    },
    {
      id: 'nematodes',
      heading: 'Root-knot nematode',
      body: [
        {
          type: 'paragraph',
          text: 'Kenaf is highly susceptible to root-knot nematode, and this is the constraint that most often limits it in rotation with vegetables and other susceptible crops. Resistant material has been a long-standing breeding objective.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Where it fits',
      body: [
        {
          type: 'paragraph',
          text: 'Because it is a fast annual with a large root system, kenaf is used as a rotation crop and for soil improvement as well as for fibre, and the leaves are also eaten as a vegetable in parts of Africa and Asia. That multi-use character is normal for the crop and invisible in fibre statistics.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'cotton-bollworm' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'vertisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'jute' },
    { type: 'crop', slug: 'hemp' },
    { type: 'crop', slug: 'cotton' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'India, China and Bangladesh account for most production, with smaller areas in Thailand, Vietnam, Africa and the United States.',
  climateContext:
    'Warm-season annual; short-day flowering, requiring warmth and adequate rainfall through a rapid growth phase.',
  limitations: [
    'South Asian production data for "mesta" covers kenaf and roselle together and cannot be split between them here.',
    'Fibre composition figures are reported ranges from the research literature and vary with variety and retting.',
    'The accepted botanical name is recent and almost all trade and research records still use the former one.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Natural fibre production and trade context' },
    { sourceId: 'icar', citedFor: 'Indian bast fibre agronomy' },
    { sourceId: 'cabi', citedFor: 'Kenaf compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Kenaf',
    description:
      'Kenaf as a crop: bast fibre and core fibre as two products, the move from Hibiscus to Sabdariffa, mesta covering two species, retting and short-day growth.',
    keywords: [
      'kenaf',
      'Hibiscus cannabinus',
      'Sabdariffa cannabina',
      'mesta',
      'bast fibre',
    ],
  },
  structuredData: { article: true },
};
