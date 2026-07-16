import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const compositeIndicatorPrice: MarketTermContent = {
  id: 'market-term-composite-indicator-price',
  slug: 'composite-indicator-price',
  contentType: 'market-term',
  title: 'Composite Indicator Price',
  alternativeNames: ['Composite indicator', 'Indicator price'],
  category: 'Market term',
  subcategory: 'Price formation',
  marketTermClass: 'price-formation',
  summary:
    'A composite indicator price is a single figure calculated by an organisation from several underlying market quotations according to a published methodology, in order to represent a market that has no single price. It is a constructed measure of a market, not a price anyone paid.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Some commodities are traded in genuinely distinct segments that cannot be reduced to one another. Coffee is the standard example: arabicas and robustas are different products with different uses and different markets, and within arabicas the washed and natural groups price separately again. There is no single coffee price, because there is no single coffee. Yet a market this fragmented still needs a way to speak about itself — for policy discussion, for statistical series, for agreements that must point at something.',
    },
    {
      type: 'paragraph',
      text: 'A composite indicator price is the answer to that need. An organisation defines groups, selects quotations to represent each, assigns weights, and publishes the calculated result as one figure. The International Coffee Organization publishes such an indicator for coffee, and the International Cocoa Organization publishes a daily calculated price for cocoa; both are computed under methodologies the organisations document and periodically revise. What matters editorially is what such a figure is and is not: it is a constructed statistic describing a market, and it is not a price at which any lot changed hands.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Price formation — a calculated measure, not an observed price',
    },
    {
      label: 'Constructed from',
      value:
        'Selected underlying quotations, combined under a documented methodology',
    },
    {
      label: 'Published by',
      value:
        'An organisation that defines and maintains the methodology — for example, ICO for coffee, ICCO for cocoa',
    },
    {
      label: 'Exists because',
      value:
        'The market has genuinely distinct segments and therefore no single price',
    },
    {
      label: 'Design choices',
      value:
        'Which quotations, which groups, which weights, and how often the weights are revised',
    },
    {
      label: 'Not transactable',
      value:
        'No lot is bought or sold at the indicator; it describes the market rather than pricing anything in it',
    },
    {
      label: 'Reading it requires',
      value:
        'The methodology — the figure alone does not disclose what it aggregated or how',
    },
  ],
  sections: [
    {
      id: 'why-a-composite-exists',
      heading: 'Why a composite exists at all',
      body: [
        {
          type: 'paragraph',
          text: 'A composite indicator is a response to a specific structural problem: a commodity whose trade is real and substantial but whose segments do not share a price. Where a market has one dominant standardised contract, no composite is needed — the contract already provides a common coordinate, and everything else is a differential from it. Composites appear precisely where that consolidation did not happen.',
        },
        {
          type: 'paragraph',
          text: 'The coffee and cocoa markets illustrate both patterns. Cocoa has actively traded reference contracts, and the ICCO’s published price is calculated from quotations on those contracts under a stated methodology — a composite that summarises across venues. Coffee’s segments are more deeply separated, and the ICO’s indicator is built by defining groups and combining representative quotations for each. In both cases the organisation is solving the same problem: producing one figure for something that does not naturally have one.',
        },
      ],
    },
    {
      id: 'the-methodology-is-the-indicator',
      heading: 'The methodology is the indicator',
      body: [
        {
          type: 'paragraph',
          text: 'Every composite embeds a series of judgements, and those judgements are not incidental — they are what the figure is. Two organisations computing a composite for the same commodity from the same underlying data would produce different numbers if they made different choices, and neither would be wrong. This is why a composite figure cannot be interpreted without its methodology, and why methodology revisions matter as much as market movements.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Group definition',
              description:
                'Which segments the market is divided into. This determines what the indicator treats as distinct and what it treats as equivalent, and it embeds a view of the market’s structure.',
            },
            {
              term: 'Quotation selection',
              description:
                'Which observable prices represent each group. A group’s indicator inherits every property of the quotations chosen for it, including their delivery basis and their liquidity.',
            },
            {
              term: 'Weighting',
              description:
                'How much each group contributes. Weights usually reflect trade shares from some period, and the choice of that period is itself a judgement.',
            },
            {
              term: 'Revision policy',
              description:
                'How often groups, quotations, and weights are updated. Infrequent revision keeps the series comparable over time but lets it drift from the market; frequent revision does the reverse.',
            },
            {
              term: 'Calculation and period',
              description:
                'Whether the figure is a daily calculation, an average over a period, or a rolling measure — which determines what a movement in it actually indicates.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No indicator values appear here',
          text: 'AgricultureID publishes no composite indicator values, no series, and no historical levels for coffee, cocoa, or any other commodity. This page explains what such a figure is so that a value obtained from the publishing organisation can be read against that organisation’s own current methodology.',
        },
      ],
    },
    {
      id: 'what-a-composite-can-and-cannot-support',
      heading: 'What a composite can and cannot support',
      body: [
        {
          type: 'paragraph',
          text: 'A composite is well suited to describing the direction and general level of a fragmented market over time, and to serving as a common statistical coordinate for discussion, analysis, and agreements. It is unsuited to almost anything requiring a specific price for a specific lot, because it is by construction an average of things that are not the same as each other.',
        },
        {
          type: 'list',
          items: [
            'It describes a market; it does not price a consignment, a quality, or an origin',
            'A movement in it may reflect a movement in one group, a shift in group composition, or a methodology change — the figure does not say which',
            'It is not transactable: no party can buy or sell at the indicator, so it cannot be delivered against and cannot anchor a hedge directly',
            'Its representativeness depends on weights that reflect a past trade pattern, and drifts as trade shifts',
            'Because the composite masks divergence between groups, a stable indicator is fully compatible with sharply moving segments underneath it',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point is the one most worth holding onto. The composite’s virtue — reducing a fragmented market to one number — is identical to its limitation. Everything it aggregates, it also conceals.',
        },
      ],
    },
  ],
  definition:
    'A composite indicator price is a single figure calculated and published by an organisation from a set of selected underlying market quotations, combined under a documented methodology of groups and weights, in order to represent the general level of a market that has no single price. It is a constructed statistical measure rather than an observed transaction price, and it is not transactable.',
  usageContext:
    'Fragmented commodity markets with genuinely distinct segments — notably coffee and cocoa — where intergovernmental organisations publish calculated indicators for statistical, analytical, and agreement purposes.',
  notToBeConfusedWith: [
    'A market price — no lot is transacted at a composite indicator. It is calculated from prices that were transacted, and is itself a description of a market rather than an offer, a bid, or a settlement.',
    'A benchmark price — a benchmark is a single observable quotation for a real, transactable object, adopted by convention as an anchor. A composite is computed from several such quotations and cannot be delivered against. A composite may be referenced by an instrument, but it cannot be traded.',
    'A price index — an index measures relative change against a base period and is usually expressed as an index number. A composite indicator is expressed in price units and describes a level. Both are computed statistics, but they answer different questions and are read differently.',
    'A minimum price — a composite is a measure of what a market is doing; a minimum price is a floor a scheme requires to be paid. One describes, the other obliges. Some schemes reference an indicator when defining how a floor operates, which makes the confusion easy and the distinction more important.',
    'A single quotation from one of its groups — a group’s underlying quotation and the composite are different figures with different coverage. Substituting one for the other discards the aggregation that was the point.',
    'An official or authoritative price for the commodity — the publishing organisation has authority over its own methodology, not over what the commodity is worth. The indicator is authoritative as a statistic, not as a valuation.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No composite indicator values, historical series, or levels are published here for any commodity. Values must be obtained from the publishing organisation, alongside its current methodology.',
    'This page does not reproduce, summarise numerically, or interpret any organisation’s methodology. Group definitions, quotation selections, and weights are versioned and revised, and only the publisher’s current documentation is authoritative.',
    'Nothing here supports using an indicator to price, value, or hedge a consignment, and no view is offered on whether any indicator is suitable for any purpose.',
    'A composite conceals divergence between the segments it aggregates; it cannot be used to infer what any origin, quality, or group is doing.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'minimum-price' },
    { type: 'market-term', slug: 'origin-differential' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-index' },
    { type: 'market-term', slug: 'quality-premium' },
    { type: 'market-term', slug: 'reference-price' },
  ],
  sourceReferences: [
    {
      sourceId: 'ico',
      citedFor:
        'The composite indicator price methodology for coffee: group definitions, representative quotations, and weighting',
    },
    {
      sourceId: 'icco',
      citedFor:
        'The cocoa price methodology: a calculated daily price derived from quotations under a documented method',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Commodity price measurement concepts and the construction of aggregate price measures',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Composite indicators are constructed for internationally traded commodities whose markets are segmented; the segments, quotations, and weights are defined by each publishing organisation.',
  limitations: [
    'A description of what a composite indicator is, not a reproduction or interpretation of any organisation’s methodology.',
    'Methodologies, group definitions, and weights are revised over time; statements about how any particular indicator is constructed would date and are deliberately not made here.',
    'A composite necessarily conceals divergence between the segments it aggregates, and cannot be disaggregated back into them.',
    'Indicators are not transactable and are not comparable across commodities or across organisations, since each embeds its own construction choices.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Composite Indicator Price: A Measure, Not a Market Price',
    description:
      'What a composite indicator price is: one figure calculated from several quotations to represent a fragmented market, and why the methodology is the indicator.',
    keywords: [
      'composite indicator price',
      'coffee indicator price',
      'cocoa price methodology',
      'commodity price indicator',
      'ICO composite indicator',
    ],
  },
  structuredData: { article: true },
};
