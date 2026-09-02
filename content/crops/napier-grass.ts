import type { CropContent } from '@/types/content';

export const napierGrass: CropContent = {
  id: 'crop-napier-grass',
  slug: 'napier-grass',
  contentType: 'crop',
  title: 'Napier Grass',
  scientificName: 'Cenchrus purpureus',
  alternativeNames: ['Elephant grass', 'Pennisetum purpureum (former name)'],
  category: 'Forage crop',
  subcategory: 'Tall tropical perennial grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Napier grass is the cut-and-carry forage of smallholder tropical dairying. It produces more biomass per hectare than any other tropical forage in common use, and it is harvested by hand and carried to the animal rather than grazed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Across East Africa and much of the humid tropics, a smallholder dairy cow is fed by someone cutting napier grass and carrying it to a stall. The grass grows three metres and more, regrows from the stool after each cut, and produces a quantity of biomass no grazed pasture on the same area could match.',
    },
    {
      type: 'paragraph',
      text: 'It is also the trap crop in push-pull, one of the most widely adopted smallholder pest-management systems in Africa, which gives it a second role entirely separate from feeding livestock.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Photosynthetic pathway', value: 'C4' },
    {
      label: 'Accepted name',
      value: 'Cenchrus purpureus, transferred from Pennisetum',
    },
    {
      label: 'Growth habit',
      value:
        'Tall perennial bunch grass, cut repeatedly from a persistent stool',
    },
    {
      label: 'Principal system',
      value: 'Cut-and-carry (zero-grazing) smallholder dairy',
    },
    { label: 'Second role', value: 'Border trap crop in the push-pull system' },
  ],
  sections: [
    {
      id: 'cut-and-carry',
      heading: 'Why it is cut and not grazed',
      body: [
        {
          type: 'paragraph',
          text: 'Napier grows too tall to graze efficiently and is damaged by trampling, so it is planted in blocks, cut at intervals and carried to housed animals. That system concentrates a large quantity of feed onto a small area, which is what makes dairying possible on a smallholding with no grazing land.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'biomass',
      heading: 'Yield and its cost',
      body: [
        {
          type: 'paragraph',
          text: 'Biomass production is very high, and so is nutrient removal: every cut carries nitrogen and potassium off the plot, and napier stands decline without return of manure or fertiliser. In practice the manure from the stall goes back to the napier plot, which closes the loop the system depends on.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'cutting-height',
      heading: 'Cutting height and stool life',
      body: [
        {
          type: 'paragraph',
          text: 'Regrowth comes from buds on the stubble, so cutting too low removes the regrowth points and cutting too high leaves woody stem that is refused. A stand is expected to last years, and the usual cause of decline is cutting practice rather than age.',
        },
      ],
    },
    {
      id: 'quality',
      heading: 'Quality falls fast',
      body: [
        {
          type: 'paragraph',
          text: 'Napier is at its best young and loses digestibility quickly as the stem lignifies, so a plot cut on schedule feeds well and a plot allowed to stand becomes bulk with little value. The cutting interval, not the yield, is what determines the milk.',
        },
      ],
    },
    {
      id: 'push-pull',
      heading: 'The push-pull role',
      body: [
        {
          type: 'paragraph',
          text: 'In the push-pull system napier is planted as a border around a cereal crop to attract stemborer moths away from it, while an intercropped legume repels them. The napier is a trap: moths lay on it and the larvae do not survive, which is why the border matters as much as the intercrop.',
        },
      ],
    },
    {
      id: 'stunt',
      heading: 'Napier stunt disease',
      body: [
        {
          type: 'paragraph',
          text: 'A phytoplasma disease causes severe stunting and has destroyed plantings across East Africa. It spreads through infected planting material and by insect vectors, so clean planting material and removal of affected stools are the control, and tolerant accessions are an active breeding target.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'propagation',
      heading: 'Planted from stem, not seed',
      body: [
        {
          type: 'paragraph',
          text: 'Napier is established from stem cuttings or root splits rather than from seed, which means planting material carries whatever disease the parent stand had. That is the mechanism behind the spread of stunt and the reason clean material is a formal input in the system.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'A name that moved',
      body: [
        {
          type: 'paragraph',
          text: 'Both authorities now accept Cenchrus purpureus, transferring the species out of Pennisetum. Extension literature, seed catalogues and much of the research record use Pennisetum purpureum, so a reader matching sources will meet both names for one grass.',
        },
      ],
    },
    {
      id: 'hybrids',
      heading: 'Napier hybrids',
      body: [
        {
          type: 'paragraph',
          text: 'Crosses between napier and pearl millet are grown where a finer, more digestible or more disease-tolerant forage is wanted, and they are sterile, which suits a crop propagated vegetatively anyway. They are a distinct planting decision rather than a cultivar choice within napier.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'downy-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'rice-blast' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'aphids' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'laterite-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'machinery', slug: 'forage-harvester' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'millet' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'maize' },

    { type: 'crop', slug: 'switchgrass' },
  ],
  glossaryTerms: ['forage', 'perennial-crop', 'ruminant'],
  geographicScope:
    'Humid and sub-humid tropics, with East Africa the principal smallholder dairy context. Cutting intervals and cultivar recommendations are national.',
  climateContext:
    'Tropical C4 perennial; high water and nutrient demand, sensitive to frost, tolerant of a dry season by dying back.',
  limitations: [
    'Cutting intervals and heights differ by cultivar, season and system; the principles here do not substitute for local recommendation.',
    'Napier stunt distribution and severity vary by region; current status should be taken from national plant-health authorities.',
    'Biomass yields are highly management-dependent and no figure is given.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Tropical forage production and smallholder dairy systems',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Napier improvement, stunt disease and push-pull research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Cenchrus purpureus compendium data' },
    { sourceId: 'iita', citedFor: 'African forage and cropping systems' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Napier Grass',
    description:
      'Cenchrus purpureus as a forage crop: cut-and-carry smallholder dairy, cutting height and stool life, napier stunt disease and the push-pull trap role.',
    keywords: [
      'napier grass',
      'elephant grass',
      'Cenchrus purpureus',
      'cut and carry',
      'push-pull',
    ],
  },
  structuredData: { article: true },
};
