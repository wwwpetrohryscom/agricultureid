import type { CropContent } from '@/types/content';

export const bottleGourd: CropContent = {
  id: 'crop-bottle-gourd',
  slug: 'bottle-gourd',
  contentType: 'crop',
  title: 'Bottle Gourd',
  scientificName: 'Lagenaria siceraria',
  alternativeNames: ['Calabash', 'White-flowered gourd', 'Lauki', 'Opo squash'],
  category: 'Vegetable',
  subcategory: 'Cucurbit grown for immature fruit and for containers',
  botanicalFamily: 'Cucurbitaceae (gourd family)',
  lifecycle: 'Annual',
  summary:
    'Bottle gourd is a vigorous night-flowering cucurbit eaten as an immature fruit, dried at maturity into a hard-shelled container, and used across Asia as the standard rootstock for grafted watermelon.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bottle gourd is grown for three different products from one plant. Picked young the fruit is a mild vegetable; left to mature and dried it becomes a hard, waterproof shell used as a vessel, a float and a resonator; and the seedling, grafted under a watermelon scion, is the most widely used rootstock in Asian watermelon production. Few crops are asked to do such different jobs.',
    },
    {
      type: 'paragraph',
      text: 'The plant is a strong climber with white flowers that open in the evening and are moth-pollinated, which sets it apart from the yellow, bee-pollinated flowers of most cultivated cucurbits. It is trained on trellises or over roofs in much of its range, and the fruit shape a grower gets depends heavily on whether the fruit hangs free or rests on the ground.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Cucurbitaceae (gourd family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Lagenaria siceraria' },
    {
      label: 'Harvested part',
      value: 'Immature fruit as a vegetable; mature dried fruit as a container',
    },
    {
      label: 'Flowering',
      value: 'White flowers opening in the evening, moth-pollinated',
    },
    { label: 'Other use', value: 'Rootstock for grafted watermelon' },
    { label: 'Climate', value: 'Warm season; frost-sensitive' },
  ],
  sections: [
    {
      id: 'night-flowering',
      heading: 'A cucurbit that flowers at night',
      body: [
        {
          type: 'paragraph',
          text: "Bottle gourd's white flowers open in the late afternoon or evening and are pollinated by hawkmoths rather than bees, which is unusual among cultivated cucurbits and has practical consequences. Fruit set depends on a pollinator active at a time when growers are not watching, hand-pollination is done in the evening rather than the morning, and insecticide timing that protects daytime bees does not necessarily protect this crop's pollinators.",
        },
      ],
    },
    {
      id: 'two-harvests',
      heading: 'Vegetable or vessel',
      body: [
        {
          type: 'paragraph',
          text: 'The same fruit gives a vegetable or a container depending only on when it is cut. As a vegetable it is picked while the skin can still be marked with a thumbnail and the seeds are soft, usually within two weeks of set. For a container it is left on the vine until the shell hardens and the stem dries, then cured for weeks or months until the seeds rattle. A crop grown for one purpose is largely useless for the other, so the decision is made at planting.',
        },
      ],
    },
    {
      id: 'rootstock',
      heading: 'The watermelon rootstock',
      body: [
        {
          type: 'paragraph',
          text: "Grafting watermelon onto bottle gourd is standard practice in much of Asian watermelon production, where it gives tolerance of soil-borne fusarium wilt and of cool soil at planting. That makes bottle gourd seed a commodity whose demand is set by a different crop's area, and it means a bottle gourd nursery bed and a watermelon field are linked in a way neither crop's own statistics show.",
        },
      ],
    },
    {
      id: 'training',
      heading: 'Trellis and fruit shape',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit borne on a trellis hangs free and elongates; fruit resting on the ground flattens on the contact face and is more prone to rot in wet weather. Growers who want a particular shape for the container trade therefore train the crop deliberately, and the same cultivar can give quite different fruit on and off a support.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: 'A vigorous vine carrying a heavy fruit load is a demanding crop, and it is often grown on garden soils near a homestead rather than in a field rotation. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit flies, cucurbit-feeding beetles, powdery mildew and downy mildew all reach this crop, and virus pressure carried by aphids is a limiting factor where cucurbits are grown continuously. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'The crop grows on a wide range of soils provided they drain; it is grown on river-bank sands in the dry season in parts of Africa and on heavier alluvium elsewhere. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'curing',
      heading: 'Curing the shell',
      body: [
        {
          type: 'paragraph',
          text: 'A gourd intended as a container is cured for weeks to months after picking, in shade with air movement, until the shell hardens and the flesh inside dries to a rattling core. Curing failures — mould through a damaged skin, or splitting from too fast a dry — are the main loss in that side of the crop, and they happen after the field work is finished.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed and germination',
      body: [
        {
          type: 'paragraph',
          text: 'The seed coat is hard and germination is slow and uneven in cool soil, so growers scarify or soak before sowing and often raise transplants rather than sowing in place. Where the crop is grown for rootstock, uniform emergence matters far more than it does for a vegetable crop, because grafting is done on a narrow seedling age window.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'crop', slug: 'watermelon' },
    { type: 'crop', slug: 'pumpkin' },
    { type: 'crop', slug: 'cucumber' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'watermelon' },
    { type: 'crop', slug: 'pumpkin' },
    { type: 'crop', slug: 'cucumber' },
    { type: 'crop', slug: 'bitter-gourd' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Grown throughout the tropics and subtropics, with the FAO Crop Calendar recording sowing and harvest windows in eleven countries across Africa, the Middle East and South Asia.',
  climateContext:
    'A warm-season crop killed by frost, grown in the rains in monsoon systems and on residual moisture on river banks in the dry season. It needs a long enough warm period to mature fruit when the crop is grown for containers rather than for the vegetable.',
  limitations: [
    'Production statistics rarely separate bottle gourd from other gourds, and container production is largely outside agricultural statistics altogether.',
    'Cultivars are selected locally for fruit shape and for rootstock vigour, and the two selections have little to do with each other.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-crop-calendar',
      citedFor: 'Sowing and harvest windows recorded across eleven countries',
    },
    { sourceId: 'cabi', citedFor: 'Lagenaria siceraria compendium data' },
    { sourceId: 'usda-grin', citedFor: 'Nomenclature and germplasm records' },
    { sourceId: 'icar', citedFor: 'Cucurbit rootstock and grafting practice' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Bottle Gourd',
    description:
      'Bottle gourd (Lagenaria siceraria): night-flowering cucurbit grown as a vegetable, as a container, and as the standard watermelon rootstock.',
    keywords: [
      'bottle gourd',
      'calabash',
      'Lagenaria siceraria',
      'lauki',
      'watermelon rootstock',
    ],
  },
  structuredData: { article: true },
};
