import type { SoilTopicContent } from '@/types/content';

export const soilOrganicCarbon: SoilTopicContent = {
  id: 'soil-topic-soil-organic-carbon',
  slug: 'soil-organic-carbon',
  contentType: 'soil-topic',
  title: 'Soil Organic Carbon',
  topicClass: 'chemical',
  alternativeNames: ['SOC'],
  category: 'Soil chemical property',
  subcategory: 'Carbon content',
  summary:
    'Soil organic carbon is the carbon-based fraction of soil organic matter. It is a key soil-health indicator and a central quantity in discussions of soil carbon sequestration and climate mitigation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil organic carbon (SOC) refers specifically to the carbon contained within soil organic matter, as distinct from the broader organic matter fraction, which also includes other elements such as hydrogen, oxygen, and nitrogen. SOC is the quantity most often measured directly in the laboratory and reported in carbon-cycling and soil-health assessments.',
    },
    {
      type: 'paragraph',
      text: 'Because organic matter is often estimated from measured organic carbon using a conversion factor, and because that factor varies with soil type and organic matter composition, organic-matter figures derived this way are approximations rather than exact conversions.',
    },
  ],
  keyFacts: [
    {
      label: 'Defined as',
      value: 'The carbon component of soil organic matter',
    },
    {
      label: 'Relation to organic matter',
      value:
        'Often estimated via a conversion factor from measured carbon, though the factor is not universal',
    },
    {
      label: 'Relevance',
      value:
        'Central to soil health assessment and soil carbon sequestration discussions',
    },
    {
      label: 'Measured by',
      value:
        'Dry combustion analysis, wet oxidation methods, or calibrated near-infrared spectroscopy',
    },
    {
      label: 'Increased by',
      value:
        'Reduced tillage, cover cropping, organic amendments, perennial vegetation',
    },
    {
      label: 'Decreased by',
      value:
        'Cultivation-induced oxidation, erosion, drainage of organic soils',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil organic carbon is',
      body: [
        {
          type: 'paragraph',
          text: 'SOC includes carbon in living soil organisms, fresh and decomposing residues, and stabilized humus. It represents a large and dynamic pool within the global carbon cycle, exchanging carbon with the atmosphere through both inputs (plant photosynthesis and residue deposition) and losses (microbial respiration and, in disturbed or drained soils, more rapid oxidation).',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why soil organic carbon matters',
      body: [
        {
          type: 'paragraph',
          text: 'SOC is widely used as an indicator of overall soil health because it correlates with structure, water retention, and nutrient cycling. It has also become a focal point of interest in climate policy and land management, since increasing SOC stocks in agricultural soils is a potential pathway to remove and store atmospheric carbon dioxide, alongside its direct agronomic benefits.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil carbon sequestration potential, rates, and permanence vary greatly by climate, soil type, and practice, and are actively studied; figures should be sourced from current, region-specific research rather than treated as fixed.',
        },
      ],
    },
    {
      id: 'how-it-is-measured',
      heading: 'How organic carbon is measured',
      body: [
        {
          type: 'paragraph',
          text: 'Standard laboratory methods include dry combustion, which oxidizes a sample and measures released carbon dioxide, and wet oxidation methods, such as variants of the Walkley–Black procedure, which chemically oxidize a portion of the carbon. Calibrated near-infrared spectroscopy is increasingly used for faster, lower-cost estimation once validated against reference laboratory methods.',
        },
        {
          type: 'table',
          caption: 'Common SOC measurement approaches',
          columns: ['Method', 'General approach'],
          rows: [
            [
              'Dry combustion',
              'Combusts the sample and measures total carbon released, including all organic and any inorganic carbonate carbon present',
            ],
            [
              'Wet oxidation',
              'Chemically oxidizes a portion of organic carbon in solution; historically widely used and comparatively low-cost',
            ],
            [
              'Near-infrared spectroscopy',
              'Estimates carbon content from spectral response, calibrated against reference lab measurements',
            ],
          ],
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing soil organic carbon',
      body: [
        {
          type: 'paragraph',
          text: 'Practices that increase carbon inputs to soil and reduce oxidative losses tend to build SOC over time, though the achievable increase and the time required vary with climate, soil type, and starting condition.',
        },
        {
          type: 'list',
          items: [
            'Maintain continuous living cover and root inputs through cover cropping',
            'Reduce tillage intensity to slow the oxidation of exposed organic matter',
            'Apply compost, manure, or biochar to add stable carbon inputs',
            'Incorporate perennial vegetation or agroforestry elements where feasible',
            'Avoid unnecessary drainage of naturally organic (peat) soils, which can accelerate carbon loss',
          ],
        },
      ],
    },
    {
      id: 'measurement-in-context',
      heading: 'Interpreting SOC data over time',
      body: [
        {
          type: 'paragraph',
          text: 'Because SOC changes slowly relative to typical year-to-year variation, meaningful trend detection generally requires consistent sampling depth, method, and timing across multiple years. Comparisons across laboratories or methods should account for differences in analytical approach.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'biochar' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil', slug: 'peat-soil' },
  ],
  glossaryTerms: ['crop-rotation', 'cover-crop'],
  geographicScope:
    'General soil-science overview applicable worldwide; baseline SOC levels and sequestration potential vary greatly by climate, soil type, and land-use history.',
  climateContext:
    'Temperature and moisture strongly control decomposition rates and therefore SOC stability across regions.',
  limitations: [
    'Conversion factors between organic carbon and organic matter vary by soil and are not universally fixed.',
    'Soil carbon sequestration rates and permanence are actively researched and vary widely; figures should not be generalized across regions or practices.',
    'Detecting real change in SOC requires consistent long-term sampling; short-term or single-point measurements can be misleading.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil organic carbon measurement and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil organic carbon and the global carbon cycle',
    },
    { sourceId: 'isric', citedFor: 'Global soil organic carbon data' },
    { sourceId: 'cornell-cals', citedFor: 'Soil carbon assessment guidance' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Organic Carbon',
    description:
      'Soil organic carbon explained: its relationship to organic matter, role as a soil-health indicator, measurement methods, and management practices.',
    keywords: [
      'soil organic carbon',
      'soc',
      'carbon sequestration',
      'soil carbon',
    ],
  },
  structuredData: { article: true },
};
