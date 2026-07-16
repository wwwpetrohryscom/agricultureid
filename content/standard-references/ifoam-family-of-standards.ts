import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const ifoamFamilyOfStandards: StandardReferenceContent = {
  id: 'standard-reference-ifoam-family-of-standards',
  slug: 'ifoam-family-of-standards',
  contentType: 'standard-reference',
  title: 'IFOAM Family of Standards',
  alternativeNames: [
    'IFOAM Family of Standards',
    'IFOAM Organics International',
    'Organic Guarantee System',
  ],
  category: 'Standard',
  subcategory: 'Organic',
  standardClass: 'standard',
  standardDomain: 'organic',
  summary:
    'The IFOAM Family of Standards is a collection of organic standards assessed as meeting a common international benchmark. It solves a problem no single regulation can: it gives the fragmented world of organic definitions a shared reference point, without being law anywhere.',
  introduction: [
    {
      type: 'paragraph',
      text: 'IFOAM Organics International is the global umbrella body for the organic movement. Its Organic Guarantee System includes a mechanism for assessing organic standards against a common set of requirements, and standards found to meet that benchmark are listed in what is called the Family of Standards. The benchmark itself expresses, in general terms, the common objectives and requirements the organic movement regards as constituting organic production.',
    },
    {
      type: 'paragraph',
      text: 'The reason this exists is the fragmentation described on the organic certification page. Every regulating jurisdiction defines organic in its own instrument, and dozens of private standards do the same, so "organic" is not one thing globally. IFOAM’s contribution is a reference point against which those many definitions can be assessed — a way to say that a given standard is recognisably organic in the international sense, even though no two are identical and none is universally recognised.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'IFOAM Organics International — the global umbrella body for the organic movement',
    },
    {
      label: 'Nature',
      value: 'A benchmark plus a listing of standards assessed against it',
    },
    {
      label: 'Part of',
      value: 'IFOAM’s Organic Guarantee System',
    },
    {
      label: 'Legal status',
      value:
        'Voluntary — a private benchmark, with no legal force in any jurisdiction',
    },
    {
      label: 'Assesses',
      value: 'Organic standards, not farms, operators, or products',
    },
    {
      label: 'Confers',
      value:
        'Listing in the Family of Standards — not certification and not market access',
    },
    {
      label: 'Not',
      value: 'A regulator, and not a substitute for a market’s own organic law',
    },
  ],
  sections: [
    {
      id: 'what-it-assesses',
      heading: 'What is assessed, and what is not',
      body: [
        {
          type: 'paragraph',
          text: 'This is the point on which the Family of Standards is most misunderstood, so it is worth being blunt. The assessment is of standards, not of anyone who follows them. A standard owner submits its standard, IFOAM assesses it against the common benchmark, and if it qualifies the standard is listed. No farm is inspected, no operator is audited, no product is certified, and no certificate is issued to any producer.',
        },
        {
          type: 'paragraph',
          text: 'What that means practically: a producer certified to a standard in the Family holds certification from whoever certified them, under that standard, and the listing tells you something about the standard they were certified to — that it has been assessed as meeting an international organic benchmark. That is genuinely useful information about the standard. It is not a second certification, and it adds nothing to the producer’s own certificate.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'There is no such thing as IFOAM certification of a farm',
          text: 'IFOAM assesses standards and, separately within its guarantee system, accredits certification bodies. It does not certify producers, and a claim of "IFOAM certified" applied to a farm or a product describes nothing IFOAM does.',
        },
      ],
    },
    {
      id: 'why-a-benchmark-helps',
      heading: 'Why a benchmark is useful without being law',
      body: [
        {
          type: 'paragraph',
          text: 'The value of a common reference in a fragmented field is that it gives everyone a shared vocabulary for comparison. A buyer encountering an unfamiliar national organic standard has some basis for assessing it. A standard owner in a country with no organic regulation has a target to write towards and a way to demonstrate credibility. And discussions of equivalence between authorities have a technical reference point that belongs to none of the parties.',
        },
        {
          type: 'paragraph',
          text: 'But the benchmark is private and carries no legal weight. It does not oblige any regulator to accept anything, and listing in the Family does not open any regulated market. A standard can be listed and still not permit the organic claim in the EU or the United States, because those markets recognise standards through their own legal arrangements and are under no obligation to consider IFOAM’s assessment. Confusing the international benchmark with market access is the practical error this page exists to prevent.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Listing is not market access',
          text: 'A standard in the Family of Standards has been assessed as meeting an international organic benchmark. Whether product certified to it may be sold as organic in any given market is determined entirely by that market’s own law and recognition arrangements.',
        },
      ],
    },
    {
      id: 'the-wider-system',
      heading: 'Where it sits in IFOAM’s wider system',
      body: [
        {
          type: 'paragraph',
          text: 'The Family of Standards is one component of IFOAM’s Organic Guarantee System, which also encompasses the underlying principles of organic agriculture the movement has articulated, and arrangements for accrediting certification bodies operating in the organic sector. IFOAM has additionally been a significant advocate for participatory guarantee systems — peer-review-based assurance models used chiefly in local and smallholder markets where third-party certification is disproportionately costly.',
        },
        {
          type: 'paragraph',
          text: 'That last point is worth noting because it marks a genuine philosophical position rather than an administrative one. Third-party certification is expensive, and its cost falls hardest on the smallest producers, which means a rigorous global assurance model can systematically exclude exactly the farmers the organic movement originated with. Participatory guarantee systems are an attempt to answer that, and they are generally not recognised by the regulated export markets — which is a real trade-off rather than a defect to be explained away.',
        },
      ],
    },
  ],
  standardBody: 'IFOAM Organics International',
  standardIdentifier:
    'IFOAM Family of Standards — organic standards assessed against IFOAM’s common international benchmark within the Organic Guarantee System',
  edition:
    'Edition not stated here — the benchmark documents within IFOAM’s Organic Guarantee System are revised, and the Family of Standards listing itself changes as standards are added, reassessed, or removed. Verify the current benchmark documents and the current listing against IFOAM directly.',
  jurisdiction:
    'Global. A private international benchmark with no legal force in any jurisdiction; it obliges no regulator and confers no market access.',
  legalStatus: 'voluntary',
  scopeSummary:
    'A private international benchmark expressing the common objectives and requirements regarded as constituting organic production, together with a listing of organic standards assessed as meeting it. In scope terms the mechanism covers assessment of submitted organic standards against the benchmark and their listing in the Family of Standards. It sits within IFOAM’s wider Organic Guarantee System, which also encompasses the principles of organic agriculture and arrangements for accrediting certification bodies. The assessment addresses standards only — never farms, operators, or products.',
  conformityAssessment:
    'Assessment of standards against a benchmark, not certification of operators. A standard owner submits its standard, IFOAM assesses it against the common requirements, and qualifying standards are listed in the Family of Standards. Separately, IFOAM’s guarantee system provides for accreditation of certification bodies operating in the organic sector. No producer, operation, or product is certified by IFOAM at any point.',
  assessedBy:
    'IFOAM Organics International, assessing submitted standards against its benchmark. Producers are certified — where they are certified at all — by certification bodies under the individual standard concerned, not by IFOAM.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what the IFOAM Family of Standards is and what its assessment covers. It reproduces no benchmark requirement, no provision of any listed standard, and no assessment criterion.',
    'No listing of which standards are in the Family is given here. The listing changes as standards are added, reassessed, or removed, and must be verified against IFOAM directly.',
    'IFOAM’s benchmark and guarantee-system documents are publications of IFOAM Organics International and are revised. No version or date is asserted.',
    'Listing in the Family of Standards is an assessment of a standard against a private international benchmark. It confers no certification on any producer or product, and it confers no market access — regulated markets recognise standards through their own legal arrangements.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner, is not affiliated with IFOAM, and confers no organic status, certification, or recognition.',
  ],
  relatedStandards: [
    {
      type: 'standard-reference',
      slug: 'accreditation-and-certification-bodies',
    },
    { type: 'standard-reference', slug: 'eu-organic-regulation' },
    { type: 'standard-reference', slug: 'iseal-codes-of-good-practice' },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'usda-national-organic-program' },
  ],
  relatedTradeConcepts: [{ type: 'trade-concept', slug: 'non-tariff-measure' }],
  sourceReferences: [
    {
      sourceId: 'ifoam',
      citedFor:
        'The Family of Standards, the Organic Guarantee System, the common international benchmark for organic standards, and IFOAM’s role as an umbrella body rather than a certifier',
    },
    {
      sourceId: 'iseal',
      citedFor:
        'Good-practice framing for benchmarking and the credibility of voluntary standards systems',
    },
    {
      sourceId: 'fao',
      citedFor:
        'International organic agriculture context and the fragmentation of organic definitions',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global as a benchmark. It has no legal effect in any jurisdiction, and listing does not permit an organic claim in any regulated market; each market’s own law governs that.',
  limitations: [
    'A description of a private international benchmark and listing mechanism, not any standard, and not certification or regulatory advice.',
    'No benchmark requirements, assessment criteria, or listed standards are reproduced; the listing changes and must be checked against IFOAM.',
    'The assessment covers standards only — no farm, operator, or product is certified by IFOAM, and "IFOAM certified" is not a claim that corresponds to anything.',
    'Listing confers no market access; whether product may be sold as organic in a market is determined by that market’s law and recognition arrangements.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'IFOAM Family of Standards: A Benchmark, Not a Certification',
    description:
      'What the IFOAM Family of Standards assesses, why a common organic benchmark matters in a fragmented field, and why listing confers no certification.',
    keywords: [
      'IFOAM Family of Standards',
      'IFOAM Organics International',
      'Organic Guarantee System',
      'organic benchmark',
      'organic equivalence',
    ],
  },
  structuredData: { article: true },
};
