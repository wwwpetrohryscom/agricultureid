import type { QualityAttributeContent } from '@/types/content';

export const titratableAcidity: QualityAttributeContent = {
  id: 'quality-attribute-titratable-acidity',
  slug: 'titratable-acidity',
  contentType: 'quality-attribute',
  title: 'Titratable Acidity',
  alternativeNames: ['TA', 'Total acidity'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'chemical',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    'Not the same measurement as pH, and not interchangeable with it — pH measures the free hydrogen-ion activity in juice at a given instant, the intensity of acidity right now, while titratable acidity measures the total acid available to be neutralised, including acid held in undissociated and buffered form. Because juices are buffered, two juices at the same pH can carry very different titratable acidity, and titratable acidity correlates far better with perceived sourness than pH does.',
    'Not sourness by itself — perceived sourness depends on the balance between sugars and acids, not on acid concentration alone, so a titratable acidity figure read without soluble solids content can overstate or understate how sour a fruit actually tastes (cross-reference sugar-acid-ratio).',
    'Not a maturity index on its own — acidity generally declines as ripening proceeds, and that decline is used as one component of some composite maturity indices, but a single titratable acidity reading does not establish maturity by itself.',
    'Not a measure of a specific acid — titratable acidity is a total-acid figure expressed as though it were entirely one acid (a convention, described below); it does not identify which acids are actually present or in what proportion, which requires separate analysis.',
    'Not a safety or preservation verdict — pH, not titratable acidity, governs the acid barrier to microbial growth in preserved and processed products. Applying a titratable acidity figure to a food-safety or preservation question is a real and consequential misapplication of the measurement.',
  ],
  measurementBasis:
    "Expressed as the commodity's dominant acid (a stated convention, e.g. malic, citric, or tartaric)",
  typicalUnits: ['% (expressed as the dominant acid)', 'g/L', 'meq/L'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-lemons' },
    { type: 'commodity', slug: 'wine-grapes' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'titratable-acidity-titration' },
  ],
  summary:
    "Titratable acidity (TA) is the total titratable acid in expressed fruit juice, determined by neutralising the juice with a standard alkali to a defined endpoint and conventionally expressed as the commodity's dominant acid — malic in apples, citric in citrus, tartaric in grapes. That choice of acid is a reporting convention, not a chemical fact about what is present, so a TA figure is meaningless without knowing which acid it was expressed as, and it must not be confused with pH, a related but genuinely different measurement.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Titratable acidity is determined by adding a standard alkali solution to a measured volume of expressed juice until the mixture reaches a defined endpoint, and calculating from the volume of alkali used how much acid the juice contained. Because fruit juice contains a mixture of organic acids rather than a single one, the result is conventionally reported as though it were entirely the acid that dominates in that commodity — malic acid for apples and pears, citric acid for citrus, tartaric acid for grapes. This is a reporting convention that makes figures comparable within a commodity, not a claim that only that one acid is present.',
    },
    {
      type: 'paragraph',
      text: 'Because the expression convention differs by commodity, a titratable acidity figure is only interpretable alongside a statement of which acid it was expressed as; a value expressed as malic acid and a value expressed as citric acid are not on the same numeric scale and cannot be compared directly. This detail matters in practice wherever fruit acidity crosses commodity lines — in blended juice products, for instance — and it is one of the more common points of confusion in reading a TA figure correctly.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Total acid in expressed juice neutralised to a defined titration endpoint',
    },
    {
      label: 'Conventional expression',
      value:
        "Reported as the commodity's dominant acid — malic in apples, citric in citrus, tartaric in grapes",
      note: 'The acid it is expressed as must be stated for the figure to be comparable',
    },
    {
      label: 'Relationship to pH',
      value:
        'A different measurement, not interchangeable — pH is instantaneous free-acid intensity; TA is total neutralisable acid',
    },
    {
      label: 'Better correlate of sourness',
      value: 'TA generally tracks perceived sourness more closely than pH does',
    },
    {
      label: 'Ripening trend',
      value:
        'Acidity generally declines as ripening proceeds, used as one input to some maturity indices',
    },
    {
      label: 'Safety relevance',
      value:
        'pH, not TA, governs the microbial acid barrier in preserved products',
    },
    {
      label: 'Where minimums or ratios are set',
      value:
        'The applicable grade standard, contract specification, or maturity regulation, not a universal figure',
    },
  ],
  sections: [
    {
      id: 'the-titration-convention',
      heading:
        'Why a TA figure means nothing without its expressed-acid convention',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit juice is not a solution of a single acid; it typically carries a mixture of organic acids in varying proportions. Rather than report each acid separately in routine quality work, the titration result — the total quantity of alkali needed to neutralise the sample — is converted into a percentage or concentration figure as though the entire acid content were the one acid that dominates in that commodity. This convention is chosen per commodity precisely because it lets figures from that commodity be compared against each other on a consistent basis.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Figures expressed as different acids are not comparable',
          text: 'A titratable acidity figure expressed as malic acid and one expressed as citric acid are not on the same scale, even at similar-sounding numeric values, because the conversion from titration volume to reported acidity uses a different molar-equivalent basis for each acid. Always confirm which acid a TA figure was expressed as before comparing it to another.',
        },
      ],
    },
    {
      id: 'ta-versus-ph',
      heading: 'TA and pH are not the same measurement',
      body: [
        {
          type: 'paragraph',
          text: 'pH measures the activity of free hydrogen ions in a solution at a given moment — the intensity of acidity as it actually presents itself. Titratable acidity measures something different: the total quantity of acid available to be neutralised by an added alkali, which includes acid that is held in undissociated or buffered form and would not otherwise register in a simple pH reading. Because fruit and vegetable juices are buffered — meaning they resist a change in pH as small amounts of acid or alkali are added or removed — two juices that read at the same pH can have substantially different titratable acidity, and vice versa.',
        },
        {
          type: 'paragraph',
          text: 'This distinction is not academic. Titratable acidity correlates more closely with how sour a fruit tastes than pH does, which is why quality assessment favours TA over pH for flavour and ripeness purposes. But it also means TA cannot substitute for pH where pH is the property that actually matters — most importantly in winemaking and juice processing, where the acid barrier that governs microbial safety in a preserved product is a pH question, not a TA question. Using a titratable acidity figure to answer a food-safety question that depends on pH is a real and documented error.',
        },
      ],
    },
    {
      id: 'ta-and-flavour',
      heading: 'TA, sourness, and the sugar-acid balance',
      body: [
        {
          type: 'paragraph',
          text: 'Titratable acidity on its own does not establish how sour a fruit tastes, because sourness perception is shaped by the balance between sugars and acids rather than acid concentration alone. A high-TA fruit that is also high in soluble solids content can taste pleasantly balanced, while the same TA in a low-sugar fruit reads as sharply sour. This is why TA is conventionally read together with soluble solids content, often as the sugar-acid ratio, rather than reported and interpreted in isolation.',
        },
      ],
    },
    {
      id: 'ta-and-maturity',
      heading: 'TA as a component of maturity assessment',
      body: [
        {
          type: 'paragraph',
          text: 'Acidity generally falls through the course of ripening as organic acids are metabolised, which makes a declining TA trend a useful signal that ripening is progressing. Some composite maturity indices incorporate acidity alongside soluble solids content and other attributes for exactly this reason. A single titratable acidity reading, however, does not by itself establish maturity; it is one input among several, and its usefulness as an index component varies by commodity in the same way soluble solids content does.',
        },
      ],
    },
  ],
  connections: [{ type: 'post-harvest', slug: 'fruit-ripening' }],
  relatedTopics: [{ type: 'post-harvest', slug: 'sorting-and-grading' }],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Titratable acidity measurement and its distinction from pH in fruit quality research',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Titration methodology and expression conventions for fruit and juice acidity',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Titratable acidity in the context of fresh produce ripeness and quality assessment',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest quality principles covering acidity alongside other fruit quality attributes',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The titration principle is universal; the acid a result is conventionally expressed as, and any minimum or ratio requirements, vary by commodity, jurisdiction, and applicable standard.',
  limitations: [
    'A titratable acidity figure is not comparable to another unless both state which acid the result was expressed as; conflating figures expressed as different acids produces a false comparison.',
    'Titratable acidity and pH are distinct measurements and are not interchangeable; substituting one for the other, especially in a food-safety context governed by pH, is a documented error.',
    'Titratable acidity alone does not establish sourness or maturity; it must be read together with soluble solids content and, where relevant, other maturity attributes.',
    'This entry describes general chemistry and measurement principles; commodity-specific expression conventions and any regulatory figures are set by the applicable standard or method reference, not stated here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Titratable Acidity: TA vs pH in Fruit Quality',
    description:
      'Titratable acidity totals neutralisable acid in juice; it is not pH, not sourness alone, and not a food-safety measure — see how TA and pH genuinely differ.',
    keywords: [
      'titratable acidity',
      'TA vs pH',
      'fruit acidity measurement',
      'juice titration',
      'post-harvest quality',
    ],
  },
  structuredData: { article: true },
};
