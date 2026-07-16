import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const originDifferential: MarketTermContent = {
  id: 'market-term-origin-differential',
  slug: 'origin-differential',
  contentType: 'market-term',
  title: 'Origin Differential',
  alternativeNames: ['Origin premium', 'Country differential'],
  category: 'Market term',
  subcategory: 'Price relationship',
  marketTermClass: 'price-relationship',
  summary:
    'An origin differential is the price difference attached to a commodity because of where it was produced, relative to another origin or a common reference. It prices the origin as a bundle — quality character, reliability, documentation, and logistics together — rather than any single measurable attribute.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The same commodity from different origins does not command the same price, and the difference is durable rather than incidental. Coffee from one producing country trades at a different level from coffee of nominally comparable grade from another; wheat from one exporting origin prices differently from wheat of similar protein from another. An origin differential is the name for that gap, expressed relative to another origin or to a common reference quotation.',
    },
    {
      type: 'paragraph',
      text: 'What makes the concept distinctive is that it prices a bundle. An origin is not one property but a correlated set of them: a characteristic quality profile that arises from climate, soil, and variety; a reliability record for meeting specification and shipping on time; a documentation and phytosanitary regime that a buyer must satisfy their own authorities with; a logistical position that determines what it costs and how long it takes to reach the buyer. The differential prices all of these at once and attributes to none of them, which is exactly why it is so easily misread as being about quality alone.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Price relationship — a bundled differential, not an attributed adjustment',
    },
    {
      label: 'Expressed relative to',
      value: 'Another origin, or a common reference quotation',
    },
    {
      label: 'Bundles',
      value:
        'Quality character, consistency, reliability, documentation regime, and logistical position',
    },
    {
      label: 'Not decomposable',
      value:
        'The figure does not say which component moved, or which the buyer is paying for',
    },
    {
      label: 'Sticky',
      value:
        'Reflects reputation built over long periods, so it moves more slowly than the underlying facts',
    },
    {
      label: 'Distinct from freight',
      value:
        'Logistics is one component; freight parity isolates the transport question specifically',
    },
    {
      label: 'Contract-relevant',
      value:
        'Contracts usually specify origin, so the differential is priced into the deal from the outset',
    },
  ],
  sections: [
    {
      id: 'what-an-origin-bundles',
      heading: 'What an origin actually bundles',
      body: [
        {
          type: 'paragraph',
          text: 'Origin functions in commodity markets as a compressed signal. A buyer who names an origin in a contract is not merely naming a place; they are invoking a set of expectations that the place has come to stand for, and paying or saving accordingly. Unpacking what those expectations contain is the only way to read the differential properly.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Characteristic quality',
              description:
                'The typical quality profile an origin produces, arising from its climate, soils, varieties, and practices. This is real and physical, but it is a tendency across the origin’s output rather than a property of any lot.',
            },
            {
              term: 'Consistency',
              description:
                'How reliably the origin delivers to that profile. An origin with a good average and wide variability is worth less to a buyer with a tight specification than one with a modest average and tight variability.',
            },
            {
              term: 'Contractual reliability',
              description:
                'Whether shipments arrive, on time, as specified, and whether disputes are resolvable. This has nothing to do with the commodity and a great deal to do with the price.',
            },
            {
              term: 'Documentation and regulatory regime',
              description:
                'Whether the origin’s certification, phytosanitary, and origin documentation satisfy the destination’s authorities without friction. A regime that generates border problems is a cost, and it prices.',
            },
            {
              term: 'Logistical position',
              description:
                'Distance, route, port capability, and freight availability to the buyer. This is where an origin differential and freight parity overlap, and it is the component most often mistaken for the whole.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-is-not-decomposable',
      heading: 'Why the figure will not decompose',
      body: [
        {
          type: 'paragraph',
          text: 'An origin differential is a single number containing at least five distinct influences that move independently and sometimes in opposite directions. A widening differential might mean the origin’s quality has slipped, or that its logistics have become more expensive, or that a documentation problem has emerged, or that buyers have simply become more confident about a competing origin. The number does not say, and no amount of analysis of the number alone will make it say.',
        },
        {
          type: 'paragraph',
          text: 'This is the same structural property that basis has, and it deserves the same caution. A composite that appears to be a precise measurement of something is a reliable source of confident error, because its precision is real and its attribution is absent. Anyone reading an origin differential as a statement about quality is reading four other things as quality.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No differentials are published here',
          text: 'AgricultureID publishes no origin differential levels, series, or rankings, and does not state or imply that any origin trades above or below any other. This page explains what the concept is so that a differential obtained elsewhere can be read against its own stated basis.',
        },
      ],
    },
    {
      id: 'stickiness-and-reputation',
      heading: 'Stickiness and reputation',
      body: [
        {
          type: 'paragraph',
          text: 'Origin differentials contain a reputational component, and reputation is slow. An origin that has improved its consistency will not see the differential adjust immediately, because buyers update on experience and experience accumulates over seasons. An origin that has deteriorated retains its standing for a while for the same reason. The differential therefore lags the facts in both directions.',
        },
        {
          type: 'list',
          items: [
            'Reputation is asymmetric: it is generally lost faster than it is rebuilt, because a single serious failure is more informative to a buyer than a run of ordinary successes',
            'Because the differential is bundled, an origin cannot easily demonstrate improvement in one component — the market prices the bundle, not the component',
            'New origins face a differential that reflects unfamiliarity rather than any assessed deficiency, since a buyer with no record has no basis for confidence',
            'A differential can persist after its cause has gone, because the convention of pricing an origin a certain way is itself sticky',
            'Origin differentials interact with contract structure: where contracts specify origin, the differential is embedded in the deal rather than observed as a separate quotation',
          ],
        },
        {
          type: 'paragraph',
          text: 'None of this makes the differential wrong. A buyer paying for an origin’s record is paying for information they genuinely have about the likelihood of getting what they contracted for, and that information has value. But it does mean the differential is a measure of what buyers currently believe about an origin, which is not the same as a measure of the origin.',
        },
      ],
    },
  ],
  definition:
    'An origin differential is the price difference attached to a commodity by virtue of its production origin, expressed relative to another origin or to a common reference quotation. It bundles the origin’s characteristic quality, consistency, contractual reliability, documentation and regulatory regime, and logistical position into a single figure, and attributes the difference to none of them.',
  usageContext:
    'International commodity trade in origin-differentiated products — coffee, cocoa, rice, grains, and others — where contracts specify origin and prices are quoted as differentials between origins or against a common reference.',
  notToBeConfusedWith: [
    'Quality premium — a quality premium prices a measured attribute of a specific lot against a specification. An origin differential prices an origin’s whole bundle, including things that are not attributes of the commodity at all. Two lots from different origins with identical measured quality can still carry different differentials, and that is not an error.',
    'Freight cost or freight parity — logistics is one component of an origin differential. Freight parity isolates the transport question specifically; the origin differential contains it alongside quality, reliability, and regulatory factors. A differential equal to freight would be a coincidence.',
    'Basis — a basis relates a local physical cash price to a reference, anchored to a specific delivery point. An origin differential relates origins to each other or to a reference at a comparable point in the chain. Both are composites, and they compose different things.',
    'Country of origin for customs purposes — customs origin is a legal determination under rules of origin, made for tariff and admissibility purposes. A commercial origin differential is a market price relationship. The same word covers a legal fact and a market fact, and they answer to different authorities.',
    'A geographical indication — a GI is a protected legal designation with defined criteria and enforcement. An origin differential is an unprotected market phenomenon that exists whether or not any designation applies.',
    'A quality ranking of origins — a differential measures what buyers currently pay, which reflects belief, familiarity, and logistics as much as quality. It is not an assessment of which origin produces a better commodity.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No origin differential levels, series, or comparisons are published here, and no statement is made or implied about how any origin prices relative to any other.',
    'This page ranks no origins, assesses no origin’s quality or reliability, and takes no position on any producing country’s market standing.',
    'Nothing here advises on origin selection, sourcing, or contracting. Those are commercial decisions requiring information specific to the buyer, the specification, and the season.',
    'The components listed as contributing to a differential are analytical categories, not a weighting or a model. This page offers no method for decomposing any differential.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'wheat-grain' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'composite-indicator-price' },
    { type: 'market-term', slug: 'freight-parity' },
    { type: 'market-term', slug: 'premium-and-discount' },
    { type: 'market-term', slug: 'quality-premium' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spread' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  sourceReferences: [
    {
      sourceId: 'ico',
      citedFor:
        'Origin and group differentiation in the coffee market, and the grouping of origins by characteristic type',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Origin-based quotation conventions in international grain and oilseed trade',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Trade flow and market access context for origin-differentiated agricultural exports',
    },
    {
      sourceId: 'usda-fas',
      citedFor:
        'International market and competing-origin analysis for traded agricultural commodities',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Origin differentials exist wherever a commodity is traded internationally from multiple producing origins and buyers distinguish between them; conventions and reference points are commodity-specific.',
  limitations: [
    'A definition of the concept, not a statement of any origin’s differential or standing.',
    'The figure bundles several independent influences and cannot be decomposed into them from the number alone.',
    'Origin differentials contain a reputational component that lags the underlying facts in both directions, so they are not a current measure of an origin.',
    'Commercial origin and customs origin are different determinations under different authorities; this page addresses only the commercial price relationship.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Origin Differential: Pricing a Bundle, Not an Attribute',
    description:
      'What an origin differential is: the price gap attached to where a commodity was produced, what it bundles beyond quality, and why it will not decompose.',
    keywords: [
      'origin differential',
      'origin premium',
      'country differential',
      'coffee origin differential',
      'commodity origin pricing',
    ],
  },
  structuredData: { article: true },
};
