import type { PostHarvestContent } from '@/types/content';

export const meshBag: PostHarvestContent = {
  id: 'post-harvest-mesh-bag',
  slug: 'mesh-bag',
  contentType: 'post-harvest',
  title: 'Mesh Bag',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: ['Net bag', 'Leno bag', 'Onion sack', 'Netted sack'],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'A mesh bag is an open net that contains produce while barely enclosing it. That is the point: for cured bulbs and roots that must keep breathing and stay dry, maximum airflow matters more than protection, and the shopper can see what they are buying.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A mesh bag is a loosely knitted or woven net — commonly a leno weave or an extruded net — that holds produce together with almost no material and almost no enclosure. Judged as packaging it looks like a failure: it does not cushion, it does not exclude anything, it does not carry a stack, and it does not protect from impact. Every one of those omissions is deliberate, and the bag is one of the better examples in post-harvest work of a package designed around what the commodity actually needs rather than around the idea of protection.',
    },
    {
      type: 'paragraph',
      text: 'What cured onions, garlic, and similar crops need is air and dryness. They have been through a curing process whose entire purpose was to dry the outer scales and neck into a seal, and the thing that undoes that work is moisture. They also continue to respire, slowly, and generate both heat and water while they do. A package that enclosed them would trap that moisture against the very surface curing had dried. The mesh bag simply does not enclose them: air moves through the pack essentially unimpeded, moisture leaves as fast as it is produced, and the produce stays dry.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'An open knitted or extruded net that contains without enclosing',
    },
    {
      label: 'Why it exists',
      value: 'Maximum airflow and dryness for produce that must keep breathing',
    },
    {
      label: 'Main commodities',
      value:
        'Cured onions, garlic, shallots, some potatoes, citrus, and hard-skinned produce',
    },
    {
      label: 'Retail role',
      value: 'The customer sees the actual produce, not a picture of it',
    },
    {
      label: 'Material use',
      value: 'Very little: it is among the lightest packages per unit carried',
    },
    {
      label: 'What it does not do',
      value: 'Cushion, carry a stack, exclude light, or protect from anything',
    },
    {
      label: 'Light problem',
      value:
        'It offers no shade, and light greens potatoes — a real disqualifier there',
    },
  ],
  sections: [
    {
      id: 'airflow-first',
      heading: 'Designed around respiration, not protection',
      body: [
        {
          type: 'paragraph',
          text: 'Most packaging conversations start from protection and treat ventilation as a concession. Mesh reverses the priority entirely: it starts from airflow and concedes everything else. For the commodities it serves, that is the right way round, because their dominant post-harvest risk is not impact but moisture-driven decay — neck rot and basal rot in bulbs, soft rots generally — and every one of those is favoured by trapped humidity around the produce surface.',
        },
        {
          type: 'paragraph',
          text: 'A cured onion is also mechanically robust in a way a peach is not. It has a dry, tough outer skin, no exposed flesh, and it tolerates being tumbled and pressed to a degree that would destroy soft fruit. So the protection a mesh bag fails to give is protection the commodity does not need, while the airflow it does give addresses the thing that actually kills the crop. This is why the same bag would be an obvious absurdity for strawberries and is entirely correct for onions: the package matches the failure mode.',
        },
      ],
    },
    {
      id: 'seeing-through',
      heading: 'The commercial argument: visibility',
      body: [
        {
          type: 'paragraph',
          text: 'Mesh has a second advantage that has nothing to do with physiology. The customer can see the produce — all of it, not a top layer arranged over an unknown remainder. For commodities sold by the netful rather than the piece, that visibility does real work: sprouting, mould, and soft units are visible through the net, so a bad bag is identified before purchase rather than after.',
        },
        {
          type: 'paragraph',
          text: 'The cost is that a net is a poor advertising surface. It carries a printed band or label rather than a printed face, so the brand has very little space to occupy — which is one reason mesh persists most strongly for commodities sold as commodities, where the produce is the proposition and there is little to say about it.',
        },
      ],
    },
    {
      id: 'what-it-fails-at',
      heading: 'Where mesh is the wrong answer',
      body: [
        {
          type: 'list',
          items: [
            'Anything soft. There is no cushioning and no barrier: units press directly against each other and against whatever the bag is set down on.',
            'Anything that must not be exposed to light. This is decisive for potatoes, which green and accumulate glycoalkaloids on light exposure, and it is why light-excluding packaging is used for potatoes where mesh is used for onions.',
            'Anything needing a controlled internal atmosphere. Mesh is the opposite of modified atmosphere packaging: it guarantees that the atmosphere inside the pack is the atmosphere outside it.',
            'Anything that must be kept clean or contained. Dust, water, and contact with anything nearby all reach the produce freely.',
            'Load-bearing stacks. A bag of nets carries no structure; it slumps, and the produce carries whatever is on top of it.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The pattern is consistent enough to state as a rule of thumb: mesh suits produce that is hard, dry, cured, tolerant of light and handling, and at risk mainly from moisture. Move away from any of those and the bag stops making sense.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mesh is containment, not protection',
          text: 'A mesh bag keeps a quantity of produce together and lets air through it. It provides no cushioning, no barrier, no light exclusion, and no atmosphere control, and it should not be selected on the assumption that a package is inherently protective.',
        },
      ],
    },
    {
      id: 'the-material',
      heading: 'Material: very little of something persistent',
      body: [
        {
          type: 'paragraph',
          text: 'Most mesh bags are polyethylene or polypropylene net, and they are extraordinarily material-efficient — a net is mostly holes, so the mass of packaging per unit of produce is among the lowest of any package. That is a genuine environmental advantage and it is often overlooked, because a plastic net reads as plastic rather than as a small quantity of it.',
        },
        {
          type: 'paragraph',
          text: 'The end of life is less favourable. Fine plastic net is a difficult recycling stream: it is light, it tangles in sorting machinery, it is contaminated with skins and soil, and it is frequently rejected from kerbside collection for exactly those reasons. It also fragments, and the same UV degradation that eventually destroys a discarded net is what turns it into persistent fragments. Cotton and other natural-fibre nets exist and biodegrade, and they cost more; where they are used, it is usually a market positioning decision rather than a technical one.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['vegetable', 'root-tuber', 'fruit'],
  applicableCommodities: [
    { type: 'commodity', slug: 'dry-bulb-onions' },
    { type: 'commodity', slug: 'garlic-bulbs' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'ware-potatoes' },
  ],
  measurableInputs: [
    'Mesh aperture and net material',
    'Fill weight per bag',
    'Curing status and surface dryness of the produce at filling',
    'Storage humidity the pack will sit in',
    'Light exposure at the point of sale, where the commodity is light-sensitive',
  ],
  measurableOutputs: [
    'Airflow achieved through the pack',
    'Surface moisture and condensation on the produce in storage',
    'Incidence of neck rot, basal rot, and other moisture-driven decay',
    'Greening in light-exposed light-sensitive produce',
    'Packaging mass per unit of produce carried',
  ],
  qualityEffects: [
    'Allows near-unimpeded airflow, keeping cured surfaces dry and removing respiratory moisture',
    'Prevents the trapped humidity that drives neck and basal rots in bulbs',
    'Offers no cushioning, so units press and rub directly against one another',
    'Excludes no light, causing greening in light-sensitive produce such as potatoes',
    'Allows defects to be seen through the pack before purchase',
  ],
  environmentalContext:
    'Mesh uses less packaging material per unit of produce than almost any alternative, which is a real if unglamorous advantage. Its weakness is at end of life: fine plastic net is widely rejected from recycling streams because it is light, tangles in sorting equipment, and arrives contaminated, so it generally goes to disposal and fragments there. Natural-fibre nets biodegrade and cost more, and their use is usually a positioning choice.',
  safetyLimitations: [
    'Light exposure causes greening and glycoalkaloid accumulation in potatoes; light-excluding packaging and storage are required where the commodity is light-sensitive, and mesh provides no exclusion.',
    'Mesh provides no protection against contamination from dust, water, or contact; hygiene depends entirely on the storage and retail environment.',
    'Materials in food contact are subject to jurisdiction-specific food-contact regulation, which applies to the net polymer and any coating or print on it.',
  ],
  relevantStandards: [
    { type: 'commodity-grade', slug: 'unece-fresh-produce-standards' },
  ],
  connections: [
    { type: 'crop', slug: 'onion' },
    { type: 'crop', slug: 'garlic' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'potato' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'onion-and-garlic-curing' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'potato-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Packaging and ventilated containers in post-harvest handling of bulbs and roots',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Storage and packaging of onions, garlic, and other cured bulb crops',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Onion and potato storage and packaging guidance',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Bulb crop post-harvest handling context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, for cured bulb crops and hard-skinned produce sold by the pack. Availability of net recycling differs widely and is limited in most markets.',
  limitations: [
    'No mesh aperture, fill weight, or storage condition is given here; these are commodity- and market-specific and are set by buyer specification and commodity-specific storage guidance.',
    'Mesh is a containment device, not a protective package: it provides no cushioning, barrier, light exclusion, or atmosphere control, and is unsuitable wherever any of those is needed.',
    'Suitability is narrow. It is right for hard, cured, light-tolerant produce at risk from moisture, and wrong for soft, light-sensitive, or atmosphere-managed commodities.',
    'The low material use per pack and the poor recyclability of fine net pull in opposite directions, and the balance is not resolved here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Mesh Bags: Containment Without Enclosure',
    description:
      'Why cured onions and garlic ship in open nets: airflow and dryness beat protection when moisture is the failure mode, and why the same bag ruins potatoes.',
    keywords: [
      'mesh bag',
      'net bag onions',
      'leno bag',
      'ventilated packaging',
      'potato greening',
    ],
  },
  structuredData: { article: true },
};
