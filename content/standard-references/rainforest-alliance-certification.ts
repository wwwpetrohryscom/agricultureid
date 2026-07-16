import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const rainforestAllianceCertification: StandardReferenceContent = {
  id: 'standard-reference-rainforest-alliance-certification',
  slug: 'rainforest-alliance-certification',
  contentType: 'standard-reference',
  title: 'Rainforest Alliance Certification',
  alternativeNames: [
    'Rainforest Alliance',
    'Sustainable Agriculture Standard',
    'RA certification',
    'UTZ',
  ],
  category: 'Certification scheme',
  subcategory: 'Sustainability',
  standardClass: 'certification-scheme',
  standardDomain: 'sustainability',
  summary:
    'Rainforest Alliance certification is a voluntary sustainability scheme covering environmental, social, and economic practice in agricultural production. Its scope is deliberately broad — which is its strength as an assurance model and the reason a single seal carries an unusually heavy interpretive load.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Rainforest Alliance operates a sustainability certification scheme for agricultural production, applied principally in tropical commodities such as coffee, cocoa, tea, bananas, and other fruit. Its standard addresses environmental, social, and economic dimensions together rather than treating them as separate concerns — forest and ecosystem conservation, farm management, working conditions, and the economic circumstances of producers all sit within one framework.',
    },
    {
      type: 'paragraph',
      text: 'The organisation as it exists today is the product of a merger with UTZ, another significant certification programme, which brought two overlapping schemes into one. That history matters for anyone reading older material: certified product and documentation may reference either heritage programme, and the scheme has issued its own standard since. It is one of the more prominent sustainability seals on consumer packaging worldwide.',
    },
  ],
  keyFacts: [
    {
      label: 'Scheme owner',
      value: 'Rainforest Alliance',
    },
    {
      label: 'History',
      value:
        'Formed by merger with UTZ, bringing two certification programmes together',
    },
    {
      label: 'Standard',
      value:
        'Sustainable Agriculture Standard, covering farm and supply-chain requirements',
    },
    {
      label: 'Dimensions',
      value: 'Environmental, social, and economic, addressed together',
    },
    {
      label: 'Typical commodities',
      value: 'Coffee, cocoa, tea, bananas, and other tropical products',
    },
    {
      label: 'Legal status',
      value: 'Voluntary — a private scheme with no legal force anywhere',
    },
    {
      label: 'Assessed by',
      value: 'Authorised third-party certification bodies, through audit',
    },
  ],
  sections: [
    {
      id: 'what-it-covers',
      heading: 'What the standard covers',
      body: [
        {
          type: 'paragraph',
          text: 'In scope terms the Sustainable Agriculture Standard addresses farm management and the systems a producer or group operates; environmental matters including forest and ecosystem conservation, biodiversity, water, and soil; social matters including working conditions and the rights and treatment of workers and communities; and economic and commercial aspects of production and the supply chain. It applies both to farms — individually or as certified groups — and to the supply-chain actors who handle certified product.',
        },
        {
          type: 'paragraph',
          text: 'The scheme uses a group certification route, which is the mechanism by which large numbers of smallholders can be certified: a group management entity operates an internal management system, and the certification body audits that system alongside a sample of member farms. As with every group certification model, the credibility of the outcome rests heavily on the quality of the internal system rather than on the sample of farms alone.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Breadth is the design and the difficulty',
          text: 'Addressing environment, labour, and economics in one standard reflects how they actually interact on a farm. It also means the seal compresses a great deal into a single mark, and a reader cannot tell from the seal which of those dimensions mattered most in any given certification.',
        },
      ],
    },
    {
      id: 'how-certified-product-moves',
      heading: 'How certified product moves through the chain',
      body: [
        {
          type: 'paragraph',
          text: 'Certifying a farm is only half the problem. For a claim to reach a consumer, the certified product — or the claim attached to it — has to survive processing, blending, shipping, and manufacture, and for commodities like cocoa and coffee that chain is long and heavily mixed. The scheme therefore operates supply-chain requirements and traceability arrangements governing how certified volumes are tracked and how claims may be made.',
        },
        {
          type: 'paragraph',
          text: 'This is where the chain-of-custody models become important, and where consumer understanding most often diverges from what a seal actually asserts. Where a scheme permits mass balance, a certified volume can be purchased and accounted for without the physical certified material necessarily being in the specific package the seal appears on. That is a legitimate and widely used model — it is how certified demand reaches producers in chains that physically cannot segregate — but the claim it supports is about volumes purchased, not about the contents of a bar. The scheme’s own rules define which models apply to which products and how claims must be worded, and those rules are not reproduced here.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'A seal is not a self-explanatory claim',
          text: 'What a sustainability seal asserts depends on the scheme’s claims rules and the chain-of-custody model in use. Reading a seal as "everything in this package was grown on a certified farm" is an assumption, not a given.',
        },
      ],
    },
    {
      id: 'what-it-does-not-do',
      heading: 'What certification does not do',
      body: [
        {
          type: 'list',
          items: [
            'Not a legal permission — market access is set by law, not by a certificate',
            'Not a food-safety or residue claim — food law applies to certified product identically',
            'Not an organic claim — organic is a separate, and in many markets regulated, claim',
            'Not a quality grade — certified product is graded on ordinary commercial standards',
            'Not a price guarantee — the scheme’s commercial mechanisms differ from Fairtrade’s and are its own',
            'Not a guarantee of outcomes — an audit is periodic evidence of practice, not proof of impact',
          ],
        },
        {
          type: 'paragraph',
          text: 'The last point carries the most weight and applies to every sustainability scheme in this section. Certification evidences that practices meeting a standard were demonstrated at audit. Whether those practices produce the environmental and social outcomes the scheme aims at is a separate empirical question, studied with mixed and context-dependent results. AgricultureID describes what the scheme requires and takes no position on its effectiveness — those are different tasks, and conflating them is how a description turns quietly into an endorsement.',
        },
      ],
    },
  ],
  standardBody: 'Rainforest Alliance',
  standardIdentifier:
    'Rainforest Alliance Sustainable Agriculture Standard, with farm and supply-chain requirements',
  edition:
    'Edition not stated here — verify against the scheme’s current published edition. The Rainforest Alliance has issued its standard in versions with defined transition arrangements, and the scheme’s history includes the merger with UTZ, so older certified product and documentation may reference predecessor programmes.',
  jurisdiction:
    'Global. A private voluntary scheme applied wherever producers and supply-chain actors seek certification; it creates no legal rights or obligations in any jurisdiction and displaces no national law.',
  legalStatus: 'voluntary',
  scopeSummary:
    'A voluntary sustainability certification scheme for agricultural production and the supply chains carrying certified product. In scope terms the standard addresses farm management systems; environmental matters including forest and ecosystem conservation, biodiversity, water, and soil; social matters including working conditions and the rights and treatment of workers and communities; and economic and commercial aspects of production. It provides for individual and group certification of farms, and for supply-chain requirements governing traceability of certified volumes and the claims that may be made.',
  conformityAssessment:
    'Third-party certification by audit, conducted by certification bodies authorised by the scheme. Farms may be certified individually or as groups, in which case a group management entity’s internal management system is audited alongside a sample of member farms. Supply-chain actors handling certified product are subject to their own requirements. Audit frequency, certificate validity, sampling rates, and fees are set by the scheme and are not stated here.',
  assessedBy:
    'Third-party certification bodies authorised by the Rainforest Alliance. The scheme owner sets requirements and oversees certification bodies rather than auditing producers itself.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page summarises what Rainforest Alliance certification covers from public scope material. It reproduces no requirement, criterion, indicator, or provision of the scheme’s standard or its supply-chain rules.',
    'No version number, effective date, transition deadline, audit frequency, certificate validity period, sampling rate, premium, or fee is stated here. These are scheme rules, are revised, and must be obtained from the Rainforest Alliance.',
    'The scheme’s standards, rules, and seal are the property of the Rainforest Alliance and are subject to its terms. Work from the current published edition.',
    'Which chain-of-custody models apply to which products, and how claims may be worded, are matters for the scheme’s own claims and traceability rules and are not stated here. A seal’s meaning depends on those rules.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner, is not affiliated with the Rainforest Alliance, and confers no certification or recognition. Nothing here indicates whether any producer, supply-chain actor, or product is certified.',
    'AgricultureID takes no position on whether certification achieves its environmental or social objectives; that is a contested empirical question outside the scope of a scope summary.',
  ],
  applicableCommodityClasses: ['beverage-crop', 'fruit', 'nut', 'spice'],
  relatedStandards: [
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'fairtrade-standards' },
    { type: 'standard-reference', slug: 'globalgap-integrated-farm-assurance' },
    { type: 'standard-reference', slug: 'iseal-codes-of-good-practice' },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'third-party-audit' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
  ],
  sourceReferences: [
    {
      sourceId: 'iseal',
      citedFor:
        'Good-practice framing for voluntary sustainability standards, their assurance systems, chain-of-custody models, and claims',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Context on voluntary sustainability standards in tropical commodity trade',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Production and sustainability context for the tropical commodities the scheme covers',
    },
    {
      sourceId: 'oecd-agriculture',
      citedFor:
        'Context for sustainability and due-diligence expectations in agricultural supply chains',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global, with certified production concentrated in tropical producing origins and consumer demand for the seal concentrated in European and North American markets.',
  limitations: [
    'A scope summary of a voluntary private scheme, not the standard, and not certification or sustainability advice.',
    'No requirements, criteria, indicators, versions, audit frequencies, or fees are given — these belong to the scheme and are revised.',
    'What a seal asserts depends on the scheme’s claims rules and the chain-of-custody model in use; it is not necessarily a statement about the physical contents of a package.',
    'Whether certification achieves its environmental or social objectives is contested in the research literature; no position is taken here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Rainforest Alliance Certification: What the Seal Claims',
    description:
      'What Rainforest Alliance certification covers across environmental, social, and economic dimensions, and what the seal does not assert.',
    keywords: [
      'Rainforest Alliance certification',
      'Sustainable Agriculture Standard',
      'UTZ',
      'sustainability certification',
      'mass balance claims',
    ],
  },
  structuredData: { article: true },
};
