import type { CropContent } from '@/types/content';

export const arabicaCoffee: CropContent = {
  id: 'crop-arabica-coffee',
  slug: 'arabica-coffee',
  contentType: 'crop',
  title: 'Arabica Coffee',
  scientificName: 'Coffea arabica',
  alternativeNames: ['Arabica', 'Mountain coffee', 'Coffee'],
  category: 'Beverage crop',
  subcategory: 'Perennial evergreen shrub',
  botanicalFamily: 'Rubiaceae (madder family)',
  lifecycle: 'Perennial',
  summary:
    'Arabica is the tetraploid, self-fertile coffee species of tropical highlands. It supplies most speciality and filter coffee, and its narrow climatic window and susceptibility to leaf rust shape where and how it can be grown.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Coffea arabica is the only naturally polyploid species in commercial coffee: an allotetraploid with 44 chromosomes, formed from a hybridisation between two diploid ancestors. Unusually for the genus it is self-fertile, so a planting reproduces true to type from seed and farms can maintain their own selections without a breeding programme.',
    },
    {
      type: 'paragraph',
      text: 'That reproductive biology has a cost. Cultivated arabica descends from a very narrow founding population, and its genetic base is correspondingly shallow — which is the background to its poor standing resistance to the diseases that now define the crop’s economics.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rubiaceae (madder family)' },
    { label: 'Ploidy', value: 'Allotetraploid, 2n = 4x = 44' },
    { label: 'Breeding system', value: 'Self-fertile; propagated from seed' },
    {
      label: 'Typical altitude',
      value: 'Tropical highlands, broadly 1,000–2,200 m depending on latitude',
    },
    { label: 'Harvested part', value: 'Seed (bean) from the ripe cherry' },
    {
      label: 'Defining constraint',
      value: 'Coffee leaf rust, and a narrow tolerance of high temperature',
    },
  ],
  sections: [
    {
      id: 'origin-diversity',
      heading: 'Origin and the narrowness of the gene pool',
      body: [
        {
          type: 'paragraph',
          text: 'Wild arabica occurs in the montane forests of southwestern Ethiopia and adjacent South Sudan, where the species retains far more variation than anything in cultivation. Nearly all commercial plantings trace to a handful of introductions, and the Typica and Bourbon lineages account for the ancestry of most named cultivars grown today.',
        },
        {
          type: 'paragraph',
          text: 'Selections such as Caturra and Catuai are compact mutants of that same base rather than independent lineages. Where genuine disease resistance has been introduced it has usually come from outside the species, via the spontaneous Timor hybrid that carries introgressed material from robusta.',
        },
      ],
    },
    {
      id: 'climate',
      heading: 'The climatic window',
      body: [
        {
          type: 'paragraph',
          text: 'Arabica performs within a comparatively narrow band of mean temperature. Persistently high temperatures accelerate ripening and degrade cup quality, while frost kills. In practice growers reach that band by climbing: nearer the equator the crop sits higher, further from it lower.',
        },
        {
          type: 'paragraph',
          text: 'Flowering is triggered by rainfall following a dry period, so the pattern of the rains, not only their total, determines how many flowering events a season produces and how uneven the resulting ripening will be.',
        },
      ],
    },
    {
      id: 'shade-systems',
      heading: 'Shade and planting systems',
      body: [
        {
          type: 'paragraph',
          text: 'The species evolved as a forest understorey shrub, and shaded systems remain common where temperatures run high, where soils are shallow, or where the shade trees themselves are wanted for timber, fruit or nitrogen fixation. Shade moderates leaf temperature and slows ripening, which is often associated with denser beans.',
        },
        {
          type: 'paragraph',
          text: 'Full-sun plantings at higher densities can yield more where inputs and moisture allow, at the cost of faster nutrient depletion, greater exposure to heat, and a shorter productive life before renovation is needed.',
        },
      ],
    },
    {
      id: 'leaf-rust',
      heading: 'Coffee leaf rust',
      body: [
        {
          type: 'paragraph',
          text: 'Hemileia vastatrix is the disease against which arabica cultivation is organised. Susceptible varieties defoliate, and because the crop is carried on the previous season’s growth, defoliation costs two harvests rather than one. The epidemic that spread through Central America from 2012 pushed large areas into replanting with resistant material.',
        },
        {
          type: 'paragraph',
          text: 'Resistance derived from the Timor hybrid has repeatedly been overcome as new rust races appear, so resistant cultivar lists are provisional and regional. Altitude no longer offers the protection it once did in some producing regions.',
        },
      ],
    },
    {
      id: 'other-pests',
      heading: 'Berry borer and other pressures',
      body: [
        {
          type: 'paragraph',
          text: 'The coffee berry borer bores into the developing seed, and because the insect completes its life cycle inside the berry it is largely out of reach of contact treatments. Sanitation — stripping and destroying residual berries after harvest — is the intervention with the clearest effect on the following season.',
        },
        {
          type: 'paragraph',
          text: 'Nematodes limit replanting on old coffee land in several producing countries, and are one of the main reasons arabica is grown grafted onto robusta rootstock in parts of Central America.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest and the ripeness problem',
      body: [
        {
          type: 'paragraph',
          text: 'Multiple flowering events mean a single branch can carry unripe, ripe and overripe cherries at once. Selective hand-picking over several passes captures only ripe fruit and is the basis of most high-value production; stripping or mechanical harvesting takes everything and shifts the sorting problem to the mill.',
        },
        {
          type: 'paragraph',
          text: 'Because picking is repeated and selective, labour availability at harvest is frequently the binding constraint on an arabica farm rather than land or yield potential.',
        },
      ],
    },
    {
      id: 'processing',
      heading: 'Processing at origin',
      body: [
        {
          type: 'paragraph',
          text: 'Cherries are either pulped and fermented to remove the mucilage before drying, or dried whole, or pulped and dried with mucilage still attached. Each route produces a recognisably different cup from identical fruit, and the choice is usually dictated by water availability and drying weather as much as by preference.',
        },
        {
          type: 'paragraph',
          text: 'Whatever the route, drying to a stable moisture and holding the parchment coffee in stable conditions determines how long the lot keeps its character in store.',
        },
      ],
    },
    {
      id: 'quality',
      heading: 'What the trade measures',
      body: [
        {
          type: 'paragraph',
          text: 'Arabica is graded on screen size, defect count and, at the higher end, on sensory evaluation by trained cuppers. Caffeine content is roughly half that of robusta, and the acidity and aromatic complexity that distinguish the species are precisely what heat and over-ripening erode.',
        },
        {
          type: 'paragraph',
          text: 'Physical grade and cup score are separate assessments and can disagree: a lot may be physically clean and sensorially unremarkable, or the reverse.',
        },
      ],
    },
    {
      id: 'economics',
      heading: 'Renovation and the smallholder economy',
      body: [
        {
          type: 'paragraph',
          text: 'Productive life is finite and yields decline with age, so a coffee farm is a rolling replanting programme rather than a fixed asset. Renovation costs several years of income from the replanted area before the new trees bear, which is why it is so often deferred on smallholdings.',
        },
        {
          type: 'paragraph',
          text: 'Most arabica is produced on small farms, and the interaction between deferred renovation, rust pressure and a volatile price is the structural problem of the sector rather than an agronomic one.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'coffee-leaf-rust' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'coffee-berry-borer' },
    { type: 'pest', slug: 'root-knot-nematode' },
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'leaf-miners' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'volcanic-soil' },
    { type: 'soil', slug: 'andosol' },
    { type: 'soil', slug: 'ferralsol' },
  ],
  connections: [
    { type: 'commodity', slug: 'green-coffee' },
    { type: 'commodity', slug: 'coffee-cherries' },
    { type: 'climate', slug: 'temperature' },
    { type: 'climate', slug: 'frost' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'robusta-coffee' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Global overview of arabica-producing regions. Altitude bands, cultivar recommendations and rust-resistance status are country-specific.',
  climateContext:
    'Tropical highland; narrow thermal optimum, rainfall-triggered flowering, killed by frost.',
  limitations: [
    'Altitude ranges are given as broad bands; the workable altitude for arabica shifts with latitude, aspect and local climate and cannot be stated as a single figure.',
    'Rust-resistant cultivar recommendations are provisional and regional because resistance derived from the Timor hybrid has been overcome by new races in several countries.',
    'Cup-quality descriptions reflect sensory conventions of the speciality trade, not measured physical properties.',
    'Production and price statistics change continuously and should be taken from primary sources.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Coffee production systems and context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'ico', citedFor: 'Trade, grading and market structure' },
    {
      sourceId: 'cabi',
      citedFor: 'Coffee leaf rust and berry borer compendium data',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Arabica Coffee',
    description:
      'Coffea arabica as a distinct species: tetraploid self-fertile biology, the narrow highland climatic window, coffee leaf rust, harvest and processing at origin.',
    keywords: [
      'arabica coffee',
      'Coffea arabica',
      'coffee leaf rust',
      'highland coffee',
      'speciality coffee',
    ],
  },
  structuredData: { article: true },
};
