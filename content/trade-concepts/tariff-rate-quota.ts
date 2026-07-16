import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const tariffRateQuota: TradeConceptContent = {
  id: 'trade-concept-tariff-rate-quota',
  slug: 'tariff-rate-quota',
  contentType: 'trade-concept',
  title: 'Tariff-Rate Quota',
  alternativeNames: ['TRQ', 'Tariff quota', 'Two-tier tariff'],
  category: 'Trade concept',
  subcategory: 'Market access',
  tradeConceptClass: 'market-access',
  summary:
    'A tariff-rate quota applies one duty rate to imports up to a defined volume and a higher rate to everything beyond it. It is not a quantitative limit — imports above the threshold are permitted, just at a rate that is frequently high enough to make them uncommercial, which is where the instrument gets its effect.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A tariff-rate quota is two tariffs wearing one tariff line. Up to a specified quantity, imports attract the in-quota rate; beyond it, the out-of-quota rate applies. Nothing is prohibited. A trader may import as much as it likes, provided it pays the higher rate on the excess — and whether that is a real option depends entirely on how much higher the higher rate is.',
    },
    {
      type: 'paragraph',
      text: 'The instrument is overwhelmingly an agricultural one, and that is a matter of history rather than coincidence. The Uruguay Round required members to convert an assortment of border measures into tariffs and to bind them, while also providing for market access at levels that would not simply vanish behind the newly created tariffs. Tariff-rate quotas were the device that did both: a bound ceiling on the outside, and a defined volume of access at a workable rate on the inside.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market access — two-tier tariff on a defined volume',
    },
    {
      label: 'Mechanism',
      value:
        'An in-quota rate up to a specified quantity; an out-of-quota rate on imports beyond it',
    },
    {
      label: 'Not a prohibition',
      value:
        'Above-quota imports are lawful; whether they are commercial depends on the out-of-quota rate',
    },
    {
      label: 'Origin',
      value:
        'Introduced widely in agriculture through the Uruguay Round tariffication and market-access commitments',
    },
    {
      label: 'Administration',
      value:
        'How the in-quota volume is allocated is a separate decision from the quota itself, and often more consequential',
    },
    {
      label: 'Fill rate',
      value:
        'The share of a quota actually used — a persistently low fill rate is a recognised subject of scrutiny',
    },
    {
      label: 'Scope',
      value:
        'A quota may be open to all origins or reserved to specified suppliers, depending on the schedule or agreement',
    },
  ],
  sections: [
    {
      id: 'the-mechanism',
      heading: 'The mechanism',
      body: [
        {
          type: 'paragraph',
          text: 'The structure is straightforward and its economics are not. Three quantities define a tariff-rate quota — the volume, the in-quota rate, and the out-of-quota rate — and each can be set so as to make the instrument mean something entirely different.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Quota volume',
              description:
                'The quantity to which the lower rate applies, over a defined period. It resets, so the calendar is part of the instrument.',
            },
            {
              term: 'In-quota rate',
              description:
                'The rate applied within the volume. Where it is low or zero, access inside the quota is genuine and the right to use it has value.',
            },
            {
              term: 'Out-of-quota rate',
              description:
                'The rate applied beyond the volume. Where it is high, it functions as a practical ceiling even though it prohibits nothing.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The interaction is what matters. A quota with a modest out-of-quota rate is a mild instrument: exceeding it costs something but remains possible, and the quota is a discount rather than a wall. A quota with a prohibitive out-of-quota rate behaves like a quantitative limit while remaining formally a tariff. Both are tariff-rate quotas, and reading the volume alone tells you almost nothing about which you are looking at.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The right to import inside a quota is itself valuable',
          text: 'Where the two rates differ substantially, the difference is an economic rent attaching to whoever is allowed to import within the quota. That rent has to go somewhere, and who captures it is decided by the administration method rather than by the quota. This is why allocation is contested.',
        },
      ],
    },
    {
      id: 'administration',
      heading: 'Administration: the part that decides who benefits',
      body: [
        {
          type: 'paragraph',
          text: 'A quota volume is meaningless until someone decides who may import within it. The methods in use differ fundamentally in who gets the benefit, how predictable access is, and how easily new entrants can compete. Members notify their methods, and the range is well documented.',
        },
        {
          type: 'list',
          items: [
            'Applied tariffs — the in-quota rate applies to all imports until the volume is exhausted, on a first-come, first-served basis',
            'Licences on demand — traders apply for licences, with allocation among applicants where demand exceeds the volume',
            'Auctioning — the right to import within the quota is sold, which transfers the rent to the government',
            'Historical importers — allocation based on past import performance, which favours incumbents',
            'State trading enterprises or producer groups — allocation to a designated entity or organisation',
          ],
        },
        {
          type: 'paragraph',
          text: 'Each carries a predictable bias. First-come, first-served rewards whoever can position cargo to arrive at the opening moment, which favours proximity and capital over price. Historical allocation entrenches whoever already had the trade. Auctioning captures the rent for the state and can price out smaller traders. Licences on demand invite applications that exceed real intent when allocation is pro-rated. None of these is neutral, and none is a technicality — the administration method frequently determines who trades more decisively than the quota volume does.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Timing is part of the barrier',
          text: 'Under first-come, first-served administration, a quota can fill within a short window of its opening. A cargo that would have qualified but arrives afterwards faces the out-of-quota rate, so a shipping delay converts a viable trade into an unviable one. The commercial risk this creates sits with whichever party the sale contract puts it on.',
        },
      ],
    },
    {
      id: 'fill-rates',
      heading: 'Fill rates and underfill',
      body: [
        {
          type: 'paragraph',
          text: 'A quota’s fill rate — how much of the available volume was actually imported — is the usual measure of whether access is real. Persistent underfill is the signal that something is preventing use, and the something is not always obvious from the schedule.',
        },
        {
          type: 'list',
          items: [
            'Demand may simply be absent — the market does not want that much, and the quota is not binding',
            'The in-quota rate may still be too high to make the trade work',
            'Administrative arrangements may be onerous, slow, or opaque enough to deter applicants',
            'Licence conditions may not match how the trade actually operates in that commodity',
            'Allocation may sit with entities that do not use it, while others who would cannot obtain it',
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction between the first reason and the rest is the whole question. A quota unfilled for want of demand is functioning as intended; one unfilled because its administration frustrates use is providing access on paper that does not exist in practice. Underfill and the administration of agricultural tariff quotas have accordingly been a standing subject of multilateral attention, including a specific ministerial decision addressing underfill. What that discipline requires, and where it applies, is a matter for the instruments concerned.',
        },
      ],
    },
    {
      id: 'reading-a-quota',
      heading: 'What to establish before reading a quota',
      body: [
        {
          type: 'paragraph',
          text: 'A tariff-rate quota cannot be understood from a single number, and the questions that make it legible are always the same.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'What tariff lines does it cover, under which nomenclature edition — the product scope defines the quota',
            'What is the volume, over what period, and when does the period open',
            'What are the two rates, and how far apart are they',
            'How is it administered, and can a new entrant obtain access at all',
            'Is it open to all origins, or reserved to specified suppliers under a schedule or agreement',
            'Does a preferential agreement provide a separate quota alongside the general one',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point catches people out. Agreement-specific quotas can exist in parallel with schedule quotas for the same commodity, with different volumes, rates, and administration. A trader looking at one and concluding it has seen the access position for a market may have seen a fraction of it. AgricultureID states none of these parameters for any market: they are published by the authorities that set them and they change.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To provide access to a market at a workable duty rate for a defined volume, while retaining a higher rate on imports beyond it — combining a measure of protection with a measure of guaranteed access.',
  administeredBy:
    'The customs and agricultural authorities of the importing jurisdiction, under the administration method that jurisdiction applies',
  governingBodies: [
    'World Trade Organization',
    'National customs and agricultural authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'No quota volume, in-quota rate, out-of-quota rate, period, fill rate, or allocation figure is given on this page for any commodity or market. These are published by the authorities that set them and change.',
    'Whether a consignment qualifies within a quota, and at what rate it is assessed, is determined by the competent authority for that consignment under the rules and the volume position in force at the time.',
    'Access to a quota commonly requires a licence or comparable authorisation obtained in advance under the importing jurisdiction’s procedures; nothing here indicates how any allocation operates.',
    'Quotas under a preferential agreement may exist alongside general quotas for the same product, with different parameters. Establishing the full access position for a market requires consulting all applicable instruments.',
  ],
  partiesInvolved: [
    'Importer seeking to import within the quota',
    'Licence or allocation applicant',
    'Customs authority administering the volume and assessing the rate',
    'Agricultural or licensing authority operating the allocation',
    'Exporting countries whose access the quota governs',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'customs-declaration' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'hs-code-versioning' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  connections: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'sugarcane' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'Tariff-rate quotas arising from Uruguay Round tariffication and market-access commitments, notified administration methods, fill rates, and the underfill discipline',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Publication of tariff quota parameters and access conditions by market and tariff line',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Analysis of tariff quota administration methods and their effects on market access',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'Operation of agricultural tariff quotas and their licensing arrangements in a regional regime',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a mechanism. Every quota is specific to a jurisdiction or agreement, with its own product scope, volume, rates, period, administration method, and origin eligibility.',
  limitations: [
    'A description of the mechanism, not a schedule of quotas and not the access position for any market.',
    'No volumes, rates, periods, fill rates, or allocation parameters are given anywhere on this page.',
    'The administration methods described are the recognised categories; which applies to any quota, and how it operates in detail, is a matter for the jurisdiction concerned.',
    'Reasons for underfill are enumerated as possibilities, not attributed to any quota, commodity, or country.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Tariff-Rate Quota: How Two-Tier Tariffs Work',
    description:
      'How a tariff-rate quota applies one rate within a volume and a higher rate beyond it, why administration decides who benefits, and what fill rates reveal.',
    keywords: [
      'tariff-rate quota',
      'TRQ',
      'in-quota rate',
      'quota administration',
      'fill rate',
    ],
  },
  structuredData: { article: true },
};
