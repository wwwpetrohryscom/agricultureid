import type { CropContent } from '@/types/content';

export const coffee: CropContent = {
  id: 'crop-coffee',
  slug: 'coffee',
  contentType: 'crop',
  title: 'Coffee',
  scientificName: 'Coffea arabica and Coffea canephora (robusta)',
  alternativeNames: ['Arabica coffee', 'Robusta coffee'],
  category: 'Beverage crop',
  subcategory: 'Tropical perennial shrub',
  botanicalFamily: 'Rubiaceae (madder family)',
  lifecycle: 'Perennial',
  summary:
    'Coffee is a perennial tropical shrub grown for its seeds (beans), cultivated mainly as Coffea arabica in cooler highland areas and Coffea canephora (robusta) in warmer lowland areas, often under shade in smallholder systems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Coffee is grown as a long-lived perennial shrub, typically pruned and trained to a manageable height for hand-picking of the fruit (cherries), each of which usually contains two seeds that are processed, dried, and roasted to produce the familiar beans.',
    },
    {
      type: 'paragraph',
      text: 'The two commercially dominant species differ in growing requirements and cup character: Coffea arabica is generally grown at higher elevations with cooler temperatures, while Coffea canephora (robusta) tolerates warmer, lower-elevation conditions and is generally more disease-tolerant but considered lower in cup quality by some markets.',
    },
  ],
  keyFacts: [
    { label: 'Botanical family', value: 'Rubiaceae (madder family)' },
    { label: 'Life cycle', value: 'Perennial evergreen shrub' },
    {
      label: 'Main species',
      value: 'Coffea arabica, Coffea canephora',
    },
    {
      label: 'Primary uses',
      value: 'Roasted coffee beans for beverage production',
    },
    {
      label: 'Climate',
      value:
        'Tropical; arabica favors cooler highland elevations, robusta warmer lowlands',
    },
    {
      label: 'Soil preference',
      value: 'Deep, well-drained volcanic and loam soils; acidic pH',
      note: 'Elevation and shade management interact strongly with local climate.',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Coffee is grown across the tropical belt by a mix of smallholder farmers, who produce a large share of the global crop, and larger commercial estates, often on hillside or highland terrain where cooler temperatures suit arabica in particular.',
        },
        {
          type: 'paragraph',
          text: 'Production systems range from shade-grown coffee under a canopy of taller trees to more open, sun-grown plantations, with shade systems often associated with additional on-farm tree products and biodiversity benefits.',
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
            { term: 'Family', description: 'Rubiaceae (madder family)' },
            { term: 'Genus', description: 'Coffea' },
            {
              term: 'Principal species',
              description:
                'Coffea arabica (arabica) and Coffea canephora (robusta)',
            },
            {
              term: 'Growth habit',
              description:
                'Evergreen perennial shrub or small tree, commonly pruned to a manageable picking height in cultivation',
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
          text: 'Coffea arabica originates from the highlands of Ethiopia, while Coffea canephora originates from lowland forests of Central and West Africa; both species were subsequently spread through trade and colonial-era plantations to tropical regions across Asia and the Americas.',
        },
        {
          type: 'paragraph',
          text: 'Today coffee is grown across the tropical belt, with major production in Latin America, Sub-Saharan Africa, and Asia. Current production and trade figures are compiled by FAO and national and international coffee-sector bodies.',
        },
      ],
    },
    {
      id: 'climate-requirements',
      heading: 'Climate requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Arabica coffee generally performs best at higher elevations within the tropics, where cooler temperatures slow cherry ripening and are associated with higher cup quality, while robusta tolerates warmer, lower-elevation conditions and is generally hardier under heat and some diseases.',
        },
        {
          type: 'paragraph',
          text: 'Both species require well-distributed rainfall through most of the year, and prolonged drought or unusually high temperatures during flowering and fruit development can reduce yield and quality.',
        },
      ],
    },
    {
      id: 'soil-requirements',
      heading: 'Soil requirements',
      body: [
        {
          type: 'paragraph',
          text: 'Coffee is often associated with fertile volcanic soils, valued for their depth, drainage, and mineral content, though it is also grown successfully on well-drained loam soils elsewhere. Coffee generally prefers acidic soil conditions.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Poor drainage increases the risk of root diseases. Site suitability, including soil pH, should be assessed with local soil survey information and testing.',
        },
      ],
    },
    {
      id: 'plantation-establishment',
      heading: 'Plantation establishment and management',
      body: [
        {
          type: 'paragraph',
          text: 'New plantings are established from selected cultivars raised in nurseries, with spacing and shade-tree arrangement set according to species, elevation, and whether a shade-grown or sun-grown system is used.',
        },
        {
          type: 'list',
          items: [
            'Species and cultivar selection matched to elevation, disease pressure, and market requirements',
            'Shade-tree management in agroforestry-style shade-grown systems',
            'Pruning to maintain picking height and renew productive wood',
            'Long-term orchard floor and soil-conservation management on sloping terrain',
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
          text: 'Nitrogen supports vegetative growth and yield, and coffee is generally grown on acidic soils that support nutrient availability suited to the crop. Soil pH is closely monitored, since it affects the availability of both macronutrients and micronutrients.',
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
          text: 'Coffee is grown both rain-fed, in regions with well-distributed rainfall, and under supplemental irrigation elsewhere, with water stress during flowering and cherry development having the greatest effect on yield and bean quality.',
        },
        {
          type: 'paragraph',
          text: 'Drip irrigation is used in some intensive plantations to apply water precisely to the root zone while limiting excess canopy humidity that can favor foliar disease.',
        },
      ],
    },
    {
      id: 'diseases-and-pests',
      heading: 'Common diseases and pests',
      body: [
        {
          type: 'paragraph',
          text: 'Coffee leaf rust is one of the most economically important diseases of coffee, capable of causing severe defoliation and yield loss, particularly in susceptible arabica plantings, while anthracnose-type diseases can affect leaves, stems, and cherries. Mealybugs and scale insects are common sap-feeding pests that can weaken plants and promote sooty mold.',
        },
        {
          type: 'paragraph',
          text: 'Management combines resistant or tolerant cultivars where available, shade and canopy management, monitoring, and — where justified — locally authorized control products applied according to their labels.',
        },
      ],
    },
    {
      id: 'harvest',
      heading: 'Harvest',
      body: [
        {
          type: 'paragraph',
          text: 'Coffee cherries are typically hand-picked, often selectively over multiple passes to harvest only ripe fruit, though mechanical and strip harvesting are used in some larger, more level plantations. Harvested cherries are processed promptly by wet or dry methods to produce dried green beans.',
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
            'Roasted whole and ground beans for brewed coffee beverages',
            'Instant and soluble coffee products',
            'By-products such as cherry pulp and parchment used in composting or, in some regions, novel food and beverage products',
            'Shade trees in agroforestry coffee systems providing additional timber, fruit, or fuelwood',
          ],
        },
      ],
    },
  ],
  commonDiseases: [
    { type: 'plant-disease', slug: 'coffee-leaf-rust' },
    { type: 'plant-disease', slug: 'anthracnose' },
  ],
  commonPests: [
    { type: 'pest', slug: 'mealybugs' },
    { type: 'pest', slug: 'scale-insects' },
  ],
  suitableSoils: [
    { type: 'soil', slug: 'volcanic-soil' },
    { type: 'soil', slug: 'loam-soil' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'irrigation-method', slug: 'drip-irrigation' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'drought' },
    { type: 'farming-system', slug: 'agroforestry' },
  ],
  relatedTopics: [
    { type: 'crop', slug: 'tea' },
    { type: 'crop', slug: 'cocoa' },
  ],
  glossaryTerms: ['perennial-crop', 'cultivar', 'yield'],
  geographicScope:
    'Global overview of tropical production, spanning highland arabica and lowland robusta growing regions.',
  climateContext:
    'Tropical perennial shrub; arabica favors cooler highland elevations, robusta warmer lowland conditions.',
  limitations: [
    'Elevation, shade system, and species/cultivar choice are highly site-specific and are not detailed here.',
    'Production and trade statistics change annually and should be taken from primary datasets such as FAOSTAT.',
  ],
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Global coffee production and trade context' },
    { sourceId: 'faostat', citedFor: 'Production and area statistics' },
    { sourceId: 'cabi', citedFor: 'Coffee disease and pest compendium data' },
    { sourceId: 'usda-plants', citedFor: 'Classification and nomenclature' },
    {
      sourceId: 'cgiar',
      citedFor: 'Coffee genetic resources and agronomy research',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Coffee',
    description:
      'A structured, evidence-based reference on coffee: classification, climate and soil needs, plantation management, nutrition, diseases, pests, and uses.',
    keywords: [
      'coffee',
      'Coffea arabica',
      'Coffea canephora',
      'coffee cultivation',
    ],
  },
  structuredData: { article: true },
};
