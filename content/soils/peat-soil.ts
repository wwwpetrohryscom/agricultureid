import type { SoilContent } from '@/types/content';

export const peatSoil: SoilContent = {
  id: 'soil-peat',
  slug: 'peat-soil',
  contentType: 'soil',
  title: 'Peat Soil',
  alternativeNames: ['Organic soil', 'Muck soil'],
  category: 'Soil texture',
  subcategory: 'Organic soil',
  texture:
    'Organic (dominated by partially decomposed plant material rather than mineral particles)',
  summary:
    'Peat soil is an organic soil formed from partially decomposed plant material that accumulates under waterlogged conditions. It is typically acidic and holds large amounts of water, but drainage and cultivation raise significant subsidence and conservation concerns.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Peat soil differs fundamentally from mineral soils such as sand, silt, and clay: instead of being classified by mineral particle size, it is defined by a high content of organic matter, often accumulated over thousands of years under waterlogged, low-oxygen conditions that slow decomposition.',
    },
    {
      type: 'paragraph',
      text: 'Because peat forms in wetlands, bogs, and fens, undisturbed peat soils are naturally saturated and store large amounts of carbon. When drained for agriculture, peat soils lose water and begin to shrink, compact, and decompose, which changes their properties over time and raises long-term sustainability questions distinct from those of mineral soils.',
    },
  ],
  keyFacts: [
    {
      label: 'Composition class',
      value: 'Organic soil (high organic matter content)',
    },
    {
      label: 'Dominant material',
      value:
        'Partially decomposed plant residues rather than mineral particles',
    },
    {
      label: 'Soil pH',
      value: 'Often acidic, though this varies by peat type and origin',
    },
    {
      label: 'Water holding',
      value: 'Very high in undisturbed peat; changes markedly once drained',
    },
    {
      label: 'Drainage',
      value:
        'Poor in natural state; drained peat is prone to subsidence and shrinkage',
    },
    {
      label: 'Conservation status',
      value:
        'Significant carbon store; drainage and cultivation are widely recognised sustainability concerns',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Peat soils form where waterlogging and low oxygen availability slow the decomposition of plant material, allowing organic matter to accumulate faster than it breaks down. Over long periods this builds up soils that are largely organic rather than mineral in composition, distinguishing peat from the sand-silt-clay textural classes used for mineral soils.',
        },
      ],
    },
    {
      id: 'organic-matter-and-acidity',
      heading: 'Organic matter content and acidity',
      body: [
        {
          type: 'paragraph',
          text: 'The defining feature of peat soil is its high organic matter content, which can approach or exceed the total mass typical of mineral soils. This organic material gives peat a low bulk density and a dark colour, and it is a major reason peat soils can hold very large amounts of water relative to their weight.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Acidity',
              description:
                'Many peat soils, particularly those formed from sphagnum moss in bogs, are strongly acidic; fen peats formed under more mineral-influenced water can be closer to neutral. Local testing is needed to confirm actual pH.',
            },
            {
              term: 'Nutrient behaviour',
              description:
                'Nutrient availability in peat differs from mineral soils; some nutrients can be abundant in organic form but not immediately plant-available, and acidity can limit uptake of others.',
            },
            {
              term: 'Bulk density',
              description:
                'Very low compared with mineral soils, which contributes to their high water-holding capacity but also to their tendency to shrink when dried.',
            },
          ],
        },
      ],
    },
    {
      id: 'drainage-and-subsidence',
      heading: 'Drainage and subsidence',
      body: [
        {
          type: 'paragraph',
          text: 'In their natural, undisturbed state, peat soils are saturated and poorly drained, which is precisely the condition that allowed them to form. Agricultural use generally requires drainage, but drainage exposes organic matter to oxygen, accelerating decomposition and causing the soil surface to subside over time.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Drained peat soils continue to subside and lose volume as organic matter oxidises. This process is often irreversible on human timescales and can eventually expose underlying mineral soil or lower the land relative to surrounding water levels.',
        },
      ],
    },
    {
      id: 'conservation-and-handling',
      heading: 'Conservation and handling considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Peat soils are recognised as significant stores of soil carbon accumulated over long periods. Drainage and cultivation release stored carbon through oxidation, which is why peatland drainage and management are subjects of active environmental and agricultural policy attention in many regions.',
        },
        {
          type: 'list',
          items: [
            'Minimise drainage depth and disturbance where peatland conservation is a priority',
            'Recognise that subsidence and carbon loss are ongoing while drained peat is cultivated',
            'Follow local and national guidance on peatland management, which varies by jurisdiction and protection status',
            'Consider rewetting or restoration options where agricultural use is being reduced or ended',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Because of their carbon-storage role and vulnerability to irreversible degradation, peat soils are subject to specific environmental regulations and conservation guidance in many countries; local rules should be consulted before drainage or cultivation.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Drained and managed peat soils are used in some regions for specialised horticultural and vegetable production, taking advantage of their high organic matter and water-holding capacity once acidity is corrected through liming where needed. However, peat is generally unsuited to most broad-acre field crops without substantial drainage, pH correction, and ongoing management, and its use for cultivation carries the conservation trade-offs described above.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a peat soil',
      body: [
        {
          type: 'paragraph',
          text: 'Peat is identified primarily by its high organic matter content and dark colour rather than by mineral particle size, and is typically confirmed through laboratory analysis of organic matter content, pH, and depth of the organic layer. Local soil survey and drainage authority information are important given the environmental sensitivity of peatland.',
        },
      ],
    },
  ],
  suitedCrops: [],
  relatedTopics: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'silt-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['soil-ph', 'macronutrient', 'agronomy'],
  geographicScope:
    'General soil-science overview applicable worldwide; peatland extent, regulation, and conservation status vary greatly by country and region.',
  climateContext:
    'Peat formation and stability depend on climate and hydrology; warmer, drier conditions accelerate decomposition and subsidence once peat is drained.',
  limitations: [
    'Individual peatlands vary widely in depth, origin, acidity, and conservation status; local survey and regulatory guidance should be consulted before any cultivation or drainage.',
    'Peat behaves very differently from mineral soils, so texture-based management guidance for sand, silt, or clay does not transfer directly to peat.',
    'Drainage-related subsidence and carbon loss are long-term, largely irreversible processes that general guidance cannot fully quantify for a specific site.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Organic soil properties and classification',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil function, classification, and conservation context',
    },
    { sourceId: 'isric', citedFor: 'Global soil properties and information' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Peat Soil',
    description:
      'How peat soil behaves: high organic matter, acidity, water holding, drainage-related subsidence, conservation considerations, and limited crop use.',
    keywords: [
      'peat soil',
      'organic soil',
      'soil acidity',
      'peatland conservation',
    ],
  },
  structuredData: { article: true },
};
