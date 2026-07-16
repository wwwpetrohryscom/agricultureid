import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const tariffsAndDuties: TradeConceptContent = {
  id: 'trade-concept-tariffs-and-duties',
  slug: 'tariffs-and-duties',
  contentType: 'trade-concept',
  title: 'Tariffs and Duties',
  alternativeNames: ['Customs duty', 'Import tariff', 'Tariff schedule'],
  category: 'Trade concept',
  subcategory: 'Trade mechanics',
  tradeConceptClass: 'trade-mechanics',
  summary:
    'A tariff is a charge applied to goods because they cross a border, set out in a national schedule against classification codes. What is actually payable on a consignment depends on its classification, its customs value or quantity, its origin, and the regime it enters under — which is why a tariff schedule is a starting point rather than an answer.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A tariff is the oldest instrument of trade policy: a charge levied on goods because of where they came from and where they are going. Every jurisdiction maintains a schedule setting out what is payable against each line of its tariff nomenclature, and for agricultural goods those schedules are among the most intricate anywhere — the sector attracts more instruments, more exceptions, and more conditionality than most.',
    },
    {
      type: 'paragraph',
      text: 'The important thing to understand is that a rate in a schedule is not a duty bill. Getting from one to the other requires four separate determinations — what the goods are, what they are worth or how much there is of them, where they originate, and under what regime they are entering — and each is capable of changing the answer entirely. A reader who looks up a line and reads off a number has done the first step of a calculation, not the calculation.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade mechanics — charges applied at the border',
    },
    {
      label: 'Assessed against',
      value:
        'Classification, customs value or quantity, origin, and the regime the goods enter under',
    },
    {
      label: 'Principal forms',
      value:
        'Ad valorem (a percentage of value), specific (an amount per unit of quantity), and compound or mixed combinations',
    },
    {
      label: 'Bound versus applied',
      value:
        'A WTO member’s bound rate is its negotiated ceiling; the rate it actually applies may be lower',
    },
    {
      label: 'MFN versus preferential',
      value:
        'The general rate applies unless a preference is claimed and substantiated under an agreement or scheme',
    },
    {
      label: 'Not the only charge',
      value:
        'Trade-remedy duties, excise, and value-added taxes at import are separate instruments from customs duty',
    },
    {
      label: 'Determined by',
      value:
        'The customs authority of the importing jurisdiction, per consignment',
    },
  ],
  sections: [
    {
      id: 'forms-of-duty',
      heading: 'The forms a duty can take',
      body: [
        {
          type: 'paragraph',
          text: 'How a duty is expressed matters as much as how high it is, because the form determines how the charge behaves as prices move — a point that bears directly on agricultural commodities, whose prices move a great deal.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Ad valorem',
              description:
                'Expressed as a percentage of the customs value. The charge rises and falls with the value of the goods, so its proportional burden is constant while its absolute amount is not.',
            },
            {
              term: 'Specific',
              description:
                'Expressed as an amount per unit of quantity — per tonne, per litre, per head. The charge is fixed regardless of value, so its proportional burden rises as prices fall and falls as prices rise.',
            },
            {
              term: 'Compound',
              description:
                'An ad valorem element and a specific element applied together.',
            },
            {
              term: 'Mixed or alternative',
              description:
                'A choice between elements — commonly the greater or the lesser of an ad valorem and a specific rate — so that the effective form of the duty depends on the price.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A specific duty is a moving barrier',
          text: 'Because a specific duty is fixed per unit, its protective effect grows as world prices fall and shrinks as they rise. A duty that is modest in a high-price year can be substantial in a low-price one, with no change in policy. This is a structural property of the instrument, not a claim about any schedule.',
        },
      ],
    },
    {
      id: 'what-determines-the-charge',
      heading: 'The four determinations',
      body: [
        {
          type: 'paragraph',
          text: 'The duty on a consignment is the output of four questions, and each has its own body of rules, its own evidence requirements, and its own capacity to be contested.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Classification — which tariff line the goods fall in, determined under the nomenclature and its interpretative rules. This selects the schedule entry that will apply.',
            'Valuation or quantity — the customs value for an ad valorem element, determined under the valuation rules; or the measured quantity for a specific element, on the basis the schedule specifies.',
            'Origin — where the goods originate under the applicable rules, which decides whether the general rate or a preferential rate is available.',
            'Regime — the procedure the goods enter under. Free circulation, transit, warehousing, a zone, temporary admission, or inward processing all produce different duty positions from the same goods.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Each is capable of dominating the outcome. A classification that shifts a good to an adjacent line can change the rate; a preferential origin claim can reduce it to zero; entry into a warehousing regime can defer it indefinitely. Conversely, a preference claimed but not substantiated on verification can be withdrawn afterwards, with the duty recovered. The schedule line is where the analysis starts.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Quantity duties depend on how quantity is measured',
          text: 'A duty per tonne requires a tonne to be established — net or gross, at what moisture, by what method, at which point. For bulk agricultural cargo these are not trivial questions, and the answers come from the tariff’s own terms and the authority applying them.',
        },
      ],
    },
    {
      id: 'agricultural-specifics',
      heading: 'Why agricultural tariffs are their own subject',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural tariff schedules are structurally more complicated than industrial ones, for reasons rooted in how the sector was brought into the multilateral system. The Uruguay Round required members to convert a heterogeneous set of border measures — variable levies, quantitative restrictions, minimum import prices — into tariffs, a process known as tariffication, and to bind the results. The tariffs that emerged inherited the complexity of what they replaced.',
        },
        {
          type: 'list',
          items: [
            'Specific and compound duties are far more common than in industrial tariffs, so the rate on a consignment often depends on measured quantity as well as value',
            'Tariff-rate quotas create two rates for the same good, with access to the lower one governed by an allocation mechanism',
            'A special agricultural safeguard exists in the WTO framework, available to members that reserved the right in their schedules, allowing additional duties to be triggered in defined circumstances',
            'Tariff escalation is a recognised pattern: schedules frequently apply higher rates to processed forms than to the raw commodity, which bears on where processing takes place',
            'Seasonal rates apply to some horticultural products in some schedules, so the calendar can matter',
          ],
        },
        {
          type: 'paragraph',
          text: 'Tariff escalation deserves its own sentence because of what it does to producing countries. Where a schedule taxes green coffee lightly and roasted coffee more heavily, or oilseed lightly and refined oil more heavily, the structure discourages processing at origin and encourages it in the importing market. This is a well-documented feature of tariff structures and a standing subject of development policy discussion; the specific rates that produce it are in the schedules concerned and are not stated here.',
        },
      ],
    },
    {
      id: 'other-charges',
      heading: 'Charges that are not customs duty',
      body: [
        {
          type: 'paragraph',
          text: 'Customs duty is one line on a border bill, and treating it as the whole is a common error in estimating landed cost. Several other instruments are assessed at import, under different rules and often by different authorities.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Trade-remedy duties',
              description:
                'Anti-dumping, countervailing, and safeguard duties. These arise from investigations into specific goods from specific sources, are imposed for defined periods, and sit on top of the ordinary duty. They are not part of the tariff schedule.',
            },
            {
              term: 'Indirect taxes at import',
              description:
                'Value-added tax, goods and services tax, or equivalents, applied so that imports bear the same domestic tax as domestic goods. Their base commonly includes the duty, so they compound it.',
            },
            {
              term: 'Excise duty',
              description:
                'Applied to particular product categories domestically and at import alike. Relevant to some agricultural derivatives.',
            },
            {
              term: 'Fees and charges',
              description:
                'Amounts levied for services actually rendered — inspection, processing, and similar. These are subject to disciplines about their relationship to the cost of the service.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The interaction of these is jurisdiction-specific, and the compounding effect is where estimates go wrong. AgricultureID does not publish rates for any of them: they change, they are conditional, and they are published by the authorities that set them.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To describe how charges are applied to goods at a border — the forms a duty can take, the determinations that produce a liability, and the instruments that sit alongside customs duty.',
  administeredBy:
    'The customs authority of the importing jurisdiction, applying that jurisdiction’s tariff schedule and law',
  governingBodies: [
    'World Trade Organization',
    'World Customs Organization',
    'National customs and tariff authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'No duty rate, tariff line, threshold, fee, or tax rate is given on this page for any good or jurisdiction. Rates are published by the authorities that set them, change frequently, and are conditional on facts this page cannot know.',
    'A rate in a schedule is not a duty liability. What is payable depends on classification, valuation or quantity, origin, and the regime the goods enter under, each determined by the competent authority for the specific consignment.',
    'Preferential rates must be claimed and substantiated under the agreement relied on, and remain subject to verification and recovery after import.',
    'Trade-remedy duties, indirect taxes, excise, and fees are separate instruments with their own rules and authorities; nothing here indicates whether any of them applies to any consignment.',
  ],
  partiesInvolved: [
    'Importer of record, liable for the charges',
    'Customs broker or declarant',
    'Customs authority assessing and collecting',
    'Tax authority, where indirect taxes are administered separately',
    'Exporter supplying the evidence on which classification, value, and origin rest',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'ddp-delivery-term' },
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'free-trade-zone' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
  ],
  connections: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'sugarcane' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'Bound and applied rates, most-favoured-nation treatment, tariffication of agricultural border measures, the special agricultural safeguard, and disciplines on fees and charges',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Assessment of duty against classification, value, and origin, and the customs procedures that determine the duty position',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Publication of applied and preferential tariff information by market and tariff line',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Tariff escalation as a documented feature of tariff structures affecting processing at origin',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Analysis of border measures as instruments of agricultural policy',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a set of mechanisms. Every rate, schedule, preference, remedy, and tax is national or agreement-specific, is published by the authority concerned, and changes over time.',
  limitations: [
    'A description of how border charges work, not a tariff schedule and not a duty calculation for any good or market.',
    'No rates, thresholds, quota volumes, trigger levels, or tax figures are given anywhere on this page — they are jurisdictional, conditional, and change.',
    'The four determinations described are the general structure; how any jurisdiction sequences and evidences them is a matter of its own law.',
    'Tariff escalation and the behaviour of specific duties are structural observations about instruments, not claims about any particular schedule.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Tariffs and Duties: How Border Charges Are Assessed',
    description:
      'How tariffs work: ad valorem, specific, and compound forms, the determinations behind a duty liability, and the charges that are not customs duty.',
    keywords: [
      'tariffs',
      'customs duty',
      'ad valorem',
      'specific duty',
      'tariff escalation',
    ],
  },
  structuredData: { article: true },
};
