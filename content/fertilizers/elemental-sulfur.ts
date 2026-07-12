import type { FertilizerContent } from '@/types/content';

export const elementalSulfur: FertilizerContent = {
  id: 'fertilizer-elemental-sulfur',
  slug: 'elemental-sulfur',
  contentType: 'fertilizer',
  title: 'Elemental sulfur',
  alternativeNames: ['Flowers of sulfur', 'Sulfur prills'],
  category: 'Fertilizer',
  subcategory: 'Sulfur fertilizer',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis: '~90% S',
  summary:
    'Elemental sulfur is a high-analysis sulfur source, around 90% sulfur, that must first be oxidised by soil microorganisms to sulfate before plants can use it, a process that also acidifies soil and makes elemental sulfur a common tool for deliberately lowering soil pH.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Elemental sulfur is mined, recovered as a by-product of petroleum and natural gas refining, or produced from other industrial processes, then formed into granules, prills, or fine powder for agricultural use. Products commonly guarantee around 90% elemental sulfur.',
    },
    {
      type: 'paragraph',
      text: 'Unlike sulfate fertilizers, which supply sulfur in an immediately plant-available form, elemental sulfur must be oxidised by soil bacteria to sulfate before crops can take it up. This same microbial oxidation generates acidity, which is why elemental sulfur is also widely used specifically to lower the pH of alkaline soils.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'High-analysis elemental sulfur source',
    },
    { label: 'Typical analysis', value: 'About 90% elemental sulfur' },
    {
      label: 'Nutrients supplied',
      value: 'Sulfur, after microbial oxidation to sulfate',
    },
    { label: 'Common form', value: 'Granules, prills, or fine powder' },
    {
      label: 'Key consideration',
      value:
        'Also used deliberately to lower soil pH via its acidifying oxidation reaction',
    },
    {
      label: 'Solubility',
      value: 'Insoluble in water; requires microbial oxidation',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Elemental sulfur products are formed into granules, prills, or powder from sulfur recovered during fossil-fuel refining or mined directly, then guaranteed at roughly 90% elemental sulfur content. Particle size strongly affects how quickly soil bacteria can oxidise the material.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical form', description: 'Elemental sulfur, S⁰' },
            {
              term: 'Sulfur content',
              description: 'Approximately 90% elemental sulfur',
            },
            {
              term: 'Availability pathway',
              description:
                'Microbial oxidation converts S⁰ to plant-available sulfate over time',
            },
            {
              term: 'Particle size effect',
              description:
                'Finer particles have more surface area and oxidise faster than coarse granules',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied',
      body: [
        {
          type: 'paragraph',
          text: 'Elemental sulfur supplies sulfur only, and only after soil sulfur-oxidising bacteria convert it to sulfate, a process that occurs over weeks to months depending on soil temperature, moisture, microbial activity, and the particle size of the product applied.',
        },
        {
          type: 'list',
          items: [
            'Sulfur availability is delayed relative to sulfate-based sources',
            'Oxidation rate depends on soil temperature, moisture, and microbial activity',
            'Contains no nitrogen, phosphorus, potassium, or other secondary nutrients',
          ],
        },
      ],
    },
    {
      id: 'use-and-benefits',
      heading: 'Use and benefits',
      body: [
        {
          type: 'paragraph',
          text: 'Elemental sulfur is used both as a slow-release sulfur source for sulfur-responsive crops such as oilseed rape and onion, and, at higher rates, as a soil acidifier to lower pH ahead of acid-loving crops such as blueberry or to correct alkaline soil conditions.',
        },
        {
          type: 'list',
          items: [
            'Provides a slow-release sulfur supply over an extended period',
            'Widely used to deliberately lower pH on alkaline or calcareous soils',
            'Preferred over sulfate sources when acidification, not just sulfur supply, is the goal',
          ],
        },
      ],
    },
    {
      id: 'application-principles',
      heading: 'Application principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because oxidation and acidification take time, elemental sulfur intended to lower pH is generally applied well in advance of planting, and rates for pH adjustment are typically based on a soil test that accounts for buffering capacity, similar in principle to lime requirement testing but in the opposite direction.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and lead time are soil- and crop-specific',
          text: 'The rate needed to correct a sulfur deficiency versus to lower soil pH by a given amount depends on soil test results, soil buffering capacity, the target crop, and local guidance. AgricultureID does not publish universal application rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because elemental sulfur must oxidise before it becomes active, its environmental behaviour differs from that of immediately soluble sulfate fertilizers; once oxidised, the resulting sulfate is mobile in soil in the same way as sulfate from other sources, and over-application for pH adjustment can lower soil pH more than intended.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Overshooting a pH-reduction target is a recognised risk with elemental sulfur because of the delay between application and full oxidation; periodic retesting is generally recommended before reapplying.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'gypsum' },
    { type: 'fertilizer', slug: 'agricultural-lime' },
    { type: 'fertilizer', slug: 'ammonium-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'onion' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of elemental sulfur as a fertilizer and soil acidifier; relevance is highest on alkaline or calcareous soils in arid and semi-arid regions.',
  climateContext:
    'Warmer soil temperatures speed microbial oxidation of elemental sulfur, affecting both how quickly sulfur becomes available and how quickly acidification proceeds.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a rate recommendation for sulfur supply or pH adjustment.',
    'Oxidation rate depends on soil temperature, moisture, and microbial activity and is not quantified here.',
    'Over-application for pH reduction can overshoot the intended target because of the delay before full oxidation.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Elemental sulfur is a high-analysis sulfur source, containing around 90% sulfur.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote: 'Sulfur sources and fertilizer analysis.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'ahdb',
          evidenceNote: 'Sulfur fertilizer products and use.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sulfur fertilizer forms and soil oxidation',
    },
    { sourceId: 'ifa', citedFor: 'Elemental sulfur product characteristics' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Elemental sulfur oxidation and soil acidification',
    },
    { sourceId: 'ahdb', citedFor: 'Sulfur fertilizer management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Elemental Sulfur',
    description:
      'Elemental sulfur fertilizer: composition, microbial oxidation to sulfate, use as a slow-release sulfur source, and use for lowering soil pH.',
    keywords: [
      'elemental sulfur fertilizer',
      'sulfur soil acidifier',
      'lowering soil pH sulfur',
      'sulfur oxidation soil',
    ],
  },
  structuredData: { article: true },
};
