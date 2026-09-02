import type { CropContent } from '@/types/content';

export const velvetBean: CropContent = {
  id: 'crop-velvet-bean',
  slug: 'velvet-bean',
  contentType: 'crop',
  title: 'Velvet Bean',
  scientificName: 'Mucuna pruriens',
  alternativeNames: ['Mucuna', 'Cowitch', 'Bengal bean'],
  category: 'Cover crop',
  subcategory:
    'Vigorous tropical legume grown for green manure and weed suppression',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Annual',
  summary:
    'Velvet bean is grown to smother a weed. Its adoption across West Africa and Latin America followed from one capability: a mucuna fallow suppresses Imperata cylindrica, the grass that makes land unfarmable.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Velvet bean is a vigorous tropical legume grown as a cover crop and green manure rather than for a harvest. It fixes nitrogen, produces very large quantities of biomass and covers the ground completely within weeks.',
    },
    {
      type: 'paragraph',
      text: 'What made it spread is weed control. Imperata cylindrica, cogongrass, is one of the most damaging weeds of tropical smallholder agriculture and it takes land out of cultivation. Mucuna fallows suppress it, and in southern Benin some three thousand farmers took up the practice between 1988 and 1993 largely for that reason.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Purpose',
      value:
        'Cover crop, green manure and weed suppression rather than harvest',
    },
    {
      label: 'Principal target weed',
      value: 'Imperata cylindrica, cogongrass',
    },
    {
      label: 'Seed chemistry',
      value: 'Contains L-DOPA, which limits food and monogastric feed use',
    },
    {
      label: 'Nitrogen',
      value: 'Nodulates freely and contributes nitrogen to the following crop',
    },
    {
      label: 'Systems',
      value: 'Relay intercropped with maize, or grown as a planted fallow',
    },
  ],
  sections: [
    {
      id: 'imperata',
      heading: 'Suppressing cogongrass',
      body: [
        {
          type: 'paragraph',
          text: 'Imperata cylindrica spreads by rhizome, tolerates fire and burns hot, and it removes land from cultivation across the humid tropics. A dense mucuna cover shades it out and its residues suppress regrowth, and the effect has been documented in Latin America, West Africa and Asia. For a farmer whose alternative is abandoning the field, that capability is the whole argument for the crop.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'relay',
      heading: 'Relay intercropping with maize',
      body: [
        {
          type: 'paragraph',
          text: 'The standard system sows mucuna into a standing maize crop partway through the season, so the legume covers the ground as the maize matures and continues through the dry season. Reports from Benin describe maize following mucuna yielding well without applied nitrogen fertiliser. AgricultureID records the practice and the reported outcome without asserting a rate.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'l-dopa',
      heading: 'L-DOPA and why the seed is not a pulse',
      body: [
        {
          type: 'paragraph',
          text: 'The seed contains L-DOPA, and that, with other antinutritional compounds, is what keeps a high-protein legume out of the food and monogastric feed chain without processing. It is also part of why the plant has few disease problems. A crop with abundant seed that cannot easily be eaten is unusual, and it is the reason mucuna stayed a green-manure crop.',
        },
      ],
    },
    {
      id: 'hairs',
      heading: 'Stinging hairs',
      body: [
        {
          type: 'paragraph',
          text: 'Pods of wild and some cultivated forms carry irritant hairs — the source of the name cowitch — that cause intense itching, and handling seed from those types requires protection. Cultivated var. utilis types are largely free of them, and which type a grower has is a practical safety question rather than a botanical detail.',
        },
      ],
    },
    {
      id: 'biomass',
      heading: 'Biomass, and what happens to it',
      body: [
        {
          type: 'paragraph',
          text: 'The crop produces very large quantities of vegetation, and the value of that biomass depends on whether it is incorporated, left as mulch or grazed. Left as surface mulch it suppresses weeds through the dry season; incorporated it releases nitrogen faster. The decision is the main management lever the crop offers.',
        },
      ],
    },
    {
      id: 'fallow',
      heading: 'A planted fallow',
      body: [
        {
          type: 'paragraph',
          text: 'Mucuna functions as a short planted fallow that restores fertility and clears weeds faster than natural regrowth, which is why it appears in work on intensifying shifting cultivation. It occupies land without producing a saleable crop, and that opportunity cost is the most common reason it is not adopted.',
        },
      ],
    },
    {
      id: 'nematodes',
      heading: 'Effects on nematodes',
      body: [
        {
          type: 'paragraph',
          text: 'Mucuna has been reported to reduce populations of some plant-parasitic nematodes when used in rotation, and it is included in nematode-management programmes for that reason. The effect varies by nematode species and system, and is not general.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed supply',
      body: [
        {
          type: 'paragraph',
          text: 'Because the crop is not harvested, seed for the next planting has to be produced deliberately, and seed availability is repeatedly named as the constraint on adoption. That is the same structural problem that limits tropical forage legumes, and it is not agronomic.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'Varieties and names',
      body: [
        {
          type: 'paragraph',
          text: 'Mucuna pruriens var. utilis covers the cultivated non-stinging forms, and the crop is sold as mucuna, velvet bean, Bengal bean and Florida velvet bean. Wild Mucuna pruriens is a different proposition in the field, and records that do not distinguish them are ambiguous.',
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
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'shifting-cultivation' },
    { type: 'farming-system', slug: 'agroecology' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lablab' },
    { type: 'crop', slug: 'cowpea' },
    { type: 'crop', slug: 'stylo' },
  ],
  glossaryTerms: ['annual-crop', 'cover-crop', 'crop-rotation'],
  geographicScope:
    'Humid tropics of West and Central Africa — with documented adoption in southern Benin — and of Latin America and Southeast Asia; historically grown in the southern United States.',
  climateContext:
    'Humid tropical; requires warmth and a long enough wet season to build cover, and is frost-intolerant.',
  limitations: [
    'Reported effects on Imperata and on following-crop yields come from specific systems and sites and are not general figures.',
    'L-DOPA content varies by accession; no food, feed or medicinal guidance is given here.',
    'Stinging-hair status depends on the type grown and must be established before handling.',
  ],
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor: 'West African cover crop and Imperata research',
    },
    { sourceId: 'cgiar', citedFor: 'Tropical legume cover crop research' },
    {
      sourceId: 'fao',
      citedFor: 'Agroecology and cover cropping case material',
    },
    { sourceId: 'cabi', citedFor: 'Mucuna pruriens compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Velvet Bean',
    description:
      'Mucuna pruriens as a crop: suppressing cogongrass, relay intercropping with maize, L-DOPA keeping the seed out of food, stinging hairs and seed supply.',
    keywords: [
      'velvet bean',
      'Mucuna pruriens',
      'cover crop',
      'Imperata',
      'green manure',
    ],
  },
  structuredData: { article: true },
};
