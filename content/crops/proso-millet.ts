import type { CropContent } from '@/types/content';

export const prosoMillet: CropContent = {
  id: 'crop-proso-millet',
  slug: 'proso-millet',
  contentType: 'crop',
  title: 'Proso Millet',
  scientificName: 'Panicum miliaceum',
  alternativeNames: ['Common millet', 'Broomcorn millet', 'Hog millet'],
  category: 'Cereal grain',
  subcategory: 'Small millet',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'Proso millet uses less water to make a crop than any other grain in common cultivation, and finishes in a short season. It is the cereal of the driest margin of the North American plains and of dry Asian agriculture.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Proso millet produces grain on less total water than any other cereal grown at scale. That is its agricultural identity: not the highest yield, not the best quality, but a crop that finishes where the moisture available would not carry wheat or maize to maturity.',
    },
    {
      type: 'paragraph',
      text: 'It is grown across the semi-arid Great Plains as a rotation crop between wheat crops, and across dry parts of Asia and eastern Europe as a grain in its own right.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Photosynthetic pathway', value: 'C4' },
    {
      label: 'Distinguishing trait',
      value: 'The lowest total water requirement of the commonly grown cereals',
    },
    {
      label: 'Root system',
      value:
        'Shallow and fine; the crop escapes drought rather than mining moisture',
    },
    {
      label: 'Rotational role',
      value:
        'A short-season break between winter wheat crops in the semi-arid plains',
    },
    {
      label: 'Uses',
      value:
        'Human food in Asia and eastern Europe; birdseed and livestock feed elsewhere',
    },
  ],
  sections: [
    {
      id: 'water',
      heading: 'A crop chosen for its water use',
      body: [
        {
          type: 'paragraph',
          text: 'Proso millet completes a crop on less water than wheat, maize or sorghum, and that is the reason it is grown. In dryland rotations it fits into the moisture left after a wheat crop, allowing a harvest from a season that could not support a second full-season cereal.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'shallow',
      heading: 'Shallow roots, short season',
      body: [
        {
          type: 'paragraph',
          text: 'Its roots are shallow and fine rather than deep, so it does not survive drought by reaching moisture the way sorghum does. It survives by finishing quickly on what is near the surface, which makes it well suited to erratic rainfall and poorly suited to a long dry finish.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'The wheat-fallow alternative',
      body: [
        {
          type: 'paragraph',
          text: 'In the semi-arid plains proso millet is sown into the gap that would otherwise be summer fallow, converting a bare season into a harvest while keeping the rotation short enough that soil moisture is restored before the next wheat crop. That rotational fit is why it persists commercially in North America.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'Shattering sets the harvest date',
      body: [
        {
          type: 'paragraph',
          text: 'The panicle ripens unevenly and shatters once mature, so proso is frequently swathed rather than direct-combined and is cut before the whole panicle is ripe. Losses rise steeply with delay, and harvest timing is the crop’s principal management decision.',
        },
      ],
    },
    {
      id: 'markets',
      heading: 'Two different crops in the statistics',
      body: [
        {
          type: 'paragraph',
          text: 'In Asia and eastern Europe proso is a food grain; in North America most of the crop goes to birdseed and livestock feed. The quality specifications differ, and a production figure that does not say which market it describes is of limited use.',
        },
      ],
    },
    {
      id: 'weeds',
      heading: 'Weak competition',
      body: [
        {
          type: 'paragraph',
          text: 'Seedlings are small and the canopy closes slowly, so weed control in the first weeks determines the crop. Herbicide options are limited because the area is small, which makes rotation and a clean seedbed the main tools.',
        },
      ],
    },
    {
      id: 'fertility',
      heading: 'Low fertility requirement',
      body: [
        {
          type: 'paragraph',
          text: 'The crop responds to modest nitrogen and produces on soils too poor or too dry for a demanding cereal. Heavy nitrogen extends the season, which defeats the purpose of growing a crop chosen for finishing early.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'food',
      heading: 'Use as food',
      body: [
        {
          type: 'paragraph',
          text: 'Proso is eaten as porridge, as a steamed grain and in fermented and baked preparations across its Asian and eastern European range. It is gluten-free, which is a genuine property of the grain rather than a marketing claim, and it is used accordingly in some specialty milling.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Keeping quality',
      body: [
        {
          type: 'paragraph',
          text: 'The grain stores well when properly dried, and traditional systems have long used it as a reserve. Hulling is required before most food uses, and the hull fraction is substantial.',
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
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'chernozem' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'winnowing' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'foxtail-millet' },
    { type: 'crop', slug: 'wheat' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Semi-arid North American plains, dry parts of Asia, and eastern Europe. Use differs sharply between regions.',
  climateContext:
    'Warm-season C4 cereal; the lowest total water requirement of the commonly grown cereals, with shallow roots and a short season.',
  limitations: [
    'Water-requirement comparisons are relative statements about the crop and depend heavily on season length and environment; no figure is given.',
    'Production statistics conflate food, feed and birdseed use.',
    'Herbicide options are limited and jurisdiction-specific and are not described here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Small millet production and dryland cereal context',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'North American proso production and rotation use',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Panicum miliaceum compendium data' },
    { sourceId: 'cgiar', citedFor: 'Millet improvement research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Proso Millet',
    description:
      'Panicum miliaceum as a crop: the lowest water requirement of the common cereals, its wheat-rotation role in the semi-arid plains, shattering and harvest timing.',
    keywords: [
      'proso millet',
      'Panicum miliaceum',
      'broomcorn millet',
      'dryland rotation',
      'water use',
    ],
  },
  structuredData: { article: true },
};
