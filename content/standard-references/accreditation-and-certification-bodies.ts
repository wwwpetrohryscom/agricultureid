import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const accreditationAndCertificationBodies: StandardReferenceContent = {
  id: 'standard-reference-accreditation-and-certification-bodies',
  slug: 'accreditation-and-certification-bodies',
  contentType: 'standard-reference',
  title: 'Accreditation and Certification Bodies',
  alternativeNames: [
    'Accreditation body',
    'Certification body',
    'Conformity assessment bodies',
    'ISO/IEC 17065',
  ],
  category: 'Conformity assessment',
  subcategory: 'Management system',
  standardClass: 'conformity-assessment',
  standardDomain: 'management-system',
  summary:
    'Certification bodies assess producers; accreditation bodies assess certification bodies. The distinction is not bureaucratic decoration — it exists because whoever pays the auditor has an interest in the answer, and accreditation is the structural response to that problem.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almost every scheme described in this section relies on the same institutional architecture, and it has three levels rather than two. A scheme owner writes the standard. A certification body audits producers against it and issues certificates. An accreditation body assesses the certification body — its competence, its impartiality, its procedures — against an international standard for bodies of that type. Each level checks the one below, and the separation between them is the whole design.',
    },
    {
      type: 'paragraph',
      text: 'The reason for the third level is an uncomfortable one that the system does not hide. A certification body is paid by the organisations it certifies. That is a conflict of interest in its plainest form: the auditor’s customer wants a certificate, and an auditor who refuses too many may find its customers going elsewhere. No amount of professional integrity abolishes that pressure, so the architecture answers it structurally instead — with an independent body, not paid by the producer, examining whether the certifier is actually doing its job.',
    },
  ],
  keyFacts: [
    {
      label: 'Three levels',
      value:
        'Scheme owner writes; certification body audits producers; accreditation body assesses the certification body',
    },
    {
      label: 'Certification body',
      value: 'Assesses producers or organisations and issues certificates',
    },
    {
      label: 'Accreditation body',
      value:
        'Assesses the competence and impartiality of certification bodies — usually one per country',
    },
    {
      label: 'Relevant standards',
      value:
        'ISO/IEC 17065 for product certification, ISO/IEC 17021-1 for management systems, ISO/IEC 17025 for laboratories, ISO/IEC 17011 for accreditation bodies',
    },
    {
      label: 'Underlying problem',
      value: 'The certification body is paid by the party it certifies',
    },
    {
      label: 'International recognition',
      value:
        'Multilateral arrangements between accreditation bodies support cross-border acceptance',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary in general, but mandatory where a regulator requires accredited certification',
    },
  ],
  sections: [
    {
      id: 'who-does-what',
      heading: 'Who does what',
      body: [
        {
          type: 'paragraph',
          text: 'The roles are easily confused, and the vocabulary invites it. A certification body issues certificates to organisations — a farm, a processor, a trader. An accreditation body issues no certificates to producers at all; it accredits certification bodies, and its customers are those bodies rather than the farms they audit. Accreditation bodies are typically national, and a country usually has one recognised for a given field, which is why accreditation is a thinner and more institutional layer than certification.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Scheme owner',
              description:
                'Writes the standard and the scheme rules. May approve certification bodies to operate the scheme, but generally does not audit producers itself.',
            },
            {
              term: 'Certification body',
              description:
                'Audits producers or organisations against the standard and takes certification decisions. Paid by the certified party — hence the impartiality problem.',
            },
            {
              term: 'Accreditation body',
              description:
                'Assesses whether a certification body is competent, impartial, and operating correctly, against the applicable international standard. Independent of the producers entirely.',
            },
            {
              term: 'Competent authority',
              description:
                'Where a claim is regulated, the public body that approves and supervises control bodies. It occupies the accreditation position, or works alongside it.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Accreditation is not certification',
          text: 'An accredited certification body has been assessed as competent to certify. It has not been certified, and the farms it certifies are not accredited. The words are not interchangeable, and mixing them makes claims incoherent.',
        },
      ],
    },
    {
      id: 'the-impartiality-problem',
      heading: 'The impartiality problem',
      body: [
        {
          type: 'paragraph',
          text: 'The international standards governing certification bodies devote substantial attention to impartiality, and the reason is the commercial relationship at the heart of the model. A certification body that consults for an organisation and then certifies it is marking its own homework. One whose revenue depends heavily on a single client has an obvious exposure. One whose auditors are rewarded for throughput rather than accuracy has a subtler one. These pressures are structural, they are known, and the standards require bodies to identify and manage them rather than to claim they do not exist.',
        },
        {
          type: 'paragraph',
          text: 'Accreditation is the external check on whether that management is real. An accreditation body assesses the certification body’s procedures, competence, decision-making, and independence, and witnesses audits in the field. The candid way to describe the result is that accreditation makes the conflict manageable rather than absent — it does not abolish the fact that the auditor is paid by the audited, and no assurance model in commercial use has solved that problem outright.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Unaccredited certification is not automatically worthless — but it is unchecked',
          text: 'Anyone may set up as a certifier and issue impressive documents. Without accreditation there is no independent assessment of whether that body is competent or impartial, and the certificate carries only the authority its issuer commands.',
        },
      ],
    },
    {
      id: 'cross-border-recognition',
      heading: 'Why it works across borders',
      body: [
        {
          type: 'paragraph',
          text: 'Accreditation is national, but trade is not. A buyer in one country receiving a certificate issued by a body accredited in another has no direct way to evaluate that foreign accreditation body. The answer is multilateral arrangements among accreditation bodies, through which signatories evaluate one another and agree to recognise each other’s accreditations — so that an accreditation in one signatory country is accepted in the others.',
        },
        {
          type: 'paragraph',
          text: 'This is what makes the phrase "accepted once, accepted everywhere" more than an aspiration, and it connects directly to the WTO TBT Agreement’s encouragement of recognition of other members’ conformity assessment results. Without such arrangements, every export would face re-testing and re-certification at destination — a barrier as effective as a tariff and considerably harder to negotiate away.',
        },
      ],
    },
    {
      id: 'limits',
      heading: 'What accreditation does not deliver',
      body: [
        {
          type: 'list',
          items: [
            'Not a guarantee of any certificate — it assesses the body, not each certification decision',
            'Not a product or safety claim — it says nothing about any farm, product, or consignment',
            'Not a global authority — accreditation is national, extended across borders by agreement',
            'Not applicable to every scheme — some schemes approve certifiers themselves, without third-party accreditation',
            'Not a solution to the conflict of interest — it manages a structural problem it cannot remove',
          ],
        },
        {
          type: 'paragraph',
          text: 'The first point is the one worth holding. An accreditation body assesses a certification body periodically, examining procedures and sampling its work. It does not review every audit or ratify any individual certificate. A certificate from an accredited body was issued by an organisation assessed as competent — which is a meaningful thing to know and is not the same as a warranty that this particular certificate was correctly issued.',
        },
      ],
    },
  ],
  standardBody:
    'No single body. Certification and accreditation bodies operate against international conformity-assessment standards published by ISO and IEC; accreditation bodies are national, and cross-border recognition rests on multilateral arrangements among them.',
  standardIdentifier:
    'International conformity-assessment standards — including ISO/IEC 17065 for bodies certifying products, processes, and services; ISO/IEC 17021-1 for bodies auditing management systems; ISO/IEC 17025 for testing and calibration laboratories; and ISO/IEC 17011 for accreditation bodies',
  edition:
    'Edition not stated here — verify against ISO’s current published editions. Each of these standards is issued in dated editions subject to periodic systematic review, and the accreditation arrangements referencing them are revised independently.',
  jurisdiction:
    'Global as a model, national in operation. Accreditation bodies operate under national arrangements; cross-border acceptance rests on multilateral recognition arrangements between them, and on whether a scheme or regulator requires accredited certification.',
  legalStatus: 'voluntary',
  scopeSummary:
    'The institutional architecture of third-party conformity assessment, and the international standards governing the bodies within it. In scope terms this covers the roles and separation of scheme owner, certification body, and accreditation body; the requirements applying to bodies that certify products, processes, and services, that audit management systems, and that test or calibrate; the requirements applying to accreditation bodies themselves; the management of impartiality and competence, given that certification bodies are paid by the parties they certify; and the multilateral arrangements through which accreditations are recognised across borders.',
  conformityAssessment:
    'Layered, and recursive by design. Certification bodies assess producers and organisations against a standard. Accreditation bodies assess certification bodies against the applicable international standard for bodies of that type, examining competence, impartiality, procedures, and decision-making, and witnessing audits. Accreditation bodies are in turn peer-evaluated by one another under multilateral recognition arrangements. Assessment at each level is periodic and sample-based; no level ratifies every individual decision of the level below.',
  assessedBy:
    'Producers by certification bodies; certification bodies by national accreditation bodies; accreditation bodies by their peers under multilateral recognition arrangements. Where a claim is regulated, a competent authority may approve and supervise control bodies instead of, or alongside, accreditation.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes the architecture of conformity assessment and the roles within it. It reproduces no clause, requirement, or provision of ISO/IEC 17065, ISO/IEC 17021-1, ISO/IEC 17025, ISO/IEC 17011, or any other standard.',
    'ISO and IEC standards are copyrighted publications sold under licence by ISO, IEC, and their national member bodies. No edition year is asserted and no clause is cited; obtain the texts from ISO, IEC, or a national member body.',
    'No accreditation body, certification body, scheme, or multilateral arrangement is named or endorsed here, and no statement is made about the accreditation status of any body.',
    'Accreditation assesses a certification body periodically and on a sample basis. It ratifies no individual certificate, and nothing here indicates that any certificate was correctly issued.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner. It is not accredited by anyone, accredits nobody, certifies nobody, and confers no recognition of any kind.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'ifoam-family-of-standards' },
    { type: 'standard-reference', slug: 'iseal-codes-of-good-practice' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    { type: 'standard-reference', slug: 'usda-national-organic-program' },
    { type: 'standard-reference', slug: 'wto-tbt-agreement' },
  ],
  relatedTradeConcepts: [{ type: 'trade-concept', slug: 'non-tariff-measure' }],
  sourceReferences: [
    {
      sourceId: 'iso',
      citedFor:
        'The international conformity-assessment standards for certification bodies, laboratories, and accreditation bodies, and the structure of conformity assessment',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The TBT Agreement’s treatment of conformity assessment procedures and recognition of other members’ results',
    },
    {
      sourceId: 'iseal',
      citedFor:
        'Good practice in assurance systems, impartiality, and the credibility of conformity assessment',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a model. Accreditation is organised nationally and extended across borders by multilateral recognition arrangements; coverage, and whether a scheme or regulator requires accredited certification, vary.',
  limitations: [
    'A description of an institutional model and the standards behind it, not those standards, and not certification, accreditation, or legal advice.',
    'No clauses, requirements, or edition years are reproduced; obtain the conformity-assessment standards from ISO, IEC, or a national member body.',
    'Accreditation assesses a body periodically and by sampling; it warrants no individual certificate and says nothing about any farm, product, or consignment.',
    'Not every scheme uses third-party accreditation — some approve certifiers themselves — and no scheme or body is named or evaluated here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Accreditation and Certification Bodies: Who Checks Whom',
    description:
      'How scheme owners, certification bodies, and accreditation bodies divide conformity assessment, and why impartiality is structurally hard.',
    keywords: [
      'accreditation body',
      'certification body',
      'ISO/IEC 17065',
      'conformity assessment',
      'impartiality certification',
    ],
  },
  structuredData: { article: true },
};
