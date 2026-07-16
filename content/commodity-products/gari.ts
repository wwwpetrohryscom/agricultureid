import type { CommodityProductContent } from '@/types/content';

export const gari: CommodityProductContent = {
  id: 'commodity-product-gari',
  slug: 'gari',
  contentType: 'commodity-product',
  title: 'Gari',
  alternativeNames: ['Garri', 'Gali', 'Fermented cassava granules'],
  category: 'Primary processed food product',
  subcategory: 'Fermented granular cassava',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'cassava-roots' },
  physicalForm: 'other',
  summary:
    'Gari is a dry, granular, fermented cassava food of West Africa, made by grating peeled roots, pressing and fermenting the mash, then toasting it over heat. The sequence both makes the root safe to eat and turns a crop that spoils in days into a staple that keeps for months.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Gari is one of the most important processed cassava products in the world and the everyday staple of tens of millions of people across West Africa, particularly in Nigeria, Ghana, Benin, and Togo. It is a coarse, cream or pale-yellow granular meal with a characteristic sour note, sold by the bowl in markets and by the bag in trade.',
    },
    {
      type: 'paragraph',
      text: 'It is also a piece of process engineering worked out long before anyone wrote it down. The cassava root is perishable within days and requires processing before it can be eaten; gari making addresses both problems in a single sequence of grating, pressing, fermenting, and toasting, and yields a shelf-stable food at the end of it. That is why gari, rather than the fresh root, is what much of the West African cassava crop actually becomes.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of cassava processing' },
    { label: 'Made from', value: 'Fresh cassava roots (Manihot esculenta)' },
    {
      label: 'Region',
      value: 'West Africa — Nigeria, Ghana, Benin, Togo and neighbours',
    },
    {
      label: 'Process',
      value: 'Grating, pressing, fermenting, sifting, toasting',
    },
    { label: 'Form', value: 'Dry, free-flowing granules' },
    {
      label: 'Common variant',
      value: 'Yellow gari, made with palm oil added at toasting',
    },
    {
      label: 'Why it matters',
      value: 'Converts a days-perishable root into a months-stable staple',
    },
  ],
  sections: [
    {
      id: 'how-gari-is-made',
      heading: 'How gari is made',
      body: [
        {
          type: 'paragraph',
          text: 'Roots are peeled and washed, then grated to a wet mash. The mash is packed into sacks and pressed — traditionally under weights or a screw press — to squeeze out liquid, and it is left under pressure to ferment for a period while the water drains. Fermentation is spontaneous, driven by the micro-organisms already present, and it develops the sour flavour that defines the product.',
        },
        {
          type: 'paragraph',
          text: 'The dewatered, fermented cake is broken up and sifted to remove fibre and lumps, then toasted: spread over a hot pan or in a mechanised roaster and stirred continuously while it dries. This final step, sometimes called garification, both drives off the remaining moisture and gelatinises the starch, which is what turns a damp mash into hard, dry, free-flowing granules that will swell when they meet water again. Sieving after toasting sorts the granules by size.',
        },
        {
          type: 'paragraph',
          text: 'Yellow gari is made by adding red palm oil during toasting, which colours the granules and changes the flavour. It is a distinct product in the market, sold alongside white gari rather than as a variation of it, and the choice between them is regional and personal.',
        },
      ],
    },
    {
      id: 'processing-and-safety',
      heading: 'Why the whole sequence matters',
      body: [
        {
          type: 'paragraph',
          text: 'Cassava roots naturally contain cyanogenic glycosides, and adequate processing is required before the root is eaten. The gari sequence is one of the traditional processing routes that achieves this, and its steps are complementary rather than optional extras: grating ruptures the tissue, pressing removes liquid, fermentation acts over time, and toasting applies heat to a thin, constantly moved layer. Shortcuts through any of them are recognised in the producing regions as a problem, which is why the sequence has persisted essentially intact through mechanisation.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reference framing, not a method',
          text: 'This entry records at reference level that gari making is a processing route for a root requiring processing. It gives no fermentation times, temperatures, moisture levels, or compositional limits, and it is not a processing method, food-safety instruction, or compliance statement. Consult FAO guidance, the applicable national food authority, and the relevant standard.',
        },
      ],
    },
    {
      id: 'quality-and-trade',
      heading: 'Quality, storage, and trade',
      body: [
        {
          type: 'paragraph',
          text: 'Buyers judge gari on granule size and uniformity, colour, the degree of sourness, dryness, and freedom from fibre, grit, and sand — the last of these a persistent complaint where roots were poorly washed or the mash met the ground. Sourness is a preference, not a fault: some markets want a pronounced ferment, others a mild one, and gari is bought accordingly.',
        },
        {
          type: 'list',
          items: [
            'Granule size and uniformity after sifting',
            'Colour — white gari, or the depth of yellow where palm oil is used',
            'Degree of sourness from fermentation',
            'Dryness, since inadequately toasted gari will not keep',
            'Freedom from fibre, grit, and sand',
            'Swelling behaviour when water is added',
          ],
        },
        {
          type: 'paragraph',
          text: 'Well-made gari is dry and keeps for months in sealed bags or drums, which is precisely its point. It takes up moisture from humid air and will mould if it is allowed to, so storage is about keeping it dry; storage insects are the other routine concern. Trade is overwhelmingly domestic and regional within West Africa, with an export flow to diaspora markets, and gari is one of the products through which cassava-processing income reaches rural households, much of the work being done at small and medium scale.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Granule size and uniformity',
    'Colour',
    'Degree of sourness',
    'Moisture content and dryness',
    'Freedom from fibre, grit, and sand',
    'Swelling capacity',
  ],
  processContext:
    'Made by peeling and grating fresh roots, pressing and fermenting the mash under pressure, sifting the dewatered cake, then toasting it with constant stirring to dry and gelatinise the granules.',
  storageContext:
    'Keeps for months when properly dried and sealed in bags or drums; hygroscopic, so it moulds if it takes up moisture, and it is subject to storage insects.',
  connections: [
    { type: 'crop', slug: 'cassava' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'cassava-starch' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'iita',
      citedFor:
        'Gari processing sequence, West African production context, and product quality attributes',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Fermented cassava products and the requirement for adequate processing',
    },
    {
      sourceId: 'cgiar',
      citedFor:
        'Cassava processing at small and medium scale and product stability',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'West Africa principally, with diaspora export markets. Food standards for cassava products are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product. It is not a processing method, food-safety instruction, recipe, or compliance statement.',
    'No fermentation times, temperatures, moisture levels, compositional limits, or storage periods are given here — these are matters for the applicable food standard and national authority.',
    'Practice varies widely between regions, producers, and scales; the sequence described is the general form rather than any specific process.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Gari: Fermented Granular Cassava of West Africa',
    description:
      'Gari as a commodity product: grating, pressing, fermenting and toasting cassava into dry granules, the yellow and white types, and the quality buyers judge.',
    keywords: [
      'gari',
      'garri',
      'fermented cassava',
      'cassava processing',
      'West African staple',
    ],
  },
  structuredData: { article: true },
};
