import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const harmonizedSystemClassification: TradeConceptContent = {
  id: 'trade-concept-harmonized-system-classification',
  slug: 'harmonized-system-classification',
  contentType: 'trade-concept',
  title: 'Harmonized System Classification',
  alternativeNames: [
    'HS classification',
    'Harmonized Commodity Description and Coding System',
    'Tariff classification',
  ],
  category: 'Trade concept',
  subcategory: 'Trade measurement',
  tradeConceptClass: 'trade-measurement',
  summary:
    'The Harmonized System is the World Customs Organization’s nomenclature for describing traded goods, and the code assigned to a consignment determines which tariff, quota, and control regime applies to it. Classification is a legal determination about a particular good, not a label a shipper chooses.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Almost every cross-border agricultural consignment carries a Harmonized System code. The HS, maintained by the World Customs Organization, is a hierarchical nomenclature that gives each class of traded good a numeric identifier and a legal description. Its purpose is to make one commodity mean the same thing to the customs administration that exports it, the one that imports it, and the statistician who later counts it.',
    },
    {
      type: 'paragraph',
      text: 'The code matters because so much attaches to it. Duty rates, tariff-rate quotas, preferential margins under trade agreements, import licensing, sanitary and phytosanitary controls, and published trade statistics are all keyed to the classification. A change of one digit can move a consignment between regimes. This is why classification is treated as a determination made against the goods as presented, under the law in force, rather than as a description the trader is free to pick.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Trade measurement — commodity nomenclature' },
    { label: 'Maintained by', value: 'World Customs Organization (WCO)' },
    {
      label: 'Legal basis',
      value:
        'The International Convention on the Harmonized Commodity Description and Coding System',
    },
    {
      label: 'Harmonised depth',
      value:
        'Six digits — chapter (2), heading (4), subheading (6). Digits beyond six are national.',
    },
    {
      label: 'Agricultural range',
      value:
        'Sections I–IV cover live animals and animal products, vegetable products, fats and oils, and prepared foodstuffs',
    },
    {
      label: 'Edition-dependent',
      value:
        'A code has no meaning without the edition it belongs to; editions are revised periodically',
    },
    {
      label: 'Determined by',
      value:
        'The customs authority of the jurisdiction concerned, for the goods as presented',
    },
  ],
  sections: [
    {
      id: 'structure-of-the-nomenclature',
      heading: 'Structure of the nomenclature',
      body: [
        {
          type: 'paragraph',
          text: 'The HS is a tree. Goods are grouped into sections, sections divide into chapters, chapters into headings, and headings into subheadings. The numbering makes the position legible: the first two digits identify the chapter, the first four the heading, and the first six the subheading. Six digits is the point at which the system stops being international.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Chapter (2 digits)',
              description:
                'The broadest numeric grouping. Chapter 10 covers cereals; chapter 09 covers coffee, tea, maté and spices.',
            },
            {
              term: 'Heading (4 digits)',
              description:
                'The class of goods within a chapter — for example 10.01 for wheat and meslin, or 12.01 for soya beans.',
            },
            {
              term: 'Subheading (6 digits)',
              description:
                'The most detailed level that is common to all parties to the Convention. Below this, comparability between countries stops.',
            },
            {
              term: 'National digits (7 and beyond)',
              description:
                'Extensions added by an individual jurisdiction for its own tariff, statistical, or control purposes. They are not part of the harmonised code and do not travel across borders unchanged.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Two structural devices carry as much legal weight as the numbers. Section and chapter notes define, include, or exclude goods and can override what a heading appears to say in plain language. The General Interpretative Rules set out, in a fixed order, how a good is to be placed when more than one heading seems to fit. Reading a heading text on its own, without the applicable notes, is the most common way an amateur classification goes wrong.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Six digits is the boundary of comparability',
          text: 'When two countries’ figures for the same product are compared, only the first six digits are guaranteed to mean the same thing. Anything below that is a national construction, and matching it across jurisdictions requires a concordance rather than a direct read.',
        },
      ],
    },
    {
      id: 'what-drives-the-code',
      heading: 'What drives the code for agricultural goods',
      body: [
        {
          type: 'paragraph',
          text: 'For farm and food products, classification usually turns on a small number of factual questions about the goods themselves rather than on their commercial name. The trade description on an invoice is evidence, not a determinant.',
        },
        {
          type: 'list',
          items: [
            'Species and botanical or zoological identity of the material',
            'Degree of processing — whether the good is raw, cleaned, hulled, milled, roasted, cooked, or otherwise prepared',
            'Physical state and presentation, including whether the good is fresh, chilled, frozen, dried, or in brine',
            'Intended use where a heading is use-defined — seed for sowing is frequently separated from the same species destined for food or crush',
            'Composition, including whether a product is a single material or a mixture or preparation',
            'Packing and presentation where a heading distinguishes retail from bulk presentation',
          ],
        },
        {
          type: 'paragraph',
          text: 'The processing threshold is where agricultural classification is most often contested, because the nomenclature draws lines that the trade does not. A grain and its flour sit in different chapters; a green coffee bean and a roasted one sit in different subheadings of the same heading; an oilseed and its crude oil are separated by an entire section boundary. Where a good sits close to one of these lines, the determination depends on a factual question — how far the processing went — that only the goods themselves can answer.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Use-defined headings create a documentary burden',
          text: 'Where a subheading turns on intended use, such as a separation between seed for sowing and the same commodity for consumption, the claim generally has to be evidenced rather than asserted. What evidence satisfies the authority is a matter for that authority.',
        },
      ],
    },
    {
      id: 'editions-and-change',
      heading: 'Editions and why they matter',
      body: [
        {
          type: 'paragraph',
          text: 'The HS is revised periodically to reflect changes in trade patterns, technology, and policy interest. Editions are identified by year — HS 2012, HS 2017, and HS 2022 are examples of successive versions. Each revision can create headings, delete them, merge them, or move goods between them.',
        },
        {
          type: 'paragraph',
          text: 'The consequence for anyone reading a code is direct: a code without an edition is ambiguous, and possibly meaningless. The same six digits may denote different goods in two editions, or may not exist in one of them at all. This matters as much for statistics as for duty. A time series that crosses a revision boundary is not automatically continuous, and comparing a pre-revision year with a post-revision year requires a correlation table rather than a subtraction.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Always state the edition',
          text: 'Every code on AgricultureID is published with the edition it belongs to. A code quoted without an edition should be treated as incomplete information, not as a fact.',
        },
      ],
    },
    {
      id: 'who-decides',
      heading: 'Who decides, and how disagreement is resolved',
      body: [
        {
          type: 'paragraph',
          text: 'Classification is declared by the importer or their representative and determined by the customs authority. The declaration is a legal statement about the goods, and getting it wrong carries consequences that vary by jurisdiction — from correction and recovery of duty to penalty, depending on the law and on whether the error is treated as inadvertent.',
        },
        {
          type: 'paragraph',
          text: 'Most administrations operate a mechanism for obtaining a binding or advance ruling on the classification of a specific product before it moves, which transfers the uncertainty from the border to a decision that can be planned around. The name, scope, duration, and legal effect of such rulings differ by jurisdiction, and a ruling issued by one authority does not bind another.',
        },
        {
          type: 'paragraph',
          text: 'At the international level, the WCO maintains the interpretative apparatus around the nomenclature and provides the forum in which contracting parties resolve differences of interpretation between administrations. The WCO’s explanatory materials and classification opinions are published works in their own right; AgricultureID describes the system rather than reproducing them.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To give traded goods a common, legally defined description and code so that tariff treatment, control regimes, and trade statistics can be applied and compared consistently across borders.',
  administeredBy:
    'National customs authorities, applying a nomenclature maintained by the World Customs Organization',
  governingBodies: ['World Customs Organization', 'World Trade Organization'],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'The codes shown on this page are illustrative of how the nomenclature is structured. They are not a classification of any reader’s goods, and no code should be declared on the strength of an encyclopedia entry.',
    'Classification depends on the goods as actually presented — species, processing, state, composition, use, and packing — which no general description can establish for a particular consignment.',
    'Only the customs authority of the importing jurisdiction can determine a classification, and it does so under the edition and the national tariff in force at the time of the declaration.',
    'Where certainty is needed before goods move, the mechanism is an advance or binding ruling from the competent authority, not a reference source.',
  ],
  partiesInvolved: [
    'Exporter or consignor',
    'Importer of record',
    'Customs broker or declarant',
    'Customs authority of the importing jurisdiction',
    'Statistical authority compiling trade data',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'wto-tbt-agreement' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'hs-code-versioning' },
    { type: 'trade-concept', slug: 'mirror-statistics' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  classificationSystems: [
    {
      system: 'HS',
      code: '10.01',
      version: 'HS 2022',
      sourceId: 'wco',
      note: 'Heading for wheat and meslin. Shown to illustrate heading-level structure; subheadings below it separate durum from other wheat and seed from other uses.',
    },
    {
      system: 'HS',
      code: '10.05',
      version: 'HS 2022',
      sourceId: 'wco',
      note: 'Heading for maize (corn). Subheadings below it separate seed for sowing from other maize.',
    },
    {
      system: 'HS',
      code: '09.01',
      version: 'HS 2022',
      sourceId: 'wco',
      note: 'Heading for coffee. Subheadings below it turn on whether the coffee is roasted and whether it is decaffeinated.',
    },
    {
      system: 'HS',
      code: '12.01',
      version: 'HS 2022',
      sourceId: 'wco',
      note: 'Heading for soya beans. Subheadings below it separate seed for sowing from other soya beans.',
    },
  ],
  connections: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Structure, legal basis, and maintenance of the Harmonized System nomenclature',
    },
    {
      sourceId: 'wto',
      citedFor:
        'Use of the nomenclature as the basis for tariff schedules and market-access commitments',
    },
    {
      sourceId: 'un-comtrade',
      citedFor:
        'Reporting of trade statistics against HS codes and the edition-dependence of time series',
    },
    {
      sourceId: 'itc',
      citedFor: 'Tariff and market-access information keyed to HS codes',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global at the six-digit level among parties to the HS Convention. Tariff lines below six digits, duty rates, control regimes, and ruling procedures are national and differ in every jurisdiction.',
  limitations: [
    'A description of how the nomenclature is structured and applied, not a classification service and not a tariff schedule.',
    'No duty rates, thresholds, penalties, or ruling timescales are given: they are jurisdiction-specific, change frequently, and are published by the authorities that set them.',
    'Illustrative codes are given at heading level with their edition stated; they should not be read as the correct code for any actual consignment.',
    'National tariff extensions beyond six digits are outside the scope of this page and are documented only by the jurisdiction that maintains them.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Harmonized System Classification: How HS Codes Work',
    description:
      'How the WCO Harmonized System classifies agricultural goods: chapters, headings and subheadings, the six-digit boundary, and what drives a code.',
    keywords: [
      'harmonized system',
      'HS code',
      'tariff classification',
      'WCO nomenclature',
      'agricultural trade classification',
    ],
  },
  structuredData: { article: true },
};
