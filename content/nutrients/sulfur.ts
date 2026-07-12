import type { NutrientContent } from '@/types/content';

export const sulfur: NutrientContent = {
  id: 'nutrient-sulfur',
  slug: 'sulfur',
  contentType: 'nutrient',
  title: 'Sulfur',
  symbol: 'S',
  alternativeNames: ['S', 'Sulphur'],
  category: 'Plant nutrient',
  subcategory: 'Secondary macronutrient',
  nutrientClass: 'secondary-macronutrient',
  summary:
    'Sulfur is a secondary macronutrient required for the amino acids cysteine and methionine and therefore for protein synthesis. Its behaviour in soil closely parallels nitrogen, and deficiency has become more common as atmospheric sulfur deposition has declined.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sulfur (S) is a secondary macronutrient that forms part of the amino acids cysteine and methionine, and therefore of proteins and several enzymes and cofactors. It also contributes to chlorophyll formation and to the characteristic flavour and odour compounds of crops such as onion, garlic, and brassicas.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up sulfur mainly as the sulfate ion (SO4²⁻) from the soil solution. Most soil sulfur is held in organic matter and becomes available only as microorganisms mineralise it, in a process similar to nitrogen mineralisation; sulfate is also water-soluble and can be lost by leaching.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'S' },
    { label: 'Class', value: 'Secondary macronutrient' },
    { label: 'Plant-available form', value: 'Sulfate (SO4²⁻)' },
    {
      label: 'Main role',
      value: 'Amino acids (cysteine, methionine) and protein synthesis',
    },
    { label: 'Deficiency sign', value: 'Pale yellowing of young leaves' },
    {
      label: 'Mobility in plant',
      value:
        'Relatively immobile — deficiency often appears first in young leaves',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Sulfur is a structural component of the amino acids cysteine and methionine, making it essential for building proteins and enzymes. It contributes to chlorophyll formation and, in Allium and brassica crops, to the sulfur-containing compounds responsible for characteristic flavour and odour.',
        },
        {
          type: 'paragraph',
          text: 'Because sulfur is required alongside nitrogen for protein synthesis, an adequate sulfur supply is often necessary for a crop to make full use of applied nitrogen.',
        },
      ],
    },
    {
      id: 'sulfur-in-the-soil',
      heading: 'Sulfur in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Most soil sulfur is held in organic matter and is released as plant-available sulfate through microbial mineralisation, in a pattern that parallels nitrogen. Historically, atmospheric deposition from industrial and vehicle emissions supplied significant sulfur to farmland in many regions; as air-quality regulations have reduced these emissions, sulfur deficiency has become more widely reported.',
        },
        {
          type: 'list',
          items: [
            'Mineralisation of soil organic matter releases plant-available sulfate',
            'Atmospheric deposition has historically supplied sulfur, though this has declined with cleaner air regulations',
            'Sulfate is water-soluble and can be leached from soil, particularly on light, well-drained soils',
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
          text: 'Sulfur deficiency typically appears as a pale yellowing of young leaves, distinguishing it from nitrogen deficiency, which affects older leaves first — though the two can be confused in the field and both reduce growth and protein content.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Because sulfur and nitrogen deficiency symptoms overlap visually, plant tissue testing is the most reliable way to distinguish between them.',
        },
      ],
    },
    {
      id: 'excess-and-environmental-considerations',
      heading: 'Excess and environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Direct sulfur toxicity to plants is uncommon under normal fertilization. Sulfur-containing fertilizers and amendments, including ammonium sulfate and elemental sulfur, acidify soil over time, which can affect the availability of other nutrients. Sulfur dioxide air pollution is a separate, atmospheric pathway of excess sulfur exposure to crops.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'The right sulfur rate and source depend on soil type, crop, and regional atmospheric deposition levels. AgricultureID does not publish universal sulfur rates; follow soil and tissue tests and regional guidance.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Nitrogen and sulfur act together in protein synthesis, and sulfur deficiency can limit a crop’s response to nitrogen fertilization. Sulfur also interacts with molybdenum: high sulfate availability can reduce molybdenum uptake, which is particularly relevant for legume crops that depend on molybdenum for nitrogen fixation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
  ],
  connections: [
    { type: 'crop', slug: 'mustard' },
    { type: 'fertilizer', slug: 'ammonium-sulfate' },
    { type: 'fertilizer', slug: 'single-superphosphate' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'garlic' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of sulfur as a plant nutrient. Fertilizer recommendations and regional atmospheric deposition trends are not given here.',
  climateContext:
    'Sulfate mineralisation from organic matter, like nitrogen mineralisation, is faster in warm, moist soils, and sulfur can also be lost through leaching under high-rainfall conditions.',
  limitations: [
    'This entry describes sulfur’s role and behaviour; it is not a sulfur recommendation for any specific crop, soil, or region.',
    'Deficiency diagnosis should be confirmed with plant tissue testing, since sulfur deficiency symptoms closely resemble nitrogen deficiency.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of sulfur in plant nutrition' },
    { sourceId: 'usda-nrcs', citedFor: 'Sulfur in soils and mineralisation' },
    {
      sourceId: 'ahdb',
      citedFor: 'Sulfur management context and deficiency trends',
    },
    { sourceId: 'ifa', citedFor: 'Sulfur-supplying fertilizer products' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sulfur',
    description:
      'Sulfur as a plant nutrient: its role in amino acids and protein synthesis, soil availability, deficiency symptoms, excess effects, and interactions.',
    keywords: [
      'sulfur',
      'plant nutrient',
      'macronutrient',
      'sulfur deficiency',
    ],
  },
  structuredData: { article: true },
};
