import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const uneceFreshProduceStandards: StandardReferenceContent = {
  id: 'standard-reference-unece-fresh-produce-standards',
  slug: 'unece-fresh-produce-standards',
  contentType: 'standard-reference',
  title: 'UNECE Fresh Produce Standards',
  alternativeNames: [
    'UNECE agricultural quality standards',
    'UNECE fresh fruit and vegetable standards',
    'WP.7 standards',
  ],
  category: 'Standard',
  subcategory: 'Quality grading',
  standardClass: 'standard',
  standardDomain: 'quality-grading',
  summary:
    'The UNECE agricultural quality standards are a family of commercial quality standards for fresh fruit and vegetables and other produce, negotiated at the UN Economic Commission for Europe. They are the international template behind much of the world’s produce grading — but they are quality standards, not food-safety ones, and they bind nobody until adopted.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The United Nations Economic Commission for Europe maintains a large family of agricultural quality standards, developed through its Working Party on Agricultural Quality Standards and its specialised sections. The best known cover fresh fruit and vegetables, with further sections addressing dry and dried produce, seed potatoes, and meat. Each standard covers one produce type — apples, table grapes, citrus, potatoes — and there are many of them; "the UNECE standard" without naming a produce identifies nothing.',
    },
    {
      type: 'paragraph',
      text: 'What these standards do is define commercial quality so that produce can be traded by description. They establish, for a given produce, how it is classified into quality classes, how it is sized, what tolerances apply, how it must be presented and packed, and how it must be marked. That is a different question from whether the produce is safe to eat — and keeping those two questions apart is the single most important thing to understand about this family of standards.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'United Nations Economic Commission for Europe (UNECE), Working Party on Agricultural Quality Standards',
    },
    {
      label: 'Structure',
      value:
        'A family of standards, one per produce type — not a single document',
    },
    {
      label: 'Coverage',
      value:
        'Fresh fruit and vegetables; also dry and dried produce, seed potatoes, and meat',
    },
    {
      label: 'Subject',
      value:
        'Commercial quality — classes, sizing, tolerances, presentation, marking',
    },
    {
      label: 'Not about',
      value: 'Food safety, residues, contaminants, or hygiene',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary — binding only where a country or region adopts a standard into law',
    },
    {
      label: 'Trade role',
      value:
        'The international template underlying much national and regional produce grading',
    },
  ],
  sections: [
    {
      id: 'what-they-cover',
      heading: 'What the standards cover',
      body: [
        {
          type: 'paragraph',
          text: 'Each UNECE produce standard addresses the same broad territory, applied to its own produce. In scope terms a standard typically defines the produce it applies to; sets minimum requirements that all produce must meet to be traded at all; establishes quality classes that rank produce above that minimum; provides for sizing; permits tolerances, since natural produce cannot be uniform; and specifies requirements for uniformity, packaging, presentation, and the marking that identifies the packer, the origin, the class, and the size.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Minimum requirements',
              description:
                'The floor. Produce failing these is not tradeable under the standard at any class — a gate rather than a grade.',
            },
            {
              term: 'Quality classes',
              description:
                'The ranking above the floor, defined by permitted defects and appearance. This is what lets a price attach to a description.',
            },
            {
              term: 'Sizing',
              description:
                'Classification by diameter, weight, or count depending on the produce. Sizing is not quality — a small fruit is not a worse fruit.',
            },
            {
              term: 'Tolerances',
              description:
                'The permitted proportion of a lot not meeting its declared class or size. Their existence is what makes trade by description workable with natural produce.',
            },
            {
              term: 'Marking',
              description:
                'What must appear on the package so the description travels with the goods and can be checked against them.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tolerances are the honest part of any grading standard',
          text: 'No lot of natural produce is uniform, and a standard that pretended otherwise would be unusable. Tolerances state how much deviation a class permits — which means a compliant lot is expected to contain some produce that does not meet its own class.',
        },
      ],
    },
    {
      id: 'quality-not-safety',
      heading: 'Quality is not safety',
      body: [
        {
          type: 'paragraph',
          text: 'These standards concern appearance, condition, size, uniformity, and presentation. They do not address pesticide residues, contaminants, microbiological hazards, or hygiene. A consignment can conform perfectly to a UNECE quality standard and still be inadmissible on residue grounds; and produce that is entirely safe can fail the standard for being misshapen or wrongly sized. The two systems answer different questions and neither substitutes for the other.',
        },
        {
          type: 'paragraph',
          text: 'This matters commercially because the two are enforced by different mechanisms and often by different inspectorates. Quality conformity is typically checked by an agricultural or produce inspection service against the applicable marketing standard; safety is checked by food-safety authorities against residue and contaminant law. A consignment crossing a border may face both, independently, and pass one while failing the other.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A quality class is not an endorsement',
          text: 'The top class of any produce standard means the produce is of superior appearance and condition for that produce. It says nothing about how it was grown, whether it was treated, its nutritional value, or its safety.',
        },
      ],
    },
    {
      id: 'status-and-adoption',
      heading: 'Status: voluntary, and enormously influential',
      body: [
        {
          type: 'paragraph',
          text: 'UNECE standards bind nobody in themselves. Their influence comes through adoption: regional and national authorities have built marketing standards on them, trade associations reference them, and contracts incorporate them. Where a jurisdiction has adopted a standard into a marketing regulation, conformity becomes a legal requirement for produce placed on that market — but the legal instrument is the national or regional one, and it may follow the UNECE text closely or depart from it.',
        },
        {
          type: 'paragraph',
          text: 'The UNECE develops standards; it does not inspect produce, certify anyone, or enforce anything. Conformity checks are carried out by national inspection services or by trading parties under contract. A claim that produce is "UNECE certified" describes nothing that exists — the correct claim is that a lot conforms to a named standard, checked by whoever checked it.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What this page does not give',
      body: [
        {
          type: 'list',
          items: [
            'No class definitions, size scales, tolerance percentages, or defect limits for any produce',
            'No statement of which standard applies in any market — that is set by national or regional law',
            'No safety, residue, or contaminant information — a separate domain entirely',
            'No conformity assessment of any lot, and no certification of anyone',
          ],
        },
        {
          type: 'paragraph',
          text: 'The reason for the first of these is worth stating. A grading criterion is meaningful only within its standard, alongside the definitions, tolerances, and inspection method that accompany it, and standards are revised. A tolerance figure quoted loose from that apparatus invites reliance it cannot support, and one quoted accurately today ages silently. The standard itself is the only reliable source, and it is where a trader must go.',
        },
      ],
    },
  ],
  standardBody:
    'United Nations Economic Commission for Europe (UNECE) — standards developed through the Working Party on Agricultural Quality Standards and its specialised sections',
  standardIdentifier:
    'UNECE agricultural quality standards — a family of standards issued individually, one per produce type',
  edition:
    'Edition not stated here — each UNECE produce standard is issued and revised individually and carries its own version and date; there is no single dated edition of the family. Verify the current version of the specific produce standard against UNECE’s official publication, and note that an adopting jurisdiction may reference a particular version.',
  jurisdiction:
    'Global reference, developed under a regional UN commission but used internationally. The standards have no direct legal force; they apply where a country or region adopts them into a marketing standard, or where a contract incorporates them.',
  legalStatus: 'voluntary',
  scopeSummary:
    'A family of commercial quality standards for agricultural produce — principally fresh fruit and vegetables, with further specialised sections covering dry and dried produce, seed potatoes, and meat — each standard covering one produce type. In scope terms a standard defines the produce covered, minimum requirements for tradeability, quality classes, sizing provisions, tolerances, and requirements for uniformity, packaging, presentation, and marking. The standards address commercial quality only and contain no food-safety, residue, contaminant, or hygiene provisions.',
  conformityAssessment:
    'None at the UNECE level. UNECE develops standards and operates no inspection, certification, or conformity-assessment mechanism. Conformity is checked by national or regional produce inspection services where a standard has been adopted into a marketing regulation, and by trading parties, surveyors, or inspection companies where a contract incorporates a standard.',
  assessedBy:
    'National or regional produce inspection services under adopted marketing standards; or trading parties and appointed inspection companies under contract. UNECE inspects nothing and certifies nobody.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the UNECE agricultural quality standards cover and how they are structured. It reproduces no standard, no class definition, no minimum requirement, no size scale, and no tolerance.',
    'No numerical criterion of any kind is stated for any produce. Grading criteria are meaningful only within their own standard, alongside its definitions, tolerances, and inspection method, and standards are revised — consult the official text of the specific produce standard.',
    'No version or date is asserted for any standard in the family. Each is issued and revised individually.',
    'Which standard applies in any market, and in which version, is determined by the adopting jurisdiction’s law or by the contract, not by UNECE and not by this page.',
    'AgricultureID is not an inspection service, certification body, or competent authority. It grades nothing, inspects nothing, and confers no conformity or recognition. There is no such thing as UNECE certification.',
  ],
  applicableCommodityClasses: ['fruit', 'vegetable', 'root-tuber', 'nut'],
  relatedStandards: [
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'wto-tbt-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
  ],
  sourceReferences: [
    {
      sourceId: 'unece-standards',
      citedFor:
        'The UNECE agricultural quality standards family, the Working Party on Agricultural Quality Standards, and the scope and structure of the produce standards',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The role of international standards as a basis for technical regulation under the TBT Agreement',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Regional marketing standards context for fresh fruit and vegetables',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'International context for the application of agricultural produce quality standards in trade',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Developed under a regional UN commission but used as an international reference. Legal effect exists only where a jurisdiction has adopted a standard; adoption, and the version adopted, vary by market.',
  limitations: [
    'A description of a family of quality standards, not any standard itself, and not grading, inspection, or regulatory advice.',
    'No classes, minimum requirements, sizes, tolerances, or defect limits are reproduced for any produce; consult the official standard for the produce in question.',
    'The standards address commercial quality only. They say nothing about safety, residues, contaminants, hygiene, or how produce was grown.',
    'Which standard applies, in which version, and how it is enforced depends on the market and the contract, and is not described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'UNECE Fresh Produce Standards: Commercial Quality Grading',
    description:
      'What the UNECE agricultural quality standards cover — classes, sizing, tolerances, and marking — and why they are not food-safety standards.',
    keywords: [
      'UNECE standards',
      'fresh produce quality standards',
      'produce grading',
      'quality classes tolerances',
      'agricultural marketing standards',
    ],
  },
  structuredData: { article: true },
};
