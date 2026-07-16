import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const cashMarket: MarketTermContent = {
  id: 'market-term-cash-market',
  slug: 'cash-market',
  contentType: 'market-term',
  title: 'Cash Market',
  alternativeNames: ['Physical market', 'Actuals market'],
  category: 'Market term',
  subcategory: 'Market structure',
  marketTermClass: 'market-structure',
  summary:
    'The cash market is where physical commodities are actually bought and sold — real lots, at real places, changing hands between parties who want the goods. It is not one market but a vast set of local ones, which is why it has no single price and no single venue.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The cash market is the market in the commodity itself, as distinct from the market in contracts about it. When a farmer sells grain to an elevator, when an elevator sells to a processor, when an exporter sells a cargo to an importer — those are cash market transactions. The goods exist, they move, and someone takes them because they want them. Everything else in commodity markets ultimately refers back to this, because it is the only part where the commodity is actually consumed.',
    },
    {
      type: 'paragraph',
      text: 'Its defining structural feature is fragmentation, and this is not a deficiency to be overcome but a consequence of physicality. A tonne of maize in one country elevator is not interchangeable with a tonne in another five hundred kilometres away, because moving one to the other costs money and takes time. Physical commodities are therefore local objects, and the cash market is correspondingly local — thousands of separate transactions at thousands of separate points, each with its own price, loosely tied to the others by the cost of transport and by whatever reference the trade has agreed to quote against.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market structure — the market in physical goods',
    },
    {
      label: 'What is traded',
      value:
        'Actual lots of the commodity, at actual locations, with actual quality',
    },
    {
      label: 'Venue',
      value: 'No single venue — bilateral transactions across the whole chain',
    },
    {
      label: 'Fragmentation',
      value:
        'Structural, arising from the cost of moving physical goods between locations',
    },
    {
      label: 'Price',
      value:
        'Many simultaneous prices, one per location, quality, and delivery term',
    },
    {
      label: 'Relationship to futures',
      value:
        'The cash market is what a futures contract’s delivery mechanism tethers to; the gap between them is basis',
    },
    {
      label: 'Transparency',
      value:
        'Uneven — much of it is bilateral and unobserved, which is why market reporting exists',
    },
  ],
  sections: [
    {
      id: 'the-cash-market-is-many-markets',
      heading: 'The cash market is many markets',
      body: [
        {
          type: 'paragraph',
          text: 'Speaking of "the cash market" as a single thing is a convenience that conceals its structure. What exists is a layered set of local markets, each with its own participants, its own balance of supply and demand, and its own price, connected to the others by the possibility of moving goods between them.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'The farm gate',
              description:
                'Where producers sell. Often the least competitive layer, because a producer’s realistic set of buyers is bounded by what it costs them to reach one, which can be very few.',
            },
            {
              term: 'The assembly layer',
              description:
                'Elevators, collectors, and cooperatives aggregating many small lots into commercial parcels. This is where fragmentation is first reduced and where lots typically lose their individual identity to commingling.',
            },
            {
              term: 'The merchant layer',
              description:
                'Parties who move commodities between locations and over time. They connect local markets to each other, and their activity is what makes parity relationships bind.',
            },
            {
              term: 'The processing and consumption layer',
              description:
                'Buyers who want the commodity for what it does — millers, crushers, roasters, feeders. Their specifications are where quality attributes acquire value.',
            },
            {
              term: 'The international layer',
              description:
                'Cargoes moving between origins and destinations, on terms allocating cost and risk between exporter and importer.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'A price exists at each of these layers and at each location within them, and the differences between them are not error. They are the cost of assembly, transport, storage, and risk-bearing, plus whatever margin the parties at each layer command given how much competition they face. The whole structure is the cash market, and none of its prices is more the price than any other.',
        },
      ],
    },
    {
      id: 'transparency-and-its-absence',
      heading: 'Transparency and its absence',
      body: [
        {
          type: 'paragraph',
          text: 'Cash market transactions are private. When two parties agree a lot at a price, that fact is known to them and to nobody else. This is the opposite of an organised exchange, where transacting is inherently public, and it means the cash market — the part where the commodity actually changes hands — is structurally the least observable part of the system.',
        },
        {
          type: 'paragraph',
          text: 'Market reporting exists to address this. Public authorities and reporting services collect transaction information and publish it in specified form, so that participants who were not party to a transaction can nonetheless learn what it was. This reporting is what allows a producer to know roughly what their crop is worth without conducting an auction, and it is why price reporting is treated as market infrastructure rather than as a commercial convenience.',
        },
        {
          type: 'list',
          items: [
            'Reported cash prices cover what was collected, not everything that transacted; coverage varies by market and by location',
            'Where transactions are too few to observe, a reporting service may publish an assessed value rather than an observed price — a different kind of fact',
            'Bilateral terms that accompany a price — adjustments, delivery obligations, credit — are frequently not reported, so the reported number is not the whole deal',
            'The layers with least transparency tend to be those with least competition, which compounds the problem for the parties least able to bear it',
            'A reported price is a description of transactions that occurred; it is not an offer, and no party is obliged to transact at it',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'AgricultureID reports no cash prices',
          text: 'This platform publishes no cash market prices, no quotations, and no price series for any commodity or location. This page describes what the cash market is so that price information obtained from a reporting service or authority can be read against its own stated coverage and methodology.',
        },
      ],
    },
    {
      id: 'the-tether-to-the-contract-market',
      heading: 'The tether to the contract market',
      body: [
        {
          type: 'paragraph',
          text: 'The cash market and the futures market are frequently discussed as if they were parallel worlds, one physical and one financial. They are not parallel; they are joined, and the joint is the delivery mechanism. Because a futures contract can be settled by delivering the physical commodity at a designated point, the futures price cannot wander freely away from what the physical commodity is actually worth at that point as the contract approaches its term.',
        },
        {
          type: 'paragraph',
          text: 'This tether runs in one direction that is worth being clear about. The physical market is what the contract refers to, and the possibility of delivery is what disciplines the contract price. The contract market in turn provides the physical trade with a common reference to quote against — so the influence is mutual, but the anchoring is physical. A futures contract with no credible delivery mechanism would be a number about nothing; a cash market with no futures reference would still be a market in a commodity people eat.',
        },
      ],
    },
  ],
  definition:
    'The cash market is the market in physical commodities themselves — actual lots, of actual quality, at actual locations, transacted between parties who want the goods. It is structurally fragmented into many local markets connected by transport costs, has no single venue and no single price, and is the physical reality that a futures contract’s delivery mechanism tethers to.',
  usageContext:
    'Physical commodity trade at every layer from farm gate to international cargo, and market analysis distinguishing transactions in the commodity from transactions in contracts about it.',
  notToBeConfusedWith: [
    'The futures market — the futures market trades standardised contracts; the cash market trades the commodity. They are joined by the delivery mechanism and separated by basis. A price in one is not a price in the other, and the difference is structural rather than a lag or an error.',
    'The spot market — spot refers to prompt delivery specifically. The cash market includes prompt transactions and forward ones: a forward contract for physical delivery in three months is a cash market transaction, and it is not a spot transaction. The cash market is defined by trading goods, not by timing.',
    'A single market with a single price — the cash market is thousands of local markets. Any statement about "the cash price" of a commodity is a statement about one location, quality, and delivery term, and the differences between locations are the market’s structure rather than noise in it.',
    'The physical delivery of futures — futures delivery is a mechanism of the contract market that touches the physical commodity at designated points under contract rules. Most cash market activity has no connection to any futures delivery, and most futures positions never reach delivery.',
    'A reported cash price — reporting describes transactions that occurred, with whatever coverage the reporter achieved. The cash market is the transactions; the reported price is an observation of some of them, and the gap between the two varies by market.',
    'A commodity exchange — some cash trade occurs on organised physical exchanges or auction platforms, but most does not. The cash market is defined by what is traded, not by any venue.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No cash market prices, quotations, or series are published here for any commodity, location, layer, or date.',
    'This page identifies no price source, assesses no reporting service, and does not indicate where price information for any market should be obtained.',
    'Nothing here supports a judgement about any cash market’s competitiveness, transparency, or fairness. Such assessments require that market’s own structural data.',
    'Cash market structure differs enormously by commodity, country, and layer; a generic description cannot characterise any particular market.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'milled-rice' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'deferred-pricing' },
    { type: 'market-term', slug: 'forward-contract' },
    { type: 'market-term', slug: 'freight-parity' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'market-depth' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'spot-price' },
    { type: 'market-term', slug: 'stocks-to-use-ratio' },
    { type: 'market-term', slug: 'supply-and-demand-balance-sheet' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'fob-delivery-term' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ams',
      citedFor:
        'Public market news reporting of physical cash market transactions by location and layer',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of cash markets, marketing channels, and competition in agriculture',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Physical grain and oilseed trade structure and international cargo trade',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Agricultural marketing chains and market information system concepts',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Cash market structure — the layers, the degree of competition at each, and the extent of public reporting — differs substantially by commodity and by country.',
  limitations: [
    'A structural description of the concept, not a characterisation of any commodity’s or country’s cash market.',
    'Cash market transactions are private; the observable portion is whatever reporting captures, and coverage varies by market and location.',
    'The layered structure described here is a general pattern, and real marketing chains differ, collapse layers, or add them.',
    'Competition and transparency at each layer are empirical questions requiring that chain’s own data, which this page does not present.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cash Market: The Market in the Commodity Itself',
    description:
      'What the cash market is: physical lots traded at real locations across the chain, why it is structurally fragmented, and how it differs from the spot market.',
    keywords: [
      'cash market',
      'physical market',
      'actuals market',
      'cash market definition',
      'agricultural marketing chain',
    ],
  },
  structuredData: { article: true },
};
