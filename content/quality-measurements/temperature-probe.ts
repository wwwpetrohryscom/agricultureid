import type { QualityMeasurementContent } from '@/types/content';

export const temperatureProbe: QualityMeasurementContent = {
  id: 'quality-measurement-temperature-probe',
  slug: 'temperature-probe',
  contentType: 'quality-measurement',
  title: 'Temperature Probe',
  alternativeNames: ['Grain temperature monitoring', 'Cable thermometry'],
  category: 'Quality measurement',
  subcategory: 'Field and store monitoring',
  measurementClass: 'non-destructive',
  measures: [
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
  ],
  principle:
    'Temperature is read by hand-held spears inserted into the bulk, or by thermocouple or thermistor cables suspended through the bulk and logged continuously. Store management acts on the TREND — a rise against the surrounding grain and against seasonal expectation — rather than on any single absolute reading.',
  sampleRequirement:
    'Not sample-based in the usual sense: readings are taken at the fixed or hand-probed sensor locations a monitoring plan specifies, and coverage depends entirely on how those sensors are placed through the bulk.',
  destructive: false,
  referenceMethodNote:
    'Sensor placement, reading or logging frequency, and the alert response a store manager acts on are set by facility management procedures and the applicable storage guidance for the commodity and store type, not by a single universal standard.',
  measurementLimitations: [
    'A stable temperature reading is not evidence that a lot is free of mould or insects. A probe or a cable senses only the grain within a short distance of the sensor, grain itself is a good insulator, and a hot spot developing even a short distance away from the nearest sensor can go entirely undetected for a long time. Absence of a temperature signal is not evidence of the absence of a problem.',
    'It is a lagging signal, not a leading one. By the time a developing hot spot has grown large enough to reach a sensor and register as a rise, the deterioration that produced the heat has already happened and the damage — mould growth, insect activity, or elevated grain respiration — is already done. The probe reports history rather than providing an early warning in any strict sense.',
    'Cooling the grain does not undo what the heat indicated. Mycotoxin that has already formed does not disappear when a bulk is cooled or aerated, and insects that are killed by cooling or fumigation still leave behind every kernel they hollowed out. A falling temperature trend means the biological activity has slowed; it does not mean the damage already caused has been reversed (see Mould Incidence, Insect Damage).',
    'A reading has no cause attached to it. Grain can warm from its own respiration, from fungal or insect metabolic activity, from solar heating on a bin wall, from warm grain that was loaded without first being cooled, or from moisture-migration currents inside the bulk — and a temperature probe cannot distinguish between any of these. A rising reading is a reason to investigate further, not a diagnosis of what caused it.',
    "Sensor placement is, in effect, the measurement. A cable's spacing and position through the bulk determine what is and is not detectable, and the fines-rich core that tends to form beneath a fill spout — where spoilage preferentially starts — is not necessarily where a store's sensors happen to sit (see Grain Probe Sampling, on the same fill-point segregation pattern).",
    'Moisture, not temperature, is the underlying driver of storage risk, and a lot can read cool while still being unsafe if it was placed into store too wet for its intended storage period; temperature monitoring complements moisture management and does not substitute for it (see Moisture Content, Water Activity).',
  ],
  summary:
    'A temperature probe or fixed cable system reads grain temperature and its trend over time. It measures none of the things it is used to detect — mould and insects — but is used because respiring grain, growing fungi, and feeding insects all generate heat that a poorly conductive bulk retains, making a rising trend a practical, if lagging and localised, surveillance proxy.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A temperature probe or a fixed cable monitoring system does not measure mould or insects at all — it measures grain temperature, nothing more. It appears on this page against those two attributes because rising temperature is the practical, widely used field signal that biological activity is under way somewhere in a stored bulk: respiring grain, actively growing storage fungi, and feeding insects all generate heat as a by-product of being alive, and grain is such a poor conductor of heat that this warmth does not readily dissipate through the bulk — it accumulates locally, into what store managers call a hot spot.',
    },
    {
      type: 'paragraph',
      text: "That is the honest basis for temperature monitoring being the backbone of stored-grain management despite measuring none of the things it is actually used to detect: it is a surveillance proxy, not a direct test, and it must be understood and used as one. Management acts on the trend a reading shows — a rise against the temperature of the surrounding grain, and against what the season and outside conditions would otherwise predict — rather than treating any single absolute reading as a verdict on the grain's condition.",
    },
  ],
  keyFacts: [
    {
      label: 'What it actually measures',
      value: 'Grain temperature only — not mould, and not insects',
      note: 'Rising temperature is used as a proxy for the heat their activity generates',
    },
    {
      label: 'Why it works as a proxy',
      value:
        'Respiration, fungal growth, and insect feeding all generate heat that a poorly conductive bulk retains locally',
    },
    {
      label: 'A stable reading proves nothing',
      value:
        'A sensor reads only the grain near it; a hot spot elsewhere in the bulk can go undetected for a long time',
    },
    {
      label: 'A lagging signal',
      value:
        'By the time a hot spot is large enough to register at a sensor, the deterioration has already happened',
    },
    {
      label: 'Cooling does not reverse damage',
      value:
        'Mycotoxin already formed does not disappear on cooling, and insects killed still leave every kernel they hollowed',
    },
    {
      label: 'No cause is attached to a reading',
      value:
        'Respiration, fungi, insects, solar gain, and moisture migration can all warm grain; the probe cannot distinguish them',
    },
    {
      label: 'Depends on sensor placement',
      value:
        'Coverage is only as good as where the sensors happen to sit relative to where spoilage actually starts',
    },
  ],
  sections: [
    {
      id: 'what-the-probe-actually-senses',
      heading: 'What the probe actually senses',
      body: [
        {
          type: 'paragraph',
          text: 'Readings are taken with hand-held spear-type thermometers pushed into accessible parts of the bulk, or, in a more permanent installation, with thermocouple or thermistor sensors mounted at intervals along cables suspended through the bulk and connected to a logging system. Either way, the instrument measures temperature at a point, and only at that point — it has no mechanism for sensing mould growth, insect activity, or anything else directly.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A stable reading is not a clean bill of health',
          text: 'A steady, unremarkable temperature reading at every sensor in a store is not evidence that the grain is free of mould or insects. A sensor reads only the grain within a short distance of itself, grain is a good thermal insulator, and a developing hot spot even a modest distance from the nearest sensor can grow substantially before its heat reaches any monitored point. Absence of a rising signal is not the same as absence of a problem.',
        },
      ],
    },
    {
      id: 'a-lagging-signal',
      heading: 'Temperature monitoring reports history, not warning',
      body: [
        {
          type: 'paragraph',
          text: 'Because heat has to be generated, accumulate, and then conduct outward through poorly conductive grain before it reaches a sensor, a temperature rise is necessarily a delayed signal. By the time it registers, the underlying activity — fungal growth, insect feeding, or elevated respiration — has already been under way, and whatever damage that activity does is already largely done by the time the trend becomes visible on a log. Temperature monitoring is therefore better understood as a way of tracking the history and progression of a problem than as an early-warning system that catches trouble before it starts.',
        },
        {
          type: 'paragraph',
          text: 'This has a direct consequence for what a falling or cooled reading means: it indicates that biological activity has slowed, not that the deterioration already caused has been undone. Mycotoxin that formed while the grain was warm does not disappear when the bulk is subsequently cooled or aerated, and insects killed by a cooling or fumigation intervention still leave behind every kernel they damaged before they died.',
        },
      ],
    },
    {
      id: 'no-cause-and-sensor-placement',
      heading:
        'A reading has no cause attached, and placement is the measurement',
      body: [
        {
          type: 'paragraph',
          text: "A rise in temperature can come from several unrelated sources: the grain's own respiration, active fungal or insect metabolism, solar heating conducted in through a bin wall, warm grain that was placed into store without first being cooled, or currents of moisture migrating within the bulk that carry heat with them. A temperature probe cannot distinguish between any of these causes from the reading alone — a rise is a prompt to investigate the bulk further, not a diagnosis of what is causing it.",
        },
        {
          type: 'paragraph',
          text: "What a sensor system can detect is entirely bounded by where its sensors are. Cable spacing and position through the bulk determine what is and is not within range of detection, and the fines-rich core that commonly forms beneath a fill spout — precisely where spoilage tends to start first — is not guaranteed to be where a given installation's sensors happen to sit. Effective monitoring depends on placement decisions made when the system was installed as much as on the sensors themselves.",
        },
      ],
    },
    {
      id: 'moisture-is-the-driver-and-access-hazards',
      heading: 'Moisture drives the risk, and store entry is hazardous',
      body: [
        {
          type: 'paragraph',
          text: 'Temperature monitoring complements moisture management rather than substituting for it. A lot binned too wet for its intended storage duration can still deteriorate even while reading cool, because moisture, not temperature, is the underlying driver of mould growth and storage risk; a cool reading on a wet lot is reassuring in appearance only. Effective stored-grain surveillance treats temperature and moisture as separate, complementary signals rather than relying on either alone.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Placing or reading probes in a store is an access hazard',
          text: "Entering a bin, silo, or on-farm store to install or read temperature probes is a confined-space and engulfment hazard, and it is governed by facility procedures and applicable occupational safety regulation. This entry gives high-level framing only and does not describe an entry procedure. Follow the facility's documented entry procedure and applicable regulation, and never enter a bin or store without the training, equipment, and authorisation those procedures require.",
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Stored-grain temperature monitoring as part of integrated storage management',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain store temperature monitoring practice and hot-spot management in the United Kingdom',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Research on grain bulk thermal behaviour and stored-product pest and mould activity',
    },
    {
      sourceId: 'iastate-extension',
      citedFor:
        'On-farm grain bin temperature cable monitoring and storage management guidance',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Sensor placement, monitoring frequency, and the response thresholds a store manager acts on are set by facility management procedures and applicable national or regional storage guidance, and vary by commodity, store type, and climate.',
  limitations: [
    'This entry names no temperatures, rise rates, sensor spacings, or monitoring intervals. Facility management procedures and applicable storage guidance for the commodity and store type set these.',
    'This entry gives high-level framing on store-entry hazards only and does not describe a confined-space entry procedure; entry is governed by facility procedures and applicable occupational safety regulation.',
    'A temperature reading or trend is a surveillance proxy for biological activity, not a direct measurement of mould or insects, and it does not establish the presence, absence, or extent of either.',
    "This entry does not cover the installation, calibration, or operating steps for any specific probe or cable monitoring system; consult the equipment manufacturer's documentation and facility procedures.",
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Temperature Probe: A Storage Surveillance Proxy',
    description:
      'A temperature probe measures only grain heat, not mould or insects. A stable reading does not prove a lot is free of either — the signal lags and is local.',
    keywords: [
      'grain temperature probe',
      'stored grain monitoring',
      'hot spot detection',
      'grain storage surveillance',
      'temperature cable monitoring',
    ],
  },
  structuredData: { article: true },
};
