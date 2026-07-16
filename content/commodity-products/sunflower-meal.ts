import type { CommodityProductContent } from '@/types/content';

export const sunflowerMeal: CommodityProductContent = {
  id: 'commodity-product-sunflower-meal',
  slug: 'sunflower-meal',
  contentType: 'commodity-product',
  title: 'Sunflower Meal',
  alternativeNames: [
    'Sunflowerseed meal',
    'Sunflower oilcake',
    'Sunflower expeller',
  ],
  category: 'Oilseed crushing co-product',
  subcategory: 'Protein meal',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'sunflower-seed' },
  producedBy: [{ type: 'processing-method', slug: 'mechanical-pressing' }],
  physicalForm: 'meal',
  summary:
    'Sunflower meal is the de-oiled solid fraction from crushing sunflower seed, traded as a feed protein. Its specification is governed by how much hull was removed before extraction, so it reaches the market at several distinct protein and fibre grades.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sunflower meal is what the crushing plant has left once the oil has been taken out of sunflower seed. It is a co-product: the plant intends to sell it, and it is priced and shipped as a feed ingredient in its own right rather than disposed of as a residue.',
    },
    {
      type: 'paragraph',
      text: 'Unlike soybean meal, sunflower meal is not close to a single standard article. The sunflower achene has a substantial hull, and how much of it is taken off before extraction determines the protein and fibre of the meal. A plant can produce undecorticated, partially decorticated, or largely decorticated meals from identical seed, and buyers contract for the grade they want rather than for "sunflower meal".',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of sunflower crushing' },
    { label: 'Made from', value: 'Sunflower seed (Helianthus annuus)' },
    { label: 'Companion stream', value: 'Sunflower oil, from the same crush' },
    {
      label: 'Specification driver',
      value: 'Degree of decortication — how much hull was removed',
    },
    {
      label: 'Principal use',
      value: 'Animal feed, most prominently ruminant rations',
    },
    {
      label: 'Key attributes',
      value: 'Protein content, fibre content, moisture, residual oil',
    },
  ],
  sections: [
    {
      id: 'decortication',
      heading: 'Why decortication defines the grade',
      body: [
        {
          type: 'paragraph',
          text: 'Hull is high in fibre and carries little protein, so leaving it in dilutes the meal and raising the removal rate concentrates it. Because hull removal is a dial rather than a switch, sunflower meal is marketed at several protein specifications from one raw material — and two lots both labelled sunflower meal can be quite different feeds.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Undecorticated meal',
              description:
                'Made with the hull left in: higher fibre, lower protein, and the least concentrated grade.',
            },
            {
              term: 'Decorticated meal',
              description:
                'Made after substantial hull removal: lower fibre and a higher protein concentration.',
            },
            {
              term: 'Expeller meal',
              description:
                'Meal from pressing without a subsequent solvent stage, which leaves more residual oil than a fully extracted meal.',
            },
          ],
        },
      ],
    },
    {
      id: 'feed-role',
      heading: 'Role in feed',
      body: [
        {
          type: 'paragraph',
          text: 'Sunflower meal is used across livestock feeding but sits most comfortably in ruminant rations, where its fibre is less of a constraint than it is for poultry and pigs. Formulators treat it as a protein source that trades at a discount to soybean meal, and the discount reflects both its fibre load and its amino acid profile, which differs from soybean meal in ways that matter to monogastric diets.',
        },
        {
          type: 'paragraph',
          text: 'Its inclusion is therefore a formulation decision made grade by grade, and a change in the meal’s decortication level changes the ration, not merely the price line.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Meal is shipped in bulk and in bags and is commonly pelleted to improve density and flow. Fibrous, hull-bearing meals are dusty and bulky, which raises handling and freight cost per unit of protein delivered. Like other meals it is hygroscopic: held moist it heats, cakes, and moulds, and expeller grades with more residual oil have a shorter keeping quality than fully extracted ones.',
        },
      ],
    },
  ],
  primaryUses: ['feed'],
  majorQualityAttributes: [
    'Protein content',
    'Fibre content (degree of decortication)',
    'Moisture content',
    'Residual oil content',
    'Freedom from contamination',
  ],
  processContext:
    'The de-oiled solids from crushing sunflower seed, ground and sized after extraction; protein and fibre are set principally by how much hull was removed beforehand. Oil is the simultaneous co-product.',
  storageContext:
    'Bulk or bagged, often pelleted; dusty and bulky at higher fibre grades, hygroscopic, and shorter-keeping where residual oil is high.',
  commodityCodes: [
    {
      system: 'HS',
      code: '2306.30',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Oil-cake and other solid residues resulting from the extraction of sunflower seed oil.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'sunflower' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'commodity', slug: 'sunflower-seed' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  relatedTopics: [{ type: 'commodity-product', slug: 'sunflower-oil' }],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Oilseed meals and their role in animal feed',
    },
    {
      sourceId: 'usda-fas',
      citedFor: 'Sunflower meal trade and grade context',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Oilseed meals as feed ingredients in livestock nutrition',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, grade conventions, and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description, not a feed formulation or nutritional specification.',
    'Protein and fibre depend on decortication and process; grade names are market conventions and no figures are given here.',
    'Amino acid profile and inclusion limits are species- and diet-specific and are not addressed here.',
    'Permitted feed uses and labelling requirements differ by jurisdiction and are set by feed regulators.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sunflower Meal: Co-Product of the Sunflower Crush',
    description:
      'Sunflower meal as a crushing co-product: why decortication sets its protein and fibre grade, expeller versus extracted meals, feed role, and handling behaviour.',
    keywords: [
      'sunflower meal',
      'decorticated sunflower meal',
      'sunflower oilcake',
      'protein meal',
      'ruminant feed',
    ],
  },
  structuredData: { article: true },
};
