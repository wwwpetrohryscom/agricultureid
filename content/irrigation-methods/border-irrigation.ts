import type { IrrigationMethodContent } from '@/types/content';

export const borderIrrigation: IrrigationMethodContent = {
  id: 'irrigation-method-border-irrigation',
  slug: 'border-irrigation',
  contentType: 'irrigation-method',
  title: 'Border Irrigation',
  alternativeNames: ['Border-strip irrigation', 'Border-check irrigation'],
  category: 'Irrigation method',
  subcategory: 'Surface irrigation',
  methodClass: 'surface',
  summary:
    'Border irrigation divides a field into long, gently sloping strips bounded by parallel ridges, down which a sheet of water advances and infiltrates as it flows. It suits close-growing crops such as cereals, pasture, and forage legumes on uniform slopes.',
  introduction: [
    {
      type: 'paragraph',
      text: 'In border (border-strip) irrigation the field is split into long rectangular strips separated by low parallel ridges called borders or levees. Water is released across the top end of a strip and moves down the gentle, uniform slope as a broad advancing sheet, soaking into the soil along the way. Each strip is essentially a long, narrow, sloping basin open at the lower end.',
    },
    {
      type: 'paragraph',
      text: 'The method is well matched to close-growing crops that cover the ground fully, such as small-grain cereals, pasture, and forage legumes, because water spreads across the whole strip rather than being confined to furrows. Even land grading and a suitable inflow are what make the advancing sheet reach the far end without over- or under-watering.',
    },
  ],
  keyFacts: [
    { label: 'Method class', value: 'Surface irrigation' },
    {
      label: 'Working principle',
      value:
        'A sheet of water advances down a graded, ridge-bounded strip and infiltrates',
    },
    {
      label: 'Best suited crops',
      value:
        'Close-growing cereals, pasture, and forage legumes such as alfalfa',
    },
    {
      label: 'Land requirement',
      value: 'Uniform, gentle slope along the strip and level across its width',
    },
    {
      label: 'Contrast with furrows',
      value:
        'Wets the whole strip surface rather than water confined to furrows',
    },
    {
      label: 'Key management factor',
      value:
        'Inflow rate and cut-off timing matched to strip length and soil intake',
    },
  ],
  sections: [
    {
      id: 'how-it-works',
      heading: 'How it works',
      body: [
        {
          type: 'list',
          ordered: true,
          items: [
            'The field is graded into long strips bounded by low parallel border ridges',
            'Water is turned into the head of a strip at a controlled rate',
            'A shallow sheet of water advances down the strip’s gentle slope',
            'Water infiltrates along the strip as the front moves toward the lower end',
            'Inflow is cut off at a timing chosen so the strip is watered evenly without excess runoff',
          ],
        },
      ],
    },
    {
      id: 'where-it-suits',
      heading: 'Where it suits',
      body: [
        {
          type: 'paragraph',
          text: 'Border irrigation suits fields with a uniform, gentle slope in the direction of flow and little cross-slope, on soils with moderate infiltration. It is a common choice for dense, close-sown crops and for pasture and forage stands, where confining water to furrows would leave much of the ground dry. Well-graded borders give even coverage across broad areas with relatively simple infrastructure.',
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Very high-infiltration soils can absorb water before the sheet reaches the far end of a long strip, while very flat or irregular land makes even advance difficult; strip length is matched to soil and slope.',
        },
      ],
    },
    {
      id: 'efficiency-and-management',
      heading: 'Efficiency and management',
      body: [
        {
          type: 'paragraph',
          text: 'The uniformity and efficiency of border irrigation depend on matching the inflow rate, strip length, slope, and cut-off time to the soil’s intake characteristics. Too little inflow and the far end is under-watered; too much or too late a cut-off and water is lost as runoff or deep percolation at the head. Precise land grading, including laser levelling where available, substantially improves performance.',
        },
        {
          type: 'paragraph',
          text: 'As a surface method wetting the whole strip, border irrigation loses some water to evaporation and, if poorly managed, to runoff and deep percolation, so management focuses on even advance and appropriate cut-off.',
        },
      ],
    },
    {
      id: 'considerations',
      heading: 'Considerations',
      body: [
        {
          type: 'paragraph',
          text: 'Border systems need relatively little equipment beyond land grading and water-control structures, but they demand careful field preparation and a reliable inflow large enough to advance across the strip. They are less suited to steep, undulating, or highly permeable land, where pressurised methods may distribute water more evenly.',
        },
        {
          type: 'callout',
          tone: 'important',
          text: 'Strip length, slope, inflow, and cut-off timing are site-specific and depend on soil intake, land, and water supply; this entry does not prescribe design values.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'irrigation-method', slug: 'surface-irrigation' },
    { type: 'irrigation-method', slug: 'basin-irrigation' },
    { type: 'irrigation-method', slug: 'furrow-irrigation' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'alfalfa' },
    { type: 'soil', slug: 'loam-soil' },
    { type: 'soil-topic', slug: 'soil-water-retention' },
    { type: 'soil-topic', slug: 'soil-drainage' },
    { type: 'irrigation-method', slug: 'irrigation-scheduling' },
  ],
  glossaryTerms: ['evapotranspiration', 'forage'],
  geographicScope:
    'General overview of border irrigation as used in surface-irrigated agriculture worldwide. Strip design and management depend on local soils, slope, and water supply.',
  climateContext:
    'Border irrigation supplements rainfall for close-growing crops; water losses to evaporation from the wetted strip rise with temperature and evaporative demand.',
  limitations: [
    'This entry describes border irrigation in general terms; it does not give strip lengths, slopes, inflow rates, or cut-off timings, which are soil- and site-specific.',
    'Application efficiency depends heavily on land grading and management and is not quantified here.',
  ],
  sourceReferences: [
    {
      sourceId: 'fao-land-water',
      citedFor: 'Border-strip irrigation design and surface methods',
    },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Surface irrigation and land-grading practice',
    },
    {
      sourceId: 'fao',
      citedFor: 'Role of surface irrigation in field and forage crops',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Border Irrigation',
    description:
      'Border irrigation explained: how a water sheet advances down graded, ridge-bounded strips to irrigate cereals, pasture, and forage crops.',
    keywords: [
      'border irrigation',
      'border strip irrigation',
      'surface irrigation',
      'flood irrigation',
    ],
  },
  structuredData: { article: true },
};
