import type { FertilizerContent } from '@/types/content';

export const borax: FertilizerContent = {
  id: 'fertilizer-borax',
  slug: 'borax',
  contentType: 'fertilizer',
  title: 'Borax',
  alternativeNames: ['Sodium borate', 'Sodium tetraborate decahydrate'],
  category: 'Fertilizer',
  subcategory: 'Micronutrient fertilizer',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis: '~11% B',
  summary:
    'Borax is a soluble sodium borate used as a boron fertilizer, typically supplying around 11% boron; it corrects boron deficiency in responsive crops such as oilseed rape and sugar beet, but the narrow margin between deficiency and toxicity means it must be applied carefully.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Borax (sodium tetraborate decahydrate) is a soluble boron mineral widely used as a boron fertilizer, typically containing around 11% boron. Boron is an essential micronutrient involved in cell-wall formation, pollination, and the movement of sugars within the plant.',
    },
    {
      type: 'paragraph',
      text: 'A defining feature of boron nutrition is that the range between deficiency and toxicity is unusually narrow. This means borax must be applied evenly and at carefully controlled rates, because a modest excess can damage the very crop it is intended to help.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Soluble boron micronutrient fertilizer',
    },
    { label: 'Typical analysis', value: 'About 11% boron' },
    { label: 'Nutrients supplied', value: 'Boron' },
    { label: 'Common form', value: 'Water-soluble powder or granule' },
    {
      label: 'Key consideration',
      value: 'Narrow margin between deficiency and toxicity; apply carefully',
    },
    { label: 'Solubility', value: 'Water-soluble' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Borax is a hydrated sodium borate, refined from mined borate deposits, that supplies boron at around 11%. Other boron fertilizers such as more concentrated refined borates exist, but borax remains a common and economical source for soil and spray use.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chemical composition',
              description: 'Sodium tetraborate decahydrate',
            },
            {
              term: 'Boron content',
              description: 'About 11% boron',
            },
            {
              term: 'Other boron sources',
              description: 'More concentrated refined borates are also used',
            },
            { term: 'Solubility', description: 'Soluble in water' },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied and behaviour in soil',
      body: [
        {
          type: 'paragraph',
          text: 'Borax supplies boron, taken up by plants as borate. Boron is mobile in soil and readily leached, especially on sandy soils under high rainfall, so deficiency is common there; conversely, its low availability at high pH can also limit uptake. This mobility contributes to the difficulty of keeping boron in the narrow sufficient range.',
        },
        {
          type: 'list',
          items: [
            'Boron is supplied as readily available borate',
            'Boron is mobile and prone to leaching on sandy soils',
            'Availability can also be reduced at high soil pH',
          ],
        },
      ],
    },
    {
      id: 'use-and-management',
      heading: 'Use and management',
      body: [
        {
          type: 'paragraph',
          text: 'Borax is used to correct or prevent boron deficiency in responsive crops such as oilseed rape, sugar beet, brassicas, and some fruit and legume crops. Because the safe range is narrow, it is applied at low, even rates, often blended into bulk fertilizer or applied as a dilute foliar spray for precise dosing.',
        },
        {
          type: 'list',
          items: [
            'Responsive crops include oilseed rape, sugar beet, and brassicas',
            'Even distribution at low rates is essential to avoid toxicity',
            'Blending into bulk fertilizer or foliar spraying helps dose precisely',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Diagnose before treating; rates are region-specific',
          text: 'Boron deficiency should be confirmed by soil or tissue testing, and the right rate and method depend on the crop, soil, and local guidance. AgricultureID does not publish universal fertilizer rates; follow testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations and safety',
      body: [
        {
          type: 'paragraph',
          text: 'The narrow gap between too little and too much boron is the central risk: uneven spreading or an excess rate can cause boron toxicity, which harms crops and can persist in soil. Crop sensitivity to boron also varies widely, so a rate that helps one crop may injure a more sensitive one in rotation.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Boron has an unusually narrow margin between deficiency and toxicity. Uneven application or over-application can cause boron toxicity that damages crops, and sensitive crops in the rotation can be injured by residues. Apply only where deficiency is confirmed, at controlled, even rates.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'chelated-micronutrients' },
    { type: 'fertilizer', slug: 'zinc-sulfate' },
    { type: 'fertilizer', slug: 'manganese-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'boron' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'cauliflower' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of borax as a boron fertilizer. Boron deficiency is common on sandy, leached, and high-pH soils, while sensitive crops are at risk of toxicity.',
  climateContext:
    'Boron leaches readily under high rainfall on sandy soils, making deficiency more likely there, while dry-season irrigation with high-boron water can raise toxicity risk.',
  limitations: [
    'This entry describes composition and general behaviour; it is not an application rate recommendation for any crop or region.',
    'The narrow deficiency-to-toxicity margin makes over-application a genuine hazard, so rates are not given here.',
    'Crop sensitivity to boron varies widely and must be checked against crop-specific guidance.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Borax (sodium tetraborate decahydrate) typically supplies around 11% boron and is water-soluble.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents borax among boron fertilizer sources and its boron content.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS micronutrient guidance describes borax composition and boron management.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'ifa', citedFor: 'Boron fertilizer sources and composition' },
    { sourceId: 'fao', citedFor: 'Micronutrient deficiency and correction' },
    {
      sourceId: 'ahdb',
      citedFor: 'Boron deficiency and application guidance',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Boron micronutrient management guidance',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Borax (Boron) Fertilizer',
    description:
      'Borax as a boron fertilizer: around 11% boron to correct deficiency in crops like oilseed rape and sugar beet, and the narrow deficiency-toxicity margin.',
    keywords: [
      'borax fertilizer',
      'boron fertilizer',
      'boron deficiency correction',
      'sodium borate fertilizer',
    ],
  },
  structuredData: { article: true },
};
