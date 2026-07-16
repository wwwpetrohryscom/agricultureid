import type { CommodityContent } from '@/types/content';

export const durumWheatGrain: CommodityContent = {
  id: 'commodity-durum-wheat-grain',
  slug: 'durum-wheat-grain',
  contentType: 'commodity',
  title: 'Durum Wheat Grain',
  alternativeNames: ['Durum', 'Pasta wheat', 'Macaroni wheat', 'Amber durum'],
  category: 'Cereal grain commodity',
  subcategory: 'Durum wheat',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart: 'Caryopsis (grain), threshed from the ear',
  sourceCrop: { type: 'crop', slug: 'wheat' },
  summary:
    'Durum wheat grain is the harvested caryopsis of Triticum durum, a different species from common wheat and traded as its own commodity. Its hard, vitreous kernels are milled into semolina for pasta rather than into bread flour.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Durum wheat grain is bought and sold as a cereal commodity separate from common wheat. It is the caryopsis of Triticum durum (also classified as Triticum turgidum subsp. durum), a botanically distinct species from the common or bread wheat Triticum aestivum. The two are not interchangeable in trade: durum moves under its own contracts, its own class and grade descriptions, and its own classification codes.',
    },
    {
      type: 'paragraph',
      text: 'The separation is functional, not just nomenclatural. A buyer of durum is buying kernel vitreousness and semolina potential for pasta and couscous; a buyer of bread wheat is buying gluten strength for dough. AgricultureID anchors this commodity to the wheat crop entry because that is the crop page the platform publishes, but the species distinction is stated here rather than smoothed over — a claim true of durum grain is not automatically true of common wheat grain.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    {
      label: 'Parent species',
      value: 'Durum wheat (Triticum durum) — not common wheat (T. aestivum)',
    },
    { label: 'Harvested part', value: 'Caryopsis (grain/kernel)' },
    {
      label: 'Principal use',
      value: 'Food — milled into semolina for pasta, couscous, and some breads',
    },
    {
      label: 'Distinguishing attribute',
      value: 'Hard, vitreous, amber-coloured endosperm',
    },
    {
      label: 'Main products',
      value: 'Semolina, with durum flour as a milling co-product',
    },
    {
      label: 'Traded as',
      value: 'A commodity in its own right, priced separately from bread wheat',
    },
  ],
  sections: [
    {
      id: 'a-separate-species-and-a-separate-commodity',
      heading: 'A separate species and a separate commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Durum is the hardest of the cultivated wheats. Its endosperm is dense and glassy — described in the trade as vitreous — and characteristically amber in colour. That structure is what makes durum suitable for semolina milling: the endosperm fractures into coarse, angular particles rather than crushing to fine flour, and those particles are what pasta extrusion requires.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Durum is not a class of bread wheat',
          text: 'Durum is a distinct species, not a variety or class of Triticum aestivum. Trade standards, tariff subheadings, and milling practice all treat it as a separate commodity, and statistics for "wheat" may or may not include it — check the definition in use before comparing figures.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Durum milling is run to produce semolina. The mill grinds and sifts to recover coarse endosperm particles of a controlled size; the finer flour that is unavoidably produced alongside them leaves as durum flour, a genuine co-product with its own markets in couscous, some flatbreads, and noodle products. Lots that fail semolina requirements — too starchy, too weathered, or off-colour — are commonly diverted to feed, and a portion of the crop is retained as seed.',
        },
        {
          type: 'list',
          items: [
            'Food — semolina for dried pasta, fresh pasta, and couscous',
            'Food — durum flour for regional breads and noodle products',
            'Feed — lots that do not meet semolina milling requirements',
            'Seed — retained or certified for the next planting',
          ],
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality attributes and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Durum is graded on the attributes common to all cereal grains — moisture, test weight, soundness, foreign material — plus attributes specific to its end use. The proportion of hard vitreous kernels is the defining one: national standards subdivide the durum class by vitreous kernel count and amber colour, because starchy kernels mill poorly into semolina. Protein content and yellow pigment concentration are also priced, since they drive pasta firmness and colour respectively.',
        },
        {
          type: 'paragraph',
          text: 'The relevant defects are those that destroy vitreousness or stain the endosperm. Piebald or yellow-berry kernels are partly starchy and downgrade a lot; black point discolours the germ end and carries through into semolina specks; sprout damage raises enzyme activity and weakens the cooked product. As with any grain, the applicable thresholds live in the standard in force in the selling jurisdiction, not in a general reference.',
        },
      ],
    },
    {
      id: 'storage-and-transport',
      heading: 'Storage and transport context',
      body: [
        {
          type: 'paragraph',
          text: 'Durum stores like other hard wheats: it is hygroscopic and respires, so it must be dried to a moisture appropriate to the intended holding period and then kept cool, aerated, and monitored. Two commodity-specific points matter. Colour is a saleable attribute, and prolonged weathering or heating dulls it. And because durum and common wheat look broadly similar in bulk yet command different prices, segregation and lot identity through the handling chain are commercially critical — admixture with bread wheat is itself a grading defect.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Admixture is a real risk',
          text: 'Shared augers, pits, and vessel holds can introduce common wheat into a durum lot. Where standards limit the presence of other wheat classes, cleaning down between commodities is part of meeting the contract, not an optional courtesy.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'seed'],
  majorQualityAttributes: [
    'Hard vitreous kernel proportion',
    'Kernel colour (amber)',
    'Protein content',
    'Yellow pigment content',
    'Moisture content',
    'Test weight',
  ],
  commonDefects: [
    'Piebald and yellow-berry (starchy) kernels',
    'Black point',
    'Sprout damage',
    'Heat-damaged kernels',
    'Admixture with other wheat classes',
    'Foreign material',
  ],
  moistureContext:
    'Traded on a moisture basis and dried where necessary before storage; the applicable limit is set by the national grade standard and the contract, not by a universal figure.',
  storageContext:
    'Held in bulk bins, silos, and terminals; keeping quality and kernel colour both depend on drying, cooling, and monitoring, and segregation from common wheat is essential.',
  transportContext:
    'Moves in bulk by truck, rail, and vessel; identity preservation matters because durum and common wheat are visually similar in bulk but priced differently.',
  majorProducingRegions: [
    'Mediterranean Europe and North Africa',
    'North America (northern plains and prairies)',
    'West Asia',
  ],
  majorTradingRegions: [
    'North America',
    'Mediterranean Europe',
    'North Africa (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1001.19',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Durum wheat, other than seed. Durum for sowing falls under 1001.11.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'semolina' }],
  coProducts: [{ type: 'commodity-product', slug: 'durum-flour' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  relatedTopics: [{ type: 'commodity', slug: 'wheat-grain' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Durum wheat as a distinct traded cereal and its food uses',
    },
    {
      sourceId: 'usda',
      citedFor: 'Durum class definitions, vitreousness, and grading attributes',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Durum wheat quality traits and semolina end-use context',
    },
    {
      sourceId: 'faostat',
      citedFor:
        'Commodity item coverage and the wheat/durum distinction in statistics',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Durum class names, grade standards, and tariff subheadings are jurisdiction-specific and versioned.',
  limitations: [
    'AgricultureID publishes a single wheat crop entry, so this commodity is anchored to it; durum is nonetheless a separate species from common wheat and the page says so explicitly.',
    'This entry is reference information, not a grading determination, contract specification, or customs classification.',
    'No vitreousness, protein, pigment, or moisture thresholds are given — those are set by the standard and contract in force.',
    'Producing and trading regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Durum Wheat Grain: The Pasta Wheat Commodity',
    description:
      'Durum wheat grain as a commodity: a separate species from bread wheat, its vitreous amber kernels, semolina milling pathway, grading attributes and storage.',
    keywords: [
      'durum wheat grain',
      'durum commodity',
      'pasta wheat',
      'vitreous kernels',
      'semolina milling',
    ],
  },
  structuredData: { article: true },
};
