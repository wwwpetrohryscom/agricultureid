import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const sanitaryCertificate: TradeConceptContent = {
  id: 'trade-concept-sanitary-certificate',
  slug: 'sanitary-certificate',
  contentType: 'trade-concept',
  title: 'Sanitary Certificate',
  alternativeNames: [
    'Health certificate',
    'Veterinary certificate',
    'Official food certificate',
    'Export health certificate',
  ],
  category: 'Trade concept',
  subcategory: 'Documentation',
  tradeConceptClass: 'documentation',
  summary:
    'A sanitary certificate is an official attestation by the competent authority of an exporting country about the health status of a consignment of animals, animal products, or food. Like its plant-health counterpart it is a government-to-government communication — but it rests on an establishment’s approval and a country’s disease status as much as on any inspection of the goods.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Where the phytosanitary system protects plants from pests, the sanitary system protects human and animal health — from disease carried in animals and animal products, and from hazards in food. The instrument is analogous: an official certificate, issued by the exporting country’s competent authority, attesting that a consignment meets the importing country’s requirements.',
    },
    {
      type: 'paragraph',
      text: 'The resemblance stops at the surface, though, because of what the attestation actually rests on. A phytosanitary certificate largely reflects what an inspector found in a consignment. A sanitary certificate frequently attests things no inspection of a carton could establish: that the animals came from a country or zone with a particular disease status, that the product was produced in an establishment approved for export to that market, that a slaughter or processing regime was applied, that a testing programme was in place. The consignment is the occasion for the certificate; the subject is a system.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Documentation — official sanitary attestation' },
    {
      label: 'Covers',
      value:
        'Live animals, products of animal origin, and food where the importing country requires official certification',
    },
    {
      label: 'Issued by',
      value:
        'The competent authority of the exporting country — commonly a veterinary or food-safety service',
    },
    {
      label: 'Rests on',
      value:
        'Country or zone disease status, establishment approval, and official control systems — not on inspection alone',
    },
    {
      label: 'Reference frameworks',
      value:
        'The WOAH animal health codes and Codex Alimentarius principles for food certification',
    },
    {
      label: 'Model certificates',
      value:
        'Wording is commonly bilaterally negotiated and market-specific, within international model guidance',
    },
    {
      label: 'Fragility',
      value:
        'A change in disease status or a delisted establishment can invalidate certification for a whole trade at once',
    },
  ],
  sections: [
    {
      id: 'what-it-attests',
      heading: 'What a sanitary certificate attests',
      body: [
        {
          type: 'paragraph',
          text: 'The content is negotiated between the trading partners more often than it is standardised, which is why sanitary certification is market-by-market work rather than a single procedure. The categories of attestation, however, recur.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Country or zone status',
              description:
                'That the animals or products come from a country, zone, or compartment recognised as having a particular status for specified diseases. This is an attribute of a territory, not of a consignment.',
            },
            {
              term: 'Establishment approval',
              description:
                'That the product was produced in an establishment approved — often specifically listed for the importing market — and operating under official supervision.',
            },
            {
              term: 'Process and control',
              description:
                'That defined procedures were applied: ante- and post-mortem inspection, a treatment achieving a specified effect, a hygiene system, or a residue monitoring programme.',
            },
            {
              term: 'Consignment particulars',
              description:
                'Identification of the goods, their quantity and marks, the means of conveyance, and the identification of the animals or the batches concerned.',
            },
            {
              term: 'Testing',
              description:
                'That specified tests were carried out with specified results, where the importing country requires them.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Most of it cannot be verified by looking at the goods',
          text: 'An inspector at a port can check that a carton matches its certificate. Nothing at the port can establish that a country was free of a disease or that an establishment was operating correctly six weeks earlier. The certificate’s value depends on the exporting authority’s systems, which is why importing countries audit exporting countries rather than only inspecting consignments.',
        },
      ],
    },
    {
      id: 'the-system-behind-it',
      heading: 'The system behind the certificate',
      body: [
        {
          type: 'paragraph',
          text: 'Because the attestations concern systems, market access for animal products is a relationship between authorities rather than a transaction between companies. Before an exporter can obtain a certificate for a market, a good deal has usually had to happen at a level well above it.',
        },
        {
          type: 'list',
          items: [
            'The importing country must recognise the exporting country’s competent authority and its controls, commonly following an assessment or audit',
            'The certificate wording for the commodity and market must have been agreed between the authorities',
            'The establishment must be approved and, in many regimes, individually listed for that market',
            'The country or zone must hold the disease status the certificate attests, and be able to demonstrate it',
            'Surveillance, testing, and traceability systems must be in place and functioning',
          ],
        },
        {
          type: 'paragraph',
          text: 'The international reference points are the animal health codes maintained by the World Organisation for Animal Health, which set out recommended standards including model certificates, and the Codex Alimentarius principles for food import and export inspection and certification. These inform what authorities negotiate; they do not replace the negotiation. Actual certificate wording for a given commodity and market is commonly specific to that pair of countries.',
        },
      ],
    },
    {
      id: 'fragility',
      heading: 'Why sanitary certification is fragile',
      body: [
        {
          type: 'paragraph',
          text: 'The dependence on status and approval, rather than on the consignment, gives this certification a failure mode that plant-health certification largely lacks. A consignment can become uncertifiable without anything happening to it at all.',
        },
        {
          type: 'list',
          items: [
            'A disease outbreak can change a country’s or zone’s status, invalidating attestations for every consignment from the affected area at once',
            'An establishment removed from an importing country’s list stops being able to supply that market immediately, whatever the condition of its product',
            'An audit finding against the exporting authority’s system can suspend a whole trade regardless of individual establishments',
            'Certificates already issued may not survive a status change occurring while goods are in transit',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point is the one with the sharpest commercial edge. A cargo of animal products certified and shipped in good order can arrive into a market that has, since departure, closed to its origin. Whether such a consignment is admitted is a matter for the importing authority; who bears the loss is a matter for the sale contract. The certificate does not resolve either question.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Zoning and regionalisation are recognised, not automatic',
          text: 'International standards provide for disease status to be recognised at the level of a zone or compartment rather than a whole country, so that an outbreak in one area need not close a nation’s exports. Whether an importing country accepts such regionalisation, and for which diseases and zones, is that country’s decision.',
        },
      ],
    },
    {
      id: 'distinguishing-it',
      heading: 'Distinguishing it from the other certificates',
      body: [
        {
          type: 'paragraph',
          text: 'The border carries several official documents that look alike and are not interchangeable. Each is issued under a different regime, by a different authority, attesting to a different thing.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Sanitary certificate',
              description:
                'Human and animal health: disease status, establishment approval, hygiene and process controls, testing. Issued by a veterinary or food-safety authority.',
            },
            {
              term: 'Phytosanitary certificate',
              description:
                'Plant health: pest risk in plants and plant products. Issued by a national plant protection organisation under the IPPC framework.',
            },
            {
              term: 'Certificate of origin',
              description:
                'Customs origin, for tariff purposes. Issued by a designated body or made by the exporter. Says nothing about health.',
            },
            {
              term: 'Inspection or analysis certificate',
              description:
                'Commercial quality and composition, issued by an independent inspector under the contract. Not an official attestation at all.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The boundary that blurs most often is between sanitary certification and food safety more broadly. A product of animal origin may need attestation of animal disease status and of food hygiene, potentially engaging more than one regime and more than one authority in the same consignment. Which applies, in what combination, is determined by the importing country’s requirements for that commodity.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To communicate officially, from the competent authority of an exporting country to that of an importing country, that a consignment of animals, animal products, or food meets the importing country’s sanitary requirements.',
  administeredBy:
    'The competent veterinary or food-safety authority of the exporting country, against requirements set by the importing country',
  governingBodies: [
    'World Organisation for Animal Health',
    'Codex Alimentarius Commission',
    'World Trade Organization',
    'National veterinary and food-safety authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what sanitary certification is and what it rests on. It states no import requirement, certificate wording, test, treatment, disease status, or establishment listing for any country, commodity, or market.',
    'Sanitary import requirements are set by each importing country, are commonly negotiated bilaterally for a commodity and market, differ between markets for the same product, and change — including at short notice in response to disease events.',
    'A certificate is an official attestation reflecting the exporting authority’s systems and judgment. It is not a guarantee, and it does not oblige the importing country to accept the consignment.',
    'Nothing here indicates the disease status of any country or zone, the approval status of any establishment, or whether any market is open to any product. Those are matters for the competent authorities and change over time.',
  ],
  partiesInvolved: [
    'Exporter and the approved establishment producing the goods',
    'Competent authority of the exporting country issuing the certificate',
    'Competent authority of the importing country setting requirements and conducting audits',
    'Official veterinarian or inspector signing the attestation',
    'Importer presenting the certificate at the point of entry',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'certificate-of-origin' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'codex-alimentarius' },
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'cold-chain-integrity' },
    { type: 'logistics-concept', slug: 'reefer-container-transport' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'import-permit' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  connections: [
    { type: 'commodity', slug: 'hen-eggs' },
    { type: 'commodity', slug: 'raw-cow-milk' },
  ],
  sourceReferences: [
    {
      sourceId: 'woah',
      citedFor:
        'Animal health codes providing recommended standards, model certificates, disease status recognition, and zoning and compartmentalisation',
    },
    {
      sourceId: 'codex',
      citedFor:
        'Principles for food import and export inspection and certification systems',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The SPS framework under which sanitary import requirements are set and applied',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Scientific assessment underpinning sanitary requirements for products of animal origin in a regional regime',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a category of instrument, framed by international standards. Certificate wording, establishment listing, recognised disease status, and testing requirements are country-pair-specific and change over time.',
  limitations: [
    'A description of the instrument and what it rests on, not a statement of any country’s sanitary import requirements.',
    'No certificate wording, tests, treatments, statuses, listings, or validity periods are given: they are market-specific, commonly bilaterally negotiated, and change at short notice.',
    'The certificate attests systems and status as much as consignment condition, and its validity can be affected by events after issue.',
    'Sanitary, phytosanitary, customs, and commercial inspection certificates are separate instruments under separate regimes and are not interchangeable.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Sanitary Certificate: Official Attestation on Health Status',
    description:
      'What a sanitary certificate attests: disease status, establishment approval and process controls, and why it is fragile to outbreaks and delistings.',
    keywords: [
      'sanitary certificate',
      'health certificate',
      'veterinary certificate',
      'establishment approval',
      'disease status',
    ],
  },
  structuredData: { article: true },
};
