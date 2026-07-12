import type { ClimateContent } from '@/types/content';

export const chillingRequirement: ClimateContent = {
  id: 'climate-chilling-requirement',
  slug: 'chilling-requirement',
  contentType: 'climate',
  title: 'Chilling Requirement',
  climateClass: 'temperature',
  alternativeNames: ['Chill hours', 'Winter chill'],
  category: 'Climate factor',
  subcategory: 'Temperature-related crop requirement',
  summary:
    'Chilling requirement is the amount of cold exposure during winter dormancy that temperate fruit and nut crops need before they can resume normal growth and flower in spring, with insufficient chilling leading to delayed, uneven, or reduced flowering.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Many temperate perennial fruit and nut species — including apples, many stone fruits, grapes, blueberries, and olives in cooler climates — enter winter dormancy and require accumulated exposure to cool temperatures within a defined range before dormancy is fully released. Several models exist for estimating accumulated chill, such as chill hours, chill units, and chill portions, and these models differ in which temperature ranges they count.',
    },
    {
      type: 'paragraph',
      text: 'Growers typically select cultivars whose chilling requirement is matched to the winter climate of a given site. Insufficient winter chill in a given year, or a general decline in winter chill in a warming climate, can cause delayed foliation, uneven or prolonged bloom, and reduced fruit set, making cultivar selection central to matching a crop to its site.',
    },
  ],
  keyFacts: [
    {
      label: 'Core definition',
      value:
        'Accumulated cold exposure during winter dormancy required before a temperate fruit or nut crop resumes normal growth and flowering',
    },
    {
      label: 'Affected crops',
      value:
        'Many temperate perennial fruit and nut species, with requirements varying widely between species and cultivars',
    },
    {
      label: 'Measurement approaches',
      value:
        'Estimated using models such as chill hours, chill units, or chill portions, which differ in which temperature ranges are counted',
    },
    {
      label: 'Cultivar matching',
      value:
        'Growers select cultivars whose chilling requirement matches the typical winter climate of a given site',
    },
    {
      label: 'Insufficient chill effects',
      value:
        'Can cause delayed or uneven foliation and bloom and reduced fruit set',
    },
    {
      label: 'Regional relevance',
      value:
        'Particularly important in marginal or warming-climate growing regions where winter chill can vary significantly year to year',
    },
  ],
  sections: [
    {
      id: 'what-chilling-requirement-is',
      heading: 'What chilling requirement is',
      body: [
        {
          type: 'paragraph',
          text: 'During winter, temperate perennial fruit and nut crops enter a dormant state in which growth pauses. Dormancy is released once the plant has accumulated sufficient exposure to cool, but not necessarily freezing, temperatures — its chilling requirement.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Dormancy',
              description:
                'A period of paused growth in perennial plants, commonly through winter in temperate climates.',
            },
            {
              term: 'Chilling requirement',
              description:
                'The accumulated cold exposure a plant needs before dormancy is released and normal growth can resume.',
            },
            {
              term: 'Chill accumulation model',
              description:
                'A method, such as chill hours or chill portions, used to estimate accumulated winter cold exposure.',
            },
          ],
        },
      ],
    },
    {
      id: 'crops-with-a-chilling-requirement',
      heading: 'Crops with a chilling requirement',
      body: [
        {
          type: 'list',
          items: [
            'Apple — cultivars vary considerably in their chilling requirement',
            'Blueberry — chilling needs differ notably between highbush and other blueberry types and cultivars',
            'Grape — dormancy and chilling response vary by cultivar and region',
            'Olive — chilling needs are relevant mainly for olives grown in cooler-winter regions',
          ],
        },
        {
          type: 'paragraph',
          text: 'Specific chill-hour or chill-unit figures are not given here, since requirements vary widely by species and cultivar and are typically determined through local variety trials.',
        },
      ],
    },
    {
      id: 'how-chill-is-estimated',
      heading: 'How chill is estimated',
      body: [
        {
          type: 'paragraph',
          text: 'Multiple chill-accumulation models are used in practice, and they differ in their assumptions about which temperature ranges contribute to chilling and how much each range contributes.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This entry does not endorse a single universal chill-accumulation formula; the appropriate model can depend on region and crop.',
        },
      ],
    },
    {
      id: 'effects-of-insufficient-chilling',
      heading: 'Effects of insufficient chilling',
      body: [
        {
          type: 'list',
          items: [
            'Delayed leaf-out in spring',
            'Prolonged or uneven bloom period',
            'Reduced fruit set',
            'Potential yield or quality impact in severe cases',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry gives no specific chill-hour thresholds for any crop or cultivar; local extension guidance is the appropriate source for cultivar-specific figures.',
        },
      ],
    },
    {
      id: 'managing-chilling-risk',
      heading: 'Managing chilling risk',
      body: [
        {
          type: 'paragraph',
          text: "The main approach to managing chilling risk is selecting cultivars whose chilling requirement matches the site's typical winter climate. In some systems, chemical dormancy-breaking treatments are used, and growers may monitor accumulated chill through the season using a locally appropriate model.",
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-degree-days' },
  ],
  connections: [
    { type: 'crop', slug: 'kiwifruit' },
    { type: 'crop', slug: 'persimmon' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'olive' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'temperature' },
  ],
  geographicScope:
    'Relevant to temperate fruit and nut growing regions worldwide; chilling requirements and typical winter chill accumulation are cultivar- and site-specific.',
  limitations: [
    'This entry does not give specific chill-hour or chill-unit figures for any cultivar, since requirements vary widely and multiple accumulation models are in use.',
    'It is not a substitute for local extension guidance on cultivar selection for a specific site.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Temperate fruit and nut crop production context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Temperate fruit crop dormancy and climate suitability',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Chilling requirement and cultivar selection guidance',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Orchard crop dormancy and chill accumulation context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chilling Requirement',
    description:
      'Chilling requirement explained: why temperate fruit and nut crops need winter cold exposure to flower normally, and risks when chill falls short.',
    keywords: [
      'chilling requirement',
      'chill hours',
      'winter chill',
      'dormancy',
    ],
  },
  structuredData: { article: true },
};
