import type { QualityMeasurementContent } from '@/types/content';

export const waterActivityMeter: QualityMeasurementContent = {
  id: 'quality-measurement-water-activity-meter',
  slug: 'water-activity-meter',
  contentType: 'quality-measurement',
  title: 'Water Activity Meter',
  alternativeNames: ['Aw meter', 'Chilled-mirror hygrometer'],
  category: 'Quality measurement',
  subcategory: 'Instrumental method',
  measurementClass: 'instrumental',
  measures: [{ type: 'quality-attribute', slug: 'water-activity' }],
  principle:
    'A sample is sealed in a small chamber and left until the headspace air reaches equilibrium with it. The instrument then measures the relative humidity of that equilibrated headspace — by chilled-mirror dew point, the primary approach, or by a capacitive polymer or resistive electrolytic sensor — and reports it as water activity.',
  sampleRequirement:
    'A sample small enough to equilibrate with the chamber headspace within a practical time, at the same stated temperature as the chamber, sealed to prevent moisture exchange with the surrounding room air before the reading.',
  destructive: false,
  referenceMethodNote:
    'Chilled-mirror dew-point instruments are the primary method and are verified against saturated salt standard solutions of known water activity. Capacitive and resistive sensors are calibrated against the same salt standards but drift more between checks.',
  measurementLimitations: [
    'The reading requires equilibrium. A measurement taken before the headspace has fully equilibrated with the sample is simply wrong, not merely imprecise, and dense, oily, low-water-activity, or coated samples equilibrate more slowly than operators commonly expect, producing a premature and misleadingly low or high reading if the instrument is read too soon.',
    "Water activity is strongly temperature-dependent, and the sample and the measuring chamber must be at the same, stated temperature. A sample that is warmer or cooler than the chamber produces a reading that reflects that temperature gradient rather than the sample's true water activity, and a water activity value measured at one temperature does not transfer to another temperature.",
    "It does not tell you the moisture content of the sample, and a water activity reading cannot be converted to a moisture content without the commodity's own sorption isotherm, which is specific to that commodity and to temperature — see Moisture Content and Water Activity.",
    'Sensor type matters. Capacitive and resistive sensors are sensitive to fouling by volatile compounds such as propylene glycol, ethanol, and ammonia, which poisons the sensor and produces persistent, wrong readings until it is cleaned or replaced; chilled-mirror instruments are instead sensitive to contamination of the mirror surface itself, which produces its own characteristic drift.',
    'A low water-activity reading is not a safety clearance. It predicts only whether microorganisms can grow from the moment of measurement onward — it says nothing about a toxin already formed, about chemical deterioration already underway, or about dormant spores present and waiting for conditions to change. Treating a favourable water-activity reading as a safety verdict is the misuse of this instrument that matters most — see Mould Incidence.',
    'It is a single-sample measurement. A lot is heterogeneous, and one reading from one sample point does not represent the water activity of the whole lot.',
  ],
  summary:
    'A water activity meter measures the equilibrium relative humidity of the air in a sealed chamber containing the sample — by chilled-mirror dew point or by a capacitive or resistive sensor — and reports that value as water activity. It measures the air, not the sample directly, and it requires true equilibrium and a stated, matched temperature to be meaningful.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A water activity meter works by sealing a small sample in a chamber and allowing the air in that chamber — its headspace — to come into equilibrium with the sample. Once equilibrium is reached, the water vapour leaving the sample and the water vapour condensing back onto it are in balance, and the relative humidity of the headspace air at that point equals the water activity of the sample. The instrument then measures that headspace relative humidity by one of two principal approaches: a chilled-mirror dew-point sensor, which is the primary and most accurate approach, or a capacitive polymer or resistive electrolytic sensor, which is faster and less expensive but more prone to drift.',
    },
    {
      type: 'paragraph',
      text: 'The point worth holding onto is that the instrument measures the air, not the sample directly: the equilibrium relative humidity of the headspace is the water activity, by definition. Everything the instrument gets right or wrong follows from that fact. If the headspace has not truly reached equilibrium, the reading is not an approximation of the true value — it is simply not yet the measurement at all. And because the equilibrium the instrument is reading depends on temperature, a chamber and sample that are not at the same, correctly stated temperature will never produce a trustworthy result.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The equilibrium relative humidity of the headspace air above a sealed sample, reported as water activity',
      note: 'It measures the air, not the sample directly',
    },
    {
      label: 'Two sensor approaches',
      value:
        'Chilled-mirror dew point (primary) and capacitive polymer or resistive electrolytic sensors',
    },
    {
      label: 'Requires equilibrium',
      value:
        'A reading taken before the headspace equilibrates with the sample is simply wrong',
      note: 'Dense, oily, or low-water-activity samples equilibrate slowly',
    },
    {
      label: 'Temperature-critical',
      value: 'Sample and chamber must be at the same, stated temperature',
    },
    {
      label: 'Does not give moisture content',
      value:
        "Conversion to moisture content requires the commodity's own sorption isotherm",
    },
    {
      label: 'Not a safety clearance',
      value:
        'A low reading predicts future microbial growth potential only — not existing toxin, chemical change, or spores present',
    },
    {
      label: 'Calibrated against',
      value: 'Saturated salt standard solutions of known water activity',
    },
  ],
  sections: [
    {
      id: 'what-it-actually-measures',
      heading: 'It measures the air, not the sample',
      body: [
        {
          type: 'paragraph',
          text: "Water activity is defined as the equilibrium relative humidity of air in contact with a sample, expressed as a fraction. A water activity meter is built directly around that definition: it seals a sample in a small chamber, waits for the air in that chamber to stop changing — the point of equilibrium — and measures the humidity of that stabilised air. The reading is not an inference about the sample's internal chemistry the way an oven-drying or near-infrared result is; it is a direct measurement of the one thing the definition actually specifies, the air.",
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A reading before equilibrium is not a measurement',
          text: "Because the method is defined by equilibrium, an instrument read before that equilibrium is reached is not producing an imprecise estimate — it is producing a number that does not correspond to the sample's water activity at all. Dense, oily, low-water-activity, or coated samples can take substantially longer to equilibrate than operators expect, and reading the instrument on the manufacturer's default timer without confirming stability is a common source of error.",
        },
      ],
    },
    {
      id: 'sensor-types',
      heading: 'Chilled-mirror versus capacitive and resistive sensors',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chilled-mirror dew-point sensor',
              description:
                'Cools a mirror until dew forms on it and detects the temperature at which condensation begins, giving a direct physical measurement of dew point that is converted to water activity. This is the primary approach against which other sensor types are checked.',
            },
            {
              term: 'Capacitive polymer sensor',
              description:
                'A polymer film absorbs water vapour from the headspace and changes electrical capacitance in response; faster and less expensive than a chilled mirror, but more prone to drift and to fouling by volatile compounds.',
            },
            {
              term: 'Resistive electrolytic sensor',
              description:
                "Measures a change in electrical resistance caused by water vapour absorption; shares the capacitive sensor's susceptibility to fouling and drift.",
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Capacitive and resistive sensors are calibrated, like chilled-mirror instruments, against saturated salt standard solutions of known water activity, but they require more frequent checking because their sensing surfaces are chemically active and can be poisoned by volatile compounds such as propylene glycol, ethanol, or ammonia present in or near the sample. A poisoned sensor produces a persistent, wrong reading that looks like a normal, stable measurement until the sensor is cleaned, replaced, or re-verified against a known standard.',
        },
      ],
    },
    {
      id: 'temperature-and-conversion',
      heading: 'Temperature dependence and why it is not a moisture reading',
      body: [
        {
          type: 'paragraph',
          text: "Because water activity is itself a temperature-dependent property, the sample and the measuring chamber must be at the same, correctly stated temperature for the reading to be meaningful. A sample introduced warmer or cooler than the chamber produces a reading that reflects the temperature gradient between them as much as the sample's underlying water activity, and a result obtained at one temperature cannot simply be applied at another temperature without a fresh measurement or a validated correction.",
        },
        {
          type: 'paragraph',
          text: "A water activity meter also does not report moisture content, and the two properties cannot be interconverted without the specific commodity's sorption isotherm — the curve relating that commodity's moisture content to its water activity at a given temperature, which differs from one commodity to the next. See Moisture Content and Water Activity for why these are genuinely separate properties, not two units for the same thing.",
        },
      ],
    },
    {
      id: 'misuse-as-a-safety-verdict',
      heading: 'A low reading is not a safety clearance',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title:
            'Water activity predicts future growth potential, not past or present safety',
          text: 'A water activity meter answers one question: can microorganisms grow in this sample from now on, at this water activity and temperature? It says nothing about mycotoxin or other toxin already formed before the reading was taken, nothing about chemical deterioration already underway, and nothing about dormant spores present in the sample waiting for conditions to change. Treating a favourable water activity reading as evidence a lot is safe is a documented and consequential misreading of what the instrument measures. See Mould Incidence.',
        },
        {
          type: 'paragraph',
          text: 'The instrument is also a single-sample measurement: a lot of any real size is heterogeneous, and one reading taken from one sample point does not represent the water activity of the whole lot, particularly where moisture or microbial activity is unevenly distributed.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'water-activity' },
    { type: 'quality-attribute', slug: 'moisture-content' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'efsa',
      citedFor:
        'Water activity as a predictor of microbial growth potential, not a safety verdict',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Principles of water activity measurement and its role in storage stability',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Water activity meter sensor types, equilibration behaviour, and calibration',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Practical guidance on water activity measurement in stored commodities',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Instrument types in use, calibration-verification schedules, and any regulatory reliance on water activity readings differ by jurisdiction and by commodity.',
  limitations: [
    'This entry states no water activity values, limits, or equilibration times; those depend on the commodity, the instrument, and the applicable food-safety or storage guidance.',
    'A water activity reading is not a substitute for microbiological or mycotoxin testing; it predicts growth potential only and does not detect toxin, spores, or chemical deterioration already present.',
    "This entry does not cover the operating procedure for any specific instrument model; consult the manufacturer's documentation for equilibration time, chamber cleaning, and sensor-verification schedules.",
    'A single reading represents only the sample measured; representing a heterogeneous lot requires multiple samples drawn according to an appropriate sampling plan.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Water Activity Meter: What the Reading Predicts',
    description:
      'A water activity meter measures the equilibrated headspace air above a sample, not the sample directly, and a low reading is not a safety clearance.',
    keywords: [
      'water activity meter',
      'aw meter',
      'chilled mirror hygrometer',
      'water activity measurement',
      'grain storage stability',
    ],
  },
  structuredData: { article: true },
};
