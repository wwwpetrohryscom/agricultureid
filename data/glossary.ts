import type { GlossaryTerm } from '@/types/content';

/**
 * Glossary of agronomic terms. Terms are referenced from content pages via
 * `glossaryTerms` (by slug) and validated to exist. Definitions are written to
 * be concise and non-prescriptive.
 */
export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: 'agronomy',
    term: 'Agronomy',
    definition:
      'The science and practice of crop production and soil management, integrating plant science, soil science, ecology, and farming systems.',
    sourceReferences: [{ sourceId: 'fao' }],
  },
  {
    slug: 'annual-crop',
    term: 'Annual crop',
    definition:
      'A crop that completes its life cycle — germination to seed production — within a single growing season and is then replanted.',
    sourceReferences: [{ sourceId: 'usda-plants' }],
  },
  {
    slug: 'perennial-crop',
    term: 'Perennial crop',
    definition:
      'A crop that lives for more than two years, producing over multiple seasons without replanting each cycle.',
    sourceReferences: [{ sourceId: 'usda-plants' }],
  },
  {
    slug: 'cultivar',
    term: 'Cultivar',
    definition:
      'A cultivated variety of a plant species, selected and maintained for distinct, desirable, and stable characteristics.',
    sourceReferences: [{ sourceId: 'usda-plants' }],
  },
  {
    slug: 'soil-texture',
    term: 'Soil texture',
    definition:
      'The relative proportion of sand, silt, and clay particles in a soil, which strongly influences water movement, aeration, and workability.',
    related: [
      { type: 'soil', slug: 'loam-soil' },
      { type: 'soil', slug: 'clay-soil' },
    ],
    sourceReferences: [{ sourceId: 'usda-nrcs' }],
  },
  {
    slug: 'soil-ph',
    term: 'Soil pH',
    definition:
      'A measure of soil acidity or alkalinity on a logarithmic scale, affecting nutrient availability and biological activity. Optimal ranges are crop-specific.',
    sourceReferences: [{ sourceId: 'usda-nrcs' }],
  },
  {
    slug: 'macronutrient',
    term: 'Macronutrient',
    definition:
      'A nutrient required by plants in relatively large amounts — nitrogen, phosphorus, potassium, calcium, magnesium, and sulfur.',
    sourceReferences: [{ sourceId: 'fao' }],
  },
  {
    slug: 'micronutrient',
    term: 'Micronutrient',
    definition:
      'A nutrient required by plants in small quantities, such as iron, zinc, manganese, boron, copper, molybdenum, and chlorine.',
    sourceReferences: [{ sourceId: 'fao' }],
  },
  {
    slug: 'integrated-pest-management',
    term: 'Integrated pest management (IPM)',
    definition:
      'A decision-based approach that combines monitoring, prevention, biological, cultural, physical, and — where justified — chemical controls to manage pests with reduced risk.',
    related: [
      { type: 'pest', slug: 'aphids' },
      { type: 'pest', slug: 'thrips' },
    ],
    sourceReferences: [{ sourceId: 'uc-ipm' }, { sourceId: 'fao' }],
  },
  {
    slug: 'economic-threshold',
    term: 'Economic threshold',
    definition:
      'The pest population level at which control action is justified to prevent the pest from causing economic loss; a core concept in integrated pest management.',
    sourceReferences: [{ sourceId: 'uc-ipm' }],
  },
  {
    slug: 'crop-rotation',
    term: 'Crop rotation',
    definition:
      'The practice of growing different crops in sequence on the same land to manage soil fertility, break pest and disease cycles, and reduce weed pressure.',
    sourceReferences: [{ sourceId: 'usda-nrcs' }, { sourceId: 'fao' }],
  },
  {
    slug: 'cover-crop',
    term: 'Cover crop',
    definition:
      'A crop grown primarily to protect and improve the soil — reducing erosion, adding organic matter, and cycling nutrients — rather than for harvest.',
    sourceReferences: [{ sourceId: 'usda-nrcs' }],
  },
  {
    slug: 'evapotranspiration',
    term: 'Evapotranspiration',
    definition:
      'The combined loss of water from soil evaporation and plant transpiration; a key quantity in estimating crop water requirements.',
    sourceReferences: [{ sourceId: 'fao-land-water' }],
  },
  {
    slug: 'host-plant',
    term: 'Host plant',
    definition:
      'A plant species on which a pest or pathogen can feed, reproduce, or complete part of its life cycle.',
    sourceReferences: [{ sourceId: 'eppo-gd' }],
  },
  {
    slug: 'inoculum',
    term: 'Inoculum',
    definition:
      'The pathogen material — such as spores, mycelium, or bacterial cells — capable of initiating infection in a host plant.',
    sourceReferences: [{ sourceId: 'cabi' }],
  },
  {
    slug: 'ruminant',
    term: 'Ruminant',
    definition:
      'A mammal, such as cattle, sheep, or goats, that digests plant material by fermenting it in a specialized four-compartment stomach before further digestion.',
    related: [
      { type: 'livestock', slug: 'cattle' },
      { type: 'livestock', slug: 'sheep' },
    ],
    sourceReferences: [{ sourceId: 'nap-nrc' }],
  },
  {
    slug: 'forage',
    term: 'Forage',
    definition:
      'Plant material — including grasses and legumes — grazed or harvested to feed livestock.',
    sourceReferences: [{ sourceId: 'nap-nrc' }],
  },
  {
    slug: 'yield',
    term: 'Yield',
    definition:
      'The quantity of a crop produced per unit area, commonly expressed in tonnes or kilograms per hectare. Actual yields vary widely by variety, region, season, and management.',
    sourceReferences: [{ sourceId: 'faostat' }],
  },
];
