import type { NutrientContent } from '@/types/content';

export const calcium: NutrientContent = {
  id: 'nutrient-calcium',
  slug: 'calcium',
  contentType: 'nutrient',
  title: 'Calcium',
  symbol: 'Ca',
  alternativeNames: ['Ca'],
  category: 'Plant nutrient',
  subcategory: 'Secondary macronutrient',
  nutrientClass: 'secondary-macronutrient',
  summary:
    'Calcium is a secondary macronutrient essential for cell wall structure and membrane stability. Because it moves within the plant only in the transpiration stream, calcium-related disorders often appear in fast-growing tissue even when soil calcium is adequate.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Calcium (Ca) is a secondary macronutrient required for the structural integrity of cell walls, where it cross-links pectin, and for the stability of cell membranes. It also acts as a signalling molecule inside plant cells, helping to regulate responses to stress and to hormonal cues.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up calcium as the Ca²⁺ ion from the soil solution. Calcium moves upward through the plant almost entirely in the xylem, driven by transpiration, and does not move significantly in the phloem. As a result, tissues with low transpiration — such as developing fruit, tubers, and inner leaves — are especially vulnerable to localised calcium shortage.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Ca' },
    { label: 'Class', value: 'Secondary macronutrient' },
    { label: 'Plant-available form', value: 'Calcium ion (Ca²⁺)' },
    { label: 'Main role', value: 'Cell wall structure and membrane stability' },
    {
      label: 'Deficiency sign',
      value: 'Distorted growing points and disorders such as blossom-end rot',
    },
    {
      label: 'Mobility in plant',
      value: 'Immobile — deficiency appears first in new growth and fruit',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Calcium cross-links pectin molecules in the middle lamella between plant cells, giving cell walls their strength and helping cells adhere to one another. It also stabilises cell membranes and acts as a signalling ion, relaying information about stress, light, and hormones within the plant.',
        },
        {
          type: 'paragraph',
          text: 'These structural roles make calcium particularly important in rapidly dividing and expanding tissue, including root tips, shoot tips, and developing fruit, where cell walls are still being formed.',
        },
      ],
    },
    {
      id: 'calcium-in-the-soil',
      heading: 'Calcium in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Calcium is typically the dominant cation held on the cation exchange capacity of agricultural soils and is generally abundant relative to plant needs, except on strongly acidic, sandy, or sodic soils. Liming materials such as agricultural lime and calcium-containing fertilizers supply calcium while also raising soil pH.',
        },
        {
          type: 'paragraph',
          text: 'Because overall soil calcium supply is usually adequate, most calcium-related problems in crops are not simple soil deficiencies but localised shortages driven by uneven water movement within the plant.',
        },
      ],
    },
    {
      id: 'deficiency',
      heading: 'Deficiency symptoms and disorders',
      body: [
        {
          type: 'paragraph',
          text: 'Because calcium does not redistribute through the phloem, deficiency symptoms concentrate in tissues that rely on active transpiration to receive calcium — new growth, storage organs, and fruit. Several well-known crop disorders reflect this localised calcium shortage, often occurring even when total soil calcium is adequate.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Blossom-end rot',
              description:
                'A localised calcium-related disorder in tomato and pepper fruit, worsened by uneven water supply and high evaporative demand.',
            },
            {
              term: 'Bitter pit',
              description:
                'A calcium-related storage disorder in apple, appearing as small dark, sunken pits in the fruit flesh.',
            },
            {
              term: 'Tip-burn',
              description:
                'Marginal necrosis of young leaves in fast-growing leafy crops such as lettuce and cabbage, linked to localised calcium shortage in the leaf margin.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'These disorders often reflect irrigation scheduling or transpiration stress rather than low soil calcium. Soil and tissue testing help distinguish true calcium deficiency from water-management issues.',
        },
      ],
    },
    {
      id: 'excess-and-soil-ph',
      heading: 'Excess and soil pH effects',
      body: [
        {
          type: 'paragraph',
          text: 'Calcium itself is rarely directly toxic to plants. However, over-application of calcium carbonate (over-liming) raises soil pH beyond the optimum range for many crops, which can reduce the availability of phosphorus and several micronutrients, including iron, manganese, zinc, and boron.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'The right liming and calcium application rate depends on soil pH, soil texture, and crop. AgricultureID does not publish universal calcium or liming rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Calcium competes with potassium and magnesium for root uptake and for exchange sites on soil colloids, so an excess of one cation can induce deficiency of another. Soil-test interpretation often considers the balance among calcium, magnesium, and potassium together rather than any one nutrient in isolation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'calcium-ammonium-nitrate' },
    { type: 'fertilizer', slug: 'single-superphosphate' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'apple' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of calcium as a plant nutrient. Liming, fertilizer recommendations, and soil-test interpretation are region-specific and are not given here.',
  climateContext:
    'Calcium movement to plant tissue depends on active transpiration, so calcium-related disorders such as blossom-end rot are more common under fluctuating water supply or high evaporative demand.',
  limitations: [
    'This entry describes calcium’s role and behaviour; it is not a calcium or liming recommendation for any specific crop, soil, or region.',
    'Fruit and leaf disorders attributed to calcium should be confirmed with soil and tissue testing, since similar symptoms can result from irrigation or transpiration issues alone.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of calcium in plant nutrition' },
    { sourceId: 'usda-nrcs', citedFor: 'Calcium in soils and liming' },
    { sourceId: 'ahdb', citedFor: 'Calcium management context' },
    { sourceId: 'ifa', citedFor: 'Calcium-supplying fertilizer products' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Calcium',
    description:
      'Calcium as a plant nutrient: its role in cell walls and membranes, soil availability, deficiency disorders, excess effects, and interactions.',
    keywords: ['calcium', 'plant nutrient', 'macronutrient', 'blossom-end rot'],
  },
  structuredData: { article: true },
};
