import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const thirdPartyAudit: StandardReferenceContent = {
  id: 'standard-reference-third-party-audit',
  slug: 'third-party-audit',
  contentType: 'standard-reference',
  title: 'Third-Party Audit',
  alternativeNames: [
    'Independent audit',
    'External audit',
    'First, second, and third-party audit',
    'Conformity audit',
  ],
  category: 'Conformity assessment',
  subcategory: 'Management system',
  standardClass: 'conformity-assessment',
  standardDomain: 'management-system',
  summary:
    'A third-party audit is an assessment by an organisation independent of both the audited party and its customer. It is the mechanism behind nearly every certificate in agricultural trade — and understanding what an audit can and cannot establish is the difference between reading a certificate correctly and over-reading it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Audits are classified by who conducts them relative to who is audited. A first-party audit is internal: an organisation examining itself. A second-party audit is conducted by an interested party — typically a customer auditing its supplier. A third-party audit is conducted by an organisation independent of both, with no commercial stake in the outcome beyond its own reputation and the fee for the work. That independence is what makes the third-party model the basis of certification.',
    },
    {
      type: 'paragraph',
      text: 'Its commercial logic is straightforward. Before independent certification, a producer supplying twenty retailers could face twenty second-party audits testing much the same things, each with its own paperwork, and each buyer had to fund an audit function it had no comparative advantage in running. One independent audit that many buyers accept is cheaper for everyone. The whole architecture of agricultural assurance — schemes, certification bodies, accreditation — is an elaboration of that basic efficiency argument.',
    },
  ],
  keyFacts: [
    {
      label: 'First party',
      value: 'Internal audit — an organisation examining itself',
    },
    {
      label: 'Second party',
      value:
        'An interested party auditing another — typically a customer auditing a supplier',
    },
    {
      label: 'Third party',
      value:
        'An independent organisation with no stake in the outcome — the basis of certification',
    },
    {
      label: 'Evidence type',
      value: 'A sample of records and observations at a point in time',
    },
    {
      label: 'Establishes',
      value:
        'That conformity was demonstrated at audit — not that it is continuous',
    },
    {
      label: 'Announced or unannounced',
      value:
        'Announced audits see prepared operations; unannounced audits see ordinary ones',
    },
    {
      label: 'Cannot',
      value: 'Detect a determined, well-documented fraud reliably',
    },
  ],
  sections: [
    {
      id: 'what-an-audit-is',
      heading: 'What an audit actually does',
      body: [
        {
          type: 'paragraph',
          text: 'An audit gathers evidence against defined criteria and reaches a conclusion. The auditor examines records, observes the operation, interviews people, and samples — because examining everything is impossible in any operation of consequence. Findings are recorded, non-conformities are raised and graded by seriousness, and a certification decision follows, taken in a properly structured body by someone other than the auditor who attended.',
        },
        {
          type: 'paragraph',
          text: 'The word "sample" is doing enormous work in that description and is the source of most over-reading. An auditor spending a day or two at a site sees a fraction of its records, a fraction of its activity, and none of the fifty-one weeks they were not there. What an audit establishes is that, on the evidence sampled, the operation demonstrated conformity at that time. That is genuinely valuable — it is far better than nothing and far better than self-assertion — and it is not a warranty of anything continuous.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A certificate is evidence, not a guarantee',
          text: 'An incident at a certified site is not, by itself, proof that the audit was corrupt or negligent. Sampling has residual risk by construction, and residual risk sometimes materialises. Treating every failure as scandal misunderstands what the mechanism ever claimed.',
        },
      ],
    },
    {
      id: 'what-audits-are-bad-at',
      heading: 'What audits are structurally bad at',
      body: [
        {
          type: 'paragraph',
          text: 'Being clear about the weaknesses is more useful than cataloguing the strengths, because the weaknesses are where reliance goes wrong. Audits are weakest against deliberate, prepared deception. An operation that knows when the auditor is coming can present a version of itself; records can be constructed; workers can be coached. The audit examines what is presented, and a sufficiently determined fraud is a documentation exercise — which is precisely the exercise an audit is least equipped to see through.',
        },
        {
          type: 'list',
          items: [
            'Announced audits see a prepared operation — which is not the operation as it usually runs',
            'Records can be constructed; an audit that examines records examines what was written',
            'Sampling misses low-frequency problems by construction, not by carelessness',
            'Auditor competence varies, and a checklist cannot substitute for judgement',
            'Commercial pressure exists wherever the auditor is paid by the audited',
            'A snapshot cannot evidence conditions between audits, which is most of the year',
          ],
        },
        {
          type: 'paragraph',
          text: 'Unannounced auditing is the main structural answer to the first of these, and it is meaningfully harder to prepare for. It is also more expensive, more disruptive, and unpopular with audited parties, which is why schemes vary in how much of it they require. There is a genuine trade-off here between assurance quality and cost, and schemes resolve it differently — which is one reason two certificates are not necessarily comparable.',
        },
      ],
    },
    {
      id: 'independence',
      heading: 'Independence and its limits',
      body: [
        {
          type: 'paragraph',
          text: 'Third-party independence means the auditing organisation is separate from the audited party and from its customers. It does not mean disinterested in the ordinary sense, because the audited party pays. The conformity-assessment standards therefore treat impartiality as a risk to be identified and managed — barring consultancy to audited clients, limiting dependence on any single client, separating the audit from the certification decision — and accreditation exists to check that this management is real.',
        },
        {
          type: 'paragraph',
          text: 'The honest summary is that third-party audit is the best generally available mechanism for verifying claims that cannot be read off a product, and that its independence is structural rather than perfect. That is not a reason to dismiss it. It is a reason to read a certificate as what it is — periodic, sampled evidence gathered by a body with a managed conflict of interest — rather than as the guarantee the word "certified" invites people to assume.',
        },
      ],
    },
  ],
  standardBody:
    'No single body. Third-party audit is a conformity-assessment model rather than a document; the requirements applying to bodies conducting it are set out in international conformity-assessment standards published by ISO and IEC, and in individual schemes’ own rules.',
  standardIdentifier:
    'Third-party audit — a conformity-assessment model; requirements for the bodies conducting it are set in international conformity-assessment standards',
  edition:
    'Edition not stated here — third-party audit is a model, not a versioned document. The international conformity-assessment standards governing the bodies that conduct it are issued in dated editions subject to periodic review, and each scheme’s audit rules carry their own versions. Verify against ISO or the scheme concerned.',
  jurisdiction:
    'Global as a model. Third-party audit has no legal force of its own; obligations to undergo it arise from schemes, from buyers, or from regulators that require accredited or approved certification.',
  legalStatus: 'voluntary',
  scopeSummary:
    'The conformity-assessment model in which an organisation independent of both the audited party and its customers assesses conformity against defined criteria. In scope terms this covers the distinction between first-party, second-party, and third-party audit; the gathering of evidence by sampling records, observation, and interview; the raising and grading of non-conformities; the separation of the audit from the certification decision; announced and unannounced auditing; and the management of impartiality where the auditor is paid by the audited party. It is a model rather than a standard, and it establishes what was demonstrated at a point in time.',
  conformityAssessment:
    'This entry describes conformity assessment itself. In the third-party model, an independent body gathers evidence against defined criteria by sampling records, observing the operation, and interviewing personnel; non-conformities are raised and graded; and a certification decision is taken separately from the audit. Assessment is periodic and sample-based by construction. Audit frequency, duration, sampling rates, the balance of announced and unannounced visits, and fees are set by the applicable scheme or standard and are not stated here.',
  assessedBy:
    'Independent certification bodies, typically accredited by a national accreditation body against the applicable international standard, or approved by a scheme owner. The audited party is the client; the certification decision is taken within the certification body rather than by the attending auditor.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes the third-party audit model and its structural limitations. It reproduces no clause, requirement, or provision of any conformity-assessment standard or scheme audit rule.',
    'ISO and IEC standards are copyrighted publications sold under licence. No edition year is asserted and no clause is cited; obtain the texts from ISO, IEC, or a national member body.',
    'No audit frequency, duration, sampling rate, non-conformity grading, certificate validity period, or fee is stated here. These are set by individual schemes and standards, differ between them, and are revised.',
    'An audit establishes that conformity was demonstrated on sampled evidence at a point in time. Nothing here suggests that a certificate guarantees continuous conformity, or that any certified operation conforms.',
    'AgricultureID is not a certification body, accreditation body, scheme owner, or auditor. It audits nobody, certifies nobody, and confers no recognition of any kind.',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'fairtrade-standards' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iseal-codes-of-good-practice' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'rainforest-alliance-certification' },
  ],
  relatedTradeConcepts: [{ type: 'trade-concept', slug: 'non-tariff-measure' }],
  sourceReferences: [
    {
      sourceId: 'iso',
      citedFor:
        'Conformity-assessment concepts, the classification of audit types, and the requirements applying to bodies conducting third-party certification',
    },
    {
      sourceId: 'iseal',
      citedFor:
        'Good practice in assurance systems, including audit rigour, impartiality, and the limits of sampled evidence',
    },
    {
      sourceId: 'globalgap',
      citedFor:
        'An applied example of third-party audit in farm-level certification',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The treatment of conformity assessment procedures and recognition of results under the TBT Agreement',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a model, used wherever certification operates. The rigour of auditing, the balance of announced and unannounced visits, and the strength of oversight vary by scheme and by certification body.',
  limitations: [
    'A description of a conformity-assessment model, not any standard or scheme rule, and not audit or certification advice.',
    'No audit frequencies, durations, sampling rates, non-conformity gradings, or fees are given — these belong to individual schemes and standards.',
    'An audit is periodic, sampled evidence; it cannot establish continuous conformity and is structurally weak against prepared, well-documented deception.',
    'Independence in the third-party model is structural rather than absolute, since the audited party pays; impartiality is managed rather than eliminated.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Third-Party Audit: What It Establishes and What It Cannot',
    description:
      'How first, second, and third-party audits differ, why certification rests on sampled evidence at a point in time, and what auditing cannot detect.',
    keywords: [
      'third-party audit',
      'second-party audit',
      'certification audit',
      'unannounced audit',
      'audit sampling limitations',
    ],
  },
  structuredData: { article: true },
};
