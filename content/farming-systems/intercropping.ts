import type { FarmingSystemContent } from '@/types/content';

export const intercropping: FarmingSystemContent = {
  id: 'farming-system-intercropping',
  slug: 'intercropping',
  contentType: 'farming-system',
  title: 'Intercropping',
  systemClass: 'integrated',
  alternativeNames: ['Mixed cropping', 'Polyculture (annual)'],
  category: 'Farming system',
  subcategory: 'Integrated cropping',
  summary:
    'Intercropping grows two or more crops together in the same field at the same time so they share the growing period, aiming to use light, water, and nutrients more fully and to gain benefits such as legume nitrogen fixation and pest suppression.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Intercropping is the practice of growing two or more crops in proximity during the same season, rather than as separate sole crops. By combining plants with complementary growth habits, rooting depths, or timing, an intercrop can capture resources that a single crop would leave unused, and can create beneficial interactions between the species — the classic example being a cereal grown with a nitrogen-fixing legume.',
    },
    {
      type: 'paragraph',
      text: 'Arrangements range from mixing crops within rows to alternating rows or strips, and to relay intercropping where a second crop is sown into a standing first crop before it is harvested. The maize–bean combination is one of the most widely recognised intercrops, but many cereal–legume and other pairings are used across smallholder and larger systems alike.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value: 'Two or more crops sharing the same field and growing period',
    },
    {
      label: 'Common arrangements',
      value: 'Mixed, row, strip, and relay intercropping',
    },
    {
      label: 'Classic pairing',
      value:
        'A cereal with a nitrogen-fixing legume, such as maize with common bean',
    },
    {
      label: 'Main aims',
      value:
        'Fuller use of light, water, and nutrients and beneficial crop interactions',
    },
    {
      label: 'Potential benefits',
      value:
        'Legume nitrogen fixation, ground cover, pest disruption, and risk spreading',
    },
    {
      label: 'Main challenge',
      value:
        'Competition between crops and greater complexity in management and mechanisation',
    },
  ],
  sections: [
    {
      id: 'what-intercropping-is',
      heading: 'What intercropping is',
      body: [
        {
          type: 'paragraph',
          text: 'Intercropping is a form of crop diversification within a single field and season. The species are chosen and arranged so that, ideally, they complement rather than simply compete — differing in canopy height, rooting depth, or nutrient needs so that together they capture more of the available resources than either would alone. When this works, the combined output per unit of land can exceed that of the separate sole crops.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Row intercropping',
              description:
                'Growing the component crops in distinct alternating rows.',
            },
            {
              term: 'Strip intercropping',
              description:
                'Growing crops in strips wide enough for separate management but close enough to interact.',
            },
            {
              term: 'Relay intercropping',
              description:
                'Sowing a second crop into a standing first crop before the first is harvested, so their cycles overlap.',
            },
          ],
        },
      ],
    },
    {
      id: 'why-it-is-used',
      heading: 'Why it is used',
      body: [
        {
          type: 'list',
          items: [
            'Cereal–legume combinations can benefit from nitrogen fixed biologically by the legume',
            'Fuller ground cover can suppress weeds and reduce soil erosion',
            'Mixing crops can disrupt the spread of some pests and diseases compared with a uniform monoculture',
            'Growing more than one crop spreads risk if one performs poorly in a given season',
            'Total productivity per unit area can be higher than growing the crops separately',
          ],
        },
        {
          type: 'paragraph',
          text: 'These advantages are why intercropping is widespread in smallholder farming and of growing interest in larger systems seeking diversification and reduced input dependence.',
        },
      ],
    },
    {
      id: 'managing-competition',
      heading: 'Managing competition',
      body: [
        {
          type: 'paragraph',
          text: 'The central management task is to arrange and time the crops so that complementarity outweighs competition. Poorly matched species or arrangements can leave one crop shading out or out-competing the other for water and nutrients, reducing rather than increasing overall output. Choice of species, planting pattern, densities, and relative timing all influence the balance.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Intercropping does not automatically raise productivity; the benefit depends on choosing compatible crops and arrangements suited to the local conditions.',
        },
      ],
    },
    {
      id: 'considerations-and-trade-offs',
      heading: 'Considerations and trade-offs',
      body: [
        {
          type: 'paragraph',
          text: 'Intercropping adds complexity: sowing, weeding, input application, and especially mechanised harvesting are harder when two crops occupy the same field, which is part of why sole cropping dominates highly mechanised systems. The trade-off between the ecological and risk benefits of intercropping and its management complexity depends strongly on the crops, scale, and setting.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry does not give planting ratios, spacings, or yield figures for specific intercrops, which are crop- and region-specific; consult local guidance.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'common-bean' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'cassava' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'permaculture' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  glossaryTerms: ['crop-rotation', 'cover-crop', 'integrated-pest-management'],
  geographicScope:
    'Intercropping is practised worldwide, especially in smallholder tropical and subtropical systems; suitable crop combinations and arrangements are strongly local.',
  climateContext:
    'Intercropping can spread production risk across crops with different responses to weather, though the benefit depends on the combination and the local climate.',
  limitations: [
    'This entry describes intercropping in general terms; it does not give planting ratios, spacings, or yield figures, which are crop- and region-specific.',
    'Benefits depend on choosing compatible crops and arrangements; poorly matched intercrops can reduce total output.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Intercropping and crop diversification in cropping systems',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on cereal–legume intercropping systems',
    },
    {
      sourceId: 'iita',
      citedFor: 'Tropical intercropping and legume-based systems research',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Intercropping',
    description:
      'Intercropping explained: growing two or more crops together to use resources fully, gain legume nitrogen, suppress pests, and spread risk.',
    keywords: [
      'intercropping',
      'mixed cropping',
      'cereal legume intercrop',
      'crop diversification',
    ],
  },
  structuredData: { article: true },
};
