import type { FertilizerContent } from '@/types/content';

export const ammoniumPolyphosphate: FertilizerContent = {
  id: 'fertilizer-ammonium-polyphosphate',
  slug: 'ammonium-polyphosphate',
  contentType: 'fertilizer',
  title: 'Ammonium polyphosphate (APP)',
  alternativeNames: ['APP', 'Liquid phosphate fertilizer', 'Polyphosphate'],
  category: 'Fertilizer',
  subcategory: 'Phosphorus fertilizer',
  fertilizerClass: 'mineral-phosphorus',
  typicalAnalysis: '10-34-0',
  summary:
    'Ammonium polyphosphate (APP) is a clear liquid phosphorus fertilizer that also supplies nitrogen, containing a mix of polyphosphate and orthophosphate; it is widely used as a starter fertilizer and as a carrier for metal micronutrients, which polyphosphates help keep in solution.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ammonium polyphosphate (APP) is a liquid fertilizer commonly supplied at a grade of about 10-34-0, meaning it supplies both nitrogen and a high concentration of phosphorus. It is made by reacting ammonia with superphosphoric acid, producing a mixture of polyphosphate and orthophosphate species.',
    },
    {
      type: 'paragraph',
      text: 'The polyphosphate fraction hydrolyses in soil to orthophosphate, the form plants take up, over a period governed by temperature and biological activity. Polyphosphates also have the useful property of sequestering metal micronutrients such as zinc, which allows APP to serve as a stable liquid carrier for those nutrients.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Liquid nitrogen-phosphorus fertilizer',
    },
    { label: 'Typical analysis', value: '10-34-0 (N-P₂O₅-K₂O)' },
    {
      label: 'Nutrients supplied',
      value: 'Phosphorus and nitrogen; can carry micronutrients',
    },
    { label: 'Common form', value: 'Clear liquid solution' },
    {
      label: 'Key consideration',
      value:
        'Polyphosphates sequester metals, aiding micronutrient co-application',
    },
    {
      label: 'Common use',
      value: 'Starter and band-applied liquid fertilizer',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'APP is produced by ammoniating superphosphoric acid, yielding a solution that contains both orthophosphate and longer-chain polyphosphate ions along with ammonium nitrogen. A grade of around 10-34-0 is a widely traded standard, though other liquid phosphate grades exist.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Composition',
              description: 'Ammonium salts of orthophosphate and polyphosphate',
            },
            {
              term: 'Phosphorus forms',
              description:
                'A mixture of immediately available orthophosphate and polyphosphate that hydrolyses to orthophosphate',
            },
            {
              term: 'Nitrogen content',
              description: 'Ammonium nitrogen, around 10% in the common grade',
            },
            {
              term: 'Physical form',
              description: 'Clear liquid, handled and applied by volume',
            },
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
          text: 'APP supplies phosphorus and nitrogen. Its orthophosphate is available at once, while its polyphosphate must first hydrolyse to orthophosphate, a step that is generally rapid in warm, moist, biologically active soils and slower in cold conditions. As with all soluble phosphates, some phosphorus is fixed by soil calcium, iron, or aluminium over time.',
        },
        {
          type: 'list',
          items: [
            'Delivers both orthophosphate and polyphosphate phosphorus',
            'Supplies ammonium nitrogen alongside phosphorus',
            'Polyphosphates can hold metal micronutrients such as zinc in solution',
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
          text: 'APP is popular as a starter fertilizer banded near the seed at planting, where a concentrated, available phosphorus supply supports early root growth. Because it stays clear and stable, it is also used as a base solution into which compatible micronutrients such as zinc can be added for a single-pass application.',
        },
        {
          type: 'list',
          items: [
            'Common as a banded starter fertilizer for row crops',
            'Serves as a stable liquid carrier for zinc and some other micronutrients',
            'Placement near the root zone improves phosphorus access in fixing soils',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and placement are region-specific',
          text: 'The right phosphorus rate, placement, and starter strategy depend on soil phosphorus test results, the crop, and local guidance, including limits on seed-safe placement. AgricultureID does not publish universal fertilizer rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Limitations and handling',
      body: [
        {
          type: 'paragraph',
          text: 'The benefit of the polyphosphate fraction depends on it hydrolysing to orthophosphate, which is slower in cold soils. APP also carries the same environmental concern as other phosphate fertilizers: phosphorus reaching surface water can contribute to eutrophication, so placement and rate matter for water quality.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Product compatibility must be confirmed before mixing micronutrients or other inputs into APP, as some combinations can precipitate. Phosphorus loss to water is a recognised water-quality concern; follow local nutrient-management guidance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'monoammonium-phosphate' },
    { type: 'fertilizer', slug: 'diammonium-phosphate' },
    { type: 'fertilizer', slug: 'triple-superphosphate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of APP as a liquid phosphorus fertilizer, used mainly where liquid starter systems and micronutrient co-application are practised.',
  climateContext:
    'Hydrolysis of the polyphosphate fraction to plant-available orthophosphate is slower in cold soils and faster under warm, moist conditions.',
  limitations: [
    'This entry describes composition and general behaviour; it is not a phosphorus rate recommendation for any crop or region.',
    'The rate of polyphosphate hydrolysis and phosphorus fixation depends on soil temperature and chemistry and is not quantified here.',
    'Compatibility of tank mixes with APP must be verified case by case and is not detailed here.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Ammonium polyphosphate is commonly supplied at a grade of about 10-34-0, containing a mixture of orthophosphate and polyphosphate phosphorus with ammonium nitrogen.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents ammonium polyphosphate liquid fertilizer grade and composition.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'cornell-cals',
          evidenceNote:
            'Cornell CALS guidance describes polyphosphate and orthophosphate behaviour in liquid phosphate fertilizers.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    {
      sourceId: 'ifa',
      citedFor: 'Ammonium polyphosphate manufacture and grades',
    },
    { sourceId: 'fao', citedFor: 'Phosphorus fertilizer sources and use' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Phosphorus behaviour and placement in soil',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Liquid starter fertilizer guidance',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Ammonium Polyphosphate (APP)',
    description:
      'Ammonium polyphosphate (10-34-0) liquid fertilizer: orthophosphate and polyphosphate supply, use as a starter, and its role carrying micronutrients.',
    keywords: [
      'ammonium polyphosphate',
      'APP fertilizer',
      '10-34-0 fertilizer',
      'liquid phosphorus fertilizer',
    ],
  },
  structuredData: { article: true },
};
