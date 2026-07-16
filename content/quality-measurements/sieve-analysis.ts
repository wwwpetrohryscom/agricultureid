import type { QualityMeasurementContent } from '@/types/content';

export const sieveAnalysis: QualityMeasurementContent = {
  id: 'quality-measurement-sieve-analysis',
  slug: 'sieve-analysis',
  contentType: 'quality-measurement',
  title: 'Sieve Analysis',
  alternativeNames: ['Sieving test', 'Screen analysis'],
  category: 'Quality measurement',
  subcategory: 'Laboratory method',
  measurementClass: 'laboratory',
  measures: [
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'dockage' },
    { type: 'quality-attribute', slug: 'size-uniformity' },
  ],
  principle:
    'A weighed sample is passed over sieves or screens with apertures of a prescribed size and shape — round-hole, slotted, or triangular — either by hand or by a mechanical shaker run for a prescribed time and motion. The fractions retained on and passing through the sieve are weighed and each expressed as a proportion of the original sample.',
  sampleRequirement:
    'A weighed working sample drawn from a representative sample of the lot, prepared exactly as the applicable grade standard or official method specifies.',
  destructive: false,
  referenceMethodNote:
    'Aperture size and shape, sieving time, motion, and sample mass are all prescribed by the applicable grade standard or official method. That prescription is the central point of this method: the standard\'s sieve definition IS the definition of the factor being measured — what counts as "broken," as "dockage," or as a given size class is, procedurally, whatever the prescribed sieve separates out.',
  measurementLimitations: [
    "The result is defined by the apparatus, so figures produced under different standards are not comparable. A broken-kernel, dockage, or size figure carries no meaning without stating the standard and sieve that produced it, and comparing one standard's figure against another standard's limit is not a rounding error — it is simply the wrong comparison (see Broken Kernels, Dockage, Foreign Material).",
    'Sieving separates material by size and shape, not by identity. A weed seed, a stone, and a broken kernel of similar dimensions land in the same retained or passed fraction, so the fractions produced by sieving still have to be examined and hand-sorted to be classified into meaningful categories; the sieve alone does not report what it separated, only how much.',
    "Sieving time and motion change the answer. Under-sieving leaves material that should have separated still mixed in, while over-sieving abrades sound kernels and creates new fine material that was not present in the original sample, which is exactly why the time and motion are prescribed rather than left to the operator's judgement — a hand-sieved and a machine-sieved run on the same sample can disagree.",
    'Sieves wear, deform, and blind — their apertures plug with fine material or fibrous debris during use — and a worn or blinded sieve returns a plausible-looking but wrong figure with no indication that anything is amiss.',
    'Sample moisture matters. Damp grain and damp fine material stick to each other and to the screen surface rather than separating cleanly, so the same lot sieves differently wet than it does dry, independent of any real difference in composition.',
    'It says nothing about the condition of what is retained. A sound kernel and a mould-infected or insect-hollowed kernel of the same size both stay on the same sieve, so a sieve analysis result gives no information about the quality of the material it has sorted by size alone (see Mould Incidence, Insect Damage).',
  ],
  summary:
    'Sieve analysis separates a grain sample by passing it over sieves of prescribed aperture size and shape, weighing what is retained and what passes through. What counts as "broken," "dockage," or a size class is defined entirely by the sieve prescribed in the applicable standard, so results from different standards are not comparable, and the method sorts by size and shape only — never by identity or condition.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Sieve analysis measures a grain sample by physically separating it: a weighed sample is passed over one or more sieves or screens whose apertures — round holes, slots, or triangular openings, depending on the standard and the factor being assessed — are of a prescribed size and shape. The sieving is carried out by hand or by a mechanical shaker for a prescribed time and motion, and the material retained on each sieve and the material that passes through are each weighed and expressed as a proportion of the original sample.',
    },
    {
      type: 'paragraph',
      text: 'The central fact to hold onto is that the sieve does not measure an independent physical property of the grain the way a scale measures mass — it enacts the definition the applicable grade standard has chosen. What a given standard calls "broken," what it counts as removable "dockage," and where it draws a size class boundary are, procedurally, exactly whatever the prescribed sieve separates out under the prescribed conditions. Change the aperture, the sieving time, or the motion, and the same physical sample can be assigned a different figure, even though nothing about the grain itself has changed.',
    },
  ],
  keyFacts: [
    {
      label: 'What it does',
      value:
        'Separates a weighed sample by passing it over sieves of prescribed aperture size and shape',
    },
    {
      label: 'What it reports',
      value:
        'The retained and passing fractions, each expressed as a proportion of the original sample',
    },
    {
      label: 'The sieve is the definition',
      value:
        'What counts as "broken," "dockage," or a size class is whatever the prescribed sieve separates',
      note: 'Figures from different standards are not comparable',
    },
    {
      label: 'Separates by size and shape only',
      value:
        'A weed seed, a stone, and a broken kernel of similar dimensions land in the same fraction',
      note: 'Fractions must still be examined to classify what was separated',
    },
    {
      label: 'Sensitive to procedure',
      value:
        'Sieving time, motion, and sieve condition all change the result on an identical sample',
    },
    {
      label: 'Blind to condition',
      value:
        'A sound kernel and a mould-infected or insect-hollowed kernel of the same size both stay on the sieve',
    },
    {
      label: 'Where the procedure is set',
      value:
        'The applicable grade standard or official method prescribes aperture, time, motion, and sample mass',
    },
  ],
  sections: [
    {
      id: 'how-sieve-analysis-works',
      heading: 'How the method works',
      body: [
        {
          type: 'paragraph',
          text: 'A weighed working sample is placed on a sieve, or a nested stack of sieves of progressively different aperture sizes, and shaken — by hand for a prescribed time and pattern, or by a mechanical shaker set to a prescribed motion and duration. Material too large or the wrong shape to pass through a given aperture is retained on that sieve; everything else passes through, either to a finer sieve beneath it or into a collecting pan. Each fraction is weighed and reported as a percentage of the total sample weight.',
        },
        {
          type: 'table',
          caption:
            'Sieve aperture shapes commonly prescribed by grading standards',
          columns: ['Aperture shape', 'Typical use'],
          rows: [
            [
              'Round-hole',
              'Separating by overall kernel size or removing small, rounded foreign matter',
            ],
            [
              'Slotted',
              'Separating elongated kernels by width rather than length',
            ],
            [
              'Triangular',
              'Separating kernels by a different geometric criterion specified for certain commodities',
            ],
          ],
        },
      ],
    },
    {
      id: 'the-sieve-is-the-definition',
      heading: "The standard's sieve is the definition of the factor",
      body: [
        {
          type: 'callout',
          tone: 'important',
          title:
            'A figure without its sieve and standard is not comparable to anything',
          text: "Broken kernels, dockage, and size classes are procedurally defined by the sieve prescribed to measure them, not by an independent physical property with one true value. A broken-kernel or dockage figure produced under one grade standard is not comparable to a figure produced under a different standard, and it cannot be checked against a different standard's limit — the aperture, the sieving time, and the motion are all part of what the number means.",
        },
        {
          type: 'paragraph',
          text: "This is why the applicable grade standard or official method specifies aperture size and shape, sieving time, motion, and sample mass in precise, prescriptive detail rather than leaving them to the operator's discretion: those choices are not incidental to the test, they are the test.",
        },
      ],
    },
    {
      id: 'size-and-shape-not-identity',
      heading: 'Separation by size and shape is not identification',
      body: [
        {
          type: 'paragraph',
          text: 'Sieving sorts material by physical dimension and shape alone. A weed seed, a small stone, and a broken kernel that happen to share similar dimensions all end up in the same retained or passed fraction, indistinguishable to the sieve itself. Turning a sieved fraction into a meaningful classification — how much of it is genuinely broken grain, how much is foreign material, how much is a particular size class of sound kernel — requires the fraction to be examined and, commonly, hand-sorted afterward. The sieve performs the physical separation; a person or a further inspection step performs the classification.',
        },
      ],
    },
    {
      id: 'procedure-and-condition-sensitivity',
      heading:
        'Procedure, apparatus condition, and moisture all change the answer',
      body: [
        {
          type: 'list',
          items: [
            'Under-sieving leaves material unseparated that the standard intends to separate; over-sieving abrades sound kernels and creates new fine material, inflating the fine fraction beyond what was actually present in the original sample — which is why time and motion are prescribed rather than left to judgement.',
            'A worn, deformed, or blinded sieve — one whose apertures have plugged with fine or fibrous material — returns a plausible-looking result with no built-in indication that the apparatus itself is at fault.',
            'Sample moisture affects how cleanly material separates: damp grain and damp fines adhere to each other and to the screen, so the identical lot can sieve differently wet than dry.',
          ],
        },
        {
          type: 'paragraph',
          text: 'None of these effects are visible in the resulting percentage figure itself; a sieve analysis result looks equally confident whether the procedure was followed exactly or not, which is why laboratories check sieve condition and follow the prescribed time and motion precisely rather than treating them as approximate.',
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'dockage' },
    { type: 'quality-attribute', slug: 'size-uniformity' },
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
  ],
  relatedTopics: [{ type: 'post-harvest', slug: 'grain-cleaning' }],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States grain grading standards, sieve-based dockage and broken-kernel determination',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest grain cleaning and sieve-based quality assessment',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Sieve-based grain intake screening and cleaning practice in the United Kingdom',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Wheat and maize grain physical quality assessment methods',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Sieve aperture size and shape, sieving time and motion, and sample mass are all set by the applicable national or international grade standard and differ by commodity and jurisdiction; results are comparable only within the same prescribed standard.',
  limitations: [
    'This entry names no aperture sizes, sieving times, sample masses, or limits. The applicable grade standard or official method prescribes these, and figures produced under different standards are not comparable.',
    'This entry does not describe the operating steps for a specific mechanical shaker or sieve stack; consult the applicable official method and equipment documentation.',
    'A sieve analysis result classifies material by size and shape only; identifying what a given fraction actually contains, or its condition, requires further examination beyond the sieving step itself.',
    'Sieve condition, sieving procedure, and sample moisture all affect the result, and none of these are indicated by the resulting figure; laboratory practice controls for them rather than the method itself.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sieve Analysis: Why the Standard Sets the Answer',
    description:
      "Sieve analysis sorts grain by size and shape using prescribed apertures. The standard's sieve defines broken kernels, dockage, and size classes.",
    keywords: [
      'sieve analysis',
      'grain sieving',
      'broken kernels test',
      'dockage measurement',
      'grain size uniformity',
    ],
  },
  structuredData: { article: true },
};
