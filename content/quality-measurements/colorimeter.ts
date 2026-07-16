import type { QualityMeasurementContent } from '@/types/content';

export const colorimeter: QualityMeasurementContent = {
  id: 'quality-measurement-colorimeter',
  slug: 'colorimeter',
  contentType: 'quality-measurement',
  title: 'Colorimeter',
  alternativeNames: [
    'Chroma meter',
    'Tristimulus colorimeter',
    'Spectrophotometer',
  ],
  category: 'Quality measurement',
  subcategory: 'Instrumental method',
  measurementClass: 'non-destructive',
  measures: [{ type: 'quality-attribute', slug: 'colour' }],
  principle:
    'The surface is illuminated by a specified light source, the reflected light is measured, and the result is expressed as coordinates in a defined colour space — commonly CIE L*a*b*, with hue angle and chroma derived from those coordinates — for a specified illuminant and standard observer.',
  sampleRequirement:
    'A stated number of units per lot, read at a stated aperture size and number of readings per unit, following a defined reading pattern across the sun-exposed and shaded surfaces where colour is known to vary.',
  destructive: false,
  referenceMethodNote:
    "Instruments are standardised against a white calibration tile, and typically a black trap, before each use, and the illuminant, standard observer, aperture size, and instrument geometry must be reported alongside the result. Two instrument families are used interchangeably in practice but do not always agree: a tristimulus colorimeter filters incoming light to approximate the human eye's three-receptor response, while a spectrophotometer records the full reflectance spectrum and computes the colour coordinates from it.",
  measurementLimitations: [
    'The specification is part of the number: coordinates measured under one illuminant, standard observer, aperture, or instrument geometry are not the same numbers as coordinates measured under another, so readings from differently configured instruments are not comparable, and a colour figure reported without its instrument conditions is not usable.',
    'It reads a small spot: produce colour is heterogeneous across a single unit — sun-exposed side versus shaded side, blush versus ground colour — so where the aperture is pointed determines the answer, and a defensible lot figure requires a defined reading pattern that many protocols under-specify.',
    'Curved, glossy, waxy, and translucent surfaces break the measurement geometry: specular reflection from a shiny apple skin and light entering and scattering within translucent tissue both bias the result, and surface moisture or condensation on fruit fresh from cold storage biases it further.',
    'It measures colour, not what colour is being used as a proxy for: the instrument is precise about the surface and silent about ripeness, internal condition, and eating quality, and the precision of the coordinates lends the inference drawn from them an authority the measurement itself does not support (cross-reference colour).',
    'Instrument colour spaces do not map linearly onto human perception or onto the visual colour charts that many grade standards actually specify, so an instrument reading does not automatically translate into a chart score without a defined conversion.',
    'It says nothing about colour uniformity or pattern — russeting, blush distribution, or streaking — which is frequently what the applicable grade standard actually cares about, and a single-point reading cannot describe a pattern across the whole surface.',
  ],
  summary:
    'A colorimeter — also called a chroma meter or tristimulus colorimeter, with a spectrophotometer as a related but distinct instrument — measures the light reflected from a produce surface under a specified illuminant and reports it as coordinates in a defined colour space. The instrument is precise about the exact spot it reads and silent about everything colour is commonly used as a proxy for: ripeness, internal condition, and eating quality.',
  introduction: [
    {
      type: 'paragraph',
      text: "A colorimeter illuminates the surface of a commodity with a light source of a specified spectral character, measures the light reflected back, and converts that measurement into coordinates within a defined colour space — most commonly the CIE L*a*b* system, from which a hue angle and a chroma value can also be derived. Two related instrument families exist: a tristimulus colorimeter filters the incoming reflected light through three channels designed to approximate how the human eye's receptors respond to colour, while a spectrophotometer instead records the full reflectance spectrum across many wavelengths and computes the same colour-space coordinates from that fuller dataset. The two do not always agree, particularly on surfaces with unusual reflectance properties, and which instrument produced a given figure is part of what makes that figure interpretable.",
    },
    {
      type: 'paragraph',
      text: "Before any reading is taken, the instrument is standardised against a white calibration tile — and typically also a black trap — to correct for drift in its light source and detector. What the resulting coordinates mean depends on a specification that travels with every reading: the illuminant used, the standard observer the instrument assumes, the aperture size through which the surface was viewed, and the instrument's geometry. None of that specification is optional detail; changing any one element changes the numbers obtained from an identical surface.",
    },
  ],
  keyFacts: [
    {
      label: 'Also called',
      value:
        'Chroma meter, tristimulus colorimeter; spectrophotometer is a related but distinct instrument',
    },
    {
      label: 'What it measures',
      value:
        'Reflected light from the surface, expressed as coordinates in a defined colour space',
    },
    {
      label: 'Method type',
      value: 'Non-destructive, instrumental',
    },
    {
      label: 'Result depends on',
      value: 'Illuminant, standard observer, aperture, and instrument geometry',
      note: 'Must be reported with the result or the coordinates are not comparable',
    },
    {
      label: 'Calibration',
      value:
        'Standardised against a white tile (and typically a black trap) before use',
    },
    {
      label: 'Reads',
      value:
        'A small spot on the surface — not the whole unit, and not colour pattern or uniformity',
    },
    {
      label: 'Does not measure',
      value:
        'Ripeness, internal condition, or eating quality (cross-reference colour)',
    },
  ],
  sections: [
    {
      id: 'two-instrument-families',
      heading: 'Tristimulus colorimeters and spectrophotometers',
      body: [
        {
          type: 'paragraph',
          text: "A tristimulus colorimeter is built around three filtered detector channels engineered to mimic the eye's response to colour, which makes it compact, fast, and relatively inexpensive. A spectrophotometer instead measures reflectance across the full visible spectrum and calculates colour coordinates mathematically from that data, which generally makes it more accurate on unusual or difficult surfaces but slower and more expensive. Because the two work on different underlying data, they can disagree on the same surface, particularly where reflectance departs from the smooth, well-behaved profile the tristimulus approach was designed around — which is exactly the situation many glossy, waxy, or curved fruit surfaces present.",
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'A colour figure without its instrument conditions is not usable',
          text: 'Illuminant, standard observer, aperture size, and instrument geometry are part of the definition of a colour-space reading, not incidental detail. Comparing coordinates produced under different conditions, or from different instrument families, as though they were on one scale is a routine misreading.',
        },
      ],
    },
    {
      id: 'where-the-aperture-points',
      heading: 'A small spot on a large, uneven surface',
      body: [
        {
          type: 'paragraph',
          text: 'Produce colour is rarely uniform across a single unit. Many fruit show a marked difference between the sun-exposed side, which typically develops more blush or deeper colour, and the shaded side, which more closely reflects the ground colour beneath any blush. A colorimeter reads only the small area the aperture is pointed at, so a single reading describes that spot and nothing else about the fruit. Producing a defensible lot-level colour figure requires a defined reading pattern — a stated number of readings per unit at stated positions — and protocols that leave this pattern unspecified allow the same lot to be characterised very differently depending on where the operator chose to point the instrument.',
        },
      ],
    },
    {
      id: 'surface-effects-that-bias-the-reading',
      heading: 'Surface effects that bias the reading',
      body: [
        {
          type: 'list',
          items: [
            'Glossy or waxy skins produce specular reflection — a mirror-like glare — that the measurement geometry is not designed to separate from the diffuse reflectance the colour calculation assumes, biasing the reading.',
            'Translucent tissue allows light to enter and scatter beneath the surface before re-emerging, which mixes subsurface optical properties into what is supposed to be a surface-colour reading.',
            'Curved surfaces change the angle of incidence and reflection across the aperture in ways flat calibration surfaces do not, which can shift readings depending on exactly where on the curve the aperture sits.',
            'Surface moisture or condensation — common on produce fresh from cold storage — adds a further reflective layer that was not present when the instrument was calibrated on a dry tile.',
          ],
        },
      ],
    },
    {
      id: 'what-colour-coordinates-do-not-tell-you',
      heading: 'What a colour reading is not evidence of',
      body: [
        {
          type: 'paragraph',
          text: "A colorimeter reports what a surface reflects; it does not know why the surface is that colour. Colour is used across many commodities as a practical proxy for ripeness, but the underlying biochemistry — pigment breakdown, pigment synthesis, and the two proceeding at different rates in different commodities and cultivars — is not something the instrument observes directly. The same holds for internal condition and eating quality: nothing about an instrument reading's numeric precision implies that the property it is being used to infer is actually well correlated with colour in every commodity, cultivar, and season, and the precision of the coordinates can lend an inference more confidence than the underlying relationship supports.",
        },
        {
          type: 'paragraph',
          text: 'Instrument colour spaces also do not translate directly onto the visual colour charts that many produce grade standards specify, or onto human colour perception generally, so converting an instrument reading into a chart-based grade score requires an explicit, validated conversion rather than an assumed one-to-one correspondence. And because a single reading describes only the spot measured, a colorimeter figure says nothing about colour uniformity, blush distribution, russeting, or streaking across the unit — properties that grade standards frequently care about directly.',
        },
      ],
    },
  ],
  connections: [
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'fruit-ripening' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Colour measurement instrumentation and its role in produce quality and marketing standards',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Colorimeter and spectrophotometer methodology and interpretation in fresh produce quality assessment',
    },
    {
      sourceId: 'uc-ipm',
      citedFor:
        'Produce colour measurement practice and its limitations as a ripeness proxy',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Colour grading context within fresh produce marketing standards',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest quality assessment principles for fresh fruit and vegetables, including colour',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The optical principle and colour-space mathematics are universal; illuminant, observer, aperture, reading pattern, and any colour-chart correspondence used commercially are set by the applicable grade standard or buyer specification and vary by commodity and market.',
  limitations: [
    'This entry describes the general optical method and where colour readings are commonly misread; the specific illuminant, observer, aperture, reading pattern, and any chart correspondence for a given commodity are set by the applicable grade standard or buyer specification, not by this page.',
    'Tristimulus colorimeters and spectrophotometers can disagree on the same surface, particularly on glossy, waxy, or translucent produce; figures should not be pooled across instrument families without confirming they used comparable conditions.',
    'Colour is frequently used as a ripeness or maturity proxy, but the strength of that relationship varies by commodity and cultivar and is not established by the colour reading itself.',
    'This entry covers the instrumental measurement method, not visual colour grading against printed charts, which is a related but separate practice with its own limitations.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Colorimeter: Measuring Produce Colour Precisely',
    description:
      'A colorimeter reads a small spot under a specified illuminant and reports colour coordinates — precise about the surface, silent about quality.',
    keywords: [
      'colorimeter',
      'chroma meter',
      'CIE Lab colour measurement',
      'produce colour grading',
      'spectrophotometer',
    ],
  },
  structuredData: { article: true },
};
