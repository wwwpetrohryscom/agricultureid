import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const premiumAndDiscount: MarketTermContent = {
  id: 'market-term-premium-and-discount',
  slug: 'premium-and-discount',
  contentType: 'market-term',
  title: 'Premium and Discount',
  alternativeNames: [
    'Premiums and discounts',
    'Price adjustment',
    'Allowances',
  ],
  category: 'Market term',
  subcategory: 'Price relationship',
  marketTermClass: 'price-relationship',
  summary:
    'A premium is an addition to a price and a discount a deduction from it, applied for a stated reason against a stated basis. They are attributed adjustments — which is what separates them from a basis or a spread, where the gap is a composite with no single cause.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Premiums and discounts are what happen when a price has a basis and a lot does not match it. A contract, a grade standard, or a commercial understanding establishes what the standard object is and what it is worth; a real lot then differs from that standard in some identified way, and the price is adjusted up or down by an amount attached to that specific difference. The adjustment is not a negotiation about the whole price — it is a correction for one named respect in which the lot is not the standard.',
    },
    {
      type: 'paragraph',
      text: 'The word that does the work is "attributed". A premium exists for a reason that can be named: this lot has higher protein, that lot arrived with more moisture, this coffee is certified under a scheme, that consignment is a smaller lot than the standard parcel. This distinguishes premiums and discounts sharply from a basis, which is a residual composite containing several causes at once, and from a spread, which is simply the arithmetic gap between two quotations. A premium answers "why"; a basis and a spread do not.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Price relationship — an attributed adjustment to a price',
    },
    {
      label: 'Premium',
      value: 'An addition to the price, for a stated reason',
    },
    {
      label: 'Discount',
      value: 'A deduction from the price, for a stated reason',
    },
    {
      label: 'Requires',
      value:
        'A basis to adjust from — a standard specification, grade, or reference the lot is measured against',
    },
    {
      label: 'Defining property',
      value:
        'Attribution: the adjustment is attached to one identified difference',
    },
    {
      label: 'Set by',
      value:
        'A contract schedule, a grade standard, a scheme, or negotiation — depending on the market',
    },
    {
      label: 'Common reasons',
      value:
        'Quality against specification, certification, lot size, timing, packaging, and origin characteristics',
    },
  ],
  sections: [
    {
      id: 'the-basis-comes-first',
      heading: 'The basis comes first',
      body: [
        {
          type: 'paragraph',
          text: 'A premium or discount is meaningless without the thing it adjusts from. This is the point most often skipped, and it makes reported adjustments impossible to interpret when it is. A discount for moisture is a deduction relative to some contractual moisture specification; change the specification and the same physical lot attracts a different discount, without anything about the lot or the market having changed at all.',
        },
        {
          type: 'paragraph',
          text: 'The basis being adjusted from takes several forms, and which form applies determines how much discretion is involved and how predictable the adjustment is.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'A contract schedule',
              description:
                'Many contracts, including standardised exchange contracts, publish a table of premiums and discounts for stated deviations from the deliverable specification. Here the adjustment is mechanical: measure the deviation, read the table.',
            },
            {
              term: 'A grade standard',
              description:
                'Where an official or industry grading system defines grades, the market prices grades relative to one another, and the adjustment follows from where the lot graded rather than from bilateral discussion.',
            },
            {
              term: 'A scheme requirement',
              description:
                'Certification schemes may require a premium to be paid on certified transactions, in which case the adjustment is an obligation of the scheme rather than a market valuation of a difference.',
            },
            {
              term: 'Commercial negotiation',
              description:
                'Where no schedule or standard covers the difference, the adjustment is whatever the parties agree. This is the most common case in differentiated and speciality markets, and the least predictable.',
            },
          ],
        },
      ],
    },
    {
      id: 'attribution-and-its-limits',
      heading: 'Attribution, and where it breaks down',
      body: [
        {
          type: 'paragraph',
          text: 'Attribution is the property that makes premiums and discounts analytically useful: because each adjustment names its cause, a price built from a basis plus several adjustments is decomposable. One can see what was paid for what. Neither a basis nor a spread offers this — both are single figures containing several influences that cannot be separated after the fact.',
        },
        {
          type: 'paragraph',
          text: 'But attribution is a claim about the adjustment’s stated reason, not a guarantee that the reason is the whole cause. Where adjustments are negotiated rather than scheduled, the stated reason may carry weight that belongs elsewhere — a "quality discount" applied in a market where the seller has no alternative buyer is doing something other than pricing quality. The label is the parties’ description of the adjustment, and a description is not a proof.',
        },
        {
          type: 'list',
          items: [
            'A scheduled adjustment is mechanical and verifiable against the schedule; a negotiated one is not',
            'Multiple adjustments may apply to one lot, and the order and base they are computed on affect the result',
            'An adjustment expressed as a proportion and one expressed as a fixed amount behave differently as the underlying price moves',
            'Where a lot deviates so far from the basis that no schedule covers it, the lot may not be deliverable at all — a discount cannot rescue material outside the specification',
            'The same named adjustment may be computed differently in different contracts; the name is not the method',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No adjustment amounts appear here',
          text: 'AgricultureID publishes no premium or discount amounts, schedules, or ranges for any commodity, quality, grade, or scheme, and no view on whether an adjustment is appropriate. Schedules are contract- and scheme-specific and are revised; only the applicable contract or scheme documentation is authoritative.',
        },
      ],
    },
    {
      id: 'why-both-directions-matter',
      heading: 'Why the pair is one concept',
      body: [
        {
          type: 'paragraph',
          text: 'Premium and discount are treated as one term because they are one mechanism operating in two directions from a common basis. A specification defines a standard, and lots fall on both sides of it. A schedule that pays for protein above a specification and deducts for protein below it is expressing a single valuation of protein, not two unrelated policies.',
        },
        {
          type: 'paragraph',
          text: 'That symmetry is a design property of a schedule, however, and not a law of markets. Schedules are frequently asymmetric by intention: a deviation that costs a buyer real money to handle may attract a deduction larger than the addition an equivalent deviation in the other direction earns. Asymmetry is a commercial choice embedded in the schedule, and reading a schedule as though it must be symmetric will mislead.',
        },
      ],
    },
  ],
  definition:
    'A premium is an amount added to a price and a discount an amount deducted from it, applied for a specifically identified reason relative to a stated basis — a contract specification, a grade standard, a scheme requirement, or an agreed reference. Their defining property is attribution: each adjustment is attached to one named difference, in contrast to a basis or spread, which are composites with no single cause.',
  usageContext:
    'Physical commodity contracting and grading, where lots differing from a standard specification are priced by adjusting a base price; and in certification schemes, where a premium may be an obligation attached to certified transactions.',
  notToBeConfusedWith: [
    'Basis — a basis is a composite residual containing transport, quality, carrying cost, and local balance together, with no attribution to any of them. A premium or discount is attributed to one named cause. A basis may contain quality adjustments; it is not itself one.',
    'Spread — a spread is the arithmetic difference between two quoted prices for different things. A premium or discount is an adjustment applied to one price for a stated reason. A spread compares; an adjustment modifies.',
    'A minimum price — a floor replaces a lower market price with a required one. A premium is added on top of whatever the price is. A scheme may operate both, and they do different things: one bounds, the other adds.',
    'An option premium — in derivatives, "premium" means the amount paid to acquire an option, which is the price of an instrument rather than an adjustment to a commodity price. The two uses of the word are unrelated.',
    'A margin or mark-up — a premium is an adjustment to the price of a lot for a property of that lot. A mark-up is what an intermediary adds to cover cost and profit. They may both appear in a price and they are not the same thing.',
    'A quality premium specifically — quality is one common reason among several. Certification, lot size, timing, packaging, and origin all attract adjustments that are not quality adjustments.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No premium or discount amounts, schedules, tables, or ranges are published here for any commodity, quality, grade, certification scheme, or contract.',
    'Adjustment schedules are contract-, standard-, and scheme-specific and are revised. Only the current documentation of the applicable contract or scheme is authoritative, and nothing here substitutes for reading it.',
    'This page does not advise on negotiating adjustments, does not evaluate whether any adjustment is fair or appropriate, and takes no position on any commercial arrangement.',
    'Where an adjustment is negotiated rather than scheduled, its stated reason is the parties’ description of it. This page cannot establish what any negotiated adjustment actually reflects.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'minimum-price' },
    { type: 'market-term', slug: 'origin-differential' },
    { type: 'market-term', slug: 'quality-premium' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spread' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ams',
      citedFor:
        'Grading systems and the reporting of price differences between grades and qualities',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Quality specification and adjustment conventions in international grain contracts',
    },
    {
      sourceId: 'fairtrade',
      citedFor:
        'A certification premium as an obligation attached to certified transactions, distinct from a price floor',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. The bases adjusted from — grade standards, contract specifications, and scheme requirements — are jurisdiction-, contract-, and scheme-specific.',
  limitations: [
    'A definition of the mechanism, not a schedule of adjustments for any commodity, contract, or scheme.',
    'Attribution is a property of the adjustment’s stated reason, not proof that the reason is its whole cause, particularly where adjustments are negotiated.',
    'Schedules may be asymmetric by design; the existence of a premium in one direction implies nothing about the discount in the other.',
    'Where a lot falls outside a contract’s specification entirely, no adjustment applies because the material is not deliverable — a limit that schedules do not always make obvious.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Premium and Discount: Attributed Adjustments to a Price',
    description:
      'What premiums and discounts mean in commodity pricing: adjustments applied for a named reason against a stated basis, and why they are not a basis or a spread.',
    keywords: [
      'premium and discount',
      'price adjustment',
      'quality discount',
      'premium definition',
      'grain discount schedule',
    ],
  },
  structuredData: { article: true },
};
