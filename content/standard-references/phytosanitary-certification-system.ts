import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const phytosanitaryCertificationSystem: StandardReferenceContent = {
  id: 'standard-reference-phytosanitary-certification-system',
  slug: 'phytosanitary-certification-system',
  contentType: 'standard-reference',
  title: 'Phytosanitary Certification System',
  alternativeNames: [
    'Export certification system',
    'Phytosanitary certification',
    'NPPO certification system',
  ],
  category: 'Conformity assessment',
  subcategory: 'Plant health',
  standardClass: 'conformity-assessment',
  standardDomain: 'plant-health',
  summary:
    'A phytosanitary certification system is the national apparatus by which an exporting country inspects consignments and issues phytosanitary certificates. It is a government-to-government assurance: one country’s plant protection organisation attesting to another’s, which is what makes it unlike every private certification in this section.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Phytosanitary certification is how plant-health assurance crosses a border. An exporting country’s national plant protection organisation examines a consignment against the importing country’s stated requirements and, if satisfied, issues a phytosanitary certificate — an official attestation, made by one government’s technical authority and addressed to another’s. The IPPC’s standards describe how such a system should be established and operated, and how certificates should be used, but the system itself is national.',
    },
    {
      type: 'paragraph',
      text: 'The structure is worth pausing on, because it is genuinely different from the private certification that dominates the rest of this section. There is no scheme owner, no accredited certification body, and no commercial relationship between the certifier and the certified. The assurance rests on an intergovernmental relationship: the importing country accepts the certificate because it accepts the competence and integrity of the issuing authority, and the entire model depends on that trust holding.',
    },
  ],
  keyFacts: [
    {
      label: 'Standards basis',
      value:
        'IPPC standards on export certification systems and on phytosanitary certificates',
    },
    {
      label: 'Operated by',
      value:
        'The exporting country’s national plant protection organisation (NPPO)',
    },
    {
      label: 'Nature of assurance',
      value:
        'Government-to-government official attestation, not a commercial certification',
    },
    {
      label: 'Assesses against',
      value: 'The importing country’s phytosanitary import requirements',
    },
    {
      label: 'Output',
      value: 'A phytosanitary certificate accompanying the consignment',
    },
    {
      label: 'Accepted by',
      value:
        'The importing country’s NPPO — which may still inspect and may still refuse',
    },
    {
      label: 'Legal status',
      value:
        'Mandatory in practice wherever an importing country requires a certificate for the pathway',
    },
  ],
  sections: [
    {
      id: 'how-the-system-works',
      heading: 'How the system works',
      body: [
        {
          type: 'paragraph',
          text: 'The chain of events runs backwards from the importing country. That country sets phytosanitary import requirements for a commodity from an origin — what pests concern it, what treatments or conditions it requires, what the certificate must declare. The exporter arranges for the consignment to meet those requirements. The exporting NPPO, or officials it authorises, verifies the consignment and the underlying conditions, and issues a certificate carrying the required declarations. On arrival, the importing NPPO checks the certificate and the consignment and decides admissibility.',
        },
        {
          type: 'paragraph',
          text: 'The IPPC standards describe what such a system needs in order to be credible: a legal basis, competent and trained officials, procedures for inspection and verification, control over certificate stock and issuance, record-keeping, and mechanisms for handling non-compliance. The point of all this apparatus is that a certificate’s value depends entirely on the system standing behind it — a document is only as good as the authority and process that produced it.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Certification attests to more than an inspection',
          text: 'A certificate is not merely a statement that someone looked at the goods. Its declarations may rest on treatments, on pest free area status, on place-of-production conditions, or on inspection during the growing season — evidence gathered long before the consignment was assembled.',
        },
      ],
    },
    {
      id: 'what-it-does-not-guarantee',
      heading: 'What a certificate does not guarantee',
      body: [
        {
          type: 'paragraph',
          text: 'A phytosanitary certificate is not an entry permit and does not oblige the importing country to admit anything. The importing NPPO retains its own authority to inspect on arrival, and it may find a pest the exporting inspection did not, may find the certificate defective or wrongly completed, or may find that requirements changed between issuance and arrival. Rejection despite a valid certificate is an ordinary feature of the system rather than a malfunction of it.',
        },
        {
          type: 'paragraph',
          text: 'It is also worth being clear about the limits of inspection as evidence. Consignment inspection is sampling: it examines a portion and infers about the whole, and the inference can fail for a low-prevalence pest. This is precisely why the system leans on conditions established upstream — pest free areas, treatments, supervised production — rather than on inspection alone. Certification is best evidence, not proof.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The certificate covers plant health only',
          text: 'It says nothing about food safety, residues, quality, grade, origin for tariff purposes, or any other admissibility question. A consignment can be certified and still fail on any of those grounds — and frequently does.',
        },
      ],
    },
    {
      id: 'why-it-is-different',
      heading: 'Why this is unlike private certification',
      body: [
        {
          type: 'paragraph',
          text: 'Every other certification described in this section is voluntary, commercial, and chosen: a producer decides to seek it, pays a certification body, and gains market access with buyers who want it. Phytosanitary certification is none of those things. Where an importing country requires it, there is no alternative route to that market; the issuer is a state authority rather than a contractor; and refusal is a regulatory outcome, not a commercial disappointment.',
        },
        {
          type: 'paragraph',
          text: 'This also changes what integrity failures mean. When a private certificate is unreliable, buyers lose confidence in a scheme. When phytosanitary certificates from a country prove unreliable, the importing country may respond against that country’s exports as a class — with intensified inspection, additional requirements, or suspension of a pathway. The consequences of fraudulent or careless certification therefore fall on exporters who had nothing to do with it, which is why NPPOs guard certificate stock and issuance so tightly.',
        },
      ],
    },
  ],
  standardBody:
    'International Plant Protection Convention (IPPC) sets the standards for export certification systems and phytosanitary certificates; the systems themselves are operated by national plant protection organisations',
  standardIdentifier:
    'Phytosanitary certification — described in the IPPC standards on export certification systems and on phytosanitary certificates',
  edition:
    'Edition not stated here — the relevant IPPC standards are adopted and revised individually and carry their own revision histories, and each country’s certification system operates under its own national legislation and procedures. Verify the current revision of the specific standard against the IPPC, and the operating rules against the relevant NPPO.',
  jurisdiction:
    'Global as a model, national in operation. Each country operates its own certification system under its own law, issuing certificates against the requirements of the importing countries its exporters serve.',
  legalStatus: 'mandatory',
  scopeSummary:
    'The national system by which an exporting country’s plant protection organisation verifies that consignments meet an importing country’s phytosanitary import requirements and issues phytosanitary certificates attesting to this. In scope terms the model covers the legal basis and competence of the issuing authority, inspection and verification procedures, the evidentiary conditions certificates may rest on such as treatments, pest free areas, and supervised production, control of certificate stock and issuance, record-keeping, and handling of non-compliance.',
  conformityAssessment:
    'Official inspection and verification by the exporting country’s NPPO or officials it authorises, against the importing country’s stated import requirements, resulting in issuance of a phytosanitary certificate. Verification is repeated independently by the importing country’s NPPO on arrival, which retains authority to inspect and to refuse admission notwithstanding a valid certificate.',
  assessedBy:
    'The exporting country’s national plant protection organisation, or officials it authorises, at export; and the importing country’s national plant protection organisation at the border. No private certification body is involved.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes how phytosanitary certification systems are structured and what a certificate does and does not attest to. It reproduces no IPPC standard, no certificate model or wording, and no national procedure.',
    'No certificate format, declaration wording, validity period, inspection rate, sampling rule, fee, or treatment specification is stated here. These are set by the IPPC standards and by national authorities and are revised.',
    'Import requirements are pathway-specific — commodity, origin, destination — and are set by the importing country’s NPPO. None are stated here, and none can be derived from this page.',
    'The legal status shown reflects that certification is a mandatory precondition wherever an importing country requires a certificate for a pathway; it is not a statement that any particular consignment requires one.',
    'AgricultureID is not a plant protection organisation, competent authority, or certification body. It inspects nothing, issues no certificate, and confers no phytosanitary status or recognition.',
  ],
  applicableCommodityClasses: [
    'cereal-grain',
    'fruit',
    'vegetable',
    'oilseed',
    'pulse',
    'nut',
    'root-tuber',
    'beverage-crop',
    'fibre',
    'spice',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'The standards for export certification systems and the role and use of phytosanitary certificates',
    },
    {
      sourceId: 'usda-aphis',
      citedFor:
        'National implementation context for phytosanitary import requirements and certification',
    },
    {
      sourceId: 'eppo',
      citedFor: 'Regional plant protection and inspection practice context',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS framework within which certification requirements operate',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a model. Systems, procedures, capacity, and reliability differ by country, and the requirements a certificate must satisfy are set individually by each importing country for each pathway.',
  limitations: [
    'A description of how certification systems work, not a guide to obtaining a certificate, and not phytosanitary, regulatory, or legal advice.',
    'No certificate wording, declarations, validity periods, fees, inspection rates, or treatment specifications are given.',
    'A certificate is plant-health evidence at issuance, not proof and not an entry permit; the importing authority may inspect and may refuse regardless.',
    'Import requirements vary by commodity, origin, and destination, and change; they must be obtained from the importing country’s NPPO for the specific pathway.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Phytosanitary Certification System: Scope and Limits',
    description:
      'How a national phytosanitary certification system issues certificates, why it is a government-to-government assurance, and why it is not an entry permit.',
    keywords: [
      'phytosanitary certification',
      'export certification system',
      'phytosanitary certificate',
      'NPPO',
      'plant health inspection',
    ],
  },
  structuredData: { article: true },
};
