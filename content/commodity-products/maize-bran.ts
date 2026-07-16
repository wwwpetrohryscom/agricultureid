import type { CommodityProductContent } from '@/types/content';

export const maizeBran: CommodityProductContent = {
  id: 'commodity-product-maize-bran',
  slug: 'maize-bran',
  contentType: 'commodity-product',
  title: 'Maize Bran',
  alternativeNames: ['Corn bran', 'Maize pericarp', 'Hominy feed (in part)'],
  category: 'Milling by-product',
  subcategory: 'Cereal bran',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'maize-grain' },
  producedBy: [{ type: 'processing-method', slug: 'maize-dry-milling' }],
  physicalForm: 'bran',
  summary:
    'Maize bran is the fibrous pericarp separated during maize dry milling. It is a low-value residual sold mainly into feed, and it is a by-product rather than a co-product because the mill removes it rather than sets out to make it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Maize bran is the outer skin of the kernel — the tough, fibrous pericarp that protects the seed. Dry milling takes it off along with the germ, and it leaves the mill as a bulky, light, high-fibre stream. It has an established market, but a modest one: bran is what a mill sells because it has it, not what the mill runs to produce.',
    },
    {
      type: 'paragraph',
      text: 'That is the distinction that makes it a by-product here rather than a co-product, and the classification is applied per process rather than by analogy. Maize germ, separated in the very same operation, is a co-product because it commands real value and feeds a distinct extraction industry. Bran, from the same degerminator, is a residual whose value per tonne is a fraction of the meal it came with. The two streams sit either side of that line.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of maize dry milling' },
    { label: 'Made from', value: 'Maize grain (Zea mays)' },
    { label: 'Fraction of the kernel', value: 'Pericarp (the outer skin)' },
    {
      label: 'Principal use',
      value: 'Animal feed, often as part of a blended stream',
    },
    {
      label: 'Why a by-product, not a co-product',
      value:
        'Residual and low-value; the mill removes it rather than targets it',
    },
    {
      label: 'Handling character',
      value: 'Bulky and light; commonly pelleted or blended for transport',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What maize bran is',
      body: [
        {
          type: 'paragraph',
          text: 'The pericarp is almost entirely fibre — a cellulose and hemicellulose structure with very little starch, protein, or oil of its own. What varies between mills is how much endosperm comes off attached to it, and that adhering starch, more than the pericarp itself, drives the feeding value of the stream. Tempering and degermination settings therefore determine bran composition as a side effect of a decision made about the meal.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mill streams are often blended',
          text: 'Bran is frequently combined with other low-value fractions and sold as a single feed stream under names such as hominy feed. What is in that blend is mill- and market-specific, and the name does not describe a fixed composition.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Feed — a fibre source in compound feeds and on-farm rations, particularly for ruminant livestock',
            'Feed — sold blended with other mill fractions as hominy feed or similar',
            'Food — a minor dietary fibre ingredient where it is separated cleanly',
            'Energy — burned as a mill fuel where no better outlet exists',
          ],
        },
        {
          type: 'paragraph',
          text: 'Bran concentrates whatever sits on or just under the kernel surface, which has a direct safety consequence. Surface-borne contamination and mycotoxins present in the incoming grain do not distribute evenly through milling: the outer fractions tend to carry proportionally more. The condition of the maize the mill bought therefore shows up in the bran, and feed limits apply to the stream on its own terms.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Bran is the awkward stream of a maize mill: very low in bulk density, so it takes up disproportionate volume in bins and trucks, and dusty in handling. Pelleting is common, and it is done for logistics rather than nutrition — a pelleted bran moves and stores at a fraction of the volume of a loose one. It picks up moisture readily and, with adhering starch and some residual oil from the germ separation, does not keep indefinitely.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['food', 'energy'],
  majorQualityAttributes: [
    'Fibre content',
    'Adhering starch (separation efficiency)',
    'Moisture content',
    'Bulk density',
    'Mycotoxin status',
  ],
  processContext:
    'Separated from the endosperm along with the germ during maize dry milling; its composition depends on how much endosperm remains attached, which is set by tempering and degermination.',
  storageContext:
    'Bulky, light, dusty, and hygroscopic; commonly pelleted to make transport and storage economic, and not a long-keeping stream.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2302.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Bran, sharps and other residues derived from the sifting, milling or other working of maize (corn).',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'cornmeal' },
    { type: 'commodity-product', slug: 'maize-germ' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Maize milling residues and their feed use' },
    {
      sourceId: 'usda',
      citedFor: 'Maize bran composition and mill stream context',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Maize milling by-product streams and handling',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and mycotoxin limits in feed are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or food-standards statement.',
    'Composition varies widely with the mill and the degree of separation; no analysis figures are given here.',
    'Blended feed streams such as hominy feed have mill- and market-specific compositions that this entry does not define.',
    'Feed use and labelling are governed by jurisdiction-specific feed regulations.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Maize Bran: By-Product of Maize Milling',
    description:
      'Maize bran as a milling by-product: the fibrous pericarp taken off in degermination, why it ranks below germ in value, its feed uses, and mycotoxin carryover.',
    keywords: [
      'maize bran',
      'corn bran',
      'hominy feed',
      'milling by-product',
      'maize pericarp',
    ],
  },
  structuredData: { article: true },
};
