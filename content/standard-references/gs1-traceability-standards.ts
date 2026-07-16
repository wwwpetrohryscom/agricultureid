import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const gs1TraceabilityStandards: StandardReferenceContent = {
  id: 'standard-reference-gs1-traceability-standards',
  slug: 'gs1-traceability-standards',
  contentType: 'standard-reference',
  title: 'GS1 Traceability Standards',
  alternativeNames: [
    'GS1 standards',
    'GTIN',
    'Global Traceability Standard',
    'EPCIS',
  ],
  category: 'Standard',
  subcategory: 'Traceability',
  standardClass: 'standard',
  standardDomain: 'traceability',
  summary:
    'GS1 standards provide the identification and data-exchange infrastructure that traceability runs on — the barcode, the identifiers behind it, and the event data that links them. They are plumbing rather than policy: they say how to identify and communicate, never what a business must trace or claim.',
  introduction: [
    {
      type: 'paragraph',
      text: 'GS1 is a global not-for-profit organisation whose standards underpin the identification of products and locations in trade. Its best-known artefact is the barcode on retail packaging, but the barcode is only a carrier; what matters is the identification system behind it — globally unique numbers for products, locations, logistics units, and parties, allocated so that no two organisations issue the same identifier for different things.',
    },
    {
      type: 'paragraph',
      text: 'Traceability is where those identifiers do their most interesting work. Tracing a product through a chain means recording, at each step, what happened to which thing, where, when, and why — and then being able to connect those records across companies that share no systems. GS1 provides the identifiers to name the things, the data carriers to read them, and the event-data standards to structure and exchange the records. That combination is the infrastructure most modern food traceability actually runs on.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'GS1 — a global not-for-profit standards organisation, with national member organisations',
    },
    {
      label: 'Core function',
      value:
        'Globally unique identification of products, locations, logistics units, and parties',
    },
    {
      label: 'Well-known identifiers',
      value:
        'GTIN for trade items, GLN for locations, SSCC for logistics units',
    },
    {
      label: 'Event data',
      value:
        'EPCIS provides a structure for recording and sharing what happened to what, where, and when',
    },
    {
      label: 'Traceability standard',
      value:
        'The GS1 Global Traceability Standard describes how to apply the system to traceability',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary — private standards, though regulators increasingly rely on the infrastructure',
    },
    {
      label: 'Not',
      value:
        'A rule about what to trace, a certification, or a guarantee of data accuracy',
    },
  ],
  sections: [
    {
      id: 'identification-first',
      heading: 'Identification is the foundation',
      body: [
        {
          type: 'paragraph',
          text: 'Traceability fails, more often than not, on identity rather than on record-keeping. If two companies call the same pallet by different names, or two products share an internal code, no amount of diligent recording will let anyone follow anything across the boundary between them. Unique, unambiguous, globally agreed identification is the precondition for everything else, and it is the problem GS1 exists to solve.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'GTIN — Global Trade Item Number',
              description:
                'Identifies a trade item — a product configuration that is priced, ordered, or invoiced. The number behind most retail barcodes.',
            },
            {
              term: 'GLN — Global Location Number',
              description:
                'Identifies a location or a party: a farm, a store, a warehouse, a legal entity. Traceability records are meaningless without a shared way to name places.',
            },
            {
              term: 'SSCC — Serial Shipping Container Code',
              description:
                'Identifies an individual logistics unit — a specific pallet or case, not a product type. This is what lets one physical unit be followed.',
            },
            {
              term: 'Batch, lot, and serial data',
              description:
                'Carried alongside the identifier to distinguish one production run or unit from another. The distinction between a product type and a specific batch is what makes a recall targetable.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A GTIN identifies a product, not a batch',
          text: 'Every jar of a given product configuration shares a GTIN. Distinguishing this jar or this production run requires batch, lot, or serial data alongside it — which is precisely why recalls demand more than a barcode.',
        },
      ],
    },
    {
      id: 'events-and-exchange',
      heading: 'Events, and sharing them across companies',
      body: [
        {
          type: 'paragraph',
          text: 'Identifiers name things; traceability additionally needs a record of what happened to them. GS1’s event-data standards structure that record around a consistent set of questions — what object, what happened, when, where, and in what business context. Structuring events this way is what allows records created independently by a grower, a packer, a shipper, and a retailer to be assembled into a coherent chain after the fact.',
        },
        {
          type: 'paragraph',
          text: 'The interoperability problem is the real one here. A single company can trace internally with any system it likes, and many do so perfectly well. Traceability across a chain, between companies with no shared software and often no shared language, is a different and much harder problem — and it is the one that matters, because a contamination or fraud investigation never stays within one company. Common event structures and shared identifiers are what make cross-company assembly possible at all.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'One step up, one step down',
          text: 'Most food traceability law requires a business to know its immediate supplier and immediate customer, not the whole chain. Chain-wide visibility is assembled by connecting those links after the fact — which only works if everyone identified the same things the same way.',
        },
      ],
    },
    {
      id: 'infrastructure-not-policy',
      heading: 'Infrastructure, not policy',
      body: [
        {
          type: 'paragraph',
          text: 'GS1 standards say how to identify and how to communicate. They do not say what a business must trace, how far back, with what granularity, or how quickly it must respond — those are questions for food law, for buyers, and for schemes. A business can implement GS1 standards immaculately and still trace far less than its regulator requires, and it can meet a regulator’s requirement without GS1 at all, if it can otherwise satisfy the authority.',
        },
        {
          type: 'paragraph',
          text: 'The distinction matters commercially because GS1 adoption is frequently presented as compliance. It is not: it is infrastructure that makes compliance practical, widely enough adopted that regulators and retailers increasingly assume it. Being on the infrastructure is close to a precondition for participating in modern retail chains, which is a real requirement — it is simply a different requirement from a legal traceability obligation.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What GS1 standards do not do',
      body: [
        {
          type: 'list',
          items: [
            'Not a legal requirement — food traceability law is separate, and GS1 is not compliance',
            'Not a certification — GS1 certifies no business and no product',
            'Not a guarantee of accuracy — the standards structure data, they do not verify it',
            'Not a claim about the product — an identifier says what something is, not that it is good',
            'Not chain-of-custody rules — carrying a certified claim is a scheme matter, though it uses this infrastructure',
          ],
        },
        {
          type: 'paragraph',
          text: 'The accuracy point deserves the last word, because it is the one most often glossed. A traceability system records what it was told. If a batch code is mis-keyed, if a pallet is relabelled, or if someone deliberately enters a false origin, the system faithfully propagates the error at speed and with an air of authority. Good identification makes fraud easier to detect after the fact by making inconsistencies visible; it does not make data true, and a well-structured lie is still a lie.',
        },
      ],
    },
  ],
  standardBody:
    'GS1 — a global not-for-profit standards organisation, operating through national member organisations',
  standardIdentifier:
    'GS1 standards — including the GS1 General Specifications, identification keys such as GTIN, GLN, and SSCC, the EPCIS event-data standard, and the GS1 Global Traceability Standard',
  edition:
    'Edition not stated here — GS1 maintains a family of standards, each versioned and revised on its own cycle; the General Specifications in particular are updated regularly. Verify the current version of the specific standard against GS1 directly.',
  jurisdiction:
    'Global. Private voluntary standards with no legal force of their own, though regulators, retailers, and schemes increasingly rely on the identification infrastructure they provide.',
  legalStatus: 'voluntary',
  scopeSummary:
    'A family of standards for the unique identification of products, locations, logistics units, and parties in trade, and for structuring and exchanging data about them. In scope terms the system covers identification keys such as the Global Trade Item Number, Global Location Number, and Serial Shipping Container Code; the data carriers that convey them; attribute data such as batch, lot, and serial information; event-data standards for recording what happened to which object, where, when, and in what business context; and guidance on applying the system to traceability. The standards address identification and communication only, never what a business must trace or claim.',
  conformityAssessment:
    'None in the certification sense. GS1 certifies no business, product, or system, and there is no GS1 certification of traceability. Organisations obtain identifier prefixes through GS1 member organisations and implement the standards themselves; correct implementation is a technical matter, and any assessment arises from a buyer, a scheme, or a regulator relying on the infrastructure rather than from GS1.',
  assessedBy:
    'No one, at the GS1 level. Where traceability is assessed, it is assessed by competent authorities under food law, by certification bodies under a scheme’s traceability or custody requirements, or by buyers. GS1 allocates identifiers and publishes standards.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the GS1 standards provide and how they support traceability. It reproduces no specification, requirement, data structure, or provision of any GS1 standard.',
    'No identifier format, check-digit rule, data structure, syntax, version number, or fee is stated here. These are set out in the GS1 standards, are revised, and must be obtained from GS1 or a national member organisation.',
    'GS1 standards and the GS1 identification keys are publications and property of GS1, subject to its terms; identifier prefixes are allocated through GS1 member organisations. No version or date is asserted.',
    'GS1 standards are infrastructure, not compliance. Implementing them does not satisfy any legal traceability obligation, and no traceability requirement stated in law, in a scheme, or by a buyer is described here.',
    'The standards structure data; they do not verify it. Nothing here suggests that data recorded in a GS1-based system is accurate or truthful.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner, is not affiliated with GS1, allocates no identifiers, and confers no certification or recognition.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
    { type: 'standard-reference', slug: 'organic-certification' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
  ],
  sourceReferences: [
    {
      sourceId: 'gs1',
      citedFor:
        'The GS1 identification keys, data carriers, event-data standards, and the application of the system to traceability',
    },
    {
      sourceId: 'iso',
      citedFor:
        'International standards context for traceability terminology and chain-of-custody models',
    },
    {
      sourceId: 'fao',
      citedFor: 'Food traceability concepts and context along the food chain',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. GS1 operates through national member organisations, and its identification system is used across retail and food supply chains worldwide; adoption is uneven in chains that do not reach organised retail.',
  limitations: [
    'A description of an identification and data-exchange system, not the standards, and not implementation or compliance advice.',
    'No identifier formats, data structures, syntax rules, versions, or fees are reproduced; consult GS1 or a national member organisation.',
    'GS1 standards are infrastructure and not compliance: they satisfy no legal traceability obligation and say nothing about what a business must trace.',
    'The standards structure data but do not verify it; a traceability system propagates whatever it was told, including errors and deliberate falsehoods.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'GS1 Traceability Standards: Identification and Event Data',
    description:
      'What GS1 standards provide — GTIN, GLN, SSCC, and event data — how they underpin cross-company traceability, and why infrastructure is not compliance.',
    keywords: [
      'GS1 standards',
      'GTIN',
      'GLN SSCC',
      'EPCIS',
      'food traceability',
    ],
  },
  structuredData: { article: true },
};
