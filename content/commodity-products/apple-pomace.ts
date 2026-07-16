import type { CommodityProductContent } from '@/types/content';

export const applePomace: CommodityProductContent = {
  id: 'commodity-product-apple-pomace',
  slug: 'apple-pomace',
  contentType: 'commodity-product',
  title: 'Apple Pomace',
  alternativeNames: ['Apple press cake', 'Apple pressings'],
  category: 'Processing by-product',
  subcategory: 'Fruit pressing residue',
  productClass: 'by-product',
  derivedFrom: { type: 'commodity', slug: 'fresh-apples' },
  producedBy: [{ type: 'processing-method', slug: 'juice-pressing' }],
  physicalForm: 'pomace',
  summary:
    'Apple pomace is the wet solid residue left when apples are pressed for juice: skins, flesh, cores, and seeds. It is a genuine by-product with feed and pectin outlets, but it is wet, bulky, and spoils fast, so its value depends entirely on what happens in the first hours after pressing.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Apple pomace is what stays in the press. Once the juice has been squeezed out, a substantial mass of skins, flesh fragments, cores, and seeds remains, and every juice plant produces it continuously in quantity for as long as it is running. It is a classic by-product: a residual output of lower value than the juice the operation exists to make, but real material with real outlets rather than a waste stream.',
    },
    {
      type: 'paragraph',
      text: 'The problem with it is water. Pomace leaves the press wet, and wet, sugary plant material at ambient temperature ferments and moulds within a day. That gives pomace a peculiar economics: the material has value, but the value is easily destroyed by delay, and a plant that cannot move or dry it promptly ends up paying to dispose of the same material another plant sells.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'By-product of apple juice pressing' },
    {
      label: 'Made from',
      value: 'Fresh apples (Malus domestica), via pressing',
    },
    {
      label: 'Composition',
      value: 'Skins, flesh, cores, and seeds left after juice extraction',
    },
    {
      label: 'Companion stream',
      value: 'Apple juice concentrate, the primary product of the same press',
    },
    {
      label: 'Handling constraint',
      value:
        'Wet and rapidly spoiling: it must be used, dried, or ensiled quickly',
    },
    {
      label: 'Principal uses',
      value: 'Livestock feed, pectin extraction, and fibre ingredient',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What apple pomace is',
      body: [
        {
          type: 'paragraph',
          text: "Pressing separates an apple into a liquid fraction and a solid one. The liquid is the juice; the solid is pomace, and it retains the fruit's skins and the fibrous structure of the flesh along with the cores and seeds that went through the mill. It is not depleted material — it holds fibre, pectin, residual sugars, and polyphenols concentrated by the removal of the water and dissolved solids that left in the juice.",
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'By-product, not co-product',
          text: 'Pomace is classed here as a by-product because the press is not run to make it and its value is well below that of the juice. This differs from a case like wheat milling, where bran is a deliberate, separately marketed output with an established feed and food trade of its own. The distinction is economic and per-process, not a judgement about usefulness.',
        },
      ],
    },
    {
      id: 'the-moisture-problem',
      heading: 'The moisture problem',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh pomace is wet, and wet is expensive. It is heavy relative to its dry matter, which makes it costly to move any distance; it ferments quickly, so it cannot be stockpiled; and it moulds, which rules it out of feed and food uses once it has. The three routes out of this are all time-critical: feed it fresh to livestock nearby, ensile it so that controlled fermentation preserves it, or dry it into a stable material that can be stored and shipped.',
        },
        {
          type: 'paragraph',
          text: 'Drying is what unlocks the higher-value outlets, because pectin extraction and food-ingredient use need a stable, transportable input. It is also energy-intensive, and the economics of drying a wet residue are marginal enough that the choice between drying and disposal often comes down to how close the plant sits to a livestock operation.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No moisture or timing figures here',
          text: 'Moisture content of fresh pomace, safe holding intervals, ensiling practice, and drying conditions vary with the press, the fruit, and the operation. AgricultureID publishes no figures; consult sourced technical guidance.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Livestock feed is the largest outlet and the simplest: fresh or ensiled pomace is fed to ruminants as a palatable, fibrous, energy-bearing feed material, and its use is governed by the feed regulations of the jurisdiction concerned. Dried pomace supports the higher-value routes — it is a major raw material for commercial pectin, the gelling agent extracted from apple and citrus residues, and it is milled into apple fibre for food use. Smaller volumes are composted or used as a fuel and digester feedstock.',
        },
        {
          type: 'list',
          items: [
            'Feed — fresh or ensiled pomace fed to ruminants, the dominant outlet',
            'Industrial — pectin extraction from dried pomace',
            'Food — apple fibre and polyphenol ingredients from dried, milled pomace',
            'Energy — anaerobic digestion feedstock and composting where no better outlet exists',
          ],
        },
        {
          type: 'paragraph',
          text: "Because pomace concentrates the skins and cores, it also concentrates whatever was on or near them, which makes the soundness and cleanliness of the incoming fruit directly relevant to the by-product's suitability for feed and food use.",
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['industrial', 'food', 'energy'],
  majorQualityAttributes: [
    'Moisture content as pressed',
    'Fibre and pectin content',
    'Freedom from mould and fermentation damage',
    'Freedom from contamination carried on the fruit',
    'Time from pressing to use, drying, or ensiling',
  ],
  processContext:
    'Left in the press after apples are milled and pressed for juice; the quantity and composition depend on the fruit, the mill, and how completely the press extracts the juice.',
  storageContext:
    'Not storable as pressed: it must be fed fresh, ensiled, or dried within a short window, because wet sugary residue ferments and moulds rapidly at ambient temperature.',
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'apple-juice-concentrate' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant', 'forage'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Fruit processing residues and their feed and industrial uses',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Apple pomace composition, handling, and utilisation research',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Feed material context for fruit processing by-products',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-material naming, permitted uses, and waste-handling rules are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or waste-management plan.',
    'Composition varies with fruit, mill, and press efficiency; no universal analysis is given here.',
    'Whether pomace may be fed, and how it must be described, is set by the feed regulations of the jurisdiction concerned.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Apple Pomace: The Pressing By-Product',
    description:
      'Apple pomace as a by-product of juicing: skins, flesh, cores and seeds left in the press, why its wetness limits its value, and its feed and pectin uses.',
    keywords: [
      'apple pomace',
      'press cake',
      'juice by-product',
      'pectin extraction',
      'pomace feed',
    ],
  },
  structuredData: { article: true },
};
