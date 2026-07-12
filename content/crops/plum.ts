import type { CropContent } from '@/types/content';

export const plum: CropContent = {
  id: 'crop-plum',
  slug: 'plum',
  contentType: 'crop',
  title: 'Plum',
  scientificName:
    'Prunus domestica (European plum); Prunus salicina (Japanese plum)',
  alternativeNames: ['European plum', 'Japanese plum', 'Prune plum'],
  category: 'Tree fruit crop',
  subcategory: 'Temperate stone fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Plum is a temperate deciduous stone fruit grown as two distinct groups, European plum used fresh and for drying into prunes, and Japanese plum grown mainly for the fresh market, both propagated by grafting.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Plum orchards are established from grafted trees combining a fruiting cultivar with a rootstock chosen for size control, anchorage, and site adaptation, as with other tree fruit crops. Two distinct species dominate commercial production: European plum (Prunus domestica), a hexaploid species used both fresh and for drying into prunes, and Japanese plum (Prunus salicina), a diploid species grown predominantly for the fresh market.',
    },
    {
      type: 'paragraph',
      text: 'Pollination requirements differ between the two groups: many Japanese plum cultivars require cross-pollination from a compatible variety, while some European plum cultivars are self-fertile, an important consideration in orchard design. Chilling requirement also varies widely by cultivar and species group, with Japanese plum types generally needing somewhat less chilling than many European plum cultivars.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Prunus domestica, Prunus salicina' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit; European plum also dried into prunes',
    },
    {
      label: 'Climate',
      value:
        'Temperate; chilling requirement varies widely by cultivar and species group',
    },
    {
      label: 'Soil preference',
      value:
        'Well-drained loams and sandy soils; poor tolerance of waterlogging',
      note: 'European and Japanese plum differ in ploidy, pollination needs, and typical end use.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Plum is grown as a grafted, long-lived perennial tree. Commercial production spans European plum, valued for both fresh eating and drying into prunes, and Japanese plum, grown predominantly for fresh consumption, with each group having somewhat different orchard traditions and end markets.',
        },
        {
          type: 'paragraph',
          text: 'Because plum is propagated clonally and cropped over many seasons, decisions on rootstock, species group, cultivar, and pollinizer requirements are made at establishment and shape orchard management for the life of the planting.',
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
            { term: 'Family', description: 'Rosaceae (rose family)' },
            { term: 'Genus', description: 'Prunus' },
            {
              term: 'Principal species',
              description:
                'Prunus domestica (hexaploid European plum) and Prunus salicina (diploid Japanese plum)',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a fruiting cultivar onto a selected rootstock',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The difference in ploidy between European plum (hexaploid) and Japanese plum (diploid) reflects their distinct genetic origins, and this distinction carries through to differences in typical fruit characteristics, pollination behavior, and end use between the two groups.',
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'European plum is believed to have originated in the region around the Caucasus and Near East, while Japanese plum originated in China despite its common name, later being developed further in Japan before spreading internationally. Both groups have long histories of cultivation and selection.',
        },
        {
          type: 'paragraph',
          text: 'Commercial production of both species groups is now established across temperate regions on multiple continents. Production statistics and leading cultivars change over time and should be obtained from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Plum trees require a period of winter chilling to break dormancy and flower normally; the chilling requirement varies widely by cultivar and species group. Japanese plum cultivars generally need somewhat less chilling than many European plum cultivars, though this varies enough by individual cultivar that local variety trial information should guide selection.',
        },
        {
          type: 'paragraph',
          text: "Spring frost during bloom is a significant climate risk for plum in many regions, since flowers and young fruitlets are frost-sensitive and damage can substantially reduce a season's crop.",
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Plum performs best on deep, well-drained soils with good structure. Loams and sandy loams are generally favored, and the crop is intolerant of prolonged waterlogging, which restricts rooting and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock selection interacts with soil conditions, including drainage and depth, and differs somewhat between European and Japanese plum programs. Site assessment should draw on local soil survey information where available.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a plum orchard begins with choosing a species group, rootstock, and cultivar combination suited to the site and target market. Pollination planning differs by group: many Japanese plum cultivars require cross-pollination from a compatible variety, while some European plum cultivars are self-fertile, though pollinizer needs should still be confirmed for the specific cultivar chosen.',
        },
        {
          type: 'list',
          items: [
            'Species group selection (European vs. Japanese plum) matched to target market',
            'Rootstock selection for size control, anchorage, and site adaptation',
            'Pollinizer planning, particularly important for Japanese plum cultivars',
            'Training and pruning system matched to planting density',
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
          text: 'Potassium supports fruit size and quality in plum, while calcium status is linked to fruit firmness and storage quality. Boron plays a role in flowering and fruit set, which is particularly relevant where pollination is a limiting factor, as in many Japanese plum cultivars.',
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
          text: 'Plum is grown both rain-fed and under irrigation, with water demand highest during fruit development. Drip irrigation is widely used in modern orchards to apply water precisely to the root zone while avoiding the waterlogging plum tolerates poorly.',
        },
        {
          type: 'paragraph',
          text: 'For European "prune" plum cultivars destined for drying, fruit development is managed with attention to achieving notably high soluble-solids content, a characteristic that suits these cultivars to drying and distinguishes them from plum grown solely for the fresh market.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold can affect blossoms and ripening fruit, particularly under humid conditions, while powdery mildew affects shoots and leaves. Bacterial leaf spot can cause lesions on leaves and fruit in susceptible cultivars. Insect pests include aphids, which distort growth and can transmit viruses, fruit flies, which infest ripening fruit, and scale insects, which affect vigor.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars, orchard sanitation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Plum is generally hand-picked at a maturity stage assessed through color, firmness, and, for prune-type European plum, sugar content suited to drying. Fresh-market fruit is typically harvested somewhat earlier than fruit destined for drying, which is often allowed to develop further before harvest.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'table',
          caption: 'European vs. Japanese plum comparison',
          columns: [
            'Feature',
            'European plum (P. domestica)',
            'Japanese plum (P. salicina)',
          ],
          rows: [
            ['Ploidy', 'Hexaploid', 'Diploid'],
            [
              'Typical use',
              'Fresh eating and drying into prunes',
              'Mainly fresh market',
            ],
            [
              'Pollination',
              'Some cultivars self-fertile',
              'Many cultivars require cross-pollination',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Fresh-market eating plums',
            'Dried prunes from European plum cultivars with high soluble-solids content',
            'Canned and processed fruit',
            'Juice and preserves',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'fruit-flies' },
    { type: 'pest', slug: 'scale-insects' },
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
    { type: 'crop', slug: 'cherry' },
    { type: 'crop', slug: 'peach' },
    { type: 'crop', slug: 'apricot' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Species group, rootstock, cultivar, and chilling requirements are region- and site-specific.',
  climateContext:
    'Temperate deciduous stone fruit; chilling requirement varies widely by cultivar and species group, and bloom-time frost is a significant risk.',
  limitations: [
    'Rootstock, pollinizer pairing, and chilling-hour specifics are cultivar- and region-specific decisions not covered by universal values here.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global plum production and cultivation context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Plum pest and disease compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for plum',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Plum cultivar and orchard management research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Plum',
    description:
      'A reference on plum: European vs. Japanese species, ploidy, pollination needs, chilling variation, soil requirements, diseases, and uses.',
    keywords: ['plum', 'Prunus domestica', 'Prunus salicina', 'stone fruit'],
  },
  structuredData: { article: true },
};
