import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const rulesOfOrigin: TradeConceptContent = {
  id: 'trade-concept-rules-of-origin',
  slug: 'rules-of-origin',
  contentType: 'trade-concept',
  title: 'Rules of Origin',
  alternativeNames: [
    'Origin rules',
    'Substantial transformation rules',
    'Product-specific rules of origin',
  ],
  category: 'Trade concept',
  subcategory: 'Customs procedure',
  tradeConceptClass: 'customs-procedure',
  summary:
    'Rules of origin are the criteria by which a good is attributed to a country for customs purposes. They answer a question the goods themselves cannot: when materials from several places have been combined or processed, which country is the good "from"? The answer is constructed by rule, differs between agreements, and drives access to preferential duty.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A crop grown and harvested in one country is from that country, and no rule is needed to see it. The difficulty starts as soon as anything else happens: wheat from three origins blended in a silo, cocoa from one country processed in another, an animal born in one place and raised in a second, oil crushed from imported seed. In each case the good has a genuinely composite history, and "where is it from" has no observable answer.',
    },
    {
      type: 'paragraph',
      text: 'Rules of origin supply an answer by construction. They set out criteria — sometimes a change of tariff classification, sometimes a threshold of value added, sometimes a specified process — and whatever those criteria yield is the origin, for the purpose of the regime that contains them. This is why origin is a legal conclusion rather than a fact about the material, and why the same consignment can originate in different countries under different agreements.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Customs procedure — attributing a good to a country',
    },
    {
      label: 'Two regimes',
      value:
        'Non-preferential rules for general tariff and policy purposes; preferential rules for claiming agreement benefits',
    },
    {
      label: 'Base concepts',
      value:
        'Wholly obtained goods, and substantial transformation for goods with imported inputs',
    },
    {
      label: 'Criteria used',
      value:
        'Change in tariff classification, value-added thresholds, and specific process requirements — alone or combined',
    },
    {
      label: 'Product-specific',
      value:
        'Rules are set per product, per agreement — there is no single rule for a commodity',
    },
    {
      label: 'Cumulation',
      value:
        'Provisions allowing inputs or processing from partner countries to count toward origin',
    },
    {
      label: 'Verified after the fact',
      value:
        'A preferential claim can be checked after import, with duty recovered if it is not substantiated',
    },
  ],
  sections: [
    {
      id: 'wholly-obtained-and-transformation',
      heading: 'Wholly obtained, and substantial transformation',
      body: [
        {
          type: 'paragraph',
          text: 'Origin systems start from a simple case and build outward. Goods wholly obtained in a country — grown, harvested, born and raised, caught, or extracted there, with nothing imported in them — originate there. Most agricultural raw materials in their unprocessed state fall here, and this is the one part of origin law that matches intuition.',
        },
        {
          type: 'paragraph',
          text: 'Everything else needs the concept of substantial transformation: where a good contains materials from elsewhere, it originates in the country where those materials were last transformed enough to matter. The whole of the difficulty is in "enough", and origin systems answer it with tests rather than judgment, because a test can be applied consistently at a border and a judgment cannot.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Change in tariff classification',
              description:
                'The good is treated as originating where processing moved it to a different tariff heading or subheading from its imported inputs. The nomenclature does the work: if the classification changed, the good is deemed to have changed.',
            },
            {
              term: 'Value-added criterion',
              description:
                'Origin turns on how much value was added, or on how much non-originating material a good may contain, expressed against a threshold. It requires costings, which is why it is administratively heavier than a classification test.',
            },
            {
              term: 'Specific process criterion',
              description:
                'The rule names an operation that confers origin, or names operations that do not. This is used where the other tests give unsatisfactory answers for a particular product.',
            },
            {
              term: 'Insufficient operations',
              description:
                'Origin systems generally list operations that never confer origin on their own — typically simple handling such as packing, labelling, sorting, or mixing — regardless of whether another test would otherwise be met.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The tests are per product, not per commodity',
          text: 'An agreement carries product-specific rules, so the rule for green coffee, roasted coffee, and coffee extract may each differ, and each may differ again in another agreement. There is no such thing as "the rule of origin for coffee" without naming the agreement and the product.',
        },
      ],
    },
    {
      id: 'preferential-and-non-preferential',
      heading: 'Two regimes, different purposes',
      body: [
        {
          type: 'paragraph',
          text: 'Non-preferential rules establish origin for the general purposes of the tariff and trade policy: applying the ordinary rate, administering quotas, applying trade-remedy measures, marking, and compiling statistics. Preferential rules establish whether a good qualifies for the reduced duty available under a specific agreement or unilateral scheme.',
        },
        {
          type: 'paragraph',
          text: 'The multilateral framework contains an agreement on rules of origin, under which a work programme to harmonise non-preferential rules was undertaken. That harmonisation has not been completed, which means non-preferential origin continues to be determined under national rules that are not uniform across jurisdictions. Preferential rules were never intended to be uniform: they are negotiated instrument by instrument, and their content is part of what each agreement’s parties bargained over.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'One good, several origins, all correct',
          text: 'Because each agreement carries its own rules, an identical consignment can qualify as originating under one agreement, fail under another, and have a different non-preferential origin again. Nothing has gone wrong when this happens — the regimes are asking different questions and were designed separately.',
        },
      ],
    },
    {
      id: 'cumulation-and-tolerance',
      heading: 'Cumulation, tolerance, and transport',
      body: [
        {
          type: 'paragraph',
          text: 'Several devices soften the arithmetic of origin rules, and they are where a great deal of the practical value of an agreement sits.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Cumulation',
              description:
                'Provisions allowing materials or processing from a partner country to be treated as originating for the purposes of the rule. Arrangements vary in scope — some cover only the two parties, others extend across a group of countries, and some allow processing as well as materials to be counted.',
            },
            {
              term: 'Tolerance or de minimis',
              description:
                'A provision permitting a limited proportion of non-originating material that would otherwise fail the rule. It prevents a small input from disqualifying an otherwise originating good.',
            },
            {
              term: 'Direct transport or non-manipulation',
              description:
                'A condition that goods reach the destination without operations in third countries beyond those permitted. Routing through a hub is generally accommodated, subject to the goods remaining under control and undergoing nothing that would compromise the origin claim.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Cumulation is the device with the largest structural effect, because it determines whether a regional production chain can build an originating good collectively or whether each country must qualify alone. For agricultural processing chains that draw inputs from neighbours, whether and how an agreement permits cumulation can matter more than the headline rule.',
        },
      ],
    },
    {
      id: 'proof-and-verification',
      heading: 'Proof, verification, and the fungibility problem',
      body: [
        {
          type: 'paragraph',
          text: 'Because origin is a conclusion, it must be asserted and evidenced. The instrument varies by agreement: a certificate issued or endorsed by a designated authority, a statement made by the exporter in a prescribed form, or a declaration under a registration scheme in which exporters certify origin themselves. The trend across newer agreements has been toward exporter self-certification with registration, which shifts the burden from issuance at origin to verification afterwards.',
        },
        {
          type: 'paragraph',
          text: 'Verification is what makes that shift workable. An importing authority can question a claim after release and, where the agreement provides, ask the exporting country’s administration to verify it against the exporter’s records. A claim that cannot be substantiated exposes the importer to recovery of the duty foregone. The evidence therefore has to exist and to be kept — for a period, in a form, and by a party that the agreement and national law specify.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Fungible commodities are an origin problem by nature',
          text: 'Once grain or oil from several origins is commingled, no analysis of the mixture recovers its components’ origins. Whatever origin is claimed rests on accounting and record-keeping rather than on the material. Origin systems recognise this and provide mechanisms for fungible materials; which mechanism applies, and what records it demands, is a matter for the agreement and the authority.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To provide the criteria by which a good containing materials or processing from more than one country is attributed to one of them, so that tariff treatment, preferences, and trade-policy measures can be applied.',
  administeredBy:
    'The customs authority of the importing jurisdiction, applying national rules or the rules of the agreement under which a preference is claimed',
  governingBodies: [
    'World Trade Organization',
    'World Customs Organization',
    'National customs authorities',
    'The parties to each preferential agreement',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes the kinds of criteria origin rules use. It states no rule, threshold, tolerance, or product-specific requirement for any good, agreement, or jurisdiction.',
    'Rules are product-specific and agreement-specific: there is no general rule for a commodity, and a rule under one agreement says nothing about the rule under another.',
    'Whether a good originates anywhere is determined by the customs authority of the importing jurisdiction, applying the rules of the regime relied on to the facts of the consignment.',
    'A preferential claim remains subject to verification after import, and to recovery of duty where it cannot be substantiated. What evidence suffices and how long records must be kept are set by the agreement and national law.',
  ],
  partiesInvolved: [
    'Producer, whose processing and inputs determine whether a rule is met',
    'Exporter making or supporting the origin claim',
    'Importer claiming preferential treatment',
    'Issuing or certifying body, where the agreement uses one',
    'Customs authority of the importing jurisdiction',
    'Customs administration of the exporting country, on verification',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'customs-declaration' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'free-trade-zone' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  connections: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'soybeans' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The agreement on rules of origin, the distinction between preferential and non-preferential regimes, and the status of the harmonisation work programme',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Origin criteria used in customs practice — change of tariff classification, value-added, and specific process tests — and origin verification',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Publication of product-specific rules of origin and origin requirements by agreement and market',
    },
    {
      sourceId: 'unctad',
      citedFor:
        'Rules of origin under unilateral preference schemes and their effect on the use of preferences',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a set of concepts. Every operative rule is national (non-preferential) or agreement-specific (preferential), and the same good faces different rules in different instruments.',
  limitations: [
    'A description of the kinds of criteria used, not a statement of any rule and not an origin determination.',
    'No thresholds, tolerances, percentages, classification-change requirements, or retention periods are given: they are set agreement by agreement and jurisdiction by jurisdiction.',
    'Non-preferential rules are not harmonised internationally, so no general statement about them holds across jurisdictions.',
    'How fungible or commingled commodities are treated depends on the applicable mechanism and record-keeping regime, and cannot be generalised.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rules of Origin: How a Good Is Attributed to a Country',
    description:
      'How rules of origin work: wholly obtained goods and substantial transformation, the criteria used, cumulation and tolerance, and verification of claims.',
    keywords: [
      'rules of origin',
      'substantial transformation',
      'preferential origin',
      'cumulation',
      'origin verification',
    ],
  },
  structuredData: { article: true },
};
