import type { PestContent } from '@/types/content';

export const aphids: PestContent = {
  id: 'pest-aphids',
  slug: 'aphids',
  contentType: 'pest',
  title: 'Aphids',
  scientificName: 'Family Aphididae (order Hemiptera)',
  alternativeNames: ['Plant lice', 'Greenfly', 'Blackfly'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding insect',
  pestGroup: 'Insect — Hemiptera (Aphididae)',
  summary:
    'Aphids are small sap-feeding insects that attack many crops. They damage plants directly by feeding and indirectly as vectors of plant viruses, and management centres on monitoring and natural enemies.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Aphids are a large family of small, soft-bodied insects that feed by sucking sap from plants. Several hundred species are of agricultural importance, attacking cereals, vegetables, legumes, fruit, and ornamentals. Individual aphids are only a few millimetres long, but their capacity for rapid reproduction means colonies can build quickly.',
    },
    {
      type: 'paragraph',
      text: 'Beyond the direct effects of feeding, many aphids transmit plant viruses, and this role as a virus vector is often more damaging than the feeding itself. Aphid management is therefore an important part of integrated pest management in many cropping systems.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Aphididae' },
    { label: 'Feeding', value: 'Sucking sap from leaves, stems, and shoots' },
    {
      label: 'Key concern',
      value: 'Direct feeding damage and virus transmission',
    },
    {
      label: 'Reproduction',
      value:
        'Rapid; many species reproduce without mating for much of the season',
    },
    {
      label: 'Natural enemies',
      value: 'Ladybirds, lacewings, parasitoid wasps',
    },
    {
      label: 'Sign',
      value: 'Colonies, sticky honeydew, sooty mould, curled leaves',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Aphids are small, pear-shaped insects that may be green, black, yellow, pink, or grey depending on species. A distinctive feature is a pair of tube-like structures (cornicles) projecting from the rear of the body. Colonies are often found on new growth and the undersides of leaves.',
        },
        {
          type: 'paragraph',
          text: 'Signs of infestation include clusters of insects, sticky honeydew on leaves and surfaces below, black sooty mould growing on the honeydew, and distorted or curled young leaves.',
        },
      ],
    },
    {
      id: 'biology',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Many aphids have complex life cycles. During favourable conditions, females often reproduce without mating and give birth to live young, allowing populations to increase very rapidly. Winged forms are produced that disperse to new plants, which is important both for spread and for virus transmission.',
        },
        {
          type: 'paragraph',
          text: 'Life cycles and host relationships vary widely among species, and some alternate between different host plants at different times of year.',
        },
      ],
    },
    {
      id: 'damage',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Aphids damage crops in several ways: direct removal of sap can weaken plants and distort growth; honeydew and sooty mould reduce photosynthesis and can affect quality; and, most importantly for many crops, aphids transmit plant viruses as they feed.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include cereals such as wheat, many vegetables including tomato and potato, and a wide range of other plants. The economic importance of aphids varies greatly by crop, region, and the viruses present.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Regular scouting is central to aphid management. Monitoring the presence, abundance, and location of colonies — and the activity of natural enemies — informs whether and when action is warranted, using local economic thresholds where they exist.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Aphid management fits within integrated pest management, which combines several approaches rather than relying on any single tactic.',
        },
        {
          type: 'list',
          items: [
            'Conserve natural enemies such as ladybirds, lacewings, and parasitoid wasps',
            'Use resistant or tolerant varieties where available',
            'Manage nitrogen and growth to avoid excessively lush, attractive foliage',
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
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [{ type: 'pest', slug: 'whiteflies' }],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Global overview of a diverse insect family; species, hosts, viruses, and guidance vary by region.',
  climateContext:
    'Aphid populations respond strongly to temperature and can build rapidly in mild conditions.',
  limitations: [
    'This is a general overview of a large family, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Aphid identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Aphid biology, hosts, and importance' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Monitoring and management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Aphids',
    description:
      'Aphids explained: identification, biology and life cycle, crop damage, virus transmission, monitoring, and integrated management principles.',
    keywords: ['aphids', 'Aphididae', 'sap-feeding insect', 'crop pest'],
  },
  structuredData: { article: true },
};
