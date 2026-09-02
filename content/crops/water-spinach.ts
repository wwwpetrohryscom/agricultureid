import type { CropContent } from '@/types/content';

export const waterSpinach: CropContent = {
  id: 'crop-water-spinach',
  slug: 'water-spinach',
  contentType: 'crop',
  title: 'Water Spinach',
  scientificName: 'Ipomoea aquatica',
  alternativeNames: ['Kangkong', 'Ong choy', 'Swamp cabbage'],
  category: 'Vegetable crop',
  subcategory: 'Aquatic or upland leafy vegetable',
  botanicalFamily: 'Convolvulaceae (bindweed family)',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Water spinach is a fast leafy vegetable grown either floating in water or on land, cut repeatedly from the same planting — and a regulated noxious weed in parts of the United States for exactly the traits that make it productive.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Water spinach grows in two entirely different ways from the same species. Aquatic types are grown floating or rooted in shallow water and cut from boats or banks; upland types are grown in beds like any leafy vegetable. Both are cut repeatedly rather than harvested once.',
    },
    {
      type: 'paragraph',
      text: 'It is a major green across Southeast Asia and southern China, and the vigour and rooting-from-nodes habit that make it so productive also make it an aggressive invader of waterways, which is why it is regulated in parts of the United States.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value:
        'Convolvulaceae (bindweed family) — related to sweet potato, not to spinach',
    },
    {
      label: 'Systems',
      value: 'Aquatic (floating or shallow water) and upland bed cultivation',
    },
    {
      label: 'Harvest',
      value: 'Cut repeatedly from the same planting over months',
    },
    { label: 'Growth rate', value: 'Among the fastest of leafy vegetables' },
    {
      label: 'Regulatory status',
      value: 'A listed noxious weed in parts of the United States',
    },
    {
      label: 'Propagation',
      value: 'From seed or from stem cuttings that root at the nodes',
    },
  ],
  sections: [
    {
      id: 'two-systems',
      heading: 'Aquatic and upland are different crops',
      body: [
        {
          type: 'paragraph',
          text: 'Aquatic production grows the plant in standing water where it forms floating mats with hollow stems, and upland production grows it in drained beds under irrigation. The same species behaves differently enough in the two that cultivars, spacing, harvest method and water management have almost nothing in common.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'cut-and-regrow',
      heading: 'Cut repeatedly, not once',
      body: [
        {
          type: 'paragraph',
          text: 'Shoots are cut a few centimetres above the base and regrow from the remaining stem, allowing harvests every one to three weeks over months. That makes water spinach a continuous rather than a single-harvest vegetable, and the cutting height determines whether the planting persists.',
        },
      ],
    },
    {
      id: 'speed',
      heading: 'Speed and nitrogen',
      body: [
        {
          type: 'paragraph',
          text: 'Growth is very fast and the crop is highly responsive to nitrogen, which is why it is productive on small areas and why nitrate accumulation in the leaf is a genuine quality consideration where heavy fertilisation is practised.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'invasive',
      heading: 'Regulated as a weed',
      body: [
        {
          type: 'paragraph',
          text: 'Stems root readily at the nodes and fragments establish new plants, so escaped material spreads rapidly in warm waterways and forms mats that block flow and displace native vegetation. It is a federally listed noxious weed in the United States, and cultivation there is permitted only under state controls where it is permitted at all.',
        },
      ],
    },
    {
      id: 'water-quality',
      heading: 'Where it is grown matters',
      body: [
        {
          type: 'paragraph',
          text: 'Because aquatic types grow in and are cut from standing water, the quality of that water becomes the quality of the vegetable. Production in contaminated urban or industrial water is a documented food-safety concern in several countries, and it is a siting question rather than an agronomic one.',
        },
      ],
    },
    {
      id: 'not-spinach',
      heading: 'Not a spinach',
      body: [
        {
          type: 'paragraph',
          text: 'The plant is a morning glory, in the same genus as sweet potato, and is unrelated to spinach. Advice written for spinach — bolting behaviour, oxalate content, cool-season timing — does not apply, and the two occupy opposite ends of the temperature range.',
        },
      ],
    },
    {
      id: 'season',
      heading: 'A hot-season green',
      body: [
        {
          type: 'paragraph',
          text: 'Water spinach thrives in the heat and humidity that stop most temperate leafy vegetables, which is precisely its role in tropical vegetable systems: it produces greens in the season when nothing else will. It is killed by frost.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests of a repeatedly cut crop',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf-feeding caterpillars and aphids are the main problems, and because the crop is cut every one to three weeks the pre-harvest interval for any treatment is the binding constraint. That pushes management towards sanitation, netting and biological options.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Seed and cuttings',
      body: [
        {
          type: 'paragraph',
          text: 'Upland production is usually from seed while aquatic production is commonly from cuttings, and cuttings carry whatever the parent stand had. Clean planting material matters for virus and for weed-status compliance where the crop is regulated.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'fluvisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'aquaponics' },
    { type: 'farming-system', slug: 'rice-fish-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'irrigation-method', slug: 'basin-irrigation' },
    { type: 'irrigation-method', slug: 'surface-irrigation' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sweet-potato' },
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'amaranth' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'Southeast Asia, southern China and South Asia. Cultivation is restricted or prohibited in parts of the United States.',
  climateContext:
    'Tropical and subtropical; requires heat and abundant water and is killed by frost.',
  limitations: [
    'Noxious-weed listings and cultivation permits differ by jurisdiction and are not reproduced here; consult the relevant authority before planting.',
    'Food-safety risk from growing water depends entirely on the water source and is a siting question.',
    'Nitrate accumulation depends on fertilisation practice and is not quantified here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Tropical leafy vegetable production' },
    {
      sourceId: 'cabi',
      citedFor: 'Ipomoea aquatica compendium data and invasive status',
    },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification, nomenclature and noxious weed listing',
    },
    { sourceId: 'cgiar', citedFor: 'Tropical vegetable research' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Water Spinach',
    description:
      'Ipomoea aquatica as a crop: aquatic and upland systems, cut-and-regrow harvest, noxious weed status in the United States and water-quality concerns.',
    keywords: [
      'water spinach',
      'kangkong',
      'Ipomoea aquatica',
      'ong choy',
      'aquatic vegetable',
    ],
  },
  structuredData: { article: true },
};
