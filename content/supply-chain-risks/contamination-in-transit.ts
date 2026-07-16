import type { SupplyChainRiskContent } from '@/types/content';
import { RISK_NOT_SCORED_NOTE } from '@/types/trade';

export const contaminationInTransit: SupplyChainRiskContent = {
  id: 'supply-chain-risk-contamination-in-transit',
  slug: 'contamination-in-transit',
  contentType: 'supply-chain-risk',
  title: 'Contamination in Transit',
  alternativeNames: ['Cargo contamination', 'Cross-contamination in carriage'],
  category: 'Supply-chain risk',
  subcategory: 'Quality and integrity',
  riskClass: 'quality-integrity',
  summary:
    "A consignment acquires something it did not have when it was loaded — moisture, an odour, a previous cargo's residue, an infestation, a foreign body. It left compliant and arrives otherwise, and the conveyance is the source rather than the crop.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Most quality problems in agricultural trade are inherited: the consignment arrives with a defect it carried from origin. Contamination in transit is the exception, and that is what makes it distinct. The cargo was sound at loading, and it acquired something on the way. The source is the carriage itself — the hold, the container, the packaging, the previous cargo, the neighbouring cargo, or the conditions inside the unit — and the crop is the victim rather than the cause.',
    },
    {
      type: 'paragraph',
      text: 'This inversion matters for a practical reason. All the assurance built at origin — the growing programme, the storage management, the pre-shipment inspection, the certificate — describes the consignment at a moment before the exposure happened. A pre-shipment certificate cannot certify a contamination that did not yet exist, so the entire quality-assurance apparatus of a chain can be functioning perfectly and be silent about the thing that ruins the cargo.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Quality and integrity — acquired contamination' },
    {
      label: 'Arises at',
      value:
        'Loading, carriage, and discharge — the conveyance rather than the crop',
    },
    {
      label: 'Core mechanism',
      value:
        'Cargo acquires a contaminant from the unit, a previous cargo, a neighbouring cargo, or transit conditions',
    },
    {
      label: 'Why origin assurance misses it',
      value:
        'Pre-shipment evidence describes the consignment before the exposure occurred',
    },
    {
      label: 'Distinctive vulnerabilities',
      value:
        'Bulk cargo touches the hold directly; food commodities absorb odours and moisture readily',
    },
    {
      label: 'Attribution problem',
      value:
        'Found at discharge, caused earlier — the evidence is in a unit that has since moved on',
    },
    {
      label: 'Not scored here',
      value:
        'Described as a mechanism; no likelihood, severity, or score is assigned',
    },
  ],
  sections: [
    {
      id: 'routes',
      heading: 'How a contaminant gets in',
      body: [
        {
          type: 'paragraph',
          text: 'The routes are few and well understood, which is precisely why this risk rewards attention: the mechanism is not mysterious, and almost every route runs through a decision someone made before loading.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Previous cargo',
              description:
                'Residues of what the hold or container carried last. Bulk holds are the acute case because grain touches the steel directly, with no packaging between it and whatever was there before — which is why hold cleanliness inspection before loading is a distinct, formalised step rather than a courtesy.',
            },
            {
              term: 'The unit itself',
              description:
                'Container linings, flooring treatments, prior repairs, taints in the box, or damage admitting water. A container is a used industrial asset with a history the shipper generally cannot see.',
            },
            {
              term: 'Odour and vapour transfer',
              description:
                'Many food commodities readily take up odours. A cargo need not touch a contaminant to be tainted by it; sharing an atmosphere is sufficient, which makes stowage decisions and neighbouring cargo a quality variable.',
            },
            {
              term: 'Moisture',
              description:
                'Condensation from temperature change during a voyage, leaks, or moisture migrating within a bulk stow. Water is the enabling condition for mould growth and caking, so a moisture event is frequently the start of a contaminant problem rather than the whole of it.',
            },
            {
              term: 'Infestation',
              description:
                'Insects present in the unit, in residues, or in neighbouring cargo, entering a consignment that left origin clean.',
            },
            {
              term: 'Foreign bodies',
              description:
                'Material introduced during loading, handling, or discharge — from equipment, packaging, dunnage, or the facility.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A clean hold is a decision, not a default',
          text: 'Whether a hold or container is fit for a food cargo is established by inspection before loading, against the specific cargo it will carry and knowledge of what it carried before. The exposure is created at that moment, and it is one of the few points in this mechanism where the outcome is genuinely controllable.',
        },
      ],
    },
    {
      id: 'the-voyage',
      heading: 'Why the voyage itself changes the cargo',
      body: [
        {
          type: 'paragraph',
          text: 'A sealed unit crossing climate zones is not a static environment. Temperature changes, and with it the capacity of the air inside to hold water. Moisture that was harmlessly distributed in a cargo at loading can move, condense on cooler surfaces, and return to the cargo as free water in a specific place — typically the top of a stow or the underside of a roof, and typically not where anyone would look.',
        },
        {
          type: 'paragraph',
          text: 'This is why a cargo can be loaded within specification and arrive with a localised problem that its loading records cannot explain, and why moisture at loading matters more than the average figure suggests. A cargo at the upper end of an acceptable range has less margin against redistribution than one comfortably inside it, so two consignments that were both compliant at loading are not equally exposed. The average conceals the risk; the distribution and the voyage conditions carry it.',
        },
        {
          type: 'paragraph',
          text: "Ventilation decisions interact with all of this, and they are made by the carrier during the voyage against the conditions encountered. They are, from the cargo interest's side, largely invisible until a claim.",
        },
      ],
    },
    {
      id: 'attribution',
      heading: 'The attribution problem',
      body: [
        {
          type: 'paragraph',
          text: 'Contamination is found at discharge and caused earlier, and by the time it is found the container has been unstuffed and returned to circulation, or the hold has been washed and reloaded. The physical evidence of the cause is frequently gone before anyone knows it was needed, and what remains is a damaged cargo and a set of inferences.',
        },
        {
          type: 'paragraph',
          text: 'What survives, and therefore what decides the outcome, is the record: hold and container inspection reports before loading, the previous-cargo history, the stowage plan and what was stowed adjacent, temperature and ventilation records, moisture at loading, and the condition observations made at each handover. Where those records exist, attribution is usually tractable. Where they do not, the party holding the damaged cargo is left asserting that it was sound at loading, against a carrier asserting that it was not — and the dispute turns on who has evidence rather than on what happened.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The record is created before the event, or not at all',
          text: 'Every piece of evidence that resolves a transit contamination claim is generated at or before loading, when nobody yet knows there will be a claim. That is the structural difficulty of this risk: its evidence must be collected speculatively.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'What it sets in motion',
      body: [
        {
          type: 'paragraph',
          text: 'The consignment is downgraded, rejected commercially, or — where the contaminant engages a food-safety or plant-health requirement — becomes a regulatory matter in which the competent authority determines what may happen to it, not the buyer. A taint that is merely a quality defect and a residue that breaches a limit are different consequences arising from the same physical event, and which one applies depends on what was acquired.',
        },
        {
          type: 'paragraph',
          text: 'Where contamination is discovered at discharge, cargo already delivered from the same unit or voyage may be recalled or held, which is where transit contamination becomes a traceability problem. The chain has to answer what else was affected, and the answer depends on records that were designed for a different purpose.',
        },
      ],
    },
  ],
  riskMechanism:
    "A consignment loaded in sound condition acquires a contaminant during carriage, so the source is the conveyance rather than the crop and origin assurance is structurally silent about it — a pre-shipment certificate describes the consignment before the exposure occurred. Contaminants enter by a small number of routes: residues of a previous cargo, acutely in bulk holds where grain contacts the steel directly with no packaging intervening; the unit itself, a used industrial asset whose linings, treatments, repairs, taints, and damage the shipper generally cannot see; odour and vapour transfer, since many food commodities take up odours from a shared atmosphere without ever contacting the source, making stowage and neighbouring cargo a quality variable; moisture, through condensation, leaks, or migration within a stow; infestation from the unit, its residues, or adjacent cargo; and foreign bodies introduced during loading, handling, or discharge. The voyage is itself an active mechanism: a sealed unit crossing climate zones experiences temperature change that alters the air's capacity to hold water, so moisture harmlessly distributed at loading migrates, condenses on cooler surfaces, and returns to the cargo as free water in localised places — typically the top of a stow — which is why a cargo compliant on average at loading can arrive with a problem its records cannot explain, and why margin against redistribution, not the average figure, carries the exposure. Attribution is the defining difficulty: the contamination is found at discharge and caused earlier, and the container has been returned to circulation or the hold washed and reloaded before anyone knows evidence was needed. What decides the outcome is therefore the record created speculatively before the event — hold and container inspection before loading, previous-cargo history, stowage plan and adjacent cargo, ventilation and temperature records, moisture at loading, and condition observations at each handover. It propagates as downgrade or commercial rejection, as a regulatory matter where the contaminant engages a food-safety or plant-health requirement and the authority rather than the buyer determines disposal, and as a traceability problem where other cargo from the same unit or voyage must be identified and held.",
  chainStages: [
    'assembly',
    'inland-transport',
    'international-transport',
    'border',
    'destination-market',
  ],
  observableIndicators: [
    'Hold or container inspection before loading identifying residues, odours, damage, or previous-cargo traces',
    'Previous-cargo history of a hold or container unavailable, incomplete, or showing an incompatible commodity',
    'Container seals broken, missing, or inconsistent with the documented seal number',
    'Water staining, rust, damaged linings, or light visible through a container on inspection',
    'Condensation, wet cargo, or caking observed at the top of a stow or on unit surfaces at discharge',
    'Moisture at loading recorded near the upper end of the acceptable range, reducing margin against migration',
    'Off-odour or taint noticed on opening a unit at discharge',
    'Incompatible or odorous cargo stowed adjacent, or a stowage plan placing a food commodity near a taint source',
    'Live insects, frass, or webbing found at discharge in a consignment that was clean at loading',
    'Foreign material found in a consignment consistent with handling equipment, dunnage, or facility debris',
    'Ventilation logs showing a regime inconsistent with the conditions encountered on the voyage',
    'Surveyors appointed at discharge, or condition disputes raised at the point of unstuffing',
  ],
  assessmentLimitations: [
    RISK_NOT_SCORED_NOTE,
    'This page gives no moisture limits, cleanliness criteria, cargo-compatibility tables, ventilation regimes, previous-cargo restrictions, or condition tolerances. These are set by the carriage terms, the cargo specification, the applicable carriage practice, and — where food safety or plant health is engaged — by the competent authority.',
    'No cleaning products, fumigants, treatments, or doses are given or implied. Preparation of a hold or unit is a matter for the carrier, the terminal, and the applicable approved provider.',
    "Assessing exposure for a real consignment requires that chain's own data: the commodity and its sensitivity to moisture, odour, and taint; the unit or hold and its documented previous cargoes; the pre-loading inspection record; the stowage plan and adjacent cargo; the moisture and condition at loading; the voyage and the climate zones crossed; the ventilation and temperature records; and the carriage terms allocating responsibility.",
    'Attribution depends on evidence generated at or before loading, speculatively, when no claim is anticipated. Where that record does not exist, the physical cause is generally not recoverable after discharge, and no assessment can substitute for it.',
    'Whether an acquired contaminant is a quality matter or a regulatory one depends on what was acquired and on the requirements of the destination, which this page does not state.',
    'AgricultureID is not a surveyor, laboratory, carrier, or insurer, and this page supports no claim, defence, or condition assessment.',
  ],
  affectedCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'beverage-crop',
    'spice',
    'nut',
    'fruit',
    'vegetable',
    'fibre',
    'sugar-crop',
  ],
  affectedCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'milled-rice' },
  ],
  affectedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'bulk-loading-and-discharge' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    {
      type: 'logistics-concept',
      slug: 'flexible-intermediate-bulk-containers',
    },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'temperature-monitoring-in-transit' },
  ],
  affectedTradeConcepts: [
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'incoterms-rules' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
  ],
  addressedByStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'iso-22000-food-safety-management' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
  ],
  relatedRisks: [
    { type: 'supply-chain-risk', slug: 'biosecurity-incursion' },
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'residue-limit-exceedance-rejection' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'imo',
      citedFor:
        'Maritime carriage framework for cargo stowage, hold condition, and the carriage of solid bulk cargoes',
    },
    {
      sourceId: 'codex',
      citedFor:
        'Food-hygiene framework covering protection of food from contamination during transport and handling',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Grain handling, storage, moisture behaviour, and infestation context for cargo in transit',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary framework for contamination of consignments and of wood packaging and containers',
    },
    {
      sourceId: 'unctad',
      citedFor: 'Seaborne cargo handling and containerised transport context',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. The mechanism is generic to any carriage, but carriage terms, inspection practice, cargo-compatibility rules, and regulatory treatment of acquired contaminants are route-, carrier-, and jurisdiction-specific.',
  limitations: [
    'A reference description of a mechanism, not a carriage specification, a survey, a condition assessment, or advice on any consignment or claim.',
    'No moisture limits, cleanliness criteria, compatibility tables, ventilation regimes, or tolerances are given: they are commodity-, carriage-, and contract-specific.',
    'No cleaning, treatment, or fumigation products, doses, or protocols are given.',
    'Liability for cargo acquired in transit depends on the carriage contract, the applicable carriage regime, and the evidence held, none of which this page interprets.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Contamination in Transit: Routes and Attribution',
    description:
      'How sound cargo acquires contamination during carriage: previous-cargo residues, taint transfer, moisture migration, and why attribution is difficult.',
    keywords: [
      'contamination in transit',
      'cargo contamination',
      'hold cleanliness',
      'moisture migration',
      'cargo taint',
      'supply chain risk',
    ],
  },
  structuredData: { article: true },
};
