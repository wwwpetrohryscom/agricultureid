import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const customsClearance: TradeConceptContent = {
  id: 'trade-concept-customs-clearance',
  slug: 'customs-clearance',
  contentType: 'trade-concept',
  title: 'Customs Clearance',
  alternativeNames: ['Clearance', 'Release', 'Border processing'],
  category: 'Trade concept',
  subcategory: 'Customs procedure',
  tradeConceptClass: 'customs-procedure',
  summary:
    'Customs clearance is the process by which a declared consignment is checked, assessed, and released to the procedure requested. For agricultural goods it is rarely a customs matter alone: plant-health, animal-health, and food-safety controls run alongside, and a consignment is not free to move until every authority with a say has said it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Clearance is what happens between a declaration being lodged and goods being released. The authority decides how much attention the consignment warrants, applies whatever checks that decision implies, resolves the charges, and lets the goods go — or does not. It is the operational face of everything else in the customs system: classification, valuation, and origin are abstractions until clearance makes them consequential.',
    },
    {
      type: 'paragraph',
      text: 'For agricultural consignments the word is misleading in an important way. Customs is one of several authorities at the border, and often not the binding one. A cargo of fruit or meat faces official controls under plant-health, animal-health, or food-safety regimes, administered by bodies with their own criteria, their own inspections, and their own power to refuse. A consignment can be perfectly in order for customs and still not enter.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Customs procedure — checking, assessing, and releasing',
    },
    {
      label: 'Trigger',
      value: 'A lodged declaration, against which the authority acts',
    },
    {
      label: 'Selectivity',
      value:
        'Administrations use risk management to decide which consignments are examined rather than checking all',
    },
    {
      label: 'Levels of check',
      value:
        'Automated processing, documentary check, physical examination, and sampling for analysis',
    },
    {
      label: 'Multi-agency',
      value:
        'For agricultural goods, plant-health, animal-health, and food-safety controls run alongside customs',
    },
    {
      label: 'Release is not final',
      value:
        'Post-clearance audit allows a declaration to be reviewed after the goods have gone',
    },
    {
      label: 'Outcome if refused',
      value:
        'The options — re-export, treatment, destruction — are set by the authority and the regime, not by the trader',
    },
  ],
  sections: [
    {
      id: 'the-process',
      heading: 'The process',
      body: [
        {
          type: 'paragraph',
          text: 'Clearance proceeds in stages, and most consignments do not experience most of them. The design goal of a modern administration is to concentrate attention where it is warranted and let everything else through, because examining everything is neither affordable nor effective.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Acceptance and validation',
              description:
                'The declaration is checked for completeness and internal coherence. Errors at this stage are usually mechanical and correctable.',
            },
            {
              term: 'Risk assessment and selectivity',
              description:
                'The administration decides what treatment the consignment gets, using risk criteria applied to the declaration and to what it knows about the trader, the route, the commodity, and the origin. Most consignments are released on the strength of this alone.',
            },
            {
              term: 'Documentary check',
              description:
                'The declaration and its supporting documents are examined by an officer. No goods are opened; the question is whether the paper hangs together and supports what is claimed.',
            },
            {
              term: 'Physical examination',
              description:
                'The goods themselves are inspected — opened, counted, weighed, or scanned — to verify that they are what was declared.',
            },
            {
              term: 'Sampling and analysis',
              description:
                'Material is taken for laboratory testing, typically where classification turns on composition or where a health control requires a result. This is the stage that takes time measured in days rather than hours.',
            },
            {
              term: 'Assessment and release',
              description:
                'Charges are determined and dealt with, and the goods are released to the declared procedure. Release may be conditional or against security where a determination is outstanding.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Selectivity is why clearance times are bimodal',
          text: 'Most consignments clear quickly because they are never selected for anything. A minority are selected and take considerably longer. An average clearance time therefore describes very few actual consignments, and a trader’s experience depends almost entirely on which side of the selection they fall.',
        },
      ],
    },
    {
      id: 'the-other-authorities',
      heading: 'The authorities that are not customs',
      body: [
        {
          type: 'paragraph',
          text: 'This is the part that makes agricultural clearance its own subject. Plant products, animal products, and food are subject to official controls designed to protect plant health, animal health, and human health, and those controls are administered by specialised authorities under their own legal regimes. Their questions are not customs questions and their answers are not customs answers.',
        },
        {
          type: 'list',
          items: [
            'Documentary control — whether the required certificates and attestations are present, valid, and consistent with the consignment',
            'Identity control — whether the consignment physically corresponds to what its certificates describe',
            'Physical control — inspection of the goods themselves against the health requirements, which may include sampling and laboratory analysis',
            'Designated entry points — many regimes require that consignments of certain goods present only at facilities equipped and approved to control them',
            'Prior notification — some regimes require advance notice of an arriving consignment so that control can be arranged',
          ],
        },
        {
          type: 'paragraph',
          text: 'The sequence matters. Health controls are frequently a precondition for customs release rather than a parallel track, so a consignment held for a plant-health decision is not moving regardless of its customs position. Single-window arrangements exist to reduce the duplication of data across these agencies, but they coordinate submission — they do not merge the decisions.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Customs release is not admissibility',
          text: 'A consignment cleared by customs may still be refused by a health authority, and a consignment satisfying every health requirement may still be held on a customs question. The two are separate determinations by separate authorities, and both are needed.',
        },
      ],
    },
    {
      id: 'when-it-goes-wrong',
      heading: 'When clearance does not happen',
      body: [
        {
          type: 'paragraph',
          text: 'A consignment that is not released is somewhere, and that somewhere costs money and, for perishables, consumes the goods. Detention pending a documentary query, a laboratory result, or an inspection slot accrues storage and, for containerised cargo, demurrage. A refrigerated container held at a port is drawing power and running down a shelf life that was priced on the assumption of a normal transit.',
        },
        {
          type: 'paragraph',
          text: 'Where a consignment is refused, what happens next is determined by the authority and the regime, not by the trader’s preference. The available outcomes commonly include re-export to the origin or elsewhere, treatment to bring the consignment into compliance where that is possible, or destruction. Which is available depends on why it was refused, what the goods are, and what the jurisdiction provides.',
        },
        {
          type: 'paragraph',
          text: 'The party who bears the loss is a contract question, answered by the delivery term and the sale contract rather than by the border. This is where the two halves of a trade meet: a customs or health outcome allocates a cost, and the commercial documents decide who pays it.',
        },
      ],
    },
    {
      id: 'after-release',
      heading: 'Release is not the end',
      body: [
        {
          type: 'paragraph',
          text: 'Modern administrations deliberately moved a great deal of checking away from the border, because holding cargo is expensive for everyone and a container is a poor place to conduct an audit. The corollary is that a declaration can be reviewed long after the goods have been sold and consumed.',
        },
        {
          type: 'paragraph',
          text: 'Post-clearance audit examines the trader’s records against the declarations made, and can result in reassessment of duty, recovery, and whatever consequences the jurisdiction attaches to the errors found. Preferential origin claims are a common subject, because they are cheap to assert at the border and expensive to substantiate afterwards. Authorised-operator arrangements sit in the same logic: a trader whose systems and compliance have been assessed in advance can be trusted with lighter treatment at the frontier.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Record-keeping is part of clearance',
          text: 'Because review happens after release, the obligation to hold the evidence behind a declaration continues after the goods have gone. How long, in what form, and for which particulars is set by national law and differs by jurisdiction.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To describe how a declared consignment is checked, assessed, and released — and to make explicit that for agricultural goods release depends on several authorities, not customs alone.',
  administeredBy:
    'The customs authority of the jurisdiction, together with the plant-health, animal-health, and food-safety authorities with jurisdiction over the goods',
  governingBodies: [
    'World Customs Organization',
    'World Trade Organization',
    'National customs and official-control authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes the general shape of the process. It states no clearance time, procedure, risk criterion, control frequency, fee, or record-retention period for any jurisdiction.',
    'Whether a consignment is released, detained, or refused is determined by the competent authorities for that consignment under the law in force, and no reference description bears on the outcome.',
    'Customs release and health admissibility are separate determinations by separate authorities. Satisfying one does not satisfy the other.',
    'Where a consignment is refused, the options available are set by the authority and the applicable regime; who bears the resulting loss is a matter for the sale contract and its delivery term.',
  ],
  partiesInvolved: [
    'Declarant and importer of record',
    'Customs broker or representative',
    'Customs authority',
    'Plant-health, animal-health, and food-safety authorities',
    'Terminal or warehouse operator holding the goods',
    'Carrier, where detention affects equipment and demurrage',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'certificate-of-origin' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'customs-valuation' },
    { type: 'trade-concept', slug: 'ddp-delivery-term' },
    { type: 'trade-concept', slug: 'documentary-collection' },
    { type: 'trade-concept', slug: 'free-trade-zone' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'rules-of-origin' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Risk management and selectivity in clearance, post-clearance audit, and authorised-operator arrangements',
    },
    {
      sourceId: 'wto',
      citedFor:
        'Trade-facilitation disciplines on release, and the SPS framework under which official health controls are applied at import',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary import controls, including documentary, identity, and physical checks on consignments',
    },
    {
      sourceId: 'woah',
      citedFor:
        'Animal-health requirements applied to consignments of animal products at import',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a shape. Procedures, control frequencies, designated entry points, notification requirements, refusal options, and audit and retention rules are national and differ in every jurisdiction.',
  limitations: [
    'A description of the general process, not a procedural guide and not a statement of any jurisdiction’s clearance regime.',
    'No clearance times, inspection rates, fees, retention periods, or thresholds are given: they are national, vary by commodity and risk, and are published by the authorities concerned.',
    'The stages described do not all apply to any given consignment; most are never selected for examination.',
    'Refusal outcomes and the allocation of resulting costs depend on the regime and on the sale contract respectively, and are not generalisable.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Customs Clearance: How a Consignment Is Checked and Released',
    description:
      'How customs clearance works: risk-based selectivity, documentary and physical checks, and why plant-health and food-safety controls run alongside customs.',
    keywords: [
      'customs clearance',
      'border control',
      'risk management',
      'physical examination',
      'post-clearance audit',
    ],
  },
  structuredData: { article: true },
};
