import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const haccp: StandardReferenceContent = {
  id: 'standard-reference-haccp',
  slug: 'haccp',
  contentType: 'standard-reference',
  title: 'HACCP',
  alternativeNames: [
    'Hazard Analysis and Critical Control Points',
    'HACCP system',
    'Hazard analysis',
  ],
  category: 'Standard',
  subcategory: 'Food safety system',
  standardClass: 'standard',
  standardDomain: 'food-safety',
  summary:
    'HACCP is a systematic approach to food safety that identifies the hazards of a specific product and process and controls them at the points where control matters. It is a method rather than a specification — which is why no two HACCP plans are alike, and why HACCP cannot be copied from a template.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hazard Analysis and Critical Control Points is the internationally accepted approach to managing food safety through the chain. Its principles are set out by the Codex Alimentarius Commission within the General Principles of Food Hygiene, and they have been carried into national food law and into essentially every private food-safety scheme. The approach asks a business to identify the biological, chemical, and physical hazards significant to its own product and process, determine where in that process each can be controlled, and then control, monitor, and verify at those points.',
    },
    {
      type: 'paragraph',
      text: 'The defining characteristic of HACCP is that it is preventive and specific. It replaces the older model of testing finished product — which samples a fraction of output and finds problems after they exist — with control designed into the process itself. It is also irreducibly particular: a hazard analysis is conducted on one product made one way in one facility, so a plan written for someone else’s operation is not a plan for yours. That is the point most often missed, and it is what separates HACCP from a document exercise.',
    },
  ],
  keyFacts: [
    {
      label: 'Origin of the principles',
      value:
        'Codex Alimentarius Commission, within the General Principles of Food Hygiene',
    },
    {
      label: 'Nature',
      value:
        'A method for analysing and controlling hazards — not a product specification',
    },
    {
      label: 'Hazard types addressed',
      value: 'Biological, chemical, and physical',
    },
    {
      label: 'Depends on',
      value: 'Good hygiene practices as a prerequisite base layer',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary as a Codex text; mandatory in many jurisdictions that adopted it into law',
      note: 'Status depends entirely on the jurisdiction — verify locally',
    },
    {
      label: 'Assessed by',
      value:
        'Competent authorities under national law; certification bodies under private schemes',
    },
    {
      label: 'Not',
      value:
        'A certificate issued by Codex, and not transferable between operations',
    },
  ],
  sections: [
    {
      id: 'what-haccp-is-for',
      heading: 'What HACCP is for',
      body: [
        {
          type: 'paragraph',
          text: 'HACCP exists because finished-product testing is a poor way to make food safe. Testing examines a sample; contamination is rarely uniform; and by the time a test result arrives the product exists and may have moved. HACCP shifts effort upstream, to designing and running a process in which the hazard is controlled as it is made. Testing does not disappear — it becomes one of the ways control is verified, rather than the mechanism of control itself.',
        },
        {
          type: 'paragraph',
          text: 'In scope terms, the approach requires a business to describe its product and process, identify the hazards reasonably likely to occur, determine which points in the process are critical to controlling them, establish how control is measured and what happens when it is lost, and verify that the whole arrangement works as intended and keep records showing it. Codex sets out these principles and a logical sequence for applying them; both are reproduced in the Codex text and in national instruments, and neither is reproduced here.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Good hygiene practices come first',
          text: 'HACCP is built on a base layer of good hygiene practices, and it assumes that layer is working. Hazard analysis conducted over poor fundamental hygiene produces a plan trying to control at critical points what should never have arrived in the first place.',
        },
      ],
    },
    {
      id: 'why-it-cannot-be-copied',
      heading: 'Why a HACCP plan cannot be borrowed',
      body: [
        {
          type: 'paragraph',
          text: 'A hazard analysis is an argument about a particular operation: this product, this formulation, this equipment, this layout, these suppliers, these people, this intended use, this consumer. Change any of them and the significant hazards, the points at which they can be controlled, and the appropriate monitoring can all change. Two plants making nominally the same product can legitimately arrive at different plans, and both can be right.',
        },
        {
          type: 'paragraph',
          text: 'This is why generic HACCP templates are treated with suspicion by auditors and authorities alike. A template can structure the work, and sector guides can inform it, but the analysis itself has to be done on the operation it governs, by people who know it, and revisited when the operation changes. A plan that has not changed while the process has is evidence that the analysis stopped.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'AgricultureID gives no HACCP plan and no critical limits',
          text: 'No hazard analysis, critical control point, critical limit, monitoring procedure, or corrective action is given for any product or process anywhere on this platform. Those are the output of an analysis of a specific operation, competently conducted, and no reference page can supply them.',
        },
      ],
    },
    {
      id: 'legal-status',
      heading: 'Legal status varies sharply',
      body: [
        {
          type: 'paragraph',
          text: 'The Codex text stating the HACCP principles is voluntary, like every Codex text. But HACCP is unusual among the subjects in this section in how thoroughly it has been adopted into binding law. Many jurisdictions require food businesses to operate procedures based on HACCP principles, and requirements often differ by sector, by business size, and by the risk of the product — with exemptions or lighter regimes in some cases.',
        },
        {
          type: 'paragraph',
          text: 'The honest answer to "is HACCP mandatory?" is therefore: it depends entirely on where you are and what you make, and the question can only be answered against the applicable national law. This page classifies HACCP as voluntary because that describes the Codex text it summarises. It should not be read as a statement that any business is free of a legal HACCP obligation.',
        },
      ],
    },
    {
      id: 'assessment-and-limits',
      heading: 'Who assesses it, and what it does not cover',
      body: [
        {
          type: 'paragraph',
          text: 'There is no such thing as Codex HACCP certification. Where HACCP is assessed, it is assessed either by the competent authority enforcing national food law, or by a certification body auditing against a private scheme — such as a food-safety management system standard or a retailer-recognised scheme — that has incorporated HACCP into its requirements. A "HACCP certificate" issued outside a recognised scheme carries only whatever authority its issuer has.',
        },
        {
          type: 'list',
          items: [
            'Not a quality system — HACCP addresses safety hazards, not commercial quality or grade',
            'Not a substitute for good hygiene practices — it presupposes them',
            'Not a guarantee — it manages identified hazards, it does not abolish risk',
            'Not a Codex certification — Codex certifies nobody',
            'Not portable — a plan governs the operation it was written for',
            'Not static — it requires revalidation when the product, process, or hazard picture changes',
          ],
        },
      ],
    },
  ],
  standardBody:
    'Codex Alimentarius Commission — the HACCP principles are set out within the Codex General Principles of Food Hygiene',
  standardIdentifier:
    'HACCP — as set out by Codex within the General Principles of Food Hygiene (CXC 1-1969)',
  edition:
    'Edition not stated here — the HACCP principles are published within the Codex General Principles of Food Hygiene, which has been revised since its original adoption. Verify the current revision against the Commission’s official publication, and note that national instruments adopting HACCP have their own versions and dates.',
  jurisdiction:
    'Global as a Codex reference. Legal force exists only where a jurisdiction has adopted HACCP-based requirements into law, which many have done — with scope, sectoral coverage, and exemptions that differ by jurisdiction.',
  legalStatus: 'voluntary',
  scopeSummary:
    'A systematic preventive approach to food safety, applicable across the food chain, in which a business identifies the biological, chemical, and physical hazards significant to its own product and process, determines the points at which those hazards can be controlled, and establishes monitoring, corrective action, verification, and record-keeping around those points. Scope is the safety of a specific operation; the approach is a method rather than a set of product requirements.',
  conformityAssessment:
    'None at the Codex level. In practice, assessment happens either through official control by a competent authority enforcing national food law, or through third-party audit against a private scheme that incorporates HACCP into its requirements. Verification of the plan itself is an ongoing obligation of the food business, not an external event.',
  assessedBy:
    'National or regional competent authorities under adopted food law; certification bodies auditing private food-safety schemes. The Codex Alimentarius Commission assesses and certifies nothing.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what HACCP is for and how it is structured in scope terms. It does not reproduce the Codex HACCP principles, the application sequence, or any provision of the Codex text or of any national instrument.',
    'No hazard analysis, critical control point, critical limit, monitoring procedure, corrective action, or verification activity is given for any product or process. These are the output of an analysis of a specific operation and cannot be supplied by a reference page.',
    'Codex texts are copyrighted publications of FAO and WHO. Work from the official text in the revision in force.',
    'The legal status of HACCP differs sharply by jurisdiction, sector, and business size. The classification of the Codex text as voluntary here is not a statement that any business lacks a legal HACCP obligation.',
    'AgricultureID is not a certification body, accreditation body, scheme owner, or competent authority, and confers no HACCP certification or recognition. No Codex HACCP certification exists.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'third-party-audit' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
  ],
  sourceReferences: [
    {
      sourceId: 'codex',
      citedFor:
        'The HACCP principles as set out within the Codex General Principles of Food Hygiene',
    },
    {
      sourceId: 'fao',
      citedFor: 'HACCP as a preventive food-safety management approach',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Hazard identification and risk-assessment context underlying hazard analysis',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as an approach. Legal requirements based on HACCP exist in many jurisdictions but differ in scope, sectoral coverage, and exemptions; the applicable obligation is always the local one.',
  limitations: [
    'A description of an approach, not the Codex text, not a HACCP plan, and not food-safety or legal advice.',
    'No principles, application steps, critical limits, or monitoring procedures are reproduced or supplied.',
    'A HACCP plan is specific to one product, process, and site; nothing here can be applied to an operation without that operation’s own analysis.',
    'Whether HACCP is legally required, and in what form, depends on jurisdiction, sector, and business size, and is not stated here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'HACCP: What the Approach Covers and What It Cannot Do',
    description:
      'What HACCP is for, why hazard analysis is specific to one product and process, how it depends on good hygiene practices, and who assesses conformity.',
    keywords: [
      'HACCP',
      'hazard analysis critical control points',
      'food safety system',
      'critical control point',
      'preventive food safety',
    ],
  },
  structuredData: { article: true },
};
