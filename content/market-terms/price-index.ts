import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const priceIndex: MarketTermContent = {
  id: 'market-term-price-index',
  slug: 'price-index',
  contentType: 'market-term',
  title: 'Price Index',
  alternativeNames: ['Index number', 'Commodity price index'],
  category: 'Market term',
  subcategory: 'Market measurement',
  marketTermClass: 'market-measurement',
  summary:
    'A price index is a computed statistic expressing how prices have changed relative to a base period, aggregated across items by a weighting scheme. It measures relative change rather than level, and its construction — base, basket, and weights — determines what it says.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A price index answers a comparative question: how do prices now stand against prices then? It does so by selecting a set of items, choosing a period to serve as the base, deciding how much each item counts, and expressing the result as a number relative to that base. The output is not a price and is not in price units — it is an index number, and its whole meaning lies in its relation to the base and to its own earlier values.',
    },
    {
      type: 'paragraph',
      text: 'Indices exist because a market or an economy contains far more prices than anyone can hold in view, and because the question people usually want answered is about change rather than level. The FAO Food Price Index is a well-known example in agriculture, tracking international prices of a basket of food commodity groups; the World Bank and others publish commodity price indices on their own methodologies. All of them share the same structure and the same essential caution: an index is a construction, and everything it tells you is downstream of how it was built.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market measurement — a computed statistic of relative change',
    },
    {
      label: 'Expresses',
      value: 'Prices now relative to a base period, not a price level',
    },
    {
      label: 'Requires',
      value: 'A basket, a base period, a weighting scheme, and a formula',
    },
    {
      label: 'Units',
      value:
        'None — an index number is dimensionless and is meaningful only against its own base and history',
    },
    {
      label: 'Not transactable',
      value:
        'No lot is bought or sold at an index; it is a measure, not a quotation',
    },
    {
      label: 'Weights drift',
      value:
        'A basket fixed at a base period describes a consumption or trade pattern that changes',
    },
    {
      label: 'Not comparable',
      value:
        'Two indices with different baskets, bases, or weights measure different things',
    },
  ],
  sections: [
    {
      id: 'construction-determines-meaning',
      heading: 'Construction determines meaning',
      body: [
        {
          type: 'paragraph',
          text: 'An index is defined by four choices, and each is a judgement rather than a discovery. Together they determine what question the index answers, and none of them is visible in the resulting number. Reading an index without its methodology is reading an answer without knowing the question.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'The basket',
              description:
                'Which items are included. This determines the index’s scope, and it draws a boundary: everything outside the basket is invisible to the index no matter how its price moves.',
            },
            {
              term: 'The base period',
              description:
                'The reference the index is expressed relative to. It is an arbitrary choice with no economic significance, and changing it rescales the whole series without changing anything the series says.',
            },
            {
              term: 'The weights',
              description:
                'How much each item counts. Usually derived from trade or consumption shares in some period, which is itself a choice. Weights are where an index encodes a view of what matters.',
            },
            {
              term: 'The formula',
              description:
                'How the items are combined. Different formulae treat substitution and weight changes differently and produce different series from identical price data.',
            },
            {
              term: 'The price series used',
              description:
                'Which prices represent each item. An index of international quotations and an index of retail prices for nominally the same basket measure entirely different phenomena.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The base period is the choice most often over-read. Because an index is conventionally expressed against a base, readers infer that the base was somehow normal or that a reading above it means prices are high. Neither follows. The base is a scaling convention, chosen for convenience, and an index above its base means only that prices are above what they were in an arbitrarily selected period.',
        },
      ],
    },
    {
      id: 'what-an-index-cannot-tell-you',
      heading: 'What an index cannot tell you',
      body: [
        {
          type: 'paragraph',
          text: 'The virtue of an index is compression: it reduces a great many prices to one series. The limitations all follow from the same property, because compression is lossy and the information it discards does not announce itself.',
        },
        {
          type: 'list',
          items: [
            'It cannot tell you a price — an index is dimensionless and no commodity has a price of "an index number"',
            'It cannot tell you what any component did — a stable index is entirely compatible with violent, offsetting movements underneath it',
            'It cannot tell you about anything outside its basket, however economically important that thing is',
            'It cannot tell you what a party paid — real transactions occur at specific prices for specific lots, and an index has averaged all of that away',
            'It cannot tell you about levels across space — an index says a market moved, not whether it is expensive relative to anywhere else',
            'It cannot be compared with another index built on a different basket, base, or weighting, however similar the two sound',
          ],
        },
        {
          type: 'paragraph',
          text: 'The second point is the one that most often produces confident error. An index moving little is routinely read as a market that was quiet, when it may equally be a market where large movements in opposite directions cancelled. The index records the net, and the net is not the story — it is one summary statistic about the story, and a lossy one.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No index values are published here',
          text: 'AgricultureID publishes no index values, series, or historical readings for any index, commodity, or period. Values must be obtained from the publishing organisation together with its current methodology, and this page neither reproduces nor interprets any methodology.',
        },
      ],
    },
    {
      id: 'the-drift-problem',
      heading: 'The drift problem',
      body: [
        {
          type: 'paragraph',
          text: 'An index faces a structural dilemma that has no clean solution. Weights derived from a base period describe the trade or consumption pattern of that period. As time passes, the pattern changes — different commodities matter more, substitution occurs, new products appear — and the index’s weights become progressively less representative of what it purports to measure.',
        },
        {
          type: 'paragraph',
          text: 'Updating the weights fixes representativeness and breaks comparability: a series whose weights changed is not measuring the same thing before and after, so movements across the join are partly artefacts of the revision. Not updating preserves comparability and lets the index drift away from the reality it describes. Every index publisher must choose a position between these, and every position is a compromise rather than a solution.',
        },
        {
          type: 'paragraph',
          text: 'For a reader, the consequence is practical. Long index series are the ones most susceptible to this, and precisely the ones people most want to use, since a long history invites comparison across decades. A reading compared with one from many years ago may be comparing two differently constructed measures wearing the same name, and only the publisher’s methodology documentation reveals whether it is.',
        },
      ],
    },
  ],
  definition:
    'A price index is a computed statistic expressing prices in a period relative to a base period, aggregated across a defined basket of items by a weighting scheme and a formula. It is dimensionless, measures relative change rather than level, is not transactable, and its meaning is determined entirely by its basket, base, weights, formula, and underlying price series.',
  usageContext:
    'Statistical measurement and policy analysis of agricultural and food markets, where an aggregate series describing how prices have moved is required — for monitoring, for comparison over time, and as a basis for indexation in some instruments.',
  notToBeConfusedWith: [
    'A price — an index is dimensionless and no transaction occurs at one. It expresses change relative to a base, and converting an index reading into a price is not possible from the index alone.',
    'A composite indicator price — a composite indicator is expressed in price units and describes the level of a fragmented market, calculated from selected quotations. An index is dimensionless and describes relative change against a base. Both are computed statistics; they answer different questions and are read differently.',
    'A benchmark price — a benchmark is a single observable quotation for a real, transactable object, adopted by convention as an anchor. An index is a computed aggregate that cannot be delivered against and that nobody quotes.',
    'A cost-of-living or inflation measure — a commodity price index measures commodity prices in its basket. Retail food prices depend on processing, distribution, retailing, taxation, and local conditions, and can move quite differently. Reading a commodity index as a statement about what consumers pay skips most of the chain.',
    'The base period as normal — the base is an arbitrary scaling convention with no economic meaning. An index above its base means prices exceed those of a selected past period, not that they are high in any other sense.',
    'A measure of any component — an index records the weighted net. A quiet index is fully compatible with large offsetting movements in its components, and the index cannot be disaggregated back into them.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No index values, readings, or historical series are published here for any index, commodity, or period. Values must be obtained from the publishing organisation alongside its current methodology.',
    'This page does not reproduce, summarise numerically, or interpret any organisation’s index methodology. Baskets, bases, weights, and formulae are versioned and revised, and only the publisher’s current documentation is authoritative.',
    'Nothing here supports using an index to price, value, or compare any transaction, commodity, or market. An index is not a price and cannot be converted into one.',
    'Index readings are not comparable across publishers, and long series may not be comparable with themselves across methodology revisions.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'sugarcane' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'composite-indicator-price' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'stocks-to-use-ratio' },
    { type: 'market-term', slug: 'supply-and-demand-balance-sheet' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Food price index methodology: a weighted basket of food commodity groups measured against a base period',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Commodity price index construction and methodology in international price monitoring',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Agricultural price statistics and index series concepts',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural price measurement and monitoring in policy analysis',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Every index is specific to its publisher’s basket, base, weights, formula, and price series, and no index generalises beyond what it was constructed to measure.',
  limitations: [
    'A description of what an index is, not a reproduction or interpretation of any publisher’s methodology.',
    'Baskets, bases, weights, and formulae are revised; long series may not be internally comparable across revisions, and only the publisher can say.',
    'An index compresses many prices into one series and cannot be disaggregated; a quiet index is compatible with large offsetting component movements.',
    'Commodity price indices describe commodity markets and are not measures of retail or consumer food prices, which depend on the rest of the chain.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Price Index: Relative Change, Not a Price',
    description:
      'What a price index is: a dimensionless statistic measuring prices against a base period, and how basket, base and weights determine its meaning.',
    keywords: [
      'price index',
      'food price index',
      'commodity price index',
      'index number',
      'price index methodology',
      'base period',
    ],
  },
  structuredData: { article: true },
};
