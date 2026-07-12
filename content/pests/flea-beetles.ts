import type { PestContent } from '@/types/content';

export const fleaBeetles: PestContent = {
  id: 'pest-flea-beetles',
  slug: 'flea-beetles',
  contentType: 'pest',
  title: 'Flea Beetles',
  scientificName:
    'Subfamily Alticinae, family Chrysomelidae (order Coleoptera)',
  alternativeNames: ['Flea beetle'],
  category: 'Insect pest',
  subcategory: 'Leaf-feeding beetle',
  pestGroup: 'Insect — Coleoptera (Chrysomelidae)',
  summary:
    'Flea beetles are small, jumping leaf beetles whose adults create characteristic "shot-hole" feeding damage, posing the greatest risk to young seedlings of cabbage, broccoli, radish, and eggplant.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Flea beetles are small beetles, usually just a few millimetres long, named for their enlarged hind legs, which let them jump readily when disturbed, much like fleas. Adults chew small, rounded holes in leaves, producing a distinctive "shot-hole" pattern, while larvae of some species feed on roots below ground.',
    },
    {
      type: 'paragraph',
      text: 'Damage is usually most serious on young seedlings and transplants, where even modest adult feeding can kill or severely stunt plants before they establish, making the seedling stage the period of greatest concern.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value:
        'Insects, order Coleoptera, subfamily Alticinae (family Chrysomelidae)',
    },
    {
      label: 'Feeding',
      value: 'Adults chew small holes in leaves; some larvae feed on roots',
    },
    {
      label: 'Key concern',
      value:
        'Seedling and transplant damage, which can kill or severely stunt young plants',
    },
    {
      label: 'Behaviour',
      value: 'Jump readily when disturbed, using enlarged hind legs',
    },
    {
      label: 'Natural enemies',
      value:
        'Parasitic wasps and flies, predatory beetles and bugs, entomopathogenic fungi',
    },
    {
      label: 'Sign',
      value: 'Small round or irregular "shot holes" scattered across leaves',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adult flea beetles are small, shiny, and often black, bronze, or striped, with noticeably enlarged hind femurs used for jumping. Feeding produces numerous small, rounded holes across the leaf surface, giving foliage a characteristic shot-hole appearance, most damaging on cotyledons and young true leaves.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Adults typically overwinter in soil, leaf litter, or field margins and become active as temperatures warm in spring, when they move into emerging crops. Eggs are laid in soil near host plants, and larvae of many species feed on roots before pupating; several generations can occur per season in warm climates.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Adult feeding on cotyledons and young leaves can kill seedlings outright or slow establishment, while damaged leaf tissue also increases susceptibility to disease entry and moisture loss. Root feeding by larvae of some species adds further stress, particularly in root and tuberous vegetables.',
        },
        {
          type: 'paragraph',
          text: 'Host crops include cabbage, broccoli, radish, and eggplant, along with many other brassica and solanaceous vegetables.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Inspecting seedlings soon after emergence or transplanting, particularly on warm, sunny days when adults are most active, helps detect early shot-hole damage before stands are seriously affected. Yellow sticky traps can supplement visual counts in some settings.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because young seedlings are most vulnerable, flea beetle management emphasises protecting the crop during establishment.',
        },
        {
          type: 'list',
          items: [
            'Use row covers or similar physical barriers during the vulnerable seedling stage',
            'Time planting to avoid peak adult emergence where local patterns are known',
            'Conserve parasitic wasps and flies and predatory natural enemies',
            'Manage crop residue and weedy hosts that can support overwintering adults',
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
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'radish' },
    { type: 'crop', slug: 'eggplant' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'colorado-potato-beetle' },
    { type: 'pest', slug: 'cutworms' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Found worldwide on brassica and other vegetable crops; species present, generation number, and seasonal timing vary by region.',
  climateContext:
    'Adult activity and feeding intensity increase with warm, sunny conditions, and damage is often worse on stressed seedlings during dry spells.',
  limitations: [
    'This is a general overview of a large subfamily of leaf beetles, not species-level guidance for a specific crop or region.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Seedling protection and monitoring guidance',
    },
    {
      sourceId: 'psu-extension',
      citedFor: 'Field scouting and cultural management context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Flea Beetles',
    description:
      'Flea beetles explained: shot-hole leaf damage, jumping-beetle biology, seedling vulnerability in brassicas, monitoring, and management principles.',
    keywords: [
      'flea beetles',
      'Chrysomelidae',
      'shot-hole damage',
      'brassica pest',
    ],
  },
  structuredData: { article: true },
};
