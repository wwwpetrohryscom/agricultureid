import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const deferredPricing: MarketTermContent = {
  id: 'market-term-deferred-pricing',
  slug: 'deferred-pricing',
  contentType: 'market-term',
  title: 'Deferred Pricing',
  alternativeNames: [
    'Delayed pricing',
    'Price-later contract',
    'Open-priced contract',
  ],
  category: 'Market term',
  subcategory: 'Contract structure',
  marketTermClass: 'contract-structure',
  summary:
    'Deferred pricing is an arrangement in which a commodity is delivered now and the price is set later, by a mechanism the contract specifies. It separates the physical transaction from the pricing decision — and in doing so it changes what the seller is exposed to, rather than removing exposure.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Ordinarily, delivering a commodity and agreeing its price happen together. Deferred pricing separates them. The seller delivers the physical commodity — it leaves their premises, enters the buyer’s system, and is generally commingled and disposed of — while the price remains unset. At some later point, within a window and by a procedure the contract defines, the price is established, and only then does the seller know what they have received for what they handed over months earlier.',
    },
    {
      type: 'paragraph',
      text: 'The arrangement exists because delivery and pricing are driven by different pressures. A harvest must move when it is harvested: storage is finite, quality deteriorates, and the physical logistics do not wait. The decision about what price to accept is a separate question, and a producer may not wish to answer it under the pressure of a harvest window. Deferred pricing lets the physical problem be solved on its own timetable. What it does not do — and this is the point most often lost — is make the pricing question go away or make the seller safer.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Contract structure — delivery and pricing separated in time',
    },
    {
      label: 'Delivered',
      value:
        'Now. The commodity physically transfers and is generally commingled',
    },
    {
      label: 'Priced',
      value: 'Later, by a mechanism and within a window the contract specifies',
    },
    {
      label: 'What the seller retains',
      value: 'Exposure to price movement, without holding the commodity',
    },
    {
      label: 'What the seller gives up',
      value:
        'The commodity itself — and with it, the ability to sell it to anyone else',
    },
    {
      label: 'New exposure created',
      value:
        'To the buyer: an unpriced claim on a party who already holds the goods',
    },
    {
      label: 'Frequently subject to',
      value:
        'Charges, and to regulation in some jurisdictions, given the credit exposure involved',
    },
  ],
  sections: [
    {
      id: 'how-the-arrangement-works',
      heading: 'How the arrangement works',
      body: [
        {
          type: 'paragraph',
          text: 'The mechanics vary, but the structure is consistent: physical transfer occurs and creates an obligation whose amount is not yet determined. The contract must therefore specify how that amount will eventually be arrived at, and the quality of that specification is what separates a workable arrangement from a dispute in waiting.',
        },
        {
          type: 'list',
          items: [
            'The pricing mechanism — whether the seller elects a price by reference to a named quotation, whether an average is applied, or whether some other procedure operates',
            'The window — the period within which pricing must occur, and what happens at its end if the seller has not priced',
            'The default — many arrangements price automatically at the end of the window, which means a seller who does nothing has still made a decision',
            'Charges — whether a service, storage, or carrying charge accrues while the contract is unpriced, and how it is calculated',
            'The claim’s status — whether the seller is a creditor of the buyer, and what protection, if any, that carries in the buyer’s insolvency',
            'The reference — where a mechanism points at an external quotation, everything that applies to reference prices applies here, including what happens if the reference becomes unavailable',
          ],
        },
        {
          type: 'paragraph',
          text: 'The default provision deserves particular attention because it is passive. An arrangement that prices automatically at the end of its window converts inaction into a priced sale at whatever the market then is. A seller who defers because they do not wish to decide has not avoided deciding; they have delegated the decision to a date.',
        },
      ],
    },
    {
      id: 'what-the-seller-is-actually-exposed-to',
      heading: 'What the seller is actually exposed to',
      body: [
        {
          type: 'paragraph',
          text: 'Deferred pricing is frequently understood as a way of keeping options open. Structurally, it is better understood as a transformation of exposure: the seller exchanges a physical position for an unpriced claim, and those two things carry different risks. The price exposure is retained almost in full, but it is now attached to a claim rather than to goods.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Price exposure — retained',
              description:
                'Until pricing occurs, the seller bears the consequence of market movement exactly as if they still owned the commodity. Deferring does not reduce this; it is the whole substance of the arrangement.',
            },
            {
              term: 'Physical control — surrendered',
              description:
                'The commodity is gone. The seller cannot sell it elsewhere, cannot deliver it against anything else, and cannot reclaim it. The alternatives that a stored crop would have preserved no longer exist.',
            },
            {
              term: 'Counterparty exposure — created',
              description:
                'The seller is now owed an undetermined amount by a party holding goods that were theirs. This is a credit exposure that did not exist before delivery, and it is the reason such arrangements attract regulatory attention in some jurisdictions.',
            },
            {
              term: 'Cost — incurred',
              description:
                'Where charges accrue on an unpriced contract, the seller pays for the arrangement over time, which is a certain cost set against an uncertain benefit.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This is a description of a structure, not a recommendation',
          text: 'AgricultureID does not suggest that deferred pricing is appropriate or inappropriate for anyone, and gives no view on when or whether to price. The purpose here is to make the exposures explicit, because the arrangement’s risks are structural and are not obvious from its name.',
        },
      ],
    },
    {
      id: 'the-comparison-that-clarifies-it',
      heading: 'The comparison that clarifies it',
      body: [
        {
          type: 'paragraph',
          text: 'The clearest way to see what deferred pricing is is to compare it with the two alternatives it sits between. A seller at harvest can sell outright, store and sell later, or deliver and defer pricing. Setting the three side by side isolates what each actually does.',
        },
        {
          type: 'table',
          caption:
            'Three ways of handling a harvest, by what each leaves the seller holding',
          columns: [
            'Arrangement',
            'Physical commodity',
            'Price exposure',
            'Counterparty exposure',
          ],
          rows: [
            [
              'Sell outright at delivery',
              'Surrendered',
              'Ended',
              'Only until payment',
            ],
            [
              'Store and sell later',
              'Retained, with storage cost and quality risk',
              'Retained',
              'None until a sale',
            ],
            [
              'Deliver and defer pricing',
              'Surrendered',
              'Retained',
              'Created, and open until priced',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'The table makes the structure plain. Deferred pricing is not a middle position between selling and storing — it is a distinct arrangement that takes the price exposure of storing and adds the counterparty exposure of having delivered, while removing the physical control that storing would have retained. Whether that combination suits a particular seller is a question this page does not answer; that it is the combination on offer is a fact the name conceals.',
        },
      ],
    },
  ],
  definition:
    'Deferred pricing is a contractual arrangement in which a commodity is physically delivered and title generally passes while the price remains unset, to be established later within a specified window by a mechanism the contract defines. The seller retains exposure to price movement without holding the commodity, and acquires an unpriced claim on a buyer that already holds the goods.',
  usageContext:
    'Physical grain and oilseed marketing, particularly at harvest, where the timing of physical delivery is driven by storage and logistics while the seller wishes to separate the pricing decision from that timetable.',
  notToBeConfusedWith: [
    'A forward contract — a forward agrees delivery later, and may fix the price now or leave a mechanism to fix it. Deferred pricing delivers now and prices later. The two invert each other: one defers the commodity, the other defers the number.',
    'Storage — storing keeps the commodity, its optionality, and its costs, and creates no counterparty exposure. Deferred pricing surrenders the commodity and creates a credit exposure while keeping the price exposure. They are frequently discussed as alternatives, and they leave the seller holding very different things.',
    'A hedge — deferring pricing retains price exposure in full. It is close to the opposite of reducing it, and describing it as a risk-management arrangement inverts what it does.',
    'A price guarantee — the arrangement guarantees nothing about the price. The eventual price is whatever the mechanism produces, and it may be worse than the price available at delivery.',
    'Basis contracting — an arrangement fixing the basis while leaving the reference open, or vice versa, fixes one component of the price. Deferred pricing in its plain form leaves the whole price open. Contracts frequently combine these, and the combination must be read for which components are actually fixed.',
    'Payment terms — deferring payment on a priced sale is a credit arrangement about when a known amount is paid. Deferred pricing means the amount itself is not yet determined. Both delay money; only one leaves the sum unknown.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No prices, charges, rates, or windows are published here for any arrangement, buyer, or market.',
    'This page does not recommend or discourage deferred pricing, offers no view on when or whether to price, and does not assess any counterparty. Marketing decisions belong to the seller and their own advisers.',
    'Deferred pricing creates a credit exposure to the buyer that persists until the contract is priced and paid. The seller’s standing in the buyer’s insolvency depends on the contract and the applicable law, which this page does not address.',
    'These arrangements are regulated in some jurisdictions and not in others, and licensing, bonding, or protection schemes may or may not apply. Regulatory treatment is a matter for the competent authority.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'forward-contract' },
    { type: 'market-term', slug: 'hedging' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spot-price' },
  ],
  relatedTradeConcepts: [{ type: 'trade-concept', slug: 'commercial-invoice' }],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of grain marketing arrangements, including delayed-pricing contracts',
    },
    {
      sourceId: 'usda-ams',
      citedFor:
        'Grain marketing and warehousing arrangements in public market reporting context',
    },
    {
      sourceId: 'igc',
      citedFor: 'Grain marketing and contracting conventions',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Most established in grain-marketing systems with elevator networks and formalised delivery, notably in North America. Availability, terms, and regulatory treatment are jurisdiction- and buyer-specific.',
  limitations: [
    'A structural description of the arrangement, not a description of any buyer’s terms, charges, or windows.',
    'Contract mechanics — pricing procedure, defaults, charges, and the status of the seller’s claim — differ by contract and by buyer and must be read from the contract itself.',
    'The seller’s legal position in a buyer’s insolvency is jurisdiction-specific and is not addressed here.',
    'Regulatory treatment of unpriced delivered grain varies; whether any licensing, bonding, or protection scheme applies is a question for the competent authority.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Deferred Pricing: Delivered Now, Priced Later',
    description:
      'What deferred pricing means: the commodity is delivered while the price stays open, what exposure the seller keeps, and why it is not storage and not a hedge.',
    keywords: [
      'deferred pricing',
      'delayed pricing',
      'price later contract',
      'open priced contract',
      'grain marketing arrangement',
    ],
  },
  structuredData: { article: true },
};
