import type { CommodityContent } from '@/types/content';

export const freshBroccoli: CommodityContent = {
  id: 'commodity-fresh-broccoli',
  slug: 'fresh-broccoli',
  contentType: 'commodity',
  title: 'Fresh Broccoli',
  alternativeNames: ['Calabrese', 'Broccoli crowns', 'Bunched broccoli'],
  category: 'Fresh vegetable commodity',
  subcategory: 'Flower-bud vegetable',
  commodityClass: 'vegetable',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Head — the immature flower-bud cluster, cut with a length of stalk',
  sourceCrop: { type: 'crop', slug: 'broccoli' },
  summary:
    'Fresh broccoli is the cut head of immature flower buds of the broccoli plant. It respires faster than almost any commodity in the produce trade, and that single fact — a head racing to open into flowers it can no longer feed — dictates the icing, hydrocooling, and speed that surround it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh broccoli is the traded commodity of the broccoli crop: heads cut by hand at bud stage, trimmed to a specified stalk length, and packed as crowns or as bunches. What is being sold is an arrested flower. The head is a dense cluster of unopened buds that the plant was preparing to bloom, and it is harvested precisely because it has not yet done so — the commodity exists only in a narrow developmental window, on the wrong side of which the same head is worthless.',
    },
    {
      type: 'paragraph',
      text: 'That gives broccoli a metabolic urgency few commodities match. Actively developing flower tissue has among the highest respiration rates in the produce trade, and a cut head keeps trying to open its buds using reserves it no longer has any way of replenishing. Warm broccoli consumes itself and yellows within a day or two. Everything in the handling of this commodity — the ice, the hydrocooling, the speed from field to cooler — follows from that. This entry covers the harvested head; the growing of the crop is on the broccoli crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (immature flower buds)' },
    {
      label: 'Parent crop',
      value: 'Broccoli (Brassica oleracea Italica Group)',
    },
    {
      label: 'Harvested part',
      value: 'Head of unopened flower buds with stalk',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric; broccoli cannot ripen or improve after cutting',
    },
    {
      label: 'Chilling sensitivity',
      value:
        'Not chilling-sensitive; held as cold as possible short of freezing',
    },
    {
      label: 'Defining constraint',
      value:
        'Very high respiration rate — rapid cooling is essential, not optional',
    },
    {
      label: 'Key quality attributes',
      value: 'Bud tightness, deep green colour, head compactness, stalk trim',
    },
  ],
  sections: [
    {
      id: 'respiration',
      heading: 'The highest-respiring commodity on the truck',
      body: [
        {
          type: 'paragraph',
          text: 'Respiration is a living tissue burning its own reserves, and the rate of it sets how fast a commodity uses itself up. Broccoli is at the extreme end of the range — its head is meristematic tissue in the middle of building flowers, the most metabolically expensive thing a plant does, and cutting it does not switch that programme off. The head continues to develop, drawing on stored sugars, and it yellows as chlorophyll is broken down and the buds move towards opening.',
        },
        {
          type: 'paragraph',
          text: 'Two consequences follow directly. First, broccoli generates a lot of its own heat: a bin of it warms itself from the inside, so cooling has to overcome not just field heat but continuing metabolic heat. Second, the rate is strongly temperature-dependent — respiration slows dramatically as tissue is chilled — which is why cooling broccoli quickly is not a matter of tidiness but the single intervention that determines whether the lot arrives saleable.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Yellowing is the clock running out',
          text: 'A yellowing head is not diseased or damaged: it is a flower bud continuing the development it began on the plant. The commodity is an immature stage held artificially, and cold is the only thing slowing its progress.',
        },
      ],
    },
    {
      id: 'cooling',
      heading: 'Hydrocooling, icing, and speed',
      body: [
        {
          type: 'paragraph',
          text: 'Broccoli is cooled with water and with ice, because air is too slow for it. Hydrocooling floods or showers the heads with chilled water, which carries heat away far faster than cold air and reaches into a dense head without drying the buds. Package icing goes further: crushed or slurry ice is packed into the carton with the product, so the broccoli continues to be cooled through transit and any interruption in refrigeration is buffered by ice that has not yet melted.',
        },
        {
          type: 'paragraph',
          text: 'Package icing is characteristic of this commodity precisely because broccoli is unusual enough to justify its costs — the extra weight, the wet packaging, the need for drainage. Few commodities earn it. Broccoli does, because the alternative is a head that has spent its reserves before arrival. The time from cutting to cooling is measured in hours and treated as a hard operational limit, which is why fields are cut close to cooling capacity and product moves as a priority load.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No respiration or temperature figures are given here',
          text: 'Respiration rates, cooling targets, and holding conditions for broccoli are commodity-specific and set by sourced post-harvest guidance. This page gives none of them: the USDA Agricultural Research Service handbook and national extension recommendations are where those numbers belong.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Broccoli is graded on the tightness of its buds, the depth and evenness of its green colour, head compactness and diameter, and stalk trim. Bud tightness is the headline attribute because it reads the developmental clock directly: tight, fine, uniformly closed beads mean a head cut and cooled in time, while loosening or opening buds mean the head has moved on, whether in the field or in the chain. Colour is the second reading of the same clock.',
        },
        {
          type: 'list',
          items: [
            'Yellowing — chlorophyll loss as buds continue developing, the dominant defect',
            'Bud opening and loose, coarse beading',
            'Hollow stem — a cavity in the stalk, set before harvest',
            'Bruising and bud damage from handling and over-packing',
            'Decay and soft rots, favoured by wet packaging and warmth',
            'Wilting and limp stalks from water loss',
            'Purpling or uneven colour on the bud surface',
          ],
        },
        {
          type: 'paragraph',
          text: 'Broccoli is non-climacteric — there is no ripening to complete and nothing to be gained by holding it — but it is sensitive to ethylene, which accelerates the yellowing it is already prone to. So the commodity that most needs to be got cold also needs to be kept away from ethylene sources, and the two requirements together push broccoli towards dedicated handling rather than mixed loads and mixed rooms.',
        },
      ],
    },
    {
      id: 'trade-forms',
      heading: 'Trade forms and packaging',
      body: [
        {
          type: 'paragraph',
          text: 'The commodity reaches market mainly as crowns — heads trimmed to a short stalk, which sheds weight that the buyer does not want to pay to ship — and as bunches with longer stalks tied together. Florets cut from heads are a fresh-cut product with the shorter life that cutting always brings. Packaging must serve the cooling rather than fight it: cartons are vented and built to drain, and where modified-atmosphere film is used it is chosen to slow respiration without suffocating a tissue that is consuming oxygen unusually fast.',
        },
        {
          type: 'paragraph',
          text: 'A good deal of broccoli never enters the fresh chain at all. Heads delivered for freezing are cut into florets, blanched, and frozen close to the growing area, which suits a commodity whose fresh handling is this demanding — freezing stops the developmental clock outright rather than merely slowing it.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Bud tightness and fineness of beading',
    'Depth and evenness of green colour',
    'Head compactness and diameter',
    'Stalk trim and length',
    'Freshness and turgidity',
    'Freedom from decay',
  ],
  commonDefects: [
    'Yellowing of buds',
    'Bud opening and loose beading',
    'Hollow stem',
    'Bruising and bud damage',
    'Decay and soft rots',
    'Wilting and limp stalks',
    'Uneven or purpled colour',
  ],
  moistureContext:
    'Broccoli loses water readily and wilts, but the greater concern is heat rather than dryness: hydrocooling and package icing wet the product deliberately, so packaging is designed to drain and vent rather than to keep the head dry.',
  storageContext:
    'Held as cold as possible short of freezing, at high humidity, for short periods; very high respiration makes rapid cooling the decisive step, and ethylene exposure accelerates yellowing.',
  transportContext:
    'Moves refrigerated in vented, drainable cartons, commonly with package ice; treated as a priority load because cut-to-cool time governs arrival quality.',
  majorProducingRegions: [
    'East Asia',
    'North America',
    'Europe',
    'Mediterranean and North Africa',
  ],
  majorTradingRegions: ['North America', 'Europe', 'East Asia'],
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
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Broccoli as a traded fresh vegetable commodity and cold-chain context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Broccoli respiration, hydrocooling and package icing, and ethylene-accelerated yellowing',
    },
    {
      sourceId: 'usda',
      citedFor: 'Broccoli grading attributes, trim, and defect description',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Broccoli post-harvest disorders and handling context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, trim and pack specifications, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No respiration rate, cooling target, storage temperature, or market-life figure is given here — these are commodity-specific and belong to sourced post-harvest guidance.',
    'No HS classification code is given here because the correct subheading depends on whether the product is headed or sprouting broccoli; confirm with the applicable customs authority.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Broccoli: A High-Respiration Commodity',
    description:
      'Fresh broccoli as a commodity: why its very high respiration rate forces hydrocooling and package icing, bud tightness in grading, and yellowing defects.',
    keywords: [
      'fresh broccoli',
      'broccoli commodity',
      'broccoli hydrocooling',
      'package icing',
      'broccoli yellowing',
    ],
  },
  structuredData: { article: true },
};
