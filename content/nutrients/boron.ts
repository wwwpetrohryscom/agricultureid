import type { NutrientContent } from '@/types/content';

export const boron: NutrientContent = {
  id: 'nutrient-boron',
  slug: 'boron',
  contentType: 'nutrient',
  title: 'Boron',
  symbol: 'B',
  alternativeNames: ['B'],
  category: 'Plant nutrient',
  subcategory: 'Micronutrient',
  nutrientClass: 'micronutrient',
  summary:
    'Boron is a micronutrient required for cell wall formation and for reproductive development, including pollen tube growth and seed set. It has an unusually narrow range between deficient and toxic soil levels.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Boron (B) is a micronutrient involved in cross-linking cell wall components, maintaining membrane integrity, and supporting reproductive development — including pollen germination, pollen tube growth, and fruit and seed set. Boron-sensitive crops can show reduced yield through poor pollination even before visible leaf symptoms appear.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up boron mainly as boric acid (H3BO3) and, at higher soil pH, borate ions. Boron moves to roots largely by mass flow with soil water and, once in the plant, is transported mainly in the xylem with the transpiration stream, so its distribution depends heavily on water movement.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'B' },
    { label: 'Class', value: 'Micronutrient' },
    { label: 'Plant-available form', value: 'Boric acid / borate' },
    {
      label: 'Main role',
      value: 'Cell wall formation and reproductive development',
    },
    {
      label: 'Deficiency sign',
      value: 'Death of growing points and hollow or cracked stems',
    },
    {
      label: 'Mobility in plant',
      value: 'Immobile — deficiency appears first at growing points',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Boron cross-links pectin components in cell walls and helps maintain membrane integrity. It is also required for pollen germination and pollen tube growth, making it particularly important for fruit set, seed set, and grain filling.',
        },
      ],
    },
    {
      id: 'boron-in-the-soil',
      heading: 'Boron in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Boron reaches roots mainly by mass flow with soil water, so its supply depends on adequate soil moisture as much as on total soil boron. It is prone to leaching on sandy, well-drained soils, particularly under high rainfall, while soil organic matter is an important reservoir that releases boron as it decomposes.',
        },
        {
          type: 'list',
          items: [
            'Sandy, low-organic-matter soils are prone to boron leaching and deficiency',
            'High soil pH reduces boron availability',
            'Dry soil conditions can also limit boron uptake by restricting mass flow to roots',
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
          text: 'Because boron does not move within the plant once deposited, deficiency symptoms concentrate at growing points: death of shoot and root tips, hollow or cracked stems, and poor pollen viability leading to reduced fruit or seed set. Sugar beet (heart rot) and brassica crops (hollow stem) are classic examples of boron-deficiency disorders.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Growing-point dieback and hollow stems have other possible causes as well, including calcium deficiency and some diseases. Confirm boron status with soil or plant testing.',
        },
      ],
    },
    {
      id: 'excess-and-toxicity',
      heading: 'Excess and toxicity',
      body: [
        {
          type: 'paragraph',
          text: 'Boron has an unusually narrow safe range compared with most nutrients: the soil or tissue level associated with toxicity is not far above the level associated with deficiency. Excess boron causes leaf-margin scorch and necrosis, and can result from over-application of boron fertilizers or from boron-rich irrigation water in some arid regions.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates must be crop- and soil-specific',
          text: 'Because the gap between deficient and toxic boron levels is so narrow, application rates depend closely on soil test boron, crop sensitivity, and irrigation water quality. AgricultureID does not publish universal boron rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Boron and calcium are functionally linked, since both contribute to cell wall structure, and boron nutrition is often considered alongside calcium status. Because boron reaches roots mainly through mass flow, its availability is also closely tied to soil moisture and can be reduced under drought.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'zinc' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'climate', slug: 'drought' },
  ],
  glossaryTerms: ['micronutrient', 'soil-texture'],
  geographicScope:
    'Global overview of boron as a plant nutrient. Application rates and irrigation-water guidance are soil- and region-specific and are not given here.',
  climateContext:
    'Boron is prone to leaching in high-rainfall conditions on sandy soils, while drought can also induce deficiency by restricting the mass flow of boron to roots.',
  limitations: [
    'This entry describes boron’s role and behaviour; it is not a boron application recommendation for any specific crop, soil, or region.',
    'Because the safe range between boron deficiency and toxicity is narrow, application decisions should always be based on soil and tissue testing rather than general guidance.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of boron in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Boron behaviour and leaching in soils',
    },
    { sourceId: 'ahdb', citedFor: 'Boron management context' },
    { sourceId: 'ifa', citedFor: 'Micronutrient fertilizer products' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Boron deficiency and toxicity diagnosis',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Boron',
    description:
      'Boron as a plant micronutrient: its role in cell walls and reproductive growth, soil pH and leaching effects, deficiency and toxicity, interactions.',
    keywords: ['boron', 'plant nutrient', 'micronutrient', 'boron deficiency'],
  },
  structuredData: { article: true },
};
