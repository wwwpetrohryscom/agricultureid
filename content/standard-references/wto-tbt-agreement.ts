import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const wtoTbtAgreement: StandardReferenceContent = {
  id: 'standard-reference-wto-tbt-agreement',
  slug: 'wto-tbt-agreement',
  contentType: 'standard-reference',
  title: 'WTO TBT Agreement',
  alternativeNames: [
    'TBT Agreement',
    'Agreement on Technical Barriers to Trade',
    'Technical barriers to trade',
  ],
  category: 'Regulatory framework',
  subcategory: 'Trade law',
  standardClass: 'regulatory-framework',
  standardDomain: 'measurement',
  summary:
    'The TBT Agreement disciplines technical regulations, standards, and conformity assessment procedures so they do not become disguised trade barriers. For agriculture it is the agreement behind labelling, quality, and terminology requirements — everything that is not a health measure.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Agreement on Technical Barriers to Trade is the companion to the SPS Agreement among the WTO agreements annexed to the Marrakesh Agreement. Where the SPS Agreement governs measures protecting health, the TBT Agreement governs technical requirements generally: product characteristics, terminology, symbols, packaging, marking, and labelling, together with the standards and conformity assessment procedures that go with them.',
    },
    {
      type: 'paragraph',
      text: 'Its underlying problem is the same and its answer is similar. Technical requirements are legitimate and necessary — countries regulate for safety, consumer information, environmental protection, and fair competition — but they are also an efficient way to keep foreign goods out without ever mentioning a tariff. The agreement therefore does not stop members from regulating. It requires that when they do, they do it in ways that are not unnecessarily restrictive, that do not discriminate, and that are based on international standards where those exist.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value: 'World Trade Organization (WTO)',
    },
    {
      label: 'Instrument',
      value:
        'An agreement annexed to the Marrakesh Agreement establishing the WTO',
    },
    {
      label: 'In force since',
      value: '1 January 1995, with the WTO Agreement',
    },
    {
      label: 'Covers',
      value:
        'Technical regulations, standards, and conformity assessment procedures',
    },
    {
      label: 'Boundary with SPS',
      value:
        'If the measure protects health from SPS risks it is SPS; otherwise it is TBT',
    },
    {
      label: 'Agricultural relevance',
      value:
        'Labelling, quality and grading requirements, terminology, packaging, marking',
    },
    {
      label: 'Enforced through',
      value: 'WTO dispute settlement between members — not against traders',
    },
  ],
  sections: [
    {
      id: 'what-it-covers',
      heading: 'What the agreement covers',
      body: [
        {
          type: 'paragraph',
          text: 'The agreement distinguishes three things it treats differently. A technical regulation lays down product characteristics or related processes with which compliance is mandatory. A standard is a document approved by a recognised body providing rules or guidelines with which compliance is voluntary. A conformity assessment procedure is any procedure used to determine that requirements are fulfilled — testing, inspection, certification, accreditation. The distinction between mandatory and voluntary is what allocates a measure to the first or second category, and it changes what disciplines apply.',
        },
        {
          type: 'paragraph',
          text: 'In scope terms the disciplines run along familiar lines: technical regulations should not be more trade-restrictive than necessary to fulfil a legitimate objective; they should not discriminate against imported goods or between sources; they should be based on relevant international standards where those exist and are appropriate; members should give positive consideration to accepting other members’ regulations as equivalent and to recognising other members’ conformity assessment results; and measures should be notified and made transparent.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Conformity assessment is a barrier in its own right',
          text: 'A requirement can be perfectly reasonable and still exclude, if satisfying it means testing only in the importing country, at the exporter’s cost, with results nobody else recognises. This is why recognition of conformity assessment results carries as much weight in the agreement as the requirements themselves.',
        },
      ],
    },
    {
      id: 'sps-or-tbt',
      heading: 'The boundary with the SPS Agreement',
      body: [
        {
          type: 'paragraph',
          text: 'The two agreements are mutually exclusive and the line between them is drawn by the objective of the measure, not by its subject matter or its form. If a measure addresses the risks that the SPS Agreement enumerates — pests, diseases, additives, contaminants, toxins, disease-carrying organisms — it is an SPS measure and the SPS Agreement applies. Every other technical requirement about a product falls to the TBT Agreement.',
        },
        {
          type: 'paragraph',
          text: 'Food labelling illustrates this well. A label requirement warning of an allergen addresses a health risk and is an SPS matter. A label requirement about the country of origin, the name of the food, or the net quantity is a consumer-information matter and is a TBT one. The same physical label can therefore carry requirements answering to two different agreements, which is unintuitive but follows directly from the objective test.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Neither agreement makes anything admissible',
          text: 'A consignment must satisfy the importing country’s actual requirements, whichever agreement disciplines them. Both agreements bind members in how they legislate; neither gives a trader a right to entry.',
        },
      ],
    },
    {
      id: 'why-agriculture-cares',
      heading: 'Why it matters in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'Much of what constrains agricultural trade is not about health at all. Grading and quality requirements, size and packaging rules, names that may be used for a food, organic labelling claims, and the conformity assessment behind them are all TBT territory. So is the recognition question that determines whether a test done at origin counts at destination — a matter of real commercial weight for exporters of anything that must be analysed before entry.',
        },
        {
          type: 'paragraph',
          text: 'The agreement’s encouragement to base regulations on international standards is also part of why bodies like UNECE, ISO, and Codex matter beyond their own membership. A member regulating in line with a relevant international standard occupies a defensible position; one departing from it may have to explain why. That does not oblige anyone to adopt any standard, and members frequently do not.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What it does not do',
      body: [
        {
          type: 'list',
          items: [
            'Sets no technical requirement — it disciplines how members set theirs',
            'Does not cover SPS measures — health-risk measures fall under the SPS Agreement',
            'Does not cover tariffs, valuation, origin, or subsidies — separate agreements govern those',
            'Creates no rights for traders — it binds members and is enforced between them',
            'Does not harmonise anything by itself — it encourages the use of international standards',
          ],
        },
        {
          type: 'paragraph',
          text: 'As with the SPS Agreement, the practical position for anyone moving goods is that the TBT Agreement is background. It shapes what importing countries may require, over years and through disputes. It does nothing for a consignment held at a border for a labelling defect today, and it gives the exporter no remedy of their own.',
        },
      ],
    },
  ],
  standardBody: 'World Trade Organization (WTO)',
  standardIdentifier:
    'Agreement on Technical Barriers to Trade (TBT Agreement)',
  edition:
    'The text is that concluded in the Uruguay Round and annexed to the Marrakesh Agreement Establishing the World Trade Organization (1994), in force since 1 January 1995. The agreement text itself is not periodically reissued in editions; committee decisions, guidelines, and dispute rulings interpret and supplement it without amending it. Verify the current text and subsequent decisions against the WTO.',
  effectiveDate: '1995-01-01',
  jurisdiction: 'WTO members',
  legalStatus: 'mandatory',
  scopeSummary:
    'Disciplines on WTO members’ technical regulations, standards, and conformity assessment procedures — covering product characteristics, related processes and production methods, terminology, symbols, packaging, marking, and labelling — where these are not sanitary or phytosanitary measures. In scope terms it addresses necessity and legitimate objectives, non-discrimination, the use of relevant international standards as a basis for regulation, equivalence of other members’ technical regulations, recognition of other members’ conformity assessment results, and transparency and notification. It establishes no technical requirement of its own.',
  conformityAssessment:
    'Not applicable in the certification sense — nothing is certified against the agreement. It does, however, discipline conformity assessment procedures themselves, requiring that they not be more strict or more restrictive than necessary and encouraging recognition of other members’ results. Members’ compliance is tested, if at all, through WTO dispute settlement, and monitored through the TBT Committee and notification procedures.',
  assessedBy:
    'WTO dispute settlement panels and the Appellate Body, in disputes between members; the TBT Committee provides ongoing multilateral review. No body assesses traders or consignments against the agreement.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the TBT Agreement disciplines and how it differs from the SPS Agreement. It reproduces no article, provision, or annex of the agreement, and quotes no treaty text.',
    'No article numbers, dispute rulings, or interpretations are cited here. The agreement’s meaning in any respect is determined by its text as interpreted through WTO dispute settlement, not by a summary.',
    'The definitions of technical regulation, standard, and conformity assessment procedure are given in the agreement itself and are summarised here only in general descriptive terms, not reproduced.',
    'This is not legal advice, and nothing here is a statement of any member’s rights or obligations, or of whether any measure is consistent with the agreement. Traders have no standing under the agreement.',
    'AgricultureID is not a certification body, accreditation body, scheme owner, legal adviser, or competent authority, and confers no recognition of any kind.',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The scope and disciplines of the TBT Agreement, its treatment of technical regulations, standards, and conformity assessment, and its boundary with the SPS Agreement',
    },
    {
      sourceId: 'iso',
      citedFor:
        'International standards and conformity assessment concepts referenced by the agreement',
    },
    {
      sourceId: 'unece-standards',
      citedFor:
        'International agricultural quality standards as a basis for technical regulation',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'WTO members. The agreement binds members in their conduct towards one another; it has no application to non-members and creates no rights for private parties anywhere.',
  limitations: [
    'A description of a trade agreement’s function, not the treaty text, and not legal advice.',
    'No articles, provisions, or dispute rulings are reproduced or cited; the agreement’s meaning is determined by its text as interpreted in dispute settlement.',
    'The agreement binds members, not traders; it gives an exporter no remedy and makes no consignment admissible.',
    'Whether a given measure falls under TBT or SPS, and whether it is consistent with either, are legal questions not answered here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'WTO TBT Agreement: Technical Barriers to Trade Explained',
    description:
      'What the WTO TBT Agreement disciplines, how technical regulations differ from standards, and where the boundary with the SPS Agreement falls.',
    keywords: [
      'TBT Agreement',
      'technical barriers to trade',
      'technical regulation',
      'conformity assessment',
      'WTO TBT',
    ],
  },
  structuredData: { article: true },
};
