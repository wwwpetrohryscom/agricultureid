import type { LogisticsConceptContent } from '@/types/content';

export const fumigationInTransit: LogisticsConceptContent = {
  id: 'logistics-concept-fumigation-in-transit',
  slug: 'fumigation-in-transit',
  contentType: 'logistics-concept',
  title: 'Fumigation in Transit',
  alternativeNames: [
    'In-transit fumigation',
    'Fumigation under gas in transit',
  ],
  category: 'Logistics concept',
  subcategory: 'Chain integrity',
  logisticsClass: 'chain-integrity',
  summary:
    'Fumigation in transit is the practice of applying a fumigant treatment to a consignment that then continues to act while the consignment travels, using voyage time rather than adding to it. It is a licensed pest-control activity carried out under national regulation and label law, and this page describes only the practice and its regulation.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Stored agricultural commodities carry insects, and importing countries regulate what may cross their borders. Where a phytosanitary requirement or a contract calls for a consignment to be treated, that treatment has to happen somewhere in the chain — and a treatment applied at a terminal means the consignment sits still while it acts. Fumigation in transit is the practice of instead applying the treatment to a consignment that is already moving, so that the time the treatment requires overlaps with time the cargo was going to spend travelling anyway.',
    },
    {
      type: 'paragraph',
      text: 'The attraction is straightforward: for a long voyage, treatment time is free time. The reason it is nonetheless a heavily regulated and closely controlled practice is equally straightforward. A fumigant is a toxic gas, deliberately released into a space, on a vessel where people live and work, and it must remain effective and contained for a defined period and then be gone — safely, verifiably, and before anyone enters. Every element of that is regulated, and none of it is described in operational terms here.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value:
        'Chain integrity — a phytosanitary or pest-control treatment acting during carriage',
    },
    { label: 'Cargo form', value: 'Bulk dry, containerised, breakbulk' },
    {
      label: 'Why it is done in transit',
      value:
        'Treatment time overlaps with voyage time instead of adding dwell at a terminal',
    },
    {
      label: 'Regulatory character',
      value:
        'A licensed activity — application is restricted to certified personnel under national regulation',
    },
    {
      label: 'Governed by',
      value:
        'Product label law, national pesticide and plant-health regulation, and the phytosanitary requirements of the importing country',
    },
    {
      label: 'International frameworks',
      value:
        'IPPC standards for phytosanitary treatments; IMO recommendations for safety aboard ships',
    },
    {
      label: 'Leaves a residue question',
      value:
        'Treated food commodities remain subject to the importing country’s residue limits',
    },
  ],
  sections: [
    {
      id: 'why-the-practice-exists',
      heading: 'Why the practice exists',
      body: [
        {
          type: 'paragraph',
          text: 'Two separate demands converge on it. The first is phytosanitary: a national plant protection organisation may require that consignments of a given commodity from a given origin be treated before entry, because the commodity is a known pathway for a pest that the importing country does not have or actively controls. The second is commercial: a buyer or a contract may require treatment to protect the cargo’s own condition, since an infestation developing during a long voyage consumes the commodity and downgrades it.',
        },
        {
          type: 'paragraph',
          text: 'Either demand can in principle be satisfied at a facility before loading. The reason in-transit treatment is used instead is time and cost. Holding a cargo at a terminal to be treated occupies storage, delays the ship, and adds handling; applying the treatment to a loaded consignment that is about to spend a long time at sea uses a period that was already committed. On a long ocean voyage this can amount to the treatment being effectively free of schedule cost, which is a strong incentive and explains the practice’s persistence.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'It is a treatment, not a preservative',
          text: 'Fumigation addresses the organisms present when it is applied. It does not confer lasting protection, and a treated consignment that is subsequently exposed can be re-infested. This is why treatment sits alongside hygiene, storage condition, and cargo preparation rather than substituting for them — the cleanest chains are the ones that need it least.',
        },
      ],
    },
    {
      id: 'what-governs-it',
      heading: 'What governs it',
      body: [
        {
          type: 'paragraph',
          text: 'Fumigant application is a licensed activity. In essentially every jurisdiction, the products used are restricted, the people who apply them must hold a specific certification, and what may lawfully be done with a product is determined by its approved label in the country of use. The label is not advisory literature — it is the legal instrument that defines authorised use, and departing from it is an offence rather than a technical deviation. This is the reason a reference description of this subject can go no further than saying so.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Licensed applicator',
              description:
                'The certified person or firm permitted to apply the treatment. Who may do this, and on what basis, is set by national regulation and is not a matter of competence alone.',
            },
            {
              term: 'Label law',
              description:
                'The legal force of an approved product label in the jurisdiction of use. It defines what is authorised, and it differs by country for the same product.',
            },
            {
              term: 'Phytosanitary treatment requirement',
              description:
                'An importing country’s requirement that a consignment be treated before entry, set by its national plant protection organisation against the specific commodity and origin.',
            },
            {
              term: 'Treatment certification',
              description:
                'The documentary evidence that a required treatment was carried out, which travels with the consignment and is what a border authority examines.',
            },
            {
              term: 'Gas-free certification',
              description:
                'The verification, before any person enters a treated space, that it is safe to do so. Issued by a competent party under the applicable regime.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Internationally, the IPPC framework establishes how phytosanitary treatments are evaluated and adopted, and how consignments are certified — which is why a treatment recognised by one country’s authority is not automatically accepted by another’s. Separately, the maritime framework addresses the safety of these operations aboard ships, where the space being treated adjoins spaces people occupy. And because most fumigated agricultural cargo is food, treated consignments remain subject to the residue limits the importing country applies.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No products, doses, or methods appear on this page',
          text: 'This page names no fumigant, states no dose or concentration, gives no exposure period, and describes no application method or equipment. Those are matters for the approved label in the jurisdiction of use, the licensed applicator, and the competent authority — and publishing them as general information would be both unsafe and, in most jurisdictions, at odds with how these products are lawfully controlled.',
        },
      ],
    },
    {
      id: 'why-it-is-hard',
      heading: 'Why the practice is difficult',
      body: [
        {
          type: 'paragraph',
          text: 'The difficulty is that three requirements must hold simultaneously in an environment built for none of them. The treatment must reach the whole cargo, which in a deep bulk stow or a tightly packed container is a genuine physical problem. It must be contained for its full period, which depends on the space being sealed — and ships’ holds and containers are not laboratory vessels. And it must then be removed completely and verifiably, before anyone opens the space, on a vessel where the people at risk are the crew who live aboard.',
        },
        {
          type: 'list',
          items: [
            'Uneven distribution through a deep or tightly packed stow, so that part of the cargo is inadequately exposed',
            'Loss of containment through an imperfectly sealed space, ending the treatment early and releasing gas where it is not wanted',
            'Crew and personnel exposure, which is the reason the maritime safety framework addresses this practice specifically',
            'Entry into a space that has not been verified gas-free — a hazard that gives no warning',
            'Residues in the treated commodity, which remain subject to the importing country’s limits regardless of why the treatment was applied',
            'Insect resistance, where populations exposed repeatedly and inadequately become progressively harder to control',
            'Treatment certification that does not satisfy the importing authority, so that a treated consignment is still refused at the border',
            'Environmental release, with some fumigants restricted or being phased out under international agreements and national regulation',
          ],
        },
        {
          type: 'paragraph',
          text: 'Resistance deserves particular emphasis, because it is the failure that compounds. A treatment that reaches part of a population at less than a lethal exposure selects for the individuals that survive it, and a chain that treats routinely and imperfectly is running a selection programme against its own future ability to control the pest. This is why treatment efficacy is a regulated and monitored question rather than a matter of whether the gas was released.',
        },
      ],
    },
    {
      id: 'alternatives-and-direction',
      heading: 'Alternatives and direction of travel',
      body: [
        {
          type: 'paragraph',
          text: 'The regulatory direction across many jurisdictions has been toward reducing reliance on chemical fumigation — driven by environmental restrictions on particular products, by residue concerns in food, by worker safety, and by resistance. Non-chemical approaches to the same objective exist, including hermetic and modified-atmosphere storage that deprives insects of oxygen, and physical treatments; their availability, acceptance, and efficacy depend entirely on the commodity, the pest, and whether the importing authority recognises them.',
        },
        {
          type: 'paragraph',
          text: 'The most durable alternative, though, is upstream. Infestation in transit begins with what was loaded — with the cleanliness of the store, the condition and moisture of the commodity, the state of the hold or container, and how long the cargo sat before it moved. Chains that manage those well need treatment less often and treat smaller problems when they do. Fumigation is the response to a pest population that already exists, and it is the most expensive point in the chain at which to address one.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'This page is a description, not guidance',
          text: 'Nothing here is an instruction, a recommendation, or a basis for planning a treatment. Whether a consignment requires treatment, what treatment is permitted, who may apply it, and what must be certified are determined by the importing country’s plant protection organisation, the applicable pesticide regulation, the approved label in the jurisdiction of use, and the licensed applicator engaged for the specific consignment.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Satisfy a phytosanitary or contractual treatment requirement using time the consignment was going to spend in carriage anyway, rather than holding it at a facility while a treatment is applied and takes effect.',
  operationalLimitations: [
    'This page names no fumigant product, and states no dose, concentration, exposure period, application method, or equipment. Those are matters for the approved label in the jurisdiction of use and the licensed applicator, and are deliberately absent here.',
    'Fumigant application is a licensed activity. Who may apply a treatment, with what product, and under what conditions is determined by national regulation and label law, which differ by country for the same product.',
    'Whether a consignment requires treatment at all is determined by the importing country’s national plant protection organisation against that commodity and origin — not by the mode, the route, or this description.',
    'Whether a treatment will be accepted by the importing authority is a matter for that authority. A treatment recognised in one jurisdiction is not automatically recognised in another.',
    'Residue limits applying to a treated food commodity are set by the importing country and are not stated here.',
    'Safety of these operations aboard ships and in terminals, including containment, ventilation, and gas-free verification before entry, is governed by the applicable safety regime, the competent authority, and the parties’ own procedures. Nothing here is an instruction for any of it.',
    'Efficacy against a given pest in a given stow depends on the commodity, the packing, the space, and the pest population, and is not generalisable.',
  ],
  cargoForms: ['bulk-dry', 'containerised', 'breakbulk'],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse', 'nut'],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'chickpeas' },
    { type: 'commodity', slug: 'lentils' },
    { type: 'commodity', slug: 'groundnuts' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'germination-capacity' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'customs-clearance' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'bulk-sea-freight' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'controlled-atmosphere-transport' },
    { type: 'logistics-concept', slug: 'grain-terminal' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'residue-limit-exceedance-rejection' },
    { type: 'supply-chain-risk', slug: 'biosecurity-incursion' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'International standards for phytosanitary measures, including the framework under which phytosanitary treatments are evaluated, adopted, and certified',
    },
    {
      sourceId: 'imo',
      citedFor:
        'Maritime framework addressing the safety of pesticide and fumigant use aboard ships carrying cargo',
    },
    {
      sourceId: 'codex',
      citedFor:
        'Maximum residue limits applying to food commodities, including those that have been treated',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Stored-product pest management in grain chains, resistance development, and non-chemical alternatives',
    },
    {
      sourceId: 'usda-aphis',
      citedFor:
        'National plant protection treatment and certification requirements for imported consignments',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Permitted products, licensing of applicators, accepted treatments, and residue limits are set nationally and differ substantially between jurisdictions — including between the country of application and the country of entry.',
  limitations: [
    'A reference description of the practice and its regulation only. It is not guidance, not an instruction, and not a basis for planning or carrying out any treatment.',
    'No product names, doses, concentrations, exposure periods, application methods, or equipment are given anywhere on this page, by design.',
    'Fumigant application is a licensed activity governed by label law and national regulation; what is lawful differs by jurisdiction and is determined by the competent authority.',
    'Treatment requirements, accepted treatments, certification, and residue limits are set by the importing country for the specific commodity and origin, and are not stated here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fumigation in Transit: The Practice and How It Is Regulated',
    description:
      'What fumigation in transit is and why it is used: the demands behind it, the licensing and label law governing it, and the move away from the practice.',
    keywords: [
      'fumigation in transit',
      'in-transit fumigation',
      'phytosanitary treatment',
      'licensed applicator',
      'stored product pests',
    ],
  },
  structuredData: { article: true },
};
