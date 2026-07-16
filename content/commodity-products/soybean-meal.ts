import type { CommodityProductContent } from '@/types/content';

export const soybeanMeal: CommodityProductContent = {
  id: 'commodity-product-soybean-meal',
  slug: 'soybean-meal',
  contentType: 'commodity-product',
  title: 'Soybean Meal',
  alternativeNames: ['Soya bean meal', 'Soybean oilcake', 'Soyameal'],
  category: 'Oilseed crushing co-product',
  subcategory: 'Protein meal',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'soybeans' },
  physicalForm: 'meal',
  summary:
    'Soybean meal is the protein-rich solid fraction remaining after oil is separated from soybeans. It is the reference protein ingredient of the global feed industry and a co-product of crushing — produced simultaneously with soybean oil, not left over from it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soybean meal is what remains of the bean once the oil has been taken out and the de-oiled solids have been treated and ground. It is traded as a bulk feed ingredient and is the benchmark against which other protein meals are priced and substituted, because of its amino acid profile and the consistency with which it can be supplied.',
    },
    {
      type: 'paragraph',
      text: 'Calling meal a co-product rather than a by-product is a deliberate classification. A crushing plant is not run to make oil and dispose of solids; for most of the crush, meal carries the larger share of the value. Oil and meal emerge from one operation and are both intended outputs.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of soybean crushing' },
    { label: 'Made from', value: 'Soybeans (Glycine max)' },
    { label: 'Fraction of the seed', value: 'De-oiled protein-bearing solids' },
    { label: 'Companion stream', value: 'Soybean oil, from the same crush' },
    {
      label: 'Principal use',
      value: 'Animal feed — the dominant protein ingredient in compound feeds',
    },
    {
      label: 'Key attributes',
      value: 'Protein content, hull inclusion, moisture, urease/heat treatment',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soybean meal is',
      body: [
        {
          type: 'paragraph',
          text: 'After oil separation, the de-oiled soybean solids are desolventised and toasted, then ground and sized into meal. The toasting step is not incidental: raw soybean tissue contains heat-labile antinutritional factors, and controlled heat treatment is what makes the meal usable in feed. Too little heat leaves those factors active; too much damages protein quality. Meal is therefore a processed product whose value depends on process control, not merely on separation.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Dehulled meal',
              description:
                'Meal made from beans whose hulls were removed before extraction, giving a higher-protein, lower-fibre product.',
            },
            {
              term: 'Hulls-added meal',
              description:
                'Meal blended back with a portion of hulls to meet a lower protein specification.',
            },
            {
              term: 'Urease activity',
              description:
                'A widely used indirect indicator of whether heat treatment has been adequate without being excessive.',
            },
          ],
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
            'Poultry feed — the largest single outlet in most markets',
            'Pig feed — a core protein source in grower and finisher diets',
            'Ruminant feed — a supplementary protein source in dairy and beef rations',
            'Aquaculture feed — an increasingly important plant protein substitute',
            'Food and industrial — as a base for soy protein concentrates and isolates',
          ],
        },
        {
          type: 'paragraph',
          text: 'Meal is specified for a use rather than treated as one uniform good: a poultry integrator and a dairy feed mill buy against different protein and fibre descriptions from the same crushing plant.',
        },
      ],
    },
    {
      id: 'handling-and-storage',
      heading: 'Handling and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Meal is shipped in bulk and in bags, and is commonly pelleted for handling and freight efficiency. It takes up moisture from the air, and moist meal can heat, cake, and support mould growth — a particular concern in warm, humid ports and in long ocean voyages. Storage discipline and stock rotation matter, and meal that has heated in store has usually lost protein quality that cannot be restored.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  secondaryUses: ['food', 'industrial'],
  majorQualityAttributes: [
    'Protein content',
    'Fibre content (hull inclusion)',
    'Moisture content',
    'Adequacy of heat treatment (urease activity)',
    'Freedom from contamination',
  ],
  processContext:
    'Produced by crushing soybeans: after oil separation the de-oiled solids are desolventised, toasted to control antinutritional factors, then ground and sized. Oil is the simultaneous co-product.',
  storageContext:
    'Bulk or bagged, often pelleted; hygroscopic and prone to caking, heating, and mould if held moist or warm.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2304.00',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oil-cake and other solid residues resulting from the extraction of soya-bean oil, whether or not ground or pelleted.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'soybean-oil' },
    { type: 'commodity-product', slug: 'soybean-hulls' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oilseed meals and their role in animal feed',
    },
    {
      sourceId: 'usda',
      citedFor: 'Soybean meal product description and trade context',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Protein meals as feed ingredients in livestock nutrition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and labelling are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation, nutritional specification, or regulatory compliance statement.',
    'Composition varies with the beans crushed, dehulling, and process conditions; no universal analysis is given here.',
    'Heat-treatment indicators are summarised qualitatively; testing methods and acceptance criteria are contract- and laboratory-specific.',
    'Feed use, permitted claims, and labelling follow the feed regulations of the market where the meal is sold.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Soybean Meal: Co-Product of the Soybean Crush',
    description:
      'Soybean meal as a crushing co-product: how the de-oiled fraction becomes feed, why heat treatment matters, protein and hull grades, and storage behaviour.',
    keywords: [
      'soybean meal',
      'soya bean meal',
      'protein meal',
      'feed ingredient',
      'soybean crush co-product',
    ],
  },
  structuredData: { article: true },
};
