import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const ippcPhytosanitaryStandards: StandardReferenceContent = {
  id: 'standard-reference-ippc-phytosanitary-standards',
  slug: 'ippc-phytosanitary-standards',
  contentType: 'standard-reference',
  title: 'IPPC Phytosanitary Standards (ISPMs)',
  alternativeNames: [
    'ISPMs',
    'International Standards for Phytosanitary Measures',
    'International Plant Protection Convention',
    'IPPC standards',
  ],
  category: 'Standard',
  subcategory: 'Plant health',
  standardClass: 'standard',
  standardDomain: 'plant-health',
  summary:
    'The International Standards for Phytosanitary Measures are the ISPMs adopted under the International Plant Protection Convention. They are the plant-health counterpart to Codex: the international reference under the WTO SPS Agreement, applied through national plant protection organisations rather than by the IPPC itself.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The International Plant Protection Convention is a multilateral treaty aimed at preventing the introduction and spread of pests of plants and plant products and promoting appropriate measures for their control. Its contracting parties adopt International Standards for Phytosanitary Measures — the ISPMs — through the Commission on Phytosanitary Measures. Each ISPM is a separate numbered standard with its own subject, adopted and revised individually; there is no single consolidated phytosanitary code.',
    },
    {
      type: 'paragraph',
      text: 'The ISPMs are best understood as the plant-health analogue of Codex. Like Codex, they are the international reference standard named by the WTO SPS Agreement for their domain, which gives voluntary texts real consequence in trade disputes. Unlike Codex, they sit under a treaty whose contracting parties take on obligations, and they are applied through a specific institutional structure: each country’s national plant protection organisation, which does the inspecting, certifying, and regulating that the standards describe.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'International Plant Protection Convention (IPPC), through its Commission on Phytosanitary Measures',
    },
    {
      label: 'Secretariat',
      value: 'Hosted by the Food and Agriculture Organization (FAO)',
    },
    {
      label: 'What it produces',
      value: 'ISPMs — individually numbered and separately adopted standards',
    },
    {
      label: 'Subject',
      value:
        'Preventing introduction and spread of pests of plants and plant products',
    },
    {
      label: 'Applied by',
      value: 'National plant protection organisations (NPPOs) in each country',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary standards under a treaty framework — enforced through national measures',
    },
    {
      label: 'Trade role',
      value:
        'The international reference for plant health under the WTO SPS Agreement',
    },
  ],
  sections: [
    {
      id: 'what-the-ispms-cover',
      heading: 'What the ISPMs cover',
      body: [
        {
          type: 'paragraph',
          text: 'The ISPM series spans the machinery of plant-health protection in international trade. In broad scope terms it includes standards on pest risk analysis; on the establishment and recognition of pest free areas, places of production, and areas of low pest prevalence; on surveillance and pest reporting; on the design and operation of export certification systems; on phytosanitary certificates; on regulated pests and their categorisation; on inspection, sampling, and consignment verification; on phytosanitary treatments; on the regulation of wood packaging material in trade; and on terminology.',
        },
        {
          type: 'paragraph',
          text: 'Those subjects sort into two useful groups. Some ISPMs are conceptual frameworks — how to analyse pest risk, how to categorise a pest, what a pest free area means — which give countries a shared method for reaching defensible decisions. Others are operational — how certification systems should work, what a phytosanitary certificate is, how treatments are specified. The trade-facing consequence of the whole series is that a consignment’s admissibility on plant-health grounds is decided by processes the ISPMs standardise, even though the decision itself is always national.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'ISPM numbers identify subjects, not a sequence',
          text: 'Each ISPM is a self-contained standard on its own subject with its own adoption and revision history. Citing "the ISPMs" collectively identifies nothing specific — the operative unit is a numbered standard in the revision in force.',
        },
      ],
    },
    {
      id: 'how-they-take-effect',
      heading: 'How a voluntary standard reaches a consignment',
      body: [
        {
          type: 'paragraph',
          text: 'The ISPMs do not regulate consignments. Contracting parties to the Convention undertake to establish a national plant protection organisation and to base their phytosanitary measures on international standards where they exist. It is that national organisation which sets import requirements, issues phytosanitary certificates for exports, inspects, and refuses entry. When a consignment is stopped, it is stopped under national law by a national authority — the ISPM in the background supplies the method and the vocabulary.',
        },
        {
          type: 'paragraph',
          text: 'The SPS Agreement then does for plant health what it does for food safety. It names the IPPC as the relevant international standard-setting body, so measures conforming to an ISPM are presumed consistent with a member’s SPS obligations, while stricter measures may require scientific justification through pest risk analysis. This is the reason pest risk analysis carries such weight: it is the mechanism by which a country justifies a measure that goes beyond the international standard.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Import requirements are national and specific',
          text: 'What a country requires for a given commodity from a given origin — treatments, pest free area status, certificate declarations, permits — is set by that country’s NPPO for that pathway. It cannot be derived from an ISPM, and it is not stated on AgricultureID.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What the ISPMs do not cover',
      body: [
        {
          type: 'paragraph',
          text: 'The ISPMs address plant health and nothing else. They are not concerned with food safety, which is Codex territory, nor with animal health, which belongs to WOAH. They say nothing about commercial quality or grade, about residues, about organic status, or about tariffs and origin. A consignment can be phytosanitarily impeccable and fail on any of those other grounds, and a phytosanitary certificate speaks only to the plant-health question it was issued about.',
        },
        {
          type: 'list',
          items: [
            'Not food safety — Codex and national food law govern that',
            'Not animal health — the WOAH codes govern that',
            'Not quality or grade — grading standards and contracts govern that',
            'Not a licence to import — an import permit, where required, is separate',
            'Not self-executing — an ISPM regulates nothing until a country applies it',
          ],
        },
        {
          type: 'paragraph',
          text: 'One further boundary is worth stating plainly. The IPPC Secretariat and the Commission on Phytosanitary Measures inspect no consignments, issue no certificates, and grant no pest free area status to anyone. Recognition of a pest free area, for example, is something an importing country extends to an exporting country’s claim, assessed against the method an ISPM describes — it is not a designation the IPPC hands out.',
        },
      ],
    },
  ],
  standardBody:
    'International Plant Protection Convention (IPPC) — standards adopted by the Commission on Phytosanitary Measures; secretariat hosted by FAO',
  standardIdentifier:
    'International Standards for Phytosanitary Measures (ISPMs) — adopted individually and separately numbered',
  edition:
    'Edition not stated here — each ISPM is adopted and revised individually and carries its own number and revision history; there is no single dated edition of the series. Verify the current revision of the specific numbered standard against the IPPC’s official publication.',
  jurisdiction:
    'Global. The Convention binds its contracting parties, which undertake to base phytosanitary measures on international standards; the ISPMs themselves regulate no consignment and take effect only through national measures.',
  legalStatus: 'voluntary',
  scopeSummary:
    'International standards on phytosanitary measures for preventing the introduction and spread of pests of plants and plant products in trade. In scope terms the series covers pest risk analysis; pest free areas, places of production, and areas of low pest prevalence; surveillance and pest reporting; export certification systems and phytosanitary certificates; regulated pest categorisation; inspection, sampling, and consignment verification; phytosanitary treatments; regulation of wood packaging material; and phytosanitary terminology. Each standard is separately adopted and separately scoped.',
  conformityAssessment:
    'None at the IPPC level. The IPPC operates no inspection, certification, or recognition mechanism. Phytosanitary conformity is assessed by national plant protection organisations: the exporting country’s NPPO inspects and certifies consignments for export, and the importing country’s NPPO verifies on arrival against its own import requirements and decides admissibility.',
  assessedBy:
    'National plant protection organisations (NPPOs) of exporting and importing countries, and officials they authorise. The IPPC Secretariat and the Commission on Phytosanitary Measures assess nothing and certify nobody.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the ISPM series covers and how phytosanitary standards take effect. It reproduces no ISPM, no provision, and no requirement, and cites no clause.',
    'ISPMs are published under the IPPC with FAO. Work from the official text of the specific numbered standard, in the revision in force.',
    'No ISPM revision date, adoption date, or treatment specification is asserted here. Each standard has its own revision history and must be verified individually.',
    'Import requirements for any commodity from any origin are set by the importing country’s NPPO and cannot be derived from an ISPM. None are stated here.',
    'AgricultureID is not a plant protection organisation, certification body, or competent authority. It inspects nothing, certifies nothing, and confers no phytosanitary status or recognition.',
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
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'The Convention, the Commission on Phytosanitary Measures, and the scope of the ISPM series',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The status of IPPC standards as the international reference for plant health under the SPS Agreement',
    },
    {
      sourceId: 'eppo',
      citedFor:
        'Regional plant protection context and pest risk analysis practice',
    },
    {
      sourceId: 'fao',
      citedFor: 'The IPPC secretariat arrangement and plant protection context',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The Convention has wide but not universal contracting-party membership, and the extent to which national measures follow the ISPMs varies. The operative requirements for any consignment are always those of the importing country.',
  limitations: [
    'A description of a standards framework, not a summary of any specific ISPM, and not phytosanitary, regulatory, or legal advice.',
    'No ISPM provisions, treatment specifications, or pest lists are reproduced; consult the official standard and the importing country’s NPPO.',
    'Import requirements are pathway-specific — commodity, origin, destination — and cannot be derived from this page or from an ISPM alone.',
    'The ISPMs address plant health only; food safety, animal health, quality, and customs requirements are separate and are not covered.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'IPPC Phytosanitary Standards (ISPMs): Scope and Application',
    description:
      'What the IPPC ISPM series covers and how voluntary plant-health standards reach a consignment through national plant protection organisations.',
    keywords: [
      'ISPM',
      'IPPC',
      'phytosanitary standards',
      'pest risk analysis',
      'plant health trade',
    ],
  },
  structuredData: { article: true },
};
