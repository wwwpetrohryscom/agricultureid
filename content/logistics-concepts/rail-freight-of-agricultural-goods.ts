import type { LogisticsConceptContent } from '@/types/content';

export const railFreightOfAgriculturalGoods: LogisticsConceptContent = {
  id: 'logistics-concept-rail-freight-of-agricultural-goods',
  slug: 'rail-freight-of-agricultural-goods',
  contentType: 'logistics-concept',
  title: 'Rail Freight of Agricultural Goods',
  alternativeNames: ['Agricultural rail transport', 'Grain by rail'],
  category: 'Logistics concept',
  subcategory: 'Transport mode',
  logisticsClass: 'transport-mode',
  summary:
    'Rail moves agricultural commodities overland in volumes road cannot match and at costs road cannot approach, provided the flow is large, regular, and between two points that already have track. Its economics are the economics of a fixed network: efficient where it exists, absent where it does not.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rail is the overland mode for moving large, homogeneous parcels of agricultural commodity from an interior to a port or a processor. In the great grain-exporting interiors — the North American plains, the Black Sea hinterland, the Argentine pampas, the Australian wheat belt — rail is the artery that makes distant production economically reachable at all. Without it, those regions grow crops that cannot get to a ship.',
    },
    {
      type: 'paragraph',
      text: 'What distinguishes rail from road is not speed; rail is often slower door to door. It is that a train aggregates. One locomotive crew moves what would require a fleet of trucks and a fleet of drivers, and the marginal cost of an additional wagon is small. This is why rail rewards flows that are large and regular and punishes flows that are small and sporadic, and why the mode is organised around assembling volume rather than around moving quickly.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Transport mode — overland carriage on a fixed network',
    },
    {
      label: 'Cargo form',
      value:
        'Dry bulk in covered hoppers; containerised on intermodal wagons; breakbulk in vans',
    },
    {
      label: 'Economic driver',
      value:
        'Aggregation — one crew and one path move many wagons, so cost per tonne falls with train length',
    },
    {
      label: 'Rewards',
      value:
        'Large, regular, point-to-point flows over long distances between places that already have track',
    },
    {
      label: 'Punishes',
      value:
        'Small, irregular, or dispersed flows, and anywhere off the network',
    },
    {
      label: 'Hard constraint',
      value:
        'The network itself — gauge, loading gauge, axle load, and path availability are fixed assets',
    },
    {
      label: 'Always requires',
      value: 'Road at one or both ends, unless the shipper is rail-served',
    },
  ],
  sections: [
    {
      id: 'the-network-is-the-constraint',
      heading: 'The network is the constraint',
      body: [
        {
          type: 'paragraph',
          text: 'Every other mode adapts to demand; rail requires demand to adapt to it. A ship can call anywhere with a berth, a truck can reach anywhere with a road, but a train can only go where there is track — track of the right gauge, with the right clearances, able to carry the axle loads in question, with a path available on the timetable and a facility at each end able to load and unload. When any of those is missing, the mode is simply unavailable, however attractive its economics look.',
        },
        {
          type: 'paragraph',
          text: 'This is why rail capability is a property of a corridor rather than of a shipper. A grower with the same crop and the same volumes has a completely different logistics reality depending on whether an elevator on a rail line sits within reach. It is also why the mode’s constraints are so durable: a congested corridor cannot be relieved by adding vehicles the way a road can, because the constraint is the path, not the wagon.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Gauge breaks are real borders',
          text: 'Where two networks meet at different track gauges, a through movement requires transhipment or bogie exchange. The commercial effect is a border regardless of where the political one is, and it is why some overland corridors that look direct on a map behave like two separate journeys.',
        },
      ],
    },
    {
      id: 'how-agricultural-rail-works',
      heading: 'How agricultural rail is organised',
      body: [
        {
          type: 'paragraph',
          text: 'The dominant pattern for bulk commodities is aggregation at an origin facility. Grain arrives by road from farms into a country elevator or terminal, is stored, cleaned, and blended to a specification, and then loaded into wagons — ideally as a whole train assembled and despatched as one unit rather than as wagons collected piecemeal. The train runs to a port terminal or a processor, discharges, and returns. The efficiency comes from never breaking the set up.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Covered hopper',
              description:
                'The characteristic wagon for grain and oilseeds. Loaded from above through hatches and discharged from below through gates, so handling is by gravity.',
            },
            {
              term: 'Unit train',
              description:
                'A complete train of one commodity moving origin to destination as a set, without being broken up and re-sorted in yards. The formation the economics are built around.',
            },
            {
              term: 'Wagonload',
              description:
                'Individual wagons collected and sorted through yards to build trains. More flexible, far slower, and increasingly displaced by the unit-train model.',
            },
            {
              term: 'Intermodal wagon',
              description:
                'A flat or well wagon carrying containers, bringing containerised agricultural cargo onto the network without any of it being handled.',
            },
            {
              term: 'Path',
              description:
                'A slot on the network’s timetable. The scarce resource on a busy corridor — and the reason rail capacity cannot simply be increased by supplying more trains.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Wagon cleanliness matters for the same reason hold cleanliness matters at sea. A covered hopper that previously carried something incompatible is a contamination pathway into a food commodity, and for that reason wagon assignment and cleaning are part of the quality system rather than of housekeeping.',
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What goes wrong',
      body: [
        {
          type: 'paragraph',
          text: 'Rail’s failure modes are mostly failures of a shared, capacity-constrained system rather than of the cargo. Because the network is fixed and its paths are finite, a disruption anywhere propagates to everything else using the same track, and a shipper with a perfectly sound consignment can be delayed by an incident hundreds of kilometres away involving a different commodity entirely. Seasonality compounds this: harvest generates a demand peak on exactly the corridors that are already the tightest.',
        },
        {
          type: 'list',
          items: [
            'Wagon and locomotive availability at harvest peak, when every shipper on a corridor wants capacity in the same weeks',
            'Path congestion, where the constraint is the timetable slot rather than the rolling stock',
            'Gauge breaks and interoperability limits at network boundaries, requiring transhipment',
            'Contamination from a previous cargo in an inadequately cleaned wagon',
            'Moisture ingress through hatches and seals, wetting hygroscopic cargo in the wagon',
            'Mechanical damage and breakage from free-fall loading and gravity discharge',
            'Loading or discharge facility outage, which idles a whole train rather than one vehicle',
            'Infrastructure failure or industrial action on a corridor with no parallel route',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rail concentrates risk as well as volume',
          text: 'The same aggregation that makes rail cheap means a single point of failure stops a great deal at once. A blocked corridor, an unavailable terminal, or a labour dispute affects a whole flow rather than one vehicle, and there is rarely an alternative path.',
        },
      ],
    },
    {
      id: 'where-it-fits',
      heading: 'Where it fits against other modes',
      body: [
        {
          type: 'paragraph',
          text: 'Rail is almost never a complete journey for agricultural goods. The crop is produced across a landscape and rail serves points, so road performs the collection at origin and often the distribution at destination. The realistic comparison is therefore not rail against road but a road-plus-rail chain against an all-road one, and the answer turns on distance, volume, regularity, and whether the transfer facilities exist. Against inland waterway, where a river runs the right way, rail is usually the more expensive and more available of the two.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Nothing here is a capability statement',
          text: 'Axle loads, loading gauges, train lengths, wagon capacities, tariffs, and transit times are properties of a specific network, operator, and corridor. This page states none of them, and no figure should be inferred from it for any route.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Move large, regular parcels of agricultural commodity overland between points on a fixed network at a cost per tonne road cannot approach, by aggregating many wagons behind one crew and one path.',
  operationalLimitations: [
    'No wagon capacities, train lengths, axle loads, loading gauges, or payloads are given. These are properties of a specific network, operator, and wagon type and differ between countries and corridors.',
    'No transit times or schedules are given. They depend on path availability, corridor congestion, terminal performance, and interchange, and are not generalisable.',
    'No rail tariffs or rates are given. They are negotiated per contract and per corridor, and vary with season and capacity.',
    'This page cannot tell a reader whether rail is available for a given flow. Availability depends on track, gauge, clearances, terminal facilities at both ends, and path allocation on the specific corridor.',
    'Wagon cleaning standards and commodity compatibility rules are set by the operator and the applicable food-safety requirements for the specific consignment.',
    'Interoperability at network boundaries, including gauge changes and regulatory interchange, is corridor-specific and not described here for any route.',
  ],
  cargoForms: ['bulk-dry', 'containerised', 'breakbulk'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
    'root-tuber',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'sugar-beet' },
    { type: 'commodity', slug: 'rapeseed' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'commercial-grain-silo' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'exw-delivery-term' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'inland-waterway-transport' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Role of rail in moving grain and oilseeds from interior origins to export and processing destinations',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain trade flows and the inland transport links serving export corridors',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Transport infrastructure and logistics performance as constraints on agricultural trade',
    },
    {
      sourceId: 'unctad',
      citedFor: 'Inland transport connectivity in international freight chains',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, but extremely uneven. Network density, gauge, axle-load capability, and terminal provision differ by country and corridor, and determine whether the mode exists for a given flow at all.',
  limitations: [
    'A reference description of the mode, not a booking, routing, or rate service.',
    'No capacities, train lengths, axle loads, transit times, or tariffs are given — all are network-, operator-, and corridor-specific.',
    'Rail availability for a specific flow depends on infrastructure and terminal facilities that this page cannot assess.',
    'Practice differs greatly between rail systems; this describes the general principle rather than any particular network or operator.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rail Freight of Agricultural Goods: How Grain Moves Overland',
    description:
      'How rail carries agricultural commodities: why aggregation drives the economics, covered hoppers and unit trains, and where rail fits against road and river.',
    keywords: [
      'agricultural rail freight',
      'grain by rail',
      'covered hopper',
      'unit train',
      'rail logistics',
    ],
  },
  structuredData: { article: true },
};
