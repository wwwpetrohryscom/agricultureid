import type { FarmingSystemContent } from '@/types/content';

export const permaculture: FarmingSystemContent = {
  id: 'system-permaculture',
  slug: 'permaculture',
  contentType: 'farming-system',
  title: 'Permaculture',
  systemClass: 'integrated',
  alternativeNames: ['Permaculture design', 'Permanent agriculture'],
  category: 'Farming system',
  subcategory: 'Integrated system',
  summary:
    'Permaculture is a design-led approach to agriculture and land use that arranges perennial plantings, diversified polycultures, and integrated animals and water systems on a site to reduce external inputs and mimic patterns found in natural ecosystems.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Permaculture ("permanent agriculture" or "permanent culture") is a design philosophy developed in the 1970s that applies a set of ecological observation and design principles to whole sites, aiming to arrange plants, animals, structures, and water features so that the outputs of one element help meet the needs of another. It is less a single fixed technique than a design process applied differently on each site.',
    },
    {
      type: 'paragraph',
      text: 'Unlike organic farming, permaculture has no single global certification standard; how its principles are applied varies by designer, site, and scale, from home gardens to larger diversified farms. It overlaps considerably with agroforestry and silvopasture in its use of perennial plantings and integrated livestock, but is broader in scope, covering whole-site design rather than a specific practice.',
    },
  ],
  keyFacts: [
    {
      label: 'Origin',
      value:
        'Design philosophy developed in the 1970s combining ecological principles with land-use planning',
    },
    {
      label: 'Defining feature',
      value:
        'Site-specific design integrating perennial plants, polycultures, animals, and water management to reduce external inputs',
    },
    {
      label: 'Certification',
      value:
        'No single global certification standard; implementation varies by designer and site',
    },
    {
      label: 'Common elements',
      value:
        'Food forests, guild plantings, water-harvesting earthworks, and integrated livestock',
    },
    {
      label: 'Scale',
      value: 'Applied from home gardens to larger diversified farms',
    },
    {
      label: 'Overlap with other systems',
      value:
        'Shares practices with agroforestry and silvopasture but covers whole-site design rather than a single technique',
    },
  ],
  sections: [
    {
      id: 'what-permaculture-is',
      heading: 'What permaculture is',
      body: [
        {
          type: 'paragraph',
          text: 'Permaculture treats a farm or garden as a designed system rather than a collection of separate enterprises, seeking arrangements where the waste or output of one element (such as animal manure or pruned biomass) becomes an input for another (such as soil fertility or mulch).',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Guild',
              description:
                'A group of plants (and sometimes animals) deliberately combined because their needs and outputs complement one another.',
            },
            {
              term: 'Food forest',
              description:
                'A multi-layered planting of trees, shrubs, and ground-cover crops designed to resemble the structure of a natural woodland.',
            },
            {
              term: 'Zone planning',
              description:
                'Arranging elements by frequency of use or attention needed, commonly from intensively managed areas near a dwelling to less-visited outer zones.',
            },
          ],
        },
      ],
    },
    {
      id: 'design-principles',
      heading: 'Design principles',
      body: [
        {
          type: 'list',
          items: [
            "Observing a site's existing patterns before intervening",
            'Favoring perennial and self-renewing elements where practical',
            'Designing so outputs of one element serve as inputs to another',
            'Using diversity of species and structure to build resilience',
            "Working with, rather than against, the site's existing slope, water flow, and microclimates",
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Specific principle sets and terminology vary between permaculture teachers and texts; this entry describes commonly cited themes rather than a single authoritative list.',
        },
      ],
    },
    {
      id: 'common-practices',
      heading: 'Common practices',
      body: [
        {
          type: 'list',
          items: [
            'Multi-story food forests combining trees, shrubs, and ground-cover plants',
            'Water-harvesting earthworks such as swales to capture and direct rainfall',
            'Integrated livestock, such as poultry, used for pest control and fertility cycling',
            'Perennial staple and fruit crops alongside annual polycultures',
            'Companion planting to support pest management and space use',
          ],
        },
      ],
    },
    {
      id: 'benefits-and-trade-offs',
      heading: 'Benefits and trade-offs',
      body: [
        {
          type: 'list',
          items: [
            'Diversified plantings can support on-site biodiversity and reduce reliance on purchased inputs',
            'Perennial and integrated elements can reduce some recurring labor once established',
            'Water-harvesting design can improve resilience to rainfall variability on a site',
          ],
        },
        {
          type: 'list',
          items: [
            'Design and establishment can require significant upfront planning, labor, and time before elements mature',
            'Scaling permaculture principles to commercial-volume production is more complex than for single-enterprise systems',
            'Outcomes depend heavily on designer skill and site-specific conditions rather than a standardized method',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'This entry makes no yield or profitability claim for permaculture relative to other systems, and definitions of what counts as "permaculture" vary among practitioners.',
        },
      ],
    },
    {
      id: 'where-permaculture-is-used',
      heading: 'Where permaculture is used',
      body: [
        {
          type: 'paragraph',
          text: 'Permaculture principles are applied worldwide at scales ranging from home and community gardens to smallholdings and some larger diversified farms, in both temperate and tropical climates. Specific plant, animal, and water-management choices are adapted to local site and climate conditions.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'farming-system', slug: 'mixed-farming' },
  ],
  connections: [
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'apple' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'silvopasture' },
    { type: 'farming-system', slug: 'organic-farming' },
    { type: 'soil-topic', slug: 'soil-organic-matter' },
    { type: 'soil-topic', slug: 'soil-biology' },
  ],
  glossaryTerms: ['perennial-crop', 'cover-crop'],
  geographicScope:
    'Practiced worldwide at scales from home gardens to diversified farms; specific plant and animal choices are climate- and site-specific.',
  climateContext:
    'Species and design choices such as food-forest layers and water-harvesting earthworks are adapted to local rainfall, temperature, and frost patterns.',
  limitations: [
    'Definitions of permaculture vary among practitioners; there is no single certifying standard this entry can point to.',
    'It is not extensively validated at commercial production scale for all crops, and makes no yield or profitability claims.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Agroecological and diversified production system context',
    },
    {
      sourceId: 'cgiar',
      citedFor: 'Research on diversified and low-input production systems',
    },
    {
      sourceId: 'cornell-cals',
      citedFor: 'Perennial polyculture and food-forest design context',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor:
        'Soil and water conservation practices used in permaculture design',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Permaculture',
    description:
      'Permaculture explained: a design-led approach using perennials, polycultures, and integrated animals to reduce inputs, with honest limits and scope.',
    keywords: [
      'permaculture',
      'permaculture design',
      'food forest',
      'polyculture',
    ],
  },
  structuredData: { article: true },
};
