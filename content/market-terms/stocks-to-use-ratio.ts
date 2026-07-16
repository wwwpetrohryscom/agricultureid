import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const stocksToUseRatio: MarketTermContent = {
  id: 'market-term-stocks-to-use-ratio',
  slug: 'stocks-to-use-ratio',
  contentType: 'market-term',
  title: 'Stocks-to-Use Ratio',
  alternativeNames: [
    'Stocks-to-use',
    'Stock-to-utilisation ratio',
    'Days of supply (related)',
  ],
  category: 'Market term',
  subcategory: 'Market measurement',
  marketTermClass: 'market-measurement',
  summary:
    'The stocks-to-use ratio relates the stocks remaining at the end of a marketing year to the quantity used during it, expressing the buffer as a proportion of consumption. It is a compact measure of adequacy — and it inherits every weakness of the two balance sheet items it is built from.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A quantity of stocks means nothing on its own. Stocks that would last a small consumer for years would not carry a large one through a season, so a bare stock figure cannot answer the question anyone actually has, which is whether there is enough. The stocks-to-use ratio answers it by scaling: it divides ending stocks by the quantity used during the year, producing a measure of the buffer relative to the rate at which the commodity is consumed.',
    },
    {
      type: 'paragraph',
      text: 'This makes it one of the more useful single figures in commodity analysis, and it is widely used for exactly that reason. It also makes it one of the more treacherous, because it is derived from a balance sheet and therefore inherits everything that is uncertain about one. Both of its inputs are estimates, and the numerator — ending stocks — is frequently the residual that made the balance sheet balance in the first place. A ratio built on a residual is a precise-looking number resting on the least reliable item in the account.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market measurement — a derived ratio from a balance sheet',
    },
    {
      label: 'Construction',
      value: 'Ending stocks divided by total use for the marketing year',
    },
    {
      label: 'Expresses',
      value: 'The buffer at year end relative to the rate of consumption',
    },
    {
      label: 'Why it is scaled',
      value:
        'A bare stock quantity cannot indicate adequacy without knowing how fast it is consumed',
    },
    {
      label: 'Inherits',
      value:
        'Every uncertainty in the balance sheet, especially in ending stocks',
    },
    {
      label: 'Not comparable',
      value:
        'Across commodities, countries, or publishers — each has its own definitions and use base',
    },
    {
      label: 'Critical caveat',
      value:
        'Not all stocks are available; a world figure includes stocks that will never reach a market',
    },
  ],
  sections: [
    {
      id: 'why-scale-and-what-by',
      heading: 'Why scale, and what by',
      body: [
        {
          type: 'paragraph',
          text: 'The reason for the ratio is that adequacy is a relationship rather than a quantity. Whether stocks are comfortable depends on how quickly they would be consumed if nothing replaced them, and dividing by use is the simplest way to capture that. The result can be read as a proportion of a year’s consumption, or converted into an equivalent number of days of supply, which is the same information in a more intuitive unit.',
        },
        {
          type: 'paragraph',
          text: 'But "use" is not a single unambiguous quantity, and which use base is chosen changes the ratio. This is the first thing to establish about any stocks-to-use figure, and it is rarely stated alongside the number.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Total use',
              description:
                'Domestic use plus exports. The broadest base, appropriate where the question is how the stocks stand against everything the commodity is drawn down for.',
            },
            {
              term: 'Domestic use only',
              description:
                'Excludes exports. Appropriate for a country asking about its own consumption, and it produces a materially different ratio for a major exporter than the total-use base would.',
            },
            {
              term: 'Disappearance',
              description:
                'Some publishers use a use concept that includes categories others treat separately, such as loss or seed. The label conceals the definitional choice.',
            },
            {
              term: 'The geography',
              description:
                'World, a country, or a group. A world ratio and the ratio of a major exporter answer different questions, and neither substitutes for the other.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because of this, two stocks-to-use ratios for the same commodity and year can differ substantially while both being correctly computed. The figure carries no record of which base was used, and comparing figures across publishers without checking is comparing two different measures.',
        },
      ],
    },
    {
      id: 'the-availability-problem',
      heading: 'The availability problem',
      body: [
        {
          type: 'paragraph',
          text: 'The ratio’s most serious limitation is one its arithmetic cannot see: it treats all stocks as though they were equally available to meet demand, and they are not. A world stocks-to-use ratio adds together stocks in places that will never supply each other, and presents the sum as though it were a single buffer.',
        },
        {
          type: 'list',
          items: [
            'Stocks held as strategic or state reserves may be policy instruments not intended to reach a commercial market at all',
            'Stocks concentrated in a country that restricts exports are unavailable to everyone else, however large they are',
            'Stocks in the wrong place are constrained by transport: a surplus that cannot be moved to a deficit within the time it is needed is not a buffer for that deficit',
            'Working stocks — the quantity that must remain in a system for it to function at all — are not drawable-down and are part of every stock figure',
            'Stocks of the wrong quality may not meet the specification the demand requires',
            'On-farm stocks are held by parties who may not sell them, and their availability depends on decisions no one has observed',
          ],
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that a world ratio can look comfortable while a specific market faces genuine scarcity, and this is not a rare edge case — it is a recurring feature of food commodity markets. The ratio measures a quantity relationship; availability is a physical, political, and commercial question that the quantity relationship does not address.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No ratios, no thresholds, no signals',
          text: 'AgricultureID publishes no stocks-to-use ratios for any commodity, country, or year, and offers no threshold at which a ratio should be considered tight or comfortable. Such thresholds are commodity- and context-specific, contested, and would function as a market signal — which this platform does not publish.',
        },
      ],
    },
    {
      id: 'the-relationship-to-price',
      heading: 'The relationship to price, stated carefully',
      body: [
        {
          type: 'paragraph',
          text: 'The stocks-to-use ratio is closely associated with price discussion, and the association needs handling with precision rather than avoidance. The observed relationship in the research literature is not linear: at comfortable levels, changes in the ratio are associated with little price response, because a buffer that is ample remains ample. As the ratio falls toward the level where the buffer approaches what a system needs simply to function, price response to further changes has been observed to become much sharper.',
        },
        {
          type: 'paragraph',
          text: 'This is a statement about a pattern documented in analysis of past markets, and it is worth being exact about what it does not license. It does not permit inferring a price from a ratio, or a price change from a ratio change. It does not identify the level at which the relationship steepens, which differs by commodity, by period, and by study. And it says nothing about direction: a low ratio has coincided with sharply rising prices and has also persisted without them.',
        },
        {
          type: 'paragraph',
          text: 'The honest use of the concept is as a description of a market’s physical position, not as an input to a price view. It tells you how much buffer the accounts say exists relative to consumption, with all the uncertainty that entails and with the availability question entirely unaddressed. That is genuinely informative, and it is considerably less than the ratio is often asked to do.',
        },
      ],
    },
  ],
  definition:
    'The stocks-to-use ratio is ending stocks for a marketing year divided by the quantity used during that year, expressing the buffer remaining relative to the rate of consumption. It is derived from a supply and demand balance sheet and inherits that account’s uncertainties, particularly in ending stocks, which is frequently the residual item; it also treats all stocks as equally available, which they are not.',
  usageContext:
    'Commodity market analysis and food security monitoring, where the adequacy of stocks must be assessed relative to consumption rather than in absolute quantity, for major traded commodities at world and country level.',
  notToBeConfusedWith: [
    'A measure of scarcity — the ratio measures a quantity relationship in an account. It does not measure whether a commodity is available to anyone who needs it, because it counts stocks that are strategically held, export-restricted, in the wrong place, of the wrong quality, or simply required for a system to function.',
    'A price indicator — no price follows from a ratio. The documented relationship is non-linear and varies by commodity, period, and study, and it does not permit inferring a price, a price change, or a direction from any ratio.',
    'A measured quantity — both inputs are estimates, and the numerator is frequently the residual that made the balance sheet balance. The ratio is a precise-looking number computed from the least reliable item in the account.',
    'Days of supply — days of supply is the same information expressed in time units rather than as a proportion. It is not a different measure and carries every limitation of the ratio, including the availability problem.',
    'Comparable across commodities or countries — the use base, the definitions, the marketing year, and the geography all differ. A ratio for one commodity is not comparable with one for another, and a world ratio does not compare with a country’s.',
    'A threshold measure — the notion that some ratio marks a line between comfortable and tight is contested, commodity-specific, and period-specific. No such threshold is offered here, and figures presented as one should be read as the analyst’s judgement rather than as a property of the market.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No stocks-to-use ratios, stock figures, use figures, or thresholds are published here for any commodity, country, or marketing year.',
    'No threshold at which a ratio indicates tightness is given, because such thresholds are contested, context-specific, and would function as a market signal. Any threshold encountered elsewhere is an analyst’s judgement, not a property of the market.',
    'The ratio produces no price and supports no price inference. The documented relationship between stocks-to-use and prices is non-linear, varies by commodity and period, and does not permit deriving one from the other.',
    'The ratio inherits every uncertainty of the balance sheet it derives from, including a numerator that is frequently a residual carrying the accumulated error of the whole account.',
    'The ratio treats all stocks as available. Assessing genuine availability requires information on location, ownership, quality, policy, and transport that the ratio does not contain.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-index' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'supply-and-demand-balance-sheet' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  sourceReferences: [
    {
      sourceId: 'amis',
      citedFor:
        'Stocks and utilisation monitoring for major food commodities, and the role of stock adequacy measures',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain stocks and use estimates and their relationship within balance sheets',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Stock adequacy concepts in food security assessment and the limitations of aggregate stock measures',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Analysis of the relationship between stock levels and agricultural commodity price behaviour',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Computed at world, regional, and country level for major commodities; use bases, definitions, and marketing years differ by publisher and by commodity, and the figures are not comparable across them.',
  limitations: [
    'A description of the measure, not a ratio, a threshold, or a figure for any commodity, country, or year.',
    'Both inputs are estimates and the numerator is frequently a balance sheet residual, so the ratio’s apparent precision substantially exceeds its accuracy.',
    'The measure treats all stocks as equally available, which they are not; a comfortable world ratio is compatible with genuine scarcity in a specific market.',
    'Use bases and definitions differ by publisher, so ratios are not comparable across sources, commodities, or geographies.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Stocks-to-Use Ratio: A Buffer Measured Against Consumption',
    description:
      'What the stocks-to-use ratio means: ending stocks scaled by use, why the use base changes the answer, and why it cannot be read as a price indicator.',
    keywords: [
      'stocks to use ratio',
      'stocks-to-use',
      'ending stocks',
      'stock adequacy',
      'days of supply',
      'grain stocks',
    ],
  },
  structuredData: { article: true },
};
