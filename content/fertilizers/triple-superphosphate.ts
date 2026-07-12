import type { FertilizerContent } from '@/types/content';

export const tripleSuperphosphate: FertilizerContent = {
  id: 'fertilizer-triple-superphosphate',
  slug: 'triple-superphosphate',
  contentType: 'fertilizer',
  title: 'Triple superphosphate',
  alternativeNames: ['TSP', 'Concentrated superphosphate'],
  category: 'Fertilizer',
  subcategory: 'Phosphorus fertilizer',
  fertilizerClass: 'mineral-phosphorus',
  typicalAnalysis: '0-46-0',
  summary:
    'Triple superphosphate is a concentrated, straight phosphorus fertilizer made by treating phosphate rock with phosphoric acid, valued for its high phosphorus content, water solubility, and useful calcium contribution, without added nitrogen or potassium.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Triple superphosphate (TSP) is produced by reacting finely ground phosphate rock with phosphoric acid, a process that concentrates the phosphorus content well above that of single superphosphate. Typical products analyse around 46% phosphorus, expressed as P₂O₅, with no nitrogen or potassium.',
    },
    {
      type: 'paragraph',
      text: 'TSP also supplies calcium as part of its mineral structure, though at a lower proportion than single superphosphate, and it contains negligible sulfur since sulfuric acid is not used in its manufacture. It is used as a straight phosphorus source and as a component in blended fertilizers.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Straight phosphorus fertilizer' },
    { label: 'Typical analysis', value: '0-46-0 (N-P₂O₅-K₂O)' },
    { label: 'Nutrients supplied', value: 'Phosphorus, with some calcium' },
    { label: 'Common form', value: 'Granular solid' },
    {
      label: 'Key consideration',
      value:
        'Phosphorus availability strongly depends on soil pH and phosphorus-fixing capacity',
    },
    { label: 'Solubility', value: 'Water-soluble phosphorus fraction' },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'TSP is manufactured by acidulating phosphate rock with phosphoric acid, which converts much of the rock’s relatively insoluble phosphorus into water-soluble monocalcium phosphate. Typical guaranteed analysis is around 0-46-0.',
        },
        {
          type: 'table',
          caption: 'Composition summary',
          columns: ['Property', 'Detail'],
          rows: [
            ['Phosphorus content', 'About 46% P₂O₅, largely water-soluble'],
            [
              'Calcium content',
              'Present as calcium phosphate; a secondary contribution',
            ],
            ['Nitrogen / potassium', 'None'],
            ['Manufacture', 'Phosphate rock acidulated with phosphoric acid'],
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
          text: 'TSP supplies phosphorus as its dominant nutrient, in a form that is largely water-soluble and therefore accessible to roots soon after application, along with a secondary supply of calcium bound within the phosphate mineral.',
        },
        {
          type: 'list',
          items: [
            'Phosphorus is the primary nutrient, at high concentration',
            'Calcium is supplied as a secondary nutrient',
            'No nitrogen, potassium, or sulfur is supplied in meaningful amounts',
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
          text: 'TSP is used as a concentrated, straight phosphorus source where a grower wants to supply phosphorus independently of nitrogen, such as when nitrogen is being managed separately, and as a component of blended and compound fertilizer products.',
        },
        {
          type: 'list',
          items: [
            'High phosphorus analysis reduces bulk and handling cost per unit of nutrient',
            'Useful where phosphorus is needed without accompanying nitrogen',
            'Widely used as a phosphorus component in fertilizer blends',
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
          text: 'Because phosphorus is largely immobile in most soils, placement close to the developing root system is a general principle for maximising uptake efficiency, and soil pH strongly affects how much of the applied phosphorus remains available over time.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The right phosphorus rate and placement depend on the crop, soil test results, yield goal, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Phosphorus lost from fields through erosion and runoff, rather than leaching in most soils, is the main environmental pathway of concern, since even modest phosphorus loading can contribute to the eutrophication of lakes and rivers.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Erosion control and matching phosphorus supply to crop and soil-test need are general approaches to limiting off-site movement; specifics depend on local terrain, soil, and regulation.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'single-superphosphate' },
    { type: 'fertilizer', slug: 'monoammonium-phosphate' },
    { type: 'fertilizer', slug: 'diammonium-phosphate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  glossaryTerms: ['macronutrient', 'soil-ph'],
  geographicScope:
    'Global overview of triple superphosphate as a straight phosphorus fertilizer. Availability and blending use vary by region.',
  climateContext:
    'Phosphorus diffusion to roots is slower in cold or dry soils, which can affect early-season crop response in cool or arid climates.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a phosphorus rate recommendation.',
    'Phosphorus availability depends strongly on soil pH, texture, and phosphorus-fixing capacity, which are not detailed for specific soils here.',
    'Calcium supplied by TSP is a secondary contribution and should not be treated as a substitute for a dedicated calcium or liming program where one is needed.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Triple superphosphate (TSP) typical products analyse around 46% phosphorus, expressed as P₂O₅, with no nitrogen or potassium.',
      quantitative: true,
      citations: [
        {
          sourceId: 'fao',
          evidenceNote:
            'FAO documents TSP as a concentrated phosphorus fertilizer and its typical phosphorus content.',
          retrievedDate: '2026-07-12',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS nutrient management guidance describes TSP phosphorus analysis and grade conventions.',
          retrievedDate: '2026-07-12',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Phosphorus fertilizer manufacture and sources',
    },
    {
      sourceId: 'ifa',
      citedFor: 'Triple superphosphate product characteristics',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Phosphorus behaviour and loss pathways in soil',
    },
    { sourceId: 'ahdb', citedFor: 'Phosphorus management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Triple Superphosphate (TSP)',
    description:
      'Triple superphosphate (TSP) fertilizer: concentrated phosphorus composition, calcium contribution, general use, and application and environmental principles.',
    keywords: [
      'triple superphosphate',
      'TSP fertilizer',
      'phosphorus fertilizer',
      'concentrated superphosphate',
    ],
  },
  structuredData: { article: true },
};
