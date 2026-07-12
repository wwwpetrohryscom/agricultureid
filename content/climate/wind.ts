import type { ClimateContent } from '@/types/content';

export const wind: ClimateContent = {
  id: 'climate-wind',
  slug: 'wind',
  contentType: 'climate',
  title: 'Wind',
  climateClass: 'stress',
  category: 'Climate factor',
  subcategory: 'Weather-related crop stress',
  summary:
    'Wind affects agriculture in multiple ways — raising evaporative demand and evapotranspiration, risking lodging or physical damage to crops, driving wind erosion on exposed soil, and, at extreme speeds, causing direct structural damage to plants and farm infrastructure.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Moderate wind plays some beneficial agronomic roles: it supports pollination for wind-pollinated crops and can reduce disease pressure by drying leaf surfaces more quickly after rain or dew. At the same time, wind increases the rate of evapotranspiration by removing humid air from around leaves, increases mechanical stress that can cause lodging in top-heavy or weak-stemmed crops, and drives erosion of loose, dry, or bare soil.',
    },
    {
      type: 'paragraph',
      text: 'Extreme wind events, such as storms, can cause direct physical damage, including broken stems, defoliation, and structural damage to greenhouses or trellising. Chronic wind exposure on open, exposed sites can also stunt or deform plant growth over time.',
    },
  ],
  keyFacts: [
    {
      label: 'Core roles',
      value:
        'Increases evapotranspiration, can cause lodging or mechanical damage, and drives wind erosion of exposed soil',
    },
    {
      label: 'Beneficial roles',
      value:
        'Supports pollination for wind-pollinated crops and can reduce leaf-wetness duration, lowering some disease pressure',
    },
    {
      label: 'Crop risk',
      value:
        'Top-heavy or weak-stemmed crops such as cereals are prone to wind-related lodging',
    },
    {
      label: 'Soil risk',
      value:
        'Loose, dry, or bare soil is most vulnerable to wind erosion, especially with limited vegetative cover',
    },
    {
      label: 'Extreme events',
      value:
        'Storms can cause direct structural damage to plants, trellising, and greenhouse structures',
    },
    {
      label: 'Common mitigation',
      value:
        'Windbreaks, shelterbelts, and maintaining vegetative cover are common wind-management practices',
    },
  ],
  sections: [
    {
      id: 'how-wind-affects-crops',
      heading: 'How wind affects crops',
      body: [
        {
          type: 'list',
          items: [
            'Raises evapotranspiration by removing humid air from around leaves',
            'Creates mechanical stress that can cause lodging in tall or weak-stemmed crops',
            'Aids pollination for wind-pollinated species',
            'Can reduce leaf-wetness duration and some associated disease pressure',
            'Can cause direct physical damage to plants and structures during storms',
          ],
        },
      ],
    },
    {
      id: 'wind-erosion',
      heading: 'Wind erosion',
      body: [
        {
          type: 'paragraph',
          text: 'Loose, dry, or poorly covered soils are most vulnerable to wind erosion. Over time, wind erosion can remove topsoil and organic matter, reducing soil fertility if not managed through cover or windbreaks.',
        },
      ],
    },
    {
      id: 'managing-wind-exposure',
      heading: 'Managing wind exposure',
      body: [
        {
          type: 'list',
          items: [
            'Windbreaks or shelterbelts using trees or shrubs to reduce wind speed at the field edge',
            'Maintaining crop residue or cover crops to protect soil from wind erosion',
            'Choosing wind-tolerant or shorter-statured varieties in exposed sites',
            'Structural reinforcement for trellised crops or greenhouse structures in windy regions',
          ],
        },
      ],
    },
    {
      id: 'wind-and-water-demand',
      heading: 'Wind and water demand',
      body: [
        {
          type: 'paragraph',
          text: 'Windy conditions increase atmospheric demand for water by accelerating evapotranspiration, which influences irrigation scheduling: fields exposed to persistent wind may require more frequent or larger irrigation applications to meet the same crop water demand as a sheltered field.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Wind is one of several weather factors, alongside temperature, humidity, and solar radiation, that drive evapotranspiration.',
        },
      ],
    },
    {
      id: 'variability-by-region-and-season',
      heading: 'Variability by region and season',
      body: [
        {
          type: 'paragraph',
          text: 'Wind exposure, prevailing direction, and storm risk vary greatly by region, topography, and season. This entry gives no universal wind-speed thresholds for crop damage or erosion risk, since these depend on local conditions and crop characteristics.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'hail' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'climate', slug: 'temperature' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'climate', slug: 'hail' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  glossaryTerms: ['evapotranspiration'],
  geographicScope:
    'Wind effects on agriculture occur worldwide; prevailing wind patterns, storm risk, and typical intensity vary greatly by region and topography.',
  limitations: [
    'This entry describes general agronomic effects of wind; it gives no region-specific wind-speed thresholds or erosion rates.',
    'It does not forecast storm risk for any specific location or season.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Wind measurement and meteorological classification',
    },
    { sourceId: 'noaa', citedFor: 'Storm and wind-risk monitoring' },
    {
      sourceId: 'fao',
      citedFor: 'Wind effects on crop water demand and management',
    },
    { sourceId: 'usda-nrcs', citedFor: 'Wind erosion control practices' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Wind',
    description:
      'Wind explained: its effects on evapotranspiration, crop lodging, pollination, and soil erosion, and common ways growers manage wind exposure.',
    keywords: ['wind', 'wind erosion', 'crop lodging', 'evapotranspiration'],
  },
  structuredData: { article: true },
};
