import type { PestContent } from '@/types/content';

export const cottonBollworm: PestContent = {
  id: 'pest-cotton-bollworm',
  slug: 'cotton-bollworm',
  contentType: 'pest',
  title: 'Cotton Bollworm',
  scientificName: 'Helicoverpa armigera (order Lepidoptera, family Noctuidae)',
  alternativeNames: [
    'American bollworm',
    'Old World bollworm',
    'Corn earworm (related species)',
  ],
  category: 'Insect pest',
  subcategory: 'Bollworm caterpillar',
  pestGroup: 'Insect — Lepidoptera (Helicoverpa armigera)',
  summary:
    'Cotton bollworm (Helicoverpa armigera) is a highly polyphagous caterpillar that bores into cotton bolls and the fruiting structures of many other crops, causing direct fruit and seed loss and posing a well-documented risk of insecticide resistance.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cotton bollworm, Helicoverpa armigera, is one of the most economically significant caterpillar pests worldwide, attacking cotton bolls as well as the fruiting parts of many other crops. It is highly mobile and polyphagous, moving between crops and regions as host availability changes through the season.',
    },
    {
      type: 'paragraph',
      text: 'The species is well known for developing resistance to multiple classes of insecticides in various regions, which has made resistance management and integrated, non-chemical tactics a central part of modern control strategies.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Caterpillar, order Lepidoptera, family Noctuidae',
    },
    {
      label: 'Feeding',
      value:
        'Boring into cotton bolls, flower buds (squares), and fruiting structures',
    },
    {
      label: 'Key concern',
      value:
        'Direct boll and fruit damage, and documented insecticide resistance',
    },
    {
      label: 'Host range',
      value: 'Highly polyphagous across many unrelated crop families',
    },
    {
      label: 'Natural enemies',
      value:
        'Parasitoid wasps and flies, predatory bugs, entomopathogenic viruses',
    },
    {
      label: 'Sign',
      value:
        'Round holes in bolls or fruit, frass at entry points, damaged squares',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Larvae vary considerably in colour, from green or yellow-brown to pink, often with faint dark stripes along the body, and reach around four centimetres at maturity. A round entry hole with frass on the surface of a boll or fruit, and a larva feeding within, are the clearest field signs.',
        },
        {
          type: 'paragraph',
          text: 'Adult moths are stout-bodied and pale brown with darker markings, and are night-flying, so scouting typically relies on eggs, larvae, and damage signs rather than adult sightings.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay eggs singly on leaves, flower buds, and fruiting structures. Young larvae feed briefly on foliage and flowers before moving into bolls or fruit, where later instars cause the most damage. Multiple overlapping generations typically occur within a season in warm climates.',
        },
        {
          type: 'paragraph',
          text: 'The species can migrate over considerable distances as an adult, and can also enter a resting (diapause) stage in some regions to survive unfavourable seasons.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larvae feeding on flower buds cause them to drop, while boring into bolls destroys developing lint and seed and creates entry points for secondary rots. Larvae typically move between several bolls or fruit during development, damaging more than they consume.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include cotton, tomato, maize, and sorghum, among many others, reflecting the species’ unusually broad host range.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps for adult moths, combined with regular field scouting for eggs and small larvae on squares, flowers, and young bolls, are the basis of monitoring programmes and help time any intervention before larvae bore into fruiting structures.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because Helicoverpa armigera has repeatedly developed resistance to insecticides, management emphasises diversified, integrated tactics rather than reliance on chemical control alone.',
        },
        {
          type: 'list',
          items: [
            'Scout regularly and target the vulnerable egg and young-larval stages',
            'Conserve parasitoid wasps and flies, predatory bugs, and other natural enemies',
            'Use resistant or tolerant varieties and trap crops where available',
            'Rotate modes of action and follow local resistance-management guidance where insecticides are used',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and resistance-management guidelines, and should consider effects on beneficial insects. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'stink-bugs' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'armyworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Widespread across Africa, Asia, Europe, and Oceania on cotton and many other crops; a closely related species (Helicoverpa zea) fills a similar niche in the Americas.',
  climateContext:
    'Warm conditions shorten generation time and support more generations per season; the species can migrate long distances and, in some regions, oversummer or overwinter in a resting stage.',
  limitations: [
    'This entry focuses on Helicoverpa armigera and does not cover every regional bollworm species affecting cotton in detail.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Regulatory and distribution context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cotton Bollworm',
    description:
      'Cotton bollworm (Helicoverpa armigera) explained: identification, boll and fruit damage, resistance concerns, monitoring, and IPM principles.',
    keywords: [
      'cotton bollworm',
      'Helicoverpa armigera',
      'bollworm',
      'cotton pest',
    ],
  },
  structuredData: { article: true },
};
