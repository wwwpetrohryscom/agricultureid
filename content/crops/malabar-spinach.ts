import type { CropContent } from '@/types/content';

export const malabarSpinach: CropContent = {
  id: 'crop-malabar-spinach',
  slug: 'malabar-spinach',
  contentType: 'crop',
  title: 'Malabar Spinach',
  scientificName: 'Basella alba',
  alternativeNames: [
    'Indian spinach',
    'Ceylon spinach',
    'Vine spinach',
    'Pui shak',
    'Basella',
  ],
  category: 'Leafy vegetable',
  subcategory: 'Climbing hot-season leaf crop',
  botanicalFamily: 'Basellaceae',
  lifecycle: 'Perennial grown as an annual',
  summary:
    'Malabar spinach is a climbing succulent leaf vegetable of the hot wet tropics, grown on supports and cut repeatedly through months in which temperate spinach cannot be produced at all.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Malabar spinach is not a spinach and is not related to one. It is a climbing succulent in the Basellaceae, grown for thick glossy leaves that hold their texture in heat and humidity, and its agricultural value is almost entirely a matter of timing: it produces through the hot wet months when Spinacia oleracea bolts within days of sowing and Brassica greens run to flower.',
    },
    {
      type: 'paragraph',
      text: 'Because it climbs, it occupies a different space in a garden or a field from any other leaf crop the corpus publishes. It is grown up poles, netting, fences and living supports, and the cost and availability of that support is as much a constraint on the crop as soil or water.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Basellaceae' },
    {
      label: 'Life cycle',
      value: 'Perennial in frost-free climates, grown as an annual elsewhere',
    },
    { label: 'Scientific name', value: 'Basella alba' },
    { label: 'Harvested part', value: 'Leaves and tender shoot tips' },
    { label: 'Growth habit', value: 'Twining vine requiring support' },
    {
      label: 'Climate',
      value: 'Hot and humid; produces where temperate greens bolt',
    },
    { label: 'Propagation', value: 'Seed or stem cuttings' },
  ],
  sections: [
    {
      id: 'hot-season',
      heading: 'The crop for the season nothing else covers',
      body: [
        {
          type: 'paragraph',
          text: 'The reason to grow Malabar spinach is a gap in the calendar. In the humid tropics and subtropics there is a period each year in which temperate leaf vegetables cannot be produced: spinach bolts, lettuce turns bitter, and the brassica greens flower. Malabar spinach grows fastest exactly then. A vegetable calendar that includes it looks continuous where one that does not has a hole.',
        },
      ],
    },
    {
      id: 'climbing',
      heading: 'A leaf crop that needs a structure',
      body: [
        {
          type: 'paragraph',
          text: 'The plant twines and will climb three metres or more in a season. Grown flat on the ground it produces poorly and the leaves foul; grown on a support it produces heavily and is easy to cut. That makes the support a real input — poles, wire, netting or a living hedge — and it is why the crop is more common in homestead and peri-urban production than in extensive field vegetable systems.',
        },
      ],
    },
    {
      id: 'cutting',
      heading: 'Cut and regrown',
      body: [
        {
          type: 'paragraph',
          text: "Harvest is by cutting shoot tips and leaves, which prompts branching and further growth, so a single planting supplies a household or a market stall over months. Cuttings root readily, so a grower can establish a new stand from an existing one without seed, and much of the crop's spread has happened that way.",
        },
      ],
    },
    {
      id: 'mucilage',
      heading: 'Texture and cooking',
      body: [
        {
          type: 'paragraph',
          text: 'The leaves are mucilaginous when cooked, in the same way as jute mallow and okra, and that texture determines how the crop is used and where it is accepted. It is a valued quality in the cuisines that grow the crop and the reason it substitutes poorly for spinach in cuisines that do not.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: 'Continuous cutting removes nutrients steadily rather than in one harvest, and the crop is usually grown on garden soils with organic amendment. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf-spotting fungi in prolonged wet weather and root-knot nematode in short vegetable rotations are the main constraints; the crop carries few specialised pests of its own. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'The crop grows on most soils that hold moisture and drain, and responds strongly to organic matter. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Seed, cuttings and stand renewal',
      body: [
        {
          type: 'paragraph',
          text: 'Seed germinates slowly and unevenly and is often scarified or soaked; cuttings root in days and are the usual method where planting material is available. A stand renewed from cuttings carries whatever the parent carried, so virus and nematode problems accumulate on holdings that never go back to seed.',
        },
      ],
    },
    {
      id: 'forms',
      heading: 'Green and red-stemmed forms',
      body: [
        {
          type: 'paragraph',
          text: 'Two forms are grown, one entirely green and one with red or purple stems and leaf veins. The red form is slower and is often grown as much for appearance as for yield, and the pigment bleeds in cooking, which decides which form a market will take.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'water-spinach' },
    { type: 'crop', slug: 'amaranth' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'water-spinach' },
    { type: 'crop', slug: 'amaranth' },
    { type: 'crop', slug: 'jute-mallow' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Grown across South and South East Asia, West and Central Africa and the Caribbean. The FAO Crop Calendar records sowing and harvest windows in eight countries under the Indian spinach label.',
  climateContext:
    'A crop of hot humid conditions, damaged by frost and slow in cool weather. Its production window is the opposite of the temperate leaf vegetables it is often compared with, which is what makes it useful rather than redundant.',
  limitations: [
    'Production statistics for Malabar spinach are absorbed into general leafy vegetable categories in most reporting systems.',
    'The corpus holds no cultivar records for this crop; green and red-stemmed forms are distinguished in trade but not registered.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Crop calendar coverage across eight countries',
    },
    {
      sourceId: 'fao-crop-calendar',
      citedFor: 'Sowing and harvest windows under the Indian spinach label',
    },
    { sourceId: 'cabi', citedFor: 'Basella alba compendium data' },
    { sourceId: 'usda-grin', citedFor: 'Nomenclature and germplasm records' },
    { sourceId: 'icar', citedFor: 'Tropical leafy vegetable agronomy' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Malabar Spinach',
    description:
      'Malabar spinach (Basella alba): a climbing hot-season leaf crop that produces when temperate spinach bolts, grown on supports and cut repeatedly.',
    keywords: [
      'Malabar spinach',
      'Basella alba',
      'Indian spinach',
      'vine spinach',
      'leafy vegetable',
    ],
  },
  structuredData: { article: true },
};
