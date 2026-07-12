import type { PestContent } from '@/types/content';

export const stemBorers: PestContent = {
  id: 'pest-stem-borers',
  slug: 'stem-borers',
  contentType: 'pest',
  title: 'Stem Borers',
  scientificName:
    'Larvae of several moth and beetle genera, including Chilo, Sesamia, Busseola, and Scirpophaga (order Lepidoptera), with some Coleoptera species also causing similar damage',
  alternativeNames: ['Stalk borers', 'Borer caterpillars'],
  category: 'Insect pest',
  subcategory: 'Stem-boring larva',
  pestGroup: 'Insect — Lepidoptera/Coleoptera (various)',
  summary:
    'Stem borers are the larvae of various moths and some beetles that tunnel inside the stems of cereals and sugarcane, causing dead central shoots, weakened stems, and yield loss across maize, rice, sorghum, and sugarcane.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Stem borers are not a single species but a functional group of caterpillars, and occasionally beetle larvae, that share a common habit: boring into the stems of cereals and grasses and feeding from within. Different genera and species dominate in different crops and regions, including Chilo and Scirpophaga in rice, and Busseola and Sesamia in maize and sorghum.',
    },
    {
      type: 'paragraph',
      text: 'Because larvae feed inside the stem, they are largely protected from contact insecticides and many natural enemies once tunnelling begins, which shifts management emphasis toward prevention, resistant varieties, and timing of early-stage intervention.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value:
        'Caterpillars (Lepidoptera) and some beetle larvae that bore into stems',
    },
    {
      label: 'Feeding',
      value: 'Tunnelling inside stems, stalks, and growing points',
    },
    {
      label: 'Key concern',
      value: 'Dead central shoots ("deadheart"), stem weakening, and lodging',
    },
    {
      label: 'Timing',
      value: 'Young larvae are most vulnerable before they enter the stem',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps and flies, predatory insects, entomopathogens',
    },
    {
      label: 'Sign',
      value: 'Dead central whorl (deadheart), exit holes, frass at stem base',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are usually small, drab moths that fly at night and are rarely noticed; identification in the field relies mainly on larval damage and, where needed, on rearing or expert confirmation of the caterpillar. Larvae are cylindrical, cream to pinkish, sometimes with faint longitudinal stripes, and are found inside hollowed stem tissue.',
        },
        {
          type: 'paragraph',
          text: 'Early symptoms include small pinholes in leaves from young larvae feeding before boring in, followed by a wilted, dead central shoot known as "deadheart" in vegetative-stage cereals, or a dried, empty "whitehead" panicle if boring occurs after heading.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Moths lay egg masses on leaves or stems, and newly hatched larvae feed briefly on leaf tissue before boring into the stem, where they tunnel and feed for several weeks. Depending on species and climate, there may be several overlapping generations per season.',
        },
        {
          type: 'paragraph',
          text: 'Many species survive between cropping seasons as larvae or pupae inside crop residue or stubble, which is why residue management is a recurring theme in cultural control.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Tunnelling disrupts the movement of water and nutrients within the stem, killing the growing point in young plants and weakening stems in older ones, which can lead to lodging and reduced grain fill. Damage severity depends on plant growth stage at attack, borer density, and variety.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include maize, rice, sorghum, and sugarcane, with the mix of species involved varying substantially by region.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Field scouting for egg masses, pinhole leaf feeding, and early deadheart symptoms helps identify infestations while larvae are still exposed and before they bore into stems. Pheromone traps are available for some species to track adult moth activity and time scouting.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because larvae become protected once inside the stem, stem borer management emphasises prevention and early-stage tactics within an integrated approach.',
        },
        {
          type: 'list',
          items: [
            'Destroy or incorporate crop residue and stubble that can harbour overwintering larvae',
            'Use resistant or tolerant varieties where available',
            'Conserve parasitoid wasps and flies and other natural enemies',
            'Scout regularly and time any intervention to the vulnerable young-larval stage',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should consider effects on beneficial insects. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'sugarcane' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'fall-armyworm' },
    { type: 'pest', slug: 'european-corn-borer' },
    { type: 'pest', slug: 'armyworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found across cereal- and sugarcane-growing regions worldwide; the dominant species, generation number, and severity vary widely by region and crop.',
  climateContext:
    'Warm, humid conditions generally favour faster development and more generations per season, and monsoon timing strongly affects infestation pressure in rice-growing regions.',
  limitations: [
    'This is a general overview of a functional group spanning many unrelated species, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'irri',
      citedFor: 'Rice stem borer biology and management context',
    },
    { sourceId: 'cimmyt', citedFor: 'Maize stem borer management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Stem Borers',
    description:
      'Stem borers explained: deadheart and whitehead symptoms, larval biology inside cereal stems, scouting, and integrated management principles.',
    keywords: ['stem borers', 'deadheart', 'cereal stem borer', 'stalk borer'],
  },
  structuredData: { article: true },
};
