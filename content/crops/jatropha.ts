import type { CropContent } from '@/types/content';

export const jatropha: CropContent = {
  id: 'crop-jatropha',
  slug: 'jatropha',
  contentType: 'crop',
  title: 'Jatropha',
  scientificName: 'Jatropha curcas',
  alternativeNames: ['Physic nut', 'Purging nut'],
  category: 'Industrial crop',
  subcategory: 'Perennial shrub grown for non-edible seed oil',
  botanicalFamily: 'Euphorbiaceae (spurge family)',
  lifecycle: 'Perennial',
  summary:
    'Jatropha carries toxic phorbol esters that make both the oil and the press cake unfit for food or feed, which is why a crop planted for biodiesel across three continents earns from one product where its competitors earn from two.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Jatropha curcas is a drought-tolerant shrub of the spurge family that was planted at large scale in the 2000s as a biodiesel feedstock for marginal land. Much of that planting did not persist, and the reasons are agronomic and commercial rather than botanical.',
    },
    {
      type: 'paragraph',
      text: 'The defining constraint is chemical. Most cultivated material contains phorbol esters, diterpenoid compounds that are toxic and that block use of the oil for food and of the seed cake for livestock feed. The by-product that pays for an oilseed crush cannot be sold.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Euphorbiaceae (spurge family)' },
    {
      label: 'Toxic principle',
      value: 'Phorbol esters, present in most cultivated material',
    },
    {
      label: 'Consequence',
      value:
        'Oil is non-edible and the press cake cannot be fed without detoxification',
    },
    {
      label: 'Non-toxic material',
      value: 'Low-phorbol accessions are documented in Mexico',
    },
    {
      label: 'Habit',
      value: 'Perennial shrub or small tree; several years to full bearing',
    },
    {
      label: 'Historical context',
      value:
        'Widely planted for biodiesel in the 2000s; many plantings not sustained',
    },
  ],
  sections: [
    {
      id: 'phorbol',
      heading: "Phorbol esters are the crop's central problem",
      body: [
        {
          type: 'paragraph',
          text: 'Most cultivated Jatropha curcas contains phorbol esters, which are toxic and have documented tumour-promoting activity. They rule the oil out for human consumption and restrict the seed cake as livestock feed, so the crop cannot follow the ordinary oilseed economics where the meal carries a large share of the value.',
        },
      ],
    },
    {
      id: 'cake',
      heading: 'The by-product that cannot be sold',
      body: [
        {
          type: 'paragraph',
          text: 'Biodiesel production from jatropha generates seed cake in quantity, and because of its phorbol content that cake is a disposal problem rather than a revenue line. Fermentation and other detoxification routes have been studied, but a treatment step that a competing oilseed does not need is a permanent cost disadvantage.',
        },

        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'non-toxic',
      heading: 'Non-toxic accessions exist',
      body: [
        {
          type: 'paragraph',
          text: 'Low-phorbol Jatropha curcas is documented in Mexico, where it is cultivated and the seed consumed, and Jatropha platyphylla is similarly non-toxic. Toxic material is also grown in Mexico, so provenance rather than country determines what a given planting contains, and this cannot be judged from appearance.',
        },
      ],
    },
    {
      id: 'boom',
      heading: 'What the marginal-land case assumed',
      body: [
        {
          type: 'paragraph',
          text: 'The 2000s planting boom rested on the claim that jatropha would yield usefully on poor land with little water. In practice yield responds strongly to water and nutrients like any other crop, and plantings established on genuinely marginal ground produced little. The claim was about where the plant survives, not where it produces.',
        },

        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'unimproved',
      heading: 'A crop planted before it was domesticated',
      body: [
        {
          type: 'paragraph',
          text: 'Large areas were established from unselected seed of unknown provenance, with no varieties, no defined yield expectation and no agronomic package. Most oilseeds went through decades of breeding before large-scale planting; jatropha was planted first and characterised afterwards, which is the clearest single explanation for the gap between projection and outcome.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest is by hand',
      body: [
        {
          type: 'paragraph',
          text: 'Fruit ripens unevenly over an extended period and there is no established mechanical harvest, so picking is repeated and manual. Where labour is costed, that alone can exceed the value of the seed, and it is the constraint that plantation models most often understated.',
        },
      ],
    },
    {
      id: 'latex',
      heading: 'Handling the plant',
      body: [
        {
          type: 'paragraph',
          text: 'All parts contain an irritant latex, and the phorbol esters are documented as toxic to skin and eyes. Handling, pruning and processing therefore require protection that a food oilseed does not, which is an occupational rather than an agronomic consideration but a real one.',
        },
      ],
    },
    {
      id: 'agronomy',
      heading: 'What the plant does well',
      body: [
        {
          type: 'paragraph',
          text: 'Jatropha is genuinely drought-hardy, establishes from cuttings, and is used as a living fence and for erosion control across the semi-arid tropics — roles it filled long before the biodiesel interest. Those uses are stable and continue where the fuel plantings did not.',
        },
      ],
    },
    {
      id: 'invasive',
      heading: 'Weed status',
      body: [
        {
          type: 'paragraph',
          text: 'The species has naturalised and is listed as a weed or invasive in several countries, spreading from plantings and hedges. Where it is being introduced, that status is a regulatory question to settle before planting rather than after.',
        },

        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'whiteflies' },
    { type: 'pest', slug: 'white-grubs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'sandy-soil' },
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'cambisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'aridity-index' },
    { type: 'climate', slug: 'heat-stress' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'dryland-farming' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'processing-method', slug: 'mechanical-pressing' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'castor-bean' },
    { type: 'crop', slug: 'jojoba' },
    { type: 'crop', slug: 'cassava' },
  ],
  glossaryTerms: ['perennial-crop'],
  geographicScope:
    'Native to Mexico and Central America; planted across the semi-arid tropics of Africa, South Asia and Southeast Asia.',
  climateContext:
    'Semi-arid tropical perennial; drought-hardy but yield-responsive to water and nutrients.',
  limitations: [
    'Phorbol ester content depends on provenance and cannot be judged from plant appearance; assume toxic material unless the accession is documented otherwise.',
    'Published yield figures from the biodiesel-promotion period frequently reflect projections rather than measured plantation output and should be treated with care.',
    'Weed and invasive listings differ by jurisdiction and are not reproduced here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cabi',
      citedFor: 'Jatropha curcas compendium data and invasive status',
    },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'fao', citedFor: 'Bioenergy feedstock assessment context' },
    { sourceId: 'cgiar', citedFor: 'Jatropha germplasm and agronomy research' },
    { sourceId: 'iita', citedFor: 'Tropical shrub crop research' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Jatropha',
    description:
      'Jatropha curcas as a crop: phorbol esters blocking food and feed use, the unsellable press cake and why the biodiesel plantings failed.',
    keywords: [
      'jatropha',
      'Jatropha curcas',
      'physic nut',
      'phorbol esters',
      'biodiesel feedstock',
    ],
  },
  structuredData: { article: true },
};
