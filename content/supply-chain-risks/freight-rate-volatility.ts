import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const freightRateVolatility: SupplyChainRiskContent = {
  id: 'supply-chain-risk-freight-rate-volatility',
  slug: 'freight-rate-volatility',
  contentType: 'supply-chain-risk',
  title: 'Freight Rate Volatility',
  alternativeNames: ['Ocean freight volatility', 'Shipping cost volatility'],
  category: 'Supply-chain risk',
  subcategory: 'Logistics',
  riskClass: 'logistics',
  summary:
    'The cost of moving a commodity changes faster than the commodity trade can adjust to it. Because freight is a large share of the delivered cost of a low-value, high-bulk cargo, a freight move can reorder which origin is competitive without anything happening to the crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Freight is a market, not a tariff. The price of moving a tonne of grain or a container of fruit is set by the balance between available capacity and demand for it on a particular route at a particular time, and both sides of that balance are inelastic in the short run. Ships cannot be built in a quarter, and cargo that has been harvested must move. When either side shifts, the price is what absorbs the shock.',
    },
    {
      type: 'paragraph',
      text: 'For agricultural trade this matters disproportionately because of what the cargo is worth. Freight is a cost per tonne, largely independent of the value of that tonne, so it is a small fraction of the delivered cost of pharmaceuticals and a large fraction of the delivered cost of bulk grain. A freight move that is a rounding error for high-value goods can decide whether a grain origin is competitive in a destination market at all.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Logistics — cost of movement' },
    {
      label: 'Arises in',
      value: 'The freight market, not in the commodity or the crop',
    },
    {
      label: 'Core mechanism',
      value:
        'Short-run inelastic capacity meets short-run inelastic demand; price absorbs the imbalance',
    },
    {
      label: 'Why agriculture is exposed',
      value:
        'Freight is a cost per tonne, so its share of delivered cost is highest for low-value bulk cargo',
    },
    {
      label: 'Trade-level effect',
      value:
        'Changes freight parity between origins, reordering competitiveness without any production change',
    },
    {
      label: 'Allocated by',
      value:
        'The delivery term — which decides whether the seller or the buyer carries the exposure',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'why-freight-moves',
      heading: 'Why freight moves the way it does',
      body: [
        {
          type: 'paragraph',
          text: 'The supply of shipping capacity is fixed over any horizon a trade decision operates on. A vessel ordered today arrives years from now; a vessel already trading cannot be in two places. Demand, meanwhile, is driven by harvest calendars, industrial cycles, and destination requirements that pay little attention to the shipping market. Two inelastic curves meeting produces a price that moves sharply for modest changes in either — which is the whole of the volatility mechanism, and why freight markets look excitable compared with the physical trades they serve.',
        },
        {
          type: 'paragraph',
          text: 'Position compounds this. Shipping is not a pool of interchangeable capacity but a set of ships that are somewhere specific. Capacity that exists on the wrong side of an ocean is not capacity, and repositioning takes weeks and costs money. So a route can price as though tonnage were desperately scarce while tonnage sits idle elsewhere. Congestion has the same effect by a different route: ships held in queues are absorbed capacity, removed from the market as surely as if they had been scrapped, which is why congestion and freight rates move together.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Bulk and container freight are different markets',
          text: 'Bulk carriers are largely chartered voyage by voyage in a market that reprices continuously. Container freight moves through liner services with published rates, contract rates, and surcharges, and adjusts through announced changes and capacity management. The mechanism differs, so signals from one market should not be read across to the other.',
        },
      ],
    },
    {
      id: 'freight-parity',
      heading: 'How freight decides which origin wins',
      body: [
        {
          type: 'paragraph',
          text: 'A destination buyer does not buy an origin; it buys a delivered cost. That cost is the origin price plus the freight to bring it in. Two origins competing for the same market are therefore separated by a margin that includes their freight differential, and when freight on one route moves relative to another, the competitive order can change even though neither crop, nor either origin price, has moved at all.',
        },
        {
          type: 'paragraph',
          text: 'This is the deepest consequence of freight volatility and the least visible from inside any single firm. It means freight is not merely a cost line but a determinant of trade direction. A route that becomes expensive stops carrying cargo, and the cargo appears somewhere else — so a shipping-market event redraws trade flows, which then show up in trade statistics as though the change had been a commercial preference.',
        },
        {
          type: 'paragraph',
          text: "It also means the exposure is asymmetric between counterparties, and the delivery term decides for whom. Where the seller's obligation ends at the loading port, freight movement after that point is the buyer's exposure. Where the seller has undertaken to deliver at destination, the seller has taken a freight position whether or not it thought of it that way. A firm can be exposed to a market it does not participate in.",
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'What a freight move sets in motion',
      body: [
        {
          type: 'paragraph',
          text: 'Freight volatility propagates into the physical chain along several routes, few of which look like a shipping problem by the time they arrive.',
        },
        {
          type: 'list',
          items: [
            'Margin compression on trades already contracted at a delivered price, where freight was booked later than the sale',
            'Deferred or cancelled shipments, as a trade that no longer clears the delivered cost is simply not performed',
            'Origin substitution, redirecting demand to whichever origin the new freight geometry favours',
            'Storage pressure at origin, as cargo that cannot economically move stays where it is, in facilities not sized to hold it',
            'Cargo-form switching, where a shipper moves between container and bulk, changing handling and quality exposure with it',
            'Counterparty stress, where a party carrying an unhedged freight position on a thin margin cannot absorb the move',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last of these is how a freight market event becomes a credit event, and it is the reason freight volatility appears on risk registers that have nothing else maritime on them.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'Freight is among the better-observed parts of a supply chain, because the market publishes itself: route assessments, published liner rates and surcharge announcements, charter fixtures, vessel positions, and orderbook and demolition data are all available in some form. What none of them provide is a forecast. A rate assessment tells you what the market cleared at, which is a record of the present, and the same inelasticity that makes rates move sharply makes them poor at signalling their own next move.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A rate index is a measurement, not a price you can transact',
          text: 'Published freight assessments describe a defined route and vessel type under stated assumptions. An actual fixture depends on the specific cargo, laycan, ports, and counterparty. Using an index level as though it were an obtainable quotation is a common and expensive error.',
        },
      ],
    },
  ],
  riskMechanism:
    'The price of shipping is set where short-run inelastic capacity meets short-run inelastic demand, so modest imbalances on either side produce large price movements — the defining mechanism of freight volatility. Capacity is not fungible: ships are positioned somewhere specific and reposition slowly, so a route can price as though tonnage were scarce while tonnage lies idle elsewhere, and congestion tightens the market further by absorbing vessels into queues. Because freight is charged per tonne largely independently of cargo value, its share of delivered cost is greatest for low-value, high-bulk agricultural cargo, so a freight move alters delivered cost materially where it would be negligible for high-value goods. This propagates first through freight parity: a destination buyer compares delivered costs, so a change in the freight differential between two routes can reorder which origin is competitive without any change in production or origin price, redrawing trade flows that later appear in trade statistics as commercial choices. It then propagates into the physical chain as margin compression on trades priced before freight was booked, as deferred or cancelled shipments where the delivered cost no longer clears, as origin substitution, as storage pressure at origins whose cargo can no longer economically move, and as counterparty stress where an unhedged freight position exceeds a thin trading margin. The delivery term decides who carries the exposure, and a party can hold a freight position without having intended to take one.',
  chainStages: [
    'assembly',
    'inland-transport',
    'international-transport',
    'destination-market',
  ],
  observableIndicators: [
    'Published route rate assessments moving materially between consecutive assessments for the relevant vessel class and route',
    'Charter fixtures reported at levels away from recent assessments for comparable voyages',
    'Liner carriers announcing general rate increases, surcharges, or peak-season charges on a trade lane',
    'Announced blank sailings, service suspensions, or capacity withdrawal on a rotation',
    'Vessel positions and ballast movements indicating tonnage repositioning toward or away from a loading region',
    'Bunker fuel prices moving, feeding into voyage economics and surcharge formulae',
    'Congestion lengthening at ports on the route, absorbing tonnage into queues',
    'Freight differentials between competing origins to the same destination widening or inverting',
    'Delivered-cost quotations from an origin ceasing to be offered, or offers withdrawn before acceptance',
    'Diversion of a route around a chokepoint, lengthening voyage distance and absorbing capacity',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no freight rates, index levels, rate ranges, or historical movements. Freight assessments are published by commercial and institutional providers for defined routes and vessel classes, and are current only at the moment of assessment.',
    "Assessing exposure for a real chain requires that chain's own data: the actual routes and vessel classes used, the delivery terms in its contracts, whether freight was fixed before or after the cargo was priced, the cargo form, the freight share of its own delivered cost, and any freight cover it holds.",
    'Bulk and container freight are structurally different markets with different pricing mechanisms; an indicator drawn from one carries no information about the other, and no general statement covers both.',
    'A published rate assessment describes a standardised route under stated assumptions and is not a quotation obtainable for a specific cargo, laycan, port pair, or counterparty.',
    'AgricultureID publishes no freight rates, forecasts, or trading signals, and nothing here is chartering, hedging, or commercial advice.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
    'fruit',
    'vegetable',
    'fibre',
    'beverage-crop',
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'currency-volatility' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
  ],
  sourceReferences: [
    {
      sourceId: 'unctad',
      citedFor:
        'Maritime transport economics, fleet capacity, and freight-cost structure in seaborne trade',
    },
    {
      sourceId: 'imo',
      citedFor:
        'Maritime operational and regulatory framework affecting voyage economics and vessel deployment',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grains freight and shipment reporting context for bulk agricultural cargo',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market-information context in which freight and logistics costs are reported alongside commodity supply',
    },
    {
      sourceId: 'iata',
      citedFor:
        'Air-cargo framework context for perishables moved by air rather than sea',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to seaborne and air freight, but rates, capacity, and route economics are entirely route-, vessel-class-, and period-specific.',
  limitations: [
    'A reference description of a mechanism, not an assessment of any freight market, route, or trade.',
    'No rates, index values, freight shares, or cost figures are given: they are route-, class-, and moment-specific, and any figure would be stale on publication.',
    'Chartering practice, charterparty terms, and liner contracting are outside this scope; the page describes why rates move and what that does to an agricultural chain.',
    'Nothing here is commercial, chartering, hedging, or investment advice, and no freight market is forecast.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Freight Rate Volatility: Mechanism and Trade Effects',
    description:
      'Why freight rates move sharply, why low-value bulk agricultural cargo is most exposed, and how freight parity reorders origin competitiveness.',
    keywords: [
      'freight rate volatility',
      'ocean freight',
      'freight parity',
      'shipping cost risk',
      'bulk freight',
      'agricultural logistics cost',
    ],
  },
  structuredData: { article: true },
};
