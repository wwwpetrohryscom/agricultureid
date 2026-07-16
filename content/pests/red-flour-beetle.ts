import type { PestContent } from '@/types/content';

export const redFlourBeetle: PestContent = {
  id: 'pest-red-flour-beetle',
  slug: 'red-flour-beetle',
  contentType: 'pest',
  title: 'Red Flour Beetle',
  scientificName: 'Tribolium castaneum (Coleoptera: Tenebrionidae)',
  alternativeNames: ['Tribolium castaneum', 'Rust-red flour beetle'],
  category: 'Insect pest',
  subcategory: 'Secondary (external) stored-product beetle',
  pestGroup: 'Insect — Coleoptera (Tenebrionidae)',
  summary:
    'The red flour beetle is a secondary stored-product pest: it cannot attack sound whole kernels and instead exploits broken grain, flour, and dust. Its presence therefore usually signals that damage has already occurred.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The red flour beetle is one of the most familiar insects of grain stores, mills, and food-processing premises worldwide. It is a secondary — external — feeder, and this distinction is the key to understanding it. Unlike the grain weevils and the lesser grain borer, it is not equipped to open a sound, undamaged kernel. It feeds instead on grain that is already broken or damaged, on flour and milled products, and on the fine dust and fragments that accumulate wherever grain is handled.',
    },
    {
      type: 'paragraph',
      text: 'That dependence carries a diagnostic meaning worth taking seriously. Because the beetle needs damaged material to live on, finding it in a bulk of whole grain is rarely the whole story: it usually indicates that something else created the damage first — a primary feeder working unseen inside the kernels, or mechanical damage from handling and drying. A red flour beetle infestation is often best read as a symptom pointing at an earlier cause, and investigating that cause matters more than reacting to the beetle alone.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Tenebrionidae',
    },
    {
      label: 'Feeding type',
      value:
        'Secondary (external) feeder — cannot attack sound, undamaged whole kernels',
    },
    {
      label: 'What it exploits',
      value:
        'Broken and damaged grain, flour and milled products, dust and fines',
    },
    {
      label: 'Diagnostic meaning',
      value:
        'Its presence usually signals prior damage — from a primary feeder or from handling',
    },
    {
      label: 'Distinguishing feature',
      value:
        'Flattened reddish-brown beetle with clubbed antennae; flies, unlike the similar confused flour beetle',
    },
    {
      label: 'Quality effect',
      value:
        'Taints flour with a pungent odour and can cause discolouration; contaminates with bodies and frass',
    },
    {
      label: 'Sign',
      value: 'Adults running in fines and flour; musty, pungent smell',
    },
  ],
  sections: [
    {
      id: 'identification-and-biology',
      heading: 'Identification and biology',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, flattened, shiny reddish-brown beetles with antennae ending in an abrupt club. They are active, run quickly when disturbed, and are long-lived by the standards of storage insects. Larvae are slender, pale yellowish-brown, and cylindrical, with a forked structure at the tail end; they move freely through fines and flour rather than living inside kernels.',
        },
        {
          type: 'paragraph',
          text: 'The red flour beetle is closely similar to the confused flour beetle, Tribolium confusum, and the two commonly co-occur. They are separated on the form of the antennal club and the shape of the head behind the eyes — characters that reward careful examination and, where the distinction matters, specialist confirmation. A practical behavioural difference is that the red flour beetle flies readily, particularly in warm conditions, while the confused flour beetle does so rarely; this affects how each colonises premises and how each is caught in traps.',
        },
        {
          type: 'paragraph',
          text: 'Eggs are laid loose among flour, fines, and grain, and are sticky, so they adhere to the material around them and to sacking and equipment. All stages live externally in the commodity. Populations build fastest in warm conditions and where fines and dust accumulate; the governing conditions and durations are setting-specific and are not given here.',
        },
      ],
    },
    {
      id: 'damage-to-stored-commodities',
      heading: 'How it damages stored commodities',
      body: [
        {
          type: 'paragraph',
          text: 'Direct consumption is only part of the loss. The greater problem in flour and milled products is contamination and taint: the beetles secrete defensive compounds (benzoquinones) that impart a pungent, acrid odour and can discolour flour, rendering product unacceptable even where the amount eaten is modest. Cast skins, bodies, and frass add to the contamination load. In milling and food premises this quality effect, rather than weight loss, is typically what makes the species commercially serious.',
        },
        {
          type: 'paragraph',
          text: 'In stored grain, the beetle concentrates in the fines and broken kernels — often in the centre of a bin where fines accumulate during filling, or wherever handling has cracked grain. Its activity, like that of other stored-product insects, contributes heat and moisture to the bulk; the resulting hot spots then favour storage moulds, so an insect problem can become a mould and quality problem. And because the beetle feeds on the germ of broken kernels, grain intended for seed can lose viability.',
        },
        {
          type: 'paragraph',
          text: 'Stored wheat, maize, rice, sorghum, barley, and millet are commonly involved, along with groundnuts and the milled products derived from cereals.',
        },
      ],
    },
    {
      id: 'detection-and-monitoring',
      heading: 'Detection and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'This species is easier to detect than the primary feeders, precisely because it lives externally: adults are visible, mobile, and readily caught. Sieving samples, inspecting fines and residues, and trapping in stores and premises all work, and pheromone lures for Tribolium are commercially available and widely used.',
        },
        {
          type: 'paragraph',
          text: 'The interpretive point matters more than the mechanics. When red flour beetles turn up in whole grain, the useful question is what damaged the grain in the first place. A search should follow for hidden primary infestation — exit holes, hollow kernels, dust, warm patches — and for sources of mechanical damage in handling and drying. Note too that a clean-looking sample of whole grain can conceal a primary infestation, so the absence of visible damage does not settle the matter.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Because this beetle depends on broken material and fines, denying it that resource is the core of management, alongside the general integrated pest management measures for stores.',
        },
        {
          type: 'list',
          items: [
            'Sanitation is the central control: remove accumulated flour, dust, fines, and residues from cracks, ledges, augers, elevators, and machinery, since these residues are where populations persist and where sticky eggs remain',
            'Clean grain to remove fines and broken kernels before storage, and minimise mechanical damage during handling and drying',
            'Address any underlying primary infestation, since the flour beetle problem is often downstream of it',
            'Reject or segregate infested incoming lots rather than mixing them into sound stock',
            'Dry to the level set by the applicable grade standard or national storage guidance for the commodity and storage duration, and cool the bulk',
            'Use sealed or hermetic storage where appropriate to restrict the atmosphere available to insects',
            'Monitor with traps, including pheromone-baited traps, and sample fines and residues regularly',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Fumigation and insecticide use are regulated activities',
          text: 'Fumigants used against stored-product insects are acutely hazardous and strictly regulated. Their use requires appropriately licensed or certified operators and must follow the product label and the applicable national regulation. AgricultureID does not provide fumigant or insecticide names, doses, rates, exposure times, or procedures. Insecticide resistance is documented in this species in some regions, a further reason such decisions belong with qualified local advisers.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'groundnut' },
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
    { type: 'pest', slug: 'sawtoothed-grain-beetle' },
    { type: 'pest', slug: 'lesser-grain-borer' },
    { type: 'pest', slug: 'rice-weevil' },
    { type: 'pest', slug: 'indianmeal-moth' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'Cosmopolitan in grain stores, mills, and food premises, with greatest importance in warm regions; local status and practice vary by country.',
  climateContext:
    'Favoured by warm conditions and by accumulations of fines and dust; cool, clean, dry storage is much less hospitable.',
  limitations: [
    'This is a general reference overview of the species, not storage or food-premises guidance for a specific commodity, facility, or jurisdiction.',
    'No development times, temperature or moisture thresholds, or population figures are given here, because meaningful values depend on the commodity, climate, storage duration, and applicable standard.',
    'The red flour beetle and confused flour beetle are closely similar and often co-occur; reliable separation requires careful or specialist examination.',
    'Treatment decisions, thresholds, and any fumigant or insecticide use are jurisdiction-specific, require licensed operators where applicable, and are not provided here.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, damage, and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Stored-product beetle identification and IPM principles',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Stored-product insect research and pheromone monitoring context',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Stored-grain insect management and store sanitation',
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
    title: 'Red Flour Beetle (Tribolium castaneum)',
    description:
      'Red flour beetle explained: a secondary feeder that cannot attack sound grain, why its presence signals earlier damage, plus taint, detection, and sanitation.',
    keywords: [
      'red flour beetle',
      'Tribolium castaneum',
      'secondary feeder',
      'stored product pest',
      'flour taint',
    ],
  },
  structuredData: { article: true },
};
