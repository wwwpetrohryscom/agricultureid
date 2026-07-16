import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const portCongestion: SupplyChainRiskContent = {
  id: 'supply-chain-risk-port-congestion',
  slug: 'port-congestion',
  contentType: 'supply-chain-risk',
  title: 'Port Congestion',
  alternativeNames: ['Berth congestion', 'Port queuing'],
  category: 'Supply-chain risk',
  subcategory: 'Logistics',
  riskClass: 'logistics',
  summary:
    'Port congestion arises when vessel arrivals, berth capacity, and landside clearance fall out of step, so ships wait rather than work. For agricultural cargo the waiting itself is the damage: time is a quality variable, not only a cost.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A port is a queueing system with a fixed number of servers. Berths, cranes, grain elevators, reefer plugs, and inspection lanes each have a throughput, and cargo passes through only as fast as the narrowest of them allows. Congestion is what happens when arrivals persistently exceed that rate: the queue stops clearing between peaks and begins to carry forward, so each vessel waits longer than the one before it.',
    },
    {
      type: 'paragraph',
      text: 'For agricultural trade this matters more than the freight bill suggests. A delayed consignment of steel is a late consignment of steel. A delayed consignment of chilled fruit, live animals, or moist grain is a consignment whose condition is changing while it waits, and whose documentation, permits, and contractual delivery window are ageing at the same time. Congestion therefore converts a logistics problem into a quality problem, a regulatory problem, and a commercial problem — often in that order.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Logistics — throughput and queueing' },
    {
      label: 'Arises at',
      value: 'Berth, terminal yard, and the landside gate behind them',
    },
    {
      label: 'Core mechanism',
      value: 'Arrival rate exceeds the rate of the tightest handling stage',
    },
    {
      label: 'Propagates by',
      value:
        'Vessel schedules, equipment position, and berth queues carrying delay to the next voyage',
    },
    {
      label: 'Why agriculture is exposed',
      value:
        'Cargo condition, permit validity, and delivery windows all age while the cargo waits',
    },
    {
      label: 'Frequently confused with',
      value:
        'A capacity shortage — congestion can occur at a port with idle cranes if the landside will not clear',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'how-a-queue-forms',
      heading: 'How the queue forms',
      body: [
        {
          type: 'paragraph',
          text: 'Congestion rarely begins at the berth. It usually begins behind it. A terminal can only discharge into space it has; if the yard is full, if trucks cannot collect, if rail wagons are not positioned, or if customs and inspection have not released the previous cargo, then the discharge slows regardless of how many cranes are available. The berth is where the queue becomes visible, not where it is caused.',
        },
        {
          type: 'paragraph',
          text: 'Once a queue exists it is self-sustaining, because ships arrive on a schedule that was set before the queue formed. A vessel that waited on its previous call arrives late for its next, misses its window, and joins another queue. Congestion is in this sense less an event than a state that a network settles into and then has to be worked out of, usually over a period much longer than whatever triggered it.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The trigger is not the cause',
          text: 'A storm, an equipment failure, or a labour stoppage may start a queue, but the queue persists because the system has no slack to absorb it. Ports run efficiently by running close to capacity, and a system running close to capacity recovers from disturbance slowly.',
        },
      ],
    },
    {
      id: 'agricultural-cargo',
      heading: 'Why agricultural cargo is differently exposed',
      body: [
        {
          type: 'paragraph',
          text: 'Different cargo forms fail in different ways when they wait, and the failure mode determines what congestion actually costs.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Perishables in reefer containers',
              description:
                'A waiting reefer needs power. Yard plug availability, gensets on the quay, and the sequence in which boxes are moved decide whether the cold chain holds. A congested yard is where cold-chain failure characteristically begins.',
            },
            {
              term: 'Bulk grain and oilseed',
              description:
                'Bulk vessels wait at anchor, often loaded. Cargo condition depends on how it was loaded and its moisture at loading; a long wait gives any pre-existing problem time to develop, and discharge delays extend it.',
            },
            {
              term: 'Live animals',
              description:
                'Waiting has immediate welfare consequences and is governed by animal-health and welfare requirements rather than by commercial convenience.',
            },
            {
              term: 'Documentary and permit-bound cargo',
              description:
                'Phytosanitary certificates, import permits, and letters of credit have validity periods and presentation windows. A consignment can arrive intact and still be inadmissible because the paperwork behind it expired in the queue.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'This is why congestion cannot be reduced to a demurrage figure. The freight cost of waiting is the part that is easiest to measure and frequently the smallest part of what is lost.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'How it propagates beyond the port',
      body: [
        {
          type: 'paragraph',
          text: 'A congested port exports its delay in three directions. Seaward, it holds vessels and equipment out of circulation, which tightens capacity on routes that never touch the congested port at all — a container stuck in a queue is a container not repositioning to a loading origin. Landward, it backs up into inland transport, storage, and assembly, so grain that cannot move to port stays in country storage that was not planned to hold it. Commercially, it moves into contracts, because delivery terms allocate the cost and risk of delay to a specific party at a specific point.',
        },
        {
          type: 'paragraph',
          text: "The direction that matters most depends on where title and risk sit. Under a term where the seller's obligation ends at the loading port, a destination queue is the buyer's problem; under a term extending to destination, it is not. Congestion is one of the clearest illustrations of why delivery terms are read carefully before they are needed rather than after.",
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'Congestion is observable before it is acknowledged. The signals are operational and mostly available to any party with a booking: waiting time between arrival and berthing, the gap between scheduled and actual windows, gate turn times, yard utilisation, and the tone of terminal advisories. What none of these signals do is predict how long the state will last, because that depends on how much slack the network has and where.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Indicators are observations, not forecasts',
          text: 'A lengthening berth queue tells you the queue is lengthening. It does not tell you when it will clear. Treating an indicator as a forecast is a recurrent way congestion information is misused.',
        },
      ],
    },
  ],
  riskMechanism:
    'Port congestion arises when the rate at which vessels arrive exceeds the rate at which the tightest stage of the port system — berth, crane, storage, inspection, or landside collection — can clear them, so the queue stops emptying between peaks and begins to carry forward. Because the constraint is usually landside rather than at the quay, congestion can persist at a port with visibly idle handling equipment. It propagates seaward by holding vessels, containers, and equipment out of circulation, which tightens capacity on unrelated routes; landward by backing cargo into inland transport and storage that was not planned to hold it; and commercially through delivery terms, demurrage and detention, and the validity windows of permits, certificates, and payment instruments. For agricultural consignments the delay is not only a cost but a condition change: cargo waits in a state that continues to age, so a logistics disruption becomes a quality and admissibility disruption at the point of discharge.',
  chainStages: [
    'inland-transport',
    'border',
    'international-transport',
    'destination-market',
  ],
  observableIndicators: [
    'Waiting time between vessel arrival and berthing lengthening call after call',
    'Growing divergence between scheduled berth windows and actual berthing',
    'Vessels holding at anchorage rather than proceeding to berth',
    'Terminal yard utilisation reported near working capacity, with reduced space to discharge into',
    'Gate turn times lengthening and truck appointment slots becoming scarce',
    'Reefer plug availability constrained, or boxes held on gensets rather than plugged in',
    'Carrier or terminal advisories announcing omitted calls, window changes, or diverted rotations',
    'Demurrage and detention charges accruing on consignments that have not moved',
    'Empty-equipment shortages appearing at loading origins served by the same vessel rotation',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'Congestion is port-specific and stage-specific. Two terminals in the same harbour can be in different states at the same time, and a berth queue says nothing about the landside constraint that may be causing it.',
    "Assessing exposure for a real consignment requires that chain's own data: the named terminal, the vessel rotation, the cargo form, the delivery term in the contract, the validity dates on the permits and certificates, and the buyer's own collection capability.",
    'Publicly observable indicators such as anchorage counts describe the present state and carry no information about how long it will last; duration depends on network slack that is not visible from the queue itself.',
    'AgricultureID publishes no port performance data, waiting times, or congestion status. Where indicators are described, the reader must obtain the values from the terminal, the carrier, or the relevant port authority.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'fruit',
    'vegetable',
    'beverage-crop',
    'livestock-product',
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
  ],
  sourceReferences: [
    {
      sourceId: 'unctad',
      citedFor:
        'Maritime transport and port performance concepts, including berth waiting and turnaround as port-performance measures',
    },
    {
      sourceId: 'imo',
      citedFor:
        'Port call procedures and the maritime operational framework within which vessels wait and berth',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Handling and storage context for agricultural cargo held in transit',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market-information context for how logistics disruption is reported alongside grain and oilseed supply',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any port, but constraints, handling systems, inspection regimes, and landside capacity are entirely port- and jurisdiction-specific.',
  limitations: [
    'A reference description of a mechanism, not an assessment of any port, route, terminal, or consignment.',
    'No waiting times, queue lengths, demurrage rates, or throughput figures are given: they are terminal-, season-, and contract-specific, and any general figure would misrepresent a specific chain.',
    "Congestion is described from the cargo interest's perspective; terminal operations, pilotage, and berth allocation are governed by the port authority and are outside this scope.",
    'Contractual allocation of delay costs depends on the delivery term and charter terms actually agreed, which this page does not interpret.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Port Congestion: How It Forms and How It Propagates',
    description:
      'How port congestion arises from queueing at the tightest stage, why agricultural cargo is differently exposed, and how delay propagates seaward and landward.',
    keywords: [
      'port congestion',
      'berth waiting time',
      'supply chain risk',
      'agricultural logistics',
      'demurrage',
      'terminal congestion',
    ],
  },
  structuredData: { article: true },
};
