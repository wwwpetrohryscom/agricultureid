import type { PostHarvestContent } from '@/types/content';

export const fruitRipening: PostHarvestContent = {
  id: 'post-harvest-fruit-ripening',
  slug: 'fruit-ripening',
  contentType: 'post-harvest',
  title: 'Fruit Ripening',
  postHarvestClass: 'quality',
  alternativeNames: ['Ripening', 'Controlled ripening'],
  category: 'Post-harvest operation',
  subcategory: 'Quality management',
  summary:
    'Fruit ripening is the set of changes that make fruit palatable — softening, sweetening, colour and aroma development. Understanding climacteric versus non-climacteric fruit underpins harvest timing, storage, and controlled ripening rooms.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ripening is the process by which fruit becomes ready to eat: it softens, starch is converted to sugars, acidity and astringency fall, and colour and aroma develop. After harvest, whether and how a fruit continues to ripen depends on its physiology, which determines when it should be picked and how it should be stored and handled.',
    },
    {
      type: 'paragraph',
      text: 'A central distinction is between climacteric and non-climacteric fruit. Climacteric fruits, such as bananas, apples, and tomatoes, show a surge in respiration and ethylene production at the onset of ripening and can continue to ripen after harvest — sometimes deliberately, in controlled ripening rooms. Non-climacteric fruits, such as citrus, grapes, and strawberries, do not ripen substantially further once picked, so they must be harvested close to eating ripeness.',
    },
  ],
  keyFacts: [
    {
      label: 'What ripening is',
      value: 'Softening, sweetening, and colour and aroma development in fruit',
    },
    {
      label: 'Key distinction',
      value: 'Climacteric fruit ripen after harvest; non-climacteric do not',
    },
    {
      label: 'Climacteric examples',
      value: 'Banana, apple, tomato, mango, pear, avocado',
    },
    {
      label: 'Non-climacteric examples',
      value: 'Citrus, grape, strawberry, pineapple',
    },
    {
      label: 'Ripening trigger',
      value: 'Ethylene drives ripening in climacteric fruit',
    },
    {
      label: 'Practical use',
      value:
        'Controlled ripening rooms bring climacteric fruit to market ripeness',
    },
  ],
  sections: [
    {
      id: 'climacteric',
      heading: 'Climacteric and non-climacteric fruit',
      body: [
        {
          type: 'paragraph',
          text: 'Climacteric fruits pass through a marked rise in respiration and ethylene production as they begin to ripen, and this internal ethylene coordinates the changes of ripening. Because they respond to ethylene and can ripen after picking, such fruits can be harvested mature but firm and unripe, transported, and then ripened close to the market. Non-climacteric fruits lack this respiratory surge and do not continue to ripen appreciably after harvest, so their eating quality is largely fixed at picking.',
        },
        {
          type: 'paragraph',
          text: 'This physiology shapes practical decisions. For climacteric fruit, harvest maturity and ethylene management govern quality; for non-climacteric fruit, picking at the right ripeness is decisive because storage can slow decline but cannot improve flavour.',
        },
      ],
    },
    {
      id: 'controlled-ripening',
      heading: 'Controlled ripening rooms',
      body: [
        {
          type: 'paragraph',
          text: 'For fruits such as bananas and some other climacteric crops, ripening is managed in dedicated rooms where temperature, humidity, air circulation, and ethylene are controlled. Applying ethylene under controlled conditions brings fruit to uniform, predictable eating ripeness on schedule, which suits orderly distribution. The same conditions must avoid over-ripening and the build-up of heat and carbon dioxide from the fruit’s own respiration.',
        },
        {
          type: 'list',
          items: [
            'Fruit is held at a controlled temperature suited to even ripening.',
            'Ethylene is applied to initiate ripening in mature but unripe fruit.',
            'Ventilation removes excess carbon dioxide and heat of respiration.',
            'Humidity is maintained to limit water loss and shrivelling.',
          ],
        },
      ],
    },
    {
      id: 'quality',
      heading: 'Harvest maturity and quality',
      body: [
        {
          type: 'paragraph',
          text: 'Choosing the right harvest maturity is fundamental. Fruit picked too early may never develop full flavour, while fruit picked too late has a short remaining life and handles poorly. Because non-climacteric fruit will not sweeten further after picking, and climacteric fruit picked over-ripe cannot be held long, maturity assessment is one of the most important quality decisions in the whole post-harvest chain.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ripening is not the same as improving',
          text: 'Controlled ripening changes texture, colour, and sugars in climacteric fruit, but it cannot add quality that was not set by growing conditions and harvest maturity.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'mango' },
    { type: 'crop', slug: 'avocado' },
    { type: 'crop', slug: 'apple' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Fruit ripening physiology and post-harvest research',
    },
    {
      sourceId: 'fao',
      citedFor: 'Ripening and maturity in post-harvest handling of fruit',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Climacteric and non-climacteric fruit ripening background',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Ripening behaviour is species-specific; climacteric and non-climacteric categories apply across regions.',
  limitations: [
    'Ripening behaviour and optimal handling are species- and cultivar-specific; this entry describes categories, not per-crop protocols.',
    'Some fruits show intermediate or variable ripening behaviour that does not fit neatly into the two categories.',
    'Controlled ripening improves uniformity and timing but cannot create quality absent from immature or poorly grown fruit.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fruit Ripening: Climacteric vs Non-Climacteric',
    description:
      'How fruit ripens after harvest — climacteric versus non-climacteric fruit, ethylene, controlled ripening rooms, and why harvest maturity decides quality.',
    keywords: [
      'fruit ripening',
      'climacteric fruit',
      'non-climacteric fruit',
      'controlled ripening room',
      'harvest maturity',
    ],
  },
  structuredData: { article: true },
};
