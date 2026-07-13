import type { PestContent } from '@/types/content';

export const cabbageLooper: PestContent = {
  id: 'pest-cabbage-looper',
  slug: 'cabbage-looper',
  contentType: 'pest',
  title: 'Cabbage Looper',
  scientificName: 'Trichoplusia ni (Lepidoptera: Noctuidae)',
  alternativeNames: [],
  category: 'Insect pest',
  subcategory: 'Leaf-feeding caterpillar',
  pestGroup: 'Insect — Lepidoptera (Noctuidae)',
  summary:
    'Cabbage looper is a moth whose green, looping caterpillars chew large holes in the leaves of brassicas, lettuce, and many other crops, and contaminate produce with their bodies and frass.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cabbage looper is a widely distributed moth whose caterpillar is a familiar pest of vegetables, especially brassicas and leafy greens. It is named for the way the larva arches its body into a loop as it crawls, a movement typical of the "looper" caterpillars that lack some of the middle prolegs of other caterpillars.',
    },
    {
      type: 'paragraph',
      text: 'Although the looper feeds on many plants, it is most damaging on crops where leaf quality is the product, such as cabbage and lettuce, because chewing damage and contamination with caterpillars and frass reduce marketability even when overall plant health is little affected.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Noctuidae' },
    { label: 'Hosts', value: 'Brassicas, lettuce, and many other crops' },
    { label: 'Damaging stage', value: 'Larva (looping caterpillar)' },
    {
      label: 'Key concern',
      value: 'Leaf holes and contamination of leafy produce',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps, predators, and viral pathogens',
    },
    { label: 'Sign', value: 'Large ragged holes, green frass, looping larvae' },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The larva is smooth and pale green with thin whitish stripes running along the body, and it is narrower toward the head. Its looping gait, caused by having fewer prolegs than many caterpillars, is a reliable identification cue. The adult is a mottled greyish-brown moth with a small silvery marking on each forewing.',
        },
        {
          type: 'paragraph',
          text: 'Feeding produces large, irregular holes, and the larvae and their green frass may be found in the heart of heads or among leaves. The looping movement distinguishes it from many other green caterpillars found on the same crops.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay dome-shaped eggs singly on the foliage. Larvae develop through several instars, then pupate in a thin cocoon attached to the plant. Generations are short in warm weather and overlap, giving several per season, while in colder regions populations are often re-established each year by moths moving in from warmer areas.',
        },
        {
          type: 'paragraph',
          text: 'Naturally occurring pathogens, including insect-specific viruses, and a range of parasitoids and predators frequently exert strong control on looper populations, which is important context for management decisions.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Young larvae make small holes and older larvae chew large ragged holes, and on heading crops they can bore into the head. On leafy vegetables, both the feeding and the presence of caterpillars and frass render produce unmarketable, so tolerance is low even when plants survive.',
        },
        {
          type: 'paragraph',
          text: 'Hosts include cabbage, broccoli, cauliflower, and kale among brassicas, lettuce among leafy greens, and other crops such as tomato. Impact depends heavily on crop, stage, and the market’s cosmetic standards.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps indicate adult flight activity, and plant inspection counts larvae and rates feeding damage relative to crop stage and market tolerance. Checking for parasitized larvae and signs of viral disease helps gauge natural control before deciding whether to intervene.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management leans on conserving the pest’s many natural enemies and using selective tactics within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps, predators, and naturally occurring viral pathogens',
            'Use selective biological products, such as microbial insecticides, that spare natural enemies',
            'Practise field sanitation and manage crop residues to reduce carry-over',
            'Time any action to target young larvae, which are easier to control and cause less damage',
            'Base intervention on trapping and scouting against local thresholds and market tolerance',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should favour selective options that conserve natural enemies and protect pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'cauliflower' },
    { type: 'crop', slug: 'kale' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'tomato' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'cutworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Widely distributed across temperate and warm regions, with populations re-established by migration in colder areas; guidance varies by region.',
  climateContext:
    'Warm weather shortens the life cycle and allows overlapping generations, while migration re-establishes populations in colder zones.',
  limitations: [
    'This is a general overview of the pest, not crop- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Acceptable damage levels depend strongly on crop and market cosmetic standards.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Cabbage Looper',
    description:
      'Cabbage looper (Trichoplusia ni): identification, biology, leaf and head damage on brassicas and lettuce, monitoring, and integrated management.',
    keywords: [
      'cabbage looper',
      'Trichoplusia ni',
      'brassica pest',
      'looper caterpillar',
    ],
  },
  structuredData: { article: true },
};
