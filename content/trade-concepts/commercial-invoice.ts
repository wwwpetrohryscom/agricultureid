import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const commercialInvoice: TradeConceptContent = {
  id: 'trade-concept-commercial-invoice',
  slug: 'commercial-invoice',
  contentType: 'trade-concept',
  title: 'Commercial Invoice',
  alternativeNames: ['Invoice', 'Export invoice', 'Trade invoice'],
  category: 'Trade concept',
  subcategory: 'Documentation',
  tradeConceptClass: 'documentation',
  summary:
    'The commercial invoice is the seller’s statement of what was sold, to whom, and for how much. It is the primary evidence of the transaction, and it is used far beyond the billing it was created for: customs valuation, classification, origin, and documentary payment all rest on what it says.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Of all the documents accompanying a consignment, the commercial invoice is the one with the most jobs. Commercially it is a demand for payment. To customs it is the primary evidence of what the goods are and what was paid for them. To a bank under a documentary credit it is one of the documents that must conform. To a statistical authority it is, indirectly, the source of a value in a published series.',
    },
    {
      type: 'paragraph',
      text: 'That accumulation of roles is why the invoice repays attention out of proportion to its apparent simplicity. It was created by a seller for a commercial purpose, and it is then read by parties with quite different concerns, applying quite different tests, none of which the seller necessarily had in mind. Most documentary problems at a border trace back to an invoice that was adequate for billing and inadequate for everything else it was asked to do.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Documentation — evidence of the commercial transaction',
    },
    {
      label: 'Issued by',
      value: 'The seller, on its own account',
    },
    {
      label: 'Primary customs role',
      value:
        'Principal evidence of the price actually paid or payable, and of what the goods are',
    },
    {
      label: 'Not a transport document',
      value:
        'It evidences the sale, not the carriage, and confers no rights over the goods',
    },
    {
      label: 'Not a certificate',
      value:
        'Statements it makes about origin or quality are the seller’s assertions, not an authority’s attestation',
    },
    {
      label: 'Content',
      value:
        'No universal mandatory format exists; requirements come from national law, the credit, and the contract',
    },
    {
      label: 'Consistency',
      value:
        'Its particulars must agree with the other documents in the set, or the presentation is questioned',
    },
  ],
  sections: [
    {
      id: 'what-it-carries',
      heading: 'What the invoice carries',
      body: [
        {
          type: 'paragraph',
          text: 'There is no single international form. What an invoice must contain is dictated by the importing jurisdiction’s law, by any documentary credit in play, and by the sale contract — three sources that do not coordinate with one another. What follows is the shape common to most, not a requirement list.',
        },
        {
          type: 'list',
          items: [
            'The parties: seller and buyer, and any other party the transaction requires to be identified',
            'The goods: description, quantity, and the unit and total price for each line',
            'The commercial terms: the delivery term with its named place and edition, and the payment terms',
            'The price detail: currency, and any discounts, charges, or elements included in or excluded from the price',
            'The consignment identity: invoice number and date, references to the order, and details that tie the invoice to the physical shipment',
            'Any declarations the importing jurisdiction requires the seller to make on the face of the invoice',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The goods description does two different jobs',
          text: 'A description adequate to tell a buyer what it bought may be inadequate to classify the goods, and a description that satisfies a credit may not match the one the tariff needs. The invoice has to serve both, which is why descriptions on trade invoices are often longer and stranger than a purely commercial document would require.',
        },
      ],
    },
    {
      id: 'why-customs-cares',
      heading: 'Why customs reads it so closely',
      body: [
        {
          type: 'paragraph',
          text: 'Customs valuation gives primacy to the price actually paid or payable for the goods, and the invoice is the primary evidence of that price. This makes it the anchor of the ad valorem duty calculation, and it explains an asymmetry that traders sometimes find surprising: an invoice created for one purpose becomes the foundation of a determination with legal consequences the seller was not thinking about.',
        },
        {
          type: 'paragraph',
          text: 'The invoice also feeds classification and origin. The description supports — or fails to support — the code declared. Statements about origin on the invoice may form part of an origin claim, and in some preferential regimes the invoice is the very instrument on which an origin statement is made. Where the invoice and the declaration diverge, the divergence is a question that has to be answered.',
        },
        {
          type: 'paragraph',
          text: 'Because it carries this weight, the accuracy of an invoice is a customs matter and not only a commercial one. The declarant is answerable for the particulars declared, and those particulars usually came from the invoice. A seller’s carelessness therefore becomes an importer’s liability, mediated by a document neither of them thought of as a legal instrument.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The delivery term on the invoice is not the customs value',
          text: 'An invoice priced on a destination-inclusive term has not thereby stated a customs value, and one priced at origin has not either. Whether carriage and insurance form part of the base is decided by the importing jurisdiction’s valuation rules. The term tells customs how to read the price; it does not set the value.',
        },
      ],
    },
    {
      id: 'the-consistency-problem',
      heading: 'Consistency across the document set',
      body: [
        {
          type: 'paragraph',
          text: 'The invoice does not travel alone, and its relationship to the rest of the set is where most rejections originate. A bank examining a documentary presentation is checking, among other things, that the documents are consistent with one another on their face. A customs officer conducting a documentary check is doing something similar with a different rulebook. Neither is looking at the goods.',
        },
        {
          type: 'list',
          items: [
            'The description must sit correctly against the transport document and against any credit’s wording',
            'Quantities and weights must agree with the packing list and with the transport document',
            'Marks, numbers, and container references must tie the paper to the physical consignment',
            'The delivery term must be consistent with what the carriage and insurance documents show',
            'Origin statements must be consistent with any separate origin evidence in the set',
          ],
        },
        {
          type: 'paragraph',
          text: 'For agricultural cargo the quantity line is where inconsistency most often appears, because weight is not a single number. Gross and net differ, weight at loading and at discharge differ, and moisture moves the figure. An invoice weight that does not reconcile with a certificate of weight or a transport document is not necessarily wrong — but it is a discrepancy, and the mechanisms examining the documents are not equipped to explain it away.',
        },
      ],
    },
    {
      id: 'what-it-is-not',
      heading: 'What the invoice is not',
      body: [
        {
          type: 'paragraph',
          text: 'The limits are worth stating because the invoice’s ubiquity encourages it to be treated as more than it is.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Not a document of title',
              description:
                'It confers no rights over the goods. Possession of an invoice does not entitle anyone to a consignment, and it cannot be used to take delivery.',
            },
            {
              term: 'Not a contract',
              description:
                'It evidences a sale but is not the contract of sale. Where the two conflict, the relationship between them is a matter of contract law.',
            },
            {
              term: 'Not an official attestation',
              description:
                'Anything it says about origin, quality, or health status is the seller’s own statement. Where an authority’s attestation is required, a separate certificate issued by that authority is what supplies it.',
            },
            {
              term: 'Not a customs value',
              description:
                'It evidences a price. The customs value is determined from that price under the valuation rules of the importing jurisdiction, with the adjustments those rules require.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction between a seller’s statement and an authority’s attestation is the one that matters most for agricultural trade. An invoice declaring a consignment free of a pest is worth nothing to a plant-health authority, which requires a certificate issued by the exporting country’s official service. The invoice can say anything; the certificate is the instrument that carries weight.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To state the seller’s account of the transaction — the parties, the goods, the price, and the terms — so that it can serve as the primary evidence of the sale for commercial, customs, and documentary purposes.',
  administeredBy:
    'Issued by the seller; its sufficiency is assessed by the customs authority of the importing jurisdiction and by any bank examining it',
  governingBodies: [
    'World Customs Organization',
    'World Trade Organization',
    'International Chamber of Commerce',
    'National customs authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what a commercial invoice is and does. It is not a template, states no mandatory content for any jurisdiction, and prescribes no wording.',
    'What an invoice must contain is set by the law of the importing jurisdiction, by any documentary credit, and by the contract. These sources differ and do not coordinate.',
    'An invoice evidences a price; it does not establish a customs value. Valuation is determined by the competent authority under its own rules.',
    'Statements on an invoice are the seller’s assertions. Where an official attestation of origin, quality, or health status is required, only a certificate from the competent authority supplies it.',
  ],
  partiesInvolved: [
    'Seller, who issues it',
    'Buyer, to whom it is addressed',
    'Declarant relying on its particulars',
    'Customs authority of the importing jurisdiction',
    'Bank examining it under a documentary payment mechanism',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'The commercial invoice as evidence supporting the declared value, classification, and origin of a consignment',
    },
    {
      sourceId: 'wto',
      citedFor:
        'Primacy of the price actually paid or payable in the customs valuation framework, for which the invoice is the primary evidence',
    },
    {
      sourceId: 'icc',
      citedFor:
        'Examination of invoices and consistency across a documentary presentation under documentary credit practice',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a commercial instrument. Mandatory content, language, certification, and legalisation requirements are set by the importing jurisdiction and differ widely.',
  limitations: [
    'A description of the document’s role, not a template and not a statement of any jurisdiction’s invoice requirements.',
    'No mandatory fields, wording, language, or legalisation requirements are given: they are national and are published by the authorities that set them.',
    'The content described is the common shape of a trade invoice, not a checklist, and omitting or adding elements may be required in a given market.',
    'Whether a particular invoice conforms to a credit or supports a declaration is determined by the examining bank or authority, not by any general description.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Commercial Invoice: The Document Customs Reads Most Closely',
    description:
      'What a commercial invoice carries beyond billing: its role in customs valuation, classification and origin, and the consistency problem across a document set.',
    keywords: [
      'commercial invoice',
      'trade documents',
      'customs valuation evidence',
      'documentary presentation',
      'export invoice',
    ],
  },
  structuredData: { article: true },
};
