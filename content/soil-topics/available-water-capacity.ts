import type { SoilTopicContent } from '@/types/content';

export const availableWaterCapacity: SoilTopicContent = {
  id: 'soil-topic-available-water-capacity',
  slug: 'available-water-capacity',
  contentType: 'soil-topic',
  title: 'Available Water Capacity',
  topicClass: 'physical',
  alternativeNames: ['Plant available water', 'Available water content', 'AWC'],
  category: 'Soil physical property',
  subcategory: 'Soil water',
  summary:
    'Available water capacity is the portion of soil water that plants can actually use, defined as the water held between field capacity and the permanent wilting point. It sets how much of a soil water store is useful to crops and how often irrigation or rainfall is needed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Available water capacity is the amount of water a soil can store that is accessible to plant roots. It is defined as the difference between the water held at field capacity, the practical upper storage limit, and the water remaining at the permanent wilting point, below which plants can no longer extract water. Water outside this range is either lost to drainage or held too tightly for plants to use.',
    },
    {
      type: 'paragraph',
      text: 'Available water capacity is one of the most useful soil properties for water management because it links a soil physical characteristic directly to crop water supply. A soil with a large available water capacity can buffer crops through dry spells, while a soil with a small one must be rewetted more frequently to avoid water stress.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value:
        'Water held between field capacity and the permanent wilting point',
    },
    {
      label: 'Also called',
      value: 'Plant-available water or available water content',
    },
    {
      label: 'Largest in',
      value:
        'Medium-textured soils such as loams and silt loams, and organic-rich soils',
    },
    {
      label: 'Smallest in',
      value:
        'Coarse sands, which drain freely, and heavy clays, which hold water tightly',
    },
    {
      label: 'Scales with',
      value:
        'Rooting depth: total available water depends on how deep roots can extract it',
    },
    {
      label: 'Why it matters',
      value:
        'Determines drought buffering and how often irrigation or rainfall is needed',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What available water capacity is',
      body: [
        {
          type: 'paragraph',
          text: 'Not all the water a soil holds is usable by plants. Above field capacity, water drains away; below the permanent wilting point, the remaining water is bound so tightly to soil particles that roots cannot extract it. Available water capacity is the band in between, the water that is both retained by the soil and extractable by plants, and it is what supports crop growth between rainfall or irrigation events.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Field capacity',
              description:
                'The upper limit of the available range: water held after rapid gravitational drainage.',
            },
            {
              term: 'Permanent wilting point',
              description:
                'The lower limit: the water content below which plants wilt and cannot recover.',
            },
            {
              term: 'Available water capacity',
              description:
                'The water held between these two limits, accessible to plant roots.',
            },
          ],
        },
      ],
    },
    {
      id: 'texture-and-depth',
      heading: 'Texture, organic matter, and rooting depth',
      body: [
        {
          type: 'paragraph',
          text: 'Available water capacity per unit depth is greatest in medium-textured soils such as loams and silt loams, which combine good retention with enough larger pores to release water to roots. Sandy soils store little available water because they drain freely, while heavy clays hold abundant water but much of it is bound too tightly to be extracted. Organic matter increases available water, and the total available water in a field also depends on how deep roots can reach.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'A deep, medium-textured soil can store enough available water to carry a crop through an extended dry period, whereas a shallow or sandy soil provides a much smaller buffer.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why it matters',
      body: [
        {
          type: 'paragraph',
          text: 'Available water capacity governs how resilient a crop is to dry spells and how an irrigation system should be managed. Soils with low available water capacity require lighter, more frequent watering, while soils with high capacity can be irrigated less often with larger applications. It is a core input to irrigation scheduling and to assessing the drought risk of a field.',
        },
      ],
    },
    {
      id: 'using-it',
      heading: 'Using available water capacity',
      body: [
        {
          type: 'list',
          items: [
            'Estimate available water capacity from soil texture, structure, and organic matter, ideally verified for the specific soil',
            'Combine it with rooting depth to gauge the total water a crop can draw on between rewettings',
            'Use it to set irrigation frequency and application depth, matching lighter and more frequent watering to low-capacity soils',
            'Build organic matter to modestly increase available water and improve drought buffering over time',
          ],
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'field-capacity' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-porosity' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  glossaryTerms: ['soil-texture', 'evapotranspiration'],
  geographicScope:
    'Global. The concept applies universally, but the available water a soil stores depends on local texture, structure, organic matter, and rooting depth.',
  limitations: [
    'Available water capacity is an estimate bounded by two practical reference points that themselves vary with texture and are not sharp thresholds.',
    'Not all water within the available range is equally easy to extract; crops often experience stress before the soil reaches the wilting point.',
    'Total available water depends on rooting depth, which varies by crop, soil layering, and constraints such as compaction.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Available water capacity and plant-available water',
    },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Available water in irrigation planning',
    },
    { sourceId: 'isric', citedFor: 'Global available water capacity data' },
    { sourceId: 'fao-soils', citedFor: 'Soil water storage and availability' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Available Water Capacity',
    description:
      'Available water capacity explained: the plant-usable water between field capacity and wilting point, how texture and depth set it, and why it matters.',
    keywords: [
      'available water capacity',
      'plant available water',
      'field capacity wilting point',
      'soil water storage',
    ],
  },
  structuredData: { article: true },
};
