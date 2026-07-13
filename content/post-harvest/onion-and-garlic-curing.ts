import type { PostHarvestContent } from '@/types/content';

export const onionAndGarlicCuring: PostHarvestContent = {
  id: 'post-harvest-onion-and-garlic-curing',
  slug: 'onion-and-garlic-curing',
  contentType: 'post-harvest',
  title: 'Onion and Garlic Curing',
  postHarvestClass: 'handling',
  alternativeNames: ['Bulb curing', 'Onion curing', 'Garlic curing'],
  category: 'Post-harvest operation',
  subcategory: 'Handling & conditioning',
  summary:
    'Onion and garlic curing dries the necks and outer scales of harvested bulbs so they seal against moisture loss and decay, producing bulbs with tight, dry skins that store far longer than uncured ones.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Curing onions and garlic is the drying of the bulbs after harvest so that the necks close and the outer scales become dry and papery. Unlike the warm, humid curing used for potatoes and sweet potatoes, bulb curing is a drying process: its purpose is to remove moisture from the neck and outer layers, forming a protective seal that keeps the bulb from losing water and admitting decay organisms during storage.',
    },
    {
      type: 'paragraph',
      text: 'Bulbs are commonly cured in the field, under shelter, or with warm moving air in a store, depending on the climate and scale. Well-cured onions and garlic have dry, tight skins and firmly closed necks and can be stored for months; poorly cured bulbs, with moist necks and loose skins, are far more likely to sprout, rot, or shrivel.',
    },
  ],
  keyFacts: [
    {
      label: 'What it does',
      value: 'Dries necks and outer scales to seal the bulb',
    },
    {
      label: 'Curing type',
      value: 'A drying process, unlike warm-humid root and tuber curing',
    },
    {
      label: 'Applies to',
      value: 'Onions, garlic, and related bulb crops such as shallots',
    },
    {
      label: 'Methods',
      value: 'Field curing, shaded curing, or warm forced-air curing in store',
    },
    {
      label: 'Well-cured signs',
      value: 'Dry, tight skins and firmly closed, dry necks',
    },
    {
      label: 'Then stored',
      value: 'Cool and dry with good ventilation to prolong life',
    },
  ],
  sections: [
    {
      id: 'why-cure',
      heading: 'Why bulbs are cured',
      body: [
        {
          type: 'paragraph',
          text: 'At harvest, onion and garlic necks are often still moist and the outer scales soft. A moist neck is an open route for decay organisms and for water loss, and it is associated with poor storage. Curing dries the neck until it closes and the outer scales until they form a dry, papery skin, which together seal the bulb. This sealing is what allows properly cured onions and garlic to be stored for long periods.',
        },
        {
          type: 'paragraph',
          text: 'Curing also allows the tops and roots to dry so that bulbs can be topped and cleaned, and it helps even out differences between bulbs harvested at slightly different maturities.',
        },
      ],
    },
    {
      id: 'methods',
      heading: 'Curing methods',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Field curing',
              description:
                'Lifted bulbs are left to dry in the field, sometimes with tops arranged to shade the bulbs; suited to dry, sunny weather.',
            },
            {
              term: 'Shaded or covered curing',
              description:
                'Bulbs are cured under cover to protect them from rain, excessive sun, and greening while air dries the necks and skins.',
            },
            {
              term: 'Forced-air curing',
              description:
                'Warm, moving air is passed through the crop in a store to dry necks and skins reliably, independent of weather.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Whatever the method, good airflow is essential to carry moisture away, and direct strong sun should be managed to avoid scalding or greening the bulbs. After curing, bulbs are stored cool, dry, and well ventilated.',
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
            'Cure soon after harvest until necks are dry and closed and outer skins are dry and tight.',
            'Provide good airflow to remove moisture and cure evenly.',
            'Protect curing bulbs from rain and, where needed, from strong direct sun.',
            'Handle bulbs gently to avoid bruising, and remove diseased or damaged bulbs before storage.',
            'Store cured bulbs cool, dry, and well ventilated.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Curing bulbs means drying them',
          text: 'Bulb curing removes moisture, in contrast to the warm, humid curing used for potatoes and sweet potatoes; the two should not be confused.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'garlic' },
    { type: 'crop', slug: 'leek' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Onion and garlic curing and storage research',
    },
    {
      sourceId: 'fao',
      citedFor: 'Curing and storage of bulb crops in post-harvest handling',
    },
    { sourceId: 'ahdb', citedFor: 'Onion curing and storage guidance' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Curing method depends on climate; field curing suits dry weather, forced-air curing suits humid conditions.',
  limitations: [
    'Curing conditions and duration depend on crop, variety, and climate; this entry gives principles, not exact settings.',
    'Bulb curing is a drying process and differs fundamentally from the warm, humid curing of roots and tubers.',
    'Curing improves storage but cannot overcome disease, poor maturity, or unsuitable storage conditions afterwards.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Onion and Garlic Curing for Long Storage',
    description:
      'How curing dries the necks and skins of onions and garlic to seal bulbs for storage — field, shaded, and forced-air methods and signs of good curing.',
    keywords: [
      'onion curing',
      'garlic curing',
      'bulb curing',
      'onion storage',
      'neck drying',
    ],
  },
  structuredData: { article: true },
};
