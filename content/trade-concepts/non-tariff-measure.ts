import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const nonTariffMeasure: TradeConceptContent = {
  id: 'trade-concept-non-tariff-measure',
  slug: 'non-tariff-measure',
  contentType: 'trade-concept',
  title: 'Non-Tariff Measure',
  alternativeNames: [
    'NTM',
    'Non-tariff barrier',
    'NTB',
    'Behind-the-border measure',
  ],
  category: 'Trade concept',
  subcategory: 'Market access',
  tradeConceptClass: 'market-access',
  summary:
    'A non-tariff measure is any policy other than a tariff that can affect trade in goods — sanitary requirements, technical regulations, licensing, quotas, and much else. The term is deliberately neutral: most such measures exist for legitimate public purposes, and calling one a barrier is a conclusion about its effect, not a description of what it is.',
  introduction: [
    {
      type: 'paragraph',
      text: 'For agricultural trade, tariffs are increasingly not the binding constraint. A zero duty is worth nothing if a consignment cannot meet the importing country’s residue limits, if its origin is not approved to export that product, if the establishment is not listed, or if a permit is unobtainable. The measures that decide these things are not tariffs, and they are collectively the dominant influence on whether farm goods actually move.',
    },
    {
      type: 'paragraph',
      text: 'The category is enormous by design. "Non-tariff measure" is defined by what it is not, which makes it a residual holding everything from a food-safety limit set on toxicological evidence to a licensing requirement whose purpose is protection. That breadth is why the vocabulary has to be handled carefully — the neutral term and the accusatory one are not synonyms, and using them interchangeably is where the discussion usually goes wrong.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Market access — policy measures other than tariffs',
    },
    {
      label: 'Definition',
      value:
        'Policy measures other than ordinary customs tariffs that can have an economic effect on trade in goods',
    },
    {
      label: 'Neutral term',
      value:
        'A measure is not a barrier by virtue of being non-tariff; most exist for legitimate public purposes',
    },
    {
      label: 'Classified',
      value:
        'An international classification organises measures into chapters by type, including technical and non-technical categories',
    },
    {
      label: 'Dominant in agriculture',
      value:
        'Sanitary, phytosanitary, and technical requirements are the measures that most often determine whether farm goods move',
    },
    {
      label: 'Disciplined by',
      value:
        'The SPS and TBT frameworks, which constrain how measures may be adopted and applied rather than prohibiting them',
    },
    {
      label: 'Hard to quantify',
      value:
        'Effects are estimated as ad valorem equivalents, an inference with substantial methodological uncertainty',
    },
  ],
  sections: [
    {
      id: 'ntm-versus-ntb',
      heading: 'Measure or barrier: a distinction worth keeping',
      body: [
        {
          type: 'paragraph',
          text: 'The terminology carries a judgment, and it is worth being explicit about which one is being made.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Non-tariff measure',
              description:
                'A neutral, descriptive category: a policy other than a tariff that can affect trade. It carries no implication about purpose or legitimacy. A maximum residue limit is an NTM.',
            },
            {
              term: 'Non-tariff barrier',
              description:
                'An evaluative claim: that a measure restricts trade beyond what its stated purpose requires, or that it is protection wearing a public-policy justification. This is a conclusion requiring evidence.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction matters because the same measure can be both or neither depending on facts that a classification cannot capture. A country setting a residue limit on scientific evidence is regulating; a country setting one to exclude a competitor is protecting. The measure looks identical in a database. Determining which it is requires examining the evidence behind it, and the multilateral system provides forums for exactly that argument.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'AgricultureID does not classify measures as barriers',
          text: 'Whether a given measure is a legitimate regulation or a disguised restriction is a determination made in dispute settlement and in specific-trade-concerns processes, on evidence, against legal tests. A reference page describing the category is not a forum for that judgment, and nothing here characterises any country’s measures.',
        },
      ],
    },
    {
      id: 'the-landscape',
      heading: 'The landscape of measures',
      body: [
        {
          type: 'paragraph',
          text: 'An international classification organises non-tariff measures into chapters by type, distinguishing broadly between technical measures — those specifying product characteristics or the processes behind them — and non-technical ones. The categories most relevant to agriculture recur across markets.',
        },
        {
          type: 'list',
          items: [
            'Sanitary and phytosanitary measures — requirements protecting human, animal, and plant life or health: residue limits, contaminant limits, pest freedom, disease status, treatments, establishment approval',
            'Technical barriers to trade — technical regulations, standards, and conformity assessment: labelling, composition, packaging, quality specifications, and the procedures for demonstrating compliance',
            'Pre-shipment inspection and other formalities — requirements applied before or at export rather than at import',
            'Contingent trade-protective measures — anti-dumping, countervailing, and safeguard actions arising from investigations',
            'Quantity-control measures — non-automatic licensing, quotas, and prohibitions',
            'Price-control measures — arrangements affecting the price of imports',
            'Export-related measures — restrictions, taxes, and licensing applied by the exporting country',
          ],
        },
        {
          type: 'paragraph',
          text: 'The conformity assessment element deserves separate mention because it is where cost often concentrates. A requirement may be perfectly reasonable in substance and still be onerous in demonstration: the question is not only what a product must satisfy but who must certify it, using which laboratory, recognised by whom, and at whose expense. A measure and the procedure for proving compliance with it are different things, and either can be the actual obstacle.',
        },
      ],
    },
    {
      id: 'disciplines',
      heading: 'How they are disciplined',
      body: [
        {
          type: 'paragraph',
          text: 'The multilateral system does not prohibit non-tariff measures — countries have every right to protect health and set technical requirements. It disciplines how they may be adopted and applied, which is a different and more workable ambition.',
        },
        {
          type: 'paragraph',
          text: 'The SPS framework covers measures protecting human, animal, and plant health, and orients them around scientific justification, encouraging measures based on international standards while permitting higher levels of protection where these are justified. The TBT framework covers technical regulations, standards, and conformity assessment, and turns on avoiding unnecessary obstacles and on non-discrimination. Both carry transparency obligations — notification of proposed measures, enquiry points — so that trading partners can see what is coming and comment before it binds.',
        },
        {
          type: 'paragraph',
          text: 'Members also raise specific trade concerns about each other’s measures in the relevant committees, which functions as a forum short of formal dispute settlement. This is where most disagreements about agricultural measures actually happen, and the fact that a measure has been raised there is a matter of record rather than a finding against it.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The frameworks constrain the reasoning, not the outcome',
          text: 'The disciplines are largely about how a measure is arrived at, evidenced, and applied — not about what level of protection a country may choose. A country may set a higher level of protection than an international standard implies; the framework asks it to be able to justify doing so.',
        },
      ],
    },
    {
      id: 'measuring-them',
      heading: 'Why their effect is hard to measure',
      body: [
        {
          type: 'paragraph',
          text: 'A tariff has a number. A non-tariff measure does not, and the desire to compare the two has produced the practice of estimating an ad valorem equivalent — the tariff that would have the same trade effect as the measure. This is a useful device and an inference, not an observation.',
        },
        {
          type: 'list',
          items: [
            'The estimate depends on the model, the specification, and the counterfactual assumed',
            'Measures interact, so attributing an effect to one of several applying simultaneously is not straightforward',
            'A measure’s cost differs by exporter — a large firm with laboratories and a smallholder cooperative do not face the same burden',
            'A measure that blocks trade entirely leaves no trade data from which to estimate its effect',
            'The counting of measures is not a measure of restrictiveness: many measures may be less burdensome than one',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point is the trap. Databases record the incidence of measures, and a count is easy to compute and easy to misread. A country with many notified measures may be transparent and well-regulated rather than restrictive, and a country with few may simply not notify. Incidence is not intensity, and neither is legitimacy.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To name, in neutral terms, the policy measures other than tariffs that affect trade in goods — so that their variety, their legitimate purposes, and their trade effects can be discussed without the label prejudging the question.',
  administeredBy:
    'The regulatory authorities of each jurisdiction, according to the subject matter of the measure',
  governingBodies: [
    'World Trade Organization',
    'United Nations Conference on Trade and Development',
    'National regulatory authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes a category. It identifies no measure applied by any country, states no requirement, and characterises no jurisdiction’s regulation as restrictive, protectionist, or a barrier.',
    'A non-tariff measure is not a barrier by definition. Whether a measure is a legitimate regulation or a disguised restriction is determined on evidence in the appropriate forums, not by classification and not here.',
    'What measures apply to a consignment is established from the importing jurisdiction’s published requirements for that commodity and origin, which change over time.',
    'Ad valorem equivalents and measure counts are estimates and incidence indicators respectively. Neither is an observation of restrictiveness, and no figures are given here.',
  ],
  partiesInvolved: [
    'Regulatory authorities adopting and applying measures',
    'Exporters and producers required to comply',
    'Importers facing the requirements at entry',
    'Conformity assessment bodies and laboratories',
    'Trading partners raising concerns in multilateral forums',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'export-licence' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'wto-tbt-agreement' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'preferential-trade-agreement' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  sourceReferences: [
    {
      sourceId: 'unctad',
      citedFor:
        'The international classification of non-tariff measures, the neutrality of the term, and the methodological difficulty of estimating trade effects',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS and TBT frameworks disciplining how measures are adopted and applied, transparency and notification obligations, and specific trade concerns',
    },
    {
      sourceId: 'codex',
      citedFor:
        'International food standards to which sanitary measures are commonly oriented',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Publication of market requirements and non-tariff measure information faced by exporters',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a category. Every measure is specific to a jurisdiction, a product, and often an origin, and is published by the authority that adopted it.',
  limitations: [
    'A description of a category, not an inventory of measures and not an assessment of any country’s regulation.',
    'No measures, requirements, limits, ad valorem equivalents, or incidence counts are given anywhere on this page.',
    'The classification chapters are summarised by type; the operative classification is maintained by the organisation that publishes it.',
    'Whether a measure is a legitimate regulation or a disguised restriction is a determination for the appropriate forums on evidence, and is never asserted here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Non-Tariff Measure: Measure Versus Barrier',
    description:
      'What non-tariff measures are and why the term is neutral: measure versus barrier, the landscape from SPS to licensing, and why their effects resist measurement.',
    keywords: [
      'non-tariff measure',
      'NTM',
      'non-tariff barrier',
      'SPS measures',
      'technical barriers to trade',
    ],
  },
  structuredData: { article: true },
};
