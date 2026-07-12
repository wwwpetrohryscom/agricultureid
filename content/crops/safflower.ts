import type { CropContent } from '@/types/content';

export const safflower: CropContent = {
  id: 'crop-safflower',
  slug: 'safflower',
  contentType: 'crop',
  title: 'Safflower',
  scientificName: 'Carthamus tinctorius',
  alternativeNames: ['False saffron'],
  category: 'Oilseed crop',
  subcategory: 'Annual oilseed crop',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Annual',
  summary:
    'Safflower is a spiny, deep-rooted annual oilseed grown for its seeds, valued for drought tolerance and its ability to use residual soil moisture in semi-arid cropping systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Safflower is grown mainly for its oilseed, pressed for cooking oil and, historically, for dyes extracted from its flower petals. Its deep taproot allows it to draw on subsoil moisture, making it a useful crop in dryland and residual-moisture rotations.',
    },
    {
      type: 'paragraph',
      text: 'Modern cultivars are bred primarily for oil content and fatty-acid composition, with spineless types developed to ease handling, since the wild-type spiny bracts around the flower heads can complicate harvest and crop scouting.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Main species', value: 'Carthamus tinctorius' },
    { label: 'Primary uses', value: 'Edible oil, birdseed, historically dye' },
    {
      label: 'Climate',
      value: 'Semi-arid to temperate; deep-rooted and drought-tolerant',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained loams and clay loams',
      note: 'Intolerant of waterlogging; tolerance varies by cultivar.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower is grown as a rotation crop in semi-arid grain-growing regions, valued for its deep root system, which can access soil moisture stored below the reach of shallower-rooted cereals.',
        },
        {
          type: 'paragraph',
          text: 'Production is concentrated in regions with distinct dry seasons where the crop can mature on stored soil moisture with limited additional rainfall, though it is also grown under irrigation in some areas.',
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
            { term: 'Family', description: 'Asteraceae (daisy family)' },
            { term: 'Genus', description: 'Carthamus' },
            {
              term: 'Principal species',
              description: 'Carthamus tinctorius (cultivated safflower)',
            },
            {
              term: 'Growth habit',
              description:
                'Erect, branching annual with a deep taproot, producing thistle-like flower heads and oil-rich achenes',
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
          text: 'Safflower has a long history of cultivation across the Middle East, South Asia, and North Africa, originally valued for the dye extracted from its flowers before being developed as a modern oilseed crop.',
        },
        {
          type: 'paragraph',
          text: 'It is grown today in semi-arid regions across several continents, with production and trade data compiled by FAO and national agricultural statistics agencies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower is adapted to semi-arid and temperate climates with cool, moist conditions during early vegetative growth followed by warmer, drier conditions during flowering and seed fill.',
        },
        {
          type: 'paragraph',
          text: 'Its deep root system supports notable drought tolerance once established, though the crop is sensitive to prolonged waterlogging.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower performs best on deep, well-drained loam and clay loam soils that allow its taproot to access subsoil moisture reserves. Shallow or compacted soils restrict rooting and reduce the crop’s characteristic drought tolerance.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poorly drained soils increase the risk of root rot, particularly during wet establishment periods. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower is typically sown into a firm, moist seedbed early in the growing season to allow root development before the onset of drier conditions.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection for oil profile, spinelessness, and regional adaptation',
            'Sowing timed to establish the crop ahead of seasonal drought and heat',
            'Weed control during early growth, before the canopy closes',
            'Rotation with cereals or other crops to manage disease pressure and utilize the deep root system',
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
          text: 'Nitrogen supports vegetative growth and head number, while overall fertility requirements are moderate relative to some other oilseed crops, particularly in dryland systems where yield potential is set largely by available moisture.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower is often grown on stored soil moisture in dryland rotations, though it is also produced under irrigation in some regions, with water demand concentrated around flowering and seed fill.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop is intolerant of waterlogging, irrigation scheduling and drainage are managed to avoid saturated root-zone conditions.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt can cause vascular wilting and stand loss in susceptible cultivars, and root rot is a significant risk in poorly drained or waterlogged soils. Aphids are common sap-feeding pests, and thrips can affect flower heads and developing seed.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on resistant or tolerant cultivars, crop rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Safflower is harvested by combine once the flower heads and seed have dried down in the field, similar in timing approach to other dryland oilseed and cereal crops, though the spiny bracts of some cultivars require attention to header settings.',
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
            'Edible oil extraction for cooking and food processing',
            'Birdseed and other specialty seed markets',
            'Historical and niche use of flower petals as a dye and colorant',
            'Oilseed meal used as animal feed after oil extraction',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'climate', slug: 'drought' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'soil-topic', slug: 'soil-drainage' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sesame' },
    { type: 'crop', slug: 'sunflower' },
  ],
  glossaryTerms: ['annual-crop', 'yield', 'crop-rotation'],
  geographicScope:
    'Global overview of production in semi-arid and temperate dryland cropping regions.',
  climateContext:
    'Deep-rooted, drought-tolerant annual suited to semi-arid climates; intolerant of waterlogged soils.',
  limitations: [
    'Cultivar selection (spineless vs. spiny types, oil profile) and rotation position are region-specific decisions not covered by universal values here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global safflower production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Safflower disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Safflower',
    description:
      'A structured, evidence-based reference on safflower: classification, drought-tolerant agronomy, soil needs, diseases, pests, and oilseed uses.',
    keywords: [
      'safflower',
      'Carthamus tinctorius',
      'oilseed crop',
      'dryland crop',
    ],
  },
  structuredData: { article: true },
};
