import type { PostHarvestContent } from '@/types/content';

export const controlledAtmosphereStorage: PostHarvestContent = {
  id: 'post-harvest-controlled-atmosphere-storage',
  slug: 'controlled-atmosphere-storage',
  contentType: 'post-harvest',
  title: 'Controlled Atmosphere Storage',
  postHarvestClass: 'storage',
  alternativeNames: ['CA storage', 'Controlled-atmosphere storage'],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Controlled atmosphere (CA) storage holds fruit and some vegetables in a gas-tight room where oxygen is lowered and carbon dioxide raised, in addition to refrigeration, to slow respiration and ripening and greatly extend storage life.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Controlled atmosphere storage combines refrigeration with deliberate control of the storage-room atmosphere. In a sealed, gas-tight cold room the oxygen concentration is reduced and the carbon dioxide concentration increased relative to normal air, and both are then held within target ranges. These conditions slow the respiration of the stored produce far more than cold alone, delaying ripening, softening, and ageing.',
    },
    {
      type: 'paragraph',
      text: 'CA storage is used above all for pome fruit such as apples and pears, which can be held in good condition for many months, allowing year-round supply from a single harvest. It is also applied to some other fruits and vegetables. Because the atmosphere must be actively maintained and monitored, CA storage requires specialised sealed rooms and gas-management equipment.',
    },
  ],
  keyFacts: [
    {
      label: 'Principle',
      value: 'Refrigeration plus lowered oxygen and raised carbon dioxide',
    },
    {
      label: 'Effect',
      value: 'Slows respiration and ripening beyond cold storage alone',
    },
    {
      label: 'Classic use',
      value: 'Long-term storage of apples and pears',
    },
    {
      label: 'Needs',
      value:
        'Gas-tight rooms with atmosphere generation, scrubbing, and monitoring',
    },
    {
      label: 'Key risk',
      value:
        'Physiological disorders if oxygen is too low or carbon dioxide too high',
    },
    {
      label: 'Related to',
      value: 'Cold storage and modified-atmosphere packaging',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How CA extends storage life',
      body: [
        {
          type: 'paragraph',
          text: 'Harvested fruit remains alive and respires, using oxygen and producing carbon dioxide as it slowly ripens and ages. Lowering the oxygen available and raising the carbon dioxide around the fruit reduces the rate of respiration, which in turn slows the metabolic changes that lead to softening, colour change, and loss of acidity. Cold storage already slows these processes; CA storage slows them further, so the effects are additive.',
        },
        {
          type: 'paragraph',
          text: 'Each commodity, and often each cultivar, has its own tolerated atmosphere: oxygen that is too low, or carbon dioxide that is too high, can cause fermentation and physiological disorders rather than better keeping. For this reason CA conditions are matched to the specific fruit, and the atmosphere is monitored and adjusted throughout the storage season.',
        },
      ],
    },
    {
      id: 'operation',
      heading: 'Operating a CA store',
      body: [
        {
          type: 'list',
          items: [
            'Rooms are built and maintained gas-tight so the atmosphere can be held stable.',
            'Oxygen is drawn down and carbon dioxide is controlled using generators, scrubbers, and, increasingly, low-oxygen techniques.',
            'Temperature, humidity, oxygen, and carbon dioxide are monitored continuously and kept within commodity-specific ranges.',
            'Fruit is harvested at the correct maturity, since CA preserves condition but cannot improve poor-quality or over-ripe fruit.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Conditions are commodity-specific',
          text: 'Target oxygen and carbon dioxide levels differ by crop and cultivar; there is no single CA recipe, and incorrect atmospheres can cause disorders.',
        },
      ],
    },
    {
      id: 'safety',
      heading: 'Safety and quality',
      body: [
        {
          type: 'paragraph',
          text: 'The low-oxygen atmosphere that preserves fruit is dangerous to people: a CA room does not contain enough oxygen to support life, so entry requires strict confined-space and gas-testing procedures. Managed correctly, CA storage delivers fruit of high quality out of season, but it depends on good fruit at harvest, precise control, and reliable refrigeration.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Low-oxygen atmospheres are life-threatening',
          text: 'CA rooms are oxygen-deficient and can cause rapid unconsciousness; entry is only permitted under confined-space procedures after the atmosphere is restored and tested.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'pear' },
    { type: 'crop', slug: 'kiwifruit' },
    { type: 'crop', slug: 'cabbage' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'fruit-ripening' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Controlled-atmosphere storage conditions and research',
    },
    {
      sourceId: 'fao',
      citedFor: 'Controlled-atmosphere storage of fruits and vegetables',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Controlled-atmosphere storage of top fruit',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Most established for apples and pears; conditions are commodity- and cultivar-specific.',
  limitations: [
    'Optimum oxygen and carbon dioxide levels are commodity- and cultivar-specific; incorrect atmospheres can cause physiological disorders.',
    'CA storage preserves quality but cannot improve fruit that is immature, over-ripe, or defective at harvest.',
    'It requires gas-tight rooms, monitoring, and reliable refrigeration, and the low-oxygen atmosphere is hazardous to people.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Controlled Atmosphere Storage of Fruit',
    description:
      'How controlled atmosphere (CA) storage extends fruit life — low oxygen, raised carbon dioxide, and cold — for apples and pears, plus conditions and safety.',
    keywords: [
      'controlled atmosphere storage',
      'CA storage',
      'apple storage',
      'low oxygen storage',
      'fruit storage',
    ],
  },
  structuredData: { article: true },
};
