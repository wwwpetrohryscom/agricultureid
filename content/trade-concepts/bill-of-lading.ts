import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const billOfLading: TradeConceptContent = {
  id: 'trade-concept-bill-of-lading',
  slug: 'bill-of-lading',
  contentType: 'trade-concept',
  title: 'Bill of Lading',
  alternativeNames: ['B/L', 'Ocean bill of lading', 'Marine bill of lading'],
  category: 'Trade concept',
  subcategory: 'Documentation',
  tradeConceptClass: 'documentation',
  summary:
    'A bill of lading is a transport document that does three things at once: it receipts the goods, it evidences the contract of carriage, and — in its negotiable form — it functions as a document of title, so that transferring the paper transfers the right to take delivery. That third function is what allows a cargo to be sold while it is at sea.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The bill of lading is the oldest instrument in this part of trade and still the most consequential. A carrier receives goods and issues a document acknowledging them; that document also records the terms on which they are carried; and, where it is drawn in negotiable form, whoever lawfully holds it is entitled to demand the goods at the far end. Three functions, one piece of paper.',
    },
    {
      type: 'paragraph',
      text: 'The third function is the remarkable one and the reason the document underpins commodity trade. If the paper stands for the cargo, then handing over the paper hands over the cargo — which means a shipment can be sold, financed, and pledged while it is somewhere in the middle of an ocean, without anyone touching it. Documentary credits, sales afloat, and the whole documentary architecture of bulk trade rest on that substitution.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Documentation — transport document and, in negotiable form, document of title',
    },
    { label: 'Issued by', value: 'The carrier or its agent, to the shipper' },
    {
      label: 'Three functions',
      value:
        'Receipt for the goods, evidence of the contract of carriage, and document of title',
    },
    {
      label: 'Negotiability',
      value:
        'Depends on how the document is drawn; not every transport document is negotiable, and a sea waybill is not',
    },
    {
      label: 'On board versus received',
      value:
        'A document may evidence goods received for shipment or actually loaded on board — the distinction matters to banks',
    },
    {
      label: 'Clean versus claused',
      value:
        'A notation about the apparent condition of the goods changes the document’s acceptability',
    },
    {
      label: 'Governed by',
      value:
        'The carriage conventions applicable to the contract, and the law governing it — which differ by route and jurisdiction',
    },
  ],
  sections: [
    {
      id: 'the-three-functions',
      heading: 'The three functions',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Receipt',
              description:
                'The carrier acknowledges having received goods, described as to quantity, marks, and apparent condition. What the carrier acknowledges is what it could observe — it does not certify what is inside a sealed container.',
            },
            {
              term: 'Evidence of the contract of carriage',
              description:
                'It records the terms on which the goods are carried. The contract may have been concluded before the document was issued, which is why it is evidence of the contract rather than the contract itself.',
            },
            {
              term: 'Document of title',
              description:
                'In negotiable form, the document represents the goods. Delivery is made against surrender of an original, and transferring the document transfers the right to take delivery.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The title function is not automatic — it depends on how the document is drawn and on the applicable law. A document made out to a named consignee without words of negotiability is not a document of title in the same sense: the carrier delivers to that consignee, and holding the paper is not what unlocks the cargo. A sea waybill goes further and is not a document of title at all, though it is a perfectly good receipt and contract evidence.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'The choice of document decides whether documents control the goods',
          text: 'A seller relying on withholding documents to secure payment is relying on the title function. Where the transport document does not have it, the buyer may obtain the cargo without the paper, and the leverage the seller believed it had does not exist. This is a document-selection question with commercial consequences, resolved by the parties and their advisers.',
        },
      ],
    },
    {
      id: 'variants',
      heading: 'Variants and what distinguishes them',
      body: [
        {
          type: 'paragraph',
          text: 'The differences between bills matter mainly because banks and buyers care about them, and because a document that is unimpeachable in one transaction is unusable in another.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Order or bearer bill',
              description:
                'Drawn so as to be transferable by endorsement or by delivery. This is the negotiable form on which sales afloat and documentary finance depend.',
            },
            {
              term: 'Straight bill',
              description:
                'Consigned to a named party without words of negotiability. It is not intended to be traded on, and its treatment as a document of title varies by legal system.',
            },
            {
              term: 'Sea waybill',
              description:
                'A non-negotiable transport document. Delivery is to the named consignee on identification, without surrender of a document — convenient for short voyages and for parties who do not need document control.',
            },
            {
              term: 'Shipped on board versus received for shipment',
              description:
                'The first evidences that goods were actually loaded onto a named vessel; the second only that the carrier took them into its charge. Credits frequently require the former.',
            },
            {
              term: 'Clean versus claused',
              description:
                'A clean document carries no notation of defective condition or packaging. A clause noting apparent damage generally makes the document unacceptable under a credit requiring a clean one.',
            },
            {
              term: 'Master and house documents',
              description:
                'Where a forwarder consolidates cargo, the carrier issues a document to the forwarder and the forwarder issues its own to each shipper. They describe different contracts with different parties.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A clean bill is not a quality certificate',
          text: '"Clean" means the carrier noted no apparent defect in the goods or packaging as it could observe them at receipt. It says nothing about moisture, protein, contamination, or anything else inside a bag or a container. Quality is evidenced by inspection and analysis certificates, not by the transport document.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'Bulk commodity trade is where the document’s title function does its heaviest work. A cargo of grain may be sold several times between loading and discharge, and each sale is effected by transferring documents rather than goods. The parcel never changes course; the paper does.',
        },
        {
          type: 'list',
          items: [
            'Description of bulk cargo is by quantity and marks, with the carrier’s acknowledgment limited to what it could observe',
            'The document typically records weight at loading, which is not the weight at discharge — a difference the contract, not the document, resolves',
            'A cargo sold afloat moves by endorsement, so the document set must remain complete and consistent through each transfer',
            'Where a credit requires an on-board notation, the document’s form is a payment issue and not only a shipping one',
            'Delivery against an original means a cargo can arrive before its documents do, which is a practical problem with its own commercial machinery',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point is a genuine friction in fast trades. Where the vessel outruns the paperwork, the goods are at the port and the party entitled to them cannot produce the document that unlocks them. The arrangements used to deal with this are commercial and legal instruments with real consequences for the parties who give and accept them, and they are outside the scope of a reference entry.',
        },
      ],
    },
    {
      id: 'carriage-regimes-and-electronic-bills',
      heading: 'Carriage regimes and electronic bills',
      body: [
        {
          type: 'paragraph',
          text: 'What a carrier is answerable for, and to what extent, is not determined by the bill of lading alone. International conventions on the carriage of goods by sea establish regimes of liability, and which applies to a given contract depends on the route, the contract, and the law governing it. Different conventions are in force in different states, and the resulting patchwork is a matter for the parties’ lawyers rather than for a reference page.',
        },
        {
          type: 'paragraph',
          text: 'Electronic bills of lading have been developed to remove the physical paper from a process that manifestly does not need it, and legal frameworks for recognising electronic transferable records have been advanced to give them effect. Whether an electronic document has the legal attributes of a paper original in a given jurisdiction depends on that jurisdiction’s law and on the system used. Adoption is uneven, and the question of legal equivalence is not settled uniformly.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To receipt goods taken into a carrier’s charge, evidence the terms of their carriage, and — in negotiable form — represent the goods themselves, so that rights over a cargo can be transferred while it is in transit.',
  administeredBy:
    'Issued by the carrier or its agent; its legal effect is determined by the applicable carriage regime and governing law',
  governingBodies: [
    'International Maritime Organization',
    'International Chamber of Commerce',
    'The states party to the applicable carriage conventions',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes the document’s functions and variants. It is not legal advice, states no carrier’s terms, and does not set out the content of any carriage convention.',
    'Whether a document is negotiable, whether it operates as a document of title, and what liability regime applies are questions of the governing law and the applicable convention, which differ by route and jurisdiction.',
    'Nothing here recommends a transport document, a document form, or an arrangement for dealing with documents that arrive after the goods. Those are commercial and legal decisions for the parties and their advisers.',
    'A clean transport document evidences no apparent defect observable at receipt. It attests nothing about the quality, composition, or condition of goods within packages or containers.',
  ],
  partiesInvolved: [
    'Shipper, to whom the document is issued',
    'Carrier or its agent, which issues it',
    'Consignee or lawful holder entitled to delivery',
    'Freight forwarder, where house documents are issued',
    'Bank holding or examining the document under a payment mechanism',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'draught-survey' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  sourceReferences: [
    {
      sourceId: 'icc',
      citedFor:
        'Examination and acceptability of transport documents under documentary credit practice, including on-board notation and clean documents',
    },
    {
      sourceId: 'imo',
      citedFor:
        'The framework governing carriage of goods by sea within which transport documents are issued',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'International carriage regimes, transport documentation, and the development of electronic transferable records',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Documentary practice in bulk grain and oilseed trade, including sales afloat effected by transfer of documents',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as an instrument. Its legal attributes — negotiability, title, carrier liability, and the recognition of electronic equivalents — depend on the governing law and the conventions in force, which differ by state and route.',
  limitations: [
    'A description of the document’s functions and variants, not legal advice and not an account of any carriage convention or carrier’s terms.',
    'No liability limits, time bars, notice periods, or convention provisions are stated: they depend on the applicable regime and governing law.',
    'Whether a document is a document of title in a given case is a question of law, not a property of the form alone.',
    'The status of electronic bills of lading differs by jurisdiction and system, and no position is asserted here for any of them.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bill of Lading: The Three Functions of a Transport Document',
    description:
      'How a bill of lading works: its three functions, negotiable and non-negotiable variants, on-board and clean notations, and why it underpins sales afloat.',
    keywords: [
      'bill of lading',
      'document of title',
      'sea waybill',
      'clean bill of lading',
      'sales afloat',
    ],
  },
  structuredData: { article: true },
};
