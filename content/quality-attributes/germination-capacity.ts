import type { QualityAttributeContent } from '@/types/content';

export const germinationCapacity: QualityAttributeContent = {
  id: 'quality-attribute-germination-capacity',
  slug: 'germination-capacity',
  contentType: 'quality-attribute',
  title: 'Germination Capacity',
  alternativeNames: ['Germination percentage', 'Laboratory germination rate'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'biological',
  qualityDomain: 'processing-suitability',
  notAnIndicatorOf: [
    'Field emergence: laboratory germination is measured under near-ideal prescribed conditions and routinely overstates what the same seedlot achieves in a cold, wet, or crusted seedbed — vigour, not germination capacity, tracks that gap.',
    'Seed vigour: a lot can show acceptable laboratory germination while still ageing faster in storage, performing poorly under stress, or emerging unevenly in the field; vigour is assessed separately.',
    'A food or feed quality attribute: grain destined for milling or feed does not need to germinate at all, while the same attribute is decisive for a malting contract or a certified seed lot — its relevance depends entirely on end use.',
    'A measure of varietal purity or seed health: a seedlot can germinate normally while containing off-types or carrying seed-borne pathogens that a germination test does not detect.',
  ],
  typicalUnits: ['% normal seedlings'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'sorghum-grain' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'germination-test' }],
  summary:
    'Germination capacity is the proportion of a seed sample that produces normal seedlings under prescribed test conditions. It is decisive for seed lots and malting barley and irrelevant to grain destined for milling or feed — and it is not the same thing as field emergence or seed vigour.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Germination capacity is the proportion of seeds in a sample that produce normal seedlings when tested under prescribed conditions of moisture, temperature, and duration designed to give the seed a near-ideal opportunity to germinate. It is used wherever a lot is expected to be sown as seed or, distinctively, wherever a lot is intended for malting, because the malting process itself begins with controlled germination of the grain.',
    },
    {
      type: 'paragraph',
      text: 'Because the test conditions are deliberately close to ideal, the result is a ceiling on performance under favourable conditions, not a prediction of how the lot will behave in a real seedbed. It also answers a question that is entirely irrelevant to most of the grain trade: milling wheat, feed maize, and grain sold for crushing do not need to germinate at all, so germination capacity is meaningless for those uses even though it is the single most decisive attribute for a seed buyer or a maltster assessing the same physical grain.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The proportion of a seed sample producing normal seedlings under prescribed laboratory test conditions',
    },
    {
      label: 'Primary domain',
      value: 'Processing suitability — for seed sowing and for malting',
    },
    {
      label: 'Not field emergence',
      value:
        'Laboratory germination is measured under near-ideal conditions and routinely overstates real-field emergence',
      note: 'Vigour testing, not germination capacity, tracks the gap to field performance',
    },
    {
      label: 'Not seed vigour',
      value:
        'A separate, complementary property addressing performance under stress and storage ageing',
    },
    {
      label: 'End-use dependent',
      value:
        'Decisive for malting barley and certified seed; irrelevant for grain destined for milling or feed',
    },
    {
      label: 'Sensitive to handling',
      value:
        'Drying temperature and mechanical damage during harvest and handling can reduce germination capacity',
    },
    {
      label: 'Where standards are set',
      value:
        'The seed certification scheme or malting contract sets the minimum required, not this entry',
    },
  ],
  sections: [
    {
      id: 'what-the-test-measures',
      heading: 'What the germination test measures',
      body: [
        {
          type: 'paragraph',
          text: 'A germination test places a counted sample of seeds under prescribed conditions of substrate, moisture, temperature, and duration, then counts the proportion that produce a normal seedling — one with the structures needed to develop into a viable plant under favourable conditions. Seedlings that fail to emerge, or that emerge but are abnormal, damaged, or decayed, are not counted as normal even though a seed produced some growth.',
        },
        {
          type: 'paragraph',
          text: 'Because the prescribed conditions are standardised and designed to be favourable, the test is reproducible between laboratories and over time, which is what makes it usable as a basis for seed certification and for malting contracts. That same standardisation is also its principal limitation, addressed below.',
        },
      ],
    },
    {
      id: 'not-field-emergence',
      heading: 'Why laboratory germination is not field emergence',
      body: [
        {
          type: 'paragraph',
          text: 'A real seedbed rarely offers the near-ideal moisture, temperature, and soil conditions a germination test provides. Cold soil, excess or deficient moisture, surface crusting, seedling diseases, and mechanical impedance in the field all reduce the proportion of sown seeds that actually establish as plants, none of which the laboratory test is designed to capture. The result is that laboratory germination capacity routinely overstates what the same seedlot will achieve when sown, and the size of that gap is exactly what vigour testing is designed to estimate — vigour tests deliberately impose stress conditions that a standard germination test does not.',
        },
      ],
    },
    {
      id: 'end-use-dependence',
      heading: 'Why the same attribute matters to one buyer and not another',
      body: [
        {
          type: 'paragraph',
          text: 'Germination capacity is decisive for two distinct buyers and irrelevant to a third handling the same physical commodity. A seed buyer needs the lot to establish a crop, so germination capacity — alongside vigour — is central to whether the lot is fit for purpose at all. A maltster needs the grain to germinate on demand as the first controlled step of malting, so germination capacity is equally central there, for a different reason. A miller or a feed compounder, by contrast, has no use for germination at all: grain destined for flour, oil, or feed is valued for composition and processing performance, not for its ability to grow.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The same lot, two different verdicts',
          text: 'A single lot can be entirely fit for milling or feed while failing to meet a seed certification scheme’s germination requirement, and the reverse: a lot with excellent germination capacity is not, on that basis alone, superior milling or feed grain. Germination capacity is not a general quality score.',
        },
      ],
    },
    {
      id: 'sensitivity-and-storage-decline',
      heading: 'Sensitivity to handling and decline in storage',
      body: [
        {
          type: 'paragraph',
          text: 'Germination capacity is sensitive to how the seed was dried and handled. Excessive drying temperature can damage the embryo without leaving a visible mark on the kernel, and mechanical impact during harvesting, conveying, or cleaning can crack or bruise seed in ways that reduce germination even when the kernel looks intact. This is one reason seed and malting grain are commonly dried at lower temperatures than grain destined for feed.',
        },
        {
          type: 'paragraph',
          text: 'Germination capacity also declines over time in storage, at a rate governed chiefly by the moisture content and temperature the seed is held at rather than by a fixed calendar interval — seed held cool and dry retains germination capacity far longer than the same seed held warm and moist. Because of this, a germination test result carries an implicit expiry and is normally re-tested before a critical use such as sowing.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Seed germination testing principles and post-harvest handling effects on seed quality',
    },
    {
      sourceId: 'usda',
      citedFor: 'Seed certification and germination testing standards context',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Malting barley germination requirements and grain drying temperature guidance',
    },
    {
      sourceId: 'cimmyt',
      citedFor: 'Wheat and maize seed quality and germination research',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Germination testing methodology is broadly standardised, but the minimum germination capacity required for a given use is set by the applicable seed certification scheme or malting contract and varies by commodity, market, and jurisdiction.',
  limitations: [
    'This entry states no germination percentages or test temperatures. The seed certification scheme or malting contract sets the minimum required for a given commodity and use.',
    'A laboratory germination result does not predict field emergence under adverse seedbed conditions; vigour testing addresses that gap and is not the same measurement.',
    'Germination capacity does not describe varietal purity, seed-borne disease status, or general food or feed quality; grain that will never be germinated can be entirely fit for its intended use regardless of this attribute.',
    'The result declines with storage time at a rate governed by moisture and temperature, so a germination test result is time-limited and is normally re-tested before a critical use.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Germination Capacity: Lab Result, Not Field Rate',
    description:
      'Germination capacity is the share of a seed sample producing normal seedlings under lab conditions. It does not predict field emergence or vigour.',
    keywords: [
      'germination capacity',
      'seed germination test',
      'malting barley germination',
      'seed vigour vs germination',
      'field emergence',
    ],
  },
  structuredData: { article: true },
};
