import type { CommodityGradeContent } from '@/types/content';

export const usdaEggGrades: CommodityGradeContent = {
  id: 'commodity-grade-usda-egg-grades',
  slug: 'usda-egg-grades',
  contentType: 'commodity-grade',
  title: 'United States Grade Standards for Shell Eggs',
  alternativeNames: [
    'U.S. egg grades',
    'USDA shell egg standards',
    'Grade AA eggs',
  ],
  category: 'Commodity grading standard',
  subcategory: 'Livestock product',
  standardBody:
    'United States Department of Agriculture — Agricultural Marketing Service (AMS)',
  standardIdentifier:
    'United States Standards, Grades, and Weight Classes for Shell Eggs',
  jurisdiction: 'United States',
  edition:
    'As maintained and periodically revised by USDA AMS; consult the current official text for the edition in force.',
  legalStatus: 'voluntary',
  gradedCommodity: { type: 'commodity', slug: 'hen-eggs' },
  gradeNames: ['U.S. Grade AA', 'U.S. Grade A', 'U.S. Grade B'],
  summary:
    'The USDA standards for shell eggs define quality grades AA, A, and B alongside a separate set of weight classes. Unlike the U.S. grain standards, this grading is a voluntary, fee-for-service programme: an egg carton carries the USDA shield only if the packer chose to pay for the service.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The United States Standards, Grades, and Weight Classes for Shell Eggs are maintained by USDA’s Agricultural Marketing Service. They do two separate things: they define quality grades based on the condition of the shell and the interior, and they define weight classes based on how much the eggs weigh. The two axes are independent and are read together on a label.',
    },
    {
      type: 'paragraph',
      text: 'The legal footing matters and is easy to get wrong. This is voluntary grading offered as a fee-for-service programme, not mandatory inspection under a grain-standards-style statute. A packer may use the USDA grading service and display the shield, or may not — and eggs sold without the shield are not ungraded lawless eggs; they are simply outside this particular programme, and remain subject to the food-safety and labelling rules that apply regardless.',
    },
  ],
  keyFacts: [
    {
      label: 'Issuing body',
      value: 'USDA Agricultural Marketing Service (AMS)',
    },
    { label: 'Jurisdiction', value: 'United States' },
    {
      label: 'Legal status',
      value:
        'Voluntary — a fee-for-service grading programme, not mandatory inspection',
    },
    { label: 'Commodity', value: 'Shell eggs (table eggs)' },
    { label: 'Quality grades', value: 'U.S. Grade AA, A, and B' },
    { label: 'Weight classes', value: 'A separate axis: Jumbo through Peewee' },
    {
      label: 'Principal technique',
      value:
        'Candling — judging the interior through the shell against a light',
    },
  ],
  sections: [
    {
      id: 'two-independent-axes',
      heading: 'Two independent axes: quality and weight',
      body: [
        {
          type: 'paragraph',
          text: 'A graded pack of eggs is described twice over. Quality — AA, A, or B — reflects the condition of the shell and the interior. Weight class — Jumbo, Extra Large, Large, Medium, Small, or Peewee — reflects mass, and is applied on a per-dozen basis rather than to each individual egg. Neither implies the other. A carton of Grade AA Medium and a carton of Grade A Jumbo are both entirely coherent descriptions, and the common assumption that a bigger egg is a better egg has no basis in the standard.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Size is not quality',
          text: 'Weight class and quality grade are set independently. Reading a size designation as a quality signal — or the reverse — misreads the label.',
        },
      ],
    },
    {
      id: 'quality-factors',
      heading: 'What the quality grades assess',
      body: [
        {
          type: 'paragraph',
          text: 'Quality grading looks at four things, two on the outside of the egg and two within it:',
        },
        {
          type: 'list',
          items: [
            'Shell — soundness, cleanliness, shape, and texture',
            'Air cell — its depth, and whether it is free or fixed in place',
            'White (albumen) — clarity and firmness, which decline as the egg ages',
            'Yolk — how well defined its outline is, and freedom from defects',
          ],
        },
        {
          type: 'paragraph',
          text: 'The grades sit on a continuum of interior condition rather than describing different kinds of egg. AA describes an egg whose white is firm and whose yolk stands high with a well-defined outline; A describes an egg that is a step along the same path; B describes one whose white has thinned and whose yolk has flattened and spread further, and which may carry shell blemishes. That continuum is chiefly a function of age and storage temperature — a Grade AA egg becomes a Grade A egg by sitting still, and no handling reverses the direction of travel.',
        },
        {
          type: 'paragraph',
          text: 'Because interior quality declines with time, a grade is a statement about the egg at the moment it was graded. It is not a durable property of the pack, which is why the grade and the dates on a carton answer different questions and neither substitutes for the other.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Thresholds are not reproduced here',
          text: 'The air-cell depths, weight-class boundaries, and tolerances that separate the grades are set out in the official USDA AMS text and are revised over time. This page describes the structure and the factors only; consult the official standard for the values in force.',
        },
      ],
    },
    {
      id: 'candling',
      heading: 'Candling: assessing the interior without breaking the egg',
      body: [
        {
          type: 'paragraph',
          text: 'The characteristic technique of egg grading is candling — passing the egg over a bright light so the interior can be judged through the shell. The name is literal in origin: the practice predates electric light and once used a candle. Modern packing lines candle at speed, and the same principle underlies automated systems that detect cracks and inclusions.',
        },
        {
          type: 'paragraph',
          text: 'Candling reveals the air cell’s size and mobility, the shadow and movement of the yolk, the condition of the white, and internal defects such as blood spots and meat spots. What it offers is speed and the fact that the egg survives the assessment — a decisive advantage when every unit is being judged individually. What it costs is directness: candling is inference through a shell, so the standards also provide for breaking out samples to verify interior quality against the specified criteria.',
        },
      ],
    },
    {
      id: 'what-a-grade-means',
      heading: 'What an egg grade does and does not mean',
      body: [
        {
          type: 'paragraph',
          text: 'The grade describes appearance and physical condition at the time of grading. It is not a food-safety determination, and it carries no information about how the hens were housed or fed — cage-free, free-range, organic, and similar claims are separate labelling schemes with their own rules and are wholly independent of the AA/A/B grade. Nor does the grade travel: an egg graded AA at the packer is not AA forever.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not an inspection authority',
          text: 'AgricultureID does not grade, candle, or inspect eggs and cannot determine the grade or weight class of any lot. Official grades under this programme are issued only by USDA AMS graders and authorised personnel.',
        },
      ],
    },
  ],
  gradeCriteria: [
    {
      attribute: 'Shell condition',
      limitType: 'descriptive',
      basis: 'Visual assessment of soundness, cleanliness, shape, and texture',
      note: 'Descriptions attaching to each grade are set in the official standard.',
    },
    {
      attribute: 'Air cell depth',
      limitType: 'maximum',
      basis: 'Candling',
      note: 'A grade-determining factor; the depths that separate the grades are set in the official standard.',
    },
    {
      attribute: 'White (albumen) clarity and firmness',
      limitType: 'descriptive',
      basis: 'Candling, with break-out verification against specified criteria',
      note: 'Descriptions attaching to each grade are set in the official standard.',
    },
    {
      attribute: 'Yolk outline and defects',
      limitType: 'descriptive',
      basis: 'Candling',
      note: 'Descriptions attaching to each grade are set in the official standard.',
    },
    {
      attribute: 'Weight class',
      limitType: 'minimum',
      basis: 'Weight per dozen',
      note: 'A separate axis from quality; the class boundaries are set in the official standard.',
    },
  ],
  measurementBasis:
    'Quality is assessed on individual eggs by candling, with break-out samples used to verify interior quality; weight classes are applied on a per-dozen basis. Tolerances permit a proportion of eggs below the stated grade in a lot, as specified in the official text.',
  defectsConsidered: [
    'Cracked, checked, or leaking shells',
    'Dirty or stained shells',
    'Abnormal shell shape and texture',
    'Enlarged or free air cells',
    'Thinned, watery whites',
    'Flattened or defective yolks',
    'Blood spots and meat spots',
  ],
  samplingContext:
    'Grading is applied per egg across a lot, with tolerances allowing a specified proportion below grade. Because interior quality declines with time and temperature, a grade describes the eggs at the moment of grading rather than permanently.',
  reproductionLimitations: [
    'This page summarises the structure of the USDA shell egg standards; it does not reproduce the standard, its air-cell depths, its weight-class boundaries, or its tolerances.',
    'Grade names and weight-class names are listed for reference only; an official grade under this programme can be assigned only by USDA AMS graders and authorised personnel.',
    'The standard is revised over time — consult the current official USDA AMS text for the edition and values in force.',
    'AgricultureID is not an inspection, grading, or certification authority and makes no determination about any egg or lot.',
  ],
  connections: [
    { type: 'livestock', slug: 'chickens' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'US standards, grades, and weight classes for shell eggs, and the candling method',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Shell egg market context and the role of voluntary grading',
    },
    {
      sourceId: 'usda-nass',
      citedFor: 'United States shell egg production and marketing context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'United States. Other jurisdictions class and label eggs under their own rules, which use different quality categories and size bands.',
  limitations: [
    'Applies only to the United States, and only where a packer elects to use the voluntary USDA grading service.',
    'Structure and factors are summarised without air-cell depths, weight-class boundaries, or tolerances, which are set in the official text.',
    'A quality grade describes condition at the time of grading; interior quality declines with age and temperature thereafter.',
    'The grade is unrelated to housing, feeding, or production-method claims such as cage-free or organic, which are separate schemes.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'US Grade Standards for Shell Eggs (USDA AMS)',
    description:
      'How USDA grades shell eggs: the voluntary AA, A and B quality grades, the separate weight classes, what candling shows, and why size is not a quality signal.',
    keywords: [
      'USDA egg grades',
      'Grade AA eggs',
      'egg weight classes',
      'candling eggs',
      'shell egg standards',
    ],
  },
  structuredData: { article: true },
};
