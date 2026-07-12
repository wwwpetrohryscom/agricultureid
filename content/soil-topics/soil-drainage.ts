import type { SoilTopicContent } from '@/types/content';

export const soilDrainage: SoilTopicContent = {
  id: 'soil-topic-soil-drainage',
  slug: 'soil-drainage',
  contentType: 'soil-topic',
  title: 'Soil Drainage',
  topicClass: 'physical',
  alternativeNames: ['Internal drainage', 'Soil permeability'],
  category: 'Soil physical property',
  subcategory: 'Water movement',
  summary:
    'Soil drainage describes the rate and pattern at which water moves through and out of the soil profile. It shapes aeration, disease risk, workability, and which crops a soil can reliably support.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Drainage refers to how readily water infiltrates the soil surface, moves through the profile, and is removed by gravity, evaporation, or plant uptake. It is strongly shaped by texture, structure, slope, and the presence of restrictive layers or a shallow water table.',
    },
    {
      type: 'paragraph',
      text: 'Soils range from excessively drained, where water passes through quickly and little is retained, to poorly drained, where water remains near the surface for extended periods. Both extremes create management challenges, though of different kinds.',
    },
  ],
  keyFacts: [
    {
      label: 'Describes',
      value: 'Rate and pattern of water movement through the soil profile',
    },
    {
      label: 'Poorly drained soils risk',
      value: 'Waterlogging, oxygen deficiency, root disease',
    },
    {
      label: 'Assessed via',
      value:
        'Soil survey drainage class, water-table monitoring, infiltration/percolation tests',
    },
    {
      label: 'Improved by',
      value:
        'Subsurface tile drains, raised beds, better structure, relief of compaction',
    },
    {
      label: 'Key influences',
      value: 'Texture, structure, slope, and underlying restrictive layers',
    },
    {
      label: 'Excessively drained soils risk',
      value: 'Drought stress and nutrient leaching',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What soil drainage is',
      body: [
        {
          type: 'paragraph',
          text: 'Drainage is a function of how much of a soil’s pore space consists of larger, freely draining pores versus smaller pores that retain water, combined with the depth to any restrictive layer or water table. Soil surveys classify natural drainage into a spectrum from excessively drained to very poorly drained.',
        },
        {
          type: 'list',
          items: [
            'Surface drainage: how quickly water leaves the land surface, influenced by slope and surface roughness',
            'Internal drainage: how readily water moves down through the soil profile, influenced by texture, structure, and layering',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why drainage matters',
      body: [
        {
          type: 'paragraph',
          text: 'Adequate drainage keeps oxygen available to roots and soil organisms; without it, saturated soil becomes anaerobic, favoring conditions for root-rot organisms and other waterlogging-related disorders and limiting root respiration. Poor drainage also narrows the window for field operations and can delay planting or harvest. At the other extreme, excessively drained soils can leave crops vulnerable to drought stress and can allow nutrients to leach below the root zone.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Some crops, such as rice, are specifically adapted to grow in saturated or flooded conditions, illustrating that drainage requirements are crop-specific rather than universal.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How drainage is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'National and regional soil surveys assign a natural drainage class to mapped soils based on profile characteristics such as mottling (a sign of periodic saturation), depth to a water table, and texture. In the field, drainage can also be evaluated with infiltration or percolation tests, or simply by observing how quickly standing water disappears after rainfall or irrigation.',
        },
      ],
    },
    {
      id: 'managing-it',
      heading: 'Managing drainage',
      body: [
        {
          type: 'paragraph',
          text: 'Where natural drainage is inadequate for the intended use, growers may install subsurface tile drains or surface ditches to remove excess water, or use raised beds to lift the root zone above a shallow water table. Improving structure and organic matter, and relieving compaction, can also improve internal drainage over time.',
        },
        {
          type: 'list',
          items: [
            'Install subsurface tile drainage or surface ditches where poor drainage limits production, following local engineering and regulatory guidance',
            'Use raised beds in areas with persistently high water tables',
            'Build organic matter and relieve compaction to improve internal drainage',
            'Match irrigation method and scheduling to the soil’s natural drainage rate',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Drainage projects can have downstream and regulatory implications; installation should follow local engineering standards and water-management rules.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'soil-compaction' },
    { type: 'soil-topic', slug: 'soil-structure' },
    { type: 'soil-topic', slug: 'soil-salinity' },
  ],
  connections: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'damping-off' },
    { type: 'irrigation-method', slug: 'subsurface-irrigation' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'crop', slug: 'rice' },
  ],
  glossaryTerms: ['soil-texture', 'evapotranspiration'],
  geographicScope:
    'General soil-science overview applicable worldwide; natural drainage class and drainage needs vary with local landscape position, geology, and climate.',
  climateContext:
    'Rainfall pattern and intensity, together with evapotranspiration, determine how often and how severely drainage limitations are expressed.',
  limitations: [
    'Drainage class from soil surveys describes typical conditions and may not capture local variation, altered drainage, or recent land changes.',
    'Drainage improvement measures such as tile drainage are engineering interventions that require site-specific design and often regulatory approval.',
    'Crop drainage requirements vary widely; a condition unsuitable for one crop may be acceptable or beneficial for another.',
  ],
  sourceReferences: [
    { sourceId: 'usda-nrcs', citedFor: 'Soil drainage classes and assessment' },
    { sourceId: 'fao-soils', citedFor: 'Soil drainage and water movement' },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Drainage management in agriculture',
    },
    { sourceId: 'isric', citedFor: 'Global soil drainage and property data' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Soil Drainage',
    description:
      'Soil drainage explained: how water moves through soil, why it affects roots and disease risk, drainage classes, and improvement options like tile drains.',
    keywords: [
      'soil drainage',
      'waterlogging',
      'tile drainage',
      'drainage class',
    ],
  },
  structuredData: { article: true },
};
