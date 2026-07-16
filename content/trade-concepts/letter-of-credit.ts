import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const letterOfCredit: TradeConceptContent = {
  id: 'trade-concept-letter-of-credit',
  slug: 'letter-of-credit',
  contentType: 'trade-concept',
  title: 'Letter of Credit',
  alternativeNames: [
    'Documentary credit',
    'LC',
    'L/C',
    'Commercial letter of credit',
  ],
  category: 'Trade concept',
  subcategory: 'Trade mechanics',
  tradeConceptClass: 'trade-mechanics',
  summary:
    'A letter of credit is an undertaking by a bank to pay a seller against the presentation of specified documents, independently of the underlying sale contract. It substitutes a bank’s credit for the buyer’s, and its defining feature is that banks deal in documents alone — not in the goods those documents describe.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Two parties who have never met, in jurisdictions with different legal systems, want to exchange a cargo for money. Neither wants to go first. The seller will not release goods without assurance of payment; the buyer will not pay for goods it has not received and cannot inspect. A documentary credit resolves the standoff by inserting a bank: the buyer’s bank undertakes to pay the seller, on its own account, when the seller presents documents that meet the credit’s terms.',
    },
    {
      type: 'paragraph',
      text: 'The mechanism works because of two ideas that are easy to state and constantly misunderstood in practice. The credit is independent of the sale contract — the bank’s obligation stands on its own and is not affected by disputes about the goods. And the bank examines documents, not cargo: it has no way to know what is in a container, and does not undertake to find out. Everything a documentary credit can and cannot do follows from those two propositions.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade mechanics — documentary payment undertaking',
    },
    {
      label: 'Nature',
      value: 'A bank’s own undertaking to pay against conforming documents',
    },
    {
      label: 'Independence',
      value:
        'The credit is separate from the sale contract; disputes about the goods do not suspend the bank’s obligation',
    },
    {
      label: 'Documents, not goods',
      value:
        'Banks examine the documents presented and do not verify the condition, quantity, or existence of the cargo',
    },
    {
      label: 'Standard practice',
      value:
        'Most commercial credits are issued subject to ICC rules for documentary credits, which the credit incorporates by reference',
    },
    {
      label: 'Compliance',
      value:
        'Payment depends on a presentation complying with the credit’s terms; a discrepant presentation may be refused',
    },
    {
      label: 'Cost',
      value:
        'Bank charges and the buyer’s credit line make it the more expensive of the documentary payment methods',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How the mechanism works',
      body: [
        {
          type: 'paragraph',
          text: 'The buyer applies to its bank to issue a credit in the seller’s favour. The credit states an amount, an expiry, and — crucially — the list of documents that must be presented and what each must say. The seller ships the goods, assembles the documents, and presents them. The bank examines them against the credit’s terms, and if they conform, it pays.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Applicant',
              description:
                'The buyer, who asks its bank to issue the credit and is ultimately liable to reimburse it.',
            },
            {
              term: 'Issuing bank',
              description:
                'The bank that issues the credit and undertakes to pay against a conforming presentation. Its undertaking is its own, not a guarantee of the buyer.',
            },
            {
              term: 'Beneficiary',
              description:
                'The seller, in whose favour the credit is issued and who presents the documents.',
            },
            {
              term: 'Advising bank',
              description:
                'A bank in the seller’s country that advises the credit to the beneficiary, satisfying itself as to its apparent authenticity without adding an undertaking of its own.',
            },
            {
              term: 'Confirming bank',
              description:
                'A bank that adds its own undertaking to that of the issuing bank, where the credit permits. This gives the seller a payment obligation from a bank in a jurisdiction and of a standing it may prefer.',
            },
            {
              term: 'Nominated bank',
              description:
                'A bank authorised by the credit to receive the presentation and to pay, incur a deferred payment undertaking, accept, or negotiate under it.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The confirmation point is where the credit does its most specific work. An unconfirmed credit leaves the seller relying on a bank in the buyer’s country, with whatever country and institutional risk that carries. A confirmed credit puts a second bank’s promise alongside it. Whether confirmation is available and what it costs are commercial matters between the parties and their banks.',
        },
      ],
    },
    {
      id: 'the-two-principles',
      heading: 'Independence, and documents rather than goods',
      body: [
        {
          type: 'paragraph',
          text: 'The independence principle means that the bank’s undertaking is not conditioned on the performance of the sale contract. If the buyer believes the goods are defective, that is a dispute under the sale contract, to be pursued against the seller. It does not entitle the buyer to instruct the bank not to pay against conforming documents, and the bank is not a forum for the argument.',
        },
        {
          type: 'paragraph',
          text: 'The documentary principle means the bank looks at paper. It checks that the documents required by the credit have been presented, that they say what the credit requires them to say, and that they are consistent with one another on their face. It does not inspect the cargo, verify that the certificates are truthful, or confirm that the goods match their description. A presentation of conforming documents obliges payment even if the underlying shipment is in some way unsatisfactory — and a presentation of discrepant documents may be refused even if the cargo is perfect.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A credit is not a quality guarantee',
          text: 'A documentary credit assures the seller of payment and assures the buyer that payment will only be made against the documents it specified. It gives the buyer no assurance about the goods themselves beyond what those documents evidence. Any comfort about quality comes from requiring the right documents — an inspection certificate, an analysis, an official attestation — not from the credit mechanism.',
        },
      ],
    },
    {
      id: 'discrepancies',
      heading: 'Discrepancies and why they dominate practice',
      body: [
        {
          type: 'paragraph',
          text: 'The practical life of a documentary credit is largely about discrepancies. A presentation that does not comply with the credit’s terms can be refused, and the refusal need not be justified by any complaint about the goods. Dates that do not sit right, a description that does not match the credit’s wording, a document missing an endorsement, a presentation made after the permitted period — any of these can put payment in question.',
        },
        {
          type: 'paragraph',
          text: 'Where a presentation is found discrepant, the standard rules provide for the bank to give notice within a defined period, expressed in banking days, and to state the discrepancies. What follows is negotiation: the discrepancies may be corrected if time allows, or the applicant may be asked to waive them. The seller who assumed a credit meant certain payment discovers at that point that the certainty was conditional on its own documentary precision.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Time and perishability interact badly here',
          text: 'For a perishable cargo already at or near destination, a discrepancy cycle consumes shelf life while the goods wait. The mechanism’s timetable is documentary and takes no account of what is happening to the cargo. Whether that matters depends on the commodity and the situation.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'Documentary credits are long established in bulk commodity trade, and they fit it for structural reasons. The documents in these trades are unusually good at standing in for the goods: a transport document representing a cargo at sea, an insurance policy over it, an inspection certificate on quality and weight, and official attestations on health status together describe the consignment closely enough that a bank can transact against them. The same document set is what allows a cargo to be sold on while afloat.',
        },
        {
          type: 'list',
          items: [
            'The document list is where the buyer’s real protections sit — an inspection certificate is required, not implied',
            'Official certificates issued by authorities in the exporting country may be called for, and their issue is outside either party’s control',
            'A credit calling for a transport document showing goods on board interacts awkwardly with delivery terms under which the seller does not contract the carriage',
            'Partial shipments, tolerances on quantity, and expiry dates matter more where a cargo loads over a period rather than at an instant',
          ],
        },
        {
          type: 'paragraph',
          text: 'The interaction between the credit’s document list and the delivery term the contract names is the recurring friction. The credit is drafted by reference to the sale contract but operates independently of it, and a document the credit demands is not necessarily a document the delivery term puts the seller in a position to obtain. Reconciling the two is a drafting exercise for the parties and their banks, not a feature of either instrument.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To substitute a bank’s payment undertaking for a buyer’s, so that a seller can ship against an assurance of payment and a buyer can be assured that payment will be made only against the documents it specified.',
  administeredBy:
    'Commercial banks, applying the rules for documentary credits that the credit incorporates',
  governingBodies: ['International Chamber of Commerce'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes how the mechanism works in general terms. It is not banking, financial, or legal advice, and it does not reproduce the rules for documentary credits or any bank’s terms.',
    'No credit structure, document list, tolerance, period, or charge is recommended or stated. What a credit requires is determined by its own terms, agreed between the parties and their banks.',
    'Whether a presentation complies with a credit is a determination made by the examining bank against that credit and the rules it incorporates. Nothing here bears on any actual presentation.',
    'A documentary credit assures payment against documents; it gives no assurance about the goods, their condition, or their admissibility at destination.',
  ],
  partiesInvolved: [
    'Applicant (buyer)',
    'Issuing bank',
    'Beneficiary (seller)',
    'Advising bank',
    'Confirming bank, where confirmation is added',
    'Nominated bank receiving the presentation',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  sourceReferences: [
    {
      sourceId: 'icc',
      citedFor:
        'The rules for documentary credits, the independence of the credit from the underlying contract, and the principle that banks deal in documents rather than goods',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Use of documentary payment methods in international sale transactions and their relative cost and assurance',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Documentary practice in bulk grain and oilseed trade, including inspection and weight certification',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Documentary credits are used worldwide under commonly incorporated rules, but the governing law of a credit, and the availability and cost of confirmation, are jurisdiction- and institution-specific.',
  limitations: [
    'A description of the mechanism, not banking or legal advice and not a reproduction of the applicable rules.',
    'No periods, tolerances, charges, or document lists are stated; these are set by the credit and by the rules it incorporates.',
    'Whether a presentation conforms is determined by the examining bank, not by any general description.',
    'The mechanism concerns payment against documents only, and says nothing about the condition of the goods or their treatment at the border.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Letter of Credit: Paying Against Documents, Not Goods',
    description:
      'How a documentary credit works: the parties, the independence principle, why banks deal in documents and not goods, and why discrepancies dominate practice.',
    keywords: [
      'letter of credit',
      'documentary credit',
      'trade finance',
      'discrepancies',
      'confirming bank',
    ],
  },
  structuredData: { article: true },
};
