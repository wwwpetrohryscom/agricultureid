import type { CropContent } from '@/types/content';

export const datePalm: CropContent = {
  id: 'crop-date-palm',
  slug: 'date-palm',
  contentType: 'crop',
  title: 'Date Palm',
  scientificName: 'Phoenix dactylifera',
  alternativeNames: ['Date'],
  category: 'Tree fruit crop',
  subcategory: 'Desert and arid-zone palm',
  botanicalFamily: 'Arecaceae (palm family)',
  lifecycle: 'Perennial',
  summary:
    'Date palm is a long-lived, dioecious palm grown for its fruit (dates) across hot, arid, and semi-arid regions. It is notably drought-, heat-, and salinity-tolerant relative to most tree fruit crops, and commercial groves rely on pollination of female flowers using pollen from separate male palms.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Date palm is a tall, long-lived palm cultivated primarily in hot, arid, and semi-arid regions for its fruit. Unlike grafted tree fruits such as apple or pear, it is a monocot palm and is propagated mainly from offshoots (suckers) taken from the base of the mother palm, or increasingly by tissue culture, rather than from seed, in order to preserve the traits of a chosen cultivar.',
    },
    {
      type: 'paragraph',
      text: 'Date palm is dioecious, meaning individual palms are either male or female, and only female palms produce fruit. Because natural wind pollination is often insufficient for reliable commercial yields, growers commonly hand-pollinate female flower clusters using pollen collected from male palms, a distinctive and labor-significant feature of date production.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Arecaceae (palm family)' },
    { label: 'Life cycle', value: 'Perennial, long-lived palm' },
    { label: 'Main species', value: 'Phoenix dactylifera' },
    {
      label: 'Primary uses',
      value: 'Fresh and dried dates; by-products from palm parts',
    },
    {
      label: 'Climate',
      value:
        'Hot, arid to semi-arid; notably drought-, heat-, and salinity-tolerant',
    },
    {
      label: 'Reproduction',
      value: 'Dioecious (separate male and female palms)',
      note: 'Commercial groves rely on hand or mechanical pollination of female flowers using pollen from male palms.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Date palm is among the most important tree crops of hot, arid, and semi-arid regions, historically central to oasis agriculture across North Africa, the Middle East, and parts of South Asia, and now also grown in other arid regions worldwide, including parts of the Americas and Australia.',
        },
        {
          type: 'paragraph',
          text: 'Date palm groves, or oases, are a classic real-world example of agroforestry: the tall palm canopy provides partial shade and a modified microclimate under which other crops, such as fruit trees, vegetables, or forage, can be grown as an understory in a multi-story cropping arrangement.',
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
            { term: 'Family', description: 'Arecaceae (palm family)' },
            { term: 'Genus', description: 'Phoenix' },
            {
              term: 'Principal species',
              description: 'Phoenix dactylifera (cultivated date palm)',
            },
            {
              term: 'Growth habit',
              description:
                'Long-lived, single-stemmed palm; dioecious, with separate male and female individuals',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'As a monocot palm, date palm differs structurally from grafted broadleaf tree fruits: it lacks secondary (girth) growth in the way woody dicot trees do, and its clonal propagation is achieved through offshoots or tissue culture rather than grafting.',
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Date palm has been cultivated since antiquity across the Middle East and North Africa, where it has long been central to oasis agriculture and food systems in arid environments. Cultivation has since spread to other hot, arid, and semi-arid regions of the world with suitable irrigation water supply.',
        },
        {
          type: 'paragraph',
          text: 'Current production volumes, leading cultivars, and trade patterns vary by region and change over time; figures should be obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Date palm is exceptionally well adapted to hot, arid, and semi-arid climates and is markedly more tolerant of drought, heat, and soil and water salinity than most other tree fruit crops. This tolerance, combined with its deep rooting habit, underlies its traditional role in oasis agriculture in regions unsuitable for many other fruit crops.',
        },
        {
          type: 'paragraph',
          text: 'Despite this strong adaptation to aridity, date palm is sensitive to prolonged waterlogging: poorly drained soils or excessive standing water around the root zone can damage roots and predispose palms to disease, even though the crop is otherwise associated with dry environments.',
        },
        {
          type: 'table',
          caption: 'Major abiotic stress tolerances of date palm',
          columns: ['Stress factor', 'Relative tolerance', 'Note'],
          rows: [
            [
              'Drought',
              'High relative to most tree fruit crops',
              'Supported by a deep, extensive root system',
            ],
            [
              'Heat',
              'High relative to most tree fruit crops',
              'Well suited to hot desert and semi-arid summers',
            ],
            [
              'Soil and water salinity',
              'Moderate to high relative to most tree fruit crops',
              'Tolerance varies by cultivar and site',
            ],
            [
              'Waterlogging',
              'Low',
              'Prolonged standing water can damage roots despite the crop’s arid-zone adaptation',
            ],
          ],
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Date palm is grown on a range of soils, including sandy and alluvial soils typical of desert oases and river valleys, and tolerates soil conditions, including salinity, that would limit many other tree fruit crops. Good drainage remains important despite this tolerance, since prolonged waterlogging harms root health.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Soil and irrigation water salinity levels tolerated in practice vary by cultivar and site; local agronomic and soil survey guidance should inform site selection and management.',
        },
      ],
    },
    {
      id: 'establishment-and-propagation',
      heading: 'Establishment and propagation',
      body: [
        {
          type: 'paragraph',
          text: 'Date palm is propagated commercially mainly from offshoots (suckers) taken from the base of a proven mother palm, which preserves the genetic identity of the cultivar, or increasingly through tissue culture for larger-scale, disease-screened planting material. Propagation by seed is generally avoided commercially because seedlings do not reliably reproduce the traits of the parent cultivar and their sex cannot be determined until the palm matures.',
        },
        {
          type: 'paragraph',
          text: 'Because date palm is dioecious, grove design must account for a supply of male palms or stored pollen for pollinating the female palms that bear fruit. Growers typically maintain a small number of male palms, or a pollen source, relative to the much larger number of fruit-bearing female palms, and pollination of female flower clusters is carried out by hand or mechanically at the appropriate stage.',
        },
        {
          type: 'list',
          items: [
            'Offshoot (sucker) propagation from a selected mother palm to preserve cultivar identity',
            'Tissue-culture propagation for large-scale, uniform, disease-screened planting material',
            'Grove design accounting for male palms or pollen supply needed to pollinate female palms',
            'Wide spacing suited to the long-term mature size and canopy of the palm',
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
          text: 'Nitrogen supports vegetative growth and canopy development, while potassium is important for fruit development and quality. Zinc is a micronutrient of particular note in date palm nutrition, since deficiency has been associated with disorders affecting leaf and fruit development in some growing regions.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local leaf and soil analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Despite its drought tolerance, date palm is grown almost exclusively under irrigation in commercial production, since fruit yield and quality benefit from a reliable water supply through the growing season. Drip irrigation is widely used in modern plantings to deliver water efficiently to the root zone in arid environments where water is often scarce.',
        },
        {
          type: 'paragraph',
          text: 'Irrigation scheduling and drainage design should account for the crop’s tolerance of heat and moderate salinity alongside its sensitivity to prolonged waterlogging, since both extremes of water management carry risk.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Fusarium wilt of date palm, historically known in parts of North Africa as Bayoud disease and caused by Fusarium oxysporum f. sp. albedinis, has been a major and historically devastating disease of date palm in affected regions, capable of killing susceptible palms and requiring long-term management through resistant cultivars and quarantine measures. Root rot pathogens can also affect palms, particularly under poor drainage.',
        },
        {
          type: 'paragraph',
          text: 'The red palm weevil (a species of weevil) is a globally significant and spreading pest of date palm and other palm species; its larvae bore into the trunk, often causing damage that is not visible until it is advanced, and infestations can be lethal to affected palms. Scale insects and mealybugs also affect date palm, feeding on fronds, fruit clusters, and other plant parts.',
        },
        {
          type: 'paragraph',
          text: 'Management combines the use of resistant or tolerant cultivars where available, sanitation, monitoring for early signs of weevil and wilt symptoms, and — where justified — locally authorized control measures applied according to their labels and regional regulations.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Dates are widely understood to pass through a series of recognized ripening stages as they mature on the palm, commonly referred to by regional names in date-growing areas, progressing from an unripe stage through intermediate stages to a fully ripe, sugar-rich stage. The general staged-ripening concept is well documented, though the specific stage names, durations, and handling practices vary by cultivar, region, and market, and are best obtained from local and cultivar-specific sources.',
        },
        {
          type: 'paragraph',
          text: 'Harvest timing and method depend on the intended market and stage of ripeness desired, since dates can be harvested and marketed at more than one ripeness stage depending on cultivar and end use.',
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
            'Fresh dates for direct consumption',
            'Dried and semi-dried dates, a major traditional storage and trade form',
            'Processed products such as date paste, syrup, and confectionery ingredients',
            'By-products from palm fronds, fiber, and other plant parts used locally',
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
    { type: 'pest', slug: 'weevils' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'alluvial-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'zinc' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'fig' },
    { type: 'crop', slug: 'pomegranate' },
    { type: 'crop', slug: 'coconut' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview of hot, arid, and semi-arid growing regions. Cultivar, pollination timing, and ripening-stage practices are region-specific.',
  climateContext:
    'Hot, arid to semi-arid palm crop; notably drought-, heat-, and salinity-tolerant, but sensitive to prolonged waterlogging.',
  limitations: [
    'Date ripening-stage terminology, durations, and harvest timing vary by cultivar and region and are described here only in general terms.',
    'Production and cultivar-popularity statistics change over time and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global date palm production and oasis agriculture context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Fusarium wilt (Bayoud) and red palm weevil compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Integrated pest management guidance relevant to palm pests',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Date Palm',
    description:
      'A structured, evidence-based reference on date palm: dioecy and pollination, arid-zone adaptation, propagation, diseases, pests, harvest, and uses.',
    keywords: [
      'date palm',
      'Phoenix dactylifera',
      'dates',
      'oasis agriculture',
    ],
  },
  structuredData: { article: true },
};
