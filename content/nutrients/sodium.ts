import type { NutrientContent } from '@/types/content';

export const sodium: NutrientContent = {
  id: 'nutrient-sodium',
  slug: 'sodium',
  contentType: 'nutrient',
  title: 'Sodium',
  symbol: 'Na',
  alternativeNames: ['Na'],
  category: 'Plant nutrient',
  subcategory: 'Beneficial element',
  nutrientClass: 'beneficial',
  summary:
    'Sodium is a beneficial, largely functional element rather than an essential nutrient for most crops. A small group of "natrophilic" species, notably sugar beet, respond positively to sodium, while excess sodium in soil is a separate and generally harmful concern.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sodium (Na) is not classed as an essential nutrient for the majority of crop species, but it is beneficial or functional for a limited number of plants, particularly some species using the C4 photosynthetic pathway and a small group of natrophilic (sodium-loving) crops that show a genuine growth or yield response to sodium supply.',
    },
    {
      type: 'paragraph',
      text: 'It is important to separate this beneficial-nutrition role from soil sodicity, where excess exchangeable sodium degrades soil structure and harms most crops. The two topics both involve sodium but represent very different agronomic situations.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Na' },
    {
      label: 'Class',
      value: 'Beneficial element (not essential for most crops)',
    },
    {
      label: 'Main role',
      value:
        'Osmotic regulation and turgor; supports a photosynthetic pathway in some C4 species',
    },
    {
      label: 'Who benefits',
      value:
        'Natrophilic crops such as sugar beet, and some halophytes and C4 species',
    },
    {
      label: 'Partial substitution',
      value:
        'Can partly substitute for potassium in some non-specific osmotic functions',
    },
    {
      label: 'Caution',
      value:
        'Excess soil sodium causes sodicity and structural damage in most soils and crops',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Where sodium is beneficial, its main functions are osmotic regulation and maintaining cell turgor, roles it can partly share with potassium in vacuoles. In some C4 plant species, sodium also has a more specific role supporting the biochemical pathway that regenerates the primary CO2-fixing compound in mesophyll cells.',
        },
        {
          type: 'paragraph',
          text: 'For the great majority of crop species, however, no such requirement has been demonstrated, and sodium is neither taken up in meaningful amounts for a physiological purpose nor limiting to growth under normal conditions.',
        },
      ],
    },
    {
      id: 'availability-in-soil',
      heading: 'Availability in soil',
      body: [
        {
          type: 'paragraph',
          text: 'Sodium is naturally present in most soils and is often more abundant than potassium in arid, coastal, or irrigation-affected soils. As a highly soluble ion, it moves readily with soil water and can accumulate in poorly drained soils or those irrigated with sodium-rich water.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Natural sodium abundance means deficiency is rarely a practical concern; the more common agronomic issue is managing excess sodium rather than supplying more of it.',
        },
      ],
    },
    {
      id: 'where-beneficial-or-deficiency',
      heading: 'Where sodium is beneficial',
      body: [
        {
          type: 'paragraph',
          text: 'Sugar beet and beetroot are well-documented natrophilic crops that can show improved growth, yield, or quality when sodium is applied, particularly on soils with limited potassium supply, since sodium can substitute for some of potassium’s non-specific osmotic functions in these species.',
        },
        {
          type: 'paragraph',
          text: 'Most other crops show little or no benefit from added sodium, and some, especially those sensitive to sodium uptake or to soil sodicity, can be harmed by excess levels rather than helped.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Sodium and potassium interact at the level of plant uptake and internal function: in natrophilic species, sodium can offset a modest part of the potassium requirement, but it cannot fully replace potassium’s specific roles in enzyme activation. In potassium-sensitive or sodium-sensitive crops, high sodium relative to potassium can instead interfere with normal nutrition.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Practical considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Deliberate sodium fertilization is a narrow practice, relevant mainly to a small number of natrophilic crops and specific soil-fertility situations. It is entirely distinct from managing excess exchangeable sodium in sodic soils, where gypsum and other amendments are used to displace sodium and restore soil structure rather than to supply plant nutrition.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Distinguish nutrition from sodicity',
          text: 'Sodium as a beneficial nutrient for select crops should not be confused with soil sodicity, which is generally harmful. Any sodium-related input or amendment decision should follow soil testing and local guidance.',
        },
      ],
    },
  ],
  relatedTopics: [{ type: 'nutrient', slug: 'potassium' }],
  connections: [
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'beetroot' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'fertilizer', slug: 'gypsum' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph'],
  geographicScope:
    'Relevant mainly to natrophilic crops grown on potassium-limited soils; soil sodium status and sodicity risk vary considerably by region, irrigation water quality, and drainage.',
  climateContext:
    'Arid and semi-arid climates with limited leaching, and reliance on sodium-containing irrigation water, are more prone to sodium accumulation and associated soil sodicity.',
  limitations: [
    'Sodium is beneficial for only a small number of crop species; it is not a general-purpose nutrient recommendation.',
    'This entry does not cover soil sodicity remediation in detail, which is addressed separately under soil salinity.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sodium in soil-plant nutrition and salinity context',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Sodium behaviour in soils and sodicity',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Sodium fertilization guidance for sugar beet',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Fertilizer products relevant to sodium and soil management',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sodium',
    description:
      'Sodium as a beneficial plant nutrient: functional role, natrophilic crops like sugar beet, potassium interactions, and the distinct issue of soil sodicity.',
    keywords: [
      'sodium',
      'beneficial element',
      'natrophilic crop',
      'sugar beet nutrition',
    ],
  },
  structuredData: { article: true },
};
