import type { StandardReferenceContent } from '@/types/content';
import { STANDARD_SCOPE_DISCLAIMER } from '@/types/trade';

export const fairtradeStandards: StandardReferenceContent = {
  id: 'standard-reference-fairtrade-standards',
  slug: 'fairtrade-standards',
  contentType: 'standard-reference',
  title: 'Fairtrade Standards',
  alternativeNames: [
    'Fairtrade International standards',
    'FLO standards',
    'Fairtrade certification',
  ],
  category: 'Certification scheme',
  subcategory: 'Social and labour',
  standardClass: 'certification-scheme',
  standardDomain: 'social-labour',
  summary:
    'Fairtrade standards are a voluntary certification scheme addressing trading terms and producer organisation as much as production practice. What distinguishes them from every other scheme here is that they set conditions on the buyer — including price — rather than only on the farm.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fairtrade International sets the standards behind Fairtrade certification, with separate standards addressing different types of participant: small-scale producer organisations, situations involving hired labour, and traders. Certification against them is carried out by an independent certification body. The scheme covers a range of commodities in which smallholder producers face weak bargaining positions — coffee, cocoa, bananas, tea, sugar, and cotton prominent among them.',
    },
    {
      type: 'paragraph',
      text: 'Its structural distinction is worth grasping immediately, because it explains everything else about the scheme. Nearly every standard in this section governs the producer: how a farm is run, what it may apply, how it documents things. Fairtrade also governs the transaction. Its trader standard places obligations on buyers, and the scheme’s two signature mechanisms — a minimum price and a premium paid on top of the purchase price — are commitments made by the purchaser rather than practices carried out on the farm. Fairtrade is, in that sense, a standard about trade in a section otherwise full of standards about production.',
    },
  ],
  keyFacts: [
    {
      label: 'Scheme owner',
      value:
        'Fairtrade International (Fairtrade Labelling Organizations International)',
    },
    {
      label: 'Standard structure',
      value:
        'Separate standards for small-scale producer organisations, hired labour situations, and traders',
    },
    {
      label: 'Distinctive feature',
      value:
        'Obligations fall on buyers as well as producers, including on price',
    },
    {
      label: 'Signature mechanisms',
      value: 'A minimum price and a premium paid above the purchase price',
      note: 'No values are stated here — they are product- and origin-specific and are revised',
    },
    {
      label: 'Premium controlled by',
      value:
        'The producer organisation, which decides democratically how it is used',
    },
    {
      label: 'Legal status',
      value: 'Voluntary — a private scheme with no legal force anywhere',
    },
    {
      label: 'Assessed by',
      value: 'An independent certification body, through audit',
    },
  ],
  sections: [
    {
      id: 'the-two-mechanisms',
      heading: 'The minimum price and the premium',
      body: [
        {
          type: 'paragraph',
          text: 'The Fairtrade minimum price is a floor: where a market price falls below it, buyers of Fairtrade-certified product commit to pay the minimum instead. It is not a subsidy and not a guaranteed income — when the market sits above the minimum, the market price applies and the floor is simply inactive, which is the case for extended periods in some commodities. Its purpose is to cap downside exposure for producers in markets whose price swings are violent and outside their control.',
        },
        {
          type: 'paragraph',
          text: 'The Fairtrade premium is separate and works differently. It is an additional sum paid on top of whatever the purchase price is, and it goes to the producer organisation rather than to individual farmers as income. The organisation decides collectively how to spend it — commonly on shared infrastructure, services, or productive investment. The democratic control of that decision is itself part of the standard, which is why the scheme cares so much about how producer organisations are constituted and governed.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'No prices or premium values appear here',
          text: 'Minimum prices and premium levels are set per product, per origin, and sometimes per quality, and they are revised. AgricultureID states none of them. Obtain current values from Fairtrade International directly.',
        },
      ],
    },
    {
      id: 'what-the-standards-cover',
      heading: 'What the standards cover',
      body: [
        {
          type: 'paragraph',
          text: 'In scope terms the standards address, on the producer side, how producer organisations are constituted and governed, labour conditions including the treatment of workers where labour is hired, environmental practice in production, and the management of the premium. On the trader side they address the commercial obligations that make the scheme work: the commitments a buyer takes on when purchasing certified product, and the traceability that keeps certified product identifiable through the chain.',
        },
        {
          type: 'paragraph',
          text: 'The organisational requirements deserve emphasis because they are frequently mistaken for administrative overhead. A minimum price and a premium only reach producers if there is an organisation capable of receiving, holding, and deploying them, and accountable to its members for doing so. The scheme’s attention to democratic structure and governance is therefore not incidental to the economics — it is the mechanism through which the economics function at all.',
        },
      ],
    },
    {
      id: 'what-it-does-not-do',
      heading: 'What certification does not do',
      body: [
        {
          type: 'paragraph',
          text: 'The most important limit is one the scheme itself does not hide: certification does not guarantee that a producer sells their crop as Fairtrade. A producer organisation may be certified and still sell much of its output on conventional terms, because the certified terms apply only to the volume a buyer actually chooses to purchase as Fairtrade. Certified supply routinely exceeds Fairtrade demand in several commodities, which means certification confers eligibility rather than sales — and a producer bearing certification costs may see only a fraction of their crop benefit.',
        },
        {
          type: 'list',
          items: [
            'Not a guaranteed sale — the terms apply only to volumes actually bought as Fairtrade',
            'Not a quality claim — Fairtrade product is graded on ordinary commercial standards',
            'Not a food-safety or residue claim — food law applies identically',
            'Not an organic claim — organic is a separate certification, though the two are often held together',
            'Not a poverty measure — the standards address trading terms and organisation, not incomes generally',
            'Not a guarantee — an audit is periodic evidence, not continuous surveillance',
          ],
        },
        {
          type: 'paragraph',
          text: 'It is also worth stating plainly that the effectiveness of Fairtrade is a genuinely contested empirical question, studied extensively with mixed and context-dependent findings. AgricultureID takes no position on it. Describing what a scheme requires is a different task from evaluating whether it achieves its aims, and this page does only the first.',
        },
      ],
    },
  ],
  standardBody:
    'Fairtrade International (Fairtrade Labelling Organizations International)',
  standardIdentifier:
    'Fairtrade Standards — issued separately for small-scale producer organisations, hired labour situations, and traders, with product-specific standards',
  edition:
    'Edition not stated here — verify against the scheme’s current published editions. Fairtrade issues multiple standards, each versioned and revised on its own cycle, alongside separately revised minimum price and premium tables.',
  jurisdiction:
    'Global. A private voluntary scheme applied wherever producers and traders seek certification; it creates no legal rights or obligations in any jurisdiction and displaces no national law.',
  legalStatus: 'voluntary',
  scopeSummary:
    'A voluntary certification scheme addressing the terms on which certified products are traded and the organisation of the producers who supply them. In scope terms the standards cover the constitution and democratic governance of small-scale producer organisations; labour conditions and worker treatment in hired-labour situations; environmental practice in production; the management and democratic control of the Fairtrade premium; and, on the trader side, the commercial obligations of buyers of certified product and the traceability of certified product through the chain. Uniquely among the schemes described here, obligations extend to buyers, including a minimum price and a premium.',
  conformityAssessment:
    'Third-party certification by audit, conducted by an independent certification body against the applicable Fairtrade standard for the type of participant. Both producer organisations and the traders who buy certified product are subject to certification requirements, which is what allows the scheme to enforce obligations on the buyer side. Audit frequency, certificate validity, and fees are set by the scheme and its certification body and are not stated here.',
  assessedBy:
    'An independent certification body operating for the scheme, auditing producer organisations and traders. Fairtrade International sets the standards; certification is carried out separately from standard-setting.',
  reproductionLimitations: [
    STANDARD_SCOPE_DISCLAIMER,
    'This page summarises what the Fairtrade standards address and how the minimum price and premium function. It reproduces no requirement, criterion, or provision of any Fairtrade standard.',
    'No minimum price, premium value, differential, audit frequency, certificate validity period, or fee is stated here. Prices and premiums are set per product, per origin, and sometimes per quality, are revised, and must be obtained from Fairtrade International directly.',
    'Fairtrade standards, price tables, and the Fairtrade marks are the property of Fairtrade International and are subject to its terms. Work from the current published standards.',
    'No version number or effective date is asserted for any Fairtrade standard. Each is versioned and revised on its own cycle.',
    'AgricultureID is not a certification body, accreditation body, or scheme owner, is not affiliated with Fairtrade International, and confers no certification or recognition. Nothing here indicates whether any producer, organisation, trader, or product is certified.',
    'AgricultureID takes no position on whether Fairtrade certification achieves its objectives; that is a contested empirical question outside the scope of a scope summary.',
  ],
  applicableCommodityClasses: [
    'beverage-crop',
    'fruit',
    'sugar-crop',
    'fibre',
    'nut',
    'spice',
  ],
  relatedStandards: [
    { type: 'standard-reference', slug: 'chain-of-custody-certification' },
    { type: 'standard-reference', slug: 'iseal-codes-of-good-practice' },
    { type: 'standard-reference', slug: 'organic-certification' },
    { type: 'standard-reference', slug: 'rainforest-alliance-certification' },
    { type: 'standard-reference', slug: 'third-party-audit' },
  ],
  relatedTradeConcepts: [
    { type: 'trade-concept', slug: 'non-tariff-measure' },
    { type: 'trade-concept', slug: 'country-of-origin-and-provenance' },
  ],
  sourceReferences: [
    {
      sourceId: 'fairtrade',
      citedFor:
        'The structure of the Fairtrade standards, the minimum price and premium mechanisms, and the scheme’s certification model',
    },
    {
      sourceId: 'iseal',
      citedFor:
        'Good-practice framing for voluntary sustainability standards, their assurance systems, and claims',
    },
    {
      sourceId: 'itc',
      citedFor:
        'Context on voluntary sustainability standards in commodity trade',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Smallholder production and commodity market context for the crops the scheme covers',
    },
  ],
  updatedAt: '2026-07-16',
  reviewedAt: '2026-07-16',
  geographicScope:
    'Global. Certified production is concentrated in smallholder-dominated origins, and Fairtrade demand is concentrated in European and North American consumer markets; the imbalance between certified supply and Fairtrade demand varies by commodity.',
  limitations: [
    'A scope summary of a voluntary private scheme, not the standards, and not certification or commercial advice.',
    'No minimum prices, premium values, requirements, audit frequencies, or fees are given — these belong to the scheme and are revised.',
    'Certification confers eligibility to sell on Fairtrade terms, not a guaranteed sale; certified volumes frequently exceed volumes actually bought as Fairtrade.',
    'Whether the scheme achieves its objectives is contested in the research literature; no position is taken here, and this page evaluates nothing.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fairtrade Standards: Scope, Minimum Price, and Premium',
    description:
      'What the Fairtrade standards cover, how the minimum price and premium work, and why obligations fall on buyers as well as producers.',
    keywords: [
      'Fairtrade standards',
      'Fairtrade minimum price',
      'Fairtrade premium',
      'Fairtrade certification',
      'producer organisation',
    ],
  },
  structuredData: { article: true },
};
