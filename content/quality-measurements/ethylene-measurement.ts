import type { QualityMeasurementContent } from '@/types/content';

export const ethyleneMeasurement: QualityMeasurementContent = {
  id: 'quality-measurement-ethylene-measurement',
  slug: 'ethylene-measurement',
  contentType: 'quality-measurement',
  title: 'Ethylene Measurement',
  alternativeNames: [
    'Ethylene production measurement',
    'Ethylene gas analysis',
  ],
  category: 'Quality measurement',
  subcategory: 'Laboratory method',
  measurementClass: 'laboratory',
  measures: [{ type: 'quality-attribute', slug: 'ethylene-production' }],
  principle:
    "A headspace gas sample is drawn from a sealed container holding the commodity, or from a store's atmosphere, and the ethylene concentration is quantified — by gas chromatograph with a flame ionisation detector as the reference approach, by an electrochemical or photoacoustic analyser, or by colorimetric detection tubes for rough field checks. Production is then calculated from the measured concentration, the container's free volume, the sample mass, and the enclosure time.",
  sampleRequirement:
    "A stated mass of commodity, sealed in a container of stated free volume for a stated enclosure period before the headspace sample is drawn, or a defined sampling point within a store's atmosphere when the store itself, rather than an individual sample, is being measured.",
  destructive: false,
  measurementLimitations: [
    'Enclosing the sample changes it: sealing fruit to accumulate measurable headspace ethylene also accumulates carbon dioxide and depletes oxygen around it, and both of those changes feed back on ethylene production, so the enclosure period is a compromise and the measured rate depends on how long the sample was sealed.',
    'It is a snapshot of a moving target: climacteric ethylene production is autocatalytic and rises steeply once triggered, so a single measurement on a ripening lot can be obsolete within a day, and a low reading on fruit that has not yet been triggered says nothing about what it will be producing tomorrow.',
    'Methods differ enormously in sensitivity and in what they respond to: the biologically active concentrations are very low, near or below what field detection tubes and some portable analysers can reliably resolve, and those simpler methods are also more prone to interference from other volatile compounds, so a field "not detected" result is not evidence of absence.',
    'Contamination is easy and unforgiving: ethylene from combustion engines, from ripening fruit stored nearby, from damaged or diseased tissue, and from certain plastics and tubing enters both individual samples and whole stores, so an elevated reading identifies the presence of ethylene without identifying its source.',
    'Production is not the same as sensitivity: this measurement quantifies what a commodity itself emits and says nothing about how much ethylene exposure that commodity — or a different commodity stored nearby — can tolerate before injury occurs; the two properties are independent of each other (cross-reference ethylene-production).',
    'Sampling point matters inside a store: ethylene is not distributed uniformly around a stack or a room, so a single sampling port reading does not necessarily represent the atmosphere the whole store is experiencing.',
  ],
  summary:
    "Ethylene measurement quantifies ethylene gas either produced by a commodity, sampled from the headspace of a sealed enclosure, or present in a store's atmosphere, sampled at a defined point. A fruit's production rate and a store's ambient concentration are genuinely different quantities that are routinely and consequentially confused: production is a property of the commodity, while store concentration also depends on load, free volume, ventilation, and any active scrubbing.",
  introduction: [
    {
      type: 'paragraph',
      text: "Ethylene measurement determines how much ethylene gas is present, either as production from a commodity or as ambient concentration in a storage atmosphere. To measure production, the commodity is sealed in a container for a defined period and a headspace gas sample is drawn and analysed; to measure a store's atmosphere, a gas sample is drawn directly from a defined point within the facility. The gas itself is quantified by one of several methods that trade off sensitivity, cost, and speed: gas chromatography with a flame ionisation detector is the reference approach and the most sensitive; electrochemical and photoacoustic analysers offer faster, more portable readings at somewhat lower sensitivity; and simple colorimetric detection tubes provide a rough field check, useful for a quick presence-or-absence signal but not for precise quantification.",
    },
    {
      type: 'paragraph',
      text: "The distinction that governs correct use of any ethylene figure is between a production rate and a store concentration, and confusing the two is the routine error in reading ethylene data. A fruit's production rate is a property of that fruit — how much ethylene it is generating — while the concentration measured in a store depends additionally on how much produce is loaded, how much free air volume surrounds it, how fast the space is ventilated, and whether any ethylene-scrubbing system is running. A high concentration in a poorly ventilated store does not necessarily mean the produce inside is producing unusually large amounts of ethylene, and a low production rate from an individual fruit does not guarantee a low concentration in a crowded, poorly ventilated room.",
    },
  ],
  keyFacts: [
    {
      label: 'Also called',
      value: 'Ethylene production measurement, ethylene gas analysis',
    },
    {
      label: 'What it measures',
      value:
        'Ethylene concentration, from which production or store atmosphere is calculated',
    },
    {
      label: 'Reference method',
      value: 'Gas chromatograph with a flame ionisation detector',
    },
    {
      label: 'Other methods',
      value:
        'Electrochemical or photoacoustic analysers; colorimetric tubes for rough field checks',
    },
    {
      label: 'Key distinction',
      value:
        'Fruit production rate versus store atmosphere concentration — different quantities, routinely confused',
    },
    {
      label: 'Field-tube caveat',
      value:
        'A field "not detected" reading is not evidence of absence at biologically active concentrations',
    },
    {
      label: 'Store sampling',
      value:
        "Ethylene is not uniform around a stack; a single port reading is not the whole store's atmosphere",
    },
  ],
  sections: [
    {
      id: 'production-versus-store-concentration',
      heading:
        'Production rate and store concentration are different quantities',
      body: [
        {
          type: 'paragraph',
          text: "A production measurement isolates the commodity, seals it, and asks how much ethylene that commodity itself is generating over the enclosure period. A store-atmosphere measurement instead samples the shared air a whole room or container full of produce is sitting in, and that figure is shaped by far more than any single fruit's biology: the total mass of produce loaded, the free air volume around it, the rate fresh air is exchanged, and whether the facility is actively removing ethylene all move the concentration independently of what any individual item is producing.",
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The routine error: treating the two as interchangeable',
          text: 'A high ethylene concentration measured in a store does not, by itself, tell you which produce in that store is the source, and it does not tell you how much ethylene any individual commodity is producing. Conversely, a low production rate measured on isolated fruit does not guarantee a low concentration once that fruit is loaded into a crowded, poorly ventilated space alongside other ethylene sources.',
        },
      ],
    },
    {
      id: 'measurement-methods-and-sensitivity',
      heading: 'Method choice trades sensitivity for speed and cost',
      body: [
        {
          type: 'paragraph',
          text: 'Gas chromatography with a flame ionisation detector is the reference method against which other approaches are checked, and it is the most sensitive, but it requires laboratory equipment and is comparatively slow. Electrochemical and photoacoustic analysers offer faster, field-portable readings and have become common in commercial storage monitoring, generally at somewhat lower sensitivity than the laboratory reference method. Colorimetric detection tubes are the simplest and least expensive option, useful for a rapid rough check of whether ethylene is present at a noticeable level, but they are the least sensitive of the common approaches and the most prone to interference from other volatile compounds in the air, which limits how much confidence a "not detected" result on a tube deserves.',
        },
      ],
    },
    {
      id: 'contamination-and-enclosure-effects',
      heading: 'Contamination and the enclosure itself distort readings',
      body: [
        {
          type: 'paragraph',
          text: "Ethylene is produced by more than the commodity being tested. Combustion-engine exhaust, ripening fruit stored nearby, damaged or diseased tissue, and even some plastics and rubber tubing used in the sampling equipment itself can all introduce ethylene into a sample or a store's atmosphere. An elevated reading confirms that ethylene is present; it does not, by itself, identify the source, and attributing an elevated store concentration to the produce inside without ruling out these other sources is a common and avoidable error.",
        },
        {
          type: 'paragraph',
          text: 'Sealing a sample to measure its production also changes the atmosphere the sample sits in for the duration of the test: the same enclosure that lets ethylene accumulate to a measurable level also lets carbon dioxide build up and oxygen deplete, and both of those changes can feed back on the ethylene production being measured. The enclosure period is therefore a practical compromise, long enough to accumulate a measurable headspace concentration but short enough to limit how much the sealed atmosphere itself has drifted from ambient conditions.',
        },
      ],
    },
    {
      id: 'a-snapshot-not-a-forecast',
      heading: 'A single reading is a snapshot, not a forecast',
      body: [
        {
          type: 'list',
          items: [
            'Climacteric ethylene production is autocatalytic once triggered and can rise steeply over a short period, so a single measurement can be substantially out of date within a day on a lot that is actively ripening.',
            'A low or undetected reading on fruit that has not yet been triggered into the autocatalytic rise says nothing about what that fruit will be producing once ripening begins.',
            "Ethylene production is a property of the commodity being measured and is entirely separate from that commodity's sensitivity to ethylene exposure from other sources — the two must not be conflated (cross-reference ethylene-production).",
            "Within a store, ethylene concentration varies with position relative to ventilation, produce load, and any scrubbing equipment, so a single sampling-port reading should not be generalised to the whole space without confirming the store's mixing characteristics.",
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'post-harvest', slug: 'ethylene-management' },
    { type: 'post-harvest', slug: 'controlled-atmosphere-storage' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Ethylene measurement methodology and gas-chromatography reference method in post-harvest physiology research',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Ethylene measurement in the context of fresh produce ripening and storage management',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Ethylene detection methods and their sensitivity limitations in produce handling',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest physiology principles for fresh fruit and vegetables, including ethylene',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The gas-detection principles are universal; enclosure design, sampling points, and instrument choice are set by the applicable laboratory or facility protocol and vary by commodity, facility design, and purpose.',
  limitations: [
    'This entry describes general ethylene measurement principles and where readings are commonly misread; specific enclosure periods, sampling points, and instrument choice are set by the applicable laboratory or facility protocol, not by this page.',
    'This entry does not describe gas application procedures, target concentrations, or exposure regimes used in ripening rooms or stores; those are operated to documented facility procedures by trained staff, not summarised here.',
    'Field-portable analysers and colorimetric tubes trade sensitivity for speed and cost; a negative field result does not carry the same evidentiary weight as a laboratory gas-chromatography result.',
    "This entry covers measurement of ethylene itself, not a commodity's sensitivity to ethylene exposure, which is a separate property assessed through different means (cross-reference ethylene-production).",
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Ethylene Measurement: Production vs Store Levels',
    description:
      'Ethylene measurement quantifies gas from a sealed sample or a store atmosphere: production rate and store concentration are different quantities.',
    keywords: [
      'ethylene measurement',
      'ethylene production testing',
      'ethylene gas analysis',
      'post-harvest ripening',
      'ethylene detection methods',
    ],
  },
  structuredData: { article: true },
};
