import type { LogisticsConceptContent } from '@/types/content';

export const bulkSeaFreight: LogisticsConceptContent = {
  id: 'logistics-concept-bulk-sea-freight',
  slug: 'bulk-sea-freight',
  contentType: 'logistics-concept',
  title: 'Bulk Sea Freight',
  alternativeNames: ['Dry bulk shipping', 'Bulk carrier transport'],
  category: 'Logistics concept',
  subcategory: 'Transport mode',
  logisticsClass: 'transport-mode',
  summary:
    'Bulk sea freight carries unpackaged, free-flowing cargo directly in a ship’s holds, with the hold itself acting as the container. It is the mode that moves the world’s grains and oilseeds, and its defining problem is that a cargo which can be poured can also shift, settle, and heat.',
  introduction: [
    {
      type: 'paragraph',
      text: 'In bulk sea freight the commodity is loaded loose into the cargo holds of a bulk carrier and discharged loose at the far end. There is no packaging, no unit load, and no intermediate container: the ship is the packaging. This is what makes the mode so cheap per tonne over long distances, and it is also what makes the cargo’s own physical behaviour — its angle of repose, its moisture, its tendency to breathe and heat — a matter of ship safety rather than merely of product quality.',
    },
    {
      type: 'paragraph',
      text: 'The economics follow from the absence of packaging. Handling is done by machines that move mass rather than parcels — spouts and conveyors on loading, grabs or shore-based unloaders on discharge — so cost scales with tonnage rather than with the number of items. The consequence is that bulk suits homogeneous, storable, high-volume commodities where every tonne is interchangeable with every other tonne, and suits nothing else. A cargo whose individual units matter is a cargo that does not belong in a hold.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Transport mode — unpackaged carriage by sea' },
    {
      label: 'Cargo form',
      value: 'Dry bulk, carried loose in the ship’s holds',
    },
    {
      label: 'Typical commodities',
      value: 'Cereal grains, oilseeds, oilseed meals and cakes, pulses, sugar',
    },
    {
      label: 'Governing instrument',
      value:
        'IMO’s IMSBC Code for solid bulk cargoes; the International Grain Code for grain in bulk',
    },
    {
      label: 'Quantity determined by',
      value: 'Draught survey, rather than by counting units',
    },
    {
      label: 'Defining hazard',
      value:
        'A poured cargo can shift, settle, and self-heat — cargo behaviour is a stability question',
    },
    {
      label: 'Commercial frame',
      value:
        'Voyage or time charter, with laytime and demurrage set by the charter party — not by this page',
    },
  ],
  sections: [
    {
      id: 'what-the-mode-is-for',
      heading: 'What the mode is for',
      body: [
        {
          type: 'paragraph',
          text: 'Bulk sea freight exists to move fungible commodities across oceans at the lowest cost per tonne available. It achieves this by deleting the unit load entirely. Where containerised or breakbulk cargo must be packed, stacked, secured, and counted, bulk cargo is simply poured in and pumped, grabbed, or augered out. Every operation that touches an individual parcel is removed from the chain, and with it most of the labour.',
        },
        {
          type: 'paragraph',
          text: 'This is only possible when the cargo is genuinely homogeneous. Bulk carriage destroys parcel identity: once a consignment is in the hold it is a mass, not a set of lots, and it cannot be separated back out. A shipper who needs lot-level identity preserved through the voyage needs a different mode, or must accept that identity is maintained by segregation into separate holds and by documentation rather than by anything physical in the cargo itself.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The trade-off in one line',
          text: 'Bulk buys the lowest cost per tonne by giving up the unit load. What you lose with the unit load is parcel identity, protection from the ship’s environment, and the ability to sell part of a cargo as a distinct thing.',
        },
      ],
    },
    {
      id: 'how-the-operation-works',
      heading: 'How the operation works',
      body: [
        {
          type: 'paragraph',
          text: 'A bulk voyage is a sequence of mass-handling operations rather than a sequence of parcel movements. Before loading, holds are inspected and prepared: residues of the previous cargo, coatings, rust scale, and moisture are all potential contaminants of a foodstuff, and a hold that carried something incompatible is a hold that cannot take grain until it has been cleaned and passed. Loading then proceeds through shore spouts or conveyors, distributed between holds so that the ship is never stressed beyond what her loading plan allows.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Hold preparation and inspection',
              description:
                'Cleaning and survey of holds before loading. For food cargoes this is a contamination control, not housekeeping — the previous cargo is the most likely source of foreign material.',
            },
            {
              term: 'Loading plan',
              description:
                'The sequence and distribution of cargo between holds. It exists to keep hull stresses and stability within the ship’s approved limits at every stage, not only when loading is complete.',
            },
            {
              term: 'Trimming',
              description:
                'Levelling the cargo surface within a hold. An untrimmed cargo has a sloped surface with room to move; trimming reduces the void into which the cargo could shift when the ship rolls.',
            },
            {
              term: 'Ventilation',
              description:
                'Management of the air in the hold during the voyage, addressing condensation arising from the temperature difference between cargo and ship as the vessel changes climate zone.',
            },
            {
              term: 'Discharge',
              description:
                'Removal by shore-based unloaders, ship’s cranes with grabs, or pneumatic and mechanical systems. The final sweep of residual cargo from the hold is a distinct and slower operation.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Quantity is established by draught survey — by measuring how deep the ship sits and inferring the mass from her displacement — because there is nothing to count. This is a different epistemology from the containerised world, and it is why quantity disputes in bulk are resolved by survey rather than by tally.',
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What physically goes wrong',
      body: [
        {
          type: 'paragraph',
          text: 'The failures of bulk carriage are failures of a mass acting on itself and on the ship. A cargo loaded with too much moisture continues to respire and can heat in the stow, because a deep bed of grain is an excellent insulator and the heat generated at its centre has nowhere to go. The same depth means that a hot spot is invisible from the hatch and, in many ships, cannot practically be reached in mid-ocean. This is why moisture at loading is the single most consequential cargo property in the trade: it is decided before the ship sails and it cannot be corrected afterwards.',
        },
        {
          type: 'list',
          items: [
            'Self-heating and spoilage in the stow, driven by moisture and respiration in a bed too deep to cool',
            'Ship’s sweat and cargo sweat — condensation forming as the vessel transits between climate zones, wetting the cargo surface or the hold boundaries',
            'Cargo shift as the ship rolls, which is a stability hazard and not merely a redistribution',
            'Contamination from previous cargoes, hold coatings, or residues left by inadequate cleaning',
            'Infestation developing during the voyage in a cargo that was already carrying eggs at loading',
            'Mechanical damage to fragile cargoes from free fall at loading and from grabs at discharge',
            'Loss of the residual sweepings, and disputes over the difference between bill-of-lading and outturn quantity',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Cargo behaviour is a safety matter, not only a quality matter',
          text: 'The IMSBC Code exists because some solid bulk cargoes can liquefy, react, or otherwise endanger the ship. Whether a given cargo may be carried, and under what conditions, is determined by that cargo’s entry in the Code and by the shipper’s declaration to the master — never by a general description such as this one.',
        },
      ],
    },
    {
      id: 'regulatory-frame',
      heading: 'The regulatory frame',
      body: [
        {
          type: 'paragraph',
          text: 'Carriage of solid bulk cargoes is regulated internationally through IMO instruments given force by the SOLAS Convention. The IMSBC Code classifies solid bulk cargoes by the hazard they present — cargoes that may liquefy, cargoes with chemical hazards, and cargoes presenting neither — and sets out the information a shipper must provide to the master before loading. Oilseed cakes and meals are a familiar example of an agricultural cargo listed for its chemical behaviour rather than for anything to do with its food value.',
        },
        {
          type: 'paragraph',
          text: 'Grain in bulk has its own instrument. The International Grain Code addresses the stability consequences of a cargo whose surface can shift, and governs how a grain cargo must be stowed and secured for the ship to be permitted to sail. Separately, phytosanitary requirements attach to the consignment rather than to the ship, and the importing country’s national plant protection organisation sets what must be satisfied at the far end.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This page describes; it does not authorise',
          text: 'Whether a specific cargo may be loaded on a specific ship on a specific voyage is determined by the applicable Code entry, the shipper’s declaration, the ship’s approved documentation, and the master’s judgement. AgricultureID is not a party to any of those and provides no routing, chartering, or stowage service.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Move homogeneous, storable agricultural commodities across long ocean distances at the lowest available cost per tonne, by eliminating packaging and the unit load and handling the cargo as a mass instead.',
  operationalLimitations: [
    'This page describes the mode in general. Whether a particular cargo may be carried on a particular voyage is determined by its IMSBC Code entry, the shipper’s declaration to the master, and the ship’s approved stability and loading documentation — none of which are generalisable.',
    'No hold capacities, tonnages, parcel sizes, vessel dimensions, or draught figures are given. These are properties of an individual ship and an individual berth, and vary across the fleet and across ports.',
    'No voyage durations or transit times are given. They depend on the route, the vessel, weather, bunkering, and port queues.',
    'No freight rates or demurrage figures are given. Freight in bulk is chartered, negotiated per fixture, and volatile; laytime and demurrage are set by the charter party, not by any general description.',
    'Ventilation, cleaning standards, and hold preparation requirements are set by the charter party, the cargo, and the surveyor for the specific voyage; this page names the operations without specifying them.',
    'Whether a cargo requires treatment in transit, and what treatment is permitted, is a matter for the importing country’s regulations and licensed operators — not for this description.',
  ],
  cargoForms: ['bulk-dry'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'rapeseed' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'heat-damage' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'draught-survey' },
    {
      type: 'logistics-concept',
      slug: 'flexible-intermediate-bulk-containers',
    },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'inland-waterway-transport' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
  ],
  sourceReferences: [
    {
      sourceId: 'imo',
      citedFor:
        'IMSBC Code classification of solid bulk cargoes and the International Grain Code for grain carried in bulk',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Structure of dry bulk maritime transport and its role in seaborne trade',
    },
    {
      sourceId: 'igc',
      citedFor: 'Grain trade flows and bulk shipment context',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary requirements applying to consignments moving internationally',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Vessel classes, berth capability, draught restrictions, and terminal equipment differ by route and port, and determine what is physically possible on any given voyage.',
  limitations: [
    'A reference description of how the mode works, not a chartering, routing, stowage, or freight-booking service.',
    'No tonnages, capacities, dimensions, transit times, or freight rates are given — every one of them is vessel-, route-, and fixture-specific.',
    'Cargo admissibility and carriage conditions are determined by the applicable IMO Code entry and the shipper’s declaration for the specific consignment, not by this page.',
    'Practice varies widely between trades and ports; this describes the general principle rather than any particular berth, ship, or contract.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bulk Sea Freight: How Agricultural Commodities Move by Ship',
    description:
      'How bulk sea freight carries grain and oilseeds loose in a ship’s holds: what the mode is for, how loading and discharge work, and what goes wrong in the stow.',
    keywords: [
      'bulk sea freight',
      'dry bulk shipping',
      'bulk carrier',
      'grain shipping',
      'IMSBC Code',
    ],
  },
  structuredData: { article: true },
};
