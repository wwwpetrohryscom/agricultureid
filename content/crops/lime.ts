import type { CropContent } from '@/types/content';

export const lime: CropContent = {
  id: 'crop-lime',
  slug: 'lime',
  contentType: 'crop',
  title: 'Lime',
  scientificName:
    'Citrus aurantiifolia (key lime); Citrus latifolia (Persian/Tahiti lime)',
  alternativeNames: ['Key lime', 'Mexican lime', 'Persian lime', 'Tahiti lime'],
  category: 'Tree fruit crop',
  subcategory: 'Subtropical/tropical evergreen citrus',
  botanicalFamily: 'Rutaceae (citrus family)',
  lifecycle: 'Perennial',
  summary:
    'Lime is an evergreen citrus tree grown on grafted rootstocks across tropical and warm subtropical regions. Two distinct commercial types are grown: key (Mexican) lime and Persian (Tahiti) lime, which differ in fruit size, seed content, and market role.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Lime is an evergreen citrus tree cultivated mainly in tropical and warm subtropical regions for fresh fruit, juice, and zest. Commercial trees are grafted onto a rootstock selected for the site, as with other citrus crops, since rootstock strongly affects vigor, disease tolerance, and soil adaptation.',
    },
    {
      type: 'paragraph',
      text: 'Two commercially important, botanically distinct lime types are grown: key lime (also called Mexican lime), Citrus aurantiifolia, which produces smaller, more seeded fruit and is widely grown in tropical smallholdings; and Persian lime (also called Tahiti lime), Citrus latifolia, which produces larger, generally seedless fruit and dominates much of the export and commercial fresh-market trade. Lime is generally among the more cold-sensitive citrus types, requiring consistently warm, tropical-to-subtropical conditions.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rutaceae (citrus family)' },
    { label: 'Life cycle', value: 'Perennial evergreen tree' },
    {
      label: 'Main species',
      value: 'Citrus aurantiifolia (key lime); Citrus latifolia (Persian lime)',
    },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, juice, and zest',
    },
    {
      label: 'Climate',
      value:
        'Tropical to warm subtropical; generally more cold-sensitive than many other citrus',
    },
    {
      label: 'Two commercial types',
      value: 'Key (Mexican) lime and Persian (Tahiti) lime',
      note: 'They differ notably in fruit size, seed content, and market role.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Lime trees are grown as grafted, long-lived evergreen perennials, concentrated in tropical and warm subtropical growing regions where consistently warm conditions are available. Production includes both large commercial Persian lime plantings destined for fresh export markets and smaller-scale key lime production, often for local and regional markets.',
        },
        {
          type: 'paragraph',
          text: 'Because key lime and Persian lime differ meaningfully in tree habit, fruit characteristics, and market use, orchard planning should identify which type is intended from the outset, since management and market expectations differ between them.',
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
            { term: 'Family', description: 'Rutaceae (citrus family)' },
            { term: 'Genus', description: 'Citrus' },
            {
              term: 'Principal species',
              description:
                'Citrus aurantiifolia (key or Mexican lime) and Citrus latifolia (Persian or Tahiti lime)',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen tree, commercially propagated by grafting a fruiting cultivar onto a selected citrus rootstock',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Key (Mexican) lime compared with Persian (Tahiti) lime',
          columns: ['Aspect', 'Key (Mexican) lime', 'Persian (Tahiti) lime'],
          rows: [
            ['Fruit size', 'Smaller', 'Larger'],
            ['Seed content', 'More seeded', 'Generally seedless'],
            [
              'Cold tolerance and vigor',
              'Generally less vigorous, more cold-sensitive',
              'Generally more vigorous',
            ],
            [
              'Main commercial role',
              'Widely grown in tropical smallholdings; local and regional markets',
              'Dominant in commercial export and fresh-market trade',
            ],
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
          text: 'Key lime is believed to have originated in Southeast Asia and spread historically through trade routes into the Middle East, the Mediterranean, and later the Americas. Persian lime is understood to be a later hybrid selection that has become the dominant type in much of the modern commercial trade due to its larger, seedless fruit.',
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
          text: 'Lime is generally among the more cold-sensitive commercial citrus types and requires consistently warm, tropical-to-subtropical conditions for good growth and production; it is typically less cold-tolerant than lemon and many oranges. Cold events can damage or kill foliage, twigs, and fruit, making site selection important in marginal climates.',
        },
        {
          type: 'paragraph',
          text: 'Key lime in particular is often considered more cold-sensitive and less vigorous than Persian lime, reinforcing the importance of matching lime type to local climate.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Lime performs best on deep, well-drained soils with good structure; loams and sandy loams are generally favored. As with citrus generally, lime has poor tolerance of prolonged waterlogging, which restricts rooting and increases the risk of root diseases.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Rootstock choice interacts with soil conditions, including drainage and disease pressure. Site assessment should draw on local soil survey information where available.',
        },
      ],
    },
    {
      id: 'orchard-establishment',
      heading: 'Orchard establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishing a lime orchard begins with selecting the appropriate lime type (key or Persian) and a rootstock and cultivar combination suited to the site, since rootstocks vary in vigor, cold tolerance, disease resistance, and soil adaptation across citrus generally.',
        },
        {
          type: 'list',
          items: [
            'Selection of key lime versus Persian lime based on market and climate',
            'Rootstock selection for vigor, cold tolerance, and disease resistance',
            'Site selection favoring consistently warm conditions given lime’s cold sensitivity',
            'Training and canopy management appropriate to the planting system',
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
          text: 'Nitrogen strongly influences vegetative growth, flowering, and fruit yield in citrus generally. Zinc and boron are micronutrients of particular importance in citrus nutrition, supporting normal leaf development and flowering and fruit set respectively.',
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
          text: 'Lime is grown both rain-fed in humid tropical regions and under irrigation in drier subtropical citrus-growing areas. Drip irrigation and micro-sprinkler irrigation are both used in lime production, applying water efficiently to the root zone.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling aims to support consistent growth and fruit development while avoiding the waterlogging that citrus tolerates poorly.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Citrus canker, caused by the bacterium Xanthomonas citri, is a serious, quarantine-significant disease affecting lime and citrus generally, producing raised lesions on leaves, stems, and fruit and prompting strict regulatory controls in many regions. Anthracnose can also affect lime, causing lesions on leaves, twigs, and fruit.',
        },
        {
          type: 'paragraph',
          text: 'Scale insects and fruit flies are common citrus pests affecting lime, feeding on plant tissue or damaging fruit through larval development. Citrus psyllids are a group of concern citrus-wide as vectors of huanglongbing (citrus greening) in some regions; their presence and vector status should be assessed against local plant health authority guidance rather than assumed.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant rootstocks where available, sanitation, monitoring, quarantine compliance, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Lime is generally hand-harvested, with maturity assessed through indicators such as fruit size, color, and juice content, since lime does not continue to ripen significantly after picking. Persian lime is typically harvested and marketed while still green, whereas ripeness indicators and harvest practices for key lime can differ by market and region.',
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
            'Fresh-market fruit',
            'Juice for beverages, culinary, and food-processing uses',
            'Zest and essential oil extracted from the peel',
            'Garnish and flavoring uses in food and beverage preparation',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'citrus-canker' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'psyllids' },
    { type: 'pest', slug: 'fruit-flies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'micro-sprinkler-irrigation' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'lemon' },
    { type: 'crop', slug: 'grapefruit' },
    { type: 'crop', slug: 'orange' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview of tropical and warm subtropical citrus regions. Choice of lime type, rootstock, and cold-risk management are region-specific.',
  climateContext:
    'Tropical to warm subtropical evergreen citrus; generally more cold-sensitive than many other commercial citrus types.',
  limitations: [
    'Cold-hardiness thresholds and harvest-maturity indicators vary by lime type, cultivar, and region and are not stated here as universal values.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global lime and citrus production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Citrus canker and citrus pest compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for citrus',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Lime',
    description:
      'A structured, evidence-based reference on lime: key and Persian types, cold sensitivity, soil and nutrient needs, diseases, pests, and juice uses.',
    keywords: ['lime', 'Citrus aurantiifolia', 'Persian lime', 'key lime'],
  },
  structuredData: { article: true },
};
