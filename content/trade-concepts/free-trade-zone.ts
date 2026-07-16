import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const freeTradeZone: TradeConceptContent = {
  id: 'trade-concept-free-trade-zone',
  slug: 'free-trade-zone',
  contentType: 'trade-concept',
  title: 'Free Trade Zone',
  alternativeNames: [
    'Free zone',
    'Foreign-trade zone',
    'Free port',
    'Special economic zone',
  ],
  category: 'Trade concept',
  subcategory: 'Trade mechanics',
  tradeConceptClass: 'trade-mechanics',
  summary:
    'A free trade zone is a defined area within a country’s territory where goods are treated, for customs purposes, as though they were outside it: they can be stored, handled, and often processed without duty being charged, until and unless they enter the domestic market. It is a customs status attached to a place, and the terminology around it is used loosely enough to be misleading.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A free trade zone is a piece of a country that its customs law treats as though it were somewhere else. Goods brought into the zone are not imported in the ordinary sense: duty is not charged on arrival, and the usual import formalities are deferred. They can be stored, sorted, repacked, and in many regimes processed, and they only become imports — with the duty and the formalities that implies — if and when they leave the zone for the domestic market.',
    },
    {
      type: 'paragraph',
      text: 'The concept is old and the vocabulary around it is a mess. "Free zone", "free port", "foreign-trade zone", "export processing zone", and "special economic zone" are used interchangeably in commentary and mean quite different things in the laws that create them. Some are purely customs constructs; others bundle tax, labour, and investment provisions that have nothing to do with customs. The only reliable way to know what a particular zone is, is to read the regime that establishes it.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade mechanics — customs status attached to a defined area',
    },
    {
      label: 'Core mechanism',
      value:
        'Goods in the zone are treated as outside the customs territory; duty liability is deferred, not forgiven',
    },
    {
      label: 'Trigger for duty',
      value:
        'Entry into the domestic market from the zone, where that is what happens',
    },
    {
      label: 'Permitted operations',
      value:
        'Storage and handling generally; processing in some regimes and not others',
    },
    {
      label: 'Origin effect',
      value:
        'Location in a zone confers no origin; only a qualifying operation can, under the applicable rule',
    },
    {
      label: 'Statistical effect',
      value:
        'Whether zone goods are counted in trade statistics depends on the reporter’s trade system',
    },
    {
      label: 'Terminology',
      value:
        'Zone names are not standardised across jurisdictions and do not reliably indicate what a zone does',
    },
  ],
  sections: [
    {
      id: 'the-mechanism',
      heading: 'The mechanism',
      body: [
        {
          type: 'paragraph',
          text: 'The device at the centre of a free zone is a legal fiction about geography. The zone is physically inside the country and legally outside its customs territory, which means the event that normally happens when goods cross the frontier — the import, the declaration, the duty — does not happen when they enter the zone. It is postponed until the goods do something that counts.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Entry into the zone',
              description:
                'Goods arrive from abroad and are placed in the zone. No import for consumption occurs, and duty is not charged. The goods are accounted for but not released.',
            },
            {
              term: 'Operations within the zone',
              description:
                'Depending on the regime: storage, sorting, grading, repacking, labelling, blending, and in many zones manufacturing or processing. What is permitted is set by the regime, not by the concept.',
            },
            {
              term: 'Exit to the domestic market',
              description:
                'The goods are imported at this point. Duty and formalities apply, assessed under the rules the regime specifies.',
            },
            {
              term: 'Exit abroad',
              description:
                'The goods leave the country without ever having entered its market. This is the pattern that makes zones attractive for entrepôt and re-export trade.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Deferral is not exemption',
          text: 'A zone postpones a duty liability and can avoid it entirely where the goods never enter the domestic market. It does not abolish the liability for goods that do. What is owed on exit into the market, and how it is assessed, is determined by the regime and the authority administering it.',
        },
      ],
    },
    {
      id: 'why-zones-are-used',
      heading: 'Why zones are used in agricultural trade',
      body: [
        {
          type: 'paragraph',
          text: 'The commercial logic is mostly about timing and optionality. Duty paid on arrival is capital committed before the goods have been sold; duty deferred until sale is capital retained. For commodities held in quantity, over long periods, awaiting a buyer or a price, that difference is the whole reason the facility exists.',
        },
        {
          type: 'list',
          items: [
            'Holding stock close to a market without committing duty until it is sold there',
            'Keeping the destination open — goods can go into the domestic market or onward abroad, decided later',
            'Consolidating, splitting, grading, or repacking cargo for onward distribution',
            'Processing under regimes that permit it, where the resulting product may face a different duty position from the inputs',
            'Serving a hub function for a region, where the zone is attached to a port or airport',
          ],
        },
        {
          type: 'paragraph',
          text: 'The optionality point is the one most specific to commodity trade. A cargo of grain or oilseed sitting in a zone has not yet been assigned to a market. The trader can decide, in light of prices and demand, whether to clear it domestically or ship it on — and the duty position follows the decision rather than constraining it. That is a genuine commercial advantage and it is what zones are for.',
        },
      ],
    },
    {
      id: 'what-zones-do-not-do',
      heading: 'What a zone does not do',
      body: [
        {
          type: 'paragraph',
          text: 'Zones attract more claims than they support, and the limits matter as much as the mechanism.',
        },
        {
          type: 'list',
          items: [
            'A zone does not confer origin. Goods do not become products of the country because they sat in a zone in it; origin is decided by rules of origin applied to what was actually done to the goods.',
            'A zone does not suspend health and safety regulation. Food-safety, plant-health, and animal-health requirements apply as the jurisdiction provides, and goods entering the domestic market from a zone face the destination’s controls.',
            'A zone does not make prohibited goods admissible. A prohibition is a prohibition regardless of where in the territory the goods sit.',
            'A zone is not a uniform product. Two zones in two countries — or in the same country — may permit entirely different operations and carry entirely different conditions.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The origin claim is the recurring error',
          text: 'The idea that goods acquire the zone country’s origin by passing through is wrong and consequential, because origin drives preferential duty. Whether an operation performed in a zone confers origin is determined by the applicable rule of origin, under the agreement or law being relied on, by the authority of the importing country.',
        },
      ],
    },
    {
      id: 'statistics-and-oversight',
      heading: 'Statistics and oversight',
      body: [
        {
          type: 'paragraph',
          text: 'Whether goods in a zone appear in a country’s trade statistics depends on which trade system that country compiles under. Under the general trade system the statistical boundary is drawn widely enough that goods entering zones are counted on arrival; under the special trade system they may not be counted until they are released into free circulation. For economies with large zone activity, the choice materially changes what their import figures represent, and the choice is documented in the reporter’s metadata rather than inferable from the numbers.',
        },
        {
          type: 'paragraph',
          text: 'Zones are also, by construction, places where goods sit outside the ordinary customs process for extended periods, which makes their oversight arrangements a subject of international attention. Governance and transparency of free zones have been examined by intergovernmental bodies, and the arrangements vary widely between regimes. AgricultureID notes that this discussion exists and does not characterise any zone or country.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To describe the customs status by which a defined area within a country is treated as outside its customs territory, so that duty and import formalities are deferred until goods enter the domestic market.',
  administeredBy:
    'The customs authority of the country in which the zone is established, under the regime that creates it and any zone operator’s licence',
  governingBodies: [
    'World Customs Organization',
    'National customs authorities',
    'National zone authorities established by the applicable regime',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes the general mechanism of a free zone. It describes no actual zone, states no regime’s conditions, and lists no permitted operation, time limit, or duty consequence for any jurisdiction.',
    'Zone terminology is not standardised: the name of a zone does not reliably indicate what it permits. What any zone allows is established from the law and the licence that create it.',
    'Whether an operation performed in a zone confers origin is a rules-of-origin determination made by the importing jurisdiction under the applicable rule, and is not a consequence of the zone.',
    'Food-safety, plant-health, and animal-health requirements are not suspended by zone status; how they apply within a zone is a matter for the competent authority.',
  ],
  partiesInvolved: [
    'Zone authority or operator',
    'Depositor or owner of goods held in the zone',
    'Customs authority supervising the zone',
    'Traders and processors licensed to operate within it',
    'Health and other regulatory authorities with jurisdiction over the goods',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Free zones as a customs procedure under which goods are treated as outside the customs territory, and the deferral of duty until entry into the domestic market',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Intergovernmental examination of free-zone governance and transparency arrangements',
    },
    {
      sourceId: 'un-comtrade',
      citedFor:
        'Treatment of goods in free zones under the general and special trade systems for statistical purposes',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Use of zones in trade and investment arrangements and the diversity of regimes described by similar names',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a mechanism. Every operative feature — what a zone permits, for how long, on what conditions, and with what duty consequence on exit — is established by the national regime creating that zone.',
  limitations: [
    'A description of the general mechanism, not an account of any zone, regime, or jurisdiction.',
    'No duty consequences, time limits, permitted-operation lists, or licensing conditions are given: they are set by the regime that creates each zone.',
    'Zone names are used inconsistently across jurisdictions, and this page does not map any term to any regime.',
    'The statistical treatment of zone goods depends on the reporter’s trade system, which is stated in its metadata and is not assumed here for any country.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Free Trade Zone: Customs Status Attached to a Place',
    description:
      'How a free trade zone defers duty by treating an area as outside the customs territory, why commodity traders use zones, and what a zone does not do.',
    keywords: [
      'free trade zone',
      'free zone',
      'foreign-trade zone',
      'duty deferral',
      'bonded storage',
    ],
  },
  structuredData: { article: true },
};
