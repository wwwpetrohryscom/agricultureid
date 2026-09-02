import type { CropContent } from '@/types/content';

export const perilla: CropContent = {
  id: 'crop-perilla',
  slug: 'perilla',
  contentType: 'crop',
  title: 'Perilla',
  scientificName: 'Perilla frutescens',
  alternativeNames: ['Deulkkae', 'Shiso', 'Sesame leaf (misleading)', 'Egoma'],
  category: 'Oilseed crop',
  subcategory: 'Annual mint-family seed and leaf crop',
  botanicalFamily: 'Lamiaceae (mint family)',
  lifecycle: 'Annual',
  summary:
    'Perilla is two crops in one species: var. frutescens is grown for seed oil that is among the richest plant sources of alpha-linolenic acid, while var. crispa is grown for its leaf — and material selected for one is poor at the other.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Perilla frutescens is grown across Korea, Japan and China for two entirely different products. Variety frutescens is a seed and oil crop, pressed for an oil whose alpha-linolenic acid share is among the highest of any plant oil. Variety crispa is grown as a leaf, the shiso of Japanese cooking.',
    },
    {
      type: 'paragraph',
      text: 'The two botanical varieties are distinguished by leaf form and by their aromatic compounds, and they are handled as separate crops in the field. Advice for one does not transfer to the other, and the common English names for them overlap badly.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Lamiaceae (mint family)' },
    {
      label: 'Seed and oil variety',
      value: 'Perilla frutescens var. frutescens',
    },
    {
      label: 'Leaf variety',
      value: 'Perilla frutescens var. crispa, the shiso of Japanese cooking',
    },
    {
      label: 'Oil composition',
      value:
        'Alpha-linolenic acid roughly 53 to 62 per cent; linoleic acid roughly 10 to 13 per cent; oleic acid roughly 11 to 16 per cent',
    },
    {
      label: 'Distinguishing traits',
      value: 'Leaf form and aromatic compound profile',
    },
    {
      label: 'Naming hazard',
      value: 'Marketed as "sesame leaf" although it is not sesame',
    },
  ],
  sections: [
    {
      id: 'two-varieties',
      heading: 'One species, two crops',
      body: [
        {
          type: 'paragraph',
          text: 'Var. frutescens carries larger, flatter leaves and is grown to seed; var. crispa is smaller, frillier and deeply toothed and is grown as a leaf. They differ in their aromatic substances as well as their form, and a grower chooses between them before anything else, because harvest, spacing and timing follow from that choice and not from the species.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'ala',
      heading: 'An oil defined by one fatty acid',
      body: [
        {
          type: 'paragraph',
          text: 'Perilla seed oil is dominated by alpha-linolenic acid, with much smaller shares of linoleic and oleic acid; the reported ranges are in the key facts. That composition is the reason the crop is grown and also the reason the oil oxidises quickly, so pressing, packaging and storage practice matter more than they do for a stable oil.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'leaf',
      heading: 'The leaf crop',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf perilla is cut repeatedly from the same plants and marketed fresh, so it behaves like a cut herb rather than a seed crop: it is grown close, harvested often, and its quality is a matter of leaf size, colour and aroma rather than yield per hectare.',
        },
      ],
    },
    {
      id: 'not-sesame',
      heading: 'It is not sesame',
      body: [
        {
          type: 'paragraph',
          text: 'Perilla leaf is widely sold as "sesame leaf" in Korean markets and groceries. It is a mint, not a sesame, and sesame leaves are not the same product. Anyone matching this crop against a trade record or a recipe has to resolve that name before the record means anything.',
        },
      ],
    },
    {
      id: 'photoperiod',
      heading: 'Short-day flowering',
      body: [
        {
          type: 'paragraph',
          text: 'Perilla is short-day and flowers as daylength shortens in late summer, which suits the seed crop and works against the leaf crop, because flowering ends useful leaf production. Leaf growers in protected culture extend the day with supplementary light for exactly this reason.',
        },
      ],
    },
    {
      id: 'mint',
      heading: 'A mint in the rotation',
      body: [
        {
          type: 'paragraph',
          text: 'As a Lamiaceae, perilla shares pests and diseases with basil and mint rather than with the oilseed rotation, and downy mildew of basil is a relevant concern where the two are grown together. It gives no rotational break from other mint-family crops.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'weed',
      heading: 'A naturalised weed in some regions',
      body: [
        {
          type: 'paragraph',
          text: 'Perilla has naturalised widely outside cultivation, including in parts of North America, where it is regarded as a pasture weed and is documented as toxic to cattle when consumed in quantity at flowering. That the same species is a valued crop and a listed pasture problem is a genuine feature of its status.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'Seed handling',
      body: [
        {
          type: 'paragraph',
          text: 'The seed is small and the seed oil deteriorates in the seed as well as in the bottle, so seed for pressing is harvested promptly and dried, and seed for planting has short viability compared with cereal seed. Planting old perilla seed is a common cause of poor stands.',
        },
      ],
    },
    {
      id: 'korea',
      heading: 'Where it is a major crop',
      body: [
        {
          type: 'paragraph',
          text: "Korea grows perilla at national scale for oil and leaf, Japan grows both types with a strong culinary leaf tradition, and China grows it for seed. Outside East Asia it is a specialty crop, so most production knowledge is in those countries' extension systems.",
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'processing-method', slug: 'mechanical-pressing' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sesame' },
    { type: 'crop', slug: 'basil' },
    { type: 'crop', slug: 'flax' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'Korea, Japan and China as a field crop. Naturalised and regarded as a weed in parts of North America.',
  climateContext:
    'Warm-season short-day annual; frost-sensitive and flowering as daylength shortens.',
  limitations: [
    'Reported oil composition is a range from published analyses and varies with variety, environment and season.',
    'Livestock toxicity of naturalised perilla is documented in extension literature; no dosage or threshold is given here.',
    'The two botanical varieties are handled as separate crops and figures for one should not be applied to the other.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Perilla frutescens compendium data and naturalised status',
    },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and distribution',
    },
    { sourceId: 'jp-maff', citedFor: 'Japanese production context' },
    { sourceId: 'cn-mara', citedFor: 'Chinese oilseed production context' },
    { sourceId: 'fao', citedFor: 'Underutilised oilseed context' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Perilla',
    description:
      'Perilla frutescens as a crop: var. frutescens for seed oil against var. crispa for leaf, alpha-linolenic acid, short-day flowering and the sesame-leaf trap.',
    keywords: [
      'perilla',
      'Perilla frutescens',
      'deulkkae',
      'shiso',
      'perilla oil',
    ],
  },
  structuredData: { article: true },
};
