import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const packingList: TradeConceptContent = {
  id: 'trade-concept-packing-list',
  slug: 'packing-list',
  contentType: 'trade-concept',
  title: 'Packing List',
  alternativeNames: ['Packing specification', 'Weight list', 'Packing note'],
  category: 'Trade concept',
  subcategory: 'Documentation',
  tradeConceptClass: 'documentation',
  summary:
    'A packing list states how a consignment is physically made up: what is in each package, how many there are, what they weigh, and how they are marked. It is the document that lets a consignment be checked against its paperwork without opening everything, which is why inspection authorities rely on it more than its humble status suggests.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The commercial invoice says what was sold. The packing list says how it was packed. The difference sounds administrative and is not: an invoice for a quantity of dried fruit tells an officer nothing about which of the four hundred cartons in a container holds what, or which pallet to pull to check a claim. The packing list is the map that makes a consignment inspectable.',
    },
    {
      type: 'paragraph',
      text: 'It is also the document that reconciles a consignment’s weights. Between an invoice quantity, a transport document’s figures, a certificate of weight, and what a scale says at destination, there are several numbers describing one cargo, and they will not be identical. The packing list is where the structure behind those numbers — how many packages, of what tare, with what net content — is set out so that the differences can be understood rather than merely noticed.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Documentation — physical composition of the consignment',
    },
    {
      label: 'Issued by',
      value: 'The seller or the party that packed the consignment',
    },
    {
      label: 'States',
      value:
        'Package count and type, contents per package, net and gross weights, dimensions, and marks and numbers',
    },
    {
      label: 'No price',
      value:
        'It carries no values — which is why it can be shared with parties who should not see the commercial terms',
    },
    {
      label: 'Primary users',
      value:
        'Customs and health inspectors, carriers, terminal and warehouse operators, and the consignee',
    },
    {
      label: 'Enables',
      value:
        'Partial inspection — checking a sample of packages against the document rather than opening the whole consignment',
    },
    {
      label: 'Not a certificate',
      value:
        'It is the packer’s own statement, not an attestation by any authority or independent party',
    },
  ],
  sections: [
    {
      id: 'what-it-states',
      heading: 'What it states',
      body: [
        {
          type: 'paragraph',
          text: 'A packing list describes the consignment as a physical object rather than as a commercial one. There is no universal format; what follows is the shape common to most of them.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Package count and type',
              description:
                'How many cartons, bags, drums, pallets, or bales, and of what kind. This is the number an officer counts against.',
            },
            {
              term: 'Contents per package',
              description:
                'What is in each, and where a consignment is heterogeneous, which package holds which line of the invoice.',
            },
            {
              term: 'Net and gross weight',
              description:
                'The weight of the goods and the weight including packing, per package and in total. The difference is the tare, and it is why two honest documents can state different weights for one cargo.',
            },
            {
              term: 'Dimensions and volume',
              description:
                'Measurements of the packages or unit loads, used for stowage, for freight calculation, and for checking that a load is what it claims to be.',
            },
            {
              term: 'Marks and numbers',
              description:
                'The identifying marks on the packages themselves. These are what tie a physical carton in a container to a line on a piece of paper.',
            },
            {
              term: 'Unit-load and container identity',
              description:
                'How packages are consolidated onto pallets or into containers, with the container and seal numbers where relevant.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'It carries no prices, and that is useful',
          text: 'Because a packing list has no commercial values on it, it can be given to carriers, terminals, and inspectors who need to handle or check the goods but have no business seeing what was paid. The omission is a feature of the document, not a gap in it.',
        },
      ],
    },
    {
      id: 'why-inspectors-need-it',
      heading: 'Why inspection depends on it',
      body: [
        {
          type: 'paragraph',
          text: 'Border control is selective by necessity. An officer who decides to examine a consignment is not going to open every package, and the entire practicality of a partial check rests on being able to say: the document claims package 217 contains this, so let us look at package 217. Without a packing list, the only options are to open everything or to open nothing, and neither is a control.',
        },
        {
          type: 'paragraph',
          text: 'The same applies to official health controls, where an identity check asks whether the consignment physically corresponds to what its certificates describe. That question is answered by matching marks, counts, and weights on the ground against the documents — which is exactly what the packing list structures. A certificate describing a consignment of a stated size and marking is verifiable only if something on paper says how that consignment is made up.',
        },
        {
          type: 'list',
          items: [
            'It makes a sample-based examination possible and defensible',
            'It supports the identity check that health control regimes apply',
            'It lets a carrier and terminal plan handling, stowage, and equipment',
            'It gives the consignee a basis for checking receipt and for evidencing a shortage',
            'It supports a claim, because a loss can be located to specific packages',
          ],
        },
      ],
    },
    {
      id: 'weights-and-agriculture',
      heading: 'Weights, and why agricultural cargo complicates them',
      body: [
        {
          type: 'paragraph',
          text: 'Weight is the field where packing lists earn their keep and where agricultural consignments cause the most trouble. A duty assessed per tonne needs a tonne, a freight rate needs a weight, a certificate of weight states one, and the invoice implies another. These are not the same measurement even when everyone is honest.',
        },
        {
          type: 'list',
          items: [
            'Net and gross differ by the tare, which for bagged commodities can be material',
            'Moisture changes weight in transit; a cargo weighed at loading and at discharge will not weigh the same',
            'Bulk cargo weight is established by survey or by weighbridge, methods that carry their own tolerances',
            'A consignment loaded over hours or days has no single instant at which it was weighed',
          ],
        },
        {
          type: 'paragraph',
          text: 'The packing list does not resolve any of this. What it does is make the structure explicit — package count, tare, net per package — so that a difference between two figures can be traced to a cause rather than treated as a discrepancy of unknown origin. Which figure governs, and what tolerance applies, is a matter for the contract, the tariff, and the authority respectively, and none of those is settled by the document.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Wood packaging is regulated in its own right',
          text: 'Pallets, crates, and dunnage of solid wood are subject to international phytosanitary requirements for wood packaging material, independently of what they contain. The packaging is a regulated article, not a neutral container, and a consignment can be held over its pallets rather than its cargo.',
        },
      ],
    },
    {
      id: 'consistency',
      heading: 'Consistency and the document set',
      body: [
        {
          type: 'paragraph',
          text: 'Like every document in a presentation, the packing list is checked against its neighbours. Its counts and weights must agree with the invoice and the transport document; its marks must agree with what is on the packages; its container and seal references must agree with the carrier’s. A bank examining a documentary presentation checks these on the face of the documents; an officer at a border checks them against the goods.',
        },
        {
          type: 'paragraph',
          text: 'It is the least glamorous document in the file and one of the most frequent causes of a hold. A packing list that does not reconcile turns a routine consignment into a question, and questions take time — which for a perishable cargo is not a neutral cost.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To state how a consignment is physically packed — package count, contents, weights, dimensions, and marks — so that it can be handled, checked against its documents, and inspected without opening all of it.',
  administeredBy:
    'Prepared by the seller or packer; relied on by carriers, terminal operators, customs, and official control authorities',
  governingBodies: [
    'World Customs Organization',
    'International Plant Protection Convention (for wood packaging material)',
    'National customs and plant-health authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what a packing list is and does. It is not a template, prescribes no format, and states no mandatory content for any jurisdiction or credit.',
    'A packing list is the packer’s own statement. It is not an attestation by any authority or independent party, and it certifies nothing about quality, weight accuracy, or health status.',
    'Which weight governs a transaction, and what tolerance applies, are matters for the contract, the tariff, and the competent authority — not for this document and not for this page.',
    'Requirements for wood packaging material are set under the applicable phytosanitary regime and enforced by the importing jurisdiction; nothing here establishes what any consignment or its packaging must satisfy.',
  ],
  partiesInvolved: [
    'Seller or packer preparing it',
    'Carrier and terminal operator handling the goods',
    'Customs officer conducting an examination',
    'Plant-health or food-safety inspector conducting an identity or physical control',
    'Consignee checking receipt',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'commercial-invoice' },
    { type: 'trade-concept', slug: 'bill-of-lading' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'ispm-15-wood-packaging' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'palletisation' },
    { type: 'logistics-concept', slug: 'container-stuffing' },
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    {
      type: 'logistics-concept',
      slug: 'flexible-intermediate-bulk-containers',
    },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'letter-of-credit' },
    { type: 'trade-concept', slug: 'tariffs-and-duties' },
  ],
  sourceReferences: [
    {
      sourceId: 'wco',
      citedFor:
        'Use of consignment packing particulars in customs examination and in verifying a declaration against the goods',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary regulation of wood packaging material independently of the goods it contains, and identity checks matching a consignment to its certification',
    },
    {
      sourceId: 'gs1',
      citedFor:
        'Standards for identifying and marking logistic units so that packages can be tied to their documentation',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a commercial and operational document. Whether one is mandatory, in what form, and with what content is set by the importing jurisdiction, the carrier, and any documentary credit.',
  limitations: [
    'A description of the document’s role, not a template and not a statement of any jurisdiction’s requirements.',
    'No mandatory fields, formats, weight tolerances, or marking specifications are given: they are set by law, contract, or credit and differ by market.',
    'The document records what the packer states; it does not verify weights, contents, or condition.',
    'Weight reconciliation between documents depends on method, moisture, and timing, and cannot be resolved by any general description.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Packing List: What Makes a Consignment Inspectable',
    description:
      'What a packing list states, why inspectors depend on it for partial examination and identity checks, and how it structures weight reconciliation.',
    keywords: [
      'packing list',
      'net and gross weight',
      'marks and numbers',
      'consignment inspection',
      'wood packaging',
    ],
  },
  structuredData: { article: true },
};
