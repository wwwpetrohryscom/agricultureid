import type { TradeConceptContent } from '@/types/content';
import { TRADE_SCOPE_DISCLAIMER } from '@/types/trade';

export const importPermit: TradeConceptContent = {
  id: 'trade-concept-import-permit',
  slug: 'import-permit',
  contentType: 'trade-concept',
  title: 'Import Permit',
  alternativeNames: [
    'Import licence',
    'Import authorisation',
    'Prior authorisation',
  ],
  category: 'Trade concept',
  subcategory: 'Market access',
  tradeConceptClass: 'market-access',
  summary:
    'An import permit is a prior authorisation that a consignment must hold before it may be imported. For agricultural goods it commonly does more than grant permission: it states the conditions the consignment must meet, which is why obtaining it is the step that defines what the exporter has to do rather than a formality at the end.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Some goods may be imported by anyone who declares them and pays the duty. Others may not be imported at all until an authority has said so in advance, in writing, for that consignment or that importer. The instrument is an import permit, and for plants, animals, and their products it is common enough to be the normal case rather than the exception.',
    },
    {
      type: 'paragraph',
      text: 'What makes the agricultural version distinctive is that the permit is often the document that specifies the requirements. Rather than merely granting permission, it sets out what the consignment must satisfy — the treatments, the declarations, the entry point, the conditions — which means the exporter cannot know what to do until the importer has obtained it. The permit is upstream of production decisions, not downstream of them.',
    },
  ],
  keyFacts: [
    { label: 'Class', value: 'Market access — prior authorisation to import' },
    {
      label: 'Obtained by',
      value:
        'The importer, from the competent authority of the importing country, before shipment',
    },
    {
      label: 'Automatic or non-automatic',
      value:
        'Automatic licensing is granted in all cases and used for monitoring; non-automatic licensing restricts',
    },
    {
      label: 'Agricultural function',
      value:
        'Frequently states the phytosanitary or sanitary conditions the consignment must meet, not only permission',
    },
    {
      label: 'Consignment-specific',
      value:
        'Commonly tied to a commodity, origin, quantity, period, and point of entry',
    },
    {
      label: 'Disciplined by',
      value:
        'The multilateral framework on import licensing procedures, alongside the SPS framework where health conditions are involved',
    },
    {
      label: 'Not a guarantee',
      value:
        'A permit authorises an import subject to conditions; the consignment is still controlled and can still be refused',
    },
  ],
  sections: [
    {
      id: 'automatic-and-non-automatic',
      heading: 'Automatic and non-automatic licensing',
      body: [
        {
          type: 'paragraph',
          text: 'The multilateral framework distinguishes two kinds of licensing, and the difference is what the requirement is for.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Automatic licensing',
              description:
                'Approval is granted in all cases where the application is properly made. It exists to give the authority visibility of what is arriving — for surveillance, statistics, or monitoring — rather than to restrict. It is not intended to have a restrictive effect.',
            },
            {
              term: 'Non-automatic licensing',
              description:
                'Approval is not guaranteed. The authority applies criteria and may refuse. This is the form used to administer quotas, to enforce restrictions, and to apply conditions to sensitive goods.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The framework disciplines procedures rather than prohibiting them: it addresses transparency of rules, the handling of applications, and the principle that licensing procedures should not themselves become a restriction beyond what the underlying measure requires. An automatic system administered so slowly that consignments miss their windows is a familiar way for a nominally non-restrictive requirement to restrict, which is precisely why the procedures are disciplined and not only the measures.',
        },
      ],
    },
    {
      id: 'the-agricultural-permit',
      heading: 'The permit as a statement of conditions',
      body: [
        {
          type: 'paragraph',
          text: 'In plant and animal health regimes the permit does something a licence in other sectors does not. It carries the conditions. A permit for a consignment of plant material may specify treatments to be applied, declarations the exporting authority must make on the phytosanitary certificate, an approved production area, an approved entry point, and a period within which the consignment must arrive.',
        },
        {
          type: 'paragraph',
          text: 'This inverts the usual order of a trade. The importer applies for the permit; the permit states the conditions; those conditions are then communicated to the exporter, whose national authority must be able and willing to attest to them; only then can the consignment be prepared and certified. An exporter who ships first and asks later may find that the certificate it holds does not say what the permit requires, and no amount of goodwill at the border can fix a declaration that was not made at origin.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Some conditions reach back into the growing season',
          text: 'Where a permit requires a declaration that goods came from a pest-free area, were grown under a specified regime, or were inspected during production, the evidence had to be generated months earlier. It cannot be created after harvest. For such conditions the permit is not a shipping step but a production constraint discovered — ideally — long before the crop was planted.',
        },
      ],
    },
    {
      id: 'what-it-does-not-do',
      heading: 'What a permit does not do',
      body: [
        {
          type: 'paragraph',
          text: 'The permit’s limits are the source of most disappointment about it.',
        },
        {
          type: 'list',
          items: [
            'It is not a guarantee of entry. The consignment is still subject to control at the border and can be refused if it does not meet the conditions the permit states.',
            'It is not a customs authorisation. Classification, valuation, origin, and duty are separate matters under a separate authority.',
            'It does not replace certification. A permit states conditions; the phytosanitary or sanitary certificate is what attests they were met.',
            'It is generally not transferable or open-ended, being tied to a commodity, origin, quantity, period, and often an entry point.',
            'It is revocable in substance: a change in the pest or disease situation can render a permit’s conditions unmeetable, or the permit itself void, while goods are in transit.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The relationship between permit and certificate is worth stating precisely, because they are constantly confused. The permit is issued by the importing country and says what is required. The certificate is issued by the exporting country and says what was done. Neither substitutes for the other, and a consignment generally needs both to say the same thing.',
        },
      ],
    },
    {
      id: 'commercial-consequences',
      heading: 'Commercial consequences',
      body: [
        {
          type: 'paragraph',
          text: 'Because the permit is obtained by the importer and constrains the exporter, it sits awkwardly across the parties’ responsibilities. The delivery term allocates who must obtain what, but it cannot make a party able to obtain something only the other side’s counterparty can apply for. Under a term placing import clearance on the seller, the seller may need the buyer to secure a permit it has no standing to seek — an arrangement that works only cooperatively.',
        },
        {
          type: 'list',
          items: [
            'Permit lead times sit on the critical path and are outside either party’s control',
            'Permit conditions determine what the exporting authority must certify, so they must be known before certification',
            'A permit tied to a quantity and period turns a shipping delay into a compliance failure',
            'Where a permit specifies an entry point, the routing is constrained and freight options narrow with it',
            'A permit issued to one importer does not help another, so a cargo resold in transit may need the whole position rebuilt',
          ],
        },
        {
          type: 'paragraph',
          text: 'Where a consignment arrives without a valid permit, or outside its terms, the outcome is a matter for the authority — and the options, which may include re-export, treatment, or destruction, are not the trader’s to choose. Who bears the resulting loss is decided by the sale contract, which is a different question answered by different documents.',
        },
      ],
    },
  ],
  conceptPurpose:
    'To require and record an authority’s prior authorisation for an import, and — for plant and animal products — to state the conditions a consignment must meet before it may be admitted.',
  administeredBy:
    'The competent authority of the importing country: a plant-health, animal-health, food-safety, or licensing body according to the goods',
  governingBodies: [
    'World Trade Organization',
    'International Plant Protection Convention',
    'World Organisation for Animal Health',
    'National competent authorities',
  ],
  advisoryLimitations: [
    TRADE_SCOPE_DISCLAIMER,
    'This page describes what an import permit is and does. It states no requirement, condition, lead time, validity period, quantity, or procedure for any country, commodity, or origin.',
    'Whether a permit is required, what conditions it will carry, and how it is obtained are matters for the competent authority of the importing country, differ by commodity and origin, and change — sometimes at short notice.',
    'A permit authorises an import subject to conditions. It is not a guarantee of entry, does not replace official certification, and does not address customs classification, valuation, origin, or duty.',
    'Where a consignment arrives without a valid permit or outside its terms, the options available are determined by the authority; who bears the resulting loss is a matter for the sale contract.',
  ],
  partiesInvolved: [
    'Importer applying for the permit',
    'Competent authority of the importing country issuing it and setting conditions',
    'Exporter, whose production and handling must satisfy the conditions',
    'National plant protection or veterinary authority of the exporting country, which must be able to certify them',
    'Inspector conducting control at the point of entry',
  ],
  associatedDocuments: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'customs-declaration' },
    { type: 'trade-concept', slug: 'commercial-invoice' },
  ],
  relevantStandards: [
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
  ],
  relatedLogistics: [
    { type: 'logistics-concept', slug: 'port-of-entry-inspection' },
    { type: 'logistics-concept', slug: 'fumigation-in-transit' },
  ],
  relatedConcepts: [
    { type: 'trade-concept', slug: 'customs-clearance' },
    { type: 'trade-concept', slug: 'ddp-delivery-term' },
    { type: 'trade-concept', slug: 'export-licence' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
    { type: 'trade-concept', slug: 'tariff-rate-quota' },
  ],
  sourceReferences: [
    {
      sourceId: 'wto',
      citedFor:
        'The framework on import licensing procedures, the distinction between automatic and non-automatic licensing, and the SPS framework under which health conditions are imposed',
    },
    {
      sourceId: 'ippc',
      citedFor:
        'Phytosanitary import requirements communicated through permits, including additional declarations and approved-area conditions',
    },
    {
      sourceId: 'woah',
      citedFor:
        'Animal health import conditions applied to consignments of animals and animal products',
    },
    {
      sourceId: 'usda-aphis',
      citedFor:
        'Operation of import permitting for plant and animal products in a national regime',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as an instrument. Whether a permit is required, its conditions, lead times, validity, and issuing authority are country- and commodity-specific and change over time.',
  limitations: [
    'A description of the instrument, not a statement of any country’s permit requirements and not a guide to obtaining one.',
    'No conditions, lead times, validity periods, quantities, entry points, or procedures are given: they are jurisdiction- and commodity-specific and change at short notice.',
    'A permit does not guarantee entry, does not replace certification, and does not address customs matters.',
    'The interaction between permit responsibility and the parties’ delivery term is a contractual question and is not resolved here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Import Permit: Prior Authorisation and Its Conditions',
    description:
      'How import permits work for agricultural goods: automatic versus non-automatic licensing, and why the permit states the conditions the exporter must meet.',
    keywords: [
      'import permit',
      'import licence',
      'non-automatic licensing',
      'phytosanitary conditions',
      'prior authorisation',
    ],
  },
  structuredData: { article: true },
};
