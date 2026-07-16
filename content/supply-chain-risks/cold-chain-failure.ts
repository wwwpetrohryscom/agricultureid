import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const coldChainFailure: SupplyChainRiskContent = {
  id: 'supply-chain-risk-cold-chain-failure',
  slug: 'cold-chain-failure',
  contentType: 'supply-chain-risk',
  title: 'Cold Chain Failure',
  alternativeNames: ['Temperature excursion', 'Refrigeration failure'],
  category: 'Supply-chain risk',
  subcategory: 'Logistics',
  riskClass: 'logistics',
  summary:
    'A perishable consignment leaves the temperature regime its shelf life was designed around. The damage is cumulative and usually invisible at the moment it occurs, so a cold-chain failure is typically discovered at destination, long after the point at which it could have been prevented.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Refrigeration does not stop a perishable product changing; it slows the change down. Respiration in fruit and vegetables, microbial growth, enzymatic activity, and senescence all continue at a rate set largely by temperature, and a cold chain is the practice of holding that rate low enough, for long enough, that the product arrives with usable life remaining. Shelf life is therefore not a property of the product alone but of the product and its temperature history together.',
    },
    {
      type: 'paragraph',
      text: "This is what makes cold-chain failure behave unlike other logistics risks. There is no moment of breakage. A warm period consumes shelf life that is never recovered, and the consignment continues to look entirely normal — the loss is real but latent, and it is realised days later on a shelf or at a customer's intake. The chain has already been paid, the vessel has already sailed, and the evidence of what happened exists only if something was recording.",
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Logistics — chain integrity' },
    {
      label: 'Arises at',
      value:
        'Any point from harvest to delivery, most often at handovers rather than in steady transit',
    },
    {
      label: 'Core mechanism',
      value:
        'Deterioration rate rises with temperature; lost shelf life is cumulative and not recoverable',
    },
    {
      label: 'Discovery lag',
      value:
        'Damage is typically latent at the point of failure and visible only at destination',
    },
    {
      label: 'Weakest points',
      value:
        'Transfers, plug-out periods, and waiting — not the refrigerated leg itself',
    },
    {
      label: 'Evidentially decided by',
      value: 'The temperature record, which determines who is held responsible',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'cumulative-damage',
      heading: 'Why the damage is cumulative and invisible',
      body: [
        {
          type: 'paragraph',
          text: 'The central property of the mechanism is that shelf life is consumed rather than broken. A product held above its intended temperature is not damaged at that instant; it is simply ageing faster than planned. Return it to temperature and it ages slowly again — but the life it lost stays lost. A consignment can therefore pass through several excursions, each individually unremarkable, and arrive with its remaining life exhausted, having looked acceptable at every handover along the way.',
        },
        {
          type: 'paragraph',
          text: "Two consequences follow. First, a visual inspection at any single point is a weak test: it establishes the product's condition now, not the life it has left, and the two can diverge completely. Second, responsibility is genuinely hard to attribute without instrumentation, because the party at whose stage the product finally becomes unsaleable may not be the party at whose stage the life was consumed. This is precisely why temperature recording is contractual infrastructure rather than a technical nicety.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The chain is only as cold as its warmest moment',
          text: 'A cold chain is not an average. A consignment that spent almost all of its journey correctly refrigerated and a short period warm is characterised by the warm period, because that is where the life went.',
        },
      ],
    },
    {
      id: 'where-it-breaks',
      heading: 'Where the chain actually breaks',
      body: [
        {
          type: 'paragraph',
          text: 'Failures cluster at the joints, not in the middle of the legs. A reefer container under way is a controlled, monitored, well-instrumented environment. The vulnerable moments are the ones where responsibility, power supply, or both change hands.',
        },
        {
          type: 'list',
          items: [
            'Field heat not removed promptly after harvest, so the consignment begins its journey already behind',
            'Loading and stuffing, where product stands on a dock, doors are open, and the box has not yet pulled down',
            'Plug-out periods when a container moves between quay, yard, vessel, and truck under its own diminishing inertia',
            'Yard waiting during congestion, where plug availability and stack position decide whether power is restored promptly',
            'Poor stow or airflow blockage, where the unit is operating correctly but air cannot reach the cargo — a failure with no equipment fault at all',
            'Border and inspection holds, where a box is opened, moved, or left unpowered for procedural reasons',
            'Final delivery, where the product moves into a store or vehicle held at a different temperature',
          ],
        },
        {
          type: 'paragraph',
          text: 'The airflow case deserves particular note because it defeats the intuition that a working machine means a working chain. A reefer unit controls the air it delivers; it cannot control the temperature of cargo that air does not reach. A consignment stowed so that airflow is blocked can produce a perfect equipment record and badly damaged cargo, and the record will exonerate everyone.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'What a failure sets in motion',
      body: [
        {
          type: 'paragraph',
          text: "A cold-chain failure propagates commercially and regulatorily faster than it propagates physically. The consignment may be rejected on arrival for condition, downgraded, diverted to a lower-value outlet, or accepted with a claim. Where the product is one for which temperature control is a food-safety measure rather than a quality measure, the consequences move from commercial to regulatory, and the authority's requirements — not the buyer's preferences — determine what may happen to the consignment.",
        },
        {
          type: 'paragraph',
          text: 'The claim then turns almost entirely on the record. Who bore risk at the moment of the excursion, whether the recorder was calibrated, whether it was measuring supply air or return air or cargo pulp, and whether the data has an unbroken chain of custody, will decide an outcome that the underlying biology cannot. It is common for the physical facts of a cold-chain loss to be undisputed and the liability to be entirely contested.',
        },
        {
          type: 'paragraph',
          text: 'Beyond the consignment, repeated failures on a lane change behaviour: buyers require additional monitoring, insurers reprice, and shippers move to routes or modes with fewer handovers — including a switch to air freight, which substitutes a different cost structure and a different risk profile for the one that failed.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'This risk is unusual in that it is observable in real time if — and only if — the chain chose to instrument itself. Continuous recorders, controlled-atmosphere readings, and unit telemetry make an excursion visible as it occurs; without them the first observation is the condition of the product at destination, by which time observation and post-mortem are the same activity.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A temperature record is a record of a sensor',
          text: "What a device reports depends on what it measures and where it sits. Supply-air, return-air, and cargo-pulp readings are different quantities and can disagree legitimately. A record is evidence about a sensor's position and calibration before it is evidence about cargo.",
        },
      ],
    },
  ],
  riskMechanism:
    'Perishable products deteriorate at a rate governed largely by temperature, so refrigeration slows deterioration rather than arresting it, and shelf life is a property of the product and its temperature history jointly. When a consignment leaves its intended temperature regime, life is consumed at an accelerated rate and is not recovered when temperature is restored — the damage is cumulative and, at the moment it occurs, typically latent and invisible. Failures cluster at handovers rather than in steady refrigerated transit: field heat not removed after harvest, dock and stuffing periods before pull-down, plug-out intervals between quay, yard, vessel, and truck, yard waiting where plug availability and stack position govern power restoration, border and inspection holds, and final delivery into a differently conditioned store. Blocked airflow is a distinct case in which the equipment operates correctly and the cargo still fails, because a unit controls only the air it delivers and not cargo that air cannot reach. Because the loss is latent, it is discovered at destination, after risk has passed and the chain has been paid, so the consequence propagates as rejection, downgrade, diversion, or claim, and — where temperature control is a food-safety measure rather than a quality one — as a regulatory decision by the competent authority. Attribution then depends almost entirely on instrumentation: who bore risk at the moment of the excursion, what the recorder measured and where it sat, its calibration, and the chain of custody of the data determine an outcome that the biology alone cannot.',
  chainStages: [
    'production',
    'assembly',
    'inland-transport',
    'border',
    'international-transport',
    'destination-market',
  ],
  observableIndicators: [
    'Continuous temperature recorder or unit telemetry showing readings away from the set point during any leg',
    'Extended plug-out intervals recorded between quay, yard, vessel, and delivery',
    'Reefer plug shortage, genset use, or unpowered stacking reported at a terminal or yard',
    'Delay to pull-down after stuffing, or product held on a dock before loading',
    'Field heat not removed promptly after harvest, or precooling capacity unable to keep pace with intake',
    'Controlled-atmosphere gas readings drifting from the specified regime',
    'Stow inspection showing blocked air delivery, over-stuffed cartons, or obstructed channels despite a normal unit record',
    'Power interruption, unit alarm, or maintenance intervention logged during transit',
    'Product arriving with condition, ripeness, or physiological disorders inconsistent with its stated age',
    'Shelf-life complaints or short-life claims arising at a customer after apparently normal arrival inspection',
    'Border or inspection holds during which a unit was opened, moved, or left unpowered',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    "This page gives no temperatures, set points, tolerances, excursion durations, shelf-life figures, or atmosphere compositions. Carriage regimes are commodity-, cultivar-, maturity-, and destination-specific, and are set by the shipper's specification and the applicable food-safety authority, not by a reference page.",
    "Assessing exposure for a real consignment requires that chain's own data: the commodity and its condition at harvest, the specified regime, the recorded temperature history with sensor positions and calibration, the number and duration of handovers, plug availability along the route, the stow, and the delivery terms that decide who bore risk when.",
    'A temperature record is evidence about a sensor before it is evidence about cargo. Supply-air, return-air, and cargo-pulp measurements are different quantities that may legitimately disagree, and a record cannot be interpreted without knowing which was taken.',
    'Where temperature control is a food-safety requirement rather than a quality preference, admissibility is determined by the competent authority of the importing jurisdiction under its own rules, which this page does not state.',
    'AgricultureID is not a laboratory, surveyor, insurer, or certification body, and this page supports no claim, defence, or condition assessment.',
  ],
  affectedCommodityClasses: [
    'fruit',
    'vegetable',
    'livestock-product',
    'root-tuber',
    'beverage-crop',
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'avocados' },
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'raw-cow-milk' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'temperature-monitoring-in-transit' },
    { type: 'logistics-concept', slug: 'controlled-atmosphere-transport' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'palletisation' },
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'infrastructure-failure' },
    { type: 'supply-chain-risk', slug: 'inland-logistics-bottleneck' },
    { type: 'supply-chain-risk', slug: 'labour-disruption' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest handling, cooling, and cold-chain principles for perishable produce',
    },
    {
      sourceId: 'codex',
      citedFor:
        'Food-hygiene framework within which temperature control is treated as a control measure',
    },
    {
      sourceId: 'iso',
      citedFor:
        'Standards framework for refrigerated transport, temperature monitoring, and food-safety management systems',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Refrigerated seaborne transport context, including reefer capacity and handling',
    },
    {
      sourceId: 'iata',
      citedFor:
        'Air-cargo framework for perishable and temperature-controlled shipments',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any temperature-controlled chain, but carriage regimes, infrastructure, plug availability, and regulatory treatment are commodity-, route-, and jurisdiction-specific.',
  limitations: [
    'A reference description of a mechanism, not a carriage specification, a condition assessment, or advice on any consignment or claim.',
    "No temperatures, tolerances, durations, shelf-life figures, or atmosphere compositions are given: they are commodity- and destination-specific and are set by the shipper's specification and the applicable authority.",
    'Product physiology is summarised at the level a logistics reference requires; the commodity-specific post-harvest behaviour belongs to the post-harvest and commodity pages.',
    'Liability for temperature loss depends on the contract, the carriage terms, and the evidentiary record actually held, none of which this page interprets.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cold Chain Failure: Mechanism, Handovers, and Evidence',
    description:
      'How cold-chain failure consumes shelf life, why failures cluster at handovers rather than in transit, and how blocked airflow defeats an equipment record.',
    keywords: [
      'cold chain failure',
      'temperature excursion',
      'reefer container',
      'perishable logistics',
      'cold chain integrity',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
