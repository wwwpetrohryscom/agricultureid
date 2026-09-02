import type { CropContent } from '@/types/content';

export const nigerSeed: CropContent = {
  id: 'crop-niger-seed',
  slug: 'niger-seed',
  contentType: 'crop',
  title: 'Niger Seed',
  scientificName: 'Guizotia abyssinica',
  alternativeNames: ['Noug', 'Ramtil', 'Nyjer'],
  category: 'Oilseed crop',
  subcategory: 'Annual composite oilseed',
  botanicalFamily: 'Asteraceae (daisy family)',
  lifecycle: 'Annual',
  summary:
    "Niger seed supplies roughly half of Ethiopia's oilseed output from a strictly self-incompatible crop, so every seed set depends on an insect carrying pollen between different plants — and pollinator scarcity shows up directly as yield loss.",
  introduction: [
    {
      type: 'paragraph',
      text: 'Niger, called noug in Ethiopia, is an oilseed of the daisy family grown mainly in Ethiopia and India. It accounts for something in the region of half of Ethiopian oilseed production, which makes it a major national crop and an obscure one internationally.',
    },
    {
      type: 'paragraph',
      text: 'The trait that governs its agronomy and its breeding is strict self-incompatibility: pollen from the same plant does not set seed, and self-pollination is further hindered because pollen does not reach the receptive part of its own stigma. Yield is therefore a function of pollinator activity in a way that most oilseeds are not.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Asteraceae (daisy family)' },
    {
      label: 'Breeding system',
      value:
        'Strictly self-incompatible; self-compatible lines only recently developed',
    },
    {
      label: 'Share of Ethiopian oilseed output',
      value: 'Reported at roughly 50 to 60 per cent',
    },
    {
      label: 'Seed oil content',
      value: 'Reported in the range of 50 to 60 per cent',
    },
    {
      label: 'Main losses',
      value:
        'Shattering at maturity and low seed set where pollinators are scarce',
    },
    {
      label: 'International trade name',
      value: 'Sold as nyjer for wild-bird feed',
    },
  ],
  sections: [
    {
      id: 'self-incompatible',
      heading: 'Self-incompatibility governs everything',
      body: [
        {
          type: 'paragraph',
          text: "Niger is strictly self-incompatible, and its floral structure additionally keeps a plant's own pollen off its receptive stigma. Seed set therefore requires an insect to carry pollen between genetically different plants, and in areas where pollinators are scarce seed set is low and yield falls with it. The trait is also why breeding is slow: without selfing, a breeder cannot fix a line.",
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'breeding',
      heading: 'Breeding without selfing',
      body: [
        {
          type: 'paragraph',
          text: 'Ethiopian and Indian programmes work by mass selection and sib-mating rather than the pedigree methods that a self-compatible crop allows, screening for lines that do not collapse under inbreeding. Self-compatible lines have been developed recently and are the main route to conventional varietal improvement in the crop.',
        },
      ],
    },
    {
      id: 'ethiopia',
      heading: 'A crop of national scale that is barely known abroad',
      body: [
        {
          type: 'paragraph',
          text: "Niger supplies about half of Ethiopia's oil crop output and is grown there in rotation with cereals and pulses. Outside Ethiopia and India it is almost unknown as a food oil, which means most published agronomy for it exists in those two countries' research systems and not in the international literature.",
        },
      ],
    },
    {
      id: 'nyjer',
      heading: 'Nyjer is the same crop',
      body: [
        {
          type: 'paragraph',
          text: 'The seed sold internationally as nyjer for wild-bird feeders is niger seed, imported in quantity and heat-sterilised on entry in several countries to prevent germination. That trade, not edible oil, is what most importers of the crop are buying, and it sets a different quality specification from the domestic oil market.',
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'Shattering sets the harvest window',
      body: [
        {
          type: 'paragraph',
          text: 'Heads shatter as they dry, and the crop is cut and stooked before it is fully dry rather than left standing. Reducing shattering is a stated breeding objective, and until it is achieved the harvest window is narrow and labour-intensive.',
        },
      ],
    },
    {
      id: 'marginal',
      heading: 'Grown where other crops are not',
      body: [
        {
          type: 'paragraph',
          text: "Niger tolerates waterlogged and low-fertility soils that defeat other oilseeds, and it is often placed on the poorest fields in a holding. That placement rather than the crop's potential is a large part of why recorded yields are low.",
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'oil',
      heading: 'The oil',
      body: [
        {
          type: 'paragraph',
          text: 'The seed is oil-rich, and the oil is used domestically for food and, outside the food market, for soap and fuel. The seedcake is fed to livestock, so the crop earns from both fractions where a domestic crushing industry exists.',
        },
      ],
    },
    {
      id: 'rotation',
      heading: 'Position in the rotation',
      body: [
        {
          type: 'paragraph',
          text: 'In Ethiopian systems niger is grown in rotation with cereals and pulses, and as a composite it shares few soil-borne pathogens with either, which is a real rotation benefit in a system dominated by cereals.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'Names to keep apart',
      body: [
        {
          type: 'paragraph',
          text: 'Niger seed, noug, ramtil and nyjer are all the same species. The crop has no relationship to the country whose name it resembles, and the trade spelling nyjer was adopted deliberately to separate the two in bird-feed marketing.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'aphids' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'cutworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'vertisol' },
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'clay-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'processing-method', slug: 'mechanical-pressing' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'sesame' },
    { type: 'crop', slug: 'safflower' },
  ],
  glossaryTerms: ['annual-crop'],
  geographicScope:
    'Ethiopia and India account for essentially all production. Traded internationally as bird feed rather than as an oilseed.',
  climateContext:
    'Warm-season annual tolerant of waterlogging and low fertility; grown in highland and mid-altitude systems.',
  limitations: [
    'Production and oil-content figures are reported ranges from national and research literature and vary widely by region and season.',
    'Most agronomy for this crop is published in Ethiopian and Indian research systems; international coverage is thin.',
    'Import treatment requirements for bird-feed niger differ by jurisdiction and are not reproduced here.',
  ],
  sourceReferences: [
    { sourceId: 'cgiar', citedFor: 'Niger germplasm and breeding research' },
    { sourceId: 'et-moa', citedFor: 'Ethiopian oilseed production context' },
    { sourceId: 'icar', citedFor: 'Indian niger agronomy' },
    { sourceId: 'cabi', citedFor: 'Guizotia abyssinica compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Niger Seed',
    description:
      'Guizotia abyssinica as a crop: strict self-incompatibility and pollinator-dependent yield, Ethiopian scale, shattering losses and the nyjer bird-feed trade.',
    keywords: [
      'niger seed',
      'noug',
      'Guizotia abyssinica',
      'nyjer',
      'self-incompatible oilseed',
    ],
  },
  structuredData: { article: true },
};
