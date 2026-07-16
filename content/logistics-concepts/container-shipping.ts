import type { LogisticsConceptContent } from '@/types/content';

export const containerShipping: LogisticsConceptContent = {
  id: 'logistics-concept-container-shipping',
  slug: 'container-shipping',
  contentType: 'logistics-concept',
  title: 'Container Shipping',
  alternativeNames: ['Containerised transport', 'Box shipping'],
  category: 'Logistics concept',
  subcategory: 'Transport mode',
  logisticsClass: 'transport-mode',
  summary:
    'Container shipping moves cargo in standardised steel boxes that can pass between ship, rail, and road without the goods inside being touched. Its power is not the box but the standardisation: because every container presents the same interfaces, the whole world’s handling equipment can be built once.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A shipping container is a standardised load unit with standardised lifting and securing points. Cargo is packed into it once, at or near origin, and unpacked once, at or near destination; in between, the box moves between modes as an opaque unit. Nothing about the goods inside is visible to the handling system, and nothing about the handling system needs to know what the goods are. That indifference is the whole idea.',
    },
    {
      type: 'paragraph',
      text: 'For agriculture, containerisation changed which trades are possible at all. It made small parcels of high-value produce economic on routes where only shiploads had been, it allowed lot identity to survive a voyage in a way bulk carriage never can, and it brought refrigeration into the same standard frame. It also introduced a specific class of failure: because the box is sealed and opaque, whatever is wrong inside stays wrong and unobserved for the entire journey.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Transport mode — carriage in standardised intermodal units',
    },
    {
      label: 'Cargo form',
      value:
        'Containerised; goods may be palletised, bagged, or loose in a liner',
    },
    {
      label: 'Standardised by',
      value:
        'ISO freight container standards, which fix dimensions, ratings, and corner fittings',
    },
    {
      label: 'Unit of account',
      value:
        'The TEU — twenty-foot equivalent unit — used to express capacity and volumes',
    },
    {
      label: 'Key regulatory duty',
      value:
        'Verified gross mass must be declared before a packed container is loaded, under SOLAS',
    },
    {
      label: 'Preserves',
      value: 'Lot identity through the voyage, which bulk carriage destroys',
    },
    {
      label: 'Defining weakness',
      value:
        'The box is sealed and opaque — a fault inside is invisible until it is opened',
    },
  ],
  sections: [
    {
      id: 'the-standard-is-the-product',
      heading: 'The standard is the product',
      body: [
        {
          type: 'paragraph',
          text: 'It is easy to think the innovation was the box. It was not; boxes are old. The innovation was agreeing on the box, so that a crane in one country could lift a unit packed in another without knowing anything about it. ISO standards fix the external dimensions, the ratings, and above all the corner fittings — the castings at each corner through which every container is lifted, stacked, and secured. Because those interfaces are common, cranes, chassis, wagons, twistlocks, and cell guides can all be built to one specification and used everywhere.',
        },
        {
          type: 'paragraph',
          text: 'The economic effect is that handling cost collapses and stops depending on what the cargo is. A pallet of bagged coffee and a pallet of machinery cost the same to lift once both are inside identical boxes. This is why containerisation opened long-distance trade to agricultural consignments too small or too varied to fill a bulk vessel: the mode stopped charging for the awkwardness of the cargo.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why lot identity survives',
          text: 'A container is a boundary. Cargo loaded into one box stays that box’s cargo for the whole journey, so a specific lot, grower, or certification claim can be carried intact from origin to buyer. In a bulk hold the same consignment would be merged into an undifferentiated mass at loading.',
        },
      ],
    },
    {
      id: 'what-happens-inside',
      heading: 'What happens inside the box',
      body: [
        {
          type: 'paragraph',
          text: 'The container protects cargo from handling, but it is not a benign environment. A steel box crossing climate zones has walls and a roof that follow the outside temperature quickly while the cargo inside, with far greater thermal mass, does not. Warm, moist air packed in with the goods at origin meets a cold steel ceiling at sea, condenses, and rains back onto the cargo. This is container sweat, and it is the characteristic damage mechanism of dry containerised agricultural cargo — hygroscopic commodities and their packaging are precisely the things that suffer from it.',
        },
        {
          type: 'list',
          items: [
            'Container sweat — condensation on the roof and walls dripping onto the cargo as the box changes climate zone',
            'Cargo sweat — moisture condensing on cool cargo when warmer, moist air is admitted',
            'Cargo shift and collapse from inadequate securing, weight distribution, or void filling',
            'Contamination or taint from a previous cargo, residues, or an unsuitable container floor',
            'Infestation carried into the box at stuffing, or acquired from the container itself',
            'Structural or seal failure admitting water, which is undetectable until the doors open',
            'Overloading or eccentric loading, which is a handling and road-safety hazard as much as a cargo one',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Opacity is the trade-off',
          text: 'The same sealing that protects cargo and preserves lot identity means nobody sees the cargo between stuffing and unstuffing. Whatever condition the container leaves in, it largely arrives in. This is why the stuffing operation carries so much of the outcome, and why the condition of the box is inspected before it is packed rather than after.',
        },
      ],
    },
    {
      id: 'the-chain-around-the-box',
      heading: 'The chain around the box',
      body: [
        {
          type: 'paragraph',
          text: 'Container shipping is a network mode rather than a point-to-point one. Boxes move on scheduled liner services calling at a rotation of ports, and a consignment reaches a destination not served directly by being transhipped — lifted from one vessel to another at an intermediate hub. This is why container transit is expressed as a service and a routing rather than as a voyage, and why a delay early in a rotation propagates.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Stuffing and unstuffing',
              description:
                'Packing and unpacking the container. The operations that determine cargo condition on arrival, carried out before and after the visible transport.',
            },
            {
              term: 'Verified gross mass',
              description:
                'The declared mass of a packed container, required under SOLAS before it may be loaded aboard. A duty on the shipper, arising from ship stability and stack safety.',
            },
            {
              term: 'Transhipment',
              description:
                'Moving a container between vessels at an intermediate port. It extends reach and adds handovers, dwell, and lifts — each an opportunity for delay or damage.',
            },
            {
              term: 'Seal',
              description:
                'The device evidencing that the doors have not been opened since stuffing. It is an integrity record, not a lock, and its number links the physical box to the documents.',
            },
            {
              term: 'Demurrage and detention',
              description:
                'Charges arising when a container sits beyond agreed free time at the terminal or off-terminal. Their terms are set by the carrier’s tariff and the contract, not by any general rule.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Wood used inside a container — pallets, dunnage, bracing — is regulated in its own right, because untreated wood packaging is a recognised pathway for forest pests. The IPPC standard for wood packaging material sets out the treatment and marking regime, and a consignment can be refused on the state of its dunnage while the cargo itself is beyond reproach.',
        },
      ],
    },
    {
      id: 'limits-of-the-mode',
      heading: 'Limits of the mode',
      body: [
        {
          type: 'paragraph',
          text: 'Containerisation is not universally superior to bulk. It charges for the box, the stuffing, and the unstuffing, and for high-volume homogeneous commodities where none of that adds value, bulk remains far cheaper per tonne. The mode earns its cost where parcel size is smaller than a shipload, where lot identity has value, where the cargo needs refrigeration or a controlled atmosphere, or where the destination has no bulk facility to receive at.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'What this page is not',
          text: 'This describes how the mode works. It is not a booking, routing, or rate service, and it states no capacities, transit times, or charges. Whether a specific container may be loaded, on what service, and on what terms is determined by the carrier, the terminal, and the contract of carriage.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Carry cargo between modes and across oceans in a standardised, sealed unit so that handling cost stops depending on what the cargo is, parcel identity survives the journey, and consignments smaller than a shipload become economic over long distances.',
  operationalLimitations: [
    'No container capacities, internal dimensions, payload ratings, or TEU counts are given. They are properties of a specific container type, a specific box, and the applicable standard, and vary across the fleet.',
    'No transit times, service frequencies, or routings are given. They depend on the carrier’s service rotation, the ports called, transhipment, and conditions on the day.',
    'No freight rates, demurrage, or detention charges are given. These are set by carrier tariff and contract, are negotiated per shipper, and are volatile.',
    'This page cannot say whether a particular cargo should be containerised rather than shipped in bulk. That depends on parcel size, commodity value, destination facilities, and the contract.',
    'Verified gross mass, securing, and packing duties fall on the shipper for the specific consignment under the applicable regulations; the general description here does not discharge them.',
    'Wood packaging inside a container is subject to the importing country’s phytosanitary regime for the specific consignment, which this page does not state.',
  ],
  cargoForms: ['containerised', 'unitised', 'bulk-dry'],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'fruit',
    'vegetable',
    'nut',
    'beverage-crop',
    'spice',
    'fibre',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'chickpeas' },
    { type: 'commodity', slug: 'cashew-nuts' },
    { type: 'commodity', slug: 'black-pepper-corns' },
    { type: 'commodity', slug: 'cotton-lint' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'water-activity' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'palletisation' },
    { type: 'post-harvest', slug: 'liner-and-wrap' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'transhipment' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'packing-list' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    {
      type: 'logistics-concept',
      slug: 'flexible-intermediate-bulk-containers',
    },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
  ],
  sourceReferences: [
    {
      sourceId: 'iso',
      citedFor:
        'Freight container standards fixing dimensions, ratings, and corner fittings',
    },
    {
      sourceId: 'imo',
      citedFor:
        'SOLAS requirement for verified gross mass of a packed container before loading, and cargo securing',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Containerised liner shipping structure, port throughput, and its role in seaborne trade',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Regulation of wood packaging material used as dunnage and pallets within containers',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Service coverage, terminal capability, inland connectivity, and equipment availability differ sharply by port and region, and determine whether a route is served at all.',
  limitations: [
    'A reference description of how the mode works, not a booking, routing, or freight-rate service.',
    'No capacities, dimensions, payloads, transit times, or charges are given — they are container-, carrier-, service-, and contract-specific.',
    'Shipper duties such as verified gross mass and cargo securing apply to a specific consignment under the applicable regulations and are not discharged by any general description.',
    'Practice varies by trade, carrier, and port; this describes the general principle rather than any particular service or terminal.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Container Shipping: How Standardised Boxes Move Cargo',
    description:
      'How container shipping works: why standardisation rather than the box is the innovation, how lot identity survives a voyage, and what container sweat does.',
    keywords: [
      'container shipping',
      'containerised transport',
      'intermodal container',
      'container sweat',
      'TEU',
    ],
  },
  structuredData: { article: true },
};
