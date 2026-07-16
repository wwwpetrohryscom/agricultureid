import type { CommodityContent } from '@/types/content';

export const goatMilk: CommodityContent = {
  id: 'commodity-goat-milk',
  slug: 'goat-milk',
  contentType: 'commodity',
  title: 'Goat Milk',
  alternativeNames: ['Caprine milk', 'Doe milk'],
  category: 'Livestock product commodity',
  subcategory: 'Caprine dairy',
  commodityClass: 'livestock-product',
  physicalForm: 'liquid',
  harvestedPart:
    'Whole milk as drawn from milking does, before separation or heat treatment',
  sourceLivestock: { type: 'livestock', slug: 'goats' },
  summary:
    'Goat milk is the untreated milk of dairy goats, collected chilled and used for cheese, fluid milk, and fermented products. Globally it is a subsistence and smallholder staple as much as a commercial commodity, and it is bought on the same compositional and hygiene logic as other raw milks.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Goat milk is the commodity obtained by milking dairy does. It has two quite different commercial lives. In much of the world it is a household and smallholder product, consumed or processed close to where it is produced and never entering a formal market at all. In parts of Europe and in a number of export-oriented systems it is a fully commercial commodity with tanker collection, contract supply, and specialist processing — including a substantial infant-formula and powder trade.',
    },
    {
      type: 'paragraph',
      text: 'Compositionally, goat milk sits between cow and sheep milk in solids but differs from both in ways processors care about. Its fat globules are smaller, its casein profile is different, and it lacks the carotene that gives cow-milk fat a yellow tint — which is why goat-milk cheeses and butter are characteristically white. These are properties of the milk as drawn, and they carry into every product made from it.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Livestock product (dairy)' },
    { label: 'Source animal', value: 'Goats (dairy breeds of Capra hircus)' },
    { label: 'Physical form', value: 'Liquid, collected chilled' },
    {
      label: 'Principal uses',
      value: 'Cheese, fluid milk, fermented products, and powders',
    },
    {
      label: 'Distinctive trait',
      value: 'Small fat globules; no carotene, so products are white',
    },
    {
      label: 'Traded on',
      value: 'Compositional and hygiene criteria, per contract',
    },
    {
      label: 'Market structure',
      value: 'Smallholder and subsistence use alongside commercial chains',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'The traded lot is bulk raw goat milk pooled from a milking herd and held chilled. Where a formal chain exists it works much like the bovine one — farm tank, tanker collection, sampling at collection, payment on components — but the scale is smaller and the herds are more dispersed, so collection economics are tighter and on-farm or near-farm processing is common.',
        },
        {
          type: 'paragraph',
          text: 'The physical differences from cow milk are not cosmetic. Smaller fat globules mean the cream separates more slowly under gravity, so goat milk does not throw a cream line as readily. The casein fraction differs, which affects how the milk coagulates and gives goat-milk curd its characteristically softer, more fragile structure. Processors adapt their vats and their expectations accordingly; a cow-milk process does not transfer unchanged.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Not a cow-milk variant',
          text: 'Goat milk is a distinct commodity with its own composition, processing behaviour, and market. Specifications, yields, and process settings written for bovine milk do not carry across.',
        },
      ],
    },
    {
      id: 'trading-criteria',
      heading: 'How it is bought',
      body: [
        {
          type: 'paragraph',
          text: 'Where goat milk is traded commercially, it is bought against compositional criteria — fat, protein, and often total solids — and hygiene criteria covering microbiological condition, somatic cell measurements, temperature at collection, and freedom from residues and inhibitory substances. Composition sets what the milk is worth, because it determines product yield; hygiene sets whether the collection is accepted at all.',
        },
        {
          type: 'paragraph',
          text: 'One species-specific complication is worth flagging at reference level: somatic cell measurements in goat milk are not interpreted the way they are in cow milk, because caprine milk secretion contributes cellular material in a manner that differs from the bovine case. This is a well-recognised reason why criteria written for one species cannot simply be applied to the other, and it is handled explicitly in the relevant regulation rather than by analogy.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Limits are set by regulation and contract',
          text: 'This page states no numerical compositional or hygiene limits. Those are fixed by jurisdiction-specific regulation and by the individual supply contract, they differ between markets, and they are revised over time. Consult the applicable regulation and contract for the values in force.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and destinations',
      body: [
        {
          type: 'paragraph',
          text: 'Cheese is the largest formal outlet, spanning fresh, soft-ripened, and aged styles, several of which carry geographical designations. Fluid drinking milk is a more significant destination than it is for sheep milk. Fermented products are widespread, and dried goat milk supports an international trade — powders, unlike raw milk, travel and store — including a specialist infant-nutrition segment that imposes its own supply requirements well upstream of the processor.',
        },
        {
          type: 'list',
          items: [
            'Cheese — fresh, soft-ripened, and aged styles, including designation-protected products',
            'Fluid drinking milk, sold heat-treated',
            'Yoghurt and other fermented dairy products',
            'Powders and dried ingredients, including infant-nutrition supply chains',
            'Household and subsistence consumption outside any formal market',
          ],
        },
        {
          type: 'paragraph',
          text: 'The subsistence share is not a footnote. Goats are kept across a very wide range of environments, including arid and marginal land where dairy cattle are not viable, and in those systems the milk is a direct household food rather than a commodity moving to a processor. Statistics that count only formal collection therefore understate what the animal actually produces.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage context',
      body: [
        {
          type: 'paragraph',
          text: 'Raw goat milk carries the same perishability constraint as any raw milk: cool immediately after milking, hold chilled, keep the interval to processing short. Where herds are small and scattered, achieving that reliably is the practical bottleneck in developing a commercial chain, and it is why chilling infrastructure — rather than herd size — is often what determines whether milk in a region can be sold at all.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference description only',
          text: 'This entry describes goat milk as a traded commodity. It is not milking guidance, veterinary advice, nutritional advice, or a food-safety determination, and it makes no claim about the suitability of goat milk for any individual or any use.',
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
    'Somatic cell measurements (interpreted on a species-specific basis)',
    'Temperature at collection',
    'Freedom from residues and inhibitory substances',
  ],
  commonDefects: [
    'Elevated microbial counts from delayed or inadequate cooling',
    'Off-flavours from lipolysis, or taint picked up from housing or buck odour',
    'Residues of veterinary medicines or cleaning agents',
    'Added water (detected as a raised freezing point)',
    'Visible abnormality or extraneous matter',
  ],
  moistureContext:
    'Not traded on a moisture basis; total solids is the corresponding measure, and freezing point serves as the check on added water.',
  storageContext:
    'Chilled promptly after milking and held for a short interval before processing; where collection is infrequent, access to on-farm cooling is the practical constraint on selling milk at all.',
  transportContext:
    'Collected chilled from small, dispersed herds, which raises cost per litre; the international trade in caprine dairy moves as powder and cheese rather than as raw milk.',
  majorProducingRegions: [
    'South Asia',
    'Sub-Saharan Africa',
    'Middle East and North Africa',
    'Mediterranean Europe',
  ],
  majorTradingRegions: [
    'Largely domestic as raw milk; much of it never enters a formal market',
    'International trade occurs in powders and cheeses derived from it',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0401',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Milk and cream, not concentrated nor containing added sugar, at 4-digit heading level. The heading is species-neutral, so goat milk is not separately identified here.',
    },
  ],
  connections: [
    { type: 'livestock', slug: 'goats' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-storage' }],
  relatedTopics: [
    { type: 'commodity', slug: 'raw-cow-milk' },
    { type: 'commodity', slug: 'sheep-milk' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Goat milk as a dairy commodity and its role in smallholder systems',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Goat milk item coverage and producing-region context',
    },
    {
      sourceId: 'fao-dad-is',
      citedFor: 'Dairy goat breed diversity and production environments',
    },
    {
      sourceId: 'woah',
      citedFor: 'Animal-health context relevant to milking herds',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Compositional and hygiene requirements differ by jurisdiction, and species-specific interpretation of some criteria is handled in national regulation.',
  limitations: [
    'A reference description of the commodity — not milking, veterinary, nutritional, or food-safety guidance.',
    'No numerical compositional or hygiene limits are given: those are set by jurisdiction-specific regulation and by supply contracts.',
    'Composition varies with breed, lactation stage, feeding, and season; no universal analysis is stated here.',
    'A large share of goat milk is consumed outside formal markets, so recorded production and trade figures under-represent actual use.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Goat Milk: The Caprine Dairy Commodity',
    description:
      'Goat milk as a commodity: how its fat globules and casein differ from cow milk, what it is processed into, and the compositional and hygiene criteria used.',
    keywords: [
      'goat milk',
      'caprine milk',
      'dairy goats',
      'goat cheese',
      'goat milk powder',
    ],
  },
  structuredData: { article: true },
};
