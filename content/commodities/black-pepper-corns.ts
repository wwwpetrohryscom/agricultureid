import type { CommodityContent } from '@/types/content';

export const blackPepperCorns: CommodityContent = {
  id: 'commodity-black-pepper-corns',
  slug: 'black-pepper-corns',
  contentType: 'commodity',
  title: 'Black Peppercorns',
  alternativeNames: [
    'Black pepper',
    'Whole black pepper',
    'Piper nigrum berries',
  ],
  category: 'Spice commodity',
  subcategory: 'Dried berry spice',
  commodityClass: 'spice',
  physicalForm: 'seed',
  harvestedPart:
    'Drupe (the berry, picked from the spike while still unripe and then dried whole)',
  sourceCrop: { type: 'crop', slug: 'black-pepper' },
  summary:
    'Black peppercorns are the dried unripe berries of the pepper vine, and the most heavily traded spice in the world. Black and white pepper come from the same berries: what separates them is processing, not species or cultivar.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Black peppercorns are the traded commodity of the black pepper vine: berries stripped from the spike while still unripe, briefly heated, then dried until they shrivel into the hard, dark, wrinkled corns of commerce. Pepper is among the oldest commodities in long-distance trade and remains the largest spice by volume, moving from the tropics to processors and packers worldwide as a dry, storable good.',
    },
    {
      type: 'paragraph',
      text: 'The central thing to understand about the commodity is that black pepper is defined by its processing. The berries that become black pepper are the same berries that become white pepper — one plant, one fruit, two products separated by what is done after picking, and by when. This entry describes the harvested and dried berry as traded; the growing of the vine is covered on the black pepper crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Spice' },
    { label: 'Parent crop', value: 'Black pepper vine (Piper nigrum)' },
    { label: 'Harvested part', value: 'Drupe (berry), picked unripe' },
    {
      label: 'Defining post-harvest step',
      value: 'Brief heating then drying, which blackens and shrivels the berry',
    },
    {
      label: 'Distinguishing fact',
      value:
        'Black and white pepper are the same berries, differing only in processing',
    },
    {
      label: 'Key quality attributes',
      value:
        'Bulk density, piperine and volatile oil, light berries, extraneous matter',
    },
    {
      label: 'Companion product',
      value: 'White pepper, made by removing the outer fruit wall',
    },
  ],
  sections: [
    {
      id: 'why-it-is-black',
      heading: 'Why the berry turns black',
      body: [
        {
          type: 'paragraph',
          text: 'Pepper for the black trade is picked before the berries ripen, when the spike is still green or just beginning to turn. The berries are separated from the spikes and, in the standard practice, briefly dipped in hot water before being spread to dry. The blanching is not cleaning: it ruptures cell walls in the fruit and releases enzymes that drive the browning reaction, which makes drying faster and the colour darker and more uniform.',
        },
        {
          type: 'paragraph',
          text: 'The berries are then dried, traditionally by spreading on mats or yards in the sun over several days. As water leaves, the outer fruit wall darkens through that enzymatic browning, contracts around the seed inside, and sets into the wrinkled black skin the corn is known by. So the black in black pepper is manufactured after harvest — the berries went into the process green.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The wrinkled skin is the fruit, not the seed',
          text: 'A black peppercorn is a whole dried fruit: the shrivelled black pericarp with the seed still inside it. That retained fruit wall carries much of the aroma, and removing it is precisely what produces white pepper — a different product from the same berry.',
        },
      ],
    },
    {
      id: 'black-and-white',
      heading: 'Black and white pepper: one berry, two routes',
      body: [
        {
          type: 'paragraph',
          text: 'White pepper is not a different species, a different cultivar, or a bleached version of black pepper. It is made from the berries of the same vine, taken when riper, and steeped in water for some days so that the fleshy outer fruit wall softens and can be rubbed away. What is left — the pale inner seed — is washed and dried to become white pepper. Black pepper keeps the pericarp; white pepper discards it.',
        },
        {
          type: 'paragraph',
          text: 'The distinction matters commercially because the pericarp is where much of pepper’s aromatic character sits, while the pungency principle is concentrated in the seed. Removing the fruit wall therefore changes the product’s flavour profile rather than simply lightening its colour, which is why the two are bought for different purposes and are not substitutes in the kitchen or in a formulation. They are traded as distinct commodities with their own grades and their own prices.',
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Pepper is traded against grade descriptions that combine physical and chemical attributes. Bulk density is the traditional headline term — heavier, denser berries indicate well-filled, properly matured fruit, and the classic origin grades are built around density thresholds. Alongside it sit the proportion of light berries, extraneous matter and stalk, and the chemical measures: piperine content, which carries the pungency, and volatile oil content, which carries the aroma.',
        },
        {
          type: 'list',
          items: [
            'Light berries — poorly filled or immature fruit that fails density grades',
            'Extraneous matter — stalks, spike fragments, dust, and foreign material',
            'Mould growth on inadequately dried or rewetted lots',
            'Insect infestation and insect fragments in store',
            'Loss of volatile oil from over-drying, age, or poor packaging',
            'Pinheads and small, shrivelled berries below grade',
          ],
        },
        {
          type: 'paragraph',
          text: 'Grades are origin-specific and are named by origin and standard rather than by any universal scale — the descriptions in force differ between producing countries and between the standards a buyer contracts against. Meeting a grade is a commercial description of the lot, not a food-safety clearance, and quantitative thresholds belong to the standard in force rather than to a general reference.',
        },
      ],
    },
    {
      id: 'drying-and-storage',
      heading: 'Drying, storage, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'Drying is where the quality of a pepper lot is made or lost. It must go far enough to make the berries stable, since insufficiently dried pepper supports mould in store and can develop mycotoxins — a documented hazard in tropical dried spices generally, and the reason drying and subsequent moisture control are treated as food-safety operations rather than merely commercial ones. But drying is also where aroma is lost: the volatile oils that make pepper worth buying leave with heat and time, so the operation is a balance between stability and character.',
        },
        {
          type: 'paragraph',
          text: 'Sun-drying on mats and yards remains widespread and works well in a reliable dry season; it also exposes lots to rain, dust, and ground contact, which is why drying-surface hygiene is a recurring quality theme in the trade. Once dried, pepper is a durable commodity: it ships in bags and containers without refrigeration and keeps for long periods, provided it stays dry. The risks in store are reabsorbed moisture, storage insects, and gradual loss of volatile oil — which is why whole peppercorns hold their character far better than ground pepper, whose aroma escapes from the moment it is milled.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No moisture or grade figures are given here',
          text: 'Safe moisture levels, density thresholds, piperine and volatile-oil minima, and any contaminant limits for pepper are set by the applicable standard, origin grade description, and contract. AgricultureID does not publish figures; consult the standard in force and the applicable food-safety authority.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Bulk density',
    'Proportion of light berries',
    'Piperine content',
    'Volatile oil content',
    'Moisture content',
    'Extraneous matter and stalk',
  ],
  commonDefects: [
    'Light and poorly filled berries',
    'Extraneous matter and stalks',
    'Mould on inadequately dried lots',
    'Insect infestation and fragments',
    'Loss of volatile oil',
    'Pinheads and undersized berries',
  ],
  moistureContext:
    'Pepper is traded dry and its stability depends on it. Under-drying and moisture reabsorbed in store support moulds; over-drying costs volatile oil. Limits are set by the applicable standard and contract.',
  storageContext:
    'Durable at ambient temperature in bags and containers when kept dry; the risks in store are moisture uptake, storage insects, and slow loss of aroma. Whole corns keep their character far longer than ground pepper.',
  transportContext:
    'Ships in bags and containers without refrigeration as a dry, long-keeping commodity; protection from moisture ingress and insect infestation governs the condition on arrival.',
  majorProducingRegions: [
    'Southeast Asia',
    'South Asia',
    'Latin America',
    'Sub-Saharan Africa',
  ],
  majorTradingRegions: [
    'Southeast Asia',
    'Europe',
    'North America',
    'Middle East',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0904.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Pepper of the genus Piper, neither crushed nor ground. The subheading covers whole white pepper as well as black; crushed or ground pepper falls under 0904.12.',
    },
  ],
  coProducts: [{ type: 'commodity-product', slug: 'white-pepper' }],
  storageSystems: [{ type: 'post-harvest', slug: 'hermetic-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Pepper as a traded spice commodity, drying practice, and trade context',
    },
    {
      sourceId: 'icar',
      citedFor:
        'Black and white pepper processing routes and quality attributes',
    },
    {
      sourceId: 'usda',
      citedFor: 'Whole spice product description and grading attributes',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Mould and mycotoxin hazards in inadequately dried tropical spices',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global trade; production concentrated in the humid tropics. Grade descriptions are origin-specific and classification codes are versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No moisture, bulk density, piperine, volatile oil, or contaminant figures are given here — these belong to the origin grade description, the applicable standard, and the contract.',
    'Pepper grades are named and defined by origin and by standard; there is no universal grading scale for the commodity.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Black Peppercorns: The Dried Berry Spice Commodity',
    description:
      'Black peppercorns as a commodity: picked unripe, blanched and dried until black, graded on density and piperine, and how white pepper differs by processing.',
    keywords: [
      'black peppercorns',
      'black pepper commodity',
      'pepper grading',
      'piperine',
      'pepper drying',
    ],
  },
  structuredData: { article: true },
};
