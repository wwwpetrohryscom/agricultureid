import type { LivestockContent } from '@/types/content';

export const silkworms: LivestockContent = {
  id: 'livestock-silkworms',
  slug: 'silkworms',
  contentType: 'livestock',
  title: 'Silkworms',
  scientificName: 'Bombyx mori',
  alternativeNames: ['Domestic silk moth', 'Mulberry silkworm'],
  category: 'Livestock',
  subcategory: 'Domesticated insect (sericulture)',
  primaryProducts: [
    'Silk (cocoon fibre)',
    'Pupae (by-product; food/feed in some regions)',
    'Silkworm frass (soil amendment)',
  ],
  productionSystems: [
    'Household and smallholder rearing (sericulture)',
    'Commercial/industrial rearing units',
    'Integrated mulberry–silkworm systems',
  ],
  summary:
    'Silkworms are the domesticated larvae of the silk moth, reared exclusively on mulberry leaves to produce cocoons that are unwound for silk fibre. Sericulture links silkworm rearing directly to mulberry cultivation and is practised at both household and commercial scale.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The silkworm (Bombyx mori) is a fully domesticated insect, unable to survive independently of human rearing, cultivated for the continuous filament of silk protein it spins to form its cocoon. Unlike vertebrate livestock, silkworms are managed through a short, staged life cycle — egg, larva, pupa (cocoon), and moth — and the entire economically valuable phase of rearing centres on the larval stage, which feeds exclusively on the leaves of mulberry (Morus species).',
    },
    {
      type: 'paragraph',
      text: 'Sericulture, the practice of rearing silkworms for silk, is therefore inseparable from mulberry cultivation: mulberry orchards or plantations supply the sole feed for the larvae, and leaf quality and availability directly determine cocoon yield and silk quality. Rearing ranges from small household operations integrated with a family’s mulberry plot to larger commercial units supplying organised silk-reeling industries.',
    },
  ],
  keyFacts: [
    { label: 'Species', value: 'Bombyx mori (domesticated silk moth)' },
    {
      label: 'Life stage reared',
      value: 'Larva (caterpillar), through to cocoon formation and pupation',
    },
    { label: 'Sole feed source', value: 'Mulberry leaves (Morus species)' },
    { label: 'Primary product', value: 'Silk fibre unwound from the cocoon' },
    {
      label: 'Domestication status',
      value:
        'Fully domesticated; cannot survive or reproduce without human rearing',
    },
    {
      label: 'Key management factors',
      value:
        'Rearing-house temperature, humidity, and strict feed and hygiene control',
    },
  ],
  sections: [
    {
      id: 'overview',
      heading: 'Overview',
      body: [
        {
          type: 'paragraph',
          text: 'Sericulture combines two linked activities: growing and managing mulberry for a reliable leaf supply, and rearing silkworm larvae through several moults to the point of cocoon spinning. Both activities must be coordinated closely, since larvae feed frequently and require consistently fresh leaves through their roughly month-long growth period before spinning cocoons.',
        },
      ],
    },
    {
      id: 'strains-and-races',
      heading: 'Strains and races',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Univoltine races',
              description:
                'Complete one generation per year, typically found in cooler climates; often prized for cocoon and silk quality.',
            },
            {
              term: 'Bivoltine races',
              description:
                'Complete two generations per year and are widely used commercially for their combination of yield and silk quality.',
            },
            {
              term: 'Multivoltine races',
              description:
                'Complete several generations per year, common in warmer tropical regions and generally hardier but lower-yielding.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Commercial sericulture frequently uses hybrid silkworm strains that cross different races to combine desirable traits such as hardiness, cocoon yield, and silk filament quality.',
        },
      ],
    },
    {
      id: 'mulberry-cultivation-and-feeding',
      heading: 'Mulberry cultivation and feeding',
      body: [
        {
          type: 'paragraph',
          text: 'Because Bombyx mori larvae feed almost exclusively on mulberry leaves, sericulture is structured around mulberry as a dedicated feed crop, grown in bush, tree, or intensively pruned hedge form depending on region and system. Leaf harvesting is timed to larval development stages, moving from tender young leaves for early instars to coarser mature leaves as larvae grow.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Leaf quality, harvest timing, and feeding frequency are stage-specific and closely tied to local mulberry variety and climate; sericulture extension guidance should inform feeding schedules rather than generic timings.',
        },
      ],
    },
    {
      id: 'rearing-and-health',
      heading: 'Rearing and health',
      body: [
        {
          type: 'paragraph',
          text: 'Silkworm rearing depends on carefully controlled temperature and humidity in the rearing house, clean bedding and equipment, and strict hygiene, since larvae are highly susceptible to viral, bacterial, fungal, and protozoan diseases that can spread rapidly through a rearing batch. Disease prevention through sanitation and disinfection is generally emphasised over treatment, given the difficulty of treating disease once established in a cohort of larvae.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Regulatory and technical guidance',
          text: 'Silkworm disease management, disease-free egg (seed) certification, and sericulture regulation vary by country and are overseen by national sericulture or agricultural authorities. AgricultureID does not provide rearing or treatment protocols; follow local technical and regulatory guidance.',
        },
      ],
    },
    {
      id: 'production-context',
      heading: 'Production context',
      body: [
        {
          type: 'paragraph',
          text: 'Sericulture is a labour-intensive, smallholder-friendly enterprise in many producing countries, generating income from cocoons over a short rearing cycle that can be repeated several times a year where climate allows multiple mulberry harvests. Cocoon quality and yield feed directly into downstream reeling and silk-textile industries, linking silkworm rearing to broader rural and textile economies.',
        },
      ],
    },
  ],
  relatedTopics: [{ type: 'livestock', slug: 'honey-bees' }],
  connections: [
    { type: 'farming-system', slug: 'agroforestry' },
    { type: 'farming-system', slug: 'mixed-farming' },
    { type: 'climate', slug: 'humidity' },
    { type: 'climate', slug: 'temperature' },
    { type: 'soil-topic', slug: 'soil-fertility' },
  ],
  geographicScope:
    'Concentrated in Asia (notably China and India) with smaller producing regions elsewhere; mulberry variety, rearing calendar, and regulation vary by country.',
  climateContext:
    'Mulberry growth and silkworm rearing cycles are strongly seasonal and climate-dependent, with warmer regions supporting more rearing cycles per year.',
  limitations: [
    'This is a general species and sericulture overview, not a rearing manual or region-specific technical guide.',
    'Disease management and certification practices are governed by national sericulture authorities and are not detailed here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Sericulture and global silk production context',
    },
    {
      sourceId: 'fao-dad-is',
      citedFor:
        'Framework for documenting animal genetic resources and diversity',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Applied entomological and insect-rearing research context',
    },
    {
      sourceId: 'woah',
      citedFor: 'International animal health standard-setting context',
    },
  ],
  reviewedAt: '2026-07-12',
  updatedAt: '2026-07-12',
  editorialStatus: 'published',
  seo: {
    title: 'Silkworms',
    description:
      'A reference on silkworms: mulberry-based feeding, rearing-house management, disease prevention, and the sericulture production cycle behind silk fibre.',
    keywords: ['silkworms', 'Bombyx mori', 'sericulture', 'silk production'],
  },
  structuredData: { article: true },
};
