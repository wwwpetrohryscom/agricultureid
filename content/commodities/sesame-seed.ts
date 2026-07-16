import type { CommodityContent } from '@/types/content';

export const sesameSeed: CommodityContent = {
  id: 'commodity-sesame-seed',
  slug: 'sesame-seed',
  contentType: 'commodity',
  title: 'Sesame Seed',
  alternativeNames: ['Sesamum', 'Benniseed', 'Til', 'Gingelly'],
  category: 'Oilseed commodity',
  subcategory: 'Food-grade oilseed',
  commodityClass: 'oilseed',
  physicalForm: 'seed',
  harvestedPart: 'Small flat seed, released from the capsule at threshing',
  sourceCrop: { type: 'crop', slug: 'sesame' },
  summary:
    'Sesame seed is the small, flat seed of Sesamum indicum, traded natural or hulled and sorted by colour. Unusually for an oilseed, most of the trade is food-grade rather than commodity crushing, so purity, colour, and cleanliness dominate its specifications.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sesame seed is threshed from capsules and traded as a small, flat, oil-rich seed. It sits apart from the bulk oilseed complex: it is not a freely substitutable crushing raw material priced against soybeans and rapeseed, but a food-grade commodity bought largely on physical purity and appearance for direct food manufacture — tahini and halva, bakery toppings, confectionery, and pressed oils.',
    },
    {
      type: 'paragraph',
      text: 'This orientation shapes everything about how the commodity is described. Purity — the proportion of the lot that is sound sesame and nothing else — is the headline term. Colour uniformity is specified because buyers can see it in the finished food. And because much sesame is eaten with little or no heat treatment, the microbiological condition of the seed is a documented concern in a way it is not for a seed destined only for a crusher.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Oilseed, traded predominantly as food-grade',
    },
    { label: 'Parent crop', value: 'Sesame (Sesamum indicum)' },
    {
      label: 'Harvested part',
      value: 'Seed released from the capsule at threshing',
    },
    {
      label: 'Trade forms',
      value: 'Natural (unhulled) and hulled seed, sorted by colour',
    },
    {
      label: 'Headline specification',
      value:
        'Purity — sound sesame content, stated as a percentage by contract',
    },
    {
      label: 'Principal uses',
      value: 'Food manufacture, pressing for oil, bakery and confectionery',
    },
    {
      label: 'Regulatory notes',
      value:
        'A named allergen in many jurisdictions; subject to import controls in some',
    },
  ],
  sections: [
    {
      id: 'natural-hulled-colour',
      heading: 'Natural, hulled, and colour',
      body: [
        {
          type: 'paragraph',
          text: 'Natural sesame retains the seed coat and is bought where the coat is wanted — bakery toppings and some oil pressing — or where the buyer intends to hull it. Hulled sesame has had the coat removed, which changes colour and mouthfeel and makes the seed the pale, uniform article used in tahini and confectionery. Hulling exposes the seed and shortens its keeping quality, so hulled lots are handled and stored more carefully than natural ones.',
        },
        {
          type: 'paragraph',
          text: 'Colour is a trading category rather than a cosmetic detail. White, brown, and black sesame are distinct articles with distinct uses and origins, and buyers specify colour uniformity because a scatter of off-colour seeds is visible in the finished product. Black sesame in particular serves markets where its appearance is the point.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Purity is the term of art',
          text: 'Sesame contracts are written around purity — the sound sesame fraction of a lot, with the balance being foreign material, damaged seed, and other seeds. It is the number buyers negotiate first, and it is a contract term, not a universal standard.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses and pathways',
      body: [
        {
          type: 'paragraph',
          text: 'The bulk of traded sesame goes to food manufacture, where it is used whole, hulled, roasted, or ground. A substantial share is pressed for oil, but the pressing is often oriented toward flavour rather than commodity oil supply: roasted sesame oil is a seasoning product whose value lies precisely in the character that full refining would remove. Cake from pressing is used in animal feed, though the volumes are modest relative to the major oilseed meals.',
        },
        {
          type: 'list',
          items: [
            'Food — tahini, halva, and other paste and confectionery products',
            'Food — bakery toppings, snacks, and whole-seed culinary use',
            'Oil — pressed oils, including roasted seasoning oils and lighter culinary oils',
            'Feed — cake from pressing, a secondary outlet',
          ],
        },
        {
          type: 'paragraph',
          text: 'AgricultureID models no sesame oil or sesame cake product entry at present; those pathways are real but are not yet published as separate entries, and are described here rather than linked.',
        },
      ],
    },
    {
      id: 'quality-and-safety',
      heading: 'Quality attributes and safety context',
      body: [
        {
          type: 'paragraph',
          text: 'Beyond purity and colour, lots are described by moisture, free fatty acid content, admixture and foreign material, and damaged or immature seed. Sesame’s small size and the way it is harvested make foreign material a persistent issue — soil, stones, chaff, and other seeds — which is why cleaning and sorting are central operations rather than finishing touches.',
        },
        {
          type: 'paragraph',
          text: 'Sesame has a documented history of microbiological contamination incidents in international trade, and several jurisdictions have applied import controls and certification requirements to sesame consignments as a result. The relevant point for this entry is structural: because sesame is frequently consumed with little or no heat step, the seed’s own condition carries the risk rather than a later kill step. Which controls apply, what testing is required, and what limits are in force are determined by the food-safety authority in the destination market and change over time.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Regulatory status is destination-specific',
          text: 'Import controls, certification requirements, and allergen labelling for sesame differ by jurisdiction and are revised. No limits, testing criteria, or control requirements are published here — confirm with the applicable food-safety authority.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport',
      body: [
        {
          type: 'paragraph',
          text: 'Sesame is oil-rich and small-seeded: it packs tightly, resists aeration, and its oil goes rancid if the seed heats. Hulled seed, having lost its coat, deteriorates faster than natural seed and is more prone to picking up moisture. Lots are kept dry, cool, and clean, with insect protection, and are typically moved in bags or containerised rather than in the large bulk vessels used for the major oilseeds — a reflection of both trade scale and the food-grade handling the commodity demands.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the form, climate, storage system, and holding period. No universal target is given here; consult the applicable national storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'oil'],
  secondaryUses: ['feed', 'seed'],
  majorQualityAttributes: [
    'Purity (sound sesame content)',
    'Colour and colour uniformity',
    'Moisture content',
    'Free fatty acid content',
    'Admixture and foreign material',
    'Oil content',
  ],
  commonDefects: [
    'Off-colour and discoloured seed',
    'Immature and shrivelled seed',
    'Mouldy seed',
    'Insect damage',
    'Rancid seed',
    'Soil, stones, chaff, and other seeds',
  ],
  moistureContext:
    'Held dry; oil-rich small seed that heats will develop free fatty acids and rancidity, and hulled seed takes up moisture more readily than natural seed. Limits are contract-specified.',
  storageContext:
    'Kept cool, dry, clean, and insect-protected; small seed size restricts airflow, and hulled lots have a shorter keeping quality than natural lots.',
  transportContext:
    'Commonly moved in bags or containers rather than in bulk vessels, reflecting food-grade handling requirements and the scale of the trade.',
  majorProducingRegions: [
    'Sub-Saharan Africa',
    'East Asia and South Asia',
    'Middle East and North Africa',
    'Central America',
  ],
  majorTradingRegions: [
    'Sub-Saharan Africa',
    'South Asia',
    'East Asia (major importing region)',
    'Middle East (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1207.40',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Sesamum seeds, whether or not broken.',
    },
    {
      system: 'FAOSTAT',
      code: '289',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Sesame seed".',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sesame as a traded oilseed and its food uses',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Sesame seed as a named allergen and a documented microbiological hazard in trade',
    },
    {
      sourceId: 'iita',
      citedFor: 'Sesame post-harvest handling and quality context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Purity conventions, import controls, allergen labelling, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'Reference description only — not a grading call, a food-safety assessment, a contract term, or a customs classification.',
    'No purity, moisture, free fatty acid, or oil-content figures are given here — purity in particular is a contract term rather than a fixed standard.',
    'Import controls and certification requirements for sesame change over time and differ by destination; confirm current requirements with the applicable authority.',
    'The regions listed show where production and trade cluster; no ranking or tonnage is implied.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sesame Seed: A Food-Grade Oilseed Commodity',
    description:
      'Sesame seed as a commodity: natural versus hulled forms, colour trading categories, why purity is the headline term, food and oil pathways, and storage.',
    keywords: [
      'sesame seed',
      'hulled sesame',
      'sesame purity',
      'food-grade oilseed',
      'sesame trade',
    ],
  },
  structuredData: { article: true },
};
