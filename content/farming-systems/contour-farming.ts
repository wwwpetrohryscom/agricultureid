import type { FarmingSystemContent } from '@/types/content';

export const contourFarming: FarmingSystemContent = {
  id: 'system-contour-farming',
  slug: 'contour-farming',
  contentType: 'farming-system',
  title: 'Contour Farming',
  systemClass: 'production-approach',
  alternativeNames: ['Contour cultivation', 'Contour cropping'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'Contour farming plants and cultivates crops in rows that follow the natural contour lines of sloped land rather than running up and down the slope, slowing water runoff and reducing soil erosion.',
  introduction: [
    {
      type: 'paragraph',
      text: 'On sloped fields, rows planted across the slope, following its contour lines, act as small barriers that slow the velocity of surface runoff, allowing more water to infiltrate and trapping sediment before it moves downslope. This contrasts with rows planted up and down the slope, which can channel water and accelerate erosion.',
    },
    {
      type: 'paragraph',
      text: 'Contour farming is often combined with other erosion-control practices, such as strip cropping, terracing, or grassed waterways, on steeper terrain. Its effectiveness depends on slope gradient and length, soil type, and rainfall intensity, so it is one tool among several for managing erosion risk rather than a complete solution on its own.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        "Field operations and row orientation follow the land's contour lines rather than the slope direction",
    },
    {
      label: 'Primary purpose',
      value:
        'Slows surface runoff velocity to reduce soil erosion and increase water infiltration',
    },
    {
      label: 'Best suited to',
      value:
        'Gently to moderately sloped land; effectiveness declines on steep or very long slopes without additional measures',
    },
    {
      label: 'Often combined with',
      value:
        'Strip cropping, terracing, grassed waterways, or cover crops on steeper terrain',
    },
    {
      label: 'Equipment implication',
      value:
        'Requires field layout and machinery operation planned around contour lines rather than straight boundaries',
    },
    {
      label: 'History',
      value:
        'One of the longest-standing recognized soil-conservation practices on sloped cropland',
    },
  ],
  sections: [
    {
      id: 'how-contour-farming-works',
      heading: 'How contour farming works',
      body: [
        {
          type: 'paragraph',
          text: 'Fields are surveyed or mapped to identify contour lines, and tillage, planting, and cultivation operations follow those lines rather than farm boundaries or the fall of the slope.',
        },
        {
          type: 'list',
          items: [
            'Rows planted along the contour create small ridges and furrows across the slope',
            'These ridges act as mini-barriers that slow runoff and encourage infiltration',
            'Contour lines are typically established using surveying equipment or elevation data',
          ],
        },
      ],
    },
    {
      id: 'when-it-is-most-effective',
      heading: 'When it is most effective',
      body: [
        {
          type: 'paragraph',
          text: 'Contour farming provides the most erosion-control benefit on gentle to moderate slopes; on steep or long slopes, runoff can still gain enough volume and speed to overtop contour ridges unless combined with additional measures.',
        },
        {
          type: 'table',
          caption: 'Typical erosion-control approach by slope condition',
          columns: ['Slope condition', 'Typical approach'],
          rows: [
            [
              'Gentle slopes',
              'Contour farming alone may substantially reduce erosion',
            ],
            [
              'Moderate slopes',
              'Often combined with strip cropping or cover crops',
            ],
            [
              'Steep or long slopes',
              'Usually requires terracing or additional structural measures',
            ],
          ],
        },
      ],
    },
    {
      id: 'principles-and-practices',
      heading: 'Principles and practices',
      body: [
        {
          type: 'list',
          items: [
            'Surveying and marking contour lines before establishing row patterns',
            'Adapting row spacing and field layout to the mapped contours',
            'Maintaining vegetative cover or residue to reinforce runoff control',
            'Combining with reduced tillage or cover crops for added erosion protection',
          ],
        },
      ],
    },
    {
      id: 'benefits-and-trade-offs',
      heading: 'Benefits and trade-offs',
      body: [
        {
          type: 'list',
          items: [
            'Reduces surface runoff velocity and associated soil loss on sloped cropland',
            'Can increase water infiltration, benefiting soil moisture availability',
            'Relatively low-cost to implement compared with structural measures like terracing',
          ],
        },
        {
          type: 'list',
          items: [
            'Benefit diminishes on steep or long slopes without added structural measures',
            'Field layout constraints can complicate machinery operation on irregular terrain',
            'Does not eliminate erosion risk during high-intensity rainfall events',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'No universal erosion-reduction percentage is given here; effectiveness depends on local slope, soil, and rainfall characteristics.',
        },
      ],
    },
    {
      id: 'where-contour-farming-is-used',
      heading: 'Where contour farming is used',
      body: [
        {
          type: 'paragraph',
          text: 'Contour farming is used on sloped cropland worldwide, particularly across hilly grain and row-crop regions where erosion control is a management priority.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'no-till-farming' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'wheat' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'farming-system', slug: 'no-till-farming' },
  ],
  geographicScope:
    'Applicable on sloped cropland worldwide; effectiveness depends on local slope, soil, and rainfall characteristics.',
  limitations: [
    'Benefits diminish on steep or long slopes without additional structural measures such as terracing.',
    'Does not eliminate erosion risk during high-intensity rainfall events; no universal erosion-reduction figure is given.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Contour farming practice standards and erosion control',
    },
    {
      sourceId: 'fao',
      citedFor: 'Soil conservation practices on sloped cropland',
    },
    {
      sourceId: 'fao-soils',
      citedFor: 'Soil erosion processes and management context',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Field layout and conservation practice guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Contour Farming',
    description:
      'Contour farming explained: planting across slope contours to slow runoff and reduce erosion, when it works best, and its practical limits.',
    keywords: [
      'contour farming',
      'soil erosion',
      'contour cultivation',
      'erosion control',
    ],
  },
  structuredData: { article: true },
};
