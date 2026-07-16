import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const codexFoodHygienePrinciples: StandardReferenceContent = {
  id: 'standard-reference-codex-food-hygiene-principles',
  slug: 'codex-food-hygiene-principles',
  contentType: 'standard-reference',
  title: 'Codex General Principles of Food Hygiene',
  alternativeNames: [
    'General Principles of Food Hygiene',
    'CXC 1-1969',
    'Codex food hygiene code',
    'Good hygiene practices',
  ],
  category: 'Standard',
  subcategory: 'Food hygiene',
  standardClass: 'standard',
  standardDomain: 'food-safety',
  summary:
    'The Codex General Principles of Food Hygiene is the foundational international code of practice for controlling food hazards along the chain. It sets out good hygiene practices as the base layer, with HACCP built on top — and it is a code of practice, not a certifiable standard.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The General Principles of Food Hygiene is the Codex text from which most of the world’s food hygiene rules ultimately descend. It describes, in scope terms, the hygiene measures that apply across the food chain from primary production to consumption: the environment a food business operates in, the design and maintenance of facilities and equipment, control of operations, personal hygiene, cleaning and maintenance, transport, and product information. It is a code of practice — a description of how food should be handled to control hazards — rather than a list of product limits.',
    },
    {
      type: 'paragraph',
      text: 'Its architecture is the reason it matters more than any other Codex hygiene text. The code establishes good hygiene practices as a base layer that applies to every food business, and then treats HACCP as a further, hazard-specific layer built upon that base. That ordering is not a presentational choice; it reflects the working principle that a hazard analysis conducted on top of poor fundamental hygiene is analysing the wrong thing. Understanding the two-layer structure is most of what a reader needs from this page.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value: 'Codex Alimentarius Commission (FAO/WHO)',
    },
    {
      label: 'Identifier',
      value: 'CXC 1-1969 — General Principles of Food Hygiene',
      note: 'The 1969 number is the original adoption; the text has been revised since',
    },
    {
      label: 'Type of text',
      value: 'Code of practice — describes handling, not product limits',
    },
    {
      label: 'Structure',
      value:
        'Good hygiene practices as the base layer, with HACCP built on top',
    },
    {
      label: 'Chain coverage',
      value: 'Primary production through to consumption',
    },
    {
      label: 'Legal status',
      value: 'Voluntary — force comes only from national adoption',
    },
    {
      label: 'Not',
      value:
        'A certifiable standard — no Codex body audits or certifies against it',
    },
  ],
  sections: [
    {
      id: 'the-two-layers',
      heading: 'Good hygiene practices and HACCP',
      body: [
        {
          type: 'paragraph',
          text: 'The code separates two things that are often run together. Good hygiene practices are the conditions and measures necessary in any food business regardless of what it makes: clean premises, potable water, pest control, equipment that can be cleaned, staff who wash their hands, and so on. They are largely generic, because contamination routes are largely generic. HACCP, by contrast, is specific: it analyses the hazards of a particular product and process and controls them at identified points.',
        },
        {
          type: 'paragraph',
          text: 'The relationship between them is one of dependency rather than choice. Good hygiene practices manage the general contamination pressure a process operates under; HACCP manages the hazards that remain significant once that pressure is controlled. A business that skips the base layer and attempts HACCP alone will find its hazard analysis overwhelmed by variables that ought to have been handled by basic hygiene — which is why the code presents them in this order.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the code applies to primary production too',
          text: 'Hygiene does not begin at the factory gate. Contamination arriving with a raw commodity — from water, soil, manure, handling, or storage — cannot always be removed later, so the code’s scope deliberately reaches back to the farm.',
        },
      ],
    },
    {
      id: 'what-it-covers',
      heading: 'What the code covers, in scope terms',
      body: [
        {
          type: 'paragraph',
          text: 'The code addresses the hygiene of the whole operating context rather than the specification of a product. In broad scope terms it deals with primary production and the environment it happens in; the design, layout, and maintenance of establishments, facilities, and equipment; the control of incoming material, water, and processing operations; personal hygiene and health of food handlers; cleaning, maintenance, and pest control; transport; and the product information and consumer awareness needed for food to be handled safely downstream. Training runs through all of it.',
        },
        {
          type: 'paragraph',
          text: 'None of those requirements are reproduced here, and the code’s own text is the only reliable statement of them. What is worth carrying away is the shape: it is a code about premises, practices, and people — the conditions under which food is handled — and it is deliberately general so that it can apply to a dairy, a mill, a packhouse, and a caterer alike. Sector-specific Codex codes of practice sit beneath it and address the hazards of particular commodities.',
        },
      ],
    },
    {
      id: 'status-and-assessment',
      heading: 'Status, and who assesses conformity',
      body: [
        {
          type: 'paragraph',
          text: 'Like every Codex text, the code binds nobody by itself. Its influence comes from adoption: national and regional food hygiene law across much of the world is recognisably built on this structure, and private food-safety schemes use the same base-layer-plus-HACCP architecture. But the operative rule for any food business is its own jurisdiction’s hygiene legislation, which may follow the code closely, extend it, or diverge.',
        },
        {
          type: 'paragraph',
          text: 'There is no conformity assessment at Codex level and no such thing as certification to CXC 1-1969. Where hygiene conformity is assessed, it is assessed either by the competent authority enforcing national law, or by a certification body auditing against a private scheme that has incorporated these principles into its own requirements. The Codex Alimentarius Commission inspects nothing and certifies nobody.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The code is not a food safety plan',
          text: 'It describes principles a business must apply to its own operation. It contains no plan for any specific product or process, and reading it does not produce one — that work is the business’s own, under its own hazard analysis.',
        },
      ],
    },
  ],
  standardBody:
    'Codex Alimentarius Commission — the joint FAO/WHO food standards body',
  standardIdentifier: 'CXC 1-1969 — General Principles of Food Hygiene',
  edition:
    'Edition not stated here — the text carries its original 1969 adoption number and has been revised by the Commission since. Verify the current revision against the Commission’s official publication.',
  jurisdiction:
    'Global reference. The code has no direct legal force in any jurisdiction; it applies only where a country or region adopts it into its own food hygiene law.',
  legalStatus: 'voluntary',
  scopeSummary:
    'International code of practice for food hygiene across the chain, from primary production to consumption. In scope terms it addresses primary production and its environment; establishment design, facilities, and equipment; control of operations, incoming materials, and water; personal hygiene and food-handler health; cleaning, maintenance, and pest control; transport; product information; and training — with good hygiene practices as a base layer and HACCP as a hazard-specific layer built upon it.',
  conformityAssessment:
    'None at the Codex level. There is no certification to this code and no Codex audit. Hygiene conformity is assessed either by a competent authority enforcing adopted national law, or by a certification body against a private scheme that has incorporated these principles into its own requirements.',
  assessedBy:
    'National or regional competent authorities under adopted law; or certification bodies against private schemes built on these principles. The Codex Alimentarius Commission assesses nothing.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page summarises what the General Principles of Food Hygiene covers and how it is structured. It reproduces no provision, section, or requirement of the code, and states no hygiene parameter, temperature, or limit.',
    'Codex texts are copyrighted publications of FAO and WHO. Work from the official text in the revision in force.',
    'No revision date is asserted here. The identifier CXC 1-1969 reflects original adoption, not the current revision, and citing "CXC 1-1969" without a revision does not identify a specific text.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner. There is no certification to this code, and nothing here confers any recognition.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
  ],
  sourceReferences: [
    {
      sourceId: 'codex',
      citedFor:
        'The scope and structure of the General Principles of Food Hygiene and its relationship to HACCP',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Food hygiene and good hygiene practice context across the food chain',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Risk-assessment context for the biological and chemical hazards hygiene measures address',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global reference with no direct legal effect. National and regional hygiene law across much of the world is recognisably built on this structure, but the operative requirements are always those of the applicable jurisdiction.',
  limitations: [
    'A scope summary of a code of practice, not the code itself, and not food-safety, legal, or regulatory advice.',
    'No provisions, parameters, temperatures, or limits are reproduced; consult the official text and the applicable national hygiene law.',
    'The code is general by design and states principles rather than a plan; it cannot be applied to a specific operation without that operation’s own hazard analysis.',
    'How closely any jurisdiction’s hygiene law follows this code varies and is not described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Codex General Principles of Food Hygiene: Scope and Status',
    description:
      'What the Codex General Principles of Food Hygiene covers, why good hygiene practices sit beneath HACCP, its legal status, and who assesses conformity.',
    keywords: [
      'General Principles of Food Hygiene',
      'CXC 1-1969',
      'Codex food hygiene',
      'good hygiene practices',
      'prerequisite programmes',
    ],
  },
  structuredData: { article: true },
};
