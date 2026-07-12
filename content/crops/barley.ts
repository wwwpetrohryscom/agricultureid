import type { CropContent } from '@/types/content';

export const barley: CropContent = {
  id: 'crop-barley',
  slug: 'barley',
  contentType: 'crop',
  title: 'Barley',
  scientificName: 'Hordeum vulgare',
  alternativeNames: ['Common barley'],
  category: 'Cereal crop',
  subcategory: 'Temperate cereal',
  botanicalFamily: 'Poaceae (grasses)',
  lifecycle: 'Annual (winter or spring types)',
  summary:
    'Barley is a temperate cereal grown for malting, animal feed, and food uses, cultivated as winter or spring types across cool and semi-arid regions and generally noted for tolerating a somewhat broader range of growing conditions than wheat.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Barley is one of the earliest cereals domesticated by humans and remains an important crop for malting, livestock feed, and, in some regions, direct food use. It is closely related to wheat botanically, though the two crops differ in spike structure and typical end use.',
    },
    {
      type: 'paragraph',
      text: 'Barley cultivars are classified as two-row or six-row according to the arrangement of fertile spikelets along the spike, a distinction that affects grain size, uniformity, and suitability for malting. Varieties are further divided into winter and spring types depending on their vernalization requirement.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (true grasses)' },
    { label: 'Life cycle', value: 'Annual (winter or spring types)' },
    { label: 'Scientific name', value: 'Hordeum vulgare' },
    {
      label: 'Primary uses',
      value: 'Malting for beverages, animal feed, food products',
    },
    {
      label: 'Climate',
      value:
        'Cool to temperate; comparatively tolerant of marginal growing conditions',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and clay loams',
      note: 'Optimal ranges are variety- and region-specific.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Barley is a self-pollinating annual grass grown for both malting and animal feed, as well as for food use in some regions. Cultivars are classified as two-row or six-row according to the arrangement of fertile spikelets on the spike, a distinction that influences grain size and uniformity.',
        },
        {
          type: 'table',
          caption: 'Principal end-use categories',
          columns: ['End use', 'General requirement emphasis'],
          rows: [
            [
              'Malting barley',
              'Grain uniformity, germination capacity, and a protein content suited to malting, brewing, or distilling',
            ],
            [
              'Feed barley',
              'Overall yield and energy content for livestock rations, with less stringent grain uniformity requirements',
            ],
            [
              'Food barley',
              'Whole and processed products, such as pearled or hulless barley, used directly in human food',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'Because growing conditions and end markets differ so widely, agronomic details such as sowing date, seeding rate, and variety choice are region-specific and should be based on local recommendations.',
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
            { term: 'Family', description: 'Poaceae (grass family)' },
            { term: 'Genus and species', description: 'Hordeum vulgare' },
            {
              term: 'Spike type',
              description:
                'Two-row (one fertile spikelet per node) or six-row (three fertile spikelets per node)',
            },
            {
              term: 'Growth habit',
              description: 'Tillering annual grass producing a terminal spike',
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
          text: 'Barley was domesticated in the Fertile Crescent of the Near East alongside wheat and is considered one of the founder crops of Old World agriculture. It spread across Europe, Asia, and North Africa in antiquity and later reached the Americas and other regions.',
        },
        {
          type: 'paragraph',
          text: 'Barley is now grown across a wide range of temperate and semi-arid regions. Current data on planted area, production, and trade by country are compiled by FAO and national agricultural statistics agencies and should be drawn from those primary sources.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Like wheat, barley includes winter types, which are sown in autumn and require a period of cold to trigger flowering, and spring types, sown after the coldest part of the year in regions where winters are too severe for autumn establishment.',
        },
        {
          type: 'paragraph',
          text: 'Barley is often considered somewhat more tolerant of drought, salinity, and marginal soils than wheat, though it remains sensitive to waterlogging and to heat stress during grain fill.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Barley grows well on well-drained loams and clay loams and is generally regarded as more tolerant of moderately saline or marginal soils than some other cereals. It is sensitive to strongly acidic soils and to waterlogging, both of which restrict root growth.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing, since tolerance varies among varieties.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Establishment depends on producing an even, well-anchored stand at the correct depth into a firm, moist seedbed. Sowing date, seeding rate, and row spacing are set locally according to variety type, soil, and expected season length.',
        },
        {
          type: 'list',
          items: [
            'Variety selection matched to winter/spring type, end use (malting, feed, or food), and disease pressure',
            'Crop rotation to manage soil-borne diseases and weeds',
            'Seedbed preparation appropriate to the tillage system in use',
            'Timely weed management, since barley competes poorly with weeds during early growth',
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
          text: 'Nitrogen management is particularly important for malting barley, since excessive grain protein can make grain unsuitable for malting even though it may still be acceptable for feed. Phosphorus and potassium support establishment and grain fill, with requirements depending on soil supply and target yield.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance, and malting barley programs in particular should follow buyer specifications. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Barley is grown both rain-fed, including in a number of semi-arid regions where its relative drought tolerance is valued, and under irrigation. Water demand is highest around stem elongation, heading, and grain filling.',
        },
        {
          type: 'paragraph',
          text: 'Crop water requirements are estimated from evapotranspiration and local climate; reference methods and data are published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Barley is affected by fungal diseases including powdery mildew, net blotch, and scald, whose importance varies by region and season, as well as by insect pests such as aphids, which can also transmit viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, crop rotation, field monitoring, and, where warranted, locally authorized control measures used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Barley is harvested once grain has matured and dried to a moisture content suitable for combining and safe storage. For malting barley, grain condition and germination capacity at harvest and during storage are especially important, since damaged or poorly dried grain may not meet malting specifications.',
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
            'Malting for beer brewing and spirit distilling',
            'Animal feed, including whole grain and processing by-products',
            'Food products such as pearled barley, barley flour, and hulless barley',
            'Straw used for livestock bedding or as a soil amendment',
          ],
        },
      ],
    },
  ],
  commonDiseases: [{ type: 'plant-disease', slug: 'powdery-mildew' }],
  commonPests: [{ type: 'pest', slug: 'aphids' }],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  relatedTopics: [{ type: 'crop', slug: 'wheat' }],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'cultivar', 'yield'],
  geographicScope:
    'Global overview. Variety type (two-row or six-row, winter or spring, malting or feed) and management practices are region-specific and vary by climate and market.',
  climateContext:
    'Cool-season cereal grown across temperate and semi-arid regions, often noted for tolerating a broader range of marginal soils and drought than some other cereals.',
  limitations: [
    'Variety type selection and nitrogen management for malting quality are region- and market-specific and not reduced to universal values here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Malting quality standards vary by buyer and market and should be confirmed with local grain trade or brewing and distilling industry specifications.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of barley in global food and feed systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'ahdb',
      citedFor: 'Regional barley agronomy and malting guidance',
    },
    { sourceId: 'usda-ars', citedFor: 'Barley disease and pest research' },
    {
      sourceId: 'ec-agri',
      citedFor: 'European Union barley production context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Barley',
    description:
      'A structured, evidence-based reference on barley: classification, climate and soil needs, agronomy, malting and feed uses, diseases, pests, and harvest.',
    keywords: ['barley', 'Hordeum vulgare', 'cereal crop', 'malting barley'],
  },
  structuredData: { article: true },
};
