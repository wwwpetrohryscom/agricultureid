import type { LogisticsConceptContent } from '@/types/content';

export const coldChainIntegrity: LogisticsConceptContent = {
  id: 'logistics-concept-cold-chain-integrity',
  slug: 'cold-chain-integrity',
  contentType: 'logistics-concept',
  title: 'Cold Chain Integrity',
  alternativeNames: ['Unbroken cold chain', 'Temperature-controlled chain'],
  category: 'Logistics concept',
  subcategory: 'Chain integrity',
  logisticsClass: 'chain-integrity',
  summary:
    'Cold chain integrity is the property of a temperature-controlled chain in which the commodity is held within its intended condition continuously, from removal of field heat to delivery. Its defining characteristic is that it is cumulative and irreversible: a deviation is not corrected by later refrigeration, only recorded by it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A cold chain is not a set of cold rooms; it is a continuous condition maintained across a series of custodians. The commodity passes from a cooling operation to a store, from a store to a vehicle, from a vehicle to a terminal, from a terminal to a ship or aircraft, and out again — and at each transfer it is briefly the responsibility of someone whose incentives, equipment, and information differ from the last. Integrity is the word for the chain holding across all of those seams, and most cold chain failures happen at a seam rather than inside a box.',
    },
    {
      type: 'paragraph',
      text: 'The reason integrity matters, rather than merely average temperature, is that deterioration is cumulative and cannot be undone. Respiration, softening, water loss, and microbial growth all proceed faster when a perishable commodity is warmer, and the shelf life they consume is spent permanently. Refrigeration slows those processes; it does not reverse them. A consignment that was allowed to warm on a loading dock arrives with less remaining life than its temperature record at arrival would suggest, and no amount of subsequent cooling restores what was lost.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Chain integrity — a maintained condition, not an operation',
    },
    {
      label: 'Governing principle',
      value:
        'Deterioration is cumulative and irreversible; refrigeration slows it and never reverses it',
    },
    {
      label: 'Begins at',
      value:
        'Removal of field heat after harvest — not at the door of the vehicle',
    },
    {
      label: 'Weakest points',
      value:
        'Transfers, handovers, door openings, quay standing, and plug-out periods between custodians',
    },
    {
      label: 'Critical distinction',
      value:
        'Transport refrigeration is designed to hold a load at condition, not to cool a warm one down',
    },
    {
      label: 'Not universally colder-is-better',
      value:
        'Chilling-sensitive commodities are injured by temperatures below their tolerance; the correct condition is commodity-specific',
    },
    {
      label: 'Evidenced by',
      value:
        'Continuous monitoring records, which show whether the chain held — not that it did',
    },
  ],
  sections: [
    {
      id: 'why-integrity-not-temperature',
      heading: 'Why integrity, and not simply temperature',
      body: [
        {
          type: 'paragraph',
          text: 'It is tempting to treat a cold chain as a temperature target and to judge a consignment by the reading at arrival. That reading is close to meaningless on its own. A load can arrive at exactly its intended condition having spent hours warm on a dock in between, and a load can arrive slightly warm having been perfectly held for the entire voyage and merely opened for inspection. The two consignments have different remaining lives, and the arrival thermometer distinguishes them not at all.',
        },
        {
          type: 'paragraph',
          text: 'What determines outcome is the whole history of the commodity’s condition over time — how warm, for how long, how often. This is why the discipline is built around continuous records rather than spot checks, and why a chain is described as unbroken or broken rather than as warm or cold. The question is never "what temperature is it?" but "was it ever allowed to be something else, and for how long?"',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The central asymmetry',
          text: 'A cold chain can only lose. Every deviation subtracts remaining shelf life permanently; no subsequent period of correct handling adds any back. This is why the chain is defended at every seam rather than repaired at the end.',
        },
      ],
    },
    {
      id: 'where-the-chain-breaks',
      heading: 'Where the chain actually breaks',
      body: [
        {
          type: 'paragraph',
          text: 'Failures cluster at transitions, because a transition is the moment when the commodity is out of one controlled environment and not yet in the next, and when responsibility is ambiguous. A pallet on a dock between a store and a trailer is nobody’s asset in that instant. The equipment is generally not what fails; the handover is.',
        },
        {
          type: 'list',
          items: [
            'Field heat not removed before the chain begins — the load enters already warm and transport equipment cannot recover it',
            'Staging on docks, aprons, and quays between custodians, often the largest single deviation in an otherwise sound chain',
            'Plug-out periods when a refrigerated unit is disconnected for movement between yard, terminal, and vessel',
            'Door openings during multi-drop delivery, consolidation, or inspection at the border',
            'Incorrect setpoint, or a setpoint correct for a different commodity in a mixed load',
            'Airflow blocked by overloading, poor stacking, or packaging that closes the path the cold air needs to take',
            'Ethylene-producing and ethylene-sensitive commodities carried together, which is a compatibility failure rather than a temperature one',
            'Chilling injury from a setpoint below the commodity’s tolerance — a cold chain failure in which the equipment worked exactly as instructed',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A reefer maintains; it does not rescue',
          text: 'Transport refrigeration equipment is sized to remove the heat that leaks into a load and the heat the commodity itself generates, and to hold the load where it already is. It is not designed to pull down a load that arrives warm. This is why precooling is a separate operation, upstream, and why treating the vehicle as the cooling step is a common and expensive error.',
        },
      ],
    },
    {
      id: 'what-it-depends-on',
      heading: 'What integrity depends on',
      body: [
        {
          type: 'paragraph',
          text: 'Integrity is produced by a sequence of upstream operations, not by the transport leg. By the time a consignment is loaded, most of what will determine its arrival condition has already been decided: whether it was harvested at the right maturity, whether field heat was removed promptly, whether it was held at condition while awaiting despatch, and whether it was packed so that air can move through the load rather than around it.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Field heat removal and precooling',
              description:
                'The operation that brings the commodity to its intended carrying condition before the chain proper begins. Doing this in the vehicle instead is a design error, not a shortcut.',
            },
            {
              term: 'Commodity-specific condition',
              description:
                'The condition a commodity should be held at, which depends on the species, the cultivar, the maturity stage at harvest, and the intended market. It is a property of the consignment and is established from the applicable technical guidance, never from a general rule.',
            },
            {
              term: 'Load compatibility',
              description:
                'Whether commodities can share a space. Differences in required condition, ethylene production, ethylene sensitivity, and odour transfer all constrain what may travel together.',
            },
            {
              term: 'Airflow',
              description:
                'The path cold air takes through the load. Refrigeration cools air, and air cools produce; if the air cannot reach the commodity, the equipment reports success while the load warms.',
            },
            {
              term: 'Monitoring and records',
              description:
                'The evidence that the chain held. Monitoring does not maintain the chain — it reveals whether the chain was maintained, and locates the seam where it was not.',
            },
          ],
        },
      ],
    },
    {
      id: 'commercial-and-regulatory-frame',
      heading: 'The commercial and regulatory frame',
      body: [
        {
          type: 'paragraph',
          text: 'Because integrity spans custodians, it is ultimately a contractual construct as much as a physical one. The delivery term fixes where risk transfers, and a deviation on one side of that point is a different commercial event from the same deviation on the other side. Monitoring records matter here as much as they do physically: they are the evidence on which a claim is accepted or refused, and a chain with no record is a chain in which no party can demonstrate anything.',
        },
        {
          type: 'paragraph',
          text: 'On the regulatory side, temperature control of perishable foods is a food-safety measure and not only a quality one, and it is addressed in general hygiene principles rather than in a single universal rule. What temperature control a specific food requires in a specific jurisdiction is set by that jurisdiction’s food authority, against that food. For carriage by air, the perishables handling framework is set out separately by the industry’s own regulations.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal numbers exist, and this page gives none',
          text: 'There is no temperature, humidity, or duration that is correct across commodities, cultivars, maturity stages, and markets. Any general figure would be wrong for most consignments it was applied to. Carrying conditions for a real consignment come from the applicable commodity-specific technical guidance and the contract, not from a reference description.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Preserve the remaining marketable life of a perishable consignment by holding it continuously within its intended condition across every custodian and transfer, on the understanding that any deviation consumes shelf life permanently and cannot be recovered later.',
  operationalLimitations: [
    'No carrying temperatures, humidity levels, setpoints, or tolerances are given anywhere on this page. They are specific to the commodity, the cultivar, the maturity stage at harvest, the intended market, and the contract, and a generalised figure would be actively misleading.',
    'No maximum permissible deviation duration is given. How long a given commodity tolerates a given excursion depends on the commodity and the magnitude of the excursion, and is not generalisable.',
    'This page cannot tell a reader whether two particular commodities may share a load. Compatibility depends on required condition, ethylene behaviour, and odour transfer for the specific pair.',
    'Equipment capability, pull-down behaviour, and airflow characteristics differ by unit, container, and vehicle, and are properties of the specific equipment rather than of the mode.',
    'Where risk for a temperature deviation sits is determined by the delivery term and the contract of carriage for the specific transaction, not by any general principle described here.',
    'Regulatory temperature-control requirements for a specific food in a specific jurisdiction are set by that jurisdiction’s food authority and are not stated here.',
  ],
  cargoForms: ['containerised', 'unitised', 'breakbulk'],
  applicableCommodityClasses: [
    'fruit',
    'vegetable',
    'livestock-product',
    'root-tuber',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'raw-cow-milk' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'chilling-sensitivity' },
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'ethylene-production' },
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'internal-quality' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'field-heat-removal' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'refrigerated-container' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    { type: 'logistics-concept', slug: 'controlled-atmosphere-transport' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'temperature-monitoring-in-transit' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
  ],
  sourceReferences: [
    {
      sourceId: 'codex',
      citedFor:
        'General principles of food hygiene, in which temperature control of perishable foods is addressed as a food-safety measure',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling of perishable produce and the role of the cold chain in reducing food loss',
    },
    {
      sourceId: 'iata',
      citedFor:
        'Perishable cargo handling framework for temperature-controlled consignments carried by air',
    },
    {
      sourceId: 'unece-standards',
      citedFor:
        'Commercial quality standards for fresh produce moving in international trade',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Ambient conditions, infrastructure reliability, port and terminal practice, and regulatory temperature-control requirements differ by origin, route, and destination market.',
  limitations: [
    'A reference description of what cold chain integrity is and how it fails, not an operating instruction, a handling specification, or a cold chain design service.',
    'No temperatures, humidity levels, setpoints, tolerances, or deviation durations are given — they are commodity-, cultivar-, maturity-, and market-specific, and no universal value exists.',
    'Regulatory temperature-control requirements are jurisdiction-specific and are set by the applicable food authority for the specific food.',
    'Cold chain practice varies widely by commodity, trade, and infrastructure; this describes the general principle rather than any particular chain.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cold Chain Integrity: Why an Unbroken Chain Matters',
    description:
      'What cold chain integrity means, why deterioration is cumulative and irreversible, and why transport refrigeration maintains a load rather than cooling it.',
    keywords: [
      'cold chain integrity',
      'unbroken cold chain',
      'cold chain failure',
      'temperature-controlled transport',
      'perishable logistics',
    ],
  },
  structuredData: { article: true },
};
