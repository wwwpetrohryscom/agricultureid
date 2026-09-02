import type { CropContent } from '@/types/content';

export const waterleaf: CropContent = {
  id: 'crop-waterleaf',
  slug: 'waterleaf',
  contentType: 'crop',
  title: 'Waterleaf',
  scientificName: 'Talinum fruticosum',
  alternativeNames: [
    'Surinam purslane',
    'Ceylon spinach',
    'Philippine spinach',
    'Talinum triangulare',
  ],
  category: 'Vegetable crop',
  subcategory: 'Fast-growing succulent leafy vegetable',
  botanicalFamily: 'Talinaceae',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Waterleaf reaches its first harvest in about 35 to 45 days and is then cut every two weeks for roughly a year, which makes it one of the fastest-returning vegetables a smallholder can plant.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Waterleaf is a succulent leafy vegetable widely grown in southern Nigeria and across humid West Africa, and also in the Caribbean, Latin America and Southeast Asia. It is eaten cooked, usually combined with a firmer green, and its soft, mucilaginous texture is what it is grown for.',
    },
    {
      type: 'paragraph',
      text: 'Its agronomic distinction is speed. The first cut comes about 35 to 45 days after sowing, and the stand is then cut roughly every two weeks for around a year. Very few vegetables return a harvest that quickly or for that long from one planting.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Talinaceae' },
    {
      label: 'Time to first harvest',
      value: 'About 35 to 45 days from sowing',
    },
    {
      label: 'Harvest interval',
      value: 'Roughly every two weeks, for about a year',
    },
    {
      label: 'Habit',
      value: 'Succulent perennial herb, usually grown as an annual',
    },
    {
      label: 'Propagation',
      value: 'Seed or stem cuttings, which root readily',
    },
    {
      label: 'Status',
      value:
        'Grown as a crop and also common as a volunteer on disturbed ground',
    },
  ],
  sections: [
    {
      id: 'speed',
      heading: 'Speed is the crop',
      body: [
        {
          type: 'paragraph',
          text: 'A first cut in about 35 to 45 days and repeated cutting every fortnight for around a year is a return profile no conventional vegetable matches, and it is why waterleaf is grown on small plots close to homes and markets. Where a household needs greens within six weeks, the choice of this crop is a decision about time rather than about yield.',
        },
      ],
    },
    {
      id: 'cuttings',
      heading: 'Propagated by cuttings as readily as by seed',
      body: [
        {
          type: 'paragraph',
          text: 'Stems root easily, so a planting can be established from cuttings taken from an existing stand, which removes seed cost entirely. That is a large part of why the crop spreads through informal exchange rather than through seed markets, and why it is poorly represented in seed statistics.',
        },
      ],
    },
    {
      id: 'succulent',
      heading: 'A succulent leaf and what follows from it',
      body: [
        {
          type: 'paragraph',
          text: 'The leaves and stems are watery and soft, so the crop wilts within hours of cutting and does not travel or store. It is a market-garden and home-garden vegetable by construction, sold within a day of harvest, and any attempt to move it further requires a cold chain that its price does not usually justify.',
        },
      ],
    },
    {
      id: 'weed',
      heading: 'A crop that is also a volunteer',
      body: [
        {
          type: 'paragraph',
          text: 'Waterleaf establishes freely on disturbed and cultivated ground and appears as a volunteer in fields where it was never sown, and in some places it is treated as a weed. A stand can therefore be a crop, a tolerated volunteer or a weed depending only on whether someone wants it.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Nitrogen and repeated cutting',
      body: [
        {
          type: 'paragraph',
          text: 'Repeated fortnightly cutting removes nitrogen steadily, and the crop is highly responsive to it, which raises the same nitrate-accumulation consideration that applies to other heavily fertilised leafy vegetables. The pre-harvest interval for any input is also short by construction.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'oxalate',
      heading: 'Oxalate',
      body: [
        {
          type: 'paragraph',
          text: 'Like purslane and several other succulent leafy vegetables, waterleaf contains oxalic acid, which is why it is cooked rather than eaten raw in its range and often combined with other greens. This is a compositional characteristic of the crop; dietary questions belong to food authorities.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'Names that overlap badly',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is called Ceylon spinach, Philippine spinach, Surinam purslane and Lagos bologi, and "Ceylon spinach" is also a common name for Basella alba, which is an entirely different plant. The synonym Talinum triangulare is still widely used in African literature. Matching records for this crop requires resolving both the common name and the synonym.',
        },
      ],
    },
    {
      id: 'shade',
      heading: 'Shade and moisture',
      body: [
        {
          type: 'paragraph',
          text: 'The crop tolerates partial shade and needs consistent moisture, and it is grown under tree crops and in shaded backyard plots where a sun-demanding vegetable would not perform. It is frost-intolerant and strictly a warm-climate crop.',
        },
      ],
    },
    {
      id: 'research',
      heading: 'A crop with thin formal agronomy',
      body: [
        {
          type: 'paragraph',
          text: 'Published agronomy for waterleaf is limited relative to its use, and the reported figures come from a small number of trials in Nigeria, the Caribbean and Florida. That thinness is itself a finding about the crop: it is widely eaten and lightly studied.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'snails' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'permaculture' },
    { type: 'farming-system', slug: 'agroecology' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'basin-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'amaranth' },
    { type: 'crop', slug: 'water-spinach' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'Southern Nigeria and humid West Africa; also the Caribbean, tropical South America and Southeast Asia. Naturalised widely in the humid tropics.',
  climateContext:
    'Humid tropical; requires warmth and consistent moisture, tolerates partial shade and is killed by frost.',
  limitations: [
    'Reported harvest intervals and durations come from a small trial literature and vary with fertility and management.',
    'Oxalate content is a compositional characteristic; no dietary guidance is given here.',
    'Common names overlap with unrelated species, notably Basella alba.',
  ],
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor: 'West African vegetable production research',
    },
    { sourceId: 'cabi', citedFor: 'Talinum fruticosum compendium data' },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and distribution',
    },
    { sourceId: 'fao', citedFor: 'African leafy vegetable production context' },
    { sourceId: 'cgiar', citedFor: 'Underutilised vegetable research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Waterleaf',
    description:
      'Talinum fruticosum as a crop: first harvest in 35 to 45 days then fortnightly cutting for a year, propagation by cuttings, no shelf life and overlapping names.',
    keywords: [
      'waterleaf',
      'Talinum fruticosum',
      'Talinum triangulare',
      'African leafy vegetable',
      'fast-growing green',
    ],
  },
  structuredData: { article: true },
};
