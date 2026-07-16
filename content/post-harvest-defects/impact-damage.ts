import type { PostHarvestDefectContent } from '@/types/content';

export const impactDamage: PostHarvestDefectContent = {
  id: 'post-harvest-defect-impact-damage',
  slug: 'impact-damage',
  contentType: 'post-harvest-defect',
  title: 'Impact Damage',
  defectClass: 'mechanical',
  alternativeNames: [
    'Impact bruising',
    'Drop damage',
    'Dynamic loading damage',
  ],
  category: 'Post-harvest defect',
  subcategory: 'Mechanical damage',
  summary:
    'Impact damage is injury from a single dynamic blow — a drop, a throw, or a fall against a hard surface — delivered in an instant; it is an event rather than an appearance, and the tissue damage it leaves cannot be reliably distinguished from damage caused by sustained compression.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Impact damage is the injury a commodity takes when it is struck, or strikes something, in an instant. A fruit falls from a picking bag into a bin, tips over a transfer between two conveyors, rolls off the end of a table onto a hard floor, or is thrown rather than placed. The energy of that moment has to go somewhere, and it goes into the tissue: cells rupture beneath the point of contact, and the produce carries a bruise, an internal fracture, or in a hard enough blow a broken skin. The whole event takes a fraction of a second and is over long before anyone would think to inspect the result.',
    },
    {
      type: 'paragraph',
      text: 'The defining property of impact damage is that it is defined by its cause rather than by its appearance. Compression damage — sustained static load — produces bruised tissue that looks much the same, and a bruise is not stamped with the mechanism that made it. This means impact damage is genuinely diagnosed by studying the handling system, not the produce. Where the produce is examined, the honest finding is usually "mechanical damage consistent with impact", which is a much weaker statement than it is normally treated as. The real evidence for an impact problem is in fall heights, contact surfaces, and transfer geometry, and it is found by surveying the line.',
    },
  ],
  keyFacts: [
    {
      label: 'Defect class',
      value: 'Mechanical — injury from a single dynamic blow',
    },
    {
      label: 'The mechanism',
      value:
        'Energy delivered in an instant: a drop, a throw, a fall against a hard surface, or a collision between units',
      note: 'Distinct from compression, which is a sustained static load applied over time',
    },
    {
      label: 'What it leaves',
      value:
        'Most often bruising; harder blows can also fracture tissue internally or break the skin outright',
    },
    {
      label: 'Where it happens',
      value:
        'Overwhelmingly at transfer points — bin filling, drops between conveyors, tipping, table ends, and loading',
    },
    {
      label: 'Diagnosed by',
      value:
        'Surveying the handling system rather than inspecting the produce, since the resulting bruise does not identify the force that made it',
      note: 'Instrumented devices that travel the line in place of the produce are used to locate impact points',
    },
    {
      label: 'Route to decay',
      value:
        'An impact that breaks the skin creates a direct infection court for wound pathogens such as the Penicillium species that cause blue mould',
    },
    {
      label: 'Where the limits are set',
      value:
        'Acceptable fall heights, contact materials, and equipment settings are commodity- and cultivar-specific and are set by sourced post-harvest engineering guidance',
    },
  ],
  sections: [
    {
      id: 'the-event',
      heading: 'An event, not an appearance',
      body: [
        {
          type: 'paragraph',
          text: 'An impact is a brief, dynamic loading. The produce and whatever it meets are in contact for an instant, the energy of the fall is absorbed, and the tissue that absorbed it fails. Severity depends on how far the produce fell, on what it landed on and how much that surface gives way, on where on the unit the blow landed, and on the mechanical properties of the flesh at that moment. A fall onto a padded surface, onto other fruit, or onto a moving belt is not the same event as the same fall onto bare steel.',
        },
        {
          type: 'paragraph',
          text: 'What matters for identification is that all of this is over before the result is visible. Impact damage produces bruising, and bruising is the tissue outcome shared with compression. The event is distinctive; the mark is not. A page about impact damage is therefore a page about a cause, and the honest limit on any inspection-based claim is that it can find the damage and not the mechanism.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Naming an impact from a bruise is an inference, not an observation',
          text: 'A localised bruise is consistent with a blow. It is also consistent with a point load from a hard neighbour under sustained compression, and consistent with a unit that took several different forces in succession — which, in a working chain, is the normal case. Impact should be established from handling evidence, not asserted from bruise shape.',
        },
      ],
    },
    {
      id: 'where',
      heading: 'Where impacts are actually created',
      body: [
        {
          type: 'paragraph',
          text: 'Impact damage is concentrated at transfer points: any place where produce changes direction, changes carrier, or stops moving. The number of such points across a chain is usually larger than anyone assumes, and each is an opportunity for a blow that no later inspection will attribute correctly.',
        },
        {
          type: 'list',
          items: [
            'Harvest transfer: fruit dropped into a bag, bag emptied into a bin, bin tipped into a trailer — each a fall, and the earliest ones are furthest from the inspection that might find them.',
            'Bin and container filling, where the first units land on a hard base and later ones land on produce, so the damage is unevenly distributed through the container by design.',
            'Conveyor-to-conveyor drops, table ends, and direction changes on the grading line, where fall height is fixed by the equipment and repeated for every unit that passes.',
            'Tipping and dumping into water or onto belts at intake.',
            'Loading, unloading, and pallet handling, where the whole package is the thing dropped and the damage is delivered to every unit inside at once.',
            'Road transport shocks over rough surfaces, where a severe jolt acts as an impact rather than as the vibration it is usually grouped with.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because impacts accumulate across a chain, no single point need be at fault for the total to be damaging. A lot that passes through many modest drops can arrive worse than one that took a single conspicuous fall, and the modest drops are the ones nobody investigates.',
        },
      ],
    },
    {
      id: 'severity',
      heading: 'What changes the outcome',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Fall height',
              description:
                'The dominant handling variable, and the one most often fixed by equipment design rather than by choice. Acceptable heights are commodity-specific and set by sourced guidance; none are given here.',
            },
            {
              term: 'The receiving surface',
              description:
                'What the produce lands on determines how much of the energy is absorbed elsewhere. Bare metal, plastic, padding, water, or other produce give substantially different outcomes for the same fall.',
            },
            {
              term: 'Impact site',
              description:
                'A blow to the shoulder, the stem end, or the equator of a fruit does not produce the same damage; tissue structure varies within the unit.',
            },
            {
              term: 'Tissue condition',
              description:
                'Maturity, turgor, and flesh temperature alter how the tissue absorbs a blow. Firmer tissue may resist bruising and crack instead; softer tissue bruises more readily.',
            },
            {
              term: 'Repetition',
              description:
                'Damage accumulates across many small impacts as well as arriving in one large one, and the accumulated case leaves no single event to find.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The way this is genuinely investigated is by instrumenting the chain rather than the produce: devices shaped and weighted to travel the line in place of a fruit record what they experience at each transfer, and locate the points where the impacts are occurring. That approach answers the question the produce cannot answer. The specific instrument, its calibration, and the values it should report are commodity- and equipment-specific and belong to sourced post-harvest engineering guidance.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Reducing the risk',
      body: [
        {
          type: 'paragraph',
          text: 'Impact damage is prevented at the transfer points that create it and nowhere else. It cannot be treated, sorted out reliably (much of it is invisible), or recovered downstream, and a grading line that damages produce cannot grade its way out of the problem it is causing.',
        },
        {
          type: 'list',
          items: [
            'Lower fall heights wherever produce changes carrier, and treat each transfer as a design decision rather than an inevitability.',
            'Pad or soften receiving surfaces, and prefer transitions that let produce roll or slide rather than drop.',
            'Survey the whole chain, not the packhouse alone: harvest and field transfers happen furthest from any inspection and are frequently the worst.',
            'Address handling practice — placing rather than throwing, filling rather than dumping — as a distinct problem from equipment geometry.',
            'Recognise that impacts breaking the skin create infection courts, so an impact problem often surfaces later as a decay problem in store.',
            'Where the question matters, locate impacts by instrumenting the line rather than by inspecting the fruit.',
          ],
        },
      ],
    },
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-pineapples' },
  ],
  causedByConditions: [
    'Drops at transfer points between conveyors, tables, bins, and containers, with fall height fixed by equipment geometry',
    'Hard, unpadded receiving surfaces that absorb little of the energy of a fall',
    'Throwing, dumping, or tipping produce rather than placing or filling it',
    'Bin and container filling in which the first units land on a hard base',
    'Dropped packages during loading, unloading, and pallet handling, which deliver a blow to every unit inside at once',
    'Severe road shocks over rough surfaces during transport',
    'Accumulation of many modest impacts across a long chain, with no single event obviously at fault',
  ],
  reducedByProcesses: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  confusableWith: [
    'Compression damage — the central confusion on this page: compression is a sustained static load and impact is a single dynamic blow, but both produce bruised tissue of the same kind, and the bruise does not record which one acted',
    'Bruising — not a competing diagnosis but the tissue outcome that impact produces; a bruise is the result, impact is one of the causes, and reading a bruise as evidence of impact is an inference from shape that the shape does not support',
    'Abrasion injury — surface friction damage from rubbing or vibration, a different mechanism that frequently accompanies impacts on the same unit and can obscure them',
    'Cracking and splitting — a hard enough blow can fracture or split firm tissue, but many cracks and splits originate before harvest from growing conditions and are merely discovered later, so a split is not evidence of a blow',
    'Blue mould and other storage rots — an impact that breaks the skin opens a direct infection court, and the rot that follows is what gets recorded while the impact that caused it goes unrecognised',
    'Vibration damage — repeated low-level contact in transit accumulates without any single identifiable event, and its result overlaps with that of discrete impacts',
  ],
  diagnosticLimitations: [
    'Impact damage is defined by its cause, not by its appearance. The tissue result is bruising, which sustained compression also produces, so appearance cannot establish that a blow was involved rather than a load.',
    'The pattern cue that impact bruises tend to be localised at the point of contact while compression bruises tend to be broad and flattened at contact faces is suggestive and not diagnostic. It is confounded by tissue firmness, contact geometry, spread after the event, and units that took several successive forces — the normal case in a working chain.',
    'Much impact bruising is internal and invisible from outside, and its discolouration develops only after the event, so a lot inspected shortly after being damaged can appear sound and be conspicuously damaged later.',
    'Impacts accumulate. Many modest blows across a chain can produce more damage than one severe fall, and the accumulated case leaves no single event to identify, so attribution to any one operation is unsupported by the produce.',
    'Attributing damage to a specific transfer point requires handling evidence — fall-height survey, instrumented measurement of the line, equipment records — rather than inspection of the produce, which carries no information about where or when it was struck.',
    'Where an impact broke the skin, decay commonly follows and is recorded as a disease loss; the wound is often unrecognisable by the time the rot is visible, so impact damage is systematically under-recorded in favour of pathology.',
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Handling practice and transfer-point damage in post-harvest chains, and its contribution to food loss',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Impact bruising mechanisms in fruit, fall height and contact surface effects, and instrumented assessment of handling lines',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Handling damage assessment and equipment set-up for root and tuber crops',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Handling injury and its relationship to post-harvest decay in fresh produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Impact damage is a function of chain design rather than climate, so its incidence tracks harvest method, container type, equipment condition, and road quality; chains with many manual transfers and long rough journeys generate more of it than short mechanised ones.',
  limitations: [
    'This entry gives no fall heights, impact energies, equipment settings, or damage tolerances. Acceptable handling parameters are commodity- and cultivar-specific and are set by sourced post-harvest engineering guidance; permitted damage is defined by the applicable grade standard.',
    "No machinery operating steps or equipment adjustment procedures are described. Setting up, modifying, or servicing handling equipment is governed by the manufacturer's instructions and site safety procedures and requires qualified personnel.",
    'Symptom descriptions are indicative only. They do not confirm that a blow occurred, do not distinguish impact from compression or from accumulated vibration, and do not identify where in the chain the damage was done.',
    'Impact damage is irreversible. Nothing described here recovers an affected lot, and the entry is not a basis for accepting, rejecting, or apportioning liability for a consignment.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Impact Damage: Drop Injury at Transfer Points',
    description:
      'Impact damage is a single dynamic blow, found by surveying the handling line rather than the fruit, because the bruise it leaves cannot name its cause.',
    keywords: [
      'impact damage',
      'impact bruising',
      'drop height',
      'transfer point damage',
      'post-harvest handling',
    ],
  },
  structuredData: { article: true },
};
