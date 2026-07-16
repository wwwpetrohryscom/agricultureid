import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const globalgapIntegratedFarmAssurance: StandardReferenceContent = {
  id: 'standard-reference-globalgap-integrated-farm-assurance',
  slug: 'globalgap-integrated-farm-assurance',
  contentType: 'standard-reference',
  title: 'GLOBALG.A.P. Integrated Farm Assurance',
  alternativeNames: [
    'GLOBALG.A.P. IFA',
    'Integrated Farm Assurance standard',
    'GlobalGAP',
  ],
  category: 'Certification scheme',
  subcategory: 'Good agricultural practice',
  standardClass: 'certification-scheme',
  standardDomain: 'food-safety',
  summary:
    'Integrated Farm Assurance is GLOBALG.A.P.’s farm-level good agricultural practice scheme, covering crops, livestock, and aquaculture. It is a business-to-business scheme audited by accredited certification bodies — a supply-chain entry requirement rather than a consumer label or a legal permission to trade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Integrated Farm Assurance (IFA) is the principal standard operated by GLOBALG.A.P., a scheme owner that sets voluntary good agricultural practice requirements for primary production. It is modular by design: a set of requirements common to all farms sits beneath scope-specific modules for crops, livestock, and aquaculture, so a producer is certified against the modules that match what they actually produce rather than against a single monolithic document.',
    },
    {
      type: 'paragraph',
      text: 'What IFA is for is best understood commercially. It exists because retailers and food-service buyers wanted one audited answer to the question "is this farm managed to a defined standard?" instead of each running its own supplier audits. Certification is therefore usually a condition of market entry imposed by a buyer, not a legal requirement imposed by a state. A farm without it is not trading illegally; it is trading with a smaller set of buyers.',
    },
  ],
  keyFacts: [
    {
      label: 'Scheme owner',
      value: 'GLOBALG.A.P. (GLOBALG.A.P. c/o FoodPLUS GmbH)',
    },
    {
      label: 'Class',
      value: 'Certification scheme — a standard plus conformity assessment',
    },
    {
      label: 'Level of the chain',
      value: 'Primary production (the farm), not processing or retail',
    },
    {
      label: 'Structure',
      value:
        'Modular — common requirements plus crop, livestock, and aquaculture scopes',
    },
    {
      label: 'Legal status',
      value: 'Voluntary — a buyer requirement, never a substitute for law',
    },
    {
      label: 'Assessed by',
      value: 'Accredited third-party certification bodies, via on-farm audit',
    },
    {
      label: 'Audience',
      value: 'Business-to-business — not designed as a consumer-facing label',
    },
  ],
  sections: [
    {
      id: 'what-ifa-covers',
      heading: 'What the scheme covers',
      body: [
        {
          type: 'paragraph',
          text: 'IFA addresses how a farm is run, in scope terms: food safety and hygiene at production, traceability and segregation of certified product, worker health and safety, environmental management, and — in the relevant scopes — animal welfare. Requirements are organised so that a producer takes the module common to all farm types plus the modules for the scopes they operate, which is what allows one scheme to span an orchard, a broiler unit, and a shrimp farm without pretending those are the same business.',
        },
        {
          type: 'paragraph',
          text: 'The scheme also defines who may be certified and how. Producers may certify individually or as a producer group operating a quality management system, which is the route through which large numbers of smallholders reach certification. GLOBALG.A.P. additionally operates add-on and companion modules covering matters such as social practice, which sit alongside IFA rather than within it — a distinction that matters when a buyer specifies what it requires.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Modular, so "GLOBALG.A.P. certified" is incomplete',
          text: 'A certificate names the scope and the modules a producer was assessed against. A claim of certification without a scope does not identify what was actually audited, and two certified farms may have been assessed against materially different module sets.',
        },
      ],
    },
    {
      id: 'how-conformity-is-assessed',
      heading: 'How conformity is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'GLOBALG.A.P. does not audit farms. It sets the requirements, approves and oversees certification bodies, and operates the database and licensing infrastructure. Conformity is assessed by independent certification bodies that are approved by the scheme and accredited by a national accreditation body against the international standard for product certification bodies. That three-cornered structure — scheme owner, accredited certification body, producer — is the defining feature of third-party certification, and it is what distinguishes IFA from a buyer’s own second-party audit.',
        },
        {
          type: 'paragraph',
          text: 'Assessment is an on-farm audit against the applicable checklist, with certification decisions taken by the certification body rather than the auditor who visited. Certified producers are issued a unique identification number, which is the mechanism that lets a buyer verify a claim against the scheme’s database rather than trusting a certificate document presented to them. Where a producer group is certified, the group’s quality management system is itself audited alongside a sample of member farms.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            'Audit frequencies, validity periods, and fees are not stated here',
          text: 'Audit cycles, certificate validity, sampling rates for producer groups, and costs are set by the scheme and its approved certification bodies, and they change between versions. AgricultureID states none of them — obtain them from the scheme’s current published rules.',
        },
      ],
    },
    {
      id: 'what-it-does-not-cover',
      heading: 'What certification does not do',
      body: [
        {
          type: 'paragraph',
          text: "The boundaries are where most misunderstanding lives. IFA is a farm-level scheme: it says something about how a producer manages production, and nothing about what happened to the product after it left the farm gate unless a separate chain-of-custody arrangement carries the claim onward. It is not a legal permission to trade — a certified consignment still faces the importing country's sanitary, phytosanitary, and residue requirements, and certification does not exempt it from any of them, nor does it prevent rejection at a border.",
        },
        {
          type: 'list',
          items: [
            'Not a licence or permit — market access is determined by law, not by a certificate',
            'Not a product test — it audits management practice, not the composition of a consignment',
            'Not a quality grade — it does not rank lots or attach a price to a description',
            'Not an organic standard — organic status is a separate regulated claim',
            'Not a guarantee — an audit is a sample in time, not continuous surveillance',
            'Not consumer-facing — the scheme is designed for business-to-business assurance',
          ],
        },
        {
          type: 'paragraph',
          text: 'It is also worth being precise about what an audit can establish. A periodic audit against a checklist tests whether a farm demonstrated conformity on the day it was assessed, with the records it presented. That is genuinely useful information and it is not the same as an assurance that every consignment from that farm conforms. Treating a certificate as a guarantee rather than as evidence is the single most common error made about every scheme in this section.',
        },
      ],
    },
    {
      id: 'why-buyers-use-it',
      heading: 'Why buyers converged on one scheme',
      body: [
        {
          type: 'paragraph',
          text: 'Before schemes like IFA, a producer supplying several retailers could face several different audits testing largely the same things, each with its own paperwork. The commercial logic of a shared scheme is audit fatigue: one recognised assessment that many buyers will accept is cheaper for everyone than many bespoke ones. This is also why benchmarking and recognition arrangements between schemes matter commercially — they determine whether one audit satisfies more than one buyer.',
        },
        {
          type: 'paragraph',
          text: 'The consequence is that certification behaves less like a quality signal and more like an entry ticket. It rarely earns a premium, because it is expected rather than exceptional in the markets that require it; its value to a producer is access. That framing — a cost of doing business with certain buyers, not a marketing credential — is the honest way to read farm assurance certification generally.',
        },
      ],
    },
  ],
  standardBody: 'GLOBALG.A.P. (GLOBALG.A.P. c/o FoodPLUS GmbH), scheme owner',
  standardIdentifier: 'GLOBALG.A.P. Integrated Farm Assurance (IFA)',
  edition:
    'Edition not stated here — verify against the scheme’s current published edition. GLOBALG.A.P. issues IFA in numbered versions with defined transition periods, and the version a certificate was issued against is named on the certificate.',
  jurisdiction:
    'Global. A private voluntary scheme applied wherever a producer seeks certification; it creates no legal rights or obligations in any jurisdiction and displaces no national law.',
  legalStatus: 'voluntary',
  scopeSummary:
    'Farm-level good agricultural practice for crops, livestock, and aquaculture, assessed at primary production. In scope terms the standard addresses food safety and hygiene at production, traceability and segregation of certified product, worker health and safety, environmental management, and animal welfare in the applicable scopes. Requirements are modular: a module common to all producers plus scope-specific modules matched to what is produced.',
  conformityAssessment:
    'Third-party certification. Conformity is assessed by on-farm audit against the applicable checklist, conducted by a certification body approved by the scheme and accredited by a national accreditation body; the certification decision is taken by the certification body, not the auditor. Certification is available to individual producers and to producer groups operating an audited quality management system. Audit frequency, certificate validity, and sampling rules are set by the scheme and are not stated here.',
  assessedBy:
    'Accredited third-party certification bodies approved by GLOBALG.A.P. The scheme owner sets requirements and oversees certification bodies; it does not itself audit producers.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page summarises what Integrated Farm Assurance covers and how conformity is assessed, from public scope material. It reproduces no control point, compliance criterion, checklist item, or scheme rule, and paraphrases no requirement.',
    'GLOBALG.A.P. standards, checklists, and general regulations are copyrighted publications of the scheme owner and are subject to its licensing terms. Work from the current published version.',
    'No version number, effective date, transition deadline, audit frequency, certificate validity period, sampling rate, or fee is asserted here. These are version-specific and change; obtain them from the scheme.',
    'GLOBALG.A.P. and the scheme’s marks are the property of the scheme owner. AgricultureID is not a certification body, accreditation body, or scheme owner, is not approved by or affiliated with GLOBALG.A.P., and confers no certification, accreditation, or recognition.',
    'Nothing here indicates whether any producer, product, or consignment is certified. Certification claims are verifiable only through the scheme’s own database.',
  ],
  applicableCommodityClasses: [
    'cereal-grain',
    'fruit',
    'vegetable',
    'nut',
    'root-tuber',
    'livestock-product',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'rainforest-alliance-certification' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  sourceReferences: [
    {
      sourceId: 'globalgap',
      citedFor:
        'The scope, modular structure, and certification model of the Integrated Farm Assurance standard',
    },
    {
      sourceId: 'iseal',
      citedFor:
        'Good-practice framing for voluntary sustainability standards and their assurance systems',
    },
    {
      sourceId: 'fao',
      citedFor: 'Good agricultural practice concepts at primary production',
    },
    {
      sourceId: 'codex',
      citedFor:
        'The food hygiene and primary-production context that farm assurance schemes build upon',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Certification is available to producers in any country, but the commercial requirement to hold it is concentrated in supply chains serving European and other retail markets, and varies by buyer and product.',
  limitations: [
    'A scope summary of a voluntary private scheme, not the standard, not a checklist, and not certification advice.',
    'No control points, compliance criteria, version numbers, audit frequencies, certificate validity periods, or fees are given — these are version-specific and belong to the scheme.',
    'Certification is evidence of conformity demonstrated at audit, not a guarantee about any consignment, and it neither confers market access nor displaces the importing country’s legal requirements.',
    'Which buyers require certification, and which modules or add-ons they specify, is a commercial matter that varies by market, retailer, and product, and is not described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'GLOBALG.A.P. Integrated Farm Assurance: Scope and Limits',
    description:
      'What GLOBALG.A.P. Integrated Farm Assurance covers, its modular crop, livestock, and aquaculture scopes, and what farm certification does not do.',
    keywords: [
      'GLOBALG.A.P.',
      'Integrated Farm Assurance',
      'IFA certification',
      'good agricultural practice',
      'farm assurance audit',
    ],
  },
  structuredData: { article: true },
};
