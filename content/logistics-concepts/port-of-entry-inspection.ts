import type { LogisticsConceptContent } from '@/types/content';

export const portOfEntryInspection: LogisticsConceptContent = {
  id: 'logistics-concept-port-of-entry-inspection',
  slug: 'port-of-entry-inspection',
  contentType: 'logistics-concept',
  title: 'Port of Entry Inspection',
  alternativeNames: [
    'Border inspection',
    'Import inspection',
    'Border control',
  ],
  category: 'Logistics concept',
  subcategory: 'Inspection',
  logisticsClass: 'inspection',
  summary:
    'Port of entry inspection is the destination country’s check on an arriving consignment before it may enter the market. It is where a shipment’s documents, its identity, and its physical condition are tested against requirements set by the importing state — and the only place in the chain where a sound cargo can be refused outright.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Everything upstream in an agricultural export chain is a private arrangement between commercial parties. At the border, that stops. The importing country asserts a sovereign interest — in the health of its plants, its animals, and its people, and in the revenue owed — and a consignment that has crossed an ocean under a perfectly valid contract now has to satisfy an authority that was not party to it and has no obligation to be convenient.',
    },
    {
      type: 'paragraph',
      text: 'This is the point of maximum asymmetry in the whole chain. The cargo is far from home, sitting on someone else’s quay, accruing charges, and possibly perishing, while a decision is made by an official applying rules the shipper does not control. And unlike almost every other problem in logistics, this one has no commercial remedy: a refused consignment cannot be argued into admissibility, and the available outcomes — treatment, re-export, or destruction — all cost more than the profit on the shipment.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Inspection — the importing state’s control at the border',
    },
    {
      label: 'Cargo form',
      value: 'All forms — bulk, containerised, unitised, breakbulk, live',
    },
    {
      label: 'Typical structure',
      value:
        'A documentary check, an identity check, and — where selected — a physical check',
    },
    {
      label: 'Carried out by',
      value:
        'The importing country’s authorities, commonly a plant protection organisation, a food or veterinary authority, and customs',
    },
    {
      label: 'Selection is risk-based',
      value:
        'Not every consignment is physically examined; frequency reflects the commodity, origin, and history',
    },
    {
      label: 'International framework',
      value:
        'The WTO SPS Agreement disciplines these measures; IPPC standards govern the plant-health element',
    },
    {
      label: 'Outcomes on failure',
      value:
        'Detention, treatment, re-export, or destruction — none of them cheap',
    },
  ],
  sections: [
    {
      id: 'what-is-being-checked',
      heading: 'What is actually being checked',
      body: [
        {
          type: 'paragraph',
          text: 'Border control on agricultural goods is not one inspection but several regimes operating over the same consignment, often by different agencies with different interests. The plant health authority is concerned with pests that could establish in the country. A food safety authority is concerned with contaminants, residues, and hygiene. A veterinary authority is concerned with animal disease. Customs is concerned with what the goods are, where they are from, and what is owed on them. Each can stop the consignment independently, and satisfying one says nothing about the others.',
        },
        {
          type: 'paragraph',
          text: 'The checks themselves are usually layered, and the layering is what makes the system tractable at all. Documents are examined for every consignment, because that is cheap. Identity is verified — that the goods present are the goods described. And a proportion of consignments is physically examined and sampled, selected on risk rather than at random. The great majority of shipments never have a container opened, which is precisely why the ones that are selected matter so much.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Documentary check',
              description:
                'Examination of the certificates and declarations accompanying the consignment. Applied broadly, and the cheapest place for a shipment to fail — and the most avoidable.',
            },
            {
              term: 'Identity check',
              description:
                'Verification that the goods physically present correspond to the documents — the right commodity, the right marks, the right seal.',
            },
            {
              term: 'Physical check',
              description:
                'Examination of the goods themselves, potentially including sampling and laboratory testing. Applied to a selected proportion, and the check that takes time.',
            },
            {
              term: 'Risk-based selection',
              description:
                'Deciding which consignments to examine using commodity, origin, operator history, and intelligence. Why an exporter’s past behaviour affects its future clearance speed.',
            },
            {
              term: 'Detention',
              description:
                'Holding a consignment pending a decision or a laboratory result. Frequently the most damaging outcome for perishables, because it costs time rather than a verdict.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The certificate is not the permission',
          text: 'A phytosanitary certificate issued at origin is the exporting country’s attestation. It is not a guarantee of entry. The importing authority makes its own determination against its own requirements, and it may reach a different conclusion on the same consignment. Treating the certificate as a clearance is a persistent and expensive misconception.',
        },
      ],
    },
    {
      id: 'why-consignments-fail',
      heading: 'Why consignments fail',
      body: [
        {
          type: 'paragraph',
          text: 'The single most striking feature of border rejections is how many are documentary rather than substantive. A consignment can be entirely sound — clean, compliant, correctly grown and handled — and be refused because a certificate has the wrong wording, an incorrect botanical name, a missing declaration, a date inconsistency, or a signature from the wrong authority. These are not quality failures at all; they are failures of a paperwork process running in parallel with a physical one, and the goods pay for them exactly as though they had been contaminated.',
        },
        {
          type: 'list',
          items: [
            'Certificate errors — wrong wording, missing additional declarations, inconsistent dates, incorrect species naming, or the wrong issuing authority',
            'Mismatch between documents and goods, including seal, mark, and quantity discrepancies',
            'Live pests found on physical examination, which is the outcome the plant-health regime exists to prevent',
            'Residue findings exceeding the importing country’s limits, which are set by that country and need not match the exporter’s',
            'Contaminant findings, including mycotoxins in stored commodities',
            'Wood packaging non-compliance — untreated or unmarked pallets and dunnage under a sound cargo',
            'Prohibited or unpermitted goods, where the commodity and origin combination is simply not admissible',
            'Missing import permit, where one was required in advance and cannot be obtained retrospectively',
            'Classification and origin disputes with customs, which are revenue matters rather than safety ones',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Requirements are national, and they do not have to agree',
          text: 'Two importing countries can lawfully impose different requirements on the same commodity from the same origin. The SPS Agreement disciplines how such measures must be justified and applied — requiring a scientific basis and prohibiting arbitrary discrimination — but it does not harmonise them. An exporter serving several markets is serving several rulebooks.',
        },
      ],
    },
    {
      id: 'what-failure-costs',
      heading: 'What failure costs',
      body: [
        {
          type: 'paragraph',
          text: 'When a consignment is refused, the available outcomes are all bad and the commodity determines which is worst. Treatment, where the defect is treatable and treatment is permitted, costs money and time and may itself damage the goods. Re-export means paying freight a second time on a cargo already at its destination, to somewhere that will accept it — and for a perishable, somewhere reachable while it is still alive. Destruction ends the matter and returns nothing.',
        },
        {
          type: 'paragraph',
          text: 'For perishables, detention alone is often the decisive cost, regardless of the eventual verdict. A consignment held for a laboratory result is a consignment consuming its remaining shelf life on a quay, and it can lose its market while entirely compliant. This is why the incentive at the border is so heavily weighted toward getting the documents right before departure: a documentary error discovered at origin costs a reprint, and the same error discovered at the destination costs the shipment.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'There is no appeal to commercial reasonableness',
          text: 'A border authority is applying its own state’s law. It is not a counterparty, it has no interest in the shipment’s economics, and the fact that a rejection is disproportionate to the defect is not an argument available to the shipper. Where a measure is genuinely unjustified, the remedy lies between governments under the SPS framework, on a timescale no consignment survives.',
        },
      ],
    },
    {
      id: 'managing-the-interface',
      heading: 'Managing the interface',
      body: [
        {
          type: 'paragraph',
          text: 'Because failure is expensive and prevention is cheap, the mature response is to move the problem upstream. Requirements are established before the goods are grown, not before they are shipped: import permits obtained in advance, additional declarations agreed with the origin authority, treatment arranged where it is mandated, and documentation checked against the destination’s actual current requirement rather than against last season’s. Much of what a competent exporter does is this — and it is invisible, because it manifests as nothing going wrong.',
        },
        {
          type: 'paragraph',
          text: 'The other lever is history. Risk-based selection means an operator’s record follows it: consistent compliance reduces examination frequency, and a rejection raises it, sometimes for the origin as a whole rather than for the exporter that caused it. This makes border performance a shared asset among a country’s exporters, and it is why origin-level compliance programmes exist. One party’s failure is charged to everyone shipping the same commodity from the same place.',
        },
      ],
    },
  ],
  logisticsPurpose:
    'Allow an importing state to verify, before goods enter its market, that a consignment meets its plant-health, food-safety, animal-health, and revenue requirements — and to refuse those that do not.',
  operationalLimitations: [
    'This page cannot state what any country requires for any commodity. Requirements are national, commodity- and origin-specific, change without reference to any shipment in progress, and are published by the importing country’s competent authorities.',
    'No inspection frequencies, sampling rates, or examination proportions are given. Selection is risk-based, is not published as a fixed figure, and changes with the authority’s assessment.',
    'No residue limits, tolerances, or contaminant thresholds are given. They are set by the importing country and need not match those of the exporting country or of any international reference.',
    'No clearance times are given. They depend on the port, the agency, the selection outcome, whether laboratory testing is required, and workload on the day.',
    'Whether a specific consignment will be admitted is a determination made by the competent authority against that consignment. Nothing here predicts, influences, or substitutes for it.',
    'The outcomes available on a refusal, and their cost, depend on the commodity, the defect, and the authority’s decision, and are not generalisable.',
    'Nothing here is legal, customs, or regulatory advice, and it does not substitute for the authority’s own ruling or for qualified representation.',
  ],
  cargoForms: ['bulk-dry', 'containerised', 'unitised', 'breakbulk', 'live'],
  applicableCommodityClasses: [
    'cereal-grain',
    'oilseed',
    'pulse',
    'fruit',
    'vegetable',
    'nut',
    'spice',
    'beverage-crop',
    'livestock-product',
    'root-tuber',
  ],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-mangoes' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'table-grapes' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'groundnuts' },
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'dried-chillies' },
  ],
  qualityRisks: [
    { type: 'quality-attribute', slug: 'insect-damage' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
    { type: 'quality-attribute', slug: 'foreign-material' },
    { type: 'quality-attribute', slug: 'internal-quality' },
    { type: 'quality-attribute', slug: 'firmness' },
  ],
  dependsOnOperations: [
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'air-freight-of-perishables' },
    { type: 'logistics-concept', slug: 'bonded-warehouse' },
    { type: 'logistics-concept', slug: 'break-bulk-handling' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'container-shipping' },
    { type: 'logistics-concept', slug: 'controlled-atmosphere-transport' },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
  ],
  exposedToRisks: [
    { type: 'supply-chain-risk', slug: 'phytosanitary-rejection' },
    { type: 'supply-chain-risk', slug: 'residue-limit-exceedance-rejection' },
    { type: 'supply-chain-risk', slug: 'mycotoxin-rejection' },
    { type: 'supply-chain-risk', slug: 'documentation-error' },
    { type: 'supply-chain-risk', slug: 'import-ban' },
    { type: 'supply-chain-risk', slug: 'biosecurity-incursion' },
    { type: 'supply-chain-risk', slug: 'port-congestion' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'International standards for phytosanitary measures, including import inspection, certification, and non-compliance action',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS Agreement disciplining sanitary and phytosanitary measures applied at the border',
    },
    {
      sourceId: 'usda-aphis',
      citedFor:
        'National plant protection import inspection, permitting, and treatment requirements',
    },
    {
      sourceId: 'ec-agri',
      citedFor:
        'European Union import control arrangements for agricultural consignments',
    },
    {
      sourceId: 'codex',
      citedFor:
        'Maximum residue limits and food safety reference standards applied to imported food',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global in concept, national in substance. Every importing country operates its own regime with its own requirements, agencies, and procedures, and two markets can lawfully apply different requirements to the same commodity from the same origin.',
  limitations: [
    'A reference description of how border inspection works, not regulatory, legal, or customs advice, and not a statement of any country’s requirements.',
    'No requirements, thresholds, inspection frequencies, or clearance times are given — all are national, commodity-specific, and subject to change.',
    'Admissibility of a specific consignment is determined by the competent authority against that consignment; nothing here predicts or substitutes for that determination.',
    'Requirements change without reference to shipments in progress; always work from the importing authority’s current published requirement.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Port of Entry Inspection: How Admissibility Is Decided',
    description:
      'How import inspection works: documentary, identity, and physical checks, risk-based selection, and why so many rejections are documentary.',
    keywords: [
      'port of entry inspection',
      'border inspection',
      'phytosanitary inspection',
      'import rejection',
      'SPS border control',
    ],
  },
  structuredData: { article: true },
};
