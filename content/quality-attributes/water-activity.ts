import type { QualityAttributeContent } from '@/types/content';

export const waterActivity: QualityAttributeContent = {
  id: 'quality-attribute-water-activity',
  slug: 'water-activity',
  contentType: 'quality-attribute',
  title: 'Water Activity',
  alternativeNames: ['aw', 'Water activity value'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'storage-stability',
  notAnIndicatorOf: [
    'A measure of how much water is present: two lots can share the same water activity while holding different amounts of water, and two lots can share the same moisture content while having different water activities — quantity is what Moisture Content describes, not this attribute.',
    'A safety verdict on its own: a lot with low water activity can already contain mycotoxin formed earlier, and water activity says nothing about chemical residues or insect deterioration.',
    'A grade factor: water activity is not among the criteria typically scored in commodity grade standards, which use moisture content, damage, and related physical factors instead.',
  ],
  typicalUnits: ['aw (dimensionless)'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'sunflower-seed' },
    { type: 'commodity', slug: 'dry-beans' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'water-activity-meter' }],
  summary:
    'Water activity is the ratio of the vapour pressure of water in a commodity to that of pure water at the same temperature — a measure of how available the water is, not how much of it there is. It is the property that governs whether storage fungi can grow, and it is temperature-dependent and commodity-specific in a way total moisture content is not.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Water activity, commonly written aw, is defined as the ratio of the vapour pressure of water in a commodity to the vapour pressure of pure water at that same temperature. Equivalently, it is the equilibrium relative humidity of the air in a sealed space in contact with the commodity, expressed as a fraction rather than a percentage. The scale runs from zero, where essentially no water is free to leave the commodity or support biological activity, to one, the value of pure water itself.',
    },
    {
      type: 'paragraph',
      text: 'The distinction between water activity and moisture content is genuinely important, not a technicality. Moisture content answers how much water a lot holds; water activity answers how available that water is to the microorganisms, enzymes, and chemical reactions that cause spoilage. Microbial growth — including the toxigenic storage fungi responsible for mycotoxin contamination — responds to water activity, not to total moisture. Every microorganism has a limiting water activity below which it cannot grow, and that relationship is the physical basis of most storage-stability control, not the moisture percentage on its own.',
    },
  ],
  keyFacts: [
    {
      label: 'Definition',
      value:
        'The ratio of the vapour pressure of water in the commodity to that of pure water at the same temperature',
      note: 'Equivalently, the equilibrium relative humidity of air in contact with it, expressed as a fraction',
    },
    {
      label: 'Scale',
      value: 'Runs from zero to one, expressed as a fraction, not a percentage',
    },
    {
      label: 'What it measures',
      value:
        'The availability of water to microorganisms and chemical reactions, not the quantity of water present',
    },
    {
      label: 'Same moisture, different water activity',
      value:
        'An oilseed and a cereal at the same percentage moisture are not equally stable, because water binds differently to starch, protein, oil, and sugar',
      note: 'Oil holds essentially no water, so the water in an oilseed concentrates in the non-oil fraction and its water activity is higher than the moisture figure alone suggests',
    },
    {
      label: 'Temperature-dependent',
      value:
        'A water activity value measured at one temperature does not transfer to another temperature',
    },
    {
      label: 'Not a safety verdict alone',
      value:
        'A low-water-activity lot can already contain mycotoxin formed earlier, and water activity does not describe chemical or insect deterioration',
    },
    {
      label: 'Where limiting values are set',
      value:
        'The relevant food-safety authority and commodity guidance set the limiting water activity for a given organism and commodity',
    },
  ],
  sections: [
    {
      id: 'what-water-activity-measures',
      heading: 'What water activity measures',
      body: [
        {
          type: 'paragraph',
          text: 'Water activity is a ratio, not an amount. It describes the thermodynamic availability of water in a commodity — how readily that water can leave the commodity as vapour, and by extension how readily it can be taken up by a fungal spore, a bacterial cell, or an enzyme that needs free water to act. This is a physically different quantity from moisture content, which simply describes what fraction of the sample’s mass is water, regardless of how tightly that water is held.',
        },
        {
          type: 'paragraph',
          text: 'Because water activity is a ratio expressed on a scale from zero to one, it carries no unit of mass or percentage of its own; it is reported as a dimensionless fraction. This is deliberate: unlike moisture content, water activity is directly comparable in its physical meaning across very different commodities, even though the moisture percentage that produces a given water activity differs from one commodity to the next.',
        },
      ],
    },
    {
      id: 'availability-not-quantity',
      heading: 'Why the same moisture content is not the same stability',
      body: [
        {
          type: 'paragraph',
          text: 'Water binds to starch, protein, oil, and sugar with different strength. Starch and protein hold water relatively loosely; sugars bind it more tightly; oil holds essentially none. A consequence follows directly: in an oilseed, the water present in the lot is concentrated in the non-oil fraction of the kernel, so the water activity of an oilseed is higher than the same percentage moisture would suggest in a cereal grain. An oilseed and a cereal reported at an identical moisture percentage are therefore not equally stable — the oilseed’s water is, in effect, less diluted and more available.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title:
            'Moisture content alone cannot predict storage stability across commodities',
          text: 'Because water binds differently in different commodities, a moisture figure that is workable for one commodity does not translate directly to another. Water activity is the property that is comparable across commodities; moisture content by itself is not. See Moisture Content for the distinct question that attribute answers.',
        },
      ],
    },
    {
      id: 'temperature-dependence',
      heading: 'Water activity is temperature-dependent',
      body: [
        {
          type: 'paragraph',
          text: 'Water activity changes with temperature even when the moisture content of the commodity does not, because the vapour pressure of water — both in the pure state and within the commodity — is itself a function of temperature. A water activity value measured at one temperature is not automatically valid at another; grain warmed or cooled without any change in moisture can shift into a different water-activity range, which is one reason temperature management in storage matters independently of drying.',
        },
      ],
    },
    {
      id: 'microbial-growth-and-limiting-values',
      heading: 'Microbial growth and limiting water activity',
      body: [
        {
          type: 'paragraph',
          text: 'Every microorganism capable of spoiling a stored commodity — including the toxigenic storage fungi of greatest concern for mycotoxin contamination — has a limiting water activity below which it cannot grow. This is the physical basis for water-activity-informed storage-stability control: holding a commodity below the limiting value for the organisms of concern is what prevents growth, independent of the moisture percentage that achieves it. Different organisms have different limiting values, and those values are also affected by temperature and by the presence of other organisms.',
        },
        {
          type: 'paragraph',
          text: 'This entry does not state any limiting water activity value for any organism, because those values are organism-, commodity-, and condition-specific and are established and published by food-safety authorities and commodity-specific guidance rather than asserted generically here.',
        },
      ],
    },
  ],
  connections: [{ type: 'quality-attribute', slug: 'moisture-content' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Water activity as the physical basis of mycotoxin-producing fungal growth',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Water activity principles and their role in stored-commodity stability',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Water activity measurement and commodity-specific water-binding behaviour',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Water activity in grain storage-stability guidance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Water activity is a physical property of the commodity and its temperature; limiting values for specific organisms and any regulatory reference points are set by food-safety authorities and vary by commodity and jurisdiction.',
  limitations: [
    'This entry states no limiting water activity values for any organism. The relevant food-safety authority and commodity-specific guidance set those values.',
    'A water activity reading is valid only at the temperature it was measured at; it does not transfer to a different storage temperature without re-measurement or a temperature correction.',
    'Water activity does not indicate chemical deterioration, insect activity, or physical damage; it addresses microbial availability of water only.',
    'A low water activity result does not confirm a lot is free of mycotoxin: toxin already formed before the commodity reached that water activity does not disappear as water activity falls.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Water Activity: What Predicts Mould Risk',
    description:
      'Water activity measures how available water is in a commodity, the real driver of microbial growth in storage — distinct from moisture content.',
    keywords: [
      'water activity',
      'aw value',
      'storage stability',
      'moisture content vs water activity',
      'mould growth grain',
    ],
  },
  structuredData: { article: true },
};
