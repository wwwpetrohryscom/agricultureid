import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const phytosanitaryCertificate: TradeConceptContent = {
  id: 'trade-concept-phytosanitary-certificate',
  slug: 'phytosanitary-certificate',
  contentType: 'trade-concept',
  title: 'Phytosanitary Certificate',
  alternativeNames: ['Phyto', 'PC', 'Plant health certificate', 'ePhyto'],
  category: 'Trade concept',
  subcategory: 'Documentation',
  tradeConceptClass: 'documentation',
  summary:
    'A phytosanitary certificate is an official attestation, issued by the exporting country’s national plant protection organisation, that a consignment has been inspected or tested according to appropriate procedures and is considered to conform to the importing country’s plant health requirements. It is a government-to-government communication about pest risk — not a quality certificate, and not a guarantee.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Plants and plant products move pests. A country that admits a consignment of fruit, seed, or timber is admitting whatever travelled with it, and the consequences of an establishment — a pest that arrives, survives, and spreads — are borne long after the cargo has been eaten or planted. Import requirements for plant material exist for this reason, and the phytosanitary certificate is the instrument by which the exporting country tells the importing country that it has checked.',
    },
    {
      type: 'paragraph',
      text: 'The framing matters. The certificate is not a commercial document that a seller produces to satisfy a buyer. It is an official attestation, issued by a national authority, addressed to another national authority, under a treaty framework that both belong to. The exporter applies for it and pays for it, but it is not the exporter’s statement — which is precisely why it carries weight that no seller declaration could.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Documentation — official plant health attestation',
    },
    {
      label: 'Framework',
      value:
        'The International Plant Protection Convention and its international standards for phytosanitary measures',
    },
    {
      label: 'Issued by',
      value:
        'The national plant protection organisation of the exporting country, or under its authority',
    },
    {
      label: 'Addressed to',
      value:
        'The national plant protection organisation of the importing country — it is a government-to-government communication',
    },
    {
      label: 'Two model types',
      value:
        'A certificate for export, and a separate model for re-export of consignments imported from elsewhere',
    },
    {
      label: 'Additional declarations',
      value:
        'The importing country may require specific declarations, which must be requested and evidenced before issue',
    },
    {
      label: 'Not a quality document',
      value:
        'It attests plant health status against requirements — nothing about grade, composition, or commercial quality',
    },
  ],
  sections: [
    {
      id: 'what-it-attests',
      heading: 'What the certificate attests',
      body: [
        {
          type: 'paragraph',
          text: 'The certificate states that the consignment it describes has been inspected or tested according to appropriate official procedures and is considered to conform to the phytosanitary import requirements of the importing country. Each element of that sentence is doing work, and the language is deliberately careful.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: '"Inspected or tested"',
              description:
                'A procedure was carried out — which for a bulk consignment means sampling, not examination of every grain. The certificate attests the procedure, not exhaustive scrutiny.',
            },
            {
              term: '"According to appropriate official procedures"',
              description:
                'The methods used are those the exporting authority applies under the international framework, not methods invented for the consignment.',
            },
            {
              term: '"Considered to conform"',
              description:
                'A judgment reached on the evidence available, not a guarantee of a state of affairs. The wording acknowledges that inspection has limits.',
            },
            {
              term: '"Phytosanitary import requirements of the importing country"',
              description:
                'The certificate is issued against the destination’s requirements. This means the exporting authority must know what they are, which is why the destination has to be settled before the certificate is sought.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'It is an attestation, not a guarantee',
          text: 'The certificate records a professional judgment following a defined procedure. It does not warrant that a consignment is free of pests, and its issue does not oblige the importing country to accept the goods. The importing authority applies its own controls and reaches its own decision.',
        },
      ],
    },
    {
      id: 'how-it-is-obtained',
      heading: 'How it is obtained, and why timing binds',
      body: [
        {
          type: 'paragraph',
          text: 'The exporter applies to the national plant protection organisation of the exporting country, which arranges inspection or testing of the consignment and, if satisfied, issues the certificate. The consignment is described on the certificate in terms — quantity, marks, packaging, means of conveyance, point of entry — that let the importing authority match the paper to the goods.',
        },
        {
          type: 'paragraph',
          text: 'Two features constrain the process in ways that shape agricultural export logistics. The certificate is issued against a specific consignment going to a specific destination, so it cannot be obtained speculatively or repurposed if the cargo is redirected. And it is issued at a point in time, close to despatch, because a statement about pest status has a shelf life — which means the certification step sits on the critical path, immediately before shipping, at exactly the moment everything else is also happening.',
        },
        {
          type: 'list',
          items: [
            'Issue requires knowing the destination, because the requirements attested to are the destination’s',
            'A cargo redirected after certification may need to be certified again for the new destination',
            'Additional declarations required by the importing country must be evidenced before issue, which may require work done much earlier in the season',
            'Some requirements can only be met at production — field inspection, a pest-free area, a treatment applied at a stage now past — so a certificate cannot be retrofitted',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Additional declarations reach back into production',
          text: 'Where an importing country requires a declaration that goods come from a pest-free area, or were grown under a specified system, the evidence has to have been generated during production. An exporter who discovers the requirement at shipment cannot create that evidence retrospectively, and the consignment is not certifiable for that market.',
        },
      ],
    },
    {
      id: 're-export-and-electronic',
      heading: 'Re-export certificates and electronic exchange',
      body: [
        {
          type: 'paragraph',
          text: 'The framework provides a separate model for re-export. Where a consignment was imported into a country and is being sent on, that country’s authority cannot attest to production conditions it never saw. The re-export certificate instead attests to what that country can know — that the consignment arrived with its original certification, and what has happened to it since, including whether it was repacked or split and whether it was exposed to pest risk while there.',
        },
        {
          type: 'paragraph',
          text: 'The original certificate, or a certified copy, generally accompanies the re-export certificate, so that the destination sees the whole chain. This is the documentary counterpart of the point made elsewhere about routing: passing through a country does not change a consignment’s origin, but it does add to its history, and the certification has to describe that history honestly rather than restart it.',
        },
        {
          type: 'paragraph',
          text: 'Electronic exchange of certification between authorities has been developed under the international framework, allowing certificates to pass directly from the issuing authority to the receiving one rather than travelling with the cargo as paper. It addresses fraud and loss and speeds arrival processing. Participation is a matter for each country, and adoption is uneven.',
        },
      ],
    },
    {
      id: 'what-it-does-not-do',
      heading: 'What it does not do',
      body: [
        {
          type: 'paragraph',
          text: 'The certificate’s limits are as important as its content, because it is regularly asked to carry meaning it does not have.',
        },
        {
          type: 'list',
          items: [
            'It is not a quality certificate. Grade, moisture, protein, defects, and commercial condition are outside its scope entirely.',
            'It is not a food-safety document. Residues, contaminants, and mycotoxins are matters for the food-safety regime, not the plant-health one.',
            'It is not a customs document and says nothing about classification, value, or origin for tariff purposes.',
            'It is not an entry permit. Where an import permit is required, the certificate does not substitute for it.',
            'It does not bind the importing authority, which applies its own controls and may refuse the consignment regardless.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The distinction between plant health and food safety is the one most often blurred. A consignment of grain can be phytosanitarily unobjectionable and still be refused on a mycotoxin result, because two different regimes are asking two different questions and the certificate answers only one of them. Each regime has its own authority, its own requirements, and its own documentation.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To communicate officially, from the plant protection authority of an exporting country to that of an importing country, that a consignment has been inspected or tested under appropriate procedures and is considered to meet the importing country’s phytosanitary requirements.',
  administeredBy:
    'The national plant protection organisation of the exporting country, under the international framework and the importing country’s requirements',
  governingBodies: [
    'International Plant Protection Convention',
    'World Trade Organization',
    'National plant protection organisations',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what a phytosanitary certificate is and how the system works. It states no import requirement, additional declaration, treatment, validity period, or procedure for any country, commodity, or pest.',
    'Phytosanitary import requirements are set by each importing country, differ by commodity and origin, and change — including at short notice in response to pest situations. They are published by the authorities that set them and must be established there for every consignment.',
    'A certificate is an official attestation reflecting a judgment after a defined procedure. It is not a guarantee of pest freedom, and it does not oblige the importing country to accept the consignment.',
    'The certificate attests plant health status only. It says nothing about quality, food safety, residues, contaminants, customs classification, value, or origin.',
  ],
  partiesInvolved: [
    'Exporter applying for certification',
    'National plant protection organisation of the exporting country',
    'National plant protection organisation of the importing country',
    'Importer presenting the certificate at entry',
    'Inspector conducting official control at the point of entry',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
    { type: 'logistics-concept', slug: 'pre-shipment-inspection' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 're-export-and-transit' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'transhipment' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'The phytosanitary certification system, the model certificates for export and re-export, additional declarations, and electronic certificate exchange',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS framework under which phytosanitary import requirements are set and applied',
    },
    {
      sourceId: 'eppo',
      citedFor:
        'Regional plant protection context and pest listings underpinning phytosanitary import requirements',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Plant health and pest risk context for internationally traded plant products',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global framework under the IPPC, applied through national plant protection organisations. Import requirements, additional declarations, treatments, entry points, and validity are country-specific and change over time.',
  limitations: [
    'A description of the instrument and the system, not a statement of any country’s phytosanitary import requirements.',
    'No requirements, declarations, treatments, temperatures, durations, or validity periods are given: they are country- and commodity-specific, change at short notice, and are published by the authorities concerned.',
    'The certificate attests a procedure and a judgment, not pest freedom, and does not bind the importing authority.',
    'Plant health is one regime among several at the border; food safety, animal health, and customs are separate and are not addressed by this document.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Phytosanitary Certificate: Official Plant Health Attestation',
    description:
      'What a phytosanitary certificate attests and what it does not: the IPPC framework, how it is obtained, additional declarations, and ePhyto exchange.',
    keywords: [
      'phytosanitary certificate',
      'IPPC',
      'plant health',
      'additional declaration',
      'ePhyto',
    ],
  },
  structuredData: { article: true },
};
