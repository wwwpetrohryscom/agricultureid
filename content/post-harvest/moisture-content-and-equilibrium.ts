import type { PostHarvestContent } from '@/types/content';

export const moistureContentAndEquilibrium: PostHarvestContent = {
  id: 'post-harvest-moisture-content-and-equilibrium',
  slug: 'moisture-content-and-equilibrium',
  contentType: 'post-harvest',
  title: 'Moisture Content and Equilibrium',
  postHarvestClass: 'quality',
  alternativeNames: [
    'Grain moisture content',
    'Equilibrium moisture content',
    'Water activity',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Quality & measurement',
  summary:
    'Grain moisture content and its equilibrium with surrounding air govern how safely grain can be stored. Understanding wet versus dry basis, equilibrium moisture content, and water activity underpins drying, storage, and loss prevention.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Moisture content is the single most important property governing how safely grain and seed can be stored. It expresses how much water the grain holds, and it determines whether moulds and insects can thrive, how fast the grain respires, and how long it can be kept. Almost every post-harvest decision — when to harvest, how much to dry, whether grain is safe to store, and what price it earns — depends on knowing the moisture content.',
    },
    {
      type: 'paragraph',
      text: 'Grain does not hold its moisture in isolation: water moves between grain and the surrounding air until the two reach a balance. This balance, the equilibrium moisture content, links grain moisture to the temperature and relative humidity of the air around it, and it explains why grain can gain or lose moisture in store. Related concepts — wet versus dry basis, and water activity — are needed to measure and interpret moisture correctly.',
    },
  ],
  keyFacts: [
    {
      label: 'Why it matters',
      value: 'The main property governing safe storage of grain and seed',
    },
    {
      label: 'Wet basis',
      value:
        'Water as a fraction of total (wet) grain weight — the common trading basis',
    },
    {
      label: 'Dry basis',
      value:
        'Water relative to dry matter — used in engineering and drying calculations',
    },
    {
      label: 'Equilibrium moisture content',
      value:
        'Grain moisture that balances a given air temperature and humidity',
    },
    {
      label: 'Water activity',
      value:
        'Availability of water to microbes and reactions, not total amount',
    },
    {
      label: 'Measured with',
      value: 'Moisture meters, verified against oven-drying reference methods',
    },
  ],
  sections: [
    {
      id: 'wet-vs-dry',
      heading: 'Wet basis and dry basis',
      body: [
        {
          type: 'paragraph',
          text: 'Moisture content can be expressed in two ways. On a wet basis, the water is given as a fraction of the total weight of the moist grain; this is the basis normally used in grain trading and in the storage moisture targets quoted for cereals. On a dry basis, the water is given relative to the weight of dry matter alone; this is often used in drying and engineering calculations. The two give different numbers for the same grain, so it is important to know which basis is meant.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'State the basis',
          text: 'The same grain has different moisture-content figures on a wet basis and a dry basis; a value is ambiguous unless the basis is stated. Storage targets are usually quoted wet basis.',
        },
      ],
    },
    {
      id: 'emc',
      heading: 'Equilibrium moisture content',
      body: [
        {
          type: 'paragraph',
          text: 'Because water moves between grain and air, grain left in a given environment tends toward an equilibrium moisture content determined by the air’s temperature and relative humidity. Grain drier than this equilibrium will slowly take up moisture from the air, while grain wetter than it will slowly give up moisture. This is why storing grain in cool, dry air keeps it safe, and why grain can re-wet if exposed to humid conditions.',
        },
        {
          type: 'paragraph',
          text: 'Equilibrium moisture content underlies both drying and storage. Drying works by surrounding grain with air whose equilibrium is lower than the grain’s current moisture; safe storage works by holding grain in equilibrium with cool, dry air so that moulds cannot grow. The relationship differs among commodities, so oilseeds, for example, are stored at lower moisture than cereals.',
        },
      ],
    },
    {
      id: 'water-activity',
      heading: 'Water activity and measurement',
      body: [
        {
          type: 'paragraph',
          text: 'Water activity describes how available the water in grain is to microorganisms and to chemical reactions, rather than how much water is present in total. It is closely related to the relative humidity that grain would create in a sealed space around it. Water activity is often a better guide than total moisture to whether moulds can grow, because microbes respond to available water; keeping water activity low is what makes dry grain microbiologically stable.',
        },
        {
          type: 'paragraph',
          text: 'Moisture is measured in practice with electronic moisture meters, which are quick but must be calibrated and are verified against reference oven-drying methods that determine moisture by weight loss on heating. Reliable measurement matters because storage safety and trading value both hinge on the figure.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'soybean' },
    { type: 'machinery', slug: 'grain-dryer' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor: 'Grain moisture, equilibrium moisture content, and measurement',
    },
    { sourceId: 'fao', citedFor: 'Grain moisture and safe-storage principles' },
    {
      sourceId: 'ahdb',
      citedFor: 'Grain moisture measurement and storage guidance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Equilibrium relationships and safe moisture targets are commodity-specific and interact with local climate.',
  limitations: [
    'Safe moisture targets and equilibrium relationships differ by commodity and are affected by temperature and duration.',
    'Wet-basis and dry-basis figures differ for the same grain; comparisons are meaningless unless the basis is stated.',
    'Moisture meters require calibration and can be less accurate at extreme moisture levels; oven methods are the reference.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Grain Moisture Content and Equilibrium Explained',
    description:
      'How grain moisture content, equilibrium moisture content, and water activity govern safe storage — wet versus dry basis, EMC, and how moisture is measured.',
    keywords: [
      'grain moisture content',
      'equilibrium moisture content',
      'water activity',
      'wet basis dry basis',
      'safe storage moisture',
    ],
  },
  structuredData: { article: true },
};
