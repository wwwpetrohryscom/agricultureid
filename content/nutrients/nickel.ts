import type { NutrientContent } from '@/types/content';

export const nickel: NutrientContent = {
  id: 'nutrient-nickel',
  slug: 'nickel',
  contentType: 'nutrient',
  title: 'Nickel',
  symbol: 'Ni',
  alternativeNames: ['Ni'],
  category: 'Plant nutrient',
  subcategory: 'Micronutrient',
  nutrientClass: 'micronutrient',
  summary:
    'Nickel is the most recently recognised essential plant micronutrient, required in trace amounts as a cofactor for the enzyme urease. Its requirement is so small that deficiency is rarely observed under typical field conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Nickel (Ni) was the last element to be confirmed as an essential plant micronutrient. Its principal known role is as a cofactor for urease, the enzyme that breaks down urea into ammonia and carbon dioxide within plant tissue; without adequate nickel, urea can accumulate to injurious levels in leaf tips.',
    },
    {
      type: 'paragraph',
      text: 'Plants take up nickel as the Ni²⁺ ion, generally in very small quantities relative to other micronutrients. Because the plant requirement is so small and nickel is naturally present in most soils, deficiency is uncommon and has been documented mainly in specific soils and crops rather than as a widespread field problem.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Ni' },
    { label: 'Class', value: 'Micronutrient' },
    { label: 'Plant-available form', value: 'Nickel ion (Ni²⁺)' },
    { label: 'Main role', value: 'Cofactor for the urease enzyme' },
    {
      label: 'Deficiency sign',
      value: 'Leaf-tip necrosis (documented as "mouse-ear" in some species)',
    },
    {
      label: 'Mobility in plant',
      value: 'Mobile — remobilised to seed late in the growing season',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Nickel’s clearest established function is as a cofactor for urease, the enzyme that breaks down urea generated within plant metabolism (and taken up from urea-based fertilizers) into ammonia and carbon dioxide. This links nickel functionally to nitrogen metabolism even though the plant’s nickel requirement is very small.',
        },
      ],
    },
    {
      id: 'nickel-in-the-soil',
      heading: 'Nickel in the soil',
      body: [
        {
          type: 'paragraph',
          text: 'Nickel occurs naturally in most soils at levels normally sufficient for the small quantities plants require. As with most other cationic micronutrients, its availability decreases at high soil pH, and soil organic matter binds nickel in ways that can further reduce its solubility.',
        },
        {
          type: 'list',
          items: [
            'Most agricultural soils contain enough nickel for plant needs',
            'High soil pH reduces nickel availability, similar to other divalent-cation micronutrients',
            'Documented deficiencies have been limited to soils very low in total nickel or very high in organic matter',
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
          text: 'Because urease activity depends on nickel, deficiency can allow urea to accumulate in leaf tissue, leading to leaf-tip necrosis — described as "mouse-ear" rosetting in some tree crops in documented cases. Confirmed field deficiencies remain limited relative to other micronutrients.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Leaf-tip necrosis has multiple possible causes. Given how rarely nickel deficiency is confirmed in the field, plant tissue testing is important before attributing symptoms to nickel status.',
        },
      ],
    },
    {
      id: 'excess-and-toxicity',
      heading: 'Excess and toxicity',
      body: [
        {
          type: 'paragraph',
          text: 'Nickel toxicity is uncommon in ordinary agricultural soils but can occur on naturally nickel-rich soils (such as those derived from serpentine rock) or on soils contaminated by industrial sources, restricting root growth and general vigour.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Management is soil- and region-specific',
          text: 'Nickel deficiency and toxicity are both uncommon and highly dependent on local soil type and history. AgricultureID does not publish universal nickel application rates; follow soil tests and regional guidance where nickel status is in question.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Nickel’s functional role is tied to nitrogen metabolism through the urease enzyme, connecting it to nitrogen and urea-based fertilization. It also shares soil chemical behaviour and uptake pathways with other divalent cation micronutrients, such as copper and zinc.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'copper' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'wheat' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: ['micronutrient'],
  geographicScope:
    'Global overview of nickel as a plant nutrient. Application guidance, where relevant, is soil- and region-specific and is not given here.',
  climateContext:
    'Nickel requirements are very small, and deficiency is rare under most field conditions; it has been documented mainly in specific soils and cropping systems.',
  limitations: [
    'This entry describes nickel’s role and behaviour; it is not a nickel application recommendation for any specific crop, soil, or region.',
    'Confirmed nickel deficiency is rare; leaf-tip necrosis and similar symptoms should be verified with plant tissue testing rather than assumed to be nickel-related.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Role of nickel in plant nutrition' },
    { sourceId: 'usda-nrcs', citedFor: 'Nickel availability in soils' },
    { sourceId: 'ahdb', citedFor: 'Nickel management context' },
    { sourceId: 'ifa', citedFor: 'Micronutrient fertilizer products' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Nickel and urease-related deficiency diagnosis',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Nickel',
    description:
      'Nickel as a plant micronutrient: its role in urease enzyme activity and nitrogen metabolism, soil availability, deficiency, and interactions.',
    keywords: ['nickel', 'plant nutrient', 'micronutrient', 'urease'],
  },
  structuredData: { article: true },
};
