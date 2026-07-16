import type { CommodityContent } from '@/types/content';

export const cocoaBeans: CommodityContent = {
  id: 'commodity-cocoa-beans',
  slug: 'cocoa-beans',
  contentType: 'commodity',
  title: 'Cocoa Beans',
  alternativeNames: ['Cacao beans', 'Fermented cocoa beans', 'Raw cocoa'],
  category: 'Beverage crop commodity',
  subcategory: 'Fermented, dried seed',
  commodityClass: 'beverage-crop',
  physicalForm: 'bean',
  harvestedPart: 'Seed of the cocoa pod, fermented and dried before trade',
  sourceCrop: { type: 'crop', slug: 'cocoa' },
  summary:
    'Cocoa beans are traded fermented and dried, never fresh. Fermentation is not a preservation step but the process that creates chocolate flavour precursors — an unfermented cocoa bean cannot be made into chocolate, which makes the farm-level ferment part of the commodity itself.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cocoa beans are the seeds of the cocoa pod, and the commodity that trades under that name has already been through a transformation before it is ever sold. Fresh cocoa seeds, scooped from a freshly opened pod, taste nothing like chocolate and cannot be made into it. What creates chocolate is fermentation — a microbial process carried out on the farm, in heaps or boxes, over several days — followed by drying. The commodity in the bag is a fermented, dried bean, and that is the only form in which it trades.',
    },
    {
      type: 'paragraph',
      text: 'This puts something unusual into the trade. For most commodities, quality is a matter of what was grown and how well it was preserved. For cocoa, the flavour potential of every bean was created by a biochemical process performed by a farmer, days after harvest, using judgement and experience — and if it was done badly, no chocolate maker anywhere can recover what was lost. This entry describes the traded bean; the tree belongs to the cocoa crop entry.',
    },
  ],
  keyFacts: [
    {
      label: 'Commodity class',
      value: 'Beverage crop (fermented, dried seed)',
    },
    { label: 'Parent crop', value: 'Cocoa (Theobroma cacao)' },
    {
      label: 'Harvested part',
      value: 'The seed, extracted from the pod and fermented',
    },
    {
      label: 'Traded form',
      value:
        'Fermented and dried beans; unfermented beans are commercially unusable',
    },
    {
      label: 'Why fermentation matters',
      value:
        'It generates the precursors that roasting turns into chocolate flavour',
    },
    {
      label: 'Ripening behaviour',
      value: 'Non-climacteric: pods are cut ripe and do not ripen afterwards',
    },
    {
      label: 'Main products',
      value: 'Cocoa nibs, with cocoa shell as the milling by-product',
    },
  ],
  sections: [
    {
      id: 'from-pod-to-bean',
      heading: 'From pod to traded bean',
      body: [
        {
          type: 'paragraph',
          text: 'Cocoa pods grow directly on the trunk and main branches of the tree and are cut by hand when ripe — they are non-climacteric and do not ripen after cutting, so ripeness at harvest is judged on the tree by colour and sound. The pods are opened, usually within a few days, and the seeds are scooped out surrounded by a white, sweet pulp. That pulp is the fuel for everything that follows.',
        },
        {
          type: 'paragraph',
          text: 'The wet seeds are heaped under leaves or placed in wooden boxes and left to ferment. Yeasts and bacteria consume the pulp, generating heat and acids that penetrate the seed and kill the embryo, which is the trigger for the biochemical changes that produce flavour precursors within the bean. The mass is turned periodically to keep the ferment even. After several days the beans are spread out to dry, traditionally in the sun, until they reach a moisture at which they store and ship.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Fermentation is manufacture, not preservation',
          text: "Unlike drying, which preserves what exists, cocoa fermentation creates what did not exist before. A perfectly clean, well-dried, unfermented cocoa bean is a commercial failure — it will never make chocolate. This is why the ferment is part of the commodity's definition.",
        },
      ],
    },
    {
      id: 'fermentation-quality',
      heading: 'Why fermentation dominates quality',
      body: [
        {
          type: 'paragraph',
          text: 'The ferment can fail in both directions. Under-fermented beans retain a slaty, purple interior and give astringent, bitter chocolate with no developed flavour. Over-fermented beans go hammy and putrid, and carry off flavours that survive roasting. Between those failures sits a window that a farmer judges by heat, smell, and time — and the judgement is made on a smallholding, at the end of a harvest day, with no laboratory anywhere in sight.',
        },
        {
          type: 'paragraph',
          text: "The industry's standard check is the cut test: a sample of beans is sliced open and the interiors are examined and counted by category — well-fermented brown, partly purple, slaty, mouldy, insect-damaged, germinated. That count is the core of cocoa grading, and it is a direct read-out of how the ferment and drying went. Drying carries its own trap: dried too fast, the beans stay acidic because volatile acids cannot escape; dried too slowly or in humid conditions, they mould, and cocoa carries a documented ochratoxin risk that importing markets regulate.",
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No fermentation or drying parameters here',
          text: 'Fermentation duration, turning schedules, drying rates, and target moisture for cocoa are region- and system-specific and belong to sourced technical guidance. AgricultureID publishes no figures, and no mycotoxin limits.',
        },
      ],
    },
    {
      id: 'grading-and-trade',
      heading: 'Grading and trade',
      body: [
        {
          type: 'paragraph',
          text: 'Cocoa beans are graded on the cut-test defect count, bean size as count per unit weight, moisture, and freedom from foreign matter, mould, and infestation. Origin carries real weight: the bulk trade in West African cocoa is a large, fairly standardised flow, while fine or flavour cocoa from specific origins and genetic groups trades separately at a premium against different expectations.',
        },
        {
          type: 'list',
          items: [
            'Slaty and purple beans — under-fermentation, the most common quality failure',
            'Mouldy beans — from slow or interrupted drying, with associated mycotoxin risk',
            'Insect-damaged and germinated beans',
            'Flat and undersized beans, giving poor nib recovery',
            'Smoke taint from artificial drying over poorly designed fires',
            'Foreign matter and pod fragments in the delivered lot',
          ],
        },
        {
          type: 'paragraph',
          text: 'Beans move from farm to buying station to port in bags, and ship to grinders in bags or bulk. Like coffee, cocoa is priced against futures markets with physical lots trading at differentials for origin, grade, and certification, and like coffee it is vulnerable to taint and to condensation damage in containers on long ocean routes.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Grinding is what the commodity exists for. Beans are roasted and cracked, and winnowing separates the nib — the kernel fragment that is the primary product and the actual raw material of chocolate — from the shell. The nib is ground into cocoa mass, and pressing splits that into cocoa butter and cocoa press cake, which is milled into cocoa powder. The shell removed at winnowing is a genuine by-product with feed, fuel, and mulch outlets.',
        },
        {
          type: 'list',
          items: [
            'Food — chocolate and confectionery, via nibs, mass, butter, and powder',
            'Beverage — cocoa powder for drinking chocolate and flavouring',
            'Industrial — cocoa butter in cosmetic and pharmaceutical use',
            'Feed and energy — cocoa shell as feed material, fuel, and mulch',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food', 'beverage'],
  secondaryUses: ['industrial', 'feed'],
  majorQualityAttributes: [
    'Cut-test fermentation profile',
    'Bean count per unit weight',
    'Moisture content',
    'Freedom from mould',
    'Freedom from smoke taint and off odours',
    'Freedom from foreign matter and infestation',
  ],
  commonDefects: [
    'Slaty and purple (under-fermented) beans',
    'Mouldy beans',
    'Insect-damaged and germinated beans',
    'Flat and undersized beans',
    'Smoke taint',
    'Foreign matter',
  ],
  moistureContext:
    'Beans are dried after fermentation to a moisture at which they store and ship; drying too fast locks in acidity, drying too slowly invites mould and mycotoxin risk. Targets are set by standards and contracts.',
  storageContext:
    'Stored in bags at farm, buying station, port, and grinder; managed against humidity, insects, and taint, with cocoa readily absorbing odours from its surroundings.',
  transportContext:
    'Ships in jute bags and in bulk on long ocean routes to grinding centres; condensation in containers and taint from adjacent cargo are recognised hazards.',
  majorProducingRegions: [
    'West Africa',
    'South and Central America',
    'Southeast Asia',
    'The Caribbean and the Pacific',
  ],
  majorTradingRegions: [
    'West Africa (dominant exporting region)',
    'Europe and North America (major grinding and importing markets)',
    'Southeast Asia (grinding and processing)',
    'South America',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1801.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cocoa beans, whole or broken, raw or roasted.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'cocoa-nibs' }],
  byProducts: [{ type: 'commodity-product', slug: 'cocoa-shell' }],
  storageSystems: [{ type: 'post-harvest', slug: 'grain-storage' }],
  connections: [
    { type: 'crop', slug: 'cocoa' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['perennial-crop', 'cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cocoa beans as a traded commodity, fermentation, drying, and grading',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Cocoa production, fermentation practice, and value-chain context in West Africa',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Cocoa trade flows and grinding market reporting',
    },
    {
      sourceId: 'worldbank',
      citedFor: 'Cocoa commodity market and price context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grading systems, contract descriptions, and food-safety limits are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not fermentation guidance, a grading determination, or a food-safety assessment.',
    'No fermentation durations, drying rates, moisture targets, cut-test thresholds, or mycotoxin limits are given here.',
    'Fermentation practice varies substantially between regions and systems; it is described here at concept level only.',
    'Cocoa producing, grinding, and importing regions are indicative groupings rather than a ranked list.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Cocoa Beans: Fermented and Dried as Traded',
    description:
      'Cocoa beans as a commodity: why farm fermentation creates chocolate flavour and cannot be undone, the cut test, drying and mould risk, and grading.',
    keywords: [
      'cocoa beans',
      'cocoa fermentation',
      'cut test',
      'cocoa grading',
      'cocoa drying',
    ],
  },
  structuredData: { article: true },
};
