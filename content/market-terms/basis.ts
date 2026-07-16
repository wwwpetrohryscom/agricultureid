import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const basis: MarketTermContent = {
  id: 'market-term-basis',
  slug: 'basis',
  contentType: 'market-term',
  title: 'Basis',
  alternativeNames: ['Cash basis', 'Basis level'],
  category: 'Market term',
  subcategory: 'Price relationship',
  marketTermClass: 'price-relationship',
  summary:
    'Basis is the difference between the cash price for a physical lot at a particular place, time, and quality and the futures or reference price it is quoted against. It is not a market of its own — it is the arithmetic gap between two quotations that describe different things.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A futures or reference price describes a standardised, delivery-specified contract. A cash price describes an actual lot of grain, oilseed, or soft commodity, of a stated quality, in a stated place, available at a stated time. These two numbers are never the same number, because they are not descriptions of the same thing. Basis is the name for the difference between them, and it is conventionally expressed as the cash price minus the reference price — so a cash price below the reference gives a negative basis, and one above it gives a positive basis.',
    },
    {
      type: 'paragraph',
      text: 'The value of the concept is interpretive rather than predictive. Basis is where all the information that a reference price deliberately excludes has to go: the cost of moving the physical lot to where the reference contract would be delivered, the difference between the lot’s quality and the contract’s specification, local storage and handling, and the balance of local supply against local demand. Reading a basis correctly means knowing which reference it is quoted against and what that reference specifies, because a basis figure is meaningless without both.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Price relationship — a difference, not a price' },
    {
      label: 'Construction',
      value:
        'Cash price at a stated location and quality, minus a named futures or reference price',
    },
    {
      label: 'Sign convention',
      value:
        'Cash below the reference is a negative basis (quoted "under"); cash above it is positive (quoted "over")',
    },
    {
      label: 'Always relative to',
      value:
        'A specific reference contract, month, delivery specification, and quality basis',
    },
    {
      label: 'Carries',
      value:
        'Transport to the reference delivery point, quality difference, handling, storage, and local balance',
    },
    {
      label: 'Not comparable',
      value:
        'Two basis figures quoted against different references, months, or quality bases describe different quantities',
    },
    {
      label: 'Usage',
      value:
        'Physical grain and oilseed trade; contracts are frequently priced as reference plus or minus an agreed basis',
    },
  ],
  sections: [
    {
      id: 'what-basis-measures',
      heading: 'What basis actually measures',
      body: [
        {
          type: 'paragraph',
          text: 'A futures contract is a deliberately narrow instrument. It names a commodity, a quality specification, a delivery period, and a delivery location or mechanism. Everything outside that specification is excluded from the futures price by design — that exclusion is what makes the contract fungible and therefore tradable. But physical commodities are not fungible: a tonne of wheat in a country elevator far from an export terminal is not the same economic object as a tonne meeting contract specification at the delivery point.',
        },
        {
          type: 'paragraph',
          text: 'Basis is the residual that reconciles the two. It is the sum of everything the reference price refuses to describe, collapsed into a single figure. This is why basis is best read as a composite rather than as a signal: it is not one thing, and a change in it does not tell you which of its components moved.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Locational component',
              description:
                'The cost and availability of moving the physical lot from where it is to where the reference contract is deliverable. Freight, and freight capacity, sit here.',
            },
            {
              term: 'Quality component',
              description:
                'The difference between the lot’s measured quality and the contract’s specification, priced through the contract’s discount and premium schedule or through commercial negotiation.',
            },
            {
              term: 'Time component',
              description:
                'The gap between when the lot is available and the reference month being quoted, which brings storage and carrying costs into the figure.',
            },
            {
              term: 'Local balance component',
              description:
                'Local supply against local demand — elevator space, processor demand, harvest pressure, export programme activity — none of which the reference contract observes.',
            },
          ],
        },
      ],
    },
    {
      id: 'reading-a-basis-quotation',
      heading: 'Reading a basis quotation',
      body: [
        {
          type: 'paragraph',
          text: 'A basis figure without its accompanying specification cannot be interpreted. Before a quoted basis means anything, a reader needs to know four things: which reference contract it is quoted against, which contract month, what quality is assumed, and at what point in the chain the cash price applies. Change any one and the number changes, without anything in the physical market having moved at all.',
        },
        {
          type: 'list',
          items: [
            'The named reference — a basis against one contract is not comparable with a basis against another, even for the same commodity',
            'The reference month — rolling a quotation from a nearby month to a deferred one shifts the basis mechanically',
            'The quality basis — a basis quoted for contract-specification quality is not a basis for a lot that differs from it',
            'The delivery point and delivery term — farm gate, country elevator, terminal, and free-on-board quotations sit at different points in the chain and carry different costs',
            'The unit and currency — a basis is a difference between two prices and inherits whatever units and currency those prices carry',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'This page defines a term; it does not evaluate one',
          text: 'AgricultureID publishes no basis levels, no historical basis series, and no view on whether any basis is wide, narrow, strong, or weak. Those judgements require a specific market, location, quality, and moment, and belong to the commercial party making them. This page exists so that a basis figure obtained elsewhere can be read for what it is.',
        },
      ],
    },
    {
      id: 'why-basis-exists-as-a-contract-mechanism',
      heading: 'Why basis exists as a contract mechanism',
      body: [
        {
          type: 'paragraph',
          text: 'In much of the physical grain and oilseed trade, contracts are not written as a flat price at all. They are written as a named reference price plus or minus an agreed basis — a structure that lets the two parties settle the locational and quality question at one time and the outright price question at another. The basis is agreed when the physical lot and its destination are agreed; the reference price is fixed later, by a separate mechanism the contract specifies.',
        },
        {
          type: 'paragraph',
          text: 'This is a structural fact about how physical contracts are written, not a technique to be applied. It matters for reading market information because it means a great deal of reported commercial activity concerns the basis alone, with the reference price component still open. A report that a lot traded "at a basis of X under the reference" is a statement about the locational and quality gap, and says nothing whatsoever about the outright price the seller will ultimately receive.',
        },
        {
          type: 'paragraph',
          text: 'Public market reporting reflects this. Reporting services that publish cash market information for physical commodities generally publish it as location-specific quotations or as differentials against a named reference, precisely because a single national price for a physical commodity would conceal the locational structure that basis exists to express.',
        },
      ],
    },
    {
      id: 'where-the-concept-breaks-down',
      heading: 'Where the concept breaks down',
      body: [
        {
          type: 'paragraph',
          text: 'Basis is well defined only where a reference price exists that the physical market genuinely relates to. Many agricultural commodities have no such reference, and for those the concept simply does not apply — the cash price is the whole of the price, and there is no gap to name.',
        },
        {
          type: 'list',
          items: [
            'Commodities with no established futures or reference contract have no basis, only a price',
            'Where the physical lot bears little resemblance to the contract specification, the "basis" absorbs so much quality difference that it stops functioning as a locational measure',
            'Where a reference contract is thinly traded, the reference price itself is a weak anchor and the basis inherits that weakness',
            'A basis computed against a composite indicator or an index — rather than against a deliverable contract — is a different quantity, because an indicator is not something a lot can be delivered against',
          ],
        },
      ],
    },
  ],
  definition:
    'Basis is the difference between the cash price of a physical commodity lot — at a stated location, time, and quality — and a named futures or reference price quoted for the same or a comparable commodity, conventionally expressed as cash minus reference. It is the composite of transport, quality difference, carrying cost, and local supply and demand that the reference price’s standardised specification deliberately excludes.',
  usageContext:
    'Physical grain, oilseed, and soft commodity trade, where contracts are commonly written as a named reference price plus or minus an agreed basis rather than as a flat price. Also used in market reporting to express location-specific cash values against a common anchor.',
  notToBeConfusedWith: [
    'Spread — a spread is the difference between two futures or reference prices (different months, commodities, or markets); a basis is the difference between a physical cash price and a reference price. A spread compares two paper quotations; a basis compares paper with physical.',
    'Premium and discount — these are adjustments applied for a stated reason, most often quality against a specification. A basis is a composite that contains quality adjustments among several other components, and is not attributable to any single cause.',
    'Freight cost — freight is one component of basis, not the whole of it. A basis that equals freight would imply identical quality and a perfectly balanced local market, which is a coincidence rather than a rule.',
    'Origin differential — an origin differential compares one production origin against another or against a common reference, at a comparable point in the chain. A basis is anchored to a specific local delivery point and a specific reference contract, and is not a statement about origins.',
    'The price — a basis is not a price and cannot be paid. It is one of two components a flat price is assembled from, and quoting a basis alone leaves the outright price entirely undetermined.',
    'A market signal — basis is a description of a relationship at a point in time, not an indicator of direction. Its components move for unrelated reasons, and a change in the composite does not identify which component moved or what will happen next.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No basis levels, basis ranges, historical basis series, or basis "norms" are published here, for any commodity or location. Any figure of that kind would be an invented quantity presented as evidence.',
    'This page does not describe how to set, negotiate, hedge, or trade a basis, and does not evaluate whether any basis is favourable. Those are commercial decisions belonging to the party making them.',
    'The illustrative expressions used here ("a basis of X under the reference") are deliberately abstract placeholders. They are not stylised examples of real levels and must not be read as such.',
    'Basis conventions — sign, unit, currency, delivery point, and the reference used — differ by market and by reporting service. A basis figure obtained elsewhere must be read against that source’s stated conventions, not against this page.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'crush-spread' },
    { type: 'market-term', slug: 'deferred-pricing' },
    { type: 'market-term', slug: 'forward-contract' },
    { type: 'market-term', slug: 'freight-parity' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'hedging' },
    { type: 'market-term', slug: 'origin-differential' },
    { type: 'market-term', slug: 'premium-and-discount' },
    { type: 'market-term', slug: 'quality-premium' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spot-price' },
    { type: 'market-term', slug: 'spread' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ams',
      citedFor:
        'Public cash market reporting for physical commodities is published as location-specific quotations',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain and oilseed market structure, and the role of reference quotations in physical trade',
    },
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of cash and futures price relationships in agricultural markets',
    },
    {
      sourceId: 'amis',
      citedFor:
        'Market information framework for internationally traded grains and oilseeds',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept, but meaningful only where an established reference contract exists that the local physical market relates to. Conventions, delivery points, quality bases, and sign notation are market-specific.',
  limitations: [
    'A definition of a term, not a description of any particular market’s basis structure or conventions.',
    'The concept applies only where a reference price exists; for commodities without one, there is a cash price and no basis.',
    'Basis components cannot be separated from a quoted figure — the composite does not decompose into freight, quality, and local balance without information the quotation does not carry.',
    'Sign conventions, units, and delivery points vary by market and reporting service; a figure from one source is not comparable with a figure from another without reconciling both.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Basis: Cash Price Against a Reference Price, Explained',
    description:
      'What basis means in physical commodity trade: the gap between a cash price and a named reference price, what it contains, and how it differs from a spread.',
    keywords: [
      'basis',
      'cash basis',
      'basis definition',
      'cash versus futures price',
      'grain basis',
      'price relationship',
    ],
  },
  structuredData: { article: true },
};
