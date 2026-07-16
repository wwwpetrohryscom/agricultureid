import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const usdaNationalOrganicProgram: StandardReferenceContent = {
  id: 'standard-reference-usda-national-organic-program',
  slug: 'usda-national-organic-program',
  contentType: 'standard-reference',
  title: 'USDA National Organic Program',
  alternativeNames: [
    'NOP',
    'USDA organic',
    'National Organic Program',
    '7 CFR Part 205',
  ],
  category: 'Regulatory framework',
  subcategory: 'Organic',
  standardClass: 'regulatory-framework',
  standardDomain: 'organic',
  summary:
    'The National Organic Program is the United States federal regulatory programme governing organic production and the USDA organic label. Like the EU regulation it is law rather than a voluntary scheme — the label is federally protected, and certification by an accredited certifying agent is a precondition for using it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The National Organic Program is the United States Department of Agriculture programme that administers federal organic regulations, codified at 7 CFR Part 205 under the authority of the Organic Foods Production Act of 1990. It defines what may be produced, handled, and sold as organic in the United States, accredits the certifying agents that certify operations, and enforces the rules governing the USDA organic seal.',
    },
    {
      type: 'paragraph',
      text: 'Its relationship to the EU organic regulation is worth stating early, because it is the source of most practical confusion. The two are independent legal frameworks with their own definitions, their own control structures, and their own labels. They pursue similar objectives and produce broadly comparable outcomes, but they are not the same rules, and neither one’s certification automatically permits the other’s claim. Trade between them runs on arrangements between the authorities, not on the similarity of the standards.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'United States Department of Agriculture (USDA), Agricultural Marketing Service',
    },
    {
      label: 'Instrument',
      value: 'Federal organic regulations at 7 CFR Part 205',
    },
    {
      label: 'Statutory authority',
      value: 'Organic Foods Production Act of 1990',
    },
    {
      label: 'Legal status',
      value:
        'Mandatory within the United States — the organic label is federally protected',
    },
    {
      label: 'Certification',
      value:
        'A legal precondition for the organic claim, by a USDA-accredited certifying agent',
    },
    {
      label: 'Accreditation',
      value:
        'Certifying agents are accredited by the USDA itself, not by a separate accreditation body',
    },
    {
      label: 'Advisory body',
      value:
        'The National Organic Standards Board advises on materials and rules',
    },
  ],
  scopeSummary:
    'United States federal regulation of organic production, handling, and labelling. In scope terms the programme covers the definition of organic production and handling across crops, livestock, and processed products; conversion of land; the substances that may and may not be used, administered through a national list; requirements for organic system plans; the accreditation of certifying agents and the certification of operations; labelling categories and use of the USDA organic seal; recordkeeping and traceability; enforcement against prohibited practices and false organic claims; and the arrangements under which organic products from other countries may be sold as organic in the United States.',
  sections: [
    {
      id: 'how-it-is-structured',
      heading: 'How the programme is structured',
      body: [
        {
          type: 'paragraph',
          text: 'The programme rests on a few structural pieces. Operations wishing to sell organic product must develop an organic system plan describing how they will comply, and must be certified by a certifying agent accredited by the USDA. Permitted and prohibited substances are administered through a national list, which is amended over time on the advice of an advisory board with representation from across the organic community — a mechanism that gives the programme a public, contested process for deciding what organic means in practice.',
        },
        {
          type: 'paragraph',
          text: 'One structural feature distinguishes it from most certification in this section, and from the EU model. The USDA accredits certifying agents directly, rather than relying on a separate national accreditation body to accredit certification bodies against an international accreditation standard. The regulator is therefore both rule-maker and accreditor, which concentrates responsibility for the integrity of the whole system in one place.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Labelling categories are a defined structure',
          text: 'The regulations establish distinct labelling categories governing how organic content may be described and where the seal may be used. The categories, their conditions, and the permitted claims are set out in the regulations and are not stated here.',
        },
      ],
    },
    {
      id: 'imports-and-equivalence',
      heading: 'Imports and the limits of equivalence',
      body: [
        {
          type: 'paragraph',
          text: 'Product certified organic elsewhere is not automatically organic in the United States. It may be sold as organic there through the routes the regulations provide, which turn in general terms on arrangements between the USDA and foreign authorities, or on certification by an agent USDA has accredited to certify operations abroad to the US rules. The specific arrangements — which countries, which products, on what terms, and with what exceptions — are matters of current US law and policy that change, and none are stated here.',
        },
        {
          type: 'paragraph',
          text: 'A recurring subtlety deserves flagging. Arrangements between organic authorities are frequently equivalence arrangements rather than declarations that the rules are identical, and they commonly carry exceptions where the frameworks genuinely diverge. The practical consequence is that "recognised" rarely means "interchangeable without qualification" — and an exporter needs the terms of the specific arrangement for their specific product, not a general impression that two systems recognise each other.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The organic seal is protected',
          text: 'Selling product as organic in the United States, or using the USDA organic seal, without meeting the regulations and holding certification is a violation of federal regulation and subject to enforcement. This is law, not a scheme rule.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What the programme does not do',
      body: [
        {
          type: 'paragraph',
          text: 'The programme governs the organic claim and nothing beyond it. Organic food in the United States is subject to the same federal food-safety law as any other food, and organic certification exempts a product from none of it. Nor does the programme grade anything: organic produce and grain are graded under the ordinary commodity grade standards, which are entirely separate instruments administered on a different basis.',
        },
        {
          type: 'list',
          items: [
            'Not a food-safety programme — federal food-safety law applies to organic food identically',
            'Not a residue guarantee — the rules restrict what operators apply, not what the environment contains',
            'Not a grading standard — USDA commodity grades are separate and apply regardless of organic status',
            'Not applicable outside the United States — it governs the US market and product sold there as organic',
            'Not identical to any other country’s organic rules — recognition is by arrangement, with exceptions',
          ],
        },
        {
          type: 'paragraph',
          text: 'As with the EU regulation, the mandatory classification here needs reading correctly. No producer is required to be organic. The obligation is conditional: a producer who wishes to sell product in the United States described as organic comes within the programme and must comply with it. A producer making no organic claim is unaffected.',
        },
      ],
    },
  ],
  standardBody:
    'United States Department of Agriculture (USDA) — the National Organic Program, administered by the Agricultural Marketing Service under the Organic Foods Production Act of 1990',
  standardIdentifier:
    'National Organic Program — United States federal organic regulations at 7 CFR Part 205',
  edition:
    'Edition not stated here — the federal organic regulations at 7 CFR Part 205 are amended over time, including amendments to the national list of permitted and prohibited substances. No amendment, effective date, or current text version is asserted. Verify against the current text of the regulations as published in the Code of Federal Regulations.',
  jurisdiction: 'United States',
  legalStatus: 'mandatory',
  conformityAssessment:
    'Mandatory certification within a federal regulatory programme. Operations must develop an organic system plan and be certified by a certifying agent accredited by the USDA, which inspects the operation and audits records against the regulations. Certifying agents are accredited and overseen by the USDA directly. Product from outside the United States is sold as organic there through the routes the regulations provide. Inspection frequencies, conversion periods, and fees are set by the applicable regulations and are not stated here.',
  assessedBy:
    'Certifying agents accredited by the USDA, which inspect and certify operations. The USDA accredits and oversees the certifying agents itself and enforces the regulations.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the National Organic Program governs and how it is structured in general scope terms. It reproduces no section, provision, or requirement of 7 CFR Part 205 or of the Organic Foods Production Act.',
    'No production rule, permitted or prohibited substance, national list entry, conversion period, labelling category threshold, inspection frequency, or fee is stated here. These are set out in federal regulation, are amended, and must be read from the current text.',
    'No amendment, effective date, or current version of the regulations is asserted. The citation 7 CFR Part 205 names the codified location, not the applicable text on any given point.',
    'This is not legal advice and is not a statement of any operation’s obligations. Whether and how the programme applies to any operation, product, or consignment is a legal question determined under US law.',
    'AgricultureID is not a certifying agent, certification body, accreditation body, or competent authority, is not accredited by the USDA, and confers no organic status, certification, or recognition. The USDA organic seal is controlled by the USDA.',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'eu-organic-regulation' },
    { type: 'standard-reference', slug: 'ifoam-family-of-standards' },
    { type: 'standard-reference', slug: 'organic-certification' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'import-permit' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda-ams',
      citedFor:
        'The National Organic Program, accreditation of certifying agents, the national list, labelling categories, and the USDA organic seal',
    },
    {
      sourceId: 'usda',
      citedFor:
        'The statutory basis of the programme under the Organic Foods Production Act of 1990',
    },
    {
      sourceId: 'ifoam',
      citedFor:
        'Organic principles and the international context in which national organic regulation sits',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'United States. The programme governs organic production, handling, and labelling for product sold as organic in the US, including imported product; it has no application to organic claims in other jurisdictions.',
  limitations: [
    'A scope description of a United States federal regulatory programme, not the regulations, and not legal advice.',
    'No provisions, substances, national list entries, labelling thresholds, or conversion periods are reproduced; consult the current text of the regulations.',
    'The regulations are amended over time, including the national list; the programme as described here is a structural summary, not the applicable law on any point.',
    'Certification under the programme is not a safety, residue, or quality claim, and does not exempt a product from any other federal requirement.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'USDA National Organic Program: Scope and Structure',
    description:
      'What the USDA National Organic Program governs, how certifying agents are accredited, and how the national list and labelling work.',
    keywords: [
      'USDA National Organic Program',
      'NOP',
      '7 CFR Part 205',
      'USDA organic seal',
      'accredited certifying agent',
    ],
  },
  structuredData: { article: true },
};
