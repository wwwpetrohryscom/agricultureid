import type { CommodityContent } from '@/types/content';

export const avocados: CommodityContent = {
  id: 'commodity-avocados',
  slug: 'avocados',
  contentType: 'commodity',
  title: 'Avocados',
  alternativeNames: ['Avocado fruit', 'Alligator pear'],
  category: 'Fresh fruit commodity',
  subcategory: 'Oil-rich tropical fruit',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Berry (a single-seeded, oil-rich fleshy fruit)',
  sourceCrop: { type: 'crop', slug: 'avocado' },
  summary:
    'Avocados are an oil-rich climacteric fruit with a property no other major fruit shares: they will not ripen while they hang on the tree. The tree therefore doubles as the store, and dry matter — a proxy for oil content — is the maturity measure the trade runs on.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Avocados are the harvested fruit of the avocado tree, and they behave unlike any other commodity in the fresh trade. A mature avocado left on the tree does not soften; ripening is suppressed while the fruit remains attached and begins only once it is picked. This gives the trade something close to a living warehouse — fruit can be left hanging for weeks and harvested to meet demand — and it makes the moment of picking, rather than any moment before it, the start of the clock.',
    },
    {
      type: 'paragraph',
      text: 'The other defining fact is composition. An avocado is a fruit that stores oil rather than sugar, and its eating quality tracks its oil content. Because oil accumulates steadily as the fruit matures, and because dry matter tracks oil closely and is far easier to measure, dry matter has become the maturity standard the trade and the regulators both use. This entry describes the commodity; the orchard belongs to the avocado crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    { label: 'Parent crop', value: 'Avocado (Persea americana)' },
    {
      label: 'Distinctive physiology',
      value: 'Ripening is suppressed on the tree and begins only after picking',
    },
    {
      label: 'Ripening behaviour',
      value: 'Climacteric and strongly ethylene-responsive once detached',
    },
    {
      label: 'Chilling sensitivity',
      value: 'Chilling-sensitive; tolerance varies with cultivar and maturity',
    },
    {
      label: 'Maturity measure',
      value: 'Dry matter, used as a proxy for oil content',
    },
    {
      label: 'Stores fat, not sugar',
      value: 'Eating quality tracks oil accumulation, not sweetness',
    },
  ],
  sections: [
    {
      id: 'the-tree-as-store',
      heading: 'The tree as a store',
      body: [
        {
          type: 'paragraph',
          text: 'The suppression of ripening on the tree is the commercial foundation of the avocado trade. A grower with mature fruit hanging is holding inventory that is not deteriorating on any short timescale and is not costing anything to refrigerate, and can pick to order across a long window. No apple or banana grower has that option.',
        },
        {
          type: 'paragraph',
          text: "The flexibility is not unlimited. Fruit held very long on the tree accumulates more oil, which is not automatically better — it can carry rancid or off flavours — and long-hung fruit tends to have a shorter life after picking and can interfere with the next season's flowering. Late-hung fruit also becomes more vulnerable to handling damage. So the window is wide, but it has ends.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Picking starts the clock',
          text: 'Detachment releases the fruit from whatever inhibits ripening while it is attached. From the moment an avocado is picked it is a climacteric fruit on its way to softening, and everything afterwards is about controlling the pace.',
        },
      ],
    },
    {
      id: 'maturity-and-dry-matter',
      heading: 'Maturity and dry matter',
      body: [
        {
          type: 'paragraph',
          text: "Because an avocado does not change colour or soften on the tree, nothing visible reveals whether it is ready to pick. The industry's answer is dry matter: a sample of fruit is weighed, dried, and reweighed, and the resulting figure stands as a proxy for oil content. Fruit picked below the accepted level for its cultivar and region will soften but never ripen properly — it stays rubbery, tastes watery, and never develops the buttery texture that defines the eating quality. This failure mode is exactly why minimum-maturity rules for avocados exist in law in several markets.",
        },
        {
          type: 'paragraph',
          text: 'The minimum is set by cultivar, region, and jurisdiction, and it is not a single number. Commercial practice frequently picks above the legal floor, because the floor represents the point of acceptability rather than of good eating. Maturity assessment is done on sampled fruit before the block is harvested, and it is the one measurement that decides whether the lot has a future.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No dry-matter figure is given here',
          text: 'Minimum dry matter for avocados is cultivar-, region-, and jurisdiction-specific and is set by regulation and industry standards. AgricultureID publishes no threshold; consult the standard in force for the cultivar and market concerned.',
        },
      ],
    },
    {
      id: 'cold-chain-and-ripening',
      heading: 'Cold chain, atmosphere, and ripening',
      body: [
        {
          type: 'paragraph',
          text: "Once picked, avocados are cooled quickly and shipped cold — but, being chilling-sensitive, only within their tolerance, below which the flesh develops grey-brown discolouration and vascular browning that appears when the fruit is finally cut. The tolerance is not fixed: it varies with cultivar and with fruit maturity, so the same regime can be safe for one lot and injurious for another. Long sea voyages commonly use controlled atmosphere, lowering oxygen and raising carbon dioxide to slow the climacteric further and stretch the fruit's transportable life.",
        },
        {
          type: 'paragraph',
          text: "At destination the fruit is ripened deliberately in rooms with warmth and ethylene, exactly as bananas are, to deliver ready-to-eat fruit on a scheduled day. Ripe avocados bruise very easily, which is the trade's central tension: consumers want fruit ready to eat, and fruit that is ready to eat is fruit that can barely be handled. Firmness sorting on packing lines is used to segregate fruit by how far along the ripening curve it has travelled.",
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: "Avocados are specified on size and count, skin condition, firmness stage, and freedom from external and internal defects. Internal condition is the buyer's real concern and the hardest thing to see: flesh browning, vascular discolouration, and rots inside an intact-looking fruit are the complaints that generate claims, and they usually originate in temperature abuse or over-maturity earlier in the chain.",
        },
        {
          type: 'list',
          items: [
            'Chilling injury — grey-brown flesh and vascular browning revealed only when cut',
            'Anthracnose and stem-end rot — latent infections expressing during ripening',
            'Bruising — the dominant damage in ripe fruit, inflicted by ordinary handling',
            'Immature fruit that shrivels or softens without ripening properly',
            'Uneven ripening across a room or pallet',
            'Skin blemish, lenticel damage, and wind rub from the orchard',
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
          text: 'Avocados are overwhelmingly sold and eaten as whole fresh fruit. Because the flesh browns quickly once exposed, processing has developed around technologies that manage that — chilled and high-pressure-treated pulp and guacamole preparations, and frozen product — which take fruit that is sound but off-specification for size or appearance. Avocado oil, pressed from the flesh rather than the seed, is a smaller outlet that also draws on fruit outside the fresh grade.',
        },
        {
          type: 'list',
          items: [
            'Food — whole fresh fruit, the dominant use',
            'Food processing — pulp, guacamole, and frozen product from off-grade fruit',
            'Oil — avocado oil pressed from the flesh, for food and cosmetic use',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['oil', 'industrial'],
  majorQualityAttributes: [
    'Dry matter at harvest (oil proxy)',
    'Fruit size and count per carton',
    'Firmness stage on arrival',
    'Internal flesh condition',
    'Skin condition and freedom from blemish',
    'Freedom from rots',
  ],
  commonDefects: [
    'Chilling injury and internal flesh browning',
    'Vascular browning',
    'Anthracnose and stem-end rot',
    'Bruising of ripe fruit',
    'Immature fruit failing to ripen',
    'Lenticel damage and skin blemish',
  ],
  moistureContext:
    'Dry matter is measured on avocados as a maturity and oil proxy rather than as a storage parameter; after picking, water loss shows as skin shrivel and weight loss.',
  storageContext:
    'Cooled promptly and held within a cultivar- and maturity-dependent chilling tolerance, frequently under controlled atmosphere for long voyages, then ripened to order at destination.',
  transportContext:
    'Ships as palletised cartons in refrigerated containers, often under controlled atmosphere; ripe fruit is handled minimally because it bruises under ordinary pressure.',
  majorProducingRegions: [
    'Latin America and the Caribbean',
    'East and Southern Africa',
    'Mediterranean Europe and the Middle East',
    'North America and Oceania',
  ],
  majorTradingRegions: [
    'Latin America (dominant exporting region)',
    'North America and Europe (major importing markets)',
    'East Asia',
    'Southern Africa and the Mediterranean',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0804.40',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Avocados, fresh or dried, at 6-digit subheading level.',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Avocado as a traded fresh fruit commodity and its market growth',
    },
    {
      sourceId: 'usda',
      citedFor: 'Avocado maturity standard and grade attribute context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Avocado post-harvest physiology, dry matter maturity, and chilling injury',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Avocado trade flow and market reporting context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Minimum maturity rules, grade standards, and codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a maturity determination, storage recommendation, or grading decision.',
    'No dry-matter, oil-content, or storage-temperature figures are given here — they are cultivar-, region-, and jurisdiction-specific.',
    'Chilling tolerance varies with cultivar and fruit maturity; a regime safe for one lot may injure another.',
    'Regions are given to indicate where avocados are grown and shipped, not as a ranked table of production.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Avocados: Dry Matter, Cold Chain, and Ripening',
    description:
      'Avocados as a commodity: why the fruit will not ripen on the tree, dry matter as the maturity measure, chilling injury, and ripening to order at destination.',
    keywords: [
      'avocados',
      'avocado dry matter',
      'avocado maturity',
      'avocado chilling injury',
      'avocado ripening',
    ],
  },
  structuredData: { article: true },
};
