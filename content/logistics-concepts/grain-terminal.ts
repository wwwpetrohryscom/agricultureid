import type { LogisticsConceptContent } from '@/types/content';

export const grainTerminal: LogisticsConceptContent = {
  id: 'logistics-concept-grain-terminal',
  slug: 'grain-terminal',
  contentType: 'logistics-concept',
  title: 'Grain Terminal',
  alternativeNames: [
    'Grain elevator',
    'Export elevator',
    'Grain silo terminal',
  ],
  category: 'Logistics concept',
  subcategory: 'Facility',
  logisticsClass: 'facility',
  summary:
    'A grain terminal receives, stores, conditions, and despatches bulk grain between land transport and a ship. Its real function is not storage but transformation of identity: it converts many farmers’ individual loads into a homogeneous, graded, contractual commodity.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A grain terminal looks like a storage facility, and describing it as one misses what it does. Grain arrives from many farms, in many trucks, wagons, or barges, each load slightly different — different moisture, different protein, different cleanliness, different variety. Grain leaves in a ship’s hold as a single parcel matching a single contractual specification. Something in between turned the first thing into the second, and that something is the terminal.',
    },
    {
      type: 'paragraph',
      text: 'This is why the terminal sits at the exact point where the physical chain and the commercial chain meet. It is where a farmer’s load stops being that farmer’s grain and becomes a quantity of a grade; where a sample determines what a delivery is worth; where blending assembles a specification that no single farm delivered; and where the quantity a buyer will pay for is fixed. The conveyors and silos are the visible part. The grading, sampling, and segregation decisions are the part that matters.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Facility — the interface between land transport and a vessel',
    },
    { label: 'Cargo form', value: 'Dry bulk' },
    {
      label: 'Real function',
      value:
        'Converting many heterogeneous farm loads into one homogeneous graded parcel',
    },
    {
      label: 'Core operations',
      value:
        'Intake, sampling, weighing, cleaning, drying, storage, blending, and loading',
    },
    {
      label: 'Decision point',
      value:
        'Sampling and grading at intake, which determines value and where a load goes',
    },
    {
      label: 'Throughput-constrained',
      value:
        'Its limit is usually intake or loading rate, not storage volume — capacity is a flow',
    },
    {
      label: 'Recognised hazard',
      value:
        'Grain dust explosion, and confined-space entry into bins — both engineered against',
    },
  ],
  sections: [
    {
      id: 'what-it-actually-does',
      heading: 'What the terminal actually does',
      body: [
        {
          type: 'paragraph',
          text: 'The central act is the deliberate destruction and reconstruction of identity. A load arrives, is sampled, and is graded. That grade determines the bin it goes into — and once it is in that bin, it is mixed with everyone else’s grain of the same grade and ceases to exist as a distinct thing. What the farmer is paid for is the grade the sample said their load was. What the buyer receives is a parcel drawn from bins, blended to hit a specification.',
        },
        {
          type: 'paragraph',
          text: 'Blending is the most commercially interesting operation in the building and the least visible. Because grain is graded on measurable factors, and because the value of a parcel is set by whether it meets a specification rather than by how comfortably it exceeds one, a terminal that holds grain of varying quality can combine streams so that the result lands on specification. Grain that is better than needed represents value given away; grain that is worse can be carried by grain that is better. This is legitimate, is how the trade works, and is precisely why sampling and grade determination carry the weight they do.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Identity preservation is the exception, and it costs',
          text: 'The whole design premise is that grain is fungible. Where a buyer needs a specific variety, origin, or certification kept separate — identity-preserved, organic, non-GM — the terminal must dedicate bins and clean between streams, which surrenders the flexibility the facility exists to provide. That is why identity preservation carries a premium, and why bulk chains are a poor fit for it.',
        },
      ],
    },
    {
      id: 'the-operations',
      heading: 'The operations, in sequence',
      body: [
        {
          type: 'paragraph',
          text: 'Grain flows through a fixed sequence, and the sequence is essentially the same whether the facility is a country elevator taking farm trucks or an export terminal loading ships. What differs is scale and rate.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Intake and sampling',
              description:
                'The load is weighed and sampled, and the sample is tested. The most consequential moment in the facility: it sets the price paid, the bin assigned, and whether the load is accepted at all.',
            },
            {
              term: 'Cleaning',
              description:
                'Removal of foreign material, chaff, and fines. A grade factor, and also a storage requirement — fines concentrate, restrict airflow, and carry moisture and insects.',
            },
            {
              term: 'Drying',
              description:
                'Reducing moisture to a level the grain can be stored at. Not a quality improvement but a stability one — wet grain is grain with a deadline.',
            },
            {
              term: 'Storage and aeration',
              description:
                'Holding grain in bins with air moved through the mass to manage temperature and prevent moisture migration. Storage is an active process, not a pause.',
            },
            {
              term: 'Blending and loadout',
              description:
                'Drawing from bins to assemble a parcel that meets a contract specification, and conveying it to the ship, wagon, or truck.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The binding constraint is almost always rate rather than volume. A terminal’s storage is the buffer that lets intake and loadout run at different times; what determines whether it can serve a harvest or a berth is how fast grain can be taken in and how fast it can be put out. This is why an apparently large facility can be overwhelmed at harvest — the bins are not full, the intake queue is simply longer than the day.',
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What goes wrong',
      body: [
        {
          type: 'paragraph',
          text: 'The failures are of two kinds: the grain deteriorating in store, and the facility not moving fast enough. Stored grain is a biological system — it respires, it hosts insects and moulds, and it heats. A bin is a deep, well-insulated mass in which heat generated at the centre cannot escape, so a problem develops where nobody can see it and is often detected as a temperature rise rather than as a visible fault. Moisture migration driven by temperature gradients across the season can wet a region of a bin that was loaded dry.',
        },
        {
          type: 'list',
          items: [
            'Self-heating and spoilage in store, developing invisibly in the middle of a deep mass',
            'Moisture migration across a bin driven by seasonal temperature gradients, wetting grain that was loaded dry',
            'Insect infestation, in the grain and in the structure itself — a facility can re-infest clean grain',
            'Mycotoxin development where damp grain is held, which is a rejection risk carried all the way to the border',
            'Fines and foreign material concentrating in the bin core, blocking airflow exactly where aeration is needed',
            'Sampling error at intake, which misprices the load and misassigns it — an error that propagates into every parcel it joins',
            'Cross-contamination between segregated streams, which destroys an identity-preserved claim silently',
            'Intake queues at harvest, when the constraint is the weighbridge and the pit rather than the storage',
            'Berth and vessel scheduling mismatch, where loadout capacity idles or the ship waits',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Two hazards define how these facilities are built',
          text: 'Suspended grain dust is a recognised explosion hazard, and terminals are engineered around it with aspiration, enclosure, ignition control, and explosion protection. Separately, entry into a grain bin is a confined-space operation with an engulfment hazard — flowing grain behaves as a fluid and a person in it cannot self-rescue. Both are governed by engineered systems and occupational-safety regulation. This page describes what the facility does; it is not an operating instruction and gives no parameters.',
        },
      ],
    },
    {
      id: 'where-it-sits',
      heading: 'Where it sits in the chain',
      body: [
        {
          type: 'paragraph',
          text: 'Terminals form a hierarchy. Country elevators take farm deliveries and aggregate; inland or river terminals consolidate further and feed rail or barge; export terminals assemble shiploads and load vessels. Grain typically passes through more than one, and each transfer is another opportunity for breakage, dust loss, and contamination — which is why the number of times a parcel is handled between farm and ship is a genuine design variable, not an incidental detail.',
        },
        {
          type: 'paragraph',
          text: 'The terminal is also where much of the trade’s information is produced. Grades, moisture, protein, and test weight are measured here, and stocks held here are what national statistics and market balance sheets are built from. A grain terminal is, in this sense, a measuring instrument for the market as much as it is a building — which is one reason its sampling practice is regulated and inspected rather than left to the operator.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Convert a stream of heterogeneous farm deliveries into homogeneous, graded, contract-specified parcels, buffer the timing mismatch between a harvest and a vessel, and transfer grain between land transport and a ship at the rate the berth requires.',
  operationalLimitations: [
    'No storage capacities, intake rates, loading rates, or throughputs are given. These are properties of a specific facility and its installed plant.',
    'No moisture targets, storage temperatures, aeration parameters, or drying conditions are given. They are commodity-, climate-, and duration-specific, and are set by the operator against the specific grain.',
    'No grade specifications or tolerances are given. Grades are defined by the applicable grading system for the commodity and jurisdiction, not by this page.',
    'Sampling and grading practice is regulated and differs by jurisdiction and by commodity; this page cannot state what applies at any facility.',
    'Whether identity preservation is available, and at what cost, is a property of a specific facility’s bin configuration and procedures.',
    'Dust control, explosion protection, and confined-space entry are engineered systems and regulated procedures under the applicable safety regulation; nothing here specifies or substitutes for them.',
  ],
  cargoForms: ['bulk-dry'],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'commodity', slug: 'sorghum-grain' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'test-weight' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'dockage' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'commercial-grain-silo' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'aerated-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'free-trade-zone' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'draught-survey' },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'inland-waterway-transport' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'rail-freight-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Grain elevator and export terminal operations, grain handling, and inspection in the marketing chain',
    },
    {
      sourceId: 'usda-ams',
      citedFor:
        'Official grain sampling, inspection, and grading practice at handling facilities',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Grain storage, drying, and post-harvest loss in handling and storage systems',
    },
    {
      sourceId: 'igc',
      citedFor: 'Grain trade flows, stocks, and export terminal context',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Facility scale, installed plant, grading systems, and inspection regimes differ by country and commodity, and grade definitions are jurisdiction-specific.',
  limitations: [
    'A reference description of the facility and what it does, not an operating instruction, an engineering specification, or a terminal service.',
    'No capacities, rates, moisture targets, aeration parameters, or grade specifications are given — all are facility-, commodity-, and jurisdiction-specific.',
    'Grading and sampling are regulated differently by jurisdiction and commodity; the applicable system governs, not this page.',
    'Dust explosion protection and confined-space entry are regulated engineering and safety matters outside this description’s scope.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Grain Terminal: How Farm Loads Become a Shipload',
    description:
      'What a grain terminal does: intake and sampling, cleaning, drying, storage, blending to specification, and loadout — and why it transforms grain identity.',
    keywords: [
      'grain terminal',
      'grain elevator',
      'export elevator',
      'grain blending',
      'grain grading',
    ],
  },
  structuredData: { article: true },
};
