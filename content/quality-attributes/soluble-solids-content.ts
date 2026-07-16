import type { QualityAttributeContent } from '@/types/content';

export const solubleSolidsContent: QualityAttributeContent = {
  id: 'quality-attribute-soluble-solids-content',
  slug: 'soluble-solids-content',
  contentType: 'quality-attribute',
  title: 'Soluble Solids Content',
  alternativeNames: ['SSC', 'Brix', 'Degrees Brix'],
  category: 'Quality attribute',
  subcategory: 'Fresh produce',
  attributeClass: 'chemical',
  qualityDomain: 'quality-measurement',
  notAnIndicatorOf: [
    'Not sweetness — perceived sweetness depends on the balance between sugars and acids, on which specific sugars are present (fructose tastes considerably sweeter than glucose at the same concentration, so two fruits at an identical soluble solids reading can taste quite different), and on aroma volatiles that soluble solids content does not capture at all. A high-soluble-solids, high-acid fruit tastes sour rather than sweet (cross-reference sugar-acid-ratio and titratable-acidity).',
    'Not a maturity verdict on its own — in fruit that does not accumulate and later convert starch, soluble solids content is largely set by harvest time and changes little afterwards, whereas in starch-accumulating fruit it rises during ripening as starch hydrolyses to sugar. What a reading means as a maturity signal therefore depends entirely on which kind of commodity is being measured (cross-reference maturity-index and dry-matter-content).',
    'Not a measure of total sugar — soluble solids content is a refractive-index proxy, not a sugar assay; treating a reading as a direct sugar percentage overstates what the method actually determines.',
    'Not a nutritional measure — the reading reflects dissolved-solids concentration relevant to eating quality and processing, not a nutrient or caloric analysis.',
  ],
  measurementBasis:
    'Refractive index of expressed juice, temperature-compensated, expressed on the sucrose scale',
  typicalUnits: ['°Brix', '% soluble solids'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'fresh-lemons' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'wine-grapes' },
    { type: 'commodity', slug: 'fresh-strawberries' },
    { type: 'commodity', slug: 'fresh-tomatoes' },
    { type: 'commodity', slug: 'fresh-pineapples' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'refractometer' },
    { type: 'quality-measurement', slug: 'near-infrared-spectroscopy' },
  ],
  summary:
    'Soluble solids content (SSC) is the concentration of dissolved solids in expressed fruit juice, measured by refractive index and conventionally reported in degrees Brix. Because °Brix is calibrated against a pure sucrose solution while real juice also contains organic acids, soluble pectins, amino acids, and minerals alongside sugars, SSC is a proxy that correlates well with sugar content in most fruit rather than a direct sugar assay, and it is not, by itself, a measure of sweetness or of maturity.',
  introduction: [
    {
      type: 'paragraph',
      text: "Soluble solids content is the concentration of all dissolved material in a fruit's expressed juice, determined by measuring how strongly the juice bends light — its refractive index — and reading that value on a scale calibrated against solutions of pure sucrose in water. The result is conventionally reported in degrees Brix, a unit that is, by definition, a sucrose-equivalent reading rather than a direct measurement of any single dissolved substance.",
    },
    {
      type: 'paragraph',
      text: 'The precision point that matters for reading a Brix figure correctly is that real fruit juice is not a sucrose solution. Sugars make up most of the dissolved material in most fruit, which is why °Brix correlates well with sugar content across a wide range of commodities, but the juice also carries organic acids, soluble pectins, amino acids, and minerals, all of which contribute to the refractive-index reading. Soluble solids content is therefore best understood as a practical proxy that happens to track sugars closely in most fruit, not as a sugar percentage in its own right.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Concentration of all dissolved solids in expressed juice, via refractive index',
    },
    {
      label: 'Conventional unit',
      value: 'Degrees Brix, calibrated on a pure sucrose solution scale',
    },
    {
      label: 'Not a pure sugar assay',
      value:
        'Juice solids also include organic acids, soluble pectins, amino acids, and minerals',
    },
    {
      label: 'Temperature sensitivity',
      value:
        'Reading changes with juice temperature; instruments require temperature compensation',
    },
    {
      label: 'Within-fruit variation',
      value:
        'Differs by sampling location — stem end vs blossom end, sun side vs shade side',
    },
    {
      label: 'Meaning depends on commodity type',
      value:
        'Rises during ripening in starch-accumulating fruit; largely fixed at harvest in others',
    },
    {
      label: 'Where minimums are set',
      value:
        'The applicable marketing standard, buyer contract, or maturity regulation, not a universal figure',
    },
  ],
  sections: [
    {
      id: 'what-brix-actually-reads',
      heading: 'What a °Brix reading actually measures',
      body: [
        {
          type: 'paragraph',
          text: 'A refractometer determines soluble solids content by measuring how much light bends as it passes through a small sample of expressed juice, and converting that refractive index to a concentration figure using a calibration built on pure sucrose-in-water solutions. Because the calibration reference is sucrose, the resulting number is expressed as degrees Brix — the concentration of sucrose in water that would produce the same refractive index — regardless of what is actually dissolved in the juice being tested.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: '°Brix is not a sugar percentage',
          text: 'Fruit juice contains organic acids, soluble pectins, amino acids, and minerals alongside sugars, and all of them contribute to the refractive-index reading. °Brix correlates well with sugar content in most fruit because sugars dominate the dissolved solids, but it is a proxy, not a direct sugar assay, and treating a Brix figure as an exact sugar percentage overstates what the method measures.',
        },
      ],
    },
    {
      id: 'not-the-same-as-sweetness',
      heading: 'Why a high reading does not mean a sweet fruit',
      body: [
        {
          type: 'paragraph',
          text: 'Perceived sweetness is a sensory outcome, not a concentration reading, and it depends on more than soluble solids content. The balance between sugars and acids matters enormously — a high-soluble-solids fruit that is also high in acid tastes sour rather than sweet, which is why soluble solids content is routinely read alongside titratable acidity and the sugar-acid ratio rather than on its own. The specific sugars present also matter: fructose is markedly sweeter than glucose at an identical concentration, so two fruit lots with the same Brix reading but different sugar profiles can taste noticeably different. Aroma volatiles, which soluble solids content does not measure at all, further shape how sweet a fruit is perceived to be.',
        },
        {
          type: 'paragraph',
          text: 'This is the central caution attached to the attribute: a Brix number is a concentration measurement, not a taste verdict, and reading it as a direct sweetness score skips over the acid balance, the sugar profile, and the aroma that together determine how a fruit is actually experienced.',
        },
      ],
    },
    {
      id: 'meaning-depends-on-commodity',
      heading: 'Why the same reading means different things in different fruit',
      body: [
        {
          type: 'paragraph',
          text: 'Whether a soluble solids reading is useful as a maturity signal depends on how the commodity accumulates sugar. In fruit that does not store and later convert starch, soluble solids content is largely established by the time of harvest and changes little in storage, so a reading taken at harvest is close to the reading the fruit will carry through its market life. In starch-accumulating fruit, by contrast, a substantial share of soluble solids content develops after harvest as stored starch hydrolyses into sugars during ripening, so a low reading at harvest does not mean the fruit cannot still reach good eating quality later (cross-reference dry-matter-content and maturity-index, which are better predictors of ripening potential in that group of commodities).',
        },
      ],
    },
    {
      id: 'measurement-conditions',
      heading: 'Conditions that change the reading',
      body: [
        {
          type: 'list',
          items: [
            'Temperature: refractive index is temperature-dependent, so refractometers must be temperature-compensated or readings corrected to a stated reference temperature.',
            'Sampling location within the fruit: readings from the stem end typically differ from the blossom end, and the sun-exposed side commonly differs from the shaded side, so where the juice is taken from changes the number obtained.',
            'Juice extraction method: how thoroughly and from which tissue juice is expressed can influence the reading, which is why standardised sampling protocols specify how the sample is taken.',
            'Instrument calibration: refractometers and near-infrared instruments require regular calibration against a known reference to remain accurate.',
          ],
        },
      ],
    },
  ],
  connections: [{ type: 'post-harvest', slug: 'fruit-ripening' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Soluble solids content and its role in fruit marketing standards and maturity assessment',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Refractometer measurement practice and interpretation for fresh produce quality',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Soluble solids content measurement and its relationship to ripening and eating quality',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest quality principles for fresh fruit, including soluble solids assessment',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The measurement principle is universal; minimum soluble solids figures used for maturity or marketing purposes vary by commodity, cultivar, and jurisdiction.',
  limitations: [
    'A soluble solids reading is a refractive-index proxy for dissolved solids, not a direct sugar assay; it should not be reported or interpreted as an exact sugar percentage.',
    'Sweetness perception depends on the sugar-acid balance, the specific sugars present, and aroma volatiles, none of which a soluble solids reading captures on its own.',
    "Whether soluble solids content is a useful maturity signal depends on the commodity's ripening physiology; it behaves very differently in starch-accumulating and non-starch-accumulating fruit.",
    'Readings vary with sampling location within the fruit and with juice temperature; values reported without a stated sampling method and temperature basis are not reliably comparable.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Soluble Solids Content: What Brix Really Measures',
    description:
      'Soluble solids content (Brix) is a refractive-index proxy for dissolved juice solids, not a sugar percentage or a sweetness or maturity verdict on its own.',
    keywords: [
      'soluble solids content',
      'brix measurement',
      'refractometer',
      'fruit sweetness',
      'post-harvest quality',
    ],
  },
  structuredData: { article: true },
};
