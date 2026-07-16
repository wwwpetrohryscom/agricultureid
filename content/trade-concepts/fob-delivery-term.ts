import type { TradeConceptContent } from '@/types/content';
import { INCOTERMS_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const fobDeliveryTerm: TradeConceptContent = {
  id: 'trade-concept-fob-delivery-term',
  slug: 'fob-delivery-term',
  contentType: 'trade-concept',
  title: 'FOB (Free On Board)',
  alternativeNames: ['Free On Board', 'FOB delivery term'],
  category: 'Trade concept',
  subcategory: 'Delivery term',
  tradeConceptClass: 'delivery-term',
  summary:
    'FOB is an Incoterms® rule from the family intended for sea and inland waterway transport, under which the seller delivers on board a vessel nominated by the buyer at a named port of shipment, having cleared the goods for export. Its reference point is the ship itself, which is both its precision and its constraint.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Free On Board is one of the oldest and most widely recognised delivery terms in commodity trade. The seller clears the goods for export and delivers them on board a vessel that the buyer has nominated, at a port the contract names. The buyer contracts the ocean carriage, and from the moment of delivery carries the risk of what happens to the cargo.',
    },
    {
      type: 'paragraph',
      text: 'The term belongs to the family built around ports and vessels rather than around any mode of transport. That is what makes it precise for a cargo that is physically loaded into a ship — and what makes it an awkward fit for cargo that leaves the seller’s control at an inland depot days before a vessel is involved. Both facts are consequences of the same design decision.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Delivery term — port-based, delivery on board' },
    { label: 'Published by', value: 'International Chamber of Commerce (ICC)' },
    {
      label: 'Transport modes',
      value: 'Sea and inland waterway transport',
    },
    {
      label: 'Delivery point',
      value:
        'On board the buyer’s nominated vessel at the named port of shipment',
    },
    {
      label: 'Export formalities',
      value: 'A seller obligation under this rule',
    },
    {
      label: 'Carriage and insurance',
      value:
        'The seller is obliged neither to contract the ocean carriage nor to insure for the buyer',
    },
    {
      label: 'Common in',
      value:
        'Bulk agricultural commodity trade, where a cargo is loaded into a nominated vessel',
    },
  ],
  sections: [
    {
      id: 'what-it-allocates',
      heading: 'What the term allocates',
      body: [
        {
          type: 'paragraph',
          text: 'FOB places delivery at the vessel. The seller’s obligations run to getting the goods through export clearance and on board the ship the buyer has nominated at the named port; the buyer’s begin with having a ship there to receive them and continue through the sea leg and beyond.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cost',
              description:
                'The seller bears costs to delivery on board and export clearance. The buyer bears the freight, the discharge, and everything at destination.',
            },
            {
              term: 'Risk',
              description:
                'Passes at delivery on board the vessel. Loss or damage on the sea leg falls on the buyer, whether or not the buyer has insured it.',
            },
            {
              term: 'Carriage',
              description:
                'The buyer contracts the ocean carriage and nominates the vessel. This makes vessel nomination an obligation with real consequences: the seller cannot deliver without a ship to deliver into.',
            },
            {
              term: 'Insurance',
              description:
                'Neither party is obliged to insure for the benefit of the other. A buyer bearing sea risk from loading arranges its own cover if it wants any.',
            },
            {
              term: 'Export and import formalities',
              description:
                'Export clearance is the seller’s obligation; import clearance and everything at destination are the buyer’s.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Nomination is a two-sided dependency',
          text: 'Because the buyer nominates the vessel and the seller must deliver into it, the two obligations interlock. Late nomination, a substituted vessel, or a ship that cannot berth affects both parties. How the published rule allocates the consequences, and what the contract adds, is a matter for the rule text and the contract rather than for this description.',
        },
      ],
    },
    {
      id: 'the-container-mismatch',
      heading: 'Why the reference point matters',
      body: [
        {
          type: 'paragraph',
          text: 'A port-based term assumes that the moment the seller relinquishes the goods and the moment they are loaded into the international carrier are close enough to be treated as one. For a bulk cargo loaded directly from a terminal into a ship’s hold, that assumption holds well: the elevator, the spout, and the hatch are all part of a single operation.',
        },
        {
          type: 'paragraph',
          text: 'For containerised cargo it often does not hold. A container is typically handed to the carrier or terminal well before it is loaded, and the seller has no control over it in the interval. A term that fixes delivery on board therefore leaves the seller bearing risk over a period in which the goods are already out of its hands. The ICC materials discuss this distinction directly, which is why the any-mode family exists alongside the port-based one.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A gap between control and risk',
          text: 'Where a term places risk transfer later than the point at which the seller physically loses control of the goods, the seller carries exposure over cargo it cannot observe or protect. This is an observation about how reference points behave, not a recommendation to use or avoid any rule.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in bulk agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'FOB is deeply embedded in the language of bulk commodity trade, to the point that prices for grains and oilseeds are routinely quoted on an FOB basis at a named port. A quotation of that kind describes the value of the cargo delivered on board at that port, and it is the reference from which freight and destination costs are added to reach a landed comparison.',
        },
        {
          type: 'paragraph',
          text: 'Loading a bulk agricultural cargo is also where several measurement and quality questions crystallise. Quantity is established at the load port by an agreed method, and sampling for quality is customarily taken during loading. What method applies, who appoints the surveyor, and whether the load-port result binds the parties are contractual questions, settled by the sale contract and the trade rules it incorporates rather than by the delivery term.',
        },
        {
          type: 'list',
          items: [
            'Bulk cargoes load directly into a nominated vessel, which is the geometry the term is built around',
            'Quantity and quality are conventionally established at the load port, around the moment the term fixes as delivery',
            'Vessel nomination, laytime, and demurrage are handled by the sale and charter contracts, not by the delivery term',
            'The term does not address whether the cargo will be admissible at destination',
          ],
        },
      ],
    },
  ],
  conceptPurpose:
    'To express, in a contract of sale for waterborne transport, a division in which the seller clears the goods for export and delivers them on board a buyer-nominated vessel at a named port, with cost and risk passing at that point.',
  administeredBy:
    'International Chamber of Commerce (rule owner and publisher)',
  governingBodies: ['International Chamber of Commerce'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    INCOTERMS_SCOPE_NOTE,
    'This page describes in general terms what the rule allocates. It does not reproduce or paraphrase the rule’s text, its obligation lists, or its delivery and risk provisions.',
    'Nothing here presents this rule as appropriate or inappropriate for containerised cargo, bulk cargo, or any other trade. The observation about reference points is descriptive; selection is a matter for the parties and their advisers.',
    'Laytime, demurrage, vessel nomination consequences, and load-port measurement are governed by the sale contract, the charterparty, and the trade rules the parties incorporate — not by the delivery term and not by this page.',
  ],
  partiesInvolved: [
    'Seller, who clears for export and delivers on board',
    'Buyer, who nominates the vessel and contracts the ocean carriage',
    'Ocean carrier or shipowner',
    'Load-port terminal operator',
    'Customs authority of the exporting jurisdiction',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'draught-survey' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
  ],
  connections: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  sourceReferences: [
    {
      sourceId: 'icc',
      citedFor:
        'Publication and ownership of the delivery-term rules and the existence of a family intended for sea and inland waterway transport',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Convention of quoting bulk grain and oilseed prices on a port-of-shipment basis',
    },
    {
      sourceId: 'itc',
      citedFor: 'Use of delivery terms in international sale contracts',
    },
    {
      sourceId: 'imo',
      citedFor:
        'Safety framework governing the loading and carriage of cargoes by sea, which the delivery term does not address',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, wherever the parties incorporate the rule and the carriage is waterborne. Port practice, load-port measurement custom, and export formalities differ by port and jurisdiction.',
  limitations: [
    'A general description of what the term allocates, not a reproduction of or substitute for the published rule.',
    'No delivery point, risk-transfer moment, or obligation is stated in rule terms; those are in the ICC publication the contract names.',
    'No recommendation is made about using this or any other rule for any cargo form or route.',
    'Load-port measurement, sampling, laytime, and demurrage practice vary by port, trade, and contract, and no figures or timescales are given.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'FOB (Free On Board): What the Delivery Term Allocates',
    description:
      'How the FOB Incoterms® rule divides cost, risk, and formalities: delivery on board a buyer-nominated vessel, and why its reference point is the ship.',
    keywords: [
      'FOB',
      'free on board',
      'delivery term',
      'port of shipment',
      'bulk commodity trade',
    ],
  },
  structuredData: { article: true },
};
