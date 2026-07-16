import type { LogisticsConceptContent } from '@/types/content';

export const multimodalTransport: LogisticsConceptContent = {
  id: 'logistics-concept-multimodal-transport',
  slug: 'multimodal-transport',
  contentType: 'logistics-concept',
  title: 'Multimodal Transport',
  alternativeNames: ['Combined transport', 'Intermodal transport'],
  category: 'Logistics concept',
  subcategory: 'Transport mode',
  logisticsClass: 'transport-mode',
  summary:
    'Multimodal transport moves a consignment over two or more modes under a single contract with one party responsible end to end. The physical chain is unchanged; what changes is that the interfaces between modes become someone’s responsibility rather than nobody’s.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almost every international agricultural consignment is physically multimodal — road to a terminal, sea or rail across the distance, road again at the far end. What the term actually denotes is not that arrangement but a commercial one: a single contract, with a single operator, who undertakes the whole journey and answers for it, rather than a series of separate contracts with separate carriers each answering only for their own leg.',
    },
    {
      type: 'paragraph',
      text: 'The distinction matters because of where things go wrong. Chains fail at their seams far more often than in the middle of a leg, and a segmented contract structure leaves those seams unowned: the road carrier’s duty ended at the gate, the sea carrier’s had not yet begun, and the consignment sat warming on a quay in between with no party in breach. Multimodal contracting exists to put a name against that gap.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Transport mode — an integrating contract across modes',
    },
    {
      label: 'Defining feature',
      value: 'One contract and one responsible operator for the whole journey',
    },
    {
      label: 'What it does not change',
      value:
        'The physical chain — the same legs, transfers, and handling occur',
    },
    {
      label: 'What it does change',
      value:
        'Ownership of the interfaces, and who a claimant must pursue when something fails',
    },
    {
      label: 'Enabled by',
      value:
        'Unitisation — the container is what allows a load to change mode without being touched',
    },
    {
      label: 'Legal complication',
      value:
        'Each mode has its own liability convention, with different bases and limits',
    },
    {
      label: 'Documented by',
      value:
        'A through or combined transport document covering the whole carriage',
    },
  ],
  sections: [
    {
      id: 'the-seams-are-the-subject',
      heading: 'The seams are the subject',
      body: [
        {
          type: 'paragraph',
          text: 'Consider a consignment of chilled produce moving from a packhouse to an inland buyer overseas. It is trucked to a port, waits, is loaded, sails, is discharged, waits again, clears customs, is trucked inland, and is delivered. Under segmented contracting, that journey is four or five contracts. Each carrier performs its leg competently. The consignment arrives out of condition, and every party can demonstrate that the deviation did not occur on its watch — because it occurred in the intervals between watches.',
        },
        {
          type: 'paragraph',
          text: 'Multimodal contracting collapses this. One operator contracts to deliver from A to B and subcontracts the legs as it sees fit; the customer’s counterparty does not change when the mode does. The transfers, the dwell, the plug-out periods, and the handovers are all inside that operator’s undertaking. This does not make the transfers safer in any physical sense — it makes them somebody’s problem, which over time tends to make them safer, because the party bearing the cost is now the party able to design them away.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Intermodal, multimodal, combined',
          text: 'Usage varies and the terms are often interchanged. The distinction worth holding is between the physical fact of using several modes and the contractual fact of a single operator undertaking the whole carriage. It is the second that changes anything about who bears a loss.',
        },
      ],
    },
    {
      id: 'the-unit-makes-it-possible',
      heading: 'The unit load makes it possible',
      body: [
        {
          type: 'paragraph',
          text: 'Multimodal carriage of general cargo is a practical proposition largely because of the container. When a load can be lifted from ship to wagon to chassis without being opened, the transfer between modes costs one crane movement rather than a full rehandling of every parcel. Where the cargo cannot be unitised — bulk grain, for instance — a mode change means a genuine transhipment: discharging a mass and reloading it, with all the breakage, dust loss, and contamination exposure that entails.',
        },
        {
          type: 'paragraph',
          text: 'This is why bulk chains are usually organised as a sequence of separate movements with storage between them rather than as a through carriage, while containerised chains are naturally through-routed. The grain moving barge to elevator to ship is not being transhipped so much as being received, stored, and despatched again — each terminal is a genuine break in the chain, and often the point at which the parcel’s identity is deliberately dissolved into a graded, blended stock.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Fewer transfers beats better transfers',
          text: 'Every transfer costs money and risks the cargo. The design instinct that pays in agricultural logistics is to reduce the number of times a consignment changes hands, not to perfect each handover — which is precisely the argument for the container and for through contracting.',
        },
      ],
    },
    {
      id: 'liability-is-not-unified',
      heading: 'Liability is not unified',
      body: [
        {
          type: 'paragraph',
          text: 'A single contract does not produce a single liability regime. International carriage by each mode is governed by its own convention, developed separately, with its own basis of liability, its own defences, its own limits, and its own time bars. A multimodal contract sits over the top of this patchwork, and the common approach is network liability: the operator answers to the customer for the whole journey, but the terms applying to a particular loss are those of the mode on which the loss occurred.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Network liability',
              description:
                'The operator is liable throughout, but on terms drawn from whichever mode’s regime governs the leg where the loss happened. Simple in principle, contentious when the leg cannot be identified.',
            },
            {
              term: 'Concealed damage',
              description:
                'Loss discovered only at unstuffing, with no evidence of which leg caused it. The hard case for network liability, and one reason monitoring records carry so much weight.',
            },
            {
              term: 'Through transport document',
              description:
                'The document evidencing carriage over the whole journey rather than one leg. What makes the arrangement visible to banks and buyers.',
            },
            {
              term: 'Freight forwarder as principal',
              description:
                'A forwarder may arrange carriage as an agent, or contract as a carrier in its own right. Which of these it has done determines whom the customer can sue, and it is a question of the contract rather than the job title.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'For agricultural cargo, the concealed-damage problem is acute. A temperature deviation or a moisture event leaves no mark identifying where it happened, and a container arriving with spoiled produce is evidence of an outcome, not of a cause. This is why continuous monitoring records — which timestamp deviations and therefore locate them on a leg — have become as much a commercial instrument as a technical one.',
        },
      ],
    },
    {
      id: 'what-it-does-not-solve',
      heading: 'What it does not solve',
      body: [
        {
          type: 'paragraph',
          text: 'Consolidating contracts does not consolidate the physical world. The border still has to be crossed, the terminal is still congested, the reefer is still unplugged during transfer, and the phytosanitary certificate still has to be right. Multimodal contracting changes who is accountable for those things; it does not make any of them go away, and a through document over a badly designed chain is a badly designed chain with clearer paperwork.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This page describes a structure, not a recommendation',
          text: 'Whether a multimodal contract is appropriate, what liability terms apply, and how a claim should be pursued are questions for the specific contract, the applicable conventions, and qualified advice. Nothing here is legal advice, and no contractual arrangement is recommended.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Place responsibility for an entire door-to-door journey, including the transfers between modes where chains most often fail, with a single operator under a single contract — so that the interfaces have an owner.',
  operationalLimitations: [
    'This page describes a contracting structure. What any particular multimodal contract actually allocates is determined by its own terms, which vary between operators and trades.',
    'Liability regimes, limits, defences, and time bars differ by mode and by convention and are matters of law for the specific carriage. None are stated here, and nothing on this page is legal advice.',
    'No transit times, routings, or rates are given. They depend on the operator, the legs selected, and conditions on the day.',
    'Whether a forwarder has contracted as principal or as agent is a question about the specific contract, and determines who is answerable — this page cannot answer it for any transaction.',
    'Where concealed damage cannot be attributed to a leg, the outcome depends on the contract, the evidence, and the applicable law, not on any general principle described here.',
    'Customs, phytosanitary, and border requirements attach to the consignment regardless of the contracting structure and are unaffected by anything on this page.',
  ],
  cargoForms: ['containerised', 'unitised', 'bulk-dry', 'breakbulk'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'fruit',
    'vegetable',
    'beverage-crop',
    'nut',
    'spice',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'firmness' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'palletisation' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'transhipment' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'inland-waterway-transport' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'temperature-monitoring-in-transit' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
  ],
  sourceReferences: [
    {
      sourceId: 'unctad',
      citedFor:
        'Multimodal transport arrangements, through carriage, and transport connectivity in international trade',
    },
    {
      sourceId: 'imo',
      citedFor:
        'Maritime leg carriage and cargo securing within intermodal chains',
    },
    {
      sourceId: 'iso',
      citedFor:
        'Freight container standards that make transfer between modes possible without rehandling cargo',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Customs treatment of goods in transit moving through more than one territory',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The availability of through contracting and the modes that can be combined depend on infrastructure, carrier networks, and transit arrangements along the specific corridor.',
  limitations: [
    'A reference description of a contracting and transport structure, not legal advice, a booking service, or a recommendation of any arrangement.',
    'Liability regimes and limits differ by mode, convention, contract, and jurisdiction; none are stated here.',
    'No transit times, routings, or rates are given — they are operator- and corridor-specific.',
    'What a specific contract allocates is determined by its own terms; this page describes the general structure only.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Multimodal Transport: One Contract Across Several Modes',
    description:
      'What multimodal transport means: why the seams between modes are the subject, how the container makes it possible, and what a single contract does not solve.',
    keywords: [
      'multimodal transport',
      'combined transport',
      'intermodal transport',
      'through bill of lading',
      'network liability',
    ],
  },
  structuredData: { article: true },
};
