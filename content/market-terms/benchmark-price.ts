import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const benchmarkPrice: MarketTermContent = {
  id: 'market-term-benchmark-price',
  slug: 'benchmark-price',
  contentType: 'market-term',
  title: 'Benchmark Price',
  alternativeNames: ['Market benchmark', 'Benchmark quotation'],
  category: 'Market term',
  subcategory: 'Price formation',
  marketTermClass: 'price-formation',
  summary:
    'A benchmark price is a particular market quotation that convention has elevated into the common anchor other prices are quoted against. Being a benchmark is a role a price acquires through use, not a property it has by construction — and the role is granted by the market, not by any authority.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Among the many prices that exist for a commodity, a few come to be used by everyone else as the point of departure. A benchmark price is one of those: a specific, observable quotation — for a specific quality, at a specific place or delivery mechanism — that enough participants have chosen to price against that it has become the market’s shared coordinate. Other transactions are then expressed as a differential from it rather than as flat prices of their own.',
    },
    {
      type: 'paragraph',
      text: 'What makes a benchmark is adoption, not merit. A quotation becomes a benchmark because it is liquid enough to be trusted, transparent enough to be observed, standardised enough to mean the same thing to everyone, and established enough that participants expect their counterparties to accept it. None of these is a claim that the benchmark is the most accurate, most representative, or most economically central price for the commodity. It is the one everyone agreed to use, and its authority is entirely conventional.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Price formation — a role a price occupies, not a kind of price',
    },
    {
      label: 'Becomes one through',
      value:
        'Adoption by participants: liquidity, transparency, standardisation, and established use',
    },
    {
      label: 'Function',
      value:
        'A shared anchor other transactions are quoted as differentials from',
    },
    {
      label: 'Narrow by design',
      value:
        'Describes one quality at one place or delivery mechanism — everything else becomes a differential',
    },
    {
      label: 'Authority',
      value:
        'Conventional. No body appoints a benchmark; the market adopts one, and can stop',
    },
    {
      label: 'Key risk',
      value:
        'Representativeness drifts as trade patterns change, while the convention persists',
    },
  ],
  sections: [
    {
      id: 'how-a-price-becomes-a-benchmark',
      heading: 'How a price becomes a benchmark',
      body: [
        {
          type: 'paragraph',
          text: 'A benchmark is not designed and issued; it emerges. The properties that let a quotation take on the role are practical ones, and they compound: a quotation that many parties use becomes more useful to use, because a counterparty is more likely to accept it. That self-reinforcement is what makes benchmarks durable, and it is also what makes them slow to change when the underlying trade moves.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Liquidity',
              description:
                'Enough transactions occur that the quotation reflects genuine aggregation rather than a handful of deals. A quotation nobody trades against cannot anchor anything.',
            },
            {
              term: 'Transparency',
              description:
                'The price is observable to parties who are not participating in it. A price only its makers can see cannot serve as a shared coordinate.',
            },
            {
              term: 'Standardisation',
              description:
                'The quotation describes a precisely specified object, so that every user means the same thing by it. Ambiguity in the specification would make every differential from it ambiguous too.',
            },
            {
              term: 'Continuity',
              description:
                'The quotation exists reliably, without gaps. A contract that prices against a benchmark needs it to be there on the day the contract points to.',
            },
            {
              term: 'Acceptance',
              description:
                'Counterparties expect it and will contract on it. This is the property that actually makes a benchmark, and the one no methodology can confer.',
            },
          ],
        },
      ],
    },
    {
      id: 'what-a-benchmark-necessarily-excludes',
      heading: 'What a benchmark necessarily excludes',
      body: [
        {
          type: 'paragraph',
          text: 'A benchmark works because it is narrow. It describes one quality at one place under one delivery mechanism, and that specificity is exactly what makes it unambiguous. But a commodity is traded in many qualities, in many places, under many terms — so almost every real transaction differs from the benchmark in several dimensions at once.',
        },
        {
          type: 'paragraph',
          text: 'Those differences do not vanish. They are pushed out of the benchmark and reappear as differentials: basis, origin differentials, quality premiums and discounts, freight adjustments. This is the essential structural insight about benchmarks — the benchmark and its differentials are one system, and a benchmark price read without its applicable differential is not an approximation of a real price, it is a different quantity.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A benchmark is not the price of the commodity',
          text: 'Reporting that "the price of a commodity" moved usually means a benchmark quotation moved. Whether any particular producer, processor, or importer experienced a corresponding change depends on their differential, which moves for its own reasons and can move in the opposite direction. AgricultureID publishes no benchmark levels and no series.',
        },
      ],
    },
    {
      id: 'representativeness-and-drift',
      heading: 'Representativeness and drift',
      body: [
        {
          type: 'paragraph',
          text: 'The most important weakness of a benchmark is that its adoption is sticky while the trade it anchors is not. A quotation typically becomes a benchmark because it once sat at the centre of the trade — the dominant origin, the dominant quality, the dominant route. Production shifts, destinations change, and qualities are reformulated. The convention often does not follow, because the cost of coordinating a change of anchor is borne by everyone while the benefit is diffuse.',
        },
        {
          type: 'list',
          items: [
            'A benchmark can remain in universal use long after the trade it describes has ceased to be the dominant trade',
            'When representativeness drifts, differentials widen and become more volatile — the system absorbs the drift, but visibly',
            'Thin trading in the benchmark itself weakens every price anchored to it, since the differentials inherit the anchor’s weakness',
            'Benchmark governance — who administers the quotation, under what methodology, with what oversight — determines how much confidence it can carry, and is a live regulatory subject in many jurisdictions',
            'A commodity may have several competing benchmarks for different regions or qualities; these are not interchangeable and a differential from one is not a differential from another',
          ],
        },
      ],
    },
  ],
  definition:
    'A benchmark price is a specific, observable market quotation — for a defined quality at a defined location or delivery mechanism — that has been adopted by convention as the common anchor against which other transactions in the commodity are priced as differentials. Benchmark status derives from liquidity, transparency, standardisation, and acceptance, not from any authority’s designation or from being the most representative price.',
  usageContext:
    'Physical and exchange-traded commodity markets, contract drafting, and market reporting, where a shared anchor lets geographically and qualitatively diverse transactions be expressed on one common scale.',
  notToBeConfusedWith: [
    'Reference price — reference price is the general role of being the figure a contract or calculation points to; a benchmark is one particular kind of thing that can fill that role. A contract can reference an index, a composite indicator, an administratively fixed figure, or a formula output — none of which is a benchmark. Every benchmark is a reference price when used as one; most reference prices are not benchmarks.',
    'The commodity price — a benchmark describes one quality at one place. It is not the price of the commodity generally, and a party’s realised price differs from it by their differential, which moves independently.',
    'A price index — an index is a computed statistic aggregating many observations into a series, usually relative to a base. A benchmark is a single observable quotation for a real, transactable object. A contract can settle against a benchmark; an index is generally a measure, not a transactable object.',
    'A composite indicator price — a composite indicator is calculated by an organisation from several underlying quotations according to a published methodology. A benchmark is one of those underlying quotations. The indicator describes the market; the benchmark is a point in it.',
    'An official or administered price — a benchmark has no official standing and no issuing authority. It is a convention that participants can abandon. An administered price is set by a body with the power to set it.',
    'The most representative price — a benchmark is the most used price, which is a different property. Adoption is sticky and representativeness drifts; a benchmark can be universally used and unrepresentative at the same time.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No benchmark levels, series, or historical values are published here, and no exchange, quotation, or reporting service is identified as the benchmark for any commodity.',
    'This page does not assess whether any benchmark is representative, well governed, or appropriate for any contract. That requires evidence about the specific quotation and the specific transaction.',
    'Nothing here recommends pricing against any benchmark or advises on contract drafting. The choice of pricing reference is a commercial and legal matter for the parties and their advisers.',
    'Benchmark administration and governance are regulated in some jurisdictions and unregulated in others; regulatory treatment is outside the scope of this page.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'composite-indicator-price' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'origin-differential' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-index' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spot-price' },
  ],
  sourceReferences: [
    {
      sourceId: 'igc',
      citedFor:
        'The role of established quotations as anchors in international grain and oilseed trade',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of price anchoring and differentials in agricultural markets',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural market functioning and the role of price transparency',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Which quotation serves as a benchmark, and for which region and quality, is commodity- and market-specific and changes over time as conventions shift.',
  limitations: [
    'A definition of the role, not an identification of any commodity’s benchmark or an assessment of any quotation.',
    'Benchmark status is conventional and can change; any statement about which quotation anchors a market would date quickly and is deliberately not made here.',
    'The representativeness of a benchmark is an empirical question requiring trade-flow and quality data for the specific commodity and period.',
    'Governance and regulation of benchmark administration differ by jurisdiction and instrument and are outside this page’s scope.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Benchmark Price: A Role, Not a Kind of Price',
    description:
      'What a benchmark price is: a market quotation adopted by convention as the common anchor for pricing, why representativeness drifts, and what it excludes.',
    keywords: [
      'benchmark price',
      'benchmark quotation',
      'commodity benchmark',
      'price anchor',
      'benchmark versus reference price',
    ],
  },
  structuredData: { article: true },
};
