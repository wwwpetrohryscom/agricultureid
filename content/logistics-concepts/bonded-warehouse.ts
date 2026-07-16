import type { LogisticsConceptContent } from '@/types/content';

export const bondedWarehouse: LogisticsConceptContent = {
  id: 'logistics-concept-bonded-warehouse',
  slug: 'bonded-warehouse',
  contentType: 'logistics-concept',
  title: 'Bonded Warehouse',
  alternativeNames: ['Customs warehouse', 'Customs bonded storage'],
  category: 'Logistics concept',
  subcategory: 'Facility',
  logisticsClass: 'facility',
  summary:
    'A bonded warehouse is premises approved by a customs authority where imported goods may be stored without duty and import taxes becoming payable. Physically it is an ordinary warehouse; what makes it bonded is a legal status, under which the goods have arrived in the country but have not yet legally entered its market.',
  introduction: [
    {
      type: 'paragraph',
      text: 'When goods arrive at a border, two things could happen: they could be released into the country, at which point duty and import taxes fall due, or they could remain in a state of suspension. A bonded warehouse is the physical embodiment of that second option — approved premises, under customs control, where goods sit in the country geographically while remaining outside it fiscally. The duty is not waived; it is deferred, and it crystallises only if and when the goods are declared for home use.',
    },
    {
      type: 'paragraph',
      text: 'For agricultural trade this matters more than the mechanism suggests. Duty on food commodities can be substantial, and paying it on arrival means financing it across however long the stock takes to sell — which for a seasonal commodity bought at harvest can be most of a year. The bonded warehouse decouples the moment goods physically arrive from the moment the importer has to pay for the privilege of importing them, and for a trader that decoupling is working capital.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Facility — approved premises under customs control',
    },
    {
      label: 'What it changes',
      value:
        'The legal and fiscal status of the goods, not their physical handling',
    },
    {
      label: 'Duty is',
      value:
        'Suspended while the goods remain in the warehouse — deferred, not forgiven',
    },
    {
      label: 'Duty falls due',
      value: 'When the goods are declared for home use, and not before',
    },
    {
      label: 'Re-export possibility',
      value:
        'Goods leaving for another country may never attract the import duty at all',
    },
    {
      label: 'International framework',
      value:
        'The WCO’s Revised Kyoto Convention addresses customs warehousing as a standard procedure',
    },
    {
      label: 'Does not suspend',
      value:
        'Sanitary, phytosanitary, and food-safety controls — those are separate regimes',
    },
  ],
  sections: [
    {
      id: 'what-the-status-does',
      heading: 'What the status actually does',
      body: [
        {
          type: 'paragraph',
          text: 'The bonded warehouse resolves a timing problem. Duty is a charge on importation, and importation is a legal event rather than a geographical one. Without warehousing, the two would be forced together: goods land, duty is assessed and paid, and the importer has financed a tax bill on stock that has not been sold. With warehousing, goods land and wait, and the fiscal event happens later — when the goods are actually sold into the market, when the importer chooses, or never.',
        },
        {
          type: 'paragraph',
          text: 'The "or never" is the second, more interesting function. Goods placed in a customs warehouse and then re-exported to a third country may leave without the import duty ever having become payable, because they were never declared for home use. This is what makes bonded storage the natural home of entrepôt and re-export trade, and it is why regional trading hubs are built around warehousing regimes. A trader can hold stock in a convenient location, serve several markets from it, and pay each market’s duty only on what actually goes there.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'It is a status, not a building',
          text: 'A bonded warehouse may be an ordinary shed, a silo, a tank, or a cold store. What distinguishes it is approval by the customs authority, the security given, the records kept, and the authority’s right of control over what is inside. The refrigeration in a bonded cold store does exactly what refrigeration does anywhere; the bond is a legal overlay on top of it.',
        },
      ],
    },
    {
      id: 'obligations',
      heading: 'The obligations that come with it',
      body: [
        {
          type: 'paragraph',
          text: 'Customs suspends its revenue claim on the basis that it retains control, and that control is exercised through the warehouse keeper. The keeper is accountable to the authority for the goods, and the accounting is not casual: what entered, what is present, and what left must reconcile, because any discrepancy is potentially untaxed goods that have entered the market. Stock that cannot be accounted for is stock on which duty is typically demanded, regardless of what happened to it.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Approval and security',
              description:
                'The authority approves the premises and generally requires a guarantee covering the suspended duty. The bond is what makes the suspension acceptable to the revenue.',
            },
            {
              term: 'Stock records',
              description:
                'The continuous account of goods under the procedure. The core obligation, and the thing an audit examines — the physical stock and the record must agree.',
            },
            {
              term: 'Permitted handling',
              description:
                'What may be done to goods in the warehouse. Operations to preserve them or prepare them for sale are typically allowed within limits; anything amounting to processing generally is not, and requires a different procedure.',
            },
            {
              term: 'Discharge of the procedure',
              description:
                'How goods lawfully leave — declared for home use with duty paid, re-exported, moved to another procedure, or destroyed under supervision.',
            },
            {
              term: 'Time limits',
              description:
                'How long goods may remain. Set nationally and varying widely, including regimes with no limit at all.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The permitted-handling boundary is a recurring practical issue for agricultural goods. Preserving stock, breaking bulk, repacking, and sorting are the kinds of operations warehousing regimes commonly accommodate. Milling, blending into a new product, or otherwise transforming the goods usually crosses into processing, which is a different customs procedure with different rules — and the line matters, because the duty ultimately payable depends on what the goods are when they are declared.',
        },
      ],
    },
    {
      id: 'what-it-does-not-do',
      heading: 'What it does not do',
      body: [
        {
          type: 'paragraph',
          text: 'The most consequential misunderstanding about bonded warehousing is that it suspends regulation generally. It does not. It suspends a fiscal charge. Sanitary and phytosanitary controls, food-safety requirements, and import prohibitions operate under separate regimes with their own logic, and goods that may not lawfully enter a country do not become admissible by being stored in a bonded warehouse there. A consignment can sit in bond, perfectly compliant with the customs procedure, and still be refused entry to the market on plant-health grounds.',
        },
        {
          type: 'list',
          items: [
            'It does not suspend phytosanitary or sanitary requirements, which are assessed on their own terms',
            'It does not make prohibited or non-compliant goods admissible',
            'It does not forgive duty — the charge is deferred and generally crystallises on removal for home use',
            'It does not stop the goods deteriorating; a perishable in bond is a perishable, and the clock runs',
            'It does not permit processing; transforming the goods usually requires a different procedure entirely',
            'It does not remove the keeper’s liability for stock that cannot be accounted for',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Bonded is not a free zone, and neither is a magic wand',
          text: 'Customs warehousing and free zones are related but distinct arrangements with different legal bases, different permitted activities, and different control models. Which is available, what may be done in it, and on what terms is a matter of national law. The two are frequently conflated, and the conflation leads people to assume permissions that do not exist.',
        },
      ],
    },
    {
      id: 'in-agricultural-trade',
      heading: 'In agricultural trade specifically',
      body: [
        {
          type: 'paragraph',
          text: 'Bonded storage sits naturally with the shape of agricultural trade. Harvests arrive at once and sell over a season, tariffs on food are often significant, tariff-rate quotas open and close on calendar dates, and preferential rates depend on origin evidence that sometimes arrives after the goods do. Each of those is a timing mismatch between the physical consignment and the fiscal or documentary event, and warehousing is the instrument that lets the two be separated.',
        },
        {
          type: 'paragraph',
          text: 'It is also where the duty-deferral logic meets the perishability logic, sometimes uncomfortably. Deferring duty is worth the most on stock held a long time; holding perishables a long time is exactly what the commodity will not tolerate. In practice bonded agricultural stock tends to be the storable end of the trade — grains, pulses, sugar, coffee, and processed goods — while perishables use bonded status briefly, for clearance timing rather than for financing.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This is a description, not customs advice',
          text: 'Warehousing regimes, permitted operations, time limits, guarantee requirements, and the treatment of goods on removal are all matters of national law and administration. What applies to a specific consignment in a specific country is determined by that authority and, in practice, by a customs broker or qualified adviser. Nothing here is legal or customs advice.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Separate the moment goods physically arrive in a country from the moment they legally enter its market, so that duty is financed only when goods are actually sold there — and not at all when they move on to somewhere else.',
  operationalLimitations: [
    'No duty rates, guarantee amounts, or charges are given. These depend on the goods, their classification, their origin, and the jurisdiction, and are determined by the competent authority.',
    'No time limits are stated. How long goods may remain under a warehousing procedure is set nationally and varies widely, including regimes with no limit.',
    'What handling is permitted on goods in a customs warehouse is set by national law and differs between jurisdictions; the boundary with processing is a legal question this page cannot resolve for any consignment.',
    'This page cannot say whether specific goods may be placed under the procedure, or what will be payable on removal. Those are determinations made by the customs authority against the specific consignment.',
    'Customs warehousing and free zones are distinct arrangements under national law; which is available and on what terms is jurisdiction-specific.',
    'Sanitary, phytosanitary, and food-safety requirements operate independently of the customs procedure and are not addressed by it or by this page.',
    'Nothing here is legal or customs advice, and it does not substitute for a customs broker, a qualified adviser, or the authority’s own ruling.',
  ],
  cargoForms: ['bulk-dry', 'containerised', 'unitised', 'breakbulk'],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'sugar-crop',
    'beverage-crop',
    'nut',
    'spice',
    'oilseed',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'black-pepper-corns' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'ambient-warehouse-storage' },
    { type: 'post-harvest', slug: 'flat-storage-warehouse' },
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'bag-stack-storage' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'free-trade-zone' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
    { type: 'trade-concept', slug: 'customs-valuation' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'multimodal-transport' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'currency-volatility' },
    { type: 'supply-chain-risk', slug: 'counterparty-default' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Customs warehousing as a standard procedure under the Revised Kyoto Convention, and customs control of approved premises',
    },
    {
      sourceId: 'wto',
      citedFor:
        'Tariff and import duty framework against which duty suspension operates',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Agricultural import arrangements, including tariff-rate quotas whose timing interacts with warehousing',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Entrepôt and re-export trade patterns in international commerce',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global in concept — most customs administrations operate a warehousing procedure — but the rules, permitted operations, time limits, and guarantee requirements are national and differ substantially.',
  limitations: [
    'A reference description of a customs facility and procedure, not legal advice, customs advice, or a brokerage service.',
    'No duty rates, guarantees, charges, or time limits are given — all are jurisdiction-, goods-, and origin-specific.',
    'Warehousing rules and the boundary between permitted handling and processing are matters of national law that differ between jurisdictions.',
    'Sanitary, phytosanitary, and admissibility requirements are separate regimes unaffected by the customs procedure or by this page.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bonded Warehouse: Storage Before Legal Entry to a Market',
    description:
      'How a bonded warehouse works: duty suspension versus forgiveness, re-export without duty, the keeper’s stock obligations, and what bonded status does not do.',
    keywords: [
      'bonded warehouse',
      'customs warehouse',
      'duty suspension',
      're-export trade',
      'customs control',
    ],
  },
  structuredData: { article: true },
};
