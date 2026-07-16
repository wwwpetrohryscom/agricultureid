import type { CommodityGradeContent } from '@/types/content';

export const usdaSoybeanGrades: CommodityGradeContent = {
  id: 'commodity-grade-usda-soybean-grades',
  slug: 'usda-soybean-grades',
  contentType: 'commodity-grade',
  title: 'United States Grade Standards for Soybeans',
  alternativeNames: ['U.S. soybean grades', 'FGIS soybean standards'],
  category: 'Commodity grading standard',
  subcategory: 'Oilseed',
  standardBody:
    'United States Department of Agriculture — Federal Grain Inspection Service (FGIS), Agricultural Marketing Service',
  standardIdentifier:
    'United States Standards for Soybeans (Official Grain Standards of the United States)',
  jurisdiction: 'United States',
  edition:
    'As maintained and periodically revised by USDA FGIS; consult the current official text for the edition in force.',
  legalStatus: 'mandatory',
  gradedCommodity: { type: 'commodity', slug: 'soybeans' },
  summary:
    'The United States Standards for Soybeans define how soybeans are officially classed and graded for trade in the United States. Numbered grades and a sample grade are determined from factors including test weight, damaged and heat-damaged kernels, foreign material, splits, and soybeans of other colours.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The United States Standards for Soybeans are issued under the United States Grain Standards Act and maintained by USDA’s Federal Grain Inspection Service. They provide the common commercial description for a lot of soybeans: a class based on seed and hilum colour, then a grade determined by measured factors on a representative sample.',
    },
    {
      type: 'paragraph',
      text: 'Official inspection under these standards is performed by FGIS and its delegated and designated agencies — not by AgricultureID. This page summarises what the standard measures and how it is organised. It is not the standard, and it does not reproduce the numerical limits that separate the grades.',
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
    { label: 'Commodity', value: 'Soybeans' },
    {
      label: 'Grade scale',
      value: 'Numbered grades together with a sample grade',
    },
    {
      label: 'Classes',
      value: 'Distinguished by seed and hilum colour before grading',
    },
    {
      label: 'Oilseed-specific factors',
      value: 'Splits, and soybeans of other colours',
    },
  ],
  sections: [
    {
      id: 'how-the-standard-works',
      heading: 'How the standard works',
      body: [
        {
          type: 'paragraph',
          text: 'As with the other U.S. grain standards, a lot is first classed and then graded. Classing for soybeans turns on colour — of the seed coat and of the hilum — because colour carries into processed products and because certain buyers, particularly in food-soy markets, contract specifically for it. The numerical grade then follows from factors measured on a representative sample, with the poorest factor determining the outcome and a sample grade applying to lots that fall outside the numbered grades or carry specified objectionable characteristics.',
        },
        {
          type: 'paragraph',
          text: 'This page does not enumerate the numbered grades. The number of grades, their designations, and the limits attached to each are set in the official text; readers needing the scale itself should take it from USDA FGIS rather than from a summary.',
        },
      ],
    },
    {
      id: 'factors-considered',
      heading: 'Factors the standard considers',
      body: [
        {
          type: 'paragraph',
          text: 'The soybean factor set overlaps with the cereal standards but adds two factors that only make sense for this commodity:',
        },
        {
          type: 'list',
          items: [
            'Test weight per bushel — a bulk-density measure used as a general soundness indicator',
            'Damaged kernels (total) — beans materially damaged by any cause',
            'Heat-damaged kernels — limited separately and more strictly than total damage',
            'Foreign material — material other than soybeans remaining after the prescribed separation',
            'Splits — beans separated into halves, with the seed coat broken or removed',
            'Soybeans of other colours — off-colour beans within a lot of a given class',
          ],
        },
        {
          type: 'paragraph',
          text: 'Splits are the distinctive factor. A soybean is two cotyledons held together, and dry or roughly handled beans separate cleanly along that natural line — so splits are largely a record of moisture condition and handling, not of any problem in the field. They matter to processors because a split bean has lost its seed coat and exposes oil-bearing tissue, which affects storage stability and processing behaviour.',
        },
        {
          type: 'paragraph',
          text: 'Soybeans of other colours is a class-purity factor rather than a soundness factor. It exists because colour has commercial consequences downstream, and it is a good illustration of a general point about grading: not every grading factor describes damage. Some simply describe whether the lot is what it says it is.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Numerical limits are not reproduced here',
          text: 'The limits that define each grade are set out in the official standard and are revised over time. Consult the current USDA FGIS text for the values in force; this page describes structure and factors only.',
        },
      ],
    },
    {
      id: 'what-a-grade-means',
      heading: 'What a soybean grade does and does not mean',
      body: [
        {
          type: 'paragraph',
          text: 'The grade describes soundness, cleanliness, and class purity. It does not describe the two things much of the market actually buys soybeans for — oil content and protein content — which are determined and traded separately, and which are why crush margins and food-soy premiums are negotiated outside the grade entirely. Nor is a grade a food-safety determination.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not an inspection authority',
          text: 'AgricultureID does not grade, sample, or inspect soybeans and cannot determine the grade of any lot. Official grades are issued only by FGIS and its delegated and designated agencies.',
        },
      ],
    },
    {
      id: 'sampling',
      heading: 'Sampling context',
      body: [
        {
          type: 'paragraph',
          text: 'A grade attaches to the lot the sample represents. Official grading depends on prescribed sampling and handling procedures: sampling method, sample size, and lot definition follow official procedure rather than party agreement, because an unrepresentative sample produces a grade that describes nothing real.',
        },
      ],
    },
  ],
  gradeCriteria: [
    {
      attribute: 'Test weight per bushel',
      limitType: 'minimum',
      basis: 'Bulk density of a representative sample',
      note: 'A grade-determining factor; limits are set in the official standard.',
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
      attribute: 'Foreign material',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Splits',
      limitType: 'maximum',
      basis:
        'Beans separated into halves, with the seed coat broken or removed',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Soybeans of other colours',
      limitType: 'maximum',
      note: 'A class-purity factor rather than a soundness factor; limits are set in the official standard.',
    },
    {
      attribute: 'Moisture',
      limitType: 'descriptive',
      note: 'Determined and reported; central to storability and to splitting in handling, but not the basis of the numerical grade.',
    },
  ],
  measurementBasis:
    'Factors are determined on a representative sample drawn and handled under official USDA FGIS sampling procedures.',
  defectsConsidered: [
    'Heat-damaged kernels',
    'Other damaged kernels',
    'Foreign material',
    'Splits',
    'Soybeans of other colours',
    'Objectionable characteristics that assign sample grade',
  ],
  samplingContext:
    'Grades apply to the lot the sample represents; sampling method, sample size, and lot definition follow prescribed FGIS procedures.',
  reproductionLimitations: [
    'This page summarises the structure and grading factors of the United States Standards for Soybeans; it does not reproduce the standard or its numerical limits.',
    'The grade designations themselves are not enumerated here — take the scale from the official USDA FGIS text rather than from this summary.',
    'The standard is revised over time; consult the current official text for the edition and limits in force.',
    'AgricultureID is not an inspection, grading, or certification authority and makes no determination about any lot of soybeans.',
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [{ type: 'commodity-grade', slug: 'usda-corn-grades' }],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States Standards for Soybeans: classes, grades, and grading factors',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'United States soybean production and marketing context',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Soybean crush and end-use market context relevant to grading',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'United States. Other soybean-producing and importing countries apply their own standards and contract specifications.',
  limitations: [
    'Applies only to official grading in the United States; other jurisdictions use different standards.',
    'Structure and factors are summarised without numerical limits or grade designations, which are set in the official text.',
    'A grade describes soundness, cleanliness, and class purity — not oil or protein content, which are traded separately.',
    'A grade is a commercial description, not a food-safety clearance or a guarantee of processing suitability.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'US Grade Standards for Soybeans (USDA FGIS)',
    description:
      'How USDA FGIS grades soybeans: classing by colour, the grading factors including splits and other-colour beans, and why oil and protein sit outside grade.',
    keywords: [
      'USDA soybean grades',
      'FGIS soybean standards',
      'soybean splits',
      'soybean grading factors',
      'oilseed grading',
    ],
  },
  structuredData: { article: true },
};
