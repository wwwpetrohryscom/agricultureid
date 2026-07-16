import type { TradeConceptContent } from '@/types/content';
import { INCOTERMS_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const ddpDeliveryTerm: TradeConceptContent = {
  id: 'trade-concept-ddp-delivery-term',
  slug: 'ddp-delivery-term',
  contentType: 'trade-concept',
  title: 'DDP (Delivered Duty Paid)',
  alternativeNames: ['Delivered Duty Paid', 'DDP delivery term'],
  category: 'Trade concept',
  subcategory: 'Delivery term',
  tradeConceptClass: 'delivery-term',
  summary:
    'DDP is the Incoterms® rule at the maximum-obligation end of the range for the seller: the goods are delivered at a named place in the country of destination, cleared for import, with the seller having borne cost and risk the whole way. Its difficulty mirrors EXW’s — the party carrying the obligation is often the party least able to discharge it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Delivered Duty Paid places almost everything on the seller. The seller arranges and pays for carriage to a named place in the buyer’s country, bears the risk of loss or damage until the goods arrive there ready for unloading, clears them for export, and — the feature that defines the term — clears them for import and bears the duties and charges that import clearance attracts.',
    },
    {
      type: 'paragraph',
      text: 'For the buyer this is the simplest possible arrangement: goods appear at an agreed place, with nothing outstanding. That simplicity is bought by concentrating obligations on a party that is, in a cross-border sale, foreign to the jurisdiction where the hardest of those obligations must be performed. DDP and EXW are opposite ends of the same range, and they share a structural problem in mirror image.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Delivery term — maximum seller obligation' },
    { label: 'Published by', value: 'International Chamber of Commerce (ICC)' },
    { label: 'Transport modes', value: 'Any mode or modes of transport' },
    {
      label: 'Delivery point',
      value:
        'A named place in the country of destination, with the goods cleared for import',
    },
    {
      label: 'Distinguishing feature',
      value:
        'Import clearance, duties, and import charges are seller obligations — unique in the set',
    },
    {
      label: 'Risk',
      value:
        'Stays with the seller until delivery at the named destination place',
    },
    {
      label: 'Structural difficulty',
      value:
        'The seller must act in a jurisdiction where it may have no standing to act',
    },
  ],
  sections: [
    {
      id: 'what-it-allocates',
      heading: 'What the term allocates',
      body: [
        {
          type: 'paragraph',
          text: 'DDP moves the delivery point to the far end of the journey and keeps cost and risk together for nearly all of it. Unlike the port-based rules where the seller pays for carriage but the buyer is on risk, here the two dials stay aligned: the seller pays and the seller bears the risk, right up to delivery at the named place.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cost',
              description:
                'The seller bears costs to the named destination place, including carriage, export clearance, import clearance, and the duties and charges payable on import.',
            },
            {
              term: 'Risk',
              description:
                'Stays with the seller until the goods are delivered at the named place. A loss in transit or at the border is the seller’s.',
            },
            {
              term: 'Carriage',
              description:
                'The seller contracts the whole chain to the named place. The buyer takes no part in arranging it.',
            },
            {
              term: 'Insurance',
              description:
                'No insurance obligation runs between the parties under this rule. A seller bearing risk to destination insures for its own account if it chooses to.',
            },
            {
              term: 'Export and import formalities',
              description:
                'Both are the seller’s. This is what separates the rule from every other delivered term in the set.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Unloading at the named place',
          text: 'Whether the seller must unload the goods at the destination place, and where risk sits during unloading, is dealt with by the published rule and distinguishes this term from other delivered terms. The rule text is not reproduced here.',
        },
      ],
    },
    {
      id: 'the-import-clearance-problem',
      heading: 'The import-clearance asymmetry',
      body: [
        {
          type: 'paragraph',
          text: 'Import clearance is normally performed by, or in the name of, an importer of record — a party with standing in the importing jurisdiction: registered, identifiable, and accountable for the declaration. Under DDP the term places that obligation on the seller, who is by definition located elsewhere. Whether a foreign seller can be an importer of record at all is a question of the importing country’s law, and the answer is not the same everywhere.',
        },
        {
          type: 'paragraph',
          text: 'Where it is possible, it is often conditional — on registration, on a tax identity, on appointing a local representative, or on an established presence. Indirect taxes add a second layer: import charges paid by a party that is not established locally may not be recoverable in the way they would be for a domestic importer, which turns a procedural obstacle into a cost. The delivery term allocates the obligation; it does not confer the capacity to perform it or the standing to reclaim anything.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The term cannot create standing',
          text: 'A rule in a contract of sale allocates responsibility between two private parties. It has no effect on whether the importing jurisdiction will accept one of them as an importer of record, or on what that party may recover. Those are questions of national law and are outside what any delivery term can settle.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'DDP appears most naturally where the seller already operates in the destination market — an exporter with a local subsidiary, a trader with a registered entity, a supplier delivering into a distribution network it controls. In that configuration the asymmetry dissolves, because the seller side of the contract has genuine local standing.',
        },
        {
          type: 'paragraph',
          text: 'For agricultural consignments the term carries an additional weight that is easy to overlook. Import clearance of food, plant, and animal products is not only a customs event; it commonly involves official controls — documentary, identity, and physical checks against sanitary and phytosanitary requirements. A term that puts import clearance on the seller therefore puts the consequences of a control failure there too. If a consignment is detained, refused, or ordered destroyed at the border, it is the seller who is on risk, because delivery has not yet occurred.',
        },
        {
          type: 'list',
          items: [
            'The seller bears the outcome of border controls it may be unable to attend or influence',
            'Perishable goods held pending a control decision deteriorate while the seller is still on risk',
            'Import charges and their recoverability depend on the seller’s status in the destination jurisdiction',
            'The named place must be specified precisely enough to fix where a long chain of seller obligations finally ends',
          ],
        },
        {
          type: 'paragraph',
          text: 'These are observations about where the term places boundaries and what consequently matters, not a view on whether the rule fits any particular trade.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To express, in a contract of sale, a division in which the seller delivers the goods at a named place in the destination country cleared for import, having borne cost and risk for the whole journey including import duties and charges.',
  administeredBy:
    'International Chamber of Commerce (rule owner and publisher)',
  governingBodies: ['International Chamber of Commerce'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    INCOTERMS_SCOPE_NOTE,
    'This page describes in general terms what the rule allocates. It does not reproduce or paraphrase the rule’s text, its obligation lists, or its delivery, risk, and clearance provisions.',
    'Nothing here presents this rule as appropriate, preferable, or unsuitable for any transaction, market, or counterparty. Selection is a matter for the parties and their advisers.',
    'Whether a foreign seller may act as importer of record, what registration this requires, and whether import charges are recoverable are questions of the importing jurisdiction’s law, determined by its authorities and not addressed here. No duty, tax, threshold, or charge is stated.',
  ],
  partiesInvolved: [
    'Seller, who carries the goods to destination and clears them for import',
    'Buyer, who receives the goods at the named place',
    'Carriers and forwarders engaged by the seller',
    'Customs broker or representative acting in the importing jurisdiction',
    'Customs authority and official control services of the importing jurisdiction',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'exw-delivery-term' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  sourceReferences: [
    {
      sourceId: 'icc',
      citedFor:
        'Publication and ownership of the delivery-term rules and the position of this rule at the maximum-obligation end of the set',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Importer-of-record and import declaration practice as a matter for the customs authority of the importing jurisdiction',
    },
    {
      sourceId: 'wto',
      citedFor:
        'Sanitary and phytosanitary controls applied at import, which operate independently of the parties’ delivery term',
    },
    {
      sourceId: 'itc',
      citedFor: 'Use of delivery terms in international sale contracts',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, wherever the parties incorporate the rule. Whether a foreign seller can clear goods for import, and on what conditions, is determined entirely by the importing jurisdiction and differs widely.',
  limitations: [
    'A general description of what the term allocates, not a reproduction of or substitute for the published rule.',
    'No delivery mechanics, risk-transfer moment, or obligation is stated in rule terms; those are in the ICC publication the contract names.',
    'No duty rates, import charges, registration requirements, or tax-recovery rules are given — they are national, change over time, and are published by the authorities that set them.',
    'No recommendation is made about using this or any other rule.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'DDP (Delivered Duty Paid): What the Delivery Term Allocates',
    description:
      'How the DDP Incoterms® rule divides cost, risk, and formalities: delivery cleared for import at destination, and why import clearance is its defining asymmetry.',
    keywords: [
      'DDP',
      'delivered duty paid',
      'delivery term',
      'import clearance',
      'importer of record',
    ],
  },
  structuredData: { article: true },
};
