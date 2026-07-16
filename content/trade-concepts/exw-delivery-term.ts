import type { TradeConceptContent } from '@/types/content';
import { INCOTERMS_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const exwDeliveryTerm: TradeConceptContent = {
  id: 'trade-concept-exw-delivery-term',
  slug: 'exw-delivery-term',
  contentType: 'trade-concept',
  title: 'EXW (Ex Works)',
  alternativeNames: ['Ex Works', 'EXW delivery term'],
  category: 'Trade concept',
  subcategory: 'Delivery term',
  tradeConceptClass: 'delivery-term',
  summary:
    'EXW is the Incoterms® rule at the minimum-obligation end of the range for the seller: the goods are made available at the seller’s own premises or another named place, and the buyer takes on the journey from there. Its apparent simplicity is where its practical difficulties come from.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ex Works describes a sale in which the seller’s involvement effectively ends where the goods sit. The seller makes the consignment available to the buyer at a named place — typically a farm, store, warehouse, or works — and the buyer arranges and pays for everything that follows: collection, inland movement, formalities, main carriage, and delivery onward.',
    },
    {
      type: 'paragraph',
      text: 'The rule is often chosen because it looks like the least complicated way to sell, and because it produces a price that is easy to state. In cross-border agricultural trade its consequences are less simple than they appear, because the party carrying almost every obligation under the term is the party furthest from the goods and, frequently, the party with the least standing in the country the goods must leave.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Delivery term — minimum seller obligation' },
    { label: 'Published by', value: 'International Chamber of Commerce (ICC)' },
    { label: 'Transport modes', value: 'Any mode or modes of transport' },
    {
      label: 'Delivery point',
      value: 'A named place, commonly the seller’s own premises',
    },
    {
      label: 'Distinguishing feature',
      value:
        'The seller undertakes least; cost and risk sit with the buyer for essentially the whole journey',
    },
    {
      label: 'Export formalities',
      value:
        'Not a seller obligation under this rule — which is the source of most of its practical difficulty',
    },
    {
      label: 'Citation',
      value:
        'Rule, named place, and edition — the edition defines the content of the term',
    },
  ],
  sections: [
    {
      id: 'what-it-allocates',
      heading: 'What the term allocates',
      body: [
        {
          type: 'paragraph',
          text: 'EXW places the delivery point at the origin end of the journey. Once the goods are made available at the named place, the buyer bears the costs and the risk of loss or damage from that point onward, and is the party who must contract for carriage and deal with the formalities of getting the goods out of the country and into another.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cost',
              description:
                'Sits with the buyer from the delivery point onward. The seller’s price reflects the goods where they stand, not the goods delivered anywhere.',
            },
            {
              term: 'Risk',
              description:
                'Passes to the buyer at the delivery point. Everything that happens to the goods after that — in transit, at the border, at sea — is the buyer’s exposure.',
            },
            {
              term: 'Carriage',
              description:
                'The seller is under no obligation to contract for transport. The buyer organises the entire chain.',
            },
            {
              term: 'Insurance',
              description:
                'Neither party is obliged to insure for the other. A buyer who wants cargo cover arranges it for its own account.',
            },
            {
              term: 'Export and import formalities',
              description:
                'Both fall to the buyer under this rule. This is the asymmetry that distinguishes EXW from every other term in the set.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Loading is a known point of ambiguity',
          text: 'Who physically loads the goods onto the buyer’s collecting vehicle, and who bears the risk while that happens, is a recurring source of argument under this term. The published rule addresses the point; parties who care about it commonly deal with it expressly in the contract. What the rule says is not reproduced here.',
        },
      ],
    },
    {
      id: 'the-export-clearance-problem',
      heading: 'The export-clearance asymmetry',
      body: [
        {
          type: 'paragraph',
          text: 'The defining practical feature of EXW is that the buyer is responsible for export formalities in a country where the buyer is usually not established. Customs administrations generally expect an exporter of record who has standing in that jurisdiction — a registration, a tax identity, an ability to be held accountable. A foreign buyer may have none of these.',
        },
        {
          type: 'paragraph',
          text: 'The result is that the seller frequently ends up performing, or lending its name to, export steps the term does not oblige it to perform. That arrangement can work, but it means the documentary and legal position no longer matches the term the contract names. Where the export declaration is made in the seller’s name while the term allocates the obligation to the buyer, questions about who is accountable for the declaration’s accuracy are not answered by the delivery term at all.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Proof of export is a separate problem',
          text: 'Sellers commonly need evidence that goods actually left the jurisdiction, for tax or regulatory reasons. Under a term where the buyer controls the export movement, that evidence is in the buyer’s hands. Whether it is provided, and on what terms, is a matter for the contract and the applicable law rather than for the rule.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'EXW appears most often in transactions where the buyer is already operating in the seller’s country — a trader, aggregator, or exporter with local presence collecting from farms or upcountry stores. In that setting the export-clearance asymmetry largely disappears, because the buyer genuinely is established where the goods are.',
        },
        {
          type: 'paragraph',
          text: 'It fits less comfortably where the buyer is genuinely foreign and the goods are perishable or regulated. Agricultural consignments frequently require official attestations issued in the exporting country — phytosanitary or sanitary certification, for example — which are obtained through processes anchored to the exporting jurisdiction and, in practice, to a party present in it. The delivery term allocates who must obtain them; it does not make a distant party able to.',
        },
        {
          type: 'list',
          items: [
            'The party bearing risk from the delivery point may have no presence at, or visibility of, the place where the goods sit',
            'Condition at handover matters more for perishable goods, and the term fixes the risk boundary at exactly that moment',
            'Official export attestations are obtained in the exporting jurisdiction, whoever the rule says must obtain them',
            'Where the seller performs export steps informally, the paperwork and the contract can end up describing different arrangements',
          ],
        },
      ],
    },
  ],
  conceptPurpose:
    'To express, in a contract of sale, a division in which the seller’s obligation is discharged by making the goods available at a named place and the buyer assumes cost, risk, carriage, and formalities from that point.',
  administeredBy:
    'International Chamber of Commerce (rule owner and publisher)',
  governingBodies: ['International Chamber of Commerce'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    INCOTERMS_SCOPE_NOTE,
    'This page describes in general terms what the rule allocates. It does not reproduce or paraphrase the rule’s text, obligation lists, or delivery and risk provisions.',
    'Nothing here suggests that this rule is appropriate, inappropriate, or preferable for any transaction, commodity, counterparty, or route. Selection is a matter for the parties and their advisers.',
    'The difficulties described are general observations about how the term interacts with customs practice; whether they arise in a given trade depends on the jurisdictions, the parties’ standing, and the contract.',
  ],
  partiesInvolved: [
    'Seller at the named place',
    'Buyer, who collects and moves the goods',
    'Carrier or forwarder engaged by the buyer',
    'Customs authority of the exporting jurisdiction',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'packing-list' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'ddp-delivery-term' },
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
  ],
  sourceReferences: [
    {
      sourceId: 'icc',
      citedFor:
        'Publication and ownership of the delivery-term rules and the general position of this rule within the set',
    },
    {
      sourceId: 'itc',
      citedFor: 'Use of delivery terms in international sale contracts',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Export declaration and exporter-of-record practice as a matter for the customs authority of the exporting jurisdiction',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, wherever the parties incorporate the rule. Whether a foreign buyer can act as exporter of record, and what evidence of export a seller needs, are national questions that differ in every jurisdiction.',
  limitations: [
    'A general description of what the term allocates, not a reproduction of or substitute for the published rule.',
    'No delivery point, risk-transfer moment, cost list, or obligation is stated in rule terms; those are in the ICC publication the contract names.',
    'No recommendation is made about using this or any other rule.',
    'Loading, export-clearance standing, and evidence-of-export practice vary by jurisdiction and by contract, and are not generalisable.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'EXW (Ex Works): What the Delivery Term Allocates',
    description:
      'How the EXW Incoterms® rule divides cost, risk, carriage, and formalities between seller and buyer, and why export clearance is its defining asymmetry.',
    keywords: [
      'EXW',
      'ex works',
      'delivery term',
      'export clearance',
      'incoterms rule',
    ],
  },
  structuredData: { article: true },
};
