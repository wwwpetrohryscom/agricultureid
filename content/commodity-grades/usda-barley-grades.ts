import type { CommodityGradeContent } from '@/types/content';

export const usdaBarleyGrades: CommodityGradeContent = {
  id: 'commodity-grade-usda-barley-grades',
  slug: 'usda-barley-grades',
  contentType: 'commodity-grade',
  title: 'United States Grade Standards for Barley',
  alternativeNames: ['U.S. barley grades', 'FGIS barley standards'],
  category: 'Commodity grading standard',
  subcategory: 'Cereal grain',
  standardBody:
    'United States Department of Agriculture — Federal Grain Inspection Service (FGIS), Agricultural Marketing Service',
  standardIdentifier:
    'United States Standards for Barley (Official Grain Standards of the United States)',
  jurisdiction: 'United States',
  edition:
    'As maintained and periodically revised by USDA FGIS; consult the current official text for the edition in force.',
  legalStatus: 'mandatory',
  gradedCommodity: { type: 'commodity', slug: 'barley-grain' },
  summary:
    'The United States Standards for Barley set out how barley is officially classed and graded. The structure is organised around a distinction the trade turns on: malting barley, assessed against requirements no other cereal standard carries, and barley destined for feed and other uses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The United States Standards for Barley are issued under the United States Grain Standards Act and maintained by USDA’s Federal Grain Inspection Service. Like the other grain standards they assign a class and then a grade from measured factors — but barley is the case where the classing decision carries most of the commercial weight.',
    },
    {
      type: 'paragraph',
      text: 'Official inspection is performed by FGIS and its delegated and designated agencies, not by AgricultureID. This page summarises how the standard is organised and what it measures; it is not the standard, and it reproduces none of the numerical limits that define the grades.',
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
    { label: 'Commodity', value: 'Barley' },
    {
      label: 'Central distinction',
      value: 'Malting barley versus barley for feed and other uses',
    },
    {
      label: 'Grade scale',
      value: 'Numbered grades together with a sample grade',
    },
    {
      label: 'Malting-specific factors',
      value: 'Germination, skinned and broken kernels, plumpness, blight',
    },
  ],
  sections: [
    {
      id: 'malting-versus-feed',
      heading: 'The malting/feed distinction is the standard’s spine',
      body: [
        {
          type: 'paragraph',
          text: 'Barley has two quite different commercial lives, and the standard is built around the difference. Malting barley is bought for a biological purpose: the grain must germinate in the maltster’s steep, mobilising its own enzymes to convert starch. Feed barley is bought for what it contains. One requires living, undamaged grain; the other does not care whether the embryo survived.',
        },
        {
          type: 'paragraph',
          text: 'This is why the barley standard carries requirements that appear in no cereal standard for a grain used only as a commodity input. Germination and the integrity of the kernel matter because the maltster needs the seed to work. It is also why the price gap between malting and feed barley is wide and why the same field can produce either, depending on conditions the grower does not fully control: barley that fails a malting requirement does not fail as grain — it simply becomes feed barley, at a feed barley price.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Grade and end use are not the same question',
          text: 'A lot can grade well and still be rejected for malting, because malting acceptance depends on factors beyond the numerical grade — and on the maltster’s own contract specification, which routinely goes further than the standard.',
        },
      ],
    },
    {
      id: 'how-the-standard-works',
      heading: 'How the standard works',
      body: [
        {
          type: 'paragraph',
          text: 'A lot is classed — the standard separates malting barley from barley generally, and distinguishes types by row number and colour — and then assigned a numerical grade from factors measured on a representative sample. As throughout the U.S. grain standards, the poorest factor governs the outcome, and a sample grade applies to lots that fall outside the numbered grades or carry specified objectionable characteristics.',
        },
        {
          type: 'paragraph',
          text: 'This summary does not enumerate the grade designations or the classes. Both are set out in the official text, and a reader who needs the scale should take it from USDA FGIS rather than from a secondary description.',
        },
      ],
    },
    {
      id: 'factors-considered',
      heading: 'Factors the standard considers',
      body: [
        {
          type: 'paragraph',
          text: 'General grading factors resemble those for other cereals, with malting-specific factors layered on top:',
        },
        {
          type: 'list',
          items: [
            'Test weight per bushel — a bulk-density measure used as a general soundness indicator',
            'Damaged kernels, including heat-damaged kernels',
            'Foreign material and other grains',
            'Plump and thin kernels — kernel size distribution, determined by prescribed sieving',
            'Skinned and broken kernels — a malting factor, because a damaged husk and embryo compromise germination',
            'Germination — assessed for malting barley, because the grain must be alive',
            'Blight and other damage relevant to malting acceptance',
          ],
        },
        {
          type: 'paragraph',
          text: 'Plumpness is more consequential for barley than kernel size is for most cereals. Plump kernels carry proportionally more starchy endosperm relative to husk, and a uniform kernel size lets a maltster steep a batch evenly — uneven grain modifies unevenly, which is a real processing problem rather than a cosmetic one. Skinned and broken kernels matter for a related biological reason: barley’s husk is fused to the kernel and protects the embryo, so removing it in handling can cost the grain its ability to germinate.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Numerical limits are not reproduced here',
          text: 'The limits that define each grade, and the requirements attached to malting barley, are set out in the official standard and revised over time. Consult the current USDA FGIS text for the values in force; this page describes structure and factors only.',
        },
      ],
    },
    {
      id: 'what-a-grade-means',
      heading: 'What a barley grade does and does not mean',
      body: [
        {
          type: 'paragraph',
          text: 'The grade is a commercial description of soundness and cleanliness, plus — for malting barley — of characteristics bearing on whether the grain will malt. It is not a malting contract, and it is not a food-safety determination. Maltsters specify protein ranges, variety, germinative energy, and other attributes that the standard does not carry, and pre-harvest sprouting or weather damage can disqualify a lot for malting independently of the number on the certificate.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not an inspection authority',
          text: 'AgricultureID does not grade, sample, or inspect barley and cannot determine the grade of any lot, nor its acceptability for malting. Official grades are issued only by FGIS and its delegated and designated agencies.',
        },
      ],
    },
    {
      id: 'sampling',
      heading: 'Sampling context',
      body: [
        {
          type: 'paragraph',
          text: 'A grade applies to the lot the sample represents. Sampling method, sample size, and lot definition are governed by prescribed official procedure, because an unrepresentative sample yields a grade that represents nothing. For barley this matters twice over: the sample determines the numerical grade and, where malting is in question, it also stands in for the germinative condition of the whole lot.',
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
      attribute: 'Damaged kernels, including heat-damaged',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Foreign material and other grains',
      limitType: 'maximum',
      note: 'Grade-determining; limits are set in the official standard.',
    },
    {
      attribute: 'Plump kernels',
      limitType: 'minimum',
      basis: 'Kernel size distribution determined by prescribed sieving',
      note: 'Limits are set in the official standard; plumpness bears directly on malting suitability.',
    },
    {
      attribute: 'Thin kernels',
      limitType: 'maximum',
      basis: 'Kernel size distribution determined by prescribed sieving',
      note: 'Limits are set in the official standard.',
    },
    {
      attribute: 'Skinned and broken kernels',
      limitType: 'maximum',
      note: 'A malting factor — husk and embryo damage compromises germination; limits are set in the official standard.',
    },
    {
      attribute: 'Germination',
      limitType: 'descriptive',
      note: 'Assessed in relation to malting barley, because the grain must be alive to malt; requirements are set in the official standard.',
    },
    {
      attribute: 'Moisture',
      limitType: 'descriptive',
      note: 'Determined and reported; central to storability and to preserving germination, but not the basis of the numerical grade.',
    },
  ],
  measurementBasis:
    'Factors are determined on a representative sample drawn and handled under official USDA FGIS sampling procedures, with kernel size determined by prescribed sieving.',
  defectsConsidered: [
    'Heat-damaged kernels',
    'Other damaged kernels',
    'Skinned and broken kernels',
    'Thin kernels',
    'Foreign material and other grains',
    'Blight and weather damage relevant to malting',
  ],
  samplingContext:
    'Grades apply to the lot the sample represents; for malting barley the sample also stands in for the germinative condition of the whole lot, which raises the stakes on prescribed sampling procedure.',
  reproductionLimitations: [
    'This page summarises the structure and grading factors of the United States Standards for Barley; it does not reproduce the standard or its numerical limits.',
    'Grade designations, class definitions, and malting requirements are not enumerated here — take them from the official USDA FGIS text.',
    'The standard is revised over time; consult the current official text for the edition and requirements in force.',
    'AgricultureID is not an inspection, grading, or certification authority and makes no determination about any lot of barley or its suitability for malting.',
  ],
  connections: [
    { type: 'crop', slug: 'barley' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'United States Standards for Barley: classes, grades, and grading factors',
    },
    {
      sourceId: 'usda-nass',
      citedFor:
        'United States barley production and malting/feed marketing context',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Malting versus feed barley quality requirements in commercial practice',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'United States. Other barley-producing countries grade under their own standards, and malting acceptance elsewhere rests on national schemes and buyer contracts.',
  limitations: [
    'Applies only to official grading in the United States; other jurisdictions use different barley standards.',
    'Structure and factors are summarised without numerical limits, grade designations, or malting requirements, all of which are set in the official text.',
    'A grade does not equate to malting acceptance: maltsters contract on variety, protein, and germinative attributes beyond the standard.',
    'A grade is a commercial description, not a food-safety clearance or a processing guarantee.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'US Grade Standards for Barley (USDA FGIS)',
    description:
      'How USDA FGIS grades barley: why the malting versus feed distinction drives the standard, the factors including plumpness and germination, and grade limits.',
    keywords: [
      'USDA barley grades',
      'malting barley',
      'feed barley',
      'plump kernels',
      'barley germination',
    ],
  },
  structuredData: { article: true },
};
