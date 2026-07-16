import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const spread: MarketTermContent = {
  id: 'market-term-spread',
  slug: 'spread',
  contentType: 'market-term',
  title: 'Spread',
  alternativeNames: ['Price spread', 'Differential (between quotations)'],
  category: 'Market term',
  subcategory: 'Price relationship',
  marketTermClass: 'price-relationship',
  summary:
    'A spread is the difference between two prices for related but distinct things — two delivery months, two commodities, two markets, or a bid and an offer. The word names an arithmetic operation, so what any particular spread means depends entirely on what two prices it subtracts.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A spread is a subtraction. Take two prices for things that are related but not identical, subtract one from the other, and the result is a spread. That is the whole of the definition, and it is why the term is used so widely and understood so unevenly: "spread" tells you an operation was performed, not what was operated on. A calendar spread, a quality spread, and a bid–offer spread are all spreads, and they describe completely different economic phenomena.',
    },
    {
      type: 'paragraph',
      text: 'What makes spreads analytically useful is that subtracting two related prices cancels what they have in common and isolates what they do not. Two delivery months of the same contract share everything about the commodity; the difference between them therefore cannot be about the commodity, and must be about time — about the cost and value of holding it from one month to the other. This cancellation property is why spreads are the natural vocabulary for talking about relationships in a market, and why they are read differently from prices.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Price relationship — an operation, not a specific quantity',
    },
    {
      label: 'Construction',
      value: 'One price minus another, for related but distinct things',
    },
    {
      label: 'What it isolates',
      value:
        'Whatever the two prices do not share — time, quality, location, market, or transaction side',
    },
    {
      label: 'Main kinds',
      value:
        'Calendar (time), inter-commodity, inter-market, quality, and bid–offer',
    },
    {
      label: 'Not a price',
      value:
        'A spread cannot be paid; it is the gap between two things that can be',
    },
    {
      label: 'Sign matters',
      value:
        'A spread is meaningless without knowing which price was subtracted from which',
    },
    {
      label: 'Frequently confused with',
      value:
        'Basis, which compares a physical cash price with a reference rather than two quotations',
    },
  ],
  sections: [
    {
      id: 'the-kinds-of-spread',
      heading: 'The kinds of spread',
      body: [
        {
          type: 'paragraph',
          text: 'Because a spread is defined by its operands, the useful taxonomy is by what the two prices differ in. Each kind isolates a different variable, and each is read against a different logic. Treating them as one concept is the source of most confusion about the term.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Calendar spread',
              description:
                'Two delivery periods of the same contract. Isolates time: the relationship reflects the cost and value of carrying the commodity between the two periods, and is the structure that contango and backwardation describe.',
            },
            {
              term: 'Inter-commodity spread',
              description:
                'Two different but economically linked commodities — substitutes in a feed ration, or a raw material and its product. Isolates the linkage between them, and is only meaningful where a real substitution or transformation relationship exists.',
            },
            {
              term: 'Inter-market spread',
              description:
                'The same or a comparable commodity quoted in two markets or origins. Isolates location and origin, and is closely related to what an origin differential expresses.',
            },
            {
              term: 'Quality spread',
              description:
                'Two qualities or grades of the same commodity. Isolates the market’s valuation of the quality difference, and is closely related to a quality premium.',
            },
            {
              term: 'Bid–offer spread',
              description:
                'The gap between the best price a buyer will pay and the best a seller will accept, at one moment, for one thing. Isolates nothing about the commodity at all — it is a property of the market’s trading conditions, and belongs to a different discussion entirely.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The bid–offer spread deserves separating out, because it is the odd one. The other four compare prices for different objects. The bid–offer spread compares two prices for the same object, differing only in which side of the transaction they are on, and it is therefore a measure of the market’s trading condition rather than of any economic relationship between goods.',
        },
      ],
    },
    {
      id: 'why-cancellation-matters',
      heading: 'Why cancellation is the point',
      body: [
        {
          type: 'paragraph',
          text: 'The reason to look at a spread rather than at its two components is that a spread removes a shared influence. If a broad shift moves an entire market, it moves both legs of a calendar spread together and largely cancels out — so the spread is a cleaner view of the time relationship than either leg alone. This is the analytical function of the concept, and it holds regardless of which kind of spread is being considered.',
        },
        {
          type: 'paragraph',
          text: 'The cancellation is only as clean as the relatedness of the two legs. Two months of the same contract share almost everything, so the cancellation is nearly complete and the residual is genuinely about time. Two different commodities share much less, so an inter-commodity spread cancels only what they have in common and leaves a residual containing everything else that distinguishes them — which may be a great deal. The looser the relationship, the less a spread isolates and the more it simply subtracts two numbers that happened to be to hand.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No widths, no levels, no views',
          text: 'AgricultureID publishes no spread widths, no historical spread series, and no assessment of whether any spread is wide, narrow, normal, or unusual. This page defines the operation so that a spread figure obtained elsewhere can be read for what it is. It describes no spread strategy and recommends nothing.',
        },
      ],
    },
    {
      id: 'reading-a-spread-quotation',
      heading: 'Reading a spread quotation',
      body: [
        {
          type: 'paragraph',
          text: 'A quoted spread is uninterpretable without its construction. The number carries no record of what was subtracted from what, and the same market relationship can be quoted as a positive or a negative figure depending purely on convention.',
        },
        {
          type: 'list',
          items: [
            'Which two legs, exactly — which contracts, months, markets, qualities, or origins',
            'The direction of the subtraction, and the convention the quoting source uses for the sign',
            'Whether both legs are quoted in the same unit and currency; a spread between prices in different units is not a spread but an error',
            'Whether both legs are the same kind of price — subtracting an assessed value from a transacted price mixes two kinds of fact',
            'The moment both legs were observed; legs read at different times contain a time difference that the spread silently absorbs',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last of these is a persistent and quiet source of error. A spread is only about the difference between its legs if the legs are contemporaneous. Two prices observed hours apart in a moving market produce a spread that contains the market’s movement in that interval, attributed to whatever the spread was supposed to be isolating.',
        },
      ],
    },
  ],
  definition:
    'A spread is the difference between two prices for related but distinct things — two delivery periods, two commodities, two markets, two qualities, or the bid and offer for a single object. It is an arithmetic operation rather than a quantity of its own, and its meaning derives entirely from which two prices it subtracts and in which direction.',
  usageContext:
    'Exchange-traded and physical commodity markets, and market analysis generally, where relationships between prices are examined by removing what the prices have in common in order to isolate what they do not.',
  notToBeConfusedWith: [
    'Basis — a basis compares a physical cash price with a named futures or reference price: paper against physical. A spread compares two prices of the same kind. This is the single most frequent confusion involving the term, and the distinction is not stylistic — a basis contains delivery-point and quality differences that a calendar spread cancels out entirely.',
    'A price — a spread cannot be transacted as such, cannot be paid, and cannot be delivered. Executing a spread means transacting both legs; the spread itself is the arithmetic relationship between them.',
    'Margin, in the profit sense — a processing spread describes a relationship between quoted prices for a raw material and its products. A processor’s actual margin depends on their own yields, conversion costs, contracts, and timing, none of which a spread of quotations contains.',
    'A bid–offer spread — this is a property of trading conditions at a moment, not an economic relationship between goods. It compares two prices for the same object differing only in transaction side, and belongs with liquidity and market depth rather than with price relationships.',
    'Contango and backwardation — these name the shape a calendar spread structure takes across delivery periods. A calendar spread is the measurement; contango and backwardation are the descriptions of what the measurements show.',
    'A quality premium or origin differential — these are specific named relationships with their own commercial logic and their own conventions. A quality or inter-market spread is the arithmetic; the premium or differential is what the trade calls the thing being measured.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No spread widths, levels, ranges, or historical series are published here for any commodity, contract pair, or market pair.',
    'This page does not describe spread trading, does not explain how to establish or manage a spread position, and does not recommend any spread or any market. Spread positions carry risk and are a regulated activity in most jurisdictions.',
    'Nothing here supports a judgement that a spread is wide, narrow, normal, or mispriced. Such judgements require the specific market, contract, and moment.',
    'Sign conventions for quoted spreads differ by market and by reporting source; a spread from one source is not comparable with one from another without reconciling both conventions.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'crush-spread' },
    { type: 'market-term', slug: 'freight-parity' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'market-depth' },
    { type: 'market-term', slug: 'origin-differential' },
    { type: 'market-term', slug: 'premium-and-discount' },
    { type: 'market-term', slug: 'quality-premium' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of price relationships between commodities, markets, and delivery periods',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain and oilseed market structure, including relationships between origins and delivery periods',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural commodity market functioning and inter-market price relationships',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Which spreads are conventionally quoted, and with what sign, unit, and legs, is market-specific.',
  limitations: [
    'A definition of an operation, not a description of any market’s spread relationships or conventions.',
    'A spread isolates a variable only to the extent its two legs are genuinely related; loosely related legs leave a residual containing much more than the intended variable.',
    'Quoted spreads carry no record of their construction; sign, legs, units, and observation timing must all come from the quoting source.',
    'Processing and inter-commodity spreads describe relationships between quotations and cannot be read as any operator’s margin.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Spread: An Operation on Two Prices, Not a Quantity',
    description:
      'What a spread means: the difference between two related prices, the main kinds — calendar, inter-commodity, inter-market, bid–offer — and why it is not a basis.',
    keywords: [
      'spread',
      'price spread',
      'calendar spread',
      'spread definition',
      'basis versus spread',
      'commodity spread',
    ],
  },
  structuredData: { article: true },
};
