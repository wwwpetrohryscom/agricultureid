import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const infrastructureFailure: SupplyChainRiskContent = {
  id: 'supply-chain-risk-infrastructure-failure',
  slug: 'infrastructure-failure',
  contentType: 'supply-chain-risk',
  title: 'Infrastructure Failure',
  alternativeNames: ['Chokepoint disruption', 'Asset outage'],
  category: 'Supply-chain risk',
  subcategory: 'Infrastructure',
  riskClass: 'infrastructure',
  summary:
    'A physical asset the chain depends on stops working — a berth, a bridge, a canal, a power supply, a waterway with too little water. What determines the consequence is not the size of the asset but whether anything else can do its job.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Supply chains are drawn as networks and built as a small number of specific objects. A route on a map that suggests many alternatives frequently resolves, on inspection, into one canal, one rail bridge, one loading berth with the right draught, one substation feeding a cold store. These assets are invisible while they work, which is most of the time, and this is exactly why chains discover their dependence on them at the moment they fail.',
    },
    {
      type: 'paragraph',
      text: 'The property that governs the consequence is substitutability, not scale. A large facility with equivalents nearby fails and cargo goes elsewhere; a small asset with no equivalent fails and the chain stops. This is why infrastructure failure resists intuition: the assets that matter most are often unremarkable, cheap, and entirely unmemorable until the day they are the only thing that was holding the route together.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Infrastructure — physical asset availability' },
    {
      label: 'Arises at',
      value:
        'Any fixed asset the chain routes through, from farm track to canal',
    },
    {
      label: 'Core mechanism',
      value:
        'An asset with no equivalent stops working, and every flow routed through it stops with it',
    },
    {
      label: 'Governing property',
      value:
        'Substitutability, not size — a small asset can be a hard constraint',
    },
    {
      label: 'Compounding factor',
      value:
        'Utility dependencies — power, water, and data — are shared by assets that look independent',
    },
    {
      label: 'Slow forms exist',
      value:
        'Low water, silting, and deferred maintenance restrict capacity without any visible failure',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'substitutability',
      heading: 'Substitutability decides the consequence',
      body: [
        {
          type: 'paragraph',
          text: 'The useful question about any asset in a chain is not how important it looks but what happens if it is gone. That question has only three answers, and they behave very differently: something else does the job at similar cost, something else does the job at much greater cost or delay, or nothing does the job.',
        },
        {
          type: 'paragraph',
          text: 'The third case defines a chokepoint, and chokepoints are where the mechanism becomes serious. A maritime chokepoint that cannot be transited forces a diversion measured in additional sea days, which absorbs vessel capacity across an entire trade and therefore raises freight for cargo that never intended to use the chokepoint at all. A rail bridge with no parallel route strands a corridor. A single berth capable of loading a given vessel class makes that berth the export capacity of a region, whatever the elevator behind it can do.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Alternatives on a map are not alternatives in practice',
          text: 'A second port that lacks the draught, the storage, the rail connection, or the inspection service is not a substitute. Substitutability is a functional test against the specific cargo, vessel, and regulatory requirement — not a matter of geography.',
        },
      ],
    },
    {
      id: 'forms',
      heading: 'Fast failures, slow failures, and shared dependencies',
      body: [
        {
          type: 'paragraph',
          text: 'Infrastructure fails in several distinct ways, and the slow forms are the ones that are systematically underweighted because they never produce an event to point at.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Sudden outage',
              description:
                'Structural failure, fire, collision, flood, or breakdown removes an asset without notice. Visible, attributable, and usually well reported.',
            },
            {
              term: 'Progressive restriction',
              description:
                'Low water on a river, silting of a channel, or a weight restriction placed on an ageing bridge. Capacity falls in steps over weeks; nothing ever "fails", and the chain adapts until it cannot.',
            },
            {
              term: 'Deferred maintenance',
              description:
                'Reliability degrades gradually as renewal is postponed. The asset works, then works with interruptions, then does not. The failure date is the visible part of a process that ran for years.',
            },
            {
              term: 'Utility dependency',
              description:
                'Power, water, fuel, and connectivity are inputs to almost every other asset. A power outage does not damage a cold store; it simply removes the thing that made it a cold store.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Utility dependency is a source of correlated failure that redundancy planning routinely overlooks, and correlated failure is what defeats contingency planning. Two facilities are only genuine alternatives if they do not share the substation, the water source, the fuel supply, or the network their systems run on. Redundancy that shares a dependency is not redundancy; it is the same asset with two names.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'How it propagates',
      body: [
        {
          type: 'paragraph',
          text: 'An asset failure propagates according to what the asset was doing. If it carried flow, the flow re-routes, and the alternatives — which were sized for their own traffic, not for their own traffic plus a diversion — congest. If it provided capacity, the capacity is simply less, and the shortfall is distributed by price and by allocation. If it enabled a condition, as a power supply enables refrigeration, then the cargo begins to deteriorate immediately and the clock is biological rather than commercial.',
        },
        {
          type: 'paragraph',
          text: 'The recovery profile is the part that is consistently misjudged. Physical repair timelines and chain recovery timelines are different quantities, and the second is longer. When an asset returns, the queue that formed while it was gone has to be worked off with the same capacity that could not keep up before, and every schedule that was disturbed has to be re-synchronised. The disruption outlives the failure by a wide margin, which is why "the bridge is fixed" and "the corridor is working" are announcements that arrive at different times.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'Sudden failures are self-announcing and need no indicator. The observation problem is entirely with the slow forms, and those are visible to anyone who watches the right measurement: river gauges, transit statistics and draught restrictions at canals, weight and speed restrictions posted on structures, notices to mariners, and outage frequency at the utilities behind a facility. Progressive restriction is the most observable variety of this risk and the least observed.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The map is not the network',
          text: 'Exposure to this risk cannot be assessed from a route diagram. It requires knowing which specific assets a chain actually routes through and whether the stated alternatives share a dependency with them. Most chains have never made that list.',
        },
      ],
    },
  ],
  riskMechanism:
    "A fixed physical asset that a chain routes through ceases to perform its function, and every flow depending on it stops or is restricted. The consequence is governed by substitutability rather than by the asset's size: where an equivalent exists at similar cost the flow re-routes, where an equivalent exists only at much greater cost or delay the chain absorbs the difference, and where nothing performs the function the asset is a chokepoint and the flow simply stops. Substitutability is a functional test against the specific cargo, vessel class, draught, connection, and regulatory service required — a nearby facility lacking any of these is not an alternative regardless of geography. Failure takes fast and slow forms: sudden outage through structural failure, fire, collision, or flood; progressive restriction through low water, silting, or weight limits, where capacity falls in steps and nothing ever visibly fails; deferred maintenance, where the failure date is the visible end of a years-long process; and utility dependency, where power, water, fuel, or connectivity are removed and the assets built on them stop being what they were. Utility dependency is a source of correlated failure that redundancy planning routinely overlooks, and redundancy that shares a substation, water source, or network is not redundancy. It propagates by pushing flow onto alternatives sized only for their own traffic, which then congest; by reducing capacity that is redistributed through price and allocation; and, where the asset enabled a condition such as refrigeration, by starting a biological clock immediately. Chain recovery lags physical repair, because the queue accumulated during the outage must be worked off with the same capacity that could not keep pace beforehand.",
  chainStages: [
    'assembly',
    'processing',
    'inland-transport',
    'border',
    'international-transport',
    'destination-market',
  ],
  observableIndicators: [
    'River or canal gauge readings falling, with draught, transit slot, or loading restrictions announced',
    'Notices to mariners, navigation warnings, or transit suspensions issued for a waterway or chokepoint',
    'Weight, height, or speed restrictions posted on a bridge, road, or rail structure serving a corridor',
    'Vessels routing around a chokepoint, lengthening voyages and absorbing tonnage',
    'Berth, crane, elevator, or loader taken out of service, with handling consolidated onto remaining equipment',
    'Power interruptions, load-shedding, or generator running reported at cold stores, packhouses, or terminals',
    'Increasing frequency of unplanned outages or emergency repairs at a facility',
    'Maintenance or renewal programmes reported as deferred, or asset condition assessments published',
    'Cargo diverting to alternative facilities, and queues appearing at those alternatives',
    "A route's freight differential moving without any change in cargo demand",
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no outage durations, repair timelines, capacity figures, transit statistics, or failure frequencies, and characterises the condition of no named asset, facility, corridor, or country.',
    "Assessing exposure for a real chain requires that chain's own data: the specific assets it routes through, the vessel class, draught, connection, and regulatory service each must provide, whether any stated alternative meets the same functional test, and whether the alternatives share a utility, water, fuel, or network dependency.",
    'Substitutability cannot be assessed from a route map. A facility that appears to be an alternative geographically may not be one functionally, and this is where exposure assessments readily go wrong.',
    'Physical repair timelines and chain recovery timelines are different quantities. An announcement that an asset has returned to service says nothing about when accumulated backlog will clear.',
    'AgricultureID publishes no asset condition data, outage information, gauge readings, or infrastructure status of any kind.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
    'fruit',
    'vegetable',
    'livestock-product',
    'fibre',
    'beverage-crop',
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'inland-waterway-transport' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'draught-survey' },
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'transhipment' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
  ],
  sourceReferences: [
    {
      sourceId: 'unctad',
      citedFor:
        'Maritime transport, port infrastructure, and chokepoint dependency in seaborne trade',
    },
    {
      sourceId: 'imo',
      citedFor:
        'Navigation, transit, and maritime safety framework governing waterway and chokepoint use',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Transport infrastructure and logistics performance as determinants of trade cost and reliability',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Agricultural transportation infrastructure and inland waterway movement context',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any fixed asset, but the assets, their condition, their alternatives, and the dependencies behind them are entirely route- and country-specific.',
  limitations: [
    'A reference description of a mechanism, not an assessment of any asset, facility, corridor, chokepoint, or country.',
    'No outage durations, capacities, transit figures, repair timelines, or failure rates are given, and no named infrastructure is characterised as vulnerable or reliable.',
    'Engineering condition, asset management, and repair practice are outside this scope; the page describes what an outage does to an agricultural chain.',
    'Exposure depends on the specific assets a chain routes through and the dependencies its alternatives share, which cannot be generalised.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Infrastructure Failure: Substitutability and Propagation',
    description:
      'How infrastructure failure disrupts a chain: why substitutability rather than size decides the consequence, and the slow forms that never look like failure.',
    keywords: [
      'infrastructure failure',
      'chokepoint disruption',
      'supply chain risk',
      'agricultural logistics',
      'inland waterway low water',
      'port infrastructure',
    ],
  },
  structuredData: { article: true },
};
