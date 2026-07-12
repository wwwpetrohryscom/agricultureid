import type { FertilizerContent } from '@/types/content';

export const urea: FertilizerContent = {
  id: 'fertilizer-urea',
  slug: 'urea',
  contentType: 'fertilizer',
  title: 'Urea',
  alternativeNames: ['Carbamide', 'CO(NH₂)₂'],
  category: 'Fertilizer',
  subcategory: 'Nitrogen fertilizer',
  fertilizerClass: 'mineral-nitrogen',
  typicalAnalysis: '46-0-0',
  summary:
    'Urea is the most widely used solid nitrogen fertilizer worldwide, valued for its high nitrogen concentration and relatively low cost per unit of nitrogen, though it is prone to ammonia volatilisation losses if left unincorporated on the soil surface.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Urea, chemical formula CO(NH₂)₂, is an organic nitrogen compound manufactured industrially from ammonia and carbon dioxide. It is the highest-analysis solid nitrogen fertilizer in common use, containing roughly 46% nitrogen by weight, and is produced and traded globally as granules or prills.',
    },
    {
      type: 'paragraph',
      text: 'Because urea supplies nitrogen only, it is used either alone or blended with other fertilizer materials to build a complete nutrient program. After application, soil urease enzymes rapidly convert urea to ammonium, a step that governs much of its behaviour and loss potential in the field.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Straight nitrogen fertilizer' },
    { label: 'Typical analysis', value: '46-0-0 (N-P₂O₅-K₂O)' },
    { label: 'Nutrients supplied', value: 'Nitrogen' },
    {
      label: 'Common form',
      value: 'Granular or prilled solid; also formulated as liquid solutions',
    },
    {
      label: 'Key consideration',
      value:
        'Prone to ammonia volatilisation if left on a moist, warm soil surface',
    },
    { label: 'Solubility', value: 'Highly water-soluble' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Urea is synthesised by reacting ammonia with carbon dioxide under heat and pressure, then formed into granules or prills for handling and spreading. Its guaranteed analysis is typically expressed as 46-0-0, reflecting its status as a straight nitrogen source with no phosphorus or potassium content.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: 'CO(NH₂)₂' },
            {
              term: 'Nitrogen content',
              description: 'About 46% total nitrogen, in amide form',
            },
            {
              term: 'Physical form',
              description: 'White, hygroscopic granules or prills',
            },
            { term: 'Solubility', description: 'Highly soluble in water' },
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
          text: 'Urea supplies nitrogen only, initially in amide form. Soil urease enzymes hydrolyse it to ammonium, which soil microorganisms then oxidise to nitrate through nitrification, the same plant-available forms supplied by other nitrogen fertilizers.',
        },
        {
          type: 'list',
          items: [
            'Contains no phosphorus, potassium, or secondary or micronutrients',
            'Nitrogen becomes plant-available after hydrolysis and, subsequently, nitrification',
            'Commonly blended with phosphate and potash materials to build compound products',
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
          text: 'Urea is used across cereal, oilseed, and vegetable production systems worldwide because its high nitrogen analysis reduces the cost of transporting, storing, and handling nitrogen relative to lower-analysis sources. It can be applied broadcast, banded, or dissolved into a liquid solution.',
        },
        {
          type: 'list',
          items: [
            'High nitrogen density lowers transport and handling cost per unit of nitrogen',
            'Suitable for broadcast, band placement, fertigation, or foliar use in dilute solution',
            'A common base material for producing compound and blended fertilizers',
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
          text: 'Because surface-applied urea is vulnerable to ammonia volatilisation, incorporation into the soil, banding below the surface, or application ahead of rainfall or irrigation are general practices used to reduce nitrogen loss. Urease inhibitors are also used in some products and regions to slow the hydrolysis reaction.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The right nitrogen rate, timing, placement, and choice between urea and other nitrogen sources depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance, and always read the product label.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Ammonia volatilisation is the principal loss pathway specific to urea, and it is greatest on warm, moist, alkaline or calcareous soils when urea is left on the surface without timely rainfall or irrigation. Once converted to nitrate, urea-derived nitrogen is subject to the same leaching and denitrification losses as other nitrogen fertilizers.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'The magnitude of volatilisation loss varies widely with weather, soil, and management practice. Some jurisdictions require or recommend urease inhibitors or incorporation to reduce losses; check local guidance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'ammonium-nitrate' },
    { type: 'fertilizer', slug: 'calcium-ammonium-nitrate' },
    { type: 'fertilizer', slug: 'ammonium-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of urea as a nitrogen fertilizer product. Application rates and regulatory requirements, such as urease-inhibitor mandates, vary by country and region.',
  climateContext:
    'Ammonia volatilisation losses from surface-applied urea increase with warm temperatures, high soil pH, and delayed rainfall or irrigation after application.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nitrogen rate recommendation for any crop or region.',
    'The scale of volatilisation loss depends heavily on local weather, soil, and management and is not quantified here.',
    'Some countries restrict or mandate additives such as urease inhibitors for urea; check local regulation.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        "Urea's guaranteed analysis is typically expressed as 46-0-0, meaning it contains about 46% nitrogen by weight, the highest nitrogen concentration among solid fertilizers in common use.",
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents urea as a major global nitrogen fertilizer source and its nitrogen content.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS nutrient management guidance describes urea nitrogen content and fertilizer grade conventions.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global use of urea as a nitrogen source' },
    {
      sourceId: 'ifa',
      citedFor: 'Urea product characteristics and manufacture',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nitrogen behaviour and volatilisation in soil',
    },
    { sourceId: 'ahdb', citedFor: 'Nitrogen fertilizer management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Urea',
    description:
      'Urea as a nitrogen fertilizer: composition, conversion to ammonium in soil, nutrient supply, general use, application principles, and volatilisation losses.',
    keywords: [
      'urea fertilizer',
      'nitrogen fertilizer',
      'urea nitrogen content',
      'ammonia volatilisation',
    ],
  },
  structuredData: { article: true },
};
