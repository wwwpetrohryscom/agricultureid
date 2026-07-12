import type { PestContent } from '@/types/content';

export const leafRollers: PestContent = {
  id: 'pest-leaf-rollers',
  slug: 'leaf-rollers',
  contentType: 'pest',
  title: 'Leaf Rollers',
  scientificName: 'Family Tortricidae (order Lepidoptera)',
  alternativeNames: ['Tortricid moths', 'Leafroller caterpillars'],
  category: 'Insect pest',
  subcategory: 'Larval feeding insect',
  pestGroup: 'Insect — Lepidoptera (Tortricidae larvae)',
  summary:
    'Leaf rollers are tortricid moth caterpillars that shelter and feed inside leaves rolled or webbed together with silk, damaging foliage and, in some species, fruit of apple, grape, and pear.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Leaf rollers are the caterpillars of moths in the family Tortricidae, named for their habit of rolling or tying leaves together with silk to create a protective shelter while they feed. This behaviour partly shields larvae from predators, parasitoids, and some contact treatments, making timing an important part of management.',
    },
    {
      type: 'paragraph',
      text: 'Different tortricid species attack a wide range of fruit and other crops; larvae typically feed on foliage within their rolled shelter, but some species also feed on developing fruit surfaces, causing scarring that can affect marketability even when yield loss is limited.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Tortricidae' },
    {
      label: 'Feeding',
      value: 'Caterpillars feeding within silk-rolled or tied leaves',
    },
    {
      label: 'Key concern',
      value: 'Foliage loss and, in some species, fruit surface scarring',
    },
    {
      label: 'Shelter behaviour',
      value: 'Rolled leaves partly protect larvae from predators and sprays',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, predatory bugs, birds',
    },
    {
      label: 'Sign',
      value:
        'Rolled or tied leaves with silk webbing, skeletonised foliage inside shelters',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Larvae are typically slender caterpillars, often green, brown, or cream, found within a rolled or tied leaf shelter held together with silk strands. Adults are small, bell-shaped moths, usually mottled brown or grey, that rest with wings folded flat.',
        },
        {
          type: 'paragraph',
          text: 'Signs of infestation include rolled or webbed-together leaves, skeletonised or chewed foliage visible when a shelter is unrolled, and, in some species, surface scarring on developing fruit near larval feeding sites.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf rollers develop through complete metamorphosis — egg, larva, pupa, and adult — with several generations possible per season depending on species and climate. Overwintering typically occurs as larvae or pupae sheltered in bark crevices or leaf litter.',
        },
        {
          type: 'paragraph',
          text: 'Adults communicate through species-specific sex pheromones, a trait exploited both for population monitoring with pheromone traps and for mating-disruption control strategies in orchards.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding within rolled leaves reduces photosynthetic leaf area, and in species that also attack fruit, surface feeding can scar or blemish fruit skin, reducing marketable quality even when overall yield loss is modest.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include apple, grape, and pear, among other fruit crops affected by particular tortricid species.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps are widely used to track adult moth flight activity and time management decisions, often combined with growing-degree-day models and visual scouting for rolled-leaf shelters.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf roller management fits within integrated pest management, combining several tactics rather than relying on any single approach.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps, predatory bugs, and birds',
            'Use pheromone-based mating disruption where established for the region and crop',
            'Monitor with pheromone traps and degree-day models to time interventions',
            'Remove or manage overwintering sites such as leaf litter and loose bark where practical',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on beneficial insects and pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'pear' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'climate', slug: 'humidity' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'codling-moth' },
    { type: 'pest', slug: 'sawflies' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found in fruit-growing regions worldwide; specific tortricid species and their importance vary by crop and region.',
  climateContext:
    'Development rate follows temperature and growing-degree-day accumulation, which is widely used to time monitoring and management interventions.',
  limitations: [
    'This is a general overview of a diverse group of species, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    {
      sourceId: 'cabi',
      citedFor: 'Leaf roller biology, hosts, and importance',
    },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Monitoring and management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Leaf Rollers',
    description:
      'Leaf rollers explained: identification, biology and life cycle, foliage and fruit damage in orchards, monitoring, and integrated management principles.',
    keywords: [
      'leaf rollers',
      'Tortricidae',
      'orchard pest',
      'mating disruption',
    ],
  },
  structuredData: { article: true },
};
