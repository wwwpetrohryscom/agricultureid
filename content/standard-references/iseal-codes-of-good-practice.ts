import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const isealCodesOfGoodPractice: StandardReferenceContent = {
  id: 'standard-reference-iseal-codes-of-good-practice',
  slug: 'iseal-codes-of-good-practice',
  contentType: 'standard-reference',
  title: 'ISEAL Codes of Good Practice',
  alternativeNames: [
    'ISEAL Alliance',
    'ISEAL Credibility Principles',
    'Standard-Setting Code',
    'Assurance Code',
  ],
  category: 'Standard',
  subcategory: 'Sustainability',
  standardClass: 'standard',
  standardDomain: 'sustainability',
  summary:
    'The ISEAL Codes of Good Practice are standards for standards. They do not say what a sustainability scheme should require — they say how a credible scheme should be built, assured, and evaluated, which is a different and unusually recursive question.',
  introduction: [
    {
      type: 'paragraph',
      text: 'ISEAL is a membership organisation for sustainability standards systems, and its Codes of Good Practice set out what credible practice looks like for such a system. The codes address three areas: how a standard should be set, how conformity to it should be assured, and how a scheme should measure and learn from its own effects. They are accompanied by a set of credibility principles articulating the values underneath — among them transparency, rigour, impartiality, accessibility, and improvement.',
    },
    {
      type: 'paragraph',
      text: 'The recursion is the point and is worth stating carefully. Every other entry in this section is a standard about production, trade, or a product. ISEAL’s codes are about the schemes themselves. They exist because sustainability certification became consequential enough that its own quality mattered — a badly written standard, assured by a compromised auditor, claiming outcomes it never measured, does real harm precisely because people rely on it. The codes are the sector’s answer to the question of who watches the watchers.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'ISEAL (formerly the ISEAL Alliance) — a membership organisation for sustainability standards systems',
    },
    {
      label: 'Subject',
      value:
        'Sustainability standards systems themselves — not production, trade, or products',
    },
    {
      label: 'The codes',
      value: 'Standard-setting, assurance, and impacts',
    },
    {
      label: 'Underpinned by',
      value:
        'Credibility principles including transparency, rigour, impartiality, and improvement',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary — a private good-practice framework with no legal force anywhere',
    },
    {
      label: 'Applies to',
      value:
        'Scheme owners, not producers — no farm is assessed against these codes',
    },
    {
      label: 'Not',
      value:
        'A sustainability standard, a certification, or a guarantee of a scheme’s effectiveness',
    },
  ],
  sections: [
    {
      id: 'the-three-codes',
      heading: 'The three codes',
      body: [
        {
          type: 'paragraph',
          text: 'Each code addresses a distinct failure mode of a standards system, and reading them as a set makes the logic visible. In broad scope terms, the standard-setting code concerns how requirements are developed: who is consulted, how stakeholders participate, how decisions are documented and reviewed. The assurance code concerns how conformity is checked: the competence and impartiality of those doing the checking, and the rigour of the process. The impacts code concerns whether the scheme measures what it is actually achieving and uses what it learns.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Standard-setting',
              description:
                'Guards against requirements written by whoever has most at stake. A standard developed without genuine stakeholder participation tends to encode the interests of whoever drafted it.',
            },
            {
              term: 'Assurance',
              description:
                'Guards against compromised verification. Requirements are only as good as the checking behind them, and an auditor paid by the audited has an obvious structural problem.',
            },
            {
              term: 'Impacts',
              description:
                'Guards against schemes that never test their own theory. A scheme can run flawlessly and achieve nothing, and without measurement nobody would know.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the impacts code is the unusual one',
          text: 'Requiring a scheme to measure and publish its own effects invites evidence that it may not be working. Few voluntary frameworks ask their members to do that, and it is the most demanding of the three commitments.',
        },
      ],
    },
    {
      id: 'what-membership-means',
      heading: 'What membership does and does not signal',
      body: [
        {
          type: 'paragraph',
          text: 'ISEAL operates membership levels, and its full membership involves independent evaluation of a scheme against the codes. That evaluation is about the scheme’s systems — how it writes standards, how it assures them, whether it measures its effects. It is not an assessment of whether the scheme’s requirements are stringent, whether its subject matter is well chosen, or whether its outcomes are good.',
        },
        {
          type: 'paragraph',
          text: 'The distinction is easy to lose and important to keep. A scheme evaluated against the codes has demonstrated that it is built and run according to recognised good practice. Two schemes both meeting the codes may set requirements of very different ambition, and the codes do not adjudicate between them. Procedural credibility is a real and necessary thing, and it is not the same as substantive stringency.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No producer is ever assessed against these codes',
          text: 'The codes apply to scheme owners. A farm cannot be ISEAL certified, no product carries an ISEAL claim, and ISEAL certifies nobody. If a claim of "ISEAL certified" is made about a product, it describes nothing that exists.',
        },
      ],
    },
    {
      id: 'why-it-matters',
      heading: 'Why a code for schemes matters at all',
      body: [
        {
          type: 'paragraph',
          text: 'The proliferation of sustainability labels created a genuine problem: buyers and consumers face many seals, cannot evaluate any of them, and have no basis for telling a rigorous scheme from a marketing device. Anyone can write a standard, certify against it, and print a seal. In a field where the claims are about things no one can verify by inspection — how a farm treats its workers, whether forest was cleared — the incentive to make cheap assurances is considerable.',
        },
        {
          type: 'paragraph',
          text: 'The codes are one answer: not a ranking of schemes and not a regulator, but a public account of what credible practice involves, against which schemes can be evaluated and by which they can be compared on process. It is a partial answer, because it addresses how schemes work rather than what they demand. But the alternative — evaluating each of hundreds of schemes on its merits, from outside, with no shared criteria — is not available to anyone.',
        },
      ],
    },
  ],
  standardBody: 'ISEAL (formerly the ISEAL Alliance)',
  standardIdentifier:
    'ISEAL Codes of Good Practice — covering standard-setting, assurance, and impacts — with the accompanying credibility principles',
  edition:
    'Edition not stated here — verify against ISEAL’s current published versions. The codes are revised, and ISEAL has restructured its codes and membership framework over time; each code carries its own version and date.',
  jurisdiction:
    'Global. A private good-practice framework for voluntary standards systems, with no legal force in any jurisdiction and no application to producers or products.',
  legalStatus: 'voluntary',
  scopeSummary:
    'Good-practice requirements for sustainability standards systems themselves, addressing how a scheme is built and run rather than what it requires of producers. In scope terms the codes cover standard-setting — stakeholder participation, consultation, decision-making, documentation, and review; assurance — the competence, impartiality, and rigour of conformity assessment; and impacts — measuring, evaluating, and learning from a scheme’s effects. They are accompanied by credibility principles including transparency, rigour, impartiality, accessibility, and improvement. The codes apply to scheme owners and never to producers or products.',
  conformityAssessment:
    'Evaluation of standards systems against the codes, within ISEAL’s membership framework, with independent evaluation associated with full membership. The assessment addresses a scheme’s systems and processes, not the stringency of its requirements or the outcomes it achieves. No producer, operation, or product is assessed against the codes at any point.',
  assessedBy:
    'ISEAL, through its membership and evaluation framework, with independent evaluation of member schemes. ISEAL certifies no producer and no product.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the ISEAL Codes of Good Practice address and why they exist. It reproduces no requirement, criterion, or provision of any code, and no credibility principle text.',
    'No version number, effective date, membership criterion, or evaluation requirement is stated here. The codes and ISEAL’s membership framework are revised and restructured; verify against ISEAL directly.',
    'The codes are publications of ISEAL and are subject to its terms. Work from the current published versions.',
    'The codes address how a scheme is built and run, not the stringency of its requirements or the outcomes it achieves. Evaluation against them is not an endorsement of a scheme’s ambition or effectiveness.',
    'No producer, operation, or product is ever assessed against these codes. There is no ISEAL certification of a farm or a product, and no product carries an ISEAL claim.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner, is not an ISEAL member, is not affiliated with ISEAL, and confers no recognition. Nothing here indicates whether any scheme is an ISEAL member or has been evaluated.',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'fairtrade-standards' },
    { type: 'standard-reference', slug: 'ifoam-family-of-standards' },
    { type: 'standard-reference', slug: 'rainforest-alliance-certification' },
    { type: 'standard-reference', slug: 'third-party-audit' },
  ],
  relatedTradeConcepts: [{ type: 'trade-concept', slug: 'non-tariff-measure' }],
  sourceReferences: [
    {
      sourceId: 'iseal',
      citedFor:
        'The Codes of Good Practice, the credibility principles, and ISEAL’s role as a membership organisation for standards systems rather than a certifier',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Context on the proliferation of voluntary sustainability standards and the comparison problem they create',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Context for credibility and due diligence in agricultural sustainability claims',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. A private framework applying to standards systems wherever they operate; it has no legal effect and no application to producers, products, or markets.',
  limitations: [
    'A description of a good-practice framework for standards systems, not the codes, and not certification or scheme-selection advice.',
    'No code requirements, credibility principles, versions, or membership criteria are reproduced; consult ISEAL directly.',
    'The codes address a scheme’s process and systems, not the stringency of its requirements; two schemes meeting them may demand very different things.',
    'No producer or product is assessed against the codes, and no ISEAL certification of a farm or product exists.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'ISEAL Codes of Good Practice: Standards for Standards',
    description:
      'What the ISEAL Codes of Good Practice cover across standard-setting, assurance, and impacts, and why no producer is assessed against them.',
    keywords: [
      'ISEAL Codes of Good Practice',
      'ISEAL Alliance',
      'credibility principles',
      'sustainability standards systems',
      'standard-setting assurance impacts',
    ],
  },
  structuredData: { article: true },
};
