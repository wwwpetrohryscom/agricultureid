import type { CommodityGradeContent } from '@/types/content';

export const usdaRiceGrades: CommodityGradeContent = {
  id: 'commodity-grade-usda-rice-grades',
  slug: 'usda-rice-grades',
  contentType: 'commodity-grade',
  title: 'United States Grade Standards for Milled Rice',
  alternativeNames: ['U.S. rice grades', 'US milled rice standards'],
  category: 'Commodity grading standard',
  subcategory: 'Cereal grain',
  standardBody:
    'United States Department of Agriculture — Agricultural Marketing Service, with official inspection through the Federal Grain Inspection Service (FGIS)',
  standardIdentifier: 'United States Standards for Rice (milled rice)',
  jurisdiction: 'United States',
  edition:
    'As maintained and periodically revised by USDA AMS; consult the current official text for the edition in force.',
  legalStatus: 'mandatory',
  gradedCommodity: { type: 'commodity', slug: 'milled-rice' },
  gradeNames: [
    'U.S. No. 1',
    'U.S. No. 2',
    'U.S. No. 3',
    'U.S. No. 4',
    'U.S. No. 5',
    'U.S. No. 6',
    'U.S. Sample grade',
  ],
  summary:
    'The United States Standards for Rice define how milled rice is officially classed and graded. Grades run from U.S. No. 1 to U.S. No. 6 plus a sample grade, determined by factors including broken kernels, chalky kernels, damaged kernels, colour, and degree of milling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The United States Standards for Rice are maintained by USDA’s Agricultural Marketing Service, with official inspection carried out through FGIS. They describe milled rice — rice from which the hull and the bran layers have been removed — in a form both parties to a trade can rely on: a class, a grade, and a set of measured factors behind it.',
    },
    {
      type: 'paragraph',
      text: 'Rice grading differs from grading a bulk cereal like wheat or corn in a way worth stating at the outset. Rice is traded as an intact kernel that a consumer will see, so much of what the standard measures concerns appearance and physical integrity rather than bulk soundness. This page summarises how the standard is structured; it is not the standard, and it does not reproduce the limits that define the grades.',
    },
  ],
  keyFacts: [
    {
      label: 'Issuing body',
      value: 'USDA Agricultural Marketing Service (AMS)',
    },
    {
      label: 'Official inspection',
      value: 'Federal Grain Inspection Service (FGIS) and designated agencies',
    },
    { label: 'Jurisdiction', value: 'United States' },
    { label: 'Legal status', value: 'Mandatory for official inspection' },
    { label: 'Commodity', value: 'Milled rice' },
    {
      label: 'Grade scale',
      value: 'U.S. No. 1 through U.S. No. 6, plus Sample grade',
    },
    {
      label: 'Classes',
      value: 'By kernel size and shape — long, medium, and short grain',
    },
  ],
  sections: [
    {
      id: 'how-the-standard-works',
      heading: 'How the standard works',
      body: [
        {
          type: 'paragraph',
          text: 'Milled rice is classed by kernel size and shape — long grain, medium grain, and short grain — with provision for mixed rice, and separately for specialty types. Classing matters commercially because these types cook differently and are not substitutable: a long grain kernel stays separate, a shorter kernel holds together, and buyers select accordingly. Within its class, a lot is then graded on measured factors.',
        },
        {
          type: 'paragraph',
          text: 'The standard covers rice at defined stages, and the terms are not interchangeable: rough rice is the grain with the hull still on; brown rice has been hulled but retains the bran layers; milled rice has had the bran removed. Milled rice, the subject of this page, is graded on criteria that only make sense once the kernel is white and visible.',
        },
      ],
    },
    {
      id: 'factors-considered',
      heading: 'Factors the standard considers',
      body: [
        {
          type: 'paragraph',
          text: 'The grading factors reflect what buyers of milled rice can see and what milling has done to the kernel:',
        },
        {
          type: 'list',
          items: [
            'Broken kernels — separated by size into defined fractions rather than counted as one factor',
            'Chalky kernels — opaque, soft kernels that break more readily and cook unevenly',
            'Damaged and heat-damaged kernels',
            'Colour and seeds — off-colour kernels, red rice, and foreign seeds',
            'Degree of milling — how completely the bran layers have been removed',
          ],
        },
        {
          type: 'paragraph',
          text: 'Broken kernels are the defining factor of the rice trade. Whole kernels command the premium, brokens are a lower-value product with their own market, and head rice yield — the proportion of whole kernels a mill recovers — is the number that determines whether a lot of rough rice was worth buying. Breakage originates largely before the mill: fissures form in the kernel from moisture cycling in the field and in drying, and the mill merely reveals them.',
        },
        {
          type: 'paragraph',
          text: 'Chalkiness is a related and instructive factor. Chalky areas are regions of loosely packed starch that scatter light, and they arise chiefly from high temperature during grain filling. They are structurally weak, so they raise breakage, and they are visible, so they carry an appearance penalty as well. Degree of milling is different in kind from all of these: it is not a defect but a processing choice — mill more and the rice is whiter but more of the kernel is lost — which is why it is assessed against reference standards rather than judged as damage.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Numerical limits are not reproduced here',
          text: 'The limits that define each grade, and the fraction definitions for brokens, are set out in the official standard and are revised over time. Consult the current USDA AMS text for the values in force; this page summarises structure and factors only.',
        },
      ],
    },
    {
      id: 'what-a-grade-means',
      heading: 'What a rice grade does and does not mean',
      body: [
        {
          type: 'paragraph',
          text: 'A grade describes the physical and visual condition of milled rice. It says nothing about cooking behaviour beyond what class implies, and nothing about the aroma, amylose content, or varietal identity that much of the rice market actually trades on — a fragrant variety is bought by name and by test, not by grade. It is also not a food-safety determination.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not an inspection authority',
          text: 'AgricultureID does not grade, sample, or inspect rice and cannot determine the grade of any lot. Official grades are issued only by USDA and its designated agencies.',
        },
      ],
    },
    {
      id: 'sampling',
      heading: 'Sampling context',
      body: [
        {
          type: 'paragraph',
          text: 'A grade applies to the lot the sample represents, drawn and handled under prescribed procedures. Rice adds a specific reason for care: brokens and whole kernels segregate readily during handling, so a sample taken carelessly will misrepresent the very factor the grade turns on. Sampling method, sample size, and lot definition follow official procedure rather than party agreement.',
        },
      ],
    },
  ],
  gradeCriteria: [
    {
      attribute: 'Broken kernels',
      limitType: 'maximum',
      basis: 'Separated into defined size fractions by prescribed sieving',
      note: 'The principal grade-determining factor; limits by fraction are set in the official standard.',
    },
    {
      attribute: 'Chalky kernels',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Damaged kernels, including heat-damaged',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Colour, red rice, and seeds',
      limitType: 'maximum',
      note: 'Off-colour kernels, red rice, and foreign seeds; limits are set in the official standard.',
    },
    {
      attribute: 'Degree of milling',
      limitType: 'descriptive',
      basis: 'Comparison against official reference standards',
      note: 'A processing choice rather than a defect; assessed against reference standards described in the official text.',
    },
  ],
  measurementBasis:
    'Factors are determined on a representative sample of milled rice, drawn and handled under official USDA sampling procedures, with brokens separated by prescribed sieving and milling degree assessed against reference standards.',
  defectsConsidered: [
    'Broken kernels',
    'Chalky kernels',
    'Heat-damaged kernels',
    'Other damaged kernels',
    'Red rice and off-colour kernels',
    'Foreign seeds and material',
  ],
  samplingContext:
    'Grades apply to the lot the sample represents; brokens and whole kernels segregate in handling, so prescribed sampling procedure bears directly on the result.',
  reproductionLimitations: [
    'This page summarises the structure and grading factors of the United States Standards for Rice; it does not reproduce the standard or its numerical limits.',
    'Broken-kernel fraction definitions and the limits attached to each grade are set in the official text and are not stated here.',
    'The standard is revised over time — consult the current official USDA AMS text for the edition and limits in force.',
    'AgricultureID is not an inspection, grading, or certification authority and makes no determination about any lot of rice.',
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States Standards for Rice: classes, grades, and grading factors',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Rice kernel fissuring, chalk, and milling quality context',
    },
    {
      sourceId: 'irri',
      citedFor: 'Milled rice quality attributes and head rice yield context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'United States. Rice is traded internationally against a variety of national standards and contract specifications that use different terms and factors.',
  limitations: [
    'Applies only to official grading in the United States; the international rice trade uses other standards and contract terms.',
    'Structure and factors are summarised without numerical limits, which are set in the official text and revised over time.',
    'Covers milled rice; rough rice and brown rice are graded under their own provisions not summarised here.',
    'A grade describes physical condition — not variety, aroma, amylose content, or cooking performance, which are traded separately.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'US Grade Standards for Milled Rice (USDA)',
    description:
      'How USDA grades milled rice: classes by grain length, U.S. No. 1–6 and Sample grade, brokens and chalky kernels, degree of milling, and what a grade omits.',
    keywords: [
      'USDA rice grades',
      'milled rice standards',
      'broken kernels',
      'chalky kernels',
      'degree of milling',
    ],
  },
  structuredData: { article: true },
};
