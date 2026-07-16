import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const crushSpread: MarketTermContent = {
  id: 'market-term-crush-spread',
  slug: 'crush-spread',
  contentType: 'market-term',
  title: 'Crush Spread',
  alternativeNames: [
    'Board crush',
    'Processing spread',
    'Gross processing margin (as quoted)',
  ],
  category: 'Market term',
  subcategory: 'Price relationship',
  marketTermClass: 'price-relationship',
  summary:
    'A crush spread is the difference between the quoted price of an oilseed and the combined quoted prices of the products it yields, weighted by a conversion assumption. It is a relationship between quotations — not a processor’s margin, and not a measure of anyone’s profitability.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Crushing an oilseed turns one commodity into several: soybeans yield meal and oil, rapeseed yields meal and oil, and each of the outputs has its own market and its own price. Because the transformation is physical and reasonably consistent, the input and outputs are economically linked, and that linkage can be expressed arithmetically. A crush spread does exactly that: it takes the quoted prices of the products, weights them by an assumed yield, and subtracts the quoted price of the seed.',
    },
    {
      type: 'paragraph',
      text: 'The result is a number that looks very much like a margin, and this resemblance is the concept’s principal hazard. A crush spread is a relationship between market quotations, constructed with an assumed conversion. A processor’s margin is what that processor actually earns, given their own plant’s yields, their own conversion costs, their own procurement and sales contracts, and their own timing. These two quantities are related in the way a weather forecast is related to whether you personally got wet.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Price relationship — an inter-commodity spread with a conversion assumption',
    },
    {
      label: 'Construction',
      value:
        'Weighted quoted product prices, minus the quoted price of the input seed',
    },
    {
      label: 'Requires',
      value:
        'A yield assumption — how much of each product a unit of seed is taken to produce',
    },
    {
      label: 'Contains only',
      value: 'Quoted prices and an assumed conversion',
    },
    {
      label: 'Excludes',
      value:
        'Processing costs, energy, labour, capital, plant-specific yields, and actual contract terms',
    },
    {
      label: 'Applies to',
      value: 'Oilseeds with traded markets for both the seed and its products',
    },
    {
      label: 'Critical caution',
      value:
        'It is not a margin; it resembles one, which is why it is misread so consistently',
    },
  ],
  sections: [
    {
      id: 'the-conversion-assumption',
      heading: 'The conversion assumption',
      body: [
        {
          type: 'paragraph',
          text: 'A crush spread cannot be computed without deciding how much of each product a unit of seed becomes. That decision is an assumption, and it is embedded in the figure permanently and invisibly. Two crush spreads computed from identical quotations with different yield assumptions are different numbers, and neither is more correct than the other in the abstract — they are answers to slightly different questions.',
        },
        {
          type: 'paragraph',
          text: 'The assumption is usually a conventional one, standing for a typical processing outcome. Real plants deviate from it in both directions, because yields depend on the seed’s own composition, the plant’s technology and condition, and how the plant is being operated. A processor whose actual yields differ from the convention is looking at a figure computed for someone else’s plant.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Yield assumption',
              description:
                'How much meal and how much oil a unit of seed is taken to produce. A convention, not a measurement, and not a property of any particular plant or any particular seed lot.',
            },
            {
              term: 'Unit reconciliation',
              description:
                'The seed and its products are frequently quoted in different units. Converting them onto a common basis is a necessary step that introduces its own arithmetic, and an error here is silent.',
            },
            {
              term: 'Contract alignment',
              description:
                'The quotations used should refer to compatible delivery periods. Combining an input price for one period with product prices for another embeds a time relationship in what purports to be a processing relationship.',
            },
            {
              term: 'Quotation basis',
              description:
                'The seed and product quotations may sit at different points in the chain and on different delivery terms. Where they do, the spread contains a locational difference that has nothing to do with processing.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-is-not-a-margin',
      heading: 'Why it is not a margin',
      body: [
        {
          type: 'paragraph',
          text: 'The gap between a crush spread and an actual processing margin is not a matter of precision. They are different quantities, and the list of what separates them is long, structural, and mostly invisible in the spread figure.',
        },
        {
          type: 'list',
          items: [
            'Conversion costs — energy, labour, maintenance, chemicals, and waste handling are entirely absent from the spread and are a substantial part of any real processing economics',
            'Capital — depreciation, financing, and the cost of the plant existing at all appear nowhere in a difference between quotations',
            'Plant-specific yields — the spread uses a convention; a plant earns on its own actual recovery, which differs by technology, condition, and operation',
            'Seed composition — the oil content of the actual seed purchased determines actual yields, and varies by variety, season, and origin',
            'Contract reality — a processor buys and sells on their own contracts at their own times, not at a set of simultaneous quotations',
            'Basis — the processor transacts physical seed and physical products at locations with their own differentials, none of which the quoted spread contains',
            'Capacity and operating decisions — a plant that is not running earns nothing regardless of what the spread shows',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A spread is not evidence about anyone’s profitability',
          text: 'A crush spread describes a relationship between quotations. Inferring from it that processors are profitable, unprofitable, or earning any particular amount is unsupported — the figure omits every cost of processing and every fact about any actual plant. AgricultureID publishes no crush spread levels, no yield assumptions, and no processing cost figures.',
        },
      ],
    },
    {
      id: 'what-the-relationship-does-express',
      heading: 'What the relationship does express',
      body: [
        {
          type: 'paragraph',
          text: 'Having established what a crush spread is not, it is worth being precise about what it is. It expresses the market’s current pricing of a transformation: what the products are quoted at, relative to the input, given a conventional conversion. That is a genuine and useful piece of information about how a market is valuing an input against its outputs, and it is observable in a way that any individual plant’s economics are not.',
        },
        {
          type: 'paragraph',
          text: 'The relationship exists because the transformation is real. Processing capacity connects the seed market to the meal and oil markets physically, and that physical connection is why the prices do not wander independently. When the products are quoted well above the seed, processing is being encouraged and more seed is drawn into crushing; when they are not, the reverse. This is a description of a mechanism operating in the market, and it is the reason the spread is worth computing at all.',
        },
        {
          type: 'paragraph',
          text: 'What it will not do is tell you what any processor earns, whether any plant will run, or where any of the three prices is going. Those questions require the plant’s own data, the operator’s own contracts, and information that no relationship between quotations contains.',
        },
      ],
    },
  ],
  definition:
    'A crush spread is the difference between the combined quoted prices of the products an oilseed yields — weighted by an assumed conversion — and the quoted price of the seed itself. It expresses how a market is pricing a transformation, and it contains only quotations and a yield assumption: no processing cost, no plant-specific yield, and no party’s actual contracts.',
  usageContext:
    'Oilseed markets where the seed and its principal products have separate traded quotations, used in market analysis to describe how the market is currently valuing the transformation of input into outputs.',
  notToBeConfusedWith: [
    'A processing margin — this is the essential distinction. A margin is what a processor earns after their own conversion costs, on their own plant’s yields, under their own contracts. A crush spread contains none of those. The two are different quantities, and the resemblance between them is the reason the confusion is so common and so consequential.',
    'A measure of processor profitability — a spread omits energy, labour, capital, maintenance, and every plant-specific fact. No conclusion about whether processing is profitable follows from it.',
    'A yield measurement — the conversion in a crush spread is a convention standing for a typical outcome. It is not a measurement of any seed lot or any plant, and real recoveries deviate from it in both directions.',
    'Basis — a basis relates a physical cash price to a reference. A crush spread relates quotations for different commodities to each other. Neither contains the other, and a processor faces both.',
    'A calendar spread — a calendar spread compares delivery periods of one contract and isolates time. A crush spread compares different commodities and isolates a transformation. Both are spreads, and they answer unrelated questions.',
    'A trading signal or opportunity — the spread is a description of a price relationship. It indicates no position, and executing anything resembling it would require transacting several instruments with their own risks, costs, and regulatory treatment.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No crush spread levels, series, yield assumptions, conversion ratios, or processing cost figures are published here for any oilseed or market.',
    'This page must not be used to infer processor profitability, plant viability, or the economics of any processing operation. The spread omits every cost of processing.',
    'Nothing here describes a strategy or recommends a position. Positions resembling a processing spread involve multiple instruments, each carrying risk, and are a regulated activity in most jurisdictions.',
    'Conventional yield assumptions differ by market and by source and are revised; any spread figure obtained elsewhere must be read against the assumption its publisher used.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'rapeseed' },
    { type: 'commodity', slug: 'sunflower-seed' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'hedging' },
    { type: 'market-term', slug: 'reference-price' },
    { type: 'market-term', slug: 'spread' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ers',
      citedFor:
        'Market structure analysis of oilseed processing and the relationship between seed, meal, and oil markets',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Oilseed, meal, and vegetable oil market structure and product relationships',
    },
    {
      sourceId: 'amis',
      citedFor: 'Oilseed and product balance and market information concepts',
    },
    {
      sourceId: 'fao',
      citedFor: 'Oilseed processing and product classification concepts',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept, applicable to oilseeds with traded quotations for both the seed and its principal products. Conventions, units, and quotation bases are market-specific.',
  limitations: [
    'A definition of a price relationship, not a margin calculation, a yield figure, or an assessment of any processing operation.',
    'The conversion assumption is a convention embedded invisibly in every crush spread; real yields depend on seed composition and plant characteristics and differ from it.',
    'Where the seed and product quotations sit at different locations, delivery terms, or periods, the spread silently contains those differences alongside the transformation.',
    'The relationship describes market pricing of a transformation and contains no information about any operator’s costs, contracts, or decisions.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Crush Spread: A Price Relationship, Not a Margin',
    description:
      'What a crush spread is: quoted product prices weighted by an assumed conversion, minus the quoted seed price — and why it is not a processing margin.',
    keywords: [
      'crush spread',
      'board crush',
      'processing spread',
      'soybean crush',
      'crush spread definition',
      'oilseed processing',
    ],
  },
  structuredData: { article: true },
};
