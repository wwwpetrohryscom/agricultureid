import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const speculation: MarketTermContent = {
  id: 'market-term-speculation',
  slug: 'speculation',
  contentType: 'market-term',
  title: 'Speculation',
  alternativeNames: ['Position-taking', 'Risk assumption'],
  category: 'Market term',
  subcategory: 'Risk transfer',
  marketTermClass: 'risk-transfer',
  summary:
    'Speculation is taking a market position without holding an underlying exposure to offset — accepting price risk in order to profit from price movement. It is the structural counterpart of hedging: a hedger transfers risk, and someone must be there to receive it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hedging transfers risk. That phrase contains an implication that is easy to skip past: transferred risk does not evaporate, and it has to go somewhere. When a producer offsets their exposure to a falling price, some other party has taken the other side and now holds that exposure. If that party has no offsetting physical exposure of their own — if they are not a processor who wanted the opposite position anyway — then they have accepted risk in exchange for the prospect of gain. That is speculation.',
    },
    {
      type: 'paragraph',
      text: 'The term carries heavy connotations, and it is worth setting them aside to see the structure clearly. Analytically, speculation is defined by the absence of a prior exposure and by nothing else. It is the exact complement of hedging: both parties may transact the identical instrument in the identical market, and what distinguishes them is what each already held. Neither the size of a position, nor the venue, nor the party’s identity, nor the outcome enters the definition.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Risk transfer — the assumption of exposure without a prior one',
    },
    {
      label: 'Defined by',
      value: 'The absence of an underlying exposure to offset',
    },
    {
      label: 'Structural role',
      value:
        'The counterpart of hedging — someone must receive transferred risk',
    },
    {
      label: 'Not defined by',
      value: 'Instrument, venue, size, party type, motive, or outcome',
    },
    {
      label: 'Relationship to liquidity',
      value:
        'Parties willing to take the other side without a physical need are part of what makes markets tradable',
    },
    {
      label: 'Contested',
      value:
        'Its effects on price levels and volatility are a genuine and unsettled empirical debate',
    },
    {
      label: 'Regulated',
      value:
        'Participation is a regulated activity in most jurisdictions, with limits in some markets',
    },
  ],
  sections: [
    {
      id: 'the-structural-complement',
      heading: 'The structural complement of hedging',
      body: [
        {
          type: 'paragraph',
          text: 'The clearest way to see what speculation is is to follow the risk. A market in which every participant wished to transfer the same exposure in the same direction would not function: everyone would want to sell price risk and nobody would take it. For a hedger to offset an exposure, a counterparty must accept it — either another physical party with the opposite exposure, or a party with no exposure at all who is willing to take it on.',
        },
        {
          type: 'paragraph',
          text: 'Agricultural markets have a structural reason why physical parties alone cannot always clear this. Exposures are seasonal and directional: at harvest, a great many producers want to transfer the same exposure in the same direction at the same moment, and the processors and merchants who might take the other side do not have needs that scale with the harvest week by week. The imbalance is real, and the parties who absorb it are, by definition, taking positions without offsetting exposures.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'A hedger',
              description:
                'Holds an exposure from their business and takes a position against it. Their objective is to reduce dependence on price movement. Their prior exposure is what defines them.',
            },
            {
              term: 'A speculator',
              description:
                'Holds no such exposure and takes a position anyway. Their objective is gain from price movement. The absence of a prior exposure is what defines them.',
            },
            {
              term: 'The same transaction',
              description:
                'May be either, depending on the party. A transaction record shows what was done, never why or against what, and therefore cannot classify the activity at all.',
            },
          ],
        },
      ],
    },
    {
      id: 'what-the-definition-excludes',
      heading: 'What the definition deliberately excludes',
      body: [
        {
          type: 'paragraph',
          text: 'A great deal of loose usage attaches "speculation" to things that are not part of the definition, and the resulting confusion is not merely terminological — it makes discussions about market policy incoherent, because the participants are not talking about the same category.',
        },
        {
          type: 'list',
          items: [
            'Size is not the criterion — a large position taken against a large physical exposure is a hedge; a small position taken without one is speculation',
            'Party type is not the criterion — a farming business taking a position beyond its actual crop is speculating in that excess, and a financial institution taking positions against its own genuine exposures is not',
            'Holding period is not the criterion — a position held for years without an underlying exposure is speculation; one held for minutes against a genuine exposure is not',
            'Motive beyond the definition is not the criterion — believing a price is wrong, or wanting income, are reasons for speculating, not additional tests',
            'The outcome is not the criterion — a speculator who loses money speculated, and a hedger who gains on their offsetting leg hedged',
            'Physical involvement is not the criterion — a merchant holding unhedged stock in the expectation of a price rise is speculating on that stock, however physical their business',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last is worth dwelling on, because it cuts against intuition. A party deeply embedded in the physical trade who holds more inventory than their operations require, because they believe prices will rise, is taking a position without an offsetting exposure. That is speculation on the definition, and calling it something else because the party owns a warehouse does not change what they are doing.',
        },
      ],
    },
    {
      id: 'the-contested-question',
      heading: 'The contested question, and what this page will not do',
      body: [
        {
          type: 'paragraph',
          text: 'Whether speculative activity raises price levels, increases volatility, improves or degrades price discovery, or affects food prices is a live and genuinely unsettled empirical question. It has been studied extensively, the findings differ by market, period, commodity, and method, and researchers of good faith disagree. It is also politically consequential, which does not make it easier to settle.',
        },
        {
          type: 'paragraph',
          text: 'AgricultureID takes no position on it. That is not editorial timidity but a recognition of what a definitional reference page can honestly do. Asserting that speculation stabilises markets, or that it destabilises them, would be presenting a contested empirical conclusion as though it were part of the meaning of a word. Both claims are advanced by serious people, and neither belongs in a definition.',
        },
        {
          type: 'paragraph',
          text: 'What can be said without controversy is structural. Parties willing to take positions without physical exposures contribute to the pool of participants willing to transact, which is one of the conditions liquidity rests on. That is a statement about market mechanics rather than a verdict on outcomes, and it is compatible with either side of the empirical debate. A reader who wants that debate needs the research literature, not a glossary.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No view, no data, no advice',
          text: 'This page takes no position on the effects of speculation, publishes no data about speculative activity in any market, and offers no view on the policy question. It also does not describe how to speculate, identifies no instrument or venue, and recommends nothing. Speculation involves the risk of loss and is a regulated activity in most jurisdictions.',
        },
      ],
    },
  ],
  definition:
    'Speculation is the taking of a market position without an underlying exposure to offset, accepting price risk in the expectation of gain from price movement. It is defined solely by the absence of a prior exposure — not by the instrument, venue, size, holding period, party type, or outcome — and it is the structural counterpart of hedging, since transferred risk must be received by someone.',
  usageContext:
    'Market structure analysis of commodity markets, describing the parties who accept price risk that physical participants wish to transfer, and the mechanics by which risk transfer clears.',
  notToBeConfusedWith: [
    'Hedging — the distinction is the prior exposure and nothing else. A hedger holds an exposure and offsets it; a speculator holds none and takes a position. The same transaction, in the same market, at the same size, is one or the other depending entirely on the party, and no transaction record can tell them apart.',
    'Gambling — speculation involves an exposure to a market whose price reflects real economic conditions, and it performs a structural function by absorbing risk others wish to transfer. That it can be done recklessly is a fact about parties, not about the category. This page draws no moral conclusion in either direction.',
    'Investment — the distinction is conventional rather than sharp, and usually concerns holding period and whether the position generates a return independent of price movement. Nothing in a commodity market resolves it cleanly, and little rests on the label.',
    'Market manipulation — manipulation is conduct intended to distort a price, and is unlawful in most jurisdictions. Speculation is taking a position on a price. The two are entirely different: one is a category of market participation, the other is an offence.',
    'A financial participant — party type is not the criterion. A commercial firm taking positions beyond its exposures is speculating in that excess; a financial firm offsetting its own genuine exposures is not. The category follows the exposure, not the letterhead.',
    'Large positions — size does not enter the definition. A large hedge remains a hedge, and a small position without an underlying exposure remains speculation.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'This page does not describe how to speculate, identifies no instrument, venue, or technique, and recommends nothing. It is not investment, trading, or financial advice in any respect.',
    'Speculation involves the risk of loss, which may exceed any collateral initially committed depending on the instrument. It is a regulated activity in most jurisdictions, with participation requirements and, in some markets, position limits.',
    'AgricultureID takes no position on whether speculation raises prices, increases volatility, or affects food security. The empirical evidence is contested, differs by market and method, and a definitional page cannot and should not settle it.',
    'No data on speculative activity, positioning, or participation is published here for any market or period.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'green-coffee' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'hedging' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'market-depth' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-volatility' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of participation and risk transfer in agricultural futures markets',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural commodity market functioning, participation, and the policy debate on market participants',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Commodity price volatility context and the range of positions in the research literature',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market transparency initiatives addressing information gaps in international commodity markets',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Regulatory treatment, participation requirements, and position limits are jurisdiction- and market-specific.',
  limitations: [
    'A definition of a category, not a description of any market’s participants or an assessment of their activity.',
    'The effects of speculation on prices and volatility are contested in the research literature; this page deliberately takes no position and does not summarise the evidence.',
    'The category cannot be identified from transaction records, since it depends on a party’s prior exposures rather than on what they transacted.',
    'The boundary with investment is conventional rather than principled, and nothing in the concept resolves it.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Speculation: Defined by the Absence of an Exposure',
    description:
      'What speculation means in commodity markets: taking a position without an underlying exposure, and why it is the structural counterpart of hedging.',
    keywords: [
      'speculation',
      'speculation definition',
      'hedging versus speculation',
      'commodity speculation',
      'risk assumption',
    ],
  },
  structuredData: { article: true },
};
