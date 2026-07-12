import type { PestContent } from '@/types/content';

export const sawflies: PestContent = {
  id: 'pest-sawflies',
  slug: 'sawflies',
  contentType: 'pest',
  title: 'Sawflies',
  scientificName: 'Suborder Symphyta (order Hymenoptera)',
  alternativeNames: ['Sawfly larvae'],
  category: 'Insect pest',
  subcategory: 'Larval feeding insect',
  pestGroup: 'Insect — Hymenoptera (Symphyta larvae)',
  summary:
    'Sawflies are hymenopteran insects whose caterpillar-like larvae feed on foliage or fruit of tree and field crops, including apple, pear, and oilseed rape, causing direct feeding damage rather than acting as disease vectors.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sawflies are primitive, non-stinging members of the order Hymenoptera, named for the saw-like ovipositor females use to insert eggs into plant tissue. Their larvae resemble caterpillars and feed on foliage, developing fruit, or, in some species, mine within the stems and pods of field crops.',
    },
    {
      type: 'paragraph',
      text: 'Unlike many sap-feeding pests, sawflies are not significant disease vectors; their impact comes from direct larval feeding, which can defoliate trees, scar or spoil developing fruit, and reduce yield in oilseed and other field crops depending on the species and timing of attack.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hymenoptera, suborder Symphyta' },
    {
      label: 'Feeding',
      value:
        'Chewing larvae feeding on foliage, fruit, or within stems and pods',
    },
    {
      label: 'Key concern',
      value: 'Direct larval feeding damage, not disease transmission',
    },
    {
      label: 'Life stage of concern',
      value: 'Larval stage; adults do not cause crop damage',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, birds, ground beetles',
    },
    {
      label: 'Sign',
      value:
        'Skeletonised or ribbon-like leaf damage, scarred or tunnelled fruit',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Sawfly larvae resemble butterfly or moth caterpillars but typically have more pairs of fleshy prolegs along the abdomen and often curl into a distinctive "S" or coiled shape when disturbed. Adults are non-stinging wasp-like insects rarely noticed causing damage themselves.',
        },
        {
          type: 'paragraph',
          text: 'Signs of infestation include skeletonised or ribbon-like feeding patterns on leaves, scarring or tunnelling on developing fruit, and groups of larvae feeding together on affected foliage.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Female sawflies use their saw-like ovipositor to insert eggs into leaf tissue, developing fruit, or stems, depending on species. Larvae feed for several weeks before many species drop to the soil to pupate, overwintering there until adults emerge the following season.',
        },
        {
          type: 'paragraph',
          text: 'The number of generations per year and the timing of larval activity vary by species and region, often tracking crop phenology such as bloom or pod development.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larval feeding can defoliate trees and shrubs, scar or tunnel into developing fruit, or damage stems and pods in field crops, with economic impact depending heavily on crop stage and species involved.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include apple, pear, and oilseed rape, among other tree fruit and field crops attacked by particular sawfly species.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Scouting for larvae and characteristic feeding damage during bloom and early fruit or pod development, alongside degree-day models where available, helps time monitoring to periods of greatest risk.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Sawfly management fits within integrated pest management, combining several tactics rather than relying on any single approach.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps, birds, and ground beetles',
            'Time monitoring to bloom or pod-development stages when larvae are most likely to establish',
            'Consider tillage or soil disturbance where it disrupts soil-overwintering pupae without harming beneficial organisms',
            'Monitor and use local thresholds to guide any intervention',
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
    { type: 'crop', slug: 'pear' },
    { type: 'crop', slug: 'oilseed-rape' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-degree-days' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'leaf-rollers' },
    { type: 'pest', slug: 'codling-moth' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found in temperate fruit- and oilseed-growing regions worldwide; species and severity vary by crop and region.',
  climateContext:
    'Larval development rate follows temperature and growing-degree-day accumulation, and cold winters can affect survival of soil-overwintering pupae.',
  limitations: [
    'This is a general overview of a diverse group of species, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Sawfly biology, hosts, and importance' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'ahdb',
      citedFor: 'Field crop risk assessment and monitoring guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sawflies',
    description:
      'Sawflies explained: identification, biology and life cycle, larval feeding damage to fruit and oilseed crops, monitoring, and management principles.',
    keywords: ['sawflies', 'Symphyta', 'larval feeding damage', 'orchard pest'],
  },
  structuredData: { article: true },
};
