import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const documentationError: SupplyChainRiskContent = {
  id: 'supply-chain-risk-documentation-error',
  slug: 'documentation-error',
  contentType: 'supply-chain-risk',
  title: 'Documentation Error',
  alternativeNames: ['Documentary discrepancy', 'Paperwork failure'],
  category: 'Supply-chain risk',
  subcategory: 'Regulatory',
  riskClass: 'regulatory',
  summary:
    'The papers describing a consignment are wrong, inconsistent, late, or missing. The cargo is perfectly sound and cannot proceed, because in cross-border trade a consignment is what its documents say it is.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A consignment crossing a border is accompanied by a set of documents that identify what it is, where it came from, who owns it, what it is worth, and what conditions it satisfies. Customs authorities, health authorities, carriers, and banks each act on those documents rather than on the goods. Nobody at a border tastes the coffee; they read the certificate. The documentary representation of the cargo is, for every practical purpose, the cargo.',
    },
    {
      type: 'paragraph',
      text: 'This makes documentation a load-bearing part of the chain rather than an administrative afterthought, and it means a documentary defect is a real failure with real consequences even when the goods are exemplary. A consignment with the wrong tariff code, an inconsistent weight, a certificate naming a different consignee, or a certificate that arrived after the ship is a consignment that does not move — and the reason it does not move is not that anything is wrong with it.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Regulatory — documentary conformity' },
    {
      label: 'Arises at',
      value:
        'Preparation at origin, and materialises at the border, the bank, or the carrier',
    },
    {
      label: 'Core mechanism',
      value:
        'Parties act on the documentary representation, so a defect in it stops sound cargo',
    },
    {
      label: 'Compounding property',
      value:
        'Documents cross-reference each other; one error propagates into every document derived from it',
    },
    {
      label: 'Three separate regimes',
      value:
        'Customs, health certification, and banking each judge documents against different rules',
    },
    {
      label: 'Correction is not free',
      value:
        'Some documents cannot be amended after issue, and some cannot be issued retrospectively at all',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'three-regimes',
      heading: 'Three regimes, three definitions of correct',
      body: [
        {
          type: 'paragraph',
          text: 'The most persistent misunderstanding in this area is that documents are checked once, by one party, against one standard. In fact the same document set is examined by at least three regimes that want different things from it, and a document set can satisfy one and fail another.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Customs',
              description:
                'Concerned with whether the declaration correctly states classification, origin, value, and quantity, because those determine duty and admissibility. Its test is legal accuracy against the goods.',
            },
            {
              term: 'Health and phytosanitary certification',
              description:
                'Concerned with whether an official attestation was made by the competent authority, in the required form, covering the required declarations, before the consignment left. Its test is procedural validity, and it is largely unforgiving of retrospection.',
            },
            {
              term: 'Banking',
              description:
                'Concerned with whether the documents presented conform to the terms of the credit on their face. Its test is documentary compliance against an instrument, not truth about the goods — a wholly accurate document can be a discrepancy if the credit specified something else.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The banking case is the one that most often surprises people, and it is worth stating plainly: under a documentary credit, the examination is of the documents against the credit, not of the goods against reality. A document that describes the cargo perfectly but not in the words the credit required can be rejected, and a party can lose payment on cargo that arrived exactly as promised.',
        },
      ],
    },
    {
      id: 'propagation-of-an-error',
      heading: 'Why one error becomes many',
      body: [
        {
          type: 'paragraph',
          text: 'Documents are not independent. A commercial invoice, a packing list, a bill of lading, a certificate of origin, and a health certificate all describe the same consignment, and they are typically prepared from one another — the invoice from the sale contract, the packing list from the invoice, the certificates from the packing list. Errors therefore inherit. A weight that was entered wrongly once appears wrong in every document derived from it, and it is not several errors but one error seen repeatedly.',
        },
        {
          type: 'paragraph',
          text: 'Cross-referencing then converts inheritance into inconsistency in a specific and diagnostic way. If one downstream document is prepared from a different source, or is corrected while the others are not, the set no longer agrees with itself — and inconsistency between documents is precisely what every examining party is looking for. A set that is uniformly wrong may clear; a set that disagrees with itself will not.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The error is usually old by the time it is found',
          text: 'Documentary defects are created at preparation, weeks before they are discovered at a border or a bank. The discovery point is not the failure point, and the time between them is time in which the situation became harder to fix.',
        },
      ],
    },
    {
      id: 'why-correction-is-hard',
      heading: 'Why correction is not simply a matter of reissuing',
      body: [
        {
          type: 'paragraph',
          text: 'The intuition that a wrong document can be replaced with a right one holds for some documents and fails badly for others, and knowing which is which is the whole of the practical exposure.',
        },
        {
          type: 'list',
          items: [
            'A commercial invoice can usually be corrected and reissued by the party that made it',
            'A bill of lading is a document of title, may have been negotiated, and cannot simply be replaced once it is in circulation',
            'An official health or phytosanitary certificate attests to an inspection performed at a point in time by an authority — a replacement requires that authority to act, and the conditions attested may no longer be verifiable',
            'A certificate that was required before departure generally cannot be obtained after arrival, because the thing it certifies can no longer be observed',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last case is the hard boundary of the mechanism. Where an attestation depends on an inspection at origin and the consignment is now at a destination, there may be no route to a compliant document at all. The consignment is sound, the exporter is competent, the omission is administrative, and the cargo still cannot enter — it must be re-exported, diverted, or destroyed, and this is why an apparently trivial paperwork failure can be terminal in a way that a quality problem often is not.',
        },
        {
          type: 'paragraph',
          text: 'Throughout, the consignment is somewhere, accruing storage and demurrage, and if perishable it is deteriorating on a clock unrelated to the administrative process trying to save it.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'This is one of the few risks that is fully observable before it materialises, because the error exists in a document sitting on a desk. Internal checking against the contract and the credit, verification that documents agree with one another, and confirmation that required attestations were obtained before departure all detect the defect at the only point where correction is cheap. A discrepancy rate, or repeated amendment requests, is a process signal rather than a cargo signal.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Requirements are jurisdictional and versioned',
          text: 'What documents a consignment needs, in what form, and with what declarations depends on the destination, the commodity, and the date. Requirements change, and a set that cleared last season may not clear now. Only the competent authority for the destination states what is required.',
        },
      ],
    },
  ],
  riskMechanism:
    'Cross-border trade operates on the documentary representation of a consignment rather than on the consignment: customs, health authorities, carriers, and banks each act on the papers, so a defect in the papers stops sound cargo. The same document set is examined by at least three regimes applying different tests — customs judging legal accuracy of classification, origin, value, and quantity against the goods; health and phytosanitary authorities judging procedural validity, namely whether the competent authority made the required attestation in the required form before departure; and banks under a documentary credit judging conformity of the documents against the terms of the credit on their face, so that a document accurately describing the cargo can still be a discrepancy if the credit specified different wording. Errors compound because documents are not independent: invoice, packing list, bill of lading, and certificates are prepared from one another, so a single mis-entered figure inherits into every derived document, and if any one is corrected or sourced differently the set ceases to agree with itself — and inconsistency between documents is exactly what every examining party looks for. The defect is created at preparation and discovered weeks later at a border or bank, so the discovery point is not the failure point. Correction is bounded by document type: an invoice can be reissued; a bill of lading is a document of title and may be in circulation; an official certificate requires the issuing authority to act; and an attestation depending on an inspection at origin generally cannot be obtained once the consignment is at destination, because what it certifies can no longer be observed. In that last case there may be no route to a compliant document at all, and sound cargo must be re-exported, diverted, or destroyed while accruing cost and, if perishable, deteriorating.',
  chainStages: [
    'assembly',
    'border',
    'international-transport',
    'destination-market',
  ],
  observableIndicators: [
    'Discrepancies raised by a bank on presentation under a documentary credit',
    'Documents in a set disagreeing with one another on weight, quantity, description, marks, or party names',
    'Amendments to a credit or to documents requested repeatedly before or during presentation',
    'Customs queries, requests for supporting evidence, or amended declarations following submission',
    'Consignments held at a port of entry pending documentary verification rather than physical inspection',
    'A certificate found to be dated after departure, or to omit a declaration the destination requires',
    'A tariff classification challenged or reclassified by the authority at entry',
    'Origin evidence questioned, or a preference claim disallowed for want of qualifying documentation',
    "Rising rates of query, amendment, or discrepancy across a shipper's consignments over time",
    'Documents presented late relative to cargo arrival, or original documents not available at discharge',
    'A destination amending its published documentary or certification requirements for a commodity',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page lists no documentary requirements for any destination, commodity, or trade. What is required, in what form, and with what declarations is set by the competent authority of the importing jurisdiction and by the terms of the specific contract or credit, is versioned, and changes.',
    "Assessing exposure for a real chain requires that chain's own data: the destinations and commodities involved, the current requirements each authority publishes, the terms of the credit or contract, who prepares each document and from what source, the preparation and checking process actually used, and the timing of certification relative to departure.",
    'The three examining regimes apply different tests, and conformity with one is not conformity with another. No general statement about documentary correctness holds across customs, official certification, and banking simultaneously.',
    'Whether a defective document can be corrected depends on the document type, whether it has been negotiated, and whether the issuing authority can act. These are matters of law, banking practice, and administrative procedure that this page does not determine.',
    'Nothing here is customs, legal, banking, or trade-finance advice, and AgricultureID is not a customs broker, bank, or certifying authority.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'fruit',
    'vegetable',
    'nut',
    'spice',
    'beverage-crop',
    'livestock-product',
    'fibre',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'Trade facilitation framework covering customs documentation, declaration, and release procedures',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Trade documentation, trade facilitation, and trade-finance practice in cross-border transactions',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary certification framework, including the role of the competent authority and the timing of official attestation',
    },
    {
      sourceId: 'gs1',
      citedFor:
        'Standards for identifying and describing consignments consistently across documents and parties',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Trade logistics context on documentary and border-procedure delay as a component of trade cost',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to cross-border trade, but documentary requirements, certification procedures, and customs practice are entirely jurisdiction- and commodity-specific and change without notice.',
  limitations: [
    "A reference description of a mechanism, not customs, legal, banking, or trade-finance advice, and not a statement of any destination's requirements.",
    'No document requirements, forms, wordings, or checklists are given: they are destination-, commodity-, and date-specific, and must be obtained from the competent authority and from the contract or credit in question.',
    'No discrepancy rates, delay durations, or cost figures are given.',
    'Whether a specific document is correct, correctable, or acceptable is determined by the examining authority, bank, or carrier, and never by a reference page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Documentation Error: Why Sound Cargo Cannot Move',
    description:
      'How documentary defects stop compliant consignments: the examining regimes, why one error inherits across a document set, and what cannot be corrected.',
    keywords: [
      'documentation error',
      'documentary discrepancy',
      'customs documentation',
      'letter of credit discrepancy',
      'phytosanitary certificate',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
