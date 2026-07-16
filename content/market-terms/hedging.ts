import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const hedging: MarketTermContent = {
  id: 'market-term-hedging',
  slug: 'hedging',
  contentType: 'market-term',
  title: 'Hedging',
  alternativeNames: ['Risk transfer', 'Price risk management'],
  category: 'Market term',
  subcategory: 'Risk transfer',
  marketTermClass: 'risk-transfer',
  summary:
    'Hedging is taking a market position intended to offset an exposure a party already has, so that a loss on one is met by a gain on the other. It is defined by the purpose and by the pre-existing exposure — not by the instrument used, and not by whether it turns out well.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A party in the physical commodity trade holds an exposure whether they want one or not. A farmer with a growing crop is exposed to what that crop will be worth at harvest. A miller with forward flour commitments is exposed to what wheat will cost when they must buy it. A merchant holding stock is exposed to what it is worth while they hold it. None of these parties chose the exposure as a position; it is a by-product of doing the business they are in.',
    },
    {
      type: 'paragraph',
      text: 'Hedging is taking a second position, deliberately, whose value moves opposite to the first. If the crop’s value falls, the hedge gains; if the wheat’s cost rises, the hedge gains. The two exposures offset, and the party’s outcome depends less on where the market went. What defines the activity is not what instrument was used but that a prior exposure existed and that the new position was taken against it. Take away the prior exposure and the identical transaction is not a hedge at all — it is simply a position.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Risk transfer — defined by purpose and by a pre-existing exposure',
    },
    {
      label: 'Requires',
      value:
        'An exposure that already exists, arising from the party’s actual business',
    },
    {
      label: 'Mechanism',
      value: 'A second position whose value moves opposite to the first',
    },
    {
      label: 'What it does',
      value:
        'Substitutes one set of exposures for another — it does not remove risk',
    },
    {
      label: 'What it gives up',
      value:
        'Favourable movement, symmetrically with the unfavourable movement it offsets',
    },
    {
      label: 'Residual exposure',
      value: 'Basis risk — the two positions rarely correspond exactly',
    },
    {
      label: 'Not defined by',
      value: 'The instrument, the venue, or the outcome',
    },
  ],
  sections: [
    {
      id: 'the-prior-exposure-is-the-definition',
      heading: 'The prior exposure is the definition',
      body: [
        {
          type: 'paragraph',
          text: 'The distinction between hedging and any other market activity is not in what is transacted. The same instrument, in the same market, on the same day, at the same size, is a hedge for one party and not for another, and the difference is entirely in what each already held. This is why hedging cannot be identified from a transaction record and why the question "is this a hedge?" is always a question about the party, not about the trade.',
        },
        {
          type: 'paragraph',
          text: 'The prior exposure must also be genuine and must actually correspond. A party who holds an exposure to one thing and takes an offsetting position in a different thing has not necessarily hedged; they may have replaced one exposure with two. The correspondence between the exposure and the offset is what makes the offset work, and the degree of correspondence is variable rather than binary.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'The underlying exposure',
              description:
                'What the party is already exposed to by virtue of their business: a crop growing, stock held, a purchase commitment, a sale commitment. It exists whether or not anything is done about it.',
            },
            {
              term: 'The offsetting position',
              description:
                'A position deliberately taken so that its value moves opposite to the underlying exposure. It is an addition to the party’s positions, not a removal of one.',
            },
            {
              term: 'Correspondence',
              description:
                'How closely the offset tracks the exposure — in commodity, quality, quantity, location, and timing. Perfect correspondence is rare, and every imperfection remains as exposure.',
            },
            {
              term: 'Basis risk',
              description:
                'The residual exposure arising from imperfect correspondence. It is the specific and irreducible cost of hedging a particular physical thing with a standardised instrument.',
            },
          ],
        },
      ],
    },
    {
      id: 'what-hedging-does-not-do',
      heading: 'What hedging does not do',
      body: [
        {
          type: 'paragraph',
          text: 'Hedging is widely described as removing or eliminating risk. It does neither, and the accurate description is more useful: it exchanges one exposure for a different, usually smaller and differently shaped, set of exposures. Every one of the following is a consequence of what hedging structurally is, and none of them is a criticism of it.',
        },
        {
          type: 'list',
          items: [
            'It gives up favourable movement — the offset works in both directions, so a party protected from an adverse move is equally prevented from benefiting from a favourable one',
            'It leaves basis risk — the offset corresponds imperfectly to the exposure, and the difference remains as exposure',
            'It creates cash-timing exposure — an offset requiring collateral generates cash movements throughout its life, on a timetable unrelated to when the physical business generates cash',
            'It can create quantity risk — a producer who offsets against an expected crop and then harvests less than expected is offset against production that does not exist',
            'It introduces counterparty or clearing exposure that did not previously exist',
            'It has costs — transaction costs, collateral costs, and the operational cost of running the arrangement at all',
          ],
        },
        {
          type: 'paragraph',
          text: 'The quantity point is the one most specific to agriculture and most easily overlooked. A financial hedger generally knows the size of their exposure. A producer does not: the crop is an estimate until it is harvested, and the estimate is least reliable in exactly the seasons — droughts, floods, disease years — when prices move most. An offset sized to an expected harvest that does not arrive is not a hedge of anything, and the party discovers this at the point of maximum stress.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This is not hedging advice, and cannot be',
          text: 'AgricultureID does not advise on hedging, does not describe how to construct a hedge, does not identify instruments or venues, and offers no view on whether any party should hedge anything. Hedging involves risk, including the risk of loss, and in most jurisdictions the activity and the advice about it are regulated. Anyone considering it needs advice from someone who knows their business, which this page is not.',
        },
      ],
    },
    {
      id: 'why-the-outcome-does-not-define-it',
      heading: 'Why the outcome does not define it',
      body: [
        {
          type: 'paragraph',
          text: 'A hedge that offsets an exposure will, roughly half the time, have lost money in isolation — because the market went the way the party would have preferred, and the offset gave that benefit up. Looking at the offsetting position alone and observing a loss is meaningless: that loss is the mirror of a gain on the underlying exposure, and the two were always meant to be read together.',
        },
        {
          type: 'paragraph',
          text: 'This matters because it is the source of a persistent and damaging misunderstanding. A party who judges a hedge by whether the offsetting position made money has not understood what they did; they have set out to reduce their dependence on the market’s direction and then evaluated the result by the market’s direction. Whether a hedge worked is a question about the combined outcome and about whether the exposure was actually offset — not about whether either leg, considered alone, was profitable.',
        },
        {
          type: 'paragraph',
          text: 'The same logic explains why a party cannot "hedge better" by removing the offset when they think the market will move in their favour. A party who does that has stopped hedging and started taking a view, and the fact that the position began as a hedge does not make it one afterwards. The purpose is what defines the activity, and the purpose can be abandoned.',
        },
      ],
    },
  ],
  definition:
    'Hedging is the taking of a market position intended to offset an exposure the party already holds by virtue of their business, so that adverse movement in one is met by favourable movement in the other. It is defined by the pre-existing exposure and the offsetting purpose rather than by the instrument, the venue, or the outcome, and it substitutes a different set of exposures rather than removing risk.',
  usageContext:
    'Physical commodity businesses — producers, merchants, processors, and importers — who hold price exposure as a by-product of their operations and may take offsetting positions against it.',
  notToBeConfusedWith: [
    'Speculation — the distinction is the prior exposure, not the instrument, the venue, or the size. A hedger holds an exposure and takes a position against it; a speculator takes a position without one. The identical transaction is a hedge for one party and speculation for another, and the transaction record cannot tell them apart.',
    'Eliminating risk — hedging substitutes exposures. It gives up favourable movement, leaves basis risk, may create quantity and cash-timing exposure, and introduces counterparty exposure. A hedged party is differently exposed, not unexposed.',
    'A guaranteed price — an offset does not guarantee an outcome. Basis moves, quantities differ from expectations, and correspondence is imperfect. The combined result is more predictable than the unhedged one, not fixed.',
    'Futures — futures are one instrument through which an offset might be constructed. Hedging does not require futures, and holding futures is not hedging. Confusing a purpose with an instrument is the most common error about this term.',
    'Forward selling — selling a crop forward changes what a producer is exposed to, and it may offset price exposure while creating an obligation to deliver a crop that may not materialise. Whether it constitutes a hedge depends on the exposure it is set against, not on the fact that a price was fixed.',
    'A profitable position — a hedge that offsets successfully will often show a loss on the offsetting leg, mirroring a gain on the underlying exposure. Judging a hedge by the offsetting leg alone inverts the whole logic of the activity.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'This is not hedging, investment, or trading advice, and must not be used as any. It describes what the term means; it does not describe how to hedge, what to hedge with, when, or whether.',
    'No instruments, venues, ratios, sizes, or techniques are identified or recommended here, for any party or commodity.',
    'Hedging involves risk, including the risk of loss, and can increase exposure where the offset corresponds poorly, where quantity is uncertain, or where collateral demands arise on a timetable the business cannot meet.',
    'Hedging activity and advice about it are regulated in most jurisdictions. Anyone considering it requires advice from a qualified adviser with knowledge of their specific business, exposures, and jurisdiction.',
    'Accounting and tax treatment of hedging differs by jurisdiction and by whether an arrangement qualifies as a hedge under the applicable rules — a determination this page does not address and cannot make.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'green-coffee' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'crush-spread' },
    { type: 'market-term', slug: 'deferred-pricing' },
    { type: 'market-term', slug: 'forward-contract' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'speculation' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of price risk and risk-management arrangements in agriculture',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural risk management concepts and the role of market instruments',
    },
    {
      sourceId: 'fao',
      citedFor: 'Price risk exposure in agricultural commodity chains',
    },
    {
      sourceId: 'worldbank',
      citedFor:
        'Commodity price risk and risk-transfer mechanisms in developing-country agriculture',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Availability of instruments, regulatory treatment, accounting treatment, and the practicality of offsetting differ enormously by jurisdiction and by the party’s scale and access.',
  limitations: [
    'A definition of a concept, not a description of how to hedge, with what, or whether to.',
    'Whether an exposure can be offset at all depends on instruments existing that correspond to it; for many agricultural commodities and many parties, they do not.',
    'Basis risk, quantity risk, and cash-timing exposure are inherent and cannot be eliminated by any construction; they can only be understood and borne.',
    'Regulatory, accounting, and tax treatment are jurisdiction-specific and outside this page’s scope entirely.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Hedging: Defined by the Exposure, Not the Instrument',
    description:
      'What hedging means: taking an offsetting position against an exposure already held, and why it substitutes risk rather than removing it.',
    keywords: [
      'hedging',
      'price risk management',
      'hedging definition',
      'basis risk',
      'hedging versus speculation',
      'risk transfer',
    ],
  },
  structuredData: { article: true },
};
