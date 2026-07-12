import type { FertilizerContent } from '@/types/content';

export const sulfateOfPotash: FertilizerContent = {
  id: 'fertilizer-sulfate-of-potash',
  slug: 'sulfate-of-potash',
  contentType: 'fertilizer',
  title: 'Sulfate of potash',
  alternativeNames: ['SOP', 'Potassium sulfate', 'K₂SO₄'],
  category: 'Fertilizer',
  subcategory: 'Potassium fertilizer',
  fertilizerClass: 'mineral-potassium',
  typicalAnalysis: '0-0-50-18S',
  summary:
    'Sulfate of potash is a chloride-free potassium fertilizer that also supplies sulfur, favoured on chloride-sensitive crops and where fruit or leaf quality is a priority, though it typically costs more per unit of potassium than muriate of potash.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sulfate of potash (SOP), potassium sulfate (K₂SO₄), is produced either from naturally occurring potassium-sulfate minerals or through chemical processes that combine potassium chloride with a sulfate source, removing most of the chloride. Typical products analyse around 50% potassium and 18% sulfur.',
    },
    {
      type: 'paragraph',
      text: 'Because it supplies potassium without significant chloride, SOP is often preferred for crops that are sensitive to chloride or where product quality, such as fruit storage life or leaf appearance, can be affected by chloride uptake.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Potassium and sulfur fertilizer' },
    { label: 'Typical analysis', value: '0-0-50-18S (N-P₂O₅-K₂O-S)' },
    { label: 'Nutrients supplied', value: 'Potassium and sulfur' },
    { label: 'Common form', value: 'Granular or crystalline solid' },
    {
      label: 'Key consideration',
      value:
        'Chloride-free; typically costs more per unit of potassium than muriate of potash',
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
          text: 'SOP is produced from naturally occurring potassium-sulfate-bearing minerals or through processes that react potassium chloride with sulfate sources, yielding a product with a typical guaranteed analysis of around 50% K₂O and 18% sulfur, and minimal chloride.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: 'K₂SO₄' },
            { term: 'Potassium content', description: 'About 50% K₂O' },
            { term: 'Sulfur content', description: 'About 18%, as sulfate' },
            {
              term: 'Chloride content',
              description: 'Minimal, distinguishing it from muriate of potash',
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
          text: 'SOP supplies potassium, an essential macronutrient, together with sulfate-sulfur, without the substantial chloride load carried by muriate of potash, making it a two-nutrient product favoured where chloride is undesirable.',
        },
        {
          type: 'list',
          items: [
            'Potassium is water-soluble and readily taken up by roots',
            'Sulfate-sulfur is supplied as a useful secondary nutrient',
            'Chloride content is low relative to muriate of potash',
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
          text: 'SOP is commonly used on chloride-sensitive crops, including many fruit, vegetable, and other quality-sensitive crops, and on crops or soils with a concurrent sulfur need, despite its typically higher cost per unit of potassium compared with muriate of potash.',
        },
        {
          type: 'list',
          items: [
            'Preferred where chloride sensitivity affects yield or product quality',
            'Supplies sulfur alongside potassium',
            'Suited to fertigation and foliar programs due to good solubility and low salt burden relative to chloride salts',
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
          text: 'General practice weighs the additional cost of SOP against its chloride-free benefit for sensitive crops, and considers soil potassium and sulfur status alongside the crop’s overall nutrient program.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and product choice are region-specific',
          text: 'The right potassium and sulfur rate, timing, and choice between SOP and other potassium sources depend on the crop, its chloride sensitivity, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'As a chloride-free source, SOP avoids the localised chloride loading associated with muriate of potash, though potassium can still be subject to leaching on coarse-textured, low-exchange-capacity soils, and sulfate behaves as a mobile anion in the soil solution.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Potassium and sulfur behaviour depend on soil texture, cation exchange capacity, and rainfall or irrigation pattern; consult regional guidance for soils prone to nutrient leaching.',
        },
      ],
    },
  ],
  relatedTopics: [{ type: 'fertilizer', slug: 'muriate-of-potash' }],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'grape' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of sulfate of potash as a chloride-free potassium fertilizer. Relative use compared with muriate of potash varies by crop, market, and region.',
  climateContext:
    'Potassium leaching risk is greatest on coarse-textured, low-cation-exchange-capacity soils under high rainfall or irrigation.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a potassium or sulfur rate recommendation.',
    'Chloride sensitivity varies widely among crops and should be confirmed against crop-specific agronomic guidance.',
    'Cost differences between SOP and muriate of potash vary by market and region and are not quantified here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Potassium and sulfur fertilizer sources' },
    { sourceId: 'ifa', citedFor: 'Sulfate of potash product characteristics' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Potassium and sulfur behaviour in soil',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Potassium management context for quality-sensitive crops',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sulfate of Potash (SOP)',
    description:
      'Sulfate of potash (SOP / potassium sulfate) fertilizer: chloride-free potassium and sulfur supply, composition, general use, and application principles.',
    keywords: [
      'sulfate of potash',
      'SOP fertilizer',
      'potassium sulfate fertilizer',
      'chloride-free potassium',
    ],
  },
  structuredData: { article: true },
};
