import type { CropContent } from '@/types/content';

export const africanRice: CropContent = {
  id: 'crop-african-rice',
  slug: 'african-rice',
  contentType: 'crop',
  title: 'African Rice',
  scientificName: 'Oryza glaberrima',
  alternativeNames: ['Glaberrima rice', 'Red rice (West Africa)'],
  category: 'Cereal grain',
  subcategory: 'Independently domesticated rice',
  botanicalFamily: 'Poaceae (grass family)',
  lifecycle: 'Annual',
  summary:
    'African rice is a second, independent domestication of rice, raised from a different wild ancestor in the inland delta of the Niger. It yields less than Asian rice and tolerates more — drought, acidity, aluminium and iron toxicity, and weeds — which is why its genes matter well beyond the area it is still grown on.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rice was domesticated twice. Asian rice, Oryza sativa, came from Oryza rufipogon; African rice, Oryza glaberrima, was domesticated separately from the wild Oryza barthii, and genomic evidence points to a single region along the upper Niger, in the inner delta in present-day Mali.',
    },
    {
      type: 'paragraph',
      text: 'The two are different species and cross with difficulty. That matters because glaberrima carries a set of tolerances that sativa lacks, and getting them into a high-yielding background has been a decades-long breeding problem rather than a routine cross.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Poaceae (grass family)' },
    { label: 'Wild ancestor', value: 'Oryza barthii' },
    {
      label: 'Domestication',
      value: 'Independent of Asian rice, in the inner Niger delta',
    },
    {
      label: 'Distinguishing traits',
      value:
        'Weed competitiveness; tolerance of drought, acidity, iron and aluminium toxicity',
    },
    {
      label: 'Principal limitation',
      value:
        'Lower yield potential and lodging and shattering under good conditions',
    },
    {
      label: 'Breeding significance',
      value: 'A parent of the interspecific NERICA cultivars',
    },
  ],
  sections: [
    {
      id: 'two-domestications',
      heading: 'Two domestications, one crop name',
      body: [
        {
          type: 'paragraph',
          text: 'African rice was grown across West Africa for millennia before Asian rice arrived, and it was domesticated from a different wild species in a different place. Calling both simply "rice" hides the fact that they are separate species with separate histories and separate strengths.',
        },
        {
          type: 'paragraph',
          text: 'The practical consequence is that agronomy, disease ratings and variety recommendations written for Oryza sativa are not automatically applicable, and neither are its weaknesses. Where the two are grown side by side, farmers frequently keep glaberrima for specific fields and specific years rather than as a general crop.',
        },
      ],
    },
    {
      id: 'tolerances',
      heading: 'What it tolerates',
      body: [
        {
          type: 'paragraph',
          text: 'Glaberrima carries tolerance of drought, of soil acidity, and of iron and aluminium toxicity — the constraints that define much of the upland and inland-valley rice land of West Africa. Those are exactly the conditions under which an improved Asian variety underperforms its trial data.',
        },
        {
          type: 'paragraph',
          text: 'It is also strongly weed-competitive: rapid early vigour and a droopy lower canopy shade the ground before weeds establish. In systems where weeding is the limiting labour input rather than fertiliser, that is worth more than yield potential.',
        },
      ],
    },
    {
      id: 'limitations',
      heading: 'What it gives up',
      body: [
        {
          type: 'paragraph',
          text: 'The tolerances come with real costs. Yield potential is lower, the straw is weak and lodges when the crop is well fed, and the panicle shatters readily, so grain is lost between maturity and threshing.',
        },
        {
          type: 'paragraph',
          text: 'That combination is why area under glaberrima declined as Asian varieties spread: under improved conditions it is comprehensively outyielded, and its advantages only appear where conditions are poor.',
        },
      ],
    },
    {
      id: 'nerica',
      heading: 'The interspecific hybrids',
      body: [
        {
          type: 'paragraph',
          text: 'From 1992 the Africa Rice Center pursued crosses between Oryza sativa and Oryza glaberrima to combine glaberrima’s stress tolerance and weed competitiveness with sativa’s yield. The species are separated by strong reproductive barriers and the early progeny were largely sterile; viable lines were obtained by the mid-1990s and released as NERICA — New Rice for Africa.',
        },
        {
          type: 'paragraph',
          text: 'The glaberrima accession CG14 is among the parents behind those cultivars. NERICA is therefore not a replacement for African rice so much as a way of keeping part of it in production under a different name.',
        },
      ],
    },
    {
      id: 'systems',
      heading: 'Where it is grown',
      body: [
        {
          type: 'paragraph',
          text: 'Cultivation is concentrated in West Africa, in upland fields, inland valleys and the floodplains of the Niger and its tributaries. Floating and deepwater types exist among glaberrima landraces, adapted to rising floodwater rather than to controlled irrigation.',
        },
        {
          type: 'paragraph',
          text: 'Much of the crop is grown for household consumption and local markets, so it is systematically under-represented in production statistics and is often not separated from Asian rice in them at all.',
        },
      ],
    },
    {
      id: 'grain',
      heading: 'The grain and how it is used',
      body: [
        {
          type: 'paragraph',
          text: 'Glaberrima grain frequently has a red pericarp and mills to a lower head-rice yield than sativa, being more prone to breakage. In parts of its range that red grain carries a price premium for specific dishes and ceremonial use, which sustains production independently of yield.',
        },
        {
          type: 'paragraph',
          text: 'A crop retained for cultural and culinary reasons at a yield disadvantage is a real agricultural fact and not a curiosity, and it is a substantial part of why glaberrima landraces still exist to breed from.',
        },
      ],
    },
    {
      id: 'conservation',
      heading: 'Why the landraces are kept',
      body: [
        {
          type: 'paragraph',
          text: 'Glaberrima’s value to rice breeding is disproportionate to its planted area, so its diversity is maintained in germplasm collections as well as in fields. Traits under active investigation include the stress tolerances above and resistance to constraints such as rice yellow mottle virus and African rice gall midge.',
        },
        {
          type: 'paragraph',
          text: 'That makes conservation of the landraces an input to the sativa crop as well as an end in itself — the argument for keeping it does not rest on the area it currently occupies.',
        },
      ],
    },
    {
      id: 'management',
      heading: 'Management in practice',
      body: [
        {
          type: 'paragraph',
          text: 'Where glaberrima is grown deliberately it is generally managed at low input, because its advantages are advantages under stress and its weaknesses — lodging and shattering — are brought out by generous nitrogen and good conditions.',
        },
        {
          type: 'paragraph',
          text: 'Harvest timing is tighter than for Asian rice for the same reason: shattering losses rise quickly once the panicle is ripe, so the crop is cut earlier relative to full maturity than a sativa crop would be.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'rice-blast' },
    { type: 'plant-disease', slug: 'brown-spot-of-rice' },
    { type: 'plant-disease', slug: 'bacterial-leaf-blight-of-rice' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'gleysol' },
    { type: 'soil', slug: 'fluvisol' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'iron' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'farming-system', slug: 'shifting-cultivation' },
    { type: 'post-harvest', slug: 'threshing-and-shelling' },
    { type: 'post-harvest', slug: 'winnowing' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'fonio' },
  ],
  glossaryTerms: ['crop-rotation'],
  geographicScope:
    'West Africa, chiefly the Niger basin and inland valleys. Variety recommendations are national and NERICA releases differ by country.',
  climateContext:
    'Tropical; grown in upland, inland-valley and flood-recession systems rather than under controlled irrigation.',
  limitations: [
    'Production is largely for household and local use and is often not separated from Oryza sativa in national statistics, so reported area understates the crop.',
    'Yield comparisons with Asian rice depend entirely on growing conditions; glaberrima’s advantages appear under stress and disappear under good management.',
    'NERICA is a family of interspecific cultivars, not a single variety, and released material differs by country and by ecology.',
    'Landrace tolerances vary widely and are not properties of the species as a whole.',
  ],
  sourceReferences: [
    {
      sourceId: 'cgiar',
      citedFor: 'African rice improvement, NERICA and interspecific breeding',
    },
    { sourceId: 'fao', citedFor: 'West African rice production systems' },
    { sourceId: 'irri', citedFor: 'Rice species, ecologies and germplasm' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'cabi', citedFor: 'Oryza glaberrima compendium data' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'African Rice',
    description:
      'Oryza glaberrima as a distinct crop: independent domestication from O. barthii, stress tolerance and weed competitiveness, lodging and shattering, NERICA.',
    keywords: [
      'African rice',
      'Oryza glaberrima',
      'NERICA',
      'Oryza barthii',
      'West African rice',
    ],
  },
  structuredData: { article: true },
};
