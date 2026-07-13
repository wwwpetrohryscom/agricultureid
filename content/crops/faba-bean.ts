import type { CropContent } from '@/types/content';

export const fabaBean: CropContent = {
  id: 'crop-faba-bean',
  slug: 'faba-bean',
  contentType: 'crop',
  title: 'Faba Bean',
  scientificName: 'Vicia faba',
  alternativeNames: [
    'Broad bean',
    'Field bean',
    'Fava bean',
    'Horse bean',
    'Tick bean',
  ],
  category: 'Legume crop',
  subcategory: 'Cool-season grain and vegetable legume',
  botanicalFamily: 'Fabaceae (legumes)',
  lifecycle: 'Annual',
  summary:
    'Faba bean is a cool-season grain legume grown for protein-rich seed used as food, feed, and a fresh vegetable, and valued as one of the more effective nitrogen-fixing crops in temperate and Mediterranean rotations.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Faba bean, known as the broad bean when grown as a fresh vegetable and the field or tick bean when grown for grain and feed, is one of the oldest cultivated legumes. It is grown across temperate, Mediterranean, and highland tropical regions for human food, animal feed, and its strong contribution to soil nitrogen.',
    },
    {
      type: 'paragraph',
      text: 'The crop forms an upright, hollow-stemmed plant with large seeds and is regarded as one of the more effective nitrogen-fixing grain legumes, making it a valued break crop in cereal-dominated rotations. Like other legumes, it forms nodules with compatible rhizobia.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legumes)' },
    { label: 'Life cycle', value: 'Annual' },
    { label: 'Scientific name', value: 'Vicia faba' },
    {
      label: 'Primary uses',
      value:
        'Dry seed for food and feed, and immature seed as a fresh vegetable',
    },
    {
      label: 'Climate',
      value:
        'Cool season; autumn- or spring-sown depending on region and winter hardiness',
    },
    {
      label: 'Soil preference',
      value:
        'Moisture-retentive loams and clay loams of moderate to good fertility',
      note: 'Prefers heavier soils than many pulses; sensitive to drought at flowering.',
    },
    {
      label: 'Cropping role',
      value: 'Break crop in cereal rotations; strong nitrogen fixer',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Faba bean is grown both as a dry pulse, harvested at maturity for food and animal feed, and as a fresh vegetable, harvested at an immature, tender stage as broad beans. It is a prominent break crop in temperate and Mediterranean cereal rotations.',
        },
        {
          type: 'paragraph',
          text: 'Both small-seeded field bean types, grown mainly for feed and as a rotational legume, and large-seeded broad bean types, grown for food, are cultivated, with autumn or spring sowing chosen according to winter hardiness and regional climate.',
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
            { term: 'Family', description: 'Fabaceae (legume family)' },
            { term: 'Genus and species', description: 'Vicia faba' },
            {
              term: 'Growth habit',
              description:
                'Erect annual with a stiff, hollow, square stem bearing pinnate leaves and large flat pods',
            },
            {
              term: 'Root system',
              description:
                'Taproot bearing nodules that host nitrogen-fixing rhizobia',
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
          text: 'Faba bean is an ancient crop of the Old World, cultivated since antiquity across the Mediterranean basin, the Near East, and beyond, and later spread widely through temperate and highland regions. No truly wild ancestor is known with certainty.',
        },
        {
          type: 'paragraph',
          text: 'Statistics on planted area, production, and trade by country are compiled by FAO and national agencies and should be consulted directly for current figures.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Faba bean is a cool-season crop that grows best in mild, moist conditions and tolerates cooler temperatures than many grain legumes. Winter-hardy types can be autumn-sown in mild-winter regions, while spring sowing is used where winters are severe.',
        },
        {
          type: 'paragraph',
          text: 'The crop is sensitive to heat and drought during flowering and pod set, which can cause flower and pod abortion, so it is generally best adapted to cooler, moister growing seasons.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Faba bean is well suited to moisture-retentive loams and clay loams of moderate to good fertility, performing better on heavier soils than many other pulses. It tolerates a range of pH but is sensitive to both drought and prolonged waterlogging.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Faba bean’s preference for heavier, moisture-retentive soils distinguishes it from drought-adapted pulses such as chickpea and cowpea.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment and crop management',
      body: [
        {
          type: 'paragraph',
          text: 'Faba bean is direct-seeded, relatively deeply given its large seed, in autumn or spring depending on winter hardiness and region. Its strong early growth helps it compete with weeds, though early weed control still supports establishment.',
        },
        {
          type: 'list',
          items: [
            'Type and sowing time (autumn or spring) matched to winter hardiness and climate',
            'Adequate sowing depth suited to the large seed and to frost avoidance in autumn sowings',
            'Rotation with cereals to exploit the crop’s nitrogen and break-crop benefits',
            'Rhizobial inoculation in fields where effective nodulation is uncertain',
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
          text: 'Faba bean is regarded as one of the stronger nitrogen-fixing grain legumes, and effective nodulation can meet most of its nitrogen need while leaving a substantial residual benefit for following crops. Phosphorus, potassium, and, on some soils, manganese affect performance.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer and inoculation programs should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Faba bean is grown largely under rain-fed conditions in temperate and Mediterranean regions, where its yield is closely tied to moisture availability during flowering and pod fill. Supplemental irrigation is used in drier environments.',
        },
        {
          type: 'paragraph',
          text: 'Because the crop is sensitive to moisture stress at flowering, water supply during this stage strongly influences pod set and final yield.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Chocolate spot, a form of grey mould caused by a Botrytis fungus, is a major foliar disease of faba bean in humid conditions, and downy mildew and rust also cause losses. Root rots occur on poorly drained soils.',
        },
        {
          type: 'paragraph',
          text: 'The black bean aphid is a characteristic and damaging pest, colonising growing tips and transmitting viruses, while bean weevils damage seed in the field and in storage. Management combines resistant cultivars, rotation, monitoring, and, where warranted, locally authorized controls applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Dry faba bean is harvested by combine once pods and stems have dried and the seed has reached a moisture content suitable for storage. Broad beans for fresh use are picked by hand at an immature, tender stage well before maturity.',
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
            'Dry seed used in a wide range of traditional dishes across the Mediterranean, Middle East, and beyond',
            'Immature seed eaten fresh as broad beans',
            'Dry seed and residues used as high-protein animal feed',
            'Use as a break crop and green manure to supply nitrogen in rotations',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'downy-mildew' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'weevils' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'pea' },
    { type: 'crop', slug: 'lentil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'machinery', slug: 'combine-harvester' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  glossaryTerms: [
    'annual-crop',
    'crop-rotation',
    'cover-crop',
    'inoculum',
    'macronutrient',
  ],
  geographicScope:
    'Global overview centered on temperate, Mediterranean, and highland regions. Type, sowing season, and winter hardiness are region-specific.',
  climateContext:
    'Cool-season grain legume grown as an autumn- or spring-sown crop; sensitive to heat and drought at flowering.',
  limitations: [
    'Type selection and sowing season depend on regional winter hardiness and are not reduced to universal guidance here.',
    'Heat and drought at flowering and pod set are recurring yield constraints.',
    'Disease and pest control should follow locally authorized guidance and product labels.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Role of faba bean in temperate and Mediterranean rotations',
    },
    { sourceId: 'faostat', citedFor: 'Production, area, and trade statistics' },
    {
      sourceId: 'ahdb',
      citedFor: 'Faba (field) bean agronomy and crop management guidance',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Faba bean disease and pest compendium data',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Faba Bean (Vicia faba)',
    description:
      'An evidence-based reference on faba (broad) bean: botany, cool-season agronomy, soil needs, nitrogen fixation, diseases, pests, and food and feed uses.',
    keywords: ['faba bean', 'Vicia faba', 'broad bean', 'field bean'],
  },
  structuredData: { article: true },
};
