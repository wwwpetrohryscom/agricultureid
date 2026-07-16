import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const euOrganicRegulation: StandardReferenceContent = {
  id: 'standard-reference-eu-organic-regulation',
  slug: 'eu-organic-regulation',
  contentType: 'standard-reference',
  title: 'EU Organic Regulation',
  alternativeNames: [
    'Regulation (EU) 2018/848',
    'EU organic production regulation',
    'EU organic rules',
  ],
  category: 'Regulatory framework',
  subcategory: 'Organic',
  standardClass: 'regulatory-framework',
  standardDomain: 'organic',
  summary:
    'The EU organic regulation is the law defining organic production and labelling in the European Union. It is not a voluntary scheme: within the EU it is binding, the organic term is legally protected, and certification by an approved control body is a precondition for using it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Organic production in the European Union is governed by Regulation (EU) 2018/848 on organic production and labelling of organic products, which replaced the earlier regulatory framework. It is European Union law: directly applicable in member states, supplemented by delegated and implementing acts, and enforced by national competent authorities. It defines what may be produced and sold as organic in the Union, how operators must be controlled, and how organic products may be labelled.',
    },
    {
      type: 'paragraph',
      text: 'The distinction between this and everything voluntary in this section is not a technicality. GLOBALG.A.P. or Fairtrade certification is something a producer chooses in order to reach certain buyers; a producer who declines is simply outside those chains. Selling something in the EU as organic without complying with this regulation is not a commercial choice at all — it is unlawful. That is why organic is classified here as a regulatory framework rather than as a certification scheme, notwithstanding that certification is how it operates.',
    },
  ],
  keyFacts: [
    {
      label: 'Instrument',
      value: 'Regulation (EU) 2018/848, with delegated and implementing acts',
    },
    {
      label: 'Body',
      value:
        'European Union — the European Commission, with national competent authorities',
    },
    {
      label: 'Legal status',
      value:
        'Mandatory within the European Union — the organic term is legally protected',
    },
    {
      label: 'Jurisdiction',
      value: 'European Union, and imports placed on the EU market as organic',
    },
    {
      label: 'Certification',
      value:
        'A legal precondition for the organic claim, by an approved control body',
    },
    {
      label: 'Controlled by',
      value:
        'Control bodies and control authorities, supervised by member state competent authorities',
    },
    {
      label: 'Imports',
      value:
        'Admitted as organic through recognition arrangements — not automatically',
    },
  ],
  scopeSummary:
    'European Union law governing organic production, the control of operators, and the labelling of organic products placed on the EU market. In scope terms the regulation covers the definition of organic production and its principles across crops, livestock, aquaculture, and processed food and feed; conversion of land and operations; rules on inputs and their authorisation; the official control system, including approval and supervision of control bodies and control authorities; operator certification; labelling and use of the EU organic logo; traceability; the handling of non-compliance and suspected non-compliance; and the arrangements under which organic products from outside the Union may be placed on the EU market as organic.',
  sections: [
    {
      id: 'what-it-governs',
      heading: 'What the regulation governs',
      body: [
        {
          type: 'paragraph',
          text: 'The regulation sets out what organic production means in EU law and applies it across the sectors it covers — crop production, livestock, aquaculture, and processed food and feed. It addresses conversion, the inputs that may be used and how they are authorised, the requirements applying to each type of production, and the rules for processing, labelling, and use of the EU organic logo. Its provisions are extensive, technical, and not reproduced here in any respect.',
        },
        {
          type: 'paragraph',
          text: 'Around those production rules sits a control system, and this is where the regulation does its real work. Operators must be subject to control, control bodies must be approved and supervised, certificates are issued to operators, non-compliance must be investigated and acted on, and product must be traceable. The regulation treats the control system as part of the definition of organic rather than as an administrative afterthought, which is the correct reading: an organic claim with no control behind it is not a weaker claim, it is an empty one.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A regulation supplemented by further acts',
          text: 'The base regulation is accompanied by delegated and implementing acts addressing detailed and technical matters, and it has been amended. The applicable rule on any point is found in the current consolidated text together with those acts, not in the base regulation read alone.',
        },
      ],
    },
    {
      id: 'imports',
      heading: 'How imports enter as organic',
      body: [
        {
          type: 'paragraph',
          text: 'A product certified organic in a third country is not thereby organic in the EU. To be placed on the EU market as organic it must arrive through one of the routes the regulation provides — which turn, in general terms, on recognition arrangements between the Union and third countries, or on control bodies recognised for the purpose of certifying operators outside the Union to the applicable rules. Imported organic consignments are accompanied by documentation issued under that system and are subject to checks on entry.',
        },
        {
          type: 'paragraph',
          text: 'The details of these arrangements — which countries, which bodies, which products, on what terms, and under what transitional provisions — are set out in EU instruments, change over time, and are precisely the sort of thing that must be checked against the current law rather than remembered. Nothing on this page states them. An exporter’s route to the EU organic market is a specific legal question with a specific and changeable answer.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Organic elsewhere is not organic in the EU',
          text: 'Certification under a third country’s rules, or under a private organic standard, does not permit the organic claim on the EU market. The route in is through the recognition arrangements the regulation provides, and there is no other.',
        },
      ],
    },
    {
      id: 'what-it-does-not-do',
      heading: 'What the regulation does not do',
      body: [
        {
          type: 'paragraph',
          text: 'The regulation governs the organic claim. It does not displace the rest of EU food law: organic food is subject to the same food-safety, hygiene, contaminant, residue, and labelling requirements as any other food placed on the EU market, and organic certification exempts a product from none of them. Nor does it govern quality or grade — organic fresh produce is graded on the same marketing standards as conventional.',
        },
        {
          type: 'list',
          items: [
            'Not a food-safety instrument — EU food law applies to organic food identically',
            'Not a residue guarantee — organic restricts what operators apply, it does not control the environment',
            'Not a quality or grading standard — marketing standards apply as they do to conventional produce',
            'Not applicable outside the EU — it governs the EU market and imports placed on it',
            'Not a substitute for the current text — it is amended, and supplemented by further acts',
          ],
        },
        {
          type: 'paragraph',
          text: 'A final and important boundary: this page classifies the regulation as mandatory because it is binding law within its jurisdiction. That says nothing about whether any producer must be organic — nobody must. The obligation is conditional: if you wish to place a product on the EU market described as organic, then this regulation governs you. Producers who make no organic claim are entirely unaffected by it.',
        },
      ],
    },
  ],
  standardBody:
    'European Union — Regulation (EU) 2018/848 of the European Parliament and of the Council, applied by the European Commission with member state competent authorities',
  standardIdentifier:
    'Regulation (EU) 2018/848 on organic production and labelling of organic products',
  edition:
    'Edition not stated here — Regulation (EU) 2018/848 has been amended and is supplemented by delegated and implementing acts. No consolidated version date, amendment, or transitional provision is asserted. Verify against the current consolidated text and the accompanying acts as published in EU law.',
  jurisdiction: 'European Union',
  legalStatus: 'mandatory',
  conformityAssessment:
    'Mandatory certification within an official control system. Operators subject to the regulation must be controlled by an approved control body or control authority, which inspects and audits the operation and issues a certificate; control bodies are in turn supervised by member state competent authorities. Products imported to be placed on the EU market as organic enter through the recognition arrangements the regulation provides and are subject to checks on entry. Inspection frequencies, conversion periods, and fees are set by the applicable law and are not stated here.',
  assessedBy:
    'Control bodies and control authorities approved and supervised under the regulation, with oversight by member state competent authorities and the European Commission.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the EU organic regulation governs and how it operates in general scope terms. It reproduces no article, annex, or provision of the regulation or of any delegated or implementing act.',
    'No production rule, permitted or prohibited input, conversion period, inspection frequency, labelling requirement, threshold, or import condition is stated here. These are set out in EU law, are amended, and must be read from the current consolidated text.',
    'No consolidated version date, amendment reference, or transitional provision is asserted. The identifier Regulation (EU) 2018/848 names the base instrument, not the applicable text on any given point.',
    'This is not legal advice and is not a statement of any operator’s obligations. Whether and how the regulation applies to any operation, product, or consignment is a legal question determined under EU law.',
    'AgricultureID is not a control body, control authority, certification body, or competent authority, is not approved under the regulation, and confers no organic status, certification, or recognition.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'ifoam-family-of-standards' },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'usda-national-organic-program' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
  ],
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor:
        'The EU organic regulation, its control system, the EU organic logo, and arrangements for organic imports',
    },
    {
      sourceId: 'ifoam',
      citedFor:
        'Organic principles and the international context in which the regulation sits',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Food-safety and contaminant assessment context applying to all food placed on the EU market',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'European Union. The regulation governs organic production within the Union and products placed on the EU market as organic, including imports; it has no application to organic claims made in other jurisdictions.',
  limitations: [
    'A scope description of an EU legal instrument, not the regulation, and emphatically not legal advice.',
    'No articles, annexes, production rules, inputs, conversion periods, or import conditions are reproduced; consult the current consolidated text and the accompanying acts.',
    'The regulation is amended and supplemented; the base instrument read alone is not the applicable law on any point.',
    'Organic certification under this regulation is not a safety, residue, or quality claim, and does not exempt a product from any other requirement of EU food law.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'EU Organic Regulation: Scope, Control System, and Imports',
    description:
      'What Regulation (EU) 2018/848 governs, why the organic term is legally protected in the EU, how the control system works, and how organic imports are admitted.',
    keywords: [
      'EU organic regulation',
      'Regulation (EU) 2018/848',
      'EU organic logo',
      'organic control body',
      'organic imports EU',
    ],
  },
  structuredData: { article: true },
};
