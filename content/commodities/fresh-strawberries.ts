import type { CommodityContent } from '@/types/content';

export const freshStrawberries: CommodityContent = {
  id: 'commodity-fresh-strawberries',
  slug: 'fresh-strawberries',
  contentType: 'commodity',
  title: 'Fresh Strawberries',
  alternativeNames: ['Fresh-market strawberries', 'Dessert strawberries'],
  category: 'Fresh fruit commodity',
  subcategory: 'Soft fruit (berry)',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Aggregate accessory fruit, picked with the calyx and a short stalk retained',
  sourceCrop: { type: 'crop', slug: 'strawberry' },
  summary:
    'Fresh strawberries are among the most perishable commodities in trade: non-climacteric, unprotected by any rind, and picked fully ripe. Precooling within hours and an unbroken cold chain are not optimisations but the condition of the fruit existing as a commodity at all.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh strawberries are the extreme case of the perishable fresh commodity. The fruit has no rind, no skin worth the name, and no protective structure — the surface a consumer touches is the fruit surface itself. It is picked fully ripe because it will not ripen afterwards, it is soft at the moment of picking, and it begins to deteriorate immediately. Nothing in the fresh trade tolerates delay less well.',
    },
    {
      type: 'paragraph',
      text: 'This is why the strawberry chain is built around a single operation: get the field heat out, fast. A strawberry that is not cooled within a few hours of picking has already lost a meaningful fraction of the market life it was born with, and no amount of downstream refrigeration recovers it. This entry describes the harvested commodity and its handling; the growing crop is covered on the strawberry crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    { label: 'Parent crop', value: 'Strawberry (Fragaria × ananassa)' },
    {
      label: 'Harvested part',
      value: 'Aggregate accessory fruit with calyx attached',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric: picked ripe, never sweetens afterwards',
    },
    {
      label: 'Chilling sensitivity',
      value:
        'Not chilling-sensitive; the constraint is speed of cooling, not cold tolerance',
    },
    {
      label: 'Critical operation',
      value: 'Precooling within hours of picking',
    },
    {
      label: 'Perishability',
      value: 'Among the shortest-lived fresh commodities in trade',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A strawberry lot is punnets of fruit of a declared cultivar, picked ripe, field-packed, and specified on size, colour, gloss, calyx condition, and firmness. As with blueberries, the fruit goes into its retail pack in the field and is never repacked, so the picker performs the grading. Unlike blueberries, there is no bloom and no cushioning — a strawberry that is squeezed is a strawberry that is bruised, and the bruise darkens and shows.',
        },
        {
          type: 'paragraph',
          text: 'The calyx — the green cap and short stalk left on the fruit — is part of the specification. A fresh, green, undamaged calyx signals a well-handled recent lot; a wilted brown one signals age, and buyers read it exactly that way. Cultivar choice in the fresh trade is dominated by firmness and shelf performance, because a cultivar with superior flavour and inferior firmness cannot reach a distant market intact.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Picked ripe, and that is the whole story',
          text: 'Strawberries are non-climacteric. They accumulate no sugar after picking and do not soften into eating quality — they only soften. A strawberry harvested pale to survive transport arrives sour, and remains sour.',
        },
      ],
    },
    {
      id: 'precooling',
      heading: 'Precooling: the decisive operation',
      body: [
        {
          type: 'paragraph',
          text: 'Strawberries respire at a very high rate for a fruit, and respiration rises steeply with temperature — a berry at field temperature on a warm afternoon is consuming itself rapidly. Precooling removes field heat immediately after picking, and forced-air cooling, which pulls chilled air through the vents of stacked punnets, is the standard method because it cools in a fraction of the time passive room cooling would take.',
        },
        {
          type: 'paragraph',
          text: 'The interval between picking and cooling is the metric the industry actually manages. Fruit is moved out of the field on a short cycle rather than accumulated through the day, and cooling capacity is sited close to the field rather than at a distant packhouse. This is the clearest example in the fresh trade of logistics being dictated by physiology: the whole geography of a strawberry operation is arranged around minutes and hours.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No times or temperatures here',
          text: 'Target pulp temperature, acceptable delay to cooling, and cooling rates for strawberries are set by sourced post-harvest guidance and commercial specification. AgricultureID publishes no figures.',
        },
      ],
    },
    {
      id: 'cold-chain-and-decay',
      heading: 'Cold chain, atmosphere, and decay',
      body: [
        {
          type: 'paragraph',
          text: 'After cooling, the fruit must stay cold continuously. Strawberries are not chilling-sensitive — cold is not the enemy, warmth is — so the chain can hold them close to their freezing point without injury. Every interruption, at a cross-dock, on a loading bay, or in a retail back room, costs life that cannot be restored, and condensation from warming and re-cooling actively promotes decay.',
        },
        {
          type: 'paragraph',
          text: 'Grey mould dominates strawberry decay and spreads readily from berry to touching berry inside a closed punnet, which is why a single infected fruit can take a pack with it. Modified atmospheres with elevated carbon dioxide are widely used on long-distance shipments to suppress it and slow softening, applied as pallet covers or within the packaging. Air freight is used where the value supports it, precisely because the commodity cannot wait.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Assessment covers berry size and shape typical of the cultivar, full and even red colour, surface gloss, firmness, calyx freshness, and the incidence of unsound fruit. Gloss is a genuine indicator rather than a cosmetic one: a dull berry has usually lost water or been bruised. Because the punnet is transparent and self-presenting, quality is judged pack by pack rather than lot by lot.',
        },
        {
          type: 'list',
          items: [
            'Grey mould and rhizopus rot spreading within the punnet',
            'Bruising and crush damage, visible as darkened patches',
            'Softening and loss of gloss from delayed or interrupted cooling',
            'Wilted, browned calyx indicating an aged lot',
            'Under-coloured white shoulders and pale tips',
            'Water damage and splitting after rain close to harvest',
          ],
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'The fresh punnet is the destination for the highest-value fruit and the reason the crop is grown at the scale it is. A substantial parallel stream is frozen — whole, sliced, or as purée — for dairy, bakery, and preserve manufacture, and this stream absorbs fruit that is sound but undersized, misshapen, or too soft for the fresh trade. Because frozen fruit does not need to survive handling, it can be harvested riper and from cultivars chosen for flavour rather than firmness.',
        },
        {
          type: 'list',
          items: [
            'Food — fresh berries in retail punnets',
            'Food processing — frozen whole, sliced, and puréed fruit for ingredient use',
            'Preserves and beverage — jam, juice, and concentrate from processing-grade fruit',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage', 'industrial'],
  majorQualityAttributes: [
    'Firmness',
    'Full and even red colour',
    'Surface gloss',
    'Calyx freshness',
    'Berry size and shape uniformity',
    'Time from picking to precooling',
  ],
  commonDefects: [
    'Grey mould and rhizopus rot',
    'Bruising and crush damage',
    'Softening and dull surface',
    'Wilted or browned calyx',
    'White shoulders and pale tips',
    'Split and water-damaged fruit',
  ],
  moistureContext:
    'Free water on the fruit at harvest drives decay, and picking in wet conditions is avoided; after harvest, water loss appears as dulling and calyx wilt rather than as a measured figure.',
  storageContext:
    'Precooled within hours of picking and held continuously near the freezing point, frequently under elevated carbon dioxide; not chilling-sensitive, but intolerant of any warming.',
  transportContext:
    'Ships as vented punnets in trays on pallets under refrigeration, often with modified-atmosphere pallet covers, and by air on premium routes; every unrefrigerated interval is permanent loss.',
  majorProducingRegions: [
    'East Asia',
    'North America',
    'Mediterranean Europe and North Africa',
    'Latin America',
  ],
  majorTradingRegions: [
    'Europe',
    'North America',
    'Mediterranean and North African exporters',
    'East Asia',
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'fresh-blueberries' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Strawberries as a traded fresh commodity and post-harvest loss context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Strawberry post-harvest physiology, respiration, cooling, and decay',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Strawberry grade attributes and fresh-market specification context',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'European marketing standards context for fresh strawberries',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Marketing standards, pack formats, and permitted atmosphere systems are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a cooling specification, grading determination, or shelf-life statement.',
    'No temperatures, cooling times, shelf-life durations, or atmosphere compositions are given here; these belong to sourced post-harvest guidance.',
    'Cultivar strongly affects firmness and market life; behaviour described here is general to the commodity, not to a particular cultivar.',
    'Strawberry regions are named indicatively; the listing implies no ranking of output or trade volume.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Strawberries: Precooling and Cold Chain',
    description:
      'Fresh strawberries as a commodity: picked ripe and non-climacteric, precooled within hours, held cold without a break. Gloss, calyx, grey mould, and defects.',
    keywords: [
      'fresh strawberries',
      'strawberry precooling',
      'strawberry cold chain',
      'strawberry perishability',
      'grey mould',
    ],
  },
  structuredData: { article: true },
};
