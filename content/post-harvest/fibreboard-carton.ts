import type { PostHarvestContent } from '@/types/content';

export const fibreboardCarton: PostHarvestContent = {
  id: 'post-harvest-fibreboard-carton',
  slug: 'fibreboard-carton',
  contentType: 'post-harvest',
  title: 'Fibreboard Carton',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: [
    'Corrugated carton',
    'Corrugated fibreboard box',
    'Produce carton',
    'Telescopic carton',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'The corrugated fibreboard carton is the default package of the fresh produce trade. It carries the load through its vertical walls, is printable and recyclable, and loses much of its strength when it gets wet or stands in humid cold storage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A fibreboard carton is a box made from corrugated board: one or more fluted layers glued between flat liners. The flutes are what make it work. Stood on end, they act as a dense array of tiny columns, giving a structure made of paper a compression strength out of all proportion to its weight — which is why a stack of cartons can carry a pallet load of fruit several boxes high without the fruit inside carrying any of it.',
    },
    {
      type: 'paragraph',
      text: 'That last point is the one that governs everything else about the carton, and it is where most carton failures originate. The package is not a container that happens to be strong; it is a structural member of a stack. It is designed on the assumption that the load travels down through its four vertical walls and its corners. Anything that interrupts that path — a vent hole in the wrong place, a box overhanging its pallet, a stack that is misaligned so that the wall above lands on the panel below instead of the corner — removes strength that the design assumed was there, and the box collapses onto the produce it was carrying.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'A box of corrugated board: fluted layers glued between flat liners',
    },
    {
      label: 'Where the strength is',
      value:
        'In the vertical walls and corners; the contents should carry nothing',
    },
    {
      label: 'Suits',
      value:
        'Fruit, vegetables, and dry produce moving through graded, palletised trade',
    },
    {
      label: 'Main advantages',
      value: 'Light, printable, stackable, cheap per trip, and recyclable',
    },
    {
      label: 'Main weakness',
      value: 'It loses compression strength as it absorbs moisture',
    },
    {
      label: 'The design conflict',
      value:
        'Vents are needed for cooling, and every vent removes wall strength',
    },
    {
      label: 'Reuse',
      value: 'Single-trip by design; it is recycled rather than returned',
    },
  ],
  sections: [
    {
      id: 'the-stack-not-the-box',
      heading: 'The unit is the stack, not the box',
      body: [
        {
          type: 'paragraph',
          text: 'A carton on its own is nearly meaningless. Cartons are specified against the height of the stack they will sit under, the duration of that stacking, the humidity it will happen in, and the handling it will receive on the way. A box that is entirely adequate for a two-day road trip at the bottom of a short stack will fail under a tall pallet in a humid cold store held for weeks — with nothing about the box having changed.',
        },
        {
          type: 'paragraph',
          text: 'Compression failure is also progressive rather than instantaneous. Board under sustained load creeps: it deforms slowly over time, so a stack that was stable when built can settle and buckle days later, in a store or a container, with no new load applied. This is why "it held when we loaded it" is not evidence that a carton specification is right, and why the failures show up at the destination rather than at the packhouse.',
        },
      ],
    },
    {
      id: 'water',
      heading: "Water: the carton's standing problem",
      body: [
        {
          type: 'paragraph',
          text: 'Corrugated board is paper, and paper is hygroscopic. It takes up moisture from humid air, and as it does its fibres soften and the structure loses a large part of its compression strength. This is not an edge case in produce handling — it is the normal condition. Fresh produce is stored cold and humid precisely because the produce needs it, and the carton is standing in that atmosphere for the entire time.',
        },
        {
          type: 'paragraph',
          text: 'Direct wetting is worse and more common than it should be: condensation on cartons brought from cold store into warm air, melting ice in top-iced packs, drips in a container, produce packed wet after washing. The board can go from structural to soft, and a stack that was fine becomes a hazard.',
        },
        {
          type: 'paragraph',
          text: "The trade responds with wet-strength treatments and moisture-resistant coatings, and they work — but they complicate the end of the carton's life. A plain fibreboard carton is among the easiest packages to recycle; a wax-impregnated one has historically been difficult or impossible to recycle and has often gone to landfill. Newer coatings are designed to keep recyclability, and where a carton sits on that spectrum is a genuine environmental question about a specific carton, not about cartons in general.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A wet carton is not a weak carton — it is a failed one',
          text: "Compression strength falls substantially as fibreboard takes up moisture, and stacks that were stable when dry can collapse. Falling and collapsing loads are a serious workplace hazard, and stack stability in humid or wet conditions is a matter for the facility's own risk assessment.",
        },
      ],
    },
    {
      id: 'the-vent-conflict',
      heading: 'Vents against strength: an unavoidable conflict',
      body: [
        {
          type: 'paragraph',
          text: 'Produce in a carton is respiring and generating heat, and forced-air cooling works by pulling cold air through the package. Neither is possible without vent holes. But every hole cut in a wall removes material from the exact structure that carries the stack load, and holes near the corners — where the strength is concentrated — cost disproportionately more than holes in the middle of a panel.',
        },
        {
          type: 'paragraph',
          text: 'So carton design for fresh produce is a negotiation with no clean answer: enough open area, positioned to give an unobstructed path through the whole pallet, without taking so much material out of the walls that the stack fails. It gets harder still because vents only help if they line up. Cartons stacked so that the vents of one box face the solid panel of the next produce a pallet that is, aerodynamically, a sealed block — the air goes round it, the centre stays warm, and the vents that cost strength delivered nothing. Vent alignment is a stacking-pattern property, not a box property, which means a well-designed carton can be defeated entirely by how it is palletised.',
        },
      ],
    },
    {
      id: 'why-it-won',
      heading: 'Why the carton dominates anyway',
      body: [
        {
          type: 'list',
          items: [
            'It is light, so it costs little to ship and adds little to the freight of the produce inside it.',
            'It is cheap enough per trip to be discarded, which removes the whole problem of return logistics that returnable packaging creates.',
            'It is a printable surface, and in a self-service retail market the package is the brand, the labelling, and the traceability carrier all at once.',
            'It is made to order in any dimension, so a grower can have a package that fits their produce rather than fitting produce to a package.',
            'It is clean by construction: a new carton has never held anything, so there is no cleaning step and no cross-contamination history to manage.',
            'It is widely recyclable through established paper streams, and it is made substantially from recycled fibre to begin with.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last two points are what the carton offers against its main structural rival, the returnable plastic crate, and they are not trivial. The comparison is genuinely close, and it turns on the shape of the supply chain rather than on the merits of the materials: a short, closed loop between known parties favours a returnable crate, while a long, one-way, fragmented export chain — where nothing is coming back and hygiene history cannot be verified — favours a carton that is used once and recycled.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit', 'vegetable', 'nut'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
  ],
  measurableInputs: [
    'Board grade and construction specified for the pack',
    'Vent open area and vent position on each face',
    'Fill weight and how the produce is arranged inside',
    'Expected stack height, duration, and storage humidity',
  ],
  measurableOutputs: [
    'Compression strength of the carton, and its retention at storage humidity',
    'Airflow achieved through a palletised stack',
    'Rate of carton failure and stack collapse in the chain',
    'Produce damage attributable to package collapse or to compression',
    'Recyclability of the used carton in the destination market',
  ],
  qualityEffects: [
    'Transfers stack load through its walls so the produce carries none, preventing compression bruising',
    'Allows forced-air cooling through the pack where vents are adequate and aligned',
    'Fails progressively under sustained load in humid conditions, letting the stack settle onto the produce',
    'Protects against impact and abrasion far less well than a rigid crate does',
    'Provides a printable surface carrying grade, origin, and traceability information',
  ],
  environmentalContext:
    'Fibreboard is made largely from recycled fibre and is widely recyclable where it is not coated, which gives it a strong end-of-life position among single-use packages. Wax and other moisture-resistant treatments cut against this, historically making treated cartons unrecyclable. Its single-trip nature means the material burden repeats with every consignment, which is the core of the environmental argument against it and in favour of returnable systems — an argument that depends heavily on how far and how reliably the returnable alternative actually travels back.',
  safetyLimitations: [
    "Collapsing stacks are a workplace hazard. Stack stability in humid, wet, or long-duration storage is a matter for the facility's own risk assessment and handling procedures.",
    'Materials in contact with food are subject to jurisdiction-specific food-contact regulation, which applies to board, coatings, adhesives, and inks; recycled fibre content raises specific questions in some jurisdictions.',
    'No board grade, vent area, stack height, or compression specification is given here; these are set by packaging specification, buyer requirement, and the conditions of the specific chain.',
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'mango' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Produce packaging, carton compression, and forced-air cooling through packages',
    },
    {
      sourceId: 'fao',
      citedFor: 'Packaging materials and containers in post-harvest handling',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Fresh produce packaging and cooling context',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Produce packaging and packhouse handling context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global and dominant in graded, palletised fresh-produce trade. Food-contact rules for board, coatings, and inks, and the availability of fibreboard recycling, are jurisdiction-specific.',
  limitations: [
    'No board grade, vent specification, stack height, or compression value is given here; these are set by packaging specification and by the requirements of the specific chain.',
    'Compression strength depends on humidity, load duration, stacking alignment, and vent placement together; a carton specification is meaningless without the conditions it was specified for.',
    'A well-designed carton can be defeated by palletisation: misaligned vents block airflow through the pallet regardless of the vent area cut into the box.',
    'The environmental comparison with returnable packaging depends on trip distance, return rate, and washing burden, and does not resolve in favour of either in general.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fibreboard Cartons: Strength, Vents, and Water',
    description:
      'How corrugated produce cartons carry load through their walls, why every cooling vent costs strength, and why humid cold storage weakens the whole stack.',
    keywords: [
      'fibreboard carton',
      'corrugated box produce',
      'carton compression strength',
      'vent alignment',
      'produce packaging',
    ],
  },
  structuredData: { article: true },
};
