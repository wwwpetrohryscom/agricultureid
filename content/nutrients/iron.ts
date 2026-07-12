import type { NutrientContent } from '@/types/content';

export const iron: NutrientContent = {
  id: 'nutrient-iron',
  slug: 'iron',
  contentType: 'nutrient',
  title: 'Iron',
  symbol: 'Fe',
  alternativeNames: ['Fe'],
  category: 'Plant nutrient',
  subcategory: 'Micronutrient',
  nutrientClass: 'micronutrient',
  summary:
    'Iron is a micronutrient required for chlorophyll synthesis and for enzymes involved in respiration and photosynthesis. Its availability falls sharply as soil pH rises, making iron deficiency chlorosis a common problem on calcareous soils.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Iron (Fe) is a micronutrient — needed in small amounts — but it is essential for the synthesis of chlorophyll and for enzymes involved in electron transport during photosynthesis and respiration. Because of these roles, iron deficiency has an immediate and visible effect on leaf colour.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up iron mainly as Fe²⁺, and to a lesser extent Fe³⁺, though most soil iron occurs in forms of very low solubility. Availability depends strongly on soil pH and redox (oxygen) status: iron becomes progressively less soluble as pH rises above neutral, which is why iron deficiency is concentrated on calcareous, high-pH soils.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Fe' },
    { label: 'Class', value: 'Micronutrient' },
    { label: 'Plant-available forms', value: 'Fe²⁺ and Fe³⁺ (often chelated)' },
    {
      label: 'Main role',
      value: 'Chlorophyll synthesis and electron transport',
    },
    {
      label: 'Deficiency sign',
      value: 'Interveinal chlorosis on young leaves, veins remain green',
    },
    {
      label: 'Mobility in plant',
      value: 'Immobile — deficiency appears first in young leaves',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Iron is required for the synthesis of chlorophyll and is a component of cytochromes and other proteins involved in the electron-transport chains of photosynthesis and respiration. It also acts as a cofactor for several other enzymes involved in plant metabolism.',
        },
        {
          type: 'paragraph',
          text: 'Because iron underpins chlorophyll formation directly, its deficiency shows up quickly and visibly as impaired leaf greening, even though the total amount of iron required by the plant is small.',
        },
      ],
    },
    {
      id: 'iron-in-the-soil',
      heading: 'Iron in the soil and availability',
      body: [
        {
          type: 'paragraph',
          text: 'Although iron is abundant in most soils, its solubility — and therefore its availability to plants — is governed largely by soil pH and oxygen status rather than by total quantity. Plants and their associated microorganisms release organic acids and iron-binding compounds (siderophores) that help make soil iron more available.',
        },
        {
          type: 'table',
          caption: 'Soil conditions and iron availability',
          columns: ['Soil condition', 'Effect on iron availability'],
          rows: [
            ['High pH (calcareous soils)', 'Availability decreases sharply'],
            ['Waterlogged or flooded (low oxygen)', 'Availability increases'],
            [
              'Well-drained, moderately acidic',
              'Availability generally adequate',
            ],
          ],
        },
      ],
    },
    {
      id: 'deficiency',
      heading: 'Deficiency symptoms',
      body: [
        {
          type: 'paragraph',
          text: 'Iron deficiency appears as interveinal chlorosis on young leaves — the veins stay green while the tissue between them turns pale yellow to white — sometimes called iron chlorosis or lime-induced chlorosis when it occurs on high-pH soils. It can occur even where total soil iron is abundant, because the underlying issue is availability rather than total supply.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Interveinal chlorosis on young leaves can also result from manganese or zinc deficiency. Soil pH testing and plant tissue analysis help confirm iron as the cause.',
        },
      ],
    },
    {
      id: 'excess-and-toxicity',
      heading: 'Excess and toxicity',
      body: [
        {
          type: 'paragraph',
          text: 'Iron toxicity occurs mainly in flooded, low-oxygen soils, notably in lowland rice, where the reduced Fe²⁺ form accumulates to levels that cause a characteristic "bronzing" of leaves and reduced yield. It is much less common in well-drained upland soils.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Management is soil- and region-specific',
          text: 'Correcting iron deficiency or toxicity depends on soil pH, drainage, and crop variety tolerance. AgricultureID does not publish universal iron application rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Iron competes with manganese, zinc, and copper for uptake and for binding sites in chelating compounds, so an excess of one of these micronutrients can induce a deficiency of another. High soil or fertilizer phosphorus can also reduce iron availability, sometimes described as phosphorus-induced iron chlorosis.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'manganese' },
    { type: 'nutrient', slug: 'copper' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'rice' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of iron as a plant nutrient. Correction methods and application rates are soil- and region-specific and are not given here.',
  climateContext:
    'Iron availability increases under waterlogged, low-oxygen conditions, as in flooded rice, and decreases in warm, well-aerated, high-pH soils common in arid and semi-arid regions.',
  limitations: [
    'This entry describes iron’s role and behaviour; it is not an iron application recommendation for any specific crop, soil, or region.',
    'Deficiency diagnosis should be confirmed with soil pH testing and plant tissue analysis, since interveinal chlorosis has several possible micronutrient causes.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of iron in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Iron availability and soil pH relationships',
    },
    { sourceId: 'ahdb', citedFor: 'Iron management context' },
    { sourceId: 'ifa', citedFor: 'Micronutrient fertilizer products' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Iron deficiency chlorosis diagnosis',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Iron',
    description:
      'Iron as a plant micronutrient: its role in chlorophyll formation, soil availability and pH sensitivity, deficiency symptoms, and interactions.',
    keywords: [
      'iron',
      'plant nutrient',
      'micronutrient',
      'iron deficiency chlorosis',
    ],
  },
  structuredData: { article: true },
};
