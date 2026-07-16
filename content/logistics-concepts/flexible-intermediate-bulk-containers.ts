import type { LogisticsConceptContent } from '@/types/content';

export const flexibleIntermediateBulkContainers: LogisticsConceptContent = {
  id: 'logistics-concept-flexible-intermediate-bulk-containers',
  slug: 'flexible-intermediate-bulk-containers',
  contentType: 'logistics-concept',
  title: 'Flexible Intermediate Bulk Containers',
  alternativeNames: ['FIBCs', 'Bulk bags', 'Big bags', 'Tote bags'],
  category: 'Logistics concept',
  subcategory: 'Unitisation',
  logisticsClass: 'unitisation',
  summary:
    'A flexible intermediate bulk container is a large woven fabric bag with lifting loops, holding a quantity between a sack and a bulk consignment. It occupies a genuine gap in the trade — parcels too big to handle by hand and too small to justify a bulk chain — and it is a lifting device whose failure mode is a suspended load falling.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Between the sack a person can carry and the shipload a terminal handles, there is a large range of parcel sizes that neither serves well. Bagging a substantial consignment into hand-sized sacks means enormous labour and thousands of pieces to count; moving it in bulk means a terminal, a silo, and a minimum quantity that does not exist. The flexible intermediate bulk container fills that gap: a woven bag with loops at the corners, filled from a spout, lifted by a forklift or a crane, and discharged by opening the bottom.',
    },
    {
      type: 'paragraph',
      text: 'What makes it work is that it combines the flow handling of bulk with the unit handling of a package. The contents behave as a bulk material — poured in, poured out, never touched — while the bag itself behaves as a unit load, countable, stackable, and traceable to a lot. For seed, speciality grains, pulses, sugar, coffee, fertiliser, and any commodity moving in parcels that are substantial but not shiploads, this is often the natural answer.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Unitisation — bulk material handled as a discrete lifted unit',
    },
    { label: 'Cargo form', value: 'Unitised, containing a dry bulk material' },
    {
      label: 'Occupies',
      value:
        'The gap between hand-handled sacks and a full bulk handling chain',
    },
    {
      label: 'Filled and discharged',
      value:
        'By flow — through a top spout and a bottom outlet, so the contents are never handled',
    },
    {
      label: 'Critical rating',
      value:
        'Safe working load, with a design safety factor for the intended service — marked on the bag',
    },
    {
      label: 'Single or multiple trip',
      value:
        'A design property of the specific bag, not a judgement made at the point of reuse',
    },
    {
      label: 'Electrostatic types',
      value:
        'Classified by their electrostatic behaviour, which governs where each may be used',
    },
  ],
  sections: [
    {
      id: 'why-the-form-exists',
      heading: 'Why the form exists',
      body: [
        {
          type: 'paragraph',
          text: 'The economics are about parcel size and about infrastructure. A bulk chain has a high threshold: it needs intake, storage, conveying, and loading plant at both ends, and below a certain volume none of that is justified. Hand-sized sacks have no threshold at all but a punishing marginal cost, because every sack is a piece somebody lifts, counts, stacks, and eventually tears. The bulk bag has a low threshold and a low marginal cost, needing only a forklift, which almost everywhere has.',
        },
        {
          type: 'paragraph',
          text: 'It also preserves segregation in a way bulk cannot. Each bag is a closed parcel that holds one lot — one variety, one grower, one certification claim — and can be kept separate through the entire chain without any dedicated infrastructure. For seed, for identity-preserved and organic consignments, and for speciality grains where the whole value proposition is that this batch is distinct from that one, this matters more than the handling economics do. A bulk silo would blend exactly the distinction the buyer is paying for.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'It is also the container-friendly form',
          text: 'Bulk bags let a standard dry container carry a bulk commodity without liners, tipping gear, or a bulk terminal at either end. This puts modest parcels of bulk commodity into the container network, which is why so much speciality and identity-preserved agricultural trade moves this way.',
        },
      ],
    },
    {
      id: 'the-bag-is-a-lifting-device',
      heading: 'The bag is a lifting device',
      body: [
        {
          type: 'paragraph',
          text: 'This is the point that governs everything else about the form. A filled bulk bag is a heavy mass suspended from fabric loops, and people work around and beneath it. Its entire structure — the weave, the seams, the loops, and the way they are stitched into the body — is engineered to hold that mass with a margin, and it is rated with a safe working load and a design safety factor appropriate to its intended service. Those markings are the bag’s specification, and using a bag outside them is not a shortcut but a structural decision made without an engineer.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Safe working load',
              description:
                'The maximum load the bag is designed to carry, marked on it. A property of that bag’s construction — not a starting point for judgement.',
            },
            {
              term: 'Safety factor',
              description:
                'The ratio between the bag’s tested strength and its safe working load, differing according to whether the bag is designed for single or multiple trips.',
            },
            {
              term: 'Single-trip and multi-trip',
              description:
                'A design classification, decided when the bag is manufactured and reflected in its safety factor. Reusing a single-trip bag defeats the basis on which it was rated.',
            },
            {
              term: 'Lifting loops',
              description:
                'How the load is taken. Where the bag actually fails when it fails, and why loop condition is inspected rather than assumed.',
            },
            {
              term: 'Liner',
              description:
                'An inner layer for moisture or contamination barrier, or for product contact. A separate specification from the bag’s structure.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Suspended loads, and dust that can ignite',
          text: 'Two hazards define safe use and neither is described in operating detail here. A filled bag is a suspended load, and people must not be beneath it. And filling and discharging a bag moves a dry powder or granular material fast through fabric, which generates static — which is why FIBCs are classified by electrostatic type, and why the type must match the material and the atmosphere it is used in. Selection and use are matters for the applicable standards, the manufacturer’s specification, and the site’s own risk assessment.',
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What goes wrong',
      body: [
        {
          type: 'paragraph',
          text: 'The failures split into structural, product, and handling categories. Structural failure — a loop tearing out, a seam splitting, a bag bursting — is the dangerous one and is usually traceable to a bag used outside its rating, a bag damaged in earlier handling, a single-trip bag reused, or a bag degraded by ultraviolet exposure while sitting outdoors. Woven polypropylene loses strength in sunlight, and a bag stored in a yard is being weakened by a process nobody records.',
        },
        {
          type: 'list',
          items: [
            'Loop or seam failure, most often from overloading, prior damage, reuse of a single-trip bag, or UV degradation',
            'Ultraviolet degradation from outdoor storage, weakening the fabric invisibly and without any record',
            'Bag instability in the stack — a filled bag is a slumping, deformable mass, not a rigid box',
            'Moisture ingress through the fabric or the top closure, since a woven bag is not inherently a moisture barrier',
            'Condensation inside a lined bag when warm material is filled and then cooled',
            'Insect infestation, since a bulk bag is neither hermetic nor easily inspected once filled',
            'Electrostatic hazard when the bag type does not match the material and the atmosphere',
            'Contamination from a reused bag whose previous contents are unknown or incompatible with food use',
            'Discharge failures — a bottom outlet that will not open, or opens uncontrollably',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Reuse is a specification question, not a thrift question',
          text: 'Whether a bag may be refilled depends on its design classification, its condition, and what it previously held. A bag that carried a non-food material is not a bag that may later carry food. These are determinations made against the specific bag under the applicable standards and food-safety requirements — never by inspection alone and never by this page.',
        },
      ],
    },
    {
      id: 'in-the-chain',
      heading: 'Where it sits in the chain',
      body: [
        {
          type: 'paragraph',
          text: 'Bulk bags are usually a middle layer. Material is filled at a store or a processing plant, the bags are stuffed into a container or loaded onto a trailer, and at destination they are discharged into a hopper, a mixer, or a smaller packing line. The bag exists to carry the material across the part of the chain where neither bulk plant nor manual handling is available, and it is normally opened and destroyed or returned at the end of it.',
        },
        {
          type: 'paragraph',
          text: 'Against palletised sacks, the bulk bag wins on labour and loses on divisibility — a bag is an all-or-nothing parcel, and a receiver who needs to sell in small quantities must repack. Against bulk, it wins on segregation, infrastructure, and lot identity, and loses on cost per tonne. The choice is made on parcel size, on whether identity must be preserved, and on what equipment exists at the far end.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Carry a bulk material as a discrete, countable, lot-segregated unit that a forklift can move, filling the gap between hand-handled sacks and a full bulk handling chain, and bringing modest parcels of bulk commodity into container and road networks without dedicated terminal plant.',
  operationalLimitations: [
    'No capacities, safe working loads, dimensions, or fabric specifications are given. These are properties of a specific bag, marked on it by its manufacturer, and vary across the range.',
    'No safety factors are stated numerically. The applicable factor depends on the bag’s design classification and is set by the applicable standards, not by this page.',
    'No stacking heights or storage arrangements are given. A filled bag is a deformable mass and its stacking behaviour depends on its contents, its design, and its condition.',
    'No electrostatic type is recommended for any material or atmosphere. Type selection depends on the material, the environment, and the site’s risk assessment under the applicable standards.',
    'Whether a specific bag may be reused, and for what, depends on its design classification, its condition, and its previous contents — determinations made against that bag under the applicable food-safety requirements.',
    'Filling, lifting, and discharge procedures are matters for the manufacturer’s specification, the applicable standards, and the site’s own safety procedures. Nothing here is an operating instruction.',
  ],
  cargoForms: ['unitised', 'bulk-dry'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'sugar-crop',
    'beverage-crop',
    'nut',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'chickpeas' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'sesame-seed' },
    { type: 'commodity', slug: 'groundnuts' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'water-activity' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'bulk-bag-fibc' },
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'iso-9001-quality-management' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'fraud-and-adulteration' },
  ],
  sourceReferences: [
    {
      sourceId: 'iso',
      citedFor:
        'Standards for flexible intermediate bulk containers, including design classification, rating, and electrostatic type',
    },
    {
      sourceId: 'codex',
      citedFor:
        'General principles of food hygiene relevant to containers and packaging in contact with food',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest packaging and storage of grains and pulses, and loss in handling',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Bag standards, food-contact requirements, and the safety regime governing lifting operations are jurisdiction-specific and set by the applicable authority.',
  limitations: [
    'A reference description of the form and its role, not a selection guide, a specification, or an operating instruction.',
    'No capacities, safe working loads, safety factors, dimensions, or stacking heights are given — all are properties of a specific bag and its marking.',
    'Electrostatic type selection, filling, lifting, and discharge are governed by the applicable standards, the manufacturer’s specification, and the site’s risk assessment.',
    'Reuse and food-contact suitability are determinations made against a specific bag under the applicable requirements, not from any general description.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Flexible Intermediate Bulk Containers: How Bulk Bags Work',
    description:
      'What FIBCs are and why they exist: the gap between sacks and bulk chains, lot segregation, why the bag is a rated lifting device, and how bulk bags fail.',
    keywords: [
      'flexible intermediate bulk container',
      'FIBC',
      'bulk bag',
      'big bag',
      'safe working load',
    ],
  },
  structuredData: { article: true },
};
