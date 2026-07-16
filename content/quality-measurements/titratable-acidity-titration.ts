import type { QualityMeasurementContent } from '@/types/content';

export const titratableAcidityTitration: QualityMeasurementContent = {
  id: 'quality-measurement-titratable-acidity-titration',
  slug: 'titratable-acidity-titration',
  contentType: 'quality-measurement',
  title: 'Titratable Acidity Titration',
  alternativeNames: ['TA titration', 'Acid titration'],
  category: 'Quality measurement',
  subcategory: 'Laboratory method',
  measurementClass: 'laboratory',
  measures: [{ type: 'quality-attribute', slug: 'titratable-acidity' }],
  principle:
    "A measured volume of expressed juice is neutralised with a standardised alkali solution to a defined endpoint — detected either by a pH meter, the preferred approach, or by a colour indicator — and the acid content is calculated from the volume of alkali consumed and expressed as the commodity's dominant acid.",
  sampleRequirement:
    'A measured volume of juice expressed from a stated number of fruit per lot, prepared by a stated extraction method, titrated against a standardised alkali of a stated concentration to a defined endpoint.',
  destructive: true,
  referenceMethodNote:
    'The endpoint pH, the alkali concentration, the sample volume, and the acid the result is expressed as are all prescribed by the applicable official method — AOAC, ISO, OIV for wine, or the relevant national or marketing standard — and a result must be reported together with the acid convention used, or it cannot be interpreted.',
  measurementLimitations: [
    'The result is a reporting convention, not a fact about the juice: expressing the same titration data as malic, citric, or tartaric acid produces different numbers from identical laboratory work, because the acids have different equivalent weights, so figures expressed as different acids are not comparable, and a titratable acidity figure reported without its acid convention is unusable.',
    'The endpoint choice changes the answer: a colour-indicator endpoint and a pH-meter endpoint do not fall at exactly the same point, and coloured or turbid juices such as red grape or berry juice can obscure a colour indicator entirely, so results produced by the two approaches are not interchangeable.',
    "It is a total, and totals hide composition: a juice's acid identity and the balance among its individual acids matter to flavour and to processing, and neither is visible in a single titratable acidity figure (cross-reference titratable-acidity).",
    'It is not pH and does not substitute for it: titratable acidity measures acid available to be neutralised, while pH measures free hydrogen-ion activity at the moment of testing; buffering decouples the two, and using titratable acidity to answer a question that is actually governed by pH — such as the acid barrier in a preserved product — is a real and consequential misuse of the method.',
    'Dissolved carbon dioxide in the sample titrates as though it were acid and inflates the result unless it is removed before titration, which matters particularly for wine and carbonated or fermenting juice.',
    'Juice extraction method and within-fruit variation propagate directly into the number, exactly as they do for a refractometer reading, and a titratable acidity figure and a soluble solids figure taken from differently prepared juice should not be combined into a ratio.',
  ],
  summary:
    "Titratable acidity titration determines the total acid in expressed juice by neutralising it with a standardised alkali to a defined endpoint, then expressing the result as the commodity's dominant acid. The result is a laboratory convention, not a raw chemical fact: the acid it is expressed as, the endpoint detection method, and the presence of dissolved carbon dioxide all change the figure, and it must never be substituted for a pH measurement.",
  introduction: [
    {
      type: 'paragraph',
      text: "Titratable acidity titration works by adding a standardised alkali solution, drop by drop, to a measured volume of expressed juice until the mixture reaches a defined endpoint — the point at which the acid in the sample has been neutralised. That endpoint is detected either with a pH meter, which is the preferred approach because it is objective and works on juices of any colour, or with a colour indicator, which changes colour at the endpoint but can be difficult or impossible to read in deeply coloured or turbid juice. The volume of alkali consumed is then converted into an acid concentration and reported as though the juice's entire acid content were the one acid that dominates in that commodity — malic acid in apples, citric acid in citrus, tartaric acid in grapes.",
    },
    {
      type: 'paragraph',
      text: 'Every one of the choices behind that final number — which endpoint was used, what alkali concentration and sample volume were titrated, and which acid the result was expressed as — is prescribed by an applicable official method: AOAC, ISO, OIV for wine, or the relevant national or marketing standard. A titratable acidity figure reported without stating which convention produced it is not a usable figure, because the same juice titrated under two different conventions can report two different numbers that are both correct within their own method.',
    },
  ],
  keyFacts: [
    {
      label: 'Also called',
      value: 'TA titration, acid titration',
    },
    {
      label: 'What it measures',
      value: 'Total acid in expressed juice, neutralised to a defined endpoint',
    },
    {
      label: 'Endpoint detection',
      value: 'pH meter (preferred) or colour indicator',
      note: 'The two approaches are not interchangeable, especially on coloured or turbid juice',
    },
    {
      label: 'Result is expressed as',
      value:
        "The commodity's dominant acid — a reporting convention, not a chemical fact",
    },
    {
      label: 'Not the same as',
      value:
        'pH — a different measurement that titratable acidity does not substitute for',
    },
    {
      label: 'Interference',
      value:
        'Dissolved carbon dioxide titrates as acid and inflates the result unless removed',
    },
    {
      label: 'Where the method details are set',
      value:
        'The applicable official method (AOAC, ISO, OIV) or national/marketing standard',
    },
  ],
  sections: [
    {
      id: 'the-expression-convention',
      heading: 'Why a result means nothing without its acid convention',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit juice contains a mixture of organic acids, not a single one. Rather than report each acid separately, routine titratable acidity work converts the titration result — the volume of alkali needed to reach the endpoint — into a figure as though the entire acid content were the one acid that dominates in that commodity. Because different acids have different molar-equivalent weights, the same titration data converts to a different number depending on which acid is used for the conversion.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Figures expressed as different acids are not comparable',
          text: 'A titratable acidity figure expressed as malic acid and one expressed as citric acid are not on the same scale, even at similar-looking numeric values. Always confirm which acid a figure was expressed as, per the applicable official method, before comparing it against another.',
        },
      ],
    },
    {
      id: 'endpoint-detection',
      heading: 'Endpoint detection: pH meter versus colour indicator',
      body: [
        {
          type: 'paragraph',
          text: "A pH meter detects the titration endpoint objectively, by monitoring the sample's pH as alkali is added and stopping at a defined pH value prescribed by the applicable method. It works reliably regardless of the juice's colour or clarity, which is why it is the preferred detection approach in laboratory practice. A colour indicator instead relies on a visible colour change at the endpoint, which is simpler to carry out without a calibrated pH meter but becomes difficult or impossible to read in a deeply coloured juice, such as red grape or many berry juices, or in a turbid sample where the colour change is masked. Because the two approaches do not fall at exactly the same point in every juice, results produced by a colour-indicator endpoint and a pH-meter endpoint are not strictly interchangeable.",
        },
      ],
    },
    {
      id: 'not-a-substitute-for-ph',
      heading: 'Titratable acidity is not pH',
      body: [
        {
          type: 'paragraph',
          text: 'Titratable acidity and pH measure genuinely different things. Titratable acidity totals the acid available to be neutralised by an added alkali, including acid held in buffered or undissociated form. pH measures the activity of free hydrogen ions in the juice at the moment of testing — the intensity of acidity as it presents itself right now. Because juices are buffered, two juices at the same pH can carry substantially different titratable acidity, and vice versa. Using a titratable acidity figure to answer a question that is actually governed by pH — most consequentially, the acid barrier that determines microbial safety in a preserved or processed product — is a documented and real source of error, not a theoretical one.',
        },
        {
          type: 'paragraph',
          text: 'Dissolved carbon dioxide compounds this distinction further: in wine and in fermenting or carbonated juice, dissolved carbon dioxide titrates as though it were acid and inflates a titratable acidity result unless it is removed from the sample before titration begins, an interference that does not affect a pH reading in the same way.',
        },
      ],
    },
    {
      id: 'sampling-and-preparation',
      heading: 'Sampling and juice preparation carry through to the result',
      body: [
        {
          type: 'list',
          items: [
            'The number of fruit sampled and how representative they were of the lot set the reliability of the reported figure, exactly as for any destructive laboratory test on a variable population.',
            'The juice extraction method — how thoroughly and from which tissue juice is expressed — changes the titratable acidity figure obtained, which is why standardised protocols specify sample preparation.',
            'A titratable acidity figure should only be combined with a soluble solids reading into a sugar-acid ratio when both were taken from juice prepared the same way; mismatched preparation methods propagate directly into a misleading ratio.',
            "The alkali's concentration must be standardised against a known reference before use; drift in the alkali's actual concentration shifts every titration result taken with it.",
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'commodity-grade', slug: 'unece-fresh-produce-standards' },
  ],
  relatedTopics: [{ type: 'post-harvest', slug: 'fruit-ripening' }],
  sourceReferences: [
    {
      sourceId: 'usda-ars',
      citedFor:
        'Titratable acidity titration methodology in post-harvest fruit quality research',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Titration practice, endpoint detection, and expression conventions for fruit and juice acidity',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Titratable acidity measurement in the context of fresh produce quality assessment',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest quality assessment principles covering acidity measurement',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The titration chemistry is universal; the endpoint, alkali concentration, sample volume, and acid-expression convention are prescribed by the applicable official method or national/marketing standard and vary by commodity and jurisdiction.',
  limitations: [
    'This entry describes the general titration method and where it is commonly misread; the specific alkali concentration, sample volume, endpoint, and acid convention for a given commodity are set by the applicable official method or standard, not by this page.',
    'Manual and automated titrators can differ in endpoint precision and throughput; figures should not be pooled across instrument types without confirming both followed the same official method.',
    'A titratable acidity figure does not identify which individual acids are present or their relative proportions; that requires separate chemical analysis beyond a single titration.',
    'This entry covers the laboratory titration method itself, not food-safety or preservation standards, which are governed by pH and by the applicable regulatory framework, not by titratable acidity.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Titratable Acidity Titration: Method and Limits',
    description:
      'Titratable acidity titration neutralises juice acid to a defined endpoint. The result is a convention: not pH, not one acid, endpoint-dependent.',
    keywords: [
      'titratable acidity titration',
      'acid titration method',
      'juice titration',
      'TA versus pH',
      'fruit acidity measurement',
    ],
  },
  structuredData: { article: true },
};
