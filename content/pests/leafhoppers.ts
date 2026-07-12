import type { PestContent } from '@/types/content';

export const leafhoppers: PestContent = {
  id: 'pest-leafhoppers',
  slug: 'leafhoppers',
  contentType: 'pest',
  title: 'Leafhoppers',
  scientificName: 'Family Cicadellidae (order Hemiptera)',
  alternativeNames: ['Jassids'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding insect',
  pestGroup: 'Insect — Hemiptera (Cicadellidae)',
  summary:
    'Leafhoppers are small, wedge-shaped sap-feeding insects that attack a wide range of crops. Beyond direct feeding injury, many species transmit plant pathogens, making them important vectors in several major cropping systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Leafhoppers are a large and diverse family of small, wedge-shaped insects, family Cicadellidae, that feed by piercing plant tissue and sucking sap from leaves and stems. They occur on a wide range of crops worldwide, including cereals, vegetables, and fruit, and are known for their characteristic sideways-hopping movement when disturbed.',
    },
    {
      type: 'paragraph',
      text: 'Direct feeding can cause stippling, yellowing, and a scorched appearance known as hopperburn in sensitive crops, but many leafhopper species are more significant as vectors of plant viruses and phytoplasmas, transmitting pathogens as they move between plants to feed.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Cicadellidae' },
    {
      label: 'Feeding',
      value: 'Piercing-sucking mouthparts on leaves and stems',
    },
    {
      label: 'Key concern',
      value:
        'Direct feeding injury (stippling, hopperburn) and pathogen transmission',
    },
    {
      label: 'Movement',
      value: 'Rapid sideways hopping and short flights when disturbed',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, predatory bugs, spiders',
    },
    {
      label: 'Sign',
      value:
        'Stippled or bronzed leaves, sudden wilting from hopperburn, cast nymphal skins',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Leafhoppers are small, elongated, wedge-shaped insects, usually only a few millimetres long, that hold their wings roof-like over the body. Colours vary widely by species, from plain green or brown to brightly patterned. When disturbed, they move rapidly sideways or take short hopping flights, a behaviour that helps distinguish them from slower-moving sap feeders.',
        },
        {
          type: 'paragraph',
          text: 'Signs of infestation include fine white or yellow stippling on leaves, a scorched or bronzed appearance known as hopperburn in severe cases, and small white cast skins left behind as nymphs moult.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Leafhoppers develop through incomplete metamorphosis, with wingless nymphs resembling small adults before maturing to winged adults. Females insert eggs into plant tissue, and several generations can occur within a single growing season depending on species and climate.',
        },
        {
          type: 'paragraph',
          text: 'Many species disperse over long distances on wind currents or through seasonal migration, which is important both for colonising new fields and for spreading the pathogens some species vector.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding removes plant sap and can inject toxins that cause hopperburn, distorted growth, or leaf curling, while some species vector viruses and phytoplasmas that cause more serious disease than the feeding injury alone.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include rice, maize, potato, and grape, among many other cereals, vegetables, and fruit crops affected by different leafhopper species.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Sweep-net sampling, sticky traps, and regular visual scouting for nymphs and stippling help track leafhopper presence and abundance, informing decisions about whether and when local thresholds warrant action.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Leafhopper management fits within integrated pest management, combining several tactics rather than relying on any single approach.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps, predatory bugs, and spiders',
            'Use resistant or tolerant varieties where available',
            'Manage field borders and weeds that can harbour populations or reservoir pathogens',
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
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'grape' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'climate', slug: 'growing-season' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'thrips' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found worldwide wherever host crops are grown; species composition, vectored pathogens, and pressure vary substantially by region.',
  climateContext:
    'Population growth and dispersal are strongly influenced by temperature and humidity, with warm conditions generally favouring faster development and more generations per season.',
  limitations: [
    'This is a general overview of a diverse family, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Leafhopper biology, hosts, and importance' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    { sourceId: 'cornell-cals', citedFor: 'Monitoring and management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Leafhoppers',
    description:
      'Leafhoppers explained: identification, biology and life cycle, crop damage and virus transmission, monitoring, and integrated management principles.',
    keywords: [
      'leafhoppers',
      'Cicadellidae',
      'sap-feeding insect',
      'virus vector',
    ],
  },
  structuredData: { article: true },
};
