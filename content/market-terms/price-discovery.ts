import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const priceDiscovery: MarketTermContent = {
  id: 'market-term-price-discovery',
  slug: 'price-discovery',
  contentType: 'market-term',
  title: 'Price Discovery',
  alternativeNames: ['Price formation process'],
  category: 'Market term',
  subcategory: 'Price formation',
  marketTermClass: 'price-formation',
  summary:
    'Price discovery is the process by which the interaction of buyers and sellers produces a price that expresses what participants collectively know and believe. It names a process, not a number — and the price it produces is an output of that process, not a measurement of an underlying true value.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Price discovery is what happens when parties who want to buy and parties who want to sell reveal, through their willingness to transact, what they are prepared to pay or accept. Each participant acts on private information — a farmer knows their own yield, a processor knows their own order book, an exporter knows their own vessel line-up — and none of them knows the whole. The transactions that result aggregate those fragments into a single number that no individual participant possessed beforehand.',
    },
    {
      type: 'paragraph',
      text: 'The word "discovery" is doing careful work and is worth taking literally. It implies that the price was not known in advance and had to be found, which is accurate. It does not imply that a correct price existed all along and was uncovered. Price discovery is constitutive rather than revelatory: the process produces the price, and the quality of that price depends entirely on the quality of the process that produced it. This is why the conditions under which discovery happens — how many participants, how freely they can transact, how much they know — determine how much weight a resulting price can bear.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Price formation — a process, not a price' },
    {
      label: 'Mechanism',
      value:
        'Aggregation of dispersed private information through the willingness of parties to transact',
    },
    {
      label: 'Produces',
      value: 'A price that no individual participant held beforehand',
    },
    {
      label: 'Quality depends on',
      value:
        'Participation, competition, information access, and freedom to transact — not on the number itself',
    },
    {
      label: 'Where it concentrates',
      value:
        'Organised markets, where standardisation lets many parties transact the same object',
    },
    {
      label: 'Fails when',
      value:
        'Participants are few, information is asymmetric, or a party can set price rather than meet it',
    },
    {
      label: 'Not',
      value: 'A guarantee of accuracy, fairness, or predictive power',
    },
  ],
  sections: [
    {
      id: 'what-the-process-does',
      heading: 'What the process actually does',
      body: [
        {
          type: 'paragraph',
          text: 'The information relevant to a commodity’s value is irreducibly dispersed. No agency knows every field’s condition, every processor’s requirement, every store’s contents, every vessel’s schedule. Each participant holds a fragment, and each acts on their fragment when they decide what to bid or offer. A transaction occurs where a buyer’s and a seller’s assessments overlap, and the price of that transaction encodes something from both.',
        },
        {
          type: 'paragraph',
          text: 'Repeated across many participants, this produces a price that summarises far more information than any participant commands. That is the genuine and remarkable function of the process, and it explains why organised markets concentrate discovery: standardisation lets a large number of parties transact the identical object, so their fragments aggregate into one number instead of scattering across thousands of non-comparable bilateral deals.',
        },
        {
          type: 'paragraph',
          text: 'It also explains the limits. If few participants transact, few fragments aggregate. If one party knows materially more than the others, the price reflects the informed party’s position rather than a collective assessment. If a participant can dictate terms rather than meet them, the resulting number records that power rather than any aggregation. In each case a price still exists — it is simply carrying much less information than its existence suggests.',
        },
      ],
    },
    {
      id: 'conditions-that-support-discovery',
      heading: 'Conditions that support discovery',
      body: [
        {
          type: 'paragraph',
          text: 'Because discovery is a process, its output can be assessed only by examining the process. The number itself carries no evidence of how well it was formed — a price produced by two parties in an opaque bilateral deal looks exactly like a price produced by thousands of competing participants.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Participation',
              description:
                'How many independent parties can and do transact. Few participants means few information fragments aggregated, whatever the price looks like.',
            },
            {
              term: 'Comparability',
              description:
                'Whether participants are transacting the same object. Standardised specification is what allows many trades to inform one price rather than many unrelated ones.',
            },
            {
              term: 'Information symmetry',
              description:
                'Whether participants have broadly comparable access to relevant information. Systematic asymmetry means the price reflects the informed side.',
            },
            {
              term: 'Freedom to abstain',
              description:
                'Whether a participant can decline to transact. A seller who must sell now, at whatever is offered, contributes their necessity to the price rather than their assessment.',
            },
            {
              term: 'Transparency of the outcome',
              description:
                'Whether resulting prices are observable. Discovery that no one can see informs only its participants and cannot anchor anything else.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-agricultural-discovery-is-uneven',
      heading: 'Why agricultural price discovery is uneven',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural markets range from some of the most actively discovered markets that exist to markets where discovery barely occurs at all, and the same commodity can sit at both ends depending on where in the chain and where in the world it is transacted. A widely traded grain has continuous, highly public discovery at the reference-contract level and, simultaneously, may have almost none at a remote farm gate where one buyer calls once a season.',
        },
        {
          type: 'list',
          items: [
            'Standardisable bulk commodities support concentrated discovery; heterogeneous and perishable products resist it, because non-comparable lots cannot aggregate into one price',
            'Discovery is strong where many buyers compete and weak where a producer faces one buyer, whatever the commodity',
            'Seasonality concentrates selling into periods when producers have least ability to abstain, which changes what the price is expressing',
            'Public reporting of outcomes by market information services and authorities is what allows discovery in one place to inform pricing in another',
            'Where no organised market exists, prices are still formed — but by bilateral negotiation whose informational content is far narrower',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Discovery is not fairness',
          text: 'A well-discovered price is one that aggregates a great deal of information. It is not thereby a fair price, an adequate price, or a price any particular participant can live on. Those are different questions, addressed by different mechanisms — and the existence of minimum-price schemes in some commodity chains is a response to that gap, not a criticism of discovery.',
        },
      ],
    },
  ],
  definition:
    'Price discovery is the process by which the interaction of buyers and sellers aggregates dispersed private information into a transactable price that no individual participant held beforehand. It describes how a price comes to exist, not what any price is, and the informational quality of its output depends on participation, comparability, information symmetry, and the freedom of participants to decline to transact.',
  usageContext:
    'Market structure analysis and commodity market description, where the question is how prices in a chain are formed, how much information they carry, and which venue or mechanism performs the aggregation for a given commodity.',
  notToBeConfusedWith: [
    'A discovered price — price discovery is a process; the price is its output. Saying a market "has price discovery" describes a mechanism operating, not a number available.',
    'Price reporting — reporting observes and publishes prices that discovery has already produced. A reporting service does not discover a price; it records and disseminates one. Where a market is thin, a reporting service may assess a value, which is explicitly not discovery.',
    'Price setting — a price set by an authority, a scheme, or a party with the power to dictate terms is announced rather than discovered. Both produce a number; only one aggregates dispersed information.',
    'Valuation — a valuation is an analyst’s or an authority’s estimate of what something is worth, derived from a model or a method. Discovery is what parties actually did when transacting. Customs valuation, for example, is a legal determination and not a discovered price.',
    'Efficiency or accuracy — a well-discovered price is not thereby a correct or predictive price. Discovery aggregates what participants believe, including when they are collectively wrong, and it makes no claim about the future.',
    'Fairness — discovery describes how a price forms, not whether the outcome is adequate for anyone. A price can be thoroughly discovered and still leave a producer below their cost of production.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'This page describes a process. It publishes no discovered prices, identifies no venue as the discovery point for any commodity, and makes no claim about how well any named market discovers price.',
    'Nothing here supports a judgement that a particular price is well or badly discovered. That assessment requires evidence about the specific market’s participation, structure, and information conditions.',
    'This is not an argument for or against any market structure, venue, or price-formation mechanism, and not a recommendation to transact anywhere.',
    'Assessments of market structure and competition are contested empirical questions in the research literature; a definitional page cannot settle them for any commodity or chain.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'composite-indicator-price' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'liquidity' },
    { type: 'market-term', slug: 'market-depth' },
    { type: 'market-term', slug: 'minimum-price' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'speculation' },
    { type: 'market-term', slug: 'spot-price' },
    { type: 'market-term', slug: 'stocks-to-use-ratio' },
    { type: 'market-term', slug: 'supply-and-demand-balance-sheet' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis: competition, concentration, and price formation in agricultural markets',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Agricultural market functioning, transparency, and the role of market information',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market transparency as a policy objective and the role of published market information',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Commodity market information systems and price formation in agricultural chains',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. How and where discovery occurs for any given commodity depends on that commodity’s market structure, which varies enormously by product, by position in the chain, and by country.',
  limitations: [
    'A description of a process, not an assessment of any market’s price-formation quality.',
    'The conditions listed as supporting discovery are analytical categories, not a scoring framework; this page assigns no market a rating.',
    'How well discovery functions in a specific chain is an empirical question requiring that chain’s own data on participation, concentration, and information access.',
    'The concept describes aggregation of information, and says nothing about whether resulting prices are adequate, fair, or sustainable for participants.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Price Discovery: The Process, Not the Price',
    description:
      'What price discovery means: how buyer and seller interaction aggregates dispersed information into a price, and why it is not the same as price reporting.',
    keywords: [
      'price discovery',
      'price formation',
      'price discovery definition',
      'agricultural market structure',
      'market transparency',
    ],
  },
  structuredData: { article: true },
};
