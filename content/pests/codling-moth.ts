import type { PestContent } from '@/types/content';

export const codlingMoth: PestContent = {
  id: 'pest-codling-moth',
  slug: 'codling-moth',
  contentType: 'pest',
  title: 'Codling Moth',
  scientificName: 'Cydia pomonella (Lepidoptera: Tortricidae)',
  alternativeNames: ['Apple worm'],
  category: 'Insect pest',
  subcategory: 'Fruit-boring caterpillar',
  pestGroup: 'Insect — Lepidoptera',
  summary:
    'Codling moth larvae bore into apple fruit, feeding on the flesh and seeds, and are among the most economically important and best-studied pests of apple production worldwide.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Codling moth is a small moth whose larvae tunnel into apple fruit, feeding on the flesh and seeds and leaving a characteristic frass-filled entry hole. It is one of the most significant pests of apple production in temperate growing regions worldwide.',
    },
    {
      type: 'paragraph',
      text: 'Because larvae are protected inside the fruit for most of their development, management relies heavily on well-timed monitoring during the brief window when eggs and newly hatched larvae are exposed, using pheromone traps and temperature-based degree-day models to predict adult flight and egg-hatch timing.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Tortricidae' },
    {
      label: 'Feeding',
      value: 'Larvae tunnel into fruit, feeding on flesh and seeds',
    },
    {
      label: 'Key concern',
      value: 'Direct fruit damage that renders produce unmarketable',
    },
    {
      label: 'Generations',
      value: 'One to three per year, depending on climate',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, predatory insects, birds',
    },
    {
      label: 'Sign',
      value:
        'Frass-plugged entry hole on the fruit surface, premature fruit drop',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult moths have mottled grey-brown wings with a distinctive coppery patch near the wingtip. Larvae are pinkish-white with a brown head and tunnel into fruit, often near the calyx end, leaving a small entry hole plugged with reddish-brown frass as the main external sign.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Codling moth overwinters as a mature larva in a silken cocoon under bark or in soil debris, pupating in spring. Adult moths emerge, mate, and females lay eggs on leaves or fruit. Newly hatched larvae bore into fruit within a short time, after which they are protected from most external factors.',
        },
        {
          type: 'paragraph',
          text: 'The number of generations completed each year, typically one to three, depends on accumulated temperature, and degree-day models are widely used to track development and predict the timing of each generation.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larval tunneling directly damages fruit, often reaching the core and seeds, rendering it unmarketable and more prone to secondary rot, and can trigger premature fruit drop before harvest.',
        },
        {
          type: 'paragraph',
          text: 'Apple is the principal host crop worldwide, with the pest also affecting other pome fruit in some growing regions.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps detect and track adult flight activity, while degree-day models predict egg-hatch timing so that monitoring and any decisions can target the brief window before larvae enter fruit. Regular fruit inspection for entry holes and frass supplements trap data through the season.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Codling moth management combines mating disruption, monitoring, and orchard sanitation within an integrated approach.',
        },
        {
          type: 'list',
          items: [
            'Use pheromone-based mating disruption where locally established as a practice',
            'Time monitoring and any action around degree-day-predicted egg-hatch windows',
            'Conserve parasitoid wasps and other natural enemies',
            'Remove and destroy fallen and infested fruit to reduce carry-over',
            'Scrape or otherwise manage bark crevices where larvae overwinter',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on pollinators and natural enemies in the orchard. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'apple' }],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'european-corn-borer' },
    { type: 'pest', slug: 'fall-armyworm' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Established in most apple-growing regions worldwide; generation number, timing, and pressure vary by regional climate.',
  climateContext:
    'Development speed and the number of generations per year rise with accumulated warm-season temperature, tracked through growing-degree-day models.',
  limitations: [
    'This is a general overview of a well-studied orchard pest, not region-specific guidance for a particular cultivar or growing area.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification, degree-day models, and IPM principles',
    },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    { sourceId: 'ahdb', citedFor: 'Orchard monitoring and management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Codling Moth',
    description:
      'Codling moth explained: identification, degree-day biology, fruit-boring damage in apple, pheromone-based monitoring, and integrated management.',
    keywords: ['codling moth', 'Cydia pomonella', 'apple pest', 'fruit borer'],
  },
  structuredData: { article: true },
};
