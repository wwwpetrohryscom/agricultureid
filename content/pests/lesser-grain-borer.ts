import type { PestContent } from '@/types/content';

export const lesserGrainBorer: PestContent = {
  id: 'pest-lesser-grain-borer',
  slug: 'lesser-grain-borer',
  contentType: 'pest',
  title: 'Lesser Grain Borer',
  scientificName: 'Rhyzopertha dominica (Coleoptera: Bostrichidae)',
  alternativeNames: ['Rhyzopertha dominica', 'Australian wheat weevil'],
  category: 'Insect pest',
  subcategory: 'Internal-feeding stored-grain borer',
  pestGroup: 'Insect — Coleoptera (Bostrichidae)',
  summary:
    'The lesser grain borer is among the most destructive primary pests of stored cereals. Unusually, both adults and larvae bore into and consume sound whole grain, and the adults produce large amounts of characteristic dust.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The lesser grain borer is a primary, internal feeder of stored cereals and is regarded as one of the most destructive insects of stored grain. Larvae develop inside kernels, hidden from view, as they do in the grain weevils. What sets this species apart is that the adults are themselves powerful feeders that bore into sound kernels rather than merely laying into them — so both the adult and larval stages attack whole, undamaged grain.',
    },
    {
      type: 'paragraph',
      text: 'The consequence is a distinctive damage signature. Adult boring reduces grain to a great deal of fine, floury dust, and infested bulks often carry a characteristically sweet, musty odour. That dust matters beyond the direct loss: it is precisely the broken material on which secondary feeders depend, so a lesser grain borer infestation reliably prepares the way for beetles that could not have attacked the sound grain themselves.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Bostrichidae',
    },
    {
      label: 'Feeding type',
      value:
        'Primary (internal) feeder — both adults and larvae attack sound, whole kernels',
    },
    {
      label: 'Distinguishing feature',
      value:
        'Cylindrical dark-brown beetle; head tucked under a hood-like, roughened prothorax and not visible from above',
    },
    {
      label: 'Damage signature',
      value:
        'Abundant floury dust from adult boring; sweet, musty odour in infested grain',
    },
    {
      label: 'Dispersal',
      value: 'Flies readily; also moves in infested consignments',
    },
    {
      label: 'Monitoring aid',
      value:
        'Responds to commercially available aggregation pheromone lures used in traps',
    },
    {
      label: 'Sign',
      value: 'Exit holes, hollowed kernels, heavy dust, adults in samples',
    },
  ],
  sections: [
    {
      id: 'identification-and-biology',
      heading: 'Identification and biology',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, cylindrical, dark-brown beetles. The most useful identification character is the head: it is deflexed and tucked beneath a hood-like prothorax, so it cannot be seen when the beetle is viewed from above. The front of the prothorax is covered in rasp-like tubercles. This shape is quite unlike the snouted profile of the grain weevils, and the two are not easily confused once the character is known. Larvae are white, fleshy grubs that develop inside kernels.',
        },
        {
          type: 'paragraph',
          text: 'Eggs are laid loose in the grain or on kernels rather than sealed within a chewed cavity. Young larvae may feed in the dust produced by adults before entering a kernel, where they complete development and pupate; adults then emerge through exit holes. Adults are strong fliers and can move between stores and disperse widely. Warm conditions favour population growth; the specific governing conditions and durations vary by commodity and setting and are not stated here.',
        },
      ],
    },
    {
      id: 'damage-to-stored-commodities',
      heading: 'How it damages stored commodities',
      body: [
        {
          type: 'paragraph',
          text: 'Because adults as well as larvae bore into and consume sound kernels, this species can inflict heavy weight loss quickly. Kernels are hollowed and may collapse to little more than husk; grain held for seed loses viability where the germ is destroyed. The volume of floury dust produced is a hallmark of the infestation and itself represents lost product, while the sweet, musty smell that develops taints the grain.',
        },
        {
          type: 'paragraph',
          text: 'Indirect damage follows the familiar path. Respiration and activity in the bulk generate heat and moisture; moisture migrates and accumulates into hot spots; hot spots favour storage moulds, converting an insect problem into a mould and quality problem. And the abundant dust and broken kernels create ideal conditions for secondary feeders such as the red flour beetle and sawtoothed grain beetle, which cannot open sound grain but thrive on what this species leaves behind. Finding secondary feeders in a bulk is therefore often a signal that a primary feeder has already been at work.',
        },
        {
          type: 'paragraph',
          text: 'Stored wheat, rice, maize, sorghum, barley, and millet are commonly affected, and the species is a major concern in bulk cereal storage in warm regions.',
        },
      ],
    },
    {
      id: 'detection-and-monitoring',
      heading: 'Detection and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Larval development inside kernels means the hidden-infestation problem applies: a visually clean sample can still be infested, and inspection tends to detect adults only after emergence. However, this species is somewhat less cryptic than the grain weevils in one respect — the sheer quantity of dust that adult boring produces, together with the characteristic odour, often betrays the infestation earlier than the insects themselves do.',
        },
        {
          type: 'paragraph',
          text: 'Monitoring combines sieving samples for adults and dust, examining kernels for exit holes and hollowness, monitoring bulk temperature to catch hot spots as they form, and trapping. Commercially available aggregation pheromone lures for this species make trapping a comparatively sensitive tool, useful both inside stores and for detecting flying adults around them. Laboratory methods that reveal insects inside intact kernels are used where hidden infestation must be established.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'As with other primary storage pests, management is preventive and follows integrated pest management principles.',
        },
        {
          type: 'list',
          items: [
            'Sanitation of empty stores before intake: remove residual grain, dust, and spillage from cracks, ledges, floors, and handling equipment, since residues sustain populations between seasons',
            'Inspect incoming lots and reject or segregate infested consignments rather than mixing them with sound stock',
            'Dry to the level set by the applicable grade standard or national storage guidance for the commodity and intended storage duration, and keep the grain dry',
            'Cool the bulk and manage moisture migration',
            'Use sealed or hermetic storage where appropriate to restrict the atmosphere available to insects',
            'Clean grain to remove fines, dust, and broken kernels before storage, which also denies secondary feeders a foothold',
            'Monitor with pheromone-baited traps and temperature checks, and sample regularly',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Fumigation and insecticide use are regulated activities',
          text: 'Fumigants used against stored-grain insects are acutely hazardous and strictly regulated. Their use requires appropriately licensed or certified operators and must follow the product label and the applicable national regulation. AgricultureID does not provide fumigant or insecticide names, doses, rates, exposure times, or procedures. Note also that insecticide resistance has been documented in this species in some regions, which is a further reason such decisions belong with qualified local advisers.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'maize' },
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
    { type: 'pest', slug: 'maize-weevil' },
    { type: 'pest', slug: 'red-flour-beetle' },
    { type: 'pest', slug: 'khapra-beetle' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'Cosmopolitan in stored cereals, with greatest importance in warm and tropical regions and in bulk cereal storage; local status varies by country.',
  climateContext:
    'Warm conditions favour rapid population growth; the species is well suited to hot storage environments. Cool, dry grain slows development.',
  limitations: [
    'This is a general reference overview of the species, not storage guidance for a specific commodity, store type, climate, or jurisdiction.',
    'No development times, temperature or moisture thresholds, or population figures are given here, because meaningful values depend on the commodity, climate, storage duration, and applicable standard.',
    'Insecticide resistance status is regional and changes over time; nothing here should be read as an indication of what will or will not be effective in a given place.',
    'Treatment decisions, thresholds, and any fumigant or insecticide use are jurisdiction-specific, require licensed operators where applicable, and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, damage, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Stored-grain insect identification and monitoring',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Stored-product insect research and pheromone monitoring context',
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
    title: 'Lesser Grain Borer (Rhyzopertha dominica)',
    description:
      'Lesser grain borer explained: a highly destructive primary pest whose adults and larvae both bore sound grain, with its dust signature, detection, and control.',
    keywords: [
      'lesser grain borer',
      'Rhyzopertha dominica',
      'stored grain pest',
      'primary feeder',
      'grain dust',
    ],
  },
  structuredData: { article: true },
};
