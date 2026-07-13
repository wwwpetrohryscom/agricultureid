import type { ClimateContent } from '@/types/content';

export const vernalization: ClimateContent = {
  id: 'climate-vernalization',
  slug: 'vernalization',
  contentType: 'climate',
  title: 'Vernalization',
  alternativeNames: ['Vernalisation', 'Cold requirement for flowering'],
  category: 'Climate factor',
  subcategory: 'Temperature and development',
  climateClass: 'temperature',
  summary:
    'Vernalization is the promotion of flowering by a prolonged period of low, non-freezing temperature. Many winter cereals and biennial crops must experience a spell of cold before they will flower, which aligns their reproduction with the seasons.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Vernalization is the process by which exposure to a sustained period of cold makes certain plants able, or more able, to flower. In these plants, cold experienced during early growth acts as a signal that winter has passed, so that flowering is delayed until spring rather than occurring in autumn. Without the required cold, such plants may remain vegetative and fail to flower normally.',
    },
    {
      type: 'paragraph',
      text: 'The response is central to the distinction between winter and spring types of cereals such as wheat, barley, and rye: winter types are sown in autumn and require winter cold to vernalize before flowering, while spring types have little or no such requirement. Many biennial vegetables also need vernalization before they bolt and flower, which matters both for seed production and for avoiding premature bolting.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value: 'Promotion of flowering by a prolonged period of cold',
    },
    {
      label: 'Temperature range',
      value: 'Low but non-freezing temperatures, sustained over weeks',
    },
    {
      label: 'Winter vs spring types',
      value:
        'Winter cereals require vernalization; spring types largely do not',
    },
    {
      label: 'Also affects',
      value:
        'Many biennial vegetables, which must vernalize before bolting and flowering',
    },
    {
      label: 'Purpose in nature',
      value: 'Aligns flowering with spring, avoiding flowering before winter',
    },
    {
      label: 'Distinct from',
      value: 'Photoperiod (day-length) cues, though the two often act together',
    },
  ],
  sections: [
    {
      id: 'what-vernalization-is',
      heading: 'What vernalization is',
      body: [
        {
          type: 'paragraph',
          text: 'Vernalization is a temperature-driven developmental response: a plant must accumulate enough cold, at appropriately low but non-freezing temperatures over a sufficient period, before it becomes competent to flower. The cold does not itself cause flowering immediately; rather, it removes a block, so that once warmth and, often, appropriate day length return, the plant can proceed to reproductive development.',
        },
        {
          type: 'paragraph',
          text: 'This is why vernalization is described as a requirement for, or acceleration of, flowering rather than a direct trigger. It is a distinct phenomenon from the chilling requirement of temperate fruit trees, which governs the breaking of bud dormancy, although both involve a need for winter cold.',
        },
      ],
    },
    {
      id: 'winter-and-spring-crop-types',
      heading: 'Winter and spring crop types',
      body: [
        {
          type: 'paragraph',
          text: 'In cereals, the vernalization requirement underpins the winter and spring cropping types. Winter wheat, barley, and rye are sown in autumn, grow vegetatively, receive their cold requirement over winter, and flower and mature the following season; spring types lack a strong requirement and can be sown in spring for the same year. Choosing the correct type for the sowing season and climate is essential, because a winter type sown in spring may not flower properly, and a spring type sown too late in a cold winter area is exposed to frost risk.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Matching the vernalization type of a variety to the intended sowing time and local winter is a basic agronomic decision; a winter variety needs winter cold to flower normally.',
        },
      ],
    },
    {
      id: 'importance-in-agriculture',
      heading: 'Importance in agriculture',
      body: [
        {
          type: 'list',
          items: [
            'Determines whether a variety should be sown in autumn (winter type) or spring (spring type)',
            'Governs bolting and flowering in biennial vegetables, affecting seed production and quality',
            'Premature bolting from unintended vernalization can spoil the marketable part of some vegetable crops',
            'Influences how crop varieties are matched to regions with different winter conditions',
            'A consideration in breeding varieties adapted to warmer areas with less reliable winter cold',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because reliable winter cold is part of what makes a region suited to winter cropping, the vernalization requirement links crop choice directly to climate.',
        },
      ],
    },
    {
      id: 'limitations-and-considerations',
      heading: 'Limitations and considerations',
      body: [
        {
          type: 'paragraph',
          text: 'The amount and temperature of cold needed for vernalization vary by species and variety and interact with day length and developmental stage. This entry explains the concept and its agronomic importance; it does not give the specific cold durations or temperature thresholds required by any particular crop or variety, which are determined through research.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'temperature' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'rye' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'carrot' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  glossaryTerms: ['cultivar', 'annual-crop'],
  geographicScope:
    'A general explanation of vernalization and its role in flowering. Cold requirements are variety-specific, and their relevance depends on the reliability of winter cold in a region.',
  climateContext:
    'Vernalization ties crop development to winter temperatures; where reliable winter cold is reduced by a warming climate, the flowering of some winter varieties can be affected.',
  limitations: [
    'This entry explains the vernalization concept and importance; it does not give cold durations or temperature thresholds for any specific crop or variety.',
    'Vernalization interacts with day length and developmental stage, so its effect cannot be described by temperature alone.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Crop adaptation and winter-crop requirements context',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Wheat and barley development, winter and spring types',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Research on vernalization and cereal flowering',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Vernalization',
    description:
      'Vernalization explained: how a period of winter cold enables flowering in winter cereals and biennials, and why it defines winter and spring crop types.',
    keywords: [
      'vernalization',
      'cold requirement',
      'winter wheat',
      'flowering',
    ],
  },
  structuredData: { article: true },
};
