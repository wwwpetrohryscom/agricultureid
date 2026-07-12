import type { NutrientContent } from '@/types/content';

export const copper: NutrientContent = {
  id: 'nutrient-copper',
  slug: 'copper',
  contentType: 'nutrient',
  title: 'Copper',
  symbol: 'Cu',
  alternativeNames: ['Cu'],
  category: 'Plant nutrient',
  subcategory: 'Micronutrient',
  nutrientClass: 'micronutrient',
  summary:
    'Copper is a micronutrient required for several enzyme systems, including those involved in lignin synthesis and reproductive development. Deficiency is concentrated on organic (peat) and sandy soils where copper is poorly available.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Copper (Cu) is a micronutrient that functions as a cofactor for enzymes involved in electron transport, lignin synthesis — important for stem strength and disease resistance — and reproductive development, including pollen formation.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up copper mainly as the Cu²⁺ ion. Copper binds very strongly to soil organic matter, which limits its availability even where total soil copper is adequate; deficiency is therefore concentrated on organic (peat) soils and on sandy soils that are naturally low in total copper.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Cu' },
    { label: 'Class', value: 'Micronutrient' },
    { label: 'Plant-available form', value: 'Copper ion (Cu²⁺)' },
    { label: 'Main role', value: 'Enzyme cofactor; lignin synthesis' },
    {
      label: 'Deficiency sign',
      value: 'Young-leaf wilting or chlorosis and poor stem strength',
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
          text: 'Copper is a cofactor for enzymes involved in electron transport and in lignin synthesis, which strengthens cell walls and contributes to stem rigidity and disease resistance. It is also required for normal pollen formation and fertility.',
        },
      ],
    },
    {
      id: 'copper-in-the-soil',
      heading: 'Copper in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Copper binds very strongly to soil organic matter, which reduces the fraction that is available to plants even when total soil copper is sufficient. Deficiency is historically most significant on reclaimed peat soils and on naturally sandy soils low in total copper.',
        },
        {
          type: 'list',
          items: [
            'Organic (peat) soils commonly bind copper tightly, limiting availability',
            'Sandy soils can be naturally low in total copper',
            'Perennial crops such as grape and other orchard crops that receive repeated copper-based fungicide applications can, conversely, accumulate excess soil copper over time',
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
          text: 'Copper deficiency appears as wilting or chlorosis of young leaves and poor lignification, leading to weak stems. In cereals, it has been documented as reduced pollen fertility and poor grain set, historically a notable issue on reclaimed peat and sandy soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Young-leaf wilting and chlorosis can also result from other micronutrient deficiencies or water stress. Confirm copper status with soil and plant tissue testing.',
        },
      ],
    },
    {
      id: 'excess-and-toxicity',
      heading: 'Excess and toxicity',
      body: [
        {
          type: 'paragraph',
          text: 'Copper toxicity restricts root growth and can arise from repeated copper-based fungicide applications, common in perennial crops such as grape and other orchard crops, or from copper-contaminated soils. Because organic matter binds copper strongly, toxicity risk is influenced by how much of the accumulated copper remains chemically available.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Management is soil- and region-specific',
          text: 'Correcting copper deficiency or managing accumulated copper depends on soil organic matter, texture, and crop history. AgricultureID does not publish universal copper application rates; follow soil tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Copper competes with zinc and iron for uptake and for binding sites, so imbalances among these micronutrients can compound one another. Because copper availability is governed largely by soil organic matter, management of organic matter levels also influences copper nutrition.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'nutrient', slug: 'manganese' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'onion' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil', slug: 'peat-soil' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: ['micronutrient'],
  geographicScope:
    'Global overview of copper as a plant nutrient. Application rates and soil management guidance are region-specific and are not given here.',
  climateContext:
    'Copper deficiency is most common on organic (peat) soils and in regions where copper is strongly bound to soil organic matter.',
  limitations: [
    'This entry describes copper’s role and behaviour; it is not a copper application recommendation for any specific crop, soil, or region.',
    'Deficiency and toxicity diagnosis should be confirmed with soil and plant tissue testing, since symptoms overlap with other nutrient and water-stress disorders.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of copper in plant nutrition' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Copper binding to soil organic matter',
    },
    { sourceId: 'ahdb', citedFor: 'Copper management context' },
    { sourceId: 'ifa', citedFor: 'Micronutrient fertilizer products' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Copper deficiency diagnosis in cereals',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Copper',
    description:
      'Copper as a plant micronutrient: its role in enzyme systems and lignin formation, soil availability, deficiency symptoms, toxicity, and interactions.',
    keywords: [
      'copper',
      'plant nutrient',
      'micronutrient',
      'copper deficiency',
    ],
  },
  structuredData: { article: true },
};
