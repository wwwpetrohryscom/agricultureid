import type { SoilTopicContent } from '@/types/content';

export const fieldCapacity: SoilTopicContent = {
  id: 'soil-topic-field-capacity',
  slug: 'field-capacity',
  contentType: 'soil-topic',
  title: 'Field Capacity',
  topicClass: 'physical',
  alternativeNames: ['Field water capacity', 'Drained upper limit'],
  category: 'Soil physical property',
  subcategory: 'Soil water',
  summary:
    'Field capacity is the amount of water a soil holds after it has been saturated and free drainage has largely stopped. It represents the practical upper limit of water the soil can store for crops and is a key reference point in irrigation scheduling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Field capacity describes the water content of a soil once it has been thoroughly wetted and the rapid downward drainage of water under gravity has effectively ceased, typically a day or two after heavy rain or irrigation on a freely draining soil. At this point the large pores have drained and the remaining water is held in smaller pores where plants can still access much of it.',
    },
    {
      type: 'paragraph',
      text: 'Field capacity is best understood as a practical reference rather than a sharp physical threshold, because drainage slows gradually rather than stopping abruptly. It is often approximated in the laboratory by the water a soil retains at a low suction, conventionally around one-third of an atmosphere (roughly minus thirty-three kilopascals) for many soils, though the exact value varies with texture.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value:
        'Water held after saturation once rapid gravitational drainage has largely stopped',
    },
    {
      label: 'Represents',
      value: 'The practical upper limit of water a soil stores for crops',
    },
    {
      label: 'Laboratory approximation',
      value:
        'Water retained at a low suction, conventionally near one-third atmosphere for many soils',
    },
    {
      label: 'Texture effect',
      value:
        'Fine-textured and organic-rich soils hold more water at field capacity than sandy soils',
    },
    {
      label: 'Paired with',
      value: 'The permanent wilting point to define plant-available water',
    },
    {
      label: 'Why it matters',
      value:
        'Sets the refill target in irrigation scheduling and defines storable soil water',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What field capacity is',
      body: [
        {
          type: 'paragraph',
          text: 'After a soil is saturated, water first drains rapidly from the large pores under gravity, then progressively more slowly. Field capacity is the water content reached when this rapid drainage has largely ended and the soil holds about as much water as it can retain against gravity. Above field capacity, excess water occupies pores that would otherwise hold air, so soils wetter than field capacity are poorly aerated.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Saturation',
              description:
                'The state in which all pore space is filled with water and aeration is minimal.',
            },
            {
              term: 'Field capacity',
              description:
                'Water content after rapid gravitational drainage has largely stopped; the practical upper storage limit.',
            },
            {
              term: 'Permanent wilting point',
              description:
                'The water content at which plants can no longer extract water and wilt irreversibly.',
            },
          ],
        },
      ],
    },
    {
      id: 'what-affects-it',
      heading: 'What affects field capacity',
      body: [
        {
          type: 'paragraph',
          text: 'The water held at field capacity depends mainly on texture, structure, and organic matter. Fine-textured soils with abundant small pores retain much more water than coarse, sandy soils, and organic matter increases water retention. Because field capacity reflects the balance of pore sizes, structural changes such as compaction also alter it.',
        },
        {
          type: 'list',
          items: [
            'Texture: clays and loams hold much more water at field capacity than sands',
            'Organic matter increases water retention and raises field capacity',
            'Structure and pore size distribution shape how much water is held against gravity',
            'Field capacity is a soil property; the actual water content fluctuates with weather and crop use',
          ],
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why field capacity matters',
      body: [
        {
          type: 'paragraph',
          text: 'Field capacity is the upper reference point for how much water the soil can usefully store. Together with the permanent wilting point, it defines the plant-available water in the root zone. In irrigation scheduling, field capacity is commonly the target to which the root zone is refilled, and irrigating well beyond it wastes water to drainage and can waterlog the soil.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Field capacity is a practical convention, not an exact fixed value, because drainage slows gradually and the water content keeps declining slowly for some time after rapid drainage ends.',
        },
      ],
    },
    {
      id: 'using-it',
      heading: 'Using field capacity in management',
      body: [
        {
          type: 'paragraph',
          text: 'Growers and irrigation planners use field capacity as the full point of the soil water store. Monitoring how far soil water has fallen below field capacity, and refilling before the crop is stressed, is central to efficient irrigation. Because the value depends on texture and structure, it is best estimated for the specific soil rather than assumed.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'soil-topic', slug: 'available-water-capacity' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'waterlogging' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-porosity' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'evapotranspiration' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  glossaryTerms: ['soil-texture', 'evapotranspiration'],
  geographicScope:
    'Global. Field capacity is a universal soil water concept, but the water content it represents depends on local soil texture, structure, and organic matter.',
  limitations: [
    'Field capacity is a practical convention rather than a sharp physical threshold, since drainage slows gradually rather than stopping abruptly.',
    'Laboratory suction values used to approximate it vary with texture and do not perfectly match field drainage behaviour.',
    'The value must be estimated for the specific soil; a general figure cannot be assumed for a given field.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Field capacity, available water, and soil water concepts',
    },
    {
      sourceId: 'fao-land-water',
      citedFor: 'Field capacity in irrigation water management',
    },
    { sourceId: 'isric', citedFor: 'Global soil water retention data' },
    { sourceId: 'fao-soils', citedFor: 'Soil water storage and drainage' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Field Capacity',
    description:
      'Field capacity explained: the water a soil holds after gravitational drainage, how texture affects it, and why it is the refill target for irrigation.',
    keywords: [
      'field capacity',
      'soil water storage',
      'drained upper limit',
      'irrigation scheduling',
    ],
  },
  structuredData: { article: true },
};
