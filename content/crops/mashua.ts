import type { CropContent } from '@/types/content';

export const mashua: CropContent = {
  id: 'crop-mashua',
  slug: 'mashua',
  contentType: 'crop',
  title: 'Mashua',
  scientificName: 'Tropaeolum tuberosum',
  alternativeNames: ['Añu', 'Isaño', 'Cubio'],
  category: 'Root and tuber crop',
  subcategory: 'Andean tuber crop',
  botanicalFamily: 'Tropaeolaceae (nasturtium family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Mashua is the Andean tuber that needs almost no protection: its glucosinolates deter nematodes and insects strongly enough that it is planted around other crops as a barrier, and its pungency is also why it is eaten less than it is grown.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mashua is a nasturtium — the same genus as the garden flower — grown for tubers in the high Andes from Colombia to Bolivia. It is the most vigorous and the highest-yielding of the minor Andean tubers and the least demanding of inputs.',
    },
    {
      type: 'paragraph',
      text: 'It is also the most pungent. The plant is rich in glucosinolates, which give the raw tubers a sharp mustard-like bite and give the crop a documented deterrent effect on nematodes and insects. Farmers plant it at field edges and in rotation for that effect, so part of its value is protective rather than nutritional.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Tropaeolaceae (nasturtium family)' },
    { label: 'Genus', value: 'Tropaeolum, the nasturtiums' },
    {
      label: 'Distinctive chemistry',
      value: 'Glucosinolates, giving pungency and pest-deterrent effects',
    },
    {
      label: 'Reported photoperiod',
      value:
        'Short-day tuberisation, with a critical daylength near 13 hours in most varieties',
    },
    {
      label: 'Vigour',
      value:
        'The most vigorous and highest-yielding of the minor Andean tubers',
    },
    {
      label: 'Principal disease constraint',
      value: 'Tropaeolum mosaic potyvirus in clonal material',
    },
  ],
  sections: [
    {
      id: 'glucosinolates',
      heading: 'Pungency that does agricultural work',
      body: [
        {
          type: 'paragraph',
          text: 'Mashua carries glucosinolates of the kind found in the brassicas, and they make the raw tuber sharp. The same chemistry underlies the deterrent effect on nematodes and some insects that Andean farmers exploit by planting mashua as a border and in rotation. It is a crop whose secondary metabolites are part of its agronomic function rather than only its flavour.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'vigour',
      heading: 'Vigour and low input',
      body: [
        {
          type: 'paragraph',
          text: "The plant grows aggressively, smothers weeds and yields well on poor high-altitude ground with little fertiliser, which makes it the least demanding of the Andean tubers. That combination is why it persists in subsistence systems even though its market is smaller than ulluco's or oca's.",
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'photoperiod',
      heading: 'A thirteen-hour threshold',
      body: [
        {
          type: 'paragraph',
          text: 'Most varieties tuberise under short days with a critical daylength reported near thirteen hours, and tuber initiation begins as autumn shortens. Because the top growth is frost-sensitive, mashua outside the tropics is confined to places with a mild autumn long enough to finish bulking after that trigger.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'taste',
      heading: 'Grown more than it is eaten',
      body: [
        {
          type: 'paragraph',
          text: 'The pungency limits how much mashua is eaten fresh, and traditional preparation reduces it — freezing, sun exposure and long cooking are all used. That gap between how much is grown and how much is consumed directly is a real feature of the crop and shapes its markets.',
        },
      ],
    },
    {
      id: 'virus',
      heading: 'Virus in clonal material',
      body: [
        {
          type: 'paragraph',
          text: 'Tropaeolum mosaic potyvirus reduces yield in Andean mashua accessions, and as with the other clonally propagated Andean tubers the virus travels in the planting material. Clean seed through thermotherapy and tissue culture is the intervention with the clearest effect on yield.',
        },
      ],
    },
    {
      id: 'not-nasturtium-flower',
      heading: 'A tuberous nasturtium',
      body: [
        {
          type: 'paragraph',
          text: 'The genus is familiar as the garden nasturtium, Tropaeolum majus, grown for flowers and edible leaves. Mashua is a different species grown for tubers, and horticultural advice for the ornamental does not describe it.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Rotational role',
      body: [
        {
          type: 'paragraph',
          text: 'Mashua is grown in the same high-altitude rotations as potato, oca and ulluco, and its unrelated family combined with its deterrent chemistry make it a useful break. Andean farmers frequently place it after potato for that reason.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage',
      body: [
        {
          type: 'paragraph',
          text: 'Tubers store reasonably in cool dark conditions and, as with oca, exposure to light and time changes their character. Traditional processing into freeze-dried products in the high Andes gives a storable form and is part of how the crop is used through the year.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Names by country',
      body: [
        {
          type: 'paragraph',
          text: 'Añu, isaño, cubio and mashua all name this crop in different Andean countries, and mashua is the name used in most English-language research. National statistics use their local names, which complicates assembling any regional production picture.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'andosol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'agroecology' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'oca' },
    { type: 'crop', slug: 'ulluco' },
    { type: 'crop', slug: 'potato' },
  ],
  glossaryTerms: ['perennial-crop', 'crop-rotation'],
  geographicScope:
    'The Andes of Colombia, Ecuador, Peru, Bolivia and northern Argentina.',
  climateContext:
    'Cool high-altitude tropical; short-day tuberisation with a reported critical daylength near thirteen hours, and frost-sensitive top growth.',
  limitations: [
    'The deterrent effect on nematodes and insects is documented qualitatively in the Andean literature and no efficacy figures are given here.',
    'Glucosinolate content varies between accessions and with preparation; no dietary guidance is given.',
    'Reported photoperiod thresholds come from trial literature and differ between varieties.',
  ],
  sourceReferences: [
    { sourceId: 'cip', citedFor: 'Andean root and tuber crop research' },
    {
      sourceId: 'cgiar',
      citedFor: 'Andean tuber germplasm and virus research',
    },
    { sourceId: 'cabi', citedFor: 'Tropaeolum tuberosum compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'pe-midagri',
      citedFor: 'Peruvian Andean crop production context',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Mashua',
    description:
      'Tropaeolum tuberosum as a crop: glucosinolates that deter nematodes, high vigour on poor ground, a daylength threshold and virus in clones.',
    keywords: [
      'mashua',
      'Tropaeolum tuberosum',
      'añu',
      'isaño',
      'Andean tuber',
    ],
  },
  structuredData: { article: true },
};
