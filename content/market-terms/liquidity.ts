import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const liquidity: MarketTermContent = {
  id: 'market-term-liquidity',
  slug: 'liquidity',
  contentType: 'market-term',
  title: 'Liquidity',
  alternativeNames: ['Market liquidity', 'Tradability'],
  category: 'Market term',
  subcategory: 'Market structure',
  marketTermClass: 'market-structure',
  summary:
    'Liquidity is the ease with which a party can transact without materially moving the price against themselves. It is a multi-dimensional property of a market rather than a quantity, and its most important characteristic is that it is not constant — it tends to be least available exactly when it is most needed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A liquid market is one where a party who wants to transact can do so: promptly, in the size they need, at a price close to where the market was before they arrived. An illiquid market is one where they cannot — where transacting means waiting, or accepting a worse price, or splitting the transaction into pieces, or simply not transacting at all. Liquidity is the name for the difference, and it is a property of the market rather than of the commodity or of any price.',
    },
    {
      type: 'paragraph',
      text: 'The concept resists being reduced to a number because it has several dimensions that do not move together. A market can offer a narrow gap between bid and offer for small quantities while having almost nothing available in size; another can absorb large quantities slowly but not quickly. Both are liquid in one sense and illiquid in another, and a single liquidity figure would have to choose which sense to represent while implying it had represented all of them.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market structure — a multi-dimensional property, not a quantity',
    },
    {
      label: 'Broadly',
      value:
        'The ability to transact promptly, in size, near the prevailing price',
    },
    {
      label: 'Dimensions',
      value:
        'Tightness, depth, immediacy, resilience, and breadth — which do not move together',
    },
    {
      label: 'Not constant',
      value: 'A property of current conditions, which can change abruptly',
    },
    {
      label: 'Critical characteristic',
      value:
        'It tends to withdraw under stress — least available when most needed',
    },
    {
      label: 'Depends on',
      value:
        'Standardisation, participation, and diversity of participants’ positions and views',
    },
    {
      label: 'Frequently confused with',
      value:
        'Market depth, which is one of its dimensions rather than a synonym',
    },
  ],
  sections: [
    {
      id: 'the-dimensions',
      heading: 'The dimensions of liquidity',
      body: [
        {
          type: 'paragraph',
          text: 'Because liquidity is not one thing, describing a market as liquid without saying in what respect conveys little. The dimensions below are the ones the concept conventionally decomposes into, and they are genuinely separate: a market can score well on some and badly on others simultaneously, and which ones matter depends entirely on what a party is trying to do.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Tightness',
              description:
                'How close the best bid is to the best offer. It describes the cost of transacting immediately in a small quantity, and it is the dimension most visible and most often reported.',
            },
            {
              term: 'Depth',
              description:
                'How much quantity is available at or near the prevailing price. It describes whether size can be transacted without moving the market, and it is a separate question from tightness.',
            },
            {
              term: 'Immediacy',
              description:
                'How quickly a transaction can be completed. A market where a counterparty can eventually be found is not the same as one where a transaction happens now.',
            },
            {
              term: 'Resilience',
              description:
                'How quickly the market recovers after a large transaction moves it. This is the dimension that distinguishes a market that absorbs a shock from one that is knocked over by it, and it is invisible in any snapshot.',
            },
            {
              term: 'Breadth',
              description:
                'Whether interest comes from many independent participants or a few. A market whose apparent liquidity rests on two parties is fragile in a way its numbers do not reveal.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Resilience and breadth deserve emphasis because they are the two that no observation of a market at a moment can reveal. A snapshot shows tightness and depth; it says nothing about whether the depth would replenish after being consumed, or about how many parties it actually represents. Markets that look liquid and are not usually look that way because these two dimensions are absent and invisible at once.',
        },
      ],
    },
    {
      id: 'why-liquidity-withdraws-under-stress',
      heading: 'Why liquidity withdraws under stress',
      body: [
        {
          type: 'paragraph',
          text: 'The single most important thing to understand about liquidity is that it is not a fixture. It is supplied by participants who are willing to take the other side of a transaction, and that willingness is conditional on their circumstances. When conditions become uncertain — when information is unclear, when prices are moving sharply, when everyone’s positions are under pressure — the parties who would normally supply liquidity become less willing to, and they become less willing simultaneously and for the same reason.',
        },
        {
          type: 'paragraph',
          text: 'The result is a correlation that matters enormously and is easy to overlook: liquidity is most abundant when nobody needs it, and it thins when everybody does. A party who plans on the assumption that they can transact as easily during a disruption as they could beforehand has made an assumption that the structure of the market specifically does not support. This is not a failure of any particular market; it is what liquidity is, because it is somebody’s willingness rather than a facility.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A structural caution, not a prediction',
          text: 'This page describes a general property of markets. It makes no claim about any market’s liquidity at any time, publishes no measures, and offers no view on how any market would behave under any condition. AgricultureID publishes no market data of any kind.',
        },
      ],
    },
    {
      id: 'what-liquidity-rests-on',
      heading: 'What liquidity rests on',
      body: [
        {
          type: 'paragraph',
          text: 'Liquidity is not distributed evenly and its distribution is not accidental. It concentrates where the conditions that support it are present, and those conditions explain why some agricultural markets are among the most liquid that exist while others, for physically identical commodities, are barely tradable at all.',
        },
        {
          type: 'list',
          items: [
            'Standardisation — participants must be transacting the same object. Heterogeneous physical lots cannot pool interest, which is why cash markets are structurally less liquid than contract markets',
            'Participation — the number of independent parties able and willing to transact. Few participants means liquidity that exists at the pleasure of a handful of parties',
            'Diversity — participants must differ in position, view, and need. A market where everyone wants the same thing at the same time has no natural other side, however many participants it has',
            'Continuity — a market that trades continuously accumulates interest; one that trades occasionally forces participants to wait for each other',
            'Transferability — the ability to exit by transacting with anyone. This is what makes futures liquid and forwards not: a forward can only be exited with its counterparty',
          ],
        },
        {
          type: 'paragraph',
          text: 'The diversity condition is the least intuitive and the most important for agricultural markets specifically. Harvest concentrates selling: many producers want to sell the same commodity in the same weeks for reasons that have nothing to do with price. That is a seasonal collapse in diversity, and it means the natural other side must be supplied by parties whose interest is not seasonal — which is a substantial part of what merchants, processors, and other participants are doing when they transact against a harvest.',
        },
      ],
    },
  ],
  definition:
    'Liquidity is the ease with which a party can transact in a market promptly, in the size they require, at a price close to the prevailing one. It is a multi-dimensional property comprising tightness, depth, immediacy, resilience, and breadth, which vary independently; it is supplied by participants’ willingness to take the other side, and therefore tends to withdraw under the stressed conditions in which it is most needed.',
  usageContext:
    'Market structure analysis of both exchange-traded and physical commodity markets, where the question is whether and how easily a party can transact, and what transacting would cost them beyond the price.',
  notToBeConfusedWith: [
    'Market depth — depth is one dimension of liquidity: the quantity available at or near the prevailing price. Liquidity also comprises tightness, immediacy, resilience, and breadth. A market can be deep and unresilient, or tight and shallow. Using the words interchangeably discards the distinctions that make either useful.',
    'Volume — volume records what was transacted; liquidity describes what could be transacted. High volume can occur in a market that is illiquid for a party wanting size now, and a market can be liquid while quiet if participants stand ready without transacting.',
    'Volatility — volatility measures how much a price has varied; liquidity describes the conditions for transacting. They are related — thin liquidity contributes to sharper price movements — but they are different properties, and neither measures the other.',
    'A price — liquidity is not a price and is not measured in price units. It describes what transacting costs beyond the price, in time, in size available, and in market impact.',
    'Solvency or cash — in a corporate context, "liquidity" means having cash or assets convertible to it. Market liquidity is a property of a market, not of a party’s balance sheet. The two uses are related in origin and are entirely different in what they describe.',
    'A guarantee of exit — a liquid market makes exit easy under current conditions. It does not promise that exit will be available later, and the conditions in which a party most wants to exit are precisely those in which liquidity is most likely to have thinned.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No liquidity measures, volumes, bid–offer spreads, depth figures, or market data of any kind are published here for any market, contract, or commodity.',
    'This page makes no claim about the liquidity of any market at any time, and does not compare markets, venues, or instruments.',
    'Nothing here supports a decision to transact, a choice of venue, or a judgement about whether a position could be exited. Liquidity conditions change and are specific to the market, the size, and the moment.',
    'The dimensions described are analytical categories, not a measurement framework. This page assigns no scores and offers no method for measuring liquidity.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'green-coffee' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'hedging' },
    { type: 'market-term', slug: 'market-depth' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'speculation' },
    { type: 'market-term', slug: 'spread' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of participation, competition, and trading conditions in agricultural markets',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor: 'Agricultural commodity market functioning and participation',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market transparency and information as conditions for market functioning',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Liquidity conditions are specific to a market, an instrument, a size, and a moment, and differ enormously across agricultural commodities and across the layers of any chain.',
  limitations: [
    'A definition of a property, not a measurement of any market’s liquidity at any time.',
    'The dimensions vary independently, so no single measure represents liquidity and any figure claiming to must be read for which dimension it captured.',
    'Resilience and breadth cannot be observed from a snapshot of a market, which is why apparent liquidity and actual liquidity can diverge sharply.',
    'Liquidity is conditional on participants’ willingness and can change abruptly; conditions observed at one moment do not describe another.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Liquidity: Five Dimensions, None of Them Constant',
    description:
      'What market liquidity means: tightness, depth, immediacy, resilience and breadth, why it withdraws under stress, and why it is not the same as market depth.',
    keywords: [
      'liquidity',
      'market liquidity',
      'liquidity definition',
      'market resilience',
      'liquidity versus depth',
      'commodity market structure',
    ],
  },
  structuredData: { article: true },
};
