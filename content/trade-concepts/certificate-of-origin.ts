import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const certificateOfOrigin: TradeConceptContent = {
  id: 'trade-concept-certificate-of-origin',
  slug: 'certificate-of-origin',
  contentType: 'trade-concept',
  title: 'Certificate of Origin',
  alternativeNames: [
    'CO',
    'Origin certificate',
    'Proof of origin',
    'Statement on origin',
  ],
  category: 'Trade concept',
  subcategory: 'Documentation',
  tradeConceptClass: 'documentation',
  summary:
    'A certificate of origin is the instrument by which a consignment’s origin is asserted to a customs authority. It exists in preferential and non-preferential forms, may be issued by a designated body or made by the exporter itself, and is evidence supporting a claim — not a determination, and not immune from being checked afterwards.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Origin is a conclusion reached by applying rules, and a conclusion has to be communicated. The certificate of origin is how: a document travelling with a consignment that asserts where the goods originate, in a form the importing authority will accept as supporting the claim being made.',
    },
    {
      type: 'paragraph',
      text: 'What it is not is a fact about the goods. The document records that someone — a designated body, or the exporter under a scheme that permits it — has stated an origin. Whether that origin is correct is a separate question, answerable by applying the rules to the production history, and the importing authority retains the ability to ask it long after the goods have gone. The certificate opens the door; it does not close the matter.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Documentation — evidence supporting an origin claim',
    },
    {
      label: 'Two families',
      value:
        'Non-preferential certificates for general purposes, and preferential proofs used to claim agreement benefits',
    },
    {
      label: 'Issued by',
      value:
        'A designated body such as a chamber of commerce or authority, or the exporter itself under self-certification schemes',
    },
    {
      label: 'Form',
      value:
        'Set by the agreement or jurisdiction relied on — there is no single international certificate',
    },
    {
      label: 'Legal effect',
      value:
        'Evidence supporting a claim, not a determination binding on the importing authority',
    },
    {
      label: 'Verification',
      value:
        'Claims can be checked after import, with duty recovered where they cannot be substantiated',
    },
    {
      label: 'Trend',
      value:
        'Newer agreements increasingly use exporter self-certification under registration, rather than third-party issuance',
    },
  ],
  sections: [
    {
      id: 'two-families',
      heading: 'Two families of proof',
      body: [
        {
          type: 'paragraph',
          text: 'The distinction between preferential and non-preferential origin runs through the documentation as much as through the rules, and the two families of proof serve different purposes and are not interchangeable.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Non-preferential certificate',
              description:
                'Asserts origin for general purposes — applying the ordinary tariff, administering quotas or trade remedies, marking requirements, or satisfying a buyer or a bank. In many countries these are issued by chambers of commerce or comparable bodies.',
            },
            {
              term: 'Preferential proof',
              description:
                'Supports a claim for reduced or zero duty under a specific agreement or unilateral scheme. Its form, its issuer, and its content are prescribed by that instrument, and a proof valid under one agreement is generally of no use under another.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'A consequence traders sometimes discover uncomfortably: holding a certificate of origin does not mean holding a preferential proof. A general certificate stating that goods are of a country’s origin does not entitle anyone to that country’s agreement rate, because the agreement specifies what evidence it accepts and a general certificate is usually not it.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A certificate is required by the regime, not by the goods',
          text: 'Whether any proof of origin is needed at all depends on what is being claimed and on the importing jurisdiction’s requirements. Many consignments move without one. The question is never "does this cargo have a certificate" but "what does the claim being made require".',
        },
      ],
    },
    {
      id: 'who-issues',
      heading: 'Who issues, and the shift to self-certification',
      body: [
        {
          type: 'paragraph',
          text: 'The traditional model is third-party issuance: the exporter applies, a designated body examines the evidence and issues a certificate, and the importing authority accepts a document that carries an institution’s stamp. The comfort is that someone independent looked.',
        },
        {
          type: 'paragraph',
          text: 'That model has been steadily displaced in newer agreements by exporter self-certification, often coupled with registration: the exporter makes a statement on origin, in a prescribed form and frequently on the invoice or another commercial document, having registered with its authorities and accepted the obligations that go with it. The burden moves from ex ante examination to ex post verification.',
        },
        {
          type: 'paragraph',
          text: 'The trade-off is deliberate. Third-party issuance is slow and costly and its assurance is thinner than it appears, since the issuer generally works from documents the exporter supplied. Self-certification is faster and cheaper, puts the responsibility on the party that actually knows the production history, and relies on audit rather than gatekeeping. It also means the exporter carries a documentary and record-keeping obligation it may not have had before.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The issuer is not warranting the goods',
          text: 'A body issuing a certificate is attesting that a claim was made and evidenced to its satisfaction under its procedures. It is not inspecting the crop, auditing the mill, or standing behind the origin against the importing authority. Where a certificate turns out to be wrong, the consequences fall on the importer and the exporter.',
        },
      ],
    },
    {
      id: 'verification',
      heading: 'Verification and its consequences',
      body: [
        {
          type: 'paragraph',
          text: 'A preferential claim is provisional in a way that traders often underestimate. The importing authority accepts the proof at the border because holding cargo to audit a supply chain is impractical — not because the claim has been established. It can be revisited.',
        },
        {
          type: 'paragraph',
          text: 'Where an agreement provides for it, the importing authority can ask the exporting country’s administration to verify a claim against the exporter’s own records. If it cannot be substantiated, the preference is withdrawn and the duty foregone is recovered — from the importer, who claimed it, rather than from the exporter, who asserted the origin. The importer’s recourse against the exporter is then a contract matter.',
        },
        {
          type: 'list',
          items: [
            'The evidence behind a claim must exist and be retained, for a period and in a form the agreement and national law specify',
            'Retention obligations fall on the exporter, whose records are what a verification examines',
            'Recovery lands on the importer, creating an exposure that outlives the transaction',
            'For fungible commodities the evidence is accounting rather than physical, which makes record-keeping the entire substance of the claim',
          ],
        },
        {
          type: 'paragraph',
          text: 'This is why preferential origin is treated as a compliance discipline rather than a paperwork step. The document at the border is the visible part of an obligation that continues for years afterwards.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'Unprocessed agricultural goods are the easiest origin case there is — wholly obtained where they grew — and for them a proof of origin is largely a formality documenting something nobody disputes. The difficulty arrives with processing and with mixing.',
        },
        {
          type: 'list',
          items: [
            'A blended bulk commodity has an origin established by records, not by anything recoverable from the material',
            'A processed product made from imported inputs originates wherever the applicable rule says, which differs by agreement',
            'A certificate of origin says nothing about plant or animal health status — those require their own official certification',
            'Consumer-facing origin labelling is governed by food law and does not use the customs definition, so a label and a certificate can legitimately name different countries',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last two points are the ones worth separating firmly. A certificate of origin is a customs instrument answering a customs question. It is not a health attestation, not a quality statement, and not a labelling compliance document. Each of those is a different regime with a different authority and a different piece of paper.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To communicate an assertion about a consignment’s origin to a customs authority, in the form the applicable regime requires, so that a tariff treatment dependent on origin can be claimed.',
  administeredBy:
    'Issued by a designated body or made by the exporter under the applicable scheme; accepted, questioned, or verified by the customs authority of the importing jurisdiction',
  governingBodies: [
    'World Customs Organization',
    'World Trade Organization',
    'The parties to each preferential agreement',
    'National customs authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what proofs of origin are and how they work. It states no form, wording, issuer, validity period, or retention requirement for any agreement or jurisdiction.',
    'A certificate is evidence supporting a claim, not a determination. The importing authority determines origin, may question a claim, and may verify it after the goods have been released.',
    'Which proof an agreement accepts is specified by that agreement. A proof valid under one instrument is generally of no use under another, and a non-preferential certificate does not support a preferential claim.',
    'A certificate of origin attests nothing about plant health, animal health, food safety, or quality, and is not a labelling compliance document. Each of those is a separate regime with its own instrument.',
  ],
  partiesInvolved: [
    'Exporter or producer asserting the origin',
    'Issuing body, where the regime uses third-party issuance',
    'Registered or approved exporter, under self-certification schemes',
    'Importer claiming the treatment',
    'Customs authority of the importing jurisdiction',
    'Exporting country’s administration, on a verification request',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'packing-list' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  connections: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Proofs of origin in customs practice, third-party issuance and self-certification models, and origin verification after release',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The distinction between preferential and non-preferential origin regimes and their separate documentary requirements',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Origin documentation requirements published by agreement and by market',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Origin certification under unilateral preference schemes and the shift toward registered exporter self-certification',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a category of instrument. Every operative detail — form, issuer, validity, retention, and verification procedure — is set by the agreement or jurisdiction relied on.',
  limitations: [
    'A description of how proofs of origin work, not a statement of any form, requirement, or procedure.',
    'No forms, validity periods, retention periods, or issuer requirements are named: they are agreement- and jurisdiction-specific and change.',
    'Whether a proof is required, and which one, depends on the claim being made and the importing jurisdiction’s rules.',
    'The document evidences an assertion; it does not establish origin, and acceptance at the border does not settle the claim.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Certificate of Origin: Evidencing an Origin Claim',
    description:
      'How proofs of origin work: preferential and non-preferential, third-party issuance versus exporter self-certification, and what a certificate does not attest.',
    keywords: [
      'certificate of origin',
      'proof of origin',
      'self-certification',
      'origin verification',
      'preferential claim',
    ],
  },
  structuredData: { article: true },
};
