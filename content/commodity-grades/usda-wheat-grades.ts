import type { CommodityGradeContent } from '@/types/content';

export const usdaWheatGrades: CommodityGradeContent = {
  id: 'commodity-grade-usda-wheat-grades',
  slug: 'usda-wheat-grades',
  contentType: 'commodity-grade',
  title: 'United States Grade Standards for Wheat',
  alternativeNames: ['U.S. wheat grades', 'FGIS wheat standards'],
  category: 'Commodity grading standard',
  subcategory: 'Cereal grain',
  standardBody:
    'United States Department of Agriculture — Federal Grain Inspection Service (FGIS), Agricultural Marketing Service',
  standardIdentifier:
    'United States Standards for Wheat (Official Grain Standards of the United States)',
  jurisdiction: 'United States',
  edition:
    'As maintained and periodically revised by USDA FGIS; consult the current official text for the edition in force.',
  legalStatus: 'mandatory',
  gradedCommodity: { type: 'commodity', slug: 'wheat-grain' },
  gradeNames: [
    'U.S. No. 1',
    'U.S. No. 2',
    'U.S. No. 3',
    'U.S. No. 4',
    'U.S. No. 5',
    'U.S. Sample grade',
  ],
  summary:
    'The United States Standards for Wheat define how wheat is officially classed and graded for trade in the United States. They set out wheat classes, numerical grades, and the factors — test weight, damaged kernels, foreign material, shrunken and broken kernels, and defects — on which a grade is determined.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The United States Standards for Wheat are issued under the United States Grain Standards Act and maintained by USDA’s Federal Grain Inspection Service. They provide the common commercial language for describing a lot of wheat: first its class, then a numerical grade determined by measured grading factors.',
    },
    {
      type: 'paragraph',
      text: 'Official inspection under these standards is performed by FGIS and its delegated and designated agencies — not by AgricultureID. This page summarises how the standard is structured and what it measures; it is not the standard, and it does not reproduce the numerical limits that define each grade.',
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
    { label: 'Commodity', value: 'Wheat (all classes)' },
    {
      label: 'Grade scale',
      value: 'U.S. No. 1 through U.S. No. 5, plus Sample grade',
    },
    {
      label: 'Determined by',
      value: 'Class, then grading factors measured on a representative sample',
    },
  ],
  sections: [
    {
      id: 'how-the-standard-works',
      heading: 'How the standard works',
      body: [
        {
          type: 'paragraph',
          text: 'Grading proceeds in two steps. A lot is first assigned to a class based on kernel characteristics — the standards recognise classes such as Hard Red Winter, Hard Red Spring, Soft Red Winter, Hard White, Soft White, Durum, and Mixed wheat. The lot is then assigned a numerical grade determined by the grading factors, with the lowest-ranking factor governing the outcome.',
        },
        {
          type: 'paragraph',
          text: 'Because the poorest factor determines the grade, a single defect can cap an otherwise sound lot. "U.S. Sample grade" applies to wheat that does not meet the requirements of the numbered grades, or that carries specified objectionable characteristics.',
        },
      ],
    },
    {
      id: 'factors-considered',
      heading: 'Factors the standard considers',
      body: [
        {
          type: 'paragraph',
          text: 'The standard determines grade from factors measured on a representative sample drawn under official sampling procedures. The principal grading factors include:',
        },
        {
          type: 'list',
          items: [
            'Test weight per bushel — a bulk-density measure used as a general soundness indicator',
            'Damaged kernels, including heat-damaged kernels',
            'Foreign material',
            'Shrunken and broken kernels',
            'Defects (a combined limit across specified factors)',
            'Contrasting classes and wheat of other classes',
          ],
        },
        {
          type: 'paragraph',
          text: 'Separately from grade, the standards provide for special grades and for factors such as moisture and protein to be determined and reported. Moisture is central to storability and is routinely measured, but in this standard it is reported rather than being the basis of the numerical grade itself.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Numerical limits are not reproduced here',
          text: 'The specific limits that define each grade are set out in the official standard and are revised over time. Consult the current USDA FGIS text for the values in force; this summary describes structure and factors only.',
        },
      ],
    },
    {
      id: 'what-a-grade-means',
      heading: 'What a grade does and does not mean',
      body: [
        {
          type: 'paragraph',
          text: 'A grade is a standardised commercial description of a lot, not a verdict on its overall quality and not a food-safety determination. A lot meeting U.S. No. 2 may still be unsuitable for a particular mill or contract, and buyers routinely specify protein, falling number, or other attributes on top of grade. Conversely, a lower grade does not by itself imply a lot is unsafe.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not an inspection service',
          text: 'AgricultureID does not grade, sample, or inspect wheat and cannot determine the grade of any lot. Official grades are issued only by FGIS and its delegated and designated agencies.',
        },
      ],
    },
    {
      id: 'sampling',
      heading: 'Sampling context',
      body: [
        {
          type: 'paragraph',
          text: 'A grade applies to the lot the sample represents. Official grading depends on prescribed sampling and handling procedures, because a sample that does not represent the lot produces a grade that does not either. Sampling method, sample size, and lot definition are all governed by the official procedures rather than left to the parties.',
        },
      ],
    },
  ],
  gradeCriteria: [
    {
      attribute: 'Test weight per bushel',
      limitType: 'minimum',
      basis: 'Bulk density of a representative sample',
      note: 'A grade-determining factor; limits differ by class and grade and are set in the official standard.',
    },
    {
      attribute: 'Damaged kernels (total, and heat-damaged)',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Foreign material',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Shrunken and broken kernels',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Defects (combined)',
      limitType: 'maximum',
      note: 'A combined limit across specified factors, set in the official standard.',
    },
    {
      attribute: 'Moisture',
      limitType: 'descriptive',
      note: 'Determined and reported; central to storability but not the basis of the numerical grade in this standard.',
    },
  ],
  measurementBasis:
    'Factors are determined on a representative sample drawn and handled under official USDA FGIS sampling procedures.',
  defectsConsidered: [
    'Heat-damaged kernels',
    'Other damaged kernels',
    'Foreign material',
    'Shrunken and broken kernels',
    'Contrasting classes',
  ],
  samplingContext:
    'Official grades apply to the lot the sample represents; sampling method, sample size, and lot definition follow prescribed FGIS procedures.',
  reproductionLimitations: [
    'This page summarises the structure and grading factors of the United States Standards for Wheat; it does not reproduce the standard or its numerical limits.',
    'The standard is revised over time — always consult the current official USDA FGIS text for the edition and limits in force.',
    'Grade names and factors are listed for reference only; an official grade can be determined only by FGIS or a delegated/designated agency.',
    'AgricultureID is not an inspection, grading, or certification authority and makes no determination about any lot.',
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States Standards for Wheat: classes, grades, and grading factors',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'United States wheat class and marketing context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'United States. Other jurisdictions grade wheat under their own standards, which use different classes, factors, and limits.',
  limitations: [
    'Applies only to official grading in the United States; other countries use different wheat standards.',
    'Structure and factors are summarised without numerical limits, which are set in the official text and revised over time.',
    'A grade is a commercial description, not a food-safety clearance or a suitability guarantee for any use.',
    'Contract specifications frequently add attributes (protein, falling number) beyond the grade.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'US Grade Standards for Wheat (USDA FGIS)',
    description:
      'How USDA FGIS grades wheat: classes, U.S. No. 1–5 and Sample grade, the grading factors measured, sampling context, and what a wheat grade does not mean.',
    keywords: [
      'USDA wheat grades',
      'FGIS wheat standards',
      'US wheat grading factors',
      'test weight',
      'grain grading',
    ],
  },
  structuredData: { article: true },
};
