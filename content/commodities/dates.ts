import type { CommodityContent } from '@/types/content';

export const dates: CommodityContent = {
  id: 'commodity-dates',
  slug: 'dates',
  contentType: 'commodity',
  title: 'Dates',
  alternativeNames: ['Date fruit', 'Fresh dates', 'Dried dates'],
  category: 'Fresh fruit commodity',
  subcategory: 'Palm fruit',
  commodityClass: 'fruit',
  physicalForm: 'fresh-produce',
  harvestedPart: 'Drupe (the date fruit, harvested in strands from the bunch)',
  sourceCrop: { type: 'crop', slug: 'date-palm' },
  summary:
    'Dates are the fruit of the date palm, traded at defined ripening stages that range from crisp and fresh to fully soft and sugar-dense. The commodity straddles the fresh and dried categories: the ripest stages are naturally preserved by their own sugar concentration.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dates are unusual among traded fruit because the commodity is defined by which stage of ripening it was taken at. A date passes through recognised stages as it matures — crisp and astringent, then coloured and firm, then partly soft, then fully soft and dark — and each stage is a different product with a different market, a different texture, and a different keeping behaviour. A buyer specifying dates without specifying a stage has specified almost nothing.',
    },
    {
      type: 'paragraph',
      text: 'The commodity also sits across the fresh/dried boundary in a way few others do. The ripest stage is so concentrated in sugar that it resists spoilage without any drying step being applied by a processor — the fruit effectively preserves itself on the palm. AgricultureID classes dates as fresh produce because the fruit is harvested and traded as fruit; whether a given lot behaves like a fresh perishable or like a shelf-stable dried good depends entirely on its stage. This entry covers the traded fruit, not the palm.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Fruit (fresh produce)' },
    { label: 'Parent crop', value: 'Date palm (Phoenix dactylifera)' },
    {
      label: 'Harvested part',
      value: 'Drupe, cut in strands from the fruit bunch',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric: dates ripen on the palm, not after harvest',
    },
    {
      label: 'Trade stages',
      value: 'Distinct commercial stages from crisp-fresh to fully soft',
    },
    {
      label: 'Preservation',
      value:
        'The ripest stages are self-preserving through sugar concentration',
    },
    {
      label: 'Principal regions',
      value: 'Arid and semi-arid zones of the Middle East and North Africa',
    },
  ],
  sections: [
    {
      id: 'stages-of-the-commodity',
      heading: 'Stages: the same fruit, different commodities',
      body: [
        {
          type: 'paragraph',
          text: 'The date trade uses stage names drawn from Arabic that have become the international vocabulary of the commodity. In the khalal stage the fruit has reached full size and colour but remains firm and crisp, and it is sold as a fresh fruit in producing regions and eaten much like an apple. In the rutab stage it has begun to soften and darken from the tip, and it is a genuinely perishable soft fruit. In the tamr stage it is fully ripe, dark, and dense, and it keeps for a very long time.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Khalal',
              description:
                'Full-size, fully coloured, still firm and crisp. Traded fresh, largely within producing regions, and handled as a perishable.',
            },
            {
              term: 'Rutab',
              description:
                'Partly softened and darkened. A short-lived, high-value fresh product usually refrigerated or frozen for transport.',
            },
            {
              term: 'Tamr',
              description:
                'Fully ripe, soft or semi-dry, sugar-dense. The stage that dominates international trade because it keeps and ships.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cultivar and stage together define the lot',
          text: 'Date cultivars differ markedly in size, texture, and whether they are eaten soft, semi-dry, or dry. A lot is identified by cultivar and stage together; neither alone describes it.',
        },
      ],
    },
    {
      id: 'harvest-and-ripening',
      heading: 'Harvest and ripening on the palm',
      body: [
        {
          type: 'paragraph',
          text: 'Dates are non-climacteric and ripen on the palm. A bunch does not ripen evenly, so harvesting is done in several passes — strands or individual fruit taken as they reach the intended stage — which makes date harvest labour-intensive and repetitive. All of it happens at height, from ladders or platforms, which shapes the economics as much as the biology does.',
        },
        {
          type: 'paragraph',
          text: 'Fruit intended for the tamr stage may be left on the palm until it reaches it naturally, drying in place in the hot, arid climate that date production depends on. Where rain or humidity threatens the crop at that stage, or where the market wants a specific texture, fruit is picked earlier and its ripening and drying completed under controlled conditions — a controlled continuation of a process that would otherwise happen on the tree.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling, storage, and treatment',
      body: [
        {
          type: 'paragraph',
          text: 'Keeping behaviour follows the stage directly. Khalal and rutab dates are perishable and require refrigeration or freezing; rutab in particular is often frozen for transport and thawed for sale, which is unremarkable in the date trade and would be unusual anywhere else. Tamr dates are stable at ambient temperature for extended periods, and refrigeration is used to preserve texture and colour and to control insects rather than to prevent spoilage.',
        },
        {
          type: 'paragraph',
          text: 'The dominant storage problem for tamr dates is insects rather than microbes: sugar-rich stored fruit attracts stored-product pests, and infestation is a leading cause of loss and rejection. The trade addresses this with cold storage, hygiene, and controlled or modified atmospheres, with permitted treatments varying by market. Sugar crystallisation, darkening, and syrup leakage are quality changes that occur during storage without making the fruit unsafe.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Stage-specific conditions belong to sourced guidance',
          text: 'Storage temperatures, moisture ranges, and permitted disinfestation treatments for dates depend on cultivar, stage, and jurisdiction. No figures are given here; consult sourced post-harvest guidance and the rules in force.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality attributes and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Grading assesses cultivar and stage conformity, fruit size, colour, texture, skin condition, and freedom from defects, insects, and foreign matter. Skin separation — where the skin lifts away from the flesh — and darkening are common downgrades that are cosmetic rather than safety issues. Because the fruit is often handled directly and sold with minimal processing, cleanliness and freedom from infestation carry heavy weight in the specification.',
        },
        {
          type: 'list',
          items: [
            'Insect infestation and insect damage in stored fruit',
            'Skin separation and puffiness',
            'Sugar crystallisation and syrup leakage',
            'Darkening and loss of characteristic colour during storage',
            'Souring and fermentation in fruit exposed to moisture at the softer stages',
            'Immature, unripened, or damaged fruit in the lot',
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
          text: 'Dates are eaten as fruit — the whole fruit, at whichever stage the market prefers, is by far the dominant use, and in the producing regions the commodity carries cultural and seasonal significance that supports a premium fresh trade in rutab and khalal that never leaves the region. Processing takes lower grades and surplus into paste, syrup, and pieces for baking and confectionery, and the pitted, paste, and syrup streams give date processors an outlet for fruit that cannot be sold whole.',
        },
        {
          type: 'list',
          items: [
            'Food — whole dates at the traded stage, the dominant use',
            'Food processing — paste, syrup, and chopped fruit for bakery and confectionery',
            'Feed — surplus, damaged, and low-grade fruit used locally in livestock rations',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'industrial'],
  majorQualityAttributes: [
    'Cultivar and ripening stage conformity',
    'Fruit size and uniformity',
    'Texture appropriate to the stage',
    'Colour',
    'Freedom from insect infestation',
    'Skin condition',
  ],
  commonDefects: [
    'Insect infestation in storage',
    'Skin separation and puffiness',
    'Sugar crystallisation and leakage',
    'Darkening during storage',
    'Souring and fermentation',
    'Immature or mechanically damaged fruit',
  ],
  moistureContext:
    'Water content falls as the fruit advances through its stages, and the ripest stage is stable largely because its sugar concentration leaves little available water; specific ranges are stage- and standard-defined.',
  storageContext:
    'Perishable at the crisp and soft-fresh stages and held cold or frozen; stable at the fully ripe stage, where refrigeration and atmosphere control serve texture retention and insect management.',
  transportContext:
    'Fully ripe dates travel as packed cartons at ambient or chilled temperature; the fresher stages move refrigerated or frozen and mostly within producing regions.',
  majorProducingRegions: [
    'The Middle East and the Gulf',
    'North Africa',
    'South Asia',
    'North America (arid southwest)',
  ],
  majorTradingRegions: [
    'The Middle East and North Africa (dominant producing and exporting region)',
    'South and Southeast Asia (major importing markets)',
    'Europe',
    'North America',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0804.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Dates, fresh or dried, at 6-digit subheading level. The subheading does not separate ripening stages.',
    },
  ],
  storageSystems: [{ type: 'post-harvest', slug: 'cold-storage' }],
  connections: [
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar', 'perennial-crop'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Dates as a traded commodity, ripening stages, and post-harvest handling in producing regions',
    },
    {
      sourceId: 'usda',
      citedFor: 'Date grade attributes and defect vocabulary',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Date storage behaviour and disinfestation research context',
    },
    {
      sourceId: 'britannica',
      citedFor: 'General reference on the date fruit and its ripening stages',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global trade concentrated in arid regions. Grade standards, stage definitions, and permitted treatments are jurisdiction-specific.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, treatment recommendation, or customs classification.',
    'No moisture ranges, storage temperatures, or sugar figures are given here — they are stage-, cultivar-, and standard-specific.',
    'Stage terminology is widely used but stage boundaries are defined differently by different standards and traders.',
    'The date-producing and importing regions given are indicative, and no ranking by volume is intended.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dates: Ripening Stages of a Traded Palm Fruit',
    description:
      'Dates as a commodity: khalal, rutab and tamr stages as distinct trade forms, ripening on the palm, self-preservation by sugar, storage insects, and defects.',
    keywords: [
      'dates',
      'date fruit commodity',
      'khalal rutab tamr',
      'date storage',
      'date palm fruit',
    ],
  },
  structuredData: { article: true },
};
