import type { CropContent } from '@/types/content';

export const juteMallow: CropContent = {
  id: 'crop-jute-mallow',
  slug: 'jute-mallow',
  contentType: 'crop',
  title: 'Jute Mallow',
  scientificName: 'Corchorus olitorius',
  alternativeNames: [
    'Molokhia',
    'Egyptian spinach',
    "Jew's mallow",
    'Egyptian mallow',
    'Ewedu',
    'Saluyot',
    'Bush okra',
  ],
  category: 'Leafy vegetable',
  subcategory: 'Mucilaginous leaf crop of the jute genus',
  botanicalFamily: 'Malvaceae (mallow family)',
  lifecycle: 'Annual',
  summary:
    'Jute mallow is the leaf crop of Corchorus olitorius, the same species grown for tossa jute fibre, cut repeatedly for a mucilaginous green eaten across Egypt, the Levant, West Africa and South East Asia.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Jute mallow is one plant with two industries. Corchorus olitorius grown to two or three metres and retted gives tossa jute, the softer of the two commercial jute fibres; the same species cut young and often gives a leafy vegetable that thickens a soup as okra does. The fibre crop and the leaf crop are one taxon, and the difference between them is entirely a matter of when the crop is cut.',
    },
    {
      type: 'paragraph',
      text: 'As a vegetable it goes by molokhia in Egypt and the Levant, ewedu in Yoruba-speaking Nigeria, saluyot in the Philippines and Egyptian spinach in seed catalogues. The mucilage that makes the leaf valuable in the pot is also what makes it hard to dry and store, so the crop is grown close to where it is eaten and harvested through the hot months when other leafy greens bolt.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Malvaceae (mallow family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Corchorus olitorius' },
    { label: 'Harvested part', value: 'Young leaves and shoot tips' },
    {
      label: 'Also grown for',
      value: 'Tossa jute fibre, from the same species left to grow tall',
    },
    {
      label: 'Climate',
      value:
        'Hot season crop; grows through temperatures that bolt temperate greens',
    },
    {
      label: 'Propagation',
      value: 'Direct-sown from small seed, often broadcast',
    },
  ],
  sections: [
    {
      id: 'one-species-two-crops',
      heading: 'One species, two crops',
      body: [
        {
          type: 'paragraph',
          text: 'The decision that separates jute mallow the vegetable from tossa jute the fibre crop is made at sowing and confirmed at the first cut. A fibre stand is sown dense to force tall unbranched stems and left standing for three to four months before retting; a vegetable stand is sown for branching and cut from about a month onwards, repeatedly, so the plant never builds the long bast fibres the fibre crop is grown for. The fibre side is published under jute and the vegetable here, and the taxon is the same.',
        },
      ],
    },
    {
      id: 'mucilage',
      heading: 'Why the leaf is grown',
      body: [
        {
          type: 'paragraph',
          text: 'The leaves carry mucilage — polysaccharides that give a cooked leaf a viscous, drawing texture close to that of okra. That texture is the point of the crop in the cuisines that use it, and it is also its limitation as a traded commodity: the leaf loses quality quickly after cutting and does not dry into a product resembling the fresh one. Production is therefore local and continuous rather than seasonal and stored.',
        },
      ],
    },
    {
      id: 'cutting',
      heading: 'Cut, not harvested',
      body: [
        {
          type: 'paragraph',
          text: 'Jute mallow is managed as a repeatedly cut stand rather than a single-harvest crop. The first cut comes three to five weeks after sowing and further cuts follow as the plant regrows from the remaining nodes, until flowering ends useful leaf production. Because the crop is cut before it sets seed, seed for the next stand comes from plants deliberately left uncut, which is a separate operation on the same field.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: 'Repeated cutting removes nitrogen with every load of leaf, and a stand that is cut five or six times is a demanding crop on a soil that is often a garden soil rather than a field soil. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: 'The crop shares its pest complex with the fibre jute — leaf-eating caterpillars, mites in dry heat, and root-knot nematode where vegetable rotations are short and irrigated. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'Jute mallow is grown on alluvial and loam soils in its main producing areas, where drainage and water-holding are both adequate; it does badly on waterlogged ground despite the wet-season timing of much of its cultivation. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed, dormancy and sowing rate',
      body: [
        {
          type: 'paragraph',
          text: 'The seed is very small and hard-coated, and germination is uneven without treatment; growers commonly scald or soak it before broadcasting. Because the crop is broadcast rather than drilled in much of its range, sowing rate is high and thinning by early cutting is part of establishment rather than a separate operation.',
        },
      ],
    },
    {
      id: 'trade',
      heading: 'A crop that travels badly',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh leaf reaches markets within a day or two of cutting, and beyond that the trade is in dried or frozen product that behaves differently in the pot. Egypt exports frozen molokhia to its diaspora markets, which is a processed trade rather than a fresh one, and it is the reason production statistics and consumption statistics for this crop do not line up.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'crop', slug: 'jute' },
    { type: 'crop', slug: 'okra' },
    { type: 'crop', slug: 'spinach' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'jute' },
    { type: 'crop', slug: 'okra' },
    { type: 'crop', slug: 'amaranth' },
    { type: 'crop', slug: 'water-spinach' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'cultivar'],
  geographicScope:
    "Grown as a vegetable across Egypt and the Levant, West Africa, East Africa and South East Asia. The FAO Crop Calendar records sowing and harvest windows for it in Egypt and Jordan under two separate labels, Egyptian mallow and Jew's mallow.",
  climateContext:
    'A hot-season crop that grows through temperatures at which temperate leafy vegetables bolt, which is much of its value in the cropping calendars that use it. It needs moisture through the cutting period and is grown irrigated where the season is dry.',
  limitations: [
    'Production statistics for this crop are largely absorbed into fibre jute or into undifferentiated leafy vegetable categories, so figures attributed to it should be read with care.',
    'Local landraces dominate the crop and no formal variety registration system covers it in its main producing countries.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-crop-calendar',
      citedFor:
        "Sowing and harvest windows for Egypt and Jordan, under the Egyptian mallow and Jew's mallow labels",
    },
    { sourceId: 'cabi', citedFor: 'Corchorus olitorius compendium data' },
    { sourceId: 'usda-grin', citedFor: 'Nomenclature and germplasm records' },
    { sourceId: 'iita', citedFor: 'West African leafy vegetable research' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Jute Mallow',
    description:
      'Jute mallow (Corchorus olitorius): the molokhia leaf crop, its mucilage, repeated cutting, and its relationship to tossa jute fibre.',
    keywords: [
      'jute mallow',
      'molokhia',
      'Corchorus olitorius',
      'Egyptian spinach',
      'leafy vegetable',
    ],
  },
  structuredData: { article: true },
};
