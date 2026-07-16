import type { CommodityProductContent } from '@/types/content';

export const groundnutOil: CommodityProductContent = {
  id: 'commodity-product-groundnut-oil',
  slug: 'groundnut-oil',
  contentType: 'commodity-product',
  title: 'Groundnut Oil',
  alternativeNames: ['Peanut oil', 'Arachis oil'],
  category: 'Oilseed crushing co-product',
  subcategory: 'Vegetable oil',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'groundnuts' },
  physicalForm: 'oil',
  summary:
    'Groundnut oil is the oil expressed or extracted from groundnut kernels, produced alongside groundnut cake. It is valued for frying stability and, in some markets, for the flavour retained by less refined grades.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Groundnut oil is recovered when groundnut kernels are crushed. It reaches the market across a wider spectrum of processing than most vegetable oils: from cold-pressed and filtered oils that keep a pronounced roasted flavour, through crude oil sold to refiners, to fully refined oil that is light and neutral. These are different products serving different buyers, not grades of one article.',
    },
    {
      type: 'paragraph',
      text: 'The oil is a co-product: kernels are crushed to obtain both oil and cake, and the cake is a valuable feed protein rather than a residue. In markets with a strong edible-kernel trade, crushing is fed largely by lots that did not make edible grade, which ties the oil’s supply to the quality outcome of the kernel harvest.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of groundnut crushing' },
    { label: 'Made from', value: 'Groundnut kernels (Arachis hypogaea)' },
    { label: 'Companion stream', value: 'Groundnut cake, from the same crush' },
    {
      label: 'Traded states',
      value: 'Cold-pressed and filtered, crude, and refined',
    },
    {
      label: 'Principal uses',
      value: 'Food — frying, cooking, and food manufacture',
    },
    {
      label: 'Key attributes',
      value:
        'Free fatty acids, colour, moisture and impurities, oxidative condition',
    },
  ],
  sections: [
    {
      id: 'grades-and-flavour',
      heading: 'Processing grades and flavour',
      body: [
        {
          type: 'paragraph',
          text: 'Refining removes the compounds that carry flavour and colour along with those that impair keeping quality — which means a refiner’s success is a flavour-market’s loss. Markets that want roasted groundnut character therefore buy pressed and filtered oil that has not been through the full sequence, accepting a shorter shelf life and a more variable product. Markets buying frying oil want the refined article, where neutrality and stability are the point.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Allergen status travels with the oil',
          text: 'Groundnut is a major food allergen in many jurisdictions, and how refining affects allergen labelling obligations is determined by food law, not by this entry. Labelling requirements differ by jurisdiction — consult the applicable food authority.',
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
            'Food — commercial and household frying, where stability is valued',
            'Food — cooking oil and an ingredient in food manufacture',
            'Flavour oils — pressed grades retaining roasted groundnut character',
            'Industrial — a minor outlet in soaps and oleochemicals',
          ],
        },
        {
          type: 'paragraph',
          text: 'Groundnut oil is generally a higher-priced oil than the major commodity oils, so its use concentrates where its frying behaviour or flavour is specifically wanted rather than where a generic liquid oil would do.',
        },
      ],
    },
    {
      id: 'quality-and-safety-context',
      heading: 'Quality, and the aflatoxin question',
      body: [
        {
          type: 'paragraph',
          text: 'Free fatty acid content, colour, moisture and impurities, and oxidative condition describe the traded oil, and much of that condition is inherited from the kernels: kernels that were damaged, poorly dried, or held badly yield oil with a higher free fatty acid load and a higher refining cost.',
        },
        {
          type: 'paragraph',
          text: 'Because the parent commodity carries a documented aflatoxin risk, the question of what happens to aflatoxins during oil processing arises frequently. It is a regulated food-safety matter: how contamination is assessed, which limits apply to which product, and what processing may be recognised are all determined by the applicable food-safety authority in the destination jurisdiction. AgricultureID does not state limits, test criteria, or processing claims — refer to the authority and the standard in force.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'oil'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Free fatty acid content',
    'Colour',
    'Moisture and impurities',
    'Oxidative condition',
    'Flavour profile (pressed grades)',
  ],
  processContext:
    'Expressed by pressing, or extracted after pressing, from groundnut kernels; sold cold-pressed and filtered, crude for refining, or refined. Groundnut cake is the simultaneous co-product.',
  storageContext:
    'Stored in bulk tanks and packed form; protected from heat, light, and air, with pressed grades keeping less well than refined oil.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1508.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Crude ground-nut oil.',
    },
    {
      system: 'HS',
      code: '1508.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Ground-nut oil and its fractions, other than crude.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'groundnut' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'groundnut-cake' }],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Groundnut oil processing pathways and food uses',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Aflatoxins in groundnut products as a regulated food-safety consideration',
    },
    {
      sourceId: 'usda',
      citedFor: 'Groundnut oil product description and market context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Oil naming, compositional standards, allergen labelling, and aflatoxin regulation are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a refining specification, food-standards statement, or food-safety assessment.',
    'No aflatoxin limits, processing claims, or test criteria are given here; the applicable food-safety authority determines them.',
    'Allergen labelling obligations for groundnut-derived oils differ by jurisdiction and are not addressed here.',
    'No fatty acid composition, refining loss, or stability figures are given — they are lot- and process-specific.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Groundnut Oil: Co-Product of Groundnut Crushing',
    description:
      'Groundnut oil as a crushing co-product: pressed, crude and refined grades, frying and flavour uses, quality attributes, and the regulated aflatoxin context.',
    keywords: [
      'groundnut oil',
      'peanut oil',
      'arachis oil',
      'frying oil',
      'groundnut crushing',
    ],
  },
  structuredData: { article: true },
};
