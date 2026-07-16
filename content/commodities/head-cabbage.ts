import type { CommodityContent } from '@/types/content';

export const headCabbage: CommodityContent = {
  id: 'commodity-head-cabbage',
  slug: 'head-cabbage',
  contentType: 'commodity',
  title: 'Head Cabbage',
  alternativeNames: ['Cabbage heads', 'White cabbage', 'Storage cabbage'],
  category: 'Fresh vegetable commodity',
  subcategory: 'Leafy head',
  commodityClass: 'vegetable',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Head — the compact terminal bud of overlapping leaves, cut with a short stem',
  sourceCrop: { type: 'crop', slug: 'cabbage' },
  summary:
    'Head cabbage is the compact leafy head of the cabbage plant, cut at maturity and traded with a few wrapper leaves left on. Denser and more self-protecting than any other leafy vegetable, it is the one leafy commodity that genuinely stores for months.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Head cabbage is the traded commodity of the cabbage crop: heads cut by hand or machine, trimmed to a saleable number of wrapper leaves, graded, and packed. The head is a terminal bud — dozens of leaves folded tightly over a short internal core — and that architecture is why the commodity behaves as it does. The outer leaves shield the interior, and the density that makes a head heavy also makes it slow to lose water and slow to warm or cool.',
    },
    {
      type: 'paragraph',
      text: 'The trade spans several distinct types: green and white cabbage for the general market and for processing, red cabbage, the crinkle-leaved Savoy, and pointed types. They differ in density, storage life, and use. Cabbage sits at the durable end of the fresh-produce range — it is a leafy vegetable that can be held through a winter — but that resilience belongs to the intact head, and it is lost the moment the head is cut or over-trimmed. This entry describes the harvested head as traded; the growing of the crop is on the cabbage crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (leafy head)' },
    {
      label: 'Parent crop',
      value: 'Cabbage (Brassica oleracea Capitata Group)',
    },
    { label: 'Harvested part', value: 'Head (compact terminal bud)' },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric; the head does not ripen after cutting',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Not chilling-sensitive; tolerates cold holding near freezing',
    },
    {
      label: 'Key quality attributes',
      value:
        'Head firmness, weight for size, wrapper condition, trim, freedom from splits',
    },
    {
      label: 'Storage note',
      value:
        'Ethylene-sensitive in store — exposure accelerates leaf abscission and yellowing',
    },
  ],
  sections: [
    {
      id: 'cutting-and-trimming',
      heading: 'Cutting, trimming, and what defines the lot',
      body: [
        {
          type: 'paragraph',
          text: 'Cabbage is cut when the head has firmed up — judged by squeezing rather than by looking, since a head can reach full size while still loose inside. The window is bounded at the far end by splitting: a mature head left standing keeps growing internally, and the pressure eventually bursts it open. A split head is unsaleable as fresh produce, so harvest timing is a race against the crop’s own momentum.',
        },
        {
          type: 'paragraph',
          text: 'Trimming then decides much of the commercial outcome. Leaving wrapper leaves on protects the head in transit and holds moisture; taking them off makes a lighter, cleaner, more presentable unit. Trim level is therefore a negotiated specification rather than a technical constant, and it varies between markets — some buyers want a tight bare ball, others a head with two or three wrappers still attached. Over-trimming for appearance strips away the head’s own packaging, and the cost of that shows up later in the chain.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The wrapper leaves are the packaging',
          text: 'Wrapper leaves are sacrificial: they take the abrasion and water loss that would otherwise fall on the saleable head. Trimming them back is a presentation decision with a protection cost, and the two have to be balanced against how far the lot must travel.',
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Cabbage grading centres on firmness and on weight for size — a heavy head for its diameter is a dense, well-filled one, and density is what buyers are really paying for. Beyond that, graders look at head size and uniformity, colour, wrapper condition and trim, freedom from splits, and the absence of decay at the butt and between the leaves. Because the interior of a head cannot be inspected without destroying it, cabbage grading relies more than most commodities on external proxies for what is inside.',
        },
        {
          type: 'list',
          items: [
            'Split and burst heads from over-maturity at cutting',
            'Loose or puffy heads that are light for their size',
            'Yellowing and leaf abscission, accelerated by ethylene exposure',
            'Butt discoloration and decay at the cut stem',
            'Internal decay and soft rots developing between leaves',
            'Bruising and abrasion from rough handling',
            'Frost or freezing injury to outer leaves',
          ],
        },
        {
          type: 'paragraph',
          text: 'Ethylene is worth singling out. Cabbage is non-climacteric and has nothing to ripen, but exposure in store makes it shed leaves and yellow prematurely — a sensitivity, not a ripening response. Stored beside ethylene-producing commodities, cabbage arrives looking tired without anything having gone wrong in the field, so mixed-storage discipline is a genuine quality control for this commodity.',
        },
      ],
    },
    {
      id: 'storage-and-uses',
      heading: 'Storage, transport, and uses',
      body: [
        {
          type: 'paragraph',
          text: 'Cabbage is not chilling-sensitive and stores close to freezing at high humidity, and storage types held under controlled atmosphere can be carried for months — remarkable for a leafy vegetable, and entirely a function of the head’s density and its protective wrapper leaves. Field heat is removed after cutting, though the mass of a head makes cooling slower than for an open leafy commodity like lettuce, and the store has to be given time to pull the core temperature down rather than just chilling the surface.',
        },
        {
          type: 'paragraph',
          text: 'Types diverge sharply here: dense white storage cabbage is a long-store commodity, while Savoy and pointed types are much shorter-lived and traded accordingly. Cabbage ships in cartons, bins, and net bags, and much of the crop leaves the fresh chain entirely — heads delivered for processing into sauerkraut, coleslaw, and other prepared products are handled in bulk as a raw material, with density and internal colour mattering more than the trimmed appearance a retail buyer pays for.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No storage figures are given here',
          text: 'Storage temperature, humidity, atmosphere composition, and achievable duration for cabbage are type-specific and set by sourced post-harvest guidance. No figures are published here; the USDA Agricultural Research Service handbook and national extension recommendations carry them.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Head firmness and density',
    'Weight for size',
    'Head size and uniformity',
    'Wrapper leaf condition and trim',
    'Colour',
    'Freedom from splitting',
  ],
  commonDefects: [
    'Split and burst heads',
    'Loose or puffy heads',
    'Yellowing and leaf abscission',
    'Butt discoloration and decay',
    'Internal soft rots',
    'Bruising and abrasion',
    'Freezing injury to outer leaves',
  ],
  moistureContext:
    'The head is high-moisture leafy tissue, but its density and wrapper leaves slow water loss considerably compared with open leafy vegetables. High storage humidity is still needed to prevent outer-leaf wilting and trim losses.',
  storageContext:
    'Among the longest-storing leafy vegetables: held near freezing at high humidity, with controlled atmosphere extending storage type cabbage for months. Not chilling-sensitive, but sensitive to ethylene in store.',
  transportContext:
    'Ships in cartons, bins, and net bags under refrigeration; the dense head travels well, and wrapper leaves absorb handling damage that would otherwise reach the saleable head.',
  majorProducingRegions: [
    'East Asia',
    'Europe and Central Asia',
    'South Asia',
    'North America',
  ],
  majorTradingRegions: ['Europe', 'East and Southeast Asia', 'North America'],
  commodityCodes: [
    {
      system: 'HS',
      code: '0704.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Other cabbages, fresh or chilled, within heading 0704. Cauliflowers and headed broccoli fall under 0704.10 and Brussels sprouts under 0704.20.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cabbage as a traded fresh vegetable commodity and post-harvest handling context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Cabbage cold and controlled-atmosphere storage behaviour and ethylene sensitivity',
    },
    {
      sourceId: 'usda',
      citedFor: 'Cabbage grading attributes, trim, and defect description',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Cabbage harvest maturity, splitting, and storage type context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, trim specifications, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No storage temperature, humidity, atmosphere, or shelf-life figure is given here — these are type-specific and belong to sourced post-harvest guidance.',
    'Storage white cabbage, Savoy, red, and pointed types differ substantially in storage life; no single expectation covers the commodity.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Head Cabbage: The Traded Leafy Head Commodity',
    description:
      'Head cabbage as a commodity: cutting and trim decisions, wrapper leaves as packaging, firmness and density in grading, splitting, and long cold storage.',
    keywords: [
      'head cabbage',
      'cabbage commodity',
      'cabbage grading',
      'cabbage storage',
      'cabbage splitting',
    ],
  },
  structuredData: { article: true },
};
