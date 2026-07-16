import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const ispm15WoodPackaging: StandardReferenceContent = {
  id: 'standard-reference-ispm-15-wood-packaging',
  slug: 'ispm-15-wood-packaging',
  contentType: 'standard-reference',
  title: 'ISPM 15 — Wood Packaging Material',
  alternativeNames: [
    'ISPM 15',
    'Wood packaging material regulation',
    'ISPM 15 mark',
    'Heat treatment stamp',
  ],
  category: 'Standard',
  subcategory: 'Plant health',
  standardClass: 'standard',
  standardDomain: 'plant-health',
  summary:
    'ISPM 15 addresses the pest risk carried by wooden pallets, crates, and dunnage in international trade. It is unusual among standards: it regulates the packaging rather than the goods, which is why it reaches almost every trader regardless of what they ship.',
  introduction: [
    {
      type: 'paragraph',
      text: 'ISPM 15 is the International Standard for Phytosanitary Measures dealing with the regulation of wood packaging material in international trade. Its subject is not a commodity but the wood that carries commodities: pallets, crating, boxes, drums, dunnage, and bracing made from raw wood. Untreated timber can harbour bark beetles, wood-boring insects, nematodes, and fungi, and packaging travels everywhere — which makes it one of the most effective pathways ever available for moving forest pests between continents.',
    },
    {
      type: 'paragraph',
      text: 'The standard exists because that pathway proved to be extraordinarily consequential. Several of the most damaging forest pest introductions of recent decades are attributed to wood packaging, and the response was to require that such material be treated to kill pests and then marked so that the treatment is visible at a border. The result is the mark stamped on pallets worldwide, and the reason a consignment of electronics or textiles can be refused entry on plant-health grounds despite containing no plants at all.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'International Plant Protection Convention (IPPC), adopted by the Commission on Phytosanitary Measures',
    },
    {
      label: 'Identifier',
      value:
        'ISPM 15 — Regulation of wood packaging material in international trade',
    },
    {
      label: 'Subject',
      value: 'The packaging, not the goods it carries',
    },
    {
      label: 'Pest concern',
      value:
        'Bark beetles, wood-boring insects, nematodes, and fungi carried in raw wood',
    },
    {
      label: 'Mechanism',
      value:
        'Approved treatment of the wood, plus a visible mark applied by an authorised facility',
    },
    {
      label: 'Applies to',
      value: 'Traders in any commodity that ships on or in raw wood packaging',
    },
    {
      label: 'Enforced by',
      value:
        'National plant protection organisations at the border, under national law',
    },
  ],
  sections: [
    {
      id: 'what-it-covers',
      heading: 'What the standard covers',
      body: [
        {
          type: 'paragraph',
          text: 'In scope terms, ISPM 15 describes phytosanitary measures to reduce the risk of introduction and spread of quarantine pests associated with wood packaging material made of raw wood, moving in international trade. It addresses the treatments approved for such material, the marking that indicates treated material, and the arrangements under which producers and treatment providers are authorised and supervised by a national plant protection organisation. The specific treatments, their parameters, the design of the mark, and the exemptions are set out in the standard and its annexes, and none of them are reproduced here.',
        },
        {
          type: 'paragraph',
          text: 'Two structural points are worth carrying. First, the standard covers raw wood packaging — material manufactured in ways that already eliminate the pest risk is treated differently, and the boundaries are defined in the standard rather than by intuition. Second, the mark is not a certificate: it is applied by an authorised producer or treatment provider under national supervision, and it travels with the material rather than with a consignment or a shipment document.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Why the mark rather than paperwork',
          text: 'A phytosanitary certificate accompanies a consignment. Wood packaging is reused, broken up, mixed, and re-sorted across many consignments and owners, so a document could not stay attached to it. Marking the material itself is the only mechanism that survives that reality.',
        },
      ],
    },
    {
      id: 'why-it-reaches-everyone',
      heading: 'Why it reaches traders in every commodity',
      body: [
        {
          type: 'paragraph',
          text: 'Most plant-health rules apply to plants and plant products, and a machinery exporter never encounters them. ISPM 15 is the exception that catches everyone, because it regulates the pallet rather than the cargo. Any consignment resting on raw wood packaging carries the pathway, whatever the goods are, and border authorities inspect the packaging as its own subject.',
        },
        {
          type: 'paragraph',
          text: 'The commercial consequence is that non-compliant packaging is a real and recurring cause of border problems for shippers who have no other plant-health exposure. The failure modes are mundane rather than exotic: unmarked material, marks that are illegible or wrongly applied, repaired pallets whose new components were never treated, or dunnage and bracing added at loading that nobody thought of as packaging. The cargo is fine; the wood under it is not.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Repairs and dunnage are the classic failure',
          text: 'A pallet that was compliant when made can cease to be compliant after repair with untreated components, and loose dunnage or bracing introduced during stuffing is easy to overlook. Both are ordinary causes of rejection.',
        },
      ],
    },
    {
      id: 'how-it-is-enforced',
      heading: 'How it is applied and enforced',
      body: [
        {
          type: 'paragraph',
          text: 'Like every ISPM, ISPM 15 regulates nothing by itself. It takes effect because countries adopt it into national phytosanitary requirements, and adoption is very wide — which is what makes it feel like a universal rule. Authorisation of treatment providers, supervision of marking, and enforcement at the border are all done by national plant protection organisations. The IPPC authorises nobody, marks nothing, and inspects nothing.',
        },
        {
          type: 'paragraph',
          text: 'Enforcement outcomes on arrival are a matter for the importing country and can be severe, since the pest is at the border rather than in a report. What a country does with non-compliant packaging — and what it requires of the consignment resting on it — is set by that country’s law and its NPPO, and it is not stated here. Because adoption and enforcement details differ, the applicable requirement is always the importing country’s, not the standard’s in the abstract.',
        },
      ],
    },
    {
      id: 'boundaries',
      heading: 'What it does not cover',
      body: [
        {
          type: 'list',
          items: [
            'Not the goods — ISPM 15 says nothing about the cargo the packaging carries',
            'Not a phytosanitary certificate — the mark is not a certificate and does not replace one where a consignment needs one',
            'Not a quality standard for pallets — it addresses pest risk, not strength, dimensions, or fitness for purpose',
            'Not a guarantee of admissibility — packaging compliance is one requirement among many',
            'Not self-executing — it applies through national requirements, which differ',
          ],
        },
        {
          type: 'paragraph',
          text: 'One more distinction matters for agricultural shippers specifically. A consignment of plants or plant products typically needs a phytosanitary certificate for the goods and compliant packaging under the wood-packaging rules; these are two separate requirements assessed on different bases. Satisfying either one says nothing about the other.',
        },
      ],
    },
  ],
  standardBody:
    'International Plant Protection Convention (IPPC) — adopted by the Commission on Phytosanitary Measures; secretariat hosted by FAO',
  standardIdentifier:
    'ISPM 15 — Regulation of wood packaging material in international trade',
  edition:
    'Edition not stated here — ISPM 15 has been revised since its original adoption, including revisions to its annexes on treatments and marking. Verify the current revision against the IPPC’s official publication, and note that a country’s national requirement may reference a particular revision.',
  jurisdiction:
    'Global. Adopted very widely into national phytosanitary requirements, but the standard itself regulates nothing; the operative requirement is the importing country’s national measure.',
  legalStatus: 'voluntary',
  scopeSummary:
    'Phytosanitary measures for wood packaging material made of raw wood — including pallets, crating, boxes, drums, dunnage, and bracing — moving in international trade, to reduce the risk of introducing and spreading quarantine pests associated with such wood. In scope terms the standard addresses approved treatments, the mark applied to treated material, and the authorisation and supervision of producers and treatment providers by national plant protection organisations. Treatment parameters, mark design, and exemptions are set out in the standard and its annexes and are not reproduced here.',
  conformityAssessment:
    'Treatment and marking by facilities authorised and supervised by a national plant protection organisation, with verification at the border by the importing country’s NPPO. The mark on the material is the mechanism by which treatment is evidenced; it is not a certificate and is not issued per consignment. The IPPC operates no authorisation, marking, or inspection scheme itself.',
  assessedBy:
    'National plant protection organisations — authorising and supervising treatment providers and marking in the exporting country, and verifying compliance at the border in the importing country.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what ISPM 15 covers and why wood packaging is regulated. It reproduces no provision of the standard or its annexes.',
    'No treatment type, temperature, duration, concentration, dimension, mark design, or exemption is stated here. These are set out in the standard and its annexes and are revised; obtain them from the official text.',
    'ISPM 15 is published under the IPPC with FAO. Work from the official text in the revision in force.',
    'Whether and how any country has adopted ISPM 15, what it requires, and what it does with non-compliant material are national matters and are not stated here.',
    'AgricultureID is not a plant protection organisation, treatment provider, certification body, or competent authority, authorises nobody, and confers no phytosanitary status or recognition.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'phytosanitary-certification-system' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'phytosanitary-certificate' },
    { type: 'trade-concept', slug: 'packing-list' },
    { type: 'trade-concept', slug: 'non-tariff-measure' },
  ],
  sourceReferences: [
    {
      sourceId: 'ippc',
      citedFor:
        'The scope of ISPM 15, the pest risk associated with wood packaging material, and the treatment-and-marking mechanism',
    },
    {
      sourceId: 'eppo',
      citedFor:
        'Forest pest risk context and the significance of wood packaging as a pathway',
    },
    {
      sourceId: 'usda-aphis',
      citedFor:
        'National implementation context for wood packaging requirements at import',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global in practice through very wide national adoption, but requirements, exemptions, and enforcement responses differ by country. The applicable rule is the importing country’s, not the standard in the abstract.',
  limitations: [
    'A description of what the standard addresses, not the standard, and not phytosanitary or compliance advice.',
    'No treatments, parameters, mark specifications, dimensions, or exemptions are reproduced; consult the official text and the importing country’s NPPO.',
    'Compliance of packaging is one requirement among many and does not make a consignment admissible; the goods carry their own requirements.',
    'National adoption, exemptions, and the consequences of non-compliance vary by country and are not described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'ISPM 15 Wood Packaging: What the Standard Covers',
    description:
      'What ISPM 15 addresses, why wood packaging is a pest pathway that reaches every trader, how treatment and marking work, and what the standard does not cover.',
    keywords: [
      'ISPM 15',
      'wood packaging material',
      'pallet treatment',
      'ISPM 15 mark',
      'wood packaging pest risk',
    ],
  },
  structuredData: { article: true },
};
