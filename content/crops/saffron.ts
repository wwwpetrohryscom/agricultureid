import type { CropContent } from '@/types/content';

export const saffron: CropContent = {
  id: 'crop-saffron',
  slug: 'saffron',
  contentType: 'crop',
  title: 'Saffron',
  scientificName: 'Crocus sativus',
  category: 'Spice crop',
  subcategory: 'Perennial corm-forming spice plant',
  botanicalFamily: 'Iridaceae (iris family)',
  lifecycle: 'Perennial',
  summary:
    'Saffron is a perennial corm-forming plant grown for the dried stigmas of its autumn-flowering blooms, hand-harvested in a labor-intensive process that makes it one of the most valuable spices by weight.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Saffron is propagated from underground corms rather than seed and produces purple, autumn-blooming flowers, each containing just three thread-like stigmas that are hand-picked and dried to produce the spice.',
    },
    {
      type: 'paragraph',
      text: 'Because each flower yields only a tiny amount of usable stigma, and because harvesting and separating the stigmas must be done entirely by hand within a short flowering window, saffron requires an exceptionally large amount of labor relative to the quantity of spice produced.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Iridaceae (iris family)' },
    { label: 'Life cycle', value: 'Perennial, grown from corms' },
    { label: 'Main species', value: 'Crocus sativus' },
    { label: 'Primary uses', value: 'Dried stigmas as a culinary spice' },
    {
      label: 'Climate',
      value:
        'Semi-arid Mediterranean to continental, with cold winters and hot, dry summers',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained loams and sandy loams',
      note: 'Corms are highly sensitive to waterlogging during summer dormancy.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Saffron is grown mainly by smallholder farmers in a limited number of regions with suitable climate, most notably Iran, which accounts for the large majority of global production, along with smaller producing areas in India, Spain, Greece, and Afghanistan.',
        },
        {
          type: 'paragraph',
          text: 'Fields are established from corms and flower for several years before productivity declines and corms are lifted, divided, and replanted, making saffron cultivation a multi-year cycle built around this corm renewal.',
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
            { term: 'Family', description: 'Iridaceae (iris family)' },
            { term: 'Genus', description: 'Crocus' },
            { term: 'Principal species', description: 'Crocus sativus' },
            {
              term: 'Growth habit',
              description:
                'Perennial corm-forming plant producing autumn flowers with three long stigmas per bloom; propagated vegetatively via corms rather than seed',
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
          text: 'Saffron crocus is believed to have originated in the eastern Mediterranean or Southwest Asia, where it was likely selectively bred from a wild crocus ancestor. It has been cultivated and traded as a valuable spice for thousands of years.',
        },
        {
          type: 'paragraph',
          text: 'Iran is by far the world’s leading producer of saffron today, with additional production in India, Afghanistan, Spain, Greece, and Morocco. Production and trade statistics are compiled by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'climate-and-soil-requirements',
      heading: 'Climate and soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Saffron is adapted to semi-arid Mediterranean to continental climates with cold winters, which the corms require for dormancy and flower initiation, and hot, dry summers, during which the corms rest underground.',
        },
        {
          type: 'paragraph',
          text: 'Well-drained loams and sandy loams are essential, since corms are highly susceptible to rot if waterlogged, particularly during their summer dormant period.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Drainage is arguably the single most important site factor for saffron; sites prone to standing water should generally be avoided.',
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
            'Establishment from healthy, disease-free corms planted at an appropriate depth and spacing',
            'Fields typically maintained for several years before corms are lifted and replanted, as flowering productivity declines with clump crowding over time',
            'Minimal soil disturbance during the flowering and stigma-harvesting period',
            'Weed control important during establishment, since young plantings compete poorly with weeds',
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
          text: 'Nitrogen, phosphorus, and potassium all contribute to corm development and flowering, though saffron is generally considered a modest-input crop relative to many other spice and vegetable crops.',
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
          text: 'Saffron has a comparatively low overall water requirement and is traditionally grown with minimal irrigation, relying on autumn and winter moisture to support flowering and vegetative growth.',
        },
        {
          type: 'paragraph',
          text: 'Deficit irrigation strategies, applying limited supplemental water at key growth stages, are used in some production regions to support flowering without promoting the excess moisture that risks corm rot.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Corm rot, caused by soil fungi and worsened by waterlogging, is the most significant disease risk in saffron cultivation, and Fusarium-associated wilt and corm decay are well documented in several producing regions. Aphids and spider mites are occasional pests of foliage, though overall pest pressure on saffron is generally lower than on many other crops.',
        },
        {
          type: 'table',
          caption: 'Common disease and pest pressures',
          columns: ['Problem', 'Type', 'Notes'],
          rows: [
            [
              'Root/corm rot',
              'Disease',
              'Most significant risk, worsened by waterlogging',
            ],
            [
              'Fusarium wilt',
              'Disease',
              'Associated with corm decay in several regions',
            ],
            ['Aphids', 'Pest', 'Occasional pest of foliage'],
            ['Spider mites', 'Pest', 'Occasional pest under dry conditions'],
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
          text: 'Flowers are hand-picked each morning during the short autumn flowering period, and the three stigmas are then carefully separated by hand from each flower before being dried to produce the finished spice.',
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
            'Dried stigmas used as a culinary spice for color, flavor, and aroma in a wide range of dishes',
            'Used in traditional rice, seafood, and baked dishes across many cuisines',
            'Saffron extracts used in some food coloring and flavoring applications',
            'Corms and flower petals sometimes used as secondary products in producing regions',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'fusarium-wilt' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'spider-mites' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'fertilizer', slug: 'farmyard-manure' },
    { type: 'irrigation-method', slug: 'deficit-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'chilling-requirement' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'cardamom' },
    { type: 'crop', slug: 'turmeric' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview; Iran accounts for the large majority of global production, with smaller production in India, Afghanistan, Spain, Greece, and Morocco.',
  climateContext:
    'Semi-arid Mediterranean to continental perennial crop requiring cold winters for corm dormancy and flowering, and hot, dry summers.',
  limitations: [
    'Stigma yield per flower and per corm is inherently very small and varies with corm age, density, and growing conditions, which is not quantified here.',
    'Production statistics and market prices change considerably year to year and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global saffron production context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Saffron disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Saffron',
    description:
      'A structured, evidence-based reference on saffron: classification, climate needs, corm cultivation, diseases, pests, hand harvest, and spice uses.',
    keywords: [
      'saffron',
      'Crocus sativus',
      'spice crop',
      'saffron stigma harvest',
    ],
  },
  structuredData: { article: true },
};
