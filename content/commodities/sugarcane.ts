import type { CommodityContent } from '@/types/content';

export const sugarcane: CommodityContent = {
  id: 'commodity-sugarcane',
  slug: 'sugarcane',
  contentType: 'commodity',
  title: 'Sugarcane',
  alternativeNames: ['Harvested cane', 'Millable cane', 'Cane stalks'],
  category: 'Sugar crop commodity',
  subcategory: 'Harvested cane as delivered to the mill',
  commodityClass: 'sugar-crop',
  physicalForm: 'stalk',
  harvestedPart: 'Millable stalk (the jointed cane stem, topped and detrashed)',
  sourceCrop: { type: 'crop', slug: 'sugarcane' },
  summary:
    'Sugarcane as a commodity is the cut stalk delivered to a mill for crushing. Sucrose begins to be lost as soon as the cane is cut, so cane is not stored: the trade is organised around getting stalks from field to crusher quickly, and payment is made on weight and sucrose together.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The sugarcane commodity is the harvested stalk: a heavy, fibrous stem carrying sucrose in its juice, cut and delivered to a mill. It is a commodity with an unusual boundary, because it is bought and sold almost exclusively at one gate — the mill’s — under contracts between growers and the factory that will crush it, rather than on an open market with many possible buyers.',
    },
    {
      type: 'paragraph',
      text: 'That structure follows directly from the biology of the cut stalk. Cane is perishable in a specific sense: not that it rots quickly in the way a fruit does, but that the sucrose it exists to deliver starts to disappear from the moment of cutting. Everything else about the commodity — how it is harvested, how quickly it moves, why it is never stored, why it is not traded internationally — follows from that single fact.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Sugar crop' },
    { label: 'Parent crop', value: 'Sugarcane (Saccharum spp. hybrids)' },
    { label: 'Harvested part', value: 'Millable stalk' },
    {
      label: 'Principal uses',
      value: 'Sugar manufacture and ethanol production',
    },
    {
      label: 'Defining constraint',
      value: 'Sucrose is lost from the moment of cutting',
    },
    { label: 'Stored?', value: 'No — cane is crushed, not held' },
    {
      label: 'Paid on',
      value: 'Delivered weight together with sucrose content',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What is delivered to the mill',
      body: [
        {
          type: 'paragraph',
          text: 'A cane stalk is a jointed stem of alternating nodes and internodes, made of fibre and juice. The mill wants the juice, and specifically the sucrose dissolved in it; the fibre is what it must break open to get at the juice, and what leaves the crushing train as bagasse. Cane arriving at the factory is therefore assessed on two things: how much of it there is, and how much sucrose it carries.',
        },
        {
          type: 'paragraph',
          text: 'Harvest form varies and matters. Cane may be cut green or burnt beforehand to remove leaf trash; it may arrive as whole stalks from manual cutting or as short billets from a mechanical harvester. These are not cosmetic differences — burning and billeting both open the stalk to deterioration, so the harvest method changes how fast the delivery must be crushed.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Millable cane',
              description:
                'The portion of the stalk worth sending to the crusher, once tops and most trash are removed.',
            },
            {
              term: 'Extraneous matter (trash)',
              description:
                'Leaves, tops, roots, and soil delivered with the cane. It adds weight without sucrose and is penalised in cane payment.',
            },
            {
              term: 'Billeted cane',
              description:
                'Cane chopped into short lengths by a mechanical harvester. Every cut is a wound, so billets deteriorate faster than whole stalks.',
            },
          ],
        },
      ],
    },
    {
      id: 'cut-to-crush',
      heading: 'Why cane is crushed, not stored',
      body: [
        {
          type: 'paragraph',
          text: 'A cut stalk remains biologically active and is now colonised. Respiration continues, consuming sugars; sucrose is inverted into simpler sugars that a factory cannot crystallise; and micro-organisms enter through cut ends and damaged tissue and degrade sucrose further, generating gums that foul the process downstream. None of this is visible from outside — a stalk can look perfectly sound while the sucrose the mill is paying for has already gone.',
        },
        {
          type: 'paragraph',
          text: 'Losses are faster in burnt cane and faster again in billets, and faster in heat than in cool weather. The industry’s response is the delay from cut to crush, managed as one of the central operating metrics of any cane supply. Harvesting is scheduled against mill capacity, transport is organised to keep the crusher fed without a queue of waiting cane, and delays from weather, breakdowns, or mill stoppages are treated as losses of product rather than mere inconvenience. There is no store, no bin, and no drying step that reverses any of this.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A qualitative statement',
          text: 'AgricultureID gives no figure for how much sucrose is lost or how long a delay is acceptable. Loss rates depend on variety, harvest method, damage, temperature, and season, and the operating window is set by each mill and its cane supply agreements.',
        },
      ],
    },
    {
      id: 'quality-and-payment',
      heading: 'Quality attributes and cane payment',
      body: [
        {
          type: 'paragraph',
          text: 'Cane payment systems exist because weight alone is a poor description of what a grower has delivered. A tonne of cane may carry a lot of sucrose or little, and the difference is worth more than the tonnage. Sampling and analysis at the mill therefore establish the sugar content of each delivery, and payment combines weight with that measured quality — which is why cane is one of the few commodities whose value to the buyer is determined analytically at intake rather than by a visual grade.',
        },
        {
          type: 'list',
          items: [
            'Sucrose content of the delivered cane',
            'Purity of the juice, and the proportion of sugars that cannot be crystallised',
            'Fibre content, which affects crushing and bagasse output',
            'Extraneous matter — tops, leaves, soil, and roots',
            'Deterioration since cutting, including damage and microbial degradation',
          ],
        },
        {
          type: 'paragraph',
          text: 'Payment formulae are contractual and regional, and they differ substantially between cane industries. They are not published here: what is general is the principle that cane is paid on weight and quality together, with deductions for the matter that arrived alongside the cane rather than as cane.',
        },
      ],
    },
    {
      id: 'pathways',
      heading: 'What cane becomes',
      body: [
        {
          type: 'paragraph',
          text: 'Crushing a cane delivery produces several streams at once, and their relationship is the clearest illustration of the primary-product, co-product, and by-product distinction in this reference. Raw sugar is the intended output — the reason the mill exists. Molasses is the mother liquor left when no further sugar can economically be crystallised from it: a deliberate, valuable, simultaneous output with established feed, fermentation, and distilling markets, and so a co-product rather than waste. Bagasse is the crushed fibre residue, low in value per tonne but produced in large volume and burnt to run the factory itself.',
        },
        {
          type: 'paragraph',
          text: 'A large share of cane in some industries goes not to sugar at all but to ethanol, fermented either from juice directly or from molasses. Cane is thus simultaneously a food commodity, an energy feedstock, and — through bagasse — the fuel for its own processing, which is unusual among agricultural commodities.',
        },
      ],
    },
    {
      id: 'why-not-traded',
      heading: 'Why sugarcane is not an internationally traded commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Sugarcane is grown in enormous quantity and hardly traded at all across borders. The stalk is bulky and heavy relative to the sucrose it carries, and it is deteriorating throughout any journey — so shipping cane makes no commercial sense when the sugar can be extracted at origin and shipped instead. Cane supply areas are consequently drawn around mills, not around ports.',
        },
        {
          type: 'paragraph',
          text: 'What this means for anyone reading trade data is that the internationally traded sugar commodity is raw sugar, not cane. Figures reported for "sugar" trade describe the product; figures for cane describe production and describe deliveries into local mills.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'energy'],
  secondaryUses: ['industrial', 'feed'],
  majorQualityAttributes: [
    'Sucrose content',
    'Juice purity',
    'Fibre content',
    'Extraneous matter (trash and soil)',
    'Time elapsed since cutting',
    'Harvest form (whole stalk or billeted, green or burnt)',
  ],
  commonDefects: [
    'Sucrose loss through respiration and inversion after cutting',
    'Microbial degradation and gum formation from cut ends and damage',
    'Excess trash, tops, and soil in the delivery',
    'Stale or fire-damaged cane held too long before crushing',
    'Immature or over-mature cane low in recoverable sugar',
  ],
  moistureContext:
    'Cane is delivered wet and is never dried: the juice is the product. Moisture is not a trading specification, and the analytical question at intake is how much sucrose the juice holds, not how much water the stalk carries.',
  storageContext:
    'Not stored. Cut cane loses sucrose continuously, so deliveries are crushed as promptly as the mill allows; any accumulation of waiting cane is a loss, not a stock.',
  transportContext:
    'Moves short distances from field to mill by truck, trailer, rail, and cart within a defined cane supply area; scheduling is built around keeping the crusher fed without a standing queue.',
  majorProducingRegions: [
    'South America',
    'South Asia',
    'Southeast Asia',
    'Central America and the Caribbean',
    'Sub-Saharan Africa',
  ],
  majorTradingRegions: [
    'Negligible international trade in cane itself — see raw sugar for the traded commodity',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1212.93',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Sugar cane. Classified in heading 12.12 with other vegetable products used mainly for human consumption; trade under this code is small relative to production.',
    },
    {
      system: 'FAOSTAT',
      code: '156',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Sugar cane".',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'raw-sugar' }],
  coProducts: [{ type: 'commodity-product', slug: 'molasses' }],
  byProducts: [{ type: 'commodity-product', slug: 'bagasse' }],
  connections: [
    { type: 'machinery', slug: 'sugarcane-harvester' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'sugar-beet' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Sugarcane as a commodity, its uses, and sugar and ethanol pathways',
    },
    {
      sourceId: 'embrapa',
      citedFor:
        'Cane harvest form, deterioration after cutting, and mill delivery context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Sugar sector structure and the cane-to-sugar pathway',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global tropical and subtropical production. Cane payment systems and quality formulae are national or industry-specific and contractual.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a cane payment formula, mill specification, or customs classification.',
    'No sucrose contents, recovery figures, loss rates, or cut-to-crush windows are given here — all are variety-, method-, climate-, and contract-specific.',
    'Cane payment systems differ substantially between industries and are governed by local agreements and legislation.',
    'Producing regions are indicative groupings, not ranked statistics; cane itself is barely traded internationally.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sugarcane: Harvested Cane as Delivered to the Mill',
    description:
      'Sugarcane as a commodity: the millable stalk, why sucrose is lost from the moment of cutting, how cane payment works, and the sugar and molasses streams.',
    keywords: [
      'sugarcane',
      'millable cane',
      'cane payment',
      'cut to crush',
      'cane deterioration',
    ],
  },
  structuredData: { article: true },
};
