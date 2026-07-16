import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const customsValuation: TradeConceptContent = {
  id: 'trade-concept-customs-valuation',
  slug: 'customs-valuation',
  contentType: 'trade-concept',
  title: 'Customs Valuation',
  alternativeNames: [
    'Valuation for customs purposes',
    'Customs value',
    'Transaction value',
  ],
  category: 'Trade concept',
  subcategory: 'Customs procedure',
  tradeConceptClass: 'customs-procedure',
  summary:
    'Customs valuation determines the value on which an ad valorem duty is assessed. The international framework gives primacy to the transaction value — the price actually paid or payable for the goods, with defined adjustments — and provides a fixed sequence of alternative methods for use only when that basis is unavailable.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Where a duty is expressed as a percentage, something has to supply the base. Customs valuation is the body of rules that says what that something is: how the value of imported goods is established for the purpose of charging duty. It matters wherever an ad valorem element exists, and it matters more the higher that element is.',
    },
    {
      type: 'paragraph',
      text: 'The system in use across most of world trade rests on a single principle: wherever possible, the customs value should be the actual commercial price of the actual goods being valued, not an official figure, a reference price, or an assessor’s estimate. That principle exists because the alternative — administrations setting values by fiat — was a real and abused instrument of protection. The rules exist to constrain that discretion, and their structure only makes sense in that light.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Customs procedure — establishing the base for ad valorem duty',
    },
    {
      label: 'Framework',
      value:
        'The WTO agreement on the implementation of Article VII of the GATT, applied through national law',
    },
    {
      label: 'Primary basis',
      value:
        'Transaction value — the price actually paid or payable for the goods when sold for export to the importing country',
    },
    {
      label: 'Adjustments',
      value:
        'The agreement specifies which elements are added to, or excluded from, that price',
    },
    {
      label: 'Fallback methods',
      value:
        'A fixed sequence, used only where the preceding basis cannot be applied',
    },
    {
      label: 'Prohibited bases',
      value:
        'Arbitrary or fictitious values, and minimum or reference values, are excluded by the framework',
    },
    {
      label: 'Not relevant to',
      value:
        'Specific duties, which are assessed on quantity rather than value',
    },
  ],
  sections: [
    {
      id: 'transaction-value',
      heading: 'Transaction value and its conditions',
      body: [
        {
          type: 'paragraph',
          text: 'The primary method is the transaction value: the price actually paid or payable for the goods when sold for export to the country of importation, adjusted as the rules provide. It is preferred because it is the real price of the real goods, evidenced by the commercial documents the parties created for their own purposes.',
        },
        {
          type: 'paragraph',
          text: 'It is not available unconditionally. The framework sets out conditions that must be satisfied — broadly, that there are no restrictions on the buyer’s disposition of the goods beyond those the rules permit, that the sale is not subject to conditions whose value cannot be determined, that no part of the proceeds of resale accrues to the seller unless it can be adjusted for, and that the buyer and seller are not related in a way that influenced the price. Where a condition fails, the method fails with it, and the sequence moves on.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Related parties are not disqualified as such',
          text: 'A sale between related parties can still be valued on its transaction value. What matters under the framework is whether the relationship influenced the price, which is examined rather than presumed. The mechanism for that examination is in the agreement and in national law.',
        },
      ],
    },
    {
      id: 'adjustments',
      heading: 'What is added, and what the basis includes',
      body: [
        {
          type: 'paragraph',
          text: 'The price on the invoice is rarely the customs value without more, because the framework specifies elements that must be added where they are not already included and are quantifiable on objective data. The categories are defined, and an administration cannot invent additions outside them.',
        },
        {
          type: 'list',
          items: [
            'Certain commissions and brokerage incurred by the buyer, with buying commissions treated differently',
            'The cost of containers and of packing, where treated as part of the goods',
            'Goods and services supplied by the buyer for use in producing the imported goods, apportioned as the rules provide',
            'Royalties and licence fees related to the goods, where they are a condition of the sale',
            'Any part of the proceeds of a subsequent resale that accrues to the seller',
          ],
        },
        {
          type: 'paragraph',
          text: 'Transport and insurance are a separate matter, and one that catches people out. Whether the customs value includes the cost of getting the goods to the importing country is a choice the framework leaves to national law, and jurisdictions differ. Two countries applying the same agreement to the same consignment can therefore reach different customs values, entirely legitimately, because one includes freight and insurance in the base and the other does not. This is also why the delivery term a contract names does not determine the customs value: the term allocates who pays for carriage, while the valuation rules decide whether that carriage is in the base.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The delivery term is not the valuation basis',
          text: 'A contract priced on a destination-inclusive delivery term has not thereby set its customs value, and one priced at origin has not either. Valuation is determined under the valuation rules of the importing jurisdiction, from the price and the adjustments those rules specify.',
        },
      ],
    },
    {
      id: 'the-sequence',
      heading: 'The fallback sequence',
      body: [
        {
          type: 'paragraph',
          text: 'Where transaction value cannot be used, the framework provides alternatives in a fixed order. The order is not advisory: each method is reached only when the one before it cannot be applied, which is what prevents an administration from selecting whichever basis yields the most duty.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Transaction value of identical goods — the value already accepted for identical goods sold for export to the same country at about the same time',
            'Transaction value of similar goods — the same idea, applied to goods that are closely similar rather than identical',
            'Deductive value — derived from the price at which the goods are sold in the importing country, with defined deductions working backwards to a border value',
            'Computed value — built up from the cost of materials and production, plus profit and general expenses',
            'Fall-back method — a value determined by reasonable means consistent with the principles of the framework, using data available in the importing country, and subject to specific prohibitions',
          ],
        },
        {
          type: 'paragraph',
          text: 'The order of the deductive and computed methods can be reversed at the importer’s request in the circumstances the framework provides. The fall-back method is a residual: it permits flexibility in applying the earlier methods but does not license the administration to use bases the framework rules out — arbitrary or fictitious values, minimum values, the selling price in the exporting country, or the price of goods in the exporting country’s domestic market.',
        },
      ],
    },
    {
      id: 'agricultural-context',
      heading: 'Context in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'Two features of commodity trade make valuation less mechanical than it appears. Prices move sharply and are frequently agreed by reference to something other than a flat figure, and cargoes are commonly sold and resold before they arrive.',
        },
        {
          type: 'list',
          items: [
            'A price fixed against a futures market or an index, rather than stated as a number, still has to yield a determinable value at the relevant moment',
            'Quality adjustments settled after arrival — on protein, moisture, oil content, or defects — mean the final price may not be known when the goods are declared',
            'A cargo sold more than once in transit presents the question of which sale is the sale for export to the importing country',
            'Where a duty has a specific element, valuation is not the operative question at all: measured quantity is, on the basis the tariff specifies',
          ],
        },
        {
          type: 'paragraph',
          text: 'Where the value is not final at the time of declaration, administrations generally have a mechanism for provisional or incomplete declaration with later adjustment. Whether one is available, on what conditions, and with what security is a matter for the jurisdiction concerned. The point to hold onto is that the difficulty is recognised and procedural, not a reason to guess.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To establish the value on which ad valorem duty is assessed, using the actual price of the actual goods wherever possible and a defined sequence of alternatives only where it is not.',
  administeredBy:
    'The customs authority of the importing jurisdiction, applying national law implementing the international framework',
  governingBodies: [
    'World Trade Organization',
    'World Customs Organization',
    'National customs authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes the structure of the valuation framework. It states no rule text, no adjustment amount, no threshold, and no method for calculating the value of any consignment.',
    'The customs value of a consignment is determined by the customs authority of the importing jurisdiction under its own law, on the facts of that transaction, and is not derivable from a reference description.',
    'Whether transport and insurance form part of the customs value is a national choice within the framework and differs between jurisdictions; the delivery term named in a contract does not settle it.',
    'Where a value is not final at declaration, the availability of provisional or adjusted procedures is a matter for the authority concerned.',
  ],
  partiesInvolved: [
    'Importer of record, who declares the value',
    'Customs broker or declarant',
    'Seller and any related parties to the transaction',
    'Customs authority determining and, where relevant, reviewing the value',
    'Independent surveyor, where quality-based price adjustment is contractual',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'packing-list' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'cif-delivery-term' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'mirror-statistics' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The valuation framework implementing Article VII of the GATT: primacy of transaction value, the sequence of alternative methods, and the prohibition of arbitrary, fictitious, and minimum values',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Application of the valuation framework at the border and the technical instruments supporting it',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Practical relationship between customs value, tariff line, and the charges assessed at import',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'The framework applies among WTO members through national implementing law. National choices within it — notably whether freight and insurance are in the base — and the procedures for provisional values differ by jurisdiction.',
  limitations: [
    'A description of the framework’s structure, not a valuation method, ruling, or calculation for any consignment.',
    'No adjustment figures, thresholds, tolerances, or security requirements are given: they are national and are published by the authorities that set them.',
    'The conditions and adjustments are summarised by category only; their operative text is in the agreement and in national law.',
    'Whether any particular sale is the sale for export, or whether a relationship influenced a price, are determinations on the facts and are not addressed here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Customs Valuation: Establishing the Base for Ad Valorem Duty',
    description:
      'How customs valuation works: the primacy of transaction value and its conditions, the defined adjustments, and the fixed sequence of fallback methods.',
    keywords: [
      'customs valuation',
      'transaction value',
      'customs value',
      'ad valorem duty',
      'valuation methods',
    ],
  },
  structuredData: { article: true },
};
