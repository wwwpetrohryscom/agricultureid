import type { CommodityProductContent } from '@/types/content';

export const linseedOil: CommodityProductContent = {
  id: 'commodity-product-linseed-oil',
  slug: 'linseed-oil',
  contentType: 'commodity-product',
  title: 'Linseed Oil',
  alternativeNames: [
    'Flaxseed oil',
    'Flax oil',
    'Boiled linseed oil (treated grade)',
  ],
  category: 'Primary crushing product',
  subcategory: 'Drying oil',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'flaxseed' },
  physicalForm: 'oil',
  summary:
    'Linseed oil is the primary product of crushing flaxseed: a drying oil that oxidises and polymerises into a solid film. That property makes it a coatings raw material, while cold-pressed food grades of the same oil are sold as flaxseed oil.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Linseed oil is the reason flaxseed is crushed. Unlike the meals-and-oil balance of the soybean crush, the flax crush is run for the oil, with cake a secondary stream — which is why the oil is modelled here as a primary product rather than a co-product.',
    },
    {
      type: 'paragraph',
      text: 'The oil is exceptionally high in alpha-linolenic acid, and everything commercially interesting about it follows from that. Highly unsaturated oils react with atmospheric oxygen; in linseed oil that reaction proceeds far enough to cross-link the molecules into a tough solid film. Where a food oil would call this rancidity and failure, a coatings formulator calls it curing and buys the oil for it.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of flaxseed crushing' },
    { label: 'Made from', value: 'Flaxseed / linseed (Linum usitatissimum)' },
    {
      label: 'Defining property',
      value: 'A drying oil — cures to a solid film by oxidation',
    },
    {
      label: 'Grades',
      value: 'Cold-pressed food oil, raw industrial oil, boiled and stand oil',
    },
    {
      label: 'Principal uses',
      value:
        'Paints, varnishes, wood finishes, putty, linoleum; food as flaxseed oil',
    },
    {
      label: 'Key attributes',
      value:
        'Drying behaviour, free fatty acids, colour, moisture and impurities',
    },
  ],
  sections: [
    {
      id: 'grades',
      heading: 'Grades and treatments',
      body: [
        {
          type: 'paragraph',
          text: 'The oil reaches buyers in several distinct states, and they are different articles rather than qualities of one. Cold-pressed oil, minimally processed and kept cool, is the food grade sold as flaxseed oil. Raw linseed oil is the untreated industrial article. Boiled linseed oil, despite its name, is generally oil treated with driers to speed curing rather than simply heated. Stand oil is oil that has been heat-polymerised to a thicker, more controlled-flowing product for fine finishes.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Raw linseed oil',
              description:
                'Untreated pressed and filtered oil, which cures slowly by air oxidation alone.',
            },
            {
              term: 'Boiled linseed oil',
              description:
                'Oil containing added driers to accelerate curing; the name is historical and does not reliably describe the treatment.',
            },
            {
              term: 'Stand oil',
              description:
                'Oil heat-bodied under conditions that polymerise it before use, giving a thicker oil with different flow and film properties.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A property with a safety consequence',
          text: 'The curing of linseed oil is an oxidation reaction that releases heat. Materials saturated with the oil are documented as capable of self-heating under conditions that trap that heat. This is a recognised property of drying oils, noted here as reference information — handling, disposal, and fire-safety requirements are matters for the applicable safety authority and the product’s own safety data sheet.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Linseed oil is a classic binder: it is the film-forming component in traditional oil paints, varnishes, and wood finishes, and it is a constituent of putty and of linoleum, whose name records its origin. Synthetic binders displaced it from much of the coatings market over the twentieth century, but it retains a durable position in wood finishing, artists’ materials, restoration work, and applications where a plant-derived binder is specified.',
        },
        {
          type: 'list',
          items: [
            'Coatings — oil paints, varnishes, and wood finishes',
            'Building materials — putty and linoleum flooring',
            'Artists’ materials — oil paint media and grounds',
            'Food — cold-pressed flaxseed oil as a nutritional oil',
            'Industrial — oleochemical intermediates and printing inks',
          ],
        },
      ],
    },
    {
      id: 'quality-and-storage',
      heading: 'Quality and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Industrial buyers describe the oil by its drying behaviour, colour, free fatty acid content, and moisture and impurities. Food buyers describe it by freshness and flavour and treat the same reactivity as a shelf-life problem, which is why cold-pressed flaxseed oil is packed opaque, kept cold, and dated short.',
        },
        {
          type: 'paragraph',
          text: 'The oil is stored in closed containers with minimal headspace and away from heat and light. This is not general good practice repeated for form’s sake: an oil that cures on contact with air will begin doing so in a partly empty drum, forming skin and rendering the contents unusable.',
        },
      ],
    },
  ],
  primaryUses: ['industrial', 'oil'],
  secondaryUses: ['food'],
  majorQualityAttributes: [
    'Drying behaviour',
    'Free fatty acid content',
    'Colour',
    'Moisture and impurities',
    'Freshness and flavour (food grades)',
  ],
  processContext:
    'Pressed, or pressed and extracted, from flaxseed and sold cold-pressed for food or as raw, boiled, or heat-bodied industrial grades; linseed cake is the secondary stream from the same crush.',
  storageContext:
    'Held in closed containers with minimal headspace, away from heat and light; the oil skins and cures on contact with air, and food grades are packed opaque and kept cold.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1515.11',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Crude linseed oil.',
    },
    {
      system: 'HS',
      code: '1515.19',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Linseed oil and its fractions, other than crude.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'flax' },
    { type: 'commodity', slug: 'flaxseed' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Linseed oil as the principal product of flax crushing and its uses',
    },
    {
      sourceId: 'britannica',
      citedFor: 'Drying oils, linseed oil grades, and their industrial history',
    },
    {
      sourceId: 'usda',
      citedFor: 'Flaxseed crushing and linseed oil market context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Product naming, food-grade standards, and safety requirements for drying oils are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a coatings formulation, food-standards statement, or safety instruction.',
    'No fatty acid composition, drying time, or shelf-life figures are given here — they are grade-, treatment-, and lot-specific.',
    'Grade names such as boiled linseed oil are trade conventions whose exact treatment varies by supplier; the label does not fully specify the product.',
    'Handling, storage, and disposal requirements are set by the applicable safety authority and the supplier’s safety data sheet, not by this entry.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Linseed Oil: Primary Product of Flaxseed Crushing',
    description:
      'Linseed oil as the primary product of the flax crush: why it cures to a solid film, raw, boiled and stand oil grades, coatings and food uses, and storage.',
    keywords: [
      'linseed oil',
      'flaxseed oil',
      'drying oil',
      'boiled linseed oil',
      'stand oil',
    ],
  },
  structuredData: { article: true },
};
