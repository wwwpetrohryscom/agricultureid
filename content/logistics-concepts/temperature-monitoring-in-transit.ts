import type { LogisticsConceptContent } from '@/types/content';

export const temperatureMonitoringInTransit: LogisticsConceptContent = {
  id: 'logistics-concept-temperature-monitoring-in-transit',
  slug: 'temperature-monitoring-in-transit',
  contentType: 'logistics-concept',
  title: 'Temperature Monitoring in Transit',
  alternativeNames: ['Cold chain monitoring', 'Data logging in transit'],
  category: 'Logistics concept',
  subcategory: 'Chain integrity',
  logisticsClass: 'chain-integrity',
  summary:
    'Temperature monitoring records the condition a consignment actually experienced during carriage, rather than the condition it was instructed to experience. It changes nothing physically — its entire function is evidential, and that turns out to be enough to change behaviour.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A monitoring device does not cool anything. It observes, timestamps, and stores — and everything it is useful for follows from that. Without a record, a cold chain is a set of assertions: the packhouse says the load was precooled, the carrier says the unit held its setpoint, the terminal says the box was plugged in promptly, and when the produce arrives soft, all of them are still saying it. The record is what converts a dispute about character into a question of fact.',
    },
    {
      type: 'paragraph',
      text: 'This is why monitoring has become standard in perishable trades despite adding cost and no physical protection whatsoever. It locates deviations in time, and locating a deviation in time locates it on a leg, and locating it on a leg identifies who was holding the consignment when it happened. The device is a cheap instrument whose real output is accountability.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Chain integrity — observation and evidence, not control',
    },
    { label: 'Cargo form', value: 'Containerised, unitised, breakbulk' },
    {
      label: 'What it does',
      value:
        'Records condition over time, with timestamps that locate a deviation on a leg',
    },
    {
      label: 'What it does not do',
      value:
        'Prevent, correct, or mitigate anything — it is an instrument, not a control',
    },
    {
      label: 'Two families',
      value:
        'Recording devices read on arrival, and connected devices reporting in near real time',
    },
    {
      label: 'Placement decides meaning',
      value:
        'A device in the airflow measures air; a device in the load measures the load — they disagree, and both are right',
    },
    {
      label: 'Evidential weight rests on',
      value:
        'Calibration, placement, and an unbroken custody trail for the record itself',
    },
  ],
  sections: [
    {
      id: 'the-record-is-the-product',
      heading: 'The record is the product',
      body: [
        {
          type: 'paragraph',
          text: 'The value of monitoring is entirely retrospective and entirely informational, and it is worth being blunt about this because monitoring is frequently sold as though it were protection. Fitting a logger to a consignment does not make that consignment any less likely to spoil. What it does is ensure that if the consignment spoils, the parties can find out why — and that expectation, applied consistently over time, is what actually improves chains. A terminal that knows plug-out periods are being recorded manages plug-out periods.',
        },
        {
          type: 'paragraph',
          text: 'The record also answers a question no arrival inspection can. Deterioration in a perishable is cumulative, so a consignment’s remaining life depends on its whole history, not its present state. Two loads arriving at identical temperatures can have very different futures on the shelf, and only the record distinguishes them. A buyer accepting on arrival condition alone is accepting on a measurement that does not contain the information they need.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Monitoring is not a control',
          text: 'A logger with a perfect record of a chain that failed has done its job. The instinct to treat the presence of monitoring as risk mitigation is a category error: it mitigates disputes, not deterioration. The chain is improved by acting on what the records show, which is a management activity rather than a technical one.',
        },
      ],
    },
    {
      id: 'what-is-actually-measured',
      heading: 'What is actually being measured',
      body: [
        {
          type: 'paragraph',
          text: 'A sensor reports the temperature at one point, and the choice of point determines what the record means. A probe in the supply airflow tells you what the equipment is delivering. A probe in the return air tells you what the load did to that air. A probe pushed into a pallet tells you about that pallet — which may be the warmest in the box, or the coldest, depending on where it sat relative to the airflow. None of these is the temperature of the consignment, because a consignment does not have a temperature; it has a distribution.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Recording logger',
              description:
                'Travels with the consignment and stores readings, read out at destination. Cheap and reliable, and tells you nothing while there is still time to act.',
            },
            {
              term: 'Connected device',
              description:
                'Reports in near real time over a network. Enables intervention in principle, provided somebody is watching and there is something they can actually do.',
            },
            {
              term: 'Unit-generated record',
              description:
                'The refrigeration equipment’s own log. Records what the machine was doing, which is a different claim from what the cargo was experiencing.',
            },
            {
              term: 'Placement',
              description:
                'Where the sensor sits. The single largest determinant of what a record means, and the most common reason two honest records disagree.',
            },
            {
              term: 'Calibration',
              description:
                'Traceable verification of the instrument. What separates a record that carries evidential weight from a number of unknown provenance.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'This is why a temperature record without a placement description is close to uninterpretable, and why disputes so often turn on where the device was rather than on what it said. The device is honest; the question is what it was honest about.',
        },
      ],
    },
    {
      id: 'the-real-time-question',
      heading: 'The real-time question',
      body: [
        {
          type: 'paragraph',
          text: 'Connected devices promise something loggers cannot: an alert while the consignment can still be saved. The promise is real but conditional, and the conditions are frequently unmet. An alert requires someone monitoring, someone empowered to act, an action that is physically available, and enough time for it to matter. A box mid-ocean with a failing unit generates an alert that nobody can do anything about, and the alert’s value is then exactly the value of a logger — an accurate record of a loss.',
        },
        {
          type: 'paragraph',
          text: 'Where real-time monitoring genuinely pays is where an intervention exists: a reefer unplugged in a yard can be plugged in, a unit failing at a terminal can be swapped, a load can be diverted to a nearer market while it still has life. These are all situations where the consignment is on land, attended, and within reach of someone with authority. The technology’s value therefore depends less on the device than on whether the chain has an actual response capability behind it.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'An alert nobody can act on is a logger with a subscription',
          text: 'The question to ask of any real-time monitoring proposal is not whether it will detect a deviation but what will happen when it does. If the answer is that a record will be created, a logger would have created the same record more cheaply.',
        },
      ],
    },
    {
      id: 'the-record-as-evidence',
      heading: 'The record as evidence',
      body: [
        {
          type: 'paragraph',
          text: 'Because the record’s purpose is evidential, the integrity of the record itself becomes a subject. A file that can be edited, a device that can be removed and warmed, a download with no custody trail — each undermines the very thing the record exists for. This is where monitoring meets the traceability discipline: the record must be attributable to a specific consignment, a specific device, and a specific period, and the identifiers linking them must be captured at the point of application rather than reconstructed afterwards.',
        },
        {
          type: 'paragraph',
          text: 'The commercial frame matters too. A record demonstrating a deviation is only useful to a party against the counterparty who held the goods when it occurred, and that is determined by the delivery term. A perfect record of a deviation that happened after risk passed to the buyer is a record of the buyer’s own loss. Monitoring produces evidence; the contract decides what that evidence is worth and to whom.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This page states no thresholds',
          text: 'What deviation matters, for how long, and with what consequence depends on the commodity, the cultivar, the maturity stage, and the contract. No alarm threshold, tolerance, or acceptable excursion appears here, because none would be correct across consignments.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Produce a timestamped record of the condition a consignment actually experienced, so that deviations can be located in time and therefore attributed to a leg and a custodian — and so that arrival condition can be interpreted against history rather than in isolation.',
  operationalLimitations: [
    'No alarm thresholds, tolerances, or acceptable excursion limits are given. What deviation matters depends on the commodity, cultivar, maturity stage, and contract, and no general value exists.',
    'No temperatures or setpoints appear on this page. Monitoring records a condition; it does not establish what the condition should be.',
    'This page cannot say where a sensor should be placed. Placement determines what a record means and is decided against the specific load, equipment, and purpose.',
    'Device accuracy, calibration status, and data integrity are properties of the specific instrument and its handling, and determine whether a record carries any evidential weight at all.',
    'Whether a record supports a claim depends on the contract, the delivery term, the applicable law, and the evidence as a whole — never on the record alone, and not on anything described here.',
    'Real-time monitoring delivers value only where an intervention is actually available; whether one is depends on the chain, not on the device.',
  ],
  cargoForms: ['containerised', 'unitised', 'breakbulk'],
  applicableCommodityClasses: ['fruit', 'vegetable', 'livestock-product'],
  applicableCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'raw-cow-milk' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'chilling-sensitivity' },
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'internal-quality' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'refrigerated-container' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'precooling' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    { type: 'logistics-concept', slug: 'controlled-atmosphere-transport' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
  ],
  sourceReferences: [
    {
      sourceId: 'gs1',
      citedFor:
        'Identification and data standards linking physical consignments to their records through the chain',
    },
    {
      sourceId: 'codex',
      citedFor:
        'General principles of food hygiene, including monitoring and record-keeping in food control systems',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Cold chain management in perishable supply chains and its role in reducing post-harvest loss',
    },
    {
      sourceId: 'iso',
      citedFor:
        'Measurement and calibration framework underpinning instrument traceability',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Network coverage for connected devices, and the response capability that determines whether real-time alerts are actionable, differ substantially by route and by chain.',
  limitations: [
    'A reference description of the practice, not an operating instruction, a device specification, or a monitoring service.',
    'No thresholds, tolerances, temperatures, or excursion limits are given — all are commodity-, cultivar-, and contract-specific.',
    'Whether a record supports a commercial claim is a matter for the contract, the delivery term, and the applicable law, and is not addressed here.',
    'Device technology and data practices vary widely; this describes the general principle rather than any particular system.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Temperature Monitoring in Transit: What the Record Is For',
    description:
      'How cold chain monitoring works: why the record is evidential rather than protective, what sensor placement means, and why calibration matters.',
    keywords: [
      'temperature monitoring in transit',
      'cold chain data logger',
      'reefer monitoring',
      'temperature record',
      'cold chain evidence',
    ],
  },
  structuredData: { article: true },
};
