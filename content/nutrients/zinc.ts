import type { NutrientContent } from '@/types/content';

export const zinc: NutrientContent = {
  id: 'nutrient-zinc',
  slug: 'zinc',
  contentType: 'nutrient',
  title: 'Zinc',
  symbol: 'Zn',
  alternativeNames: ['Zn'],
  category: 'Plant nutrient',
  subcategory: 'Micronutrient',
  nutrientClass: 'micronutrient',
  summary:
    'Zinc is a micronutrient that activates numerous plant enzymes and is required for the synthesis of the growth hormone auxin. It is among the most widespread micronutrient deficiencies worldwide, particularly on high-pH and calcareous soils.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Zinc (Zn) is a micronutrient that functions mainly as a cofactor for a large number of enzymes, including those involved in carbohydrate metabolism, protein synthesis, and the production of the growth hormone auxin (indole-3-acetic acid). Because of this hormonal role, zinc deficiency has a distinctive effect on shoot growth.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up zinc as the Zn²⁺ ion from the soil solution. Zinc availability decreases sharply as soil pH rises, and it is further reduced in soils that are calcareous, low in organic matter, or have been heavily eroded — factors that together make zinc deficiency one of the most widespread micronutrient problems in world agriculture, particularly in cereals such as maize and rice.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Zn' },
    { label: 'Class', value: 'Micronutrient' },
    { label: 'Plant-available form', value: 'Zinc ion (Zn²⁺)' },
    {
      label: 'Main role',
      value: 'Enzyme cofactor and auxin (growth hormone) synthesis',
    },
    {
      label: 'Deficiency sign',
      value: 'Shortened internodes and small leaves ("little leaf")',
    },
    {
      label: 'Mobility in plant',
      value: 'Immobile — deficiency appears first in young growth',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Zinc activates a wide range of enzymes involved in carbohydrate metabolism, protein synthesis, and gene regulation. It is also required for the synthesis of auxin, the plant hormone that drives cell elongation, which is why zinc-deficient plants often show shortened stem internodes.',
        },
      ],
    },
    {
      id: 'zinc-in-the-soil',
      heading: 'Zinc in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Zinc availability falls sharply as soil pH rises, so calcareous and heavily limed soils are especially prone to deficiency. Soil organic matter helps hold zinc in plant-available forms, so eroded or organic-matter-depleted soils are also at greater risk.',
        },
        {
          type: 'list',
          items: [
            'High soil pH (calcareous or over-limed soils) is the leading cause of zinc deficiency',
            'Low soil organic matter reduces the reserve of plant-available zinc',
            'High soil or fertilizer phosphorus can further reduce zinc uptake',
            'Flooded conditions in lowland rice paddies can also lower zinc availability',
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
          text: 'Zinc deficiency produces interveinal chlorosis together with shortened internodes and smaller-than-normal leaves, sometimes called "little leaf" or rosetting. It is widely documented in maize and lowland rice grown on high-pH or eroded soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Zinc deficiency symptoms overlap with those of iron and manganese deficiency. Soil and plant tissue testing help confirm the cause before any corrective action.',
        },
      ],
    },
    {
      id: 'excess-and-toxicity',
      heading: 'Excess and toxicity',
      body: [
        {
          type: 'paragraph',
          text: 'Unlike some micronutrients, zinc excess is directly phytotoxic, causing chlorosis, stunted root growth, and reduced overall vigour. It can occur near zinc-contaminated or historically mined or smelted soils, or from over-application of zinc-containing fertilizers and amendments.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are soil- and region-specific',
          text: 'The right zinc correction method and rate depend on soil pH, organic matter, and crop. AgricultureID does not publish universal zinc application rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Phosphorus and zinc show a well-established antagonism: high phosphorus availability, whether from soil reserves or fertilizer, can induce or worsen zinc deficiency. Zinc also competes with iron and copper for uptake, so imbalances among these micronutrients can compound one another.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'nutrient', slug: 'manganese' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of zinc as a plant nutrient. Correction methods and application rates are soil- and region-specific and are not given here.',
  climateContext:
    'Zinc deficiency is more pronounced in soils that are dry, calcareous, or have been limed heavily — conditions common in arid and semi-arid cropping regions.',
  limitations: [
    'This entry describes zinc’s role and behaviour; it is not a zinc application recommendation for any specific crop, soil, or region.',
    'Deficiency diagnosis should be confirmed with soil and plant tissue testing, since symptoms overlap with other micronutrient deficiencies.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of zinc in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Zinc availability and soil pH relationships',
    },
    { sourceId: 'ahdb', citedFor: 'Zinc management context' },
    { sourceId: 'ifa', citedFor: 'Micronutrient fertilizer products' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Zinc deficiency diagnosis in cereals',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Zinc',
    description:
      'Zinc as a plant micronutrient: its role in enzyme systems, soil availability and pH effects, deficiency symptoms, excess toxicity, and interactions.',
    keywords: ['zinc', 'plant nutrient', 'micronutrient', 'zinc deficiency'],
  },
  structuredData: { article: true },
};
