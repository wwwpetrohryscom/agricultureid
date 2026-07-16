import type { QualityMeasurementContent } from '@/types/content';

export const electronicMoistureMeter: QualityMeasurementContent = {
  id: 'quality-measurement-electronic-moisture-meter',
  slug: 'electronic-moisture-meter',
  contentType: 'quality-measurement',
  title: 'Electronic Moisture Meter',
  alternativeNames: ['Grain moisture tester', 'Capacitance moisture meter'],
  category: 'Quality measurement',
  subcategory: 'Instrumental method',
  measurementClass: 'instrumental',
  measures: [{ type: 'quality-attribute', slug: 'moisture-content' }],
  principle:
    'Water has distinct dielectric properties compared with dry grain. The meter measures the capacitance or conductance of a grain sample between electrodes and converts the reading to a moisture figure through a stored, commodity-specific calibration; it never measures water directly.',
  sampleRequirement:
    'A representative sample of the commodity the meter is set to, at or near the ambient temperature the calibration assumes, with the crop-specific setting selected before the reading is taken.',
  destructive: false,
  referenceMethodNote:
    "Meter calibrations are established and periodically verified against the oven-drying reference method. Official calibrations are issued and updated by the responsible authority — in the United States, moisture meters used in official grain inspection are of approved types with calibrations maintained by USDA's Federal Grain Inspection Service — and meters in routine commercial use are checked against reference samples or a laboratory on a documented schedule.",
  measurementLimitations: [
    'The meter is calibrated per commodity, not for moisture in general. A wheat calibration reads a wrong number on rapeseed or maize. Selecting the wrong crop setting is the most common operator error, and the meter gives no warning when it happens — it simply returns a plausible, wrong answer with the same confidence as a correct one.',
    "Calibrations drift and instruments age. A meter that has not been checked against the oven method or a reference sample on a documented schedule can be reading consistently wrong without anyone knowing, because an unchecked meter's confident readout is exactly the failure mode that matters most: nobody doubts a number the instrument states plainly.",
    'Temperature affects the reading, for both the grain and the instrument. Hot grain straight from a dryer reads wrong on a meter, and official and good-practice procedures require the sample to be at an equilibrated, stated temperature before a reading is taken.',
    'Moisture gradients inside recently dried grain defeat the meter. Grain just out of a dryer commonly has a drier shell and a wetter core; the meter reads the average condition of a lot that has not yet equilibrated internally, and that average typically reads low. Re-checking the same grain after it has tempered gives a different, higher reading — which is also part of why grain appears to "gain" moisture in store even when no water has been added.',
    'Calibrations are built over a working range and degrade toward the extremes of that range; a reading taken outside the calibrated range is an extrapolation, not an interpolation, and its reliability is correspondingly lower even though the instrument does not flag it as such.',
    "Different meter designs and models do not necessarily agree with one another on the same sample. A disagreement between a buyer's meter and a seller's meter is properly resolved by referring to the oven-drying reference method, not by consulting a second meter of either party's choosing.",
  ],
  summary:
    'An electronic moisture meter infers grain moisture from an electrical property of the sample — capacitance or conductance — using a stored, commodity-specific calibration built against the oven-drying reference method. It is a calibration, not a direct measurement, and it is only right for the commodity and conditions its calibration was built for.',
  introduction: [
    {
      type: 'paragraph',
      text: 'An electronic moisture meter measures moisture content indirectly. Water and dry grain differ markedly in how they respond to an electric field, and the instrument exploits that difference by measuring the capacitance or conductance of a grain sample placed between electrodes. That electrical reading is then converted to a moisture percentage using a calibration curve stored in the instrument for the selected commodity. At no point does the meter touch, weigh, or evaporate water — it infers moisture from an electrical property that correlates with it.',
    },
    {
      type: 'paragraph',
      text: 'The point this entry exists to make plain is that the meter is a calibration, not a measurement in the sense the oven-drying method is a measurement. Because it infers moisture from an electrical property rather than observing water directly, the instrument is only accurate for the commodity, and the conditions, its calibration was actually built for. Move outside either — the wrong crop setting, an unequilibrated temperature, grain with an internal moisture gradient, a sample outside the calibrated range — and the meter keeps returning a confident number with no indication that anything has gone wrong.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'An electrical property (capacitance or conductance) of the sample, converted to moisture via a stored calibration',
      note: 'It never measures water directly',
    },
    {
      label: 'Nature of the instrument',
      value:
        'A calibration applied to an electrical reading, not a direct measurement of water',
    },
    {
      label: 'Calibrated per commodity',
      value: 'A calibration built for one crop reads incorrectly on another',
      note: 'Wrong crop setting is the most common operator error and produces no warning',
    },
    {
      label: 'Temperature-sensitive',
      value: 'Both grain and instrument temperature affect the reading',
      note: 'Hot grain from a dryer reads wrong until it equilibrates',
    },
    {
      label: 'Blind to internal gradients',
      value:
        'Freshly dried grain with a dry shell and wet core reads low until it tempers',
    },
    {
      label: 'Checked against',
      value: 'The oven-drying reference method, on a documented schedule',
    },
    {
      label: 'Dispute resolution',
      value:
        'A disagreement between meters is resolved by the oven-drying method, not by a second meter',
    },
  ],
  sections: [
    {
      id: 'a-calibration-not-a-measurement',
      heading: 'A calibration, not a measurement',
      body: [
        {
          type: 'paragraph',
          text: 'The instrument measures a physical property — how the sample responds electrically between two electrodes — that is correlated with moisture content but is not moisture content itself. Converting that electrical reading into a moisture percentage depends entirely on a calibration curve built by testing many samples of a known commodity across a range of moistures against the oven-drying reference method and fitting the relationship. The number displayed is therefore the output of that calibration applied to the electrical reading, not an independent observation of water.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The meter cannot tell you when it is wrong',
          text: "An electronic moisture meter has no mechanism to detect that it is being used outside the conditions its calibration assumes. Wrong crop setting, unequilibrated temperature, an internal moisture gradient, or a sample outside the calibrated range all produce a plausible-looking number with the same confidence as a correct reading. The instrument's certainty is not evidence of its accuracy.",
        },
      ],
    },
    {
      id: 'commodity-specific-calibration',
      heading: 'Why the crop setting matters',
      body: [
        {
          type: 'paragraph',
          text: 'Different commodities have different dielectric behaviour, kernel geometry, and packing characteristics, so a calibration built for one crop does not transfer to another. A wheat calibration applied to rapeseed, or a maize calibration applied to a pulse crop, produces a moisture figure that is simply wrong — not approximately right, not a rough guide, wrong in a way the operator has no way to detect from the display alone. Selecting the correct crop setting before every reading is therefore not a housekeeping step but the single most consequential input the operator controls.',
        },
      ],
    },
    {
      id: 'drift-temperature-and-gradients',
      heading: 'Drift, temperature, and moisture gradients',
      body: [
        {
          type: 'list',
          items: [
            'Calibrations drift over time and instruments age; a meter that has not been checked against the oven method or reference samples on a documented schedule can be systematically wrong, and that wrongness is invisible until someone checks it.',
            'Grain and instrument temperature both affect the electrical reading; grain taken straight from a dryer reads incorrectly until it has cooled and equilibrated to a stated temperature, which is why good practice specifies letting a sample settle before reading it.',
            'Grain immediately after drying often has a drier outer shell and a wetter core that have not yet equilibrated with each other; the meter reads the average condition of that non-uniform lot and typically reads low as a result, which is part of the mechanism behind grain appearing to "gain" moisture during the first period in store, as internal moisture redistributes toward a new, higher average reading.',
          ],
        },
        {
          type: 'paragraph',
          text: "None of these effects are faults in the instrument; they are properties of what the instrument actually senses. Managing them — checking crop settings, letting grain temper and equilibrate before reading, and keeping a documented calibration-check schedule — is the operator's responsibility, not the meter's.",
        },
      ],
    },
    {
      id: 'range-and-disputes',
      heading: 'Working range and how disagreements are resolved',
      body: [
        {
          type: 'paragraph',
          text: 'A calibration is built over a specific range of moistures and conditions, and its accuracy is best within that range and degrades toward its edges. A reading taken on grain well outside the calibrated range is effectively an extrapolation from the calibration curve, not an interpolation within it, and the display gives no indication of which situation applies.',
        },
        {
          type: 'paragraph',
          text: "Because different meter models and designs do not necessarily agree with each other even on the same sample, a moisture dispute between a buyer and a seller is not properly settled by consulting a second meter — that only substitutes one calibration's uncertainty for another's. The oven-drying reference method is the accepted way to resolve such a dispute, because it is the method every meter's calibration was built to approximate in the first place.",
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-measurement', slug: 'oven-drying-method' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Official moisture meter approval and calibration maintenance for grain inspection',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Principles of electronic grain moisture measurement and calibration',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Practical guidance on grain moisture meter use, checking, and common errors',
    },
    {
      sourceId: 'iastate-extension',
      citedFor:
        'Moisture meter behaviour on freshly dried grain and moisture equilibration',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Approved instrument types and official calibration-maintenance arrangements differ by jurisdiction; the responsible national or regional grain-inspection authority sets which meter types and calibrations are accepted for official use.',
  limitations: [
    "This entry states no accuracy figures, tolerances, or moisture values for any meter or commodity; those are set by the instrument manufacturer's documentation and the responsible calibration authority.",
    'A meter reading is not a substitute for the oven-drying reference method in a genuine dispute or where the reading is critical to a transaction; it is a fast approximation calibrated against that reference.',
    "This entry does not cover the operating procedure for any specific instrument model; consult the manufacturer's manual and the applicable official inspection procedure.",
    'Meter behaviour on freshly dried, non-equilibrated grain is described qualitatively here; the magnitude of the effect depends on commodity, dryer type, and tempering time and is not stated.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Electronic Moisture Meter: A Calibration, Not a Reading',
    description:
      'Electronic grain moisture meters infer moisture from an electrical property using a stored calibration — commodity-specific and blind to its own errors.',
    keywords: [
      'electronic moisture meter',
      'grain moisture meter',
      'capacitance moisture measurement',
      'moisture meter calibration',
      'grain moisture testing',
    ],
  },
  structuredData: { article: true },
};
