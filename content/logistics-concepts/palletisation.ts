import type { LogisticsConceptContent } from '@/types/content';

export const palletisation: LogisticsConceptContent = {
  id: 'logistics-concept-palletisation',
  slug: 'palletisation',
  contentType: 'logistics-concept',
  title: 'Palletisation',
  alternativeNames: ['Unit load formation', 'Pallet loading'],
  category: 'Logistics concept',
  subcategory: 'Unitisation',
  logisticsClass: 'unitisation',
  summary:
    'Palletisation assembles many small packages into one unit that a machine can lift, so that a consignment is handled a pallet at a time rather than a carton at a time. It is the reason mechanised handling is possible at all, and its costs are paid in air, in timber, and in blocked airflow.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A pallet is a platform with an opening underneath for the forks of a lift truck. That is the entire invention, and it is difficult to overstate its consequence: it converts a heap of individual packages into a single object with a standard interface, and every mechanised handling system in the world is built around that interface. Without unitisation, the container would be far less useful, because someone would still have to move the cartons one by one at both ends.',
    },
    {
      type: 'paragraph',
      text: 'For agricultural goods the unit load does more than speed handling. It is the level at which a consignment is counted, tracked, inspected, and traced — a pallet is the natural granularity for a lot identity, a certification claim, or a recall. And for produce moving under refrigeration, the pallet is also a piece of the ventilation system, because how the cartons are stacked determines whether cold air can pass through the load or merely around it.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Unitisation — assembling packages into one machine-handled unit',
    },
    { label: 'Cargo form', value: 'Unitised' },
    {
      label: 'Enables',
      value:
        'Mechanised handling, and with it containerised and multimodal transport of packed goods',
    },
    {
      label: 'Standardised by',
      value:
        'ISO pallet standards, though several regional footprints remain in parallel use',
    },
    {
      label: 'Wooden pallets are regulated',
      value:
        'As wood packaging material under the IPPC standard, requiring treatment and marking',
    },
    {
      label: 'Costs paid in',
      value:
        'Cubic space, tare weight, timber, and — for produce — potential airflow obstruction',
    },
    {
      label: 'Traceability role',
      value:
        'The pallet is the usual granularity for a lot identity and its identifier',
    },
  ],
  sections: [
    {
      id: 'what-the-unit-load-buys',
      heading: 'What the unit load buys',
      body: [
        {
          type: 'paragraph',
          text: 'The gain is that handling stops scaling with the number of packages. A lift truck moves a pallet in the same time whether it carries a few large cartons or many small ones, so the labour cost per package collapses as the load is consolidated. This is the same logic that makes the container work, applied one level down, and the two compose: cartons into pallets, pallets into containers, containers onto ships. Each level has a standard interface and each level lets the level above ignore what is inside.',
        },
        {
          type: 'paragraph',
          text: 'The second gain is informational. A unit load is a countable, labelled thing that persists through the chain, which makes it the natural carrier of identity. A pallet label can carry the lot, the grower, the pack date, and the certification claim, and can be read at every transfer without opening anything. When a traceability system says it can follow a consignment, what it can usually follow is pallets.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Standardisation is partial, and that is a real cost',
          text: 'Unlike containers, pallets never fully converged on one size. Several regional footprints remain in wide use, and a load built for one is inefficient in equipment and vehicles built for another. Cross-region chains therefore either repalletise — handling every carton again, which is exactly what the unit load was meant to prevent — or accept lost space.',
        },
      ],
    },
    {
      id: 'what-it-costs',
      heading: 'What it costs',
      body: [
        {
          type: 'paragraph',
          text: 'A pallet occupies space and weighs something, and both are paid for on every leg. In a container or a trailer, the pallet’s own height is cubic capacity that carries no cargo, and where the pallet footprint does not tessellate with the vehicle’s internal width, the wasted space is worse than the pallet itself. In air freight, where charging is on the greater of actual and volumetric weight, this arithmetic bites hardest.',
        },
        {
          type: 'paragraph',
          text: 'The subtler cost is airflow. A refrigerated load is cooled by air passing through it, and a pallet stacked as a solid block presents a wall to that air. Cartons must have vents, the vents must align vertically through the stack, and the stacking pattern must not close them — which is in direct tension with the pattern that makes the load most stable. A load built for maximum stability and maximum cube can be a load the refrigeration cannot reach, and the equipment will hold its setpoint faithfully while the produce inside the pallet warms.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Interlocked or column-stacked is a real trade-off',
          text: 'Interlocking cartons between layers binds the load together but misaligns the vents, obstructing vertical airflow and transferring compression to carton walls that were not designed for it. Column stacking aligns vents and carries compression down the corners, and is less stable. Neither is correct in general — which is exactly why no pattern is recommended here.',
        },
      ],
    },
    {
      id: 'the-pallet-itself-is-regulated',
      heading: 'The pallet itself is regulated',
      body: [
        {
          type: 'paragraph',
          text: 'A wooden pallet is not neutral packaging; it is raw timber, and raw timber moving between countries is a recognised pathway for forest pests. Under the international phytosanitary standard for wood packaging material, wooden pallets and dunnage in international trade must be treated by an approved method and marked accordingly, and the marking is what a border inspector looks for. A pallet without a compliant mark can cause the consignment on top of it to be held, treated, or refused, regardless of the state of the goods.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Wood packaging material',
              description:
                'Pallets, dunnage, crating, and bracing made of raw wood. Regulated in its own right because of the pest pathway, independently of the cargo it carries.',
            },
            {
              term: 'Pallet pooling',
              description:
                'Renting standard pallets from a pool operator rather than owning them. Solves the return-logistics problem of an empty platform that is expensive to ship back and worthless where it lands.',
            },
            {
              term: 'Slip sheet',
              description:
                'A thin sheet handled by a push-pull attachment instead of a pallet. Removes the tare and height cost, at the price of needing that specific equipment at both ends.',
            },
            {
              term: 'Stretch wrap and strapping',
              description:
                'What holds the unit together. Necessary for stability, and a further consideration for ventilated loads since a fully wrapped pallet is a sealed one.',
            },
            {
              term: 'Pallet identifier',
              description:
                'The label carrying the unit’s identity through the chain. The mechanism by which a physical unit load and a data record stay attached to each other.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Alternative materials — plastic and pressed composites — sit outside the wood packaging regime, which is one of the reasons they are used despite generally costing more. The choice is not only about durability and hygiene; it is partly about not being subject to a phytosanitary requirement that can stop a consignment at a border.',
        },
      ],
    },
    {
      id: 'what-goes-wrong',
      heading: 'What goes wrong',
      body: [
        {
          type: 'list',
          items: [
            'Untreated or unmarked wooden pallets, exposing a sound consignment to border refusal or mandatory treatment',
            'Broken, damp, or contaminated pallets, which are a hygiene and contamination pathway into food cargo',
            'Airflow blocked by stacking pattern, overhang, or full stretch wrapping in a refrigerated load',
            'Load instability and collapse in transit, from poor pattern, inadequate wrapping, or a load built too tall for its base',
            'Carton crush in lower layers, worsened by interlocked patterns that load carton walls rather than corners',
            'Overhang beyond the pallet edge, which removes the support cartons rely on and invites damage at every transfer',
            'Footprint mismatch with vehicles or equipment at the far end, forcing repalletisation and rehandling',
            'Label loss or mismatch, which breaks the link between the physical unit and its traceability record',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No dimensions, weights, or patterns appear here',
          text: 'Pallet footprints, load heights, permitted weights, stacking patterns, and wrap specifications are properties of the standard in use, the equipment, the packaging, and the commodity. This page states none of them, and none should be inferred for any consignment.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Convert many individual packages into a single unit with a standard machine interface, so that handling cost stops scaling with package count, the consignment can move through mechanised and containerised chains without being rehandled, and lot identity has a physical carrier.',
  operationalLimitations: [
    'No pallet dimensions, footprints, load heights, or weight limits are given. Several regional standards are in parallel use and the applicable one depends on the trade and the equipment at both ends.',
    'No stacking patterns are recommended. The trade-off between load stability and vent alignment is resolved differently for different commodities and packaging, and no general answer exists.',
    'No wrap, strapping, or securing specifications are given. They depend on the load, the packaging, and the journey.',
    'Wood packaging treatment and marking requirements are set by the importing country under the applicable phytosanitary standard for the specific consignment, and are not stated here.',
    'Whether a pallet footprint is usable at a destination depends on that destination’s vehicles, racking, and equipment, which this page cannot assess.',
    'Compression tolerance of packaging is a property of the carton and the commodity, established by testing, and is not generalisable.',
  ],
  cargoForms: ['unitised', 'containerised', 'breakbulk'],
  applicableCommodityClasses: [
    'fruit',
    'vegetable',
    'nut',
    'beverage-crop',
    'spice',
    'pulse',
    'livestock-product',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'bananas' },
    { type: 'commodity', slug: 'fresh-blueberries' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'hen-eggs' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'firmness' },
    { type: 'quality-attribute', slug: 'respiration-rate' },
    { type: 'quality-attribute', slug: 'size-uniformity' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'palletisation' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'fibreboard-carton' },
    { type: 'post-harvest', slug: 'plastic-crate' },
    { type: 'post-harvest', slug: 'liner-and-wrap' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'cold-store-facility' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    {
      type: 'logistics-concept',
      slug: 'flexible-intermediate-bulk-containers',
    },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
    { type: 'logistics-concept', slug: 'road-haulage-of-agricultural-goods' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
    { type: 'supply-chain-risk', slug: 'cold-chain-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary regulation of wood packaging material, including wooden pallets in international trade',
    },
    {
      sourceId: 'iso',
      citedFor:
        'Pallet standards and the dimensional framework for unit loads in international trade',
    },
    {
      sourceId: 'gs1',
      citedFor:
        'Identification and labelling of logistic units for traceability through the supply chain',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Post-harvest packaging and handling of produce, and the role of unit loads in reducing damage',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, but pallet footprints and pooling arrangements are regional. A load built to one region’s standard is inefficient in another’s equipment, and cross-region chains frequently repalletise.',
  limitations: [
    'A reference description of the practice, not a packing specification, a stacking instruction, or a pallet-selection service.',
    'No dimensions, weights, load heights, stacking patterns, or wrap specifications are given — all depend on the standard in use, the packaging, and the commodity.',
    'Wood packaging requirements are set by the importing country for the specific consignment under the applicable phytosanitary standard.',
    'Several pallet standards coexist; this describes the general principle rather than any particular footprint or pooling system.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Palletisation: How the Unit Load Enables Mechanised Handling',
    description:
      'How palletisation works: what the unit load buys in handling and traceability, what it costs in cube and airflow, and why wooden pallets are regulated.',
    keywords: [
      'palletisation',
      'unit load',
      'pallet standards',
      'ISPM 15 pallets',
      'pallet stacking airflow',
    ],
  },
  structuredData: { article: true },
};
