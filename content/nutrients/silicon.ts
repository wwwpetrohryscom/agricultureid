import type { NutrientContent } from '@/types/content';

export const silicon: NutrientContent = {
  id: 'nutrient-silicon',
  slug: 'silicon',
  contentType: 'nutrient',
  title: 'Silicon',
  symbol: 'Si',
  alternativeNames: ['Si'],
  category: 'Plant nutrient',
  subcategory: 'Beneficial element',
  nutrientClass: 'beneficial',
  summary:
    'Silicon is a beneficial element that strengthens plant tissue by depositing within cell walls, improving resistance to lodging, pests, and disease, with the clearest and most consistent responses seen in grasses such as rice and sugarcane.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Silicon (Si) is not considered essential for most plants, but it is widely recognised as beneficial, particularly for species that take up and accumulate large amounts of it. Plants absorb silicon from the soil solution as silicic acid and deposit it within and beneath cell walls, forming a rigid layer that adds physical strength to leaves and stems.',
    },
    {
      type: 'paragraph',
      text: 'This structural reinforcement is associated with improved standability and reduced lodging, and with greater resistance to some pests and fungal diseases through both a physical barrier effect and, in some cases, an influence on the plant’s own defence responses.',
    },
  ],
  keyFacts: [
    { label: 'Symbol', value: 'Si' },
    {
      label: 'Class',
      value: 'Beneficial element (not essential for most plants)',
    },
    {
      label: 'Plant-available form',
      value: 'Silicic acid (H4SiO4) taken up from the soil solution',
    },
    {
      label: 'Main role',
      value:
        'Deposited in cell walls, strengthening tissue and aiding stress resistance',
    },
    {
      label: 'Who benefits most',
      value: 'Silicon-accumulating grasses, especially rice and sugarcane',
    },
    {
      label: 'Depletion risk',
      value:
        'Repeated straw removal can gradually reduce plant-available soil silicon',
    },
  ],
  sections: [
    {
      id: 'role-in-plants',
      heading: 'Role in plants',
      body: [
        {
          type: 'paragraph',
          text: 'Silicon deposited beneath the leaf and stem cuticle and within cell walls forms a rigid, glass-like layer that mechanically reinforces plant tissue. This is linked to improved standability and reduced lodging in tall or heavily laden cereals, and to a physical barrier that can make leaf tissue more difficult for chewing and piercing-sucking pests to penetrate.',
        },
        {
          type: 'paragraph',
          text: 'In several silicon-accumulating species, adequate silicon supply has also been associated with reduced severity of some fungal diseases, and with improved tolerance of certain abiotic stresses, though the strength of these effects varies by species and growing conditions.',
        },
      ],
    },
    {
      id: 'availability-in-soil',
      heading: 'Availability in soil',
      body: [
        {
          type: 'paragraph',
          text: 'Plant-available silicon exists in soil solution as silicic acid, which is distinct from the abundant but largely insoluble silica in quartz sand. Availability depends on soil weathering stage, mineralogy, pH, and organic matter, and is generally lower in highly weathered, leached tropical soils despite their often sandy, silica-rich texture.',
        },
        {
          type: 'list',
          items: [
            'Highly weathered or intensively leached soils often have lower plant-available silicon',
            'Repeated harvesting and removal of silicon-rich straw or residue can deplete soil silicon over time',
            'Returning rice straw and similar residues to the field helps recycle silicon back into the soil',
          ],
        },
      ],
    },
    {
      id: 'where-beneficial-or-deficiency',
      heading: 'Where silicon is beneficial',
      body: [
        {
          type: 'paragraph',
          text: 'Rice and sugarcane are classic silicon accumulators, and both are the crops with the most consistent, well-documented responses to silicon supply, including reduced lodging and, in rice, improved resistance to some fungal diseases and certain insect pests. Wheat, also a member of the grass family, shows a more moderate response.',
        },
        {
          type: 'paragraph',
          text: 'Non-grass (dicot) crops generally take up and accumulate far less silicon and show smaller, less consistent benefits, so silicon management is a more established practice in grass crops than across agriculture broadly.',
        },
      ],
    },
    {
      id: 'interactions',
      heading: 'Interactions with other nutrients',
      body: [
        {
          type: 'paragraph',
          text: 'Silicon has been reported to help alleviate manganese and iron toxicity in some waterlogged or strongly reduced soils, a situation relevant to lowland rice. It is not a substitute for balanced nitrogen, phosphorus, and potassium fertility, but can complement it in silicon-responsive crops.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Practical considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Because responses to silicon vary considerably by species, soil, and growing system, silicon management is best regarded as a complementary practice for responsive grass crops rather than a universal input. Evidence for benefits is strongest in flooded rice and sugarcane systems.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Evidence and response vary by crop',
          text: 'Not all crops respond to silicon, and the strength of any benefit depends on soil type, crop species, and management. Follow local research and extension guidance before relying on silicon inputs.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'nutrient', slug: 'manganese' },
    { type: 'nutrient', slug: 'iron' },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'wheat' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'fertilizer', slug: 'biochar' },
  ],
  glossaryTerms: ['micronutrient', 'soil-texture'],
  geographicScope:
    'Most relevant to rice- and sugarcane-growing regions worldwide, especially flooded and intensively cropped systems where straw is regularly removed; response elsewhere varies by crop and soil.',
  climateContext:
    'Silicon uptake and cycling are closely tied to soil moisture regime, being especially well studied in flooded lowland rice systems where soil chemistry differs markedly from upland soils.',
  limitations: [
    'Silicon is not an established essential nutrient for most crops, and evidence for benefit is strongest in a limited number of accumulator species.',
    'This entry summarises general patterns; local trial data should guide any silicon management decision for a specific crop and soil.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Silicon in soil-plant nutrient cycling' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Silicon behaviour and availability in soils',
    },
    {
      sourceId: 'irri',
      citedFor: 'Silicon nutrition and management in rice systems',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Beneficial-element research context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Silicon',
    description:
      'Silicon as a beneficial plant nutrient: cell-wall reinforcement, lodging and pest resistance, soil availability, and established use in rice and sugarcane.',
    keywords: [
      'silicon',
      'beneficial element',
      'rice nutrition',
      'lodging resistance',
    ],
  },
  structuredData: { article: true },
};
