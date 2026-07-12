import type { FarmingSystemContent } from '@/types/content';

export const mixedFarming: FarmingSystemContent = {
  id: 'system-mixed-farming',
  slug: 'mixed-farming',
  contentType: 'farming-system',
  title: 'Mixed Farming',
  systemClass: 'production-approach',
  alternativeNames: ['Mixed crop-livestock farming'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'Mixed farming combines multiple enterprises — most commonly crop and livestock production, or several diversified crop types — on a single farm, spreading risk and, when managed together, allowing byproducts of one enterprise to support another.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Mixed farming is a broad, long-standing, and globally common farm structure in which a single operation runs more than one production enterprise, rather than specializing in a single crop or livestock type. It is distinct from a more tightly integrated crop-livestock system in that mixed farming describes coexisting enterprises, while formal cycling of nutrients or feed between them is characteristic of a more deliberately integrated arrangement.',
    },
    {
      type: 'paragraph',
      text: 'Common motivations include diversifying income and risk across different markets, prices, and weather sensitivities, and spreading labor demand more evenly across the year than a single-enterprise farm would allow. Where enterprises are managed together, byproducts such as manure or crop residue can also support the other enterprise, though this synergy depends on deliberate management rather than occurring automatically.',
    },
  ],
  keyFacts: [
    {
      label: 'Defining feature',
      value:
        'A single farm operates more than one production enterprise, commonly crops plus livestock or several diversified crops',
    },
    {
      label: 'Distinguishing from integration',
      value:
        'Mixed farming describes coexisting enterprises; formal nutrient or feed cycling between them is characteristic of a more tightly integrated crop-livestock system',
    },
    {
      label: 'Common motivation',
      value:
        'Diversifying income and risk across different markets, prices, and weather sensitivities',
    },
    {
      label: 'Common combination',
      value:
        'Cereal or forage cropping alongside ruminant livestock such as cattle, sheep, or goats',
    },
    {
      label: 'History',
      value:
        'A long-standing, globally widespread farm structure alongside more recent specialization trends',
    },
    {
      label: 'Labor pattern',
      value:
        'Can spread labor demand more evenly across the year than a single-enterprise farm',
    },
  ],
  sections: [
    {
      id: 'what-mixed-farming-is',
      heading: 'What mixed farming is',
      body: [
        {
          type: 'paragraph',
          text: 'Mixed farming is defined by the presence of more than one production enterprise on the same farm, whether crops and livestock together or several diversified crop types managed side by side.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Mixed farming',
              description:
                'A farm operating more than one production enterprise, such as crops and livestock together.',
            },
            {
              term: 'Enterprise diversification',
              description:
                "Spreading a farm's output across multiple products to reduce dependence on any single market or crop.",
            },
            {
              term: 'Integrated crop-livestock system',
              description:
                'A more tightly managed form of mixed farming with deliberate nutrient and feed cycling between enterprises.',
            },
          ],
        },
      ],
    },
    {
      id: 'common-combinations',
      heading: 'Common combinations',
      body: [
        {
          type: 'list',
          items: [
            'Cereal or forage cropping alongside ruminant livestock grazing',
            'Diversified vegetable production alongside small livestock on smallholdings',
            'Rotations spanning multiple cash and forage crops without a livestock component',
          ],
        },
      ],
    },
    {
      id: 'potential-synergies',
      heading: 'Potential synergies',
      body: [
        {
          type: 'paragraph',
          text: 'Where crop and livestock enterprises are managed together, manure from livestock can supply nutrients to cropland, and crop residues or byproducts can serve as livestock feed, and diversified rotations can benefit from the presence of forage crops.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'These synergies depend on deliberate management decisions; simply operating multiple enterprises on one farm does not automatically create nutrient or feed cycling between them.',
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
            'Diversifies income and risk across different markets and weather sensitivities',
            'Can spread labor demand more evenly across the year',
            'Can enable nutrient or feed cycling between enterprises when deliberately managed',
          ],
        },
        {
          type: 'list',
          items: [
            'Requires managing the skills, labor, and capital demands of more than one enterprise',
            'May limit the scale efficiencies achievable by a specialized single-enterprise operation',
            'Synergies between enterprises are not automatic and require coordinated management',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry makes no yield or profitability comparison between mixed and specialized farming; outcomes vary by farm, region, and management.',
        },
      ],
    },
    {
      id: 'where-mixed-farming-is-used',
      heading: 'Where mixed farming is used',
      body: [
        {
          type: 'paragraph',
          text: 'Mixed farming is practiced worldwide, from smallholder systems common in many developing regions to diversified farms within industrialized agriculture. The extent of integration between enterprises varies widely from farm to farm.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  connections: [
    { type: 'livestock', slug: 'rabbits' },
    { type: 'livestock', slug: 'alpacas' },
    { type: 'livestock', slug: 'water-buffalo' },
    { type: 'livestock', slug: 'silkworms' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
  ],
  geographicScope:
    'Practiced worldwide across smallholder and larger commercial farms; specific enterprise combinations depend on local markets, climate, and resources.',
  limitations: [
    'This entry describes mixed farming in general terms and does not quantify risk-reduction or productivity benefits, which vary by farm and region.',
    'The degree of nutrient or feed cycling between enterprises varies and is not automatic.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Mixed crop-livestock farming systems context',
    },
    {
      sourceId: 'ec-agri',
      citedFor: 'Farm diversification and enterprise mix policy context',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on mixed and integrated farming systems',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Nutrient cycling practices between farm enterprises',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Mixed Farming',
    description:
      'Mixed farming explained: combining crop and livestock or diversified crop enterprises on one farm, common combinations, and honest trade-offs.',
    keywords: [
      'mixed farming',
      'crop-livestock farming',
      'farm diversification',
      'mixed agriculture',
    ],
  },
  structuredData: { article: true },
};
