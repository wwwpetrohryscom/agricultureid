import type { SoilTopicContent } from '@/types/content';

export const soilAmendments: SoilTopicContent = {
  id: 'soil-topic-soil-amendments',
  slug: 'soil-amendments',
  contentType: 'soil-topic',
  title: 'Soil Amendments',
  topicClass: 'management',
  alternativeNames: ['Soil conditioners'],
  category: 'Soil management practice',
  subcategory: 'Physical and chemical correction',
  summary:
    'Soil amendments are materials added to soil primarily to improve its physical or chemical properties, such as pH, structure, or salinity, rather than materials applied mainly as a concentrated nutrient source in the way conventional fertilizers are.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil amendments are added to correct a soil condition rather than primarily to deliver a nutrient dose: examples include liming materials that raise pH, gypsum used to reclaim sodic soils, elemental sulfur used to lower pH, and organic materials such as compost that improve structure and water-holding capacity.',
    },
    {
      type: 'paragraph',
      text: 'The distinction between an amendment and a fertilizer is a matter of primary purpose rather than a strict category, since several materials, including gypsum and compost, also supply nutrients as a secondary benefit. Choosing the right amendment depends on which soil condition, identified through testing, is actually limiting.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value:
        'Correct a soil physical or chemical condition, distinct from primary nutrient supply',
    },
    {
      label: 'Common categories',
      value:
        'pH-adjusting (lime, sulfur), sodicity-reclaiming (gypsum), structure-building (organic matter)',
    },
    {
      label: 'Chosen based on',
      value: 'Soil test results identifying the specific limiting condition',
    },
    {
      label: 'Timescale of effect',
      value:
        'Often gradual; many amendments take a season or longer to fully react',
    },
    {
      label: 'Overlap with fertilizers',
      value:
        'Some amendments, such as gypsum and compost, also supply nutrients',
    },
    {
      label: 'Applied via',
      value:
        'Broadcast spreading and incorporation, similar to bulk fertilizer application',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil amendments are',
      body: [
        {
          type: 'paragraph',
          text: 'Soil amendments are grouped by the specific soil condition they are intended to address rather than by nutrient content. Common categories include materials that adjust pH, materials that address sodicity or salinity, and organic materials that build structure and water-holding capacity.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'pH-adjusting amendments',
              description:
                'Liming materials to raise pH; elemental sulfur to lower it',
            },
            {
              term: 'Sodicity-reclaiming amendments',
              description:
                'Gypsum and similar calcium sources used to displace exchangeable sodium',
            },
            {
              term: 'Structure-building amendments',
              description:
                'Compost, manure, and other organic materials that improve aggregation and water retention',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why amendments matter',
      body: [
        {
          type: 'paragraph',
          text: 'A physical or chemical constraint, such as an unsuitable pH, a sodic soil condition, or poor structure, can limit crop growth regardless of how well nutrients are managed. Amendments address these underlying constraints, often unlocking the benefit of a fertility program that would otherwise underperform.',
        },
        {
          type: 'list',
          items: [
            'pH outside a crop’s suitable range can limit nutrient availability regardless of fertilizer applied',
            'Sodic soils can resist water infiltration and root penetration until reclaimed',
            'Poor structure limits root access to nutrients and water even where both are chemically present',
          ],
        },
      ],
    },
    {
      id: 'how-they-are-selected',
      heading: 'How amendments are selected and assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Selecting an appropriate amendment generally starts with soil testing to identify the specific limiting condition — such as low pH, high exchangeable sodium, or low organic matter — rather than applying a general-purpose product without a diagnosed need.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Applying an amendment without a confirmed need offers little benefit and, in some cases such as over-liming, can create a new limitation.',
        },
      ],
    },
    {
      id: 'application-principles',
      heading: 'Application principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because many amendments react gradually, they are commonly applied well ahead of the crop or season expected to benefit, and rates are generally based on soil test results specific to the amendment, such as buffering capacity for lime or exchangeable sodium percentage for gypsum, rather than a fixed universal rate.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and materials are soil- and condition-specific',
          text: 'The appropriate amendment, rate, and timing depend on soil test results, the specific condition being corrected, the crop, and local guidance. AgricultureID does not publish universal amendment rates; follow soil testing and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because amendments primarily correct physical or chemical conditions, their environmental considerations differ somewhat from nutrient-loss concerns associated with fertilizers, though over-application, such as excessive liming or gypsum use, can create new imbalances or contribute to material waste and cost.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-salinity' },
    { type: 'soil-topic', slug: 'soil-structure' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'gypsum' },
    { type: 'fertilizer', slug: 'agricultural-lime' },
    { type: 'fertilizer', slug: 'elemental-sulfur' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  glossaryTerms: ['soil-ph'],
  geographicScope:
    'General overview applicable worldwide; which amendments are relevant and how commonly they are used depend on regional soil chemistry and management history.',
  climateContext:
    'Rainfall and leaching intensity influence the pace of natural acidification, shaping how frequently pH-adjusting amendments are needed in a given region.',
  limitations: [
    'This entry describes amendment categories generally; specific products and their behaviour vary and are covered individually elsewhere.',
    'Appropriate amendment rates depend on soil-test-specific measures, such as buffering capacity or exchangeable sodium percentage, not a single universal figure.',
    'Over-application of some amendments can create new soil limitations; this entry does not quantify safe upper limits.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil amendment materials and selection',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil amendment practices and soil correction',
    },
    { sourceId: 'isric', citedFor: 'Global soil chemical property data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil amendment testing and application guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Amendments',
    description:
      'Soil amendments explained: pH-adjusting, sodicity-reclaiming, and structure-building materials, how they are selected, and application principles.',
    keywords: [
      'soil amendments',
      'soil conditioners',
      'liming materials',
      'gypsum soil amendment',
    ],
  },
  structuredData: { article: true },
};
