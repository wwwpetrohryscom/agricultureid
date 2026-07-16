import type { CommodityContent } from '@/types/content';

export const freshPineapples: CommodityContent = {
  id: 'commodity-fresh-pineapples',
  slug: 'fresh-pineapples',
  contentType: 'commodity',
  title: 'Fresh Pineapples',
  alternativeNames: ['Pineapple fruit', 'Fresh-market pineapple'],
  category: 'Fresh fruit commodity',
  subcategory: 'Tropical fruit',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Multiple fruit (a fused syncarp), cut with the crown retained',
  sourceCrop: { type: 'crop', slug: 'pineapple' },
  summary:
    'Fresh pineapples are non-climacteric: the fruit is as sweet as it will ever be at the moment it is cut, and there is no ripening step anywhere downstream. Shell colour deceives, chilling injury is the dominant transit disorder, and harvest timing carries the entire commercial burden.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh pineapples are the harvested fruit of the pineapple plant — technically a syncarp, a single body formed from many fused flowers, topped by the leafy crown that is cut with it and travels as part of the commodity. It is a heavy, robust-looking fruit that gives a misleading impression of durability, because its most important commercial property is one it shares with a strawberry: it does not ripen after harvest.',
    },
    {
      type: 'paragraph',
      text: 'A pineapple cut from the plant is at its final sugar content forever. The shell will keep changing colour, becoming steadily more golden in transit and in the shop, and this is the trap — the fruit looks like it is ripening when nothing of the kind is happening inside. An under-ripe pineapple picked green and shipped will present beautifully on arrival and taste sour. This entry covers the traded fruit; the plant is described on the pineapple crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    { label: 'Parent crop', value: 'Pineapple (Ananas comosus)' },
    {
      label: 'Harvested part',
      value: 'Syncarp (fused multiple fruit) with the crown attached',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric: no sugar increase and no ripening after cutting',
    },
    {
      label: 'Chilling sensitivity',
      value:
        'Chilling-sensitive: internal browning is the classic cold disorder',
    },
    {
      label: 'Colour trap',
      value: 'Shell degreens after harvest without any gain in eating quality',
    },
    {
      label: 'Signature disorder',
      value: 'Internal browning (blackheart), invisible from outside',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'A pineapple lot is fruit of a declared cultivar type, sized by count per carton, sold with the crown attached and specified on shell colour, shell condition, crown appearance, and freedom from defects. The crown is not incidental: it is judged for size, proportion, and freshness, and a wilted or broken crown downgrades a sound fruit. The trade has been transformed by low-acid, sweeter cultivar types bred for the fresh export market, which are specified and priced separately from traditional cannery types.',
        },
        {
          type: 'paragraph',
          text: 'The fresh and processing streams are almost entirely separate businesses. Cannery fruit is grown, harvested, and delivered on terms geared to a factory a short distance away, and is valued on flesh yield and sugar-acid balance in bulk. Fresh-export fruit is grown for appearance, shell colour development, and the ability to survive a sea voyage.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Shell colour is a clock, not a ripeness gauge',
          text: 'A cut pineapple degreens from the base upward as it ages, so shell colour tracks time since harvest more than eating quality. The trade uses shell colour stages to schedule shipments, not to judge sweetness.',
        },
      ],
    },
    {
      id: 'harvest-timing',
      heading: 'Harvest timing carries everything',
      body: [
        {
          type: 'paragraph',
          text: 'Because the fruit is non-climacteric, harvest maturity is not one variable among many — it is the variable. Sugars translocate into the fruit while it is attached and stop the moment it is cut, so the entire eating quality of a shipment is decided in the field, by the picker, in a single act. There is no room, no gas, and no interval that will change it.',
        },
        {
          type: 'paragraph',
          text: 'Fruit for distant fresh markets is therefore picked at a compromise maturity: ripe enough to eat well, firm and green enough to survive the voyage without arriving overripe. Fruit for local markets and for canning is cut riper because it has less distance to travel. Maturity is assessed on translucency, shell colour stage, and sampled sugar measurement, but the underlying judgement — how much shelf life must be reserved for the journey — is a commercial one.',
        },
      ],
    },
    {
      id: 'cold-chain-and-disorders',
      heading: 'Cold chain and internal browning',
      body: [
        {
          type: 'paragraph',
          text: 'Pineapples are shipped refrigerated, but the fruit is chilling-sensitive and the cold that preserves it also threatens it. Internal browning — known in the trade as blackheart — is the characteristic disorder: the flesh darkens from the core outward after cold exposure, and the fruit gives no external sign of it. A container can arrive looking flawless and be worthless when cut, which is why the pineapple trade treats temperature discipline as a commercial risk rather than a quality nicety.',
        },
        {
          type: 'paragraph',
          text: "The disorder's susceptibility varies with cultivar, growing conditions, and season, and the low-acid fresh-export types were selected partly for tolerance of it. Controlled and modified atmospheres are used on long routes to extend transportable life and reduce disorder incidence, and waxing of the shell is common practice to reduce water loss and internal browning, with permitted treatments varying by market.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Transit temperatures are not published here',
          text: 'The shipping temperature window for pineapple sits between decay at the warm end and internal browning at the cold end, and it is cultivar- and origin-specific. AgricultureID gives no figures; consult sourced post-harvest guidance.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh-market grading covers fruit size and count, shell colour stage, shell and eye condition, crown size and freshness, and freedom from decay and mechanical damage. Internal quality — flesh colour, translucency, and freedom from browning — cannot be seen from outside and is inferred from sampling, from maturity control at harvest, and from the temperature record of the container.',
        },
        {
          type: 'list',
          items: [
            'Internal browning (blackheart) — cold-induced, invisible externally',
            'Flesh translucency — water-soaked flesh in over-mature fruit, prone to bruising',
            'Fruitlet core rot and other internal decay',
            'Crown damage, wilting, and breakage',
            'Sunburn and mechanical shell injury from the field',
            'Under-mature fruit that degreens attractively but eats sour',
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
          text: 'Fresh pineapples are sold whole for eating and, increasingly, as fresh-cut chunks and slices prepared close to the consumer — a format that suits a fruit that is awkward to prepare at home. The canning and juice industries take the parallel processing stream, together with fresh fruit that fails size or appearance grades, and the trimmings and cores from both canning and fresh-cut operations become a substantial residue used for juice recovery and livestock feed at origin.',
        },
        {
          type: 'list',
          items: [
            'Food — whole fresh fruit and fresh-cut prepared product',
            'Food processing — canned slices, chunks, and purée from the processing stream',
            'Beverage — juice and concentrate, including recovery from processing trimmings',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['beverage', 'feed'],
  majorQualityAttributes: [
    'Harvest maturity and sugar at cutting',
    'Fruit size and count per carton',
    'Shell colour stage',
    'Crown size, proportion, and freshness',
    'Freedom from internal browning',
    'Shell condition and freedom from mechanical injury',
  ],
  commonDefects: [
    'Internal browning (blackheart)',
    'Excessive flesh translucency',
    'Fruitlet core rot',
    'Crown wilt and breakage',
    'Sunburn and shell injury',
    'Under-mature fruit with developed shell colour',
  ],
  moistureContext:
    'Water loss through the shell causes shell dulling and crown wilt and is countered by waxing and humidity control; it is not a graded moisture figure as it would be for a dry commodity.',
  storageContext:
    'Held refrigerated within a narrow window above the chilling-injury threshold, sometimes under controlled or modified atmosphere, with waxing used to limit water loss and internal browning.',
  transportContext:
    'Ships as palletised cartons in refrigerated containers on long sea routes; temperature records are commercially important because the main disorder is invisible on arrival.',
  majorProducingRegions: [
    'Southeast Asia',
    'Central and South America',
    'West Africa',
    'South Asia and Oceania',
  ],
  majorTradingRegions: [
    'Central America (dominant fresh exporting region)',
    'Europe and North America (major importing markets)',
    'Southeast Asia',
    'West Africa',
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-chain' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'modified-atmosphere-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Pineapple as a traded tropical fruit commodity and its processing stream',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Pineapple post-harvest physiology, internal browning, and transit behaviour',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Fresh pineapple trade flow and market reporting context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on pineapple fruit structure and commerce',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, permitted treatments, and market requirements are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, shipping specification, or treatment recommendation.',
    'No transit temperatures, sugar figures, or atmosphere compositions are given here; consult sourced post-harvest guidance.',
    'Susceptibility to internal browning varies by cultivar, origin, and season; the disorder cannot be judged from the exterior of the fruit.',
    'Regions are listed to indicate where pineapples originate and where they land, not to rank them by volume.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Pineapples: Harvest Maturity Is Final',
    description:
      'Fresh pineapples as a commodity: non-climacteric, so sugar is fixed at cutting while the shell keeps degreening. Chilling injury, blackheart, and grading.',
    keywords: [
      'fresh pineapples',
      'pineapple commodity',
      'blackheart',
      'pineapple internal browning',
      'non-climacteric fruit',
    ],
  },
  structuredData: { article: true },
};
