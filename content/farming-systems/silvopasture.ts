import type { FarmingSystemContent } from '@/types/content';

export const silvopasture: FarmingSystemContent = {
  id: 'system-silvopasture',
  slug: 'silvopasture',
  contentType: 'farming-system',
  title: 'Silvopasture',
  systemClass: 'integrated',
  alternativeNames: ['Silvopastoral system'],
  category: 'Farming system',
  subcategory: 'Integrated system',
  summary:
    'Silvopasture deliberately integrates trees, forage plants, and grazing livestock on the same land, managed together so trees provide shade, shelter, or additional products while forage continues to support grazing animals.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Silvopasture is distinguished from simply grazing land that happens to have scattered trees by being an intentional, managed combination: tree species, density, and spacing are chosen and controlled to allow enough light to reach forage plants, while livestock grazing is timed and rotated to protect trees, especially while young.',
    },
    {
      type: 'paragraph',
      text: 'It is practiced with a range of tree types, including timber species, fruit- or nut-bearing trees, and fodder trees, and with a range of livestock, most commonly cattle, sheep, and goats. As a form of agroforestry focused specifically on integrating grazing animals, it requires coordinated planning of tree establishment, forage species selection, and grazing management.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'Deliberate, managed combination of trees, forage, and livestock grazing on the same land unit',
    },
    {
      label: 'Common tree roles',
      value:
        'Shade and shelter for livestock, and timber, fruit, nut, or fodder production',
    },
    {
      label: 'Common livestock',
      value:
        'Cattle, sheep, and goats, managed with grazing timing suited to protect trees',
    },
    {
      label: 'Establishment period',
      value:
        'Young trees typically need protection from grazing, by fencing or timing, until established',
    },
    {
      label: 'Category',
      value: 'A form of agroforestry focused on integrating livestock grazing',
    },
    {
      label: 'Management demand',
      value:
        'Requires coordinated planning of tree spacing, forage species, and grazing rotation',
    },
  ],
  sections: [
    {
      id: 'what-silvopasture-is',
      heading: 'What silvopasture is',
      body: [
        {
          type: 'paragraph',
          text: 'Silvopasture combines three managed layers on one piece of land: a tree component, a forage or pasture component, and a grazing livestock component, arranged and timed so each supports rather than undermines the others.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Silvopasture',
              description:
                'A deliberately managed combination of trees, forage, and grazing livestock on the same land.',
            },
            {
              term: 'Agroforestry',
              description:
                'The broader category of land-use systems that intentionally combine trees with crops or livestock.',
            },
            {
              term: 'Rotational grazing',
              description:
                'Moving livestock between paddocks on a planned schedule to manage forage and protect trees.',
            },
          ],
        },
      ],
    },
    {
      id: 'how-it-is-managed',
      heading: 'How it is managed',
      body: [
        {
          type: 'list',
          items: [
            'Selecting tree species and spacing that allow adequate light for forage growth',
            'Choosing forage species tolerant of partial shade beneath the tree canopy',
            'Protecting young trees from grazing damage through fencing or timed exclusion',
            'Rotating or timing grazing to manage forage recovery and reduce soil compaction',
            'Thinning or pruning trees over time as the canopy develops',
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
            'Trees can provide shade and shelter that may reduce livestock heat stress',
            'Diversifies farm products across timber, tree crops, and livestock',
            'Root systems and cover from trees and forage can help reduce soil erosion',
          ],
        },
        {
          type: 'list',
          items: [
            'Establishment requires investment and a multi-year period before trees mature and provide full benefit',
            'Requires more complex management planning than single-enterprise grazing or forestry',
            'Tree, forage, and livestock compatibility is site-specific, not a fixed formula',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry makes no universal productivity claim for silvopasture; outcomes depend on tree and forage choice, livestock type, and site management.',
        },
      ],
    },
    {
      id: 'where-silvopasture-is-used',
      heading: 'Where silvopasture is used',
      body: [
        {
          type: 'paragraph',
          text: 'Silvopasture is used in both temperate and tropical livestock-raising regions, ranging from managed grazing within existing woodland to deliberately planted tree-and-forage systems established specifically for integrated grazing.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
  ],
  connections: [
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'goats' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  glossaryTerms: ['forage', 'ruminant'],
  geographicScope:
    'Practiced in temperate and tropical grazing regions worldwide; specific tree, forage, and livestock combinations are climate- and site-specific.',
  climateContext:
    'Shade from trees can moderate livestock heat stress in warmer climates, while tree and forage species selection depends on local rainfall and temperature patterns.',
  limitations: [
    'Establishment requires a multi-year investment period before trees mature and deliver full benefits.',
    'Tree, forage, and livestock compatibility is site-specific; this entry offers no universal yield or profitability comparison.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Agroforestry and silvopastoral system context',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Silvopasture practice standards and grazing management',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on integrated tree-livestock systems',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Grazing and forage management guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Silvopasture',
    description:
      'Silvopasture explained: how trees, forage, and managed livestock grazing are deliberately combined on the same land, with practices and trade-offs.',
    keywords: [
      'silvopasture',
      'agroforestry',
      'managed grazing',
      'tree integration',
    ],
  },
  structuredData: { article: true },
};
