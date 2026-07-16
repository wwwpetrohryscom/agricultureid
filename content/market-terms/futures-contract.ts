import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const futuresContract: MarketTermContent = {
  id: 'market-term-futures-contract',
  slug: 'futures-contract',
  contentType: 'market-term',
  title: 'Futures Contract',
  alternativeNames: ['Exchange-traded futures', 'Futures'],
  category: 'Market term',
  subcategory: 'Contract structure',
  marketTermClass: 'contract-structure',
  summary:
    'A futures contract is a standardised, exchange-traded agreement to buy or sell a specified quantity and quality of a commodity at a future date, with performance guaranteed by a clearing house rather than by the counterparty. Its defining feature is standardisation — everything except the price is fixed in advance.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A futures contract is an agreement, traded on an organised exchange, to buy or sell a fixed quantity of a commodity meeting a fixed quality specification, for delivery in a fixed future period, at a price agreed now. Every term of that agreement except the price is written by the exchange and is identical for every contract of that kind. The price is the only thing the parties negotiate, and it is the only thing that varies — which is precisely what makes futures prices comparable over time and usable as a reference.',
    },
    {
      type: 'paragraph',
      text: 'The second defining feature is that the parties do not face each other. When a trade is executed it is novated to a clearing house, which becomes buyer to every seller and seller to every buyer. Neither original party depends on the other’s solvency; both depend on the clearing house, which in turn requires collateral from each and adjusts it as prices move. This is the structural difference that separates a futures contract from an ordinary forward agreement, and it is why futures markets can concentrate large volumes of trading among parties who have no relationship with one another.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Contract structure — standardised and exchange-traded',
    },
    {
      label: 'Standardised by',
      value:
        'The exchange: quantity, quality specification, delivery period, and delivery mechanism',
    },
    {
      label: 'Negotiated by the parties',
      value: 'The price, and nothing else',
    },
    {
      label: 'Counterparty',
      value:
        'A clearing house, which is substituted for the original parties on execution',
    },
    {
      label: 'Collateral',
      value:
        'Each party posts and maintains collateral with the clearing system; it is adjusted as prices move',
    },
    {
      label: 'Usual outcome',
      value:
        'Most positions are closed by an offsetting trade before delivery; physical delivery is the exception',
    },
    {
      label: 'Why it matters here',
      value:
        'Futures prices are the anchor that basis, spreads, and much physical contract pricing are quoted against',
    },
  ],
  sections: [
    {
      id: 'what-standardisation-does',
      heading: 'What standardisation does',
      body: [
        {
          type: 'paragraph',
          text: 'The economic work of a futures contract is done by what it refuses to negotiate. Because every contract of a given kind covers the same quantity, the same quality specification, the same delivery period, and the same delivery mechanism, any two contracts of that kind are interchangeable. A party who has bought one can discharge the obligation entirely by selling another — the two cancel, because they are the same object. Interchangeability is what makes a position closeable without ever touching the commodity.',
        },
        {
          type: 'paragraph',
          text: 'Standardisation also has a cost, and it is the cost that gives rise to basis. A contract that specifies one quality at one delivery point cannot describe a lot of a different quality at a different place. That difference does not disappear; it is simply excluded from the futures price and pushed into the physical market, where it reappears as the gap between a cash price and the reference. A futures price is therefore a precise statement about a narrow thing, not an approximate statement about a broad one.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Quantity',
              description:
                'A fixed lot size per contract, set by the exchange. Exposure is varied by holding more or fewer contracts, not by varying the size of one.',
            },
            {
              term: 'Quality specification',
              description:
                'A deliverable grade, usually with a schedule of premiums and discounts for stated deviations. Material outside the schedule is not deliverable at all.',
            },
            {
              term: 'Delivery period',
              description:
                'A named month or window during which delivery may occur. Contracts for different periods are different, non-interchangeable instruments.',
            },
            {
              term: 'Delivery mechanism',
              description:
                'How the obligation is discharged if it runs to term — physical delivery at designated points, or cash settlement against a defined settlement value. Which one applies is a property of the contract.',
            },
          ],
        },
      ],
    },
    {
      id: 'the-clearing-house-and-collateral',
      heading: 'The clearing house and collateral',
      body: [
        {
          type: 'paragraph',
          text: 'On execution, the contract between the two trading parties is replaced by two contracts with a central clearing house. This substitution is the mechanism by which a futures market converts a web of bilateral credit exposures into a single, collateralised exposure to one institution. It is why a seller need not investigate a buyer, and why a buyer need not care whether the seller still exists next month.',
        },
        {
          type: 'paragraph',
          text: 'The clearing house protects itself by requiring collateral at the outset and by revaluing every open position on a regular cycle, collecting from parties whose positions have moved against them and paying those whose positions have moved in their favour. The consequence, which is frequently misunderstood, is that a futures position generates cash movements throughout its life rather than only at the end. A position that is economically sound over its full term can still require cash before that term is reached — the timing of the cash and the timing of the economics are not the same.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No levels are given here',
          text: 'AgricultureID publishes no collateral requirements, no margin levels, no lot sizes, no tick sizes, and no contract specifications for any named exchange or contract. Those are set by the exchange and clearing house, are revised, and differ by contract. Always work from the exchange’s own current specification for the contract in question.',
        },
      ],
    },
    {
      id: 'delivery-and-why-it-usually-does-not-happen',
      heading: 'Delivery, and why it usually does not happen',
      body: [
        {
          type: 'paragraph',
          text: 'The delivery mechanism of a futures contract is essential and is rarely used. It is essential because it is the tether: the possibility of delivery is what compels the futures price to converge on the physical value of the deliverable commodity at the delivery point as the contract approaches its term. Without a credible delivery mechanism, a futures price would be a number about nothing.',
        },
        {
          type: 'paragraph',
          text: 'It is rarely used because most parties do not want the deliverable commodity at the delivery point — they want exposure to its price, or protection from it, while transacting their actual physical business elsewhere on their own terms. They therefore close the position by an offsetting trade before term, leaving only the price effect. A futures market thus functions largely as a price mechanism that retains a physical delivery mechanism it seldom exercises, and the credibility of the second is what makes the first work.',
        },
        {
          type: 'paragraph',
          text: 'This has a direct interpretive consequence. A futures price is not a forecast of the commodity’s price at the delivery date, and it is not a prediction. It is the price at which contracts for that delivery period are currently changing hands, given everything the market participants currently believe and everything the contract currently specifies.',
        },
      ],
    },
    {
      id: 'how-to-read-a-futures-price',
      heading: 'How to read a futures price',
      body: [
        {
          type: 'paragraph',
          text: 'A futures price obtained from any source is a statement about one contract, for one delivery period, on one exchange, for one specified quality at one specified delivery mechanism. It is not the price of the commodity. Before it can be applied to any physical question, four things must be known.',
        },
        {
          type: 'list',
          items: [
            'Which contract and which exchange — contracts on the same commodity at different exchanges are different instruments with different specifications and are not interchangeable',
            'Which delivery period — a nearby month and a deferred month are separate instruments, and the relationship between them is a spread, not a price change',
            'What quality and delivery mechanism the contract specifies — this determines what the price is actually about, and therefore what it excludes',
            'What unit and currency — a futures price carries the contract’s own unit and currency, and converting either introduces a second variable',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Not advice, and not a recommendation',
          text: 'This page explains what a futures contract is so that price information obtained elsewhere can be read correctly. It does not describe how to use futures, does not recommend futures or any alternative, and takes no position on whether any party should transact in them. Participation in futures markets is a regulated activity in most jurisdictions and involves the risk of loss.',
        },
      ],
    },
  ],
  definition:
    'A futures contract is a standardised agreement, executed on an organised exchange, to buy or sell a specified quantity of a commodity of a specified quality for delivery in a specified future period, in which price is the only negotiated term and performance is guaranteed by a central clearing house that is substituted for the original counterparties and that requires collateral adjusted as prices move.',
  usageContext:
    'Exchange-traded commodity markets, and — indirectly but pervasively — the physical trade, where futures prices for standardised contracts serve as the reference against which basis, spreads, and much physical contract pricing are quoted.',
  notToBeConfusedWith: [
    'Forward contract — a forward is a bilateral, privately negotiated agreement in which quantity, quality, timing, and place are all negotiable, and each party carries the other’s credit risk. A futures contract standardises every term but price and replaces counterparty credit risk with a clearing house. Both are agreements for future delivery; almost nothing else about them is the same.',
    'The commodity price — a futures price is the price of one standardised contract, for one delivery period, for one specified quality at one delivery mechanism. It is not the price of the physical commodity anywhere, which is why basis exists.',
    'A forecast — a futures price for a deferred month is the price at which that contract is currently trading, not a prediction of what the commodity will cost then. Reading a deferred price as a forecast is a category error, and the relationship between months reflects carrying cost and market structure rather than expectation alone.',
    'An option — an option confers a right without an obligation, in exchange for a premium paid at the outset. A futures contract creates an obligation on both parties from the moment it is executed. They are different instruments with different obligations and different cash profiles.',
    'A physical purchase — closing a futures position by an offsetting trade discharges the obligation without any commodity moving. Most positions end this way. A futures position is not a stock of grain and cannot be milled, shipped, or eaten.',
    'Hedging — hedging is a purpose a party may have; a futures contract is one instrument among several through which that purpose might be pursued. Holding futures is not in itself hedging, and hedging does not require futures.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No contract specifications are published here: no lot sizes, tick sizes, delivery months, delivery points, quality schedules, margin levels, or exchange names paired with claimed specifications. These are set by the relevant exchange, are revised, and must be read from the exchange’s own current documentation.',
    'This page does not recommend futures, does not describe how to establish or manage a position, and offers no view on whether any party should participate in futures markets.',
    'Futures trading is a regulated activity in most jurisdictions and carries the risk of loss, including loss exceeding the collateral initially posted. Eligibility, conduct, and disclosure requirements are matters for the applicable regulator and for a qualified adviser.',
    'The structural description here is generic. Individual contracts differ materially in specification, settlement method, and delivery mechanism, and a generic description cannot substitute for a specific contract’s terms.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'crush-spread' },
    { type: 'market-term', slug: 'forward-contract' },
    { type: 'market-term', slug: 'hedging' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'market-depth' },
    { type: 'market-term', slug: 'premium-and-discount' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'speculation' },
    { type: 'market-term', slug: 'spot-price' },
    { type: 'market-term', slug: 'spread' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of exchange-traded and cash agricultural markets, and their relationship',
    },
    {
      sourceId: 'igc',
      citedFor:
        'The role of standardised reference contracts in international grain and oilseed trade',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural market structure and the function of organised commodity markets',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market information framework covering internationally traded grains and oilseeds',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a structure. Contract specifications, deliverable qualities, delivery mechanisms, clearing arrangements, and regulatory treatment are exchange- and jurisdiction-specific.',
  limitations: [
    'A structural description of the instrument, not a specification of any contract, exchange, or clearing arrangement.',
    'No contract terms, margin arrangements, or exchange rules are reproduced; all of these are versioned and must be read from the exchange’s current documentation.',
    'Regulatory treatment of futures participation, including who may transact and under what conditions, differs by jurisdiction and is outside the scope of this page.',
    'Not every agricultural commodity has a futures contract; where none exists, the concepts anchored to it — basis, contango and backwardation, calendar spreads — do not apply.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Futures Contract: What Standardisation and Clearing Do',
    description:
      'What a futures contract is: standardised terms with only price negotiated, a clearing house replacing counterparty risk, and why delivery rarely happens.',
    keywords: [
      'futures contract',
      'commodity futures',
      'futures definition',
      'clearing house',
      'forward versus futures',
      'contract standardisation',
    ],
  },
  structuredData: { article: true },
};
