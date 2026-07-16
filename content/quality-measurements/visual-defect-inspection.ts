import type { QualityMeasurementContent } from '@/types/content';

export const visualDefectInspection: QualityMeasurementContent = {
  id: 'quality-measurement-visual-defect-inspection',
  slug: 'visual-defect-inspection',
  contentType: 'quality-measurement',
  title: 'Visual Defect Inspection',
  alternativeNames: ['Visual grading inspection', 'Manual defect count'],
  category: 'Quality measurement',
  subcategory: 'Visual and manual method',
  measurementClass: 'visual',
  measures: [
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'heat-damage' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'internal-quality' },
  ],
  principle:
    'A trained inspector examines a drawn sample against defined criteria and reference material — interpretive line samples, colour guides, and photographic standards issued by the grading authority — and counts or weighs the units falling into each defect category. For internal condition, units are cut open and the cut faces examined against a scoring scheme; this is destructive on the units examined and is cut-sample examination, not a claim that internal condition can be judged from outside an intact unit (see Internal Quality).',
  sampleRequirement:
    "A representative sample drawn from the lot following the applicable grading authority's sampling procedure, of a size and composition sufficient to support the counts or weighings the scheme requires.",
  destructive: false,
  referenceMethodNote:
    'Categories, thresholds for what counts as a given defect, and the physical reference standards inspectors are trained against are all issued and maintained by the applicable grading authority. Disputed results are resolved by review or appeal inspection against those same reference standards, not by informal re-examination.',
  measurementLimitations: [
    'It cannot detect mycotoxins. Mycotoxins are invisible, tasteless, and odourless: visible mould does not mean toxin is present, and — in the direction that matters most — a lot with no visible mould at all can carry mycotoxin at a level that fails regulation, because toxin persists long after the fungus that produced it has died or been cleaned away. Only laboratory analysis on a properly drawn sample can answer that question; no amount of looking substitutes for it (see Mould Incidence).',
    'It cannot detect what is inside an intact unit. Internal feeding insects develop entirely within a kernel and emerge only as adults, so a heavily infested lot can look clean from the outside; internal fruit disorders commonly leave no external sign at all; and internal fissures in rice grain that destroy milling yield are invisible without cutting or specialised viewing (see Insect Damage, Internal Quality).',
    'It identifies appearance, not cause. Heat damage from a dryer and heat damage from biological self-heating can look alike; decay and physiological breakdown are routinely confused by appearance alone; and in general, appearance never establishes how or when a defect arose, only that it is present.',
    'It is a human judgement, and it varies — between inspectors, within a single inspector over the course of a shift, and with lighting, fatigue, and expectation. This is exactly why grading authorities issue physical reference standards, train and certify inspectors against them, and provide a formal appeal or review inspection route, and why a disputed grade is properly resolved by that review rather than by a second glance from whoever is on hand.',
    "It detects only the defects the applicable scheme names. A defect that falls outside the scheme's defined categories is invisible to the resulting grade, even where a specific buyer cares about it a great deal.",
    'It is sample-based, and defects are often clustered within a lot rather than randomly distributed, so a clean sample drawn from a genuinely contaminated or damaged lot is a normal, expected outcome rather than an anomaly (see Grain Probe Sampling).',
  ],
  summary:
    'Visual defect inspection is a trained inspector examining a drawn sample against defined criteria and reference standards, counting or weighing units into defect categories. It cannot detect mycotoxins, cannot see inside an intact unit, and identifies appearance rather than cause — a lot judged clean by eye is not a lot cleared of every hazard.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Visual defect inspection is carried out by a trained inspector examining a sample drawn from a lot against defined criteria and reference material issued by the applicable grading authority — interpretive line samples showing the boundary of a given category, colour guides, and photographic standards. The inspector counts or weighs the units falling into each defect category the scheme names: broken kernels, foreign material, heat-damaged units, visibly mould-affected units, insect-damaged units, mechanically damaged units, and, where the scheme requires it, internal condition assessed by cutting units open and examining the cut faces against a defined scoring scheme.',
    },
    {
      type: 'paragraph',
      text: "That last category deserves an explicit caution: assessing internal condition means physically cutting sample units open. It is destructive on the units examined, and it is not a claim that internal condition can be judged by looking at an intact unit from outside — it cannot. This entry carries the corpus's most important honesty burden precisely because visual inspection, by its nature, sees only what is on the surface: it is fast, low-cost, and useful for exactly that reason, and it is also blind to entire categories of defect and hazard that matter a great deal, starting with mycotoxin contamination.",
    },
  ],
  keyFacts: [
    {
      label: 'What it does',
      value:
        'A trained inspector examines a drawn sample against defined criteria and reference standards',
    },
    {
      label: 'Cannot detect mycotoxins',
      value:
        'Mycotoxins are invisible, tasteless, and odourless; visible mould does not confirm toxin, and its absence does not rule it out',
      note: 'Only laboratory analysis on a properly drawn sample can answer the question',
    },
    {
      label: 'Cannot see inside an intact unit',
      value:
        'Internal insect feeding, internal fruit disorders, and internal grain fissures are all invisible from outside',
    },
    {
      label: 'Internal-quality checks are destructive',
      value:
        'Assessing internal condition means cutting sample units open, not judging intact units by eye',
    },
    {
      label: 'Appearance, not cause',
      value:
        'Dryer heat damage and biological self-heating can look alike; appearance never establishes how or when damage occurred',
    },
    {
      label: 'A trained human judgement',
      value:
        'Results vary between inspectors and with lighting, fatigue, and expectation',
      note: 'Reference standards, training, and appeal inspection exist to bound this variation',
    },
    {
      label: 'Sample-based',
      value:
        'Defects are often clustered, so a clean sample from a contaminated lot is a normal, expected outcome',
    },
  ],
  sections: [
    {
      id: 'how-inspection-is-carried-out',
      heading: 'How the inspection is carried out',
      body: [
        {
          type: 'paragraph',
          text: "An inspector works from a sample drawn according to the applicable grading authority's sampling procedure, examining it against physical or photographic reference standards the authority issues and maintains. Each defect category the scheme recognises has its own defined criteria — an interpretive line sample showing where a unit falls on one side of a category boundary or the other, a colour guide for discoloration-based categories, or a photographic standard for categories judged by overall appearance. Units are sorted, counted, or weighed into these categories, and the resulting proportions form the inspection result.",
        },
        {
          type: 'paragraph',
          text: 'Internal condition is handled differently from every other category on this page: it requires cutting sample units open and examining the cut faces against a defined scoring scheme. This step consumes the units examined and reports on the sample, not on the intact lot as a whole viewed from outside — it is included in this method because it is still fundamentally a visual, criteria-based judgement made by a trained inspector, not because it can be performed without physically opening the unit.',
        },
      ],
    },
    {
      id: 'the-mycotoxin-blind-spot',
      heading: 'The one thing visual inspection cannot do',
      body: [
        {
          type: 'callout',
          tone: 'caution',
          title: 'Mycotoxins are invisible',
          text: 'Mycotoxins are invisible, tasteless, and odourless. Visible mould does not mean a toxin is present, and — far more consequentially — a lot with no visible mould at all can carry mycotoxin at a level that fails applicable regulation, because the toxin persists long after the fungus that produced it has died or been removed by cleaning. Only laboratory analysis on a properly drawn sample can answer the question; no amount of careful looking, however experienced the inspector, substitutes for it.',
        },
        {
          type: 'paragraph',
          text: 'This is not a marginal caveat. Visual inspection is often the only check a lot receives at a given point in the chain, and it is entirely reasonable for that inspection to be fast, cheap, and effective at what it does — it is unreasonable to treat a clean visual result as evidence about a hazard the method was never capable of detecting in the first place.',
        },
      ],
    },
    {
      id: 'blind-to-the-inside',
      heading: 'Blind to what is inside an intact unit',
      body: [
        {
          type: 'paragraph',
          text: 'Several categories of defect and infestation develop entirely within a unit and leave no reliable sign on the surface. Internal feeding insects complete most of their life cycle inside a kernel and emerge only as adults, so a lot heavily infested internally can look entirely clean to an external visual check. Internal disorders in fresh produce commonly develop with no visible external symptom at all. In rice, internal fissures that seriously reduce milling yield are invisible to the naked eye without cutting or specialised viewing equipment. In every one of these cases, an external visual result within specification tells you nothing about the corresponding internal condition (see Insect Damage, Internal Quality).',
        },
      ],
    },
    {
      id: 'judgement-varies',
      heading: 'A human judgement, and it varies',
      body: [
        {
          type: 'paragraph',
          text: 'Visual inspection depends on a trained person applying defined criteria consistently, and consistency is imperfect. Results vary between inspectors, within a single inspector across a shift as fatigue sets in, and with the lighting conditions the inspection is carried out under; expectation — what an inspector believes a lot is likely to contain — can subtly bias a borderline call as well. This is precisely why grading authorities issue physical reference standards rather than written descriptions alone, train and periodically certify inspectors against them, and provide a formal appeal or review inspection route. A disputed grade is properly resolved through that review process, against the same reference standards, rather than by a second, informal look from whoever happens to be available.',
        },
        {
          type: 'paragraph',
          text: "A related limit follows from the scheme itself: inspection detects only the defect categories the applicable scheme names. A defect that a specific buyer cares about, but that falls outside the scheme's defined categories, is simply invisible to the resulting grade — the inspection was never designed to look for it.",
        },
      ],
    },
  ],
  connections: [
    { type: 'quality-attribute', slug: 'broken-kernels' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'heat-damage' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'internal-quality' },
    { type: 'quality-measurement', slug: 'sieve-analysis' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States grain and produce grading procedures, reference standards, and appeal inspection',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Mycotoxin risk assessment and the limits of visual inspection for detecting contamination',
    },
    {
      sourceId: 'fao',
      citedFor: 'Post-harvest quality inspection and grading practice',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Visual grain intake and defect inspection practice in the United Kingdom',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Defect categories, reference standards, inspector training and certification, and appeal or review inspection procedures are all set by the applicable national or commodity-specific grading authority and differ by jurisdiction and commodity.',
  limitations: [
    "This entry names no defect limits, tolerances, or grading thresholds. The applicable grading authority's standard sets these, and they are commodity- and jurisdiction-specific.",
    'This entry does not describe the training curriculum or certification procedure for inspectors, nor the specific reference standards any given scheme uses; consult the applicable grading authority.',
    'A visual inspection result never establishes mycotoxin status; that requires dedicated laboratory analysis on a properly drawn sample, addressed under Mould Incidence.',
    'This entry does not cover instrumental or laboratory alternatives to visual inspection, such as sieve analysis or grain-probe sampling, which are addressed separately and often used alongside it.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Visual Defect Inspection: What Looking Misses',
    description:
      'Visual defect inspection grades by trained appearance checks. It cannot detect mycotoxins or internal defects, and judgement varies by inspector.',
    keywords: [
      'visual defect inspection',
      'grain grading inspection',
      'mycotoxin visual detection',
      'internal grain quality',
      'defect classification standards',
    ],
  },
  structuredData: { article: true },
};
