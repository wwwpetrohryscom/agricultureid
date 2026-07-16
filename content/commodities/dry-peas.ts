import type { CommodityContent } from '@/types/content';

export const dryPeas: CommodityContent = {
  id: 'commodity-dry-peas',
  slug: 'dry-peas',
  contentType: 'commodity',
  title: 'Dry Peas',
  alternativeNames: [
    'Field peas',
    'Dried peas',
    'Yellow peas',
    'Green peas (dry)',
    'Matar',
  ],
  category: 'Pulse commodity',
  subcategory: 'Field pea market types',
  commodityClass: 'pulse',
  physicalForm: 'seed',
  harvestedPart: 'Mature dry seed threshed from the pod',
  sourceCrop: { type: 'crop', slug: 'pea' },
  summary:
    'Dry peas are the mature seed of Pisum sativum, harvested dry rather than green. Traded chiefly as yellow and green types, they serve food, feed, and — increasingly — protein fractionation, which has changed what the market values in a pea.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Dry peas are field peas harvested at maturity, when the seed has dried down in the pod. They should not be confused with green peas for freezing or canning: those are picked immature as a vegetable and are a different commodity with a different harvest, a different supply chain, and different buyers. The word "pea" covers both, which is precisely why a commodity entry has to separate them.',
    },
    {
      type: 'paragraph',
      text: 'For most of their history dry peas were a straightforward food and feed pulse, traded on colour and soundness. That is still the bulk of the trade, but the rise of pea protein fractionation has added a buyer who wants something different — protein content and functional behaviour rather than appearance — and this has become the most consequential development in the market.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Pulse' },
    { label: 'Parent crop', value: 'Pea (Pisum sativum)' },
    { label: 'Harvested part', value: 'Mature dry seed threshed from the pod' },
    {
      label: 'Not the same as',
      value: 'Green peas for freezing or canning, which are picked immature',
    },
    {
      label: 'Market types',
      value:
        'Yellow and green peas, plus marrowfat and maple types in some markets',
    },
    {
      label: 'Principal uses',
      value: 'Food, animal feed, and fractionation into pea protein and starch',
    },
    {
      label: 'Key quality attributes',
      value:
        'Colour and bleaching, moisture, splits, and protein for fractionation lots',
    },
  ],
  sections: [
    {
      id: 'types-and-colour',
      heading: 'Types and the colour question',
      body: [
        {
          type: 'paragraph',
          text: 'Yellow and green peas are the volume types. Yellow peas dominate splitting and fractionation; green peas serve markets where the colour is visible in the finished food and are correspondingly exposed to a defect that yellow peas escape — bleaching. Green peas exposed to sun and weather in the field lose colour, and a bleached green pea is downgraded on appearance while remaining perfectly sound. Specialty types such as marrowfat and maple peas serve their own markets, notably snack and processing uses.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A defect only in some markets',
          text: 'Bleaching costs a green pea its grade and costs a yellow pea nothing, and it costs a fractionation buyer nothing either — the protein does not care about colour. Whether a characteristic is a defect depends on where the lot is going.',
        },
      ],
    },
    {
      id: 'fractionation',
      heading: 'Fractionation and the new buyer',
      body: [
        {
          type: 'paragraph',
          text: 'Pea fractionation separates the seed into protein, starch, and fibre streams, with pea protein isolates and concentrates supplying plant-based foods, beverages, and sports nutrition. This buyer’s specification looks nothing like a food packer’s: it values protein content and the functional properties of the protein, and is largely indifferent to the appearance attributes that dominate traditional grading.',
        },
        {
          type: 'paragraph',
          text: 'The starch and fibre streams from fractionation are not waste — they are sold into food and feed uses, which makes fractionation a genuine multi-output process. AgricultureID does not currently publish pea protein, pea starch, or split pea entries, so these pathways are described here rather than linked.',
        },
        {
          type: 'list',
          items: [
            'Food — split peas, whole peas, and traditional culinary use',
            'Food ingredient — pea protein isolates and concentrates, plus starch and fibre',
            'Feed — a protein and energy source in pig, poultry, and ruminant diets',
            'Snack — roasted and coated peas, and specialty types for processing',
            'Seed — retained or certified for planting',
          ],
        },
      ],
    },
    {
      id: 'feed-role',
      heading: 'The feed outlet',
      body: [
        {
          type: 'paragraph',
          text: 'Dry peas are used in animal feed to a greater degree than most food pulses, and the outlet is genuine rather than a home for rejects — though off-grade and bleached lots do flow there. Peas sit between a cereal and a protein meal in feed terms, contributing both starch and protein, which makes them useful in diets where a single ingredient can do two jobs. Inclusion is a formulator’s decision made against species and diet, not a general property of the commodity.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Dry peas are large, round, and free-flowing, and they split readily — the cotyledons separate under mechanical stress, especially when the seed is dry and brittle. Splits are a graded defect for food lots and irrelevant for fractionation, so the same handling regime is worth different amounts depending on the destination. Storage is kept cool and dry with insect monitoring; peas held moist heat and mould like any pulse.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No universal storage figure',
          text: 'Safe storage moisture and duration depend on the type, climate, storage system, and holding period. No universal target is published here; consult the applicable national pulse-storage guidance.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'feed', 'seed'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Market type and colour',
    'Bleaching (green types)',
    'Moisture content',
    'Splits and broken seed',
    'Protein content (fractionation lots)',
    'Foreign material',
  ],
  commonDefects: [
    'Split and broken seed',
    'Bleached green peas',
    'Weather-stained and discoloured seed',
    'Insect damage, particularly bruchids',
    'Mould and storage fungi',
    'Shrivelled and immature seed',
  ],
  moistureContext:
    'Held dry but not over-dried: brittle seed splits under handling stress, while moist seed heats and moulds. Limits are set by national standards and contracts.',
  storageContext:
    'Stored cool and dry with insect monitoring; free-flowing and easy to handle in bulk, but prone to splitting when dry and dropped.',
  transportContext:
    'Moves in bulk, bags, and containers; splitting rises with handling frequency, which matters for food lots and not for fractionation lots.',
  majorProducingRegions: [
    'North America',
    'Europe',
    'Central Asia',
    'South Asia',
    'Australia',
  ],
  majorTradingRegions: [
    'North America',
    'Europe',
    'South Asia (major importing region)',
    'East Asia (major importing region)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '0713.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Peas (Pisum sativum), dried and shelled, whether or not skinned or split.',
    },
    {
      system: 'FAOSTAT',
      code: '187',
      sourceId: 'faostat',
      note: 'FAOSTAT item "Peas, dry".',
    },
  ],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'crop', slug: 'pea' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Dry peas as a traded pulse and their food and feed uses',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item classification and coverage',
    },
    {
      sourceId: 'usda',
      citedFor: 'Dry pea market types and grading attributes',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Field pea quality, storage, and feed use context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, type definitions, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'Reference information only: nothing here grades a lot, sets a contract term, or constitutes customs classification advice.',
    'No protein, moisture, or defect-tolerance figures are given here — standards and contracts set them, and fractionation specifications are proprietary and processor-specific.',
    'Dry peas and green peas harvested immature are separate commodities; statements here apply only to the dry commodity.',
    'The regions given group where the commodity is grown and traded; they are not ranked and exclude green-pea production.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Dry Peas: Field Pea Food, Feed and Protein Uses',
    description:
      'Dry peas as a commodity: yellow and green types, why bleaching is a defect only sometimes, protein fractionation as a new buyer, feed use, and storage.',
    keywords: [
      'dry peas',
      'field peas',
      'yellow peas',
      'pea protein',
      'pea fractionation',
    ],
  },
  structuredData: { article: true },
};
