import type { LogisticsConceptContent } from '@/types/content';

export const inlandWaterwayTransport: LogisticsConceptContent = {
  id: 'logistics-concept-inland-waterway-transport',
  slug: 'inland-waterway-transport',
  contentType: 'logistics-concept',
  title: 'Inland Waterway Transport',
  alternativeNames: ['Barge transport', 'River freight'],
  category: 'Logistics concept',
  subcategory: 'Transport mode',
  logisticsClass: 'transport-mode',
  summary:
    'Inland waterway transport moves bulk agricultural commodities along rivers and canals by barge, at the lowest inland cost per tonne available where a navigable river happens to run the right way. Its defining vulnerability is that the infrastructure is a natural system: the river decides how much can move, and the river changes.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Where a navigable river connects a producing interior to a port, it tends to become the spine of that region’s agricultural exports. The great grain rivers — the Mississippi system, the Paraná, the Rhine, the Danube, the Yangtze — carry volumes overland that would otherwise need vast fleets of trucks or heavily invested rail corridors. A tow of barges moves an enormous parcel behind a single vessel and crew, and does so on infrastructure that, in the main, nobody had to build.',
    },
    {
      type: 'paragraph',
      text: 'That last point is also the mode’s weakness. A river is not an engineered asset with a guaranteed capacity; it is a hydrological system that responds to rainfall, drought, season, and ice. When the water level falls, the barges cannot load as deeply, and the corridor’s capacity contracts — not gradually and not by negotiation. A mode whose economics depend on the river is a mode whose economics depend on the weather in a catchment, often far from the farms it serves.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Transport mode — carriage by barge on rivers and canals',
    },
    {
      label: 'Cargo form',
      value: 'Predominantly dry bulk; containers on some corridors',
    },
    {
      label: 'Economic character',
      value:
        'Lowest inland cost per tonne where it exists; very high aggregation behind one vessel',
    },
    {
      label: 'Governing constraint',
      value:
        'Navigable depth, which is set by hydrology rather than by investment or demand',
    },
    {
      label: 'Also constrained by',
      value: 'Lock dimensions and lock capacity, and bridge clearances',
    },
    {
      label: 'Seasonality',
      value:
        'Low water, flood, and ice can restrict or close a corridor for parts of the year',
    },
    {
      label: 'Requires',
      value:
        'Road or rail to reach it, and a transfer facility at each end — it serves no farm directly',
    },
  ],
  sections: [
    {
      id: 'why-rivers-carry-grain',
      heading: 'Why rivers carry grain',
      body: [
        {
          type: 'paragraph',
          text: 'The physics are favourable in a way that is hard to beat. Moving a mass through water at low speed requires strikingly little energy compared with moving it over ground on wheels, and a single towboat can push a large assembly of barges with one crew. For a commodity that is homogeneous, storable, low in value per tonne, and moving in enormous quantities — which describes bulk grain and oilseed almost perfectly — this combination is close to ideal. The commodity is not in a hurry, and the mode is not fast, and neither of those is a problem.',
        },
        {
          type: 'paragraph',
          text: 'The catch is geography. Rivers run where they run, and they do not connect the places trade might wish they did. Inland waterway transport is therefore not a mode a shipper selects so much as a mode a region either has or does not have, and its presence shapes where elevators, crushing plants, and export terminals are built. Once that infrastructure exists, the corridor becomes self-reinforcing, and the region’s entire logistics posture is built around the assumption that the river will be there.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Slow is a feature, not a defect',
          text: 'The mode’s long transit times are irrelevant to a storable commodity moving on a forward sale, and fatal to a perishable one. This is why inland waterways carry grain, oilseeds, and fertiliser, and not fresh produce.',
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How the mode works',
      body: [
        {
          type: 'paragraph',
          text: 'Cargo reaches the water by road or rail into a river elevator, which stores, blends, and loads it into barges. Barges are assembled into a tow and pushed or towed downriver to an export terminal, where the cargo is transferred — often into storage, sometimes directly into a seagoing vessel. The barge itself is a simple, unpowered box; the intelligence of the system is in the towboat, the terminals, and the locks.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Barge',
              description:
                'An unpowered hull carrying the cargo. Cheap, simple, and assembled into groups rather than operated individually.',
            },
            {
              term: 'Tow',
              description:
                'An assembly of barges moved by one towboat. The unit the economics are built on — the crew cost is shared across the whole assembly.',
            },
            {
              term: 'Lock',
              description:
                'An engineered chamber lifting or lowering vessels past a change in level. A hard capacity constraint: a tow too large for the chamber must be broken up and passed in stages.',
            },
            {
              term: 'Draught restriction',
              description:
                'A limit on how deeply a vessel may be loaded, set by the controlling depth of the waterway at the time. It converts hydrology directly into payload.',
            },
            {
              term: 'River terminal',
              description:
                'The transfer point between land modes and the water. Since no farm is on a river, the terminal is where the waterway chain actually starts.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The transfer at each end is not incidental. Because the waterway serves points and agriculture is dispersed, every tonne moving on a river has been handled at least twice more than it would have been on a direct road journey — and each handling is an opportunity for breakage, contamination, and loss. The mode’s cost advantage has to be large enough to pay for that, which is exactly why it applies to long hauls and not short ones.',
        },
      ],
    },
    {
      id: 'when-the-river-fails',
      heading: 'When the river fails',
      body: [
        {
          type: 'paragraph',
          text: 'The characteristic disruption of the mode is low water. As levels fall, the controlling depth of the channel falls with them, and vessels must load more lightly to keep off the bottom. The effect on the corridor is non-linear and brutal: the same number of barges carry less, so more barges are needed for the same tonnage, on a waterway that may simultaneously be restricting tow sizes. Freight rates on the corridor respond immediately, and the cost is passed straight into the basis at the elevators upstream — which is why a drought in a river catchment shows up as a price signal for farmers who had a perfectly good crop.',
        },
        {
          type: 'list',
          items: [
            'Low water reducing permissible draught, cutting payload per barge and per tow',
            'Flooding, which can close a corridor outright and damage terminals',
            'Ice closing northern waterways seasonally, ending navigation for a period entirely',
            'Lock outage or maintenance, which stops everything on a corridor with no alternative path',
            'Silting and dredging backlogs, which reduce depth independently of the season',
            'Terminal capacity limits at the transfer points, which idle a whole tow rather than one vehicle',
            'Moisture ingress into barge holds, wetting hygroscopic cargo in an open-topped, covered hull',
            'Contamination from previous cargoes, notably where the same barges carry fertiliser and grain in alternation',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Hydrology is a logistics variable',
          text: 'On a waterway corridor, the water level is a capacity input in the same sense that vehicle availability is on a road. It cannot be increased by paying more, it is not under any operator’s control, and it is forecast rather than known. Chains built on rivers are chains with a weather dependency that has nothing to do with the growing season.',
        },
      ],
    },
    {
      id: 'where-it-fits',
      heading: 'Where it fits',
      body: [
        {
          type: 'paragraph',
          text: 'Against rail, the waterway is usually cheaper and less reliable; against road, it is dramatically cheaper and dramatically slower. Regions that have both a river and a railway tend to use them as competitors on the same flow, which is one of the few places in agricultural logistics where a genuine modal choice exists — and where the choice moves with the water level, the harvest peak, and the relative rate. Where the river is the only corridor, its constraints become the region’s constraints.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No depths, dimensions, or capacities are stated here',
          text: 'Controlling depths, lock dimensions, permissible tow sizes, barge capacities, and freight rates are properties of a specific waterway at a specific time, published by the authority responsible for that waterway. This page states none of them.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Move very large parcels of storable bulk commodity between an inland region and a port at the lowest available inland cost per tonne, by exploiting a navigable waterway and aggregating many barges behind a single vessel and crew.',
  operationalLimitations: [
    'No barge capacities, tow sizes, lock dimensions, controlling depths, or draught limits are given. These are specific to a waterway, a reach, and a date, and are published by the responsible waterway authority.',
    'No transit times are given. They depend on the corridor, the direction of travel, lock queues, and water conditions.',
    'No freight rates are given. Waterway rates respond sharply and immediately to water level and to harvest demand, and are quoted per corridor.',
    'This page cannot say whether a waterway is navigable for a given movement. Navigability is a current condition reported by the waterway authority, not a property of the mode.',
    'Seasonal closure, ice, flood, and dredging status differ by corridor and by year and are not generalisable.',
    'Barge cleaning standards and commodity compatibility are set by the operator and the applicable food-safety requirements for the specific consignment.',
  ],
  cargoForms: ['bulk-dry', 'containerised'],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'barley-grain' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'commercial-grain-silo' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'draught-survey' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Barge movement of grain and oilseeds on inland waterways and its role in export corridors',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain trade flows and the inland corridors serving major export origins',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Inland transport connectivity and its role in international freight chains',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Transport infrastructure as a constraint on agricultural market access',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Limited to regions with navigable waterways connecting production to ports — notably the Mississippi, Paraná, Rhine, Danube, and Yangtze systems. Where no such waterway exists, the mode is simply unavailable regardless of its economics.',
  limitations: [
    'A reference description of the mode, not a routing, chartering, or rate service.',
    'No depths, draughts, lock dimensions, tow sizes, capacities, transit times, or rates are given — all are waterway-, reach-, and date-specific.',
    'Navigability and restrictions are current conditions published by the responsible waterway authority, not properties of the mode.',
    'Practice differs greatly between river systems; this describes the general principle rather than any particular waterway.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Inland Waterway Transport: How Barges Move Grain to Port',
    description:
      'How river freight carries bulk agricultural commodities: why the physics favour barges, how tows and locks work, and why low water constrains what can move.',
    keywords: [
      'inland waterway transport',
      'barge transport grain',
      'river freight',
      'draught restriction',
      'low water logistics',
    ],
  },
  structuredData: { article: true },
};
