import type { PostHarvestContent } from '@/types/content';

export const punnetClamshell: PostHarvestContent = {
  id: 'post-harvest-punnet-clamshell',
  slug: 'punnet-clamshell',
  contentType: 'post-harvest',
  title: 'Punnet and Clamshell',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: [
    'Punnet',
    'Clamshell',
    'Berry basket',
    'Rigid retail pack',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'The punnet is a small rigid pack that carries a retail quantity of soft fruit and takes the load off the fruit itself. It works — soft fruit is only sold at distance because of it — and it is the packaging most exposed to the charge of using material to sell air.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A punnet, or clamshell, is a small rigid container holding a retail quantity of produce, usually vented, usually transparent, and usually with an integral hinged lid. It exists for one class of problem: fruit that cannot support its own weight. A strawberry at the bottom of a deep container is crushed by the strawberries above it, and no amount of external packaging helps, because the load is coming from the fruit itself.',
    },
    {
      type: 'paragraph',
      text: "The punnet's answer is to break the load into layers so shallow that self-weight never accumulates, and to make each layer a rigid box that carries the stack around the fruit rather than through it. Everything else about it follows: it is small because self-loading must be limited; it is rigid because it must carry the pack above it; it is transparent because the fruit cannot be handled at the shelf; and it is vented because the fruit inside is respiring and perishable. This is a package whose form is almost entirely dictated by the physiology of what it holds — and it is simultaneously the most criticised package in the produce aisle.",
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'A small rigid vented pack, usually transparent, with an integral lid',
    },
    {
      label: 'The problem it solves',
      value:
        'Soft fruit crushing itself: it caps the depth of fruit bearing on fruit',
    },
    {
      label: 'How it protects',
      value:
        'Rigid walls carry the stack load around the fruit, not through it',
    },
    {
      label: 'Why transparent',
      value:
        'The fruit is bought on appearance and must not be handled to be assessed',
    },
    {
      label: 'Why vented',
      value:
        'Berries respire hard and must be cooled through the pack after packing',
    },
    {
      label: 'The charge against it',
      value:
        'High material use for a small quantity, and it displaces loose sale',
    },
    {
      label: 'The defence',
      value:
        'Soft fruit spoiled in the chain wastes more than the pack that prevented it',
    },
  ],
  sections: [
    {
      id: 'the-self-loading-problem',
      heading: 'Fruit that cannot carry fruit',
      body: [
        {
          type: 'paragraph',
          text: 'Most produce packaging problems concern loads from outside — the stack above, the impact of a drop, the vibration of a road. Soft fruit has a problem no external package addresses: the fruit at the bottom is being crushed by the fruit on top of it, and the deeper the container, the worse it gets. A ripe strawberry, raspberry, or blackberry has very little structural strength; it is a bag of water with a thin skin, and it bruises under quite modest sustained pressure. Once bruised, the tissue leaks, and leaking fruit is a substrate that grey mould and other decay organisms colonise rapidly — which then spreads to neighbours by contact.',
        },
        {
          type: 'paragraph',
          text: "Depth is therefore the variable that matters, and the punnet's small size is not a marketing decision about portions but a structural limit. It is shallow enough that the fruit at the bottom carries only a little fruit above it. Then, because punnets must be stacked to be shipped economically, the pack has to carry that stack itself — hence rigid walls and a lid that bears on the walls rather than on the fruit. The design is a chain of consequences from a single physiological fact.",
        },
        {
          type: 'paragraph',
          text: 'That fact is also why soft fruit is available at all outside its immediate growing area. Berries were historically local and seasonal because they could not survive the journey. The punnet, together with prompt cooling and an intact cold chain, is what changed that — and it is worth being clear that the package is a genuine enabling technology rather than a marketing accretion.',
        },
      ],
    },
    {
      id: 'vents-and-the-cold-chain',
      heading: 'The pack has to let the cold in',
      body: [
        {
          type: 'paragraph',
          text: "Berries respire hard and deteriorate quickly, so they must be cooled fast after picking, and by the time they are cooled they are already in the punnet. The cold air therefore has to get through the pack to reach the fruit — through the punnet's vents, through the vents of the carton the punnets sit in, and through an aligned path in the pallet the cartons form. Each of those is a separate decision made by a different party, and the chain of them is only as good as its worst link.",
        },
        {
          type: 'paragraph',
          text: "A punnet with inadequate vents, or a punnet whose vents are covered by the label, or punnets packed so their vents face the solid wall of the carton, produces fruit that never cools properly inside a system that reports itself as working. This is the same alignment problem that governs palletisation, one scale down, and it is why punnet venting is specified rather than left to the moulder's discretion.",
        },
        {
          type: 'paragraph',
          text: 'Venting also has a second job: berries lose water and transpire, and a sealed pack accumulates condensation, which sits on the fruit surface and is precisely what decay needs. The pack has to breathe enough to let that moisture out while retaining enough humidity that the fruit does not shrivel — a narrow target that the vent pattern, not the material, has to hit.',
        },
      ],
    },
    {
      id: 'the-material-argument',
      heading: 'The material charge, taken seriously',
      body: [
        {
          type: 'paragraph',
          text: 'The punnet is the single most visible target in the packaging debate, and the criticisms are not frivolous. It uses a comparatively large amount of rigid material for a small quantity of fruit. It is frequently made of a plastic that is technically recyclable and practically not, because it is light, food-contaminated, often a different polymer from the bottle stream, and often labelled or sleeved with a second material that defeats sorting. It displaces loose sale, forcing a fixed quantity on a shopper who wanted a handful. And it is unquestionably used, on some products, where the fruit does not need it — a rigid clamshell around robust produce is packaging as presentation, and that use has no physiological defence at all.',
        },
        {
          type: 'paragraph',
          text: 'The defence is narrower than its users usually claim and stronger than its critics usually allow. It is that soft fruit which fails in the chain wastes everything that went into producing it — the land, the water, the labour, the cold chain — and that waste is far larger than the material in the pack that prevented it. For genuinely fragile produce this argument holds, and the alternative is not unpackaged berries but no berries. For firm produce in a clamshell it does not hold at all.',
        },
        {
          type: 'paragraph',
          text: "Which is to say the answer is discriminating rather than general. The honest question is not whether punnets are good but which produce actually needs one — and the trade's practice of putting robust items in rigid packs for shelf appearance is what makes the whole category hard to defend, including for the fruit that genuinely depends on it.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The pack cannot repair what arrived damaged',
          text: 'A punnet limits the load the fruit bears and lets it be cooled; it does not slow decay in fruit already bruised at picking, already warm, or already infected in the field. Its benefit is conditional on prompt cooling and an intact cold chain, and without those it protects fruit that is deteriorating anyway.',
        },
      ],
    },
    {
      id: 'materials-and-alternatives',
      heading: 'What they are made of, and what is replacing them',
      body: [
        {
          type: 'list',
          items: [
            'Clear rigid plastic is the dominant material because it is stiff, transparent, mouldable with integral vents and hinges, and cheap; its weakness is entirely at end of life.',
            'Moulded pulp punnets are compostable and recyclable in paper streams, and they trade away transparency — which matters commercially, because the fruit then cannot be seen.',
            'Cardboard punnets with a film window attempt a compromise, and create a mixed-material pack that is harder to recycle than either component alone.',
            'Recycled-content plastic addresses the material burden but not the sorting problem, and food-contact rules on recycled polymer are jurisdiction-specific.',
            'Some markets have moved firm produce out of rigid packs entirely and back to loose sale, which is the only intervention that removes the material rather than substituting it.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The transparency question is the sharpest of these. A punnet is transparent because the shopper must assess the fruit without touching it — and handling soft fruit at the shelf damages it, so the transparency is itself a damage-prevention measure. An opaque pulp punnet solves the material problem and reintroduces the handling problem, and the fruit trade has not resolved that tension.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit', 'vegetable'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
  ],
  measurableInputs: [
    'Pack depth, and the depth of fruit bearing on fruit',
    'Vent open area and vent position, including any obstruction by labels',
    'Pack material and its recyclability in the destination market',
    'Fill weight per pack',
    'Compression strength of the pack, for the punnets stacked above it',
  ],
  measurableOutputs: [
    'Cooling rate achieved at the centre of the pack',
    'Bruising and crushing in the bottom layer of fruit',
    'Decay incidence, particularly grey mould, over shelf life',
    'Condensation and free water inside the pack',
    'Packaging mass per unit of fruit carried',
  ],
  qualityEffects: [
    'Limits pack depth so that fruit at the bottom bears little fruit above it',
    'Carries stack load through rigid walls and lid rather than through the fruit',
    'Allows cooling through the pack, if vents are adequate, unobstructed, and aligned',
    'Prevents the shelf handling that damages soft fruit, by letting it be assessed through the wall',
    'Accumulates condensation and promotes decay where venting is inadequate',
  ],
  environmentalContext:
    "The punnet is where the packaging debate is most acute, because its material use per unit of fruit is high and its recyclability is poor in practice — light, food-contaminated, frequently a minor polymer stream, and often defeated by a label or sleeve of a different material. The counter-argument is that fragile fruit lost in the chain wastes far more than the pack that saved it, and that argument is sound for genuinely fragile produce and worthless for the firm produce that is also sold in clamshells. The category's indiscriminate use is what makes its necessary use hard to defend.",
  safetyLimitations: [
    'Materials in food contact are subject to jurisdiction-specific food-contact regulation, which applies to the polymer, any recycled content, and any coating, label, or print.',
    'A vented pack offers no barrier and no atmosphere control; where a modified atmosphere is intended, that is a different package and is governed by its own requirements.',
    'No pack size, vent specification, fill weight, or material is given here; these are set by buyer specification and by commodity-specific packaging guidance.',
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  connections: [
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'raspberry' },
    { type: 'crop', slug: 'grape' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Soft fruit packaging, compression damage, and cooling through retail packs',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Retail packaging of perishable produce in post-harvest handling',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Soft fruit post-harvest handling and packaging guidance',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Berry post-harvest quality and packaging context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global in organised retail soft-fruit trade. Material choices, recycling infrastructure, and regulatory pressure on single-use packaging differ substantially between markets.',
  limitations: [
    'No pack dimension, vent specification, fill weight, or material specification is given here; these are set by buyer specification and commodity-specific packaging guidance.',
    "The pack's benefit is conditional on prompt cooling and an intact cold chain; it does not slow decay in fruit that was bruised, warm, or infected before packing.",
    'The environmental case for the punnet holds only for produce that genuinely cannot survive without it, and does not extend to firm produce packed in rigid packs for presentation.',
    'Material substitutions trade one problem for another — pulp packs lose the transparency that prevents shelf handling, and mixed-material packs are harder to recycle than either component.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Punnets and Clamshells: Fruit That Crushes Itself',
    description:
      'Why soft fruit needs a small rigid pack: depth is the enemy, rigid walls carry the stack around the fruit, and where the material charge actually lands.',
    keywords: [
      'punnet',
      'clamshell packaging',
      'soft fruit packaging',
      'berry pack venting',
      'compression damage',
    ],
  },
  structuredData: { article: true },
};
