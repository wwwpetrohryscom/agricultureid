import type { LogisticsConceptContent } from '@/types/content';

export const reeferContainerTransport: LogisticsConceptContent = {
  id: 'logistics-concept-reefer-container-transport',
  slug: 'reefer-container-transport',
  contentType: 'logistics-concept',
  title: 'Reefer Container Transport',
  alternativeNames: [
    'Refrigerated container transport',
    'Integral reefer carriage',
  ],
  category: 'Logistics concept',
  subcategory: 'Transport mode',
  logisticsClass: 'transport-mode',
  summary:
    'A reefer container is an intermodal box with its own refrigeration unit, carrying perishables across modes while holding them at a set condition. It is a maintenance machine, not a cooling machine — the distinction explains most of the ways it disappoints.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A refrigerated container carries its own refrigeration plant at one end and draws electrical power from the ship, the terminal, a rail wagon, or a diesel generator set clipped to the chassis. Everything that makes an ordinary container useful — the standard dimensions, the corner fittings, the intermodal interfaces — remains true, so a perishable consignment can move from a packhouse to an inland buyer without being rehandled. This is what brought seasonal produce into year-round trade on routes that could not support a specialised reefer vessel.',
    },
    {
      type: 'paragraph',
      text: 'The unit works by circulating air. Cold air is delivered along the floor, passes through the load, absorbs heat, and returns to the evaporator at the top of the unit. That single fact — that the machine cools air, and the air cools the cargo — explains nearly every reefer failure that is not an equipment fault. If the air cannot reach the cargo, the unit will report that it is achieving its setpoint while the cargo it is meant to protect quietly warms.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Transport mode — intermodal carriage under active refrigeration',
    },
    {
      label: 'Cargo form',
      value: 'Containerised; typically palletised within',
    },
    {
      label: 'How it works',
      value: 'Cold air is delivered under the load and returns at the top',
    },
    {
      label: 'Designed to',
      value:
        'Hold a load already at condition — not to remove field heat or pull down a warm load',
    },
    {
      label: 'Power',
      value:
        'Ship, terminal, or rail supply; a generator set when on road or unplugged',
    },
    {
      label: 'Setpoint measured at',
      value:
        'Supply or return air depending on the commodity and convention — the two are not the same reading',
    },
    {
      label: 'Additional capability',
      value:
        'Fresh-air exchange, and on some units a controlled atmosphere and humidity control',
    },
  ],
  sections: [
    {
      id: 'the-machine-cools-air',
      heading: 'The machine cools air, not cargo',
      body: [
        {
          type: 'paragraph',
          text: 'A reefer unit has no way to touch the cargo. It conditions air and pushes it through the container, and the cargo is cooled only to the extent that this air reaches it. The floor is therefore not flat: it is a T-shaped decking that forms channels along which supply air travels the length of the box before it can rise through the load. That geometry is a functional part of the machine, and covering it up defeats the machine.',
        },
        {
          type: 'paragraph',
          text: 'This is why stowage inside a reefer is not the same problem as stowage inside a dry box. In a dry container the goal is to fill the space and stop things moving. In a reefer the goal is to build a load that air will pass through rather than around, which means packaging with aligned vents, pallets that do not block channels, and a stow that does not leave a gap along one wall for the air to shortcut down. A perfectly stacked reefer load can be a perfectly ventilated one or a perfectly sealed one, and the difference decides the outcome.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'It maintains; it does not rescue',
          text: 'Reefer refrigeration is sized to remove heat leaking through the walls and the heat the commodity itself generates. It is not sized to remove field heat from a warm load. Loading warm produce and expecting the container to cool it is the most consequential misunderstanding of the mode: the pull-down is slow, uneven, and consumes shelf life throughout.',
        },
      ],
    },
    {
      id: 'setpoint-and-what-it-means',
      heading: 'Setpoint, and what the reading means',
      body: [
        {
          type: 'paragraph',
          text: 'A reefer is instructed with a setpoint, and it controls to that setpoint at a defined point in the airflow — either the air being delivered into the load or the air returning from it. These readings differ, because the air has done work in between. Which one the unit controls to is a matter of the commodity and the convention in use, and a setpoint that is correct against one reference is not automatically correct against the other. A record showing the machine held its setpoint is a record about the air, not about the cargo.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Supply air',
              description:
                'The conditioned air entering the load. Closest to what the unit is producing, and the coldest air the cargo will meet.',
            },
            {
              term: 'Return air',
              description:
                'Air coming back to the evaporator after passing through the load. Reflects what the load has done to the air, and is warmer.',
            },
            {
              term: 'Fresh-air exchange',
              description:
                'A controllable vent admitting outside air. It removes gases that respiring produce accumulates, at the cost of admitting outside heat and moisture — so it is a trade, not a free good.',
            },
            {
              term: 'Pull-down',
              description:
                'The process of bringing a load from a warmer condition to setpoint. Slow, uneven, and not what the equipment is designed for — it is an upstream operation’s job.',
            },
            {
              term: 'Plug-out period',
              description:
                'Any interval when the unit is unpowered — between yard, terminal, and vessel, or in transit without a generator set. The box is insulated, not refrigerated, throughout.',
            },
          ],
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What goes wrong',
      body: [
        {
          type: 'paragraph',
          text: 'Reefer failures divide into three kinds, and only the first is what people expect. Equipment faults are real but comparatively rare and usually visible in the record. Far more common are stowage failures, where the machine works perfectly and the air never reaches the cargo, and instruction failures, where the machine faithfully delivers a condition that was wrong for the commodity in the first place — the classic case being a setpoint below a chilling-sensitive commodity’s tolerance, which produces injury that looks like poor quality and was in fact obedience.',
        },
        {
          type: 'list',
          items: [
            'Warm loading — field heat never removed upstream, leaving the unit to attempt a pull-down it was not designed for',
            'Blocked T-floor channels or over-height stow closing off the air path',
            'Air shortcutting through a gap rather than passing through the load',
            'Setpoint wrong for the commodity, including chilling injury from a setpoint below tolerance',
            'Mixed loads with incompatible condition, ethylene, or odour requirements sharing one airflow',
            'Fresh-air vent set wrong — too closed for a respiring commodity, or too open in hostile ambient conditions',
            'Extended plug-out at terminals, yards, and during modal transfers',
            'Drain blockage, door seal damage, or condenser fouling degrading capacity without an obvious alarm',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No setpoints appear on this page',
          text: 'There is no carrying temperature, humidity, vent setting, or atmosphere that is correct across commodities, cultivars, maturity stages, and destinations. Any figure stated generally would be wrong for most consignments. Carrying instructions for a real consignment come from the applicable commodity-specific technical guidance and the contract.',
        },
      ],
    },
    {
      id: 'where-it-sits-in-the-chain',
      heading: 'Where it sits in the chain',
      body: [
        {
          type: 'paragraph',
          text: 'The reefer is one link, and usually not the decisive one. Its arrival condition is largely determined before its doors close: by harvest maturity, by how promptly field heat was removed, by whether the load was held at condition awaiting despatch, and by how it was packed. The container’s contribution is to not lose what it was handed — which is exactly the framing of cold chain integrity, and the reason a reefer is best understood as a segment of a chain rather than as a solution to one.',
        },
        {
          type: 'paragraph',
          text: 'Against a specialised refrigerated vessel, the reefer container trades hold volume for reach. A reefer ship moves a large homogeneous parcel port to port; a fleet of containers moves many small, differently-specified parcels from many packhouses to many inland buyers, each on its own setpoint. The container mode has taken most of this trade for the same reason containerisation won elsewhere — not because it is a better refrigerator, but because it does not need the cargo to be rehandled.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Carry a perishable consignment across modes and long distances while holding it at the condition it was handed over in, so that a small, individually specified parcel can reach an inland destination without rehandling and without leaving the cold chain.',
  operationalLimitations: [
    'No setpoints, carrying temperatures, humidity levels, vent settings, or tolerances are given. They are specific to the commodity, cultivar, maturity stage, and destination, and no general value exists.',
    'No pull-down times, capacities, internal dimensions, or payloads are given. They are properties of a specific container and unit type and vary across the fleet.',
    'Whether a setpoint should be referenced to supply air or return air depends on the commodity and the convention in use for the trade; this page does not state which applies to any consignment.',
    'This page cannot say whether two commodities may share a reefer. Compatibility depends on condition, ethylene behaviour, and odour transfer for the specific pair.',
    'Power availability, plug-in practice, and monitoring at terminals and on vessels differ by port and carrier and are not generalisable.',
    'Equipment capability, alarm behaviour, and record format differ by unit manufacturer and model; the description here is generic.',
  ],
  cargoForms: ['containerised', 'unitised'],
  applicableCommodityClasses: ['fruit', 'vegetable', 'livestock-product'],
  applicableCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-blueberries' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'chilling-sensitivity' },
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'ethylene-production' },
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'internal-quality' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'refrigerated-container' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'field-heat-removal' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'palletisation' },
    { type: 'post-harvest', slug: 'ethylene-management' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'controlled-atmosphere-transport' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'temperature-monitoring-in-transit' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
  ],
  sourceReferences: [
    {
      sourceId: 'iso',
      citedFor:
        'Freight container standards, including the intermodal interfaces shared by refrigerated containers',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling of perishables and the role of refrigerated carriage in reducing loss',
    },
    {
      sourceId: 'codex',
      citedFor:
        'General principles of food hygiene relevant to temperature control of perishable foods in transport',
    },
    {
      sourceId: 'unctad',
      citedFor: 'Role of containerised refrigerated carriage in seaborne trade',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Reefer plug availability, terminal monitoring practice, ambient conditions, and power reliability differ by port and region and materially affect what the mode can hold.',
  limitations: [
    'A reference description of the mode, not an operating instruction, a carrying specification, or a booking service.',
    'No setpoints, temperatures, humidity levels, vent settings, pull-down times, or capacities are given — they are commodity-, equipment-, and contract-specific.',
    'Equipment behaviour differs by manufacturer and model; this describes the general principle rather than any particular unit.',
    'Carrying instructions for a real consignment come from commodity-specific technical guidance and the contract of carriage, not from this page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Reefer Container Transport: How Refrigerated Containers Work',
    description:
      'How a reefer container carries perishables: why it cools air rather than cargo, why it maintains rather than rescues a load, and how it fails.',
    keywords: [
      'reefer container',
      'refrigerated container transport',
      'reefer setpoint',
      'supply air return air',
      'perishable shipping',
    ],
  },
  structuredData: { article: true },
};
