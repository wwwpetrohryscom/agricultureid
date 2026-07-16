import type { PostHarvestContent } from '@/types/content';

export const plasticCrate: PostHarvestContent = {
  id: 'post-harvest-plastic-crate',
  slug: 'plastic-crate',
  contentType: 'post-harvest',
  title: 'Returnable Plastic Crate',
  postHarvestClass: 'handling',
  processStage: 'field-handling',
  alternativeNames: [
    'RPC',
    'Reusable plastic container',
    'Returnable transit packaging',
    'Plastic field crate',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'The returnable plastic crate is rigid, ventilated, washable, and used many times. Its advantages are real, and they are all conditional on two things a crate cannot supply for itself: it must actually come back, and it must actually be cleaned.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A returnable plastic crate is a moulded, rigid, usually ventilated container designed to be used repeatedly. In its strongest form it goes to the field, receives the crop at picking, travels to the packhouse, and continues to retail without the produce being transferred out of it — so the fruit is handled once instead of at every change of package. Since handling is where mechanical damage comes from, eliminating handling steps eliminates damage in a way no amount of cushioning can.',
    },
    {
      type: 'paragraph',
      text: "It is the standard case for reusable packaging, and it is a good one — but it is easy to overstate, because the crate's advantages are not properties of the crate. They are properties of a system that has to exist around it. A crate is only reusable if it is returned, only hygienic if it is washed, and only economic if the empty leg and the washing cost less than the single-use packages it displaced. Where that system exists, the crate is hard to beat. Where it does not, an RPC is an expensive box that happens to be made of plastic, and possibly a dirty one.",
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value: 'A rigid, ventilated, moulded container designed for many trips',
    },
    {
      label: 'Biggest single benefit',
      value:
        'Field-to-shelf in one package: fewer transfers, so less handling damage',
    },
    {
      label: 'Structural advantage',
      value:
        'Rigid and unaffected by humidity, so it stacks reliably in cold, wet conditions',
    },
    {
      label: 'Condition one',
      value:
        'It must return. An RPC that does not come back is a very costly single-use box',
    },
    {
      label: 'Condition two',
      value:
        'It must be washed between uses, which needs a facility and a verified process',
    },
    {
      label: 'Design feature',
      value:
        'Usually collapsible or nestable so empties travel back at a fraction of the volume',
    },
    {
      label: 'Best fit',
      value:
        'Short, closed loops with known parties and predictable return flows',
    },
  ],
  sections: [
    {
      id: 'the-handling-argument',
      heading: 'The argument that actually carries the weight',
      body: [
        {
          type: 'paragraph',
          text: 'The usual case for RPCs is made on materials and waste, and it is the weaker argument. The stronger one is mechanical. Every time produce is moved from one container to another it is dropped, rolled, or poured, and each of those events is an impact. A conventional chain might tip produce from a picking bag into a field bin, from the bin into the line, and from the line into a carton — three impact opportunities before it leaves the packhouse. Bruises from these transfers do not appear at the time; they develop over the following days and are discovered by the consumer.',
        },
        {
          type: 'paragraph',
          text: 'A crate that goes to the field and continues to the shelf removes those transfers by construction. The produce is placed once and stays put. For soft, easily bruised commodities this is worth more than anything cushioning can achieve, because a bruise avoided is better than a bruise absorbed. The rigid walls help too: unlike fibreboard, the crate does not soften with humidity, so it stacks reliably in cold, wet stores and takes impacts on the container rather than passing them to the fruit.',
        },
      ],
    },
    {
      id: 'the-return-loop',
      heading: 'The empty leg is the whole business',
      body: [
        {
          type: 'paragraph',
          text: 'A returnable crate is a rented asset in motion. It has to get back to the point of filling, and everything about that return is cost: the transport of empties, the space they occupy, the tracking to know where they are, the pooling operation that redistributes them, and the losses of crates that go missing or are quietly repurposed. Collapsible and nestable designs exist entirely to attack the largest of these — an empty rigid crate is mostly air, and shipping air back across a country is what kills the economics.',
        },
        {
          type: 'paragraph',
          text: 'This is why RPC systems are almost always run as pools by third parties rather than owned by growers, and why they concentrate in particular chain shapes. A domestic supermarket chain, with produce flowing to a distribution centre and lorries returning empty anyway, is close to an ideal case: the return leg already exists and the crates ride it for free. A fragmented export chain crossing borders to unknown buyers is close to a worst case: the return journey is long, expensive, may face customs treatment, and the crate may simply never be seen again.',
        },
        {
          type: 'paragraph',
          text: "The environmental comparison follows the same logic, which is why it resists a general answer. A crate's manufacturing burden is amortised over its trips, so the break-even against single-use packaging depends entirely on how many trips it actually achieves — and against that, the returns transport and the water, energy, and detergent of washing are charged to every trip. A crate that does many short trips in a tight loop wins comfortably. A crate that does few long trips, with heavy washing, may not win at all.",
        },
      ],
    },
    {
      id: 'hygiene',
      heading: 'Hygiene: the obligation reuse creates',
      body: [
        {
          type: 'paragraph',
          text: "A single-use carton has no history. It has never held anything, so it cannot carry anything from a previous load. A reused crate has a history, and that history is unknown to the person filling it — where it has been, what was in it, whether that load was diseased, whether it stood in a yard, whether an animal was in it. Reuse converts hygiene from a non-issue into a control point, and it is the obligation that the crate's other advantages are purchased with.",
        },
        {
          type: 'paragraph',
          text: 'The difficulty is that crates are shaped to be hard to clean. The features that make them good containers — ventilation slots, ribs, hinges, nesting lugs, handholds, and label pockets — are all crevices, and organic residue lodges in them and shelters organisms from cleaning. Damaged crates are worse: a crack or a scored surface holds material and gives biofilm a foothold, so a scuffed old crate is not merely ugly but harder to render clean. Effective washing therefore needs a real facility with a validated process, and the honest failure mode is not a crate that cannot be cleaned but one that was not.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Visually clean is not clean',
          text: "A crate that looks clean can carry microbial contamination in its crevices, hinges, and surface damage. Washing effectiveness is established by a validated cleaning process with verification, under the facility's food-safety plan and the applicable food-hygiene regulation — not by inspection, and not by assumption because the crate came from a pool.",
        },
        {
          type: 'paragraph',
          text: 'Reuse also transports things between sites. A crate moving from a diseased consignment to a clean farm is a plant-health route, and one moving between growing regions can carry pests, which is why plant-health authorities take an interest in reusable packaging in ways they do not with single-trip cartons.',
        },
      ],
    },
    {
      id: 'where-it-loses',
      heading: 'Where the crate genuinely loses',
      body: [
        {
          type: 'list',
          items: [
            'Weight: an RPC is heavier than the carton it replaces, and that weight is freighted with every full load and every empty return.',
            'Standardisation: pooled crates come in fixed footprints, so growers fit produce to the crate rather than specifying a package around the produce.',
            'Branding: a pooled crate belongs to the pool. For chains where the package is the shelf presence, that is a real loss, and it is one reason retail-facing produce often ends up in a printed package anyway.',
            'Capital and access: crates require either capital or a pool subscription, which is a barrier for smallholders and informal chains that a cheap box does not present.',
            'End of life: a crate is recyclable in principle, but the plastic is durable and the crate is only recycled when it is finally withdrawn — and where informal reuse takes it out of the pool, that may never be managed at all.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Set against the fibreboard carton, the comparison is close and turns on chain shape rather than on merit. Closed, short, repeat loops with a return leg that already exists favour the crate. Long, one-way, fragmented chains — where nothing comes back and hygiene history cannot be verified — favour a package that is used once and recycled.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit', 'vegetable', 'root-tuber'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'sweet-peppers' },
    { type: 'commodity', slug: 'fresh-carrots' },
  ],
  measurableInputs: [
    'Crate footprint, depth, and vent open area',
    'Number of transfers eliminated between field and shelf',
    'Return rate and crate loss rate from the pool',
    'Washing process parameters and their verification records',
    'Empty-return volume, and its reduction by collapsing or nesting',
  ],
  measurableOutputs: [
    'Trips achieved per crate over its service life',
    'Microbial load on washed crates against the validated standard',
    'Produce damage rate compared with a multi-transfer chain',
    'Water, energy, and detergent consumed per crate wash',
    'Crates withdrawn from service through damage',
  ],
  qualityEffects: [
    'Eliminates transfers between packages, removing the impacts that cause most handling bruising',
    'Holds its shape and strength in humid cold storage, where fibreboard softens',
    'Takes impact on rigid walls rather than transmitting it to the produce',
    'Ventilation slots allow cooling air through the pack, if the stacking pattern aligns them',
    'Carries contamination between loads and between sites if washing is inadequate',
  ],
  environmentalContext:
    'The environmental case depends entirely on trips achieved, return distance, and washing burden — the manufacturing impact is amortised over trips, while returns transport and washing are charged to every one. Short, dense, closed loops favour the crate decisively; long or leaky loops erode the advantage and can reverse it. Washing is also a significant water demand, which matters where water is scarce, and crates that leave the pool into informal reuse are rarely recovered for recycling at end of life.',
  safetyLimitations: [
    "Reused food-contact packaging must be cleaned to a standard established by a validated process under the applicable food-hygiene regulation and the facility's food-safety plan; no cleaning method, agent, or frequency is given here.",
    'Visual cleanliness does not establish microbial cleanliness: crevices, hinges, vents, and surface damage shelter residue and biofilm from cleaning.',
    'Reusable packaging moving between farms and regions is a plant-health pathway for pests and disease, and may be subject to plant-health requirements that single-trip packaging is not.',
    'Materials in food contact are subject to jurisdiction-specific food-contact regulation, which applies to the polymer and to any recycled content in it.',
  ],
  connections: [
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'sweet-pepper' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Reusable containers in post-harvest handling and loss reduction',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Handling damage and container systems in fresh produce chains',
    },
    {
      sourceId: 'efsa',
      citedFor: 'Hygiene considerations for reusable food-contact containers',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Produce container handling and packhouse hygiene context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated in organised retail chains with established pooling operations and predictable return legs. Much less viable in fragmented, long-distance, or one-way export chains.',
  limitations: [
    'No crate specification, trip count, washing process, or hygiene standard is given here; these are set by the pool operator, the buyer specification, and the applicable food-hygiene regulation.',
    "The crate's advantages are properties of the system around it, not of the container: without an actual return loop and an actual validated wash, most of them do not exist.",
    'The environmental comparison against single-use packaging is not resolvable in general; it depends on trips achieved, return distance, and washing burden in the specific chain.',
    'Reuse creates hygiene and plant-health obligations that single-trip packaging does not, and these fall on the party filling the crate, who did not observe its history.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Returnable Plastic Crates: Reuse, Washing, Returns',
    description:
      'Why RPCs cut handling damage by eliminating transfers, and why every advantage depends on a real return loop and a validated wash the crate cannot supply.',
    keywords: [
      'returnable plastic crate',
      'RPC',
      'reusable packaging produce',
      'crate washing',
      'return logistics',
    ],
  },
  structuredData: { article: true },
};
