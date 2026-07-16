import type { CommodityContent } from '@/types/content';

export const freshOranges: CommodityContent = {
  id: 'commodity-fresh-oranges',
  slug: 'fresh-oranges',
  contentType: 'commodity',
  title: 'Fresh Oranges',
  alternativeNames: ['Sweet oranges', 'Eating oranges', 'Juicing oranges'],
  category: 'Fresh fruit commodity',
  subcategory: 'Citrus fruit',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Hesperidium (the citrus berry, clipped or pulled from the tree)',
  sourceCrop: { type: 'crop', slug: 'orange' },
  summary:
    'Fresh oranges are the harvested citrus fruit, traded either for the fresh counter or for juicing. They are non-climacteric and never sweeten after picking, and the trade splits sharply between fresh-market fruit graded on appearance and processing fruit valued only for its juice.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh oranges are the traded fruit of the sweet orange tree, clipped or pulled at maturity and moved into packing or into a juice plant. The commodity has an unusual double life: the same species supplies a fresh-market trade that pays for flawless rind and a processing trade that never looks at the rind at all, and the two streams are specified, priced, and logistically organised in completely different ways.',
    },
    {
      type: 'paragraph',
      text: 'Oranges are non-climacteric. They accumulate sugar on the tree and stop when picked, so a fruit harvested before it is ready remains sour for the rest of its life. Rind colour, confusingly, keeps changing after harvest and is a poor guide to internal maturity — which is why citrus maturity is defined by juice composition rather than by how orange the orange looks. This entry describes the harvested commodity, not the grove.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    { label: 'Parent crop', value: 'Sweet orange (Citrus sinensis)' },
    {
      label: 'Harvested part',
      value: 'Hesperidium — the rind-and-segment citrus fruit',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric: internal quality is fixed at harvest',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Moderately chilling-sensitive; cultivar- and origin-dependent',
    },
    {
      label: 'Two trade streams',
      value:
        'Fresh-market fruit graded on rind; processing fruit valued on juice',
    },
    {
      label: 'Main products',
      value: 'Orange juice, with citrus peel as the major by-product',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'An orange lot is a quantity of fruit of a declared cultivar group, destined for one of two fates decided before harvest. Fresh-market fruit is picked with care, packed by size and count, and sold on the appearance of its rind. Processing fruit can be harvested faster and rougher, arrives at the plant in bulk, and is valued on juice yield and soluble-solids-to-acid ratio — nothing that happens to its skin matters, because the skin becomes a by-product.',
        },
        {
          type: 'paragraph',
          text: 'Cultivar groups differ in ways the trade takes seriously: navel oranges are prized fresh but their juice develops bitterness on standing, while Valencia-type oranges are the classic juicing fruit with a longer hanging season. Blood oranges form a separate specialty stream. A buyer specifying "oranges" without specifying the group has not specified much.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Rind colour is not ripeness',
          text: 'Rind degreening continues after picking and is influenced by temperature, so colour can be developed on a fruit whose internal quality is fixed. Citrus maturity standards are written around juice content and the soluble-solids-to-acid ratio for exactly this reason.',
        },
      ],
    },
    {
      id: 'maturity-and-harvest',
      heading: 'Maturity and harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Oranges hold on the tree well, which gives citrus growers a scheduling flexibility that most fresh-fruit growers lack: the fruit can be left hanging and picked to meet demand over an extended window. That flexibility has limits — fruit left too long loses acidity, can regreen in some climates, and becomes more prone to drop and to rind disorders.',
        },
        {
          type: 'paragraph',
          text: 'Fresh-market fruit is clipped rather than pulled where the stem would otherwise tear the rind, because a torn button is an open door for decay. Harvest maturity is established by legal or contractual minimum standards based on juice content and the ratio of soluble solids to acid, and these standards are jurisdictional. Rind colour requirements, where they exist, are commercial and are met in some markets by degreening with ethylene — a colour treatment applied to a non-climacteric fruit, which does not ripen it.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling, storage, and transport',
      body: [
        {
          type: 'paragraph',
          text: "Oranges are cooled after harvest and shipped refrigerated, but unlike apples they cannot simply be pushed to the lowest temperature available: citrus is moderately chilling-sensitive, and holding below its tolerance produces rind pitting and other chilling injuries that appear as the fruit warms. The tolerance varies with cultivar, growing region, and season, so citrus storage regimes are set with more care than the fruit's robustness suggests.",
        },
        {
          type: 'paragraph',
          text: "The rind is both the fruit's armour and its weak point. It resists handling far better than a berry or a stone fruit, giving oranges a comparatively long marketable life, but any wound in it invites the green and blue moulds that dominate citrus post-harvest decay. Fruit is therefore handled to avoid rind injury, and packhouses apply washing, waxing, and regulated fungicidal treatments whose permitted use differs by market.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Chilling tolerance is fruit-specific',
          text: 'Safe storage temperature for oranges depends on cultivar, origin, and intended market, and holding below tolerance causes chilling injury. No temperature is given here; consult sourced post-harvest guidance for the fruit and destination concerned.',
        },
      ],
    },
    {
      id: 'grading-and-defects',
      heading: 'Grading and defects',
      body: [
        {
          type: 'paragraph',
          text: "Fresh-market grading works on the individual fruit: size and count, rind colour and smoothness, shape, firmness, and freedom from blemishes and decay. Processing fruit is assessed on entirely different terms — juice yield, soluble solids, acidity, and their ratio — measured on samples from the delivered bulk. The same orchard can supply both, with the packhouse cull becoming the juice plant's feedstock.",
        },
        {
          type: 'list',
          items: [
            'Green and blue mould — the principal post-harvest decay, entering through rind wounds',
            'Rind pitting from chilling injury, appearing after transfer to warmer conditions',
            'Oleocellosis — rind oil spotting caused by handling turgid fruit',
            'Stem-end rind breakdown and button decay',
            'Regreening and uneven colour in some growing climates',
            'Granulation and drying of segments in fruit held too long',
          ],
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: "A very large share of the world orange crop is juiced rather than eaten whole, which makes orange juice the commodity's primary product rather than a sideline. Extraction leaves the peel, rag, and seeds behind in quantity, and this residue — citrus peel — is a genuine by-product with established feed and ingredient outlets rather than a disposal problem. The remaining fruit is sold fresh.",
        },
        {
          type: 'list',
          items: [
            'Beverage — juice extraction, the largest single outlet for the crop',
            'Food — whole fresh fruit for eating',
            'Feed and industrial — peel and processing residues recovered as by-products',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food', 'beverage'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Juice content and juice yield',
    'Soluble-solids-to-acid ratio',
    'Fruit size and count per carton',
    'Rind colour, smoothness, and freedom from blemish',
    'Firmness and turgidity',
    'Freedom from decay',
  ],
  commonDefects: [
    'Green and blue mould decay',
    'Chilling injury and rind pitting',
    'Oleocellosis (rind oil spotting)',
    'Stem-end rind breakdown',
    'Regreening and uneven rind colour',
    'Segment granulation and drying',
  ],
  moistureContext:
    'Oranges lose water slowly through the rind, and the rind conceals early loss; excessive water loss shows as softening and shrivel around the stem end rather than as a measured moisture figure.',
  storageContext:
    "Cooled and held refrigerated within the fruit's chilling tolerance, which is cultivar- and origin-dependent; packhouse washing, waxing, and decay-control treatments are jurisdictionally regulated.",
  transportContext:
    'Fresh fruit moves as packed cartons on pallets in refrigerated containers over long sea routes; processing fruit moves in bulk trailers over short distances to the plant.',
  majorProducingRegions: [
    'South America',
    'North America and the Caribbean',
    'Mediterranean Europe and North Africa',
    'East Asia and Southern Africa',
  ],
  majorTradingRegions: [
    'Europe (major importing region)',
    'Mediterranean and Southern Africa exporters',
    'North America',
    'East Asia',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0805.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oranges, fresh or dried, at 6-digit subheading level.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'orange-juice' }],
  byProducts: [{ type: 'commodity-product', slug: 'citrus-peel' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'fresh-lemons' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oranges as a traded citrus commodity and processing pathway',
    },
    {
      sourceId: 'usda',
      citedFor: 'Orange grade attributes and citrus maturity standard context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Citrus post-harvest behaviour, chilling injury, and decay',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Citrus trade stream and market reporting context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Maturity standards, grade rules, permitted treatments, and codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a maturity determination, grading decision, or treatment recommendation.',
    'No storage temperature, juice-ratio, or maturity thresholds are given here — these are set by jurisdictional standards and contracts.',
    'Permitted post-harvest treatments and residue rules differ by market and are revised; confirm the rules in force.',
    'Regions named for production and trade are indicative groupings only, and carry no ranking by tonnage or share.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Oranges: The Traded Citrus Commodity',
    description:
      'Fresh oranges as a commodity: non-climacteric maturity, why rind colour is not ripeness, chilling sensitivity, and the fresh and juicing trade streams.',
    keywords: [
      'fresh oranges',
      'orange commodity',
      'citrus maturity',
      'juicing oranges',
      'citrus chilling injury',
    ],
  },
  structuredData: { article: true },
};
