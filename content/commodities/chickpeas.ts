import type { CommodityContent } from '@/types/content';

export const chickpeas: CommodityContent = {
  id: 'commodity-chickpeas',
  slug: 'chickpeas',
  contentType: 'commodity',
  title: 'Chickpeas',
  alternativeNames: ['Garbanzo beans', 'Bengal gram', 'Chana', 'Cicer seed'],
  category: 'Pulse commodity',
  subcategory: 'Desi and kabuli market types',
  commodityClass: 'pulse',
  physicalForm: 'seed',
  harvestedPart: 'Mature dry seed threshed from the pod',
  sourceCrop: { type: 'crop', slug: 'chickpea' },
  summary:
    'Chickpeas are the dry seed of Cicer arietinum, traded in two market types that behave as separate commodities: small, coloured, thick-coated desi chickpeas, milled into split dal and flour, and large, pale kabuli chickpeas, sold whole and priced by size.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chickpeas are among the most traded pulses, and any account of the commodity has to begin with the split between desi and kabuli types. These are not grades of one article or a cosmetic preference. They differ in seed size, seed coat thickness, colour, and shape; they go to different processing routes; they are quoted in different markets; and a buyer of one has no use for the other.',
    },
    {
      type: 'paragraph',
      text: 'Desi types are small, angular, and darker, with a thick seed coat, and the great majority are milled — dehulled and split into dal, or ground into flour. Kabuli types are larger, rounder, and cream-coloured with a thin coat, and they are sold whole into canning, packet, and food-service markets where size and appearance carry the price. A single commodity name covers two trades.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Pulse' },
    { label: 'Parent crop', value: 'Chickpea (Cicer arietinum)' },
    { label: 'Harvested part', value: 'Mature dry seed threshed from the pod' },
    {
      label: 'Two market types',
      value:
        'Desi — small, coloured, thick-coated; kabuli — large, pale, thin-coated',
    },
    {
      label: 'Desi pathway',
      value: 'Dehulling and splitting into dal, or milling into flour',
    },
    {
      label: 'Kabuli pathway',
      value: 'Sold whole; priced by seed size, stated as count per unit weight',
    },
    {
      label: 'Key quality attributes',
      value:
        'Seed size, colour, moisture, splits, and freedom from insect damage',
    },
  ],
  sections: [
    {
      id: 'desi-and-kabuli',
      heading: 'Desi and kabuli',
      body: [
        {
          type: 'paragraph',
          text: 'The physical differences between the types drive their commercial separation. The desi seed’s thick coat is a milling asset: the coat is removed and the cotyledons split cleanly, which is precisely what a dal mill exists to do. The kabuli seed’s thin coat and large size make it suited to whole use, where the seed must be seen and must hold together through soaking and cooking.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Desi chickpeas',
              description:
                'Small, angular, coloured seed with a thick seed coat; the dominant type in South Asia, milled largely into dal and flour.',
            },
            {
              term: 'Kabuli chickpeas',
              description:
                'Large, rounded, cream seed with a thin coat; sold whole, and priced on size, with the largest calibres attracting the strongest premiums.',
            },
            {
              term: 'Size and calibre',
              description:
                'The kabuli trade specifies seed size as a count per unit weight or by screen; it is the primary price determinant within the type.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Types, not grades',
          text: 'Desi and kabuli are market types of one species with different end uses and price structures. They are not two grades of chickpea, and they are not interchangeable — a point worth stating plainly, because the shared commodity name suggests otherwise.',
        },
      ],
    },
    {
      id: 'milling-pathway',
      heading: 'The milling pathway',
      body: [
        {
          type: 'paragraph',
          text: 'Dal milling is the dominant destination for desi chickpeas, and it is a substantial industry rather than a processing detail. The seed is conditioned, the coat is loosened and removed, and the two cotyledons are separated into split dal; a share is ground into flour. Milling outturn — how much whole, clean split is recovered rather than broken fragments and powder — is what a miller buys against, and it depends on the seed’s condition, size uniformity, and how it was dried.',
        },
        {
          type: 'paragraph',
          text: 'AgricultureID does not currently publish chickpea dal or chickpea flour entries; those pathways are real and are described here rather than linked.',
        },
      ],
    },
    {
      id: 'quality-and-trade',
      heading: 'Quality and trading practice',
      body: [
        {
          type: 'paragraph',
          text: 'Kabuli lots are specified by size first, then colour and uniformity, then defects: splits, broken and shrivelled seed, insect damage, and staining. Desi lots are specified with milling outturn in view — size uniformity, seed coat condition, and freedom from damage — and appearance matters less because the coat comes off anyway.',
        },
        {
          type: 'paragraph',
          text: 'Both types are vulnerable to bruchid infestation, which damages seed and is a rejection issue in export trade rather than a discount. Insect damage in a pulse is not a cosmetic matter: infested lots may be refused entry outright under phytosanitary rules that differ by destination.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Chickpeas are handled to protect the seed coat and the seed’s integrity, because splits and skin damage cost money in both trades — in kabuli as a visible defect, in desi as lost milling outturn. Over-dried seed splits readily in handling; moist seed moulds and attracts insects. Cool, dry, insect-protected storage is the standard, and hermetic storage is used where bruchid pressure is high.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the type, climate, storage system, and holding period. No universal target is given here; consult the applicable national pulse-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'seed'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Market type (desi or kabuli)',
    'Seed size and calibre',
    'Colour and uniformity',
    'Moisture content',
    'Splits and broken seed',
    'Milling outturn (desi lots)',
  ],
  commonDefects: [
    'Insect damage, particularly bruchids',
    'Splits and broken seed',
    'Shrivelled and immature seed',
    'Staining and discoloration',
    'Mould and storage fungi',
    'Foreign material and other pulses',
  ],
  moistureContext:
    'Held dry but not over-dried: excessively dry seed splits in handling and mills poorly, while moist seed moulds and favours insect development. Limits are contract- and standard-specific.',
  storageContext:
    'Stored cool, dry, and insect-protected; bruchid infestation is a rejection risk in export trade, so hermetic systems are used where pressure is high.',
  transportContext:
    'Moves in bags and containers; type and size segregation are maintained throughout, and phytosanitary requirements differ by destination.',
  majorProducingRegions: [
    'South Asia',
    'Middle East and North Africa',
    'Australia',
    'North America',
    'East Africa',
  ],
  majorTradingRegions: [
    'South Asia (major importing region)',
    'Australia',
    'North America',
    'Middle East and North Africa',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0713.20',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Chickpeas (garbanzos), dried and shelled, whether or not skinned or split.',
    },
    {
      system: 'FAOSTAT',
      code: '191',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Chick peas".',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'chickpea' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Chickpeas as a traded pulse and their market types',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'icar',
      citedFor: 'Desi chickpea milling and dal processing context',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Chickpea market types and post-harvest quality',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Size conventions, grade standards, phytosanitary rules, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'Reference content describing the commodity — it does not grade a lot, specify a contract, or classify goods for customs.',
    'No size, count, moisture, or milling-outturn figures are given here — calibre conventions differ by market and are contract-specified.',
    'The desi/kabuli division is a market classification; intermediate types exist and the boundary is not defined identically in every market.',
    'The regions listed are indicative groupings; desi and kabuli geography differs and is not separated in them.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Chickpeas: Desi and Kabuli Market Types',
    description:
      'Chickpeas as a commodity: why desi and kabuli types trade as separate articles, the dal milling pathway, size-driven kabuli pricing, quality, and storage.',
    keywords: [
      'chickpeas',
      'desi chickpeas',
      'kabuli chickpeas',
      'garbanzo beans',
      'chana dal',
    ],
  },
  structuredData: { article: true },
};
