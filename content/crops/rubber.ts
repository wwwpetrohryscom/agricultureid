import type { CropContent } from '@/types/content';

export const rubber: CropContent = {
  id: 'crop-rubber',
  slug: 'rubber',
  contentType: 'crop',
  title: 'Rubber',
  scientificName: 'Hevea brasiliensis',
  alternativeNames: ['Para rubber tree'],
  category: 'Industrial crop',
  subcategory: 'Tropical latex tree crop',
  botanicalFamily: 'Euphorbiaceae (spurge family)',
  lifecycle: 'Perennial',
  summary:
    'Rubber is a tropical tree grown for the latex tapped from its bark, which is processed into natural rubber, cultivated on long-term plantations that remain productive for several decades.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Rubber trees are grown for the milky latex found in specialized cells beneath the bark, collected through a controlled tapping process that cuts a thin layer of bark to allow latex to flow without permanently damaging the tree, allowing repeated harvest over many years from the same trunk.',
    },
    {
      type: 'paragraph',
      text: 'Trees require several years of growth before tapping can begin, and plantations are then tapped on a regular schedule for decades, making rootstock and clone selection, spacing, and tapping-panel management long-term decisions with lasting effects on plantation productivity.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Euphorbiaceae (spurge family)' },
    { label: 'Life cycle', value: 'Perennial tree' },
    { label: 'Main species', value: 'Hevea brasiliensis' },
    {
      label: 'Primary uses',
      value: 'Natural rubber latex for tires and rubber goods',
    },
    {
      label: 'Climate',
      value: 'Warm, humid equatorial tropical lowland',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained lateritic and loam soils',
      note: 'Site selection strongly affects long-term latex yield.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Rubber is grown across humid tropical lowlands, mainly in Southeast Asia, with smaller production in parts of Africa and Latin America, on both large commercial estates and smallholder plantations linked to processing facilities.',
        },
        {
          type: 'paragraph',
          text: 'Because latex yield depends heavily on clone selection, tapping skill, and tapping-system design, rubber production combines agronomic and specialized harvesting expertise to sustain output over the long productive life of the plantation.',
        },
      ],
    },
    {
      id: 'botanical-classification',
      heading: 'Botanical classification',
      body: [
        {
          type: 'definitionList',
          items: [
            { term: 'Family', description: 'Euphorbiaceae (spurge family)' },
            { term: 'Genus and species', description: 'Hevea brasiliensis' },
            {
              term: 'Commercial planting material',
              description:
                'Selected high-yielding clones propagated by bud-grafting onto seedling rootstocks',
            },
            {
              term: 'Growth habit',
              description:
                'Tall deciduous-in-part tropical tree tapped for latex from specialized bark tissue',
            },
          ],
        },
      ],
    },
    {
      id: 'origin-and-distribution',
      heading: 'Origin and distribution',
      body: [
        {
          type: 'paragraph',
          text: 'Hevea brasiliensis is native to the Amazon basin of South America, where it grew widely in tropical rainforest before seeds were transported in the late nineteenth century to establish plantations in tropical Asia, which now dominates global production.',
        },
        {
          type: 'paragraph',
          text: 'Southeast Asia, particularly Thailand, Indonesia, and Vietnam, accounts for the large majority of natural rubber production today, with growing cultivation in parts of Africa. Production statistics are compiled by FAO and international rubber-sector organizations.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Rubber requires consistently warm temperatures and abundant, well-distributed rainfall typical of humid equatorial lowlands, without a prolonged dry season, reflecting its origin in ever-wet Amazonian rainforest.',
        },
        {
          type: 'paragraph',
          text: 'The tree has no meaningful cold or frost tolerance, and extended dry periods can reduce latex flow and increase the risk of certain foliar diseases during leaf refoliation.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Rubber performs best on deep, well-drained soils, including lateritic soils common in many Southeast Asian growing regions, that allow extensive root development to support the large tree canopy.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Plantations on sloping terrain require erosion-control measures, since young trees are particularly vulnerable to soil loss before canopy closure. Site suitability should be assessed with local soil survey information.',
        },
      ],
    },
    {
      id: 'plantation-establishment',
      heading: 'Plantation establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'Plantations are established from bud-grafted clonal planting material selected for latex yield, disease tolerance, and growth vigor, with several years of immature growth required before tapping can begin.',
        },
        {
          type: 'list',
          items: [
            'Clonal selection for latex yield potential and disease tolerance',
            'Systematic spacing to balance canopy development with eventual tapping access',
            'Cover cropping and erosion control during the immature, pre-tapping growth phase',
            'Long-term tapping-panel management to sustain latex yield across the productive life of the tree',
          ],
        },
      ],
    },
    {
      id: 'nutrient-considerations',
      heading: 'Nutrient considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Potassium and magnesium are closely linked to latex production and flow, and are monitored throughout the tapping period, alongside nitrogen, which supports both immature growth and canopy maintenance in mature trees.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates are region-specific',
          text: 'Fertilizer rates, timing, and forms should follow local soil and leaf analysis and regional guidance. AgricultureID does not publish universal fertilizer recommendations.',
        },
      ],
    },
    {
      id: 'water-and-irrigation',
      heading: 'Water and irrigation',
      body: [
        {
          type: 'paragraph',
          text: 'Rubber is grown predominantly under rain-fed conditions in humid equatorial regions with well-distributed rainfall, since irrigation is uncommon in most traditional rubber-growing areas.',
        },
        {
          type: 'paragraph',
          text: 'Extended dry periods can reduce latex yield and increase vulnerability to certain diseases during the vulnerable refoliation period after natural leaf fall.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Powdery mildew (leaf fall disease) can cause significant defoliation during the vulnerable refoliation period after natural leaf fall, and anthracnose can affect leaves and shoots under humid conditions. Scale insects and mealybugs are among the sap-feeding pests that can affect young trees and foliage.',
        },
        {
          type: 'paragraph',
          text: 'Management relies on resistant or tolerant clones where available, canopy and sanitation management, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Latex is harvested through tapping, a controlled cut into the bark performed on a set schedule, typically before dawn when latex flow is highest, with collected latex processed into sheet, crepe, or concentrated latex products depending on the intended market.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'list',
          items: [
            'Natural rubber latex processed into sheet or crepe rubber for tires and industrial goods',
            'Latex concentrate for gloves, adhesives, and dipped rubber products',
            'Rubberwood timber harvested from aging trees at the end of their productive latex-yielding life',
            'Seed oil used in some niche industrial applications',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'powdery-mildew' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'scale-insects' },
    { type: 'pest', slug: 'mealybugs' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'laterite-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'potassium' },
    { type: 'nutrient', slug: 'magnesium' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'soil-topic', slug: 'soil-erosion' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'oil-palm' },
    { type: 'crop', slug: 'coconut' },
  ],
  glossaryTerms: ['perennial-crop', 'yield', 'cultivar'],
  geographicScope:
    'Global overview of equatorial tropical production, concentrated in Southeast Asia with growing cultivation in Africa and Latin America.',
  climateContext:
    'Warm, humid equatorial tree crop requiring rainfall without a prolonged dry season; no cold or frost tolerance.',
  limitations: [
    'Clonal selection, tapping systems, and immature-period management vary substantially by region and are not detailed here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Global natural rubber production and trade context',
    },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Rubber disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Rubber',
    description:
      'A structured, evidence-based reference on rubber: classification, tropical climate needs, plantation and tapping management, diseases, pests, and uses.',
    keywords: [
      'rubber',
      'Hevea brasiliensis',
      'natural rubber',
      'rubber plantation',
    ],
  },
  structuredData: { article: true },
};
