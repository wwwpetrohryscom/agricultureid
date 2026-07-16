import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const spotPrice: MarketTermContent = {
  id: 'market-term-spot-price',
  slug: 'spot-price',
  contentType: 'market-term',
  title: 'Spot Price',
  alternativeNames: ['Cash price', 'Prompt price'],
  category: 'Market term',
  subcategory: 'Price formation',
  marketTermClass: 'price-formation',
  summary:
    'A spot price is the price for a commodity available for immediate or near-immediate delivery, for a specific lot at a specific place and quality. It is the price of something that exists now — which is what separates it from every price for something that will exist later.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A spot price is what a physical lot of a commodity changes hands for when the delivery is prompt rather than deferred. "Prompt" is a commercial convention rather than an instant: it means delivery within the short window the trade treats as immediate, which differs by commodity, by market, and by how the lot is moved. The essential point is that a spot price is attached to a physical thing that exists, at a place, in a condition, at a moment.',
    },
    {
      type: 'paragraph',
      text: 'This is why there is no such thing as "the" spot price of a commodity. The same crop, on the same day, has as many spot prices as it has combinations of location, quality, quantity, and delivery term — and the differences between them are not noise. A price at a country elevator and a price at an export terminal on the same day describe different economic objects, and the gap between them is the transport, handling, and local balance that separates the two.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Price formation — the price of a lot available now',
    },
    {
      label: 'Delivery',
      value:
        'Immediate or near-immediate, on whatever window the market treats as prompt',
    },
    {
      label: 'Attached to',
      value:
        'A specific lot: a location, a quality, a quantity, and a delivery term',
    },
    {
      label: 'Plural by nature',
      value:
        'One commodity has many simultaneous spot prices — one per location, quality, and delivery term',
    },
    {
      label: 'Relationship to futures',
      value:
        'The gap between a spot price and a reference contract price is basis',
    },
    {
      label: 'Common misuse',
      value:
        'Treating a single reported spot quotation as the price of the commodity everywhere',
    },
  ],
  sections: [
    {
      id: 'what-prompt-means',
      heading: 'What "prompt" means, and why it is not "instant"',
      body: [
        {
          type: 'paragraph',
          text: 'Spot is defined against deferred, not against zero. A commodity cannot be teleported; even the promptest physical transaction takes as long as loading and moving takes. Each market therefore has a customary window inside which delivery counts as spot, and that window is set by the physical realities of the trade — how the commodity is handled, how far it must move, and how the payment mechanism works.',
        },
        {
          type: 'paragraph',
          text: 'The consequence is that "spot" is a convention that must be read from the market being quoted, not assumed. A spot quotation for a bulk commodity loading at a terminal and a spot quotation for a perishable moving by air are both spot, and they describe very different delivery realities. Anyone comparing spot prices across markets is implicitly comparing two conventions as well as two prices.',
        },
      ],
    },
    {
      id: 'why-there-is-no-single-spot-price',
      heading: 'Why there is no single spot price',
      body: [
        {
          type: 'paragraph',
          text: 'A spot price describes a lot, and lots differ. The dimensions along which they differ are not incidental details — they are the whole reason two prices for the same commodity on the same day are not the same price.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Location',
              description:
                'Where the lot physically is. A commodity at origin and the same commodity at a destination market differ by everything it costs to close that distance, and by whether capacity to close it is available.',
            },
            {
              term: 'Quality',
              description:
                'What the lot actually measures. Two lots of nominally the same commodity with different quality parameters are different products commercially, however similar their names.',
            },
            {
              term: 'Delivery term',
              description:
                'Which party bears cost and risk to which point. A price quoted at the farm gate, at a terminal, and free-on-board are three different prices for the same lot, because each includes a different set of costs.',
            },
            {
              term: 'Quantity and lot integrity',
              description:
                'A full cargo, a container, and a truckload of the same commodity do not price alike; scale and the cost of assembling a lot both enter the price.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No prices are published here',
          text: 'AgricultureID carries no spot prices, no cash quotations, and no historical price series for any commodity, location, or date. This page explains what a spot price is so that a quotation obtained from a market reporting service or authority can be read against its own stated basis.',
        },
      ],
    },
    {
      id: 'reading-a-reported-spot-quotation',
      heading: 'Reading a reported spot quotation',
      body: [
        {
          type: 'paragraph',
          text: 'Market reporting services and public authorities publish spot and cash quotations, and a published quotation is only interpretable against the specification the publisher attaches to it. That specification is the quotation; the number on its own is not.',
        },
        {
          type: 'list',
          items: [
            'The delivery point and delivery term the quotation is on — without these, the number includes an unknown set of costs',
            'The quality basis assumed, and how deviations from it are treated',
            'What was actually observed — reported transactions, bids, offers, or an assessed value where transactions were too few to observe',
            'The period covered — a daily quotation, a weekly average, and a range are different statistics, not different presentations of the same one',
            'The unit and currency, which a spot price carries from its own market',
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction between an observed transaction price and an assessed value deserves particular care. Where a market is thin, a reporting service may publish an assessment reflecting its judgement of value in the absence of sufficient trades. That is a legitimate and disclosed methodology, but an assessed value and a transacted price are different kinds of fact, and a reader who conflates them will over-read the precision of the number.',
        },
      ],
    },
  ],
  definition:
    'A spot price is the price agreed for a specific physical lot of a commodity available for immediate or near-immediate delivery, at a stated location, quality, quantity, and delivery term. Because it describes a particular lot rather than a commodity in general, a commodity has many simultaneous spot prices rather than one.',
  usageContext:
    'Physical commodity trade and market reporting, where cash and spot quotations describe what lots available now are changing hands for at named locations, and serve as the physical anchor against which basis is measured.',
  notToBeConfusedWith: [
    'Futures price — a futures price is the price of a standardised contract for a future delivery period, at a contract-specified quality and delivery mechanism. A spot price is the price of an actual lot available now. The difference between them is basis, and it is not an error or a lag.',
    'Forward price — a forward price is agreed now for delivery later. It is not a spot price observed early, and it is not a forecast of what the spot price will be at that later date; it is the price of a different transaction.',
    'The commodity price — there is no such thing as one spot price for a commodity. A single reported quotation describes one location, quality, and delivery term, and generalising it to a national or global "price" discards exactly the information that made it meaningful.',
    'A benchmark or reference price — a benchmark is a designated quotation selected to serve as a common anchor for other pricing. Many spot prices exist; only some are designated as benchmarks, and being a benchmark is a role rather than a property of the price itself.',
    'An assessed price — where transactions are too few to observe, a reporting service may publish an assessment of value under a disclosed methodology. An assessment and an observed transaction price are different kinds of fact and should not be read with the same precision.',
    'Spot as "instant" — spot means prompt on the market’s own customary window, not immediate. The window is a commercial convention and differs by commodity and trade.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No spot prices, cash quotations, price ranges, or historical price series are published on this page or anywhere on AgricultureID, for any commodity, location, or date.',
    'This page does not identify where to obtain prices for a particular market, does not compare reporting services, and does not endorse any price source.',
    'Nothing here supports a judgement about whether a quoted spot price is high, low, fair, or favourable. Those judgements require the specific market, lot, and moment, and belong to the commercial party making them.',
    'Prompt-delivery conventions, quality bases, and delivery terms differ by market; a quotation must be read against its own publisher’s stated methodology, not against this page.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'milled-rice' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'basis' },
    { type: 'market-term', slug: 'benchmark-price' },
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'deferred-pricing' },
    { type: 'market-term', slug: 'forward-contract' },
    { type: 'market-term', slug: 'freight-parity' },
    { type: 'market-term', slug: 'futures-contract' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'reference-price' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'fob-delivery-term' },
    { type: 'trade-concept', slug: 'exw-delivery-term' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ams',
      citedFor:
        'Public market news reporting of cash and spot quotations by location, quality, and delivery term',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain and oilseed physical market structure and quotation conventions',
    },
    {
      sourceId: 'fao',
      citedFor: 'Commodity market information and price reporting concepts',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. What counts as prompt delivery, which delivery terms are customary, and which quality basis is assumed are all market-specific conventions.',
  limitations: [
    'A definition of a term, not a directory of price sources or a guide to any market’s quotation conventions.',
    'The prompt-delivery window that distinguishes spot from forward is a convention with no universal definition; it must be read from the market concerned.',
    'Reported spot quotations may be observed transactions or methodological assessments; the two are different kinds of fact and the distinction is the publisher’s to disclose.',
    'Comparing spot prices across locations, qualities, or delivery terms requires reconciling all three; the raw numbers are not comparable as published.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Spot Price: Why a Commodity Has Many, Not One',
    description:
      'What a spot price means: the price of a lot available for prompt delivery at a stated place and quality, and why one commodity has many spot prices.',
    keywords: [
      'spot price',
      'cash price',
      'spot price definition',
      'prompt delivery',
      'commodity spot market',
      'price formation',
    ],
  },
  structuredData: { article: true },
};
