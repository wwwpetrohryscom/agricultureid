import type { CropContent } from '@/types/content';

export const sunflower: CropContent = {
  id: 'crop-sunflower',
  slug: 'sunflower',
  contentType: 'crop',
  title: 'Sunflower',
  scientificName: 'Helianthus annuus',
  alternativeNames: ['Common sunflower'],
  category: 'Oilseed crop',
  subcategory: 'Broadleaf oilseed',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Annual',
  summary:
    'Sunflower is a broadleaf annual grown mainly for its oil-rich seed, cultivated across temperate and semi-arid regions and generally regarded as more drought-tolerant than many other oilseed crops.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sunflower is grown primarily as an oilseed crop, with additional use of its seed for confectionery and snack food, birdseed, and livestock feed. Its large flower head, which follows the sun in young plants, is a composite structure typical of the daisy family rather than a single flower.',
    },
    {
      type: 'paragraph',
      text: 'Cultivars are broadly grouped as oil-type, bred for high oil content and used mainly for vegetable oil extraction, and confectionery-type, bred for larger seeds used in snack foods and birdseed. This distinction shapes variety choice, management, and end market.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Helianthus annuus' },
    {
      label: 'Primary uses',
      value: 'Vegetable oil, confectionery and snack seed, birdseed, feed meal',
    },
    {
      label: 'Climate',
      value:
        'Temperate to semi-arid; comparatively drought-tolerant among oilseed crops',
    },
    {
      label: 'Soil preference',
      value:
        'Broad tolerance; performs well on well-drained loams and sandy loams',
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
          text: 'What appears as a single sunflower bloom is actually a capitulum, a dense composite flower head made up of many small ray and disc florets, a structure characteristic of the Asteraceae family. Only the outer ray florets resemble petals; the inner disc florets develop into the seeds.',
        },
        {
          type: 'paragraph',
          text: 'Sunflower is generally noted for deeper rooting and better tolerance of moisture-limited conditions than some other oilseed crops, which supports its use in semi-arid and dryland cropping systems, though actual performance depends on local soil and rainfall conditions.',
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
            { term: 'Genus and species', description: 'Helianthus annuus' },
            {
              term: 'Inflorescence',
              description:
                'Capitulum (flower head) composed of outer ray florets and inner disc florets',
            },
            {
              term: 'Growth habit',
              description:
                'Erect annual with a single main stem, though branched types exist',
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
          text: 'Sunflower is native to North America, where it was domesticated by Indigenous peoples long before European contact. It was later introduced to Europe and, especially through breeding work in Russia and Eastern Europe, developed into a major oilseed crop.',
        },
        {
          type: 'paragraph',
          text: 'Sunflower is now grown widely across the Americas, Europe, and Asia. Current data on planted area, production, and trade by country are compiled by FAO and national agricultural statistics agencies and should be drawn from those primary sources.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sunflower is a warm-season crop that is sensitive to frost, particularly at emergence and during early growth. It generally tolerates heat well but can experience reduced seed set if extreme heat coincides with flowering.',
        },
        {
          type: 'paragraph',
          text: 'Its comparatively deep root system contributes to reasonable performance under limited moisture conditions, which is one reason it is grown in a number of semi-arid production regions.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Sunflower tolerates a fairly wide range of soil types but performs best on well-drained loams and sandy loams that allow deep root penetration. It is sensitive to waterlogging, which restricts root development.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil suitability, including drainage and rooting depth, should be assessed with local soil survey information rather than general guidance alone.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Sunflower is established by direct seeding into a prepared seedbed, with row spacing and plant population set according to local equipment, climate, and cultivar type. Crop rotation is important, since short rotations can increase pressure from certain soilborne diseases.',
        },
        {
          type: 'list',
          items: [
            'Cultivar selection between oil-type and confectionery-type, matched to intended market',
            'Adequate rotation intervals to help manage soilborne diseases',
            'Row spacing and population set locally according to equipment and moisture availability',
            'Weed management during early growth, before canopy closure',
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
          text: 'Sunflower requires nitrogen, phosphorus, and potassium in amounts that depend on soil supply and target yield, and it is often noted for a comparatively high boron requirement relative to some other crops, with both deficiency and excess capable of affecting the crop.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and micronutrient programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Sunflower is grown both rain-fed, taking advantage of its relatively deep rooting, and under irrigation in some regions. Water demand is highest around flowering and seed fill, when moisture stress can most affect yield.',
        },
        {
          type: 'paragraph',
          text: 'Where irrigation is used, scheduling is generally based on estimated crop evapotranspiration and local climate data, following methods published by FAO and national agricultural agencies.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Sunflower can be affected by diseases including downy mildew and Sclerotinia head and stalk rot, whose severity depends on region, rotation history, and weather. Aphids are among the common insect pests and can reduce vigor and, in some cases, transmit viruses.',
        },
        {
          type: 'paragraph',
          text: 'Management typically combines resistant or tolerant cultivars, adequate crop rotation, field monitoring, and, where warranted, locally authorized control measures used according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Sunflower is generally harvested once the back of the flower head has turned from green to yellow-brown and the seeds have dried to a moisture content suitable for combining and safe storage. Harvest timing balances yield and quality against the risk of head shattering, bird damage, or lodging.',
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
            'Crushing into vegetable oil for cooking and food processing',
            'Confectionery and snack seed for direct human consumption',
            'Birdseed and ornamental use of dried heads',
            'Meal remaining after oil extraction used in livestock feed',
          ],
        },
      ],
    },
  ],
  commonDiseases: [],
  commonPests: [{ type: 'pest', slug: 'aphids' }],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  relatedTopics: [{ type: 'crop', slug: 'wheat' }],
  glossaryTerms: ['annual-crop', 'crop-rotation', 'micronutrient', 'yield'],
  geographicScope:
    'Global overview. Cultivar type (oil or confectionery), row spacing, and input levels are region-specific and vary by climate and market.',
  climateContext:
    'Warm-season, comparatively drought-tolerant oilseed crop grown across temperate and semi-arid regions.',
  limitations: [
    'Cultivar type and rotation interval are region-specific decisions not covered by universal values here; short rotations can increase soilborne disease risk.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
    'Boron and other micronutrient needs depend on local soil testing and should not be assumed from general guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of sunflower in global oilseed production',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'usda-nass', citedFor: 'U.S. sunflower production statistics' },
    {
      sourceId: 'ec-agri',
      citedFor: 'European Union sunflower production context',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Regional sunflower agronomy guidance',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Sunflower',
    description:
      'A structured, evidence-based reference on sunflower: classification, climate and soil needs, agronomy, oilseed uses, diseases, pests, and harvest.',
    keywords: [
      'sunflower',
      'Helianthus annuus',
      'oilseed crop',
      'broadleaf crop',
    ],
  },
  structuredData: { article: true },
};
