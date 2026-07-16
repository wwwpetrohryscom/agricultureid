import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const currencyVolatility: SupplyChainRiskContent = {
  id: 'supply-chain-risk-currency-volatility',
  slug: 'currency-volatility',
  contentType: 'supply-chain-risk',
  title: 'Currency Volatility',
  alternativeNames: ['Exchange-rate risk', 'FX exposure'],
  category: 'Supply-chain risk',
  subcategory: 'Market',
  riskClass: 'market',
  summary:
    'The exchange rate between the currency a commodity is priced in and the currency a party actually earns or spends in moves between commitment and settlement. Nothing physical changes, and the economics of the trade change anyway.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Internationally traded agricultural commodities are typically priced in a small number of reference currencies, while the people who grow them are paid in local currency, and the people who eat them buy in another. Every chain crossing a border therefore contains at least one point where a value is translated from one currency into another, and that translation happens at a rate nobody controls and which moves continuously.',
    },
    {
      type: 'paragraph',
      text: 'The exposure is created by time, not by trade. If a price were agreed and settled in the same instant, the rate would be a fact rather than a risk. But agricultural trade runs on lags — a crop is contracted before it is grown, shipped before it is paid for, and financed across the gap — so the rate at commitment and the rate at settlement are different numbers, and the difference lands on whoever the contract left holding it.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Market — monetary rather than physical' },
    {
      label: 'Arises at',
      value:
        'Any point where value is translated between currencies, most often at contract and at settlement',
    },
    {
      label: 'Core mechanism',
      value:
        'The rate moves between commitment and settlement, and the gap accrues to whoever the contract left exposed',
    },
    {
      label: 'Created by',
      value:
        'Time — the lag between pricing, shipping, and payment, not by trade itself',
    },
    {
      label: 'Two distinct effects',
      value:
        'Transaction exposure on a specific deal, and competitiveness shifts between whole origins',
    },
    {
      label: 'Non-obvious carriers',
      value:
        'Parties who never trade currency can hold exposure through their input costs',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'where-exposure-hides',
      heading: 'Where the exposure actually sits',
      body: [
        {
          type: 'paragraph',
          text: 'The visible exposure is transactional: a contract denominated in one currency, settled at a rate that will be known later. It is measurable, it belongs to an identifiable party, and it is what a treasury function exists to manage. It is also the least interesting part of the mechanism, because it is the part everyone knows about.',
        },
        {
          type: 'paragraph',
          text: "The consequential exposure is economic, and it belongs to parties who do not think of themselves as having any. A producer selling domestically, in local currency, to a domestic buyer appears to have no currency position at all. But if that buyer's output price is derived from an international reference price, then the producer's local price contains an exchange rate, and a currency move reprices their crop without any transaction taking place. Equally, a producer whose inputs are imported carries an exposure on the cost side that is invisible until the input is repurchased.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A party can be exposed without transacting',
          text: "Exposure follows the economics, not the invoice. If a price, an input cost, or a competitor's cost is determined internationally, a currency move reaches the business regardless of what currency its own contracts are written in.",
        },
      ],
    },
    {
      id: 'competitiveness',
      heading: 'How currency reorders origins',
      body: [
        {
          type: 'paragraph',
          text: "The second mechanism operates at the level of whole origins rather than individual deals. When an exporting country's currency depreciates against the currency the commodity is priced in, its producers receive more local currency for the same international price. That is an incentive to sell, and to sell now — and the aggregate of many producers responding to it changes what the origin offers into the world market. The reverse move makes an origin's exports less attractive to sell and its farmers less willing to part with the crop.",
        },
        {
          type: 'paragraph',
          text: 'This matters because it means currency moves change trade flows in the same way freight moves do, and for the same underlying reason: they alter the delivered economics of one origin relative to another without touching production. An origin can become the competitive supplier to a market on the strength of a currency move alone, and the resulting change appears in trade statistics as though it were a commercial preference.',
        },
        {
          type: 'paragraph',
          text: 'Producer selling behaviour is the transmission belt, and it is why currency belongs in a supply-chain risk model rather than only in a finance one. A depreciation that accelerates farmer selling changes physical availability, storage occupancy, inland transport demand, and export line-ups. The currency market has moved the crop.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'What a move sets in motion',
      body: [
        {
          type: 'paragraph',
          text: 'Currency propagates into the physical chain along routes that are easy to list and easy to overlook.',
        },
        {
          type: 'list',
          items: [
            'Margin compression on contracts priced before the move, where a trading margin is thinner than the currency movement it must absorb',
            'Changed farmer selling behaviour, which alters the pace at which a crop reaches the market',
            'Input cost shifts, where fertiliser, fuel, seed, and machinery are imported and repriced in local terms',
            "Import demand destruction, where a depreciating importer's currency raises the local cost of food without any change in the international price",
            "Counterparty stress, where an unhedged position exceeds a counterparty's capacity to absorb it — the point at which currency becomes credit",
            'Policy response, where authorities facing currency pressure introduce exchange controls, import licensing, or payment restrictions',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last route is the one that turns a market variable into an operational obstacle. Where currency is scarce, the constraint stops being the price of foreign exchange and becomes access to it: a buyer may have local funds, an agreed contract, and no lawful way to pay. At that point a currency problem presents as a documentary and settlement problem, and it is often first noticed by someone in logistics rather than in treasury.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'Currency is the most continuously and publicly observed variable in this entire model, which creates a specific hazard: the abundance of data invites forecasting, and rate movements are notoriously resistant to it. The observable signals worth watching are not the rate itself but the things that indicate exposure is turning into an operational problem — widening gaps between official and parallel rates, lengthening payment cycles, letters of credit becoming harder to confirm, and importers requesting extended terms.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The rate is not the exposure',
          text: "Watching a rate move tells you about a market. Whether it matters to a chain depends on that chain's denomination, its lags, its margins, and its cover — quantities that are internal and unpublished. A large move against a fully hedged position is an event of no consequence.",
        },
      ],
    },
  ],
  riskMechanism:
    "The exchange rate between the currency in which a commodity is priced and the currency in which a party earns, spends, or reports moves between the moment an obligation is committed and the moment it is settled, so the value of an unchanged physical trade changes. The exposure is created by time rather than by trade: agricultural chains run on lags — contracting before growing, shipping before payment, financing across the gap — and the rate at commitment and at settlement are therefore different numbers whose difference accrues to whichever party the contract left carrying it. The exposure operates at two levels. Transactionally, it lands on identified deals and is visible to the parties holding them. Economically, it reaches parties who never transact in foreign currency at all: where a domestic price, an input cost, or a competitor's cost is derived from an international reference, a currency move reprices the business without any transaction occurring. At origin level, depreciation in an exporting country's currency raises the local-currency value of an unchanged international price, which changes producer selling behaviour in aggregate — and that is the transmission belt into the physical chain, altering the pace at which a crop reaches market, storage occupancy, inland transport demand, and export line-ups. It propagates further as margin compression on pre-priced contracts, as input-cost shifts where inputs are imported, as import demand destruction where a depreciating importer's currency raises local food cost without any international price change, as counterparty stress where an unhedged position exceeds a party's capacity to absorb it, and as policy response where authorities facing currency pressure introduce exchange controls or payment restrictions — at which point the constraint becomes access to foreign exchange rather than its price, and presents as a settlement and documentary obstacle rather than a market one.",
  chainStages: [
    'production',
    'assembly',
    'processing',
    'border',
    'destination-market',
  ],
  observableIndicators: [
    'A widening gap between official and parallel exchange rates in a producing or importing country',
    'Exchange controls, foreign-currency allocation rules, or import-payment licensing introduced or tightened',
    'Banks declining to confirm letters of credit for a jurisdiction, or confirmation costs rising',
    'Payment cycles lengthening, or buyers requesting extended or deferred terms',
    'Producer selling pace changing at an origin without any change in crop condition or international price',
    'Local-currency crop prices at an origin diverging from the international reference price',
    'Imported input costs — fertiliser, fuel, seed, machinery — repricing in local terms',
    'Import volumes into a market falling while the international price is unchanged',
    'Origin differentials between competing exporters widening or inverting without a production change',
    'Counterparties seeking renegotiation of price, currency of settlement, or delivery period',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no exchange rates, rate movements, volatility measures, or historical currency episodes, and characterises no currency, economy, or jurisdiction.',
    "Assessing exposure for a real chain requires that chain's own data: the currency each contract is denominated and settled in, the lag between pricing and settlement, the currency composition of its costs and revenues, its trading margin, any cover it holds, and the payment and convertibility conditions in the jurisdictions it deals with.",
    'A currency movement is not itself an exposure. Whether a move matters depends on denomination, lags, margin, and cover — internal and unpublished quantities — and a large move against a covered position may have no consequence at all.',
    'Exchange rates are not forecast here, and the abundance of publicly available currency data should not be mistaken for predictability.',
    'AgricultureID publishes no rates and gives no financial, hedging, treasury, or investment advice. Nothing on this page is a basis for any financial decision.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
    'beverage-crop',
    'fibre',
    'fruit',
    'livestock-product',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'import-permit' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'export-restriction' },
    { type: 'supply-chain-risk', slug: 'freight-rate-volatility' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
  ],
  sourceReferences: [
    {
      sourceId: 'worldbank',
      citedFor:
        'Macroeconomic and commodity-market context in which exchange rates transmit to trade and food prices',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Commodity dependence and trade-finance context for developing-country exporters and importers',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market-information framework in which macroeconomic and currency conditions are monitored alongside food-commodity supply',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural market and policy analysis context, including exchange-rate transmission to producer prices',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Food-import cost and food-security context in which currency movements affect import capacity',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any cross-border chain, but denomination conventions, convertibility, payment systems, and exchange controls are entirely jurisdiction-specific.',
  limitations: [
    'A reference description of a mechanism, not financial, treasury, hedging, or investment advice, and not an assessment of any currency, economy, or transaction.',
    'No rates, movements, volatility figures, or historical episodes are given, and no currency or country is characterised.',
    'Hedging instruments and their use are outside this scope; the page explains why exposure exists and how it reaches a physical chain, not how to manage it.',
    'Exchange rates are not forecast, and no view on any future rate is expressed or implied.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Currency Volatility: Mechanism and Transmission to Trade',
    description:
      'How exchange-rate movement reaches an agricultural chain: why time creates the exposure, and how parties are exposed without ever transacting.',
    keywords: [
      'currency volatility',
      'exchange rate risk',
      'FX exposure',
      'agricultural trade',
      'commodity currency',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
