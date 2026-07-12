import type { PestContent } from '@/types/content';

export const psyllids: PestContent = {
  id: 'pest-psyllids',
  slug: 'psyllids',
  contentType: 'pest',
  title: 'Psyllids',
  scientificName: 'Family Psyllidae (order Hemiptera)',
  alternativeNames: ['Jumping plant lice'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding insect',
  pestGroup: 'Insect — Hemiptera (Psyllidae)',
  summary:
    'Psyllids, or jumping plant lice, are small sap-feeding insects that damage citrus, pome fruit, and vegetable crops both directly and as vectors of serious plant pathogens.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Psyllids, commonly called jumping plant lice, are small, sap-feeding insects of the family Psyllidae with strong hind legs adapted for jumping. Many species are highly host-specific, associating closely with a single plant genus or family, and several are of major agricultural importance in citrus, pome fruit, and solanaceous vegetable crops.',
    },
    {
      type: 'paragraph',
      text: 'Direct feeding by psyllids can distort growth and produce honeydew and sooty mould, but their greatest economic impact in many regions comes from transmitting bacterial pathogens, including those associated with citrus greening disease and potato and tomato psyllid-vectored disorders.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Hemiptera, family Psyllidae' },
    { label: 'Feeding', value: 'Sap-sucking; strong jumping hind legs' },
    {
      label: 'Key concern',
      value: 'Feeding injury and transmission of serious bacterial pathogens',
    },
    {
      label: 'Host specificity',
      value: 'Many species restricted to a single plant genus or family',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, predatory bugs, lacewings',
    },
    {
      label: 'Sign',
      value: 'Leaf curling, honeydew, sooty mould, nymphs with waxy secretions',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult psyllids resemble tiny cicadas, typically only a few millimetres long, with clear or patterned wings held roof-like over the body and strong hind legs used for jumping when disturbed. Nymphs are flattened, scale-like, and often produce distinctive waxy filaments or tubules.',
        },
        {
          type: 'paragraph',
          text: 'Signs of infestation include curled or distorted new growth, honeydew and associated sooty mould, and waxy nymphal secretions on the undersides of leaves.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Psyllids develop through incomplete metamorphosis, with flattened nymphs progressing through several stages before becoming winged adults. Most species have multiple generations per year and often colonise a narrow range of related host plants.',
        },
        {
          type: 'paragraph',
          text: 'Adults can disperse between host plants through short flights assisted by wind, which is significant both for colonising new orchards or fields and for spreading pathogens some species vector.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding can distort shoots and leaves and produce honeydew that supports sooty mould growth, but the transmission of bacterial pathogens associated with several serious citrus and solanaceous crop diseases is often the more damaging consequence of psyllid infestation.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include orange, lemon, pear, and tomato, reflecting the strong host associations of different psyllid species.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Yellow sticky traps, tap or beat sampling over a collection tray, and visual scouting of new growth for nymphs and honeydew are common methods used to track psyllid presence and inform management timing.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Psyllid management fits within integrated pest management, combining several tactics rather than relying on any single approach.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps, predatory bugs, and lacewings',
            'Use certified, pest-free planting material where available',
            'Remove or manage alternate host plants near susceptible crops',
            'Monitor with sticky traps and local thresholds to guide any intervention',
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
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'lemon' },
    { type: 'crop', slug: 'pear' },
    { type: 'crop', slug: 'tomato' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'wind' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'climate', slug: 'drought' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'aphids' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found across citrus-, pome-fruit-, and vegetable-growing regions worldwide; species, vectored pathogens, and severity vary regionally.',
  climateContext:
    'Temperature strongly affects development rate and generation number, and wind can aid short-distance dispersal of adults between host plants.',
  limitations: [
    'This is a general overview of a diverse family, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Psyllid biology, hosts, and importance' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'psu-extension',
      citedFor: 'Monitoring and management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Psyllids',
    description:
      'Psyllids explained: identification, biology, feeding damage and pathogen transmission in citrus and vegetable crops, monitoring, and IPM principles.',
    keywords: ['psyllids', 'Psyllidae', 'jumping plant lice', 'citrus pest'],
  },
  structuredData: { article: true },
};
