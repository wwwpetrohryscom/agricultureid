import type { QualityMeasurementContent } from '@/types/content';

export const nearInfraredSpectroscopy: QualityMeasurementContent = {
  id: 'quality-measurement-near-infrared-spectroscopy',
  slug: 'near-infrared-spectroscopy',
  contentType: 'quality-measurement',
  title: 'Near-Infrared Spectroscopy',
  alternativeNames: ['NIR', 'NIRS', 'Near-infrared analysis'],
  category: 'Quality measurement',
  subcategory: 'Instrumental method',
  measurementClass: 'instrumental',
  measures: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'starch-content' },
    { type: 'quality-attribute', slug: 'kernel-hardness' },
    { type: 'quality-attribute', slug: 'dry-matter-content' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
  ],
  principle:
    'Near-infrared light is absorbed by overtone and combination vibrations of C–H, O–H, and N–H bonds in the sample. The instrument records the resulting absorption spectrum, and a multivariate calibration model — built by regression against reference analyses on a training set of samples — predicts the constituent from the spectral pattern.',
  sampleRequirement:
    'A sample presented consistently with how the calibration model was built — whole-grain or ground, at a consistent particle size, packing density, and temperature — and, for intact fruit, measured at a stated location on the surface.',
  destructive: false,
  referenceMethodNote:
    'Every near-infrared calibration is built and maintained against primary reference methods: oven drying for moisture and dry matter, Kjeldahl or Dumas combustion for protein, and solvent extraction for oil. Calibrations are monitored over time and re-standardised using ongoing reference-sample checks against those same primary methods.',
  measurementLimitations: [
    'Commodity-specific calibration is mandatory. A model built on wheat does not work on barley, and a model built on one cultivar set, growing region, or season can carry a bias when applied to grain from a different cultivar, region, or season. The instrument returns a confident number regardless of which situation applies, which is the central danger of the method.',
    'It predicts only what it was trained on, and only within the range it was trained on. Outside that range, the model is extrapolating rather than interpolating, and a sample unlike anything in the training set produces a plausible-looking number with no warning unless outlier detection is built in and actively used.',
    'Calibrations degrade over time as varieties and growing conditions change from season to season, so a calibration that was accurate when built requires ongoing monitoring, reference-sample checking, and periodic updating to remain accurate.',
    'Instrument-to-instrument transfer is not automatic. A calibration model developed on one instrument must be formally standardised before it is applied on another unit; moving a calibration to a different instrument without that transfer step can introduce a systematic bias.',
    'Sample presentation dominates the reading. Particle size, grinding, packing density, optical path length, and temperature all shift the absorption spectrum, and a model built on whole-grain samples is not interchangeable with one built on ground samples, even for the same commodity and constituent.',
    'For intact fruit and other whole produce, near-infrared light penetrates only a short distance into the tissue, so a non-destructive reading reflects the tissue near the surface on the side measured, not the composition of the whole fruit — a local inference, not a whole-unit measurement.',
    'It is fundamentally a correlation, not a direct measurement of the constituent itself. A model can appear to work by tracking some covariate that happens to correlate with the constituent in the training set, rather than the constituent directly, and such a model will fail once that underlying covariance breaks down in new samples.',
  ],
  summary:
    'Near-infrared spectroscopy predicts moisture, protein, oil, starch, kernel hardness, dry matter, and soluble solids from how a sample absorbs near-infrared light, using a multivariate calibration model built against primary reference methods. It does not measure any of these constituents directly — it is a correlation, entirely dependent on the quality of the reference analyses it was trained against and the similarity of new samples to its training set.',
  introduction: [
    {
      type: 'paragraph',
      text: "Near-infrared spectroscopy works by shining near-infrared light onto or through a sample and recording how much light is absorbed at different wavelengths. Chemical bonds such as C–H, O–H, and N–H — present throughout the organic material that makes up water, protein, oil, starch, and sugars — absorb near-infrared light at characteristic overtone and combination frequencies, producing a spectrum that carries information about the sample's composition. A multivariate calibration model, built beforehand by regressing many such spectra against reference analyses performed on the same samples by primary methods, translates a new spectrum into a predicted value for each constituent the model was trained to predict.",
    },
    {
      type: 'paragraph',
      text: 'The point that matters most about this method is that it does not measure moisture, protein, oil, starch, kernel hardness, dry matter, or soluble solids content directly — it predicts each of them from a statistical correlation between spectral features and the reference values used to build the model. Near-infrared spectroscopy is therefore a secondary method, entirely dependent on the reference analyses — oven drying, Kjeldahl or Dumas combustion, solvent extraction, and the like — that it was calibrated against, and it can never be more accurate than those underlying reference methods allow.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'An absorption spectrum, from which a calibration model predicts constituents',
      note: 'It does not measure any constituent directly',
    },
    {
      label: 'Constituents predicted',
      value:
        'Moisture, protein, oil, starch, kernel hardness, dry matter, and soluble solids content, when a calibration exists for each',
    },
    {
      label: 'Dependent on reference methods',
      value:
        'Every calibration is built and maintained against oven drying, Kjeldahl/Dumas, solvent extraction, and similar primary methods',
    },
    {
      label: 'Commodity-specific',
      value:
        'A calibration built for one crop, cultivar set, or region does not reliably apply to another',
    },
    {
      label: 'Range-limited',
      value:
        'The model predicts reliably only within the range of samples it was trained on',
    },
    {
      label: 'Instrument transfer',
      value:
        'Calibrations must be formally standardised before moving them to a different instrument',
    },
    {
      label: 'Fruit surface effect',
      value:
        'On intact fruit, the reading reflects only the tissue near the measured surface, not the whole fruit',
    },
  ],
  sections: [
    {
      id: 'how-the-prediction-works',
      heading: 'How the prediction actually works',
      body: [
        {
          type: 'paragraph',
          text: "A near-infrared instrument records how strongly a sample absorbs light across a range of near-infrared wavelengths. Because different chemical bonds absorb at different, partially overlapping wavelengths, the resulting spectrum is a composite signal that reflects the sample's overall composition rather than a clean, single-constituent readout. Extracting a usable prediction from that composite spectrum requires a calibration model — typically built with multivariate statistical regression — that has learned, from a training set of samples analysed by both near-infrared and a primary reference method, which spectral features correspond to which constituent value.",
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Near-infrared spectroscopy is a correlation, not a direct measurement',
          text: 'The instrument never observes protein, oil, starch, or moisture as such. It observes a spectrum and reports what its calibration model, trained on other samples, predicts that spectrum implies. A model can achieve strong apparent accuracy by tracking a covariate that happens to correlate with the target constituent in the training set — rather than a causal signal of the constituent itself — and such a model degrades exactly when that covariate relationship no longer holds in new samples.',
        },
      ],
    },
    {
      id: 'dependence-on-reference-methods',
      heading:
        'Entirely dependent on the reference methods it was built against',
      body: [
        {
          type: 'paragraph',
          text: 'Because the calibration model is fitted to reference values, near-infrared spectroscopy inherits every limitation of those reference methods and adds its own on top. A moisture calibration is only as good as the oven-drying results it was trained against; a protein calibration is only as good as the Kjeldahl or Dumas combustion results used to build it; an oil calibration is only as good as the solvent-extraction results behind it. Near-infrared spectroscopy can never be more accurate than the primary methods it is calibrated to reproduce — its role is to approximate those results faster and non-destructively, not to exceed them.',
        },
        {
          type: 'paragraph',
          text: 'This dependence is ongoing, not a one-time event. Calibrations are monitored over time and re-standardised using fresh reference-sample checks, because the relationship between spectrum and constituent can drift as instruments age and as the population of samples the instrument encounters shifts.',
        },
      ],
    },
    {
      id: 'commodity-and-range-limits',
      heading: 'Commodity specificity and the limits of the training set',
      body: [
        {
          type: 'list',
          items: [
            'A calibration is built for a specific commodity, and often for a specific cultivar set, growing region, or season; applying it to a different commodity is unreliable, and applying it to grain from an unrepresented cultivar, region, or season can introduce a systematic bias that the instrument does not disclose.',
            'The model predicts reliably only within the range of constituent values and sample types represented in its training set. A sample well outside that range is extrapolated rather than interpolated, and the resulting number can look entirely plausible while being wrong.',
            'Outlier detection can flag spectra that fall outside the training population, but only if it is built into the calibration and actively used; a model without outlier detection, or an operator who ignores its warnings, loses this safeguard entirely.',
          ],
        },
      ],
    },
    {
      id: 'presentation-transfer-and-fruit',
      heading:
        'Sample presentation, instrument transfer, and intact-fruit readings',
      body: [
        {
          type: 'paragraph',
          text: 'The spectrum an instrument records depends on more than composition: particle size, grinding, packing density, optical path length, and temperature all shift the absorbance pattern for the same underlying sample. A calibration built on whole-grain samples is not interchangeable with one built on ground samples, even for the same commodity and the same constituent, because the physical presentation changes the spectrum the model was trained on.',
        },
        {
          type: 'paragraph',
          text: 'Moving a calibration from the instrument it was built on to a different unit is not automatic either; instrument-to-instrument variation in optics and electronics means calibrations must be formally standardised across units before a model developed on one instrument can be trusted on another.',
        },
        {
          type: 'paragraph',
          text: 'For intact fruit measured non-destructively, near-infrared light penetrates only a short distance into the tissue, so the reading reflects composition near the surface on the side actually measured — not an average of the whole fruit. A non-destructive fruit reading is therefore a local inference about one part of one piece of produce, not a whole-unit measurement, and this matters most for soluble solids content, where sugar distribution within a fruit is often uneven.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'protein-content' },
    { type: 'quality-attribute', slug: 'oil-content' },
    { type: 'quality-attribute', slug: 'starch-content' },
    { type: 'quality-attribute', slug: 'kernel-hardness' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-measurement', slug: 'oven-drying-method' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Near-infrared calibration standards and their basis in primary reference methods for grain',
    },
    {
      sourceId: 'cimmyt',
      citedFor:
        'Near-infrared spectroscopy calibration for wheat and maize quality prediction',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Near-infrared spectroscopy use and limitations in cereal quality assessment',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Principles and limitations of near-infrared spectroscopy in post-harvest quality measurement',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Available calibrations and which laboratories maintain and standardise them differ by commodity, region, and instrument manufacturer.',
  limitations: [
    'This entry states no accuracy figures, wavelengths, or numeric calibration ranges for any commodity or constituent; these are specific to the instrument, the calibration model, and the reference methods used to build it.',
    'A near-infrared prediction is not a substitute for the underlying reference method where a dispute, contract, or regulatory requirement calls for the reference result directly.',
    "This entry describes the method's general principle and limitations, not the operating procedure for any specific instrument; consult the manufacturer's documentation and calibration records.",
    'Not every constituent listed under "measures" has a calibration available for every commodity; a working calibration must exist and be maintained for the specific commodity and constituent in question.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Near-Infrared Spectroscopy: A Prediction, Not a Reading',
    description:
      'Near-infrared spectroscopy predicts moisture, protein, oil, and other constituents from a light-absorption spectrum, not by measuring them directly.',
    keywords: [
      'near infrared spectroscopy',
      'NIR grain analysis',
      'NIRS calibration',
      'grain protein prediction',
      'quality measurement instrument',
    ],
  },
  structuredData: { article: true },
};
