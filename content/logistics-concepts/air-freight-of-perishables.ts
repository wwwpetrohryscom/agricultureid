import type { LogisticsConceptContent } from '@/types/content';

export const airFreightOfPerishables: LogisticsConceptContent = {
  id: 'logistics-concept-air-freight-of-perishables',
  slug: 'air-freight-of-perishables',
  contentType: 'logistics-concept',
  title: 'Air Freight of Perishables',
  alternativeNames: ['Perishable air cargo', 'Airfreighted produce'],
  category: 'Logistics concept',
  subcategory: 'Transport mode',
  logisticsClass: 'transport-mode',
  summary:
    'Air freight carries perishables whose value or fragility cannot survive a sea voyage, buying time at a cost per kilogramme far above every other mode. Its paradox is that the fastest mode has the weakest cold chain: the flight is short, and almost nothing on the ground is refrigerated.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Air freight exists in agriculture for a narrow but important class of goods: those whose remaining life is too short, or whose value per kilogramme is too high, for the sea to make sense. Cut flowers, soft berries, fresh fish, out-of-season vegetables, and high-value speciality produce move this way. The mode does not compete with sea freight on cost and never will — it competes on the only thing a perishable cannot buy elsewhere, which is time.',
    },
    {
      type: 'paragraph',
      text: 'The counter-intuitive part is that speed does not deliver an intact cold chain. A perishable air consignment spends a small fraction of its journey in the aircraft and the rest passing through packhouses, trucks, forwarders, terminals, aprons, customs, and handlers. Those ground segments are numerous, often warm, frequently outdoors, and controlled by different parties. The chain is broken in the places where nothing is happening, not in the air.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Transport mode — carriage by air of time-critical perishables',
    },
    {
      label: 'Cargo form',
      value: 'Unitised — loose-loaded or built onto ULDs',
    },
    {
      label: 'Chosen for',
      value:
        'Remaining shelf life and value per kilogramme, not for cost per tonne',
    },
    {
      label: 'Charged on',
      value:
        'Chargeable weight — the greater of actual and volumetric weight, so density matters',
    },
    {
      label: 'Industry framework',
      value: 'IATA’s Perishable Cargo Regulations for handling and acceptance',
    },
    {
      label: 'Characteristic weakness',
      value:
        'The ground segments — apron, terminal, handover — not the flight itself',
    },
    {
      label: 'Capacity source',
      value:
        'Freighters and the holds of passenger aircraft, so capacity follows passenger networks',
    },
  ],
  sections: [
    {
      id: 'why-anything-flies',
      heading: 'Why anything flies at all',
      body: [
        {
          type: 'paragraph',
          text: 'Air freight is expensive enough that it only makes sense when the alternative is not a cheaper journey but no journey. A commodity with a short remaining life simply cannot reach a distant market by sea in a saleable state; the choice is not sea versus air but air versus not trading. This is why the airfreighted agricultural basket is so consistent across the world — high value density, short life, or both.',
        },
        {
          type: 'paragraph',
          text: 'The charging structure reinforces the selection. Air cargo is charged on chargeable weight, which is the greater of what the consignment actually weighs and what its volume implies at a standard density ratio. A bulky, light commodity therefore pays for space it does not weigh into, which is why loosely packed produce is punished and why packaging density is an economic decision in this mode in a way it is not in a container.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Speed is bought, not given',
          text: 'The premium buys elapsed time between origin and market. It does not buy cold, it does not buy careful handling, and it does not buy fewer handovers — those must each be arranged, specified, and paid for separately.',
        },
      ],
    },
    {
      id: 'the-ground-is-the-problem',
      heading: 'The ground is the problem',
      body: [
        {
          type: 'paragraph',
          text: 'Trace a perishable air consignment and the flight is a short, well-controlled interval inside a long, poorly controlled one. The consignment is built into a unit load device or onto pallets at a forwarder’s facility, trucked to an airport, accepted by a handler, staged in a terminal, moved across an apron, loaded, flown, unloaded, moved across another apron, staged again, cleared, broken down, and delivered. Each of those is a custody transfer, and many happen outdoors in whatever weather the airport has that day.',
        },
        {
          type: 'list',
          items: [
            'Apron exposure during loading and unloading, often in direct sun or in freezing conditions with no protection at all',
            'Terminal staging in facilities that may have no temperature-controlled area for perishables',
            'Multiple custody transfers between shipper, forwarder, handler, airline, and receiving agent',
            'Delays and offloads when a consignment is bumped for capacity, which convert a short exposure into a long one',
            'Warm build-up of unit load devices, locking in heat before the consignment ever reaches the aircraft',
            'Hold conditions that are pressurised and cool but are not a specified refrigerated environment for the cargo',
            'Border clearance at destination, where the consignment waits on documents rather than on transport',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Fast is not the same as cold',
          text: 'The most common failure in perishable air freight is a chain that was never cold rather than a chain that was slow. A consignment can reach the far side of the world overnight and arrive with less life than it would have had in a properly maintained reefer over weeks, because it spent hours warm on aprons and terminal floors in between.',
        },
      ],
    },
    {
      id: 'how-the-mode-is-organised',
      heading: 'How the mode is organised',
      body: [
        {
          type: 'paragraph',
          text: 'Air cargo capacity comes in two forms, and the difference matters for agriculture. Dedicated freighters fly cargo on cargo schedules. But a large share of the world’s air freight travels in the holds of passenger aircraft, which means capacity on a given route exists because passengers want to go there — not because produce does. Origins with thin passenger networks have thin freight capacity, at seasonal prices, regardless of what they grow.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Unit load device',
              description:
                'The container or pallet-and-net assembly in which cargo is built for the aircraft. The unit the airline handles; how it is built determines what the cargo inside experiences.',
            },
            {
              term: 'Chargeable weight',
              description:
                'The greater of actual weight and volumetric weight. Why packaging density is an economic decision in this mode.',
            },
            {
              term: 'Air waybill',
              description:
                'The contract of carriage and the consignment’s identity document in the air system. Unlike a bill of lading it is not a document of title.',
            },
            {
              term: 'Belly capacity',
              description:
                'Cargo space in passenger aircraft holds. Ties freight availability on a route to the passenger network rather than to freight demand.',
            },
            {
              term: 'Perishable Cargo Regulations',
              description:
                'IATA’s framework for handling, packaging, and accepting perishable air cargo — the industry’s reference for how this traffic should be treated.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Regulatory obligations do not soften because the mode is fast. A phytosanitary certificate, an import permit, and border inspection apply exactly as they would to a container, and a consignment that has crossed the world in hours can then sit at a border post waiting on a document. For perishables this is a particularly expensive place to wait, since the clock the shipper paid to beat is still running.',
        },
      ],
    },
    {
      id: 'limits-and-trade-offs',
      heading: 'Limits and trade-offs',
      body: [
        {
          type: 'paragraph',
          text: 'The mode has a hard economic boundary: as a commodity’s value per kilogramme falls, air freight stops making sense long before it becomes technically impossible. It also carries an environmental cost per tonne-kilometre far above surface modes, which has made airfreighted produce a subject of scrutiny in destination markets and, in some cases, of buyer policy rather than of regulation.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'What this page does not provide',
          text: 'No rates, transit times, capacities, temperature specifications, or packaging specifications appear here. Air freight rates are quoted per consignment and are volatile; handling requirements are set by the airline, the handler, and the applicable regulations for the specific commodity and route.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Deliver perishable consignments to distant markets within a remaining shelf life that no surface mode could meet, accepting a cost per kilogramme far above every alternative because for these goods the realistic alternative is not a slower journey but no trade at all.',
  operationalLimitations: [
    'No air freight rates are given. They are quoted per consignment, vary by route, season, and capacity, and are among the most volatile prices in logistics.',
    'No transit times or schedules are given. Elapsed time depends on routing, connections, handler performance, capacity, and border clearance, and the flight is a small part of it.',
    'No temperatures, holding conditions, or packaging specifications are given. They are commodity-specific and are set by the applicable technical guidance, the airline, and the handler.',
    'No capacities, unit load device dimensions, or payloads are given — these are aircraft-, device-, and operator-specific.',
    'Whether a consignment will be accepted, and on what conditions, is determined by the airline and the ground handler against the applicable regulations for that commodity and route.',
    'Cold chain capability on the ground varies enormously between airports and handlers and cannot be inferred from the mode or from a carrier’s network.',
  ],
  cargoForms: ['unitised', 'breakbulk', 'live'],
  applicableCommodityClasses: ['fruit', 'vegetable', 'livestock-product'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'vanilla-beans' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'chilling-sensitivity' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'internal-quality' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'field-heat-removal' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'palletisation' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'controlled-atmosphere-transport' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'temperature-monitoring-in-transit' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'iata',
      citedFor:
        'Perishable Cargo Regulations, air cargo handling and acceptance, unit load devices, and chargeable weight',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling of highly perishable produce and shelf-life constraints on distant markets',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Trade context for high-value perishable exports from origins dependent on air capacity',
    },
    {
      sourceId: 'codex',
      citedFor:
        'General principles of food hygiene relevant to handling perishable foods in transport',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, but sharply uneven. Air capacity follows airline networks rather than agricultural production, and ground cold chain capability at airports differs enormously between origins and destinations.',
  limitations: [
    'A reference description of the mode, not a booking, routing, or rate service.',
    'No rates, transit times, capacities, temperatures, or packaging specifications are given — all are consignment-, carrier-, and route-specific.',
    'Handling and acceptance requirements are set by the airline, the ground handler, and the applicable regulations for the specific commodity and route.',
    'Ground cold chain capability varies by airport and handler and cannot be inferred from the mode; this describes the general principle rather than any particular station.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Air Freight of Perishables: Why Fast Is Not the Same as Cold',
    description:
      'How perishable air cargo works: why goods fly at all, chargeable weight, and why the ground segments — not the flight — are where the cold chain breaks.',
    keywords: [
      'air freight perishables',
      'perishable air cargo',
      'chargeable weight',
      'unit load device',
      'IATA perishable cargo',
    ],
  },
  structuredData: { article: true },
};
