import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const documentaryCollection: TradeConceptContent = {
  id: 'trade-concept-documentary-collection',
  slug: 'documentary-collection',
  contentType: 'trade-concept',
  title: 'Documentary Collection',
  alternativeNames: [
    'Collection',
    'Documents against payment',
    'Documents against acceptance',
    'D/P and D/A',
  ],
  category: 'Trade concept',
  subcategory: 'Trade mechanics',
  tradeConceptClass: 'trade-mechanics',
  summary:
    'In a documentary collection, the seller’s bank forwards shipping documents to the buyer’s bank with instructions to release them only against payment or against acceptance of a bill of exchange. The banks act as agents handling documents — they undertake no payment obligation of their own, which is precisely what separates a collection from a letter of credit.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A documentary collection sits between open account, where the seller ships and hopes, and a documentary credit, where a bank promises to pay. The seller ships the goods, hands the documents to its bank, and instructs that they be released to the buyer only on a stated condition: pay now, or accept a bill of exchange promising to pay later. The banks pass the documents along and follow the instructions.',
    },
    {
      type: 'paragraph',
      text: 'The whole force of the arrangement rests on the seller controlling the documents. Where those documents are what the buyer needs to obtain the goods, withholding them until the condition is met gives the seller real leverage. Where they are not, the arrangement gives the seller very little — and this is why the mechanism works well for some cargo and poorly for other cargo, in a way that has nothing to do with the banks.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Trade mechanics — documentary payment handling' },
    {
      label: 'Bank role',
      value:
        'Agent handling documents against instructions. The banks give no payment undertaking of their own.',
    },
    {
      label: 'Two principal forms',
      value:
        'Documents against payment (D/P) and documents against acceptance (D/A)',
    },
    {
      label: 'Standard practice',
      value:
        'Collections are commonly handled subject to the ICC uniform rules for collections, incorporated by the instructions',
    },
    {
      label: 'Security',
      value:
        'Derives from control of the documents, not from a bank promise — so it depends on the documents being ones the buyer needs',
    },
    {
      label: 'Relative to a credit',
      value:
        'Cheaper and simpler, and carrying materially less assurance for the seller',
    },
    {
      label: 'Principal exposure',
      value:
        'The buyer may simply decline to take up the documents, leaving the goods at destination in the seller’s hands',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How the mechanism works',
      body: [
        {
          type: 'paragraph',
          text: 'The seller ships the goods and gives its bank the documents together with a collection instruction stating the terms on which they may be released. That bank sends them to a bank in the buyer’s country, which presents them to the buyer. The buyer meets the condition — pays, or accepts the draft — and gets the documents. The funds, if any, travel back the way the documents came.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Principal (drawer)',
              description:
                'The seller, who initiates the collection and whose instructions govern how the documents may be released.',
            },
            {
              term: 'Remitting bank',
              description:
                'The seller’s bank, which forwards the documents and the instruction. It acts as agent for the seller.',
            },
            {
              term: 'Collecting and presenting bank',
              description:
                'The bank in the buyer’s country that receives the documents and presents them to the buyer for payment or acceptance.',
            },
            {
              term: 'Drawee',
              description:
                'The buyer, to whom presentation is made and who must satisfy the condition to obtain the documents.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The banks promise nothing about payment',
          text: 'A collecting bank is an agent following instructions. It does not undertake to pay if the buyer does not, does not guarantee the buyer’s acceptance, and does not vouch for the documents. A seller relying on a collection is relying on the buyer and on its own control of the documents — not on a bank’s credit.',
        },
      ],
    },
    {
      id: 'dp-and-da',
      heading: 'Documents against payment, documents against acceptance',
      body: [
        {
          type: 'paragraph',
          text: 'The two forms differ in what the buyer must do to obtain the documents, and the difference is the seller’s entire risk position.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Documents against payment (D/P)',
              description:
                'The documents are released only when the buyer pays. The seller parts with control of the goods and receives the money in the same transaction, so the exchange is close to simultaneous.',
            },
            {
              term: 'Documents against acceptance (D/A)',
              description:
                'The documents are released when the buyer accepts a bill of exchange payable at a future date. The buyer obtains the goods immediately and the seller holds a promise. From that moment the seller is an unsecured creditor with no goods and no money.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'D/A is therefore a fundamentally different proposition from D/P despite the similar machinery. It is a credit extended by the seller to the buyer, dressed in documentary clothing. The accepted bill is evidence of the obligation and may have advantages under the applicable law, but if the buyer does not pay at maturity the seller’s recourse is against a counterparty that already has the cargo.',
        },
      ],
    },
    {
      id: 'where-the-leverage-fails',
      heading: 'Where the leverage fails',
      body: [
        {
          type: 'paragraph',
          text: 'The mechanism assumes that whoever holds the documents controls the goods. That assumption holds for some transport arrangements and not for others. Where the transport document is one that must be surrendered to obtain delivery, control is genuine: the cargo cannot be collected without the paper the seller is holding back. Where the goods can be released to a named consignee without surrendering a document, the seller is withholding paper the buyer does not strictly need, and the leverage is largely notional.',
        },
        {
          type: 'paragraph',
          text: 'The second failure mode is refusal. The buyer is not compelled to take up the documents. If the market has moved, if the buyer no longer wants the cargo, or if the buyer is simply unable to pay, it can decline — and the seller then owns goods sitting at a distant port, incurring charges, with no local buyer and possibly a perishable clock running. The collection has cost the seller nothing in bank undertakings and delivered nothing in protection.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Refusal is worst where the cargo is worst placed',
          text: 'A buyer is most likely to decline exactly when the seller is least able to respond — a fallen market, a distant port, a cargo with limited shelf life, storage and demurrage accruing. The mechanism offers no answer to this; that is what a bank undertaking is for, at a price.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'Collections are used where the parties know each other, where the trade is regular, and where the cost and administrative weight of a documentary credit are hard to justify against the residual risk. Established relationships in commodity trade run on them, and the choice is a commercial judgment about the counterparty rather than a technical one.',
        },
        {
          type: 'list',
          items: [
            'The security depends on the transport document being one that must be surrendered to take delivery',
            'Perishable cargo weakens the seller’s position on refusal, because the goods will not wait for a resolution',
            'Bulk cargo at a distant port carries storage and demurrage that accrue against the seller while a refusal is unresolved',
            'A D/A arrangement is an extension of trade credit and should be assessed as one',
            'Neither form involves any bank examining or assuring the documents’ contents',
          ],
        },
        {
          type: 'paragraph',
          text: 'The comparison with a documentary credit is the useful frame. A credit costs more and delivers a bank’s undertaking; a collection costs less and delivers document control. Which trade-off suits a transaction depends on the counterparty, the market, the cargo, and the parties’ own risk appetite — a judgment for the parties and their advisers, and not one this page makes.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To handle the exchange of shipping documents for payment or for acceptance of a future payment obligation through the banking system, using control of the documents rather than a bank undertaking as the seller’s security.',
  administeredBy:
    'Commercial banks acting as agents under the collection instruction and the uniform rules it incorporates',
  governingBodies: ['International Chamber of Commerce'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes how the mechanism works in general terms. It is not banking, financial, or legal advice, and it does not reproduce the uniform rules for collections or any bank’s terms.',
    'Nothing here recommends a collection, a documentary credit, open account, or any other payment method for any transaction or counterparty. That assessment belongs to the parties and their advisers.',
    'The banks in a collection give no payment undertaking. Whether a particular arrangement gives a seller effective control of the goods depends on the transport document used and the applicable law.',
    'Rights arising from an accepted bill of exchange, and the remedies available on dishonour, are matters of the governing law and are not described here.',
  ],
  partiesInvolved: [
    'Principal or drawer (seller)',
    'Remitting bank',
    'Collecting bank',
    'Presenting bank',
    'Drawee (buyer)',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
  ],
  sourceReferences: [
    {
      sourceId: 'icc',
      citedFor:
        'The uniform rules for collections, the agency role of the banks, and the distinction between release against payment and release against acceptance',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Comparison of documentary payment methods in international sale transactions by cost and assurance',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Documentary and payment practice in bulk grain and oilseed trade',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Collections are handled worldwide under commonly incorporated rules, but the effect of a transport document on control of the goods, and the rights attaching to an accepted bill, depend on the applicable law.',
  limitations: [
    'A description of the mechanism, not banking or legal advice and not a reproduction of the applicable rules.',
    'No charges, periods, or instruction wording are stated; these are set by the parties, their banks, and the rules the instruction incorporates.',
    'Whether document control is effective depends on the transport document and the governing law, and is not generalisable.',
    'The relative merits of collections and other payment methods depend on the counterparty, market, and cargo, and no recommendation is offered.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Documentary Collection: Documents Against Payment/Acceptance',
    description:
      'How a documentary collection works: the parties, D/P versus D/A, why the banks undertake nothing, and where document control fails.',
    keywords: [
      'documentary collection',
      'documents against payment',
      'documents against acceptance',
      'bill of exchange',
      'trade finance',
    ],
  },
  structuredData: { article: true },
};
