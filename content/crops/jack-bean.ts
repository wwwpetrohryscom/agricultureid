import type { CropContent } from '@/types/content';

export const jackBean: CropContent = {
  id: 'crop-jack-bean',
  slug: 'jack-bean',
  contentType: 'crop',
  title: 'Jack Bean',
  scientificName: 'Canavalia ensiformis',
  alternativeNames: ['Horse bean', 'Chickasaw lima'],
  category: 'Cover crop',
  subcategory: 'Drought-hardy tropical legume for cover and green manure',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Jack bean is the cover crop that keeps working when the rains stop: it stays green and holds cover through a dry season that flattens mucuna, and its seed contains canavanine, which keeps it out of the food chain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Jack bean is an erect tropical legume grown as a cover crop, green manure and occasional fodder across the tropics. It is not grown for grain in any significant way, and the reason is chemical rather than agronomic.',
    },
    {
      type: 'paragraph',
      text: 'Its distinguishing agricultural property is drought hardiness. Where mucuna and other vigorous cover legumes collapse as the dry season sets in, jack bean holds its cover and keeps the soil protected, which makes it the cover crop of choice in the drier margins of the humid tropics.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Purpose',
      value: 'Cover crop, green manure and occasional fodder',
    },
    {
      label: 'Habit',
      value: 'Erect bushy annual, unlike the trailing tropical cover legumes',
    },
    {
      label: 'Drought',
      value: 'Holds cover through a dry season better than most cover legumes',
    },
    {
      label: 'Seed chemistry',
      value:
        'Contains canavanine and concanavalin A, restricting food and feed use',
    },
    {
      label: 'Nitrogen',
      value: 'Nodulates freely and contributes nitrogen to the following crop',
    },
  ],
  sections: [
    {
      id: 'drought',
      heading: 'Cover that survives the dry season',
      body: [
        {
          type: 'paragraph',
          text: 'Most tropical cover legumes are chosen for how fast they cover ground in the rains. Jack bean is chosen for what it does afterwards: it remains green and standing well into the dry season, so the soil stays covered when erosion risk from wind and the first storms is highest. That is a different job from smothering weeds in the wet season, and it is why the two kinds of cover crop are used together rather than as alternatives.',
        },
      ],
    },
    {
      id: 'erect',
      heading: 'An erect legume among trailing ones',
      body: [
        {
          type: 'paragraph',
          text: 'Jack bean stands upright and bushy rather than trailing, so it can be grown between rows of a standing crop without climbing it. That habit makes it usable in alley and intercrop arrangements where mucuna or lablab would smother the companion.',
        },
      ],
    },
    {
      id: 'canavanine',
      heading: 'Canavanine keeps it out of the food chain',
      body: [
        {
          type: 'paragraph',
          text: 'The seed contains canavanine, an arginine analogue, together with concanavalin A and other antinutritional compounds. They can be reduced by processing but not conveniently at farm scale, so a legume producing large, abundant seed is nonetheless not a pulse. That is the central fact separating it from the beans it resembles.',
        },
      ],
    },
    {
      id: 'shade',
      heading: 'Tolerates shade and poor soil',
      body: [
        {
          type: 'paragraph',
          text: 'The crop establishes and produces under partial shade and on acid, low-fertility soils, which suits it to use under tree crops and on degraded land. It is one of the cover legumes recommended for the poorest ground in a holding.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'nematodes',
      heading: 'Nematode effects',
      body: [
        {
          type: 'paragraph',
          text: 'Jack bean has been used in rotations aimed at reducing plant-parasitic nematode populations, and it appears in nematode-management recommendations for that reason. As with other biofumigant-type effects, the result depends on the nematode species and the system and is not general.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'seed-size',
      heading: 'Large seed, easy handling',
      body: [
        {
          type: 'paragraph',
          text: "The seeds are large and easy to handle and store, which makes farmer-to-farmer seed supply straightforward — an advantage over the small-seeded cover legumes, where seed cost and availability limit adoption. In practice this is one of the crop's strongest points.",
        },
      ],
    },
    {
      id: 'sword-bean',
      heading: 'Not sword bean',
      body: [
        {
          type: 'paragraph',
          text: 'Canavalia gladiata, sword bean, is a closely related species grown for its immature pods as a vegetable in Asia, and the two are frequently confused in the literature and in seed catalogues. Jack bean is not a vegetable crop, and records naming only Canavalia are ambiguous.',
        },
      ],
    },
    {
      id: 'residue',
      heading: 'Slow-decomposing residue',
      body: [
        {
          type: 'paragraph',
          text: 'The residue is coarser and breaks down more slowly than that of mucuna, so it persists as mulch for longer and releases nitrogen more gradually. That is an advantage for erosion protection and a disadvantage where nitrogen is wanted quickly by a following crop.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'adoption',
      heading: 'Why it is under-used',
      body: [
        {
          type: 'paragraph',
          text: 'Jack bean performs reliably and is under-adopted, and the reasons given in the literature are the ordinary ones for a crop with no harvest: it occupies land without producing a saleable product, and extension attention follows crops that are sold.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'stink-bugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'agroecology' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'velvet-bean' },
    { type: 'crop', slug: 'lablab' },
    { type: 'crop', slug: 'cowpea' },
  ],
  glossaryTerms: ['annual-crop', 'cover-crop', 'crop-rotation'],
  geographicScope:
    'Native to the neotropics and grown across the tropics of Africa, Asia and the Americas, mainly as a cover crop.',
  climateContext:
    'Tropical and subtropical; notably drought-hardy and tolerant of acid, low-fertility soils and partial shade.',
  limitations: [
    'Canavanine and lectin content restrict food and feed use; no processing or dietary guidance is given here.',
    'Reported nematode effects depend on species and system and are not general.',
    'Records naming only the genus may describe sword bean, which is a different crop.',
  ],
  sourceReferences: [
    { sourceId: 'iita', citedFor: 'Tropical cover crop research' },
    { sourceId: 'cgiar', citedFor: 'Tropical legume cover crop research' },
    {
      sourceId: 'fao',
      citedFor: 'Cover cropping and conservation agriculture context',
    },
    { sourceId: 'cabi', citedFor: 'Canavalia ensiformis compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Jack Bean',
    description:
      'Canavalia ensiformis as a crop: cover that survives the dry season, an erect habit among trailing legumes, canavanine in the seed and slow-decomposing residue.',
    keywords: [
      'jack bean',
      'Canavalia ensiformis',
      'cover crop',
      'canavanine',
      'green manure',
    ],
  },
  structuredData: { article: true },
};
