import type { FertilizerContent } from '@/types/content';

export const biochar: FertilizerContent = {
  id: 'fertilizer-biochar',
  slug: 'biochar',
  contentType: 'fertilizer',
  title: 'Biochar',
  alternativeNames: ['Agricultural charcoal'],
  category: 'Fertilizer',
  subcategory: 'Organic amendment',
  fertilizerClass: 'organic',
  typicalAnalysis:
    'Variable; primarily stable carbon, with minor and feedstock-dependent amounts of potassium, calcium, and other ash-derived nutrients',
  summary:
    'Biochar is a stable, carbon-rich material produced by heating organic biomass in a low-oxygen process called pyrolysis, applied to soil primarily to improve properties such as cation exchange capacity, water retention, and long-term carbon storage rather than as a direct nutrient source.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Biochar is produced by pyrolysis, the thermal decomposition of organic biomass such as wood, crop residues, or manure under limited oxygen. The process concentrates carbon into a stable, porous structure that resists decomposition far longer than the original organic material.',
    },
    {
      type: 'paragraph',
      text: 'Unlike compost or manure, biochar is valued mainly for its physical and chemical effects on soil, such as increased cation exchange capacity, porosity, and water-holding capacity, and for its potential to store carbon in soil over long timescales, rather than as a concentrated nutrient source. Its direct nutrient content is variable and depends heavily on the feedstock and production conditions.',
    },
  ],
  keyFacts: [
    {
      label: 'Fertilizer type',
      value: 'Carbon-rich soil amendment produced by pyrolysis',
    },
    {
      label: 'Typical analysis',
      value:
        'Variable; primarily stable carbon, with minor ash-derived nutrients depending on feedstock',
    },
    {
      label: 'Nutrients supplied',
      value:
        'Minor, variable amounts of potassium, calcium, and other ash-derived elements',
    },
    { label: 'Common form', value: 'Porous, lightweight, charcoal-like solid' },
    {
      label: 'Key consideration',
      value:
        'Effects on soil properties and crop response vary substantially with feedstock and production process',
    },
    {
      label: 'Solubility',
      value: 'Largely insoluble carbon matrix; ash fraction is more soluble',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Biochar composition depends on the feedstock pyrolysed and the temperature and duration of the process. Higher pyrolysis temperatures generally increase carbon stability and porosity but reduce the retention of some nutrients that volatilise during heating.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Production process',
              description: 'Pyrolysis of organic biomass under limited oxygen',
            },
            {
              term: 'Primary component',
              description: 'Stable, largely recalcitrant carbon',
            },
            {
              term: 'Nutrient content',
              description:
                'Variable and generally minor; potassium and calcium mainly from ash',
            },
            {
              term: 'Physical structure',
              description:
                'Highly porous, contributing to its effect on soil water and cation exchange capacity',
            },
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
          text: 'Biochar is not primarily a nutrient-supplying material; any potassium, calcium, or other elements it contains come mainly from the mineral ash fraction of the original feedstock and vary widely between biochar products.',
        },
        {
          type: 'list',
          items: [
            'Direct nutrient supply is minor and highly variable by feedstock and process',
            'Its main soil-fertility role is indirect, through improved cation exchange capacity and water retention',
            'Some biochars are co-applied with compost or manure to combine nutrient supply with biochar’s physical benefits',
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
          text: 'Biochar is applied to improve soil physical and chemical properties, including cation exchange capacity, water-holding capacity, and porosity, and it is studied for its potential to sequester carbon in soil over long timescales because of its resistance to decomposition.',
        },
        {
          type: 'list',
          items: [
            'Can increase cation exchange capacity, helping soils retain nutrients against leaching',
            'Can improve water-holding capacity, particularly in coarse-textured soils',
            'Represents a long-term carbon store due to its resistance to decomposition',
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
          text: 'Because biochar effects on soil and crop response vary considerably with feedstock, production temperature, and soil type, general practice treats it as a soil-conditioning amendment whose suitability and effect should be evaluated for the specific product and soil in question, rather than assumed to behave uniformly.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Suitability and rates are product- and soil-specific',
          text: 'Whether biochar is beneficial, and at what rate, depends on the specific biochar’s feedstock and production process, the soil type, the crop, and local regulations. AgricultureID does not publish universal application rates; follow soil testing and regional guidance, and evaluate product-specific data before use.',
        },
      ],
    },
    {
      id: 'environmental-considerations',
      heading: 'Environmental considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Biochar’s resistance to decomposition means carbon added to soil in this form can remain for extended periods, which is of interest for long-term soil carbon storage. Effects on nutrient cycling, soil biology, and crop yield vary by feedstock, application rate, and soil type, and are an active area of ongoing research.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Reported effects of biochar on yield and soil properties vary across studies and are not uniformly positive; outcomes depend heavily on feedstock, production conditions, application rate, and the specific soil.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'soil-topic', slug: 'soil-organic-carbon' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
  ],
  glossaryTerms: ['agronomy', 'soil-ph'],
  geographicScope:
    'Global overview of biochar as a soil amendment. Feedstocks, production methods, and research findings on effectiveness vary substantially by region and context.',
  climateContext:
    'Biochar’s effect on water retention may be of particular interest in drought-prone or coarse-textured-soil regions, though outcomes remain context-dependent.',
  limitations: [
    'This entry describes biochar as a category; nutrient content and soil effects vary substantially by feedstock and production process and are not quantified here.',
    'This is not an application rate recommendation for any crop, soil, or region.',
    'Reported yield and soil-property effects vary across studies; outcomes should not be assumed to generalise from one context to another.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Biochar as a soil amendment in sustainable soil management',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil carbon, cation exchange capacity, and amendment effects',
    },
    {
      sourceId: 'isric',
      citedFor: 'Soil chemical properties and biochar interactions',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Biochar production and soil application research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Biochar',
    description:
      'Biochar as a soil amendment: pyrolysis production, carbon stability, effects on cation exchange capacity and water retention, and general use principles.',
    keywords: [
      'biochar',
      'biochar soil amendment',
      'pyrolysis carbon',
      'soil carbon sequestration',
    ],
  },
  structuredData: { article: true },
};
