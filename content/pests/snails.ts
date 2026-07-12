import type { PestContent } from '@/types/content';

export const snails: PestContent = {
  id: 'pest-snails',
  slug: 'snails',
  contentType: 'pest',
  title: 'Snails',
  scientificName: 'Various species, phylum Mollusca, class Gastropoda',
  alternativeNames: ['Land snails', 'Garden snails'],
  category: 'Mollusc pest',
  subcategory: 'Shelled gastropod',
  pestGroup: 'Mollusc — Gastropoda',
  summary:
    'Snails are shelled, soft-bodied molluscs that graze on seedlings and leafy crops, thriving in cool, moist conditions much like their close relatives, slugs, and posing similar challenges for growers of vegetables and soft fruit.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Land snails are shelled molluscs closely related to slugs, sharing a similar muscular foot and slime-based movement but distinguished by their coiled external shell, into which they can withdraw for protection. Several species are significant pests of vegetable, ornamental, and fruit crops.',
    },
    {
      type: 'paragraph',
      text: 'Like slugs, snails feed most actively at night and during humid or overcast weather, grazing on seedlings, leaves, and low-hanging fruit. Populations can build up in sheltered, moist habitats such as dense ground cover, garden debris, or irrigated crop borders.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Molluscs, class Gastropoda' },
    {
      label: 'Feeding',
      value:
        'Rasping mouthparts graze leaves, seedlings, and fruit near the ground',
    },
    {
      label: 'Key concern',
      value: 'Seedling loss and irregular holes in leafy crops and fruit',
    },
    {
      label: 'Favoured by',
      value: 'Cool, moist conditions and sheltered ground cover or debris',
    },
    {
      label: 'Natural enemies',
      value:
        'Ground beetles, some birds, predatory snails, decollate snails (regionally)',
    },
    {
      label: 'Sign',
      value:
        'Irregular holes in leaves, silvery slime trails, shells sheltering under debris by day',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Snails carry a coiled external shell into which the soft body can retract, distinguishing them at a glance from shell-less slugs. Like slugs, they move on a mucus-lubricated muscular foot and leave a silvery slime trail behind.',
        },
        {
          type: 'list',
          items: [
            'Irregular, ragged holes in leaves with smooth edges',
            'Silvery slime trails on soil, foliage, or fruit surfaces',
            'Shells found sheltering under debris, in dense ground cover, or in soil cracks by day',
            'Damage to seedlings that can appear suddenly overnight',
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
          text: 'Snails are hermaphroditic, with each individual carrying both male and female reproductive organs, though many species still mate. Eggs are laid in clusters in moist soil or under debris, and juveniles resemble small adults, growing a larger shell as they feed and mature.',
        },
        {
          type: 'paragraph',
          text: 'Snails are most active at night or during humid, overcast weather, sheltering inside their shell in cracks, under debris, or in dense vegetation during dry or hot periods; some species can persist for multiple seasons in favourable, consistently moist habitats.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding produces irregular, ragged holes in leaves and can destroy seedlings outright, while fruit that touches or hangs near the ground can be scarred or holed. Slime trails and feeding damage can also affect the marketability of leafy crops even when the plant otherwise survives.',
        },
        {
          type: 'paragraph',
          text: 'Hosts include lettuce, cabbage, and strawberry, among other low-growing vegetable and fruit crops.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Field scouting after dusk or during damp weather, when snails are most active, helps confirm presence and estimate pressure. Baited traps and shelters, such as damp boards checked periodically, are commonly used to estimate populations before planting susceptible seedling crops.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Snail management focuses on reducing the moist, sheltered conditions snails favour and protecting the most vulnerable seedling stage.',
        },
        {
          type: 'list',
          items: [
            'Improve field or garden drainage and reduce excessive surface moisture or debris where practical',
            'Conserve ground beetles and other natural predators',
            'Monitor with baited traps or shelters ahead of planting to judge risk',
            'Remove sheltering debris and dense ground cover near vulnerable crops',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any molluscicide use must follow current, locally authorized recommendations and product labels, and should consider effects on non-target wildlife. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'strawberry' },
  ],
  connections: [
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'slugs' },
    { type: 'pest', slug: 'cutworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found worldwide in temperate and moist regions wherever host crops are grown; species and pressure vary by region and climate.',
  climateContext:
    'Activity and reproduction increase under cool, moist, humid conditions and decline sharply during hot, dry weather when snails shelter and become inactive.',
  limitations: [
    'This is a general overview of a diverse group of species with similar habits, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    {
      sourceId: 'rhs',
      citedFor: 'Identification and garden and field management context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Field crop risk assessment and monitoring guidance',
    },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Snails',
    description:
      'Snails explained: shell and slime-trail identification, biology, feeding injury to vegetables and soft fruit, moisture-driven monitoring, and IPM principles.',
    keywords: ['snails', 'Gastropoda', 'mollusc pest', 'garden pest'],
  },
  structuredData: { article: true },
};
