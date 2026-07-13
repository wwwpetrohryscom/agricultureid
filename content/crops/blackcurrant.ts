import type { CropContent } from '@/types/content';

export const blackcurrant: CropContent = {
  id: 'crop-blackcurrant',
  slug: 'blackcurrant',
  contentType: 'crop',
  title: 'Blackcurrant',
  scientificName: 'Ribes nigrum',
  alternativeNames: ['Black currant', 'Cassis'],
  category: 'Fruit crop',
  subcategory: 'Temperate soft fruit (bush)',
  botanicalFamily: 'Grossulariaceae (currant family)',
  lifecycle: 'Perennial',
  summary:
    'Blackcurrant is a temperate deciduous bush grown for its aromatic, vitamin-C-rich berries, used mainly for juice, cordials, and processing, and valued for winter-hardiness and a distinctive requirement for winter chilling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Blackcurrant is a deciduous temperate shrub grown for its small, dark, aromatic berries, which are rich in vitamin C and used chiefly for juice, cordials, preserves, and other processed products rather than eaten fresh in large quantities. It is an important soft-fruit crop in cooler parts of Europe.',
    },
    {
      type: 'paragraph',
      text: 'The crop is winter-hardy and, like many temperate fruits, requires a period of winter chilling to break dormancy and flower reliably, which limits it to regions with cold winters. Bushes are productive for a number of years and are managed with regular pruning to sustain fruiting on younger wood.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Grossulariaceae (currant family)' },
    { label: 'Life cycle', value: 'Perennial (deciduous bush)' },
    { label: 'Scientific name', value: 'Ribes nigrum' },
    {
      label: 'Primary uses',
      value:
        'Berries for juice, cordials, preserves, and processing; rich in vitamin C',
    },
    {
      label: 'Climate',
      value: 'Cool temperate; winter-hardy with a winter chilling requirement',
    },
    {
      label: 'Soil preference',
      value:
        'Fertile, moisture-retentive loams and clay loams rich in organic matter',
      note: 'Prefers moist but not waterlogged, slightly acidic soils.',
    },
    {
      label: 'Management',
      value:
        'Regular pruning to renew fruiting wood; mechanically harvested at scale',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Blackcurrant is grown mainly as a processing crop, with the great majority of the berries going into juices, cordials, and other products valued for their strong flavor and high vitamin C content. Commercial production is concentrated in cool-temperate regions and is often highly mechanized.',
        },
        {
          type: 'paragraph',
          text: 'Because fruit is borne largely on one- and two-year-old wood, pruning to continually renew young fruiting shoots is central to maintaining yields over the life of the planting.',
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
              description: 'Grossulariaceae (currant and gooseberry family)',
            },
            { term: 'Genus and species', description: 'Ribes nigrum' },
            {
              term: 'Growth habit',
              description:
                'Deciduous multi-stemmed shrub bearing aromatic foliage and strigs (clusters) of small dark berries',
            },
            {
              term: 'Fruiting wood',
              description:
                'Berries borne mainly on younger wood, favoring regular renewal pruning',
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
          text: 'Blackcurrant is native to temperate Europe and northern Asia and has long been cultivated in Europe. Production is concentrated in cooler European countries, where the crop is grown at commercial scale largely for the processing market.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area and production by country are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Blackcurrant is a cool-temperate crop that is winter-hardy and requires sufficient winter chilling to break dormancy and flower reliably; inadequate chilling in mild winters leads to poor and uneven budbreak. Spring frosts can damage flowers, an important risk in early-flowering plantings.',
        },
        {
          type: 'paragraph',
          text: 'The crop is best suited to regions with cold winters and cool, moist growing seasons rather than hot, dry climates.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Blackcurrant grows best on fertile, moisture-retentive loams and clay loams rich in organic matter, with a slightly acidic to neutral reaction. It prefers moist conditions but does not tolerate waterlogging, so drainage remains important.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Blackcurrant’s preference for deep, moisture-retentive soils reflects its high demand for water during the growing season, but standing water still damages the roots.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Blackcurrant is propagated from hardwood cuttings and planted as bushes in rows. Establishment focuses on building a framework of vigorous young wood, and ongoing management centers on renewal pruning, weed and nutrient management, and protection from frost and disease.',
        },
        {
          type: 'list',
          items: [
            'Certified, virus-tested planting material to limit reversion and other virus problems',
            'Renewal pruning to maintain a supply of productive young fruiting wood',
            'Weed control and organic matter to support the shallow, fibrous roots',
            'Frost protection in early-flowering situations where feasible',
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
          text: 'Blackcurrant responds to nitrogen for shoot growth and to potassium for fruiting and berry quality, and it is sensitive to some nutrient imbalances. Organic matter and mulching support the crop’s moisture and nutrient needs.',
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
          text: 'Blackcurrant has a relatively high water requirement during the growing season, particularly during berry development, and yield and fruit size suffer under drought. Irrigation is used where rainfall is insufficient, while drainage is maintained to avoid waterlogging.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew (American gooseberry mildew) and currant anthracnose (leaf spot) are important foliar diseases of blackcurrant, and reversion, a virus disease spread by the blackcurrant gall mite, causes serious, cumulative losses. White pine blister rust can affect Ribes where its alternate host is present.',
        },
        {
          type: 'paragraph',
          text: 'Aphids distort foliage and can transmit viruses, the blackcurrant gall mite causes "big bud" and spreads reversion, and sawfly larvae defoliate bushes. Management combines clean planting material, resistant cultivars, pruning for airflow, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Blackcurrants are harvested when the berries are fully colored and ripe, by hand for fresh and premium markets and, at commercial scale, by over-the-row mechanical harvesters that strip the berries from the bushes. The fruit is perishable and is cooled and processed promptly.',
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
            'Juice and cordials, the main outlet for the crop, valued for flavor and vitamin C',
            'Jams, preserves, and other processed products',
            'Use as a flavoring and coloring in confectionery, dairy, and beverages',
            'Limited fresh-market and home-garden use',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'sawflies' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'blueberry' },
    { type: 'crop', slug: 'raspberry' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'climate', slug: 'frost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview centered on cool-temperate Europe, where most commercial production occurs for the processing market.',
  climateContext:
    'Cool-temperate, winter-hardy soft fruit with a winter chilling requirement; sensitive to spring frost and drought.',
  limitations: [
    'Chilling requirement and cultivar choice depend strongly on regional climate and are not reduced to universal guidance here.',
    'Reversion virus and its gall-mite vector are a major, cumulative constraint managed largely through clean stock.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of blackcurrant in temperate soft-fruit production',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Blackcurrant agronomy, pruning, and crop protection guidance',
    },
    {
      sourceId: 'rhs',
      citedFor: 'Blackcurrant cultivation and pest and disease guidance',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Blackcurrant crop, disease, and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Blackcurrant (Ribes nigrum)',
    description:
      'An evidence-based reference on blackcurrant: bush botany, chilling requirement, soils, renewal pruning, reversion virus, diseases, pests, and uses.',
    keywords: ['blackcurrant', 'Ribes nigrum', 'cassis', 'soft fruit'],
  },
  structuredData: { article: true },
};
