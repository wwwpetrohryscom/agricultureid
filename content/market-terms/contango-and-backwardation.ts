import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const contangoAndBackwardation: MarketTermContent = {
  id: 'market-term-contango-and-backwardation',
  slug: 'contango-and-backwardation',
  contentType: 'market-term',
  title: 'Contango and Backwardation',
  alternativeNames: ['Carry and inversion', 'Forward curve structure'],
  category: 'Market term',
  subcategory: 'Price relationship',
  marketTermClass: 'price-relationship',
  summary:
    'Contango and backwardation name the two shapes a market’s forward structure can take: deferred delivery periods priced above nearer ones, or below them. They describe a structure that exists now — they are not forecasts, and the words carry no view about the future.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A commodity with contracts for several delivery periods has, at any moment, a set of prices — one per period — that together form a structure. When deferred periods price above nearer ones, that structure is called contango. When deferred periods price below nearer ones, it is called backwardation. The two words do nothing more than name the shape, and they are useful because the shape has an economic meaning that a single price does not.',
    },
    {
      type: 'paragraph',
      text: 'The interpretation runs through the cost of carrying the physical commodity. Holding a commodity from now until later has real costs — storage, insurance, financing, and loss — and those costs mean that, all else equal, a commodity available later should be worth more than one available now by roughly the cost of the carry. Contango is therefore the ordinary shape for a storable commodity: it is what the structure looks like when nothing unusual is happening. Backwardation is the anomalous one, and it says something specific — that the market values having the commodity now above the cost of storing it, which is a statement about present scarcity rather than future expectation.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Price relationship — a description of a structure that exists now',
    },
    {
      label: 'Contango',
      value: 'Deferred delivery periods priced above nearer ones',
    },
    {
      label: 'Backwardation',
      value: 'Deferred delivery periods priced below nearer ones',
    },
    {
      label: 'Reference concept',
      value:
        'The cost of carry — storage, insurance, financing, and loss over the holding period',
    },
    {
      label: 'What contango indicates',
      value:
        'The ordinary shape for a storable commodity: the market is paying to hold it',
    },
    {
      label: 'What backwardation indicates',
      value:
        'Present availability is valued above the cost of carry — a statement about now, not later',
    },
    {
      label: 'What neither indicates',
      value:
        'Where the price is going. The structure is not a forecast and does not become one',
    },
  ],
  sections: [
    {
      id: 'the-cost-of-carry-logic',
      heading: 'The cost-of-carry logic',
      body: [
        {
          type: 'paragraph',
          text: 'The reason the structure has meaning at all is that a storable commodity can be moved through time. Someone who holds a commodity now can deliver it later, and the cost of doing so is knowable: storage space, insurance, the financing cost of the capital tied up, and whatever the commodity loses in condition or quantity while stored. That cost creates an economic link between a nearer price and a deferred one.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cost of carry',
              description:
                'What it costs to hold a physical commodity from one period to a later one: storage, insurance, financing, and physical loss. It is positive for storable commodities and it is a real, incurred cost.',
            },
            {
              term: 'Full carry',
              description:
                'The structure in which a deferred period prices above a nearer one by approximately the cost of carry. This is the reference shape — the market covering the cost of holding, and no more.',
            },
            {
              term: 'Contango',
              description:
                'Deferred above nearer. Where the difference approaches the cost of carry, the structure is simply expressing what storage costs. It is the ordinary condition of a storable commodity with adequate supply.',
            },
            {
              term: 'Backwardation',
              description:
                'Deferred below nearer. This cannot be explained by carry, since carry cannot be negative — it says the market places a value on having the physical commodity now that exceeds the cost of storing it.',
            },
            {
              term: 'Convenience of holding',
              description:
                'The benefit of possessing the physical commodity rather than a claim on it later: being able to run a plant, meet a contract, or avoid a stockout. This benefit is what can push a structure into backwardation.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'This is why the two shapes are not symmetric in what they tell you. Contango within the cost of carry is uninformative — it is the market doing arithmetic about storage. Backwardation is informative, because it cannot arise from carry and therefore requires an explanation: something is making present availability valuable. That something is a fact about the current physical market.',
        },
      ],
    },
    {
      id: 'the-forecast-error',
      heading: 'The forecast error',
      body: [
        {
          type: 'paragraph',
          text: 'The most persistent misreading of these terms is to treat the structure as a prediction. Contango is routinely reported as the market "expecting higher prices" and backwardation as the market "expecting lower prices". Both readings are wrong, and the reason is the carry logic itself: a contango within the cost of carry is what the structure would look like if the market expected the price to be exactly unchanged, because the deferred price must exceed the nearer one by the storage cost regardless of any expectation.',
        },
        {
          type: 'paragraph',
          text: 'A deferred price is the current price of a deferred contract. It is what the market will transact at now for that later period, given carrying costs, current physical conditions, and everything participants presently believe. It is not a survey of opinion about the future, and its relationship to the nearer price is dominated by cost structure rather than by expectation. Reading a curve as a forecast attributes to belief what is mostly arithmetic about storage.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No structures, no levels, no forecasts',
          text: 'AgricultureID publishes no forward curves, no spread levels, no carry costs, and no statement about the structure of any market at any time. This page defines the terms so that a structure described elsewhere can be read correctly. Nothing here is a forecast, and nothing here supports making one.',
        },
      ],
    },
    {
      id: 'seasonality-and-the-limits-of-the-concept',
      heading: 'Seasonality and the limits of the concept',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural markets complicate the picture in a way that purely industrial commodities do not, because supply arrives in discrete harvests rather than continuously. A structure spanning a harvest is not comparing two points in one continuous supply situation; it is comparing the tail of one crop with the beginning of another, and those are different physical stocks with different availability. A shape across that boundary carries information about the relationship between two crops, and applying the carry logic across it without acknowledging the discontinuity produces confident nonsense.',
        },
        {
          type: 'list',
          items: [
            'Old-crop and new-crop periods describe different physical supplies; the structure between them is not a carry relationship in the ordinary sense',
            'Within a crop year, the carry logic applies more cleanly, since the same physical stock is being held through time',
            'Non-storable and highly perishable commodities have no carry and therefore no meaningful curve structure — the concept requires storability',
            'Storage capacity constrains the logic: if storage is physically full, the arbitrage that would enforce full carry cannot be performed',
            'The structure describes contract prices, and a party’s actual storage cost may differ substantially from whatever the market is implying',
            'Where deferred contracts trade thinly, the structure reflects the weakness of those quotations as much as any physical condition',
          ],
        },
        {
          type: 'paragraph',
          text: 'The concept, in short, is well defined for a storable commodity within a supply period and increasingly loose outside those conditions. Its precision is real where its assumptions hold, and neither the terminology nor the arithmetic warns when they stop holding.',
        },
      ],
    },
  ],
  definition:
    'Contango and backwardation name the two shapes a commodity’s forward price structure can take: contango where deferred delivery periods price above nearer ones, and backwardation where they price below. The reference for interpreting either is the cost of carry — storage, insurance, financing, and loss — with contango within that cost being the ordinary shape for a storable commodity, and backwardation indicating that present availability is valued above the cost of holding.',
  usageContext:
    'Exchange-traded commodity markets with contracts for multiple delivery periods, and market analysis describing the relationship between nearby and deferred prices for storable agricultural commodities.',
  notToBeConfusedWith: [
    'A price forecast — this is the central error. A contango within the cost of carry is what the structure looks like when the market expects no price change at all, because storage costs must be covered regardless. Neither shape is a prediction, and reading a curve as a survey of expectations attributes to belief what is mostly cost arithmetic.',
    'A calendar spread — a calendar spread is the measurement: the arithmetic difference between two delivery periods. Contango and backwardation are the descriptions of what a set of such measurements shows across the structure. The spread is the instrument of observation; the shape is the observation.',
    'Basis — a basis relates a physical cash price to a reference at one point in time. Contango and backwardation relate reference prices for different delivery periods to each other. One compares physical with paper; the other compares paper with paper across time.',
    'Rising or falling prices — a market in contango can be falling and a market in backwardation can be rising. The structure describes the relationship between delivery periods at one moment, not the direction of anything over time.',
    'Scarcity in the future — backwardation indicates that the market values having the commodity now. That is a statement about present physical conditions, and it is close to the opposite of a claim about future scarcity.',
    'A trading opportunity — the structure is a description. Nothing about a shape indicates that any position should be taken, and the arbitrage that would theoretically enforce full carry requires storage, capital, and capability that a description does not confer.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No forward curves, spread levels, carry costs, storage costs, or structural descriptions of any market at any time are published here.',
    'Nothing here is a forecast or supports making one. The explicit point of this page is that these terms are not forecasts, and it would be self-defeating to use it as though they were.',
    'This page describes no strategy and recommends no position. Storage, carry, and spread positions involve risk, capital, and physical capability, and are a regulated activity in most jurisdictions.',
    'The cost-of-carry logic holds for storable commodities within a supply period; across harvest boundaries and for non-storable commodities it does not apply, and this page offers no method for judging which case obtains.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'crush-spread' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'speculation' },
    { type: 'market-term', slug: 'spread' },
    { type: 'market-term', slug: 'stocks-to-use-ratio' },
    { type: 'market-term', slug: 'supply-and-demand-balance-sheet' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of storage, carrying costs, and inter-temporal price relationships in grain markets',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain and oilseed supply, stocks, and delivery-period market structure',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Stocks and availability concepts underpinning inter-temporal price relationships',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept, applicable wherever a storable commodity has traded contracts for multiple delivery periods. Storage costs, capacity, and harvest calendars are location- and commodity-specific.',
  limitations: [
    'A definition of two terms, not a description of any market’s structure at any time.',
    'The cost-of-carry interpretation requires storability and a continuous supply situation; it does not hold across harvest boundaries or for perishable commodities.',
    'Structures observed in thinly traded deferred contracts reflect the weakness of those quotations as much as any physical condition.',
    'A market-implied carry is not any party’s actual storage cost, which depends on their own facilities, financing, and capacity.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Contango and Backwardation: Structure, Not Forecast',
    description:
      'What contango and backwardation mean: the two shapes of a forward price structure, why cost of carry makes contango ordinary, and why neither predicts prices.',
    keywords: [
      'contango',
      'backwardation',
      'cost of carry',
      'forward curve',
      'contango definition',
      'commodity market structure',
    ],
  },
  structuredData: { article: true },
};
