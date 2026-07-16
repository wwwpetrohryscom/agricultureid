import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const woahTerrestrialAnimalHealthCode: StandardReferenceContent = {
  id: 'standard-reference-woah-terrestrial-animal-health-code',
  slug: 'woah-terrestrial-animal-health-code',
  contentType: 'standard-reference',
  title: 'WOAH Terrestrial Animal Health Code',
  alternativeNames: [
    'Terrestrial Code',
    'OIE Terrestrial Code',
    'World Organisation for Animal Health code',
    'WOAH Terrestrial Code',
  ],
  category: 'Regulatory framework',
  subcategory: 'Animal health',
  standardClass: 'regulatory-framework',
  standardDomain: 'animal-health',
  summary:
    'The Terrestrial Animal Health Code is WOAH’s standard for safe international trade in terrestrial animals and their products. It is the animal-health reference named by the WTO SPS Agreement, and its distinctive feature is official disease status — a mechanism with no equivalent in food safety or plant health.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The World Organisation for Animal Health — long known as the OIE, and still frequently referred to by that name — sets the international standards for animal health and zoonoses. Its Terrestrial Animal Health Code addresses terrestrial animals and their products, with a companion code covering aquatic animals. Its purpose is to enable safe international trade: to describe measures that an importing country can use to protect itself from disease introduction without restricting trade beyond what the risk warrants.',
    },
    {
      type: 'paragraph',
      text: 'Under the WTO SPS Agreement, WOAH is the named reference body for animal health, occupying the position that Codex holds for food safety and the IPPC for plant health. But WOAH does one thing neither of the others does: it officially recognises the disease status of countries and zones for certain diseases. That recognition is a formal determination by an international body, it is published, and it directly conditions market access — which makes it one of the most commercially consequential mechanisms in agricultural trade.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value: 'World Organisation for Animal Health (WOAH, formerly OIE)',
    },
    {
      label: 'Instrument',
      value:
        'Terrestrial Animal Health Code — with a separate Aquatic Animal Health Code',
    },
    {
      label: 'Purpose',
      value:
        'Standards for safe international trade in terrestrial animals and animal products',
    },
    {
      label: 'Adopted by',
      value:
        'WOAH’s World Assembly of Delegates, representing member countries',
    },
    {
      label: 'Distinctive mechanism',
      value: 'Official recognition of disease status for countries and zones',
    },
    {
      label: 'Legal status',
      value:
        'Standards for members, given effect through national measures; the reference under the WTO SPS Agreement',
    },
    {
      label: 'Applied by',
      value: 'National veterinary services — WOAH inspects no consignment',
    },
  ],
  sections: [
    {
      id: 'what-the-code-covers',
      heading: 'What the code covers',
      body: [
        {
          type: 'paragraph',
          text: 'In scope terms the Terrestrial Code addresses the measures relevant to safe trade in terrestrial animals and their products. It covers, broadly, the quality and evaluation of veterinary services; disease notification and epidemiological information; import risk analysis; requirements relating to zoning, compartmentalisation, and surveillance; certification procedures and the role of veterinary certificates; animal welfare; and disease-specific chapters setting out recommendations for trade in relation to individual listed diseases.',
        },
        {
          type: 'paragraph',
          text: 'The disease-specific chapters are the operative heart of it for traders, and they are structured around a question: given a disease and a commodity, what can an importing country reasonably require, and what should it accept? Some animal products carry negligible risk for a given disease regardless of the exporting country’s status; others carry risk that depends entirely on status, zone, surveillance, or processing. The code exists so that those distinctions are made on evidence rather than by reflex, and none of its recommendations are reproduced here.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Veterinary services are themselves a subject of the code',
          text: 'Animal-health assurance rests on the competence and independence of the exporting country’s veterinary service. The code therefore addresses the quality of veterinary services directly — the certifier’s credibility is treated as part of the standard, not as an assumption.',
        },
      ],
    },
    {
      id: 'official-disease-status',
      heading: 'Official disease status: the mechanism that has no equivalent',
      body: [
        {
          type: 'paragraph',
          text: 'For certain listed diseases, a member country may apply to WOAH for official recognition of its disease status — for the whole country or for a defined zone within it — and WOAH assesses the application against the code and publishes the outcome. This is a genuine anomaly in international standards. Codex recognises no country as anything, and the IPPC recognises no pest free area; recognition of a pest free area is something importing countries extend bilaterally. WOAH alone makes and publishes formal status determinations.',
        },
        {
          type: 'paragraph',
          text: 'The commercial weight of this is difficult to overstate. Official status is what opens or closes markets for live animals and animal products, and a status loss following an outbreak can suspend a country’s exports of an entire product class within days. Recovery is not automatic: it requires meeting the code’s conditions for regaining status, which typically involve time, surveillance, and evidence. Whole national export sectors have been built and unbuilt around this mechanism.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Recognition is not admissibility',
          text: 'Official status is a determination about a country or zone, not a permission for a consignment. Importing countries set their own requirements and may require more than the code recommends; they are not obliged to accept a WOAH status as sufficient.',
        },
      ],
    },
    {
      id: 'zoning-and-compartments',
      heading: 'Zoning and compartmentalisation',
      body: [
        {
          type: 'paragraph',
          text: 'The code develops two ideas that make trade possible when a disease is present somewhere in a country. Zoning defines a geographically delimited area with a distinct health status, so that an outbreak in one region need not close a whole country’s exports. Compartmentalisation defines a status boundary by management and biosecurity practice rather than geography — an establishment or set of establishments with a demonstrably separate epidemiological unit.',
        },
        {
          type: 'paragraph',
          text: 'Both connect directly to the SPS Agreement’s regionalisation discipline, which requires members to adapt measures to the conditions of the area a good comes from. Zoning and compartmentalisation are the technical machinery that makes that legal obligation operable — without a defensible way to define and demonstrate an area’s status, adapting to it would be impossible. Whether an importing country recognises another’s zone or compartment is, in the end, a bilateral matter.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What the code does not cover',
      body: [
        {
          type: 'list',
          items: [
            'Not plant health — the IPPC and its ISPMs govern that',
            'Not food safety generally — Codex and national food law govern that, though the codes meet on zoonoses',
            'Not aquatic animals — a separate WOAH code covers those',
            'Not quality or grade — grading standards and contracts govern that',
            'Not admissibility — importing countries set requirements and may exceed the code',
            'Not self-executing — the code regulates nothing until a country applies it',
          ],
        },
        {
          type: 'paragraph',
          text: 'One boundary deserves particular care because it is genuinely blurred. Zoonoses are diseases transmissible between animals and humans, so they are simultaneously an animal-health matter for WOAH and a food-safety matter for Codex. The two bodies coordinate, but a reader should not assume that either one is the complete answer for a zoonotic hazard in a traded product; both layers, and the importing country’s law, apply.',
        },
      ],
    },
  ],
  standardBody:
    'World Organisation for Animal Health (WOAH, formerly the OIE) — standards adopted by its World Assembly of Delegates',
  standardIdentifier: 'Terrestrial Animal Health Code',
  edition:
    'Edition not stated here — the Terrestrial Code is revised on an ongoing basis, with amendments adopted by the World Assembly of Delegates and reissued periodically. Verify the current edition and the current text of the specific chapter against WOAH’s official publication.',
  jurisdiction:
    'Global. WOAH standards apply to its member countries as international standards given effect through national measures; the code regulates no consignment directly, and the operative requirement is always the importing country’s.',
  legalStatus: 'voluntary',
  scopeSummary:
    'International standards for safe trade in terrestrial animals and animal products, and for the animal-health assurance underpinning it. In scope terms the code addresses the quality and evaluation of veterinary services; disease notification and epidemiological information; import risk analysis; zoning, compartmentalisation, and surveillance; veterinary certification procedures; animal welfare; and disease-specific recommendations for trade in relation to individual listed diseases. WOAH additionally operates official recognition of disease status for countries and zones for certain diseases.',
  conformityAssessment:
    'Two distinct mechanisms. For consignments, there is no WOAH assessment at all: the exporting country’s veterinary service certifies and the importing country’s verifies, under national law. Separately, WOAH itself assesses member country applications for official recognition of disease status for certain listed diseases, against the code, and publishes the outcome — a determination about a country or zone, not about any consignment.',
  assessedBy:
    'National veterinary services of exporting and importing countries, for consignments. WOAH, through its own procedures, for official recognition of country and zone disease status. WOAH inspects no consignment and issues no veterinary certificate.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the Terrestrial Code covers and how official disease status functions. It reproduces no chapter, article, or recommendation of the code, and states no disease-specific requirement.',
    'No waiting period, surveillance requirement, treatment specification, certificate wording, or condition for gaining or regaining disease status is stated here. These are set out in the code and are revised.',
    'The Terrestrial Code is a copyrighted publication of WOAH. Work from the official text of the specific chapter, in the edition in force.',
    'Nothing here states the disease status of any country or zone. Status determinations are made and published by WOAH, change following outbreaks, and must be verified against WOAH’s official lists at the time of reliance.',
    'AgricultureID is not a veterinary authority, certification body, or competent authority. It assesses nothing, certifies nothing, and confers no disease status or recognition.',
  ],
  applicableCommodityClasses: ['livestock-product'],
  relatedStandards: [
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
  ],
  sourceReferences: [
    {
      sourceId: 'woah',
      citedFor:
        'The scope of the Terrestrial Animal Health Code, its adoption by the World Assembly of Delegates, and the official disease status recognition procedure',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The status of WOAH standards as the international reference for animal health under the SPS Agreement, and the regionalisation discipline',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Animal health, livestock trade, and transboundary disease context',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. WOAH has wide member-country coverage, but the extent to which national measures follow the code varies, and disease status differs by country and zone and changes over time.',
  limitations: [
    'A description of a standards framework, not the code, and not veterinary, regulatory, or legal advice.',
    'No chapters, recommendations, disease-specific conditions, or certificate wordings are reproduced; consult the official code and the importing country’s veterinary authority.',
    'No country or zone disease status is stated here; status is determined and published by WOAH and changes, sometimes abruptly following an outbreak.',
    'Import requirements are set by importing countries, may exceed the code, and vary by commodity, origin, and disease; they cannot be derived from this page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'WOAH Terrestrial Animal Health Code: Disease Status',
    description:
      'What the WOAH Terrestrial Code covers, how official disease status recognition works, and how zoning and compartmentalisation enable trade.',
    keywords: [
      'WOAH Terrestrial Code',
      'OIE Terrestrial Animal Health Code',
      'official disease status',
      'animal health trade',
      'zoning compartmentalisation',
    ],
  },
  structuredData: { article: true },
};
