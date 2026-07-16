import type { MarketTermContent } from '@/types/content';
import { NO_LIVE_PRICE_NOTE } from '@/types/trade';

export const supplyAndDemandBalanceSheet: MarketTermContent = {
  id: 'market-term-supply-and-demand-balance-sheet',
  slug: 'supply-and-demand-balance-sheet',
  contentType: 'market-term',
  title: 'Supply and Demand Balance Sheet',
  alternativeNames: [
    'Commodity balance sheet',
    'Supply and utilisation account',
    'S&D balance',
  ],
  category: 'Market term',
  subcategory: 'Market measurement',
  marketTermClass: 'market-measurement',
  summary:
    'A balance sheet accounts for a commodity over a marketing year: what was available, what was used, and what remains. It is an accounting identity that must balance by construction — which is why the item that makes it balance is the one carrying all the uncertainty.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A supply and demand balance sheet is the basic accounting framework for a commodity market. Over a defined marketing year, it sets out what was available — the stocks carried in from the previous year, the production of the current one, and imports — against what was used — domestic consumption in its various forms, and exports — and arrives at the stocks carried out at the end. It is the market’s equivalent of a set of accounts, and organisations including the IGC, AMIS, USDA, and FAO publish balance estimates for the major traded commodities.',
    },
    {
      type: 'paragraph',
      text: 'Its structure is an identity: total supply must equal total use plus ending stocks, because the commodity has to be somewhere. That is what gives the framework its analytical power — every quantity is constrained by every other, so a change anywhere must be accommodated somewhere. It is also, precisely, the source of its central weakness. An identity that must balance will always balance, including when its components are wrong, and it balances by adjusting whichever item is least directly observed.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Market measurement — an accounting framework for a marketing year',
    },
    {
      label: 'Supply side',
      value: 'Opening stocks, production, and imports',
    },
    {
      label: 'Use side',
      value: 'Domestic use in its categories, exports, and ending stocks',
    },
    {
      label: 'Structure',
      value:
        'An identity — supply equals use plus ending stocks, by construction',
    },
    {
      label: 'Consequence of the identity',
      value: 'It always balances, including when components are wrong',
    },
    {
      label: 'Weakest item',
      value:
        'Stocks — frequently the residual, absorbing every error elsewhere',
    },
    {
      label: 'Nature of the figures',
      value:
        'Estimates, revised repeatedly as the year progresses and afterwards',
    },
  ],
  sections: [
    {
      id: 'the-structure',
      heading: 'The structure of the account',
      body: [
        {
          type: 'paragraph',
          text: 'The framework is deliberately simple, and its simplicity is what makes it usable across commodities and countries. Every item is a quantity over a marketing year for a defined geography, and the two sides must reconcile.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Opening stocks',
              description:
                'What was carried in from the previous year. Note that this is the previous year’s ending stocks, so any error there propagates forward into this year’s account.',
            },
            {
              term: 'Production',
              description:
                'What was harvested during the year. An estimate until the harvest is complete, and frequently an estimate afterwards too, since production is measured rather than counted.',
            },
            {
              term: 'Imports',
              description:
                'What came in. Comparatively well observed where customs reporting is good, and subject to all the caveats that apply to reported trade statistics.',
            },
            {
              term: 'Domestic use',
              description:
                'What was consumed, disaggregated by purpose — food, feed, processing, seed, and loss. The disaggregation is often less certain than the total.',
            },
            {
              term: 'Exports',
              description:
                'What went out. Like imports, comparatively observable, and subject to the same reporting caveats.',
            },
            {
              term: 'Ending stocks',
              description:
                'What remains at the year’s end. Structurally the most important item and usually the least directly measured — see below.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'A marketing year, not a calendar year, is the accounting period, and marketing years differ by commodity and by country because they follow harvests. This means balance sheets for different countries or commodities may cover different periods, and aggregating or comparing them requires attention to what period each actually spans.',
        },
      ],
    },
    {
      id: 'the-residual-problem',
      heading: 'The residual problem',
      body: [
        {
          type: 'paragraph',
          text: 'This is the single most important thing to understand about balance sheets, and it is a consequence of the identity rather than a flaw in anyone’s work. Most items in the account are estimated from some form of direct observation: production from surveys and remote sensing, trade from customs records, some use categories from industry reporting. Stocks are different. Stocks are held in millions of places — commercial elevators, processor inventories, on-farm storage, government reserves — and much of that is not reported to anyone.',
        },
        {
          type: 'paragraph',
          text: 'Because the account must balance, ending stocks frequently function as the item that makes it do so. If production was overestimated and use correctly estimated, the surplus has to appear somewhere, and it appears as stocks. If use was underestimated, stocks absorb that too. The result is that the item everyone watches most closely — because stocks are what buffer a market against a shortfall — is often the item constructed by subtraction, carrying the accumulated error of every other item in the account.',
        },
        {
          type: 'list',
          items: [
            'On-farm storage is substantial in many countries and is poorly observed almost everywhere',
            'Stocks held in some large producing and consuming countries are not published, so global figures contain estimates of what nobody has reported',
            'Because opening stocks are the previous year’s ending stocks, errors propagate forward and accumulate across years',
            'A revision to production or use in a prior year silently changes the stock position of every year since',
            'The disaggregation of use — food against feed against processing — is often more uncertain than the total, since the total is what the identity constrains',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The precision is real; the accuracy is separate',
          text: 'Balance sheets are published as tidy tables of specific quantities, and their tidiness conveys a confidence the underlying estimation does not support. AgricultureID publishes no balance sheet figures for any commodity, country, or year. This page describes what the framework is so that published figures can be read with the uncertainty that belongs to them.',
        },
      ],
    },
    {
      id: 'what-a-balance-sheet-is-for',
      heading: 'What the framework is actually for',
      body: [
        {
          type: 'paragraph',
          text: 'Given those weaknesses, it is worth being clear about why the framework is nonetheless indispensable. Its value is not in the precision of any individual figure. It is in the constraint: the identity means quantities cannot be considered in isolation, and a claim about one item is implicitly a claim about the others.',
        },
        {
          type: 'paragraph',
          text: 'This makes a balance sheet a discipline on reasoning. An assertion that production will fall sharply is, through the identity, also an assertion that some combination of use falling, imports rising, or stocks drawing down must occur — and each of those has its own plausibility that can be examined. Claims that survive the identity are more serious than claims that ignore it, and the framework’s main contribution is forcing the question of where the quantity goes.',
        },
        {
          type: 'paragraph',
          text: 'It is also the foundation for the stocks-to-use ratio, which relates the buffer at year end to the rate at which the commodity is consumed. That measure inherits every weakness described here, since it is computed from two items of the account, one of which is frequently the residual — a point worth carrying into any reading of it.',
        },
      ],
    },
  ],
  definition:
    'A supply and demand balance sheet is an accounting framework for a commodity over a marketing year and a defined geography, setting opening stocks, production, and imports against domestic use, exports, and ending stocks. It is an identity — supply equals use plus ending stocks by construction — and it therefore always balances, typically by adjusting the least directly observed item, which is usually stocks.',
  usageContext:
    'Commodity market analysis and food security monitoring, where organisations including the IGC, AMIS, USDA, and FAO publish balance estimates for major commodities as the basic framework for describing a market’s physical position.',
  notToBeConfusedWith: [
    'A measurement — a balance sheet is a set of estimates constrained by an identity, not a count. Most items are estimated indirectly, and at least one is typically derived by subtraction rather than observed at all.',
    'A forecast — a balance sheet describes a marketing year, and estimates for a current or coming year are projections of quantities, not predictions of prices. Nothing in the framework produces a price, and reading a balance as a price signal adds an inference the account does not contain.',
    'A financial balance sheet — the name is borrowed. A commodity balance sheet accounts for physical quantities over a period; a financial balance sheet reports assets and liabilities at a point. They share the word "balance" and the idea of an identity, and nothing else.',
    'An accurate stocks figure — ending stocks are frequently the residual that makes the identity hold, carrying the accumulated error of every other item. That stocks are the most watched item and the least reliably estimated is a structural property of the framework, not an occasional failing.',
    'A settled figure — balance sheets are revised repeatedly, as harvests are assessed, trade is reported, and prior years are corrected. A figure is a snapshot of an estimate, and revisions to past years silently alter the stock position of every year since.',
    'Comparable across sources — different organisations use different definitions, coverage, marketing years, and estimation methods. Balance figures from two publishers for the same commodity and year are not interchangeable.',
  ],
  advisoryLimitations: [
    NO_LIVE_PRICE_NOTE,
    'No balance sheet figures, quantities, estimates, or projections are published here for any commodity, country, or marketing year. Figures must be obtained from the publishing organisation with its own definitions and caveats.',
    'A balance sheet contains no prices and produces none. Nothing here supports inferring a price, a price direction, or a market outlook from any balance figure.',
    'Balance sheet items are estimates with substantial and unequal uncertainty, and at least one is typically a residual. The tabular presentation conveys a precision the estimation does not support.',
    'Definitions, coverage, and marketing years differ between publishing organisations; figures are not comparable across sources, and any figure must be read against its own publisher’s methodology.',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'barley-grain' },
  ],
  relatedTerms: [
    { type: 'market-term', slug: 'cash-market' },
    { type: 'market-term', slug: 'contango-and-backwardation' },
    { type: 'market-term', slug: 'price-discovery' },
    { type: 'market-term', slug: 'price-index' },
    { type: 'market-term', slug: 'price-volatility' },
    { type: 'market-term', slug: 'stocks-to-use-ratio' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'trade-flow-direction' },
    { type: 'trade-concept', slug: 'mirror-statistics' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
  ],
  sourceReferences: [
    {
      sourceId: 'amis',
      citedFor:
        'Balance sheet framework and market monitoring for major internationally traded food commodities',
    },
    {
      sourceId: 'igc',
      citedFor:
        'Grain and oilseed supply and demand balance estimates and their construction',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Supply and utilisation account concepts and commodity balance methodology',
    },
    {
      sourceId: 'usda-fas',
      citedFor:
        'International production, supply, and distribution balance estimates for agricultural commodities',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Balance sheets are compiled at country, regional, and world level for major commodities; marketing years, definitions, and data availability differ by commodity and country.',
  limitations: [
    'A description of the framework, not a balance sheet or any figure for any commodity, country, or year.',
    'Items are estimates of unequal reliability, and ending stocks are frequently a residual carrying the accumulated error of the rest of the account.',
    'Stocks in several major countries are not publicly reported, so world figures include estimates of unreported quantities.',
    'Definitions, coverage, and marketing years differ across publishing organisations, and figures are not comparable between them.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Supply and Demand Balance Sheet: An Identity That Balances',
    description:
      'What a commodity balance sheet is: opening stocks, production, imports against use, exports and ending stocks — and why the balancing item is uncertain.',
    keywords: [
      'supply and demand balance sheet',
      'commodity balance sheet',
      'supply and utilisation account',
      'ending stocks',
      'marketing year',
    ],
  },
  structuredData: { article: true },
};
