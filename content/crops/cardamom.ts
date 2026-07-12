import type { CropContent } from '@/types/content';

export const cardamom: CropContent = {
  id: 'crop-cardamom',
  slug: 'cardamom',
  contentType: 'crop',
  title: 'Cardamom',
  scientificName: 'Elettaria cardamomum',
  alternativeNames: ['Green cardamom', 'True cardamom'],
  category: 'Spice crop',
  subcategory: 'Perennial rhizomatous understorey herb',
  botanicalFamily: 'Zingiberaceae (ginger family)',
  lifecycle: 'Perennial',
  summary:
    'Cardamom is a perennial, rhizomatous understorey herb of the ginger family grown for its dried seed capsules, one of the most highly valued spices by weight in global trade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cardamom is traditionally grown as an understorey crop beneath the shade of taller forest trees, reflecting its natural habitat in humid tropical evergreen forest. Cultivation combines elements of forest management with intensive perennial cropping.',
    },
    {
      type: 'paragraph',
      text: 'The plant produces clumps of leafy pseudostems arising from underground rhizomes, with flowers and subsequent seed capsules borne on separate panicles near ground level.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Zingiberaceae (ginger family)' },
    { label: 'Life cycle', value: 'Perennial rhizomatous herb' },
    { label: 'Main species', value: 'Elettaria cardamomum' },
    { label: 'Primary uses', value: 'Dried seed capsules as a culinary spice' },
    {
      label: 'Climate',
      value: 'Tropical, humid, shaded understorey conditions',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained, organic-matter-rich loams',
      note: 'Traditional cultivation is often on forested hill slopes.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cardamom is grown mainly by smallholder farmers in a limited number of tropical mountain regions, most notably the Western Ghats of India and the highlands of Guatemala, both of which are major producers.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop is typically grown under a managed forest or shade-tree canopy, cardamom cultivation is closely tied to the management of the surrounding tree cover, which moderates temperature, humidity, and light.',
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
            { term: 'Family', description: 'Zingiberaceae (ginger family)' },
            { term: 'Genus', description: 'Elettaria' },
            { term: 'Principal species', description: 'Elettaria cardamomum' },
            {
              term: 'Growth habit',
              description:
                'Perennial rhizomatous herb forming clumps of leafy pseudostems, with flowering panicles near the base bearing seed capsules',
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
          text: 'Cardamom is native to the evergreen forests of the Western Ghats of southern India and parts of Sri Lanka, where it has been harvested and later cultivated for centuries as a valuable spice.',
        },
        {
          type: 'paragraph',
          text: 'India remains a leading producer, alongside Guatemala, which became a major producer following the crop’s introduction there in the twentieth century. Production and trade statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cardamom requires a warm, humid tropical climate with well-distributed rainfall and partial shade, mimicking its native forest-understorey habitat. It has little tolerance for frost, drought, or strong direct sun.',
        },
        {
          type: 'paragraph',
          text: 'Deep, well-drained loams rich in organic matter, typical of forested hill slopes, support healthy rhizome and root growth. Poor drainage significantly increases the risk of root and rhizome disease.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Shade level, humidity, and drainage should be assessed together at the site level, since these factors interact strongly in cardamom cultivation.',
        },
      ],
    },
    {
      id: 'cultivation-and-management',
      heading: 'Cultivation and management',
      body: [
        {
          type: 'list',
          items: [
            'Establishment from rhizome divisions or seedlings beneath a managed shade canopy',
            'Shade regulation through selective thinning of overstorey trees to balance light and humidity',
            'Mulching and organic matter addition to maintain soil moisture and fertility on sloped sites',
            'Periodic clump thinning and rhizome management to sustain productivity over the long term',
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
          text: 'Nitrogen supports vigorous pseudostem and leaf growth, while potassium contributes to flowering and capsule development across the extended cropping cycle.',
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
          text: 'Cardamom requires consistently moist conditions and is grown mainly in regions with abundant, well-distributed rainfall; extended dry periods can reduce flowering and capsule set.',
        },
        {
          type: 'paragraph',
          text: 'Supplemental sprinkler irrigation is used in some production areas during drier periods to maintain the humidity and soil moisture the crop requires.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Rhizome and root rot are significant diseases in poorly drained cardamom plantations, and anthracnose-type leaf blight can affect foliage under humid conditions. Cardamom thrips is a major, well-documented pest causing characteristic scarring on developing capsules, and aphids are common sap-feeding pests that can also spread viral disease.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Root rot', 'Disease', 'Significant risk on poorly drained sites'],
            [
              'Anthracnose',
              'Disease',
              'Leaf blight symptoms under humid conditions',
            ],
            [
              'Thrips',
              'Pest',
              'Major pest causing scarring on developing capsules',
            ],
            [
              'Aphids',
              'Pest',
              'Sap-feeding insects that can spread viral disease',
            ],
          ],
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Mature but unopened capsules are hand-picked in successive rounds as they ripen over an extended flowering season, then cured and dried to produce the familiar dried cardamom pods of trade.',
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
            'Whole dried capsules and their seeds used as a culinary spice in sweet and savory dishes',
            'Ground cardamom used in spice blends and baked goods',
            'Cardamom essential oil extracted for the flavor and fragrance industries',
            'Whole pods used in some regions to flavor beverages such as coffee and tea',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'thrips' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'turmeric' },
    { type: 'crop', slug: 'ginger' },
    { type: 'crop', slug: 'black-pepper' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview; major production in India (Western Ghats) and Guatemala, with smaller production in other tropical regions.',
  climateContext:
    'Tropical, humid, shade-adapted perennial understorey crop with no tolerance for frost or prolonged drought.',
  limitations: [
    'Shade management and rhizome husbandry practices vary considerably by region and are not detailed exhaustively here.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global cardamom production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Cardamom disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cardamom',
    description:
      'A structured, evidence-based reference on cardamom: classification, shade and climate needs, cultivation, diseases, pests, harvest, and spice uses.',
    keywords: [
      'cardamom',
      'Elettaria cardamomum',
      'spice crop',
      'cardamom cultivation',
    ],
  },
  structuredData: { article: true },
};
