import type { PostHarvestContent } from '@/types/content';

export const flatStorageWarehouse: PostHarvestContent = {
  id: 'post-harvest-flat-storage-warehouse',
  slug: 'flat-storage-warehouse',
  contentType: 'post-harvest',
  title: 'Flat Storage Warehouse',
  postHarvestClass: 'storage',
  processStage: 'storage',
  operatingPrinciple:
    'Grain is piled in bulk on the floor of a wide building rather than held in a tall cell, and conditioned by aeration through ducts laid on or in the floor. Because the pile is shallow and wide, the grain compacts less under its own weight and air passes through it against lower resistance than in a deep column, so a cooling front can be driven through with less fan pressure. The building supplies the roof, the walls, and the exclusion of water and pests; the aeration system supplies the condition. The trade-off is geometry: a shallow pile has a large surface area exposed to the store’s air, and its sloping faces cannot be aerated as evenly as its centre.',
  riskFactors: [
    'Sloped pile faces where the grain depth over the aeration duct varies, so air short-circuits through the shallow edges and leaves the deep centre unconditioned',
    'Condensation dripping from an uninsulated roof onto the grain surface below',
    'Moisture ingress at the base of walls, through floor joints, or from rising damp in an unsealed slab',
    'Bird and rodent access, which is harder to exclude in a large building with wide doors than in a sealed cell',
    'Difficulty segregating lots, since bulks piled in the same space merge at their boundaries',
    'Wall loading, as bulk grain exerts lateral pressure that buildings not designed for it cannot take',
    'Carry-over insects in the roof structure, wall junctions, and floor ducts, which are numerous and hard to clean in a large building',
    'Front-end loader traffic on the pile, which breaks grain and compacts the surface it drives over',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'grain-probe-sampling' },
  ],
  safetyLimitations: [
    'Grain piled against a wall or in a heap can collapse or avalanche onto a person working at its face, and flowing grain will not support a person. Loader operation on and around a grain pile places machinery and people in the same space. Working on or in bulk grain is a matter for trained personnel following the facility’s own written procedures; AgricultureID gives no entry, working, or unloading procedure.',
    'Buildings not engineered for bulk grain can fail under the lateral pressure a pile exerts on their walls. Structural adequacy is a question for a qualified engineer, not for general guidance.',
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'oat-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
  ],
  equipment: [{ type: 'machinery', slug: 'grain-auger' }],
  qualityEffects: [
    'Holds the condition grain arrived in; like any store it preserves rather than improves',
    'Lower airflow resistance than a deep column makes even cooling achievable with modest fans, where pile depth is uniform',
    'Uneven depth over the sloping faces gives uneven conditioning, so edges and the deep centre can differ in temperature and moisture',
    'Loader handling on the pile adds mechanical damage and fines relative to gravity-fed cells',
    'Bulks piled in one space are difficult to keep separate, so lot identity is weaker than in a cell store',
  ],
  environmentalContext:
    'Flat stores are common where capacity must be added cheaply, where existing farm buildings can be adapted, and in temperate regions with a cool storage season that makes ambient aeration effective. They are widespread in European and Australian grain systems. In hot or humid climates a large uninsulated building is difficult to keep cool and condensation under the roof becomes a persistent problem.',
  alternativeNames: [
    'Flat store',
    'Floor store',
    'Bulk shed',
    'Grain warehouse',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Storage',
  summary:
    'A flat storage warehouse holds grain piled in bulk on a building floor rather than in a tall cell, aerated through floor ducts — cheap to build and easy to cool, but harder to aerate evenly and to segregate.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Flat storage holds grain as a wide, shallow pile on the floor of a building, in contrast to the deep vertical columns of a silo. It is frequently the cheapest way to add grain capacity: the structure is a shed, sometimes purpose-built with reinforced walls and in-floor ducting, often an existing agricultural building pressed into service. Capacity is added by extending the footprint or piling higher rather than by building another cell.',
    },
    {
      type: 'paragraph',
      text: 'The geometry that makes flat storage cheap also defines its weaknesses. A shallow bulk resists airflow far less than a deep one, so aeration is comparatively easy where the pile is level. But grain tipped into a heap forms sloping faces of varying depth, and air always takes the path of least resistance — meaning the shallow edges get the airflow and the deep centre does not. Flat stores are also poor at keeping lots apart, because piles in a shared space merge at their edges.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Grain piled in bulk on a building floor, aerated through floor ducts',
    },
    {
      label: 'Main advantage',
      value: 'Low cost per unit of capacity; shallow bulk is easy to aerate',
    },
    {
      label: 'Main weakness',
      value:
        'Uneven depth over sloping faces gives uneven aeration; poor lot segregation',
    },
    {
      label: 'Structural requirement',
      value:
        'Walls must be engineered for the lateral pressure bulk grain exerts',
    },
    {
      label: 'Main threats',
      value:
        'Roof condensation, damp at walls and floor, birds and rodents, carry-over insects',
    },
    {
      label: 'Monitoring',
      value:
        'Grain temperature at depth across the pile, plus surface and roof inspection',
    },
    {
      label: 'Handling',
      value: 'Usually filled and emptied by conveyor and front-end loader',
    },
  ],
  sections: [
    {
      id: 'geometry',
      heading: 'Why the shape of the pile matters',
      body: [
        {
          type: 'paragraph',
          text: 'Air moving through grain follows the path of least resistance, and resistance rises with the depth of grain the air must cross. In a silo cell that depth is the same everywhere, so air is distributed reasonably evenly. In a flat store it is not. Grain tipped from a conveyor forms a heap with sloping faces, so a duct running under the pile has deep grain above it at the centre and shallow grain above it near the edges. Air fed into that duct escapes preferentially through the shallow edges, and the deep centre — the part with the most grain and the greatest need — receives proportionally less.',
        },
        {
          type: 'paragraph',
          text: 'This is why flat stores are levelled rather than left as heaps, why duct layouts are designed against the intended pile profile rather than simply spaced evenly, and why the walls of purpose-built flat stores are made high enough to hold a level bulk rather than a heap. It is also why the aeration performance of a flat store depends more on how it is filled than the performance of a cell does. The airflow and duct spacing appropriate to a given crop, pile depth, and climate are set by the applicable national storage guidance and engineering recommendations.',
        },
      ],
    },
    {
      id: 'building',
      heading: 'The building as part of the store',
      body: [
        {
          type: 'paragraph',
          text: 'In a silo the structure is engineered for grain and does one job. In a flat store the building is doing several, and often was not designed for any of them. Bulk grain exerts substantial lateral pressure on the walls that retain it, and agricultural buildings designed to keep rain off machinery are not necessarily designed to be pushed outward from the inside. Purpose-built flat stores have engineered retaining walls; adapted buildings need a qualified assessment before grain is piled against them.',
        },
        {
          type: 'paragraph',
          text: 'The roof matters as much. A large uninsulated roof over a cool grain bulk is a condensing surface: warm moist air in the headspace meets cold steel, condenses, and drips onto the grain below, wetting the surface in patches that then mould. Insulation, ventilation of the headspace, or both are the response. At floor level the equivalent problem is damp — an unsealed slab, a joint, or the base of a wall will move water into the bottom of the pile, which is the part least likely to be inspected. The large door openings that make a flat store convenient to fill are also the openings through which birds and rodents enter.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Figures are not universal',
          text: 'Safe pile depth, airflow, duct spacing, and holding moisture depend on the crop, the climate, and the intended holding period. They are set by the applicable national storage guidance, not by any general rule.',
        },
      ],
    },
    {
      id: 'good-practice',
      heading: 'Good practice',
      body: [
        {
          type: 'list',
          items: [
            'Confirm the building is engineered for the lateral pressure of the intended bulk before piling grain against its walls.',
            'Level the bulk rather than leaving heaps, so aeration air meets a uniform depth of grain.',
            'Clean the building thoroughly before filling — roof structure, wall junctions, floor ducts, and the surrounding area all carry insects over between seasons.',
            'Address roof condensation through insulation or headspace ventilation before it drips onto the surface.',
            'Seal the floor and wall bases against damp, and check the bottom of the pile, which is the least visible part.',
            'Proof the building against birds and rodents, particularly at door openings and the eaves.',
            'Monitor grain temperature at depth across the pile, not only where it is convenient to reach.',
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Grain piles and machinery',
          text: 'Grain faces can collapse or avalanche onto workers, flowing grain will not support a person, and loaders working a pile put machinery and people in the same space. This is a matter for trained personnel following the facility’s own procedures; no working or unloading procedure is given here.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related storage',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus grain storage',
              description:
                'Grain storage is the general concept covering any grain bulk. A flat store is one concrete implementation of it, defined by its shallow, wide geometry.',
            },
            {
              term: 'Versus a commercial grain silo',
              description:
                'A silo holds deep columns in separate cells: better segregation, even airflow, higher cost, and higher fan pressure. A flat store is cheaper and easier to cool but merges lots and aerates unevenly across a sloping pile.',
            },
            {
              term: 'Versus bag stack storage',
              description:
                'Both may occupy the same kind of building, but bag stacks hold grain in sacks with air gaps between them and no aeration system, whereas a flat store holds one continuous bulk conditioned by ducted air.',
            },
            {
              term: 'Versus ambient warehouse storage',
              description:
                'An ambient warehouse holds packaged durable commodities at whatever the building provides, with no aeration of the commodity itself. A flat store actively conditions a bulk.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'maize' },
    { type: 'machinery', slug: 'grain-auger' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'aerated-storage' },
    { type: 'post-harvest', slug: 'commercial-grain-silo' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor: 'Grain store design, hygiene, and aeration of floor stores',
    },
    {
      sourceId: 'fao',
      citedFor: 'Grain warehouse storage and post-harvest infrastructure',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Airflow resistance and aeration of stored grain bulks',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Aeration duct design and grain pile management',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global; most common in temperate grain regions where existing buildings can be adapted and ambient air is cool enough to condition a bulk. Design and safe holding conditions are set by national guidance.',
  limitations: [
    'This entry states no pile depth, airflow rate, duct spacing, holding moisture, or storage duration: all are crop-, climate-, and period-specific and are set by the applicable national storage guidance.',
    'Whether a given building can safely retain bulk grain is a structural engineering question requiring qualified assessment; nothing here substitutes for it.',
    'Store designs and adaptations vary enormously; the aeration behaviour described is general and does not predict how a particular store performs.',
    'Insect and rodent management options, and their legal availability, differ by country and commodity and are not covered here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Flat Storage Warehouse: Bulk Grain Floor Stores',
    description:
      'How flat grain stores work: shallow bulk piles, floor aeration ducts, why sloping faces aerate unevenly, roof condensation, and wall loading requirements.',
    keywords: [
      'flat storage warehouse',
      'flat grain store',
      'floor store',
      'bulk grain shed',
      'aeration ducts',
    ],
  },
  structuredData: { article: true },
};
