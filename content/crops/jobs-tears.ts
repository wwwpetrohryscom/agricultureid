import type { CropContent } from '@/types/content';

export const jobsTears: CropContent = {
  id: 'crop-jobs-tears',
  slug: 'jobs-tears',
  contentType: 'crop',
  title: "Job's Tears",
  scientificName: 'Coix lacryma-jobi',
  alternativeNames: ['Adlay', 'Coix seed', 'Chinese pearl barley'],
  category: 'Cereal crop',
  subcategory: 'Tropical cereal with a hardened fruit case',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    "Job's tears divides into two plants that look alike: a soft-shelled variety that can be threshed and eaten, and a stone-hard wild form whose fruit cases are drilled and strung as beads.",
  introduction: [
    {
      type: 'paragraph',
      text: "Job's tears is a tall tropical grass grown in East and Southeast Asia for a grain eaten in soups, porridges and drinks. It is unusual among cereals in that the grain sits inside a hardened structure formed from a modified leaf sheath rather than in an ordinary husk.",
    },
    {
      type: 'paragraph',
      text: 'How hard that structure is decides what the plant is for. The cultivated soft-shelled variety, var. ma-yuen, can be cracked by hand or threshed with ordinary machinery and is the food crop. Hard-shelled forms produce pearly, stone-hard cases used as beads, and they are not a cereal in any practical sense.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Edible variety',
      value: 'Coix lacryma-jobi var. ma-yuen, soft-shelled and threshable',
    },
    {
      label: 'Bead forms',
      value: 'Hard-shelled wild and ornamental varieties, used for beads',
    },
    {
      label: 'Grain enclosure',
      value: 'A hardened modified leaf sheath, not an ordinary husk',
    },
    {
      label: 'Regions',
      value:
        'China, Korea, Japan, Thailand, Vietnam, the Philippines and north-east India',
    },
    { label: 'Habit', value: 'Tall annual grass, often two metres or more' },
  ],
  sections: [
    {
      id: 'two-forms',
      heading: 'Soft shell and hard shell',
      body: [
        {
          type: 'paragraph',
          text: 'The domesticated var. ma-yuen has a soft case that yields to hand pressure or a threshing machine, and its seeds are longer, darker and easy to hull. Wild and ornamental forms carry a case hard enough to be drilled and strung, and no amount of processing turns them into a practical food. A planting of the wrong form is not a poor crop; it is a different product.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'threshing',
      heading: 'Threshing decides everything',
      body: [
        {
          type: 'paragraph',
          text: 'Because the grain sits in a hardened case, the entire viability of the crop as food rests on whether that case can be removed at reasonable cost. This is why the soft-shelled variety was selected, and why the crop is grown where dehulling equipment or the labour to do it by hand exists.',
        },
      ],
    },
    {
      id: 'height',
      heading: 'A tall grass in a wet season',
      body: [
        {
          type: 'paragraph',
          text: 'The plant reaches two metres or more and is grown through the rainy season in humid tropical and subtropical conditions, often on wet ground and field margins. Its height and its tolerance of wet soil place it where a shorter cereal would be lost.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Food, drink and tradition',
      body: [
        {
          type: 'paragraph',
          text: 'The grain is steamed like rice, milled into flour, used in soups and desserts and brewed into drinks, and it is also used in traditional preparations across East Asia. AgricultureID records the food and cultural uses; medicinal claims and preparations belong to clinical and food sources and none are given here.',
        },
      ],
    },
    {
      id: 'beads',
      heading: 'The bead trade is a real product',
      body: [
        {
          type: 'paragraph',
          text: 'The hard-shelled forms have been used for prayer beads, rosaries and jewellery across a wide geography, and this is a genuine agricultural product of the species with its own quality criteria — evenness, colour and shell hardness. It is one of the few cereals with a non-food product taken from the grain itself.',
        },
      ],
    },
    {
      id: 'names',
      heading: 'Adlay and coix',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is sold as adlay, coix seed, hato mugi and Chinese pearl barley, and the last is misleading: the plant is not a barley and not closely related to it. Trade records under "pearl barley" have to be resolved before they can be matched.',
        },
      ],
    },
    {
      id: 'naturalised',
      heading: 'A grass that escapes',
      body: [
        {
          type: 'paragraph',
          text: 'Coix lacryma-jobi has naturalised widely across the tropics along ditches and watercourses, and in some regions it is regarded as a weed. Escaped populations are generally hard-shelled forms, so a naturalised stand is not a food resource.',
        },
      ],
    },
    {
      id: 'genetics',
      heading: 'A recent genome, an old crop',
      body: [
        {
          type: 'paragraph',
          text: 'A genome assembly for soft-shelled adlay has only recently been published, and formal breeding for the crop is limited compared with its long cultivation. Improvement has depended on landrace selection, which is the usual situation for a regionally important cereal outside the global commodity set.',
        },
      ],
    },
    {
      id: 'smut',
      heading: 'Disease',
      body: [
        {
          type: 'paragraph',
          text: 'Head smut is the disease most often reported in the crop, and because the grain is enclosed in a persistent case, infected heads are not always obvious before threshing. Clean seed and rotation are the usual controls.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'common-smut' },
    { type: 'plant-disease', slug: 'rice-blast' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'grasshoppers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'shifting-cultivation' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'dehulling-shelling' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'rice' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'China, Korea, Japan, Thailand, Vietnam, the Philippines, Myanmar and north-east India. Naturalised across much of the tropics.',
  climateContext:
    'Humid tropical and subtropical; grown through the rainy season and tolerant of wet ground.',
  limitations: [
    'Traditional medicinal uses of the grain are outside the scope of an agronomic page and no guidance is given.',
    'Statements about the crop apply to the soft-shelled cultivated variety unless stated; hard-shelled forms are a different product.',
    'Naturalisation and weed status are region-specific and are not reproduced here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Coix lacryma-jobi compendium data and naturalised status',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cn-mara', citedFor: 'Chinese adlay production context' },
    { sourceId: 'fao', citedFor: 'Underutilised cereal production context' },
    { sourceId: 'cgiar', citedFor: 'Underutilised species research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: "Job's Tears",
    description:
      'Coix lacryma-jobi as a crop: soft-shelled edible ma-yuen against stone-hard bead forms, threshing as the deciding factor, and the pearl-barley naming trap.',
    keywords: [
      "Job's tears",
      'Coix lacryma-jobi',
      'adlay',
      'coix seed',
      'soft-shelled variety',
    ],
  },
  structuredData: { article: true },
};
