import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const customsDeclaration: TradeConceptContent = {
  id: 'trade-concept-customs-declaration',
  slug: 'customs-declaration',
  contentType: 'trade-concept',
  title: 'Customs Declaration',
  alternativeNames: [
    'Customs entry',
    'Goods declaration',
    'Import declaration',
    'Export declaration',
  ],
  category: 'Trade concept',
  subcategory: 'Customs procedure',
  tradeConceptClass: 'customs-procedure',
  summary:
    'A customs declaration is the formal act by which a person states, to a customs authority, what goods are moving, under what procedure, and with what characteristics. It is a legal statement carrying liability for its accuracy — and it is also the record from which national trade statistics are subsequently built.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Goods do not cross a border by being physically transported across it. They cross by being declared: a person tells the customs authority what the consignment is, what procedure it should be placed under, and the particulars — classification, value, origin, quantity, parties — on which the authority will act. Everything the authority then does, from calculating a charge to selecting a container for examination, proceeds from that statement.',
    },
    {
      type: 'paragraph',
      text: 'Two things follow, and they are easy to hold apart in theory and easy to conflate in practice. First, a declaration is a legal act with consequences: the declarant is answerable for its accuracy, and the consequences of getting it wrong do not depend on having intended to. Second, the same declarations are the raw material of trade statistics — which means the data an analyst reads years later inherits every classification judgment, valuation basis, and correction made at a border by someone under time pressure.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Customs procedure — the formal statement about a consignment',
    },
    {
      label: 'Nature',
      value:
        'A legal statement, made by a declarant, on which the authority acts',
    },
    {
      label: 'Declares',
      value:
        'The goods, the procedure requested, and the particulars — classification, value, origin, quantity, and parties',
    },
    {
      label: 'Liability',
      value:
        'The declarant is answerable for accuracy; consequences of error are set by national law and vary',
    },
    {
      label: 'Representation',
      value:
        'A declaration may be lodged by the trader or by a representative, and the form of representation affects who is liable',
    },
    {
      label: 'Facilitation',
      value:
        'The WTO trade-facilitation framework addresses pre-arrival processing, single windows, advance rulings, and release arrangements',
    },
    {
      label: 'Statistical role',
      value:
        'Declarations are the source records from which trade statistics are compiled',
    },
  ],
  sections: [
    {
      id: 'what-a-declaration-states',
      heading: 'What a declaration states',
      body: [
        {
          type: 'paragraph',
          text: 'The particulars a declaration carries are the inputs to every determination that follows. Their content varies by jurisdiction and procedure, but the categories are broadly common because the international data models that shape national systems are.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'The procedure requested',
              description:
                'What the goods are to be placed under — release for free circulation, transit, warehousing, temporary admission, export, or another regime. This choice determines the duty position and the obligations that follow.',
            },
            {
              term: 'Classification',
              description:
                'The tariff code declared for the goods, under the edition in force. This selects the rate, the controls, and the statistical category.',
            },
            {
              term: 'Value',
              description:
                'The customs value and the basis on which it was established, where an ad valorem element applies.',
            },
            {
              term: 'Origin',
              description:
                'The declared origin, and any preferential claim being made with the evidence supporting it.',
            },
            {
              term: 'Quantity and packaging',
              description:
                'Net and gross mass, supplementary units where the tariff requires them, and the number and kind of packages.',
            },
            {
              term: 'Parties and consignment identity',
              description:
                'Consignor, consignee, declarant, and representative, together with the transport and container details that let the declaration be matched to physical cargo.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The procedure is a declaration too',
          text: 'Which regime the goods are entered under is itself declared, and it is the field with the largest immediate consequence. The same cargo entered for free circulation and entered for warehousing produces entirely different duty positions from identical particulars.',
        },
      ],
    },
    {
      id: 'who-declares',
      heading: 'Who declares, and who is liable',
      body: [
        {
          type: 'paragraph',
          text: 'The declarant is the person in whose name the declaration is made, and liability attaches there. Most traders do not lodge their own declarations; they engage a broker or forwarder. But engaging a representative does not automatically move the liability, and how it sits depends on the form of representation the jurisdiction recognises and which one was actually used.',
        },
        {
          type: 'paragraph',
          text: 'Broadly, a representative may act in the name of the trader, or may act in its own name on the trader’s behalf, and the two arrangements distribute responsibility differently. Which arrangements exist, what they are called, and what each implies are matters of national law. The practical point is that "our broker handles it" is not a description of where liability sits, and traders sometimes discover the difference only when a declaration is questioned.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title:
            'A declaration rests on information the declarant did not generate',
          text: 'Classification, value, and origin particulars typically originate with the exporter, the producer, or the commercial documents. The declarant states them and is answerable for them. This is why the accuracy of a commercial invoice and an origin statement is a customs matter and not only a commercial one.',
        },
      ],
    },
    {
      id: 'lodgement-and-facilitation',
      heading: 'Lodgement, timing, and facilitation',
      body: [
        {
          type: 'paragraph',
          text: 'Declarations are lodged electronically in most administrations, into systems built around international data models that standardise what is captured and how it is expressed. That standardisation is why declarations across very different jurisdictions carry recognisably similar particulars.',
        },
        {
          type: 'paragraph',
          text: 'The multilateral trade-facilitation framework addresses several arrangements around lodgement that matter especially to time-sensitive agricultural cargo. Pre-arrival processing allows a declaration to be lodged and handled before the goods arrive, so that a decision is waiting rather than the cargo. Single-window arrangements let a trader submit data once for multiple agencies rather than repeating it for customs, plant health, and others separately. Advance rulings give binding answers on classification and origin before goods move. Release arrangements allow goods to be released before a final determination of duty, generally against security.',
        },
        {
          type: 'list',
          items: [
            'Pre-arrival processing shifts the paperwork off the cargo’s critical path',
            'Single-window submission reduces the repetition of the same particulars to different agencies',
            'Advance rulings convert a border uncertainty into a planned position',
            'Release against security separates the physical release from the final duty calculation',
            'Authorised-operator arrangements offer simplifications to traders who meet defined criteria',
          ],
        },
        {
          type: 'paragraph',
          text: 'Whether any of these is available, in what form, and on what conditions is a matter for each jurisdiction. The framework establishes the disciplines; implementation is national and uneven, and no arrangement should be assumed to exist in a given market.',
        },
      ],
    },
    {
      id: 'declarations-become-data',
      heading: 'Declarations become data',
      body: [
        {
          type: 'paragraph',
          text: 'The second life of a declaration is statistical. National authorities compile trade statistics from these records, and the figures that eventually appear in international databases are aggregations of them. This connects two things that are usually discussed separately: the quality of trade data and the conditions under which declarations are made.',
        },
        {
          type: 'paragraph',
          text: 'A classification judgment made at a border becomes a commodity’s trade figure. A valuation basis chosen under national law becomes the value in the series. A correction lodged after release becomes a revision to a published number. None of this is visible downstream — the analyst sees a clean figure with no trace of the judgment inside it. It is one reason reported trade statistics describe what was declared rather than what moved, and why two administrations can describe the same cargo differently without either being wrong.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To provide the formal statement by which goods are placed under a customs procedure, giving the authority the particulars on which classification, valuation, origin, control, and release decisions are made.',
  administeredBy:
    'The customs authority of the jurisdiction where the declaration is lodged',
  governingBodies: [
    'World Customs Organization',
    'World Trade Organization',
    'National customs authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what a declaration is and does. It states no data element, form, deadline, threshold, or procedure for any jurisdiction, and is not a guide to completing one.',
    'What must be declared, in what form, by when, and with what consequences for error is set by the national law of the jurisdiction concerned and by the authority administering it.',
    'Where liability sits between a trader and a representative depends on the form of representation recognised and used in that jurisdiction, and is a legal question.',
    'Facilitation arrangements such as pre-arrival processing, single windows, advance rulings, and release against security exist where a jurisdiction has implemented them; none should be assumed to be available.',
  ],
  partiesInvolved: [
    'Declarant, in whose name the declaration is made',
    'Customs broker or representative, where one is engaged',
    'Importer or exporter of record',
    'Customs authority receiving and acting on the declaration',
    'Other border agencies receiving data through a single window',
    'National statistical authority compiling the records',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'exw-delivery-term' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'hs-code-versioning' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'The goods declaration as the formal act placing goods under a customs procedure, and the data models standardising declaration particulars',
    },
    {
      sourceId: 'wto',
      citedFor:
        'Trade-facilitation disciplines on pre-arrival processing, single windows, advance rulings, release against security, and authorised operators',
    },
    {
      sourceId: 'un-comtrade',
      citedFor:
        'Compilation of national trade statistics from customs declaration records',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a concept. Every operative detail — data elements, forms, deadlines, representation rules, penalties, and which facilitation arrangements exist — is national.',
  limitations: [
    'A description of what a declaration is, not a completion guide and not a statement of any jurisdiction’s requirements.',
    'No data elements, deadlines, thresholds, penalties, or security requirements are given: they are national and change.',
    'The availability of facilitation arrangements is uneven across jurisdictions and is not asserted here for any market.',
    'The statistical consequences described are general; how any reporter compiles and revises its series is stated in its own metadata.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Customs Declaration: The Legal Statement at the Border',
    description:
      'What a customs declaration states, who is liable for it, how lodgement works, and why declarations become the trade statistics analysts read later.',
    keywords: [
      'customs declaration',
      'goods declaration',
      'declarant liability',
      'single window',
      'pre-arrival processing',
    ],
  },
  structuredData: { article: true },
};
