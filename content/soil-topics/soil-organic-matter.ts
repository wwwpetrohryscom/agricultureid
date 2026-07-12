import type { SoilTopicContent } from '@/types/content';

export const soilOrganicMatter: SoilTopicContent = {
  id: 'soil-topic-soil-organic-matter',
  slug: 'soil-organic-matter',
  contentType: 'soil-topic',
  title: 'Soil Organic Matter',
  topicClass: 'physical',
  alternativeNames: ['SOM', 'Humus'],
  category: 'Soil property',
  subcategory: 'Organic component',
  summary:
    'Soil organic matter is the fraction of soil made up of plant and animal residues in various stages of decomposition, living soil organisms, and humus. Though usually a minor share of soil mass, it strongly influences structure, water retention, nutrient cycling, and biological activity.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil organic matter (SOM) comprises fresh and partially decomposed plant and animal residues, the living organisms that process them, and humus — the relatively stable, dark organic material left after extensive decomposition. Even though it typically makes up a small percentage of soil mass by weight, its influence on soil behavior is disproportionately large.',
    },
    {
      type: 'paragraph',
      text: 'SOM content varies widely with climate, native vegetation, texture, and management history. Grassland and forest soils often accumulate more organic matter than long-cultivated soils, and organic matter can decline under intensive tillage or residue removal without offsetting inputs.',
    },
  ],
  keyFacts: [
    {
      label: 'Composition',
      value: 'Fresh/decomposing residues, living organisms, and humus',
    },
    {
      label: 'Share of soil mass',
      value:
        'Typically a small percentage by weight, varying widely by climate, texture, and management',
    },
    {
      label: 'Key functions',
      value:
        'Aggregation/structure, water and nutrient retention, cation exchange, energy for soil life',
    },
    {
      label: 'Built up by',
      value:
        'Crop residues, cover crops, manures/composts, reduced disturbance',
    },
    {
      label: 'Depleted by',
      value:
        'Intensive tillage, residue removal, erosion, sustained cultivation without replenishment',
    },
    {
      label: 'Measured by',
      value:
        'Laboratory combustion or loss-on-ignition analysis of soil samples',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil organic matter is',
      body: [
        {
          type: 'paragraph',
          text: 'SOM exists along a spectrum from fresh, easily recognizable plant residues to fully decomposed humus. Between these extremes lie partially decomposed materials and the vast community of living organisms — bacteria, fungi, and soil fauna — that drive the decomposition process.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Fresh residues',
              description:
                'Recently added plant or animal material not yet substantially decomposed.',
            },
            {
              term: 'Active/particulate organic matter',
              description:
                'Partially decomposed material that turns over relatively quickly and feeds soil biology.',
            },
            {
              term: 'Humus',
              description:
                'Stable, dark organic material formed after extensive decomposition, persisting over long periods.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why organic matter matters',
      body: [
        {
          type: 'paragraph',
          text: 'SOM binds mineral particles into stable aggregates, improving structure and resistance to erosion. It increases water-holding capacity and contributes negatively charged sites that hold nutrient cations, adding to a soil’s cation exchange capacity. As it decomposes, it releases nitrogen, phosphorus, sulfur, and other nutrients, and it provides the energy source that sustains the soil’s microbial and faunal community.',
        },
        {
          type: 'list',
          items: [
            'Improves aggregate stability and reduces erosion risk',
            'Increases water-holding and nutrient-retention capacity',
            'Supplies nutrients gradually as it mineralizes',
            'Feeds the soil food web that drives nutrient cycling and disease suppression',
          ],
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How organic matter is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Standard soil tests estimate organic matter content by loss-on-ignition (weight loss when a sample is combusted at high temperature) or by measuring organic carbon directly and applying a conversion factor. Field observation of soil color, texture, and crumb structure can offer a rough indication, but laboratory analysis provides a more reliable and comparable measure over time.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Organic matter changes slowly, typically over years, so tracking trends requires consistent sampling depth, timing, and location over multiple seasons.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Building and maintaining organic matter',
      body: [
        {
          type: 'paragraph',
          text: 'Organic matter is built by adding organic residues and minimizing losses from oxidation and erosion. Because decomposition continues as long as conditions allow, maintaining or increasing SOM generally requires ongoing inputs rather than a one-time addition.',
        },
        {
          type: 'list',
          items: [
            'Retain crop residues rather than removing or burning them',
            'Grow cover crops to add root and residue inputs between cash crops',
            'Apply compost, manure, or other organic amendments',
            'Reduce tillage intensity and frequency to slow oxidation and protect aggregates',
            'Diversify rotations to vary residue type and rooting pattern',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Building organic matter is a gradual, multi-year process; expectations for change should be realistic and monitored over time rather than assumed from a single practice change.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-organic-carbon' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-biology' },
    { type: 'soil-topic', slug: 'cation-exchange-capacity' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'green-manure' },
    { type: 'farming-system', slug: 'regenerative-agriculture' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'crop', slug: 'alfalfa' },
  ],
  glossaryTerms: ['cover-crop', 'crop-rotation'],
  geographicScope:
    'General soil-science overview applicable worldwide; typical organic-matter levels and management responses vary strongly by climate, texture, and history.',
  climateContext:
    'Warmer, wetter climates generally support faster organic-matter decomposition, requiring greater inputs to maintain a given level.',
  limitations: [
    'Typical organic-matter content varies enormously by climate, texture, and land-use history; no single figure applies broadly.',
    'Changes in organic matter occur slowly and are best tracked with consistent, repeated sampling rather than single measurements.',
    'This entry describes general principles; site-specific management should be guided by local soil testing and agronomic advice.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil organic matter functions and management',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil organic matter and soil health' },
    { sourceId: 'isric', citedFor: 'Global soil organic matter data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Soil organic matter assessment and building practices',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Organic Matter',
    description:
      'Soil organic matter explained: its composition, role in structure and fertility, how it is measured, and practices that build it over time.',
    keywords: [
      'soil organic matter',
      'humus',
      'soil health',
      'organic matter management',
    ],
  },
  structuredData: { article: true },
};
