import type { CommodityContent } from '@/types/content';

export const almonds: CommodityContent = {
  id: 'commodity-almonds',
  slug: 'almonds',
  contentType: 'commodity',
  title: 'Almonds',
  alternativeNames: ['Almond nuts', 'In-shell almonds', 'Sweet almonds'],
  category: 'Tree nut commodity',
  subcategory: 'Drupe seed traded as a nut',
  commodityClass: 'nut',
  physicalForm: 'seed',
  harvestedPart: 'Seed of a drupe, traded in-shell or as the shelled kernel',
  sourceCrop: { type: 'crop', slug: 'almond' },
  summary:
    'Almonds are the dried seed of a drupe, traded either in-shell or as shelled kernels. Unlike fresh fruit, the commodity is a dry, storable good: drying to a stable moisture, then hulling and shelling, converts a perishable harvest into something that keeps for a year or more.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almonds are botanically the seed of a drupe — the same fruit structure as a peach — but commercially they are a nut, and the trade treats them as a dry, storable commodity rather than as fresh produce. What makes that possible is drying: the harvested fruit is brought down to a moisture at which biological activity effectively stops, and from that point the commodity behaves less like a peach and more like a grain.',
    },
    {
      type: 'paragraph',
      text: 'A single harvested almond fruit contains three saleable things: the kernel that is eaten, the shell that encloses it, and the hull that encloses the shell. All three are separated at processing, and all three have markets. The trade form matters commercially — a lot bought in-shell and a lot bought as kernels are priced, stored, and shipped differently — which is why the customs nomenclature splits them and why contracts always specify. This entry describes the traded commodity; the orchard belongs to the almond crop entry.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Nut (tree nut)' },
    { label: 'Parent crop', value: 'Almond (Prunus dulcis)' },
    { label: 'Botanically', value: 'The seed of a drupe, not a true nut' },
    {
      label: 'Trade forms',
      value: 'In-shell and shelled kernels, classified and priced separately',
    },
    {
      label: 'Preservation basis',
      value: 'Drying to a stable moisture, not refrigeration',
    },
    {
      label: 'Three separated streams',
      value: 'Kernel (primary), shell, and hull (by-product)',
    },
    {
      label: 'Key quality attributes',
      value: 'Size, kernel integrity, moisture, and freedom from insect damage',
    },
  ],
  sections: [
    {
      id: 'what-the-commodity-is',
      heading: 'What the commodity is',
      body: [
        {
          type: 'paragraph',
          text: 'The almond fruit dries on the tree as it matures, the hull splitting open to expose the shell within. Harvest — mechanical shaking onto the orchard floor at scale, hand knocking in smaller operations — collects the whole dried fruit, which is then hulled to remove the outer layer and, if the market wants kernels, shelled to crack the shell away from the seed.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Hull',
              description:
                'The outer fleshy-turned-leathery layer of the drupe, removed first. It is a bulk by-product with a well-established livestock feed market.',
            },
            {
              term: 'Shell',
              description:
                'The hard endocarp enclosing the kernel. In-shell almonds are traded with it intact; shelling removes it, and the shell itself is used as fuel and bedding.',
            },
            {
              term: 'Kernel',
              description:
                'The seed — the edible part and the primary product. Kernels are graded by size, variety, and integrity.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'In-shell and kernel are different articles of trade',
          text: 'The shell is a substantial share of the delivered weight and a significant protection during storage. Some markets prefer in-shell almonds for cultural and freshness reasons; others buy kernels exclusively. Customs nomenclature separates the two, and so do contracts.',
        },
      ],
    },
    {
      id: 'drying-and-moisture',
      heading: 'Drying and moisture',
      body: [
        {
          type: 'paragraph',
          text: 'Moisture is the governing variable for almonds, exactly as it is for a cereal grain and unlike anything in the fresh-fruit trade. Drying begins on the tree and continues after harvest, and a lot that goes into storage above the moisture appropriate for its holding period will support moulds, lose quality, and risk mycotoxin formation. Almonds carry a documented aflatoxin risk, and moisture control at and after harvest is the principal management route.',
        },
        {
          type: 'paragraph',
          text: 'The counterpart risk is over-drying, which makes kernels brittle and increases breakage during shelling and handling — and broken kernels are a downgrade. Almonds also carry substantial oil, which means the eventual quality limit is rancidity rather than spoilage: fat oxidation, accelerated by warmth, light, and oxygen, is what ends the useful life of a well-dried lot. This is why cold storage appears in the almond trade at all, as a quality-preservation measure for a commodity already stable enough not to need it.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No moisture or storage figures here',
          text: 'Safe moisture, storage temperature, and holding duration for almonds are set by industry standards, contracts, and jurisdictional food-safety rules. AgricultureID publishes no thresholds; consult sourced post-harvest and food-safety guidance.',
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Almond kernels are graded on variety and shape type, size (usually as count per unit weight), colour, and the incidence of defects — chips and scratches, doubles, splits, shrivelled kernels, and foreign material. In-shell almonds are additionally assessed on shell condition, the proportion of shells that are well sealed, and the completeness of hulling. Grade standards are jurisdictional and versioned, and the same lot can grade differently under different schemes.',
        },
        {
          type: 'list',
          items: [
            'Insect damage — navel orangeworm and other pests damaging kernels in the orchard and in store',
            'Mould growth and associated mycotoxin risk in inadequately dried lots',
            'Chipped, scratched, and broken kernels from mechanical handling',
            'Doubles, split kernels, and shrivelled or gummy kernels',
            'Rancidity in lots held warm or long',
            'Foreign material — hull and shell fragments, and orchard-floor debris',
          ],
        },
        {
          type: 'paragraph',
          text: 'Because almonds are harvested from the orchard floor at scale, food-safety controls sit alongside grading and are separately regulated. Meeting a grade is a commercial description of the lot, not a food-safety clearance.',
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'Kernels are the point of the crop. They are sold whole as a snack and an ingredient, and processed into blanched, sliced, slivered, and diced forms, into paste and marzipan, into almond butter, and into plant-based drinks. Hulling produces almond hulls in bulk — a genuine by-product with an established ruminant feed market rather than a disposal problem — and shelling leaves shells that are used as fuel, bedding, and industrial abrasive.',
        },
        {
          type: 'list',
          items: [
            'Food — kernels whole and processed, and as an ingredient in confectionery and bakery',
            'Beverage — almond-based drinks made from kernels',
            'Feed — hulls fed to livestock, the largest by-product outlet',
            'Energy and industrial — shells used as fuel, bedding, and abrasive material',
          ],
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed', 'beverage', 'energy'],
  majorQualityAttributes: [
    'Kernel size and count per unit weight',
    'Variety and kernel shape type',
    'Moisture content',
    'Kernel integrity (freedom from chips and breakage)',
    'Freedom from insect damage',
    'Freedom from mould and foreign material',
  ],
  commonDefects: [
    'Insect damage to kernels',
    'Mould growth in under-dried lots',
    'Chipped, scratched, and broken kernels',
    'Doubles and split kernels',
    'Shrivelled and gummy kernels',
    'Rancidity in long- or warm-held lots',
  ],
  moistureContext:
    'Almonds are traded and stored on a moisture basis like a dry grain: too moist and moulds and mycotoxin risk follow, too dry and kernels become brittle and break. Limits are set by standards and contracts.',
  storageContext:
    'Stored dry in bulk or bags rather than refrigerated; cold storage is used to slow rancidity and protect quality in long-held lots, and insect control is a standing requirement.',
  transportContext:
    "Moves in bulk bins, totes, and cartons in ordinary dry containers; the in-shell form carries the shell's weight and protection, kernels ship denser and more vulnerable.",
  majorProducingRegions: [
    'North America (Pacific coast)',
    'Mediterranean Europe and North Africa',
    'The Middle East and Central Asia',
    'Oceania',
  ],
  majorTradingRegions: [
    'North America (dominant exporting region)',
    'Europe (major importing region)',
    'The Middle East and South Asia',
    'East Asia',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0802.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Almonds, fresh or dried, in shell.',
    },
    {
      system: 'HS',
      code: '0802.12',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Almonds, fresh or dried, shelled.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'almond-kernels' }],
  byProducts: [{ type: 'commodity-product', slug: 'almond-hulls' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar', 'perennial-crop'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Almonds as a traded tree nut commodity and their trade forms',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Almond kernel and in-shell grade attributes and defect vocabulary',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'Almond production and processing stream context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Almond drying, storage quality, and aflatoxin risk management research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, food-safety requirements, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, food-safety assessment, or customs classification.',
    'No moisture, storage-temperature, or mycotoxin limits are given here — these are set by jurisdictional standards and contracts.',
    'In-shell and shelled almonds are separate classification lines; the applicable code depends on the form of the consignment.',
    'The regions listed indicate where almonds are grown and traded, and they are not ranked by tonnage.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Almonds: In-Shell and Kernel Trade Forms',
    description:
      'Almonds as a commodity: the seed of a drupe traded in-shell or as kernels, dried rather than refrigerated, with hulls and shells as separated streams.',
    keywords: [
      'almonds',
      'almond commodity',
      'in-shell almonds',
      'almond kernels',
      'almond drying',
    ],
  },
  structuredData: { article: true },
};
