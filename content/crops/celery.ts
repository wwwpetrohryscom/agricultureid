import type { CropContent } from '@/types/content';

export const celery: CropContent = {
  id: 'crop-celery',
  slug: 'celery',
  contentType: 'crop',
  title: 'Celery',
  scientificName: 'Apium graveolens var. dulce',
  alternativeNames: ['Stalk celery'],
  category: 'Vegetable crop',
  subcategory: 'Apiaceous (umbellifer) vegetable',
  botanicalFamily: 'Apiaceae (carrot family)',
  lifecycle: 'Biennial, grown as an annual for petiole (stalk) harvest',
  summary:
    'Celery is a cool-season vegetable grown for its crisp leaf stalks (petioles), notably demanding of consistent moisture and susceptible to boron-deficiency disorders during production.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Celery is grown for the thickened, crisp leaf stalks that form a tight bunch at the base of the plant, harvested before the plant bolts into flower. It belongs to the same family as carrot and other umbellifer vegetables, sharing some pest and disease vulnerabilities with them.',
    },
    {
      type: 'paragraph',
      text: 'Like carrot, celery is botanically biennial, requiring a cold period the following season to flower, but is grown commercially as an annual harvested for its stalks within the first season. It is regarded as one of the more demanding vegetable crops to grow well, requiring careful, consistent moisture and nutrient management.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Apiaceae (carrot family)' },
    {
      label: 'Life cycle',
      value: 'Biennial, grown as an annual for petiole (stalk) harvest',
    },
    { label: 'Main species', value: 'Apium graveolens var. dulce' },
    {
      label: 'Primary uses',
      value:
        'Fresh-market and cooked vegetable; flavoring base in many cuisines',
    },
    {
      label: 'Climate',
      value:
        'Cool-season; sensitive to both heat and prolonged cold exposure (which can trigger bolting)',
    },
    {
      label: 'Soil preference',
      value: 'Moisture-retentive, organic-rich soils',
      note: 'Shallow roots require consistently available moisture and nutrients.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Celery is grown for its compact, upright bunch of thickened leaf stalks, harvested whole once the plant reaches marketable size. Modern self-blanching cultivars have largely replaced the traditional practice of earthing up (mounding soil around the stalks) to exclude light and pale the stalks.',
        },
        {
          type: 'paragraph',
          text: "Production is concentrated in regions with reliably cool, moist conditions and access to consistent irrigation, given the crop's comparatively shallow root system and exacting moisture requirements.",
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
              description: 'Apiaceae (carrot/umbellifer family)',
            },
            { term: 'Species', description: 'Apium graveolens' },
            {
              term: 'Cultivar group',
              description: 'Dulce group (stalk celery)',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial broadleaf plant grown as an annual, producing a tight rosette of thickened, ribbed leaf stalks',
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
          text: 'Celery derives from wild Apium graveolens populations native to marshy areas of the Mediterranean and parts of Asia, with the modern stalk-type crop developed through centuries of selection in Europe before spreading globally as a commercial vegetable.',
        },
        {
          type: 'paragraph',
          text: 'Production and trade figures change over time and by region; current data are best obtained from primary sources such as FAOSTAT.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Celery favors cool, humid growing conditions and is sensitive to heat, which can cause stringy, poor-quality stalks and encourage bolting. Conversely, exposure to prolonged cold temperatures early in growth can also trigger premature bolting through vernalization.',
        },
        {
          type: 'paragraph',
          text: 'This narrow tolerance for temperature extremes at either end makes planting-date timing an important regional decision to keep the crop within its preferred temperature range through stalk development.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Celery performs best on deep, moisture-retentive, organic-rich soils, historically including reclaimed peat and muck soils in some traditional production areas, reflecting its origin in naturally wet habitats.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: "The crop's shallow, limited root system makes it particularly sensitive to soil moisture fluctuation. Soil suitability should be assessed with local soil survey information and, where available, testing.",
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Celery is almost always established from transplants raised in trays or seedbeds, since direct-seeded celery is slow and uneven to establish; transplants are set out once the risk of a cold snap that could trigger bolting has passed.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to self-blanching habit, season, and local climate',
            'Careful hardening and timing of transplants to avoid cold-induced bolting',
            "Consistent irrigation scheduling given the crop's shallow root system",
            'Adequate, steady nutrient supply to avoid growth checks that affect stalk quality',
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
          text: "Celery is notably sensitive to boron deficiency, which can cause cracked stems and internal browning of the stalk, a disorder of particular concern given the crop's otherwise high market value. Potassium also supports stalk quality and turgor.",
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and tissue tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Celery has a shallow, poorly developed root system and requires consistently available moisture throughout growth; even brief water stress can cause stringy, pithy, or cracked stalks. Drip and sprinkler irrigation are both used, with frequent scheduling typical.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Downy mildew can affect foliage under cool, humid conditions, and bacterial leaf spot affects leaves and stalks in warm, wet weather. Aphids are a common pest, and celery leaf miners tunnel within leaf tissue, both directly reducing quality and, for aphids, transmitting viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Celery is harvested by cutting the whole plant at the base once stalks have reached full size and before the plant shows signs of bolting, which reduces stalk quality and increases stringiness.',
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
            'Fresh-market vegetable, eaten raw or cooked',
            "Flavoring base (with onion and carrot) in many cuisines' stocks and soups",
            'Processed products including juice and dehydrated flavoring products',
            'Seed used as a spice and in celery salt',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'bacterial-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'peat-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'machinery', slug: 'transplanter' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'carrot' },
    { type: 'crop', slug: 'leek' },
    { type: 'crop', slug: 'asparagus' },
  ],
  glossaryTerms: ['annual-crop', 'micronutrient', 'crop-rotation', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season vegetable sensitive to both heat stress and cold-induced bolting; requires consistently moist conditions.',
  limitations: [
    'Sensitivity to cold-induced bolting varies by cultivar and transplant age and should be managed with local guidance.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of celery in vegetable production systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Celery disease and pest compendium data' },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Celery cultivar and production research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Celery',
    description:
      'A structured, evidence-based reference on celery: classification, moisture and boron sensitivity, soil needs, diseases, pests, and uses.',
    keywords: [
      'celery',
      'Apium graveolens',
      'stalk vegetable',
      'umbellifer crop',
    ],
  },
  structuredData: { article: true },
};
