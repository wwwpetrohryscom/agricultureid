import type { CropContent } from '@/types/content';

export const castorBean: CropContent = {
  id: 'crop-castor-bean',
  slug: 'castor-bean',
  contentType: 'crop',
  title: 'Castor Bean',
  scientificName: 'Ricinus communis',
  alternativeNames: ['Castor', 'Castor oil plant'],
  category: 'Oilseed crop',
  subcategory: 'Industrial non-food oilseed',
  botanicalFamily: 'Euphorbiaceae (spurge family)',
  lifecycle: 'Annual in cultivation; perennial in the tropics',
  summary:
    'Castor is grown for an oil that no other crop supplies commercially. Its seed oil is dominated by ricinoleic acid, a hydroxy fatty acid that gives the oil properties the chemical industry has no substitute for — and the same seed contains ricin, which governs how the crop is handled.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Most oilseeds compete with each other. Castor does not, because what it produces is chemically different: ricinoleic acid, a fatty acid carrying a hydroxyl group on the chain, makes up the great majority of the oil and gives it a viscosity and stability that ordinary vegetable oils cannot match.',
    },
    {
      type: 'paragraph',
      text: 'That single molecule is the crop. It feeds well over a hundred industrial processes — lubricants, polyamides, coatings, surfactants, cosmetics — and castor seed remains its only commercial source, so demand for it is not really demand for a vegetable oil at all.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Euphorbiaceae (spurge family)' },
    { label: 'Harvested part', value: 'Seed' },
    {
      label: 'Defining constituent',
      value: 'Ricinoleic acid, about nine tenths of the oil’s fatty acids',
    },
    {
      label: 'Commercial position',
      value: 'The only commercial source of ricinoleic acid',
    },
    {
      label: 'Principal hazard',
      value: 'Ricin, a toxic protein in the seed and meal',
    },
    { label: 'Food use', value: 'None — this is a non-food oilseed' },
  ],
  sections: [
    {
      id: 'ricinoleic',
      heading: 'A fatty acid with a hydroxyl group',
      body: [
        {
          type: 'paragraph',
          text: 'Ricinoleic acid is an eighteen-carbon unsaturated acid carrying a hydroxyl group partway along the chain. That hydroxyl is a chemical handle: it makes the oil far more viscous than comparable vegetable oils, keeps it soluble in alcohol, and gives chemists a reactive site to build on.',
        },
        {
          type: 'paragraph',
          text: 'Because the value is in the molecule rather than the oil, castor is best understood as a chemical feedstock crop. Attempts to produce ricinoleic acid in other oilseeds by engineering have been pursued for decades precisely because a single tropical crop supplying an industrial input is a fragile arrangement.',
        },
      ],
    },
    {
      id: 'ricin',
      heading: 'Ricin, and what it means for handling',
      body: [
        {
          type: 'paragraph',
          text: 'The seed contains ricin, a ribosome-inactivating protein, together with allergenic compounds that affect people working with the crop. Ricin is a protein, so it stays in the meal after crushing rather than passing into the oil, and the oil itself is not the hazard.',
        },
        {
          type: 'paragraph',
          text: 'The meal is therefore the problem. Untreated castor meal cannot be fed, and detoxification depends on denaturing the protein — moist heat, alkaline treatment and microbial methods have all been used. Where meal is not detoxified it is used as a fertiliser rather than a feed.',
        },
      ],
    },
    {
      id: 'safety-scope',
      heading: 'What this page does not cover',
      body: [
        {
          type: 'paragraph',
          text: 'AgricultureID describes castor as a crop and a feedstock. It does not describe extraction, concentration or handling of ricin, and does not provide detoxification protocols; meal intended for feed must be processed and tested under the procedures of the relevant national authority.',
        },
        {
          type: 'paragraph',
          text: 'Cultivation and processing of castor are regulated differently across jurisdictions, and growers and processors should work from their own authority’s requirements rather than from a general description.',
        },
      ],
    },
    {
      id: 'growing',
      heading: 'Where and how it is grown',
      body: [
        {
          type: 'paragraph',
          text: 'Castor is a warm-season crop grown across semi-arid tropics and subtropics, principally in India, with Mozambique, Brazil and China also producing. It is deep-rooted and drought-tolerant once established, and it is frequently grown on land of moderate fertility as a cash crop in an otherwise subsistence rotation.',
        },
        {
          type: 'paragraph',
          text: 'The plant is perennial in frost-free conditions and is grown as an annual wherever winter kills it. In its perennial form it becomes a substantial woody shrub, which is why it appears as an escape and a weed far outside its production areas.',
        },
      ],
    },
    {
      id: 'habit',
      heading: 'Indeterminate growth and staggered ripening',
      body: [
        {
          type: 'paragraph',
          text: 'Castor flowers indeterminately, producing spikes in sequence up the plant, so capsules at several stages of maturity are present at once. Traditional production harvests spikes by hand over repeated passes as each ripens.',
        },
        {
          type: 'paragraph',
          text: 'Mechanised production depends on dwarf, more determinate hybrids and often on chemical desiccation to bring the crop to an even condition. Whether a grower can mechanise is largely a question of which plant type is available to them.',
        },
      ],
    },
    {
      id: 'shattering',
      heading: 'Dehiscence',
      body: [
        {
          type: 'paragraph',
          text: 'Wild and many traditional types have dehiscent capsules that split and eject seed when dry, which is efficient for the plant and costly for the grower. Indehiscent and semi-indehiscent selections are the basis of mechanical harvest.',
        },
        {
          type: 'paragraph',
          text: 'Because seed is ejected rather than dropped, volunteers persist and spread beyond the field. Castor is a listed invasive in a number of regions, and that is a planting consideration rather than an afterthought.',
        },
      ],
    },
    {
      id: 'pests',
      heading: 'Pests and diseases',
      body: [
        {
          type: 'paragraph',
          text: 'Capsule borers and semiloopers attack the reproductive spikes directly, and because the spikes ripen in sequence the crop is exposed across a long window rather than at one growth stage. Sucking pests including jassids and whitefly affect the canopy.',
        },
        {
          type: 'paragraph',
          text: 'Fusarium wilt and grey mould of the spike are the principal diseases, and both are managed largely through resistant material and rotation, since a standing indeterminate crop is difficult to treat effectively at height.',
        },
      ],
    },
    {
      id: 'processing',
      heading: 'Crushing and grades',
      body: [
        {
          type: 'paragraph',
          text: 'Seed is decorticated and cold-pressed for the highest grades, with solvent extraction recovering the remainder. Grades are distinguished by how the oil was taken and how it was refined, and buyers specify them for particular chemistry rather than as a quality ladder.',
        },
        {
          type: 'paragraph',
          text: 'Because the oil is a chemical input, the specification that matters is composition and colour rather than anything culinary, and lots are traded on analysis.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'fusarium-wilt' },
    { type: 'plant-disease', slug: 'gray-mold' },
    { type: 'plant-disease', slug: 'root-rot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'pod-borer' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'leafhoppers' },
    { type: 'pest', slug: 'armyworms' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'vertisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'frost' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'farming-system', slug: 'intercropping' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'safflower' },

    { type: 'crop', slug: 'jatropha' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'Semi-arid tropics and subtropics, with production concentrated in India. Cultivation, processing and invasive-species status are regulated nationally.',
  climateContext:
    'Warm-season, deep-rooted and drought-tolerant; killed by frost and grown as a perennial where frost is absent.',
  limitations: [
    'Ricinoleic acid content is a property of the oil that varies with genotype and environment; the proportion given describes the crop rather than any lot.',
    'This page does not provide ricin handling, extraction or detoxification procedures. Meal intended for feed must be processed and tested under national authority requirements.',
    'Invasive status and cultivation restrictions differ by jurisdiction and are not reproduced here.',
    'Production statistics are concentrated in few countries and change annually; take them from primary datasets.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Castor production and non-food oilseed context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cabi',
      citedFor: 'Ricinus communis compendium, pests and invasive status',
    },
    {
      sourceId: 'icar',
      citedFor: 'Indian castor agronomy, hybrids and harvest practice',
    },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Castor Bean',
    description:
      'Ricinus communis as an industrial oilseed: ricinoleic acid and why nothing substitutes for it, ricin in the meal, indeterminate habit and dehiscence.',
    keywords: [
      'castor bean',
      'Ricinus communis',
      'ricinoleic acid',
      'castor oil',
      'ricin',
    ],
  },
  structuredData: { article: true },
};
