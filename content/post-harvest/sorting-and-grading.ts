import type { PostHarvestContent } from '@/types/content';

export const sortingAndGrading: PostHarvestContent = {
  id: 'post-harvest-sorting-and-grading',
  slug: 'sorting-and-grading',
  contentType: 'post-harvest',
  title: 'Sorting and Grading',
  postHarvestClass: 'quality',
  alternativeNames: ['Grading', 'Sorting', 'Quality classification'],
  category: 'Post-harvest operation',
  subcategory: 'Quality management',
  summary:
    'Sorting and grading separate produce and grain by quality attributes such as size, colour, shape, and defects into consistent grades, removing unsound units and matching each lot to its market, price, and end use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sorting and grading classify harvested produce by quality. Sorting usually means separating out unwanted units — those that are diseased, damaged, misshapen, or the wrong ripeness — while grading arranges the sound produce into classes defined by attributes such as size, colour, shape, and freedom from defects. Together they convert a mixed harvest into consistent lots that can be priced, packed, and sold to a defined standard.',
    },
    {
      type: 'paragraph',
      text: 'These steps add value in several ways. Removing decayed or damaged units early prevents them from spoiling sound produce during storage and transport. Uniform grades command better and more predictable prices, meet buyer and regulatory specifications, and let each lot be directed to the market or process it suits best. Sorting and grading range from careful hand selection to automated lines using sizing and optical technology.',
    },
  ],
  keyFacts: [
    {
      label: 'Sorting',
      value: 'Removing diseased, damaged, or off-type units',
    },
    {
      label: 'Grading',
      value: 'Classing sound produce by size, colour, shape, and defects',
    },
    {
      label: 'Purpose',
      value: 'Consistent quality, better prices, and fit to market and end use',
    },
    {
      label: 'Storage benefit',
      value: 'Removing unsound units limits decay spread in store and transit',
    },
    {
      label: 'Methods',
      value: 'Hand selection to mechanical sizers and optical sorters',
    },
    {
      label: 'Based on',
      value: 'Quality standards and buyer or regulatory specifications',
    },
  ],
  sections: [
    {
      id: 'why-it-matters',
      heading: 'Why sorting and grading matter',
      body: [
        {
          type: 'paragraph',
          text: 'A single decayed or damaged unit can spread rot to its neighbours and shed ethylene and moisture, so removing unsound produce before storage and packing protects the rest of the lot. Beyond loss prevention, grading creates the uniformity that markets reward: buyers can specify and pay for a known class, retailers can display consistent produce, and processors receive material suited to their line.',
        },
        {
          type: 'paragraph',
          text: 'Grading also allows produce of different quality to be directed appropriately — premium grades to fresh markets, sound but less uniform produce to processing, and unmarketable material to other uses — which raises the overall value recovered from a harvest.',
        },
      ],
    },
    {
      id: 'attributes',
      heading: 'Attributes and methods',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Size and weight',
              description:
                'Produce is separated by dimension or weight using screens, diverging rollers, or weight sizers to meet size grades.',
            },
            {
              term: 'Colour and appearance',
              description:
                'Colour, ripeness, and surface appearance are judged by eye or by optical and camera-based sorters.',
            },
            {
              term: 'Defects and soundness',
              description:
                'Damaged, diseased, misshapen, or foreign units are removed by inspection or automated detection.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Grain is similarly graded on attributes such as moisture, foreign matter, broken and damaged kernels, and test weight, which together determine its grade and price. The attributes that matter, and the standards applied, depend on the commodity and its market.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'list',
          items: [
            'Sort out decayed and damaged units early to protect sound produce.',
            'Grade to recognised standards and buyer specifications for consistency.',
            'Handle produce gently during sorting to avoid adding bruises and cuts.',
            'Direct each grade to the market or process for which it is best suited.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Grading reflects quality, it does not create it',
          text: 'Sorting and grading classify and protect quality already present; they cannot improve produce that is immature, damaged, or diseased.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'wheat' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sorting and grading in post-harvest handling of produce',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Quality grades and standards for fruits, vegetables, and grain',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Sorting technology and quality assessment research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade definitions and standards vary by commodity, market, and country.',
  limitations: [
    'Grade definitions and quality standards are commodity- and market-specific and differ between countries and buyers.',
    'Sorting and grading classify existing quality; they cannot improve immature, damaged, or diseased produce.',
    'Automated sorting can miss internal defects not visible on the surface, so some quality issues remain hard to detect.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sorting and Grading of Produce and Grain',
    description:
      'How sorting and grading class produce and grain by size, colour, shape, and defects — removing unsound units, meeting standards, and adding value.',
    keywords: [
      'sorting and grading',
      'produce grading',
      'quality standards',
      'size grading',
      'optical sorting',
    ],
  },
  structuredData: { article: true },
};
