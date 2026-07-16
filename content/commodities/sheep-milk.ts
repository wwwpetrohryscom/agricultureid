import type { CommodityContent } from '@/types/content';

export const sheepMilk: CommodityContent = {
  id: 'commodity-sheep-milk',
  slug: 'sheep-milk',
  contentType: 'commodity',
  title: 'Sheep Milk',
  alternativeNames: ['Ewe milk', 'Ovine milk'],
  category: 'Livestock product commodity',
  subcategory: 'Ovine dairy',
  commodityClass: 'livestock-product',
  physicalForm: 'liquid',
  harvestedPart:
    'Whole milk as drawn from milking ewes, before separation or heat treatment',
  sourceLivestock: { type: 'livestock', slug: 'sheep' },
  summary:
    'Sheep milk is the untreated milk of dairy ewes, collected chilled and destined almost entirely for cheesemaking. It is a specialist commodity: volumes per animal are small, supply is markedly seasonal, and its high solids content is the reason processors want it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sheep milk is the commodity obtained by milking dairy ewes. It occupies a distinct commercial niche from cow milk. Output per animal is low, flocks are typically small, and lactation is short, so the commodity arrives in modest, concentrated flows rather than in the continuous bulk streams that characterise the bovine dairy chain. It is rarely sold as a fluid drink; the overwhelming majority is turned into cheese.',
    },
    {
      type: 'paragraph',
      text: 'What makes the commodity valuable is what it carries. Sheep milk is markedly richer in total solids — fat and protein in particular — than cow milk, which means a given volume yields substantially more cheese. That concentration, rather than volume, is what a buyer is paying for, and it explains why sheep milk supports a price per litre far above that of bovine milk despite the smaller quantities involved.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Livestock product (dairy)' },
    { label: 'Source animal', value: 'Sheep (dairy breeds of Ovis aries)' },
    { label: 'Physical form', value: 'Liquid, collected chilled' },
    {
      label: 'Dominant destination',
      value: 'Cheesemaking, much of it under protected designations',
    },
    {
      label: 'Value driver',
      value: 'High total solids — more cheese per litre than cow milk',
    },
    {
      label: 'Supply pattern',
      value: 'Strongly seasonal, following a short lactation',
    },
    {
      label: 'Traded on',
      value: 'Compositional and hygiene criteria, per contract',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'The traded lot is bulk raw ewe milk, pooled from a flock and held chilled until collection or on-farm processing. Compared with the bovine commodity, the scale is different in kind rather than degree: a collection may represent many animals over several milkings, and small farm volumes mean that a substantial share of sheep milk never enters a collection tanker at all but is made into cheese on the holding where it is produced.',
        },
        {
          type: 'paragraph',
          text: 'Sheep milk is compositionally distinct from cow milk in ways that matter to processors, not only in the amount of fat and protein but in the casein fraction and the size distribution of the fat globules. These differences affect how the milk coagulates and how the resulting cheese behaves, which is why sheep-milk cheeses are their own product category rather than variants of cow-milk cheeses.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A different commodity, not a substitute',
          text: 'Sheep milk is not interchangeable with cow milk in processing. The two are separate commodities with separate uses, prices, and supply chains, and a specification written for one does not transfer to the other.',
        },
      ],
    },
    {
      id: 'seasonality',
      heading: 'Seasonality and supply structure',
      body: [
        {
          type: 'paragraph',
          text: 'Dairy sheep have a comparatively short lactation and, in many production systems, a seasonally concentrated breeding pattern. The commercial consequence is a supply curve with a pronounced peak and a genuine trough, sometimes with no milk at all for part of the year. Processors respond by making cheeses that mature — storing value in a ripening room rather than in a milk tank — and by contracting supply well ahead of the season.',
        },
        {
          type: 'paragraph',
          text: 'Seasonality also shapes composition. Milk drawn late in lactation differs from milk drawn early, so both the quantity and the character of the commodity move through the season. Buyers who need consistency work around this through blending, contract terms, and product choice rather than by expecting a uniform year-round input.',
        },
      ],
    },
    {
      id: 'trading-criteria',
      heading: 'How it is bought',
      body: [
        {
          type: 'paragraph',
          text: 'As with other dairy commodities, sheep milk is bought against compositional criteria — chiefly fat and protein, and often total solids — and against hygiene criteria covering microbiological condition, somatic cell measurements, temperature, and freedom from residues and inhibitory substances. Because cheese yield tracks solids so directly, compositional payment is the norm and the premium for richer milk is explicit rather than incidental.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Limits are set elsewhere',
          text: 'No numerical compositional or hygiene limits are stated on this page. Those thresholds, and the consequences of missing them, are fixed by jurisdiction-specific regulation and by the individual supply contract, and they vary between markets and over time. Consult the applicable regulation and contract.',
        },
      ],
    },
    {
      id: 'uses-and-handling',
      heading: 'Uses, handling, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'Cheese dominates. Many of the best-known sheep-milk cheeses carry geographical designations that tie the product to a defined origin, and in some cases to defined breeds and production practices — which means the raw milk itself is bound by scheme rules before it ever reaches a vat. Yoghurt and other fermented products account for much of the remainder; fluid sheep milk for drinking is a marginal outlet, and some milk is frozen to smooth the seasonal gap for processors.',
        },
        {
          type: 'list',
          items: [
            'Cheese — the principal destination, including many designation-protected cheeses',
            'Yoghurt and other fermented dairy products',
            'Frozen milk held to extend a short season',
            'Fluid drinking milk — a small, specialist outlet',
          ],
        },
        {
          type: 'paragraph',
          text: 'Handling follows the same logic as any raw milk: cool promptly after milking, hold chilled, and keep the interval to processing short. Collection logistics are harder than in the bovine chain because volumes per farm are small and holdings are often dispersed, which raises the cost of every litre moved and further favours processing at or near the point of production.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference description only',
          text: 'This entry describes sheep milk as a traded commodity. It is not milking guidance, veterinary advice, or a food-safety determination, and it makes no statement about the fitness of any milk for any purpose.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Fat content',
    'Protein content',
    'Total solids',
    'Microbiological load',
    'Somatic cell measurements',
    'Temperature at collection',
    'Freedom from residues and inhibitory substances',
  ],
  commonDefects: [
    'Elevated microbial counts from delayed cooling',
    'Off-flavours from lipolysis or feed carry-over',
    'Residues of veterinary medicines or cleaning agents',
    'Compositional drift late in lactation',
    'Visible abnormality or extraneous matter',
  ],
  moistureContext:
    'Not traded on a moisture basis. Total solids is the corresponding measure, and it sits higher in sheep milk than in cow milk — the reason a litre makes more cheese.',
  storageContext:
    'Cooled promptly after milking and held chilled for a short interval; some milk is frozen specifically to carry supply across the seasonal gap, which is uncommon in the bovine chain.',
  transportContext:
    'Collected chilled from dispersed, low-volume holdings, which makes collection costly per litre and favours processing on or near the farm.',
  majorProducingRegions: [
    'Mediterranean Europe',
    'Middle East and North Africa',
    'West Asia',
    'South Asia',
  ],
  majorTradingRegions: [
    'Largely domestic and regional as raw milk',
    'Cross-border trade occurs in the cheeses made from it rather than in the milk',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0401',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Milk and cream, not concentrated nor containing added sugar, at 4-digit heading level. The heading does not distinguish the species of animal, so sheep milk is not separately identified at this level.',
    },
  ],
  connections: [
    { type: 'livestock', slug: 'sheep' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-storage' }],
  relatedTopics: [
    { type: 'commodity', slug: 'raw-cow-milk' },
    { type: 'commodity', slug: 'goat-milk' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Sheep milk as a dairy commodity and its cheesemaking destination',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Sheep milk item coverage and producing-region context',
    },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Dairy sheep breed diversity and production-system context',
    },
    {
      sourceId: 'woah',
      citedFor: 'Animal-health context relevant to milking flocks',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated in Mediterranean and West Asian production systems. Compositional and hygiene requirements and designation-scheme rules are jurisdiction-specific.',
  limitations: [
    'A reference description of the commodity — not milking, veterinary, or food-safety guidance, and not a determination about any lot.',
    'No numerical compositional or hygiene limits are given: those are set by jurisdiction-specific regulation and supply contracts.',
    'Composition and volume vary strongly with breed, lactation stage, and season; no universal analysis is stated.',
    'Comparisons with cow milk are qualitative here; the direction of difference is well established but the magnitude depends on breed, system, and season.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sheep Milk: A Specialist Dairy Commodity',
    description:
      'Sheep milk as a commodity: why its high solids content drives cheese yield and price, how seasonality shapes supply, and the criteria processors buy it against.',
    keywords: [
      'sheep milk',
      'ewe milk',
      'sheep milk cheese',
      'dairy sheep',
      'milk solids',
    ],
  },
  structuredData: { article: true },
};
