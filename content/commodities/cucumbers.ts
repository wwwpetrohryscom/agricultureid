import type { CommodityContent } from '@/types/content';

export const cucumbers: CommodityContent = {
  id: 'commodity-cucumbers',
  slug: 'cucumbers',
  contentType: 'commodity',
  title: 'Cucumbers',
  alternativeNames: ['Slicing cucumbers', 'Pickling cucumbers', 'Gherkins'],
  category: 'Fresh vegetable commodity',
  subcategory: 'Fruit vegetable',
  commodityClass: 'vegetable',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Fruit (the immature berry, cut from the vine before seeds harden)',
  sourceCrop: { type: 'crop', slug: 'cucumber' },
  summary:
    'Cucumbers are the immature fruit of the cucumber vine, harvested deliberately before maturity because a fully mature cucumber is inedible. Non-climacteric and chilling-sensitive, they are among the fastest-dehydrating fresh commodities in the trade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cucumbers are the traded fruit of the cucumber vine: cut by hand or machine while still immature, graded, and packed. The commodity splits into two commercial streams that share a crop but little else. Slicing cucumbers — including the long thin-skinned types grown under glass — go to the fresh market whole. Pickling cucumbers are grown and harvested to be delivered to a processor, sized tightly and handled as a bulk raw material rather than as fresh produce.',
    },
    {
      type: 'paragraph',
      text: 'The defining oddity of this commodity is that it is harvested before it is finished. A cucumber left to mature turns yellow, its seeds harden and its flesh coarsens, and it becomes worthless as food — the entire trade rests on catching the fruit in an immature window. Since the vine keeps setting new fruit, cucumbers are picked over repeatedly rather than harvested once, and the crop is defined by the pace of that picking. This entry describes the harvested fruit; the growing of the crop is on the cucumber crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (botanically a fruit)' },
    { label: 'Parent crop', value: 'Cucumber (Cucumis sativus)' },
    { label: 'Harvested part', value: 'Immature fruit' },
    {
      label: 'Ripening behaviour',
      value:
        'Non-climacteric; a cucumber does not improve after picking, it only ages',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Chilling-sensitive; injured by storage that is too cold',
    },
    {
      label: 'Key quality attributes',
      value:
        'Firmness, deep green colour, straightness, uniform diameter, freedom from yellowing',
    },
    {
      label: 'Trade streams',
      value:
        'Slicing cucumbers for fresh market and pickling cucumbers for processing',
    },
  ],
  sections: [
    {
      id: 'immature-harvest',
      heading: 'A commodity harvested before maturity',
      body: [
        {
          type: 'paragraph',
          text: 'Cucumbers are picked immature by design. In the fruit sold, the seeds are still soft and undeveloped and the flesh is crisp; carry on and the plant does what it intends to do — yellow the fruit, harden the seed coats, and turn the flesh coarse and bitter. That end state is a botanically ripe cucumber and a commercially dead one, so the harvest window is set by how fast the fruit is growing, and it is short.',
        },
        {
          type: 'paragraph',
          text: 'This is why cucumbers are picked over and over across a season, and why the pickling stream in particular is sized so tightly: processors buy against narrow diameter grades, and a fruit that grows past its grade between one pass and the next drops in value. Growth that continues after picking is not a factor — once cut, the fruit stops enlarging — but the ageing does not stop, and the same yellowing that ends the fruit on the vine will eventually catch up with it in store.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Yellow is not ripe here — it is over',
          text: 'For most fruit commodities colour change signals readiness. For cucumbers it signals the opposite: yellowing marks a fruit that has passed out of its usable window, whether on the vine or in storage. There is nothing to wait for.',
        },
      ],
    },
    {
      id: 'water-loss-and-waxing',
      heading: 'Water loss, waxing, and film',
      body: [
        {
          type: 'paragraph',
          text: 'Cucumbers dehydrate quickly. The fruit is mostly water in a long, high-surface-area shape with a thin skin and a poor natural wax layer, and it shows loss as softening, rubberiness, and a dull, shrivelled surface — the classic limp cucumber. Because the fruit is sold on crispness and gloss, water loss is not a marginal quality issue for this commodity but the main way it fails.',
        },
        {
          type: 'paragraph',
          text: 'Two answers are standard. Field-grown slicing cucumbers are commonly waxed, replacing what the fruit lacks with a food-grade coating that slows water loss and restores gloss. Long greenhouse types are shrink-wrapped in film instead, which does the same job — the wrap on a supermarket cucumber is functional packaging keeping water in, not presentation. Either way, humidity is held high throughout the chain, and it is worth noting that the commodity is never dried: for cucumbers, moisture management means retention only.',
        },
      ],
    },
    {
      id: 'chilling-sensitivity',
      heading: 'Chilling sensitivity',
      body: [
        {
          type: 'paragraph',
          text: 'The cucumber is a warm-season fruit and is chilling-sensitive. Held too cold, it develops chilling injury: pitting across the surface, water-soaked areas, and accelerated decay once returned to warmer conditions. As is usual with chilling injury, the damage is latent — it appears after the exposure rather than during it, so a lot can leave a cold room looking sound and collapse in the following days.',
        },
        {
          type: 'paragraph',
          text: 'This puts cucumbers in the same awkward category as tomatoes and sweet peppers: fast-deteriorating commodities that would benefit from deep cooling but cannot have it. Cucumbers are also damaged by ethylene, which accelerates yellowing and softening, so a cucumber stored with tomatoes or other ethylene producers ages faster on that account too. Between the temperature floor and the ethylene constraint, cucumbers are poor candidates for the mixed room and the mixed load.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No temperatures or shelf life are given here',
          text: 'The chilling threshold, holding temperature and humidity, and market life for cucumbers are commodity-specific and set by sourced post-harvest guidance. These are deliberately omitted here; the USDA Agricultural Research Service handbook and national extension services publish them.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Slicing cucumbers are graded on firmness, colour depth and evenness, straightness, diameter and length, and freedom from defects. Straightness carries real weight because crooked fruit does not pack efficiently, and curvature is a common downgrade even though the fruit is otherwise perfect. Pickling cucumbers are graded to a different logic altogether — diameter grade dominates, since the processor is filling jars of a defined size, and the appearance criteria that matter on a shelf hardly matter at all.',
        },
        {
          type: 'list',
          items: [
            'Yellowing — the fruit ageing past its usable window',
            'Chilling injury — pitting, water-soaking, and rapid decay after cold exposure',
            'Shrivelling, softening, and rubberiness from water loss',
            'Curvature and misshapen fruit',
            'Bruising, abrasion, and cuts from handling',
            'Decay, often entering at the stem or blossom end',
            'Bloating and hollow centres in the pickling stream',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Firmness and crispness',
    'Colour depth and evenness',
    'Straightness',
    'Diameter and length uniformity',
    'Surface gloss',
    'Freedom from yellowing',
  ],
  commonDefects: [
    'Yellowing from over-maturity or ageing',
    'Chilling injury (pitting and water-soaking)',
    'Shrivelling and softening',
    'Curvature and misshapen fruit',
    'Bruising and abrasion',
    'Stem- and blossom-end decay',
    'Bloating and hollow centres',
  ],
  moistureContext:
    'Among the fastest-dehydrating fresh commodities: a thin skin, little natural wax, and a high surface-to-volume shape. Waxing, shrink film, and high humidity are used to retain water; the fruit is never dried.',
  storageContext:
    'Short-term holding only, at high humidity and a temperature above the chilling threshold — cool but well short of the near-freezing regime used for leafy vegetables.',
  transportContext:
    'Ships refrigerated in cartons, waxed or film-wrapped; poorly suited to mixed loads because of both its chilling threshold and its sensitivity to ethylene from co-loaded commodities.',
  majorProducingRegions: [
    'East Asia',
    'Middle East and North Africa',
    'Europe and Central Asia',
    'North America',
  ],
  majorTradingRegions: [
    'Europe (large intra-regional trade)',
    'Middle East and North Africa',
    'North America',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0707.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cucumbers and gherkins, fresh or chilled. Cucumbers preserved or prepared are classified elsewhere.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'commodity', slug: 'sweet-peppers' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cucumbers as a traded fresh vegetable commodity and handling context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Chilling injury, water loss, waxing, and ethylene sensitivity of cucumbers',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Cucumber grading attributes, size classes, and defect description',
    },
    {
      sourceId: 'psu-extension',
      citedFor:
        'Slicing and pickling cucumber harvest windows and market streams',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Size grades, pack specifications, and classification codes are jurisdiction-specific and are revised between editions.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No storage temperature, humidity, chilling threshold, or shelf-life figure is given here — these are commodity-specific and belong to sourced post-harvest guidance.',
    'Slicing, greenhouse, and pickling cucumbers are distinct commercial streams with different grading logic; no single expectation covers all three.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cucumbers: The Immature-Harvested Fruit Commodity',
    description:
      'Cucumbers as a commodity: why they are picked immature, waxing and film against rapid water loss, chilling injury limits, and slicing versus pickling streams.',
    keywords: [
      'cucumbers',
      'cucumber commodity',
      'pickling cucumbers',
      'cucumber waxing',
      'cucumber chilling injury',
    ],
  },
  structuredData: { article: true },
};
