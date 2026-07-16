import type { CommodityContent } from '@/types/content';

export const buckwheatGrain: CommodityContent = {
  id: 'commodity-buckwheat-grain',
  slug: 'buckwheat-grain',
  contentType: 'commodity',
  title: 'Buckwheat Grain',
  alternativeNames: ['Buckwheat', 'Common buckwheat', 'Buckwheat seed'],
  category: 'Cereal grain commodity',
  subcategory: 'Pseudocereal',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart: 'Achene — a dry, one-seeded fruit with a hard, angular hull',
  sourceCrop: { type: 'crop', slug: 'buckwheat' },
  summary:
    'Buckwheat grain is the achene of a broadleaf plant, not a grass, and therefore a pseudocereal rather than a true cereal. It is traded, stored, and used as a grain, and its hard three-sided hull must be removed before food use.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Buckwheat is not a cereal. Cereals are grasses, and buckwheat belongs to Fagopyrum in the knotweed family, alongside rhubarb and sorrel rather than wheat and barley. What it produces is not a caryopsis but an achene: a dry fruit with a hard, sharply three-sided hull enclosing a single seed. It is called a pseudocereal because it is grown, harvested, traded, milled, and eaten like a grain despite that botany.',
    },
    {
      type: 'paragraph',
      text: 'AgricultureID classes this commodity as a cereal grain because the platform vocabulary describes how a commodity is traded and grouped, and buckwheat trades within the cereal complex — it sits in Chapter 10 of the tariff nomenclature alongside the true cereals. That class is a commercial statement, not a botanical one, and the distinction is recorded here rather than left implied.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Cereal grain — a commercial grouping, not a botanical claim',
    },
    {
      label: 'Botanical status',
      value: 'Pseudocereal; Fagopyrum esculentum, family Polygonaceae',
    },
    { label: 'Harvested part', value: 'Achene with a hard, three-sided hull' },
    {
      label: 'Not a grass',
      value:
        'Buckwheat is a broadleaf plant unrelated to wheat despite the name',
    },
    {
      label: 'Principal uses',
      value: 'Food — dehulled groats and flour; also feed and birdseed',
    },
    {
      label: 'Notable property',
      value: 'Free of gluten-forming proteins, unlike true cereal grains',
    },
    {
      label: 'Key quality attributes',
      value: 'Moisture, purity, plump seed, hull integrity, groat recovery',
    },
  ],
  sections: [
    {
      id: 'a-pseudocereal-traded-as-a-grain',
      heading: 'A pseudocereal traded as a grain',
      body: [
        {
          type: 'paragraph',
          text: 'The distinction matters commercially, not just taxonomically. Buckwheat contains none of the gluten-forming proteins of wheat, rye, or barley, which places it in a different regulatory and dietary category and underpins a specialist market that pays for that property. Its flour behaves nothing like wheat flour in a dough. And its seed structure — a loose, hard hull around a soft groat — makes its processing closer to that of oats or rice than to wheat milling.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The name is misleading',
          text: 'Buckwheat is not wheat and contains no wheat. This matters for allergen and gluten-free labelling: the botanical distance is complete, and the shared syllable is an accident of naming.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Food use runs down two routes. Dehulling gives groats, sold whole and often roasted — the kasha of Eastern European and Russian cooking — and milling gives buckwheat flour, the basis of soba noodles in Japan, galettes in Brittany, and blini and pancakes across the Slavic world. The hulls that come off in dehulling are a bulky, hard residual sold for pillow filling, mulch, and fuel, and lower-grade and off-specification seed goes to feed and birdseed.',
        },
        {
          type: 'paragraph',
          text: 'No product pathways are asserted from this page. Buckwheat groats, flour, and hulls are all real and marketed, but none is described in its own entry on the platform yet, and a transformation edge is only created here when both ends of it exist and are documented.',
        },
        {
          type: 'list',
          items: [
            'Food — dehulled groats, cooked whole or roasted',
            'Food — flour for soba noodles, galettes, blini, and pancakes',
            'Feed and birdseed — off-specification and lower-grade seed',
            'Industrial — hulls used for filling, mulch, and fuel',
          ],
        },
      ],
    },
    {
      id: 'quality-and-trade-description',
      heading: 'Quality and trade description',
      body: [
        {
          type: 'paragraph',
          text: 'Buckwheat is a minor commodity and is generally traded against buyer specification rather than a detailed public grade standard. Buyers assess moisture, seed size and plumpness, uniformity, the proportion of immature or shrivelled seed, damaged and broken hulls, and freedom from weed seeds and foreign material. Millers additionally care about how much groat a lot will yield and how cleanly the hull separates, since a soft groat inside a hard hull dehulls best when the seed is plump, evenly sized, and correctly conditioned.',
        },
        {
          type: 'paragraph',
          text: 'Buckwheat also arrives with characteristic field baggage: the crop matures unevenly, so a harvested lot routinely carries a spread of mature, immature, and green seed together with more green plant material than a cereal lot would. Cleaning and sizing before storage are consequently normal rather than optional.',
        },
      ],
    },
    {
      id: 'drying-storage-and-handling',
      heading: 'Drying, storage, and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Buckwheat is harvested at variable moisture because of that uneven maturity and is usually dried before storage; drying is kept gentle, since excessive heat damages the groat inside the hull and the damage does not show until dehulling. Once dry it stores in bins and bags like a small grain, kept cool, monitored, and protected from insects and moisture pickup.',
        },
        {
          type: 'paragraph',
          text: 'Two handling notes are specific to the commodity. The angular hull makes buckwheat flow and pack differently from round-seeded grains, which affects bin discharge and augering. And the groat itself is soft and easily broken once exposed, so any lot that has lost hull integrity in handling has lost value it cannot get back.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'seed'],
  majorQualityAttributes: [
    'Moisture content',
    'Seed size, plumpness, and uniformity',
    'Groat recovery potential',
    'Hull integrity',
    'Immature and green seed',
    'Weed seeds and foreign material',
  ],
  commonDefects: [
    'Immature, green, and shrivelled seed',
    'Broken hulls and exposed groats',
    'Heat damage to the groat from over-hot drying',
    'Weed seeds and green plant material',
    'Insect damage in store',
    'Mould from grain binned before drying',
  ],
  moistureContext:
    'Harvested at uneven moisture because the crop matures unevenly, and dried gently before storage; excessive drying heat damages the groat inside an apparently sound hull.',
  storageContext:
    'Stored dry and cool in bins and bags; the soft groat is protected only by the hull, so lots that have lost hull integrity keep and mill poorly.',
  transportContext:
    'Moves in bulk and bags; the hard, angular hull gives the grain flow and packing behaviour unlike round-seeded cereals.',
  majorProducingRegions: [
    'Europe and Central Asia',
    'East Asia',
    'North America',
  ],
  majorTradingRegions: [
    'Europe and Central Asia',
    'East Asia (major importing region)',
    'North America',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1008.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Buckwheat. Classified within Chapter 10 (cereals) despite not being a true cereal botanically.',
    },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'grain-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Buckwheat as a traded pseudocereal and its food uses',
    },
    {
      sourceId: 'gbif',
      citedFor:
        'Placement of Fagopyrum esculentum in the Polygonaceae, outside the grasses',
    },
    { sourceId: 'usda', citedFor: 'Buckwheat commodity context and handling' },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item coverage for buckwheat within the cereal group',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global but concentrated in Eastern Europe, Central and East Asia, and North America. Trade descriptions are largely buyer-specific.',
  limitations: [
    'The commodityClass "cereal-grain" reflects how buckwheat is traded and grouped, not its botany: it is a pseudocereal in the Polygonaceae, not a grass.',
    'This entry is reference information, not a grading determination, milling specification, or customs classification.',
    'No moisture, seed-size, or groat-recovery figures are given; buckwheat is largely traded against buyer specification rather than a detailed public standard.',
    'Buckwheat groats, flour, and hulls are real marketed streams but are not modelled as product pathways because they have no entries on the platform yet.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Buckwheat Grain: The Pseudocereal Commodity',
    description:
      'Buckwheat grain as a commodity: an achene from a broadleaf plant, not a grass. Covers why it is grouped with cereals, dehulling, gluten status, and storage.',
    keywords: [
      'buckwheat grain',
      'pseudocereal',
      'buckwheat groats',
      'Fagopyrum esculentum',
      'buckwheat dehulling',
    ],
  },
  structuredData: { article: true },
};
