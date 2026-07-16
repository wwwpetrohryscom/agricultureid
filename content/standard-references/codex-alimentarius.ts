import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const codexAlimentarius: StandardReferenceContent = {
  id: 'standard-reference-codex-alimentarius',
  slug: 'codex-alimentarius',
  contentType: 'standard-reference',
  title: 'Codex Alimentarius',
  alternativeNames: [
    'Codex',
    'Codex standards',
    'Codex Alimentarius Commission',
    'FAO/WHO food standards',
  ],
  category: 'Standard',
  subcategory: 'Food safety framework',
  standardClass: 'standard',
  standardDomain: 'food-safety',
  summary:
    'Codex Alimentarius is the joint FAO/WHO collection of international food standards, codes of practice, and guidelines. It binds nobody by itself — yet because the WTO SPS Agreement names it as the international benchmark for food safety, it is voluntary in form and consequential in effect.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Codex Alimentarius Commission was established jointly by the Food and Agriculture Organization and the World Health Organization to develop international food standards protecting consumer health and ensuring fair practices in the food trade. What it produces is not one document but a library: commodity standards, hygiene codes of practice, guidelines, maximum residue limits, and contaminant provisions, each negotiated by member governments through subject committees and adopted individually by the Commission.',
    },
    {
      type: 'paragraph',
      text: 'The most useful thing to understand about Codex is its legal position, because it is routinely misdescribed in both directions. Codex is not a regulator: it has no inspectors, issues no certificates, and enforces nothing. Nor is it merely advisory in practice — the WTO Agreement on the Application of Sanitary and Phytosanitary Measures treats Codex texts as the reference point against which national food-safety measures are judged. Both halves of that description are load-bearing, and dropping either one produces a wrong answer.',
    },
  ],
  keyFacts: [
    {
      label: 'Body',
      value:
        'Codex Alimentarius Commission, established jointly by FAO and WHO',
    },
    {
      label: 'What it produces',
      value:
        'Commodity standards, codes of practice, guidelines, maximum residue limits, contaminant provisions',
    },
    {
      label: 'Legal status',
      value: 'Voluntary — force comes only from national or regional adoption',
      note: 'But referenced by the WTO SPS Agreement as the international benchmark',
    },
    {
      label: 'Principal concern',
      value: 'Food safety, hygiene, contaminants, residues, and labelling',
    },
    {
      label: 'Not',
      value:
        'A grading system, a certifier, a regulator, or an inspection authority',
    },
    {
      label: 'Structure',
      value:
        'A library of individually adopted texts, not a single dated edition',
    },
    {
      label: 'Scientific basis',
      value:
        'Independent expert advice convened by FAO and WHO informs the texts',
    },
  ],
  sections: [
    {
      id: 'what-codex-covers',
      heading: 'What Codex covers',
      body: [
        {
          type: 'paragraph',
          text: 'Codex subject matter is overwhelmingly public health and honest trading. Its committees address food hygiene, pesticide residues, veterinary drug residues, contaminants, food additives, food labelling, methods of analysis and sampling, food import and export inspection and certification systems, and nutrition — alongside committees devoted to particular commodity groups such as fats and oils, cereals, fresh fruits and vegetables, or milk products.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Commodity standards',
              description:
                'What a named food must be in composition and identity to bear that name. This is the closest Codex comes to describing quality, and even here the question is naming rather than commercial ranking.',
            },
            {
              term: 'Codes of practice',
              description:
                'How food should be handled through the chain to control an identified hazard. Descriptive of practice rather than of a product attribute.',
            },
            {
              term: 'Maximum residue limits and contaminant provisions',
              description:
                'Numerical provisions for specific substances in specific commodities, adopted individually and revised individually. None are reproduced on AgricultureID.',
            },
            {
              term: 'Guidelines and general texts',
              description:
                'Cross-cutting texts on labelling, analysis and sampling, hygiene principles, and inspection and certification systems.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'There is no single "Codex edition"',
          text: 'Codex is a living collection whose texts are adopted and revised one at a time, each with its own scope and revision history. "Codex says" is close to meaningless as a citation — the operative unit is a named text, in the revision in force.',
        },
      ],
    },
    {
      id: 'why-voluntary-matters',
      heading: 'Why a voluntary text carries real weight',
      body: [
        {
          type: 'paragraph',
          text: 'If Codex binds nobody, its influence needs explaining, and the explanation is trade law. Under the WTO SPS Agreement, a member whose sanitary measures conform to the relevant international standard — which for food safety means Codex — is presumed consistent with its SPS obligations. A member imposing measures stricter than the international standard may be asked to justify them on scientific grounds. Codex is therefore the yardstick against which national food-safety measures are assessed in trade disputes.',
        },
        {
          type: 'paragraph',
          text: 'This gives a voluntary text substantial practical gravity without making it law anywhere. It also explains why Codex negotiations are contested: members are not merely writing advice, they are setting the reference point their own measures will be measured against. The practical consequence for a trader is that Codex conformity is a useful starting assumption and never an answer — the operative rule for a consignment is the law of the importing country, which may follow Codex, exceed it, or ignore it entirely.',
        },
      ],
    },
    {
      id: 'conformity-and-who-assesses',
      heading: 'Who assesses conformity',
      body: [
        {
          type: 'paragraph',
          text: 'Nobody assesses conformity to Codex as such, because Codex conformity is not a status that exists. The Commission conducts no inspection, operates no scheme, accredits nobody, and issues no certificate or mark. Where a Codex provision is enforced against a consignment, it is enforced because a national or regional authority has adopted it into its own law, and it is that authority — or a body it designates — that inspects, samples, and determines admissibility.',
        },
        {
          type: 'paragraph',
          text: 'This is why a claim that a product is "Codex certified" or "Codex approved" should be treated as a category error rather than a credential. There is no such certification, and no body could confer it. Codex guidance on food import and export inspection and certification systems addresses how governments should design their own systems; it does not create a Codex certificate.',
        },
      ],
    },
    {
      id: 'what-codex-does-not-cover',
      heading: 'What Codex does not cover',
      body: [
        {
          type: 'paragraph',
          text: "The boundaries are the most useful part of this page. Codex does not grade commodities commercially: the dense grading landscapes of coffee, grain, or fresh produce are maintained by national bodies, standards organisations, industry associations, and contracts, and none of that is Codex. It does not address plant health, which is the IPPC's remit, nor animal health, which is WOAH's. It does not address sustainability, labour conditions, or organic production. It sets no tariff, origin, or customs rule.",
        },
        {
          type: 'list',
          items: [
            'Commercial grade and quality ranking — set by grading standards, contracts, and national bodies, not Codex',
            'Plant health and pest risk — the IPPC and its ISPMs',
            'Animal health and disease status — the WOAH codes',
            'Organic, sustainability, and labour claims — separate regulations and voluntary schemes',
            'Enforcement, inspection, and certification — national and regional authorities',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Safety and quality are different questions',
          text: 'A food fully consistent with every applicable Codex provision may still be commercially poor, and a high-grading lot is not thereby safe. Conformity with a safety provision is not a quality claim, and no grade can be derived from it.',
        },
      ],
    },
  ],
  standardBody:
    'Codex Alimentarius Commission — the joint standards body of the Food and Agriculture Organization (FAO) and the World Health Organization (WHO)',
  standardIdentifier:
    'Codex Alimentarius — the collected standards, codes of practice, guidelines, and recommendations adopted by the Commission',
  edition:
    'Edition not stated here — Codex is a living collection whose texts are adopted and revised individually rather than issued as a single dated edition. Verify the current revision of the specific named text against the Commission’s official publication.',
  jurisdiction:
    'Global reference. Codex texts have no direct legal force in any jurisdiction; they apply only where a country or region adopts them into its own law.',
  legalStatus: 'voluntary',
  scopeSummary:
    'International food standards addressing consumer health protection and fair practices in the food trade: food hygiene, pesticide and veterinary drug residues, contaminants, additives, labelling, methods of analysis and sampling, inspection and certification systems, nutrition, and compositional standards for named foods. Scope is set text by text rather than by a single overarching document.',
  conformityAssessment:
    'None at the Codex level. Codex operates no conformity-assessment mechanism: there is no Codex audit, inspection, certificate, or mark. Assessment happens only where a national or regional authority has adopted a Codex provision into law, and is then conducted under that law against that authority’s own procedures.',
  assessedBy:
    'National or regional competent authorities that have adopted a given Codex text into law, or bodies they designate. The Codex Alimentarius Commission itself assesses nothing.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page describes what Codex Alimentarius is, what it covers, and how it acquires force. It reproduces no Codex standard, code of practice, guideline, maximum residue limit, or contaminant provision, and states no numerical limit.',
    'Codex texts are copyrighted publications of FAO and WHO. Work from the official text of the specific named standard, in the revision in force.',
    'No edition or revision date is asserted here. Codex has no single edition; each text carries its own adoption and revision history.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner, and confers no certification, accreditation, or recognition in relation to Codex. No such certification exists in any case.',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'codex-food-hygiene-principles' },
    { type: 'standard-reference', slug: 'codex-maximum-residue-limits' },
    { type: 'standard-reference', slug: 'haccp' },
    { type: 'standard-reference', slug: 'ippc-phytosanitary-standards' },
    { type: 'standard-reference', slug: 'unece-fresh-produce-standards' },
    { type: 'standard-reference', slug: 'woah-terrestrial-animal-health-code' },
    { type: 'standard-reference', slug: 'wto-sps-agreement' },
    { type: 'standard-reference', slug: 'wto-tbt-agreement' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'sanitary-certificate' },
  ],
  sourceReferences: [
    {
      sourceId: 'codex',
      citedFor:
        'The Codex Alimentarius Commission’s mandate, structure, and the scope of the texts it adopts',
    },
    {
      sourceId: 'fao',
      citedFor:
        'The FAO/WHO basis of the Commission and the role of Codex in international food standards',
    },
    {
      sourceId: 'wto',
      citedFor:
        'The status of Codex as the reference international standard under the SPS Agreement',
    },
    {
      sourceId: 'efsa',
      citedFor:
        'Risk-assessment context for the food contaminants and residues Codex texts address',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global reference with no direct legal effect anywhere. Practical applicability depends entirely on adoption by each national or regional authority, which varies widely in extent and in fidelity to the Codex text.',
  limitations: [
    'An explanatory reference to a standards framework, not a summary of any specific Codex text, and not legal or regulatory advice.',
    'No Codex limits, residue values, or provisions are reproduced; consult the specific official text and, decisively, the applicable national law.',
    'Codex addresses food safety, hygiene, and honest labelling rather than commercial grading; it assigns no grades to any commodity.',
    'The relationship between Codex and any particular country’s law is not described here and cannot be generalised — adoption ranges from wholesale incorporation to none.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Codex Alimentarius: Scope, Legal Status, and Limits',
    description:
      'What Codex Alimentarius covers, why a voluntary FAO/WHO standard carries weight through the WTO SPS Agreement, and what Codex does not cover.',
    keywords: [
      'Codex Alimentarius',
      'FAO WHO food standards',
      'Codex legal status',
      'SPS Agreement',
      'international food standards',
    ],
  },
  structuredData: { article: true },
};
