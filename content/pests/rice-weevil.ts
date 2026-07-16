import type { PestContent } from '@/types/content';

export const riceWeevil: PestContent = {
  id: 'pest-rice-weevil',
  slug: 'rice-weevil',
  contentType: 'pest',
  title: 'Rice Weevil',
  scientificName: 'Sitophilus oryzae (Coleoptera: Curculionidae)',
  alternativeNames: ['Sitophilus oryzae'],
  category: 'Insect pest',
  subcategory: 'Internal-feeding stored-grain weevil',
  pestGroup: 'Insect — Coleoptera (Curculionidae)',
  summary:
    'The rice weevil is a primary stored-grain pest whose larvae develop hidden inside sound, whole kernels. Because the immature stages are concealed, an infested lot can look clean until adults emerge.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The rice weevil is one of the most important insects of stored cereals in warm regions. It is a primary, internal feeder: the female bores a small cavity into a sound, undamaged kernel, lays an egg inside, and seals the hole with a plug of secretion. The larva then completes its development entirely within that single kernel, feeding on the endosperm, and the adult chews its way out, leaving a characteristic ragged exit hole.',
    },
    {
      type: 'paragraph',
      text: 'This concealed development is what makes the species so consequential in storage. Unlike beetles that scavenge broken grain and dust, the rice weevil does not need grain to be damaged first — it initiates infestation in clean, whole, sound grain. It is also a capable flier, so it can move between stores and, in some regions, infest maturing grain in the field before it ever reaches the store.',
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
        'Elongated snout; reddish-brown to near-black with paler spots on the wing covers',
    },
    {
      label: 'Dispersal',
      value: 'Flies readily; also moves in infested grain consignments',
    },
    {
      label: 'Key concern',
      value:
        'Hidden infestation, weight and germination loss, hot spots and mould that follow',
    },
    {
      label: 'Sign',
      value: 'Ragged exit holes, hollowed kernels, warm or musty patches',
    },
  ],
  sections: [
    {
      id: 'identification-and-biology',
      heading: 'Identification and biology',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, reddish-brown to nearly black weevils bearing the elongated snout (rostrum) typical of the family, with elbowed antennae. The wing covers usually carry paler reddish or orange spots, and the thorax is densely and roundly pitted. Larvae are legless, white, C-shaped grubs and are almost never seen loose in a bulk, because they live and pupate inside kernels.',
        },
        {
          type: 'paragraph',
          text: 'The rice weevil is very closely similar to the maize weevil, and reliable separation of the two rests on detailed characters that are examined by a specialist rather than on colour or size impressions in a store. Both are readily separated from the granary weevil, which lacks the paler wing-cover spots and cannot fly.',
        },
        {
          type: 'paragraph',
          text: 'The female chews a cavity into the kernel, deposits a single egg, and seals it. Development from egg through larva to pupa takes place inside that kernel, and the emerging adult cuts an exit hole to leave. The rate at which this cycle proceeds depends strongly on grain temperature and moisture, and populations build fastest in warm, moist grain; the specific conditions and durations vary by commodity and setting and are not stated here.',
        },
      ],
    },
    {
      id: 'damage-to-stored-commodities',
      heading: 'How it damages stored commodities',
      body: [
        {
          type: 'paragraph',
          text: 'Damage is both direct and indirect. Larvae consume the interior of the kernel, so infested grain loses weight, nutritional value, and — because the germ may be destroyed — viability, which matters where the lot is intended for seed. Adults also feed on grain. What remains can be a hollow shell that still looks superficially intact.',
        },
        {
          type: 'paragraph',
          text: 'The indirect consequences are often the more serious ones. Insect respiration and activity generate heat and moisture within the bulk, and this moisture migrates and accumulates, creating warm, damp hot spots. Those hot spots are then favourable for storage moulds, so an insect problem frequently becomes a mould and quality problem as well. Dust, frass, cast material, and broken kernels produced by weevil activity additionally provide the damaged grain and fines that secondary feeders such as flour beetles need in order to establish.',
        },
        {
          type: 'paragraph',
          text: 'Stored cereals are the main commodities affected. Rice, maize, wheat, barley, sorghum, and oats can all be infested, with regional importance varying by what is grown and stored.',
        },
      ],
    },
    {
      id: 'detection-and-monitoring',
      heading: 'Detection and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Hidden infestation is the central detection problem. Because eggs, larvae, and pupae are sealed inside kernels, a grain sample can be visually clean and still be infested — routine visual inspection detects the adults that have already emerged, which means it detects the infestation late, after damage has been done. Treating a clean-looking sample as proof of a clean lot is a mistake.',
        },
        {
          type: 'paragraph',
          text: 'Practical monitoring therefore combines several signals: sieving samples for adults, fines, and frass; looking for exit holes and hollow or floating kernels; checking for warm or musty patches, since temperature monitoring of the bulk often reveals developing hot spots before insects are obvious; and using traps within the store. Laboratory methods able to reveal insects inside intact kernels exist and are used where hidden infestation must be established, for example in grading or trade disputes.',
        },
        {
          type: 'paragraph',
          text: 'Incoming lots deserve particular attention, since infestation most often arrives with the grain rather than beginning in the store.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management of the rice weevil is preventive far more than curative, and follows integrated pest management principles: keep the pest out, and make the store an unfavourable place for it to multiply.',
        },
        {
          type: 'list',
          items: [
            'Sanitation of empty stores before intake: remove residual grain, dust, and spillage from cracks, ledges, augers, and handling equipment, since carry-over residues are a common source of infestation',
            'Reject or segregate incoming lots that show infestation, rather than adding them to sound stock',
            'Dry grain to the level set by the applicable grade standard or national storage guidance for that commodity and storage duration, and keep it dry',
            'Cool the bulk and manage moisture migration; grain kept cool and dry is a far less favourable habitat',
            'Use sealed or hermetic storage where appropriate, which restricts the atmosphere available to insects in the bulk',
            'Clean grain to remove fines, broken kernels, and dust before storage',
            'Monitor temperature and sample regularly, so that hot spots and infestation are found early',
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
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'oats' },
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
    { type: 'pest', slug: 'maize-weevil' },
    { type: 'pest', slug: 'granary-weevil' },
    { type: 'pest', slug: 'lesser-grain-borer' },
    { type: 'pest', slug: 'weevils' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'Cosmopolitan in stored cereals, with greatest importance in warm temperate, subtropical, and tropical regions; local status and storage practice vary by country.',
  climateContext:
    'Warm, moist grain favours rapid population growth; cool, dry grain slows it. The specific conditions that govern development are commodity- and setting-specific.',
  limitations: [
    'This is a general reference overview of the species, not storage guidance for a specific commodity, store type, climate, or jurisdiction.',
    'No development times, temperature or moisture thresholds, or population figures are given here, because safe and meaningful values depend on the commodity, climate, storage duration, and applicable standard.',
    'Rice weevil and maize weevil are closely similar; reliable species identification requires specialist examination and is not achievable from a field description alone.',
    'Treatment decisions, thresholds, and any fumigant or insecticide use are jurisdiction-specific, require licensed operators where applicable, and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, damage, and distribution' },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature and distribution' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Stored-grain insect identification and storage management',
    },
    {
      sourceId: 'irri',
      citedFor: 'Stored rice pests and grain storage context',
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
    title: 'Rice Weevil (Sitophilus oryzae)',
    description:
      'Rice weevil explained: a primary stored-grain pest developing inside sound kernels, why hidden infestation defeats inspection, detection, and prevention.',
    keywords: [
      'rice weevil',
      'Sitophilus oryzae',
      'stored grain pest',
      'internal feeder',
      'hidden infestation',
    ],
  },
  structuredData: { article: true },
};
