import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const marketDepth: MarketTermContent = {
  id: 'market-term-market-depth',
  slug: 'market-depth',
  contentType: 'market-term',
  title: 'Market Depth',
  alternativeNames: ['Depth of market', 'Order book depth'],
  category: 'Market term',
  subcategory: 'Market structure',
  marketTermClass: 'market-structure',
  summary:
    'Market depth is the quantity available to transact at or near the prevailing price. It is one dimension of liquidity — the size dimension — and it answers a narrow question: how much can move before the price does.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Depth asks a specific question about a market: if a party wanted to transact a given quantity right now, how far would they have to move the price to find the other side of it? A deep market absorbs size with little movement, because there is substantial interest waiting at and around the current level. A shallow market does not: a transaction of any consequence exhausts the interest available at the prevailing price and must reach for the next level, and the next.',
    },
    {
      type: 'paragraph',
      text: 'This is a narrower concept than liquidity, and the narrowness is the point. Liquidity is a broad property with several dimensions; depth is one of them, isolating the relationship between quantity and price impact. Keeping the two distinct matters because they can diverge: a market can display a narrow gap between bid and offer, appearing eminently tradable, while having almost no size behind those prices — tight and shallow at once. A party who reads tightness as depth discovers the difference at the moment they try to transact.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market structure — the size dimension of liquidity',
    },
    {
      label: 'Question it answers',
      value: 'How much can be transacted before the price moves materially',
    },
    {
      label: 'Deep market',
      value:
        'Substantial quantity available at and around the prevailing price',
    },
    {
      label: 'Shallow market',
      value: 'Little quantity available; even modest size moves the price',
    },
    {
      label: 'Independent of tightness',
      value:
        'A market can be tight and shallow, or wide and deep — the two are separate properties',
    },
    {
      label: 'Snapshot only',
      value:
        'Depth describes a moment; it says nothing about whether it would replenish',
    },
    {
      label: 'Observable where',
      value:
        'Interest is visible — far more so on organised markets than in bilateral physical trade',
    },
  ],
  sections: [
    {
      id: 'depth-against-tightness',
      heading: 'Depth against tightness',
      body: [
        {
          type: 'paragraph',
          text: 'The most useful thing to establish about depth is what it is not, and the nearest neighbour is tightness — the gap between the best bid and the best offer. Tightness is highly visible and easily reported, which is why it is so often taken as the measure of a market’s tradability. But tightness describes the cost of transacting a small quantity immediately, and says nothing at all about size.',
        },
        {
          type: 'paragraph',
          text: 'The two properties are logically independent, and all four combinations occur. A market can be tight and deep, which is what a well-functioning liquid market looks like. It can be wide and shallow, which is unambiguously difficult. It can be wide and deep — expensive to enter but able to absorb size. And it can be tight and shallow, which is the dangerous combination, because it looks like the first and behaves like the second as soon as any quantity is involved.',
        },
        {
          type: 'table',
          caption: 'Tightness and depth are independent properties',
          // The row labels are spread states, so the corner cell is named
          // rather than left blank — an empty header gives a screen reader
          // nothing to announce the row axis by.
          columns: ['Spread', 'Deep', 'Shallow'],
          rows: [
            [
              'Tight',
              'Size transacts near the prevailing price',
              'Looks tradable; size moves the price sharply',
            ],
            [
              'Wide',
              'Costly to enter, but absorbs size once in',
              'Costly to enter and cannot absorb size',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'The consequence for reading market information is direct: a quoted price and a narrow bid–offer gap describe a market at the smallest transactable size. Neither is evidence about what a meaningful quantity would cost, and treating them as though they were is one of the more common ways to be surprised by a market.',
        },
      ],
    },
    {
      id: 'depth-is-a-snapshot',
      heading: 'Depth is a snapshot, and snapshots mislead',
      body: [
        {
          type: 'paragraph',
          text: 'Depth describes what is available now. It contains no information about what would be available in a minute, after a large transaction, or under different conditions. This makes it a genuinely useful observation about the present and a poor basis for any inference about anything else.',
        },
        {
          type: 'paragraph',
          text: 'The dimension it cannot see is resilience — whether the depth consumed by a transaction would be replaced. Two markets with identical depth can behave completely differently: in one, a large transaction takes out the available interest and fresh interest arrives promptly, so the market recovers; in the other, the same transaction takes out the interest and nothing replaces it, so the price simply stays where the transaction left it. Depth is identical in both, and the outcome is not.',
        },
        {
          type: 'list',
          items: [
            'Observed depth is what is visible at a moment, which is not necessarily all the interest that exists — parties may hold interest back rather than display it',
            'Displayed interest can be withdrawn, and it can be withdrawn faster than a transaction can reach it, particularly when conditions change',
            'Depth at the best price and depth a little away from it are different measures, and a market can have one without the other',
            'Depth in a nearby delivery period says nothing about depth in a deferred one, and thin deferred periods are common in agricultural markets',
            'In bilateral physical trade there is no observable depth at all, because interest is private — which does not mean the concept does not apply, only that it cannot be measured',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No market data here',
          text: 'AgricultureID publishes no depth data, order book information, volumes, bid–offer spreads, or market data of any kind, for any market or contract. This page defines the concept so that such information, obtained from a market or data provider, can be understood for what it does and does not say.',
        },
      ],
    },
    {
      id: 'depth-in-physical-agricultural-markets',
      heading: 'Depth in physical agricultural markets',
      body: [
        {
          type: 'paragraph',
          text: 'The vocabulary of depth comes from organised markets with visible interest, but the property it names exists everywhere, including in physical trade where nothing is visible at all. A producer selling into a local market faces a depth question every time they sell: how much can this set of buyers absorb before the price they are offered starts to fall? The question is identical; only the observability differs.',
        },
        {
          type: 'paragraph',
          text: 'In physical agricultural markets, depth is bounded by real things rather than by displayed interest — by how much storage exists locally, how much processing capacity is running, how much transport is available to move surplus out, and how many buyers are within reach. A local market’s depth is therefore a physical and infrastructural fact as much as a commercial one, and it can be exhausted absolutely: when storage is full and no transport is available, no price finds a buyer, and the market has no depth at any level.',
        },
        {
          type: 'paragraph',
          text: 'This is also why harvest is when depth matters most and is least available. Every producer in a region wants to sell the same commodity in the same weeks, into a fixed local capacity. The quantity seeking a buyer rises sharply while the capacity to absorb it does not, and the market’s depth is tested exactly when the greatest quantity is pressing against it.',
        },
      ],
    },
  ],
  definition:
    'Market depth is the quantity that can be transacted at or near the prevailing price before the price moves materially. It is the size dimension of liquidity, logically independent of tightness, observable only where interest is visible, and it describes a moment rather than a market’s capacity to absorb size over time.',
  usageContext:
    'Market structure analysis of exchange-traded markets, where displayed interest makes depth observable, and of physical markets, where the same property is bounded by storage, processing capacity, transport, and the number of buyers within reach.',
  notToBeConfusedWith: [
    'Liquidity — depth is one dimension of liquidity, not a synonym for it. Liquidity also comprises tightness, immediacy, resilience, and breadth. A market can be deep and unresilient, or shallow and tight. Depth answers only the size question.',
    'Tightness or the bid–offer spread — tightness is the cost of transacting a small quantity immediately; depth is how much can transact before the price moves. They are independent, and a tight, shallow market is the combination that most reliably misleads.',
    'Volume — volume records quantity that was transacted over a period. Depth describes quantity available to transact now. A market can have substantial volume accumulated through small transactions while being unable to absorb any size at once.',
    'Open interest — open interest counts contracts outstanding. It describes how much exposure exists, not how much can be transacted at the current price. A market can have large open interest and little depth.',
    'Resilience — resilience is whether depth replenishes after being consumed. Depth is a snapshot and cannot see it, which is why two markets with identical depth can behave completely differently after a large transaction.',
    'Displayed interest as all interest — what is visible may be less than what exists, since parties may hold interest back, and it may also be less durable than it appears, since displayed interest can be withdrawn.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No depth data, order book information, volumes, open interest, or market data of any kind are published here for any market, contract, or commodity.',
    'This page makes no claim about the depth of any market at any time and compares no markets or venues.',
    'Nothing here supports a decision about transacting, sizing, or execution. Depth conditions are specific to a market, an instrument, a period, and a moment, and change without notice.',
    'Observed depth is not a measure of a market’s capacity to absorb size, because it cannot see resilience or undisplayed interest. Nothing here offers a method for assessing either.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'speculation' },
    { type: 'market-term', slug: 'spread' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of trading conditions, capacity, and participation in agricultural markets',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain market infrastructure, storage, and handling capacity as constraints on physical absorption',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural market functioning and infrastructure constraints',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Depth is specific to a market, an instrument, and a moment; in physical markets it is bounded by local storage, processing, and transport infrastructure, which differ everywhere.',
  limitations: [
    'A definition of one dimension of liquidity, not a measurement of any market’s depth.',
    'Depth is a snapshot and cannot see resilience, so it does not describe a market’s capacity to absorb size over time.',
    'Observed depth reflects displayed interest only; undisplayed interest is invisible and displayed interest can be withdrawn.',
    'In bilateral physical trade, depth is not observable at all, though the property applies — a limitation of measurement rather than of the concept.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Market Depth: The Size Dimension of Liquidity',
    description:
      'What market depth means: how much can transact before the price moves, why it is independent of the bid–offer spread, and why a snapshot cannot see resilience.',
    keywords: [
      'market depth',
      'depth of market',
      'order book depth',
      'market depth definition',
      'liquidity versus depth',
    ],
  },
  structuredData: { article: true },
};
