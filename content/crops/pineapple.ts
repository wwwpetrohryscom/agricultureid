import type { CropContent } from '@/types/content';

export const pineapple: CropContent = {
  id: 'crop-pineapple',
  slug: 'pineapple',
  contentType: 'crop',
  title: 'Pineapple',
  scientificName: 'Ananas comosus',
  alternativeNames: ['Pina'],
  category: 'Tropical fruit crop',
  subcategory: 'Herbaceous perennial monocot',
  botanicalFamily: 'Bromeliaceae (bromeliad family)',
  lifecycle: 'Perennial',
  summary:
    'Pineapple is a tropical, herbaceous perennial bromeliad grown for its compound fruit. Plantings are established from vegetative propagating material rather than seed and are commonly cropped over a plant cycle plus one or more ratoon cycles.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Pineapple is a tropical fruit crop belonging to the bromeliad family, distinguishing it botanically from most other commercially important fruit crops, which belong to different plant families entirely. The plant grows as a low, rosette-forming perennial herb rather than a tree or vine, and its familiar fruit is a compound structure formed from many individually pollinated flowers fusing together around a central core.',
    },
    {
      type: 'paragraph',
      text: 'Commercial pineapple is propagated vegetatively, using crowns (the leafy top of the fruit), slips (shoots from the fruit stalk), or suckers (shoots from the base of the plant), rather than from seed. A single planting is typically carried through an initial "plant crop" and one or more subsequent "ratoon crops" grown from the same root system before the field is replanted.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Bromeliaceae (bromeliad family)' },
    {
      label: 'Life cycle',
      value: 'Herbaceous perennial, vegetatively propagated',
    },
    { label: 'Main species', value: 'Ananas comosus' },
    {
      label: 'Primary uses',
      value: 'Fresh fruit, canned and juiced products',
    },
    {
      label: 'Climate',
      value: 'Tropical and warm subtropical; intolerant of frost',
    },
    {
      label: 'Soil preference',
      value: 'Well-drained sandy loams and lateritic soils',
      note: 'Drainage is critical; pineapple is highly intolerant of waterlogging.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Pineapple is grown as a long-lived herbaceous perennial, with individual plants remaining productive across a plant crop and one or more ratoon crops before a field is replanted with fresh propagating material. Its rosette growth habit, characteristic of the bromeliad family, stores water and nutrients in thick, strap-like leaves.',
        },
        {
          type: 'paragraph',
          text: 'Because propagation is entirely vegetative, planting material quality and type strongly influence field uniformity and the timing of subsequent harvests. Commercial production ranges from smallholder plots to large plantation systems using uniform planting material and, in many operations, chemically induced flowering.',
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
            { term: 'Family', description: 'Bromeliaceae (bromeliad family)' },
            { term: 'Genus', description: 'Ananas' },
            {
              term: 'Principal species',
              description: 'Ananas comosus (cultivated pineapple)',
            },
            {
              term: 'Growth habit',
              description:
                'Herbaceous perennial forming a low rosette of stiff, strap-shaped leaves around a central stem, characteristic of the bromeliad family; the fruit is a compound (multiple) fruit formed from fused individual flowers',
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
          text: 'Pineapple originated in South America, where wild and semi-domesticated Ananas relatives are found, and was carried by indigenous peoples throughout the tropics of the Americas well before European contact. It subsequently spread through global trade to become a major tropical fruit crop grown across suitable regions of Asia, Africa, and Latin America.',
        },
        {
          type: 'paragraph',
          text: 'Production volumes, leading cultivars, and trading patterns shift over time and by region; current figures are best obtained from primary sources such as FAOSTAT and national agricultural statistics services rather than assumed.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pineapple is adapted to tropical and warm subtropical climates and is intolerant of frost, which can severely damage or kill plants. It tolerates a range of rainfall conditions but performs best with consistent moisture and warmth throughout its growth cycle.',
        },
        {
          type: 'paragraph',
          text: 'Because pineapple grows over a long, multi-year cycle spanning a plant crop and ratoon crops, cumulative climate conditions across that period, rather than a single season, shape overall field performance.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Pineapple is grown across a range of soils but performs best on deep, well-drained, aerated soils such as sandy loams and lateritic soils, both widely used in major production regions. The crop is notably intolerant of waterlogging, which quickly leads to root decline.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Drainage should be assessed carefully at site selection, since it is one of the most consequential soil factors for pineapple. Local soil survey information should guide site-specific decisions.',
        },
      ],
    },
    {
      id: 'establishment-and-propagation',
      heading: 'Establishment and propagation',
      body: [
        {
          type: 'paragraph',
          text: 'Pineapple fields are established using vegetative propagating material rather than seed, since seed-grown plants are variable and slow to reach a productive size. Growers select among crowns, slips, and suckers depending on availability, uniformity needs, and time to first harvest.',
        },
        {
          type: 'list',
          items: [
            'Selection of propagating material — crowns, slips, or suckers — based on availability and desired uniformity',
            'Field spacing and planting density set according to cultivar and the propagating material used',
            'Management of the plant crop (the first harvest from newly planted material) followed by one or more ratoon crops from the same base plants',
            'Use of ethylene-generating treatments, natural or applied, to induce more uniform and synchronized flowering across a field',
          ],
        },
        {
          type: 'table',
          caption: 'Common pineapple propagating material types',
          columns: [
            'Material',
            'Source on the plant',
            'General characteristics',
          ],
          rows: [
            [
              'Crown',
              'Leafy top of the harvested fruit',
              'Widely available at harvest; generally takes longer to reach first flowering than slips or suckers',
            ],
            [
              'Slip',
              'Shoot arising from the fruit stalk (peduncle)',
              'Intermediate size and time to flowering between crowns and suckers',
            ],
            [
              'Sucker',
              'Shoot arising from the base of the mother plant',
              'Often larger at planting; can reach first flowering more quickly than crowns',
            ],
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
          text: 'Nitrogen and potassium are both important to pineapple growth and fruit development, with potassium closely linked to fruit quality. Boron is a micronutrient of particular relevance to pineapple, since deficiency can affect fruit and plant development.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and tissue testing and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Pineapple is grown both under rain-fed conditions in humid tropical areas and with supplemental irrigation in drier regions. Drip irrigation is used in many commercial operations to deliver water efficiently to the root zone while limiting the risk of waterlogging.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop spans a long multi-year cycle, water management needs to account for the differing demands of establishment, vegetative growth, flower induction, and fruit development phases.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Root rot, associated with poorly drained or waterlogged soils, is a serious concern for pineapple given the crop’s strong intolerance of excess soil moisture. Fusariosis, caused by Fusarium guttiforme, is a major disease of pineapple in the Americas, affecting fruit and stems and capable of significant crop loss where susceptible cultivars are grown.',
        },
        {
          type: 'paragraph',
          text: 'Mealybugs are a particularly important pest group in pineapple because certain species are associated with a wilt disease complex: mealybug feeding, combined with an associated virus, can cause a decline known as mealybug wilt, making mealybug management a disease-prevention measure as well as direct pest control. Scale insects are also common pests, affecting plant vigor and fruit appearance.',
        },
        {
          type: 'paragraph',
          text: 'Management combines clean, disease-free propagating material, field sanitation, drainage management, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Pineapple fruit is harvested by hand once it reaches a suitable maturity, assessed through indicators such as skin color change and fruit firmness, since the crop’s long, variable growth cycle makes a universal days-to-harvest figure unreliable across cultivars and regions. Fruit intended for fresh markets is often picked at a different maturity stage than fruit destined for processing.',
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
            'Fresh-market whole and cut fruit',
            'Canned pineapple and pineapple juice',
            'Dried and other processed pineapple products',
            'Fiber and by-products from leaves and processing waste in some production systems',
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
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'boron' },
    { type: 'fertilizer', slug: 'npk-compound-fertilizer' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'sprayer' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'papaya' },
    { type: 'crop', slug: 'coconut' },
  ],
  glossaryTerms: [
    'perennial-crop',
    'cultivar',
    'integrated-pest-management',
    'yield',
  ],
  geographicScope:
    'Global overview. Propagating-material choice, spacing, flower-induction timing, and input rates are region-specific.',
  climateContext:
    'Tropical and warm-subtropical perennial crop; intolerant of frost and sensitive to waterlogging.',
  limitations: [
    'Propagating-material selection, spacing, and flower-induction timing are examples of region-specific decisions not covered by universal values here.',
    'Production and yield statistics change over time and should be taken from primary datasets such as FAOSTAT.',
    'Disease and pest pressure, including fusariosis and mealybug wilt, varies by region and should be assessed against local monitoring and extension guidance.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global pineapple production and agronomy context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    {
      sourceId: 'cabi',
      citedFor: 'Pineapple pest and disease compendium data',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Integrated pest management guidance relevant to pineapple pests',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Pineapple',
    description:
      'A reference on pineapple: bromeliad classification, tropical climate and soil needs, vegetative propagation, plant and ratoon cycles, diseases, and harvest.',
    keywords: [
      'pineapple',
      'Ananas comosus',
      'tropical fruit',
      'pineapple propagation',
    ],
  },
  structuredData: { article: true },
};
