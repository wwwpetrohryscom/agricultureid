import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const inlandLogisticsBottleneck: SupplyChainRiskContent = {
  id: 'supply-chain-risk-inland-logistics-bottleneck',
  slug: 'inland-logistics-bottleneck',
  contentType: 'supply-chain-risk',
  title: 'Inland Logistics Bottleneck',
  alternativeNames: ['First-mile constraint', 'Inland transport bottleneck'],
  category: 'Supply-chain risk',
  subcategory: 'Logistics',
  riskClass: 'logistics',
  summary:
    'Cargo exists at origin but cannot reach the port at the rate the export programme requires. The constraint is usually a single narrow link — a road, a rail allocation, a transhipment point — and the crop that cannot move is a crop that is ageing in a place not designed to keep it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Between a field and a ship there is a leg that receives far less attention than either. Cargo has to be assembled from many small production points, moved to a facility that can hold it, and then delivered to a port on the schedule a vessel demands. That inland leg often crosses the least-invested part of an agricultural chain: farm tracks, rural roads, a rail line with allocated capacity, a river with a season, a single bridge.',
    },
    {
      type: 'paragraph',
      text: 'A bottleneck here has a signature that distinguishes it from congestion at the port. The cargo is not queuing to leave the country; it has not started. And because agricultural export is a seasonal pulse rather than a steady flow — a harvest arriving over weeks, needing to move over months — the inland leg is sized against an average it rarely experiences. What looks like adequate capacity in an annual figure can be an acute constraint in the six weeks that matter.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Logistics — origin-side throughput' },
    {
      label: 'Arises at',
      value: 'Assembly and the inland leg between origin and port',
    },
    {
      label: 'Core mechanism',
      value:
        'A single narrow link limits the rate at which cargo can reach the port, regardless of how much cargo exists',
    },
    {
      label: 'Why it bites seasonally',
      value:
        'Harvest is a pulse; inland capacity is sized against an average it rarely sees',
    },
    {
      label: 'Quality dimension',
      value:
        'Cargo that cannot move waits in storage not sized or conditioned to hold it',
    },
    {
      label: 'Often mistaken for',
      value:
        'A production shortfall — the tonnes exist, but they cannot be presented',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'where-the-constraint-sits',
      heading: 'Where the constraint actually sits',
      body: [
        {
          type: 'paragraph',
          text: 'An inland chain moves at the rate of its narrowest link, and identifying that link is the whole of the diagnosis. Adding trucks to a chain constrained by elevator receiving capacity produces a longer queue of trucks, not more cargo at the port. Adding storage to a chain constrained by rail allocation produces fuller storage. The characteristic error in responding to an inland bottleneck is investing in the part of the chain that is visibly under strain rather than the part that is actually limiting.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'The first mile',
              description:
                "Movement from production points to an assembly point, often over unsealed roads that are seasonal, and in vehicles that are not the exporter's.",
            },
            {
              term: 'Assembly and storage',
              description:
                'Receiving, weighing, sampling, and holding. Receiving rate, not storage volume, is frequently the constraint — a full store cannot receive, and a store that cannot receive stops the trucks behind it.',
            },
            {
              term: 'Line haul',
              description:
                'Road, rail, or waterway to the port. Rail is capacity-allocated and cannot be surged; waterways have depth seasons; roads have weight limits, permits, and weather.',
            },
            {
              term: 'Port-side landside',
              description:
                'Gates, appointment systems, and terminal receiving windows. Cargo can be at the port and still not be in it.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Capacity is a rate, not a stock',
          text: 'Inland capacity is almost always misdescribed as a quantity — tonnes of storage, numbers of wagons. What determines whether an export programme performs is a rate: tonnes per day through the tightest stage, during the weeks the harvest is arriving.',
        },
      ],
    },
    {
      id: 'seasonality',
      heading: 'Why the pulse matters more than the average',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural production is not a manufacturing line. A crop is harvested over a window measured in weeks, and every producer in a region is doing it at once, on the same roads, into the same facilities. The inland system therefore faces its entire annual demand compressed into a fraction of the year, and it is generally not economic to build for that peak — capital that sits idle for ten months is capital badly used.',
        },
        {
          type: 'paragraph',
          text: 'The result is a system that is structurally tight at exactly the moment it is needed, and this is a design outcome rather than a failure. It is why an inland bottleneck can be entirely predictable and still bite: everyone knows the peak is coming, and the peak still exceeds what exists. It is also why a modest additional disturbance during the window — rain closing unsealed roads, a locomotive shortage, a strike, a bridge weight restriction — produces an effect out of all proportion to its size. The system has no slack precisely when a disturbance arrives.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'How it propagates',
      body: [
        {
          type: 'paragraph',
          text: 'The distinctive feature of an inland bottleneck is that it turns into other problems quickly, and by the time it arrives it no longer looks inland.',
        },
        {
          type: 'list',
          items: [
            'Cargo waits at farm or in improvised storage that was not built to hold it, so a transport problem becomes a storage-condition problem and, in time, a quality problem',
            'Vessels arrive to a cargo that is not there, so laytime runs and demurrage accrues against a party that never touched a truck',
            "Export line-ups slip, and the origin's ability to perform against its contracts comes into question",
            'Buyers substitute to origins whose inland leg is working, redirecting demand and freight',
            'Producers with no route to market face a local price that disconnects from the export price, because the two are no longer physically connected',
          ],
        },
        {
          type: 'paragraph',
          text: "That last effect is the clearest evidence of the mechanism. When an origin's basis widens sharply while the destination price is unchanged, the market is pricing the cost of a link that is not working. The gap between what a commodity is worth at a port and what it is worth two hundred kilometres inland is, in large part, the price of getting it there.",
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'An inland bottleneck is well signalled but poorly instrumented. There is rarely a published indicator equivalent to a berth queue, so the signals are local and operational: queues at weighbridges, truck waiting times at elevators, rail wagon supply against orders, road closures and weight restrictions, river gauge readings. Much of this is visible to participants and almost none of it is aggregated.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The absence of data is not the absence of the risk',
          text: 'Because inland constraints are poorly measured, they are systematically under-represented in risk discussions relative to maritime disruption, which publishes itself. The quietness of the data says nothing about the mechanism.',
        },
      ],
    },
  ],
  riskMechanism:
    'Cargo that physically exists at origin cannot be presented at the port at the rate an export programme requires, because a single link in the inland chain limits throughput. The limiting link may be the first mile from production points, the receiving rate at an assembly point or elevator, the line haul by road, rail, or waterway, or the landside receiving window at the port itself — and because a chain moves at the rate of its narrowest stage, capacity added anywhere else produces only a longer queue. The constraint is structurally seasonal: a harvest arrives as a pulse over weeks while inland capacity is sized against an annual average, and building for the peak would leave capital idle for most of the year, so the system is designed to be tight exactly when it is needed. Consequently a modest additional disturbance during the window — rain on unsealed roads, a wagon shortage, a weight restriction, a stoppage — produces an effect disproportionate to its size, because no slack exists to absorb it. It propagates by holding cargo in storage not built or conditioned to keep it, converting a transport problem into a quality problem; by leaving arriving vessels without cargo, so laytime and demurrage accrue; by slipping export line-ups and calling contractual performance into question; by redirecting buyers to origins whose inland leg is working; and by disconnecting the inland price from the port price, since the two are no longer physically linked.',
  chainStages: ['assembly', 'inland-transport', 'international-transport'],
  observableIndicators: [
    'Truck queues and extended waiting times at weighbridges, assembly points, or elevator receiving pits during the harvest window',
    'Elevator or warehouse reported full, or receiving suspended, while intake continues to arrive',
    'Rail wagons or locomotives supplied below orders placed, or allocation cycles lengthening',
    'Road closures, weight restrictions, or seasonal impassability reported on routes serving an origin',
    'River or waterway gauge readings restricting draught, barge loading, or navigation',
    'Export line-up at the loading port slipping against scheduled vessel arrivals',
    'Vessels on demurrage at the loading port awaiting cargo that has not arrived',
    'Local trucking rates from an origin rising sharply while ocean freight is unchanged',
    'The origin basis widening against the destination price without any change in production',
    'Cargo held at farm or in temporary, uncovered, or improvised storage beyond the period intended',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no throughput rates, waiting times, capacity figures, or cost data. Inland capacity is specific to a corridor, a facility, and a season, and is rarely published in comparable form.',
    "Assessing exposure for a real chain requires that chain's own data: the actual corridor and its limiting stage, the receiving rate at the assembly points used, rail allocation or haulage contracts held, the harvest pulse for that crop and region, storage capability at origin, and the port's landside receiving arrangements.",
    'Inland logistics is poorly instrumented compared with maritime transport. The scarcity of published indicators reflects measurement practice, not the behaviour of the mechanism, and comparisons with maritime disruption based on data availability are unsound.',
    'Identifying the limiting link requires observation of the specific chain; it cannot be inferred from which stage appears most visibly strained, since queues form behind the constraint rather than at it.',
    'AgricultureID publishes no corridor capacity data, road or rail status, or line-up information.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'root-tuber',
    'sugar-crop',
    'fruit',
    'vegetable',
    'fibre',
    'beverage-crop',
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'inland-waterway-transport' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'exw-delivery-term' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
  ],
  sourceReferences: [
    {
      sourceId: 'worldbank',
      citedFor:
        'Trade logistics performance and transport infrastructure as determinants of trade cost, particularly on the origin side',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Assembly, handling, and storage of agricultural produce between production and export',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Transport connectivity and the relationship between inland transport and seaborne trade',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Agricultural transportation and grain movement analysis context for inland corridors',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any origin with an inland leg, but corridors, modes, seasons, allocation systems, and constraints are entirely country- and route-specific.',
  limitations: [
    'A reference description of a mechanism, not an assessment of any corridor, facility, origin, or country.',
    'No capacities, throughput rates, waiting times, distances, or costs are given: they are corridor- and season-specific, and any general figure would misrepresent a specific chain.',
    "No country's infrastructure is characterised, ranked, or compared. The page describes how a constraint behaves, not where constraints are.",
    'Rail allocation, haulage contracting, and permit regimes vary by jurisdiction and are outside this scope.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Inland Logistics Bottleneck: Mechanism and Propagation',
    description:
      'How an inland bottleneck limits the rate cargo reaches port, why the harvest pulse makes it tight, and how it becomes a storage and quality problem.',
    keywords: [
      'inland logistics bottleneck',
      'first mile',
      'agricultural transport',
      'supply chain risk',
      'grain corridor',
      'origin logistics',
    ],
  },
  structuredData: { article: true },
};
