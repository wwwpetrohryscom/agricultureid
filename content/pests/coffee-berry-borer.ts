import type { PestContent } from '@/types/content';

export const coffeeBerryBorer: PestContent = {
  id: 'pest-coffee-berry-borer',
  slug: 'coffee-berry-borer',
  contentType: 'pest',
  title: 'Coffee Berry Borer',
  scientificName: 'Hypothenemus hampei (Coleoptera: Curculionidae: Scolytinae)',
  alternativeNames: ['CBB', 'Broca del café'],
  category: 'Insect pest',
  subcategory: 'Berry-boring bark beetle',
  pestGroup: 'Insect — Coleoptera (Curculionidae, Scolytinae)',
  summary:
    'Coffee berry borer is a tiny beetle whose females bore into coffee berries and breed inside the seeds (beans), making it the most damaging insect pest of coffee worldwide.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Coffee berry borer is a minute bark beetle regarded as the most economically important insect pest of coffee across the world’s coffee-growing regions. The female bores into the coffee berry and tunnels into the seeds, where she lays eggs and her offspring develop, feeding directly on the part of the crop that is harvested and sold.',
    },
    {
      type: 'paragraph',
      text: 'Because most of the life cycle takes place hidden inside the berry, the borer is protected from many controls and is difficult to detect early. Infested berries yield fewer, lighter, and lower-quality beans, and berries left on trees and the ground after harvest allow the pest to carry over between seasons.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, subfamily Scolytinae',
    },
    { label: 'Host', value: 'Coffee' },
    {
      label: 'Damaging stage',
      value: 'Adult females and larvae inside berries',
    },
    {
      label: 'Key concern',
      value: 'Direct feeding on beans, cutting yield and quality',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps and insect-pathogenic fungi',
    },
    {
      label: 'Sign',
      value: 'Small entry holes at the tip of the coffee berry',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'The beetle is tiny and black to dark brown, so it is usually detected by its damage rather than by sight. The key field sign is a small, round entry hole, typically at the tip of the berry, where the female has bored in. Cutting open infested berries reveals galleries in the seeds and, often, several life stages of the borer together.',
        },
        {
          type: 'paragraph',
          text: 'Because the entry hole and internal galleries are diagnostic, sampling and dissecting berries is the standard way to confirm infestation and assess its level.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Mated females bore into berries and lay eggs within the seeds, where larvae feed and develop into the next generation largely inside the same berry. Development is faster in warm conditions, and multiple overlapping generations occur through the fruiting period, so populations can build across a season and between successive crops.',
        },
        {
          type: 'paragraph',
          text: 'The pest persists in berries that remain on the tree or fall to the ground after harvest. These residual berries are a crucial reservoir that seeds infestation of the next crop, which is why post-harvest sanitation is central to management.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Feeding inside the beans reduces the weight and number of marketable beans, damages their appearance, and can lower cup quality, while entry wounds can admit fungi that cause further deterioration. Because the damage is to the harvested product itself, even moderate infestation has a direct economic cost.',
        },
        {
          type: 'paragraph',
          text: 'Coffee is the host of concern. Both of the main cultivated coffee species can be attacked, and the pest is found wherever coffee is grown in suitable warm climates.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Alcohol-baited traps are used to detect and track adult flight activity, and berry sampling — inspecting and dissecting berries for entry holes and internal stages — measures infestation on the tree. Monitoring the proportion of infested berries and the presence of residual berries after harvest guides timing of sanitation and other actions.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management centres on sanitation and biological control within integrated pest management, because the concealed habit limits the reach of sprays.',
        },
        {
          type: 'list',
          items: [
            'Practise thorough harvesting and post-harvest sanitation to remove residual berries that carry the pest over',
            'Conserve and use natural enemies, including parasitoid wasps and insect-pathogenic fungi',
            'Use traps to detect activity and help time management',
            'Manage shade and pruning to create conditions less favourable to the borer where appropriate',
            'Base any intervention on berry sampling and local thresholds',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or biocontrol use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies and pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [{ type: 'crop', slug: 'coffee' }],
  connections: [
    { type: 'plant-disease', slug: 'coffee-leaf-rust' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found throughout the world’s coffee-growing regions; pressure and management options vary with climate, elevation, and production system.',
  climateContext:
    'Warm temperatures speed development and increase generations, while cooler high-elevation conditions tend to slow the pest.',
  limitations: [
    'This is a general overview of the pest, not region- or farm-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Natural-enemy availability and effectiveness vary between coffee regions.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
    {
      sourceId: 'cgiar',
      citedFor: 'Coffee pest research and management context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Coffee Berry Borer',
    description:
      'Coffee berry borer (Hypothenemus hampei): identification, biology, damage to coffee beans, monitoring, sanitation, and integrated management.',
    keywords: [
      'coffee berry borer',
      'Hypothenemus hampei',
      'coffee pest',
      'broca del cafe',
    ],
  },
  structuredData: { article: true },
};
