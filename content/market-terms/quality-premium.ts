import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const qualityPremium: MarketTermContent = {
  id: 'market-term-quality-premium',
  slug: 'quality-premium',
  contentType: 'market-term',
  title: 'Quality Premium',
  alternativeNames: ['Quality differential', 'Specification premium'],
  category: 'Market term',
  subcategory: 'Price relationship',
  marketTermClass: 'price-relationship',
  summary:
    'A quality premium is the additional amount a buyer pays for a measured quality attribute above a stated specification. It prices a property the buyer can use — which is why a premium exists only where the attribute is measurable, verifiable, and commercially valuable to that particular buyer.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Agricultural commodities are sold on specification, and specifications are thresholds. A milling wheat contract names a protein level; a coffee contract names a defect count and a screen size; a rice specification names a broken-grain proportion. Lots exceed those thresholds by varying amounts, and where the excess is useful to the buyer, the buyer may pay for it. That additional amount is a quality premium.',
    },
    {
      type: 'paragraph',
      text: 'The condition doing the real work is usefulness. A quality premium is not a reward for excellence in the abstract and not an expression of how much effort a producer expended; it is a payment for a property the buyer can convert into something they value. Protein above specification earns a premium from a miller whose flour specification needs it and earns nothing from a feed compounder who does not. The same physical lot therefore carries a premium in one market and none in another, and neither market is mispricing it.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Price relationship — an attributed adjustment for a measured attribute',
    },
    {
      label: 'Requires',
      value:
        'A specification to exceed, a measurement method, and a buyer who can use the excess',
    },
    {
      label: 'Prices',
      value: 'Utility to the buyer, not the producer’s cost or effort',
    },
    {
      label: 'Buyer-specific',
      value:
        'The same attribute may be worth a premium to one buyer and nothing to another',
    },
    {
      label: 'Depends on verification',
      value:
        'An attribute that cannot be measured or verified at the point of sale cannot reliably attract a premium',
    },
    {
      label: 'Not automatic',
      value:
        'Exceeding a specification creates the possibility of a premium, not an entitlement to one',
    },
    {
      label: 'Distinct from',
      value:
        'A certification premium, which prices a scheme claim rather than a measured physical property',
    },
  ],
  sections: [
    {
      id: 'what-a-premium-requires',
      heading: 'What a quality premium requires to exist',
      body: [
        {
          type: 'paragraph',
          text: 'Quality premiums are conditional on a chain of requirements, and the absence of any one of them collapses the premium regardless of the lot’s physical merit. This is why superior lots sometimes attract nothing — not because the market failed to notice, but because one of the conditions was not met.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'A defined specification',
              description:
                'There must be a threshold to exceed. Without a stated basis, an attribute has nothing to be measured against, and "above specification" has no meaning.',
            },
            {
              term: 'A measurement method',
              description:
                'The attribute must be measurable by a method both parties accept, at a cost proportionate to the value at stake. An attribute that cannot be measured cheaply enough will not be priced, however real it is.',
            },
            {
              term: 'Verifiability at the point of sale',
              description:
                'The buyer must be able to confirm the attribute when it matters. Attributes that can only be confirmed after processing are difficult to pay for in advance.',
            },
            {
              term: 'A buyer who can use it',
              description:
                'The attribute must convert into value in the buyer’s own operation. Utility, not merit, is what is being paid for.',
            },
            {
              term: 'Segregation through the chain',
              description:
                'The lot must remain identifiable. An attribute blended away between the farm and the buyer cannot be paid for, because by the time it reaches the buyer it no longer exists as a distinguishable property.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Segregation is the condition that most often defeats a premium in practice, and it is a physical and logistical matter rather than a commercial one. A handling system that commingles lots destroys the information a premium would price. Where the chain cannot keep a lot separate, the market can only pay for the average — and the producer of an above-average lot receives the average.',
        },
      ],
    },
    {
      id: 'how-premiums-are-determined',
      heading: 'How premiums are determined',
      body: [
        {
          type: 'paragraph',
          text: 'Where a contract or grade standard publishes a schedule, the premium is mechanical: measure the attribute, read the schedule. Where none exists, the premium is negotiated, and the parties are effectively agreeing a valuation of the attribute themselves. Both mechanisms are common in agricultural trade, sometimes for the same commodity at different points in the chain.',
        },
        {
          type: 'list',
          items: [
            'Scheduled premiums are predictable and verifiable but are set for a standard case and cannot reflect a particular buyer’s specific need',
            'Negotiated premiums can reflect exactly what a buyer needs but require the seller to know what the attribute is worth to that buyer, which is information the seller frequently lacks',
            'A premium may be expressed as a fixed amount or as a proportion of the base price, and these behave differently as the base moves',
            'Premiums for several attributes may apply together, and whether they are additive is a matter for the schedule or the agreement',
            'Above a certain level an attribute may stop earning anything — a buyer who needs a threshold met gains nothing from exceeding it further, so premiums do not extend indefinitely',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No premium amounts are published here',
          text: 'AgricultureID publishes no quality premium amounts, schedules, or ranges for any commodity, attribute, or market, and does not indicate what any attribute is worth. Schedules are contract- and market-specific and are revised; only the applicable contract or standard is authoritative.',
        },
      ],
    },
    {
      id: 'the-asymmetry-with-discounts',
      heading: 'The asymmetry with discounts',
      body: [
        {
          type: 'paragraph',
          text: 'Quality premiums and quality discounts are not mirror images, and expecting symmetry is a reliable way to misread a market. A discount for an attribute below specification prices a problem the buyer must deal with — reprocessing, blending, downgrading, or rejecting — and those costs can be substantial and non-linear. A premium for an attribute above specification prices a benefit the buyer may capture, and benefits are often bounded by the buyer’s own requirement.',
        },
        {
          type: 'paragraph',
          text: 'The structural consequence is that failing a specification tends to be more consequential than exceeding it is rewarding, and that below a certain point material stops attracting a discount and simply becomes undeliverable. There is no premium symmetric to rejection. This asymmetry is a property of what the two adjustments price, not evidence that a market treats producers unfairly.',
        },
      ],
    },
  ],
  definition:
    'A quality premium is the additional amount paid for a measured quality attribute exceeding a stated specification, priced according to the attribute’s usefulness to the buyer rather than the producer’s cost or effort. Its existence depends on a defined specification, an accepted measurement method, verifiability, a buyer who can convert the attribute into value, and a chain that keeps the lot segregated.',
  usageContext:
    'Physical commodity contracting and grading across grains, oilseeds, coffee, and other quality-differentiated commodities, where lots exceeding a contract or grade specification may be priced above the base for that specification.',
  notToBeConfusedWith: [
    'A certification premium — a certification premium prices a scheme claim about how a product was produced, verified by audit rather than by measuring the product. A quality premium prices a measurable physical property of the lot itself. A lot can carry both, and they are established by entirely different mechanisms.',
    'Premium and discount generally — quality is one reason among several for adjusting a price. Lot size, timing, packaging, delivery term, and origin all attract adjustments that are not quality adjustments.',
    'Basis — a basis is a composite that may contain a quality component together with transport, carrying cost, and local balance, with no attribution. A quality premium is attributed to one measured attribute.',
    'Origin differential — an origin differential relates one production origin to another or to a reference. Origins do correlate with quality, but an origin differential prices the origin as a whole, including reputation, reliability, and logistics, not a measured attribute of the lot.',
    'A reward for good farming — a premium prices utility to the buyer. An attribute that took great effort but that no buyer can use attracts nothing, and an attribute that arrived by chance and that a buyer needs attracts a premium. The mechanism does not evaluate husbandry.',
    'A guarantee that quality pays — exceeding a specification creates the possibility of a premium, not an entitlement. If the chain cannot segregate the lot or no buyer needs the attribute, the premium does not exist.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No quality premium amounts, schedules, or ranges are published here for any commodity, attribute, grade, or market.',
    'This page does not advise on production decisions, does not indicate whether producing for a quality attribute is worthwhile, and offers no view on any market’s quality pricing.',
    'Premium schedules are contract- and standard-specific and are revised; only the current applicable documentation is authoritative, and nothing here substitutes for it.',
    'Whether an attribute attracts a premium in any specific chain depends on that chain’s buyers, measurement infrastructure, and segregation capability — facts this page cannot supply.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'durum-wheat-grain' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'composite-indicator-price' },
    { type: 'market-term', slug: 'minimum-price' },
    { type: 'market-term', slug: 'origin-differential' },
    { type: 'market-term', slug: 'premium-and-discount' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spread' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ams',
      citedFor:
        'Grading and quality classification systems underpinning quality-based price differentiation',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Quality specification conventions in international grain trade',
    },
    {
      sourceId: 'ico',
      citedFor: 'Quality differentiation and grouping in the coffee market',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of quality differentiation and segregation in agricultural chains',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Which attributes are specified, how they are measured, and whether a chain can segregate on them are commodity-, market-, and infrastructure-specific.',
  limitations: [
    'A definition of the mechanism, not a schedule of premiums or a statement of what any attribute is worth anywhere.',
    'Whether an attribute attracts a premium depends on buyer utility and chain segregation, both of which are specific to a chain and cannot be generalised.',
    'Premiums and discounts are commonly asymmetric; the structure of one implies nothing about the other.',
    'Measurement methods and their acceptance vary by market; an attribute measurable in one chain may be unpriceable in another for purely practical reasons.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Quality Premium: Paying for Utility, Not Merit',
    description:
      'What a quality premium is: the extra paid for a measured attribute above specification, and why it differs from a certification premium.',
    keywords: [
      'quality premium',
      'quality differential',
      'protein premium',
      'quality premium definition',
      'commodity quality pricing',
    ],
  },
  structuredData: { article: true },
};
