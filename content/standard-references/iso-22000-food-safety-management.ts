import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const iso22000FoodSafetyManagement: StandardReferenceContent = {
  id: 'standard-reference-iso-22000-food-safety-management',
  slug: 'iso-22000-food-safety-management',
  contentType: 'standard-reference',
  title: 'ISO 22000 Food Safety Management',
  alternativeNames: [
    'ISO 22000',
    'Food safety management system standard',
    'FSMS standard',
  ],
  category: 'Standard',
  subcategory: 'Management system',
  standardClass: 'standard',
  standardDomain: 'management-system',
  summary:
    'ISO 22000 specifies requirements for a food safety management system for any organisation in the food chain. It wraps HACCP and prerequisite programmes inside a management-system framework — so it certifies how an organisation manages food safety, never the safety of a product.',
  introduction: [
    {
      type: 'paragraph',
      text: 'ISO 22000 is the International Organization for Standardization’s standard for food safety management systems. It is written for any organisation in the food chain regardless of size or complexity — growers, processors, transporters, storage operators, retailers, caterers, and the producers of packaging, equipment, and ingredients that feed into food production. That breadth is deliberate: food safety failures propagate along the chain, so the standard is framed to apply to anyone whose activity can affect it.',
    },
    {
      type: 'paragraph',
      text: 'What distinguishes it from HACCP alone is the management-system layer. ISO 22000 combines hazard analysis on HACCP principles with prerequisite programmes and the apparatus common to ISO management-system standards: leadership commitment, planning against risks and opportunities, defined resources and competence, documented information, communication, internal audit, management review, and continual improvement. The claim it supports is therefore about organisational capability — that food safety is systematically managed — and not about any consignment.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value: 'International Organization for Standardization (ISO)',
    },
    {
      label: 'Identifier',
      value: 'ISO 22000 — Food safety management systems',
    },
    {
      label: 'Applies to',
      value:
        'Any organisation in the food chain, of any size, including feed, packaging, and equipment suppliers',
    },
    {
      label: 'Combines',
      value:
        'HACCP principles, prerequisite programmes, and a management-system framework',
    },
    {
      label: 'Legal status',
      value: 'Voluntary — a private international standard, not law anywhere',
    },
    {
      label: 'Certified by',
      value:
        'Accredited third-party certification bodies; ISO itself certifies nobody',
    },
    {
      label: 'Certifies',
      value: 'The management system — never a product, batch, or consignment',
    },
  ],
  sections: [
    {
      id: 'what-it-covers',
      heading: 'What the standard covers',
      body: [
        {
          type: 'paragraph',
          text: 'In scope terms, ISO 22000 specifies what an organisation must have in place to plan, implement, operate, maintain, and improve a food safety management system. It requires the organisation to understand its context and interested parties, to demonstrate leadership, to plan its system around identified risks, to establish and resource operational control — including prerequisite programmes and a hazard analysis on HACCP principles — and to evaluate and improve performance through monitoring, internal audit, and management review.',
        },
        {
          type: 'paragraph',
          text: 'It shares the high-level structure common to modern ISO management-system standards, which is what allows an organisation to run it alongside quality or environmental management systems without duplicating the machinery. Two features are particular to food: the emphasis on communication both up and down the chain, since a hazard controlled at one link depends on information from another; and the explicit treatment of prerequisite programmes as the foundation on which hazard analysis is built.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A standard for a system, not a recipe for safety',
          text: 'ISO 22000 states what a food safety management system must do, not how any particular food should be made safe. The hazard analysis, the controls, and the limits remain the organisation’s own work, specific to its products and processes.',
        },
      ],
    },
    {
      id: 'certification',
      heading: 'How certification works',
      body: [
        {
          type: 'paragraph',
          text: 'ISO writes standards; it does not certify anyone, operate certification schemes, or issue certificates. Certification to ISO 22000 is carried out by independent certification bodies, which are themselves typically accredited by a national accreditation body against the international standard for bodies certifying management systems. The certificate attests that an audit found the organisation’s system conforming to the standard’s requirements at the time of assessment.',
        },
        {
          type: 'paragraph',
          text: 'Certification is not required in order to use the standard. An organisation may implement ISO 22000 and self-declare conformity, and many do — certification exists because customers want independent evidence rather than because the standard demands it. Where a certificate is required it is almost always a buyer requirement, and buyers in some markets specify schemes benchmarked to a global food-safety benchmark instead of, or in addition to, ISO 22000 itself.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Audit cycles, certificate validity, and fees are not stated here',
          text: 'The duration, frequency, and cost of certification audits and the validity period of certificates are matters for accredited certification bodies and the applicable accreditation rules. AgricultureID asserts none of them.',
        },
      ],
    },
    {
      id: 'what-certification-does-not-mean',
      heading: 'What a certificate does not mean',
      body: [
        {
          type: 'paragraph',
          text: 'The most important boundary is between system and product. A certified organisation has demonstrated that it manages food safety systematically; it has not demonstrated that any particular batch is safe, and the standard makes no such claim. A certificate cannot be attached to a consignment as evidence about that consignment, and a food safety incident at a certified site is not, by itself, evidence that certification was fraudulent — it is what the residual risk in any system looks like when it materialises.',
        },
        {
          type: 'list',
          items: [
            'Not a product certification — nothing is certified about a batch, lot, or consignment',
            'Not a legal permission — market access is set by law, not by a certificate',
            'Not a substitute for the hazard analysis — the standard requires it, it does not do it',
            'Not a quality standard — food safety and commercial quality are different questions',
            'Not continuous — an audit examines a sample of evidence at a point in time',
            'Not an ISO certificate — ISO neither certifies nor accredits anyone',
          ],
        },
      ],
    },
  ],
  standardBody: 'International Organization for Standardization (ISO)',
  standardIdentifier:
    'ISO 22000 — Food safety management systems — Requirements for any organization in the food chain',
  edition:
    'Edition not stated here — verify against ISO’s current published edition. ISO 22000 is issued in dated editions and is subject to periodic systematic review; the edition a certificate was issued against is named on the certificate.',
  jurisdiction:
    'Global. A voluntary international standard published by a private international standards organisation; it has no legal force in any jurisdiction and displaces no national food law.',
  legalStatus: 'voluntary',
  scopeSummary:
    'Requirements for a food safety management system, applicable to any organisation in the food chain regardless of size or complexity, including organisations indirectly involved such as producers of feed, packaging, equipment, and ingredients. In scope terms the standard addresses organisational context and leadership, planning, resources and competence, communication along the chain, documented information, operational control through prerequisite programmes and hazard analysis on HACCP principles, and performance evaluation, internal audit, management review, and improvement.',
  conformityAssessment:
    'Third-party certification or self-declaration. Certification is by audit of the management system against the standard’s requirements, conducted by an independent certification body typically accredited by a national accreditation body against the international standard for bodies certifying management systems. Certification is not required in order to implement the standard. Audit frequency, certificate validity, and fees are set by certification bodies and accreditation rules and are not stated here.',
  assessedBy:
    'Accredited third-party certification bodies, or the organisation itself where it self-declares conformity. ISO writes the standard and certifies nobody.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page summarises the scope and purpose of ISO 22000 from public scope material. It reproduces no clause, requirement, sub-clause, or annex of the standard, and paraphrases no requirement clause by clause.',
    'ISO standards are copyrighted publications of ISO and its national member bodies, sold under licence. The text is not freely reproducible and must be obtained from ISO or a national member body.',
    'No edition year, publication date, or revision date is asserted here, and no clause numbers are cited. Verify the current edition against ISO directly.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner, is not affiliated with ISO, and confers no certification, accreditation, or recognition.',
    'Certification is of a management system, never of a product, batch, or consignment; nothing here indicates whether any organisation is certified.',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
    { type: 'standard-reference', slug: 'third-party-audit' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
  ],
  sourceReferences: [
    {
      sourceId: 'iso',
      citedFor:
        'The scope and purpose of ISO 22000 and ISO’s role as a standards writer rather than a certifier',
    },
    {
      sourceId: 'codex',
      citedFor:
        'The HACCP principles and food hygiene foundations the standard builds upon',
    },
    {
      sourceId: 'fao',
      citedFor: 'Food safety management context along the food chain',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Adoption is a commercial decision by organisations and their buyers; the standard confers no legal status and requirements to hold certification vary by market and customer.',
  limitations: [
    'A scope summary of a copyrighted international standard, not the standard, and not certification or food-safety advice.',
    'No clauses, requirements, edition years, audit frequencies, certificate validity periods, or fees are given.',
    'Certification attests to a management system assessed at a point in time; it says nothing about any product, batch, or consignment.',
    'Which buyers accept ISO 22000, and whether they require a benchmarked scheme instead, is a commercial matter that varies by market and is not described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'ISO 22000 Food Safety Management: Scope and Limits',
    description:
      'What ISO 22000 covers, how it combines HACCP and prerequisite programmes in a management-system framework, and why it never certifies a product.',
    keywords: [
      'ISO 22000',
      'food safety management system',
      'FSMS',
      'food safety certification',
      'HACCP management system',
    ],
  },
  structuredData: { article: true },
};
