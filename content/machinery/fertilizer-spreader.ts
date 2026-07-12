import type { MachineryContent } from '@/types/content';

export const fertilizerSpreader: MachineryContent = {
  id: 'machinery-fertilizer-spreader',
  slug: 'fertilizer-spreader',
  contentType: 'machinery',
  title: 'Fertilizer Spreader',
  alternativeNames: ['Broadcast spreader', 'Fertilizer applicator'],
  category: 'Agricultural machinery',
  subcategory: 'Nutrient application equipment',
  machineryClass: 'crop-protection',
  summary:
    'A fertilizer spreader distributes solid granular or pelleted fertilizer across a field, typically by broadcasting it in a fan pattern from spinning discs or metering it through a boom, to supply nutrients to a growing or planned crop.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A fertilizer spreader applies solid fertilizer materials — granular, pelleted, or crystalline products such as urea, compound NPK fertilizers, or lime — across a field at a set rate. Most broadcast spreaders use one or more spinning discs to fling fertilizer outward in a fan-shaped pattern, while boom-type and pneumatic spreaders instead meter product to individual outlets across a wider, more evenly defined working width.',
    },
    {
      type: 'paragraph',
      text: 'Because nutrient placement and rate accuracy directly affect crop response and the risk of nutrient loss to the environment, spreaders are calibrated to the specific fertilizer product being applied, since granule size, density, and shape all influence how far and how evenly material is thrown.',
    },
  ],
  keyFacts: [
    {
      label: 'Primary function',
      value:
        'Distributing solid granular or pelleted fertilizer across a field at a set rate',
    },
    {
      label: 'Key components',
      value:
        'Hopper, metering mechanism, and spinning discs or a spreading boom',
    },
    {
      label: 'Common configurations',
      value:
        'Spinning-disc broadcast spreaders, pneumatic spreaders, and boom spreaders',
    },
    {
      label: 'Applied materials',
      value:
        'Granular NPK fertilizers, urea, lime, and other solid soil amendments',
    },
    {
      label: 'Precision integration',
      value:
        'Often paired with GPS guidance and variable-rate application technology',
    },
    {
      label: 'Operating consideration',
      value:
        'Requires calibration to the specific product’s granule size and density',
    },
  ],
  sections: [
    {
      id: 'what-a-fertilizer-spreader-is',
      heading: 'What a fertilizer spreader is',
      body: [
        {
          type: 'paragraph',
          text: 'A fertilizer spreader is built to move a measured quantity of solid material from a hopper to the soil surface across a working width, distinguishing it from sprayers, which handle liquid products, and from seed drills and planters, which place seed rather than nutrients.',
        },
      ],
    },
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Fertilizer is loaded into a hopper feeding a metering mechanism',
            'The metering system releases product onto spinning discs or into a distribution boom at a controlled rate',
            'Spinning discs fling material outward in a fan pattern, or boom outlets distribute it across the working width',
            'Application rate is adjusted according to ground speed and the target rate per unit area',
          ],
        },
      ],
    },
    {
      id: 'role-in-the-production-cycle',
      heading: 'Role in the production cycle',
      body: [
        {
          type: 'paragraph',
          text: 'Fertilizer spreading typically occurs before planting to build base soil fertility, and again during the season as top-dressing to meet crop nutrient demand at key growth stages, particularly for nitrogen. Accurate, even application supports uniform crop growth and helps limit both under- and over-application relative to crop need.',
        },
        {
          type: 'paragraph',
          text: 'Spreaders are increasingly integrated with precision-agriculture tools, using GPS guidance for accurate pass spacing and variable-rate control to vary application across zones of a field with different soil fertility or yield potential.',
        },
      ],
    },
    {
      id: 'types-and-variations',
      heading: 'Types and variations',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Spinning-disc broadcast spreader',
              description:
                'Uses one or two rotating discs to fling fertilizer in a wide fan pattern; common for general broadcast application.',
            },
            {
              term: 'Pneumatic spreader',
              description:
                'Uses an air stream to carry metered fertilizer to individual outlets across a boom, giving more even distribution across wide widths.',
            },
            {
              term: 'Boom spreader',
              description:
                'Distributes material through a series of outlets along a boom rather than by centrifugal throw.',
            },
          ],
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Uneven fertilizer distribution — from poor calibration, wind drift, or mismatched settings for a given product — can create visible striping in crop growth and contributes to nutrient loss where product lands off-target, including near watercourses or field margins.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Application rates and timing are crop-, soil-, and product-specific; nutrient management plans and local agronomic guidance should inform rates rather than a single fixed setting.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'machinery', slug: 'sprayer' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'tractor' },
  ],
  connections: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'fertilizer', slug: 'agricultural-lime' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'farming-system', slug: 'precision-agriculture' },
  ],
  geographicScope:
    'General overview of fertilizer spreaders as used in mechanised nutrient application worldwide. Equipment scale and configuration vary by farm size and region.',
  limitations: [
    'This entry describes spreader function and types in general terms; it does not specify application rates, which are crop-, soil-, and product-specific.',
    'Environmental and regulatory limits on fertilizer application timing and rate vary by region and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'iastate-extension',
      citedFor: 'Fertilizer spreader calibration and application accuracy',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Nutrient application equipment research context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Nutrient management and application guidance context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of fertilizer application equipment in crop production',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Fertilizer Spreader',
    description:
      'Fertilizer spreaders explained: how spinning-disc, pneumatic, and boom designs distribute granular fertilizer, calibration needs, and their production role.',
    keywords: [
      'fertilizer spreader',
      'broadcast spreader',
      'nutrient application',
      'granular fertilizer',
    ],
  },
  structuredData: { article: true },
};
