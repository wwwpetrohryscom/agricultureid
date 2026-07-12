import type { PestContent } from '@/types/content';

export const scaleInsects: PestContent = {
  id: 'pest-scale-insects',
  slug: 'scale-insects',
  contentType: 'pest',
  title: 'Scale Insects',
  scientificName: 'Superfamily Coccoidea (order Hemiptera)',
  alternativeNames: ['Scale', 'Armored scale', 'Soft scale'],
  category: 'Insect pest',
  subcategory: 'Sap-feeding insect',
  pestGroup: 'Insect — Hemiptera (Coccoidea)',
  summary:
    'Scale insects are sap-feeding insects that spend most of their life immobile beneath a protective waxy or armoured covering, weakening orange, olive, tea, and mango through feeding, honeydew, and occasionally virus transmission.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Scale insects are a diverse superfamily united by a shared strategy: after a brief mobile "crawler" stage, most settle in one spot, insert their mouthparts, and develop a protective covering — either a hardened, detachable armour (armoured scales) or a waxy shell fused to the body (soft scales) — under which they feed for the rest of their life.',
    },
    {
      type: 'paragraph',
      text: 'Because settled scales are immobile and often protected under their covering, they can be easy to overlook until populations are heavy, and their fixed feeding sites make timing of any intervention around the vulnerable crawler stage particularly important.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Hemiptera, superfamily Coccoidea',
    },
    {
      label: 'Feeding',
      value: 'Sucking sap from leaves, stems, twigs, and fruit while immobile',
    },
    {
      label: 'Key concern',
      value:
        'Branch and twig dieback, reduced vigour, honeydew and sooty mould (soft scales)',
    },
    {
      label: 'Mobile stage',
      value:
        'Newly hatched "crawlers" are the main dispersal stage before settling',
    },
    {
      label: 'Natural enemies',
      value:
        'Parasitoid wasps, predatory beetles (including ladybirds), lacewings',
    },
    {
      label: 'Sign',
      value:
        'Small, immobile bumps on bark, stems, or leaves; honeydew and sooty mould on soft scales',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Settled scale insects appear as small, often circular or oval bumps on bark, twigs, leaves, or fruit, and can be mistaken for plant tissue at first glance. Armoured scales have a hard, detachable waxy shield that can be lifted with a fingernail to reveal the insect beneath; soft scales have a waxy covering fused to the body and typically produce honeydew.',
        },
        {
          type: 'paragraph',
          text: 'Because soft scales excrete honeydew, sooty mould is a common associated sign, whereas armoured scales, which do not produce significant honeydew, are more often noticed through bark or leaf discolouration around feeding sites.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Eggs are laid beneath the female’s covering, and the newly hatched crawlers are the only mobile stage, walking or being carried by wind, animals, or equipment to new feeding sites before settling and losing most of their mobility. Several generations can occur per year in warm climates.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Sustained feeding by dense colonies can cause twig and branch dieback, leaf yellowing and drop, reduced fruit quality, and general loss of vigour, with soft-scale honeydew adding sooty mould that further reduces photosynthesis and fruit marketability.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include orange, olive, tea, and mango, along with many other perennial fruit, plantation, and ornamental crops.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Inspecting bark, twigs, and leaf undersides for settled scales, checking for honeydew and sooty mould, and tracking crawler emergence with sticky tape or double-sided tape bands help time monitoring to the brief, vulnerable crawler stage.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because settled scales are protected under their covering, management emphasises the crawler stage and conservation of natural enemies within an integrated approach.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps, predatory beetles, and lacewings',
            'Prune out heavily infested twigs and branches where practical',
            'Time any intervention to the crawler stage, when insects are unprotected and mobile',
            'Inspect and avoid moving heavily infested planting material between sites',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide or horticultural oil use must follow current, locally authorized recommendations and product labels, and should consider effects on natural enemies. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'tea' },
    { type: 'crop', slug: 'mango' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'aphids' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found worldwide on perennial fruit, plantation, and ornamental crops; species and host importance vary considerably by region and crop.',
  climateContext:
    'Warm conditions generally support more generations per year, and drought-stressed trees are often more susceptible to damaging build-ups.',
  limitations: [
    'This is a general overview of a large, diverse superfamily, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Species nomenclature and distribution' },
    {
      sourceId: 'rhs',
      citedFor: 'Identification and cultural management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Scale Insects',
    description:
      'Scale insects explained: armoured and soft scale identification, crawler-stage biology, dieback and honeydew damage, and integrated management.',
    keywords: ['scale insects', 'Coccoidea', 'armoured scale', 'soft scale'],
  },
  structuredData: { article: true },
};
