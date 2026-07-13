import type { FarmingSystemContent } from '@/types/content';

export const shiftingCultivation: FarmingSystemContent = {
  id: 'farming-system-shifting-cultivation',
  slug: 'shifting-cultivation',
  contentType: 'farming-system',
  title: 'Shifting Cultivation',
  systemClass: 'production-approach',
  alternativeNames: ['Swidden agriculture', 'Slash-and-burn farming'],
  category: 'Farming system',
  subcategory: 'Production approach',
  summary:
    'Shifting cultivation is a traditional farming system, common in tropical regions, in which a patch of vegetation is cleared and often burned, cropped for a few seasons until soil fertility declines, then left to fallow and regenerate while cultivation moves to a new patch.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Shifting cultivation, also called swidden or slash-and-burn agriculture, is a land-use system in which farmers clear a plot of forest or bush, usually burn the felled vegetation to release nutrients, and crop the land for a limited number of seasons. As soil fertility and weed pressure make continued cropping unrewarding, the plot is abandoned to a fallow during which natural vegetation regrows and soil fertility is gradually restored, while the farmer opens a new plot elsewhere.',
    },
    {
      type: 'paragraph',
      text: 'It is a long-established system across many tropical and subtropical regions, particularly in forested uplands, and supports a diverse mix of subsistence crops. Its sustainability rests on the fallow: where fallow periods are long enough relative to the cropping period, vegetation and soil recover, but where population pressure shortens fallows, the balance can break down.',
    },
  ],
  keyFacts: [
    { label: 'Also known as', value: 'Swidden or slash-and-burn agriculture' },
    {
      label: 'Basic cycle',
      value: 'Clear and burn, crop for a few seasons, then fallow and move on',
    },
    {
      label: 'Role of burning',
      value:
        'Releases nutrients from vegetation and clears the plot for planting',
    },
    {
      label: 'Key to sustainability',
      value: 'A fallow long enough to restore soil fertility and vegetation',
    },
    {
      label: 'Typical crops',
      value:
        'Diverse subsistence crops such as cassava, yam, upland rice, maize, and bananas',
    },
    {
      label: 'Main vulnerability',
      value:
        'Shortened fallows under population pressure can degrade soil and forest',
    },
  ],
  sections: [
    {
      id: 'how-the-system-works',
      heading: 'How the system works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'A patch of forest or bush is selected and the vegetation cut',
            'The dried vegetation is burned, releasing nutrients in the ash and clearing the ground',
            'Crops are planted, often as a mixture, drawing on the flush of released nutrients',
            'The plot is cropped for a few seasons until fertility declines and weeds increase',
            'The plot is left to fallow and regenerate while cultivation shifts to a new patch',
          ],
        },
      ],
    },
    {
      id: 'why-fallow-is-central',
      heading: 'Why the fallow is central',
      body: [
        {
          type: 'paragraph',
          text: 'The fallow period is what makes shifting cultivation work over the long term. During fallow, regrowing vegetation takes up and stores nutrients, soil organic matter and structure recover, and weed and pest pressures are broken. A sufficiently long fallow relative to the cropping phase allows the land to be used again later without permanent degradation, which is why the ratio of fallow to cropping time is a defining feature of the system.',
        },
        {
          type: 'callout',
          tone: 'caution',
          text: 'When rising population or land pressure forces fallows to be shortened, soil fertility may not fully recover between cycles, which can lead to declining yields, soil erosion, and loss of forest cover.',
        },
      ],
    },
    {
      id: 'crops-and-context',
      heading: 'Crops and context',
      body: [
        {
          type: 'paragraph',
          text: 'Shifting cultivation typically grows a diverse mixture of subsistence crops suited to the local environment — root crops such as cassava and yam, upland rice, maize, plantains and bananas, and various vegetables and legumes — often intercropped on the cleared plot. The system is deeply tied to the cultures and landscapes where it is practised and has historically been well adapted to low-population, forest-rich settings.',
        },
      ],
    },
    {
      id: 'considerations-and-trade-offs',
      heading: 'Considerations and trade-offs',
      body: [
        {
          type: 'paragraph',
          text: 'Shifting cultivation is often viewed critically for its association with deforestation and burning, but its sustainability depends heavily on land availability and fallow length: under low pressure it can be a stable, low-input system, while under high pressure it can contribute to degradation. Much attention focuses on transitions toward more intensive or agroforestry-based systems where fallows can no longer be maintained.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry describes shifting cultivation as a system in general terms; it does not give cropping or fallow durations or yield figures, which vary widely by region and are not generalised here.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'cassava' },
    { type: 'crop', slug: 'yam' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'banana' },
    { type: 'soil-topic', slug: 'soil-fertility' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-erosion' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  glossaryTerms: ['crop-rotation', 'agronomy'],
  geographicScope:
    'Shifting cultivation is practised mainly in tropical and subtropical regions, especially forested uplands of Africa, Southeast Asia, and Latin America; practices are strongly local.',
  climateContext:
    'The system is associated with humid and sub-humid tropical climates where vegetation regrows quickly during fallow, aiding fertility recovery.',
  limitations: [
    'This entry describes shifting cultivation in general terms; it does not give cropping or fallow durations or yield figures, which vary widely by region.',
    'Whether the system is sustainable depends heavily on land availability and fallow length, which differ greatly between settings.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Shifting cultivation systems and fallow-based fertility management',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on shifting cultivation and land-use transitions',
    },
    {
      sourceId: 'iita',
      citedFor:
        'Tropical cropping systems and soil fertility in shifting cultivation',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Shifting Cultivation',
    description:
      'Shifting cultivation explained: the clear-burn-crop-fallow cycle of swidden farming, why fallow length is central, and its trade-offs.',
    keywords: [
      'shifting cultivation',
      'swidden agriculture',
      'slash and burn',
      'fallow farming',
    ],
  },
  structuredData: { article: true },
};
