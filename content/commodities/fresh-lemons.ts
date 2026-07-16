import type { CommodityContent } from '@/types/content';

export const freshLemons: CommodityContent = {
  id: 'commodity-fresh-lemons',
  slug: 'fresh-lemons',
  contentType: 'commodity',
  title: 'Fresh Lemons',
  alternativeNames: ['Lemon fruit', 'Fresh-market lemons'],
  category: 'Fresh fruit commodity',
  subcategory: 'Citrus fruit (acid citrus)',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Hesperidium (the citrus fruit, clipped from the tree)',
  sourceCrop: { type: 'crop', slug: 'lemon' },
  summary:
    'Fresh lemons are an acid citrus fruit bought for juice acidity and rind oil rather than sweetness. They are non-climacteric, store better than any other major citrus, and are picked on size and rind condition, which lets the trade supply the market almost year-round.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh lemons are the traded fruit of the lemon tree, and they occupy a distinctive commercial position: nobody buys a lemon to eat it. It is bought as an ingredient — for its acidity, for its juice, and for the aromatic oil in its rind — which changes what quality means. A lemon is not assessed for sweetness or eating ripeness, because it has neither and is not expected to.',
    },
    {
      type: 'paragraph',
      text: 'That has a useful consequence. Since acid citrus is not waiting to become sweet, lemons can be harvested on size and rind condition and stored for a long time — better than any other major citrus. Combined with a tree that flowers more than once a year in suitable climates, this gives the trade something rare in fresh fruit: near-continuous supply from a storable, schedulable commodity. This entry describes the harvested fruit; the tree belongs to the lemon crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    { label: 'Parent crop', value: 'Lemon (Citrus limon)' },
    {
      label: 'Harvested part',
      value: 'Hesperidium, clipped with a short stem',
    },
    {
      label: 'Ripening behaviour',
      value:
        'Non-climacteric: no sweetening, and juice acidity is the quality basis',
    },
    {
      label: 'Chilling sensitivity',
      value:
        'Chilling-sensitive; more so than oranges, with rind pitting the classic sign',
    },
    {
      label: 'Bought for',
      value: 'Juice acidity, juice content, and rind oil — not sweetness',
    },
    {
      label: 'Storage character',
      value: 'The best-storing major citrus fruit',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A lemon lot is fruit sized and packed by count, specified on rind colour, rind texture and thickness, firmness, juice content, and freedom from blemish and decay. Harvest is driven by size and rind condition rather than by any sweetening endpoint, so a grower picks when the fruit reaches a marketable size and the rind is in the state the market wants — which for much of the trade means picking green and letting colour develop afterwards.',
        },
        {
          type: 'paragraph',
          text: 'Two commercial forms flow from this. Green-picked fruit is stored and degreened or held to develop yellow colour, entering the market on a schedule. Tree-ripe yellow fruit is picked as it colours. Both are the same commodity at different points, and because the fruit tolerates storage well, the choice is genuinely a trading decision rather than a biological constraint.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'An ingredient, not a dessert fruit',
          text: 'Lemons are specified on acidity and juice content because they are used to acidify, flavour, and garnish. This is why lemon maturity standards centre on juice content rather than on the soluble-solids-to-acid ratio used for sweet oranges.',
        },
      ],
    },
    {
      id: 'storage-and-curing',
      heading: 'Storage, colour, and long holding',
      body: [
        {
          type: 'paragraph',
          text: 'Lemons store better than oranges, mandarins, or grapefruit, and the trade exploits this heavily. Green-picked fruit can be held in cool storage for an extended period during which the rind gradually develops its yellow colour and the fruit is released to market as demand requires. This holding period is sometimes called curing, and it turns a seasonal crop into a nearly continuous supply — a scheduling capacity that few fresh fruits possess.',
        },
        {
          type: 'paragraph',
          text: 'Where market colour is needed faster than it develops naturally, degreening with ethylene is used to break down the green pigment in the rind. This is a cosmetic treatment on a non-climacteric fruit: it changes the peel, not the flesh, and a degreened lemon is not riper than it was. Regulated post-harvest fungicide and wax treatments accompany storage, and permitted materials and residues differ by destination market.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Holding conditions are cultivar- and market-specific',
          text: 'Storage temperature and holding duration for lemons depend on origin, harvest condition, and intended market, and cold below tolerance causes chilling injury. AgricultureID publishes no figures; consult sourced post-harvest guidance.',
        },
      ],
    },
    {
      id: 'rind-oil-and-handling',
      heading: 'Rind oil and handling damage',
      body: [
        {
          type: 'paragraph',
          text: 'The lemon rind holds oil in glands just below its surface, and that oil is both a valuable co-product recovered during juice processing and a hazard during handling. When turgid fruit is squeezed or knocked, oil glands rupture and the released oil damages surrounding rind tissue, producing the sunken, discoloured spotting known as oleocellosis. It is the reason the citrus trade avoids handling fruit while it is wet or fully turgid — early in the morning, or after rain or irrigation.',
        },
        {
          type: 'paragraph',
          text: "Chilling sensitivity compounds the handling picture. Lemons are more cold-sensitive than oranges, and holding them below tolerance produces rind pitting, membrane staining, and red blotch that appear after the fruit is moved to warmer conditions — meaning the damage surfaces at the buyer's end, not in the store.",
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Grading covers size and count, rind colour and texture, rind thickness, shape, firmness, juice content, and freedom from defects. Rind thickness matters commercially in both directions: thick, coarse rind reduces juice yield, while very thin rind gives less protection in handling. Juice content is the maturity criterion in most jurisdictional standards.',
        },
        {
          type: 'list',
          items: [
            'Green and blue mould decay through rind wounds',
            'Chilling injury — rind pitting, membrane staining, and red blotch',
            'Oleocellosis from handling turgid or wet fruit',
            'Stem-end rind breakdown in stored fruit',
            'Excessively thick or coarse rind reducing juice yield',
            'Shrivel and softening in fruit held past its storage life',
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
          text: 'Lemons are sold fresh for culinary use, and processed for juice, concentrate, and rind oil. Processing is unusually integrated here: pressing a lemon yields juice, essential oil recovered from the rind, and peel residue, and the oil is a high-value stream in its own right for flavour, fragrance, and cleaning products. Peel residue and pulp from lemon processing feed into pectin manufacture and livestock feed, as they do for oranges.',
        },
        {
          type: 'list',
          items: [
            'Food — fresh fruit for culinary and garnish use',
            'Beverage — juice and concentrate for drinks and acidification',
            'Industrial — rind essential oil for flavour, fragrance, and cleaning products',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food', 'beverage'],
  secondaryUses: ['industrial', 'oil'],
  majorQualityAttributes: [
    'Juice content',
    'Juice acidity',
    'Fruit size and count per carton',
    'Rind colour, texture, and thickness',
    'Firmness',
    'Freedom from rind blemish and decay',
  ],
  commonDefects: [
    'Green and blue mould decay',
    'Chilling injury (rind pitting and red blotch)',
    'Oleocellosis',
    'Stem-end rind breakdown',
    'Coarse or excessively thick rind',
    'Shrivel and softening in over-held fruit',
  ],
  moistureContext:
    "Water loss through the rind produces shrivel and softening over long holding, and is the practical limit on the lemon's otherwise excellent storage life; humidity control addresses it.",
  storageContext:
    'The best-storing major citrus: green-picked fruit is held cool for extended periods while rind colour develops, within a chilling tolerance narrower than that of oranges.',
  transportContext:
    'Ships as packed cartons on pallets in refrigerated containers over long routes; handling is timed to avoid turgid or wet fruit because rind oil release damages the peel.',
  majorProducingRegions: [
    'South America',
    'Mediterranean Europe and North Africa',
    'South and East Asia',
    'North America',
  ],
  majorTradingRegions: [
    'Mediterranean and South American exporters',
    'Europe (major importing region)',
    'North America',
    'The Middle East and East Asia',
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'curing' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'fresh-oranges' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Lemons as a traded citrus commodity and their processing outlets',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Lemon grade attributes and juice-content maturity criteria context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Lemon storage behaviour, degreening, chilling injury, and oleocellosis',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Citrus trade and market reporting context for lemons',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Maturity standards, grade rules, permitted treatments, and residue limits are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a maturity determination, storage recommendation, or treatment protocol.',
    'No storage temperatures, holding durations, or juice-content thresholds are given here — these are set by standards and contracts.',
    'Permitted degreening, wax, and fungicide treatments differ by destination market and are revised; confirm the rules in force.',
    'Lemon producing and trading regions are indicative groupings, carrying no ranking by output or share.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Lemons: Acid Citrus as a Traded Fruit',
    description:
      'Fresh lemons as a commodity: bought for juice acidity and rind oil, picked on size, stored longer than any other citrus, degreened, and prone to oleocellosis.',
    keywords: [
      'fresh lemons',
      'lemon commodity',
      'acid citrus',
      'lemon degreening',
      'oleocellosis',
    ],
  },
  structuredData: { article: true },
};
