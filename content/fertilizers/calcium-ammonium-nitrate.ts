import type { FertilizerContent } from '@/types/content';

export const calciumAmmoniumNitrate: FertilizerContent = {
  id: 'fertilizer-calcium-ammonium-nitrate',
  slug: 'calcium-ammonium-nitrate',
  contentType: 'fertilizer',
  title: 'Calcium ammonium nitrate',
  alternativeNames: ['CAN'],
  category: 'Fertilizer',
  subcategory: 'Nitrogen fertilizer',
  fertilizerClass: 'mineral-nitrogen',
  typicalAnalysis: '27-0-0',
  summary:
    'Calcium ammonium nitrate is a granular nitrogen fertilizer made by combining ammonium nitrate with calcium carbonate, producing a product with a milder soil reaction than straight ammonium nitrate and a supplementary calcium contribution.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Calcium ammonium nitrate (CAN) is manufactured by mixing molten ammonium nitrate with finely ground limestone or dolomite, then granulating the blend. Typical products analyse around 27% nitrogen, split between ammonium and nitrate forms, along with calcium carbonate filler.',
    },
    {
      type: 'paragraph',
      text: 'The added calcium carbonate reduces the hygroscopicity and improves the handling and storage properties of the ammonium nitrate base, and it also buffers some of the soil acidification associated with nitrification of the ammonium fraction.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Nitrogen fertilizer with calcium carbonate filler',
    },
    {
      label: 'Typical analysis',
      value: '27-0-0 (N-P₂O₅-K₂O), with calcium carbonate',
    },
    {
      label: 'Nutrients supplied',
      value: 'Nitrogen (ammonium and nitrate) and calcium',
    },
    { label: 'Common form', value: 'Granular solid' },
    {
      label: 'Key consideration',
      value: 'Milder acidifying effect on soil than straight ammonium nitrate',
    },
    {
      label: 'Solubility',
      value: 'Nitrogen fraction is water-soluble; carbonate filler is not',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'CAN is produced by blending ammonium nitrate with calcium carbonate (limestone or dolomite), typically yielding a granular product with about 27% total nitrogen, roughly split between ammonium and nitrate forms, plus a substantial calcium carbonate content.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Composition',
              description:
                'Ammonium nitrate blended with calcium carbonate filler',
            },
            {
              term: 'Nitrogen content',
              description:
                'About 27% total nitrogen, roughly half ammonium and half nitrate',
            },
            {
              term: 'Calcium content',
              description:
                'Supplied as calcium carbonate, variable by formulation',
            },
            {
              term: 'Physical form',
              description:
                'Granular, less hygroscopic than pure ammonium nitrate',
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
          text: 'CAN supplies nitrogen in both immediately available nitrate and more slowly nitrifying ammonium forms, and it contributes calcium, primarily through the carbonate filler rather than as a rapidly soluble calcium source.',
        },
        {
          type: 'list',
          items: [
            'Nitrate portion is immediately plant-available',
            'Ammonium portion nitrifies over subsequent days to weeks',
            'Calcium carbonate contributes calcium and buffers acidity from nitrification',
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
          text: 'CAN is widely used in temperate cereal, root, and forage crop systems where growers want the dual-form nitrogen supply of ammonium nitrate together with a gentler effect on soil pH and improved granule handling.',
        },
        {
          type: 'list',
          items: [
            'Combines quick and short-delay nitrogen availability in one product',
            'Milder soil acidification than straight ammonium nitrate over repeated use',
            'Improved storage and spreading properties from the carbonate filler',
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
          text: 'As with other nitrate-containing nitrogen fertilizers, general practice is to time and, where appropriate, split applications to match crop nitrogen demand and reduce the risk of nitrate leaching in wet periods.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The correct nitrogen rate, timing, and number of splits depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing, regional guidance, and the product label.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'The nitrate fraction of CAN is mobile in soil and subject to leaching losses on well-drained soils during periods of high rainfall or irrigation, and to denitrification under saturated conditions. Its acidifying effect on soil is generally milder than that of straight ammonium nitrate or ammonium sulfate.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Loss pathways vary by soil texture, drainage, and rainfall pattern; consult regional nutrient-management guidance for practices that reduce nitrate leaching.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'ammonium-nitrate' },
    { type: 'fertilizer', slug: 'urea' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of calcium ammonium nitrate as a nitrogen fertilizer, most widely used in temperate cereal and root-crop regions.',
  climateContext:
    'Nitrate leaching risk is greatest on well-drained soils during periods of high rainfall or irrigation between applications and crop uptake.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a nitrogen rate recommendation.',
    'The calcium contribution from carbonate filler is slow-acting relative to soluble calcium sources and is not a substitute for a dedicated liming or calcium program where one is needed.',
    'Loss pathways and their magnitude depend on site conditions and are not quantified here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Calcium ammonium nitrate (CAN) typically analyses around 27% total nitrogen, roughly split between ammonium and nitrate forms, plus a calcium carbonate filler.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents calcium ammonium nitrate as a nitrogen fertilizer and its dual ammonium/nitrate nitrogen composition.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'ahdb',
          evidenceNote:
            'AHDB nutrient management guidance describes CAN nitrogen content and grade conventions for cereals and root crops.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Nitrogen fertilizer forms and plant availability',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Calcium ammonium nitrate product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nitrate behaviour and soil pH effects',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Nitrogen management context for cereals and root crops',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Calcium Ammonium Nitrate',
    description:
      'Calcium ammonium nitrate (CAN) fertilizer: composition, dual nitrogen forms, calcium contribution, general use, and environmental considerations.',
    keywords: [
      'calcium ammonium nitrate',
      'CAN fertilizer',
      'nitrogen fertilizer',
      'ammonium nitrate calcium carbonate',
    ],
  },
  structuredData: { article: true },
};
