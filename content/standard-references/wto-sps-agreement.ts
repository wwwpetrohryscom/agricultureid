import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const wtoSpsAgreement: StandardReferenceContent = {
  id: 'standard-reference-wto-sps-agreement',
  slug: 'wto-sps-agreement',
  contentType: 'standard-reference',
  title: 'WTO SPS Agreement',
  alternativeNames: [
    'SPS Agreement',
    'Agreement on the Application of Sanitary and Phytosanitary Measures',
    'Sanitary and phytosanitary measures agreement',
  ],
  category: 'Regulatory framework',
  subcategory: 'Trade law',
  standardClass: 'regulatory-framework',
  standardDomain: 'food-safety',
  summary:
    'The SPS Agreement governs how WTO members may protect human, animal, and plant health through trade measures. It does not set any health standard — it disciplines how members set theirs, which is why it is the hinge connecting Codex, the IPPC, and WOAH to enforceable trade law.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Agreement on the Application of Sanitary and Phytosanitary Measures is one of the agreements annexed to the Marrakesh Agreement establishing the World Trade Organization. It addresses a genuine tension. Countries have an undisputed right to protect human, animal, and plant life or health from risks arriving with traded goods — and a health measure is also an extremely convenient disguise for protectionism. The agreement exists to preserve the first while constraining the second.',
    },
    {
      type: 'paragraph',
      text: 'The crucial thing to understand is what it does not do. The SPS Agreement contains no maximum residue limit, no pest requirement, no hygiene rule, and no disease provision. It sets no health standard at all. What it does is discipline the way members adopt and apply their own measures — requiring them to rest on science, to be applied no more restrictively than necessary, and to be transparent about them. It is a framework about measures, not a measure.',
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
      label: 'Binds',
      value: 'WTO members, as a treaty obligation',
    },
    {
      label: 'Sets health standards',
      value: 'None — it disciplines how members set their own',
    },
    {
      label: 'Names as reference bodies',
      value:
        'Codex for food safety, the IPPC for plant health, WOAH for animal health',
    },
    {
      label: 'Enforced through',
      value: 'WTO dispute settlement between members — not against traders',
    },
  ],
  sections: [
    {
      id: 'what-it-disciplines',
      heading: 'What the agreement disciplines',
      body: [
        {
          type: 'paragraph',
          text: 'In scope terms the agreement applies to measures a member takes to protect human, animal, or plant life or health from risks arising from pests, diseases, additives, contaminants, toxins, and disease-carrying organisms in food, beverages, feedstuffs, plants, and animals. Its disciplines run broadly along these lines: measures should rest on scientific principles and evidence and be based on an assessment of risk; they should be applied only to the extent necessary and should not arbitrarily or unjustifiably discriminate between members where similar conditions prevail; and members should notify measures and make them transparent.',
        },
        {
          type: 'paragraph',
          text: 'Three further concepts do a great deal of work. Harmonisation encourages members to base measures on international standards. Equivalence requires a member to accept another member’s different measures if they achieve the same level of protection — different route, same destination. Regionalisation requires measures to be adapted to the conditions of the area a good comes from rather than the country as a whole, which is what makes pest free areas and disease-free zones tradeable concepts rather than academic ones.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The right to protect is affirmed, not constrained away',
          text: 'The agreement does not cap how protective a member may be. A member may set a higher level of protection than an international standard provides — the discipline is that it should be able to justify that choice scientifically, not that it must abandon it.',
        },
      ],
    },
    {
      id: 'the-three-bodies',
      heading: 'Why Codex, the IPPC, and WOAH matter',
      body: [
        {
          type: 'paragraph',
          text: 'The agreement’s most far-reaching effect is indirect. Rather than write health standards itself, it names three existing international standard-setting bodies as the reference for their domains: the Codex Alimentarius Commission for food safety, the International Plant Protection Convention for plant health, and the World Organisation for Animal Health for animal health. A member whose measures conform to the relevant international standard enjoys a presumption of consistency with the agreement.',
        },
        {
          type: 'paragraph',
          text: 'This single move transformed three sets of voluntary technical texts into the benchmarks of world agricultural trade. None of them became law — Codex still binds nobody, an ISPM still regulates nothing — but a member departing upward from them may be asked to justify the departure scientifically in a dispute. That is why negotiations in those bodies are contested, and why "Codex is voluntary" and "Codex is consequential" are both true at once.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A presumption, not a permission',
          text: 'Conformity with an international standard gives a member a presumption that its measure is consistent with the agreement. It confers nothing on a consignment or a trader, and it does not make any product admissible anywhere.',
        },
      ],
    },
    {
      id: 'who-it-binds',
      heading: 'Who it binds, and who it does not',
      body: [
        {
          type: 'paragraph',
          text: 'The agreement is an obligation between states. It binds WTO members in their conduct towards one another, and it is enforced through dispute settlement brought by one member against another. A trader cannot invoke it, cannot sue under it, and cannot rely on it when a consignment is refused. An exporter facing an import measure they consider unjustified has no standing under the agreement; the only route is to persuade their own government to take the matter up, which is slow, political, and rarely proportionate to one shipment.',
        },
        {
          type: 'paragraph',
          text: 'For anyone actually moving goods, therefore, the agreement is context rather than a tool. The operative rules remain the importing country’s measures as they stand today. The agreement may shape those measures over years through disputes, notifications, and negotiation, but it does nothing for a consignment at a border this week. Reading it as a source of rights for traders is the most common error made about it.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What it does not cover',
      body: [
        {
          type: 'list',
          items: [
            'No health standards — no limits, pest requirements, hygiene rules, or disease provisions of its own',
            'Not quality, labelling, or technical requirements generally — those fall under the TBT Agreement',
            'Not tariffs, valuation, or origin — separate agreements govern those',
            'No rights for traders — it binds members and is enforced between members',
            'Not a source of admissibility — the importing country’s measures govern a consignment',
          ],
        },
        {
          type: 'paragraph',
          text: 'The boundary with the TBT Agreement is the one most worth holding onto. If a measure protects health from the specific risks the SPS Agreement lists, it is an SPS measure. If it is a technical requirement about a product for some other purpose — labelling, quality, terminology, packaging — it falls under TBT instead. The same subject matter can produce measures of both kinds, and which agreement applies turns on the objective of the measure rather than on its form.',
        },
      ],
    },
  ],
  standardBody: 'World Trade Organization (WTO)',
  standardIdentifier:
    'Agreement on the Application of Sanitary and Phytosanitary Measures (SPS Agreement)',
  edition:
    'The text is that concluded in the Uruguay Round and annexed to the Marrakesh Agreement Establishing the World Trade Organization (1994), in force since 1 January 1995. The agreement text itself is not periodically reissued in editions; committee decisions, guidelines, and dispute rulings interpret and supplement it without amending it. Verify the current text and subsequent decisions against the WTO.',
  effectiveDate: '1995-01-01',
  jurisdiction: 'WTO members',
  legalStatus: 'mandatory',
  scopeSummary:
    'Disciplines on how WTO members may adopt and apply sanitary and phytosanitary measures — those protecting human, animal, or plant life or health from risks arising from pests, diseases, additives, contaminants, toxins, or disease-carrying organisms in food, beverages, feedstuffs, plants, and animals. In scope terms it addresses the scientific basis and risk assessment underlying measures, necessity and non-discrimination in their application, harmonisation with international standards, equivalence of differing measures achieving the same protection, regionalisation and adaptation to regional conditions, and transparency and notification. It establishes no health standard of its own.',
  conformityAssessment:
    'Not applicable in the certification sense. The agreement is not conformity-assessed and nothing is certified against it. Compliance by members is tested, if at all, through WTO dispute settlement brought by one member against another, and is monitored through the SPS Committee and notification procedures.',
  assessedBy:
    'WTO dispute settlement panels and the Appellate Body, in disputes between members; the SPS Committee provides ongoing multilateral review. No body assesses traders or consignments against the agreement.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the SPS Agreement disciplines and how it connects international standards to trade law. It reproduces no article, provision, or annex of the agreement, and quotes no treaty text.',
    'No article numbers, dispute rulings, or interpretations are cited here. The agreement’s meaning in any respect is determined by its text as interpreted through WTO dispute settlement, not by a summary.',
    'This is not legal advice, and nothing here is a statement of any member’s rights or obligations, or of whether any measure is consistent with the agreement.',
    'Traders have no standing under the agreement. Nothing here creates or describes any right available to an exporter, importer, or consignment.',
    'AgricultureID is not a certification body, accreditation body, scheme owner, legal adviser, or competent authority, and confers no recognition of any kind.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
    { type: 'standard-reference', slug: 'wto-tbt-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The scope and disciplines of the SPS Agreement, its designation of international standard-setting bodies, and its place among the WTO agreements',
    },
    {
      sourceId: 'codex',
      citedFor:
        'Codex as the international reference standard-setting body for food safety',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'The IPPC as the international reference standard-setting body for plant health',
    },
    {
      sourceId: 'woah',
      citedFor:
        'WOAH as the international reference standard-setting body for animal health',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'WTO members. The agreement binds members in their conduct towards one another; it has no application to non-members and creates no rights for private parties anywhere.',
  limitations: [
    'A description of a trade agreement’s function, not the treaty text, and emphatically not legal advice.',
    'No articles, provisions, or dispute rulings are reproduced or cited; the agreement’s meaning is determined by its text as interpreted in dispute settlement.',
    'The agreement binds members, not traders; it gives an exporter no remedy and makes no consignment admissible.',
    'Whether any specific national measure is consistent with the agreement is a legal question that can only be resolved through dispute settlement, and no view is offered here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'WTO SPS Agreement: What It Disciplines and What It Does Not',
    description:
      'How the WTO SPS Agreement disciplines national health measures without setting any health standard, and why it makes Codex, IPPC, and WOAH the benchmarks.',
    keywords: [
      'SPS Agreement',
      'sanitary and phytosanitary measures',
      'WTO SPS',
      'international standards trade',
      'equivalence regionalisation',
    ],
  },
  structuredData: { article: true },
};
