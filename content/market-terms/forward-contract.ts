import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const forwardContract: MarketTermContent = {
  id: 'market-term-forward-contract',
  slug: 'forward-contract',
  contentType: 'market-term',
  title: 'Forward Contract',
  alternativeNames: [
    'Forward sale',
    'Forward purchase',
    'Cash forward contract',
  ],
  category: 'Market term',
  subcategory: 'Contract structure',
  marketTermClass: 'contract-structure',
  summary:
    'A forward contract is a privately negotiated agreement to deliver a specified commodity at a future date on terms the parties set themselves. Everything about it is negotiable — which is its advantage over a futures contract, and simultaneously the source of every difficulty it creates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A forward contract is the older and simpler of the two ways to agree now on a transaction that will happen later. Two parties agree what will be delivered, of what quality, in what quantity, where, when, and at what price, and they write it down. There is no exchange, no clearing house, and no standard form: the contract is whatever the parties negotiated, and it binds only them.',
    },
    {
      type: 'paragraph',
      text: 'This flexibility is the whole point. A farmer with a particular crop, a particular field, and a particular harvest window, selling to a mill with a particular specification and a particular delivery need, can write a contract that fits both exactly. No standardised instrument could describe that transaction, because standardisation works by refusing to describe particulars. But the same flexibility means each party is exposed to the other: there is no clearing house standing between them, and the contract is only worth as much as the counterparty’s ability and willingness to perform when the day arrives.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Contract structure — bilateral and privately negotiated',
    },
    {
      label: 'Negotiated',
      value:
        'Everything: commodity, quality, quantity, place, timing, price, and terms',
    },
    {
      label: 'Traded on',
      value: 'Nothing — it is a private agreement between two parties',
    },
    {
      label: 'Counterparty risk',
      value:
        'Borne by each party against the other; there is no clearing house',
    },
    {
      label: 'Transferability',
      value: 'Generally not transferable without the other party’s agreement',
    },
    {
      label: 'Usual outcome',
      value:
        'Performance by delivery — a forward is normally intended to be delivered',
    },
    {
      label: 'Prevalence',
      value:
        'The ordinary way physical agricultural commodities are contracted ahead of delivery',
    },
  ],
  sections: [
    {
      id: 'the-negotiated-instrument',
      heading: 'The negotiated instrument',
      body: [
        {
          type: 'paragraph',
          text: 'Because a forward contract standardises nothing, everything in it must be decided and written. This is more consequential than it appears: a term the parties did not think to address is a term the contract does not contain, and the gap surfaces at exactly the moment the parties disagree. Where a futures contract inherits an exchange’s accumulated drafting, a forward inherits only what its parties put in it.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'The specification',
              description:
                'What is being delivered, and how quality is measured, by whom, and with what tolerance. A specification without a measurement method and an arbiter is a source of disputes rather than a resolution of them.',
            },
            {
              term: 'Delivery',
              description:
                'Where, when, in what increments, and on what delivery term — which party bears cost and risk to which point. This is where trade delivery terms do their work.',
            },
            {
              term: 'Pricing',
              description:
                'A flat price, or a mechanism: a named reference plus a differential, with the reference fixed later by a stated procedure. Both are common, and they allocate exposure very differently.',
            },
            {
              term: 'Non-performance',
              description:
                'What happens if a party cannot deliver or cannot take delivery. Without an agreed consequence, non-performance becomes a legal dispute under whatever law the contract names, if it names one.',
            },
            {
              term: 'Contingency',
              description:
                'What happens on crop failure, transport failure, regulatory change, or the pricing reference becoming unavailable. These are the terms most often absent and most often needed.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'In practice, much forward contracting in agricultural trade uses standard-form contracts published by trade associations, which supply this drafting and leave the parties to fill in the commercial particulars. This is a middle position: the form is standard, the deal is bespoke, and the instrument remains a bilateral forward rather than becoming a futures contract, because there is still no exchange and no clearing house.',
        },
      ],
    },
    {
      id: 'counterparty-risk',
      heading: 'Counterparty risk is the defining exposure',
      body: [
        {
          type: 'paragraph',
          text: 'A forward contract is a promise, and a promise is worth what the promisor is good for. Between the day of agreement and the day of delivery, the market moves, and one party ends up holding a contract that is worse than the prevailing market and the other a contract that is better. The party disadvantaged by the movement now has an incentive not to perform, and the only things standing against that incentive are their solvency, their reputation, and the enforceability of the contract.',
        },
        {
          type: 'paragraph',
          text: 'This exposure is asymmetric in an important way: it grows precisely when it matters. A large adverse market movement simultaneously makes a contract valuable to one party and makes performance painful for the other, so the risk of default is highest exactly when the contract is worth most. This is not a defect in any particular forward; it is a structural property of bilateral agreements, and it is the specific problem a clearing house exists to solve.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A description, not an assessment',
          text: 'This page describes a structure. It does not evaluate any contract, does not advise on drafting, credit assessment, or counterparty selection, and does not suggest that forward contracting is appropriate or inappropriate for anyone. Contract terms and their consequences are legal matters requiring qualified advice.',
        },
      ],
    },
    {
      id: 'forward-and-futures-are-not-variants',
      heading: 'Forward and futures are not variants of one thing',
      body: [
        {
          type: 'paragraph',
          text: 'Forwards and futures are routinely presented as two flavours of the same instrument, differing in formality. They are not. They share one feature — an agreement now about a transaction later — and differ in every other structural respect, and the differences compound into genuinely different economic objects.',
        },
        {
          type: 'table',
          caption:
            'Structural differences between a forward and a futures contract',
          columns: ['Dimension', 'Forward contract', 'Futures contract'],
          rows: [
            [
              'Terms',
              'All negotiated by the parties',
              'All set by the exchange except price',
            ],
            ['Venue', 'Private, bilateral', 'Organised exchange'],
            [
              'Counterparty',
              'The other party',
              'A clearing house substituted on execution',
            ],
            [
              'Collateral',
              'Whatever the parties agree, if anything',
              'Required and adjusted as prices move',
            ],
            [
              'Cash timing',
              'Generally at performance',
              'Throughout the life of the position',
            ],
            [
              'Exit',
              'Requires the other party’s agreement',
              'An offsetting trade with anyone',
            ],
            ['Usual outcome', 'Delivery', 'Offset before delivery'],
          ],
        },
        {
          type: 'paragraph',
          text: 'The row that matters most is the last but one. A futures position can be exited by transacting with any other market participant, because every contract of that kind is interchangeable. A forward cannot be exited at all without the counterparty’s consent, because the contract is with them specifically. A party who has entered a forward is in it until delivery or until the other side agrees otherwise — and that is a materially different position from one that can be closed at will.',
        },
      ],
    },
  ],
  definition:
    'A forward contract is a privately negotiated, bilateral agreement to deliver a specified quantity and quality of a commodity at a specified future time and place, on terms including price that the parties set themselves. It is not traded on an exchange, is not cleared, is generally not transferable without consent, and leaves each party exposed to the other’s performance.',
  usageContext:
    'Physical agricultural commodity trade, where it is the ordinary means of contracting ahead of delivery — between producers and buyers, between merchants, and across international trade, frequently on standard-form contracts published by trade associations.',
  notToBeConfusedWith: [
    'Futures contract — a futures contract standardises every term but price, trades on an exchange, and replaces the counterparty with a clearing house that takes collateral and adjusts it as prices move. A forward negotiates every term, trades nowhere, and leaves each party exposed to the other. They share only the idea of agreeing now about later.',
    'A spot transaction — a spot transaction is for prompt delivery of a lot that exists. A forward is for delivery later, frequently of a crop that has not been harvested. The distinction is delivery timing, and it is what makes performance a question at all.',
    'A forward price as a forecast — the price in a forward contract is what two parties agreed, given their own positions, needs, and views. It is not a prediction of the market at the delivery date, and the fact that a contract exists at a price says nothing about what anything will be worth then.',
    'An option — a forward obliges both parties to perform. An option gives one party a right without an obligation, in exchange for a premium. A forward has no premium and no optionality; a party who has agreed a forward is committed.',
    'Deferred pricing — a forward fixes delivery and may or may not fix price. A deferred-pricing arrangement is specifically one where delivery has occurred or is agreed and the price is deliberately left to be set later. A forward can be flat-priced, priced against a reference, or left open, and only the last resembles deferred pricing.',
    'Hedging — a forward contract is an instrument; hedging is a purpose. Selling a crop forward may reduce a producer’s exposure to price movement, or may create exposure to production shortfall if the crop fails and the contract must still be performed. The instrument does not determine the purpose or the outcome.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No forward prices, contract terms, standard-form provisions, or drafting language are published or reproduced here, for any commodity, market, or trade association.',
    'This page does not advise on contract drafting, counterparty assessment, or whether to contract forward. Contract terms and their consequences are legal matters requiring qualified advice under the applicable governing law.',
    'Forward contracting creates obligations that must be performed regardless of subsequent events, including production shortfall. Nothing here suggests that forward contracting reduces risk overall; it changes which risks a party holds.',
    'Standard-form contracts, their arbitration provisions, and their default rules are association- and version-specific and are revised; only the applicable current form governs any contract.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'green-coffee' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'deferred-pricing' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'hedging' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spot-price' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of forward contracting and marketing arrangements in agriculture',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Contracting conventions in international grain and oilseed trade',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Commodity contracting and counterparty risk in international trade',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Forward contracting practice, standard forms, enforceability, and dispute resolution are governed by the contract’s chosen law and by the jurisdictions of the parties.',
  limitations: [
    'A structural description of the instrument, not a guide to contracting, drafting, or counterparty assessment.',
    'No standard-form contract terms are reproduced or summarised; forms are association-specific, versioned, and outside this page’s scope.',
    'Enforceability, remedies for non-performance, and dispute resolution depend on the contract and the governing law, and vary substantially by jurisdiction.',
    'The concept is described generically; actual forward contracting practice differs greatly between commodities, chains, and countries.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Forward Contract: Negotiated Terms, Bilateral Risk',
    description:
      'What a forward contract is: a privately negotiated agreement to deliver later on terms the parties set, and why counterparty risk defines it.',
    keywords: [
      'forward contract',
      'forward sale',
      'cash forward contract',
      'forward versus futures',
      'forward contract definition',
    ],
  },
  structuredData: { article: true },
};
