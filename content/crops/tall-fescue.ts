import type { CropContent } from '@/types/content';

export const tallFescue: CropContent = {
  id: 'crop-tall-fescue',
  slug: 'tall-fescue',
  contentType: 'crop',
  title: 'Tall Fescue',
  scientificName: 'Lolium arundinaceum',
  alternativeNames: ['Festuca arundinacea (former name)'],
  category: 'Forage crop',
  subcategory: 'Deep-rooted perennial pasture grass',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Perennial',
  summary:
    'Tall fescue is the most widely sown pasture grass of the humid transition zone, and the only forage crop whose defining management question is which fungus is living inside the seed.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tall fescue persists where the cool-season grasses struggle with summer heat and the warm-season grasses struggle with winter, which is why it dominates the transition zone of the eastern United States and appears in comparable climates elsewhere. It is deep-rooted, tolerant of drought and of hard grazing, and it endures.',
    },
    {
      type: 'paragraph',
      text: 'Almost all of that persistence comes from a fungal endophyte living between its cells, and the same fungus makes the grass poisonous to the animals eating it. The whole modern agronomy of the crop is the attempt to keep one of those things without the other.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    {
      label: 'Accepted name',
      value: 'Lolium arundinaceum, transferred from Festuca',
    },
    { label: 'Photosynthetic pathway', value: 'C3, cool-season' },
    { label: 'Endophyte', value: 'Epichloë coenophiala, seed-transmitted' },
    {
      label: 'Principal toxin',
      value:
        'Ergovaline, an ergot alkaloid produced by the wild-type endophyte',
    },
    {
      label: 'Endophyte options',
      value: 'Wild-type, endophyte-free, or a selected novel strain',
    },
  ],
  sections: [
    {
      id: 'endophyte',
      heading: 'The fungus is the crop’s defining fact',
      body: [
        {
          type: 'paragraph',
          text: 'Tall fescue seed carries Epichloë coenophiala, a fungus transmitted in the seed rather than between plants. It confers the drought tolerance, insect resistance and persistence that made the grass ubiquitous, and it produces ergot alkaloids, chiefly ergovaline, in the plant tissue the animal eats.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'toxicosis',
      heading: 'Fescue toxicosis',
      body: [
        {
          type: 'paragraph',
          text: 'Cattle grazing wild-type endophyte-infected fescue show reduced weight gain, impaired reproductive performance and elevated body temperature — a syndrome collectively called fescue toxicosis. The alkaloids are vasoconstrictive, so the effects are worst in summer heat, when the animal cannot shed heat properly, and appear again as cold-weather extremity damage.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'novel',
      heading: 'Novel endophytes',
      body: [
        {
          type: 'paragraph',
          text: 'The commercial answer is a selected endophyte strain that keeps insect deterrence and persistence while producing little or no ergovaline. AR542, inserted into the cultivar Jesup and sold as MaxQ, was the first widely released example. Grazing trials on novel-endophyte fescue show good animal performance without toxicosis symptoms.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'endophyte-free',
      heading: 'Why endophyte-free failed',
      body: [
        {
          type: 'paragraph',
          text: 'Removing the endophyte altogether solves the animal problem and creates an agronomic one: endophyte-free stands lack the insect resistance and stress tolerance the fungus supplied and thin out under the conditions tall fescue was chosen for. That failure is why the novel-endophyte route exists.',
        },
      ],
    },
    {
      id: 'seed',
      heading: 'The endophyte is alive in the seed',
      body: [
        {
          type: 'paragraph',
          text: 'Because the fungus is seed-transmitted and is a living organism, its viability declines in warm storage while the seed itself stays viable. Seed sown from a poorly stored lot can therefore establish a stand with far less endophyte than the label implies, which matters in both directions — for persistence and for toxicity.',
        },
      ],
    },
    {
      id: 'roots',
      heading: 'Deep roots and summer persistence',
      body: [
        {
          type: 'paragraph',
          text: 'Tall fescue roots deeper than the other sown cool-season grasses and holds green leaf through dry spells that check ryegrass. That is what makes it a transition-zone grass rather than a cool-temperate one, and it is also why it is used for conservation seedings and erosion control well outside grazing systems.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Grazing and stockpiling',
      body: [
        {
          type: 'paragraph',
          text: 'The grass tolerates hard grazing and accumulates autumn growth that stands through frost with little quality loss — the basis of stockpiling for winter grazing. Stockpiled fescue is also the highest-alkaloid material of the year on a wild-type stand, so the practice and the hazard arrive together.',
        },
      ],
    },
    {
      id: 'renovation',
      heading: 'Replacing a stand',
      body: [
        {
          type: 'paragraph',
          text: 'Converting a wild-type stand to novel endophyte is a two-season operation: the existing sward must be killed and its seedbank exhausted before reseeding, because volunteer wild-type seedlings will reinfect the new stand and undo the change. Partial renovation reliably fails for that reason.',
        },
      ],
    },
    {
      id: 'naming',
      heading: 'A name that moved',
      body: [
        {
          type: 'paragraph',
          text: 'Both authorities now accept Lolium arundinaceum, transferring the species out of Festuca. Older literature, seed labels and recommended lists use Festuca arundinacea, and Schedonorus arundinaceus appears as a third treatment, so a reader matching names across sources will meet all three for one grass.',
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
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'white-grubs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'clay-soil' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'gleysol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'potassium' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'climate', slug: 'growing-season' },
    { type: 'machinery', slug: 'seed-drill' },
    { type: 'machinery', slug: 'baler' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'silvopasture' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'perennial-ryegrass' },
    { type: 'crop', slug: 'white-clover' },
  ],
  glossaryTerms: ['forage', 'perennial-crop', 'ruminant'],
  geographicScope:
    'Humid transition-zone climates, chiefly the eastern United States, with comparable use in Europe, New Zealand and parts of South America. Endophyte availability and cultivar recommendations are national.',
  climateContext:
    'Cool-season C3 grass with unusual heat and drought tolerance for its group; the endophyte is central to that tolerance.',
  limitations: [
    'Ergovaline concentrations vary with cultivar, endophyte strain, season and plant part; no threshold is given here and veterinary guidance governs.',
    'Novel endophyte cultivar availability differs by country and the strains are proprietary.',
    'Renovation intervals and herbicide programmes are set by local recommendation.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Temperate and transition-zone forage systems',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Grass species characteristics and grazing management',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Tall fescue endophyte and novel endophyte research',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Lolium arundinaceum compendium data' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Tall Fescue',
    description:
      'Lolium arundinaceum as a pasture grass: the seed-borne endophyte that supplies its persistence and its toxicity, novel-endophyte cultivars and stand renovation.',
    keywords: [
      'tall fescue',
      'Lolium arundinaceum',
      'fescue toxicosis',
      'novel endophyte',
      'ergovaline',
    ],
  },
  structuredData: { article: true },
};
