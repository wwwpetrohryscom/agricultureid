import type { CommodityProductContent } from '@/types/content';

export const pearlBarley: CommodityProductContent = {
  id: 'commodity-product-pearl-barley',
  slug: 'pearl-barley',
  contentType: 'commodity-product',
  title: 'Pearl Barley',
  alternativeNames: ['Pearled barley', 'Pearl barley grains', 'Perlato'],
  category: 'Processed food product',
  subcategory: 'Abraded whole grain',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'barley-grain' },
  producedBy: [{ type: 'processing-method', slug: 'pearling' }],
  physicalForm: 'whole-grain',
  summary:
    'Pearl barley is barley with its hull and outer layers abraded away, leaving a rounded whole grain for direct cooking. It comes from a mechanical route entirely separate from malting, and it is not a malt product.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pearl barley is made by abrasion. The grain is passed through machines with abrasive surfaces that grind the hull off and then keep going, taking the bran layers and usually the germ with it, until what is left is a smooth, rounded, pale grain. The name describes the appearance the process produces: pearling continues past the point of dehulling, rounding the kernel as it goes.',
    },
    {
      type: 'paragraph',
      text: 'It is worth being precise about where this sits. Pearl barley is not a form of malt and has nothing to do with malting — it comes from a mechanical pearling mill, not a malthouse. AgricultureID models it as a co-product of the barley commodity because it is a deliberate, marketed food output of barley, produced alongside the dominant malting route rather than downstream of it.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of barley' },
    { label: 'Made from', value: 'Barley grain (Hordeum vulgare)' },
    {
      label: 'The process',
      value: 'Progressive abrasion of hull, bran, and germ',
    },
    {
      label: 'Not related to',
      value: 'Malting — pearling is a separate mechanical route',
    },
    {
      label: 'Principal use',
      value: 'Food — cooked whole in soups, stews, and salads',
    },
    {
      label: 'Companion grade',
      value: 'Pot barley, abraded less far and retaining more of the bran',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What pearl barley is',
      body: [
        {
          type: 'paragraph',
          text: 'Pearling is a matter of degree rather than a fixed operation, and the trade names mark points along it. Pot or scotch barley is abraded enough to remove the hull and a little of the bran, and stays visibly a barley grain with its crease. Pearl barley is taken further — the bran layers go, the germ goes, the crease is largely ground away, and the grain comes out round and white. Each additional pass takes weight off the grain and, with it, some of what the grain contained.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Barley bran is not separable like wheat bran',
          text: 'In barley the hull adheres and the bran is fused to the kernel, so there is no clean roller-milling separation. Pearling removes the outer layers by grinding them away, which is why the material that comes off is dust and fine meal rather than a flaked bran stream.',
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
            'Food — cooked whole in soups, broths, stews, risotto-style dishes, and salads',
            'Food — flaked or ground into barley flour and flakes after pearling',
            'Feed — the abraded dust and fines, and off-specification grain',
          ],
        },
        {
          type: 'paragraph',
          text: 'Barley retains a nutritional argument that survives pearling in part: much of the beta-glucan soluble fibre for which barley is noted lies throughout the endosperm rather than only in the outer layers, so a pearled grain still carries a share of it. How much survives depends on how far the pearling was taken, which is a processing decision rather than a property of the commodity.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Pearl barley is bought on appearance and uniformity: size grading, whiteness, freedom from residual hull and dark specks, and a low proportion of broken and chipped grains. The incoming barley largely decides these. Plump, evenly sized, undamaged grain pearls evenly; thin or skinned grain pearls unevenly and breaks, and a lot that arrives with variable kernel size cannot be made uniform by grinding.',
        },
        {
          type: 'paragraph',
          text: 'With the outer layers removed the grain has lost the protection the hull provided, and it stores as a food product rather than as a bulk commodity: kept dry and cool, packaged, rotated, and guarded against storage insects that would find it easier to attack than intact barley. Because the germ is normally abraded away along with the bran, pearl barley carries little oil and does not present the rancidity problem that limits products retaining germ.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  secondaryUses: ['feed'],
  majorQualityAttributes: [
    'Degree of pearling',
    'Size grading and uniformity',
    'Whiteness and freedom from residual hull',
    'Broken and chipped grains',
    'Moisture content',
  ],
  processContext:
    'Produced by passing barley through abrasive pearling machines that progressively remove the hull, bran layers, and germ; the number of passes sets the grade, from pot barley through to fully pearled.',
  storageContext:
    'Handled as a packaged food product rather than a bulk grain: kept dry and cool and protected from storage insects, with little rancidity risk once the germ has been abraded away.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1104.29',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Other worked grains (for example, hulled, pearled, sliced or kibbled) of other cereals — the residual subheading covering pearled barley.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'malted-barley' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Barley food products and pearling as a processing route',
    },
    {
      sourceId: 'usda',
      citedFor: 'Pearled barley product context and composition',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Barley grain structure and its effect on processing',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Product names and grade definitions for pearled barley differ by jurisdiction.',
  limitations: [
    'This is a reference description of the product, not a processing specification, recipe, or nutritional statement.',
    'No pearling-degree, size, or composition figures are given — pearling grades are defined by processor and market.',
    'Retention of beta-glucan and other components depends on how far pearling is taken; no figures are given here.',
    'Pot and scotch barley are related grades from the same route with less abrasion; they are noted but not separately modelled.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Pearl Barley: Co-Product of Barley Pearling',
    description:
      'Pearl barley as a commodity product: how abrasion removes hull, bran and germ, why pearling is separate from malting, plus grades, quality and storage.',
    keywords: [
      'pearl barley',
      'pearled barley',
      'pot barley',
      'barley pearling',
      'beta-glucan',
    ],
  },
  structuredData: { article: true },
};
