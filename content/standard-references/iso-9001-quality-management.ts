import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const iso9001QualityManagement: StandardReferenceContent = {
  id: 'standard-reference-iso-9001-quality-management',
  slug: 'iso-9001-quality-management',
  contentType: 'standard-reference',
  title: 'ISO 9001 Quality Management',
  alternativeNames: [
    'ISO 9001',
    'Quality management system standard',
    'QMS standard',
  ],
  category: 'Standard',
  subcategory: 'Management system',
  standardClass: 'standard',
  standardDomain: 'management-system',
  summary:
    'ISO 9001 specifies requirements for a quality management system in any organisation. It is generic by design and says nothing about how good a product is — it addresses whether an organisation reliably delivers what it has undertaken to deliver, which is a narrower and frequently misread claim.',
  introduction: [
    {
      type: 'paragraph',
      text: 'ISO 9001 is the International Organization for Standardization’s quality management system standard, and the most widely certified management-system standard in the world. It applies to any organisation in any sector — a grain trader, a packhouse, a laboratory, a software firm, a hospital — because it specifies requirements for the system that manages quality rather than for the thing produced. That universality is the source of both its reach and the confusion surrounding it.',
    },
    {
      type: 'paragraph',
      text: 'The word "quality" in ISO 9001 does not mean excellence. It means conformity to requirements: the organisation’s ability to consistently provide products and services that meet customer and applicable regulatory requirements, and to enhance customer satisfaction through the effective operation of the system. An organisation making a deliberately basic product to a modest specification, consistently and as promised, satisfies the standard. This is a defensible definition, but it is not what most readers assume the certificate means.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value: 'International Organization for Standardization (ISO)',
    },
    {
      label: 'Identifier',
      value: 'ISO 9001 — Quality management systems',
    },
    {
      label: 'Applies to',
      value: 'Any organisation, any sector, any size — generic by design',
    },
    {
      label: '"Quality" means',
      value: 'Conformity to stated requirements, not excellence or grade',
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
      value: 'The management system — never a product or a level of quality',
    },
  ],
  sections: [
    {
      id: 'what-it-covers',
      heading: 'What the standard covers',
      body: [
        {
          type: 'paragraph',
          text: 'In scope terms, ISO 9001 specifies requirements for a quality management system where an organisation needs to demonstrate its ability to consistently provide conforming products and services, and aims to enhance customer satisfaction. It addresses the organisation’s context and interested parties, leadership and quality policy, planning including risks and opportunities and quality objectives, support in the form of resources, competence, awareness, communication and documented information, operation from requirements determination through design, external providers, production and service provision, release, and control of nonconforming output, and finally performance evaluation and improvement.',
        },
        {
          type: 'paragraph',
          text: 'It is built on a set of quality management principles — among them customer focus, leadership, engagement of people, a process approach, improvement, evidence-based decision making, and relationship management — and it uses the high-level structure shared across modern ISO management-system standards. That shared structure is why organisations commonly run ISO 9001 alongside food safety or environmental management systems on one integrated set of processes rather than three parallel bureaucracies.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Generic on purpose',
          text: 'The standard is written to apply to any organisation, so it states what a system must achieve and leaves how entirely to the organisation. This is why implementations differ so widely and why the standard cannot tell anyone how to make anything.',
        },
      ],
    },
    {
      id: 'what-certification-means',
      heading: 'What certification actually claims',
      body: [
        {
          type: 'paragraph',
          text: 'A certificate says an accredited certification body audited an organisation’s quality management system, within a defined scope, and found it conforming to the standard at that time. The scope statement on the certificate matters enormously and is routinely ignored: a certificate may cover one site, one activity, or one product line, and an organisation that is "ISO 9001 certified" may have certified a fraction of what it does.',
        },
        {
          type: 'paragraph',
          text: 'ISO writes the standard and certifies nobody. Certification bodies do the auditing and are themselves accredited by national accreditation bodies against the international standard for bodies certifying management systems. An "ISO certificate" issued by a body with no accreditation is not fraudulent as such, but it carries only the authority its issuer commands — which is the practical reason accreditation exists.',
        },
      ],
    },
    {
      id: 'why-it-matters-in-agriculture',
      heading: 'Where it fits in agricultural chains',
      body: [
        {
          type: 'paragraph',
          text: 'ISO 9001 appears throughout agricultural trade in supporting roles rather than as a food standard. Traders, inspection companies, storage and logistics operators, laboratories, and equipment suppliers hold it as general evidence of organisational competence, often because a customer’s procurement policy asks for it. It is frequently a component of a supplier-approval process rather than a food-safety control.',
        },
        {
          type: 'paragraph',
          text: 'It does not do the work of the food-specific standards. It has no hazard analysis, no hygiene requirements, no residue provisions, and no plant or animal health content. Where food safety is the question, the relevant instruments are food-safety management standards, hygiene codes, and the applicable law — and ISO 9001 alongside them is a complement, never a substitute.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Certification is not a quality claim about product',
          text: 'A certified supplier is not thereby supplying better goods, and an uncertified one is not thereby supplying worse. The certificate speaks to the system that manages conformity to requirements, and reading it as a grade or an endorsement of product quality is the standard error about this standard.',
        },
      ],
    },
  ],
  standardBody: 'International Organization for Standardization (ISO)',
  standardIdentifier: 'ISO 9001 — Quality management systems — Requirements',
  edition:
    'Edition not stated here — verify against ISO’s current published edition. ISO 9001 is issued in dated editions and is subject to periodic systematic review and revision; the edition a certificate was issued against is named on the certificate, and transition arrangements apply when a new edition is published.',
  jurisdiction:
    'Global. A voluntary international standard published by a private international standards organisation; it has no legal force in any jurisdiction.',
  legalStatus: 'voluntary',
  scopeSummary:
    'Requirements for a quality management system, applicable to any organisation regardless of sector, size, or product. In scope terms the standard addresses organisational context and interested parties, leadership and quality policy, planning around risks, opportunities, and quality objectives, support through resources, competence, awareness, communication and documented information, operation from requirements determination through design, external provision, production and service provision, release, and control of nonconforming output, and performance evaluation, internal audit, management review, and improvement. It specifies what the system must achieve and never how a product should be made.',
  conformityAssessment:
    'Third-party certification or self-declaration. Certification is by audit of the quality management system, within a stated scope, against the standard’s requirements, conducted by an independent certification body typically accredited by a national accreditation body against the international standard for bodies certifying management systems. Certification is not required in order to implement the standard. Audit frequency, certificate validity, and fees are set by certification bodies and accreditation rules and are not stated here.',
  assessedBy:
    'Accredited third-party certification bodies, or the organisation itself where it self-declares conformity. ISO writes the standard and certifies nobody.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page summarises the scope and purpose of ISO 9001 from public scope material. It reproduces no clause, requirement, sub-clause, or annex of the standard, and paraphrases no requirement clause by clause.',
    'ISO standards are copyrighted publications of ISO and its national member bodies, sold under licence. The text is not freely reproducible and must be obtained from ISO or a national member body.',
    'No edition year, publication date, revision date, or transition deadline is asserted here, and no clause numbers are cited. Verify the current edition against ISO directly.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner, is not affiliated with ISO, and confers no certification, accreditation, or recognition.',
    'Certification is of a management system within a stated scope, never of a product or a level of quality; nothing here indicates whether any organisation is certified.',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    { type: 'standard-reference', slug: 'wto-tbt-agreement' },
  ],
  relatedTradeConcepts: [{ type: 'trade-concept', slug: 'non-tariff-measure' }],
  sourceReferences: [
    {
      sourceId: 'iso',
      citedFor:
        'The scope and purpose of ISO 9001, its quality management principles, and ISO’s role as a standards writer rather than a certifier',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The role of international standards and conformity assessment in reducing technical barriers to trade',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Context for quality and management systems in agricultural supply chains',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Adoption is a commercial decision; the standard confers no legal status, and requirements to hold certification arise from customers and procurement policies rather than from law.',
  limitations: [
    'A scope summary of a copyrighted international standard, not the standard, and not certification or management advice.',
    'No clauses, requirements, edition years, audit frequencies, certificate validity periods, or fees are given.',
    '"Quality" in the standard means conformity to stated requirements, not excellence; certification is not a product quality claim or a grade.',
    'The certificate’s scope statement determines what was actually assessed, and scopes vary widely between certified organisations.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'ISO 9001 Quality Management: What Certification Claims',
    description:
      'What ISO 9001 covers, why quality means conformity to requirements rather than excellence, and why a certificate is not a product quality claim.',
    keywords: [
      'ISO 9001',
      'quality management system',
      'QMS certification',
      'ISO 9001 scope',
      'management system standard',
    ],
  },
  structuredData: { article: true },
};
