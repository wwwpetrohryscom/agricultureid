import type { CommodityContent } from '@/types/content';

export const teaLeaf: CommodityContent = {
  id: 'commodity-tea-leaf',
  slug: 'tea-leaf',
  contentType: 'commodity',
  title: 'Tea Leaf',
  alternativeNames: ['Green leaf', 'Fresh tea leaf', 'Plucked leaf'],
  category: 'Beverage crop commodity',
  subcategory: 'Fresh plucked leaf for processing',
  commodityClass: 'beverage-crop',
  physicalForm: 'leaf',
  harvestedPart: 'Young shoot — typically the bud and the two youngest leaves',
  sourceCrop: { type: 'crop', slug: 'tea' },
  summary:
    'Tea leaf is the fresh shoot plucked from the tea bush: a highly perishable commodity that must reach the factory within hours. What is plucked — bud and two leaves, or something coarser — sets a ceiling on the made tea that no factory can raise.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tea leaf is the fresh, green, just-plucked shoot of the tea bush, and it is a commodity in its own right: smallholders across the tea-growing world sell green leaf by weight to factories every day of the plucking season, and the price they receive is the tea economy at its most direct. It is not the tea anyone drinks. That is made tea, a processed product; this is the raw material that arrives at the factory gate in a sack.',
    },
    {
      type: 'paragraph',
      text: 'The commodity is defined by two things. The first is what is plucked: the bud with the two youngest leaves beneath it is the classic fine plucking standard, and every additional older leaf taken with it coarsens the result. The second is time. Plucked leaf begins to deteriorate immediately, heats when heaped, and bruises when compressed, and the interval between the field and the withering trough is measured in hours. This entry describes the plucked leaf; the bush belongs to the tea crop entry.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Beverage crop (fresh leaf for processing)',
    },
    { label: 'Parent crop', value: 'Tea (Camellia sinensis)' },
    {
      label: 'Harvested part',
      value: 'The young shoot — classically the bud and two youngest leaves',
    },
    {
      label: 'Perishability',
      value: 'Very high: must reach the factory within hours of plucking',
    },
    {
      label: 'Quality basis',
      value:
        'Plucking standard, leaf freshness, and freedom from bruising and heat',
    },
    {
      label: 'Distinct from',
      value:
        'Made tea — the processed, dried product that is actually traded and drunk',
    },
    {
      label: 'Trade character',
      value: 'Sold locally by weight from smallholders to factories',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'Tea is plucked from the flush — the periodic burst of new shoots the bush produces — and the plucking round returns every several days to take the new growth. What the plucker takes defines the commodity: a bud and two leaves is fine plucking, a bud and three or more leaves is coarse, and the ratio of fine to coarse in a delivered lot is what the factory assesses and pays against.',
        },
        {
          type: 'paragraph',
          text: 'The reason is compositional. The bud and youngest leaves are richest in the compounds that make tea — the polyphenols that oxidise into the colour and briskness of black tea, and the amino acids and aromatics that carry flavour. Older leaf is fibrous, lower in those compounds, and dilutes the lot. A factory receiving coarse leaf will make a thinner, cheaper tea, and no processing skill compensates.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The leaf is not the tea',
          text: 'Green leaf and made tea are different things. Making tea involves withering, disruption of the leaf, controlled oxidation for black teas or its prevention for green teas, drying, and sorting. AgricultureID models the plucked leaf as the commodity; made tea is a processed product of it.',
        },
      ],
    },
    {
      id: 'the-hours-that-matter',
      heading: 'The hours that matter',
      body: [
        {
          type: 'paragraph',
          text: 'From the moment a shoot is plucked its cells are cut off from supply and its enzymes are active. Leaf left heaped in a sack heats from its own respiration, and heat plus pressure plus time produces exactly what tea makers do not want: uncontrolled oxidation, in the field, before any of the deliberate processing decisions have been made. The resulting made tea is flat and dull, and the fault was committed before the leaf ever reached a machine.',
        },
        {
          type: 'paragraph',
          text: 'The chain is therefore built for speed and gentleness. Leaf goes into open, ventilated baskets or crates rather than sacks that compress it, collection points are sited close to the fields, and vehicles run frequent short trips rather than accumulating a full load. Factories are built among the tea gardens rather than at ports, which is why tea processing is an origin industry in a way that, say, cashew processing is not.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Intervals and conditions belong to sourced guidance',
          text: 'Acceptable time from plucking to withering, leaf handling depths, and factory intake conditions are set by regional practice and technical guidance. AgricultureID publishes no times, temperatures, or loading figures.',
        },
      ],
    },
    {
      id: 'plucking-and-assessment',
      heading: 'Plucking, assessment, and payment',
      body: [
        {
          type: 'paragraph',
          text: 'Hand plucking remains the standard for quality tea because a hand can select the shoot and leave the rest, and the pluckers move through the same field repeatedly across a season. Mechanical harvesting and shears are used where labour costs or scale demand it, and they take what they cut — bud, young leaf, old leaf, and stalk together — which coarsens the lot but transforms the economics.',
        },
        {
          type: 'paragraph',
          text: "At the factory gate, green leaf is weighed and assessed, usually by a visual and tactile judgement of the plucking standard and the leaf's condition. Payment on weight alone rewards volume, including the older leaf that adds weight and subtracts quality — so leaf pricing structures that reward fine plucking are one of the principal levers a tea industry has over its own quality, and they are set by country, by company, and by smallholder scheme.",
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Assessment covers the plucking standard, the freshness and turgidity of the leaf, the absence of heating and bruising, and freedom from foreign matter. Because the commodity cannot be stored, there is no second chance to assess it and no possibility of holding a lot until the price improves — leaf delivered is leaf processed, the same day.',
        },
        {
          type: 'list',
          items: [
            'Coarse plucking — excess mature leaf and stalk diluting the lot',
            'Heat damage from leaf heaped or held too long before withering',
            'Bruising and crushing from compression in sacks or overfilled containers',
            'Wilting and moisture loss in leaf held in sun or wind',
            'Foreign matter — weeds, other species, and debris in the delivered lot',
            'Wet leaf plucked in rain, which mats, heats, and withers unevenly',
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
          text: 'Effectively all green leaf goes to tea manufacture, and what type of tea it becomes is a factory decision made on the same leaf: black tea through full oxidation, green tea by preventing oxidation with heat soon after plucking, and oolong, white, and dark teas through other routes. The same delivered lot could in principle become any of them, which is another way of saying that the leaf is the raw material and the tea type is manufactured. Fine plucking supplies premium whole-leaf teas; coarser leaf feeds the high-volume methods that supply blended and bagged tea.',
        },
        {
          type: 'list',
          items: [
            'Beverage — manufacture into black, green, oolong, white, and dark teas',
            'Food and industrial — leaf and processing fractions used for extracts and instant tea',
          ],
        },
      ],
    },
  ],
  primaryUses: ['beverage'],
  secondaryUses: ['food', 'industrial'],
  majorQualityAttributes: [
    'Plucking standard (proportion of bud and young leaf)',
    'Time from plucking to withering',
    'Leaf freshness and turgidity',
    'Freedom from heat damage',
    'Freedom from bruising and crushing',
    'Freedom from foreign matter',
  ],
  commonDefects: [
    'Coarse plucking with excess mature leaf and stalk',
    'Heat damage in heaped leaf',
    'Bruising and crushing in transport',
    'Wilting and moisture loss',
    'Foreign matter',
    'Wet, matted leaf',
  ],
  moistureContext:
    'Fresh leaf is high in water, and the controlled removal of that water at withering is the first step of tea manufacture; wet surface moisture from rain at plucking causes matting and uneven withering.',
  storageContext:
    'Not a stored commodity. Leaf is held only in the hours between plucking and withering, in ventilated containers that prevent compression and heating.',
  transportContext:
    'Moves in open baskets, crates, and ventilated vehicles over short distances from field to factory, in frequent small loads; compression and delay are the damage mechanisms.',
  majorProducingRegions: [
    'East and South Asia',
    'Southeast Asia',
    'East and Southern Africa',
    'The Middle East and South America',
  ],
  majorTradingRegions: [
    'Traded only locally, from field to factory; the fresh leaf does not enter international trade',
    'South and East Asia',
    'East Africa',
    'Southeast Asia',
  ],
  connections: [
    { type: 'crop', slug: 'tea' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['perennial-crop', 'cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Tea leaf plucking, green leaf handling, and the tea value chain',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Tea plucking standards and green leaf quality context in South Asia',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Tea crop and harvested leaf handling reference context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on tea leaf and tea manufacture',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Tea-producing regions. Plucking standards, leaf pricing structures, and factory intake practice are country- and scheme-specific.',
  limitations: [
    'This entry describes the fresh plucked leaf as a commodity; it is not tea manufacturing guidance or a quality protocol.',
    'No plucking-to-withering intervals, leaf holding depths, or processing parameters are given here; these belong to sourced regional technical guidance.',
    'Tea manufacture is described at concept level only; the classification of made teas is outside the scope of this commodity entry.',
    'Tea-growing regions are named indicatively; no ranking by leaf volume or output is implied.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Tea Leaf: The Fresh Plucked Shoot as Traded',
    description:
      'Tea leaf as a commodity: bud and two leaves as the plucking standard, why the shoot must reach the factory within hours, and heat and bruising damage.',
    keywords: [
      'tea leaf',
      'green leaf tea',
      'plucking standard',
      'tea factory intake',
      'fresh tea shoot',
    ],
  },
  structuredData: { article: true },
};
