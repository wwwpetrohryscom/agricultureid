import type { PestContent } from '@/types/content';

export const cerealLeafBeetle: PestContent = {
  id: 'pest-cereal-leaf-beetle',
  slug: 'cereal-leaf-beetle',
  contentType: 'pest',
  title: 'Cereal Leaf Beetle',
  scientificName: 'Oulema melanopus (Coleoptera: Chrysomelidae)',
  alternativeNames: ['CLB'],
  category: 'Insect pest',
  subcategory: 'Leaf-feeding beetle',
  pestGroup: 'Insect — Coleoptera (Chrysomelidae)',
  summary:
    'Cereal leaf beetle is a small beetle whose adults and larvae strip the surface tissue between leaf veins on wheat, barley, oats, and other cereals, producing pale longitudinal streaks and, when heavy, whitened leaves.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Cereal leaf beetle is a small leaf beetle that feeds on small-grain cereals and grasses. Both the adult beetles and the larvae feed on the leaves, removing tissue between the veins and leaving characteristic pale streaks that run along the length of the leaf.',
    },
    {
      type: 'paragraph',
      text: 'When larvae are numerous, especially on the upper leaves during grain fill, the damage can whiten large areas of the canopy and reduce yield. Effective natural enemies, particularly introduced parasitoids in some regions, often keep populations in check, so conserving them is central to management.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Chrysomelidae',
    },
    { label: 'Hosts', value: 'Wheat, barley, oats, and other cereals' },
    { label: 'Damaging stages', value: 'Adults and larvae feeding on leaves' },
    {
      label: 'Key concern',
      value: 'Loss of upper-leaf tissue during grain fill',
    },
    {
      label: 'Natural enemies',
      value: 'Parasitoid wasps that attack eggs and larvae',
    },
    {
      label: 'Sign',
      value: 'Pale longitudinal streaks and window-paned, whitened leaves',
    },
  ],
  sections: [
    {
      id: 'identification',
      heading: 'Identification',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, elongate beetles with metallic blue-black wing covers and reddish legs and thorax. Larvae are plump and yellowish but often appear dark and slug-like because they carry a coating of their own moist excrement, a distinctive habit that helps identify them. Eggs are small, yellowish, and laid along the leaves.',
        },
        {
          type: 'paragraph',
          text: 'Feeding by both stages removes the tissue between veins, leaving narrow, pale, lengthwise stripes; heavy larval feeding can make upper leaves look frosted or whitened. The slug-like, excrement-covered larvae are a reliable field cue.',
        },
      ],
    },
    {
      id: 'biology-and-life-cycle',
      heading: 'Biology and life cycle',
      body: [
        {
          type: 'paragraph',
          text: 'There is generally one generation per year. Adults overwinter in sheltered sites, become active in spring, feed, and lay eggs on cereal leaves. Larvae feed for a few weeks, then pupate in the soil before the new adults emerge, feed briefly, and move to overwintering shelter. The single generation means damage is concentrated in the larval feeding period.',
        },
        {
          type: 'paragraph',
          text: 'Because larval feeding often coincides with the sensitive upper-canopy and grain-filling stages, the timing of the larval period relative to crop development strongly influences potential yield impact.',
        },
      ],
    },
    {
      id: 'damage-and-hosts',
      heading: 'Damage and hosts',
      body: [
        {
          type: 'paragraph',
          text: 'Loss of green leaf tissue, especially from the flag leaf and other upper leaves during grain fill, reduces photosynthesis and can lower yield when larval numbers are high. Adult spring feeding is usually less important than larval feeding. Damage is patchy and depends on beetle density, crop stage, and the activity of parasitoids.',
        },
        {
          type: 'paragraph',
          text: 'Hosts include wheat, barley, and oats, along with other small grains and grasses. Spring cereals and later-developing crops can be particularly exposed to the larval feeding period.',
        },
      ],
    },
    {
      id: 'monitoring',
      heading: 'Monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Scouting counts eggs and larvae on the upper leaves during the sensitive period and rates streaking damage, with attention to whether larvae are reaching the flag leaf. Checking for parasitized eggs and larvae helps judge natural control. Decisions weigh larval numbers, crop stage, and local economic thresholds.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management emphasizes conserving natural enemies and using thresholds within integrated pest management, since parasitoids often provide substantial control.',
        },
        {
          type: 'list',
          items: [
            'Conserve parasitoid wasps that attack cereal leaf beetle eggs and larvae',
            'Scout the upper leaves during the larval period and act on local economic thresholds',
            'Consider planting date and variety choices that reduce exposure of sensitive stages where practical',
            'Avoid unnecessary broad-spectrum sprays that disrupt parasitoids',
            'Time any intervention to the larval stage, when most damage occurs',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Follow local, authorized guidance for control',
          text: 'Any insecticide use must follow current, locally authorized recommendations and product labels, and should conserve the parasitoids that regulate this pest and protect pollinators. AgricultureID does not provide specific chemical treatment instructions.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'oats' },
  ],
  connections: [
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'flea-beetles' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  glossaryTerms: [
    'integrated-pest-management',
    'economic-threshold',
    'host-plant',
  ],
  geographicScope:
    'A pest of small-grain cereals across many temperate regions; pressure and parasitoid establishment vary by region.',
  climateContext:
    'Generally one generation per year, with spring temperatures driving adult activity and the timing of the damaging larval period.',
  limitations: [
    'This is a general overview of the pest, not region-specific management guidance.',
    'Thresholds and control-product recommendations are jurisdiction-specific and are not provided here.',
    'The strength of natural biological control varies between regions.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
    {
      sourceId: 'usda-ars',
      citedFor: 'Biological control and management research',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Cereal Leaf Beetle',
    description:
      'Cereal leaf beetle (Oulema melanopus): identification, biology, leaf-stripping damage in cereals, monitoring, biological control, and management.',
    keywords: [
      'cereal leaf beetle',
      'Oulema melanopus',
      'cereal pest',
      'wheat leaf beetle',
    ],
  },
  structuredData: { article: true },
};
