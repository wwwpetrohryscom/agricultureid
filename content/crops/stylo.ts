import type { CropContent } from '@/types/content';

export const stylo: CropContent = {
  id: 'crop-stylo',
  slug: 'stylo',
  contentType: 'crop',
  title: 'Stylo',
  scientificName: 'Stylosanthes guianensis',
  alternativeNames: ['Brazilian stylo', 'Common stylo'],
  category: 'Forage crop',
  subcategory: 'Tropical perennial forage legume',
  botanicalFamily: 'Fabaceae (legume family)',
  lifecycle: 'Perennial',
  summary:
    'Stylo is the legume that puts nitrogen into acid, low-phosphorus tropical pasture, and its history is a single disease: anthracnose destroyed the first widely sown cultivars and every selection since has been judged on resistance to it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tropical grass pasture runs on nitrogen it does not have. Stylo is the legume most widely sown to supply it, a South American perennial that nodulates and produces on the acid, aluminium-rich, low-phosphorus soils where most forage legumes fail.',
    },
    {
      type: 'paragraph',
      text: 'Its agricultural history is dominated by one pathogen. Anthracnose, caused by Colletotrichum gloeosporioides, destroyed early cultivars across the tropics, and the accession CIAT 184 became the standard largely because its tolerance has held up across most of the tropics — with the notable exception of the tropical American savannas where the pathogen originated.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Fabaceae (legume family)' },
    {
      label: 'Role',
      value: 'Nitrogen-fixing legume component of tropical grass pasture',
    },
    {
      label: 'Soils',
      value:
        'Productive on acid, aluminium-rich, low-phosphorus tropical soils',
    },
    {
      label: 'Defining constraint',
      value: 'Anthracnose, Colletotrichum gloeosporioides',
    },
    {
      label: 'Standard accession',
      value: 'CIAT 184, selected for durable anthracnose tolerance',
    },
    {
      label: 'Secondary uses',
      value: 'Cover crop, green manure and cut-and-carry protein source',
    },
  ],
  sections: [
    {
      id: 'nitrogen',
      heading: 'What the legume is for',
      body: [
        {
          type: 'paragraph',
          text: 'Sown tropical grass pastures decline as soil nitrogen runs down, and fertiliser nitrogen is rarely economic on extensive grazing land. A legume in the sward fixes nitrogen, raises the protein of the diet and slows that decline, and stylo is the legume most widely used for it across the acid-soil tropics.',
        },
        {
          type: 'paragraph',
          text: 'Fertilizer rates, timing, and forms should follow local soil tests and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'anthracnose',
      heading: 'Anthracnose is the whole story',
      body: [
        {
          type: 'paragraph',
          text: "Anthracnose devastated the first widely planted Stylosanthes cultivars, and it remains the disease that decides whether a stylo planting survives. CIAT 184 is the accession the tropics settled on because its tolerance has proved durable in most regions; in the savannas of tropical America, where the pathogen is most diverse, it has not. That geographic exception is the crop's central agronomic fact.",
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant varieties, rotation, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'acid-soils',
      heading: 'Acid and low-phosphorus tolerance',
      body: [
        {
          type: 'paragraph',
          text: 'Stylo nodulates and produces where soil pH is low, exchangeable aluminium is high and available phosphorus is very low — conditions that defeat most tropical legumes. It still responds to phosphorus, and phosphorus is normally the first limiting nutrient in a stylo pasture rather than nitrogen.',
        },
        {
          type: 'paragraph',
          text: 'Soil suitability should be assessed with local soil survey information and, where available, field testing.',
        },
      ],
    },
    {
      id: 'persistence',
      heading: 'Persistence by seed, not by plant',
      body: [
        {
          type: 'paragraph',
          text: 'Individual plants are relatively short-lived, and a stylo stand persists by setting and shedding seed that regenerates after the dry season. Grazing that removes the crop before seed set therefore ends the stand a season or two later, which is a delayed consequence that makes over-grazing hard to diagnose at the time.',
        },
      ],
    },
    {
      id: 'hardseed',
      heading: 'Hard seed and establishment',
      body: [
        {
          type: 'paragraph',
          text: 'A large share of the seed is hard-coated and does not germinate immediately, which is what builds the soil seed bank that carries the stand, and it is also why establishment from untreated seed is slow and uneven. Scarification is used for sowing while the hard fraction remains valuable in the field.',
        },
      ],
    },
    {
      id: 'cover-crop',
      heading: 'Beyond pasture',
      body: [
        {
          type: 'paragraph',
          text: 'Stylo is also used as a cover crop and green manure in tree-crop plantations and in rotations, and as a cut-and-carry protein supplement in smallholder livestock systems. Those uses do not depend on grazing management and are often where the crop persists best.',
        },
      ],
    },
    {
      id: 'genus',
      heading: 'A genus, not one species',
      body: [
        {
          type: 'paragraph',
          text: 'Stylosanthes includes several agriculturally used species — S. guianensis, S. hamata, S. scabra and others — with different adaptation and different anthracnose behaviour. Records and recommendations that say only "stylo" have to be resolved to a species before they mean anything.',
        },
      ],
    },
    {
      id: 'seed-supply',
      heading: 'Seed supply is the bottleneck',
      body: [
        {
          type: 'paragraph',
          text: 'Tropical forage legume seed is produced in few places and in small quantities relative to grass seed, and availability rather than agronomy often decides whether a legume is included in a pasture at all. This is a structural constraint on tropical pasture improvement and not a fault of the species.',
        },
      ],
    },
    {
      id: 'grass-mixture',
      heading: 'Living with a grass',
      body: [
        {
          type: 'paragraph',
          text: 'In a mixed sward the grass competes strongly for nitrogen once the legume supplies it, so the legume fraction tends to decline. Managing a grass-legume pasture means managing that balance through grazing pressure and rest, and a pasture recorded as a legume pasture at sowing is frequently a grass pasture five years later.',
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'anthracnose' },
    { type: 'plant-disease', slug: 'root-rot' },
    { type: 'plant-disease', slug: 'cercospora-leaf-spot' },
  ],
  commonPests: [
    { type: 'pest', slug: 'stem-borers' },
    { type: 'pest', slug: 'armyworms' },
    { type: 'pest', slug: 'grasshoppers' },
    { type: 'pest', slug: 'pod-borer' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'ferralsol' },
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'sandy-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'nutrient', slug: 'phosphorus' },
    { type: 'nutrient', slug: 'calcium' },
    { type: 'climate', slug: 'rainfall' },
    { type: 'climate', slug: 'drought' },
    { type: 'climate', slug: 'humidity' },
    { type: 'farming-system', slug: 'integrated-crop-livestock' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'conservation-agriculture' },
    { type: 'post-harvest', slug: 'natural-air-drying' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'greenleaf-desmodium' },
    { type: 'crop', slug: 'signal-grass' },
    { type: 'crop', slug: 'lablab' },
  ],
  glossaryTerms: ['perennial-crop', 'forage', 'cover-crop'],
  geographicScope:
    'Native to tropical South America. Sown across tropical Latin America, Southeast Asia, tropical Africa and northern Australia.',
  climateContext:
    'Humid and subhumid tropics; adapted to acid, low-phosphorus soils and dependent on seed set to persist through a dry season.',
  limitations: [
    'Anthracnose behaviour differs by region and by pathogen population; tolerance recorded in one region is not a guarantee in another.',
    'Recommendations differ between Stylosanthes species and species-level identity must be resolved before applying any of them.',
    'Seed availability is a practical constraint that varies by country and is not covered here.',
  ],
  sourceReferences: [
    {
      sourceId: 'cgiar',
      citedFor: 'Tropical forage legume germplasm and anthracnose research',
    },
    { sourceId: 'fao', citedFor: 'Tropical grassland and pasture context' },
    { sourceId: 'cabi', citedFor: 'Stylosanthes guianensis compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    { sourceId: 'au-qld-dpi', citedFor: 'Queensland pasture legume guidance' },
  ],
  reviewedAt: '2026-09-02',
  updatedAt: '2026-09-02',
  editorialStatus: 'published',
  seo: {
    title: 'Stylo',
    description:
      'Stylosanthes guianensis as a crop: nitrogen for acid tropical pasture, anthracnose as the defining constraint, CIAT 184, hard seed and persistence by seed.',
    keywords: [
      'stylo',
      'Stylosanthes guianensis',
      'tropical forage legume',
      'anthracnose',
      'acid soil pasture',
    ],
  },
  structuredData: { article: true },
};
