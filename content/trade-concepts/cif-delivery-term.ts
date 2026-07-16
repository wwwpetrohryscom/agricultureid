import type { TradeConceptContent } from '@/types/content';
import { INCOTERMS_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const cifDeliveryTerm: TradeConceptContent = {
  id: 'trade-concept-cif-delivery-term',
  slug: 'cif-delivery-term',
  contentType: 'trade-concept',
  title: 'CIF (Cost, Insurance and Freight)',
  alternativeNames: ['Cost, Insurance and Freight', 'CIF delivery term'],
  category: 'Trade concept',
  subcategory: 'Delivery term',
  tradeConceptClass: 'delivery-term',
  summary:
    'CIF is an Incoterms® rule for sea and inland waterway transport under which the seller contracts and pays for carriage to a named port of destination and procures a specified minimum level of cargo insurance — while risk passes to the buyer at shipment, not on arrival. The separation of cost from risk is the whole point of the term and the source of most misunderstandings about it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Under Cost, Insurance and Freight the seller does three things beyond delivering the goods: it clears them for export, it contracts and pays for the ocean carriage to a named port of destination, and it takes out cargo insurance under which the buyer can claim. The named place in the term is a destination port, and the price quoted includes getting the cargo there.',
    },
    {
      type: 'paragraph',
      text: 'And yet the risk of loss or damage passes to the buyer at the origin end, when the goods are delivered at shipment. The seller is paying for a voyage over which the buyer bears the risk. That is not an anomaly to be corrected — it is the deliberate architecture of the term, and it is why the insurance obligation exists at all. A reader who assumes the seller remains on risk until the ship arrives has misread the rule in the most consequential way available.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Delivery term — port-based, seller contracts carriage and insurance',
    },
    { label: 'Published by', value: 'International Chamber of Commerce (ICC)' },
    { label: 'Transport modes', value: 'Sea and inland waterway transport' },
    {
      label: 'Named place',
      value: 'A port of destination — but risk does not pass there',
    },
    {
      label: 'Risk transfer',
      value: 'At the origin end, on delivery at shipment',
    },
    {
      label: 'Insurance',
      value:
        'One of the minority of rules imposing an insurance obligation on the seller, at a specified minimum level',
    },
    {
      label: 'Export formalities',
      value: 'A seller obligation; import formalities are not',
    },
  ],
  sections: [
    {
      id: 'what-it-allocates',
      heading: 'What the term allocates',
      body: [
        {
          type: 'paragraph',
          text: 'CIF sets several dials in positions that do not line up with one another. Reading them separately is the only way to read the term correctly.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cost',
              description:
                'The seller bears the cost of carriage to the named port of destination, plus export clearance and the insurance premium. Costs at destination beyond that fall to the buyer.',
            },
            {
              term: 'Risk',
              description:
                'Passes to the buyer at the origin end, on delivery at shipment. A loss during the voyage is the buyer’s loss even though the seller paid for the voyage.',
            },
            {
              term: 'Carriage',
              description:
                'The seller contracts the ocean carriage to the named destination port. The buyer is not a party to that contract but receives the transport document.',
            },
            {
              term: 'Insurance',
              description:
                'The seller must procure cargo insurance covering the buyer’s risk during carriage, at a minimum level specified by the rule. The level required differs from that of the any-mode insurance rule.',
            },
            {
              term: 'Export and import formalities',
              description:
                'Export clearance is the seller’s; import clearance, duties, and destination formalities are the buyer’s.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Two named points, doing different jobs',
          text: 'The port named in the term is the destination to which the seller must pay carriage. It is not where risk passes. Delivery — and with it risk transfer — happens at shipment. Both points matter, and a contract that names only one has left the other to be inferred.',
        },
      ],
    },
    {
      id: 'why-insurance-is-in-the-term',
      heading: 'Why insurance is part of the term',
      body: [
        {
          type: 'paragraph',
          text: 'The insurance obligation is a direct consequence of the cost–risk split. The buyer bears the risk of the voyage but does not contract the carriage, is not at the load port, and may not know the vessel or the schedule until after shipment. Requiring the seller — the party with that information — to procure cover for the buyer’s benefit closes a gap the structure of the term would otherwise open.',
        },
        {
          type: 'paragraph',
          text: 'The cover required is a minimum, not a judgment about what is adequate. The published rule specifies the level, and the 2020 edition set different minimum levels for the port-based rule and its any-mode counterpart. Whether the specified minimum suits a particular cargo — a consideration that arises for high-value or condition-sensitive agricultural goods — is a commercial question for the parties, who may agree something else in the contract.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A minimum is a floor, not an assessment',
          text: 'The rule’s insurance requirement establishes a baseline. It does not represent a view that the baseline is sufficient for any given consignment, and this page offers no such view either. What cover to carry is a matter for the parties and their insurance advisers.',
        },
      ],
    },
    {
      id: 'documentary-character',
      heading: 'The documentary character of the term',
      body: [
        {
          type: 'paragraph',
          text: 'CIF has long been associated with sales performed against documents rather than against physical delivery. The seller ships the goods and tenders a set of documents — typically including a transport document, an invoice, and an insurance policy or certificate — and the buyer’s obligation to pay is triggered by that tender rather than by the arrival of the cargo.',
        },
        {
          type: 'paragraph',
          text: 'This is what allows a cargo to be sold on while it is still at sea: the documents represent the goods and the insurance travels with them, so a purchaser down the chain acquires both the claim to the cargo and the cover over it. It is also why the term sits so naturally alongside documentary payment mechanisms, which are built to exchange payment against a specified set of documents.',
        },
        {
          type: 'paragraph',
          text: 'The documentary character is a feature of how the term is used in trade, supported by the sale contract and the applicable law. The delivery term itself governs the allocation of cost, risk, and obligation; whether payment is due against documents, and what documents conform, is settled by the contract and by any credit the parties open.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'Like FOB, CIF is part of the standing vocabulary of bulk commodity pricing: quotations are made on a CIF basis at a named destination port, describing the value of a cargo delivered to that port with freight and insurance included. The relationship between an origin-basis quotation and a destination-basis one is the freight and insurance in between, which is why the two are read together rather than compared directly.',
        },
        {
          type: 'list',
          items: [
            'The seller controls the carriage contract, so vessel choice, routing, and schedule are the seller’s decisions',
            'The buyer bears voyage risk without having selected the vessel — the reason the insurance obligation exists',
            'Cargo can be traded on during the voyage, because the documents and the cover move together',
            'Admissibility at destination is unaffected: the term allocates who clears the goods, not whether they will be allowed in',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point recurs across every delivery term and is worth stating plainly here. A cargo arriving at a named destination port under a term that puts import clearance on the buyer is still subject to the importing jurisdiction’s sanitary, phytosanitary, and other requirements. Where those requirements are not met, the term determines which party carries the burden of the consequences; it does not soften them.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To express, in a contract of sale for waterborne transport, a division in which the seller clears for export, contracts and pays carriage to a named destination port, and insures the buyer’s cargo risk — while risk itself passes at shipment.',
  administeredBy:
    'International Chamber of Commerce (rule owner and publisher)',
  governingBodies: ['International Chamber of Commerce'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    INCOTERMS_SCOPE_NOTE,
    'This page describes in general terms what the rule allocates. It does not reproduce or paraphrase the rule’s text, its obligation lists, or its delivery, risk, and insurance provisions.',
    'No insurance level, clause set, or cover figure is stated, and nothing here should be read as a view on whether any level of cover is adequate for a consignment. Insurance is a matter for the parties and their insurance advisers.',
    'Nothing here presents this rule as appropriate or preferable for any transaction, commodity, or route; selection is a matter for the parties and their advisers.',
  ],
  partiesInvolved: [
    'Seller, who contracts carriage and insurance',
    'Buyer, who bears voyage risk and clears the goods at destination',
    'Ocean carrier',
    'Cargo insurer',
    'Bank operating any documentary payment mechanism',
    'Customs authorities of the exporting and importing jurisdictions',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'packing-list' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'ddp-delivery-term' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
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
        'Publication and ownership of the delivery-term rules, the port-based family, and the existence of a seller insurance obligation at a specified minimum level',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Convention of quoting bulk grain and oilseed prices on a destination-port basis alongside origin-port quotations',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Treatment of freight and insurance in the customs value of imported goods, which is determined separately from the delivery term',
    },
    {
      sourceId: 'itc',
      citedFor: 'Use of delivery terms in international sale contracts',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, wherever the parties incorporate the rule and the carriage is waterborne. Import formalities, admissibility requirements, and destination costs are national and differ in every jurisdiction.',
  limitations: [
    'A general description of what the term allocates, not a reproduction of or substitute for the published rule.',
    'No insurance level, delivery point, or risk-transfer moment is stated in rule terms; those are in the ICC publication the contract names.',
    'No recommendation is made about using this or any other rule, and no view is offered on the adequacy of any insurance cover.',
    'The relationship between a destination-basis quotation and an origin-basis one depends on freight and insurance markets, and no figures are given.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'CIF (Cost, Insurance and Freight): What the Term Allocates',
    description:
      'How the CIF Incoterms® rule divides cost, risk, carriage, and insurance, and why the seller pays for a voyage the buyer is on risk for.',
    keywords: [
      'CIF',
      'cost insurance and freight',
      'delivery term',
      'cargo insurance',
      'port of destination',
    ],
  },
  structuredData: { article: true },
};
