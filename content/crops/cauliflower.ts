import type { CropContent } from '@/types/content';

export const cauliflower: CropContent = {
  id: 'crop-cauliflower',
  slug: 'cauliflower',
  contentType: 'crop',
  title: 'Cauliflower',
  scientificName: 'Brassica oleracea var. botrytis',
  alternativeNames: ['Cole crop cauliflower'],
  category: 'Vegetable crop',
  subcategory: 'Brassica (cole) vegetable',
  botanicalFamily: 'Brassicaceae (mustard family)',
  lifecycle: 'Biennial, grown as an annual for curd harvest',
  summary:
    'Cauliflower is a cool-season brassica grown for its compact, undeveloped flower head (curd), notably more sensitive to temperature fluctuation than related cole crops such as broccoli and cabbage.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cauliflower is a cultivated variety of Brassica oleracea grown for its curd — a dense, undifferentiated mass of immature flower tissue that forms the edible head. Unlike broccoli, the curd is typically white or lightly colored, with colored (purple, orange, green) cultivars also grown in specialty markets.',
    },
    {
      type: 'paragraph',
      text: 'Cauliflower is generally regarded as more exacting to grow well than broccoli or cabbage, since curd initiation and quality are particularly sensitive to temperature swings, and stress at the wrong stage can cause small, poorly formed, or discolored heads ("ricing" or "buttoning").',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Brassicaceae (mustard family)' },
    {
      label: 'Life cycle',
      value: 'Biennial, grown as an annual for curd harvest',
    },
    { label: 'Main species', value: 'Brassica oleracea var. botrytis' },
    {
      label: 'Primary uses',
      value: 'Fresh and processed (frozen) vegetable',
    },
    {
      label: 'Climate',
      value:
        'Cool-season; particularly sensitive to temperature fluctuation during curd development',
    },
    {
      label: 'Soil preference',
      value: 'Firm, fertile, well-drained loams',
      note: 'Clubroot risk rises in wet, acidic soils.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Cauliflower is grown for its compact curd, harvested while still tight and before the flower buds within it begin to elongate and separate. Commercial production relies heavily on hybrid cultivars selected for curd uniformity, self-blanching leaf cover, and defined maturity windows.',
        },
        {
          type: 'paragraph',
          text: 'Because curd quality is sensitive to growing conditions, successful production often depends on closely matching cultivar choice and planting date to the local temperature pattern expected during curd development.',
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
            { term: 'Family', description: 'Brassicaceae (mustard family)' },
            { term: 'Species', description: 'Brassica oleracea' },
            {
              term: 'Cultivar group',
              description: 'Botrytis group (cauliflower)',
            },
            {
              term: 'Growth habit',
              description:
                'Biennial broadleaf plant grown as an annual, producing a compact curd of undifferentiated immature flower tissue',
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
          text: 'Cauliflower, like broccoli, derives from wild cabbage populations of the Mediterranean coast, with the curd-forming Botrytis group developed and refined in the eastern Mediterranean and later Western Europe before spreading globally as a major vegetable crop.',
        },
        {
          type: 'paragraph',
          text: 'Current area, production, and trade figures change over time and by region; they are best obtained from primary sources such as FAOSTAT rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cauliflower requires cool, stable temperatures for good curd initiation and development; both unusually high and unusually low temperatures during this stage can disrupt curd formation, producing small, loose, or "riced" curds.',
        },
        {
          type: 'paragraph',
          text: 'Because of this sensitivity, cultivars are often bred and selected for specific maturity windows (e.g. summer, autumn, or winter types) matched to expected local temperature patterns during curd formation.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Cauliflower performs best on firm, fertile, well-drained loams with consistent moisture supply. As with other brassicas, soil pH management is an important tool against clubroot, a serious soil-borne disease favored by wetter, more acidic soils.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Maintaining soil pH toward the higher end of the range tolerated by the crop is a widely used cultural tool against clubroot. Soil suitability should be assessed with local soil survey information and, where available, testing.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Cauliflower is commonly established from transplants, allowing precise control over plant spacing and timing needed to hit a defined harvest window, though direct seeding is used in some production systems.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection matched to season, temperature pattern, and market curd color',
            'Crop rotation with non-brassica crops to reduce clubroot and other soil-borne disease risk',
            'Consistent moisture and nutrient supply to avoid growth checks that impair curd quality',
            'Leaf-tying or self-blanching cultivars used in some markets to protect curd color from sunlight',
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
          text: 'Nitrogen supports leaf and curd development, while boron and sulfur are of particular importance in brassicas; boron deficiency in particular is associated with internal browning and hollow stem disorders in cauliflower.',
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
          text: 'Cauliflower has a comparatively shallow root system and requires consistent soil moisture throughout growth, since water stress at almost any stage can disrupt curd development. Sprinkler and drip irrigation are both used depending on scale and region.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Clubroot is a major soil-borne threat, causing swollen, distorted roots and stunted, poorly heading plants, and can persist in soil for many years once established. Downy mildew affects foliage under cool, humid conditions, while flea beetles damage seedling leaves and armyworms feed on foliage and curds.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant cultivars, crop rotation, soil pH management, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Cauliflower is harvested by hand when the curd reaches full size while still compact and before individual flower buds begin to separate or elongate, since overmature curds quickly lose quality and market value.',
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
            'Frozen and other processed vegetable products',
            'Riced and other processed formats used as low-carbohydrate food substitutes',
            'Crop residues sometimes incorporated as green manure or livestock feed',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'clubroot' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'armyworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'nutrient', slug: 'sulfur' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'machinery', slug: 'transplanter' },
    { type: 'climate', slug: 'heat-stress' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'broccoli' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'kale' },
  ],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'micronutrient', 'yield'],
  geographicScope:
    'Global overview. Agronomic details (timing, rates, varieties) are region-specific and vary widely.',
  climateContext:
    'Cool-season brassica, particularly sensitive to temperature fluctuation during curd development.',
  limitations: [
    'Curd-quality disorders (ricing, buttoning) are strongly influenced by local temperature patterns and cultivar choice rather than a single universal cause.',
    'Production statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of cauliflower in vegetable production systems',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Brassica disease and pest compendium data' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidelines for cauliflower',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Cauliflower',
    description:
      'A structured, evidence-based reference on cauliflower: classification, curd development and climate sensitivity, soil, pests, and uses.',
    keywords: [
      'cauliflower',
      'Brassica oleracea',
      'brassica vegetable',
      'cole crop',
    ],
  },
  structuredData: { article: true },
};
