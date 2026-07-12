import type { SoilContent } from '@/types/content';

export const siltSoil: SoilContent = {
  id: 'soil-silt',
  slug: 'silt-soil',
  contentType: 'soil',
  title: 'Silt Soil',
  alternativeNames: ['Silty soil', 'Fine-medium textured soil'],
  category: 'Soil texture',
  subcategory: 'Fine-to-medium textured mineral soil',
  texture: 'Fine-medium (dominated by silt-sized particles)',
  summary:
    'Silt soil is a fine-to-medium textured mineral soil dominated by silt-sized particles, intermediate in size between sand and clay. It is often fertile and holds moisture well but is prone to surface capping, compaction, and erosion.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Silt soil is defined by a high proportion of silt-sized particles, which are smaller than sand but larger than clay. This intermediate particle size gives silt soils a smooth, floury feel and properties that combine some characteristics of both sand and clay, without matching the extremes of either.',
    },
    {
      type: 'paragraph',
      text: 'Silt soils are frequently found in river floodplains and areas of wind-deposited (loess) material, where they can be naturally fertile. However, their small, easily dislodged particles make them vulnerable to surface sealing, compaction, and erosion when poorly managed.',
    },
  ],
  keyFacts: [
    { label: 'Texture class', value: 'Fine-medium (silt and silt loams)' },
    {
      label: 'Dominant particle',
      value: 'Silt (intermediate between sand and clay in size)',
    },
    {
      label: 'Drainage',
      value: 'Moderate; can be slow when surface capping or compaction occurs',
    },
    {
      label: 'Water holding',
      value: 'High; often described as fertile and moisture-retentive',
    },
    {
      label: 'Nutrient retention',
      value:
        'Moderate cation exchange capacity, often higher where organic matter is present',
    },
    {
      label: 'Erosion risk',
      value:
        'High; fine particles are easily detached and transported by water and wind',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Soil texture describes the relative proportions of sand, silt, and clay particles. Silt soils are those in which silt-sized particles dominate physical behaviour. Because silt particles are small but less chemically active than clay, silt soils can hold considerable moisture while still being more prone to structural problems than well-aggregated loams.',
        },
      ],
    },
    {
      id: 'properties',
      heading: 'Physical and chemical properties',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Water retention',
              description:
                'High total storage and generally good availability to plants, contributing to the natural fertility often associated with silt soils.',
            },
            {
              term: 'Aeration',
              description:
                'Moderate; fine, closely packed particles can restrict air movement, particularly if the surface becomes compacted or capped.',
            },
            {
              term: 'Nutrient holding',
              description:
                'Moderate cation exchange capacity on its own, though silt soils with additional organic matter or clay content can retain nutrients more effectively.',
            },
            {
              term: 'Structure',
              description:
                'Silt soils have weak natural aggregation and can slake and seal at the surface when exposed to raindrop impact, reducing infiltration.',
            },
          ],
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Managing silt soils centres on protecting the soil surface and structure from capping, compaction, and erosion, while taking advantage of their generally good fertility and water retention.',
        },
        {
          type: 'list',
          items: [
            'Maintain surface cover or residue to protect against raindrop impact and surface sealing',
            'Add organic matter to improve aggregation and reduce susceptibility to capping',
            'Avoid cultivation and traffic on wet silt soils, which compact easily',
            'Use erosion-control measures such as contour work or cover crops on sloped ground',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'Silt soils are among the most erodible textures because their fine, low-cohesion particles are easily detached by water and wind. Maintaining surface cover is a key protective measure.',
        },
      ],
    },
    {
      id: 'crop-suitability',
      heading: 'Crop suitability',
      body: [
        {
          type: 'paragraph',
          text: 'Well-managed silt soils are often fertile and productive, suiting crops such as maize and wheat that benefit from good moisture retention and nutrient supply. Because surface capping can impede seedling emergence and infiltration, management practices that protect soil structure are particularly important for reliable establishment and yield.',
        },
      ],
    },
    {
      id: 'assessment',
      heading: 'Assessing a silt soil',
      body: [
        {
          type: 'paragraph',
          text: 'Texture can be estimated in the field by feel — silt soils feel smooth or floury, similar to flour, rather than gritty like sand or sticky like clay — and confirmed by laboratory particle-size analysis. Soil survey information and local testing provide the most reliable basis for erosion-control and fertility decisions.',
        },
      ],
    },
  ],
  suitedCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
  ],
  relatedTopics: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  glossaryTerms: ['soil-texture', 'macronutrient', 'cover-crop'],
  geographicScope:
    'General soil-science overview applicable worldwide; local soils vary and should be assessed directly.',
  climateContext:
    'Silt soil behaviour interacts strongly with climate; heavy or intense rainfall increases the risk of surface capping and erosion compared with gentler rainfall regimes.',
  limitations: [
    'Individual fields vary; texture classes are general descriptions, not substitutes for local soil survey or testing.',
    'Erosion and capping risk depend on slope, rainfall intensity, and cover, and cannot be generalised without local assessment.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil texture, erosion risk, and management',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil function and classification context',
    },
    { sourceId: 'isric', citedFor: 'Global soil properties and information' },
    { sourceId: 'usda-plants', citedFor: 'Crop–soil suitability context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Silt Soil',
    description:
      'How silt soil behaves: fine texture, high fertility and water retention, surface capping and erosion risk, management, and crop suitability.',
    keywords: ['silt soil', 'soil texture', 'soil erosion', 'soil fertility'],
  },
  structuredData: { article: true },
};
