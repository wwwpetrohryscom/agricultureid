import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const minimumPrice: MarketTermContent = {
  id: 'market-term-minimum-price',
  slug: 'minimum-price',
  contentType: 'market-term',
  title: 'Minimum Price',
  alternativeNames: ['Price floor', 'Floor price'],
  category: 'Market term',
  subcategory: 'Price formation',
  marketTermClass: 'price-formation',
  summary:
    'A minimum price is a floor below which a buyer under a given scheme or rule may not pay, regardless of what the market does. It is an obligation created by an instrument, not a price the market formed — and it binds only those the instrument reaches.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Every other price concept on this platform describes something the market produced. A minimum price does not. It is a floor written into an instrument — a certification standard, a piece of legislation, a marketing order, a contract — that obliges a buyer covered by that instrument to pay at least a stated amount, whatever the prevailing market price happens to be. When the market sits above the floor, the floor does nothing. When the market falls below it, the floor becomes the price for those it binds, and the difference between the two is the whole point of its existence.',
    },
    {
      type: 'paragraph',
      text: 'Minimum prices exist because price discovery answers a question about information and not a question about adequacy. A thoroughly discovered price can sit below what it costs a producer to grow the crop, for seasons at a time; discovery makes no promise otherwise. A minimum price is one of the mechanisms devised in response — the Fairtrade Minimum Price is a well-documented example, functioning as a floor within a certification scheme that applies to transactions under that scheme’s terms. Understanding the mechanism means understanding exactly what it obliges, of whom, and where its reach stops.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Price formation — an obligation, not a discovered price',
    },
    {
      label: 'Created by',
      value:
        'An instrument: a certification standard, a regulation, a marketing rule, or a contract',
    },
    {
      label: 'Binds',
      value:
        'Only parties the instrument reaches — never the market as a whole',
    },
    {
      label: 'Operative when',
      value:
        'The market price sits below the floor; above it, the floor has no effect',
    },
    {
      label: 'Set by',
      value:
        'The body that owns the instrument, by its own stated process — not by the market',
    },
    {
      label: 'Usually specified per',
      value:
        'Product, quality, origin, and delivery term — a floor is as specific as the thing it prices',
    },
    {
      label: 'Distinct from',
      value:
        'A premium, which is paid in addition to the price rather than instead of a lower one',
    },
  ],
  sections: [
    {
      id: 'how-a-floor-operates',
      heading: 'How a floor operates',
      body: [
        {
          type: 'paragraph',
          text: 'A minimum price is conditional by construction. It does not set the price; it sets a bound on it. Where the market price is above the floor, transactions proceed at the market price and the instrument is inert — a covered buyer pays what an uncovered buyer pays, and the floor is invisible. Where the market price is below the floor, a covered buyer must pay the floor, and an uncovered buyer need not. The mechanism therefore does nothing at all most of the time and everything at precisely the moments producers are most exposed.',
        },
        {
          type: 'paragraph',
          text: 'This conditionality is frequently misread as weakness. It is the design. A floor that bound at all times would be an administered price and would displace discovery entirely; a floor that binds only below a threshold leaves the market to allocate and price when it is functioning, and intervenes only when the outcome falls below what the instrument’s owner has determined to be acceptable.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'The covered set',
              description:
                'Which buyers, sellers, products, and transactions the instrument reaches. A floor is an obligation, and obligations have boundaries. Outside them it has no force whatsoever.',
            },
            {
              term: 'The specification',
              description:
                'What product, at what quality, from what origin, on what delivery term the floor applies to. A floor for one specification says nothing about another.',
            },
            {
              term: 'The comparison',
              description:
                'Which market figure the floor is tested against. A floor is only operable if the instrument names what "the market price" means for its purposes — often a designated reference or indicator.',
            },
            {
              term: 'The setting process',
              description:
                'How the level is determined and revised, by whom, and on what basis. This is the instrument’s own governance, and it is where the substance of any floor actually lives.',
            },
          ],
        },
      ],
    },
    {
      id: 'scheme-floors-and-public-floors',
      heading: 'Scheme floors and public floors',
      body: [
        {
          type: 'paragraph',
          text: 'Minimum prices arise from two quite different kinds of instrument, and conflating them causes real confusion about what a floor can do. A voluntary scheme floor binds those who have chosen to participate and been certified; its force is contractual and its reach is the scheme’s membership. A statutory floor binds those the law reaches; its force is public and its reach is a jurisdiction.',
        },
        {
          type: 'list',
          items: [
            'A voluntary scheme floor covers only certified transactions under that scheme — an identical lot sold outside the scheme is unaffected',
            'A statutory or marketing-order floor covers what the law defines, regardless of any party’s wish to participate',
            'Scheme floors depend on buyers choosing to buy on scheme terms; a floor cannot compel demand, only the price of demand that materialises',
            'A floor set within a scheme is revised by that scheme’s governance; a statutory floor is revised by the legislative or regulatory process',
            'Both kinds are typically defined per product, quality, and origin, so a single commodity may have many floors that are not comparable with one another',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No levels, and no evaluation',
          text: 'AgricultureID publishes no minimum price levels for any scheme, commodity, quality, or origin, and no historical record of them. Levels are set and revised by the body owning the instrument, and only that body’s current published tables are authoritative. This page also takes no position on whether any floor is adequate, effective, or well set.',
        },
      ],
    },
    {
      id: 'what-a-floor-does-not-do',
      heading: 'What a floor does not do',
      body: [
        {
          type: 'paragraph',
          text: 'The limits of the mechanism follow directly from what it is. A floor is a constraint on the price of a transaction that occurs. It has no purchase on whether the transaction occurs, on how much is bought, or on anything happening outside the instrument’s reach.',
        },
        {
          type: 'paragraph',
          text: 'It therefore does not guarantee a producer an income: income is price multiplied by volume sold, and a floor governs only the first term and only for covered sales. It does not guarantee that a covered producer sells their whole crop on covered terms, and in practice a producer certified under a scheme may sell only part of their output under it. It does not set the market price for anyone else, and it does not prevent the market from moving. And it makes no claim to cover the cost of production for any individual producer — costs differ by farm, and a floor set for a product and origin cannot track them.',
        },
        {
          type: 'paragraph',
          text: 'These are limits on the mechanism, not objections to it. A floor does one thing: it puts a bound on the price of covered transactions when the market falls beneath it. Whether that is valuable depends on questions this page does not attempt to answer.',
        },
      ],
    },
  ],
  definition:
    'A minimum price is a floor, established by a certification scheme, regulation, marketing rule, or contract, below which a buyer covered by that instrument may not pay for a specified product, quality, and origin, irrespective of the prevailing market price. It is an obligation created by an instrument rather than a price produced by a market, and it binds only parties within that instrument’s reach.',
  usageContext:
    'Voluntary sustainability and certification schemes — the Fairtrade Minimum Price being the most documented example — and statutory or marketing-order price floors in some jurisdictions and commodity chains.',
  notToBeConfusedWith: [
    'A premium — a premium is paid in addition to the price, for a stated reason such as quality or scheme participation. A minimum price is paid instead of a lower market price. A floor and a premium can operate on the same transaction, and they do different things: one bounds the price, the other adds to it.',
    'A market price — a floor is not discovered and expresses no aggregation of market information. It is set by a body under its own process. Where the market is above the floor, the market price is what is paid and the floor is inert.',
    'A guaranteed income — a floor governs the price of covered transactions that occur. It does not guarantee that any volume is sold, that a producer’s whole crop is sold on covered terms, or that a producer’s costs are met.',
    'A cost of production — a floor may be set with reference to production costs, but it is not a measurement of them. Costs differ by farm, season, and system; a floor is a single figure for a product and origin.',
    'A reference or indicator price — a floor is often tested against a named reference, but the floor and the reference are different objects. The reference measures the market; the floor obliges a payment.',
    'A price control on the market — a scheme floor binds its members, not the market. An identical lot traded outside the scheme is entirely unaffected, and the existence of a floor does not set anyone else’s price.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No minimum price levels, tables, or historical values are published here for any scheme, commodity, quality, or origin. Levels are set and revised by the instrument’s owner and must be read from that body’s current published documentation.',
    'This page does not reproduce, summarise, or interpret the requirements of any certification standard or regulation, and confers no certification, recognition, or compliance status.',
    'Nothing here evaluates whether any floor is adequate, effective, or well set, or takes a position on price-floor policy. Those are contested questions requiring evidence this page does not present.',
    'Whether a transaction is covered by a floor is a matter for the instrument and, where statutory, the law in force. This page does not determine coverage for any transaction.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'tea-leaf' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'composite-indicator-price' },
    { type: 'market-term', slug: 'premium-and-discount' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'quality-premium' },
    { type: 'market-term', slug: 'reference-price' },
  ],
  sourceReferences: [
    {
      sourceId: 'fairtrade',
      citedFor:
        'The Minimum Price mechanism: a scheme-set floor applying to certified transactions, defined per product, quality, and origin',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural price support and market intervention mechanisms in policy analysis',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Price instability in agricultural commodity chains and the mechanisms devised in response',
    },
    {
      sourceId: 'ico',
      citedFor:
        'Price levels and producer exposure in the coffee sector as context for floor mechanisms',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a mechanism. Scheme floors apply wherever the scheme is operated and a transaction is certified; statutory floors apply within the jurisdiction that enacts them. Levels are set per product, quality, and origin.',
  limitations: [
    'A description of the mechanism, not a statement of any scheme’s or jurisdiction’s floor, requirements, or coverage.',
    'Levels and the processes for setting them are revised by the owning body; nothing here should be treated as current for any scheme.',
    'The effectiveness of price floors is a contested empirical and policy question, and this page neither summarises that evidence nor takes a position.',
    'A floor governs price on covered transactions only; volumes sold on covered terms, and therefore producer income, are outside the mechanism entirely.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Minimum Price: A Floor Created by an Instrument',
    description:
      'What a minimum price is: a floor a scheme or rule obliges covered buyers to pay when the market falls below it, and why it is not a guaranteed income.',
    keywords: [
      'minimum price',
      'price floor',
      'fairtrade minimum price',
      'minimum price definition',
      'agricultural price floor',
    ],
  },
  structuredData: { article: true },
};
