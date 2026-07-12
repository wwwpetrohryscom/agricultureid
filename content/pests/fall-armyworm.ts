import type { PestContent } from '@/types/content';

export const fallArmyworm: PestContent = {
  id: 'pest-fall-armyworm',
  slug: 'fall-armyworm',
  contentType: 'pest',
  title: 'Fall Armyworm',
  scientificName: 'Spodoptera frugiperda (Lepidoptera: Noctuidae)',
  alternativeNames: ['FAW'],
  category: 'Insect pest',
  subcategory: 'Leaf- and whorl-feeding caterpillar',
  pestGroup: 'Insect — Lepidoptera',
  summary:
    'Fall armyworm is a highly mobile moth whose caterpillars feed in the whorl and ear of maize and other cereals, and which has spread to become a major pest across much of the world.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fall armyworm is the caterpillar stage of a night-flying moth native to the Americas. Adult moths are strong fliers capable of migrating long distances on seasonal winds, which has allowed the species to establish across Africa, Asia, and Oceania since 2016 after previously being confined to the Americas.',
    },
    {
      type: 'paragraph',
      text: 'Larvae feed on a wide range of grasses and cereals but are best known as a major pest of maize, where feeding in the whorl and later in the ear can cause substantial yield loss if left unmanaged. Rapid reproduction and long-distance migration make it a particularly challenging pest to track and manage regionally.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Noctuidae' },
    {
      label: 'Feeding',
      value: 'Larvae chew leaves, the whorl, and developing ears',
    },
    {
      label: 'Key concern',
      value: 'Rapid spread and damage to whorl-stage cereals',
    },
    {
      label: 'Migration',
      value:
        'Adult moths can travel hundreds of kilometres on prevailing winds',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, predators, entomopathogenic fungi and viruses',
    },
    {
      label: 'Sign',
      value: 'Ragged "window-pane" feeding and coarse frass in the whorl',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Larvae vary in colour from light green to nearly black but usually show longitudinal stripes along the body. Two features help distinguish fall armyworm from similar caterpillars: a pale, inverted Y-shaped marking on the head capsule, and four dark spots arranged in a square on the segment just before the last.',
        },
        {
          type: 'table',
          caption:
            'Distinguishing fall armyworm larvae from look-alike caterpillars',
          columns: ['Feature', 'Fall armyworm', 'Many similar caterpillars'],
          rows: [
            [
              'Head capsule marking',
              'Pale, inverted Y shape',
              'Marking usually absent or different',
            ],
            [
              'Segment before the last',
              'Four dark spots forming a square',
              'Spots, if present, not arranged in a square',
            ],
          ],
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay egg masses covered in protective fuzzy scales, usually on leaves. Larvae pass through six instars before pupating in the soil, and in warm conditions a generation can complete in under a month, allowing several overlapping generations per growing season.',
        },
        {
          type: 'paragraph',
          text: 'Fall armyworm cannot survive prolonged freezing temperatures, so in cooler regions populations typically recolonize each season through migration from warmer areas rather than overwintering locally.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Young larvae scrape the leaf surface, producing a translucent "window-pane" effect, while older larvae chew ragged holes and burrow into the whorl, leaving characteristic coarse frass. Larvae can also feed directly on developing ears, adding to yield impact.',
        },
        {
          type: 'paragraph',
          text: 'The host range spans many grasses and cereals. Maize is the most heavily affected crop in most regions, with sorghum and rice also recognized as significant hosts among many others.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps are widely used to track adult moth flight activity and help anticipate egg-laying periods. Field scouting focuses on the whorl stage, looking for early feeding signs and frass, with local economic thresholds guiding whether intervention is warranted.',
        },
        {
          type: 'paragraph',
          text: 'Because of its migratory capacity, fall armyworm is also tracked through regional and international monitoring networks that share flight and outbreak information across borders.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Fall armyworm management combines biological, cultural, and monitoring-based tactics within an integrated pest management framework.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps, predators, and naturally occurring pathogens',
            'Scout regularly at the whorl stage, when early intervention is most effective',
            'Use locally recommended resistant or biotech varieties where authorized',
            'Practise field sanitation and timely planting to reduce carry-over',
            'Participate in area-wide monitoring given the pest’s migratory behaviour',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies and pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'rice' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'humidity' },
    { type: 'machinery', slug: 'agricultural-drone' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'european-corn-borer' },
    { type: 'pest', slug: 'cutworms' },
    { type: 'pest', slug: 'desert-locust' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Global overview of a highly mobile pest now established across the Americas, Africa, Asia, and parts of Oceania; local hosts, pressure, and guidance vary by region.',
  climateContext:
    'Warm temperatures speed development and allow more generations per season, while seasonal winds carry moths into cooler regions where the pest cannot overwinter.',
  limitations: [
    'This is a general overview of a widely distributed migratory pest, not region-specific guidance for a particular country or cropping system.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global distribution and monitoring guidance',
    },
    { sourceId: 'usda-aphis', citedFor: 'Pest status and regulatory context' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and identification' },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize-specific impact and management research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fall Armyworm',
    description:
      'Fall armyworm explained: identification, migratory biology, whorl and ear damage in maize, monitoring, and integrated pest management.',
    keywords: [
      'fall armyworm',
      'Spodoptera frugiperda',
      'maize pest',
      'whorl damage',
    ],
  },
  structuredData: { article: true },
};
