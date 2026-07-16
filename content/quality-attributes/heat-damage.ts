import type { QualityAttributeContent } from '@/types/content';

export const heatDamage: QualityAttributeContent = {
  id: 'quality-attribute-heat-damage',
  slug: 'heat-damage',
  contentType: 'quality-attribute',
  title: 'Heat Damage',
  alternativeNames: ['Heat-damaged kernels', 'Heat discoloration'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'commercial-grading',
  notAnIndicatorOf: [
    'A measure of how the heat arose: dryer heat and biological self-heating in store can produce kernels that look alike, but they describe very different histories for the lot and imply very different things about its likely condition.',
    'A safety verdict: self-heating in store often co-occurs with mould activity, but heat discoloration on its own neither confirms nor excludes mycotoxin contamination.',
    'A measure of nutritional loss, although protein denaturation and reduced germination often accompany it: heat damage as scored describes visible kernel condition, not a nutrient assay.',
  ],
  typicalUnits: ['% by mass', '% by count'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'sorghum-grain' },
  ],
  measuredBy: [
    { type: 'quality-measurement', slug: 'visual-defect-inspection' },
  ],
  summary:
    'Heat damage is the proportion of kernels discoloured or darkened by heat, arising either from over-hot artificial drying or from self-heating in store driven by respiration of damp grain, moulds, and insects. It is a defined factor in commodity grade standards, scored against reference samples rather than by unaided judgement.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Heat damage describes kernels visibly discoloured or darkened by exposure to heat. It arises from two distinct routes that can produce a similar visible result: over-hot air in an artificial dryer, which scorches the outer layers or the whole kernel if drying temperature is not matched to the grain’s moisture and end use; and self-heating within a stored bulk, in which the respiration of damp grain, together with mould and insect activity, generates heat that the bulk cannot dissipate, raising the temperature of the surrounding kernels from within.',
    },
    {
      type: 'paragraph',
      text: 'Heat damage is a defined and scored factor in the grade standards for major cereals and oilseeds, and its assessment sits squarely within commercial grading rather than within food safety or processing suitability, even though it correlates with issues in both. A heat-damaged kernel does not, by its appearance, disclose whether the heat came from a dryer or from self-heating in the bin — a distinction that matters a great deal for understanding what else may be wrong with the lot.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'The proportion of kernels discoloured or darkened by heat, by mass or by count',
    },
    {
      label: 'Primary domain',
      value: 'Commercial grading — a defined, scored grade factor',
    },
    {
      label: 'Two distinct causes',
      value:
        'Over-hot artificial drying, or self-heating in store from respiration of damp grain, mould, and insects',
      note: 'The two can look similar but describe very different lot histories',
    },
    {
      label: 'Irreversible',
      value:
        'Once a kernel is heat-damaged, the condition does not reverse with further drying, cooling, or handling',
    },
    {
      label: 'Not a safety verdict',
      value:
        'Self-heating often co-occurs with mould activity, but discoloration alone neither confirms nor excludes mycotoxin',
    },
    {
      label: 'Scored against reference samples',
      value:
        'Graders compare kernels to interpretive line or reference samples issued by the grading authority, not by eye alone',
    },
    {
      label: 'Where the standard is set',
      value:
        'The applicable grade standard defines and scores heat damage for the specific commodity',
    },
  ],
  sections: [
    {
      id: 'how-heat-damage-arises',
      heading: 'How heat damage arises',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Dryer heat',
              description:
                'Artificial drying that uses air hotter than the grain and its end use can tolerate scorches the outer layers or, in more severe cases, the whole kernel. Seed and malting grain are dried at lower temperatures than grain destined for feed precisely because germination and enzyme activity are more heat-sensitive than the kernel’s appearance.',
            },
            {
              term: 'Self-heating in store',
              description:
                'Damp grain respires, generating heat and moisture; mould and insect activity in the same bulk add further metabolic heat. In a poorly aerated or poorly monitored store, this heat accumulates faster than it dissipates, and the surrounding kernels darken from prolonged exposure to elevated temperature from within the bulk rather than from an external heat source.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Because both routes can produce visually similar darkened or scorched kernels, heat damage recorded in a lot does not by itself indicate which route produced it, and the two imply different things: dryer heat points to an equipment or process issue at drying, while self-heating points to a storage-management issue that may still be active and worsening.',
        },
      ],
    },
    {
      id: 'a-defined-grade-factor',
      heading: 'A defined grade factor',
      body: [
        {
          type: 'paragraph',
          text: 'Heat damage is one of the defect categories explicitly defined and scored within the grade standards used for major cereals and oilseeds, including the standards issued for wheat, corn, and soybeans. Its presence, above whatever level the applicable standard treats as a grading threshold, can move a lot to a lower grade regardless of how the lot performs on other measured attributes.',
        },
        {
          type: 'paragraph',
          text: 'Because heat damage is graded as a defined category rather than assessed informally, its scoring is tied to the specific edition of the standard in force, and buyers and sellers should confirm which edition and which grade factor definitions apply to a given contract.',
        },
      ],
    },
    {
      id: 'scoring-against-reference-standards',
      heading: 'Scored against reference samples, not by eye alone',
      body: [
        {
          type: 'paragraph',
          text: 'Distinguishing heat-damaged kernels from other forms of discoloration — weathering, natural pigmentation, or damage from other causes — is not left to unaided visual judgement. Grading authorities issue reference or interpretive line samples that define the boundary between heat-damaged and non-heat-damaged kernels, and graders compare submitted kernels against these physical or photographic references rather than relying on personal judgement alone.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Heat damage is irreversible',
          text: 'Once a kernel has been visibly heat-damaged, no subsequent drying, cooling, or handling step reverses the discoloration or restores the kernel’s prior condition. This makes heat damage a permanent record of a past event in the lot’s history, unlike attributes such as moisture content that change with handling.',
        },
      ],
    },
  ],
  connections: [
    { type: 'commodity-grade', slug: 'usda-wheat-grades' },
    { type: 'commodity-grade', slug: 'usda-corn-grades' },
    { type: 'commodity-grade', slug: 'usda-soybean-grades' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'grain-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'usda',
      citedFor:
        'Heat damage as a defined, scored grade factor in cereal and oilseed grade standards',
    },
    {
      sourceId: 'fao',
      citedFor:
        'Self-heating in stored grain and the role of respiration, mould, and insects',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Grain drying temperature limits and storage self-heating management',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Research on heat damage effects and grain drying practice',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Heat damage is defined and scored within specific national or regional grade standards; the applicable standard, its edition, and its scoring thresholds vary by commodity and jurisdiction.',
  limitations: [
    'This entry states no drying-air temperature limits. The applicable grade standard, buyer contract, or equipment guidance sets those limits for a given commodity and end use.',
    'Heat damage looks similar regardless of cause; appearance alone cannot reliably establish whether dryer heat or self-heating in store produced a given kernel.',
    'Heat damage is irreversible; it cannot be corrected after the fact, only prevented through drying-temperature control and storage management.',
    'Consistent scoring depends on comparison against reference or interpretive line samples issued by the grading authority; unaided visual assessment without those references is subjective.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Heat Damage: A Grain Grade Factor Explained',
    description:
      'Heat damage is a defined grade factor: kernels discoloured by dryer heat or self-heating in store. Not a safety verdict or a nutrient-loss measurement.',
    keywords: [
      'heat damage grain',
      'heat damaged kernels',
      'grain grade factor',
      'self-heating grain storage',
      'grain dryer temperature',
    ],
  },
  structuredData: { article: true },
};
