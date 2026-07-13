import type { PestContent } from '@/types/content';

export const japaneseBeetle: PestContent = {
  id: 'pest-japanese-beetle',
  slug: 'japanese-beetle',
  contentType: 'pest',
  title: 'Japanese Beetle',
  scientificName: 'Popillia japonica (Coleoptera: Scarabaeidae)',
  alternativeNames: ['JB'],
  category: 'Insect pest',
  subcategory: 'Leaf-feeding beetle with root-feeding grubs',
  pestGroup: 'Insect — Coleoptera (Scarabaeidae)',
  summary:
    'Japanese beetle is a scarab beetle whose adults skeletonize the foliage, flowers, and fruit of many plants while its soil-dwelling grubs feed on roots, especially of grasses and turf.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Japanese beetle is a scarab beetle native to Japan that has become a damaging pest where it has been introduced, notably in North America and, more recently, parts of Europe. It is unusual in causing damage at two life stages: metallic-green adults chew on the foliage, flowers, and fruit of many plants, while white, C-shaped grubs feed underground on roots.',
    },
    {
      type: 'paragraph',
      text: 'The adult’s very broad host range and tendency to feed in aggregations make it conspicuous and locally destructive, while the grubs are a well-known pest of turf and pasture grasses. Its capacity to establish in new regions has made it a regulated quarantine pest in areas still free of it.',
    },
  ],
  keyFacts: [
    { label: 'Group', value: 'Insects, order Coleoptera, family Scarabaeidae' },
    { label: 'Status', value: 'Invasive where introduced; a regulated pest' },
    {
      label: 'Damaging stages',
      value: 'Adults on foliage and fruit; grubs on roots',
    },
    { label: 'Host range', value: 'Very broad across many plant families' },
    {
      label: 'Key concern',
      value: 'Leaf skeletonization above ground and root feeding below',
    },
    {
      label: 'Sign',
      value: 'Lacy, skeletonized leaves and thinning, wilting turf',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are about a centimetre long with a metallic-green body and coppery wing covers. A distinctive feature is a row of small white tufts of hair along each side of the abdomen, which separates them from similar scarabs. Larvae are typical white grubs: soft, C-shaped, with a brown head, found in the soil among roots.',
        },
        {
          type: 'paragraph',
          text: 'The characteristic adult feeding pattern is skeletonization, in which the leaf tissue between the veins is eaten away, leaving a lacy network of veins. This, together with the white abdominal tufts, is a reliable field cue.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'In much of its introduced range the beetle completes one generation per year. Adults emerge in summer, feed, and lay eggs in the soil, typically in moist grassy areas. Grubs hatch and feed on roots, move deeper to overwinter, and resume feeding before pupating the following season to emerge as adults.',
        },
        {
          type: 'paragraph',
          text: 'Adults are attracted to plants already being fed upon and to certain volatile cues, which is why feeding often concentrates in patches. Soil moisture during egg-laying strongly influences grub survival and the following year’s adult numbers.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Adult feeding skeletonizes leaves and damages flowers and fruit, which can be significant on high-value horticultural crops and heavily fed field crops. Grub feeding severs and prunes roots, weakening grasses and, at high densities, causing turf and pasture to wilt, brown, and pull up easily. Both forms of damage vary greatly with local beetle density.',
        },
        {
          type: 'paragraph',
          text: 'The adult host range is very broad; among cultivated crops it includes grape, apple, and soybean, along with maize silks and many other plants. Grubs are chiefly associated with the roots of grasses.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are monitored by direct inspection of foliage and fruit for beetles and characteristic skeletonizing damage. Pheromone-and-floral-lure traps exist but can attract more beetles than they catch, so they are used mainly for detection rather than protection. Grub populations are assessed by digging and examining soil samples in grassy areas.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management addresses both life stages and fits within integrated pest management, with attention to protecting pollinators when crops are flowering.',
        },
        {
          type: 'list',
          items: [
            'Monitor adults and grubs separately and target the stage causing damage',
            'Conserve natural enemies and consider biological options such as insect-pathogenic nematodes and microbial agents for grubs where appropriate',
            'Manage soil moisture and turf where practical to influence grub survival',
            'Use physical protection such as netting on high-value plants where feasible',
            'Observe quarantine and reporting requirements in areas where the beetle is regulated',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should avoid application to flowering crops that could harm pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'maize' },
  ],
  connections: [
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'climate', slug: 'temperature' },
    { type: 'farming-system', slug: 'organic-farming' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'flea-beetles' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'Native to Japan and invasive in North America and parts of Europe; distribution and regulatory status vary by region.',
  climateContext:
    'Generally one generation per year, with soil moisture during egg-laying strongly affecting grub survival and next-season adult numbers.',
  limitations: [
    'This is a general overview of a two-stage pest, not crop- or region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'Trap effectiveness for protection is limited and context-dependent.',
  ],
  sourceReferences: [
    {
      sourceId: 'usda-aphis',
      citedFor: 'Regulatory status and quarantine context',
    },
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo', citedFor: 'Pest categorization and distribution' },
    { sourceId: 'uc-ipm', citedFor: 'Identification and IPM principles' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Japanese Beetle',
    description:
      'Japanese beetle (Popillia japonica): identification, life cycle, adult leaf skeletonizing and grub root damage, monitoring, and integrated management.',
    keywords: [
      'japanese beetle',
      'Popillia japonica',
      'white grub',
      'leaf skeletonization',
    ],
  },
  structuredData: { article: true },
};
