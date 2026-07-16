import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const chainOfCustodyCertification: StandardReferenceContent = {
  id: 'standard-reference-chain-of-custody-certification',
  slug: 'chain-of-custody-certification',
  contentType: 'standard-reference',
  title: 'Chain of Custody Certification',
  alternativeNames: [
    'Chain of custody',
    'CoC certification',
    'Custody models',
    'Traceability certification',
  ],
  category: 'Certification scheme',
  subcategory: 'Traceability',
  standardClass: 'certification-scheme',
  standardDomain: 'traceability',
  summary:
    'Chain of custody certification governs how a claim survives the journey from a certified farm to a finished product. Its models — identity preserved, segregated, mass balance, and book and claim — differ enormously in what they actually assert, and the difference is where most consumer misunderstanding of sustainability labels originates.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Certifying a farm establishes something about a farm. It establishes nothing about the packet on a shelf, because between the two lie collection, bulking, shipping, processing, blending, and manufacture — a chain in which the physical identity of any particular consignment is routinely and deliberately destroyed. Chain of custody is the set of rules governing how a claim travels that distance, and it is a necessary companion to every production standard whose claim is meant to reach a consumer.',
    },
    {
      type: 'paragraph',
      text: 'The reason it deserves its own page is that "certified" on a package can mean four quite different things depending on the custody model in use, and the models are not interchangeable. They range from a model in which the specific physical lot is kept identifiable end to end, to one in which no physical material is tracked at all and only a certificate trades. All four are legitimate, all four are used, and confusing them is the single most common error in reading a sustainability label.',
    },
  ],
  keyFacts: [
    {
      label: 'Purpose',
      value:
        'Carrying a production claim through a chain that mixes and transforms product',
    },
    {
      label: 'The four models',
      value:
        'Identity preserved, segregation, mass balance, and book and claim',
    },
    {
      label: 'Operated by',
      value:
        'Individual schemes as part of their own rules — most sustainability schemes have one',
    },
    {
      label: 'International reference',
      value:
        'ISO 22095 provides general chain-of-custody terminology and models',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary — a private scheme mechanism, except where a regulated claim requires it',
    },
    {
      label: 'Assessed by',
      value:
        'Certification bodies auditing supply-chain actors against the scheme’s custody rules',
    },
    {
      label: 'Governs',
      value:
        'What may be claimed, and how — not the production practice itself',
    },
  ],
  sections: [
    {
      id: 'the-four-models',
      heading: 'The four models, and what each asserts',
      body: [
        {
          type: 'paragraph',
          text: 'The models form a spectrum, trading physical rigour against practical feasibility. At one end the physical material is tracked; at the other only the claim is. Neither end is the "right" answer — the appropriate model depends on whether the chain can physically segregate at reasonable cost, and on what claim the scheme wants to support.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Identity preserved',
              description:
                'The product from a single certified source is kept physically separate and identifiable throughout. The strongest claim: this material came from that source. Costly, and only workable in chains that do not bulk.',
            },
            {
              term: 'Segregation',
              description:
                'Certified product is kept physically separate from non-certified product, but material from multiple certified sources may be mixed. The claim: this material is certified — though not from any identified farm.',
            },
            {
              term: 'Mass balance',
              description:
                'Certified and non-certified material may be physically mixed, with certified volumes tracked administratively so that no more is sold as certified than was bought. The claim is about volumes in the system, not about the contents of a package.',
            },
            {
              term: 'Book and claim',
              description:
                'The claim is decoupled from the physical product entirely: certificates are traded separately from material. The claim: certified production was supported somewhere, in this volume. Nothing is asserted about any physical goods.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Mass balance is the one that surprises people',
          text: 'Under mass balance, a package bearing a seal may contain no certified material at all. The system guarantees that the certified volume purchased matches the certified volume sold across the business — an accounting identity, not a statement about the contents in front of you. This is legitimate and disclosed in scheme rules; it is simply not what most readers assume.',
        },
      ],
    },
    {
      id: 'why-weaker-models-exist',
      heading: 'Why the weaker models exist at all',
      body: [
        {
          type: 'paragraph',
          text: 'It is tempting to conclude that identity preservation is best and everything else is a compromise to be tolerated. That reading misses the economics. Many agricultural chains physically cannot segregate at acceptable cost: cocoa and palm oil are bulked at collection points, shipped in shared vessels, and refined in shared plant. Requiring segregation in such a chain does not produce a better claim — it produces no claim at all, because the certified volume never reaches a buyer willing to fund the parallel infrastructure.',
        },
        {
          type: 'paragraph',
          text: 'Mass balance and book and claim exist so that certified demand can reach producers in chains where physical separation is impractical. A farmer who receives a premium for certified production benefits identically whether the buyer took the physical beans or merely the certified volume — the money arrives either way. The trade-off is that the consumer-facing claim weakens as the mechanism becomes more abstract, and the honest response is disclosure rather than pretending the models are equivalent.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The model is a scheme decision, disclosed in scheme rules',
          text: 'Which models a scheme permits, for which products, and how claims must be worded under each, are set out in the scheme’s own custody and claims rules. Those rules are the only reliable source, and they are not reproduced here.',
        },
      ],
    },
    {
      id: 'how-it-is-assessed',
      heading: 'How custody is assessed',
      body: [
        {
          type: 'paragraph',
          text: 'Chain of custody is audited at each handling step rather than at the farm. Supply-chain actors — traders, processors, manufacturers — are certified against the scheme’s custody requirements, and the audit examines receipts, volumes, conversion factors, records, and claims. The core check is arithmetic: could this operator have sold the certified volume it sold, given what it bought and what its process yields? That is mass balance verification, and it is the same reasoning that underpins organic integrity control.',
        },
        {
          type: 'paragraph',
          text: 'This is also where the chain is weakest, and the vulnerability is structural rather than incidental. Every custody model except identity preservation relies on records rather than on anything inspectable in the product, so an unbroken documentary chain is the whole of the assurance. Where a claim commands a premium and cannot be tested in the goods, the fraud pressure falls on the paperwork — and custody failures, in practice, look like accounting problems rather than agricultural ones.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What chain of custody does not do',
      body: [
        {
          type: 'list',
          items: [
            'Says nothing about production — it carries a claim, it does not establish one',
            'Not a quality or safety mechanism — it tracks claims, not condition',
            'Not a single standard — each scheme operates its own custody rules',
            'Not equivalent across models — the same word "certified" asserts different things',
            'Not a guarantee of physical content, except under identity preserved and segregation',
          ],
        },
        {
          type: 'paragraph',
          text: 'The first point is the one worth ending on. Chain of custody is a transmission mechanism, and a transmission mechanism cannot improve the signal it carries. If the underlying farm certification is weak, an impeccable custody system carries a weak claim faithfully to a consumer. Custody integrity and production integrity are separate questions, and a scheme can be strong on one and weak on the other.',
        },
      ],
    },
  ],
  standardBody:
    'No single body. Chain of custody requirements are operated by individual schemes as part of their own rules; ISO 22095 provides general chain-of-custody terminology and models as an international reference.',
  standardIdentifier:
    'Chain of custody — scheme-specific rules; ISO 22095 provides general terminology and custody models',
  edition:
    'Edition not stated here — chain of custody is not a single standard with an edition. Each scheme’s custody rules carry their own version and revision history, and ISO 22095 is issued in dated editions subject to periodic review. Verify against the specific scheme’s current rules, or against ISO for the general standard.',
  jurisdiction:
    'Global. Custody rules are private scheme mechanisms with no legal force of their own, except where a regulated claim — such as organic in markets that regulate the term — requires traceability as a matter of law.',
  legalStatus: 'voluntary',
  scopeSummary:
    'The rules governing how a certified claim is transmitted through a supply chain that mixes, processes, and transforms product. In scope terms chain of custody covers the custody model applied — identity preserved, segregation, mass balance, or book and claim; the records, volume accounting, and conversion factors supply-chain actors must maintain; the certification of those actors; and the claims that may be made under each model. It addresses transmission of a claim only, and never the production practice the claim rests on.',
  conformityAssessment:
    'Third-party certification of supply-chain actors, audited at each handling step against the scheme’s custody requirements. Assessment centres on records, volume reconciliation, and conversion factors — verifying that an operator could have sold the certified volume it sold given what it purchased and what its process yields. Under all models except identity preservation, the assurance rests on documentary evidence rather than on anything detectable in the product.',
  assessedBy:
    'Certification bodies operating for the individual scheme, auditing traders, processors, and manufacturers handling certified product. Where a regulated claim is involved, by the control bodies and competent authorities of that regime.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes the chain-of-custody models in general terms. It reproduces no scheme’s custody rules, no claims wording, and no provision of ISO 22095 or any other standard.',
    'ISO standards are copyrighted publications of ISO and its national member bodies, sold under licence. No edition, clause, or requirement of ISO 22095 is cited or reproduced; obtain the text from ISO or a national member body.',
    'Which custody models a scheme permits, for which products, what conversion factors or thresholds apply, and how claims must be worded are set out in each scheme’s own rules. None are stated here, and they differ between schemes and are revised.',
    'The general descriptions of the four models given here are conceptual. They are not a substitute for any scheme’s definitions, which govern what may actually be claimed.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner. It certifies no supply-chain actor, verifies no custody claim, and confers no recognition.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'eu-organic-regulation' },
    { type: 'standard-reference', slug: 'fairtrade-standards' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'iseal-codes-of-good-practice' },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'rainforest-alliance-certification' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    { type: 'standard-reference', slug: 'usda-national-organic-program' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
  ],
  sourceReferences: [
    {
      sourceId: 'iseal',
      citedFor:
        'Chain-of-custody models, their application in voluntary sustainability standards, and good practice in claims',
    },
    {
      sourceId: 'iso',
      citedFor:
        'ISO 22095 as the international reference for chain-of-custody terminology and models',
    },
    {
      sourceId: 'gs1',
      citedFor:
        'Traceability and identification infrastructure supporting custody records along a chain',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Context on voluntary sustainability standards and traceability in commodity supply chains',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Custody models are applied wherever certified product is traded; which model predominates depends on the commodity and whether its chain can physically segregate at reasonable cost.',
  limitations: [
    'A conceptual description of custody models, not any scheme’s custody rules, and not certification or claims advice.',
    'No scheme rules, claims wording, conversion factors, or thresholds are reproduced; consult the specific scheme.',
    'The models are not equivalent: the same word "certified" asserts materially different things depending on the model, and mass balance and book and claim assert nothing about physical package contents.',
    'Chain of custody transmits a claim and cannot strengthen it; custody integrity and production integrity are separate questions.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Chain of Custody Certification: The Four Models Explained',
    description:
      'How identity preserved, segregation, mass balance, and book and claim differ, what each actually asserts about a product, and why weaker models exist at all.',
    keywords: [
      'chain of custody',
      'mass balance',
      'book and claim',
      'identity preserved',
      'segregation certification',
    ],
  },
  structuredData: { article: true },
};
