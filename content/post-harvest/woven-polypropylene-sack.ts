import type { PostHarvestContent } from '@/types/content';

export const wovenPolypropyleneSack: PostHarvestContent = {
  id: 'post-harvest-woven-polypropylene-sack',
  slug: 'woven-polypropylene-sack',
  contentType: 'post-harvest',
  title: 'Woven Polypropylene Sack',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: [
    'PP sack',
    'Woven PP bag',
    'Polypropylene bag',
    'Plastic gunny',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    "The woven polypropylene sack is cheap, strong, and rot-proof, and it has taken most of the world's bagged commodity trade on those merits. It is also slippery in a stack, degrades in sunlight, sheds fibrils into the crop, and does not go away.",
  introduction: [
    {
      type: 'paragraph',
      text: "A woven polypropylene sack is made by slitting extruded film into narrow tapes, stretching them so the polymer chains align and the tape becomes strong along its length, and weaving those tapes into fabric. The result is unusually efficient: enormous tensile strength for very little material, at a cost per bag that natural fibre cannot approach. Over a few decades it has displaced jute across most of the world's bagged staple trade, and the displacement was driven overwhelmingly by price.",
    },
    {
      type: 'paragraph',
      text: 'The properties that follow from the material are a mixed inheritance, and they are worth separating carefully, because the sack is often credited with protection it does not provide. Polypropylene does not absorb water, does not rot, and is not eaten by fungi — so the sack survives conditions that destroy jute. But the sack surviving and the contents surviving are different questions, and the tape that will not absorb moisture also will not let it through.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'Fabric woven from stretched, extruded polypropylene tape',
    },
    {
      label: 'Why it won',
      value:
        'Cost, first and foremost; then strength for its weight, and immunity to rot',
    },
    {
      label: 'Moisture behaviour',
      value:
        'The tape is impermeable; exchange happens only through the weave gaps',
    },
    {
      label: 'Laminated versions',
      value:
        'A laminate closes the weave, removing what breathability remained',
    },
    {
      label: 'Handling hazard',
      value:
        'Smooth tape slides: stacks of PP sacks are less stable than jute stacks',
    },
    {
      label: 'Durability limit',
      value:
        'Ultraviolet light degrades polypropylene; sacks stored in sun become brittle',
    },
    {
      label: 'End of life',
      value:
        'Persistent. It fragments into microplastics rather than biodegrading',
    },
  ],
  sections: [
    {
      id: 'the-moisture-question',
      heading: 'The tape does not breathe; the weave does, a little',
      body: [
        {
          type: 'paragraph',
          text: 'This is the point most often got wrong in both directions. A woven polypropylene sack is not a sealed barrier — it is a mesh of impermeable tapes with gaps between them, so air and moisture do pass, through the gaps. Nor is it breathable in the way jute is, because jute exchanges moisture through the fibre itself, over the whole fabric area, and polypropylene does not participate at all. The sack sits in between: partially obstructive.',
        },
        {
          type: 'paragraph',
          text: 'Partial obstruction is the least comfortable place to be. Moisture that enters, or that the contents release, moves out more slowly than it would through a natural fibre, so it has more opportunity to find a cool surface and condense there. In a shipping container crossing climate zones, this produces exactly the localised wet patches and mould that the average moisture at loading gives no warning of. The laminated sack, made by bonding a film to the woven fabric, is worse in this respect and better in others: it keeps out driving rain and dust, and it keeps in whatever moisture the contents brought with them. It is a genuine barrier only if it is genuinely sealed, and a sack with a sewn closure is not sealed.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that a woven polypropylene sack demands more of the drying that precedes it than a jute sack does. A lot that jute would have tolerated by exchanging moisture with the air is, in polypropylene, held at whatever moisture it went in with — and if that moisture was marginal, the sack does not save it. Where a genuine moisture barrier is wanted, the answer is a deliberately sealed hermetic system, not a woven bag.',
        },
      ],
    },
    {
      id: 'the-stack-slides',
      heading: 'Smooth tape, sliding stacks',
      body: [
        {
          type: 'paragraph',
          text: 'Jute is rough, and a stack of jute sacks holds itself together through the friction between bags. Polypropylene tape is smooth, and the same stack of the same shape is markedly less stable — bags slip against one another, tall stacks lean and shed, and loads shift in transit. This is a genuine and underappreciated safety consequence of the material change: a warehouse that stacked jute safely to a given height for decades cannot assume the same height is safe in polypropylene.',
        },
        {
          type: 'paragraph',
          text: "The trade responds with anti-slip treatments, textured weaves, and different stacking patterns, and these help. But the underlying property is the polymer's, and the risk is a real one — collapsing sack stacks injure and kill warehouse workers. Stacking heights, patterns, and the assessment behind them are matters for the facility's own risk assessment under the applicable occupational-safety regulation.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Sack stacks slide and collapse',
          text: "Smooth woven polypropylene has substantially less inter-bag friction than jute, so stack heights and patterns that were stable in natural fibre may not be. Collapsing stacks are a serious injury hazard, and safe stacking is governed by occupational-safety regulation and the facility's own risk assessment, not by packaging choice.",
        },
      ],
    },
    {
      id: 'contamination',
      heading: 'Shedding: the contamination nobody expects',
      body: [
        {
          type: 'paragraph',
          text: 'Cut edges of woven polypropylene fray, and the tape splits lengthwise into fine fibrils. Those fibrils get into the contents. For a food staple this is foreign matter, and in a lot that will not be cleaned again it stays there. For one commodity it is much more serious than that: polypropylene contamination of cotton is a well-known and costly defect, because the fibrils are spun into the yarn, do not take dye as the cotton does, and appear as visible faults in the finished fabric — the fault being discovered a long way downstream, at great expense, from packaging used many steps earlier.',
        },
        {
          type: 'paragraph',
          text: 'Ultraviolet exposure makes the shedding worse and eventually makes the sack fail. Polypropylene degrades under sunlight: sacks stored outdoors, or used season after season in the open, become brittle and disintegrate, and a UV-degraded sack sheds heavily before it breaks. This is the most common failure mode in practice, and it is entirely a function of where the sacks were kept.',
        },
        {
          type: 'paragraph',
          text: 'Recycled content and reuse add a further question. Sacks are widely reused for a second and third crop, often after having held something else entirely — fertiliser, feed, or a chemical — and a sack whose history is unknown is a food-contact material whose suitability is unknown. What may be used in a food-contact sack, including any recycled polymer, is set by food-contact regulation rather than by whether the bag looks clean.',
        },
      ],
    },
    {
      id: 'the-persistence',
      heading: 'The bill that arrives later',
      body: [
        {
          type: 'paragraph',
          text: 'The environmental ledger is where the comparison with jute turns around completely. Polypropylene does not biodegrade. A discarded sack fragments — driven by the same UV degradation that ends its service life — into progressively smaller pieces and ultimately into microplastics, and those persist in soil and water. In producing regions where bagged commodities move in enormous volumes and waste collection is limited, discarded sacks are a visible and accumulating pollution burden.',
        },
        {
          type: 'paragraph',
          text: 'Recycling is possible in principle and awkward in practice. The sacks are contaminated with the crop, with soil, and with whatever else they held; they are geographically dispersed to exactly the places least equipped to collect them; and their value as scrap is low. Reuse is what actually happens, and it is genuine — sacks have long second lives — but it is a deferral rather than a resolution, and it carries the food-contact question with it.',
        },
        {
          type: 'paragraph',
          text: "Against this, honesty requires the other side: polypropylene is light, so it costs less to freight than jute; it is made in small quantities per bag; and it does not rot, so it does not have to be replaced as often. A full comparison is not obvious, and it is not settled by either party's preferred fact.",
        },
      ],
    },
  ],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'oilseed',
    'root-tuber',
    'fibre',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'cowpeas' },
    { type: 'commodity', slug: 'ware-potatoes' },
  ],
  measurableInputs: [
    'Fabric weight and weave density',
    'Whether the sack is laminated, and with what',
    "Ultraviolet stabilisation, and the sack's sun exposure history",
    'Contents moisture at filling (meter)',
    'Reuse history and prior contents, where the sack is reused',
  ],
  measurableOutputs: [
    'Moisture of the contents through storage, and localised wet patches within a stack',
    'Polypropylene fibrils reporting as foreign matter, or as contamination in cotton lint',
    'Sack tensile strength retained after sun exposure',
    'Stack stability and slip incidents in the warehouse',
    'Sack failure rate in handling',
  ],
  qualityEffects: [
    'Protects the contents mechanically at very low cost and does not rot when damp',
    'Obstructs moisture exchange partially, so moisture released by the contents can condense locally',
    'Laminated versions exclude rain and dust but retain internal moisture more strongly still',
    'Sheds fibrils into the contents, which is foreign matter in food and a serious defect in cotton',
    'Slides in a stack, reducing load stability compared with natural fibre',
  ],
  environmentalContext:
    'The sack is light to freight and durable in use, and it uses little material per bag. Its problem is the end: polypropylene does not biodegrade, and discarded sacks fragment under sunlight into microplastics that persist in soil and water — a visible and accumulating burden in producing regions where bagged trade is large and waste collection is limited. Recycling is technically possible but frustrated by crop and soil contamination, by dispersal, and by low scrap value; informal reuse is what happens in practice, and it defers the disposal rather than avoiding it.',
  safetyLimitations: [
    "Smooth woven fabric reduces inter-bag friction and makes sack stacks less stable; safe stacking heights and patterns are governed by occupational-safety regulation and the facility's risk assessment, not by the sack.",
    'Sacks reused after holding fertiliser, feed, or chemicals are food-contact materials of unknown suitability; permitted materials and any recycled content are governed by jurisdiction-specific food-contact regulation.',
    'A woven sack, laminated or not, is not a hermetic package: a sewn closure does not seal, and the sack must not be relied on as a moisture or pest barrier.',
    'Manual handling of filled sacks is a musculoskeletal injury risk governed by occupational-safety regulation; sack mass limits come from that regulation, not from packaging practice.',
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'cotton' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Bagged storage and packaging materials in post-harvest handling',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Contamination of cotton lint by polypropylene packaging materials',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Bagged commodity storage practice and sack reuse context',
    },
    {
      sourceId: 'iita',
      citedFor: 'Bagged storage of grain and pulses in tropical chains',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global and dominant in bagged staple trade. Displaced jute across most bulk commodities on cost; jute is retained largely where buyers specify it for taint-sensitive or long-transit cargo.',
  limitations: [
    'No fabric weight, sack mass, stacking height, or moisture limit is given here; these are set by trade specification, food-contact regulation, and occupational-safety regulation.',
    'The sack is neither breathable nor a barrier. Treating it as either misleads: it obstructs moisture exchange partially, which is the least favourable position for a lot at marginal moisture.',
    'The environmental comparison against jute does not resolve on end-of-life alone; freight weight, service life, and replacement frequency also count, and the balance is not settled here.',
    "Sack reuse is universal in practice and carries a food-contact suitability question that the sack's appearance cannot answer.",
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Woven Polypropylene Sacks: Cheap, Strong, Persistent',
    description:
      'Why PP sacks displaced jute on cost, why partial moisture obstruction is the worst place to be, and what sliding stacks and microplastics cost later on.',
    keywords: [
      'woven polypropylene sack',
      'PP bag',
      'sack stacking stability',
      'polypropylene contamination cotton',
      'bagged storage',
    ],
  },
  structuredData: { article: true },
};
