import type { CropContent } from '@/types/content';

export const kaffirLime: CropContent = {
  id: 'crop-kaffir-lime',
  slug: 'kaffir-lime',
  contentType: 'crop',
  title: 'Makrut Lime',
  scientificName: 'Citrus hystrix',
  alternativeNames: ['Kaffir lime', 'Makrut', 'Thai lime', 'Combava'],
  category: 'Spice crop',
  subcategory: 'Citrus grown for leaves rather than fruit',
  botanicalFamily: 'Rutaceae (rue family)',
  lifecycle: 'Perennial',
  summary:
    'Makrut lime is the citrus grown for its leaves. The leaf is doubled — blade and winged petiole in an hourglass — and pruning height and shade are managed for leaf yield rather than for fruit.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Every other citrus in this corpus is grown for fruit. Makrut lime is grown for leaves: they carry more aromatic oil than any other citrus leaf and they are the product across Thai, Lao, Cambodian and Indonesian cooking. Thailand is the principal supplier of makrut leaf to the international market.',
    },
    {
      type: 'paragraph',
      text: 'The leaf itself is unusual. What looks like two leaves joined end to end is one blade above a winged petiole of almost the same size, giving the hourglass shape that identifies the species at a glance. The fruit is bumpy, dry and hard to juice, and its rind rather than its juice is what is used.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rutaceae (rue family)' },
    {
      label: 'Harvested organ',
      value: 'Leaves, with rind as a secondary product',
    },
    {
      label: 'Leaf form',
      value: 'Doubled — blade above a winged petiole of similar size',
    },
    {
      label: 'Oil content',
      value: 'Reported as the highest of any citrus leaf',
    },
    { label: 'Principal supplier', value: 'Thailand' },
    {
      label: 'Naming',
      value:
        '"Kaffir" is a racial slur in southern Africa; "makrut" is the preferred name',
    },
  ],
  sections: [
    {
      id: 'leaf-crop',
      heading: 'A citrus managed for leaves',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit citrus is pruned to open a canopy and carry a crop; makrut is pruned to produce leaf flushes. Trial work in Thailand reports that leaving a taller main stem at pruning — around thirty centimetres rather than ten — gives markedly better growth and yield, and that mild shading raises leaf production by improving photosynthesis and water-use efficiency. Both are decisions no fruit citrus grower would make.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'double-leaf',
      heading: 'The doubled leaf',
      body: [
        {
          type: 'paragraph',
          text: 'The winged petiole is nearly as large as the blade, so a single leaf reads as two. It is the reliable field identification for the species and it is also part of the product specification: buyers of dried and frozen leaf grade on intact double leaves, and a broken wing costs grade.',
        },
      ],
    },
    {
      id: 'shade',
      heading: 'Shade as an input',
      body: [
        {
          type: 'paragraph',
          text: 'Full sun is the default for citrus and it is not the default here. Reported responses to mild shading — more leaf, better water-use efficiency — make shade a managed input, which suits the crop to interplanting and to the partly shaded home gardens where much of it is grown across Southeast Asia.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'fruit',
      heading: 'The fruit is a by-product',
      body: [
        {
          type: 'paragraph',
          text: 'The fruit is small, deeply bumpy and almost dry, so it is not juiced. The rind is used, and the juice that exists is sharp and used sparingly. A grower selling leaf treats fruit set as a competing sink rather than as a harvest.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'A name that is being retired',
      body: [
        {
          type: 'paragraph',
          text: '"Kaffir" is a racial slur in southern Africa, and the crop is increasingly traded and published as makrut lime or Thai lime. AgricultureID uses makrut as the title and keeps the older name as an alternative so that existing records still resolve, which is a records decision rather than an endorsement of the name.',
        },
      ],
    },
    {
      id: 'disease',
      heading: 'Leaf blight',
      body: [
        {
          type: 'paragraph',
          text: 'Because the leaf is the product, foliar disease is a total loss rather than a yield reduction, and leaf blight has been described and characterised on the crop in northern Thailand. Management is the same shape as for any high-value leaf crop: clean planting material, canopy airflow, sanitation and prompt removal of affected material.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Propagation and thorns',
      body: [
        {
          type: 'paragraph',
          text: 'The tree is thorny, which shapes pruning and picking, and it is propagated by grafting or cuttings to fix leaf type. Seedling trees vary and take longer, and in a crop sold on leaf appearance that variability reaches the product.',
        },
      ],
    },
    {
      id: 'citrus-scope',
      heading: 'Where it sits in the genus',
      body: [
        {
          type: 'paragraph',
          text: 'Citrus hystrix is a species in its own right rather than a cultivar group of the hybrid complex that carries orange, grapefruit and mandarin. It shares the genus and its diseases, notably huanglongbing and the psyllids that transmit it, and nothing else about how it is grown.',
        },
      ],
    },
    {
      id: 'markets',
      heading: 'How the leaf moves',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf is traded fresh, frozen and dried, and the three are different products with different prices and different shelf lives. Fresh leaf into export markets depends on a cold chain and on plant-health clearance for leaf material, which is a stricter category than fruit in several importing jurisdictions.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'huanglongbing' },
    { type: 'plant-disease', slug: 'citrus-canker' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'psyllids' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'solar-radiation' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'shade-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lime' },
    { type: 'crop', slug: 'citrus' },
    { type: 'crop', slug: 'black-pepper' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Thailand, Indonesia, Malaysia, Laos, Cambodia and Vietnam, with Thailand the principal supplier of leaf to international markets.',
  climateContext:
    'Humid tropical; tolerant of and responsive to partial shade, and intolerant of frost.',
  limitations: [
    'Reported pruning and shading responses come from trial work in northern Thailand and are not a specification for other conditions.',
    'Plant-health requirements for leaf material differ from those for fruit and are jurisdictional.',
    'Huanglongbing status and permitted controls differ by jurisdiction.',
  ],
  sourceReferences: [
    { sourceId: 'powo-plants-of-the-world-online', citedFor: 'Accepted name' },
    { sourceId: 'wfo-world-flora-online', citedFor: 'Nomenclature' },
    { sourceId: 'cabi', citedFor: 'Citrus hystrix compendium data' },
    { sourceId: 'fao', citedFor: 'Tropical spice and horticulture context' },
    {
      sourceId: 'id-pertanian',
      citedFor: 'Southeast Asian horticulture production context',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Makrut Lime',
    description:
      'Citrus hystrix as a crop: leaves rather than fruit, the doubled leaf, pruning height and shade as yield inputs, leaf blight and a name being retired.',
    keywords: [
      'makrut lime',
      'kaffir lime',
      'Citrus hystrix',
      'Thai lime',
      'citrus leaf crop',
    ],
  },
  structuredData: { article: true },
};
