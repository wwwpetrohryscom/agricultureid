import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const countryOfOriginAndProvenance: TradeConceptContent = {
  id: 'trade-concept-country-of-origin-and-provenance',
  slug: 'country-of-origin-and-provenance',
  contentType: 'trade-concept',
  title: 'Country of Origin and Provenance',
  alternativeNames: ['Origin', 'Provenance', 'Country of origin'],
  category: 'Trade concept',
  subcategory: 'Trade measurement',
  tradeConceptClass: 'trade-measurement',
  summary:
    '"Origin" is not one idea but several that share a word: the country a good is legally treated as originating in, the place it was physically grown, the country it was consigned from, and the story told to consumers about where it comes from. They are determined by different rules, can point to different countries for the same consignment, and are not interchangeable.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Few words in trade carry as much ambiguity as origin. A container of roasted coffee might be described as originating in the country where the beans grew, the country where they were roasted, the country from which the container was shipped, or the country named on the retail label — and all four descriptions can be simultaneously correct, because each answers a different question under a different set of rules.',
    },
    {
      type: 'paragraph',
      text: 'This matters because the answers have different consequences. Customs origin decides tariff treatment and whether a preference applies. Physical provenance decides which plant-health or animal-health requirements are in play. Consignment country decides routing controls. Consumer-facing origin labelling is governed by food law, which has its own definitions and its own enforcement. Conflating them is one of the more reliable ways to reach a wrong conclusion about a consignment.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Trade measurement — attribution of a good to a place',
    },
    {
      label: 'Not one concept',
      value:
        'Customs origin, physical provenance, country of consignment, and labelled origin are distinct',
    },
    {
      label: 'Customs origin',
      value:
        'Determined by rules of origin under the law of the importing jurisdiction',
    },
    {
      label: 'Preferential vs non-preferential',
      value:
        'Two distinct customs-origin regimes, applying different rules to the same good',
    },
    {
      label: 'Plant and animal health',
      value:
        'Turn on where the goods were grown, produced, or processed rather than on customs origin',
    },
    {
      label: 'Labelling',
      value:
        'Consumer origin declarations are governed by food law, separately from customs rules',
    },
    {
      label: 'Determined by',
      value:
        'The competent authority of the importing jurisdiction, per consignment',
    },
  ],
  sections: [
    {
      id: 'four-different-questions',
      heading: 'Four different questions, one word',
      body: [
        {
          type: 'paragraph',
          text: 'Separating the senses is the whole of the discipline here. Each has its own decision-maker, its own rulebook, and its own consequence.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Customs origin',
              description:
                'The country a good is treated as originating in for tariff purposes, determined by applying rules of origin. It is a legal conclusion, not an observation, and a good can have a customs origin different from where any of its material grew.',
            },
            {
              term: 'Physical provenance',
              description:
                'Where the good was actually grown, harvested, raised, or produced. This is a factual matter about the material itself and is what sanitary and phytosanitary requirements are built around.',
            },
            {
              term: 'Country of consignment',
              description:
                'The country from which the goods were despatched to the importing country. It describes the journey, not the good, and is recorded separately in trade statistics for that reason.',
            },
            {
              term: 'Labelled or marketed origin',
              description:
                'What the packaging or marketing tells a purchaser about where the product comes from. Governed by food-labelling law and, where they apply, by geographical-indication regimes — neither of which uses the customs definition.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The four can disagree, legitimately',
          text: 'A single consignment can have one customs origin, a different physical provenance, a third country of consignment, and a label that names a fourth thing entirely — without anything being wrong. Each answer is correct within its own regime. Errors arise when an answer is carried across into a regime that did not ask that question.',
        },
      ],
    },
    {
      id: 'preferential-and-non-preferential',
      heading: 'Two customs-origin regimes',
      body: [
        {
          type: 'paragraph',
          text: 'Even within customs origin there is a split. Non-preferential origin is used for the general purposes of the tariff and of trade policy — applying most-favoured-nation rates, administering quotas, applying trade-defence measures, marking requirements, and compiling statistics. Preferential origin is used to decide whether a good qualifies for the reduced or zero duty available under a specific trade agreement or unilateral scheme.',
        },
        {
          type: 'paragraph',
          text: 'They are not the same test, and they do not always give the same answer. Preferential rules are negotiated agreement by agreement: each arrangement carries its own product-specific rules, its own view of what counts as sufficient processing, and its own provisions about materials from third countries. A good that has one non-preferential origin may qualify as originating under one agreement and fail under another, from the identical facts.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Preference is claimed, evidenced, and verified',
          text: 'Preferential origin generally has to be claimed at import and supported by evidence in the form the agreement specifies, and it can be verified afterwards. A claim that cannot be substantiated on verification exposes the importer to recovery of the duty foregone and to whatever consequences the jurisdiction attaches. What evidence suffices, and for how long records must be kept, is set by the agreement and the national law.',
        },
      ],
    },
    {
      id: 'agricultural-difficulty',
      heading: 'Why agricultural goods are difficult',
      body: [
        {
          type: 'paragraph',
          text: 'Wholly obtained goods — a crop grown and harvested in one country, an animal born and raised there — are the easy case, and origin rules generally treat them as originating there without further analysis. Much of agricultural trade is not that case.',
        },
        {
          type: 'list',
          items: [
            'Blending: bulk commodities from several origins are routinely commingled in silos, tanks, and vessels, after which the physical material has no single provenance',
            'Processing: grain milled, oilseed crushed, coffee roasted, or fruit juiced in a third country raises the question of whether the processing was enough to confer origin there',
            'Multi-stage production: an animal born in one country, raised in a second, and slaughtered in a third has a genuinely composite history',
            'Re-export and transit: goods that pass through a hub may be consigned from a country that has nothing to do with where they grew',
            'Packing: repacking or relabelling in a third country changes what a purchaser sees without changing the material',
          ],
        },
        {
          type: 'paragraph',
          text: 'The blending case deserves particular attention because it is so common and so counter-intuitive. Once cargoes of different origins are physically mixed, no test applied to the resulting material can recover the origins of its components. Whatever origin is attributed to the mixture is attributed by rule and by record-keeping, not by inspection of the goods. This is a general feature of fungible bulk commodities; how any particular jurisdiction or agreement handles it is a matter for that jurisdiction or agreement.',
        },
      ],
    },
    {
      id: 'evidence-and-attestation',
      heading: 'Evidence and attestation',
      body: [
        {
          type: 'paragraph',
          text: 'Because origin is a conclusion rather than an observable property, it travels with a consignment as an assertion supported by documents. Depending on the regime, this may be a certificate issued or endorsed by a designated body, a statement made by the exporter in a prescribed form, or a declaration on the customs entry. Which instrument is required, who may issue it, and what legal weight it carries are set by the importing jurisdiction and by any agreement being relied on.',
        },
        {
          type: 'paragraph',
          text: 'The instrument is evidence, not proof. Customs authorities generally retain the ability to question an origin claim, to seek verification through the exporting country’s administration where an agreement provides for it, and to reassess. An origin document therefore supports a determination; it does not make one.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To distinguish the senses in which a good can be said to come from a place — customs origin, physical provenance, country of consignment, and labelled origin — so that each is used for the question it actually answers.',
  administeredBy:
    'Customs authorities for customs origin; plant- and animal-health authorities for provenance-based controls; food-law authorities for labelling',
  governingBodies: [
    'World Trade Organization',
    'World Customs Organization',
    'National customs authorities',
    'National food-law and plant-health authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page distinguishes senses of the word "origin". It states no rule of origin for any good, agreement, or jurisdiction, and cannot be used to determine the origin of anything.',
    'Whether processing in a third country confers origin depends on the applicable product-specific rule under the relevant agreement or national law, and differs between agreements for the same good.',
    'Preferential origin is determined against the specific agreement claimed, by the authority of the importing jurisdiction, and remains subject to verification after import.',
    'Origin labelling rules are food-law requirements distinct from customs origin; they are set and enforced by the applicable food authority and are not described here.',
  ],
  partiesInvolved: [
    'Exporter or producer making an origin statement',
    'Importer claiming a tariff treatment based on origin',
    'Body designated to issue or endorse origin evidence',
    'Customs authority of the importing jurisdiction',
    'Customs administration of the exporting country, where verification is requested',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'harmonized-system-classification' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
    { type: 'trade-concept', slug: 'trade-flow-direction' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  connections: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'cocoa-beans' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The distinction between preferential and non-preferential origin regimes and the purposes for which origin is used in trade policy',
    },
    {
      sourceId: 'wco',
      citedFor:
        'Origin as a customs determination and the role of origin evidence and verification at the border',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Plant-health requirements framed around where a consignment was grown and produced rather than customs origin',
    },
    {
      sourceId: 'un-comtrade',
      citedFor:
        'Separate recording of country of origin and country of consignment in reported trade statistics',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a conceptual distinction. Every operative rule — non-preferential origin, each agreement’s preferential rules, labelling law, and health controls — is jurisdiction- or agreement-specific.',
  limitations: [
    'A description of how the senses of origin differ, not a statement of any rule of origin and not an origin determination.',
    'No product-specific rule, processing threshold, value threshold, or tolerance is given: these are set agreement by agreement and jurisdiction by jurisdiction.',
    'Origin labelling and geographical-indication regimes are mentioned only to distinguish them; they are governed by food law and are not described here.',
    'How commingled bulk commodities are treated for origin purposes depends on the applicable rules and record-keeping regime, and is not generalisable.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Country of Origin and Provenance: Four Meanings of One Word',
    description:
      'Why customs origin, physical provenance, country of consignment, and labelled origin are different things, and how origin is evidenced for agricultural goods.',
    keywords: [
      'country of origin',
      'provenance',
      'preferential origin',
      'country of consignment',
      'origin of agricultural goods',
    ],
  },
  structuredData: { article: true },
};
