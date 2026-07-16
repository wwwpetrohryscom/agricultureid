import type { PostHarvestContent } from '@/types/content';

export const juteSack: PostHarvestContent = {
  id: 'post-harvest-jute-sack',
  slug: 'jute-sack',
  contentType: 'post-harvest',
  title: 'Jute Sack',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: ['Gunny bag', 'Hessian sack', 'Burlap bag', 'Jute bag'],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'The jute sack is a woven bag of natural bast fibre. It breathes, it grips in a stack, and it rots away when discarded. It also weakens when damp, sheds fibre, harbours insects in its weave, and can taint the crop with the oil used to spin it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A jute sack is woven from the bast fibre of the jute plant, and it is the traditional bag of the global commodity trade — the vessel of coffee, cocoa, grain, and pulses for well over a century. Its persistence in an era of cheap synthetics is not sentiment. It has a set of properties that are genuinely hard to reproduce, and for some commodities they are close to non-negotiable.',
    },
    {
      type: 'paragraph',
      text: 'The property that matters most is that jute is a hygroscopic natural fibre in a relatively open weave, so the sack participates in moisture exchange rather than obstructing it. A bag of coffee or cocoa is not inert cargo: it is biological material that continues to equilibrate with the air around it through a long sea voyage and a long warehouse life. A package that lets moisture move keeps that lot in conversation with its environment. A package that does not lets moisture accumulate wherever it happens to be, which is how a bag arrives with a mouldy patch that was not there when it was filled.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'A sack woven from jute bast fibre, in a relatively open weave',
    },
    {
      label: 'Defining property',
      value:
        'It breathes: moisture exchanges through the fabric rather than being trapped',
    },
    {
      label: 'Traditional commodities',
      value:
        'Coffee, cocoa, grain, pulses, and other bagged tropical commodities',
    },
    {
      label: 'Handling advantage',
      value:
        'Rough fibre grips, so bags stay put in a stack instead of sliding',
    },
    {
      label: 'End of life',
      value:
        'Renewable, biodegradable, and compostable — it rots rather than persisting',
    },
    {
      label: 'Contamination risk',
      value:
        'Batching oil used in spinning can taint absorbent crops; food-grade jute exists for this',
    },
    {
      label: 'Weaknesses',
      value:
        'Weakens when damp, sheds fibre, and the weave shelters storage insects',
    },
  ],
  sections: [
    {
      id: 'breathing',
      heading: 'Why breathability is not a minor feature',
      body: [
        {
          type: 'paragraph',
          text: 'Grain, coffee, and cocoa in storage are always trying to reach equilibrium with the air around them, and the air around them changes — day to night, hold to dock, tropics to temperate port. In a permeable sack this exchange happens gradually and across the whole surface, so the contents track their environment and no part of the bag becomes a moisture trap.',
        },
        {
          type: 'paragraph',
          text: 'Put the same lot in a barrier package that is not fully sealed and the behaviour changes for the worse. Moisture that enters, or that the lot itself releases, has no easy way out. It migrates to whichever surface is coolest — the wall of a container, the shaded side of a stack — and condenses there. The result is the classic container-sweat spoilage pattern: a consignment that is perfectly sound in the middle with mouldy bags around the outside, at an average moisture that was entirely acceptable at loading.',
        },
        {
          type: 'paragraph',
          text: 'The distinction that resolves the apparent contradiction with sealed storage is intent. Hermetic storage works because it is genuinely, deliberately, and completely sealed: the lot is isolated, the atmosphere inside is allowed to deplete, and moisture cannot enter. A woven barrier bag is not sealed; it is merely resistant. Full sealing is a sound strategy and full breathability is a sound strategy, and the position between them — partial obstruction — is where the trouble is. Jute sits firmly at the breathable end and does so honestly.',
        },
      ],
    },
    {
      id: 'the-oil',
      heading: 'The batching oil problem',
      body: [
        {
          type: 'paragraph',
          text: 'Jute fibre is stiff and brittle and cannot be spun dry, so it is softened before spinning with a batching oil. Historically that oil was a mineral oil, and this produced one of the better-documented packaging contamination stories in the commodity trade: hydrocarbons migrating from the sack into the contents. Cocoa and coffee are unusually vulnerable, because fat-rich, aromatic commodities readily take up hydrocarbons and hold onto them, and the resulting taint is not removable and can be detected in the finished product.',
        },
        {
          type: 'paragraph',
          text: 'The trade\'s response was food-grade jute — sacks made with batching oils acceptable for food contact — and buyer specifications that require it for sensitive commodities. This is why "jute sack" is not a sufficient specification for a coffee or cocoa contract, and why a bag that looks identical to the correct one may be entirely wrong for the cargo. Which oils are permitted, and the limits that apply, are set by food-contact regulation and by industry specifications for the commodity, not by the sack\'s appearance.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Not all jute is food-grade jute',
          text: 'Sacks made with non-food-grade batching oil can transfer mineral hydrocarbons into fat-rich and aromatic commodities, causing an irreversible taint. Requirements for food-grade jute are set by food-contact regulation and by commodity-specific trade specifications; the sack itself gives no visual indication of which kind it is.',
        },
      ],
    },
    {
      id: 'the-honest-weaknesses',
      heading: 'What the sack does badly',
      body: [
        {
          type: 'list',
          items: [
            'It weakens when damp and, being an organic material, it eventually rots. The property that makes it compostable at end of life makes it degradable during use, and a wetted sack can fail when lifted.',
            'It sheds. Loose fibre works free into the contents, and jute fibre in a food lot is foreign matter — a particular problem where the crop is not further cleaned.',
            'Its weave harbours insects. Rough natural fabric with a coarse structure gives storage pests places to shelter and lay, so a reused sack can infest a clean lot, and the sack itself needs to be treated as a pest reservoir rather than as inert packaging.',
            'It is heavy and expensive relative to synthetic alternatives — several times the cost of a woven polypropylene sack of the same capacity in most markets, which is a decisive difference at the volumes commodity trade works in.',
            'It offers no barrier at all: moisture, odours, and pests move through it in both directions. That is the same property as breathability, seen from the other side.',
          ],
        },
        {
          type: 'paragraph',
          text: "The insect point deserves emphasis because it is often mistaken for an argument for synthetics. Storage insects chew through woven polypropylene readily too — neither sack is a barrier, and bagged storage of any woven kind is not a pest control strategy. The difference is that jute's weave provides harbourage as well as passage, which matters most when sacks are reused, as they widely are.",
        },
      ],
    },
    {
      id: 'the-comparison',
      heading: 'Jute against woven polypropylene, honestly',
      body: [
        {
          type: 'paragraph',
          text: 'The choice between the two is one of the most consequential packaging decisions in commodity agriculture, and it is not close on every axis — it is decisively different on different axes, which is why both persist.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Where jute wins',
              description:
                'Moisture exchange, and therefore the avoidance of condensation spoilage in long, variable-climate storage; stack stability, because rough fibre grips where polypropylene slides; end-of-life, because it biodegrades rather than fragmenting into persistent microplastics; and market position, because premium coffee and cocoa buyers specify it.',
            },
            {
              term: 'Where polypropylene wins',
              description:
                'Cost, by a wide margin; strength for its weight; resistance to rot and damp; and freedom from a batching-oil taint risk.',
            },
            {
              term: 'What decides it',
              description:
                'How long the lot will sit, how variable the climate on its journey is, how absorbent and aromatic the commodity is, whether the buyer specifies, and what the packaging costs relative to the value of the cargo.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The result is a fairly stable division. High-value, aromatic, fat-rich, long-transit commodities where taint and condensation are expensive — coffee, cocoa — stay in jute, frequently by contract. Bulk staples moving shorter distances at lower unit value, where cost dominates and a taint risk is not material, have moved almost entirely to woven polypropylene.',
        },
      ],
    },
  ],
  applicableCommodityClasses: [
    'beverage-crop',
    'cereal-grain',
    'pulse',
    'fibre',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'chickpeas' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
  ],
  measurableInputs: [
    'Fabric weight and weave openness',
    'Batching-oil type and its food-grade status',
    'Sack condition and reuse history',
    'Contents moisture at filling (meter)',
    'Storage and transit humidity the sack will experience',
  ],
  measurableOutputs: [
    'Moisture of the contents through storage, and its uniformity across a stack',
    'Mineral-hydrocarbon residues in the contents, against the applicable limits',
    'Loose fibre reporting as foreign matter in the lot',
    'Insect infestation associated with sacks and with sack reuse',
    'Sack failure rate in handling',
  ],
  qualityEffects: [
    'Allows moisture exchange, reducing localised condensation and mould in variable-climate transit',
    'Can transfer mineral-hydrocarbon taint to fat-rich and aromatic commodities where non-food-grade oil was used',
    'Sheds fibre into the contents as foreign matter',
    'Provides harbourage for storage insects, particularly in reused sacks',
    'Grips in a stack, reducing the risk of slipping loads',
  ],
  environmentalContext:
    'Jute is an annually renewable crop grown mainly in the Ganges delta, and the sack is biodegradable and compostable at end of life — it rots rather than persisting or fragmenting. That end-of-life position is its clearest environmental advantage over woven polypropylene, and it is a substantial one. Against that, jute cultivation and retting have their own water and effluent burdens, and the sack is heavier to freight than its synthetic equivalent.',
  safetyLimitations: [
    'Batching oils used in jute processing can migrate into the contents; permitted oils and residue limits are set by jurisdiction-specific food-contact regulation and commodity trade specifications, none of which are stated here.',
    "Reused sacks are a route for storage insects and for cross-contamination between lots; their treatment is a matter for the facility's pest-management and food-safety arrangements.",
    'A woven sack is not a barrier or a hermetic package and provides no protection against moisture ingress, pests, or odours; it must not be relied on as one.',
    'Manual handling of filled sacks is a musculoskeletal injury risk governed by occupational-safety regulation, and sack mass limits are set by that regulation rather than by packaging practice.',
  ],
  connections: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'cocoa' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'jute' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Bagged storage of commodities and jute packaging in post-harvest handling',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Mineral hydrocarbon contamination of food from packaging materials',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Bagged storage, sack reuse, and storage-pest harbourage',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Post-harvest handling and bagged storage of tropical commodities',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global in commodity trade, produced mainly in South Asia. Retained by contract for coffee and cocoa in most markets; largely displaced by woven polypropylene for lower-value bulk staples.',
  limitations: [
    'No fabric weight, moisture limit, residue limit, or sack mass is given here; these are set by trade specifications, food-contact regulation, and occupational-safety regulation.',
    'Food-grade and non-food-grade jute are visually indistinguishable; the batching oil is a specification matter, not something that can be inspected.',
    'Breathability is not protection. A jute sack resists nothing: moisture, pests, and odours pass in both directions, and it is not a substitute for a controlled store.',
    'The comparison with woven polypropylene does not resolve in general; it depends on transit duration, climate variability, commodity sensitivity, and the value of the cargo relative to the packaging.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Jute Sacks: Breathability, Taint, and Trade-Offs',
    description:
      'Why coffee and cocoa still ship in jute: moisture exchange prevents condensation spoilage, and batching oil, shedding, and insect harbourage are the price.',
    keywords: [
      'jute sack',
      'gunny bag',
      'hessian',
      'food grade jute',
      'batching oil taint',
    ],
  },
  structuredData: { article: true },
};
