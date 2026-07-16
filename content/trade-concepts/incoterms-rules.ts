import type { TradeConceptContent } from '@/types/content';
import { INCOTERMS_SCOPE_NOTE, TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const incotermsRules: TradeConceptContent = {
  id: 'trade-concept-incoterms-rules',
  slug: 'incoterms-rules',
  contentType: 'trade-concept',
  title: 'Incoterms® Rules',
  alternativeNames: [
    'Delivery terms',
    'Trade terms',
    'International commercial terms',
  ],
  category: 'Trade concept',
  subcategory: 'Delivery term',
  tradeConceptClass: 'delivery-term',
  summary:
    'The Incoterms® rules are a set of standard three-letter delivery terms published by the International Chamber of Commerce that allocate cost, risk, and specified obligations between a seller and a buyer. They are a shorthand incorporated into a contract of sale — not the contract itself, and not a statement of who owns the goods.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A contract for a cargo of grain or a pallet of chilled produce has to answer a set of practical questions. Who arranges carriage, and how far? Who pays for what, and up to which point? At what moment does the buyer start bearing the loss if the goods are damaged? Who deals with export formalities, and who with import formalities? The Incoterms® rules exist so that these questions can be answered by naming a term rather than by drafting the answers from scratch each time.',
    },
    {
      type: 'paragraph',
      text: 'Each rule is a three-letter abbreviation used with a named place and an edition, and each represents a different division of those responsibilities between the two parties. What makes the system work is that the rules are published and stable, so that both sides of a transaction — and the banks, insurers, and carriers around them — read the same allocation from the same three letters. This page describes what the rules allocate and where their scope ends. It does not reproduce them, and it does not recommend one.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Delivery term — allocation of cost, risk, and obligation',
    },
    { label: 'Published by', value: 'International Chamber of Commerce (ICC)' },
    {
      label: 'Status',
      value:
        'Contractual. Applies because the parties incorporate it, not by operation of law.',
    },
    {
      label: 'Cited as',
      value:
        'Three-letter rule, named place, and edition — the edition is part of the term',
    },
    {
      label: 'Allocates',
      value:
        'Costs, the point at which risk passes, carriage and insurance duties, and customs formalities',
    },
    {
      label: 'Does not address',
      value:
        'Transfer of ownership, price, payment terms, product conformity, breach, or dispute resolution',
    },
    {
      label: 'Groupings',
      value:
        'Rules for any mode or modes of transport, and a smaller set intended for sea and inland waterway transport',
    },
  ],
  sections: [
    {
      id: 'what-a-rule-allocates',
      heading: 'What a rule allocates',
      body: [
        {
          type: 'paragraph',
          text: 'A delivery term is best understood as a set of parallel dials rather than a single setting. Each rule fixes several distinct allocations at once, and the common error is to assume they all move together — that whoever pays for carriage also bears the risk over it, for example. In several rules they deliberately do not coincide.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cost',
              description:
                'Which party bears each category of expense along the journey — inland carriage, loading, main carriage, discharge, terminal charges, onward delivery — and up to which point.',
            },
            {
              term: 'Risk',
              description:
                'The point at which the risk of loss of or damage to the goods passes from seller to buyer. After that point the buyer bears the loss even if the seller is still paying for something.',
            },
            {
              term: 'Carriage',
              description:
                'Which party is obliged to contract for transport, and how far that contract must run.',
            },
            {
              term: 'Insurance',
              description:
                'Whether either party is obliged to procure cargo insurance for the benefit of the other. Most rules impose no such obligation; a minority do, and the level required differs between them.',
            },
            {
              term: 'Export and import formalities',
              description:
                'Which party is responsible for clearing the goods for export, for transit where relevant, and for import — including obtaining the licences and paying the charges that clearance requires.',
            },
            {
              term: 'Documents and information',
              description:
                'What each party must provide to the other, and at whose cost and risk, so that the other can perform its own obligations.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Cost and risk are separate dials',
          text: 'In some rules the seller pays for carriage to a destination but risk has already passed to the buyer at origin. A party who reads such a term as "the seller is responsible until arrival" has misread it. Which rules behave this way, and at exactly which point, is set out in the published text and is not reproduced here.',
        },
      ],
    },
    {
      id: 'how-the-rules-are-organised',
      heading: 'How the set is organised',
      body: [
        {
          type: 'paragraph',
          text: 'The rules are divided into two families. One family is intended for any mode of transport, or for more than one mode, and works wherever the delivery point is — an inland warehouse, a terminal, a factory gate. The other family is intended for sea and inland waterway transport and is built around delivery at a port, with reference points such as the ship’s side or the vessel itself.',
        },
        {
          type: 'paragraph',
          text: 'The division matters practically for agricultural trade. Bulk cargoes moving vessel-by-vessel and containerised cargoes moving door-to-door are different physical operations, and terms designed around a ship are not necessarily apt for a container handed over at an inland depot. The ICC materials address this distinction directly, and it is one of the principal reasons the two families exist.',
        },
        {
          type: 'paragraph',
          text: 'AgricultureID carries separate reference pages describing what several individual rules allocate, each in general terms and none reproducing rule text.',
        },
        {
          type: 'list',
          items: [
            'EXW — the minimum-obligation end of the range, with delivery at the seller’s own premises',
            'FCA — delivery to a carrier or nominated party, usable for any mode',
            'FOB — a sea and inland waterway rule, with delivery on board a vessel at a named port of shipment',
            'CIF — a sea and inland waterway rule in which the seller contracts carriage and a specified level of insurance to a named port of destination',
            'DDP — the maximum-obligation end of the range, with the seller delivering cleared for import',
          ],
        },
      ],
    },
    {
      id: 'editions-and-citation',
      heading: 'Editions, citation, and incorporation',
      body: [
        {
          type: 'paragraph',
          text: 'The rules have been revised periodically since they were first published by the ICC in 1936. Revisions change the set: rules have been added, withdrawn, renamed, and altered in their detail between editions. A three-letter term therefore does not have a fixed meaning across time — it has the meaning given to it by a particular edition.',
        },
        {
          type: 'paragraph',
          text: 'This is why a term is cited with three components: the rule, the named place or port, and the edition. Omitting the named place leaves the delivery point undefined; omitting the edition leaves the content of the term undefined. Older editions remain in use where parties choose them, and a contract that names one edition is governed by that edition regardless of whether a later one exists.',
        },
        {
          type: 'paragraph',
          text: 'The rules apply because the parties incorporate them into their contract of sale. They are not legislation and do not apply automatically. Where a contract’s own terms conflict with the incorporated rule, the relationship between the two is a matter of contract law and of how the contract is drafted, not something the rules settle by themselves.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Precision in the named place',
          text: 'The named place is doing real work. A vaguely specified place leaves the cost and risk boundaries vague along with it, and that ambiguity surfaces exactly when something has gone wrong. How precisely to specify it is a drafting question for the parties and their advisers.',
        },
      ],
    },
    {
      id: 'what-the-rules-do-not-do',
      heading: 'What the rules do not do',
      body: [
        {
          type: 'paragraph',
          text: 'The scope of the rules is narrower than their ubiquity suggests, and most disputes that get described as "an Incoterms problem" are about something the rules never claimed to cover.',
        },
        {
          type: 'list',
          items: [
            'They do not transfer title or determine when ownership of the goods passes — that is governed by the contract and the applicable law',
            'They are not a contract of sale, and do not exist independently of one',
            'They do not set the price, the currency, or the payment mechanism',
            'They do not specify the quality, quantity, or conformity of the goods',
            'They do not govern breach, remedies, limitation of liability, force majeure, or the forum for disputes',
            'They do not create a contract of carriage or of insurance, though they may oblige a party to enter into one',
            'They do not override mandatory law, and cannot make an import lawful that the importing jurisdiction prohibits',
          ],
        },
        {
          type: 'paragraph',
          text: 'For agricultural consignments the last point deserves emphasis. A delivery term can allocate who is responsible for obtaining an import permit or presenting a phytosanitary certificate, but it has no bearing on whether the authority will accept the consignment. Admissibility is decided by the importing jurisdiction against its own requirements; the term only decides which party carries the burden of dealing with them.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To provide a published, stable shorthand by which a contract of sale can allocate cost, the passing of risk, carriage and insurance duties, and customs formalities between seller and buyer without drafting each allocation afresh.',
  administeredBy:
    'International Chamber of Commerce (rule owner and publisher)',
  governingBodies: ['International Chamber of Commerce'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    INCOTERMS_SCOPE_NOTE,
    'This page describes the function of the delivery-term system in general terms. It does not reproduce any rule, paraphrase rule text, or set out the specific obligations of any rule.',
    'No rule is recommended, ranked, or presented as suitable for any trade, commodity, route, or party. Selection is a commercial and legal decision for the parties and their advisers.',
    'Whether a term has been effectively incorporated into a contract, and how it interacts with the contract’s other terms and the governing law, are legal questions determined under that law and not addressed here.',
  ],
  partiesInvolved: [
    'Seller',
    'Buyer',
    'Carrier or freight forwarder engaged under the term',
    'Cargo insurer, where a rule imposes an insurance obligation',
    'Customs authorities of the exporting and importing jurisdictions',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'packing-list' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'ddp-delivery-term' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'exw-delivery-term' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
  ],
  sourceReferences: [
    {
      sourceId: 'icc',
      citedFor:
        'Ownership, publication, and periodic revision of the Incoterms® rules, and the scope of what a delivery term allocates',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Use of standard delivery terms in international sale contracts and their relationship to the contract of sale',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Allocation of export and import clearance responsibilities as a matter dealt with at the border by customs authorities',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The rules apply wherever parties incorporate them into a contract of sale, but they never displace the mandatory law of the jurisdictions involved, and customs and admissibility requirements remain national.',
  limitations: [
    'A general description of what the delivery-term system does, not a reproduction of, substitute for, or commentary on the published rules.',
    'No rule text, obligation list, delivery point, or risk-transfer point is stated for any individual rule; those are set out in the ICC publication that the contract names.',
    'No rule is recommended for any commodity, route, or transaction, and no comparison of rules by suitability is offered.',
    'The interaction between a delivery term, the rest of a contract, and the governing law is a legal question outside the scope of a reference entry.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Incoterms® Rules: What Delivery Terms Allocate',
    description:
      'How the ICC Incoterms® rules work as a shorthand in contracts of sale: what a delivery term allocates, how the set is organised, and what they do not cover.',
    keywords: [
      'incoterms rules',
      'delivery terms',
      'trade terms',
      'cost and risk allocation',
      'contract of sale',
    ],
  },
  structuredData: { article: true },
};
