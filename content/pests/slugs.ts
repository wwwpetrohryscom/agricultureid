import type { PestContent } from '@/types/content';

export const slugs: PestContent = {
  id: 'pest-slugs',
  slug: 'slugs',
  contentType: 'pest',
  title: 'Slugs',
  scientificName: 'Various species, phylum Mollusca, class Gastropoda',
  alternativeNames: ['Land slugs'],
  category: 'Mollusc pest',
  subcategory: 'Soft-bodied gastropod',
  pestGroup: 'Mollusc — Gastropoda',
  summary:
    'Slugs are soft-bodied, shell-less molluscs, not insects, that graze on seedlings and low-growing leafy and fruit crops, and are most active and damaging under cool, moist conditions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Slugs are soft-bodied molluscs closely related to snails but lacking an external shell. They move on a muscular foot and leave a characteristic slime trail as they feed, most actively at night or during humid, overcast conditions.',
    },
    {
      type: 'paragraph',
      text: 'Several species are significant agricultural pests, feeding on seedlings, leafy vegetables, and ripening fruit close to the ground. Populations and damage risk are strongly tied to soil moisture, and pressure can be more severe in fields with heavy surface residue or reduced tillage that preserves the humid, sheltered conditions slugs favour.',
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
      value: 'Cool, moist conditions and dense surface residue or ground cover',
    },
    {
      label: 'Natural enemies',
      value: 'Ground beetles, some birds, predatory nematodes and fungi',
    },
    {
      label: 'Sign',
      value: 'Irregular ragged holes in leaves, silvery slime trails',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Slugs have an elongated, soft, shell-less body with a pair of upper tentacles bearing eyes, and move on a mucus-lubricated muscular foot. The silvery slime trail left behind as they move and feed is one of the most reliable diagnostic signs of their presence.',
        },
        {
          type: 'list',
          items: [
            'Irregular, ragged holes in leaves, often with smooth edges',
            'Silvery slime trails on soil, foliage, or fruit surfaces',
            'Damage to seedlings that can appear suddenly overnight',
            'Slugs themselves found sheltering under debris or in soil cracks by day',
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
          text: 'Slugs are hermaphroditic, with each individual having both male and female reproductive organs, though many species still mate. Eggs are laid in clusters in moist soil or under debris, and juveniles resemble small adults, growing through repeated feeding.',
        },
        {
          type: 'paragraph',
          text: 'Slugs are most active at night or during humid, overcast weather, sheltering in soil cracks, under debris, or in dense vegetation during dry or hot periods. Populations can persist across multiple seasons in consistently moist, favourable habitats.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding produces irregular, ragged holes in leaves and can destroy seedlings outright, while fruit that touches or hangs near the ground can be scarred or tunnelled into. Slime trails and feeding damage can also affect the marketability of leafy salad crops even when the plant otherwise survives.',
        },
        {
          type: 'paragraph',
          text: 'Hosts include lettuce, cabbage, and strawberry among many other low-growing vegetable and fruit crops.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Field scouting after dusk or during damp weather, when slugs are most active, helps confirm presence and estimate pressure. Baited traps, such as damp boards or shelters checked periodically, are commonly used to estimate populations, particularly before planting susceptible seedling crops.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Slug management focuses on reducing the moist, sheltered conditions slugs favour and protecting the most vulnerable seedling stage.',
        },
        {
          type: 'list',
          items: [
            'Improve field drainage and reduce excessive surface moisture or residue where practical',
            'Conserve ground beetles and other natural predators',
            'Monitor with baited traps or shelters ahead of planting to judge risk',
            'Time tillage and residue management to reduce sheltering sites',
            'Choose less-palatable crops or timing in fields with a history of high slug pressure',
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
    { type: 'pest', slug: 'cutworms' },
    { type: 'pest', slug: 'wireworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found worldwide in temperate and moist regions wherever host crops are grown; species, seasonal activity, and pressure vary by region and climate.',
  climateContext:
    'Activity and reproduction increase under cool, moist, humid conditions and decline sharply during hot, dry weather when slugs shelter and become inactive.',
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
    title: 'Slugs',
    description:
      'Slugs explained: identification, biology, feeding damage to seedlings and leafy crops, moisture-based monitoring, and integrated management practices.',
    keywords: ['slugs', 'Gastropoda', 'mollusc pest', 'seedling damage'],
  },
  structuredData: { article: true },
};
