import type { LogisticsConceptContent } from '@/types/content';

export const preShipmentInspection: LogisticsConceptContent = {
  id: 'logistics-concept-pre-shipment-inspection',
  slug: 'pre-shipment-inspection',
  contentType: 'logistics-concept',
  title: 'Pre-Shipment Inspection',
  alternativeNames: ['PSI', 'Inspection at origin', 'Loading supervision'],
  category: 'Logistics concept',
  subcategory: 'Inspection',
  logisticsClass: 'inspection',
  summary:
    'Pre-shipment inspection is an independent examination of a consignment at origin, before it sails, establishing what was actually shipped. It exists because the buyer is not there — and because once the cargo has left, nobody can reconstruct what condition it was in when it did.',
  introduction: [
    {
      type: 'paragraph',
      text: 'In international trade the buyer is on the other side of the world from the goods at the moment that matters. They are paying for a specification they cannot see against, shipped by a party they may never have met, and by the time they can examine anything the cargo has crossed an ocean and any defect is arguable in both directions. Was the coffee already this damp when it was loaded, or did the container sweat? Nobody can say, because nobody independent was watching.',
    },
    {
      type: 'paragraph',
      text: 'Pre-shipment inspection puts someone there. An independent inspector examines the goods at origin, before or during loading, and records what they find: the quantity, the quality against a specification, the condition, the packing, the marks, and the state of the transport unit. The report is the buyer’s eyes at the moment the cargo left, and it converts an unanswerable dispute about what happened at sea into a comparison between two known points.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Inspection — independent verification at origin, before departure',
    },
    {
      label: 'Cargo form',
      value: 'All forms — bulk, containerised, unitised, breakbulk',
    },
    {
      label: 'Answers',
      value:
        'What was actually shipped, in what quantity, in what condition, in what unit',
    },
    {
      label: 'Two distinct kinds',
      value:
        'Contractual inspection agreed between the parties, and government-mandated PSI required by an importing state',
    },
    {
      label: 'Mandated PSI is disciplined by',
      value:
        'The WTO Agreement on Preshipment Inspection, which governs how user members may apply it',
    },
    {
      label: 'Establishes',
      value:
        'A reference point at origin against which arrival condition can be read',
    },
    {
      label: 'Does not do',
      value:
        'Guarantee admissibility — the border authority makes its own determination regardless',
    },
  ],
  sections: [
    {
      id: 'the-problem-it-solves',
      heading: 'The problem it solves',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural trade runs on information asymmetry. The seller knows what they loaded; the buyer knows what arrived; and the space in between is where every dispute in the trade lives. Without an independent record at origin, an arrival discrepancy has no resolution: the seller says the cargo was sound when it left, the buyer says it was not when it came, and both may be telling the truth as they understand it. The argument is unwinnable because the relevant fact was never recorded.',
        },
        {
          type: 'paragraph',
          text: 'An inspection at origin creates that fact. It does not prevent anything — a sound cargo can still be ruined by a bad voyage — but it establishes the starting point, and a starting point is what makes the difference measurable. This is why the practice concentrates in trades where quality is variable, where the parties do not have a long relationship, and where the commodity’s condition can genuinely change in transit: which describes most of the agricultural commodity trade.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'It is bought by whoever bears the risk of being wrong',
          text: 'Inspection is usually commissioned by the buyer, but not always. A seller shipping to a distant, unfamiliar buyer has the mirror-image exposure — an unjustified claim on arrival — and an origin report protects them from it just as well. The instrument is neutral; what makes it valuable is that it is independent of both.',
        },
      ],
    },
    {
      id: 'what-it-covers',
      heading: 'What an inspection covers',
      body: [
        {
          type: 'paragraph',
          text: 'The scope is defined by whoever commissioned it, and this is the most important thing to understand about the practice: an inspection reports on what it was asked to look at, and is silent on everything else. A report confirming quantity and packing says nothing about quality, not because the cargo was fine but because nobody paid for that question to be asked. A great many disappointments with inspection are disappointments with a scope that was set too narrowly and then read too broadly.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Quantity verification',
              description:
                'Confirming how much is there — by weight, by count, or by survey depending on the cargo form. Often the whole point for bulk consignments.',
            },
            {
              term: 'Quality assessment',
              description:
                'Examination and sampling against a specification, with testing where the contract calls for it. Bounded by the specification named — an inspector reports against a standard, not against expectations.',
            },
            {
              term: 'Condition and packing',
              description:
                'The state of the goods and their packaging at the moment of loading. What later makes it possible to distinguish transit damage from pre-existing damage.',
            },
            {
              term: 'Transport unit check',
              description:
                'Whether the container, hold, or vehicle was fit and clean before the cargo went in. Cheap to verify at origin, and impossible to reconstruct afterwards.',
            },
            {
              term: 'Loading supervision',
              description:
                'Witnessing the loading itself, including sealing. Links the goods examined to the specific unit that sailed — without which a report describes goods, not a shipment.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Sampling deserves particular attention, because for a bulk or bagged consignment the inspector cannot examine the cargo — only a sample of it. Everything the report says about quality is an inference from that sample to the parcel, and the inference is only as good as the sampling plan. This is why sampling method is specified in contracts rather than left to the inspector, and why disputes about quality so often turn out to be disputes about how the sample was drawn.',
        },
      ],
    },
    {
      id: 'the-mandated-kind',
      heading: 'The mandated kind is a different animal',
      body: [
        {
          type: 'paragraph',
          text: 'Everything above describes inspection as a private instrument the parties choose. There is a second kind that is not chosen at all: some importing countries require, by law, that consignments be inspected at origin by an appointed agency before they may be imported. The purpose is not to serve the buyer — it is to serve the importing state, typically to verify price for customs valuation and to counter under-invoicing, and sometimes to check classification and quantity for revenue purposes.',
        },
        {
          type: 'paragraph',
          text: 'This regime has its own international discipline because it can function as a trade barrier. The WTO Agreement on Preshipment Inspection governs how member countries using such programmes must operate them — addressing non-discrimination, transparency, protection of confidential business information, avoidance of unreasonable delay, and price verification procedures — and gives exporters recourse where a programme is applied improperly. An exporter facing mandated PSI is dealing with an arm of the importing state’s revenue system, not with a service they engaged.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The two kinds answer to different people',
          text: 'A contractual inspector answers to the party that engaged them and reports on what that party asked. A mandated PSI agency answers to the importing government and reports on what that government requires — principally value. Neither report substitutes for the other, and neither one is a border clearance.',
        },
      ],
    },
    {
      id: 'what-it-cannot-do',
      heading: 'What it cannot do',
      body: [
        {
          type: 'paragraph',
          text: 'The most common and most costly misconception is that an inspection at origin secures entry at destination. It does not, and it cannot. The importing country’s authorities make their own determination against their own requirements, on their own examination, and they are not bound by, and generally have no interest in, a report commissioned by a commercial party in another country. A consignment can carry an immaculate inspection report and be refused at the border on the same day.',
        },
        {
          type: 'list',
          items: [
            'It does not guarantee admissibility — the destination authority decides independently, on its own terms',
            'It reports on scope only; anything not commissioned is not covered, however obvious it seems in hindsight',
            'It is a point in time — it says what was true at loading, and nothing about the voyage that follows',
            'It infers from a sample, so its quality findings are only as sound as the sampling plan the contract specified',
            'It cannot detect what a sample cannot reach, including problems that develop later from a condition present but latent at loading',
            'It does not make a seller solvent, or a contract enforceable, or a claim collectible',
            'A mandated PSI clearance addresses the importing state’s revenue interest and says nothing about quality or plant health',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Independence is the whole product',
          text: 'The report’s only value is that it was made by someone with no stake in the answer. Where an inspector is appointed, paid, or influenced by a party with an interest in the finding, the instrument does not merely weaken — it inverts, becoming evidence for a position rather than a record of a fact. This is why accreditation and appointment arrangements matter more than inspection technique.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Create an independent, contemporaneous record of what a consignment actually was at the moment it left origin, so that a buyer who cannot be present can transact on evidence, and so that any later discrepancy can be measured against a known starting point rather than argued about.',
  operationalLimitations: [
    'An inspection reports only on the scope it was commissioned for. This page cannot say what any particular inspection covered, and a report is silent on everything outside its terms of reference.',
    'No sampling plans, sample sizes, or testing methods are given. They are specified by the contract and the applicable standard for the commodity, and the inference from sample to parcel depends entirely on them.',
    'No tolerances, specifications, or pass criteria are given. An inspector reports against the specification named in the contract, which is different for every transaction.',
    'A report describes a moment at origin. It carries no information about the voyage and does not speak to arrival condition.',
    'Inspection does not confer admissibility. The importing country’s authorities determine that independently, and are not bound by any report commissioned by a commercial party.',
    'Where inspection is mandated by an importing state, the applicable programme, its scope, and its procedures are set by that state under the applicable WTO disciplines, and are not described here for any country.',
    'The standing of an inspection body, its accreditation, and its independence are matters to establish against the specific body engaged for the specific transaction.',
  ],
  cargoForms: ['bulk-dry', 'containerised', 'unitised', 'breakbulk'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'beverage-crop',
    'nut',
    'spice',
    'fibre',
    'fruit',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'cashew-nuts' },
    { type: 'commodity', slug: 'cotton-lint' },
    { type: 'commodity', slug: 'black-pepper-corns' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'size-uniformity' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relevantStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'third-party-audit' },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'packing-list' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'draught-survey' },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The Agreement on Preshipment Inspection, disciplining government-mandated inspection programmes used by importing members',
    },
    {
      sourceId: 'iso',
      citedFor:
        'Conformity assessment framework for inspection bodies and their independence',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Export quality management and the role of independent inspection in trade transactions',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Customs valuation context in which mandated pre-shipment inspection programmes operate',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Contractual inspection is used across commodity trades worldwide; government-mandated PSI programmes exist only in the countries that legislate for them, and their scope and procedures are national.',
  limitations: [
    'A reference description of the practice, not an inspection service, a sampling specification, or advice on any transaction.',
    'No sampling plans, tolerances, specifications, or pass criteria are given — they are set by the contract and the applicable commodity standard.',
    'An inspection report speaks only to its commissioned scope and to the moment it was made; it does not address the voyage or arrival condition.',
    'Inspection at origin confers no admissibility at destination, which the importing authority determines independently.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Pre-Shipment Inspection: Establishing What Actually Shipped',
    description:
      'How pre-shipment inspection works: why an origin record resolves transit disputes, what an inspection covers and misses, and what it cannot do.',
    keywords: [
      'pre-shipment inspection',
      'PSI',
      'inspection at origin',
      'loading supervision',
      'independent cargo inspection',
    ],
  },
  structuredData: { article: true },
};
