import type { CropContent } from '@/types/content';

export const swissChard: CropContent = {
  id: 'crop-swiss-chard',
  slug: 'swiss-chard',
  contentType: 'crop',
  title: 'Swiss Chard',
  scientificName: 'Beta vulgaris subsp. vulgaris (Cicla group)',
  alternativeNames: [
    'Chard',
    'Leaf beet',
    'Silverbeet',
    'Spinach beet',
    'Perpetual spinach',
  ],
  category: 'Leafy vegetable',
  subcategory: 'Leaf beet grown for leaves and stalks',
  botanicalFamily: 'Amaranthaceae (formerly Chenopodiaceae)',
  lifecycle: 'Biennial, grown as an annual',
  summary:
    'Swiss chard is a leaf beet grown for its large, tender leaves and colorful, succulent stalks, a hardy, productive, cut-and-come-again vegetable of the same species as beetroot and sugar beet.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Swiss chard is a leafy vegetable of the beet family grown for its large, glossy leaves and its broad, often brightly colored leaf stalks (midribs). It belongs to the same species as beetroot and sugar beet but has been selected for leaf and stalk production rather than a swollen root.',
    },
    {
      type: 'paragraph',
      text: 'The crop is hardy, productive, and easy to grow, tolerating heat better than spinach and cold reasonably well, and it lends itself to repeated cut-and-come-again harvesting over a long season. Colored-stalked selections are also grown as ornamental edibles.',
    },
  ],
  keyFacts: [
    {
      label: 'Botanical family',
      value: 'Amaranthaceae (formerly Chenopodiaceae)',
    },
    { label: 'Life cycle', value: 'Biennial, grown as an annual' },
    {
      label: 'Scientific name',
      value: 'Beta vulgaris subsp. vulgaris (Cicla group)',
    },
    {
      label: 'Primary uses',
      value:
        'Leaves and stalks cooked as a vegetable; young leaves used in salads',
    },
    {
      label: 'Climate',
      value: 'Cool-season but heat-tolerant; hardy and long-cropping',
    },
    {
      label: 'Soil preference',
      value: 'Fertile, moisture-retentive, well-drained loams',
      note: 'Rich, moist soils support the long season of leaf production.',
    },
    {
      label: 'Harvest',
      value: 'Cut-and-come-again over an extended season',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Swiss chard is grown for its leaves and succulent stalks, cooked much like spinach while also providing a distinct, crunchier stalk. Its tolerance of both heat and cold and its long, repeated harvest make it a productive and reliable garden and market vegetable across much of the year.',
        },
        {
          type: 'paragraph',
          text: 'Selections range from green-leaved, white-stalked types to brightly colored red, yellow, and multicolored forms grown for both eating and ornamental value.',
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
            {
              term: 'Family',
              description:
                'Amaranthaceae (beet and goosefoot family, formerly Chenopodiaceae)',
            },
            {
              term: 'Botanical name',
              description:
                'Beta vulgaris subsp. vulgaris (Cicla or leaf-beet group)',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial forming a rosette of large leaves on broad stalks; bolts to flower in its second year or under stress',
            },
            {
              term: 'Relatives',
              description:
                'The same species as beetroot and sugar beet, selected for leaves and stalks',
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
          text: 'Swiss chard derives from the wild sea beet of the Mediterranean and Atlantic coasts and has been grown as a leaf vegetable since antiquity. It is now cultivated worldwide in gardens and market production across temperate and warmer regions.',
        },
        {
          type: 'paragraph',
          text: 'Because it is largely a fresh vegetable, detailed production statistics are limited; available figures are compiled by FAO and national agencies and should be consulted directly.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Swiss chard is a cool-season crop that nonetheless tolerates summer heat better than spinach, resisting bolting through warm weather, and it is reasonably cold-hardy, continuing to crop into cool autumn and, in mild areas, winter conditions.',
        },
        {
          type: 'paragraph',
          text: 'Exposure to cold followed by long days can cause plants to bolt, so sowing timing is chosen to give a long period of leaf production before flowering.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Swiss chard grows best on fertile, moisture-retentive, well-drained loams rich in organic matter, which support its long season of continuous leaf production. It tolerates a range of soils and is moderately tolerant of salinity, reflecting its sea-beet ancestry.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rich, consistently moist soils sustain the repeated leaf harvests that make chard so productive over a long season.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Swiss chard is direct-seeded or transplanted. Like other beets, its "seed" is a cluster that can produce several seedlings, so thinning is used to set plant spacing. Management centres on maintaining fertility and moisture for continuous leaf production and on regular harvesting.',
        },
        {
          type: 'list',
          items: [
            'Direct seeding or transplanting, with thinning of the multi-seedling clusters',
            'Rich, moisture-retentive soil and steady fertility for long-season leaf growth',
            'Regular cut-and-come-again harvesting to keep plants productive',
            'Rotation away from beet-family crops to limit shared soilborne problems',
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
          text: 'Continuous leaf harvesting gives chard a steady nitrogen demand, though, as with other leafy greens, excessive nitrogen can promote nitrate accumulation. Beet-family crops are sensitive to boron deficiency, which can affect leaf and stalk quality on some soils.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates and timing should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Consistent moisture supports the tender, continuous growth that gives chard its quality, and irrigation is used where rainfall is insufficient. Moisture stress slows growth and can toughen the leaves and stalks.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Cercospora leaf spot is a common and characteristic disease of chard and other leaf beets, and downy mildew, powdery mildew, and damping-off of seedlings also occur, favored by humid conditions and dense stands. Good spacing, rotation, and sanitation help manage foliar disease.',
        },
        {
          type: 'paragraph',
          text: 'The beet leaf miner tunnels within the leaves and is a leading pest, while aphids, flea beetles, cutworms, and slugs also damage the crop. Management combines rotation, removal of affected leaves, protection such as fine netting, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Swiss chard is harvested by cutting outer leaves and stalks as needed, leaving the central crown to keep producing, or by cutting whole young plants for baby-leaf use. The leaves are perishable and are cooled and used or marketed promptly.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Leaves cooked like spinach in a wide range of dishes',
            'Broad, succulent stalks cooked separately as a distinct vegetable',
            'Young, tender leaves used raw in salads and salad mixes',
            'Colored-stalked types grown as ornamental edibles',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'leaf-miners' },
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'silt-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'beetroot' },
    { type: 'crop', slug: 'spinach' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'crop', slug: 'sugar-beet' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'cultivar', 'yield'],
  geographicScope:
    'Global overview. Grown worldwide as a garden and market vegetable across temperate and warmer regions.',
  climateContext:
    'Cool-season but heat-tolerant leaf beet; reasonably cold-hardy; cold then long days can trigger bolting.',
  limitations: [
    'Sowing timing to balance long harvest against bolting is region-specific and not reduced to universal guidance here.',
    'As a leafy crop, high nitrogen can lead to nitrate accumulation, a food-quality consideration.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of chard and leaf beets among leafy vegetables',
    },
    {
      sourceId: 'usda-plants',
      citedFor: 'Classification and nomenclature of Beta vulgaris',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Leaf beet crop, disease, and pest compendium data',
    },
    { sourceId: 'rhs', citedFor: 'Swiss chard cultivation guidance' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Swiss Chard (Beta vulgaris, Cicla group)',
    description:
      'An evidence-based reference on Swiss chard (leaf beet): botany, cool-season agronomy, soils, cut-and-come-again harvest, diseases, pests, and uses.',
    keywords: ['swiss chard', 'chard', 'leaf beet', 'silverbeet'],
  },
  structuredData: { article: true },
};
