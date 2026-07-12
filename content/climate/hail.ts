import type { ClimateContent } from '@/types/content';

export const hail: ClimateContent = {
  id: 'climate-hail',
  slug: 'hail',
  contentType: 'climate',
  title: 'Hail',
  climateClass: 'stress',
  category: 'Climate factor',
  subcategory: 'Weather-related crop stress',
  summary:
    'Hail is precipitation in the form of ice pellets or lumps that forms in strong convective thunderstorms and can physically damage crops, bruising or shredding foliage, fruit, and stems within minutes along a localized storm path.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Hail forms when strong updrafts within severe thunderstorms carry water droplets repeatedly through freezing layers of the atmosphere, building layered ice pellets that fall once they become too heavy for the updraft to support.',
    },
    {
      type: 'paragraph',
      text: "Hail damage is typically highly localized, following the narrow path of the storm that produced it, but can be severe within that path. Effects range from cosmetic surface blemishes that affect marketable quality to defoliation, broken stems, or complete crop loss, depending on hail intensity and the crop's growth stage at the time.",
    },
  ],
  keyFacts: [
    {
      label: 'Core definition',
      value:
        'Ice pellets or lumps that form in strong convective thunderstorms and fall as precipitation',
    },
    {
      label: 'Damage pattern',
      value:
        'Localized along a narrow storm path rather than across a wide area',
    },
    {
      label: 'Crop impact',
      value:
        'Ranges from cosmetic surface blemishes to defoliation, broken stems, or complete crop loss depending on severity and growth stage',
    },
    {
      label: 'Most vulnerable structures',
      value:
        'Fruit, leaves, and young or brittle stems are typically the most visibly damaged plant parts',
    },
    {
      label: 'Timing sensitivity',
      value:
        'Impact on yield depends heavily on crop growth stage at the time of the storm',
    },
    {
      label: 'Risk management',
      value:
        'Hail-prone regions sometimes use physical protection, such as netting, or crop insurance to manage risk',
    },
  ],
  sections: [
    {
      id: 'how-hail-forms',
      heading: 'How hail forms',
      body: [
        {
          type: 'paragraph',
          text: 'Hail requires strong, sustained updrafts within a convective storm, capable of carrying water droplets up through freezing layers of the atmosphere multiple times. Each pass through the freezing layer adds a layer of ice, and the stone falls once it grows too heavy for the updraft to keep aloft.',
        },
      ],
    },
    {
      id: 'effects-on-crops',
      heading: 'Effects on crops',
      body: [
        {
          type: 'list',
          items: [
            "Defoliation, which reduces the plant's photosynthetic capacity",
            'Bruised or punctured fruit, reducing marketable quality even when the plant survives',
            'Broken stems or lodging in tall or brittle crops',
            'Wounds that can serve as entry points for disease-causing organisms',
          ],
        },
        {
          type: 'paragraph',
          text: "The severity of yield or quality impact depends heavily on the crop's growth stage at the time of the hail event; damage during flowering or early fruit development can affect the whole season's output differently than damage later in the season.",
        },
      ],
    },
    {
      id: 'variability-and-risk',
      heading: 'Variability and risk',
      body: [
        {
          type: 'paragraph',
          text: 'Some regions and seasons see more frequent convective storm activity and are therefore more hail-prone than others, but individual storm tracks are highly localized and difficult to predict precisely in advance.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'This entry does not forecast hail risk for any specific location or season.',
        },
      ],
    },
    {
      id: 'managing-hail-risk',
      heading: 'Managing hail risk',
      body: [
        {
          type: 'list',
          items: [
            'Hail netting over high-value orchard or vineyard crops',
            'Crop insurance to manage financial risk from hail events',
            'Diversifying planting timing or field locations to reduce exposure to any single storm',
            'Monitoring severe-weather warnings during vulnerable growth stages',
          ],
        },
      ],
    },
    {
      id: 'where-hail-risk-is-notable',
      heading: 'Where hail risk is notable',
      body: [
        {
          type: 'paragraph',
          text: 'Regions with frequent strong convective storm activity, such as parts of continental interiors, tend to see more frequent hail events than others, though any region prone to thunderstorms can experience hail.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'climate', slug: 'wind' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'frost' },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'tomato' },
    { type: 'climate', slug: 'wind' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'greenhouse-farming' },
  ],
  geographicScope:
    'Hail can occur wherever strong convective thunderstorms form; frequency and severity vary greatly by region and season.',
  limitations: [
    'This entry describes hail formation and crop impact in general terms; it does not forecast hail risk for a specific location or season.',
    'No regional frequency statistics or damage thresholds are given, since these vary widely by location and event.',
  ],
  sourceReferences: [
    {
      sourceId: 'wmo',
      citedFor: 'Hail formation and severe convective storm classification',
    },
    {
      sourceId: 'noaa',
      citedFor: 'Severe weather monitoring and hail climatology',
    },
    {
      sourceId: 'fao',
      citedFor: 'Weather-related crop damage and risk management context',
    },
    { sourceId: 'usda-nass', citedFor: 'Crop damage assessment context' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Hail',
    description:
      'Hail explained: how it forms in thunderstorms, its localized but potentially severe crop damage, and common ways growers manage the risk.',
    keywords: ['hail', 'hail damage', 'crop damage', 'weather risk'],
  },
  structuredData: { article: true },
};
