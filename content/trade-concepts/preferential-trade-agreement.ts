import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const preferentialTradeAgreement: TradeConceptContent = {
  id: 'trade-concept-preferential-trade-agreement',
  slug: 'preferential-trade-agreement',
  contentType: 'trade-concept',
  title: 'Preferential Trade Agreement',
  alternativeNames: [
    'PTA',
    'Free trade agreement',
    'Regional trade agreement',
    'Trade preference scheme',
  ],
  category: 'Trade concept',
  subcategory: 'Market access',
  tradeConceptClass: 'market-access',
  summary:
    'A preferential trade agreement gives goods from a partner better tariff treatment than the general rate. The preference is never automatic: it must be claimed, the goods must qualify under that agreement’s own rules of origin, and agricultural products are the sector most often carved out, staged over long periods, or admitted only within a quota.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The default in the multilateral system is that a country applies the same tariff to imports regardless of which member they come from. Preferential agreements are the recognised departure from that default: two or more parties agree to treat each other’s goods better than they treat everyone else’s, within a framework that the multilateral rules provide for.',
    },
    {
      type: 'paragraph',
      text: 'For agriculture, the departure is more qualified than the headline suggests. An agreement that liberalises industrial goods comprehensively may treat farm products as a set of exceptions — excluded outright, phased in across a decade or more, or admitted at a preferential rate only within a defined volume. Reading an agreement’s existence as an answer to whether a commodity can move preferentially is the most common mistake made about them.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market access — better-than-general tariff treatment',
    },
    {
      label: 'Multilateral basis',
      value:
        'Provided for in the GATT/WTO framework, including provisions for agreements between members and for preferences to developing countries',
    },
    {
      label: 'Reciprocal or unilateral',
      value:
        'Agreements are negotiated between parties; preference schemes are granted unilaterally and can be modified by the granting country',
    },
    {
      label: 'Never automatic',
      value:
        'A preference must be claimed at import and substantiated under that agreement’s rules of origin',
    },
    {
      label: 'Agricultural treatment',
      value:
        'Exclusions, long staging, and preferential quotas are common for farm products',
    },
    {
      label: 'Own origin rules',
      value:
        'Each agreement carries its own product-specific rules — qualifying under one implies nothing about another',
    },
    {
      label: 'Utilisation',
      value:
        'Preferences available are not always used; the gap is a documented phenomenon in its own right',
    },
  ],
  sections: [
    {
      id: 'forms',
      heading: 'Forms of preference',
      body: [
        {
          type: 'paragraph',
          text: 'The instruments grouped under this heading differ in structure and in how secure the access they provide really is.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Free trade area',
              description:
                'Parties remove or reduce duties on trade between themselves while each keeps its own tariff toward the rest of the world. Because external tariffs differ, rules of origin are essential — otherwise goods would enter through whichever party has the lowest external duty.',
            },
            {
              term: 'Customs union',
              description:
                'Parties additionally apply a common external tariff. Once goods have entered and been cleared anywhere in the union, they generally circulate freely, which reduces the role of origin rules for internal movement.',
            },
            {
              term: 'Unilateral preference scheme',
              description:
                'A country grants reduced duties to imports from developing countries without reciprocity, under the framework the multilateral system provides for such arrangements. Because it is granted rather than negotiated, its terms can be modified by the granting country.',
            },
            {
              term: 'Partial-scope or sectoral arrangement',
              description:
                'Preferences covering a defined set of products rather than substantially all trade.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title:
            'Why free trade areas need origin rules and customs unions need them less',
          text: 'If two countries in a free trade area apply different external tariffs, a good could be imported through the lower-tariff party and moved on duty-free. Rules of origin prevent that by confining the preference to goods that genuinely originate in a party. A common external tariff removes the incentive, which is why the two structures differ so much in origin administration.',
        },
      ],
    },
    {
      id: 'why-agriculture-is-different',
      heading: 'Why agriculture is treated differently',
      body: [
        {
          type: 'paragraph',
          text: 'Agricultural liberalisation is politically harder than industrial liberalisation, and the agreements show it. The mechanisms used to soften it are standard, and any of them can mean that an agreement covering a commodity provides little or no usable access for it.',
        },
        {
          type: 'list',
          items: [
            'Exclusion — the product is carved out of liberalisation entirely and continues to attract the general rate',
            'Long staging — duties are reduced over a schedule of years, so the preference at signature is much smaller than the preference eventually promised',
            'Preferential tariff quotas — the preferential rate applies only within a volume, with the general rate beyond it',
            'Seasonal or entry-price arrangements — preference conditioned on the calendar or on price, common for horticultural products',
            'Safeguard provisions — additional duties available if imports of a sensitive product rise beyond defined levels',
          ],
        },
        {
          type: 'paragraph',
          text: 'The practical upshot is that "there is an agreement between these countries" and "this commodity can move preferentially between them" are unrelated statements. Establishing the second requires the product-specific schedule, the staging position for the current year, and the quota position if one applies — none of which can be inferred from the agreement’s existence or its general description.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A preference does not touch health requirements',
          text: 'Tariff preferences and sanitary or phytosanitary admissibility are entirely separate. An agreement can reduce a duty to zero while the importing country’s health requirements keep the product out altogether. Preferential access is a tariff concept; admissibility is not.',
        },
      ],
    },
    {
      id: 'claiming-and-utilisation',
      heading: 'Claiming a preference, and why some are not used',
      body: [
        {
          type: 'paragraph',
          text: 'A preference is a claim made at import, supported by evidence in the form the agreement specifies, and subject to verification afterwards. The importer claims it and bears the consequence if it cannot be substantiated; the exporter holds the records that a verification would examine. This distribution of burden — benefit to the importer, evidence with the exporter, liability back to the importer — is what makes preference use an administrative undertaking rather than a discount.',
        },
        {
          type: 'paragraph',
          text: 'The result is that available preferences are not always taken up, and the gap between preferences granted and preferences used is a documented and studied phenomenon. The reasons are structural rather than mysterious.',
        },
        {
          type: 'list',
          items: [
            'The margin may be too small to justify the compliance cost of claiming it',
            'The origin rule may be unmeetable for the way the product is actually made or sourced',
            'The evidence and record-keeping obligations may exceed what a small exporter can sustain',
            'Traders may be unaware of the preference, or unsure of the rule’s application to their product',
            'The risk of a failed verification and duty recovery may outweigh the saving',
          ],
        },
        {
          type: 'paragraph',
          text: 'Underutilisation matters especially for agricultural exporters in developing countries, who are often the intended beneficiaries of unilateral schemes and least equipped to carry the documentary burden that using them requires. It is the reason origin-rule design and certification arrangements are treated as development questions and not merely as technical ones.',
        },
      ],
    },
    {
      id: 'reading-an-agreement',
      heading: 'Reading an agreement for a commodity',
      body: [
        {
          type: 'paragraph',
          text: 'The questions that establish whether a preference is real for a given trade are always the same, and none is answered by the agreement’s name.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Is the product covered at all, or excluded — identified by tariff line under the applicable nomenclature edition',
            'What is the preferential rate now, given where the staging schedule has reached',
            'Is access limited to a quota, and if so what are its parameters and administration',
            'What is the product-specific rule of origin, and can the product as actually produced meet it',
            'Does cumulation apply, and does it reach the countries the inputs come from',
            'What proof of origin does the agreement require, and what records must be kept, by whom, for how long',
          ],
        },
        {
          type: 'paragraph',
          text: 'AgricultureID answers none of these for any agreement or commodity. They are established from the agreement’s own text and schedules and from the importing authority’s published information, and they change as staging advances and instruments are amended.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To grant goods from a partner or beneficiary better tariff treatment than the general rate, within the framework the multilateral system provides, subject to origin rules that confine the benefit to goods that genuinely qualify.',
  administeredBy:
    'The customs authority of the importing party, applying the agreement’s schedules and origin rules under national law',
  governingBodies: [
    'World Trade Organization',
    'The parties to each agreement',
    'National customs authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what preferential agreements are and how they work. It names no agreement, states no rate, schedule, quota, staging position, or rule of origin, and does not indicate whether any product benefits under any instrument.',
    'The existence of an agreement between two countries says nothing about whether a given commodity benefits. Coverage, staging, quotas, and origin rules are product-specific and must be established from the agreement itself.',
    'A preference must be claimed at import and substantiated under the agreement relied on; it remains subject to verification and to recovery of duty where it cannot be evidenced.',
    'Tariff preference has no bearing on sanitary, phytosanitary, or other admissibility requirements, which are set and applied independently by the importing jurisdiction.',
  ],
  partiesInvolved: [
    'Parties to the agreement, or the granting country under a unilateral scheme',
    'Exporter or producer whose goods must qualify',
    'Importer claiming the preferential treatment',
    'Customs authority of the importing party',
    'Exporting country’s administration, on verification',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The framework provisions for preferential agreements between members and for preferences to developing countries, and the notification of regional trade agreements',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Unilateral preference schemes, preference utilisation, and the role of origin-rule design in whether preferences are used',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Publication of preferential tariff rates, product-specific origin rules, and market-access conditions by agreement',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Analysis of agricultural treatment in preferential agreements, including exclusions, staging, and preferential quotas',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a category. Every agreement is specific to its parties, with its own product coverage, schedules, quotas, origin rules, and documentary requirements, all of which change over time.',
  limitations: [
    'A description of how preferential agreements work, not an account of any agreement and not a statement of any product’s access position.',
    'No agreements are named and no rates, schedules, quota parameters, staging positions, or origin rules are given anywhere on this page.',
    'The mechanisms listed for agricultural treatment are the recognised categories; which are used in any instrument is a matter for that instrument.',
    'Preference utilisation is discussed as a documented phenomenon; no utilisation figures are given and no scheme or country is characterised.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Preferential Trade Agreement: How Tariff Preferences Work',
    description:
      'How preferential agreements grant better-than-general tariff treatment: free trade areas, customs unions and unilateral schemes, and why preferences go unused.',
    keywords: [
      'preferential trade agreement',
      'free trade agreement',
      'tariff preference',
      'preference utilisation',
      'customs union',
    ],
  },
  structuredData: { article: true },
};
