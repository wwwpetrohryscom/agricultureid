import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const organicCertification: StandardReferenceContent = {
  id: 'standard-reference-organic-certification',
  slug: 'organic-certification',
  contentType: 'standard-reference',
  title: 'Organic Certification',
  alternativeNames: [
    'Organic control system',
    'Certified organic',
    'Organic inspection and certification',
  ],
  category: 'Certification scheme',
  subcategory: 'Organic',
  standardClass: 'certification-scheme',
  standardDomain: 'organic',
  summary:
    'Organic certification is the mechanism by which an unverifiable production claim is made checkable. Organic status cannot be tested for in a product — it is a claim about how something was produced — so certification substitutes an audited paper trail for a laboratory result.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Organic certification exists to solve a specific epistemic problem. Most product claims can be verified by examining the product: a residue can be measured, a protein content assayed, a defect counted. Organic cannot. Organically and conventionally grown produce of the same variety are, in the general case, not distinguishable by analysis of the goods themselves. The claim is about a process — what was and was not applied, over years, on a particular piece of land — and the process is long finished by the time anyone wants to check.',
    },
    {
      type: 'paragraph',
      text: 'Certification is the answer to that problem, and it explains the shape of every organic control system in the world. Because you cannot test the product, you must audit the production: inspect the land, examine the records, trace the inputs, verify the volumes sold against the volumes that could plausibly have been grown, and repeat it periodically. Organic certification is therefore unusually document-heavy and unusually dependent on the integrity of the operator, and its fraud profile follows directly from that.',
    },
  ],
  keyFacts: [
    {
      label: 'Nature of the claim',
      value: 'A production-process claim, not a product attribute',
    },
    {
      label: 'Why certification is needed',
      value:
        'Organic status is generally not detectable by analysing the product',
    },
    {
      label: 'Core mechanism',
      value:
        'Inspection of land and operation, plus audit of records and input and output traceability',
    },
    {
      label: 'Legal status',
      value:
        'Mandatory where the organic label is regulated — many major markets regulate it',
      note: 'Status depends entirely on jurisdiction; verify locally',
    },
    {
      label: 'Assessed by',
      value:
        'Approved or accredited control bodies, supervised by a competent authority where regulated',
    },
    {
      label: 'Conversion',
      value:
        'Land typically requires a conversion period before output may be sold as organic',
    },
    {
      label: 'Not',
      value: 'A safety claim, a quality grade, or a residue guarantee',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How a control system works',
      body: [
        {
          type: 'paragraph',
          text: 'In scope terms, an organic control system typically requires an operator to register with a control body, to describe its operation and the land it uses, to keep records of inputs purchased and applied, of production, and of sales, and to submit to periodic inspection. The inspector examines the physical operation and the records together, and the certification decision rests on whether the whole picture is coherent — not on any single observation.',
        },
        {
          type: 'paragraph',
          text: 'Two mechanisms carry disproportionate weight. Conversion means that land does not become organic the day a farmer stops applying prohibited inputs; a defined period must elapse first, during which the land is farmed organically but its output cannot be sold as organic. Mass balance means checking that an operator could actually have produced what it sold: if the records show more organic output leaving than the certified area could plausibly have grown, something has entered from outside the system. Mass balance is the single most important fraud control in organic, and it is arithmetic rather than chemistry.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why conversion periods exist',
          text: 'Soil does not reset instantly, and an immediate switch would let an operator capture the organic premium from land farmed conventionally until yesterday. The conversion period is both an agronomic measure and an integrity one — and it is a real economic cost, which is why it is a barrier to entry.',
        },
      ],
    },
    {
      id: 'where-it-is-regulated',
      heading: 'Regulated in some markets, private in others',
      body: [
        {
          type: 'paragraph',
          text: 'Organic occupies an unusual middle position among the schemes in this section. In many major markets the word "organic" on a label is legally protected: a public regulation defines what may be called organic, requires certification by an approved control body, and makes an unverified claim an offence. In those markets organic certification is not a voluntary buyer requirement at all — it is a legal precondition for using the word.',
        },
        {
          type: 'paragraph',
          text: 'Elsewhere, organic is a private matter governed by voluntary standards and their schemes, with no public regulation behind the term. And because each regulating jurisdiction defines organic in its own instrument, a product certified organic in one market is not automatically organic in another. Trade across those boundaries depends on equivalence or recognition arrangements between authorities — which exist, change, and are the reason organic import requirements are a specialist subject rather than an obvious one.',
        },
        {
          type: 'callout',
          tone: 'important',
          title:
            '"Certified organic" is incomplete without a standard and a market',
          text: 'The claim only means something relative to the instrument it was certified against and the market it is destined for. Certification under one jurisdiction’s rules does not permit the organic label in another’s without a recognition or equivalence arrangement.',
        },
      ],
    },
    {
      id: 'what-it-does-not-mean',
      heading: 'What organic certification does not mean',
      body: [
        {
          type: 'paragraph',
          text: 'The most persistent misreading is that organic means residue-free. It does not, and no organic standard claims it does. Organic rules restrict what may be applied by the operator; they do not abolish drift from neighbouring land, background contamination, or residues in the wider environment. Organic produce is subject to the same residue law as any other produce, and organic certification is not a residue guarantee — indeed a residue finding on organic produce triggers an investigation into whether the rules were followed, not an automatic conclusion either way.',
        },
        {
          type: 'list',
          items: [
            'Not residue-free — organic restricts inputs, it does not control the environment',
            'Not a safety claim — organic and conventional food face the same food-safety law',
            'Not a quality grade — organic produce is graded on the same commercial standards as any other',
            'Not a nutrition claim — the standard addresses production methods, not composition',
            'Not automatically recognised abroad — each regulating market defines organic itself',
            'Not a guarantee — certification is periodic audit evidence, not continuous surveillance',
          ],
        },
      ],
    },
    {
      id: 'integrity',
      heading: 'Why integrity is the whole problem',
      body: [
        {
          type: 'paragraph',
          text: 'Because organic status cannot be tested in the product and commands a price premium, the incentive to relabel conventional goods as organic is direct and the physical evidence against doing so is weak. This is not a hypothetical vulnerability — organic fraud in traded commodities is a recognised phenomenon, and it is characteristically committed in the paperwork rather than in the field. Certificates are forged, certified volumes are inflated, and consignments are re-documented mid-chain.',
        },
        {
          type: 'paragraph',
          text: 'The control systems respond with the tools that fit that threat: mass balance, traceability along the chain, verification of certificates against issuing bodies’ own databases rather than the document presented, and scrutiny at import. The general lesson is one that applies to every process claim: where a claim cannot be read off the product, the assurance is only ever as good as the chain of records and the diligence applied to them.',
        },
      ],
    },
  ],
  standardBody:
    'No single body. Organic certification operates under public regulators in markets where the term is regulated, and under private standard owners elsewhere; certification itself is carried out by control bodies approved or accredited under the applicable framework.',
  edition:
    'Edition not stated here — organic certification is not a single standard with an edition. Each jurisdiction’s regulation and each private standard has its own version and revision history. Verify against the specific instrument applying in the market concerned.',
  jurisdiction:
    'Global as a practice, but definitionally fragmented. Each regulating jurisdiction defines organic in its own instrument, and cross-border recognition depends on equivalence or recognition arrangements between authorities.',
  legalStatus: 'mandatory',
  scopeSummary:
    'The conformity-assessment mechanism by which a production-process claim of organic status is verified, because that status is generally not detectable by analysing the product. In scope terms a control system covers registration and description of the operation, records of inputs, production, and sales, periodic inspection of land and facilities, traceability and mass-balance verification, conversion of land prior to organic sale, and decision-making by an approved or accredited control body. What counts as organic production is defined by the applicable regulation or private standard, not by the certification mechanism itself.',
  conformityAssessment:
    'Inspection and audit rather than product testing. Certification rests on periodic on-site inspection combined with examination of input, production, and sales records, traceability checks along the chain, and mass-balance verification that an operator could have produced what it sold. Product testing plays a supporting investigative role only. Inspection frequency, conversion periods, sampling rules, and fees are set by the applicable regulation or standard and are not stated here.',
  assessedBy:
    'Control bodies approved by a competent authority where organic is regulated, or accredited against the applicable framework; supervised by that competent authority. Where organic is not regulated, by the private scheme’s own certification arrangements.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes why organic certification exists and how control systems are structured in general terms. It reproduces no regulation, standard, or rule, and states no requirement of any organic instrument.',
    'No conversion period, inspection frequency, permitted or prohibited input, tolerance, certificate validity period, or fee is stated here. These are set by each jurisdiction’s regulation or by the applicable private standard, differ between them, and are revised.',
    'The legal status shown reflects that certification is a legal precondition for the organic label in markets that regulate the term; organic is not regulated everywhere, and this is not a statement about any particular jurisdiction.',
    'What counts as organic is defined by the applicable instrument, and definitions differ between markets. Certification under one framework does not permit the organic claim under another without a recognition or equivalence arrangement.',
    'AgricultureID is not a control body, certification body, accreditation body, scheme owner, or competent authority. It certifies nothing, verifies no certificate, and confers no organic status or recognition.',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'eu-organic-regulation' },
    { type: 'standard-reference', slug: 'fairtrade-standards' },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'ifoam-family-of-standards' },
    { type: 'standard-reference', slug: 'rainforest-alliance-certification' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    { type: 'standard-reference', slug: 'usda-national-organic-program' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'import-permit' },
  ],
  sourceReferences: [
    {
      sourceId: 'ifoam',
      citedFor:
        'Organic principles and the structure of organic guarantee and control systems',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Regulated organic control system context, including control bodies and import arrangements',
    },
    {
      sourceId: 'usda-ams',
      citedFor:
        'Regulated organic certification context, including accredited certifying agents',
    },
    {
      sourceId: 'fao',
      citedFor: 'Organic agriculture and certification context internationally',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a practice. Legal protection of the term, the definition of organic production, and the recognition of foreign certification all vary by jurisdiction; there is no single global organic status.',
  limitations: [
    'A description of how organic certification works and why it exists, not any organic standard or regulation, and not certification or regulatory advice.',
    'No conversion periods, permitted inputs, inspection frequencies, or requirements of any instrument are reproduced.',
    'Organic certification is not a residue, safety, quality, or nutrition claim; it addresses production method only.',
    'Whether organic is regulated, how it is defined, and whether foreign certification is recognised depend entirely on the market and are not stated here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Organic Certification: Why a Process Claim Needs an Audit',
    description:
      'Why organic status cannot be tested in a product, how organic control systems use inspection, records, and mass balance, and what certification does not mean.',
    keywords: [
      'organic certification',
      'organic control body',
      'organic conversion period',
      'mass balance organic',
      'certified organic',
    ],
  },
  structuredData: { article: true },
};
