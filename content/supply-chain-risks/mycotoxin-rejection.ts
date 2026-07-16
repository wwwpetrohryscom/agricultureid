import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const mycotoxinRejection: SupplyChainRiskContent = {
  id: 'supply-chain-risk-mycotoxin-rejection',
  slug: 'mycotoxin-rejection',
  contentType: 'supply-chain-risk',
  title: 'Mycotoxin Rejection',
  alternativeNames: [
    'Mycotoxin non-compliance',
    'Contaminant rejection at import',
  ],
  category: 'Supply-chain risk',
  subcategory: 'Quality and integrity',
  riskClass: 'quality-integrity',
  summary:
    'A consignment is refused because a mycotoxin result exceeds the limit the importing authority applies. The distinctive feature is that the hazard forms long before the border, is distributed unevenly through the lot, and is measured by a sampling plan — so the result is a property of the sampling as much as of the grain.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mycotoxins are toxic secondary metabolites produced by certain fungi that colonise crops in the field or during storage. They are not a processing residue and not something added to a consignment: they are formed by living organisms under conditions of moisture, temperature, and damage, and once formed they are stable enough to survive most of what a supply chain subsequently does. A mycotoxin rejection is therefore the visible endpoint of a biological process that began, in most cases, before the crop was harvested.',
    },
    {
      type: 'paragraph',
      text: 'What makes this risk behave unusually is the gap between where the hazard forms and where it is detected. Contamination is created at production and storage; the decision that ends the consignment is taken at a border, by an authority applying its own limits, against a result produced from a sample. Everything that happens between those two points — aggregation, transport, storage, the sampling plan itself — shapes whether the contamination that exists is the contamination that is found.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Quality and integrity — contaminant non-compliance',
    },
    {
      label: 'Hazard origin',
      value:
        'Fungal colonisation in the field and during storage, not at the border',
    },
    {
      label: 'Decision point',
      value:
        'The competent authority of the importing jurisdiction, against a sampled result',
    },
    {
      label: 'Governing framework',
      value:
        'Codex contaminant standards and jurisdiction-specific limits set in law',
    },
    {
      label: 'Distinctive property',
      value:
        'Contamination is heterogeneous within a lot — sampling design drives the measured result',
    },
    {
      label: 'Not reversible',
      value:
        'Mycotoxins persist through most handling and much processing; the hazard cannot be transported away',
    },
    {
      label: 'No limits given here',
      value:
        'Limits are jurisdiction-specific, versioned, and set by the competent authority',
    },
  ],
  sections: [
    {
      id: 'no-limits-here',
      heading: 'Why this page gives no limit values',
      body: [
        {
          type: 'callout',
          tone: 'important',
          title: 'Limits are set by the competent authority, not by this page',
          text: 'Maximum levels for mycotoxins are jurisdiction-specific, toxin-specific, commodity-specific, and versioned — they differ between importing markets, differ by intended use, and are amended over time. The only limit that governs a consignment is the one in force in the importing jurisdiction at the moment of the decision, as set by that authority. AgricultureID reproduces no mycotoxin limit table and gives no limit values. Obtain them from the competent authority for the destination, or from the Codex standard the destination applies.',
        },
        {
          type: 'paragraph',
          text: 'This is not caution for its own sake. A limit quoted from the wrong jurisdiction, the wrong commodity category, the wrong intended use, or a superseded version is worse than no figure at all, because it looks like an answer. The structural facts — that a limit exists, who sets it, what it attaches to, and how compliance is judged — are stable and useful. The numbers are neither.',
        },
      ],
    },
    {
      id: 'where-it-forms',
      heading: 'Where the hazard forms',
      body: [
        {
          type: 'paragraph',
          text: 'Fungal colonisation and toxin formation are driven by conditions rather than by handling errors alone. In the field, crop stress, insect damage that opens a route into the kernel, and weather during the period between maturity and harvest all influence whether a toxigenic fungus establishes. After harvest, the controlling variable is water: grain that goes into storage above the moisture at which the fungus can grow, or that rewets in store through condensation, leaks, or a wet spot, provides the conditions for formation to continue in the dark for weeks.',
        },
        {
          type: 'paragraph',
          text: 'Two consequences follow, and both matter more than they first appear. The first is that field-formed and storage-formed contamination are different problems with different owners: one is largely a season, the other is largely a management decision. The second is that formation is patchy. Fungal growth follows the conditions — a damp pocket, a damaged area, a poorly aerated corner — so the toxin concentrates where those conditions were, not evenly across the lot.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Drying is a control point, transport is not',
          text: 'Once toxin is present it stays present. Drying, cooling, and storage management prevent further formation; they do not remove what has formed. There is no point downstream at which a contaminated consignment becomes uncontaminated by being moved.',
        },
      ],
    },
    {
      id: 'heterogeneity-and-sampling',
      heading: 'Heterogeneity, sampling, and why results disagree',
      body: [
        {
          type: 'paragraph',
          text: 'This is the part of the mechanism that most often surprises people, and it is the reason mycotoxin disputes are so characteristically bitter. Because contamination is patchy, a lot does not have a single true value that a test simply reveals. It has a distribution. A test result is an estimate of that distribution produced from a small sample of a very large mass, and the uncertainty in that estimate is dominated not by the laboratory but by how the sample was taken.',
        },
        {
          type: 'list',
          items: [
            'Sampling — how many increments were drawn, from where in the lot, and whether the drawing pattern could reach the contaminated pockets at all',
            'Sample preparation — how the aggregate sample was reduced and ground before a test portion was taken from it',
            'Analysis — the method used, its performance characteristics, and its own measurement uncertainty',
          ],
        },
        {
          type: 'paragraph',
          text: 'The order is deliberate. For a heterogeneously contaminated lot, the sampling step typically contributes far more variability than the analysis, which is why official sampling plans are prescribed in as much regulatory detail as the limits themselves, and why a plan is not interchangeable between commodities or lot sizes.',
        },
        {
          type: 'paragraph',
          text: "The practical consequence is that two honest, competent tests on the same consignment can disagree, and neither is necessarily wrong. A seller's pre-shipment certificate and a border result are estimates from different samples drawn at different times by different plans. When they conflict, the disagreement is evidence about the lot's heterogeneity, not automatically evidence of bad faith by either party.",
        },
      ],
    },
    {
      id: 'how-a-rejection-propagates',
      heading: 'What a rejection sets in motion',
      body: [
        {
          type: 'paragraph',
          text: 'A rejection is not a single event but the start of a sequence. The consignment is detained rather than destroyed, and it then has to go somewhere: re-export to a jurisdiction whose limits or intended-use category it does meet, diversion to a permitted alternative use where the authority allows it, treatment where a recognised option exists, or destruction. Each of those routes has its own permissions, costs, and timescales, and the consignment is accruing storage and demurrage throughout.',
        },
        {
          type: 'paragraph',
          text: "Beyond the individual consignment, a rejection can change how subsequent consignments are treated. Authorities commonly respond to findings by increasing the frequency of checks on comparable consignments from the same origin, which lengthens clearance for exporters who had nothing to do with the original finding. This is the mechanism by which one lot's contamination becomes an origin-level trade cost, and it is why mycotoxin control is treated as a collective concern in producing regions rather than purely a firm-level one.",
        },
        {
          type: 'paragraph',
          text: "Commercially, the loss lands wherever the contract put it. Whether the seller warranted compliance with the destination's limits, whose certificate governs, which sample is contractually decisive, and at what point risk passed are contract questions, and they are settled by the contract that was signed rather than by the science.",
        },
      ],
    },
  ],
  riskMechanism:
    "Toxigenic fungi colonise a crop in the field or in storage and produce mycotoxins under conditions of moisture, temperature, crop stress, and physical damage. Because that growth follows local conditions — a damaged area, a damp pocket, a poorly aerated part of a store — the toxin is distributed heterogeneously through the lot rather than uniformly, and it is chemically stable enough to persist through handling, transport, and much processing. The hazard therefore travels intact from origin to the border. At the point of import, the competent authority judges the consignment against the limit it has set in law for that toxin, commodity, and intended use, using a result generated from a prescribed sampling plan. Because contamination is heterogeneous, that result is an estimate of a distribution rather than the reading of a single true value, and the sampling step usually contributes more uncertainty than the laboratory analysis — so independent, competent tests on the same lot can legitimately disagree. A rejection then propagates in three directions: the consignment itself must be re-exported, diverted to a permitted use, treated where an option exists, or destroyed, accruing storage and demurrage meanwhile; comparable consignments from the same origin may face increased check frequency, converting one lot's problem into an origin-level clearance cost; and the financial loss settles wherever the contract allocated conformity warranty, decisive sampling, and passage of risk.",
  chainStages: [
    'production',
    'assembly',
    'international-transport',
    'border',
    'destination-market',
  ],
  observableIndicators: [
    'Growing conditions at origin that favour fungal colonisation — crop stress, insect damage, or wet weather in the period between maturity and harvest',
    'Grain entering storage above the moisture at which fungal growth can continue, or drying capacity unable to keep pace with harvest intake',
    'Rising temperature or moisture at monitoring points in a store, or condensation, leaks, and wet spots found on inspection',
    'Visible mould, caking, insect activity, or musty odour observed at loading, sampling, or discharge',
    'Pre-shipment and destination test results on the same consignment diverging materially',
    'Results clustering close to the limit the destination applies, so that ordinary sampling variability decides the outcome',
    'The importing authority raising check frequency or imposing additional certification for the commodity and origin',
    'Consignments detained at the port of entry pending a contaminant decision rather than clearing routinely',
    'Buyers requesting additional sampling, re-sampling, or third-party analysis before accepting documents',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no mycotoxin limit values and reproduces no limit table. Maximum levels are jurisdiction-specific, toxin- and commodity-specific, tied to intended use, and amended over time; only the limit in force in the importing jurisdiction at the time of the decision governs a consignment, and it must be obtained from that competent authority or the Codex standard the jurisdiction applies.',
    'No sampling plan, test method, or performance criterion is specified here. Official plans are prescribed in regulation and are not interchangeable between commodities, lot sizes, or jurisdictions.',
    "Assessing exposure for a real consignment requires that chain's own data: the origin and season, the storage history and moisture record, the toxins relevant to that commodity, the destination's limits and intended-use category, the sampling plan actually applied, and the conformity terms in the contract.",
    'A test result estimates a heterogeneous distribution and carries uncertainty dominated by sampling rather than by analysis. No inference about a lot should be drawn from a single figure without knowing how the sample was taken.',
    'AgricultureID is not a competent authority, laboratory, or certification body, and this page confers no conformity assessment of any kind.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'nut',
    'pulse',
    'spice',
    'beverage-crop',
    'fruit',
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'third-party-audit' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'residue-limit-exceedance-rejection' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'codex',
      citedFor:
        'The international framework for contaminants in food and feed, including the concept of maximum levels and prescribed sampling plans (framework only; no values reproduced)',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Scientific risk-assessment framework for mycotoxins as food and feed contaminants in the EU context',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Mycotoxin formation, moisture and storage conditions, and prevention context in cereals and other crops',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS framework under which importing members apply food-safety measures to consignments',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'EU import-control context in which contaminant checks are applied at entry',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The formation and sampling mechanisms are generic; limits, sampling plans, check frequencies, and permitted disposal routes are entirely jurisdiction-specific and set by the competent authority of the importing market.',
  limitations: [
    'A reference description of a mechanism, not a food-safety assessment, a compliance opinion, or advice on any consignment.',
    'No mycotoxin limits, sampling plans, test methods, moisture thresholds, or rejection statistics are given: limits are set in law by the importing jurisdiction and any figure reproduced here would be wrong for some readers and out of date for the rest.',
    'Fungal colonisation and toxin formation are described qualitatively; the specific toxins, fungi, and conditions relevant to a crop and region must be taken from the applicable food-safety authority or research body.',
    'Contractual allocation of conformity risk, decisive sampling, and rejection loss depends on the contract actually agreed, which this page does not interpret.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Mycotoxin Rejection: Mechanism, Sampling, and Propagation',
    description:
      'How mycotoxin rejections arise: where the toxin forms, why heterogeneous contamination makes sampling decisive, and what a rejection sets in motion.',
    keywords: [
      'mycotoxin rejection',
      'contaminant non-compliance',
      'mycotoxin sampling',
      'import rejection',
      'food safety supply chain risk',
      'Codex contaminants',
    ],
  },
  structuredData: { article: true },
};
