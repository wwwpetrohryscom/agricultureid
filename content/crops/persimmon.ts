import type { CropContent } from '@/types/content';

export const persimmon: CropContent = {
  id: 'crop-persimmon',
  slug: 'persimmon',
  contentType: 'crop',
  title: 'Persimmon',
  scientificName: 'Diospyros kaki (Asian/Japanese persimmon)',
  alternativeNames: ['Kaki', 'Asian persimmon', 'Japanese persimmon'],
  category: 'Tree fruit crop',
  subcategory: 'Deciduous subtropical/temperate tree',
  botanicalFamily: 'Ebenaceae (ebony family)',
  lifecycle: 'Perennial',
  summary:
    'Persimmon is a deciduous tree grown for fruit that falls into two broad classes, astringent and non-astringent, depending on natural tannin content, requiring different handling before the fruit is eaten.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Persimmon (Diospyros kaki) is a long-lived deciduous tree grown in subtropical and mild-temperate regions for its fruit, which is consumed fresh or dried. Like other deciduous fruit trees, it is propagated by grafting and established as a long-term planting rather than an annually replanted crop.',
    },
    {
      type: 'paragraph',
      text: 'A defining feature of persimmon is the classic division of cultivars into astringent and non-astringent types based on natural tannin content. Astringent types are unpalatably tannic until they fully ripen and soften, or until they receive a postharvest treatment to remove astringency, while non-astringent types can be eaten firm, similar to an apple.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Ebenaceae (ebony family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Diospyros kaki' },
    {
      label: 'Fruit types',
      value:
        'Astringent and non-astringent cultivars, based on natural tannin content',
    },
    {
      label: 'Primary uses',
      value: 'Fresh fruit and dried fruit',
    },
    {
      label: 'Climate',
      value:
        'Deciduous tree requiring winter chilling similar to other temperate fruit trees',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Persimmon is grown as a long-lived, grafted deciduous tree in subtropical and mild-temperate growing regions. Once established, plantings can remain productive for many years, and the tree is generally considered adaptable and relatively pest-tolerant compared with many other tree fruits.',
        },
        {
          type: 'paragraph',
          text: 'Commercial and dooryard production both draw on the astringent/non-astringent distinction, which shapes cultivar choice, harvest timing, and postharvest handling throughout the supply chain.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Ebenaceae (ebony family)' },
            { term: 'Genus', description: 'Diospyros' },
            {
              term: 'Principal species',
              description: 'Diospyros kaki (Asian/Japanese persimmon)',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a fruiting cultivar onto a selected rootstock',
            },
            {
              term: 'Astringent vs. non-astringent',
              description:
                'A classic cultivar division based on natural tannin content: astringent types require full ripening/softening or postharvest treatment to be palatable, while non-astringent types can be eaten firm',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Persimmon (Diospyros kaki) originates from East Asia, where it has a very long history of cultivation, and has since spread to other subtropical and mild-temperate fruit-growing regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Current production areas, leading cultivars, and trade patterns change over time; up-to-date figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Persimmon is a deciduous tree that requires a period of winter chilling to break dormancy and flower normally, similar to other temperate deciduous fruit trees, with the specific requirement varying by cultivar.',
        },
        {
          type: 'paragraph',
          text: 'The tree is generally more cold-hardy than many evergreen subtropical fruits once dormant, but young growth and blossom remain vulnerable to damaging spring frost.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Persimmon performs well on deep, well-drained loam and sandy soils. As with most tree fruits, it needs protection from prolonged waterlogging, which restricts rooting and increases the risk of root problems.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Persimmon is considered relatively adaptable and pest-tolerant among tree fruits once established, but site assessment should still draw on local soil survey information, particularly regarding drainage.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a persimmon orchard begins with choosing a rootstock and cultivar suited to the site and market, including the choice between astringent and non-astringent types, since this decision shapes harvest timing and postharvest handling for the life of the planting.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for site adaptation and vigor',
            'Cultivar selection between astringent and non-astringent types according to market preference',
            'Tree spacing and canopy/pruning system suited to the growing region',
            'Long-term orchard floor and canopy management across many productive years',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Potassium supports fruit size and quality, calcium is associated with fruit firmness as in many other tree fruits, and boron is a micronutrient commonly monitored for its role in flowering and fruit set.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local leaf and soil analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Persimmon is grown both rain-fed and under irrigation, with water demand highest during fruit development. Drip irrigation is commonly used in commercial plantings to apply water efficiently to the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during fruit growth while preventing waterlogging, which the tree tolerates poorly, particularly over prolonged periods.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Anthracnose can affect persimmon leaves, twigs, and fruit, while gray mold can affect flowers and fruit, particularly in cool, humid conditions or during storage. Overall, persimmon is considered relatively adaptable and pest-tolerant compared with many other tree fruits once established.',
        },
        {
          type: 'paragraph',
          text: 'Scale insects, mealybugs, and thrips are common pests that can affect tree vigor and fruit finish.',
        },
        {
          type: 'paragraph',
          text: 'Management combines orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Harvest timing and handling depend heavily on the astringent/non-astringent distinction: non-astringent cultivars can be picked firm and eaten shortly after harvest, while astringent cultivars are generally either left to fully ripen and soften before eating or given a postharvest treatment to remove astringency prior to sale. Fruit is typically harvested by hand with the calyx (cap) attached.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'Astringent versus non-astringent persimmon types',
          columns: ['Type', 'Tannin behavior', 'Eating readiness'],
          rows: [
            [
              'Astringent',
              'High natural tannin content while firm',
              'Requires full ripening/softening or postharvest treatment before eating',
            ],
            [
              'Non-astringent',
              'Low natural tannin content',
              'Can be eaten firm, similar to an apple',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating fruit (astringent or non-astringent types)',
            'Dried persimmon',
            'Use in baked goods and preserves',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'gray-mold' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'fig' },
    { type: 'crop', slug: 'pomegranate' },
    { type: 'crop', slug: 'apple' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Cultivar choice (astringent vs. non-astringent), rootstock, and chilling requirements are region- and site-specific.',
  climateContext:
    'Deciduous subtropical/temperate tree requiring winter chill; relatively adaptable and pest-tolerant once established, but needs protection from prolonged waterlogging.',
  limitations: [
    'Rootstock, spacing, and chilling-hour specifics are cultivar- and region-specific decisions not covered by universal values here.',
    'Postharvest de-astringency methods and durations vary by cultivar and practice and are described only in general terms here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global persimmon production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Persimmon disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Integrated pest management guidance relevant to persimmon pests',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Persimmon',
    description:
      'A structured guide to persimmon: astringent versus non-astringent fruit types, climate and soil needs, orchard care, nutrition, and harvest handling.',
    keywords: [
      'persimmon',
      'Diospyros kaki',
      'kaki fruit',
      'persimmon orchard',
    ],
  },
  structuredData: { article: true },
};
