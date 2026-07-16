import type { CommodityProductContent } from '@/types/content';

export const rolledOats: CommodityProductContent = {
  id: 'commodity-product-rolled-oats',
  slug: 'rolled-oats',
  contentType: 'commodity-product',
  title: 'Rolled Oats',
  alternativeNames: [
    'Oat flakes',
    'Porridge oats',
    'Oatflakes',
    'Old-fashioned oats',
  ],
  category: 'Primary processed product',
  subcategory: 'Flaked cereal',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'oat-grain' },
  physicalForm: 'other',
  summary:
    'Rolled oats are oat groats that have been kilned, steamed, and flattened between rollers. Kilning is not optional: without it the groat oil would go rancid and no stable oat product would be possible.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rolled oats are the primary product of oat milling, and the route to them is unlike that of any other cereal. There is no separation of bran from endosperm — the groat is kept whole and flattened, so rolled oats are inherently a wholegrain product. What the mill does instead is remove the hull, stabilise the groat with heat, soften it with steam, and press it flat.',
    },
    {
      type: 'paragraph',
      text: 'The heat step is the one that makes the product possible at all. Oat groats carry an unusually active lipase alongside their comparatively high oil content, and if the two are left together in a broken or flaked groat the product develops soapy, bitter rancidity quickly. Kilning denatures the enzyme. It also cooks the groat slightly, which is where the nutty flavour of oats comes from — a flavour that is a by-product of a preservation step, not a variety characteristic.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of oat milling' },
    { label: 'Made from', value: 'Oat grain (Avena sativa)' },
    {
      label: 'What is removed',
      value: 'The hull only — the groat is flaked whole',
    },
    {
      label: 'Inherently wholegrain',
      value: 'Bran and germ stay with the groat; no fractionation takes place',
    },
    {
      label: 'Critical step',
      value: 'Kilning, which deactivates lipase and prevents rancidity',
    },
    { label: 'By-product of the same route', value: 'Oat hulls' },
  ],
  sections: [
    {
      id: 'the-process',
      heading: 'Dehulling, kilning, flaking',
      body: [
        {
          type: 'paragraph',
          text: 'Oats are cleaned and sized first, because a dehuller works best on grain of uniform dimension. Impact dehullers then throw the oats against a ring so the loose hull splits away from the groat, and aspiration separates the light hulls from the dense groats. The groats are kilned, and then either flaked whole or cut into pieces with steel blades and flaked as smaller flakes — which is the difference between thick old-fashioned oats and the thinner, faster-cooking grades. Steam softens the groat immediately before the rollers so it flattens rather than shatters.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Groat',
              description:
                'The oat kernel with the hull removed. Still carries its own bran and germ.',
            },
            {
              term: 'Steel-cut oats',
              description:
                'Kilned groats cut into pieces rather than flaked. The same material at an earlier stop on the same line.',
            },
            {
              term: 'Flake thickness',
              description:
                'The roller gap, which sets cooking time. Thicker flakes hold their texture; thinner flakes cook faster and break down more.',
            },
          ],
        },
      ],
    },
    {
      id: 'quality-and-use',
      heading: 'Quality and end use',
      body: [
        {
          type: 'paragraph',
          text: 'Flakes are specified by thickness and size distribution, by how few are broken, by colour, and by moisture. Buyers also look at the completeness of the kilning, since under-kilned oats will develop rancidity in the pack, and at beta-glucan content, the soluble fibre for which oats carry health claims in several jurisdictions. Most of this is set upstream: a mill needs plump, uniform, sound groats to make even flakes, which is why oat lots are bought on groat recovery and plumpness in the first place.',
        },
        {
          type: 'list',
          items: [
            'Food — porridge and oatmeal, the dominant use',
            'Food — muesli, granola, flapjacks, and baked goods',
            'Food — ground into oat flour, and used as the base of oat drinks',
            'Feed — broken flakes, fines, and off-specification material',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Gluten-free status is a supply-chain question',
          text: 'Oats do not contain the gluten proteins of wheat, barley, or rye, but they are routinely grown, harvested, stored, and milled alongside them. Where oats are sold as gluten-free, the claim rests on segregated handling, and the rules governing it are jurisdiction-specific.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Properly kilned flakes are stable for a long shelf life, which is precisely the point of kilning them. They are hygroscopic, and they are fragile — flakes break into fines under handling, and fines are both a quality complaint and an unwanted dust load. Packaging protects against moisture, insects, and physical damage, and stock rotation matters because the oil, though its enzyme has been stopped, remains slowly susceptible to oxidation over the life of the pack.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Flake thickness and size distribution',
    'Broken flakes and fines',
    'Kilning completeness',
    'Beta-glucan content',
    'Colour',
    'Moisture content',
  ],
  processContext:
    'Made by cleaning and sizing oats, impact dehulling to separate groats from hulls, kilning to deactivate lipase, steaming, and flattening between rollers; groats may be cut before flaking.',
  storageContext:
    'Stable for a long shelf life once properly kilned; hygroscopic and physically fragile, so packaging and gentle handling protect against moisture, insects, and fines.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1104.12',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Rolled or flaked grains of oats.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'oats' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'oat-hulls' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Oat processing and oat food products' },
    {
      sourceId: 'ahdb',
      citedFor: 'Oat milling, groat quality, and flake specification context',
    },
    {
      sourceId: 'usda',
      citedFor: 'Oat product composition and beta-glucan context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Product names, flake grades, health claims, and gluten-free rules are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a milling specification, recipe, or nutrition or health-claim statement.',
    'No flake-thickness, beta-glucan, moisture, or shelf-life figures are given — these are mill-, product-, and market-specific.',
    'Health claims for oat beta-glucan are authorised differently by jurisdiction and are not reproduced here.',
    'Gluten-free labelling of oats depends on segregated supply chains and on jurisdiction-specific rules.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rolled Oats: Primary Product of Oat Milling',
    description:
      'Rolled oats as a commodity product: dehulling, why kilning is required to stop lipase rancidity, how flake thickness sets cooking time, and quality attributes.',
    keywords: [
      'rolled oats',
      'oat flakes',
      'oat groats',
      'kilning',
      'steel-cut oats',
    ],
  },
  structuredData: { article: true },
};
