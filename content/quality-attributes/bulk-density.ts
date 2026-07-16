import type { QualityAttributeContent } from '@/types/content';

export const bulkDensity: QualityAttributeContent = {
  id: 'quality-attribute-bulk-density',
  slug: 'bulk-density',
  contentType: 'quality-attribute',
  title: 'Bulk Density',
  alternativeNames: ['Apparent density', 'Bulk specific weight'],
  category: 'Quality attribute',
  subcategory: 'Grain and seed',
  attributeClass: 'physical',
  qualityDomain: 'storage-stability',
  notAnIndicatorOf: [
    "Not a grade — test weight is the standardised, procedure-defined expression of essentially the same physical quantity used for commercial grading; a bulk density figure obtained by a facility's own filling method carries no grading meaning and should not be quoted as if it were a graded test weight.",
    'Not a quality measure — a bulk density reading says nothing about protein, soundness, contamination, or food safety on its own.',
    'Not a fixed constant for a given commodity — it varies with moisture content, kernel size and shape, the amount of broken material and fines present, and how the bulk was filled, so the same lot can produce different readings depending on handling.',
    'Not interchangeable between a settled bulk and a freshly filled one — vibration, handling, and time cause particles to resettle into a denser packing, so a design figure calculated for a freshly filled bin and a figure measured on grain that has already settled or been through conveying differ, sometimes materially.',
  ],
  measurementBasis:
    'Loose, freshly filled bulk unless otherwise stated (a settled or vibrated bulk is denser)',
  typicalUnits: ['kg/m³', 'kg/hL'],
  appliesToCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'sorghum-grain' },
    { type: 'commodity', slug: 'dry-beans' },
    { type: 'commodity', slug: 'sunflower-seed' },
  ],
  measuredBy: [{ type: 'quality-measurement', slug: 'test-weight-apparatus' }],
  summary:
    'Bulk density is the mass of a bulk of grain or seed per unit volume, including the air between kernels. It is the engineering property behind bin and silo sizing, structural loading, and transport planning, and it is deliberately distinct from test weight, the same underlying quantity measured under a prescribed standard as a commercial grade factor.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Bulk density is the mass of a quantity of grain, seed, or other particulate commodity divided by the total volume it occupies, including the void space of air trapped between individual kernels. It answers a practical engineering question — how much mass will occupy a given space — and is the figure engineers and facility planners reach for when sizing storage bins and silos, calculating the structural loads a bin wall, floor, or foundation must carry, planning how much mass a given truck, railcar, or vessel compartment can carry, and specifying conveying, aeration, and handling equipment.',
    },
    {
      type: 'paragraph',
      text: 'Bulk density and test weight are the same underlying physical quantity — mass per unit bulk volume — but they serve different purposes and are treated as separate attributes for exactly that reason. Test weight is bulk density measured under a prescribed standard apparatus and filling procedure, and used as a commercial grading factor precisely because that procedure is fixed and reproducible. Bulk density, in the engineering sense used here, is the same measurement made under whatever conditions match the application at hand — loose or settled, at the moisture and fines content actually present — and used for design and operational calculations rather than for grading a lot against a standard.',
    },
  ],
  keyFacts: [
    {
      label: 'What it measures',
      value:
        'Mass of a bulk (including inter-kernel air space) per unit volume',
    },
    {
      label: 'Primary use',
      value:
        'Sizing bins and silos, structural load calculation, transport payload planning',
    },
    {
      label: 'Relationship to test weight',
      value:
        'Same underlying quantity; test weight is bulk density measured by a prescribed grading procedure',
    },
    {
      label: 'Not a grade factor itself',
      value: 'A self-measured bulk density figure has no grading standing',
    },
    {
      label: 'Varies with',
      value:
        'Moisture content, kernel shape, fines content, and fill/settling condition',
    },
    {
      label: 'Loose vs settled',
      value:
        'A settled or vibrated bulk packs denser than a freshly filled one',
    },
    {
      label: 'Related handling properties',
      value:
        'Angle of repose and compaction behaviour, relevant to bin design and flow',
    },
  ],
  sections: [
    {
      id: 'what-it-is-used-for',
      heading: 'What bulk density is used for',
      body: [
        {
          type: 'paragraph',
          text: 'Facility and equipment designers use bulk density as an input to several calculations that have nothing to do with commercial grading. Sizing a bin or silo to hold a target tonnage requires knowing how much mass a cubic metre of the commodity occupies. Structural engineers use bulk density, combined with the geometry of the storage structure, to calculate the lateral and vertical loads that grain exerts on walls, hopper surfaces, and floors — loads that a structure must be designed to withstand. Logistics planners use it to calculate how much mass a truck, railcar, barge, or shipping container of known volume can carry without exceeding weight limits.',
        },
        {
          type: 'list',
          items: [
            'Bin and silo capacity planning: converting a target tonnage into a required volume, or a known volume into a capacity estimate.',
            'Structural load calculation for walls, floors, and foundations of storage structures.',
            'Transport payload planning for trucks, railcars, and vessels operating under volume or weight constraints.',
            'Specification of conveying, elevating, and aeration equipment, which must be sized to move or ventilate a given mass per unit volume.',
          ],
        },
      ],
    },
    {
      id: 'distinguishing-from-test-weight',
      heading: 'Distinguishing bulk density from test weight',
      body: [
        {
          type: 'callout',
          tone: 'important',
          title: 'Same quantity, different purpose',
          text: 'Bulk density and test weight measure the same physical property — mass per unit bulk volume — but they are not interchangeable in use. Test weight is that quantity measured under a fixed, standardised apparatus and filling procedure and used as a commercial grade factor; see the test weight entry for detail on that standard. Bulk density, in the engineering sense, is the same measurement taken under conditions that suit the design or operational question at hand, and it carries no grading standing. A bulk density figure calculated for bin design should not be quoted as, or substituted for, a graded test weight, and vice versa.',
        },
        {
          type: 'paragraph',
          text: "Because grading procedures are deliberately standardised, a test weight reading is comparable across lots graded the same way. A bulk density figure measured by a facility's own method is not automatically comparable to another facility's figure, or to a graded test weight, unless the method used is stated.",
        },
      ],
    },
    {
      id: 'what-changes-it',
      heading: 'What changes bulk density',
      body: [
        {
          type: 'paragraph',
          text: 'Bulk density is not a fixed constant for a commodity; it responds to several factors that can differ from one measurement occasion to the next even for grain from the same field. Moisture content changes both kernel mass and, at higher moisture, how kernels pack. Kernel size, shape, and surface texture affect how efficiently particles nest together. The proportion of broken kernels, fines, and foreign material changes how the void space between particles is filled. And the physical state of the bulk itself matters: a freshly poured, loose bulk contains more trapped air and is less dense than the same grain after it has settled, been vibrated during transport, or been compacted by the weight of material above it in a tall bin.',
        },
        {
          type: 'paragraph',
          text: 'This settling effect is why a bulk density figure used for a design calculation and a figure measured on grain that has already been handled can differ: designers commonly need to account for both a loose-fill and a settled or compacted condition, rather than relying on a single value for the whole life of the bulk in storage.',
        },
      ],
    },
    {
      id: 'related-handling-properties',
      heading: 'Related handling properties',
      body: [
        {
          type: 'paragraph',
          text: 'Bulk density is often considered alongside other bulk-handling properties that describe how a particulate commodity behaves in storage and conveying equipment, though these are distinct properties in their own right. Angle of repose — the slope angle a freely poured pile of grain settles into — affects how grain distributes itself in a bin and how hopper and spout geometry should be designed. Compaction behaviour under load affects flow out of a bin and the pressures a structure experiences. These properties, together with bulk density, feed into the same family of engineering calculations for storage and handling infrastructure.',
        },
      ],
    },
  ],
  connections: [{ type: 'commodity-grade', slug: 'usda-wheat-grades' }],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'grain-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Bulk density and its role in grain storage engineering',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Research on physical properties of stored grain bulks, including bulk density',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Practical guidance distinguishing bulk handling properties from grading factors',
    },
    {
      sourceId: 'iastate-extension',
      citedFor:
        'Bin and silo design considerations related to bulk density and grain loads',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. The physical principles are universal, but the design figures used for bin loads, transport, and equipment specification vary by commodity, facility, and applicable engineering standard.',
  limitations: [
    'Bulk density is not a grading factor; test weight, measured under a prescribed standard procedure, is the grading expression of this quantity and should be used where a commercial grade figure is required.',
    'A single bulk density figure does not capture the difference between a freshly filled, loose bulk and a settled or compacted one; both conditions may need to be considered for structural design.',
    'Values reported without a stated moisture basis and fill condition are not reliably comparable between sources.',
    'This entry describes general engineering principles; a specific bin, silo, or transport design should rely on figures appropriate to the actual commodity, moisture, and condition involved, verified by a qualified engineer.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Bulk Density: Grain Storage & Handling Engineering',
    description:
      'What bulk density measures, how it differs from test weight, and why it is used for bin sizing, structural loads, and transport planning, not grading.',
    keywords: [
      'bulk density',
      'grain storage engineering',
      'bin design',
      'test weight difference',
      'silo loading',
    ],
  },
  structuredData: { article: true },
};
