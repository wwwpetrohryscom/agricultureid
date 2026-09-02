import type { CropContent } from '@/types/content';

export const perennialRyegrass: CropContent = {
  id: 'crop-perennial-ryegrass',
  slug: 'perennial-ryegrass',
  contentType: 'crop',
  title: 'Perennial Ryegrass',
  scientificName: 'Lolium perenne',
  alternativeNames: ['English ryegrass', 'Ray grass'],
  category: 'Forage crop',
  subcategory: 'Perennial temperate grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Perennial ryegrass is the sown grass on which temperate grazing systems are built. Cultivars are chosen on heading date and ploidy, and the fungal endophyte carried in the seed determines both insect tolerance and the risk of livestock disorders.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Across temperate maritime regions — Ireland, Britain, the Netherlands, New Zealand, southern Chile, coastal Australia and the Pacific Northwest — perennial ryegrass is the default sown grass. It establishes quickly, tolerates repeated close defoliation, and converts nitrogen into digestible feed more readily than most alternatives.',
    },
    {
      type: 'paragraph',
      text: 'It is also demanding. The species is shallow-rooted, intolerant of prolonged drought and of severe cold, and it persists only where the rainfall and temperature pattern suits it. Outside that band it is a short-lived crop that has to be resown.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Photosynthetic pathway', value: 'C3, cool-season' },
    {
      label: 'Cultivar descriptors',
      value: 'Heading date and ploidy — diploid or tetraploid',
    },
    {
      label: 'Fungal endophyte',
      value:
        'Epichloë seedborne symbiont; strain choice is a management decision',
    },
    {
      label: 'Feed quality trait',
      value:
        'High water-soluble carbohydrate relative to other temperate grasses',
    },
    {
      label: 'Typical use',
      value: 'Grazed pasture, silage, and hay in mixtures',
    },
  ],
  sections: [
    {
      id: 'heading-date',
      heading: 'Heading date, and why it is the first choice',
      body: [
        {
          type: 'paragraph',
          text: 'Every perennial ryegrass cultivar is characterised first by the date at which it produces seed heads. Once a plant heads, stem replaces leaf, digestibility falls quickly, and the sward stops being uniform grazing.',
        },
        {
          type: 'paragraph',
          text: 'Matching heading date to the system is therefore the primary selection decision. A single early cultivar concentrates the quality decline into one narrow window; blending cultivars of different heading dates spreads it, at the cost of a sward that is never entirely uniform. Mixing across a wide spread of heading dates within one paddock generally makes grazing management harder rather than easier.',
        },
      ],
    },
    {
      id: 'ploidy',
      heading: 'Diploid and tetraploid',
      body: [
        {
          type: 'paragraph',
          text: 'Tetraploid cultivars have larger cells with a higher water content, wider leaves and more soluble sugar, and stock generally prefer them. They are also more open in the base, which admits weeds and makes them less tolerant of poaching in wet conditions.',
        },
        {
          type: 'paragraph',
          text: 'Diploids tiller more densely and produce a tighter sward that carries stock better on heavy ground. Many sown mixtures deliberately combine the two, and seeding rate has to be raised for tetraploids because their seed is heavier.',
        },
      ],
    },
    {
      id: 'endophyte',
      heading: 'The endophyte',
      body: [
        {
          type: 'paragraph',
          text: 'Most perennial ryegrass carries a seedborne Epichloë fungus in its tissues. The fungus produces alkaloids that deter insect pests, and wild-type strains substantially improve persistence where those insects are damaging. The same alkaloids cause ryegrass staggers and heat stress in grazing livestock.',
        },
        {
          type: 'paragraph',
          text: 'Selected endophyte strains retain insect deterrence while producing less of the alkaloids implicated in animal disorders, and endophyte-free seed avoids the disorders entirely at the cost of insect protection. Which is appropriate depends on the local pest complex, so this is a regional decision. Endophyte is a living organism in the seed and its viability declines in warm storage, so seed age and storage conditions matter.',
        },
      ],
    },
    {
      id: 'establishment',
      heading: 'Establishment',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is small and needs shallow placement into a firm, fine seedbed with good seed-to-soil contact. The species establishes fast enough to be direct-drilled into a sprayed-off sward where cultivation is undesirable, and slot width and drill setting then determine the result more than seed rate does.',
        },
        {
          type: 'paragraph',
          text: 'The first grazing is taken light and early to encourage tillering rather than to remove bulk. A new sward grazed too hard or too late in its first season is slower to reach full tiller density.',
        },
      ],
    },
    {
      id: 'grazing',
      heading: 'Grazing management and regrowth',
      body: [
        {
          type: 'paragraph',
          text: 'Regrowth comes from tillers, and tiller density is maintained by grazing to a consistent residual rather than by resting the sward for long periods. Grazing too low removes the base of the leaf and the energy reserves that drive regrowth; grazing too high leaves rejected material that shades out tillers and reduces density over a season.',
        },
        {
          type: 'paragraph',
          text: 'Rotational systems are built around a rest interval expressed in leaves per tiller rather than in fixed days, because the interval that produces three leaves varies with season and temperature.',
        },
      ],
    },
    {
      id: 'nitrogen',
      heading: 'Nitrogen response',
      body: [
        {
          type: 'paragraph',
          text: 'The species responds strongly and linearly to nitrogen over a wide range, which is why it dominates intensively managed grassland. The response curve flattens as supply exceeds what growth can use, and surplus nitrogen appears as nitrate in the plant and as loss to water and air.',
        },
        {
          type: 'paragraph',
          text: 'Where ryegrass is grown with white clover, the clover’s fixed nitrogen substitutes for part of the fertiliser requirement, and heavy nitrogen use suppresses the clover — so the two decisions cannot be made separately.',
        },
      ],
    },
    {
      id: 'quality',
      heading: 'Feed value and how it is measured',
      body: [
        {
          type: 'paragraph',
          text: 'Perennial ryegrass is measured on digestibility and metabolisable energy, and on water-soluble carbohydrate content, which is higher than in most temperate grasses and which matters for silage fermentation as well as for the animal.',
        },
        {
          type: 'paragraph',
          text: 'All of these fall as the plant moves towards heading, so feed value is a function of growth stage at defoliation rather than a fixed cultivar property. A high-quality cultivar grazed late is worse feed than a modest one grazed on time.',
        },
      ],
    },
    {
      id: 'persistence',
      heading: 'Persistence and what ends a sward',
      body: [
        {
          type: 'paragraph',
          text: 'Swards decline through loss of ryegrass tillers and their replacement by unsown grasses and broadleaf weeds. Summer drought, insect damage where endophyte protection is absent, treading damage on wet soils and repeated overgrazing are the usual causes, generally acting together.',
        },
        {
          type: 'paragraph',
          text: 'Because decline is gradual, the practical question is not whether a sward has failed but at what point renewal returns more than continued management. That threshold is an economic judgement particular to the farm.',
        },
      ],
    },
    {
      id: 'seed-crop',
      heading: 'Grown for seed',
      body: [
        {
          type: 'paragraph',
          text: 'Ryegrass seed production is a specialised crop in its own right, concentrated in a few regions with reliably dry harvest weather. The agronomy inverts the grazing objective: the crop is managed to produce and retain a uniform seed head rather than to suppress heading.',
        },
        {
          type: 'paragraph',
          text: 'Isolation distances are required because the species is wind-pollinated and outcrossing, and shattering losses at harvest are the main technical constraint on yield.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'ergot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'damping-off' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'slugs' },
    { type: 'pest', slug: 'white-grubs' },
    { type: 'pest', slug: 'wireworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'gleysol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'climate', slug: 'photoperiod' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'forage-harvester' },
    { type: 'machinery', slug: 'rotary-mower' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'silvopasture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'white-clover' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'crop', slug: 'red-clover' },
  ],
  glossaryTerms: ['forage', 'perennial-crop', 'ruminant'],
  geographicScope:
    'Temperate maritime regions. Cultivar recommended lists, heading-date conventions and endophyte availability are national.',
  climateContext:
    'Cool-season C3 grass of moist temperate climates; shallow-rooted and intolerant of prolonged drought or severe cold.',
  limitations: [
    'Heading dates are reported on national scales that are not directly comparable between countries; a cultivar’s rating in one recommended list does not transfer to another.',
    'Endophyte strain availability and the local insect complex are region-specific, and the endophyte decision cannot be generalised.',
    'Feed-value figures depend on growth stage at defoliation and are not fixed cultivar properties.',
    'Nitrogen application limits are set by national regulation in several jurisdictions and are not stated here.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Temperate forage grass context' },
    {
      sourceId: 'ahdb',
      citedFor: 'Grass recommended lists and grazing management',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Lolium perenne compendium data' },
    {
      sourceId: 'faostat',
      citedFor: 'Permanent meadow and pasture area statistics',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Perennial Ryegrass',
    description:
      'Lolium perenne as a sown forage crop: heading date, ploidy, the endophyte decision, grazing residuals, nitrogen response and sward persistence.',
    keywords: [
      'perennial ryegrass',
      'Lolium perenne',
      'ryegrass endophyte',
      'heading date',
      'grazing management',
    ],
  },
  structuredData: { article: true },
};
