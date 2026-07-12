import type { CropContent } from '@/types/content';

export const apricot: CropContent = {
  id: 'crop-apricot',
  slug: 'apricot',
  contentType: 'crop',
  title: 'Apricot',
  scientificName: 'Prunus armeniaca',
  alternativeNames: ['Apricot tree'],
  category: 'Tree fruit crop',
  subcategory: 'Temperate stone fruit',
  botanicalFamily: 'Rosaceae (rose family)',
  lifecycle: 'Perennial',
  summary:
    'Apricot is a deciduous stone fruit tree grown for fresh, dried, and processed fruit. It blooms early in spring in many regions, which makes bloom-time frost a particularly important production risk.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Apricot is a deciduous tree fruit in the same genus as peach, plum, and cherry, grown across temperate and Mediterranean-type climates for fresh consumption, drying, and processing. Commercial orchards are established from grafted trees combining a fruiting cultivar with a rootstock suited to the site.',
    },
    {
      type: 'paragraph',
      text: 'A distinctive feature of apricot production in many growing regions is very early spring bloom, often earlier than related stone fruits grown in the same area. Combined with a comparatively modest winter chilling requirement in many cultivars, this early bloom leaves flowers exposed to a longer window of possible spring frost, making frost risk management a central concern for growers.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rosaceae (rose family)' },
    { label: 'Life cycle', value: 'Perennial deciduous tree' },
    { label: 'Main species', value: 'Prunus armeniaca' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, drying, canning, and processed products',
    },
    {
      label: 'Climate',
      value:
        'Temperate; blooms early in spring in many regions, increasing frost exposure',
    },
    {
      label: 'Pollination',
      value: 'Most cultivars are self-fertile',
      note: 'This differs from sweet cherry, which generally needs a compatible pollinizer.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Apricot trees are grown as grafted, long-lived perennials in temperate and Mediterranean-type climates. Production ranges from large commercial orchards to smallholder plantings, often in regions where a distinct dry or mild-winter season supports fruit drying alongside fresh-market sale.',
        },
        {
          type: 'paragraph',
          text: 'Because apricot flowers so early relative to many other tree fruits grown in the same region, site selection and local microclimate play an outsized role in the crop’s reliability from year to year.',
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
              description: 'Prunus armeniaca (cultivated apricot)',
            },
            {
              term: 'Growth habit',
              description:
                'Deciduous tree, commercially propagated by grafting a fruiting cultivar onto a selected rootstock; a stone fruit (drupe) closely related to peach, plum, and cherry',
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
          text: 'Apricot is believed to have originated in Central and East Asia, with cultivation spreading over millennia along historical trade routes into the Mediterranean basin, the Middle East, and eventually to other temperate regions worldwide, including parts of North America, Australia, and South Africa.',
        },
        {
          type: 'paragraph',
          text: 'Current production volumes, leading cultivars, and trade patterns vary by region and change over time; figures should be obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Like other deciduous Prunus species, apricot requires a genotype-specific period of winter chilling to break dormancy and flower normally. In many cultivars this chilling requirement is comparatively modest, which — combined with a tendency to bloom very early in spring in many growing regions — means flowers can be exposed to frost more often than later-blooming stone fruits grown in the same area.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Frost during bloom is a major risk',
          text: 'Spring frost at or near bloom is one of the most significant production risks for apricot in many regions, since open flowers are highly frost-sensitive and damage can substantially reduce or eliminate a season’s crop. Site selection — favoring locations with good air drainage and reduced frost pooling — is an important part of managing this risk.',
        },
        {
          type: 'table',
          caption: 'Selected factors affecting apricot bloom-time frost risk',
          columns: [
            'Factor',
            'Typical characteristic',
            'Relevance to frost risk',
          ],
          rows: [
            [
              'Bloom timing',
              'Often very early in spring in many regions',
              'Extends the period flowers are exposed to possible frost',
            ],
            [
              'Chilling requirement',
              'Comparatively modest in many cultivars',
              'Can allow dormancy to break, and bloom to start, earlier in the season',
            ],
            [
              'Site selection',
              'Slope, elevation, and air drainage vary by site',
              'Sites with poor air drainage tend to pool cold air and increase frost damage',
            ],
          ],
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Apricot performs best on deep, well-drained soils with good structure; loams and sandy loams are generally favored. The crop has poor tolerance of waterlogging, which restricts rooting and increases the risk of root and crown diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock choice interacts with soil conditions, including drainage, depth, and replant history. Site assessment should draw on local soil survey information where available.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing an apricot orchard begins with choosing a rootstock and cultivar combination suited to the site, market, and local frost risk. Most apricot cultivars are self-fertile, which simplifies orchard pollination design compared with tree fruits such as sweet cherry that generally require a compatible pollinizer variety, though some cultivars and regions still benefit from cross-pollination.',
        },
        {
          type: 'list',
          items: [
            'Rootstock selection for size control, anchorage, and site adaptation',
            'Site selection favoring good air drainage to reduce frost pooling at bloom',
            'Cultivar selection balancing bloom timing, chilling requirement, and market use',
            'Training and pruning system matched to planting density and vigor',
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
          text: 'Nitrogen influences vegetative vigor and must be balanced against excessive shoot growth. Potassium supports fruit size and quality, calcium is linked to fruit firmness, and boron plays a role in pollination and fruit set.',
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
          text: 'Apricot is grown both rain-fed and under irrigation, with water demand highest during fruit development. Drip irrigation is widely used to apply water precisely to the root zone while limiting foliage wetting, which can also help manage some fungal diseases.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to avoid water stress during fruit development while preventing waterlogging, which apricot tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Gray mold (Botrytis) can affect blossoms and fruit, particularly under wet or humid conditions, and powdery mildew affects shoots, leaves, and fruit finish. Bacterial leaf spot can cause lesions on leaves and fruit and is a concern in some humid growing regions.',
        },
        {
          type: 'paragraph',
          text: 'Insect pests include aphids, which distort growth and can transmit viruses; fruit flies, whose larvae develop inside ripening fruit; and various scale insects, which feed on bark and shoots and can weaken trees under heavy infestation.',
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
          text: 'Apricot is picked by hand, generally at a maturity stage assessed through color change, firmness, and flavor development. Fruit destined for immediate fresh sale, long-distance shipping, or drying is typically harvested at somewhat different maturities to suit each use, since apricot softens and its flavor and sugars continue to develop for only a limited period after picking.',
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
            'Fresh-market eating apricots',
            'Dried apricots',
            'Canning and processing into jams, preserves, and other products',
            'Juice and nectar production',
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
    { type: 'crop', slug: 'peach' },
    { type: 'crop', slug: 'plum' },
    { type: 'crop', slug: 'cherry' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Bloom timing, chilling requirement, and frost risk vary widely by cultivar, site, and region.',
  climateContext:
    'Temperate deciduous stone fruit; early bloom in many regions makes it particularly vulnerable to spring frost during flowering.',
  limitations: [
    'Chilling-hour values, bloom-date ranges, and frost-risk thresholds are cultivar- and site-specific and are not stated here as universal figures.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global apricot production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Apricot disease and pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for apricot',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Stone fruit bloom, frost risk, and orchard management research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Apricot',
    description:
      'A structured, evidence-based reference on apricot: early bloom, frost risk, self-fertility, soil needs, diseases, pests, and processed uses.',
    keywords: ['apricot', 'Prunus armeniaca', 'stone fruit', 'frost risk'],
  },
  structuredData: { article: true },
};
