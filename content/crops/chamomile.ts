import type { CropContent } from '@/types/content';

export const chamomile: CropContent = {
  id: 'crop-chamomile',
  slug: 'chamomile',
  contentType: 'crop',
  title: 'Chamomile',
  scientificName:
    'Matricaria chamomilla (German chamomile); Chamaemelum nobile (Roman chamomile) is also cultivated',
  alternativeNames: ['German chamomile'],
  category: 'Aromatic and culinary herb crop',
  subcategory: 'Annual flowering herb',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Annual',
  summary:
    'Chamomile is a low-growing flowering herb of the daisy family grown for its small, daisy-like flower heads, dried and used in herbal teas, food flavoring, and fragrance products.',
  introduction: [
    {
      type: 'paragraph',
      text: 'German chamomile, an annual, is the species most widely grown for commercial flower production, while Roman chamomile, a low-growing perennial, is more often used as an ornamental groundcover. Both share the characteristic small, white-petaled, yellow-centered flower heads harvested for drying.',
    },
    {
      type: 'paragraph',
      text: 'Fields are typically direct-seeded and grown through a single season, with flowers hand- or machine-harvested repeatedly as they open over several weeks.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    { label: 'Life cycle', value: 'Annual (German chamomile)' },
    { label: 'Main species', value: 'Matricaria chamomilla' },
    {
      label: 'Primary uses',
      value: 'Dried flowers for herbal tea, flavoring, and fragrance',
    },
    {
      label: 'Climate',
      value:
        'Temperate; cool-season preferred, tolerant of a range of conditions',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams',
      note: 'Tolerates soils of moderate to low fertility.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Chamomile is grown both as a garden herb and, in several countries, as a field-scale crop supplying dried flowers to the herbal tea and flavoring industries.',
        },
        {
          type: 'paragraph',
          text: 'Because flower heads mature and open over an extended period, commercial harvest is typically repeated across several passes through the growing season.',
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
            { term: 'Genus', description: 'Matricaria' },
            {
              term: 'Principal species',
              description:
                'Matricaria chamomilla (German chamomile); Chamaemelum nobile (Roman chamomile) is a related, separately classified species',
            },
            {
              term: 'Growth habit',
              description:
                'Low, branching annual herb with finely divided leaves and small daisy-like flower heads',
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
          text: 'German chamomile is native to Europe and western Asia, where it has long grown as a wild and cultivated plant valued for its flowers. It has since naturalized and been cultivated across many temperate regions worldwide.',
        },
        {
          type: 'paragraph',
          text: 'Significant commercial production occurs in parts of Eastern Europe and other temperate regions supplying dried-flower and extract markets. Production statistics are compiled at national and regional levels.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Chamomile grows best in temperate climates with mild to cool conditions and tolerates a range of rainfall patterns, though excessive heat can shorten the flowering period.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained loams and sandy loams of moderate to low fertility are suitable; the crop generally tolerates poorer soils better than many other herb crops but performs poorly under waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Site conditions should be confirmed against local guidance, since chamomile’s tolerance of poor soils varies with regional climate and rainfall.',
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
            'Direct seeding into a fine, firm seedbed, since seeds are very small',
            'Even stand establishment important for uniform flowering and ease of harvest',
            'Weed control critical during early growth, as seedlings compete poorly with weeds',
            'Repeated harvest passes as flower heads mature over several weeks',
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
          text: 'Chamomile generally requires modest fertility; nitrogen supports vegetative growth and flower production, though excessive rates can favor leafy growth over flowering.',
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
          text: 'Consistent moisture during establishment and flowering supports even flower production, while established plants tolerate moderate dry spells reasonably well.',
        },
        {
          type: 'paragraph',
          text: 'Sprinkler or drip irrigation is used depending on the scale and region of production, with scheduling based on local rainfall and evapotranspiration.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew can affect chamomile foliage under humid conditions, and damping-off can reduce seedling establishment in wet, poorly drained seedbeds. Aphids and thrips are common pests affecting foliage and flower heads.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            ['Powdery mildew', 'Disease', 'Favored by humid conditions'],
            [
              'Damping-off',
              'Disease',
              'Affects seedlings in wet, poorly drained seedbeds',
            ],
            [
              'Aphids',
              'Pest',
              'Sap-feeding insects on foliage and flower heads',
            ],
            ['Thrips', 'Pest', 'Feed on flowers and foliage'],
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
          text: 'Flower heads are harvested by hand or with specialized mechanical harvesters once fully open, typically over several passes through the season, then dried promptly to preserve color and aroma.',
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
            'Dried flower heads used to prepare herbal infusions and teas',
            'Extracts used as flavoring in food and beverage products',
            'Essential oil and extracts used in the cosmetics and fragrance industries',
            'Ornamental and pollinator-friendly garden use in some settings',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'thrips' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'fertilizer', slug: 'compost' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'irrigation-method', slug: 'sprinkler-irrigation' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'artichoke' },
    { type: 'crop', slug: 'mint' },
  ],
  glossaryTerms: ['annual-crop', 'cultivar'],
  geographicScope:
    'Global overview; significant commercial production in parts of Eastern Europe and other temperate regions supplying dried-flower and extract markets.',
  climateContext:
    'Temperate annual flowering herb tolerant of a range of soils and rainfall patterns; excessive heat can shorten the flowering period.',
  limitations: [
    'German and Roman chamomile differ in life cycle, habit, and typical use, which is not detailed exhaustively here.',
    'Chamomile is discussed here only as an agricultural and flavoring crop; medicinal or health-efficacy claims are outside the scope of this reference.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global aromatic and herb crop context' },
    {
      sourceId: 'cabi',
      citedFor: 'Chamomile disease and pest compendium data',
    },
    { sourceId: 'rhs', citedFor: 'Cultivation guidance' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Chamomile',
    description:
      'A structured, evidence-based reference on chamomile: classification, climate needs, cultivation, diseases, pests, harvest, and flower crop uses.',
    keywords: [
      'chamomile',
      'Matricaria chamomilla',
      'aromatic herb crop',
      'chamomile flower harvest',
    ],
  },
  structuredData: { article: true },
};
