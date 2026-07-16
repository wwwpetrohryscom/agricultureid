import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const fraudAndAdulteration: SupplyChainRiskContent = {
  id: 'supply-chain-risk-fraud-and-adulteration',
  slug: 'fraud-and-adulteration',
  contentType: 'supply-chain-risk',
  title: 'Fraud and Adulteration',
  alternativeNames: [
    'Food fraud',
    'Economically motivated adulteration',
    'Misrepresentation',
  ],
  category: 'Supply-chain risk',
  subcategory: 'Quality and integrity',
  riskClass: 'quality-integrity',
  summary:
    'A commodity is deliberately misrepresented — diluted, substituted, mislabelled, or given a false origin — for economic gain. Unlike every other risk in this model, this one has an author, and the author is designing the deception against the tests the chain is known to run.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almost every supply-chain risk is an accident, a natural process, or a decision taken for reasons unconnected to the consignment. Fraud is different in kind: someone intends the outcome. A product is diluted with something cheaper, one species or grade is sold as another, an origin or a certification status is claimed that does not exist, or a document is created to support any of these. The motive is economic, and the mechanism is designed.',
    },
    {
      type: 'paragraph',
      text: "That intent changes how the risk behaves and makes most conventional quality assurance the wrong instrument for it. A quality system is built to catch things that go wrong, and things that go wrong do not adapt. Fraud adapts. It is constructed specifically to pass the tests that are known to be applied, which means that a chain testing diligently for the adulterants it knows about is providing a specification for what an adulterant must not be. This is the central and uncomfortable feature of the mechanism: routine testing verifies the absence of yesterday's fraud.",
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Quality and integrity — deliberate misrepresentation',
    },
    {
      label: 'Distinctive property',
      value:
        'It has an author, and the author designs against the tests the chain is known to run',
    },
    {
      label: 'Motive',
      value:
        'Economic — the margin between what a product is and what it is sold as',
    },
    {
      label: 'Most exposed',
      value:
        'Products with a large value gap, where identity is destroyed by processing, and where chains are long',
    },
    {
      label: 'Assurance inversion',
      value:
        'Routine testing verifies the absence of known adulterants, which is what a new one is designed around',
    },
    {
      label: 'Safety consequence',
      value:
        'Adulteration is economically motivated but its safety effects are unintended and unbounded',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'forms',
      heading: 'Forms of misrepresentation',
      body: [
        {
          type: 'paragraph',
          text: 'The category covers several mechanisms with one thing in common: what the consignment is and what it is represented to be have been deliberately separated.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Dilution and extension',
              description:
                'A cheaper material is added to a more valuable one. The product remains recognisably itself and there is simply less of it than there appears to be.',
            },
            {
              term: 'Substitution',
              description:
                'One material is presented as another — a different species, variety, or grade with a lower value and a similar appearance.',
            },
            {
              term: 'Origin and provenance misrepresentation',
              description:
                'A false claim about where a product came from, made to obtain a price premium, a tariff preference, or access to a market the true origin cannot enter.',
            },
            {
              term: 'Certification and status fraud',
              description:
                'A false claim to a certified status — organic, fair trade, sustainability, or a grade. Here the deception is not in the product at all, which may be entirely genuine, but in a claim about how it was produced that no test on the product can verify.',
            },
            {
              term: 'Documentary fraud',
              description:
                'Fabricated or altered documents supporting any of the above, or misdeclaration of quantity, value, or classification to a customs authority.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Certification fraud is the hardest case',
          text: 'When the claim is about a process rather than a property — that a crop was grown without certain inputs, or that a premium was paid to a producer — the product carries little or no evidence of it. Only the records and the chain of custody can answer, which is why these claims are protected by audit and traceability rather than by analysis.',
        },
      ],
    },
    {
      id: 'where-it-concentrates',
      heading: 'Where the exposure concentrates',
      body: [
        {
          type: 'paragraph',
          text: 'Fraud is not distributed randomly. It follows opportunity, and opportunity has recognisable structural features that can be described without any speculation about who does what.',
        },
        {
          type: 'list',
          items: [
            'A large value gap between the genuine product and a plausible substitute — the gap is the motive, and without it there is nothing to gain',
            'Loss of physical identity through processing: ground, powdered, pulped, or extracted products cannot be inspected for identity in the way a whole product can',
            'Long chains with many intermediaries, where the buyer is distant from the producer and each handover is an opportunity to substitute',
            'Aggregation of many small lots, where individual identity is pooled away and nobody can point to a source',
            'Products defined by an attribute that cannot be seen — origin, variety, production method, certification status',
            'Scarcity, where a shortfall raises prices and the incentive to extend supply that does not exist',
          ],
        },
        {
          type: 'paragraph',
          text: 'The scarcity point connects this risk to the rest of the model and deserves emphasis. A harvest shortfall does not only reduce supply; it raises the value gap that motivates adulteration, at exactly the moment when buyers are least able to be selective and most willing to accept an unfamiliar supplier. Fraud exposure rises when physical supply is tight, which means it correlates with the other risks rather than sitting independently of them.',
        },
      ],
    },
    {
      id: 'why-testing-struggles',
      heading: 'Why testing is the wrong primary defence',
      body: [
        {
          type: 'paragraph',
          text: 'A test detects what it is designed to detect. Analytical methods target specific substances or specific markers, and a result showing that a product is not adulterated with a known material is exactly that — it is not a statement that the product is genuine. An adulterant chosen because it is not on the panel produces a clean result, and a clean result on an incomplete panel is indistinguishable from a clean result on a sound product.',
        },
        {
          type: 'paragraph',
          text: 'This is why the defences that work against fraud are structural rather than analytical: knowing the chain and shortening it, verifying suppliers rather than only consignments, maintaining an unbroken chain of custody, auditing records rather than sampling products, and treating anomalies in commercial behaviour as evidence. Analysis remains useful — particularly non-targeted approaches that look for what should not be there rather than for a listed substance — but it is a confirmation tool, not a detection strategy.',
        },
        {
          type: 'paragraph',
          text: 'A further point should be made plainly. Adulteration is economically motivated, meaning the adulterant is chosen for cost and for passing tests, not for safety. Nobody performing it has assessed whether the material is safe at the level used, because that is not the objective. So while the motive is commercial, the consequence is a food-safety hazard of a kind the chain has no basis to bound — an unassessed material at an unknown level in a food. That is the reason food-fraud prevention sits inside food-safety management rather than beside it.',
        },
      ],
    },
    {
      id: 'seeing-it',
      heading: 'Seeing it while it is happening',
      body: [
        {
          type: 'paragraph',
          text: 'Because the product is designed to look right, the reliable signals are commercial and structural rather than sensory. An offer better than the market can support, a supplier who appears with volume at a moment of scarcity, documentation that is impeccable but unverifiable, a chain that cannot be walked backwards — these are the observations that matter, and none of them involve the product.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Price is observable before any sample is drawn',
          text: 'A genuine product cannot be sold below what it costs to obtain. An offer materially below what the market supports is a statement about the product that the seller has not made, and it is available before any sample is drawn.',
        },
      ],
    },
  ],
  riskMechanism:
    "A commodity is deliberately misrepresented for economic gain — diluted or extended with a cheaper material, substituted by a lower-value species, variety, or grade, given a false origin to obtain a premium, a preference, or access a market the true origin cannot enter, falsely claimed to hold a certified status, or supported by fabricated documents. Unlike other risks in this model the mechanism has an author, and the author designs it against the controls the chain is known to operate, so it adapts where accidental failures do not: a chain testing diligently for known adulterants is effectively publishing a specification for what a new adulterant must avoid, and routine analysis therefore verifies the absence of yesterday's fraud rather than the presence of authenticity. Exposure concentrates where opportunity is structurally present: a large value gap between the genuine product and a plausible substitute, which is the motive; loss of physical identity through grinding, powdering, pulping, or extraction, which removes the possibility of inspection for identity; long chains with many intermediaries distancing buyer from producer; aggregation of small lots, which pools identity away; attributes that cannot be observed in the product at all, such as origin, variety, production method, or certification status, for which only records and chain of custody can answer; and scarcity, which raises the value gap precisely when buyers are least selective and most willing to accept unfamiliar suppliers — so fraud exposure correlates with harvest shortfall and price stress rather than being independent of them. Analytical detection is structurally limited because a test detects what it targets, and a clean result on an incomplete panel is indistinguishable from a clean result on a sound product; the effective defences are therefore structural — supplier verification, chain shortening, unbroken chain of custody, record audit, and treatment of commercial anomalies as evidence. Because the adulterant is selected for cost and for evading tests rather than assessed for safety, the consequence is an unassessed material at an unknown level in food: a hazard the chain has no basis to bound.",
  chainStages: [
    'production',
    'assembly',
    'processing',
    'inland-transport',
    'border',
    'destination-market',
  ],
  observableIndicators: [
    'An offer priced materially below what the market can support for the genuine product',
    'A supplier appearing with unexpected volume during a period of known scarcity',
    "Supply offered from an origin, or in a quantity, inconsistent with that origin's known production or season",
    'A chain that cannot be traced backwards to a producer, or intermediaries who cannot or will not identify their source',
    'Documentation that is complete and impeccable but cannot be verified against an issuing body',
    "Certification claims that cannot be confirmed against the scheme owner's own register",
    'New or unknown intermediaries entering an established chain without a clear commercial rationale',
    'Analytical results that are unremarkable on the targeted panel while composition, isotopic, or non-targeted profiling shows anomalies',
    'Physical or compositional characteristics at the edge of what the stated origin, variety, or grade would produce',
    'Reluctance to permit audit, site visit, or sampling at an upstream stage',
    'Product form changing to one in which identity cannot be inspected, without a processing reason',
    'Volumes traded in a certified or premium category exceeding what the certified area or production could yield',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page names no commodity, product, supplier, origin, or actor as implicated in fraud, cites no incident, and gives no incidence, frequency, or loss figures. Allegations of fraud concern identified parties and are matters for enforcement authorities and the courts, not for a reference page.',
    'No adulterant, substitution material, or method of evading detection is described or named. Describing how a deception is constructed would be an instruction, and the mechanism can be explained without it.',
    'No analytical method, marker, or authenticity test is specified or recommended. Method selection is a matter for a competent laboratory against a defined question.',
    "Assessing exposure for a real chain requires that chain's own data: the products handled and the value gap on each, the form in which they are received, the number and identity of intermediaries, the traceability actually achievable to a producer, the certification claims relied on and their verifiability, the supplier assurance in place, and the market conditions prevailing.",
    'A clean analytical result on a targeted panel is not evidence of authenticity. The absence of known adulterants and the presence of a genuine product are different findings, and the first does not establish the second.',
    'The structural features described indicate where opportunity exists. They are not evidence about any actual chain, supplier, or transaction, and must not be read as an allegation about any product or origin exhibiting them.',
  ],
  affectedCommodityClasses: [
    'spice',
    'beverage-crop',
    'nut',
    'oilseed',
    'livestock-product',
    'fruit',
    'cereal-grain',
    'pulse',
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'third-party-audit' },
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'harvest-shortfall' },
    { type: 'supply-chain-risk', slug: 'information-asymmetry' },
    { type: 'supply-chain-risk', slug: 'residue-limit-exceedance-rejection' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'codex',
      citedFor:
        'Food-safety and food-hygiene framework, and the international basis for authenticity, labelling, and description of foods',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Scientific framework context for food-safety hazards arising from adulteration',
    },
    {
      sourceId: 'gs1',
      citedFor:
        'Traceability and identification standards supporting chain-of-custody verification',
    },
    {
      sourceId: 'iso',
      citedFor:
        'Food-safety management and conformity-assessment standards framework within which fraud prevention is managed',
    },
    {
      sourceId: 'wto',
      citedFor:
        'Trade framework context for origin claims and preferential treatment',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Food-control systems and food-quality assurance context in international food chains',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic, but food-fraud law, enforcement, labelling requirements, and certification oversight are entirely jurisdiction- and scheme-specific.',
  limitations: [
    'A reference description of a mechanism, not an allegation, assessment, or investigation concerning any product, origin, supplier, or party.',
    'No incidents, cases, incidence rates, or loss figures are given, and no commodity or origin is characterised as fraud-prone.',
    'No adulterants, substitution materials, methods of evasion, or analytical methods are named. The mechanism is described; its execution is not.',
    'Food fraud is a criminal and regulatory matter in most jurisdictions. Detection, investigation, and enforcement are for the competent authorities, and nothing here is legal, enforcement, or analytical advice.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fraud and Adulteration: Why Testing Is the Wrong Defence',
    description:
      'How food fraud differs from other supply-chain risks: it has an author who designs against known tests, and where the opportunity concentrates.',
    keywords: [
      'food fraud',
      'adulteration',
      'economically motivated adulteration',
      'authenticity',
      'origin misrepresentation',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
