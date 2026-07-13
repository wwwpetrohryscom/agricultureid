import type { PestContent } from '@/types/content';

export const soybeanAphid: PestContent = {
  id: 'pest-soybean-aphid',
  slug: 'soybean-aphid',
  contentType: 'pest',
  title: 'Soybean Aphid',
  scientificName: 'Aphis glycines (Hemiptera: Aphididae)',
  alternativeNames: ['SBA'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding aphid',
  pestGroup: 'Insect — Hemiptera (Aphididae)',
  summary:
    'Soybean aphid is a small aphid that colonizes soybean, feeding on sap and excreting honeydew; large colonies can reduce yield, and the aphid can also transmit plant viruses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soybean aphid is a small, pale yellow aphid that became a major pest of soybean after spreading into North American production areas from its native range in Asia. It feeds by sucking sap, and because it can reproduce very rapidly, colonies can build to high numbers on soybean during the summer.',
    },
    {
      type: 'paragraph',
      text: 'Heavy infestations remove sap, stunt plants, and coat foliage with honeydew and associated sooty mould, which together can reduce pod and seed set. The aphid can also transmit plant viruses. Its management is a well-studied example of threshold-based decision-making that conserves natural enemies.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Aphididae' },
    { label: 'Host', value: 'Soybean (summer host)' },
    { label: 'Feeding', value: 'Sucks sap and excretes honeydew' },
    {
      label: 'Key concern',
      value: 'Yield loss from heavy colonies and virus transmission',
    },
    {
      label: 'Natural enemies',
      value: 'Lady beetles, lacewings, and parasitoid wasps',
    },
    {
      label: 'Sign',
      value: 'Colonies on new growth, honeydew, sooty mould, curling',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The aphid is small and pale yellow to greenish, with dark-tipped cornicles (the paired tubes near the rear) that help distinguish it on soybean. Colonies typically start on the newest growth and undersides of upper leaves, then spread down the plant as numbers grow. Honeydew and sooty mould, plus ants tending the colonies, are common associated signs.',
        },
        {
          type: 'paragraph',
          text: 'On soybean in its introduced range, it is usually the main aphid present, but confirming the pale yellow colour and dark cornicle tips helps separate it from occasional other aphids that may be blown onto the crop.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'On soybean, females reproduce rapidly without mating, giving live birth to young so populations can double quickly under favourable, moderate-temperature conditions. Winged forms are produced that disperse to new plants and fields. The species has a complex life cycle that involves a woody winter host in its native and introduced ranges, on which the overwintering eggs are laid.',
        },
        {
          type: 'paragraph',
          text: 'Very hot weather and the activity of natural enemies can slow or crash populations, so aphid numbers can change quickly, making repeated scouting important during the season.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Sap feeding by large colonies can stunt plants, reduce pod and seed number, and lower yield, particularly when heavy infestations coincide with sensitive reproductive stages. Honeydew and sooty mould reduce photosynthesis, and as a virus vector the aphid can contribute to virus spread. Impact depends on colony size, crop stage, plant stress, and natural-enemy activity.',
        },
        {
          type: 'paragraph',
          text: 'Soybean is the key summer host on which damage occurs. Management decisions focus on this crop and on the timing and size of aphid populations relative to crop development.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Regular scouting through the season counts aphids per plant and tracks whether populations are increasing, together with observing natural-enemy activity. Decisions rely on established economic thresholds that allow time to act before populations reach damaging levels, rather than treating at the first sign of aphids.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Soybean aphid management is a model of threshold-based integrated pest management that conserves the aphid’s abundant natural enemies.',
        },
        {
          type: 'list',
          items: [
            'Scout regularly and act on established economic thresholds rather than aphid presence alone',
            'Conserve natural enemies such as lady beetles, lacewings, and parasitoid wasps',
            'Use resistant or tolerant varieties where they are available',
            'Avoid unnecessary insecticide use that can trigger aphid resurgence by removing natural enemies',
            'Consider virus risk where seed or forage virus problems are important locally',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should conserve natural enemies and protect pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'soybean' }],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'whiteflies' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Native to Asia and a major soybean pest in North America; pressure, natural enemies, and guidance vary by region and season.',
  climateContext:
    'Moderate temperatures favour rapid reproduction, while very hot weather and natural enemies can cause populations to decline quickly.',
  limitations: [
    'This is a general overview of the pest, not region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Virus risk and natural-enemy impact vary regionally and season to season.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Scouting, thresholds, and management',
    },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Soybean Aphid',
    description:
      'Soybean aphid (Aphis glycines): identification, biology, sap-feeding and virus damage in soybean, threshold-based monitoring, and integrated management.',
    keywords: [
      'soybean aphid',
      'Aphis glycines',
      'soybean pest',
      'aphid threshold',
    ],
  },
  structuredData: { article: true },
};
