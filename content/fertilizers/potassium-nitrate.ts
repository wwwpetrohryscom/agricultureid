import type { FertilizerContent } from '@/types/content';

export const potassiumNitrate: FertilizerContent = {
  id: 'fertilizer-potassium-nitrate',
  slug: 'potassium-nitrate',
  contentType: 'fertilizer',
  title: 'Potassium nitrate',
  alternativeNames: ['Saltpetre', 'KNO₃', 'Nitrate of potash'],
  category: 'Fertilizer',
  subcategory: 'Potassium fertilizer',
  fertilizerClass: 'mineral-potassium',
  typicalAnalysis: '13-0-45',
  summary:
    'Potassium nitrate is a fully water-soluble, chloride-free fertilizer that supplies both potassium and nitrate-nitrogen, widely used in fertigation and on chloride-sensitive high-value crops where its cost premium over other potassium sources is justified.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Potassium nitrate (KNO₃), also called saltpetre, is manufactured from potassium chloride or potassium sulfate reacted with nitric acid or ammonium nitrate. The resulting product supplies potassium and nitrogen in a single, fully water-soluble crystal, with a typical guaranteed analysis of about 13-0-45.',
    },
    {
      type: 'paragraph',
      text: 'Because it contains no chloride and no phosphorus, potassium nitrate is valued where chloride accumulation is a concern, either for crop sensitivity or soil salinity, and where growers want potassium delivered together with an immediately available nitrate-nitrogen source.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Potassium and nitrate-nitrogen fertilizer',
    },
    { label: 'Typical analysis', value: '13-0-45 (N-P₂O₅-K₂O)' },
    { label: 'Nutrients supplied', value: 'Potassium and nitrate-nitrogen' },
    {
      label: 'Common form',
      value: 'Fully water-soluble crystalline or granular solid',
    },
    {
      label: 'Key consideration',
      value:
        'Chloride-free, favoured on chloride-sensitive crops and saline-prone soils',
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
          text: 'Potassium nitrate is produced by combining a potassium salt with a nitrate source, yielding a crystalline compound with roughly 44–46% potassium (as K₂O) and about 13% nitrogen, entirely in nitrate form. Its guaranteed analysis is commonly expressed as 13-0-45.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: 'KNO₃' },
            {
              term: 'Potassium content',
              description: 'About 44–46% K₂O, no chloride carrier',
            },
            {
              term: 'Nitrogen content',
              description: 'About 13% total nitrogen, entirely as nitrate',
            },
            {
              term: 'Solubility',
              description:
                'Fully soluble in water; suited to solution and fertigation systems',
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
          text: 'Potassium nitrate supplies potassium, an essential macronutrient for osmotic regulation, water relations, and enzyme activation, together with nitrate-nitrogen, which is immediately available for root uptake without the hydrolysis or nitrification steps required by amide or ammonium sources.',
        },
        {
          type: 'list',
          items: [
            'Potassium is supplied without an accompanying chloride ion',
            'Nitrogen is delivered entirely as nitrate, taken up rapidly by roots',
            'Contains no phosphorus or micronutrients',
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
          text: 'Potassium nitrate is widely used in fertigation and hydroponic nutrient solutions because of its complete solubility and low risk of clogging drip systems, and on crops such as potato, tomato, and banana where chloride sensitivity or fruit quality considerations disfavour chloride-containing potassium sources.',
        },
        {
          type: 'list',
          items: [
            'Well suited to drip fertigation and soluble nutrient-solution programs',
            'Preferred on chloride-sensitive crops and in saline-prone growing areas',
            'Also used as a foliar-applied potassium and nitrogen source in some systems',
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
          text: 'Potassium nitrate is commonly split into multiple applications through the growing season, either via fertigation or as periodic soil or foliar treatments, to match crop potassium and nitrogen demand while limiting any single high-concentration dose.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The appropriate potassium and nitrogen rate, timing, and method depend on the crop, soil and irrigation-water test results, yield goal, and local guidance. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'The nitrate fraction of potassium nitrate is mobile in soil and subject to the same leaching and denitrification pathways as other nitrate-based nitrogen fertilizers, particularly under high rainfall, over-irrigation, or coarse-textured soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Potassium nitrate typically costs more per unit of nutrient than chloride-based potassium sources; its use is generally justified where chloride sensitivity, salinity management, or fertigation suitability provide an offsetting benefit.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'muriate-of-potash' },
    { type: 'fertilizer', slug: 'sulfate-of-potash' },
    { type: 'fertilizer', slug: 'calcium-nitrate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'banana' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'irrigation-method', slug: 'fertigation' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of potassium nitrate as a soluble potassium and nitrogen fertilizer, most common in fertigated and high-value horticultural production.',
  climateContext:
    'Nitrate leaching risk from the nitrogen fraction rises with high rainfall or irrigation volumes, particularly on coarse-textured soils.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nutrient rate recommendation for any crop or region.',
    'Cost relative to other potassium sources varies by market and region and is not quantified here.',
    'Leaching risk from the nitrate fraction depends on local soil, irrigation, and rainfall conditions.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Potassium nitrate typically analyses about 13% nitrogen, entirely as nitrate, and roughly 44–46% potassium (K₂O), commonly expressed as a 13-0-45 grade.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents potassium nitrate as a chloride-free potassium and nitrate fertilizer source and its typical composition.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS nutrient management guidance describes potassium nitrate nitrogen and potassium analysis.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Potassium and nitrate fertilizer forms and use',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Potassium nitrate product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nitrate behaviour and leaching in soil',
    },
    { sourceId: 'ahdb', citedFor: 'Potassium fertilizer management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Potassium Nitrate',
    description:
      'Potassium nitrate (KNO₃) fertilizer: composition, chloride-free potassium and nitrate supply, fertigation use, and application principles.',
    keywords: [
      'potassium nitrate fertilizer',
      'KNO3 fertilizer',
      'chloride-free potassium',
      'fertigation potassium source',
    ],
  },
  structuredData: { article: true },
};
