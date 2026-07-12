import type { FertilizerContent } from '@/types/content';

export const kieserite: FertilizerContent = {
  id: 'fertilizer-kieserite',
  slug: 'kieserite',
  contentType: 'fertilizer',
  title: 'Kieserite',
  alternativeNames: ['Magnesium sulfate monohydrate'],
  category: 'Fertilizer',
  subcategory: 'Magnesium and sulfur fertilizer',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis: '~16% Mg, ~22% S',
  summary:
    'Kieserite is a naturally occurring magnesium sulfate mineral, mined and processed into a granular fertilizer that supplies both magnesium and sulfur in a form more soluble than dolomitic limestone, without materially raising soil pH.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Kieserite is the mineral name for magnesium sulfate monohydrate (MgSO₄·H₂O), mined from evaporite deposits and processed into granular fertilizer products that typically supply around 16% magnesium and 22% sulfur.',
    },
    {
      type: 'paragraph',
      text: 'Unlike dolomitic limestone, which supplies magnesium slowly as it dissolves and neutralises acidity, kieserite dissolves considerably faster and has little effect on soil pH, making it a distinct option where magnesium correction is needed without a liming effect.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Magnesium and sulfur fertilizer' },
    {
      label: 'Typical analysis',
      value: 'About 16% magnesium and 22% sulfur',
    },
    { label: 'Nutrients supplied', value: 'Magnesium and sulfur' },
    { label: 'Common form', value: 'Granular solid, mined and processed' },
    {
      label: 'Key consideration',
      value:
        'More soluble than dolomitic lime and has minimal effect on soil pH',
    },
    { label: 'Solubility', value: 'Moderately to highly water-soluble' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Kieserite is mined as a natural evaporite mineral and processed into a granular product for fertilizer use. Its guaranteed analysis is typically expressed as roughly 16% magnesium and 22% sulfur, though exact figures vary somewhat between deposits and manufacturers.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Mineral formula', description: 'MgSO₄·H₂O' },
            {
              term: 'Magnesium content',
              description: 'Approximately 16% elemental magnesium',
            },
            {
              term: 'Sulfur content',
              description: 'Approximately 22% elemental sulfur, as sulfate',
            },
            {
              term: 'Solubility',
              description:
                'Dissolves faster than dolomitic limestone; suitable for blending and some soluble applications',
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
          text: 'Kieserite supplies magnesium, a secondary macronutrient central to chlorophyll structure and enzyme activation, and sulfate-sulfur, a nutrient required for amino acid and protein synthesis, in a moderately soluble mineral form.',
        },
        {
          type: 'list',
          items: [
            'Magnesium is supplied in sulfate form, which is more soluble than carbonate sources',
            'Sulfur is supplied as sulfate, immediately available to plants',
            'Contributes negligible change to soil pH compared with liming materials',
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
          text: 'Kieserite is used to correct or prevent magnesium deficiency on crops such as potato, sugar beet, and grape, particularly on soils where liming is not needed or already adequate, and where a faster-acting magnesium source than dolomitic limestone is preferred.',
        },
        {
          type: 'list',
          items: [
            'Corrects magnesium deficiency without a substantial liming effect',
            'Supplies sulfur alongside magnesium in a single material',
            'Can be blended into compound fertilizers or applied as a straight product',
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
          text: 'General practice is to confirm magnesium deficiency or a magnesium-to-potassium imbalance through soil or tissue testing before application, since excess potassium fertilization can induce or worsen magnesium deficiency independent of the soil’s total magnesium supply.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are soil- and crop-specific',
          text: 'The appropriate magnesium and sulfur rate depends on soil test results, the crop, the soil’s cation balance, and local guidance. AgricultureID does not publish universal application rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Sulfate-sulfur from kieserite behaves similarly to sulfate from other fertilizers in soil, remaining mobile and subject to some leaching on sandy or high-rainfall soils, while magnesium is retained on the soil’s cation exchange sites to a degree that depends on the exchange capacity present.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'On soils with a genuinely low cation exchange capacity, both magnesium and sulfate can leach more readily; split applications may be considered in such conditions based on local guidance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'gypsum' },
    { type: 'fertilizer', slug: 'elemental-sulfur' },
    { type: 'fertilizer', slug: 'agricultural-lime' },
  ],
  connections: [
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'grape' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of kieserite as a magnesium and sulfur fertilizer, sourced from evaporite mineral deposits and traded internationally.',
  climateContext:
    'Sulfate leaching risk from kieserite increases with high rainfall on sandy, low cation-exchange-capacity soils.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nutrient rate recommendation for any crop or region.',
    'Magnesium deficiency has multiple causes, including cation imbalance from potassium fertilization, and should be confirmed with testing rather than assumed.',
    'Exact analysis varies by mineral deposit and manufacturer and is not exhaustively specified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Magnesium and sulfur fertilizer materials',
    },
    { sourceId: 'ifa', citedFor: 'Kieserite product characteristics' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Magnesium and sulfate behaviour in soil',
    },
    { sourceId: 'ahdb', citedFor: 'Magnesium fertilizer management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Kieserite',
    description:
      'Kieserite (magnesium sulfate monohydrate) fertilizer: composition, magnesium and sulfur supply, general use, and application principles.',
    keywords: [
      'kieserite fertilizer',
      'magnesium sulfate fertilizer',
      'magnesium deficiency fertilizer',
      'sulfur fertilizer',
    ],
  },
  structuredData: { article: true },
};
