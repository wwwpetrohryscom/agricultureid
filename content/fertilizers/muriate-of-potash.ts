import type { FertilizerContent } from '@/types/content';

export const muriateOfPotash: FertilizerContent = {
  id: 'fertilizer-muriate-of-potash',
  slug: 'muriate-of-potash',
  contentType: 'fertilizer',
  title: 'Muriate of potash',
  alternativeNames: ['MOP', 'Potassium chloride', 'KCl'],
  category: 'Fertilizer',
  subcategory: 'Potassium fertilizer',
  fertilizerClass: 'mineral-potassium',
  typicalAnalysis: '0-0-60',
  summary:
    'Muriate of potash is the most widely used potassium fertilizer worldwide, supplying potassium as a highly soluble chloride salt mined from underground potash deposits, favoured for its low cost per unit of potassium but used cautiously on chloride-sensitive crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Muriate of potash (MOP), potassium chloride (KCl), is refined from potash ore mined from ancient evaporite deposits. Typical products analyse around 60% potassium, expressed as K₂O, making it the highest-analysis potassium fertilizer in common commercial use.',
    },
    {
      type: 'paragraph',
      text: 'MOP supplies both potassium and chloride, two essential plant nutrients, in a single soluble salt. While chloride is required by plants only in small amounts, some crops are sensitive to higher chloride levels, which affects where MOP is favoured relative to potassium sulfate.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Straight potassium fertilizer' },
    { label: 'Typical analysis', value: '0-0-60 (N-P₂O₅-K₂O)' },
    { label: 'Nutrients supplied', value: 'Potassium and chloride' },
    { label: 'Common form', value: 'Granular or standard crystalline solid' },
    {
      label: 'Key consideration',
      value:
        'Chloride content makes it less favoured on chloride-sensitive crops than sulfate of potash',
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
          text: 'MOP is refined from mined potash ore (sylvinite) through processes such as flotation or dissolution-recrystallisation, yielding potassium chloride at a typical guaranteed analysis of about 60% K₂O.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: 'KCl' },
            { term: 'Potassium content', description: 'About 60% K₂O' },
            {
              term: 'Chloride content',
              description: 'About 45–47%, supplied alongside potassium',
            },
            {
              term: 'Source',
              description: 'Mined from underground evaporite (potash) deposits',
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
          text: 'MOP supplies potassium, an essential macronutrient involved in water regulation, enzyme activation, and overall plant vigour, together with chloride, a nutrient required in much smaller amounts but present in relatively high proportion in this fertilizer.',
        },
        {
          type: 'list',
          items: [
            'Potassium is highly water-soluble and readily taken up by roots',
            'Chloride accompanies potassium in every unit applied',
            'No nitrogen, phosphorus, or sulfur is supplied',
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
          text: 'MOP is the dominant potassium source worldwide because of its high analysis and comparatively low cost per unit of potassium, and it is used across a broad range of field crops where chloride sensitivity is not a limiting concern.',
        },
        {
          type: 'list',
          items: [
            'Lowest cost per unit of potassium among common potassium fertilizers',
            'High analysis reduces bulk and transport cost',
            'Suitable for most field crops that are not notably chloride-sensitive',
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
          text: 'General practice weighs MOP against chloride-sensitive alternatives such as sulfate of potash for crops where quality or chloride tolerance is a concern, and considers soil potassium status and cation exchange capacity, which influence how well potassium is retained against leaching.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and product choice are region-specific',
          text: 'The right potassium rate, timing, and choice between MOP and other potassium sources depend on the crop, its chloride sensitivity, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Potassium is retained relatively well by soils with adequate cation exchange capacity, but on coarse-textured or low-exchange-capacity soils it can be more prone to leaching. Repeated heavy use of chloride-containing fertilizers can also contribute to localised soil salinity concerns in some conditions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Potassium and chloride behaviour depend on soil texture, cation exchange capacity, and irrigation or rainfall pattern; consult regional guidance for soils prone to salinity or leaching.',
        },
      ],
    },
  ],
  relatedTopics: [{ type: 'fertilizer', slug: 'sulfate-of-potash' }],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'chlorine' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  glossaryTerms: ['macronutrient', 'soil-texture'],
  geographicScope:
    'Global overview of muriate of potash as the dominant potassium fertilizer. Suitability relative to chloride-sensitive crops and soils varies by cropping system and region.',
  climateContext:
    'Potassium leaching risk is greatest on coarse-textured, low-cation-exchange-capacity soils under high rainfall or irrigation.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a potassium rate recommendation.',
    'Chloride sensitivity varies widely among crops and should be confirmed against crop-specific agronomic guidance before choosing between MOP and chloride-free potassium sources.',
    'Soil salinity and leaching risk depend on local soil, irrigation water quality, and climate, which are not detailed here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Muriate of potash (MOP) typical products analyse around 60% potassium, expressed as K₂O, the highest-analysis potassium fertilizer in common commercial use.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents MOP as the dominant global potassium fertilizer source and its typical potassium content.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS nutrient management guidance describes MOP potassium analysis and grade conventions.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Potassium fertilizer sources and global use',
    },
    { sourceId: 'ifa', citedFor: 'Muriate of potash product characteristics' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Potassium behaviour and soil retention',
    },
    { sourceId: 'ahdb', citedFor: 'Potassium management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Muriate of Potash (MOP)',
    description:
      'Muriate of potash (MOP / potassium chloride) fertilizer: composition, potassium and chloride supply, general use, and chloride-sensitivity considerations.',
    keywords: [
      'muriate of potash',
      'MOP fertilizer',
      'potassium chloride fertilizer',
      'potassium fertilizer',
    ],
  },
  structuredData: { article: true },
};
