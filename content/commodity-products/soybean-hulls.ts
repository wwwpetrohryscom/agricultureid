import type { CommodityProductContent } from '@/types/content';

export const soybeanHulls: CommodityProductContent = {
  id: 'commodity-product-soybean-hulls',
  slug: 'soybean-hulls',
  contentType: 'commodity-product',
  title: 'Soybean Hulls',
  alternativeNames: ['Soya bean hulls', 'Soybean seed coats', 'Soyhulls'],
  category: 'Oilseed crushing by-product',
  subcategory: 'Fibre feed material',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'soybeans' },
  physicalForm: 'hull',
  summary:
    'Soybean hulls are the seed coats removed when soybeans are dehulled ahead of oil extraction. They are a genuine by-product: residual and low in value relative to meal and oil, but with a real market as a digestible fibre source for ruminant feed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The hull is the thin outer coat of the soybean. Crushing plants that make higher-protein meal remove hulls before extraction, because hulls dilute protein and add fibre. The removed fraction is collected, and rather than being disposed of it is sold — either back into meal to hit a lower protein specification, or as a separate feed material.',
    },
    {
      type: 'paragraph',
      text: 'Hulls are classed here as a by-product, not a co-product, and the distinction is deliberate. No plant crushes soybeans in order to obtain hulls; they arise as a residual of a separation performed for another reason. That they have a market does not make them a co-product — economic role and process intent are what set the class, and both are assessed per process rather than assumed.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of soybean dehulling' },
    { label: 'Made from', value: 'Soybeans (Glycine max)' },
    { label: 'Fraction of the seed', value: 'Seed coat (hull)' },
    {
      label: 'Principal use',
      value: 'Ruminant feed — a source of digestible fibre',
    },
    {
      label: 'Alternative disposition',
      value: 'Blended back into meal to meet a lower protein specification',
    },
    {
      label: 'Handling note',
      value: 'Bulky and low density; commonly pelleted',
    },
  ],
  sections: [
    {
      id: 'where-hulls-come-from',
      heading: 'Where hulls come from',
      body: [
        {
          type: 'paragraph',
          text: 'In the crushing sequence, cleaned beans are cracked and the hulls are aspirated away from the cracked meats before conditioning and flaking. The efficiency of that separation determines both how much protein the meal carries and how much residual bean material rides along with the hulls. Hull streams from different plants therefore differ, and the material is not a single uniform good.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'By-product, not co-product',
          text: 'Meal and oil are the reasons the crush is run; hulls are what dehulling leaves behind. The class reflects process intent and relative value, not whether a buyer exists.',
        },
      ],
    },
    {
      id: 'feed-role',
      heading: 'Role in feed',
      body: [
        {
          type: 'paragraph',
          text: 'Hulls are valued in ruminant rations as a fibre source that is more digestible than many other fibrous materials, which lets a formulator add fibre without displacing as much energy as a coarser roughage would. In diets for non-ruminants their fibre is far less useful, so the outlet is concentrated in dairy and beef feeding.',
        },
        {
          type: 'paragraph',
          text: 'Because hulls are the outermost layer of the seed, they carry whatever was on the seed surface at intake — soil, dust, and any surface contamination. The cleanliness of the incoming beans and the plant’s cleaning stage therefore bear directly on hull quality.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Loose hulls are light and bulky, which makes them awkward and expensive to move relative to their value; pelleting raises density and improves flow, and is the usual answer. They take up moisture readily, and damp hulls can heat and mould in store. Dust generation during handling is a routine operational consideration at plants and feed mills.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  majorQualityAttributes: [
    'Fibre content',
    'Residual protein (separation efficiency)',
    'Moisture content',
    'Bulk density (pelleted or loose)',
    'Freedom from soil and surface contamination',
  ],
  processContext:
    'Aspirated away from cracked soybean meats during dehulling, ahead of conditioning, flaking, and oil extraction; the stream is residual to a separation performed to raise meal protein.',
  storageContext:
    'Bulky and low in density unless pelleted; hygroscopic, and liable to heat or mould if stored damp.',
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'soybean-meal' },
    { type: 'commodity-product', slug: 'soybean-oil' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant', 'forage'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oilseed processing residues and their feed use',
    },
    {
      sourceId: 'usda',
      citedFor: 'Soybean dehulling and product stream context',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Fibrous by-product feeds in ruminant nutrition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation or nutritional specification.',
    'Composition varies with the beans crushed and the plant’s separation efficiency; no universal analysis is given here.',
    'Whether hulls are sold separately or blended back into meal is a commercial decision that differs by plant and market.',
    'How this material may be used and labelled in feed is set by jurisdiction-specific feed rules.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Soybean Hulls: By-Product of Soybean Dehulling',
    description:
      'Soybean hulls as a crushing by-product: where dehulling leaves them, why they are a by-product not a co-product, their ruminant feed role, and handling issues.',
    keywords: [
      'soybean hulls',
      'soyhulls',
      'dehulling by-product',
      'ruminant fibre feed',
      'pelleted hulls',
    ],
  },
  structuredData: { article: true },
};
