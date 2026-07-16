import type { CommodityGradeContent } from '@/types/content';

export const usdaCornGrades: CommodityGradeContent = {
  id: 'commodity-grade-usda-corn-grades',
  slug: 'usda-corn-grades',
  contentType: 'commodity-grade',
  title: 'United States Grade Standards for Corn',
  alternativeNames: [
    'U.S. corn grades',
    'FGIS corn standards',
    'US maize grading standards',
  ],
  category: 'Commodity grading standard',
  subcategory: 'Cereal grain',
  standardBody:
    'United States Department of Agriculture — Federal Grain Inspection Service (FGIS), Agricultural Marketing Service',
  standardIdentifier:
    'United States Standards for Corn (Official Grain Standards of the United States)',
  jurisdiction: 'United States',
  edition:
    'As maintained and periodically revised by USDA FGIS; consult the current official text for the edition in force.',
  legalStatus: 'mandatory',
  gradedCommodity: { type: 'commodity', slug: 'maize-grain' },
  gradeNames: [
    'U.S. No. 1',
    'U.S. No. 2',
    'U.S. No. 3',
    'U.S. No. 4',
    'U.S. No. 5',
    'U.S. Sample grade',
  ],
  summary:
    'The United States Standards for Corn define how corn is officially classed and graded for trade in the United States. A lot is assigned a class and then a numerical grade determined by measured factors — test weight, broken corn and foreign material, damaged kernels, and heat-damaged kernels.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The United States Standards for Corn are issued under the United States Grain Standards Act and maintained by USDA’s Federal Grain Inspection Service. They give buyers and sellers a common commercial description of a lot of corn: a class reflecting kernel colour, then a numerical grade set by a small number of measured grading factors.',
    },
    {
      type: 'paragraph',
      text: 'Official inspection under these standards is carried out by FGIS and its delegated and designated agencies — not by AgricultureID. This page describes how the standard is built and what it measures. It is not the standard, and it does not reproduce the numerical limits that define the grades.',
    },
  ],
  keyFacts: [
    {
      label: 'Issuing body',
      value: 'USDA Federal Grain Inspection Service (FGIS)',
    },
    { label: 'Jurisdiction', value: 'United States' },
    {
      label: 'Legal status',
      value:
        'Mandatory for official inspection under the U.S. Grain Standards Act',
    },
    { label: 'Commodity', value: 'Corn (maize grain)' },
    {
      label: 'Grade scale',
      value: 'U.S. No. 1 through U.S. No. 5, plus Sample grade',
    },
    {
      label: 'Classes',
      value: 'Assigned on kernel colour before a numerical grade is determined',
    },
    {
      label: 'Signature factor',
      value:
        'Broken corn and foreign material (BCFM), a single combined measure',
    },
  ],
  sections: [
    {
      id: 'how-the-standard-works',
      heading: 'How the standard works',
      body: [
        {
          type: 'paragraph',
          text: 'Grading is a two-step process. A lot is first assigned to a class — the standard distinguishes corn by kernel colour, recognising yellow, white, and mixed corn. It is then assigned a numerical grade determined by the grading factors measured on a representative sample. As in the other U.S. grain standards, the poorest factor governs: a lot grades no better than its worst result, so one factor can cap an otherwise sound parcel.',
        },
        {
          type: 'paragraph',
          text: '"U.S. Sample grade" is the residual designation. It applies to corn that does not meet the requirements of the numbered grades, or that carries specified objectionable characteristics. It is a defined outcome of the standard rather than an absence of one.',
        },
      ],
    },
    {
      id: 'factors-considered',
      heading: 'Factors the standard considers',
      body: [
        {
          type: 'paragraph',
          text: 'Corn is graded on fewer factors than wheat, and the set is distinctive to the commodity:',
        },
        {
          type: 'list',
          items: [
            'Test weight per bushel — a bulk-density measure used as a general soundness indicator',
            'Broken corn and foreign material (BCFM) — a combined factor, determined by sieving and hand-picking',
            'Damaged kernels (total) — kernels materially damaged by any cause',
            'Heat-damaged kernels — a subset of damaged kernels, limited separately and more strictly',
          ],
        },
        {
          type: 'paragraph',
          text: 'BCFM is worth understanding because it is a single measure covering two quite different things: pieces of corn broken in handling and drying, and material that is not corn at all. Because both pass through the prescribed sieve, they are captured together, and a lot can be discounted on BCFM through mechanical damage alone with no contamination whatsoever.',
        },
        {
          type: 'paragraph',
          text: 'Heat damage is limited separately from other damage because of what it indicates. It arises from respiration and heating in storage or from excessive drying temperature, and it signals both a processing problem and a history that may have affected the rest of the lot. Moisture is determined and reported but, as in the wheat standard, it is not the basis of the numerical grade itself — a point routinely misunderstood, since moisture is nonetheless central to storage and to how corn is priced in practice.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Numerical limits are not reproduced here',
          text: 'The limits that define each grade are set out in the official standard and are revised over time. Consult the current USDA FGIS text for the values in force; this page summarises structure and factors only.',
        },
      ],
    },
    {
      id: 'what-a-grade-means',
      heading: 'What a corn grade does and does not mean',
      body: [
        {
          type: 'paragraph',
          text: 'A grade is a standardised commercial description of a lot. It is not a food-safety determination, not a statement of processing suitability, and not a measure of nutritional value. Buyers routinely contract on attributes the grade does not carry at all — moisture, mycotoxin testing, starch or oil content, or segregation by end use — because the standard was designed to describe soundness and cleanliness rather than to predict performance in a wet mill or a feed ration.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not an inspection authority',
          text: 'AgricultureID does not grade, sample, or inspect corn and cannot determine the grade of any lot. Official grades are issued only by FGIS and its delegated and designated agencies.',
        },
      ],
    },
    {
      id: 'sampling',
      heading: 'Sampling context',
      body: [
        {
          type: 'paragraph',
          text: 'A grade applies to the lot the sample represents, and no further. Official grading depends on prescribed sampling and handling procedures, because a sample that does not represent the lot produces a grade that does not either. Sampling method, sample size, and lot definition are governed by official procedure rather than agreed between the parties.',
        },
        {
          type: 'paragraph',
          text: 'Corn makes this concrete: broken material segregates during handling, concentrating fines in some parts of a bin or hold and not others. Where and how the sample is drawn therefore bears directly on the BCFM result, which is precisely why the procedure is prescribed rather than left to judgement.',
        },
      ],
    },
  ],
  gradeCriteria: [
    {
      attribute: 'Test weight per bushel',
      limitType: 'minimum',
      basis: 'Bulk density of a representative sample',
      note: 'A grade-determining factor; limits differ by grade and are set in the official standard.',
    },
    {
      attribute: 'Broken corn and foreign material (BCFM)',
      limitType: 'maximum',
      basis:
        'Material passing the prescribed sieve, plus non-corn material remaining',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Damaged kernels (total)',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Heat-damaged kernels',
      limitType: 'maximum',
      note: 'Limited separately and more strictly than total damage; limits are set in the official standard.',
    },
    {
      attribute: 'Moisture',
      limitType: 'descriptive',
      note: 'Determined and reported; governs storability and pricing but is not the basis of the numerical grade in this standard.',
    },
  ],
  measurementBasis:
    'Factors are determined on a representative sample drawn and handled under official USDA FGIS sampling procedures.',
  defectsConsidered: [
    'Heat-damaged kernels',
    'Other damaged kernels',
    'Broken corn',
    'Foreign material',
    'Objectionable characteristics that assign Sample grade',
  ],
  samplingContext:
    'Grades apply to the lot the sample represents; because broken material segregates in handling, prescribed sampling procedure directly affects the BCFM determination.',
  reproductionLimitations: [
    'This page summarises the structure and grading factors of the United States Standards for Corn; it does not reproduce the standard or any of its numerical limits.',
    'The standard is revised over time — consult the current official USDA FGIS text for the edition and limits in force.',
    'Grade names, classes, and factors are listed for reference only; an official grade can be determined only by FGIS or a delegated or designated agency.',
    'AgricultureID is not an inspection, grading, or certification authority and makes no determination about any lot of corn.',
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [{ type: 'commodity-grade', slug: 'usda-soybean-grades' }],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States Standards for Corn: classes, grades, and grading factors',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'United States corn production and marketing context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Corn market and end-use context relevant to grading',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'United States. Other jurisdictions grade maize under their own standards, which use different classes, factors, and limits.',
  limitations: [
    'Applies only to official grading in the United States; other maize-producing countries use different standards.',
    'Structure and factors are summarised without numerical limits, which are set in the official text and revised over time.',
    'A grade is a commercial description, not a food-safety clearance or a guarantee of suitability for any end use.',
    'Contracts frequently add requirements — moisture, mycotoxin testing, segregation by end use — that the grade does not address.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'US Grade Standards for Corn (USDA FGIS)',
    description:
      'How USDA FGIS grades corn: classes, U.S. No. 1–5 and Sample grade, the role of test weight and BCFM, heat damage, and what a corn grade cannot tell you.',
    keywords: [
      'USDA corn grades',
      'FGIS corn standards',
      'BCFM',
      'corn test weight',
      'grain grading',
    ],
  },
  structuredData: { article: true },
};
