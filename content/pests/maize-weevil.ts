import type { PestContent } from '@/types/content';

export const maizeWeevil: PestContent = {
  id: 'pest-maize-weevil',
  slug: 'maize-weevil',
  contentType: 'pest',
  title: 'Maize Weevil',
  scientificName: 'Sitophilus zeamais (Coleoptera: Curculionidae)',
  alternativeNames: ['Sitophilus zeamais', 'Greater rice weevil'],
  category: 'Insect pest',
  subcategory: 'Internal-feeding stored-grain weevil',
  pestGroup: 'Insect — Coleoptera (Curculionidae)',
  summary:
    'The maize weevil is a primary stored-grain pest that develops inside whole kernels. It flies strongly and can begin infesting maize in the field before harvest, so grain may arrive at the store already infested.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The maize weevil is a primary, internal feeder of stored cereals and one of the most damaging storage pests of maize worldwide. The female bores into a sound, whole kernel, lays an egg within it, and seals the cavity; the larva develops concealed inside that kernel and the adult cuts an exit hole when it emerges. Because the pest does not require grain to be broken or damaged first, it can initiate an infestation in clean, apparently sound grain.',
    },
    {
      type: 'paragraph',
      text: 'What distinguishes it in practice from its close relatives is mobility. The maize weevil is a strong flier and is well known for infesting maize cobs in the field as the crop matures and dries, before harvest. This matters for storage management: the infestation is frequently not something the store created but something that arrived with the grain, already established inside the kernels.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Curculionidae',
    },
    {
      label: 'Feeding type',
      value: 'Primary (internal) feeder — attacks sound, whole kernels',
    },
    {
      label: 'Damaging stage',
      value: 'Larva, developing concealed inside an individual kernel',
    },
    {
      label: 'Distinguishing feature',
      value:
        'Snouted weevil, reddish-brown to black with paler spots on the wing covers; a strong flier',
    },
    {
      label: 'Field infestation',
      value:
        'Can infest maturing maize cobs in the field before harvest, unlike the granary weevil',
    },
    {
      label: 'Key concern',
      value:
        'Hidden infestation arriving with the grain; weight, quality, and germination loss',
    },
    {
      label: 'Sign',
      value: 'Exit holes in kernels, hollowed grain, dust, warm patches',
    },
  ],
  sections: [
    {
      id: 'identification-and-biology',
      heading: 'Identification and biology',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, snouted, reddish-brown to nearly black weevils, generally with paler reddish or orange markings on the wing covers and with elbowed antennae. Larvae are legless, white grubs that are effectively never seen loose in a bulk, because the entire immature development happens inside a kernel.',
        },
        {
          type: 'paragraph',
          text: 'The maize weevil and the rice weevil are so similar in appearance that they cannot be reliably separated by colour, markings, or general size in a store. Dependable separation rests on detailed characters examined by a specialist. Both differ from the granary weevil, which is uniformly dark without the paler wing-cover spots and is flightless. Where the distinction matters — for records, trade, or regulatory purposes — specimens should be confirmed by a qualified identifier rather than assumed.',
        },
        {
          type: 'paragraph',
          text: 'The life cycle mirrors that of the rice weevil: egg laid in a chewed cavity within the kernel, larval and pupal development inside, and an adult that chews its way out. Warm, moist grain allows populations to build fastest, and cool, dry grain slows them; the governing conditions and durations are commodity- and setting-specific and are not stated here.',
        },
      ],
    },
    {
      id: 'damage-to-stored-commodities',
      heading: 'How it damages stored commodities',
      body: [
        {
          type: 'paragraph',
          text: 'Larval feeding hollows out kernels from within, so infested lots lose weight and nutritional value, and grain intended for seed can lose viability where the germ is destroyed. Adults feed on grain as well. Heavily infested grain may be reduced largely to husk, dust, and frass.',
        },
        {
          type: 'paragraph',
          text: 'As with other stored-grain insects, the secondary effects compound the direct loss. The insects respire and move, generating heat and moisture; that moisture migrates through the bulk and forms hot spots, which then favour storage moulds and the quality and safety problems that come with them. Meanwhile the broken kernels, flour, and fines that weevil activity produces create exactly the food source that secondary feeders such as flour beetles and sawtoothed grain beetles need, so a primary infestation is frequently followed by a secondary one.',
        },
        {
          type: 'paragraph',
          text: 'Maize is the commodity most associated with this species, but stored rice, wheat, sorghum, barley, and millet can also be infested.',
        },
      ],
    },
    {
      id: 'detection-and-monitoring',
      heading: 'Detection and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Because the immature stages are sealed inside intact kernels, a sample can look clean and still carry an infestation. Visual inspection finds emerged adults, which means it finds the problem late. This hidden phase is the reason detection of primary feeders is genuinely difficult, and it is why a clean-looking sample must not be treated as evidence of a clean lot.',
        },
        {
          type: 'paragraph',
          text: 'Useful monitoring signals include sieving for adults and fines, examining kernels for exit holes and hollowness, monitoring bulk temperature — since hot spots frequently reveal a developing problem before insects are conspicuous — and trapping within the store. Laboratory methods capable of revealing insects inside intact kernels are used where hidden infestation must be demonstrated.',
        },
        {
          type: 'paragraph',
          text: 'Given this species infests in the field, incoming maize warrants particular scrutiny at intake, and newly harvested grain should not be assumed clean simply because it is new.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management is primarily preventive and fits within integrated pest management: exclude the pest where possible, and hold the grain in a condition that does not favour it.',
        },
        {
          type: 'list',
          items: [
            'Sanitation of empty stores before intake: remove residual grain, dust, and spillage from cracks, ledges, and handling equipment',
            'Harvest promptly and avoid leaving mature crop standing in the field, since this species infests before harvest',
            'Inspect and reject or segregate infested incoming lots instead of mixing them with sound stock',
            'Dry to the level set by the applicable grade standard or national storage guidance for the commodity and intended storage duration, and keep the grain dry',
            'Cool the bulk and manage moisture migration',
            'Use sealed or hermetic storage where appropriate to restrict the atmosphere available to insects',
            'Clean grain to remove fines and broken kernels before storage',
            'Monitor temperature and sample regularly to find problems early',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Fumigation and insecticide use are regulated activities',
          text: 'Fumigants used against stored-grain insects are acutely hazardous and strictly regulated. Their use requires appropriately licensed or certified operators and must follow the product label and the applicable national regulation. AgricultureID does not provide fumigant or insecticide names, doses, rates, exposure times, or procedures.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'millet' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'rice-weevil' },
    { type: 'pest', slug: 'granary-weevil' },
    { type: 'pest', slug: 'lesser-grain-borer' },
    { type: 'pest', slug: 'weevils' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'Cosmopolitan in stored cereals and especially important in warm, humid maize-growing regions; local status and storage practice vary by country.',
  climateContext:
    'Favoured by warm, humid conditions both in the field before harvest and in store; cool, dry grain slows population growth.',
  limitations: [
    'This is a general reference overview of the species, not storage guidance for a specific commodity, store type, climate, or jurisdiction.',
    'No development times, temperature or moisture thresholds, or population figures are given here, because meaningful values depend on the commodity, climate, storage duration, and applicable standard.',
    'Maize weevil and rice weevil cannot be reliably separated without specialist examination; descriptions here do not support confident species identification.',
    'Treatment decisions, thresholds, and any fumigant or insecticide use are jurisdiction-specific, require licensed operators where applicable, and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, damage, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
    {
      sourceId: 'cimmyt',
      citedFor: 'Maize storage pest context and post-harvest loss',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Stored-grain insect identification and storage management',
    },
    {
      sourceId: 'fao',
      citedFor: 'Post-harvest loss and grain storage context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Maize Weevil (Sitophilus zeamais)',
    description:
      'Maize weevil explained: a primary internal feeder of stored grain that also infests maize in the field, plus detection limits and preventive storage.',
    keywords: [
      'maize weevil',
      'Sitophilus zeamais',
      'stored maize pest',
      'internal feeder',
      'field infestation',
    ],
  },
  structuredData: { article: true },
};
