import type { PestContent } from '@/types/content';

export const diamondbackMoth: PestContent = {
  id: 'pest-diamondback-moth',
  slug: 'diamondback-moth',
  contentType: 'pest',
  title: 'Diamondback Moth',
  scientificName: 'Plutella xylostella (Lepidoptera: Plutellidae)',
  alternativeNames: ['DBM'],
  category: 'Insect pest',
  subcategory: 'Leaf-feeding caterpillar',
  pestGroup: 'Insect — Lepidoptera (Plutellidae)',
  summary:
    'Diamondback moth is a small moth whose caterpillars feed on brassica crops worldwide and is one of the most notorious insects for developing resistance to insecticides.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Diamondback moth is a small, worldwide pest specializing on plants in the cabbage family. Its caterpillars feed on the leaves of brassica vegetables and oilseeds, and although each larva is small, populations can build quickly and cause severe damage, especially to leafy and heading crops where cosmetic quality matters.',
    },
    {
      type: 'paragraph',
      text: 'The species is infamous for its ability to develop resistance to insecticides, having done so to many chemical groups across different regions. This history makes resistance management and reliance on non-chemical tactics central to controlling it, and has made it a model insect for studying insecticide resistance.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Lepidoptera, family Plutellidae' },
    { label: 'Hosts', value: 'Brassica (cabbage-family) crops' },
    { label: 'Damaging stage', value: 'Larva (leaf-feeding caterpillar)' },
    {
      label: 'Key concern',
      value: 'Leaf and head damage plus insecticide resistance',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps and generalist predators',
    },
    {
      label: 'Sign',
      value: 'Small "window-pane" feeding holes and green frass',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, slender greyish-brown moths; when the wings are folded, pale markings along the back can form a series of diamond shapes, giving the insect its name. Larvae are small, green, and tapered at both ends, and they wriggle actively and may drop on a silk thread when disturbed. Pale, mesh-like pupal cocoons are found on the foliage.',
        },
        {
          type: 'paragraph',
          text: 'Young larvae may mine briefly within the leaf, while older larvae chew small holes, often leaving the upper leaf surface intact to create a "window-pane" effect. These signs, plus the wriggling larvae and lacy cocoons, help separate diamondback moth from other brassica caterpillars.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Females lay tiny eggs on the foliage, and larvae develop through several instars before spinning a cocoon and pupating on the plant. The life cycle is short in warm weather, allowing many overlapping generations per year and rapid population growth, which also accelerates the selection of resistant individuals under repeated spraying.',
        },
        {
          type: 'paragraph',
          text: 'The moth is highly mobile and can migrate, recolonizing areas where cold limits year-round survival. Continuous availability of brassica hosts, including weeds and crop residues, supports carry-over between crops.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Larval feeding produces small holes and window-pane patches on leaves; heavy feeding can defoliate seedlings and contaminate or damage the marketable heads of crops such as cabbage and broccoli. Because damage to the growing point or head is especially costly, even modest larval numbers can matter at sensitive stages.',
        },
        {
          type: 'paragraph',
          text: 'Hosts are brassicas, including cabbage, broccoli, cauliflower, and kale, as well as other cabbage-family crops such as mustard and oilseed rape. Damage severity varies with crop stage, variety, and natural-enemy activity.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Pheromone traps track adult male flight to signal activity and generations, while direct plant inspection counts larvae and assesses feeding damage relative to crop stage. Checking for parasitized larvae and cocoons helps gauge natural control. Decisions are guided by local economic thresholds rather than fixed schedules.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Given the pest’s resistance history, management stresses non-chemical tactics and strict resistance management within integrated pest management.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps and other natural enemies that provide substantial control',
            'Use crop rotation, field sanitation, and control of brassica weeds to reduce carry-over',
            'Consider selective biological products, such as microbial insecticides, that spare natural enemies',
            'Rotate modes of action and avoid overuse to slow resistance development',
            'Base any intervention on trapping and scouting against local thresholds',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations, product labels, and resistance-management guidelines, and should consider effects on natural enemies and pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'cauliflower' },
    { type: 'crop', slug: 'kale' },
    { type: 'crop', slug: 'mustard' },
    { type: 'crop', slug: 'oilseed-rape' },
  ],
  connections: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'crop-rotation',
    'host-plant',
  ],
  geographicScope:
    'A cosmopolitan pest of brassica crops found in most brassica-growing regions; pressure, resistance status, and guidance vary by region.',
  climateContext:
    'Warm conditions shorten the life cycle and allow many generations, while migration helps the moth recolonize colder areas each season.',
  limitations: [
    'This is a general overview of the pest, not crop- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Local insecticide-resistance status strongly affects which chemical tools remain effective.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Diamondback Moth',
    description:
      'Diamondback moth (Plutella xylostella): identification, biology, brassica leaf damage, insecticide resistance, monitoring, and integrated management.',
    keywords: [
      'diamondback moth',
      'Plutella xylostella',
      'brassica pest',
      'insecticide resistance',
    ],
  },
  structuredData: { article: true },
};
