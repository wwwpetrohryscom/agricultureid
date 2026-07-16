import type { PostHarvestContent } from '@/types/content';

export const potatoStorage: PostHarvestContent = {
  id: 'post-harvest-potato-storage',
  slug: 'potato-storage',
  contentType: 'post-harvest',
  title: 'Potato Storage',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Potatoes are living tubers. Storage works by curing wounds first, then holding the crop cool and dark to suppress sprouting and disease — while keeping it warm enough to avoid cold-induced sweetening in crops destined for frying.',
  riskFactors: [
    'Sprouting as natural dormancy breaks',
    'Cold-induced sweetening, which darkens fried product',
    'Storage rots spreading from damaged or diseased tubers',
    'Greening on exposure to light',
    'Weight loss from evaporation and respiration',
    'Condensation forming on the pile surface',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
  ],
  alternativeNames: ['Potato tuber storage', 'Ware potato storage'],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'Potato storage holds harvested tubers in good condition for months by curing them first, then managing temperature and humidity to control sprouting, water loss, decay, and sugar changes according to the intended use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Potato storage keeps harvested tubers sound and usable for weeks to many months between harvest and use. Potatoes are living tubers that respire, lose water, sprout, and can decay, so storage aims to slow all of these while avoiding conditions that damage the tuber or its end-use quality. Good storage begins with curing the freshly harvested crop to heal wounds and set skins, then holds it under carefully chosen conditions.',
    },
    {
      type: 'paragraph',
      text: 'The right storage conditions depend on what the potatoes are for. Seed and table (ware) potatoes can be held cooler to suppress sprouting, whereas potatoes destined for frying or crisping are stored warmer because cold storage causes sugars to accumulate in the tuber, which darkens fried products. Balancing sprout control, decay control, water loss, and these sugar changes is the central challenge of potato storage.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value: 'Hold tubers sound and usable for weeks to months',
    },
    {
      label: 'Starts with',
      value: 'Curing to heal wounds and set skins after harvest',
    },
    {
      label: 'Key controls',
      value: 'Temperature, humidity, ventilation, and sprout control',
    },
    {
      label: 'Cold storage trade-off',
      value: 'Cool storage limits sprouting but raises tuber sugars',
    },
    {
      label: 'Sugars matter for',
      value:
        'Frying and crisping quality (cold-induced sweetening darkens products)',
    },
    {
      label: 'Main threats',
      value:
        'Sprouting, water loss and shrivel, decay, and greening from light',
    },
  ],
  sections: [
    {
      id: 'stages',
      heading: 'From harvest to storage',
      body: [
        {
          type: 'paragraph',
          text: 'Potatoes are usually cured first: held warm and humid for a short period so that harvest wounds heal and skins set, which greatly reduces later water loss and decay. After curing, the crop is gradually cooled to its holding temperature. Newly harvested tubers also pass through a natural dormant period during which they will not sprout; as dormancy ends, sprout control becomes important.',
        },
        {
          type: 'paragraph',
          text: 'Throughout storage, ventilation is used to keep the pile even in temperature and humidity, to remove heat of respiration, and to keep tuber surfaces dry, since free moisture favours rots. Potatoes must also be kept dark, because exposure to light turns tubers green and promotes the formation of undesirable compounds.',
        },
      ],
    },
    {
      id: 'conditions',
      heading: 'Choosing storage conditions',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Seed potatoes',
              description:
                'Held cool to suppress sprouting and preserve the vigour of the seed for planting.',
            },
            {
              term: 'Table (ware) potatoes',
              description:
                'Held cool enough to limit sprouting and decay while keeping cooking quality acceptable.',
            },
            {
              term: 'Processing potatoes',
              description:
                'Held warmer to avoid cold-induced sweetening, because accumulated sugars darken fried and crisped products.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Sprouting is managed by temperature and, where permitted, by approved sprout-suppressant treatments. High humidity limits water loss and shrivelling, but surfaces must be kept free of condensation to avoid rots. As with other crops, the exact settings are specific to the variety and the market.',
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
            'Cure tubers after harvest before cooling to storage temperature.',
            'Store at a temperature matched to the end use, balancing sprouting against sugar changes.',
            'Maintain high humidity to limit water loss, but keep surfaces free of condensation.',
            'Ventilate to keep the pile even and remove heat of respiration.',
            'Keep tubers in the dark to prevent greening, and remove diseased tubers before storage.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'One temperature does not fit all uses',
          text: 'The best storage temperature depends on whether potatoes are for seed, table use, or processing; cold storage suits some uses but harms frying quality.',
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'sweet-potato' },
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'carrot' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'curing' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'cip',
      citedFor: 'Potato storage, dormancy, and sprout management',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Potato storage temperature and sprout control guidance',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Potato storage physiology and processing quality research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Optimum conditions are variety- and end-use-specific and adapted to local storage facilities.',
  limitations: [
    'Optimum storage temperature depends on end use and variety; cold storage that suits some uses harms frying quality.',
    'Sprout-suppressant treatments are regulated, and permitted products and conditions vary by country.',
    'This entry gives principles, not specific temperatures or treatment programmes for a given crop and market.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Potato Storage: Sprouting, Sugars & Temperature',
    description:
      'How potato storage keeps tubers sound for months — curing, dormancy and sprout control, temperature and humidity, and the sugar trade-off for frying.',
    keywords: [
      'potato storage',
      'sprout control',
      'cold-induced sweetening',
      'tuber dormancy',
      'ware potato storage',
    ],
  },
  structuredData: { article: true },
};
