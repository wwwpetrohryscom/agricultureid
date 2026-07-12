import type { FertilizerContent } from '@/types/content';

export const chelatedMicronutrients: FertilizerContent = {
  id: 'fertilizer-chelated-micronutrients',
  slug: 'chelated-micronutrients',
  contentType: 'fertilizer',
  title: 'Chelated micronutrients',
  alternativeNames: ['Chelated trace elements', 'Metal chelates'],
  category: 'Fertilizer',
  subcategory: 'Micronutrient fertilizer',
  fertilizerClass: 'secondary-micronutrient',
  typicalAnalysis:
    'Variable by product and element, e.g. Fe-EDDHA around 6% Fe, Zn-EDTA around 14% Zn',
  summary:
    'Chelated micronutrients are trace-element fertilizers in which a metal such as iron, zinc, manganese, or copper is bound within an organic chelating molecule, keeping the nutrient soluble and plant-available across a wider soil pH range than uncomplexed mineral salts of the same elements.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chelated micronutrient fertilizers surround a metal ion, such as iron, zinc, manganese, or copper, with an organic molecule called a chelating agent (examples include EDTA, DTPA, and EDDHA), which forms a stable, ring-shaped complex around the metal.',
    },
    {
      type: 'paragraph',
      text: 'This chelation protects the metal from reacting with soil components that would otherwise convert it into insoluble, plant-unavailable forms, which is a particular problem for micronutrients such as iron and zinc on alkaline and calcareous soils. Different chelating agents vary in their stability across soil pH ranges, which affects which chelate is chosen for a given situation.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Micronutrient fertilizer using organic chelating agents',
    },
    {
      label: 'Typical analysis',
      value:
        'Variable by product and element (e.g. Fe-EDDHA ~6% Fe, Zn-EDTA ~14% Zn)',
    },
    {
      label: 'Nutrients supplied',
      value:
        'Iron, zinc, manganese, copper, and other micronutrients, depending on the product',
    },
    {
      label: 'Common form',
      value: 'Water-soluble powder, granule, or liquid concentrate',
    },
    {
      label: 'Key consideration',
      value:
        'Chelate stability varies by agent and soil pH; the appropriate chelate depends on the deficiency and soil conditions',
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
          text: 'A chelated micronutrient product combines a specific metal, such as iron, zinc, manganese, or copper, with a chelating agent that varies in structure and pH stability. Guaranteed analysis is expressed as the percentage of the metal element, and formulations vary by both element and chelating agent used.',
        },
        {
          type: 'table',
          caption:
            'Examples of chelating agents and their general pH stability',
          columns: ['Chelating agent', 'General note on stability'],
          rows: [
            [
              'EDTA',
              'Effective on near-neutral to moderately acid soils; less stable at high pH for iron',
            ],
            [
              'DTPA',
              'Broader pH stability than EDTA for several micronutrients',
            ],
            [
              'EDDHA',
              'Notably stable for iron even on calcareous, high-pH soils',
            ],
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
          text: 'Chelated products supply specific micronutrients, most commonly iron, zinc, manganese, or copper, in a form that resists conversion to insoluble compounds in soil, keeping the element available for root uptake for longer than an equivalent uncomplexed mineral salt would remain.',
        },
        {
          type: 'list',
          items: [
            'Delivers a targeted micronutrient rather than a broad nutrient package',
            'Chelation improves availability particularly on alkaline or calcareous soils',
            'Different chelating agents suit different elements and soil pH conditions',
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
          text: 'Chelated micronutrients are used to correct or prevent specific micronutrient deficiencies, such as iron chlorosis in soybean or citrus on high-pH soils, where uncomplexed mineral salts would rapidly become unavailable in the soil.',
        },
        {
          type: 'list',
          items: [
            'Effective for correcting deficiencies of specific elements identified by soil or tissue testing',
            'Useful where soil conditions, especially high pH, limit availability of uncomplexed mineral micronutrient sources',
            'Applicable as soil, foliar, or fertigation treatments, depending on the product',
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
          text: 'General practice is to confirm a specific micronutrient deficiency through soil or tissue testing before applying a chelated product, and to select the chelating agent suited to the target element and soil pH, since not every chelate performs equally across all soil conditions.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Product choice, rates, and timing are deficiency- and region-specific',
          text: 'Which micronutrient and chelating agent to use, at what rate, and by which application method (soil, foliar, or fertigation) depend on the confirmed deficiency, the crop, soil test or tissue test results, and local regulations. AgricultureID does not publish universal application rates; follow testing results, the product label, and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because chelated micronutrients are typically applied in small quantities targeted at a specific deficiency, their environmental footprint differs from that of bulk macronutrient fertilizers; the main considerations are avoiding unnecessary over-application and following label guidance for the specific chelate and crop.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Applying micronutrients without a confirmed deficiency offers little agronomic benefit and, for some elements, can risk toxicity at excessive rates; testing before application is the general recommended practice.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'vermicompost' },
  ],
  connections: [
    { type: 'nutrient', slug: 'iron' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'manganese' },
    { type: 'nutrient', slug: 'copper' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'orange' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['micronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of chelated micronutrient fertilizers. Which elements and chelating agents are used, and how commonly, vary by soil type, crop, and region.',
  climateContext:
    'Micronutrient availability, particularly of iron and zinc, is strongly reduced on high-pH, calcareous soils common in some arid and semi-arid regions, increasing the relevance of chelated forms there.',
  limitations: [
    'This entry describes chelated micronutrients as a category; specific analyses and chelating agents vary by product and are not exhaustively listed here.',
    'This is not an application rate recommendation for any element, crop, or region.',
    'Micronutrient deficiency diagnosis should be confirmed with soil or tissue testing before treatment, since symptoms can overlap with other disorders.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Chelated micronutrient products vary by element and chelating agent; for example, Fe-EDDHA products are formulated at around 6% iron and Zn-EDTA products at around 14% zinc.',
      quantitative: true,
      citations: [
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance describes chelated micronutrient product formulations and typical element concentrations.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents chelated micronutrient fertilizers and their role in correcting deficiencies on high-pH soils.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Micronutrient fertilizers and deficiency management',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Chelated micronutrient product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Micronutrient availability and soil pH interactions',
    },
    { sourceId: 'ahdb', citedFor: 'Micronutrient management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chelated Micronutrients',
    description:
      'Chelated micronutrient fertilizers: how chelating agents keep iron, zinc, manganese, and copper available in soil, general use, and application principles.',
    keywords: [
      'chelated micronutrients',
      'micronutrient fertilizer',
      'iron chelate',
      'zinc chelate fertilizer',
    ],
  },
  structuredData: { article: true },
};
