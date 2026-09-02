import type { CropContent } from '@/types/content';

export const kapok: CropContent = {
  id: 'crop-kapok',
  slug: 'kapok',
  contentType: 'crop',
  title: 'Kapok',
  scientificName: 'Ceiba pentandra',
  alternativeNames: ['Silk cotton tree', 'Java cotton', 'Ceiba'],
  category: 'Fibre crop',
  subcategory: 'Large tropical tree grown for seed-pod floss',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Perennial',
  summary:
    'Kapok floss grows on the inside of a pod rather than on the seed, cannot be spun, and is used for what it does rather than what it is made into: it is buoyant, water-repellent and extremely light.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kapok is a very large tropical tree grown for the silky floss that lines the inside of its seed pods. Unlike cotton, that floss is not attached to the seed as a hair and it cannot be spun into yarn, because the fibres are short, smooth and brittle.',
    },
    {
      type: 'paragraph',
      text: 'It is used loose. The fibre is hollow, waxy and extremely light, which makes it buoyant and water-repellent, and it filled life jackets, mattresses and insulation long before synthetics existed. Its uses follow from a physical property rather than from any textile quality.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    {
      label: 'Harvested part',
      value: 'Floss lining the inside of the seed pod',
    },
    {
      label: 'Not spinnable',
      value: 'Fibres are short, smooth and brittle and are used loose',
    },
    {
      label: 'Key properties',
      value: 'Hollow, waxy, buoyant and water-repellent',
    },
    {
      label: 'Habit',
      value: 'Very large deciduous tree, commonly 30 metres or more',
    },
    { label: 'Principal producers', value: 'Indonesia and Thailand' },
  ],
  sections: [
    {
      id: 'not-cotton',
      heading: 'Floss, not lint',
      body: [
        {
          type: 'paragraph',
          text: 'Cotton lint is a hair growing from the seed coat and can be spun. Kapok floss lines the pod wall and is not attached to the seed in the same way, and its fibres are too short and too smooth to hold together in a yarn. Everything about how kapok is harvested, cleaned and sold follows from that one difference.',
        },
      ],
    },
    {
      id: 'buoyancy',
      heading: 'Buoyancy is the product',
      body: [
        {
          type: 'paragraph',
          text: 'The fibre is hollow and coated in wax, so it traps air and repels water, and it was the standard filling for life jackets and buoyancy aids before synthetic foams. It remains used for bedding, cushioning, insulation and oil absorption, all of which value lightness and water behaviour rather than strength.',
        },
      ],
    },
    {
      id: 'tree',
      heading: 'A very large tree in a farmed landscape',
      body: [
        {
          type: 'paragraph',
          text: 'Ceiba pentandra reaches thirty metres and more, and it is grown in smallholder plantations, on field boundaries and as a remnant in farmed landscapes rather than in dense orchards. Harvest means collecting fallen pods or picking from a very tall tree, which is the practical limit on production intensity.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'seed-oil',
      heading: 'Seed oil as a second product',
      body: [
        {
          type: 'paragraph',
          text: 'The seeds left after ginning yield a non-edible-grade oil used for soap and lubricants and a press cake used as feed and fertiliser, so a kapok operation has a second product line that its floss trade tends to obscure.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'decline',
      heading: 'A crop displaced and partly returning',
      body: [
        {
          type: 'paragraph',
          text: "Synthetic fibres removed most of kapok's industrial market during the twentieth century, and production contracted sharply. Interest has since returned for applications where a natural, biodegradable, hydrophobic fibre is specified — notably oil-spill absorbents and bedding — without restoring the crop to its former scale.",
        },
      ],
    },
    {
      id: 'handling',
      heading: 'A fibre that is difficult to handle',
      body: [
        {
          type: 'paragraph',
          text: 'The floss is extremely light and drifts, it packs poorly, and it is flammable when dry and loose, so ginning, baling and storage all need to be designed around it. Those handling costs are part of why the crop concentrated in a few producing regions.',
        },
      ],
    },
    {
      id: 'sacred',
      heading: 'A tree with non-agricultural standing',
      body: [
        {
          type: 'paragraph',
          text: 'Ceiba pentandra carries cultural and religious significance in parts of West Africa and Mesoamerica, and individual trees are protected for that reason. Where that is the case the tree persists outside any agricultural decision, which is worth knowing when reading tree counts as production capacity.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'africa',
      heading: 'Two ranges',
      body: [
        {
          type: 'paragraph',
          text: 'The species occurs naturally in tropical America and West Africa and was carried to Southeast Asia, where the commercial industry developed. Its distribution is therefore genuinely intercontinental in a way few tree crops are, and the African and Asian populations are treated differently in the literature.',
        },
      ],
    },
    {
      id: 'regeneration',
      heading: 'Establishment and bearing',
      body: [
        {
          type: 'paragraph',
          text: 'Trees are grown from seed or cuttings and take years to bear, and they then produce for decades. As with other long-cycle tree crops, that timescale means planting decisions respond to prices with a lag long enough to be an industry problem in itself.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'wind' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
    { type: 'post-harvest', slug: 'palletisation' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'jute' },
    { type: 'crop', slug: 'kenaf' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Native to tropical America and West Africa and grown commercially in Southeast Asia, where Indonesia and Thailand lead production.',
  climateContext:
    'Humid tropical lowland; a large deciduous tree shedding leaves in the dry season and flowering on bare branches.',
  limitations: [
    'Production statistics are thin because much of the crop comes from scattered trees rather than plantations.',
    'The floss cannot be spun and comparisons with cotton on textile terms do not apply.',
    'Seed oil grades and permitted uses are jurisdictional and are not covered here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Natural fibre production and trade context' },
    { sourceId: 'cabi', citedFor: 'Ceiba pentandra compendium data' },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and distribution',
    },
    {
      sourceId: 'id-pertanian',
      citedFor: 'Indonesian kapok production context',
    },
    { sourceId: 'faostat', citedFor: 'Production and trade statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Kapok',
    description:
      'Ceiba pentandra as a crop: pod-lining floss that cannot be spun, buoyancy and water repellency as the product, seed oil, and a market displaced by synthetics.',
    keywords: [
      'kapok',
      'Ceiba pentandra',
      'silk cotton tree',
      'buoyant fibre',
      'Java cotton',
    ],
  },
  structuredData: { article: true },
};
