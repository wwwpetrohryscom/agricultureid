import type { CommodityGradeContent } from '@/types/content';

export const codexStandardsOverview: CommodityGradeContent = {
  id: 'commodity-grade-codex-standards-overview',
  slug: 'codex-standards-overview',
  contentType: 'commodity-grade',
  title: 'Codex Alimentarius: What It Is and What It Is Not',
  alternativeNames: [
    'Codex Alimentarius',
    'Codex standards',
    'Codex Alimentarius Commission',
  ],
  category: 'Food standards reference',
  subcategory: 'International reference framework',
  standardBody:
    'Codex Alimentarius Commission — the joint standards body of the Food and Agriculture Organization (FAO) and the World Health Organization (WHO)',
  standardIdentifier:
    'Codex Alimentarius — the collected standards, codes of practice, guidelines, and recommendations adopted by the Commission',
  jurisdiction:
    'International reference. Codex texts have no direct legal force anywhere; they apply only where a country adopts them into its own law.',
  edition:
    'Codex is a living collection with texts adopted and revised individually rather than issued as a single dated edition; consult the current official text of the specific standard in question.',
  legalStatus: 'voluntary',
  gradedCommodity: { type: 'commodity', slug: 'green-coffee' },
  summary:
    'Codex Alimentarius is the joint FAO/WHO collection of international food standards. It is a reference framework — mainly concerned with food safety, hygiene, contaminants, and labelling — that carries legal force only where a country adopts it. It is not a commercial grading system, and green coffee is used here to show why that distinction matters.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Codex Alimentarius Commission was established by FAO and WHO to develop international food standards protecting consumer health and ensuring fair practices in the food trade. What it produces is a body of texts — commodity standards, codes of practice, guidelines, maximum residue limits, and contaminant provisions — negotiated by member governments and adopted by consensus where it can be reached.',
    },
    {
      type: 'paragraph',
      text: 'This page is deliberately framed as an explanation rather than a summary of criteria, because the most common error about Codex is categorical. Codex is not a grading system, not a certification scheme, not a regulator, and not an enforcement body. It has no inspectors and issues no certificates. Green coffee is listed here as the reference commodity precisely because it illustrates the gap: coffee is graded intensively in world trade, and none of that grading is Codex.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'Codex Alimentarius Commission, established jointly by FAO and WHO',
    },
    {
      label: 'What it produces',
      value: 'Standards, codes of practice, guidelines, and recommendations',
    },
    {
      label: 'Legal status',
      value: 'None inherently — force comes only from national adoption',
    },
    {
      label: 'Principal concern',
      value: 'Food safety, hygiene, contaminants, residues, and labelling',
    },
    {
      label: 'What it is not',
      value:
        'A grading scheme, a certifier, a regulator, or an inspection body',
    },
    {
      label: 'Trade significance',
      value:
        'Referenced in the WTO SPS Agreement as an international benchmark',
    },
    { label: 'Reference commodity here', value: 'Green coffee' },
  ],
  sections: [
    {
      id: 'what-codex-is',
      heading: 'What Codex actually is',
      body: [
        {
          type: 'paragraph',
          text: 'Codex is an intergovernmental standards-setting process and the library of texts it has produced. Member governments negotiate through subject committees — on food hygiene, contaminants, pesticide residues, food labelling, and on particular commodity groups — and texts are adopted by the Commission. The work draws on independent scientific advice from expert bodies convened by FAO and WHO, which is the source of its technical credibility.',
        },
        {
          type: 'paragraph',
          text: 'Its subject matter is overwhelmingly public health and honest trading. Codex sets maximum residue limits for pesticides and veterinary drugs, provisions for contaminants, hygiene codes describing how food should be handled to control hazards, labelling rules, and standards for the composition and identity of particular foods. That last category is the closest Codex comes to describing quality, and even there the concern is usually what a food must be to bear a name, not how a lot should be ranked commercially.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Codex is a reference, not a law',
          text: 'A Codex text binds nobody by itself. It becomes enforceable only where a national or regional authority adopts it into law — in whole, in part, with modification, or not at all. Two countries can both cite Codex and enforce materially different rules.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why a voluntary reference carries real weight',
      body: [
        {
          type: 'paragraph',
          text: 'If Codex binds nobody, its influence needs explaining, and the explanation is trade law. The WTO Agreement on the Application of Sanitary and Phytosanitary Measures treats Codex texts as the international benchmark for food safety: a member whose measures conform to Codex is presumed consistent with its SPS obligations, while a member imposing stricter measures may be asked to justify them scientifically. Codex is therefore the yardstick against which national food-safety measures are assessed in trade disputes.',
        },
        {
          type: 'paragraph',
          text: 'That gives a voluntary text substantial practical gravity without making it law. It also explains why Codex negotiations are contested: members are not merely writing advice, they are setting the reference point their own measures will be judged against. The honest description is that Codex is voluntary in form and consequential in effect — and both halves of that sentence are load-bearing.',
        },
      ],
    },
    {
      id: 'codex-and-grading',
      heading: 'Codex and commercial grading are different things',
      body: [
        {
          type: 'paragraph',
          text: 'A commercial grading standard exists to let a buyer and a seller agree what a lot is worth: it ranks lots on measurable attributes so a price can attach to a description. Codex exists to protect health and prevent deception. The two answer different questions, and a food fully compliant with every applicable Codex provision may still be commercially poor — while a high-grading lot is not thereby safe.',
        },
        {
          type: 'paragraph',
          text: 'Green coffee makes the point cleanly. It is graded in world trade by defect count, screen size, origin, altitude, processing method, and cup quality, under systems maintained by national bodies in producing countries, by international standards organisations, and by industry associations — a dense and highly developed grading landscape. Codex does not participate in it. Where Codex touches coffee, it does so through the safety and hygiene layer: contaminant provisions and codes of practice addressing hazards such as ochratoxin A, which is a mould-associated contaminant that coffee handling and drying practice can influence.',
        },
        {
          type: 'list',
          items: [
            'Commercial grading of green coffee — defect count, screen size, origin, processing method, cup quality',
            'Set by — national coffee authorities, international standards organisations, industry associations, and contracts',
            'Codex contribution — contaminant provisions, hygiene codes of practice, residue limits, labelling',
            'Overlap between the two — minimal, and confusing them misdescribes both',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why this page exists',
          text: 'Codex is listed in this section of AgricultureID because readers arrive expecting it to be a grading standard. Its entry here is an explanation of what it is and what it is not, rather than a summary of grade criteria it does not have.',
        },
      ],
    },
    {
      id: 'using-codex-honestly',
      heading: 'Using Codex texts honestly',
      body: [
        {
          type: 'paragraph',
          text: 'Three cautions follow from all of this. First, always identify the specific text: "Codex says" is nearly meaningless, since Codex is a library of individually adopted standards, codes, and limits, each with its own scope and revision history. Second, always check adoption: the operative rule for a consignment is the law of the importing country, which may follow Codex, exceed it, or ignore it. Third, do not read Codex as a quality claim — conformity with a Codex provision is not a marketing credential and confers no grade.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Not an inspection authority',
          text: 'AgricultureID does not inspect, grade, certify, or assess conformity of any food or lot, and this page is not a statement of the Codex provisions or national requirements applying to any consignment. Codex itself performs no inspection and issues no certificates; enforcement rests entirely with national authorities.',
        },
      ],
    },
  ],
  gradeCriteria: [
    {
      attribute: 'Food safety provisions (contaminants, residues, hygiene)',
      limitType: 'descriptive',
      note: 'Codex sets these in individual texts such as contaminant standards, maximum residue limits, and codes of practice. They are safety provisions, not grade criteria, and no values are reproduced here.',
    },
    {
      attribute: 'Compositional and identity standards for named foods',
      limitType: 'descriptive',
      note: 'The closest Codex comes to quality: what a food must be to bear a name. Set in individual commodity standards; not a ranking of lots.',
    },
    {
      attribute: 'Labelling and presentation provisions',
      limitType: 'descriptive',
      note: 'Addressed in Codex labelling texts to prevent deception; unrelated to commercial grade.',
    },
    {
      attribute: 'Commercial grade of green coffee',
      limitType: 'descriptive',
      note: 'Not addressed by Codex. Green coffee grading is governed by national bodies in producing countries, international standards organisations, industry associations, and contracts.',
    },
  ],
  measurementBasis:
    'Not applicable in the grading sense: Codex sets provisions in individual texts and performs no measurement, inspection, or conformity assessment itself. Any measurement is carried out by national authorities or trading parties under whatever law or contract applies.',
  samplingContext:
    'Codex issues guidance on sampling in some of its texts, but conducts no sampling. Sampling of any consignment is done by national authorities or by trading parties under the applicable law or contract.',
  reproductionLimitations: [
    'This page explains what Codex Alimentarius is and is not; it does not reproduce any Codex standard, maximum limit, residue limit, or code of practice.',
    'Codex is a library of individually adopted and separately revised texts — there is no single edition, and "Codex" without a named text is not a citable requirement.',
    'Codex texts carry no legal force in themselves; the operative requirements for any consignment are those of the applicable national or regional law, which may follow, exceed, or ignore Codex.',
    'Codex is not a grading system: nothing on this page describes a grade, and no grade can be derived from Codex conformity.',
    'AgricultureID is not an inspection, grading, or certification authority and makes no determination about any food, lot, or consignment.',
  ],
  connections: [
    { type: 'crop', slug: 'coffee' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'sun-drying' },
  ],
  relatedTopics: [
    { type: 'commodity-grade', slug: 'unece-fresh-produce-standards' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'The Codex Alimentarius Commission, its FAO/WHO basis, mandate, and outputs',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Risk-assessment context for food contaminants addressed in food standards',
    },
    { sourceId: 'faostat', citedFor: 'Green coffee trade context' },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'International reference with no direct legal effect. Applicability depends entirely on adoption by each national or regional authority, which varies widely.',
  limitations: [
    'This is an explanatory overview of a standards framework, not a summary of any specific Codex text and not legal or regulatory advice.',
    'No Codex limits, residue values, or provisions are reproduced; consult the specific official text and the applicable national law.',
    'Codex addresses food safety, hygiene, and honest labelling rather than commercial grading; it assigns no grades to any commodity.',
    'Green coffee is the reference commodity here only to illustrate the boundary between safety standards and commercial grading; its grading systems are not Codex texts and are not described in detail on this page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Codex Alimentarius: What It Is and What It Is Not',
    description:
      'Codex Alimentarius explained: the FAO/WHO food standards reference, why it binds only where a country adopts it, and why it is not a commodity grading system.',
    keywords: [
      'Codex Alimentarius',
      'FAO WHO food standards',
      'Codex adoption',
      'SPS Agreement',
      'green coffee grading',
    ],
  },
  structuredData: { article: true },
};
