import type { PestContent } from '@/types/content';

export const indianmealMoth: PestContent = {
  id: 'pest-indianmeal-moth',
  slug: 'indianmeal-moth',
  contentType: 'pest',
  title: 'Indianmeal Moth',
  scientificName: 'Plodia interpunctella (Lepidoptera: Pyralidae)',
  alternativeNames: [
    'Plodia interpunctella',
    'Indian meal moth',
    'Indianmeal moth',
  ],
  category: 'Insect pest',
  subcategory: 'Surface-feeding stored-product moth',
  pestGroup: 'Insect — Lepidoptera (Pyralidae)',
  summary:
    'The Indianmeal moth is the most common stored-product moth. Its larvae feed at the surface of the grain and spin silk webbing that binds kernels together, and the adult forewing is distinctively two-toned.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The Indianmeal moth is the most widespread and commonly encountered moth of stored products, found in grain stores, warehouses, food premises, and domestic pantries alike. The damaging stage is the larva — a caterpillar that feeds on grain, milled products, dried fruit, nuts, and a wide range of processed foods. The adult moth does not feed on the commodity and causes no direct damage; its role is to disperse and lay eggs.',
    },
    {
      type: 'paragraph',
      text: 'Its distinguishing behaviour is where and how the larvae feed. They work at the surface of a bulk rather than throughout it, and as they feed they spin silk, webbing kernels together into matted clumps and leaving trails of silk, cast skins, and frass. The result is that infestation of a large bin is often concentrated in a surface layer, while the grain beneath may be unaffected — a pattern quite unlike that of the beetles that permeate a bulk.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Lepidoptera, family Pyralidae',
    },
    {
      label: 'Damaging stage',
      value:
        'Larva (caterpillar); the adult moth does not feed on the commodity',
    },
    {
      label: 'Feeding habit',
      value:
        'Feeds at the surface of the grain, not throughout the bulk; spins silk webbing over it',
    },
    {
      label: 'Distinguishing feature',
      value:
        'Adult forewing two-toned — pale grey towards the base, reddish-brown or bronze beyond',
    },
    {
      label: 'Sign',
      value:
        'Silk webbing binding kernels into clumps, frass, cast skins, wandering larvae, flying moths',
    },
    {
      label: 'Monitoring aid',
      value:
        'Pheromone traps for male moths are commercially available and widely used',
    },
    {
      label: 'Key concern',
      value:
        'Contamination and webbing rather than large weight loss; surface hot spots and mould',
    },
  ],
  sections: [
    {
      id: 'identification-and-biology',
      heading: 'Identification and biology',
      body: [
        {
          type: 'paragraph',
          text: 'The adult is a small moth whose forewing is the readiest identification character in the group: the portion nearest the body is pale grey or greyish-cream, while the outer portion is reddish-brown to coppery bronze, giving a sharply two-toned appearance at rest. Few other stored-product moths show this contrast so plainly. Larvae are pale caterpillars, sometimes tinged pink, green, or brown depending on what they have been eating, with a darker head.',
        },
        {
          type: 'paragraph',
          text: 'Eggs are laid on or near the commodity. The larvae feed at the surface, spinning silk as they go, and pass through several stages before leaving the food to pupate — often wandering some distance and spinning cocoons in crevices, on walls, ceilings, and in the seams of packaging and structures. This wandering habit means that finding larvae or cocoons away from the commodity is common, and that pupae persist in the fabric of a building. Development is faster in warm conditions; the governing conditions and durations are setting-specific and are not given here.',
        },
      ],
    },
    {
      id: 'damage-to-stored-commodities',
      heading: 'How it damages stored commodities',
      body: [
        {
          type: 'paragraph',
          text: 'Weight loss from feeding is usually secondary to contamination. The webbing is the characteristic problem: silk mats kernels into clumps, clogs equipment, blocks flow in bins and hoppers, and, together with frass and cast skins, makes product commercially unacceptable. In food premises and packaged goods, the presence of larvae, webbing, or moths is typically enough to trigger rejection regardless of the quantity consumed.',
        },
        {
          type: 'paragraph',
          text: 'The surface concentration has a further consequence. Larval activity and webbing at the top of a bulk add heat and moisture and impede air movement in that layer, and the resulting warm, damp surface conditions favour storage moulds — so a moth infestation frequently develops into a surface mould and quality problem. Because moth larvae feed at the surface and do not attack sound kernels internally, this species does not create the hidden infestation that primary feeders do; its damage is comparatively visible, which is one of the few things working in favour of whoever is managing the store.',
        },
        {
          type: 'paragraph',
          text: 'Stored maize, wheat, rice, sorghum, and millet are commonly affected, along with groundnuts, dried fruit, nuts, and many processed cereal foods.',
        },
      ],
    },
    {
      id: 'detection-and-monitoring',
      heading: 'Detection and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Detection is comparatively tractable. Webbing on the grain surface is a conspicuous and fairly specific sign, and inspection should concentrate on the top layer of bulks, on the surfaces and corners of bins, and on walls, ceilings, and crevices where larvae wander to pupate. Flying adults in a store are an obvious cue, though they indicate that a generation has already completed.',
        },
        {
          type: 'paragraph',
          text: 'Pheromone traps that catch male moths are commercially available and are the standard monitoring tool for this species, used to detect presence and track activity through a season. They have a well-known limitation worth stating: they catch males, and catch reflects flight activity and trap placement, so they indicate presence and trend rather than measuring the size of an infestation or its location in a commodity. Trap data should prompt inspection rather than substitute for it.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Management follows integrated pest management, with sanitation and exclusion doing most of the work, and with particular attention to the surfaces and crevices this species exploits.',
        },
        {
          type: 'list',
          items: [
            'Sanitation of empty stores and premises: remove residual grain, food debris, webbing, and cocoons from surfaces, cracks, ledges, ceilings, and equipment, since pupae persist in the structure well away from the commodity',
            'Inspect and reject or segregate infested incoming lots and packaged goods rather than bringing them into a clean store',
            'Level and inspect the grain surface, and keep the top layer cool and dry, since this is where the species lives',
            'Cool the bulk and manage moisture; dry to the level set by the applicable grade standard or national storage guidance for the commodity and storage duration',
            'Use sealed or hermetic storage where appropriate to restrict the atmosphere available to insects',
            'Use sound packaging and rotate stock to avoid long-standing residues',
            'Monitor with pheromone traps to track activity, and confirm with inspection of surfaces and crevices',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Fumigation and insecticide use are regulated activities',
          text: 'Fumigants used against stored-product insects are acutely hazardous and strictly regulated. Their use requires appropriately licensed or certified operators and must follow the product label and the applicable national regulation. AgricultureID does not provide fumigant or insecticide names, doses, rates, exposure times, or procedures.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'groundnut' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'red-flour-beetle' },
    { type: 'pest', slug: 'sawtoothed-grain-beetle' },
    { type: 'pest', slug: 'lesser-grain-borer' },
    { type: 'pest', slug: 'leaf-rollers' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'Cosmopolitan in stores, warehouses, food premises, and homes; local status, commodity mix, and practice vary by country.',
  climateContext:
    'Warm conditions accelerate development and lengthen the active season; activity slows in cool stores, and cool surfaces are much less favourable.',
  limitations: [
    'This is a general reference overview of the species, not storage or food-premises guidance for a specific commodity, facility, or jurisdiction.',
    'No development times, temperature thresholds, or population figures are given here, because meaningful values depend on the commodity, climate, storage duration, and applicable standard.',
    'Pheromone trap catches indicate presence and trend for male moths only; they do not measure infestation size or locate it, and must not be read as a population estimate.',
    'Several stored-product moths co-occur and can be confused; the two-toned forewing is a useful pointer but confident identification may require specialist examination.',
  ],
  sourceReferences: [
    { sourceId: 'cabi', citedFor: 'Biology, hosts, damage, and distribution' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'Identification, pheromone monitoring, and IPM principles',
    },
    {
      sourceId: 'umn-extension',
      citedFor: 'Stored-product moth monitoring and sanitation context',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Stored-product insect research and monitoring context',
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
    title: 'Indianmeal Moth (Plodia interpunctella)',
    description:
      'Indianmeal moth explained: surface-feeding larvae that web grain into clumps, the two-toned adult forewing, pheromone trapping limits, and sanitation.',
    keywords: [
      'Indianmeal moth',
      'Plodia interpunctella',
      'stored product moth',
      'grain webbing',
      'pheromone trap',
    ],
  },
  structuredData: { article: true },
};
