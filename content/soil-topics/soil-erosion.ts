import type { SoilTopicContent } from '@/types/content';

export const soilErosion: SoilTopicContent = {
  id: 'soil-topic-soil-erosion',
  slug: 'soil-erosion',
  contentType: 'soil-topic',
  title: 'Soil Erosion',
  topicClass: 'physical',
  alternativeNames: ['Water erosion', 'Wind erosion'],
  category: 'Soil physical process',
  subcategory: 'Land degradation',
  summary:
    'Soil erosion is the detachment and removal of topsoil by water or wind, a process accelerated by cultivation, sparse cover, and slope, that progressively reduces topsoil depth, organic matter, and long-term productivity.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Soil erosion occurs when rainfall, runoff, or wind detaches soil particles from the surface and transports them elsewhere, most severely on bare, sloping, or disturbed land. Water erosion dominates in humid and sub-humid regions, while wind erosion is most significant on flat, dry, and sparsely vegetated land.',
    },
    {
      type: 'paragraph',
      text: 'Some background erosion occurs naturally on any exposed land surface, but cultivation, overgrazing, and vegetation removal typically accelerate erosion well beyond the rate at which new soil forms, making accelerated erosion a slow but cumulative threat to long-term land productivity.',
    },
  ],
  keyFacts: [
    {
      label: 'Main forms',
      value: 'Water erosion (sheet, rill, gully) and wind erosion',
    },
    {
      label: 'Key drivers',
      value:
        'Bare or sparse surface cover, slope, rainfall intensity, wind exposure',
    },
    {
      label: 'Assessed by',
      value:
        'Field observation, rill/gully surveys, erosion-prediction models, remote sensing',
    },
    {
      label: 'Consequences',
      value:
        'Loss of topsoil, organic matter, and nutrients; reduced long-term productivity',
    },
    {
      label: 'Off-site effects',
      value:
        'Sediment and nutrient delivery to waterways; dust in wind-erosion-prone areas',
    },
    {
      label: 'Managed by',
      value:
        'Residue cover, reduced tillage, contour and terrace practices, windbreaks',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil erosion is',
      body: [
        {
          type: 'paragraph',
          text: 'Water erosion begins with raindrop impact detaching soil particles, which are then carried by surface runoff, progressing from diffuse sheet erosion to concentrated rills and, if unchecked, to larger gullies. Wind erosion instead lifts and transports fine, dry soil particles across exposed, unprotected surfaces.',
        },
        {
          type: 'list',
          items: [
            'Sheet erosion: relatively uniform, thin removal of surface soil across a slope',
            'Rill erosion: small, concentrated channels cut by converging runoff',
            'Gully erosion: larger, more permanent channels formed by sustained concentrated flow',
            'Wind erosion: detachment and transport of dry, exposed soil particles by wind',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why erosion matters',
      body: [
        {
          type: 'paragraph',
          text: 'Because topsoil concentrates organic matter, nutrients, and biological activity relative to subsoil, its loss disproportionately reduces a field’s productive capacity, often over a timescale of years to decades rather than being immediately obvious in a single season. Eroded sediment and the nutrients it carries can also degrade downstream waterways.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How erosion is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Erosion is assessed through direct field observation of rills, gullies, and exposed subsoil or plant roots, through erosion-prediction models that estimate soil loss from rainfall, slope, cover, and management factors, and increasingly through remote sensing and elevation data that can detect changes in land surface over time.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Erosion-prediction models estimate average expected soil loss under given conditions; actual loss in any single storm or season can differ substantially.',
        },
      ],
    },
    {
      id: 'influencing-factors',
      heading: 'Factors influencing erosion risk',
      body: [
        {
          type: 'table',
          caption:
            'General factors affecting erosion risk (not universal thresholds)',
          columns: ['Factor', 'General influence'],
          rows: [
            [
              'Surface cover',
              'Vegetation or residue cover generally reduces both water and wind erosion substantially',
            ],
            [
              'Slope steepness and length',
              'Steeper, longer slopes generally increase water erosion risk',
            ],
            [
              'Soil texture and structure',
              'Susceptibility varies; some silty and sandy soils are notably erosion-prone',
            ],
            [
              'Rainfall intensity / wind exposure',
              'More intense rainfall or greater wind exposure generally increases erosion risk',
            ],
          ],
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing and preventing erosion',
      body: [
        {
          type: 'paragraph',
          text: 'Erosion control generally centres on keeping the soil surface covered and reducing the speed or concentration of water and wind at the surface, using a combination of vegetative, structural, and management practices suited to the specific landscape and cropping system.',
        },
        {
          type: 'list',
          items: [
            'Maintain crop residue or cover crops on the surface between cash crops',
            'Reduce tillage intensity to preserve surface cover and aggregate stability',
            'Use contour farming, terracing, or grassed waterways on sloping land',
            'Establish windbreaks or shelterbelts in wind-erosion-prone areas',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Effective erosion control depends on matching practices to local slope, soil, rainfall, and wind conditions; there is no single universal solution.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-crusting' },
  ],
  connections: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'silt-soil' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'farming-system', slug: 'contour-farming' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'wind' },
  ],
  glossaryTerms: ['cover-crop', 'crop-rotation'],
  geographicScope:
    'General soil-science overview applicable worldwide; the balance of water versus wind erosion and the severity of risk vary strongly by climate, topography, and land use.',
  climateContext:
    'Intense rainfall events drive water erosion, while dry, windy conditions on exposed soil drive wind erosion; regional climate strongly shapes which form dominates.',
  limitations: [
    'Erosion-prediction models estimate average expected soil loss and do not capture the variability of individual storms or seasons.',
    'Susceptibility depends on local soil texture, slope, and climate and cannot be generalized to fixed rules.',
    'This entry describes general principles; site-specific erosion control should be guided by local conservation planning.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Soil erosion processes and control practices',
    },
    { sourceId: 'fao-soils', citedFor: 'Soil erosion and land degradation' },
    { sourceId: 'isric', citedFor: 'Global soil erosion risk data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Erosion assessment and conservation guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Erosion',
    description:
      'Soil erosion explained: water and wind erosion processes, why topsoil loss matters, how it is assessed, and practices that reduce erosion risk.',
    keywords: [
      'soil erosion',
      'water erosion',
      'wind erosion',
      'erosion control',
    ],
  },
  structuredData: { article: true },
};
