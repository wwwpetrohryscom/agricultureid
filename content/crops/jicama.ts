import type { CropContent } from '@/types/content';

export const jicama: CropContent = {
  id: 'crop-jicama',
  slug: 'jicama',
  contentType: 'crop',
  title: 'Jicama',
  scientificName: 'Pachyrhizus erosus',
  alternativeNames: ['Yam bean', 'Sengkuang', 'Bengkuang'],
  category: 'Root and tuber crop',
  subcategory: 'Legume grown for a storage root',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Jicama is a legume grown for a root, and everything above the root is toxic: the seeds and pods contain rotenone. Growers pinch off the flowers, because a plant allowed to set seed puts its energy there instead of into the tuber.',
  introduction: [
    {
      type: 'paragraph',
      text: "Jicama is a nitrogen-fixing legume grown for a large crisp storage root eaten raw. It combines the yield reliability of a root crop with a legume's contribution to soil fertility, which is an unusual pairing and is why it recurs in work on tropical smallholder systems.",
    },
    {
      type: 'paragraph',
      text: "Only the root is eaten. The vines, leaves, flowers, pods and especially the seeds contain rotenone and related rotenoids, which are toxic to mammals, fish and insects and are the basis of the plant's traditional use as an insecticide and fish poison.",
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    { label: 'Harvested organ', value: 'A single large storage root' },
    {
      label: 'Toxicity',
      value: 'Rotenone and rotenoids in seeds, pods, leaves and vines',
    },
    { label: 'Edible part', value: 'The root only' },
    {
      label: 'Key practice',
      value: 'Removal of flowers to direct assimilate into the root',
    },
    {
      label: 'Nitrogen',
      value: 'Nodulates and fixes nitrogen, unlike other root crops',
    },
  ],
  sections: [
    {
      id: 'rotenone',
      heading: 'A crop with a toxic top',
      body: [
        {
          type: 'paragraph',
          text: 'Rotenone occurs throughout the plant above ground and is concentrated in the seed, where reported levels vary widely by cultivar and conditions. The practical consequences are direct: the seed is not food, the haulm is only used as fodder where flowering shoots have been removed, and seed handling is a safety matter. This is recorded as a fact about the crop and no thresholds or handling instructions are given.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'deflowering',
      heading: 'Removing the flowers',
      body: [
        {
          type: 'paragraph',
          text: 'Flowering diverts assimilate from the root, and removing flowering shoots as they appear is described as the single most consequential cultural practice in the crop, with substantial effects on root size. It is labour, repeated over weeks, and it is what separates a marketable jicama crop from a field of vines.',
        },
      ],
    },
    {
      id: 'legume-root',
      heading: 'A root crop that fixes nitrogen',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava, sweet potato, yam and taro all take nitrogen from the soil. Jicama nodulates and fixes it, so it can occupy a place in a rotation that other root crops cannot and it leaves fertility rather than removing it. That combination is the reason it appears in agroecological system design well beyond its market size.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'raw',
      heading: 'Eaten raw and crisp',
      body: [
        {
          type: 'paragraph',
          text: 'The root is eaten raw, crisp and mildly sweet, and it holds that texture after cutting better than most vegetables, which is why it appears in fresh-cut and salad markets outside its home regions. Cooking is possible but is not what the crop is grown for.',
        },
      ],
    },
    {
      id: 'single-root',
      heading: 'One root per plant',
      body: [
        {
          type: 'paragraph',
          text: "Unlike cassava or sweet potato the plant produces a single large storage root, so plant population directly determines root count and each root carries a season's work. Spacing decisions therefore have an unusually direct effect on grade distribution.",
        },
      ],
    },
    {
      id: 'intercrop',
      heading: 'In mixtures and rotations',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is intercropped with maize and beans and used in rotations, and the dried haulm serves as fodder where reproductive pruning has removed the toxic flowering shoots. It fits smallholder systems for the same reasons it fits agroecological design.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'storage',
      heading: 'Storage and chilling',
      body: [
        {
          type: 'paragraph',
          text: 'Roots store for weeks to months in cool dry conditions and are damaged by chilling below the range that suits most vegetables, so they are not held at ordinary refrigeration temperatures. Skin damage at harvest shortens storage life sharply.',
        },
      ],
    },
    {
      id: 'species',
      heading: 'Three cultivated Pachyrhizus',
      body: [
        {
          type: 'paragraph',
          text: 'Pachyrhizus erosus is the Mexican yam bean; P. tuberosus and P. ahipa are cultivated in South America and differ in root form and season. Records naming "yam bean" may describe any of them, and the name also collides with African Sphenostylis stenocarpa, an unrelated crop.',
        },
      ],
    },
    {
      id: 'markets',
      heading: 'Where it moves',
      body: [
        {
          type: 'paragraph',
          text: 'Mexico and Central America, and Southeast Asia — where it is bengkuang or sengkuang — are the principal production regions, and export is largely into North American and Asian fresh markets. It is a substantial vegetable in those regions and marginal in international statistics.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'pod-borer' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'agroecology' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'clamp-storage' },
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sweet-potato' },
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'cowpea' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation'],
  geographicScope:
    'Mexico and Central America, and Southeast Asia — Indonesia, the Philippines, Thailand and Vietnam. Exported into North American and Asian fresh markets.',
  climateContext:
    'Warm tropical and subtropical; a long warm season and short-day flowering, with the root harvested before frost.',
  limitations: [
    'Rotenone content varies widely by cultivar and growing conditions; no thresholds, handling or safety instructions are given here.',
    'Records naming "yam bean" may describe any of three Pachyrhizus species or an unrelated African crop.',
    'Reported effects of flower removal come from trial and extension literature and vary with site and cultivar.',
  ],
  sourceReferences: [
    {
      sourceId: 'cgiar',
      citedFor: 'Tropical root and legume germplasm research',
    },
    { sourceId: 'fao', citedFor: 'Tropical root crop production context' },
    { sourceId: 'cabi', citedFor: 'Pachyrhizus erosus compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'id-pertanian',
      citedFor: 'Indonesian root vegetable production context',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Jicama',
    description:
      'Pachyrhizus erosus as a crop: a nitrogen-fixing legume grown for one root, rotenone in everything above ground, flower removal and three species under one name.',
    keywords: [
      'jicama',
      'Pachyrhizus erosus',
      'yam bean',
      'rotenone',
      'storage root legume',
    ],
  },
  structuredData: { article: true },
};
