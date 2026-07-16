import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const referencePrice: MarketTermContent = {
  id: 'market-term-reference-price',
  slug: 'reference-price',
  contentType: 'market-term',
  title: 'Reference Price',
  alternativeNames: ['Pricing reference', 'Price basis (contractual)'],
  category: 'Market term',
  subcategory: 'Price formation',
  marketTermClass: 'price-formation',
  summary:
    'A reference price is whatever figure a contract, formula, or rule points to as the anchor for determining another price. It is defined by the role it is given rather than by how it was produced — which is why a reference price may be a market quotation, a computed index, or a number an authority fixed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'When a contract does not state a flat price, it must state how the price will be found. The figure it points to for that purpose is the reference price. The contract names it, names the moment it will be read, and names how it will be adjusted — and the price the parties eventually settle on is the output of that instruction rather than a number either of them negotiated directly.',
    },
    {
      type: 'paragraph',
      text: 'The defining feature of a reference price is functional, not descriptive. A reference price is not a kind of price; it is a job a figure has been given. The same quotation is an ordinary market price when observed and a reference price when a contract points to it. And because the role is what matters, things that were never market prices at all can fill it: a computed index, a composite indicator published by an intergovernmental body, a figure fixed by a public authority, or the output of a formula. What they share is that some instrument depends on them, and nothing else.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Price formation — a functional role assigned to a figure',
    },
    {
      label: 'Defined by',
      value: 'What points at it, not how it was produced',
    },
    {
      label: 'Can be',
      value:
        'A market quotation, a futures settlement, a computed index, a composite indicator, or an administered figure',
    },
    {
      label: 'Named by',
      value: 'The contract, formula, regulation, or scheme that depends on it',
    },
    {
      label: 'Must specify',
      value:
        'Which figure, which source, which moment, and what happens if it is unavailable',
    },
    {
      label: 'Usually adjusted',
      value:
        'By a differential — basis, quality premium or discount, freight, or origin adjustment',
    },
    {
      label: 'Common error',
      value:
        'Assuming "reference price" means the same thing in a commercial contract and in a policy instrument',
    },
  ],
  sections: [
    {
      id: 'the-role-and-its-requirements',
      heading: 'The role, and what filling it requires',
      body: [
        {
          type: 'paragraph',
          text: 'A figure can only serve as a reference if the instrument pointing to it can identify it without ambiguity at the moment it is needed. This is a more demanding requirement than it first appears, and most of the difficulty in reference-price drafting lies here rather than in choosing which market to point at.',
        },
        {
          type: 'list',
          items: [
            'Identity — exactly which figure: which contract, which month, which quotation, which publication, which series',
            'Source — who publishes it, under what methodology, and whether that methodology can change without notice',
            'Timing — the moment or period at which it is read, and what "the price on a date" means when a market trades continuously',
            'Availability — what happens if the source does not publish, the market does not trade, or the series is discontinued',
            'Revision — whether a later correction to the published figure changes an already-settled price',
            'Adjustment — the differential applied to the reference to reach the transaction price, and how it is determined',
          ],
        },
        {
          type: 'paragraph',
          text: 'The availability and revision points are the ones most often neglected and most often consequential. A reference that is normally reliable will occasionally be absent — a market closure, a publication suspension, a methodology change, a discontinued series — and an instrument that has not said what happens then has a gap at exactly the moment it matters.',
        },
      ],
    },
    {
      id: 'commercial-and-policy-uses-are-different',
      heading: 'Commercial and policy uses are different',
      body: [
        {
          type: 'paragraph',
          text: 'The phrase "reference price" appears in two quite separate worlds, and readers move between them without noticing. In a commercial contract, a reference price is a pricing input: the figure the parties agreed to point at so their contract can price itself. In policy and regulatory instruments, "reference price" often means something else entirely — a threshold or trigger written into a rule, against which an observed price is compared to determine whether some measure applies.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Commercial reference',
              description:
                'A figure a contract points to so the transaction price can be determined. Its function is to price a deal. The parties chose it and could have chosen otherwise.',
            },
            {
              term: 'Policy threshold',
              description:
                'A figure written into a rule against which market prices are compared, determining whether an instrument engages. Its function is to trigger something. No party chose it, and it prices no transaction.',
            },
            {
              term: 'Statistical reference',
              description:
                'A figure used as a comparison point in analysis or in an index base period. Its function is measurement. It neither prices a deal nor triggers a rule.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'These are not variants of one concept. A policy threshold does not price anything and a commercial reference triggers nothing, and confusing the two produces genuine misreadings — most commonly, treating a threshold written into a rule as though it were a statement about what the market is worth, or treating a contract’s chosen anchor as though it carried official standing.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Read the instrument, not the phrase',
          text: 'Because the term is defined by its role, the only way to know what a "reference price" is in any document is to read what that document says it is. AgricultureID publishes no reference prices of any kind and does not identify the reference used in any contract, scheme, or instrument.',
        },
      ],
    },
    {
      id: 'why-contracts-reference-rather-than-fix',
      heading: 'Why contracts reference rather than fix',
      body: [
        {
          type: 'paragraph',
          text: 'Referencing separates two decisions that a flat price would force together: what the physical lot is worth relative to the market, and what the market is worth. A contract written as reference plus differential lets the parties agree the first when they agree the lot, and settle the second later by a mechanism they have both accepted in advance.',
        },
        {
          type: 'paragraph',
          text: 'It also substitutes an external, mutually observable figure for a bilateral negotiation. Neither party sets the reference, and neither can move it, which is why referencing survives disagreements that a flat-price negotiation would not. The cost is dependence: both parties now rely on the source continuing to publish an unambiguous figure under a stable methodology, which is a real exposure and not a formality.',
        },
      ],
    },
  ],
  definition:
    'A reference price is any figure that a contract, formula, rule, or scheme designates as the anchor from which another price is determined. It is defined by the role assigned to it rather than by how it was produced, and may be a market quotation, a futures settlement, a computed index, a composite indicator, or a figure fixed by an authority.',
  usageContext:
    'Contract drafting and physical commodity pricing, where transactions are written as a named reference plus or minus a differential; also in policy instruments and statistical work, where the same phrase denotes a threshold or a comparison base rather than a pricing input.',
  notToBeConfusedWith: [
    'Benchmark price — a benchmark is a specific market quotation that convention has made a common anchor. Reference price is the general role of being pointed to. A benchmark is a reference price when a contract references it; but a contract can reference an index, an indicator, or an administered figure, none of which is a benchmark.',
    'The transaction price — a reference price is an input, not an outcome. The price actually paid is the reference adjusted by the applicable differential, and the two are routinely different by a substantial margin.',
    'A policy threshold — in regulatory instruments, "reference price" often means a trigger level written into a rule, compared against observed prices to determine whether a measure applies. It prices no transaction and no party chose it. Reading a threshold as a market valuation is a common and serious error.',
    'An official price — most reference prices carry no official standing whatsoever. They are figures the parties chose. That a contract points at a number gives that number authority between those parties and nowhere else.',
    'A price forecast — a reference price for a deferred period is the current price of that deferred instrument, not a prediction of anything. Referencing a forward month does not make the contract a forecast.',
    'A composite indicator price — an indicator is a specific computed statistic published by an organisation under a stated methodology. It is one candidate for the reference role, not a synonym for it.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No reference prices, thresholds, indices, or settlement values are published here, for any commodity, contract, scheme, or jurisdiction.',
    'This page does not advise on contract drafting, does not recommend any reference, and does not evaluate whether a reference is suitable for a transaction. Contract terms are a legal matter for the parties and their advisers.',
    'Where a policy instrument uses the phrase, the operative meaning is whatever that instrument defines it to be, under the law in force. Nothing here interprets any instrument.',
    'Reference-source methodologies are versioned and can change; the mechanics of any specific reference must be read from its publisher’s current documentation.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'composite-indicator-price' },
    { type: 'market-term', slug: 'crush-spread' },
    { type: 'market-term', slug: 'deferred-pricing' },
    { type: 'market-term', slug: 'forward-contract' },
    { type: 'market-term', slug: 'freight-parity' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'minimum-price' },
    { type: 'market-term', slug: 'origin-differential' },
    { type: 'market-term', slug: 'premium-and-discount' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-index' },
    { type: 'market-term', slug: 'quality-premium' },
    { type: 'market-term', slug: 'spot-price' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  sourceReferences: [
    {
      sourceId: 'ico',
      citedFor:
        'An intergovernmental organisation publishing a calculated price indicator used as a reference in the coffee trade',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Reference quotation conventions in international grain and oilseed contracts',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The use of defined price thresholds within agricultural trade rules',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Analysis of formula pricing and reference-based contracting in agricultural markets',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Which figure fills the role, and what the phrase means in any given instrument, is entirely specific to the contract, scheme, or regulation concerned.',
  limitations: [
    'A definition of a role, not an identification of any reference used in any contract, scheme, or policy instrument.',
    'The phrase carries materially different meanings in commercial, policy, and statistical contexts; only the instrument using it can settle which applies.',
    'Reference sources change methodology, suspend publication, and discontinue series; the durability of any reference is a property of that source, not of the concept.',
    'This page does not address the legal consequences of a reference becoming unavailable, which depend on the contract and the governing law.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Reference Price: Defined by Its Role, Not Its Source',
    description:
      'What a reference price is: the figure a contract or rule points to as a pricing anchor, and why the commercial and policy meanings are not the same.',
    keywords: [
      'reference price',
      'pricing reference',
      'formula pricing',
      'reference price definition',
      'benchmark versus reference price',
    ],
  },
  structuredData: { article: true },
};
