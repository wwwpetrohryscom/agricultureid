import type { FertilizerContent } from '@/types/content';

export const ammoniumSulfate: FertilizerContent = {
  id: 'fertilizer-ammonium-sulfate',
  slug: 'ammonium-sulfate',
  contentType: 'fertilizer',
  title: 'Ammonium sulfate',
  alternativeNames: ['AS', '(NH₄)₂SO₄', 'Sulfate of ammonia'],
  category: 'Fertilizer',
  subcategory: 'Nitrogen fertilizer',
  fertilizerClass: 'mineral-nitrogen',
  typicalAnalysis: '21-0-0-24S',
  summary:
    'Ammonium sulfate is a nitrogen fertilizer that also supplies sulfur, making it a common choice where crops or soils are sulfur-responsive, though its ammonium content has an acidifying effect on soil over repeated use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ammonium sulfate, (NH₄)₂SO₄, supplies both nitrogen and sulfur in a single granular product, typically analysing around 21% nitrogen and 24% sulfur. It is produced as a co-product of some industrial processes and directly through the reaction of ammonia with sulfuric acid.',
    },
    {
      type: 'paragraph',
      text: 'Its nitrogen is entirely in ammonium form, which is retained on soil exchange sites before nitrifying to nitrate. Because nitrification releases hydrogen ions, ammonium sulfate has a stronger acidifying effect on soil, per unit of nitrogen, than most other common nitrogen fertilizers.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Nitrogen and sulfur fertilizer' },
    { label: 'Typical analysis', value: '21-0-0-24S (N-P₂O₅-K₂O-S)' },
    { label: 'Nutrients supplied', value: 'Nitrogen and sulfur' },
    { label: 'Common form', value: 'Crystalline or granular solid' },
    {
      label: 'Key consideration',
      value:
        'Acidifying effect on soil with repeated use, per unit of nitrogen applied',
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
          text: 'Ammonium sulfate is a crystalline salt formed from ammonia and sulfuric acid. It is typically sold with a guaranteed analysis of about 21% nitrogen and 24% sulfur, with no phosphorus or potassium content.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: '(NH₄)₂SO₄' },
            {
              term: 'Nitrogen content',
              description: 'About 21% total nitrogen, entirely as ammonium',
            },
            {
              term: 'Sulfur content',
              description: 'About 24% sulfur, as sulfate',
            },
            {
              term: 'Soil reaction',
              description:
                'Acidifying, due to nitrification of the ammonium fraction',
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
          text: 'Ammonium sulfate supplies nitrogen as ammonium, which nitrifies to nitrate in soil, and sulfur as sulfate, an anion that is directly plant-available and mobile in the soil solution in a manner similar to nitrate.',
        },
        {
          type: 'list',
          items: [
            'Nitrogen is entirely in ammonium form and nitrifies over time',
            'Sulfate-sulfur is immediately plant-available',
            'Provides no phosphorus, potassium, or micronutrients',
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
          text: 'Ammonium sulfate is commonly used where a crop or field has a sulfur requirement alongside its nitrogen need, such as many oilseed and legume crops, and on soils with limited native sulfur supply from organic matter mineralisation or atmospheric deposition.',
        },
        {
          type: 'list',
          items: [
            'Combines nitrogen and sulfur supply in one granular product',
            'Ammonium form is less prone to ammonia volatilisation than urea when surface-applied to neutral or acid soils',
            'Used as a component of blended fertilizer programs where sulfur is limiting',
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
          text: 'General practice accounts for both the nitrogen and sulfur supplied and for the cumulative acidifying effect of repeated ammonium sulfate use, which may call for periodic soil pH monitoring and liming where warranted.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The right nitrogen and sulfur rate, timing, and placement depend on the crop, soil and tissue test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance, and always read the product label.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because its nitrogen is in ammonium form, ammonium sulfate has a lower ammonia-volatilisation risk than urea on most soils, but the nitrate produced after nitrification remains subject to leaching and denitrification, and repeated use progressively acidifies soil.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil acidification from long-term ammonium sulfate use is cumulative and site-specific; periodic soil pH testing helps determine whether liming is needed.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'ammonium-nitrate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'cotton' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of ammonium sulfate as a nitrogen and sulfur fertilizer. Sulfur responsiveness of soils and crops varies regionally.',
  climateContext:
    'Sulfur deficiency is more common on soils with low organic matter and in regions with reduced atmospheric sulfur deposition.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nitrogen or sulfur rate recommendation.',
    'The rate of soil acidification from repeated use depends on soil buffering capacity and is not quantified here.',
    'Sulfur responsiveness varies by crop, soil, and region and should be confirmed with soil or tissue testing.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Ammonium sulfate typically analyses around 21% nitrogen and 24% sulfur, with nitrogen entirely in ammonium form and sulfur as sulfate.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents ammonium sulfate as a combined nitrogen and sulfur fertilizer source and its typical composition.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'ahdb',
          evidenceNote:
            'AHDB nutrient management guidance describes ammonium sulfate nitrogen and sulfur content and its acidifying effect.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Sulfur and nitrogen fertilizer sources' },
    { sourceId: 'ifa', citedFor: 'Ammonium sulfate product characteristics' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil acidification and nutrient behaviour',
    },
    { sourceId: 'ahdb', citedFor: 'Sulfur and nitrogen management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Ammonium Sulfate',
    description:
      'Ammonium sulfate fertilizer: combined nitrogen and sulfur supply, composition, general use, application principles, and soil acidification effects.',
    keywords: [
      'ammonium sulfate fertilizer',
      'nitrogen sulfur fertilizer',
      'sulfate of ammonia',
      'soil acidification',
    ],
  },
  structuredData: { article: true },
};
