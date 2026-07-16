import type { PostHarvestContent } from '@/types/content';

export const refrigeratedWarehouse: PostHarvestContent = {
  id: 'post-harvest-refrigerated-warehouse',
  slug: 'refrigerated-warehouse',
  contentType: 'post-harvest',
  title: 'Refrigerated Warehouse',
  postHarvestClass: 'cooling',
  processStage: 'storage',
  operatingPrinciple:
    'An insulated building is divided into chambers, each held at its own temperature by a refrigeration plant that circulates air over evaporator coils and back through the room. Because the plant serves several rooms at different setpoints — chilled, frozen, and sometimes controlled-atmosphere — the building functions as a set of distinct climates under one roof rather than as a single cold room. Its purpose is distribution rather than long-term keeping: goods arrive already at temperature, are consolidated with other goods, and leave. That makes the building’s real work as much about traffic as about cold — the doors, docks, and movements are where temperature is actually lost, and the design problem is holding a temperature in a building whose doors are constantly open.',
  riskFactors: [
    'Temperature loss at doors and docks, which is where a distribution store is open to the outside all day, unlike a store that is filled and closed',
    'Warm humid air entering and condensing on cold goods, cold surfaces, and floors, wetting cartons and creating slip hazards',
    'Product placed in a room at the wrong setpoint, causing chilling injury in sensitive commodities or freezing in chilled goods',
    'Freezing damage near evaporator coils and in the direct discharge of the air stream',
    'Ethylene accumulation where producing and sensitive commodities share a chamber, a constant risk in a mixed-goods store',
    'Odour and taint transfer between commodities sharing air in a chamber',
    'Water loss and shrivel where humidity is too low, since refrigeration dehumidifies the air it cools',
    'Blocked air circulation from overloaded racking, pallets against walls, or stacking into the return path',
    'Refrigeration or power failure, whose consequences scale with the value concentrated in a large store',
    'Assuming the store will improve or recover goods, when produce arriving warm or deteriorated simply continues to decline',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
  ],
  safetyLimitations: [
    'Refrigeration plants commonly use ammonia or other hazardous refrigerants, and a release in an enclosed cold store is a serious risk to life. Plant rooms and chambers are subject to specific regulation, engineered detection, and emergency procedures managed by the operator and qualified refrigeration engineers.',
    'Cold rooms are enclosed spaces where a person can be trapped, and where controlled-atmosphere chambers are deliberately oxygen-deficient and life-threatening to enter. Access is governed by the facility’s own written procedures and trained personnel. AgricultureID gives no entry, plant, or atmosphere procedure.',
    'Prolonged work at low temperature carries cold-stress risk, and mechanical handling equipment operates in the same space as people; both are addressed by the operator’s occupational-safety programme.',
  ],
  applicableCommodityClasses: [
    'fruit',
    'vegetable',
    'livestock-product',
    'root-tuber',
    'nut',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-lettuce' },
    { type: 'commodity', slug: 'fresh-broccoli' },
    { type: 'commodity', slug: 'fresh-carrots' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'raw-cow-milk' },
    { type: 'commodity', slug: 'hen-eggs' },
    { type: 'commodity', slug: 'fresh-strawberries' },
  ],
  qualityEffects: [
    'Holds each commodity near its own optimum by giving it a chamber at its own setpoint, which a single-temperature store cannot',
    'Slows respiration, ripening, water loss, and decay for as long as the temperature is maintained',
    'Preserves nothing that was not already there: goods arriving warm or deteriorated continue to decline, and the store cannot recover them',
    'Repeated door openings and dock exposure warm goods incrementally, and the damage accumulates across a distribution operation',
    'Mixed-commodity chambers risk ethylene damage and taint transfer that a dedicated single-commodity store avoids',
    'Refrigeration dehumidifies, so water loss and shrivel continue unless humidity is deliberately managed',
  ],
  environmentalContext:
    'Multi-temperature distribution cold stores sit between production and retail, and are the point at which the cold chain becomes a network rather than a line: goods from many origins at many temperatures are consolidated into deliveries for many destinations. Their density in a country tracks the development of its retail and export sectors, and their absence is a principal reason post-harvest losses are high in regions where production itself is sound. They are energy-intensive and depend on reliable power.',
  alternativeNames: [
    'Cold store',
    'Distribution cold store',
    'Multi-temperature warehouse',
    'Cold storage warehouse',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Cooling & cold storage',
  summary:
    'A refrigerated warehouse is a multi-chamber distribution cold store holding different commodities at their own temperatures. Its hardest problem is not making cold but keeping it in a building whose doors never stop opening.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A refrigerated warehouse is the node at which the cold chain becomes a network. Goods arrive from many origins — some chilled, some frozen, some just off a reefer — and are consolidated into deliveries bound for many destinations. To do that it must offer several temperatures at once, so the building is divided into chambers, each with its own setpoint, served by a central refrigeration plant. Chilled produce, frozen goods, dairy, and sometimes controlled-atmosphere rooms all sit under one roof at different climates.',
    },
    {
      type: 'paragraph',
      text: 'The distinction that matters is between a store that keeps and a store that distributes. A grower’s cold store is filled at harvest, closed, and opened months later; its problem is the long, quiet maintenance of a condition. A distribution store is never closed. Pallets move in and out continuously, doors and dock levellers are open to the outside for much of the working day, and every one of those events admits warm, humid air. The engineering that distinguishes a distribution cold store — air curtains, dock seals, rapid doors, vestibules, floor heating under freezer rooms — is almost entirely about traffic, not about refrigeration.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'An insulated multi-chamber store, each chamber at its own setpoint',
    },
    {
      label: 'Function',
      value: 'Distribution and consolidation rather than long-term keeping',
    },
    {
      label: 'The hard problem',
      value: 'Holding temperature in a building whose doors are open all day',
    },
    {
      label: 'Why chambers',
      value:
        'Commodities differ in optimum temperature; one setpoint cannot serve them all',
    },
    {
      label: 'Mixed-goods risks',
      value:
        'Ethylene damage, taint transfer, and product in the wrong chamber',
    },
    {
      label: 'Humidity',
      value:
        'Refrigeration dehumidifies, so shrivel continues unless humidity is managed',
    },
    {
      label: 'Serious hazards',
      value:
        'Hazardous refrigerants, enclosed spaces, and oxygen-deficient CA rooms',
    },
  ],
  sections: [
    {
      id: 'doors',
      heading: 'The doors are the design problem',
      body: [
        {
          type: 'paragraph',
          text: 'It is tempting to think of a cold store as a refrigeration problem. In a distribution warehouse it is mostly an infiltration problem. Every time a door opens between a cold chamber and a warmer space, air exchanges: cold dense air spills out at the bottom, warm air flows in at the top, and it happens quickly. In a store where doors open hundreds of times a day, that exchange, not conduction through the insulated panels, is the dominant heat load. It is also the dominant moisture load, and moisture is the more troublesome of the two.',
        },
        {
          type: 'paragraph',
          text: 'The water in warm incoming air has to go somewhere, and it goes onto the coldest surfaces available: the goods, the racking, the floor, and the evaporator coils. On goods and cartons it is condensation that weakens packaging and wets product. On floors it is a slip hazard, and in freezer rooms it is ice. On the coils it is frost, which insulates the coil, degrades its performance, and forces defrost cycles that put heat back into the room the plant is trying to cool. This is why dock seals, air curtains, rapid-acting doors, and vestibules are not refinements but core equipment, and why the discipline of not leaving doors open is a real operational control rather than housekeeping.',
        },
      ],
    },
    {
      id: 'chambers',
      heading: 'Why one temperature is not enough',
      body: [
        {
          type: 'paragraph',
          text: 'Produce does not share a single optimum. Temperate fruit and leafy vegetables keep best close to freezing; many tropical and subtropical crops suffer chilling injury at those temperatures and are damaged rather than preserved by them; frozen goods need a different regime entirely. A warehouse serving a retail supply chain handles all of these simultaneously, so it is built as a set of chambers, each at a setpoint, rather than as one cold box. Getting a pallet into the right chamber is therefore a quality decision, and misplacement produces damage — chilling injury or freezing — that may not be visible until the goods are opened downstream.',
        },
        {
          type: 'paragraph',
          text: 'Sharing a chamber creates its own problems. Ethylene-producing commodities emit a ripening hormone that acts on ethylene-sensitive ones stored in the same air, so a chamber mixing them will over-ripen, yellow, or damage part of its own contents. Aromatic and odour-absorbing goods transfer taint the same way. Neither problem exists in a single-commodity grower’s store; both are permanent features of a mixed distribution store, and they are managed by chamber allocation policy. Which commodities can share which conditions, and at what setpoints, is set by the applicable national storage guidance and commodity references — this entry gives no temperatures.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'No universal settings',
          text: 'Optimum temperature, humidity, chilling sensitivity, and compatibility are commodity- and sometimes cultivar-specific, and are set by the applicable national storage guidance. This entry states none of them.',
        },
      ],
    },
    {
      id: 'hazards',
      heading: 'Why cold stores are a regulated environment',
      body: [
        {
          type: 'paragraph',
          text: 'Industrial refrigeration at this scale commonly runs on ammonia, an efficient refrigerant that is also toxic and, in the confined volume of a cold store, capable of killing. Releases are the reason plant rooms are engineered with detection, ventilation, and emergency response, and the reason refrigeration plant is the domain of qualified engineers working under specific regulation. Alternative refrigerants carry their own hazard profiles. None of this is incidental to the storage function — it is inherent in how the cold is made.',
        },
        {
          type: 'paragraph',
          text: 'The rooms themselves carry hazards too. A cold chamber is an enclosed space in which a person can be trapped; prolonged work at low temperature is a recognised occupational exposure; and mechanical handling equipment shares the aisles with people. Where a store includes controlled-atmosphere chambers, those rooms are deliberately held at oxygen concentrations that will not sustain life, and entering one without atmosphere testing and the facility’s procedures is fatal. All of this is managed through the operator’s written procedures and the applicable regulations, and is named here because it is part of what a refrigerated warehouse is.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related systems',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus cold storage',
              description:
                'Cold storage is the underlying concept — what refrigeration does to perishable produce, and its limits. A refrigerated warehouse is one implementation: multi-chamber, distribution-focused, and defined by traffic.',
            },
            {
              term: 'Versus the cold chain',
              description:
                'The cold chain is the whole unbroken sequence from field to consumer. This warehouse is a node in it, and the point at which the chain branches from many origins to many destinations.',
            },
            {
              term: 'Versus a refrigerated container',
              description:
                'A reefer is a sealed box moving on a route with a fixed stow, untouched for weeks. A warehouse is stationary, constantly accessed, and multi-temperature. Their failure modes barely overlap.',
            },
            {
              term: 'Versus a grower’s cold store',
              description:
                'A store filled at harvest and opened months later optimises long, undisturbed keeping of one commodity. A distribution store optimises throughput of many, and pays for it in door losses and mixing risk.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'lettuce' },
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'strawberry' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'refrigerated-container' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'ambient-warehouse-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Cold store infrastructure and cold-chain development',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Optimum storage conditions and commodity compatibility',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Cold storage and handling of fruits, vegetables, and animal products',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Post-harvest cooling and storage of horticultural produce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated where retail and export supply chains are developed. Setpoints and compatibility rules are commodity-specific and are set by national storage guidance; refrigerant safety is nationally regulated.',
  limitations: [
    'This entry states no chamber temperature, humidity, or holding duration: all are commodity- and sometimes cultivar-specific and are set by the applicable national storage guidance.',
    'Commodity compatibility — which goods can share a chamber without ethylene damage or taint — is specific and cannot be inferred from this entry.',
    'Refrigeration plant, refrigerant hazards, and cold-room access are subject to national regulation and the operator’s own procedures. Nothing here is a plant, entry, or emergency procedure.',
    'Store designs, chamber configurations, and door technologies vary widely; the behaviour described is general and does not predict how a particular facility performs.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Refrigerated Warehouse: Multi-Temperature Cold Stores',
    description:
      'How distribution cold stores work: chambers at different setpoints, why doors and docks are the real heat load, and ethylene and taint in mixed rooms.',
    keywords: [
      'refrigerated warehouse',
      'distribution cold store',
      'multi-temperature warehouse',
      'cold store doors',
      'ammonia refrigeration',
    ],
  },
  structuredData: { article: true },
};
