import type { CropContent } from '@/types/content';

export const purslane: CropContent = {
  id: 'crop-purslane',
  slug: 'purslane',
  contentType: 'crop',
  title: 'Purslane',
  scientificName: 'Portulaca oleracea',
  alternativeNames: [
    'Common purslane',
    'Verdolaga',
    'Pigweed',
    'Rigla',
    'Ma chi xian',
  ],
  category: 'Leafy vegetable',
  subcategory: 'Succulent leaf crop with CAM photosynthesis',
  botanicalFamily: 'Portulacaceae',
  lifecycle: 'Annual',
  summary:
    'Purslane is a succulent leaf vegetable farmed and weeded in the same countries, notable for switching to crassulacean acid metabolism under drought and for the highest omega-3 content recorded in a leaf vegetable.',
  introduction: [
    {
      type: 'paragraph',
      text: "Purslane occupies an unusual position: it is a deliberately sown market vegetable in Egypt, Turkey, Mexico and southern Europe, and one of the world's most troublesome garden weeds in many of the same places. The plant that is hoed out of one field is sown in the next, and the difference is entirely which cultivars and which market a grower has access to.",
    },
    {
      type: 'paragraph',
      text: 'Its physiology is the reason it survives both roles. Purslane runs C4 photosynthesis under good conditions and shifts towards crassulacean acid metabolism when water is short, closing its stomata by day and fixing carbon at night. No other leaf vegetable in this corpus does that, and it is why the crop keeps producing on soil moisture that would stop a lettuce.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Portulacaceae' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Portulaca oleracea' },
    { label: 'Harvested part', value: 'Succulent stems and leaves' },
    {
      label: 'Photosynthesis',
      value: 'C4, shifting towards CAM under drought',
    },
    {
      label: 'Climate',
      value: 'Hot and dry; highly drought-tolerant for a leaf crop',
    },
    {
      label: 'Propagation',
      value: 'Direct-sown from very small seed, or from stem pieces',
    },
  ],
  sections: [
    {
      id: 'crop-and-weed',
      heading: 'Crop and weed at once',
      body: [
        {
          type: 'paragraph',
          text: 'Purslane is farmed and weeded in the same countries, which makes it awkward for both agronomy and statistics. A grower selling it needs uniform, upright, large-leaved cultivars; a grower fighting it faces a prostrate plant that sets tens of thousands of seeds and re-roots from broken stem pieces after cultivation. The same traits that make it persistent make it cheap to establish, and the crop is often produced with very little input.',
        },
      ],
    },
    {
      id: 'cam',
      heading: 'The photosynthetic switch',
      body: [
        {
          type: 'paragraph',
          text: 'Under adequate water purslane fixes carbon by the C4 pathway; under drought it shifts towards crassulacean acid metabolism, taking up carbon dioxide at night with its stomata closed by day. The shift is reversible and partial rather than absolute. Its practical effect is that the crop keeps some production through a dry spell that would end a shallow-rooted temperate leaf crop, at the cost of slower growth.',
        },
      ],
    },
    {
      id: 're-rooting',
      heading: 'Why cultivation does not clear it',
      body: [
        {
          type: 'paragraph',
          text: 'Stem fragments left on moist soil root at the nodes and re-establish, so hoeing a purslane stand in wet weather can multiply it rather than remove it. Growers who want it gone remove the material from the field; growers who want it keep the practice as a propagation method.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest and shelf life',
      body: [
        {
          type: 'paragraph',
          text: 'The crop is cut whole or picked as tips, and succulence that makes the leaf attractive also makes it perishable: it wilts and yellows quickly once cut and is sold close to where it is grown. Repeat cutting is possible where the base is left intact.',
        },
      ],
    },
    {
      id: 'nutrition',
      heading: 'Nutrition and soil',
      body: [
        {
          type: 'paragraph',
          text: 'Purslane is undemanding and is frequently grown on residual fertility after a heavier crop. Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and disease',
      body: [
        {
          type: 'paragraph',
          text: 'The crop carries few serious pests; damping-off in crowded seedbeds and leaf-spotting fungi in prolonged wet weather are the usual problems. Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'soils',
      heading: 'Soils',
      body: [
        {
          type: 'paragraph',
          text: 'Purslane tolerates poor, sandy and moderately saline soils better than most leaf vegetables, which is part of why it appears where it does. Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'seed-bank',
      heading: 'Seed and the soil seed bank',
      body: [
        {
          type: 'paragraph',
          text: 'A single plant sets tens of thousands of very small seeds that remain viable in soil for years, which is what makes the weed form so persistent and what makes the crop cheap to establish where it is already present. A field that has grown purslane once rarely needs sowing again, and a field that has never grown it can be sown at very low seed cost.',
        },
      ],
    },
    {
      id: 'salinity',
      heading: 'Salinity and marginal ground',
      body: [
        {
          type: 'paragraph',
          text: "Purslane tolerates moderately saline soil and water better than the leaf vegetables it competes with, which is why it appears on ground that has gone out of production for other crops. That tolerance is relative and finite, and it shifts the crop's role from a market vegetable to a salvage crop as salinity rises.",
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'saline-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'amaranth' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'spinach' },
    { type: 'crop', slug: 'amaranth' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'watercress' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar', 'crop-rotation'],
  geographicScope:
    'Grown as a market vegetable around the Mediterranean, in Mexico, in the Middle East and in China, and present as a weed on every continent except Antarctica. The FAO Crop Calendar records sowing and harvest windows in six countries.',
  climateContext:
    'A hot-season crop that tolerates drought and moderate salinity better than any other leaf vegetable in this corpus. It is killed by frost and grows slowly in cool weather.',
  limitations: [
    'Production statistics rarely distinguish cultivated purslane from gathered material, and the crop is absent from most national vegetable statistics.',
    'Upright market types are distinct from the prostrate wild form and are largely maintained by growers rather than registered.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-crop-calendar',
      citedFor: 'Sowing and harvest windows recorded across six countries',
    },
    { sourceId: 'cabi', citedFor: 'Portulaca oleracea compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and distribution' },
    { sourceId: 'usda-grin', citedFor: 'Nomenclature and germplasm records' },
  ],
  reviewedAt: '2026-09-03',
  updatedAt: '2026-09-03',
  editorialStatus: 'published',
  seo: {
    title: 'Purslane',
    description:
      'Purslane (Portulaca oleracea): a succulent leaf vegetable that is farmed and weeded in the same countries, and shifts to CAM under drought.',
    keywords: [
      'purslane',
      'Portulaca oleracea',
      'verdolaga',
      'succulent vegetable',
      'drought tolerant',
    ],
  },
  structuredData: { article: true },
};
