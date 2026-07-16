import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const priceVolatility: MarketTermContent = {
  id: 'market-term-price-volatility',
  slug: 'price-volatility',
  contentType: 'market-term',
  title: 'Price Volatility',
  alternativeNames: ['Volatility', 'Price variability'],
  category: 'Market term',
  subcategory: 'Market measurement',
  marketTermClass: 'market-measurement',
  summary:
    'Price volatility is a measure of how much a price has varied over a period. It measures variation and nothing else — not direction, not risk, and not what will happen next — and it is always the product of a measurement choice that the resulting figure conceals.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Volatility describes how much a price moved about, rather than where it went. A price that rose steadily and one that ended where it started after violent swings can have very different volatility, and the one that went nowhere may well have the higher figure. This is the core of the concept: volatility is indifferent to direction, and it is a statement about the character of the movement rather than its result.',
    },
    {
      type: 'paragraph',
      text: 'It is also, always, a computed statistic rather than an observation, and this is where care is required. To produce a volatility figure someone must choose a period, an interval, and a method, and the figure that emerges depends on all three. It then presents itself as a property of the market, with no trace of the choices that made it. Two analysts measuring the same market over the same season can produce materially different volatility figures without either making an error, and reconciling them means comparing methods rather than markets.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market measurement — a computed statistic about variation',
    },
    {
      label: 'Measures',
      value: 'How much a price varied over a period',
    },
    {
      label: 'Does not measure',
      value: 'Direction, level, risk, or anything about the future',
    },
    {
      label: 'Always requires',
      value:
        'A choice of period, interval, and method — all of which affect the figure',
    },
    {
      label: 'Historical volatility',
      value: 'Computed from prices that occurred — a description of the past',
    },
    {
      label: 'Implied volatility',
      value:
        'Derived from option prices — a statement about what those prices embed, not a forecast',
    },
    {
      label: 'Agricultural character',
      value:
        'Seasonal by nature — the same market is differently volatile at different points in a crop cycle',
    },
  ],
  sections: [
    {
      id: 'the-measurement-choices',
      heading: 'The measurement choices the figure hides',
      body: [
        {
          type: 'paragraph',
          text: 'Every volatility figure is the answer to a question that includes several parameters, and the figure is reported without them. Anyone comparing volatility across markets, periods, or sources is implicitly assuming those parameters match, and they routinely do not.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'The period',
              description:
                'Over what span the variation is measured. A short window captures recent conditions and responds sharply to them; a long window smooths and lags. Neither is right, and they answer different questions.',
            },
            {
              term: 'The interval',
              description:
                'How frequently the price is sampled. Variation measured between daily observations and between monthly ones are different quantities, and the relationship between them is not a simple conversion.',
            },
            {
              term: 'The method',
              description:
                'How variation is quantified. Different statistical treatments weight extreme movements differently, and a market’s figure can shift substantially with the method alone.',
            },
            {
              term: 'The price series',
              description:
                'Which prices are measured. A benchmark, a cash quotation, an index, and an assessed series can all be described as "the price" and will have different volatility.',
            },
            {
              term: 'Continuity of the series',
              description:
                'Where a series is stitched together from successive contracts, the joins introduce movements that are artefacts of the stitching rather than of the market — a particular hazard for agricultural series spanning harvests.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point is specific to commodities and easy to miss. A continuous price series for a commodity with delivery periods is a construction: each contract expires and the series must move to the next. That transition is a change in what is being measured, and unless handled deliberately it appears in the data as a price movement that no one experienced.',
        },
      ],
    },
    {
      id: 'volatility-is-not-risk',
      heading: 'Volatility is not risk',
      body: [
        {
          type: 'paragraph',
          text: 'Volatility is used so routinely as a proxy for risk that the two words are frequently treated as interchangeable. They are not, and the difference is not academic. Volatility is a measure of variation in a series. Risk is the possibility of an outcome a party cares about — and which outcomes a party cares about depends entirely on the party.',
        },
        {
          type: 'paragraph',
          text: 'The clearest way to see the gap is to notice that volatility counts favourable movement as fully as unfavourable movement, while no party regards a windfall as a risk. A producer’s risk is that prices fall; a processor’s risk is that they rise. The same market, with one volatility figure, presents opposite risks to the two of them, and the figure describes neither. It is symmetric by construction, and risk almost never is.',
        },
        {
          type: 'list',
          items: [
            'Volatility is symmetric; risk is directional and specific to a party’s position',
            'A stable price can be catastrophic — a price stable below a producer’s cost of production carries low volatility and severe risk',
            'A party’s exposure depends on their volume, timing, costs, and contracts, none of which appears in a price series',
            'Volatility says nothing about the level, and a party is exposed to levels rather than to variation',
            'Risks that matter most in agriculture — crop failure, rejection at a border, a buyer defaulting — do not appear in price series at all',
          ],
        },
        {
          type: 'paragraph',
          text: 'The third and fifth points together explain why price volatility is a poor summary of an agricultural party’s situation. The exposures that determine whether a farming or trading business survives are mostly not price variation, and the one that is depends on facts about the business that the price series has never heard of.',
        },
      ],
    },
    {
      id: 'implied-volatility-and-the-forecast-error',
      heading: 'Implied volatility, and the forecast error',
      body: [
        {
          type: 'paragraph',
          text: 'Historical volatility describes prices that occurred. Implied volatility is a different object: a figure derived from the prices of options, representing the variation those prices embed given a pricing model. Because it is derived from instruments referring to a future period, it is frequently described as the market’s forecast of volatility, and this description is loose in ways that matter.',
        },
        {
          type: 'paragraph',
          text: 'An implied figure is a statement about current option prices, read through a model. It depends on the model chosen, and a different model applied to identical option prices gives a different implied figure. It also embeds whatever else those prices contain — the cost of the parties supplying the options bearing risk, the balance of supply and demand for the options themselves, and the market’s conditions at that moment. Calling the result a forecast attributes to expectation a figure that is substantially about the option market’s own mechanics.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No volatility figures, no forecasts',
          text: 'AgricultureID publishes no volatility measures, historical or implied, for any commodity, market, or period, and no forecasts of any kind. This page defines the concept so that a volatility figure obtained elsewhere can be read against its own method, period, and series.',
        },
        {
          type: 'paragraph',
          text: 'Neither kind of volatility predicts. Historical volatility describes what happened, and periods of high variation are followed by periods of high variation often enough to be noticeable and not reliably enough to be depended on. Implied volatility describes what option prices currently embed, which is a fact about prices now. Neither is a statement about what a price will do, and both are routinely read as though they were.',
        },
      ],
    },
  ],
  definition:
    'Price volatility is a computed measure of how much a price varied over a period, symmetric with respect to direction and dependent on the period, sampling interval, method, and price series chosen to measure it. Historical volatility describes prices that occurred; implied volatility is derived from option prices through a model and describes what those prices embed. Neither measures risk, and neither forecasts.',
  usageContext:
    'Market analysis and policy discussion of agricultural commodity markets, where the variability of prices is examined alongside their level — most often in the context of price instability and its consequences for producers and food-importing countries.',
  notToBeConfusedWith: [
    'Risk — volatility measures variation symmetrically; risk is the possibility of outcomes a specific party cares about, and is directional. A price stable below a producer’s cost of production has low volatility and severe risk. The two concepts do not substitute for each other in either direction.',
    'Price direction or level — volatility is indifferent to where a price went and to where it is. A market that fell steadily can be less volatile than one that ended unchanged after violent swings, and the level — which is what parties are actually exposed to — is absent from the measure entirely.',
    'A forecast — historical volatility describes the past. Implied volatility describes what current option prices embed under a model, which is a fact about prices now. Neither is a statement about the future, and describing implied volatility as the market’s expectation attributes to belief a figure that is substantially about option market mechanics.',
    'Uncertainty — uncertainty is not knowing what will happen. Volatility is a measurement of what did happen, or of what option prices embed. A market can be highly uncertain and, so far, quiet.',
    'Liquidity — thin liquidity contributes to sharper price movements, so the two are related, but they measure different things. Volatility measures the price series; liquidity describes the conditions for transacting.',
    'A single number for a market — every volatility figure is the output of a period, interval, method, and series. Two figures for the same market that disagree may both be correct answers to different questions, and comparing them means comparing methods first.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No volatility measures, historical or implied, and no price series are published here for any commodity, market, or period.',
    'Nothing here is a forecast, and nothing here supports making one. Neither historical nor implied volatility predicts future price movement, which is a central point of this page.',
    'This page does not support risk assessment for any party. Volatility is symmetric and impersonal; a party’s exposure depends on their position, volume, timing, costs, and contracts, none of which a price series contains.',
    'Volatility figures obtained elsewhere must be read against their own period, interval, method, and price series, which the figure itself does not disclose.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'green-coffee' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'deferred-pricing' },
    { type: 'market-term', slug: 'hedging' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'market-depth' },
    { type: 'market-term', slug: 'minimum-price' },
    { type: 'market-term', slug: 'price-index' },
    { type: 'market-term', slug: 'speculation' },
    { type: 'market-term', slug: 'stocks-to-use-ratio' },
    { type: 'market-term', slug: 'supply-and-demand-balance-sheet' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Agricultural price instability concepts and its consequences for producers and food-importing countries',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market transparency as a response to price instability in international food commodity markets',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor: 'Agricultural price variability analysis and policy context',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Commodity price variability and its measurement in development context',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Any volatility figure is specific to a price series, a market, a period, and a method, and none generalises to another.',
  limitations: [
    'A definition of a measure, not a measurement of any market’s volatility at any time.',
    'Every figure depends on choices of period, interval, method, and series that the figure does not disclose; figures from different sources are generally not comparable.',
    'Continuous commodity price series are constructions spanning successive delivery periods, and the joins can introduce apparent movements that no participant experienced.',
    'Volatility does not measure risk, does not describe the price level, and does not forecast — three things it is routinely used for.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Price Volatility: Variation Measured, Not Risk',
    description:
      'What price volatility means: a computed measure of how much a price varied, the choices every figure hides, and why it is not risk and not a forecast.',
    keywords: [
      'price volatility',
      'volatility definition',
      'implied volatility',
      'historical volatility',
      'volatility versus risk',
      'agricultural price instability',
    ],
  },
  structuredData: { article: true },
};
