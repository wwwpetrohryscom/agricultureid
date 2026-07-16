import type { TradeConceptContent } from '@/types/content';
import { INCOTERMS_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const fcaDeliveryTerm: TradeConceptContent = {
  id: 'trade-concept-fca-delivery-term',
  slug: 'fca-delivery-term',
  contentType: 'trade-concept',
  title: 'FCA (Free Carrier)',
  alternativeNames: ['Free Carrier', 'FCA delivery term'],
  category: 'Trade concept',
  subcategory: 'Delivery term',
  tradeConceptClass: 'delivery-term',
  summary:
    'FCA is the Incoterms® rule under which the seller delivers by handing the goods to a carrier or other party nominated by the buyer at a named place, having cleared them for export. It is usable for any mode of transport, and the named place decides what "handing over" actually means.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Free Carrier sits a short way along the range from the minimum-obligation end. The seller does not merely make the goods available where they stand: it clears them for export and delivers them to a carrier or another party that the buyer has nominated, at a place the contract names. From that handover, the buyer carries the journey.',
    },
    {
      type: 'paragraph',
      text: 'The rule belongs to the family intended for any mode or modes of transport, which is what gives it its reach. A handover can occur at the seller’s premises, at a road haulier’s yard, at a rail terminal, at a container depot, or at an air cargo facility, and the rule is built to accommodate all of them. The price of that flexibility is that the named place carries an unusual amount of weight.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Delivery term — delivery to a nominated carrier',
    },
    { label: 'Published by', value: 'International Chamber of Commerce (ICC)' },
    { label: 'Transport modes', value: 'Any mode or modes of transport' },
    {
      label: 'Delivery point',
      value:
        'A named place, where the goods are handed to the buyer’s nominated carrier or party',
    },
    {
      label: 'Export formalities',
      value: 'A seller obligation under this rule',
    },
    {
      label: 'Import formalities',
      value: 'Not a seller obligation under this rule',
    },
    {
      label: 'Named place sensitivity',
      value:
        'What constitutes delivery differs according to whether the named place is the seller’s premises or somewhere else',
    },
  ],
  sections: [
    {
      id: 'what-it-allocates',
      heading: 'What the term allocates',
      body: [
        {
          type: 'paragraph',
          text: 'FCA fixes delivery at a handover to a party the buyer has chosen. Risk and cost pass at that handover. The seller has taken the goods through export clearance and to the agreed place; the buyer has contracted the carriage that collects them and bears what follows.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cost',
              description:
                'The seller bears costs up to and including delivery at the named place and export clearance; the buyer bears the main carriage and everything beyond.',
            },
            {
              term: 'Risk',
              description:
                'Passes at the handover to the nominated carrier or party at the named place, not at arrival and not at loading onto a vessel.',
            },
            {
              term: 'Carriage',
              description:
                'The buyer contracts the main carriage and nominates the carrier. The seller’s duty runs to delivering into that carrier’s hands.',
            },
            {
              term: 'Insurance',
              description:
                'Neither party is obliged to procure insurance for the benefit of the other under this rule.',
            },
            {
              term: 'Export and import formalities',
              description:
                'Export clearance is the seller’s; import clearance and any transit formalities beyond export are the buyer’s.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The named place changes the mechanics',
          text: 'Whether the named place is the seller’s own premises or a third-party location alters what the seller must physically do to have delivered — in particular, who loads and who unloads. The published rule sets this out. A named place stated loosely leaves that mechanic, and the risk boundary with it, undefined.',
        },
      ],
    },
    {
      id: 'why-it-exists-for-any-mode',
      heading: 'Why an any-mode term exists',
      body: [
        {
          type: 'paragraph',
          text: 'Much modern cargo is handed over well before it reaches the vehicle that will carry it internationally. A container of coffee is stuffed inland, delivered to a depot, and only later moves to a quay and onto a ship. An air consignment of cut flowers is handed to a forwarder hours before it reaches an aircraft. In both cases the commercially real handover — the moment the seller lets go and the buyer’s chain takes over — happens at a terminal or depot, not at a ship’s rail.',
        },
        {
          type: 'paragraph',
          text: 'The any-mode family exists to describe exactly that geometry. FCA locates delivery at the handover point wherever it physically is, which is why it can serve road, rail, air, inland waterway, sea, and combinations of them without changing shape. The port-based family, by contrast, is built around a vessel and a port and takes its reference points from them.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A documentary wrinkle in the 2020 edition',
          text: 'Where a seller delivers before loading but needs a transport document showing the goods on board — commonly because a letter of credit calls for one — the position is awkward, because the seller is not the party contracting the carriage. The 2020 edition introduced an optional mechanism addressing this. Its terms are in the ICC publication and are not reproduced here.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'FCA’s handover point tends to fall at a moment that matters physically for farm goods. For temperature-sensitive consignments, the risk boundary and the point at which the cold chain changes hands often coincide, which makes the condition and the recorded temperature at handover the evidence both parties later rely on. For containerised cargo, the handover typically follows stuffing, so the state of the packing at that point is what passes to the buyer.',
        },
        {
          type: 'list',
          items: [
            'Handover commonly occurs at a depot, terminal, or forwarder’s facility rather than at a port or airport of departure',
            'Export clearance sits with the seller, the party actually established in the exporting jurisdiction',
            'For perishables, the physical condition at handover is the practical dividing line as well as the legal one',
            'Where a document showing goods on board is needed, the seller is not the party who contracted the carriage that would issue it',
          ],
        },
        {
          type: 'paragraph',
          text: 'None of this makes the rule suitable or unsuitable for any given trade. It describes where the term places the boundary, and which operational facts consequently become important to record.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To express, in a contract of sale, a division in which the seller clears the goods for export and delivers them to a carrier or party nominated by the buyer at a named place, with cost and risk passing at that handover.',
  administeredBy:
    'International Chamber of Commerce (rule owner and publisher)',
  governingBodies: ['International Chamber of Commerce'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    INCOTERMS_SCOPE_NOTE,
    'This page describes in general terms what the rule allocates. It does not reproduce or paraphrase the rule’s text, its obligation lists, or its delivery and risk provisions.',
    'Nothing here presents this rule as appropriate, preferable, or unsuitable for any transaction, commodity, mode, or route. Selection is a matter for the parties and their advisers.',
    'Whether a particular handover constitutes delivery under the term depends on the contract, the named place, and the facts, and is not determined by a reference description.',
  ],
  partiesInvolved: [
    'Seller, who clears for export and delivers at the named place',
    'Buyer, who nominates the carrier and contracts the main carriage',
    'Carrier or freight forwarder nominated by the buyer',
    'Customs authority of the exporting jurisdiction',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'exw-delivery-term' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
  ],
  sourceReferences: [
    {
      sourceId: 'icc',
      citedFor:
        'Publication and ownership of the delivery-term rules, the any-mode family, and the 2020 edition’s optional on-board document mechanism',
    },
    {
      sourceId: 'itc',
      citedFor: 'Use of delivery terms in international sale contracts',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Export clearance as a formality performed before the competent customs authority of the exporting jurisdiction',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, wherever the parties incorporate the rule. Export formalities, terminal practice, and what a named place denotes locally differ by jurisdiction and by facility.',
  limitations: [
    'A general description of what the term allocates, not a reproduction of or substitute for the published rule.',
    'No delivery mechanics, risk-transfer moment, or obligation list is stated in rule terms; those are in the ICC publication the contract names.',
    'No recommendation is made about using this or any other rule, and no comparison by suitability is offered.',
    'Handover practice at depots, terminals, and forwarders’ facilities varies widely and is governed by the contract and local practice rather than by the rule alone.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'FCA (Free Carrier): What the Delivery Term Allocates',
    description:
      'How the FCA Incoterms® rule divides cost, risk, and formalities: delivery to a buyer-nominated carrier at a named place, and why an any-mode term exists.',
    keywords: [
      'FCA',
      'free carrier',
      'delivery term',
      'named place',
      'incoterms rule',
    ],
  },
  structuredData: { article: true },
};
