import type { CropContent } from '@/types/content';

export const tea: CropContent = {
  id: 'crop-tea',
  slug: 'tea',
  contentType: 'crop',
  title: 'Tea',
  scientificName: 'Camellia sinensis',
  alternativeNames: ['Tea plant'],
  category: 'Beverage crop',
  subcategory: 'Perennial evergreen shrub',
  botanicalFamily: 'Theaceae (tea family)',
  lifecycle: 'Perennial',
  summary:
    'Tea is a perennial evergreen shrub maintained through regular pruning as a low, flat-topped "plucking table," grown mainly in highland and monsoon-influenced regions for its young leaves and buds.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tea is grown as a long-lived perennial shrub that, left unpruned, would grow into a small tree; commercial cultivation instead maintains plants through regular pruning at a low, flat-topped height known as the plucking table, from which young shoots are repeatedly harvested.',
    },
    {
      type: 'paragraph',
      text: 'All traditional tea types — including black, green, oolong, and white tea — are produced from the same species, Camellia sinensis, with differences arising mainly from processing methods rather than from different source plants.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Theaceae (tea family)' },
    { label: 'Life cycle', value: 'Perennial evergreen shrub' },
    { label: 'Main species', value: 'Camellia sinensis' },
    {
      label: 'Primary uses',
      value: 'Processed leaf for black, green, oolong, and white tea',
    },
    {
      label: 'Climate',
      value: 'Warm, humid subtropical to tropical highland climate',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained, strongly acidic soils',
      note: 'Volcanic and highland loam soils are widely used.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Tea is grown across highland and monsoon-influenced regions of Asia and, to a lesser extent, parts of Africa and Latin America, on both large estates and smallholder plots, with the crop typically remaining productive for many decades under regular management.',
        },
        {
          type: 'paragraph',
          text: 'Because tea is harvested as young, actively growing shoots rather than a single seasonal crop, well-managed plantations can be plucked repeatedly across much of the year in favorable climates.',
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
            { term: 'Family', description: 'Theaceae (tea family)' },
            { term: 'Genus and species', description: 'Camellia sinensis' },
            {
              term: 'Varietal groups',
              description:
                'var. sinensis (China type, smaller leaf, more cold-tolerant) and var. assamica (Assam type, larger leaf, more tropical)',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen shrub maintained by pruning at a low picking height in commercial cultivation',
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
          text: 'Tea originates from the region spanning southwestern China and the eastern Himalayas, where wild and semi-wild populations of Camellia sinensis are found; cultivation and processing knowledge subsequently spread across Asia and, from the colonial era, to other tropical and subtropical highland regions.',
        },
        {
          type: 'paragraph',
          text: 'Major production today is concentrated in China, India, Kenya, Sri Lanka, and other parts of Asia and East Africa. Current production and trade figures are compiled by FAO and national tea-sector agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Tea requires warm temperatures, high humidity, and well-distributed rainfall, and is often grown at higher elevations within the tropics and subtropics, where cooler temperatures are associated with slower shoot growth and, in many regions, more delicate flavor characteristics.',
        },
        {
          type: 'paragraph',
          text: 'Production in monsoon-influenced regions follows marked seasonal flushes of growth tied to the rains, with distinct harvest periods (flushes) recognized in some origins for their flavor characteristics.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Tea requires deep, well-drained soils with strongly acidic pH, a distinctive requirement compared with most other perennial crops; volcanic soils and acidic highland loams are widely used in major producing regions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soils with neutral to alkaline pH are generally unsuitable for tea without substantial, often impractical, amendment. Site suitability should be assessed with local soil survey and pH testing.',
        },
      ],
    },
    {
      id: 'plantation-establishment',
      heading: 'Plantation establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'New tea gardens are established from cuttings of selected clones or, less commonly today, from seed, with young plants trained through early pruning to develop the low, spreading frame needed for a productive plucking table.',
        },
        {
          type: 'list',
          items: [
            'Clonal selection for yield, quality, and pest or disease tolerance',
            'Formative pruning to establish a low, spreading plucking table',
            'Ongoing maintenance pruning cycles to sustain young shoot production',
            'Shade-tree management in some traditional and agroforestry-style tea systems',
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
          text: 'Nitrogen strongly influences shoot growth rate and yield, since the crop is harvested as young vegetative tissue rather than fruit or seed. Maintaining strongly acidic soil conditions is central to nutrient availability and long-term plantation health.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Tea is grown predominantly under rain-fed conditions in monsoon-influenced and consistently humid regions, with shoot growth closely tracking seasonal rainfall patterns.',
        },
        {
          type: 'paragraph',
          text: 'Supplemental sprinkler irrigation is used in some drier tea-growing areas to maintain more consistent shoot flushing across the year.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Leaf and stem diseases including anthracnose can affect foliage and young shoots under humid conditions, while root rot can weaken or kill plants in poorly drained soils. Spider mites and thrips are common pests of tea foliage, with feeding damage affecting both shoot growth and leaf quality.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant clones where available, canopy and shade management, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Tea is harvested by plucking young shoots, typically the terminal bud and the two youngest leaves, either by hand or with mechanical shears or harvesters, at intervals of one to two weeks depending on growth rate and desired quality.',
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
            'Processed leaf for black, green, oolong, and white tea beverages',
            'Instant and ready-to-drink tea products',
            'Extracts used in some food, beverage, and personal-care formulations',
            'Pruning residues and processing waste used in composting or mulch',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'spider-mites' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'volcanic-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'climate', slug: 'monsoon' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'cocoa' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of production concentrated in Asian and East African highland and monsoon-influenced regions.',
  climateContext:
    'Warm, humid perennial shrub requiring strongly acidic soils; growth follows monsoon-driven seasonal flushes in many origins.',
  limitations: [
    'Clonal selection, pruning cycle, and flush timing are highly region- and estate-specific and are not detailed here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global tea production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Tea disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Tea',
    description:
      'A structured, evidence-based reference on tea: classification, climate and acidic soil needs, plantation management, nutrition, diseases, and pests.',
    keywords: ['tea', 'Camellia sinensis', 'tea plantation', 'tea cultivation'],
  },
  structuredData: { article: true },
};
