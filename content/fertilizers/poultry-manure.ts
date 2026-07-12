import type { FertilizerContent } from '@/types/content';

export const poultryManure: FertilizerContent = {
  id: 'fertilizer-poultry-manure',
  slug: 'poultry-manure',
  contentType: 'fertilizer',
  title: 'Poultry manure',
  alternativeNames: ['Poultry litter', 'Broiler litter'],
  category: 'Fertilizer',
  subcategory: 'Organic amendment',
  fertilizerClass: 'organic',
  typicalAnalysis:
    'Variable, low-to-moderate analysis — generally higher in nitrogen and phosphorus than cattle manure, exact content depending on bird type, diet, bedding, and storage',
  summary:
    'Poultry manure is an organic fertilizer derived from chicken or other poultry excreta, often mixed with bedding material as litter, supplying nitrogen, phosphorus, and potassium at concentrations that are typically higher and more variable than cattle-based manures.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Poultry manure, frequently handled as litter combining excreta with bedding such as wood shavings or straw, is a widely available organic fertilizer in regions with concentrated poultry production. Its nutrient content is generally higher, particularly in nitrogen and phosphorus, than that of cattle or other large-livestock manures on a per-tonne basis.',
    },
    {
      type: 'paragraph',
      text: 'Nutrient concentration and form vary considerably with bird type (layer, broiler, or turkey), diet, litter material, and storage conditions, and a meaningful share of the nitrogen present can be lost as ammonia during storage and after field application if not managed carefully.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Organic amendment from poultry excreta and bedding',
    },
    {
      label: 'Typical analysis',
      value:
        'Variable; generally higher N and P than cattle manure, depending on bird type, diet, and storage',
    },
    {
      label: 'Nutrients supplied',
      value: 'Nitrogen, phosphorus, and potassium, plus organic matter',
    },
    { label: 'Common form', value: 'Bulk solid litter, sometimes pelletised' },
    {
      label: 'Key consideration',
      value:
        'Prone to ammonia loss during storage and after surface application',
    },
    {
      label: 'Solubility',
      value:
        'A portion of nitrogen is readily available; the remainder is organically bound',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Poultry manure composition reflects the bird type, feed ration, litter material used in housing, and how long and under what conditions the material has been stored before spreading. Layer manure, broiler litter, and turkey litter can differ noticeably in nutrient concentration and moisture content.',
        },
        {
          type: 'table',
          caption:
            'General comparison with farmyard manure (illustrative, not universal)',
          columns: ['Material', 'General nutrient concentration'],
          rows: [
            [
              'Poultry manure/litter',
              'Typically higher and more concentrated in nitrogen and phosphorus per tonne',
            ],
            [
              'Farmyard (cattle) manure',
              'Typically lower and more dilute, with a bulkier, wetter material',
            ],
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied',
      body: [
        {
          type: 'paragraph',
          text: 'Poultry manure supplies nitrogen, phosphorus, and potassium in a mix of readily available and organically bound forms, together with organic matter. Its nitrogen content is often high enough that it is managed as a significant nitrogen source rather than a minor supplement.',
        },
        {
          type: 'list',
          items: [
            'A relatively fast-mineralising nitrogen fraction contributes to short-term crop-available nitrogen',
            'Phosphorus content is often high relative to crop phosphorus need, raising a build-up risk with repeated use',
            'Contributes organic matter, though generally less bulk per unit of nutrient than cattle manure',
          ],
        },
      ],
    },
    {
      id: 'use-and-benefits',
      heading: 'Use and benefits',
      body: [
        {
          type: 'paragraph',
          text: 'Poultry manure is used across cereal, vegetable, and forage systems as a nitrogen- and phosphorus-rich organic fertilizer, particularly valuable in regions with concentrated poultry production where local availability lowers transport cost relative to its nutrient content.',
        },
        {
          type: 'list',
          items: [
            'A relatively concentrated organic nutrient source compared with other manures',
            'Recycles nutrients from poultry production back into cropland',
            'Contributes to soil organic matter, though in smaller volumes than bulkier manures',
          ],
        },
      ],
    },
    {
      id: 'application-principles',
      heading: 'Application principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because nitrogen and phosphorus content and availability vary considerably, general practice is to test the manure where feasible and apply based on the more limiting nutrient — often phosphorus given its comparatively high concentration in poultry manure — to avoid long-term soil phosphorus accumulation.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates and nutrient basis are source- and region-specific',
          text: 'The appropriate application rate, and whether it should be set on a nitrogen or phosphorus basis, depend on the manure’s specific nutrient content, the crop, soil test results, and local manure-management regulations. AgricultureID does not publish universal application rates; follow manure and soil testing and regional guidance.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Poultry manure’s relatively high and readily available nitrogen content makes it prone to ammonia volatilisation losses if left unincorporated, and its comparatively high phosphorus content raises the risk of phosphorus accumulation and runoff where application is repeatedly based on a nitrogen target rather than phosphorus.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Many regions regulate poultry litter storage and application, particularly around phosphorus loading, due to its concentrated nutrient content; local manure-management rules should be consulted.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'vermicompost' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Global overview of poultry manure as an organic fertilizer, most concentrated and available in regions with intensive poultry production. Manure-management regulations vary by region.',
  climateContext:
    'Ammonia volatilisation and nitrogen mineralisation from poultry manure both increase with warmer temperatures, affecting nutrient timing and loss risk.',
  limitations: [
    'This entry describes poultry manure as a category; nutrient content varies substantially by bird type, diet, litter material, and storage and is not quantified here.',
    'This is not an application rate recommendation for any crop or region.',
    'Phosphorus accumulation risk depends on application history and local soil test levels, which are not addressed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Poultry manure as an organic fertilizer resource',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Poultry litter nutrient content and management',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Manure nutrient testing and phosphorus management',
    },
    { sourceId: 'ahdb', citedFor: 'Organic nutrient management context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Poultry Manure',
    description:
      'Poultry manure and litter as an organic fertilizer: nutrient concentration, nitrogen and phosphorus supply, and application and environmental considerations.',
    keywords: [
      'poultry manure fertilizer',
      'poultry litter',
      'organic fertilizer nitrogen phosphorus',
      'broiler litter fertilizer',
    ],
  },
  structuredData: { article: true },
};
