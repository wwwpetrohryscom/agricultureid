import type { LogisticsConceptContent } from '@/types/content';

export const containerStuffing: LogisticsConceptContent = {
  id: 'logistics-concept-container-stuffing',
  slug: 'container-stuffing',
  contentType: 'logistics-concept',
  title: 'Container Stuffing',
  alternativeNames: ['Container packing', 'Container loading', 'Vanning'],
  category: 'Logistics concept',
  subcategory: 'Handling',
  logisticsClass: 'handling',
  summary:
    'Container stuffing is the operation of packing cargo into a container and closing the doors. It is brief, unglamorous, usually unsupervised, and it determines more about arrival condition than the entire voyage that follows — because after it, nobody looks inside again.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Stuffing is the last moment at which anyone sees the cargo. Once the doors are closed and sealed, the consignment enters a sequence of handling systems that treat it as an opaque steel box: cranes lift it, ships stack it, trucks carry it, and none of them know or care what is inside. Whatever condition the cargo was in, and however it was secured, is what will be there when the doors open — days or weeks later, on another continent, in front of a buyer.',
    },
    {
      type: 'paragraph',
      text: 'This asymmetry is why stuffing carries a disproportionate share of the outcome. It is a short operation performed at a packhouse or a depot, often by people who will never learn what happened to the box, and every decision made in that half hour — how the load is secured, whether the container was fit, whether moisture came in with the cargo, how the weight sits — is effectively irreversible. Nothing downstream can inspect it and nothing downstream can fix it.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Handling — packing cargo into an intermodal container',
    },
    {
      label: 'Cargo form',
      value:
        'Containerised; goods may be palletised, bagged, cartoned, or loose in a liner',
    },
    {
      label: 'Why it matters',
      value:
        'The last point at which the cargo is seen; everything after it is opaque',
    },
    {
      label: 'Shipper duty',
      value:
        'Verified gross mass must be declared before the packed box may be loaded, under SOLAS',
    },
    {
      label: 'Securing governed by',
      value:
        'The IMO/ILO/UNECE Code of Practice for Packing of Cargo Transport Units',
    },
    {
      label: 'Wood inside is regulated',
      value:
        'Pallets, dunnage, and bracing fall under the phytosanitary regime for wood packaging',
    },
    {
      label: 'Closed with',
      value: 'A seal — an integrity record linking the box to the documents',
    },
  ],
  sections: [
    {
      id: 'before-anything-is-loaded',
      heading: 'Before anything is loaded',
      body: [
        {
          type: 'paragraph',
          text: 'The first decision is whether the container is fit for the cargo at all, and it is made by inspecting an empty box. A container is a used asset that has carried unknown things; it may have residues, odours, a contaminated floor, holes admitting light, damaged seals, or damp. For a food cargo, the previous contents and the condition of the interior are a food-safety matter, and a box that fails this check is a box that must be rejected — which is inconvenient, because the truck is waiting and the packhouse has a schedule.',
        },
        {
          type: 'list',
          items: [
            'Structural soundness — no holes, no light visible from inside with the doors closed, roof and walls intact',
            'Door seals and gaskets intact, since a compromised seal admits water for the whole voyage',
            'Floor condition and cleanliness, including absence of residues, stains, and odour from previous cargo',
            'Dryness — a damp container starts the voyage with moisture already inside it',
            'Absence of pests and pest evidence, since the box itself can be the infestation source',
            'Correct container type for the cargo, which is the point at which a reefer, a ventilated box, or a dry box is chosen',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A damp box is a decided outcome',
          text: 'Moisture in a container at stuffing — in the box, in the packaging, or in the cargo — has nowhere to go. It will condense somewhere when the box changes climate zone, and the only question is on what. Loading hygroscopic cargo into a wet container is not a risk taken; it is a result chosen.',
        },
      ],
    },
    {
      id: 'the-packing-itself',
      heading: 'The packing itself',
      body: [
        {
          type: 'paragraph',
          text: 'A container is stowed to three simultaneous objectives that pull against each other. The load must be secured so it cannot move, because a box is dropped, tilted, accelerated, and rolled in ways road transport never manages. The weight must be distributed so the box is safe to lift and legal to carry on a road. And, for a great deal of agricultural cargo, air must be able to move through the load — which means deliberately not filling every space.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Securing and void filling',
              description:
                'Preventing movement in transit. Voids let a load build momentum and arrive as a collapsed heap against the doors — which is also why opening a shifted container is a genuine hazard.',
            },
            {
              term: 'Weight distribution',
              description:
                'How mass sits along and across the box. Eccentric loading is a lifting hazard at the terminal and an axle-load problem on the road, entirely independently of the total mass being legal.',
            },
            {
              term: 'Airflow',
              description:
                'For refrigerated and ventilated cargo, the path air must take. A load packed tight to the walls and over the floor channels defeats the equipment while looking like good stowage.',
            },
            {
              term: 'Dunnage and liners',
              description:
                'Material protecting cargo from the box and from itself — including liner bags that let a dry container carry a bulk commodity, and desiccants intended to manage moisture in the enclosed space.',
            },
            {
              term: 'Seal',
              description:
                'Applied at closing, its number recorded on the documents. Evidence that the doors have not been opened since — not a lock, and not a guarantee of what went in.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The tension between securing and ventilation is real and is resolved differently for different cargoes. A load of bagged coffee wants to be tight and dry with room for air to circulate; a load of machinery wants to be immovable and does not care about air; a reefer load wants a specific geometry that serves the airflow first. Applying the instincts of one to the other is a common and expensive error.',
        },
      ],
    },
    {
      id: 'duties-that-attach',
      heading: 'Duties that attach at stuffing',
      body: [
        {
          type: 'paragraph',
          text: 'Several legal obligations crystallise at this operation, all of them falling on the shipper. The verified gross mass of the packed container must be determined and declared before the box may be loaded aboard a ship — a requirement introduced because misdeclared container weights are a genuine cause of stack collapses and vessel casualties. Packing and securing are addressed by an international code of practice developed jointly by the maritime, labour, and inland transport bodies, reflecting that the box will be handled by all three.',
        },
        {
          type: 'paragraph',
          text: 'Wood inside the container is separately regulated. Pallets, dunnage, bracing, and blocking are wood packaging material under the international phytosanitary standard, and must be treated and marked accordingly. A consignment can be held, treated at the shipper’s cost, or refused at the border on the state of its timber while the cargo it was protecting is entirely sound — an outcome that is exclusively decided at stuffing.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'The packing list is a claim about a sealed box',
          text: 'Everything a buyer, a bank, a carrier, and a border authority believes about the contents rests on documents written by the party that packed it. This is why the packing operation, the seal number, and the documentation are one system rather than three, and why a discrepancy between them is treated as seriously as damage.',
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
            'Warm or damp cargo packed in, guaranteeing condensation later in the voyage',
            'A container accepted that should have been rejected — residues, odour, holes, or damaged seals',
            'Inadequate securing, producing shift, collapse, and a hazardous door opening at destination',
            'Voids left unfilled, allowing the load to build momentum',
            'Eccentric weight distribution, which is a lifting and road-safety problem rather than a cargo one',
            'Airflow blocked in a reefer or ventilated load, so the equipment reports success while the cargo warms',
            'Untreated or unmarked wood dunnage, exposing a sound cargo to border refusal',
            'Misdeclared gross mass, a shipper offence and a stack-safety hazard',
            'Seal and documentation mismatch, which turns into a customs and integrity problem rather than a paperwork one',
          ],
        },
      ],
    },
  ],
  logisticsPurpose:
    'Pack a consignment into a container so that it survives handling it will never be inspected during, arrives in the condition it was despatched in, and is accurately declared to the parties who must carry, clear, and pay for it.',
  operationalLimitations: [
    'No stowage patterns, securing specifications, lashing capacities, or dunnage arrangements are given. These depend on the cargo, the packaging, the container, and the applicable code of practice for the specific consignment.',
    'No weights, payloads, or loading limits are given. They are properties of the specific container, the road jurisdiction, and the applicable regulations.',
    'No desiccant quantities, liner specifications, or ventilation settings are given. They are commodity- and route-specific and no general value exists.',
    'This page cannot tell a reader whether a specific container is fit for a specific cargo. That is a judgement made against the box in front of the packer, on the day.',
    'Verified gross mass, packing, and securing duties fall on the shipper for the specific consignment under the applicable regulations, and are not discharged by any general description.',
    'Wood packaging treatment and marking requirements are set by the importing country’s phytosanitary regime for the specific consignment.',
  ],
  cargoForms: ['containerised', 'unitised', 'bulk-dry'],
  applicableCommodityClasses: [
    'cereal-grain',
    'pulse',
    'nut',
    'beverage-crop',
    'spice',
    'fruit',
    'vegetable',
    'fibre',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'cocoa-beans' },
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'cashew-nuts' },
    { type: 'commodity', slug: 'black-pepper-corns' },
    { type: 'commodity', slug: 'milled-rice' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'water-activity' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'mechanical-damage' },
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'foreign-material' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'palletisation' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'liner-and-wrap' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'precooling' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'gs1-traceability-standards' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'fca-delivery-term' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'container-shipping' },
    {
      type: 'logistics-concept',
      slug: 'flexible-intermediate-bulk-containers',
    },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'contamination-in-transit' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'traceability-failure' },
  ],
  sourceReferences: [
    {
      sourceId: 'imo',
      citedFor:
        'Verified gross mass requirement under SOLAS, and the Code of Practice for Packing of Cargo Transport Units',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary regulation of wood packaging material used as pallets, dunnage, and bracing',
    },
    {
      sourceId: 'iso',
      citedFor:
        'Freight container standards defining the units cargo is packed into',
    },
    {
      sourceId: 'codex',
      citedFor:
        'General principles of food hygiene relevant to the fitness of transport units carrying food',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Container condition, depot standards, and packing practice differ substantially by origin, and the applicable phytosanitary and customs requirements are set by the destination.',
  limitations: [
    'A reference description of the operation, not a packing instruction, a securing specification, or a stowage service.',
    'No stowage patterns, securing specifications, weights, desiccant quantities, or ventilation settings are given — all are cargo-, container-, and route-specific.',
    'Shipper duties including verified gross mass, packing, and securing apply to the specific consignment under the applicable regulations.',
    'Fitness of a particular container for a particular cargo is a judgement made against that box; this page describes the general principle only.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Container Stuffing: The Last Time Anyone Sees the Cargo',
    description:
      'How container stuffing works and why it decides arrival condition: checking the box, securing versus airflow, verified gross mass, and what goes wrong.',
    keywords: [
      'container stuffing',
      'container packing',
      'cargo securing',
      'verified gross mass',
      'container loading',
    ],
  },
  structuredData: { article: true },
};
