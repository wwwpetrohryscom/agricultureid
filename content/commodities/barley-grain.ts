import type { CommodityContent } from '@/types/content';

export const barleyGrain: CommodityContent = {
  id: 'commodity-barley-grain',
  slug: 'barley-grain',
  contentType: 'commodity',
  title: 'Barley Grain',
  alternativeNames: ['Malting barley', 'Feed barley', 'Barley corns'],
  category: 'Cereal grain commodity',
  subcategory: 'Malting and feed barley',
  commodityClass: 'cereal-grain',
  physicalForm: 'whole-grain',
  harvestedPart:
    'Caryopsis (grain), normally with the hull adhering to the kernel',
  sourceCrop: { type: 'crop', slug: 'barley' },
  summary:
    'Barley grain is the harvested caryopsis of barley, traded along two very different routes: malting barley, bought on germination and processing behaviour, and feed barley, bought on bulk energy value. The same field can produce either.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Barley grain is unusual among cereal commodities in that its destination is decided after harvest, on the evidence of the lot itself. A consignment that meets malting requirements is worth materially more than the same grain sold as feed, and the decision turns on measurable properties of the delivered grain — germination capacity, protein, kernel size and uniformity, and freedom from damage — rather than on where or how it was grown.',
    },
    {
      type: 'paragraph',
      text: 'That two-route structure shapes everything about how barley is handled. Malting barley is a living commodity: the maltster needs the embryo alive and able to germinate on demand, which makes it the one major cereal where killing the grain destroys the premium. Feed barley carries no such requirement, so a lot that loses germination has not lost all value — it has changed markets.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Cereal grain' },
    { label: 'Parent crop', value: 'Barley (Hordeum vulgare)' },
    {
      label: 'Harvested part',
      value: 'Caryopsis with adhering hull in most traded types',
    },
    {
      label: 'Two trade routes',
      value: 'Malting barley (premium, specification-led) and feed barley',
    },
    {
      label: 'Defining malting attribute',
      value: 'Live embryo capable of even germination',
    },
    {
      label: 'Key quality attributes',
      value: 'Germination, protein, kernel size, moisture, skinning',
    },
    {
      label: 'Main products',
      value: 'Malt, with pearl barley from a separate pearling route',
    },
  ],
  sections: [
    {
      id: 'malting-versus-feed',
      heading: 'Malting barley and feed barley',
      body: [
        {
          type: 'paragraph',
          text: 'Malting and feed barley are the same commodity sorted by outcome. Maltsters buy on a narrow specification because malting is a controlled germination: the grain is steeped, allowed to sprout, and then kiln-dried at the moment enzyme development is right. Grain that will not germinate evenly cannot be malted, and grain whose protein is too high yields less extract and can cause haze in the finished drink. Feed buyers, by contrast, want bulk energy and are largely indifferent to whether the embryo is alive.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Germination capacity',
              description:
                'The proportion of kernels able to germinate. Central to malting value and destroyed by heat, mechanical damage, or prolonged poor storage.',
            },
            {
              term: 'Skinning',
              description:
                'Loss of the adhering hull from the kernel, usually caused by threshing or handling. Skinned kernels malt unevenly and are a graded defect in malting barley.',
            },
            {
              term: 'Screenings',
              description:
                'Small and thin kernels separated over a screen. Malting contracts specify kernel size uniformity because size drives even steeping.',
            },
          ],
        },
      ],
    },
    {
      id: 'uses-and-pathways',
      heading: 'Uses and product pathways',
      body: [
        {
          type: 'paragraph',
          text: 'The dominant food-chain pathway for barley is malting: malted barley is the primary product, made by germinating and kilning selected barley, and it supplies brewing, distilling, and a range of malt-based foods. A quite separate mechanical route removes the hull and abrades the outer layers to produce pearl barley, a food grain sold for direct cooking. Most barley by volume, however, never enters either route — it is fed to livestock, whole or processed, with ruminant rations the largest outlet.',
        },
        {
          type: 'list',
          items: [
            'Beverage — malted and used in brewing and distilling',
            'Feed — the largest outlet by volume, particularly for ruminant livestock',
            'Food — pearl barley, barley flakes, and malt-based food ingredients',
            'Seed — retained or certified for the next crop',
          ],
        },
      ],
    },
    {
      id: 'quality-and-grading',
      heading: 'Quality attributes and grading',
      body: [
        {
          type: 'paragraph',
          text: 'Barley grades against the usual physical measures — moisture, test weight, foreign material, damaged and broken kernels — but malting acceptance is decided by a contract specification layered on top of the grade, and it is stricter. Protein is measured and bracketed rather than maximised; kernel size distribution is measured over slotted screens; germination is tested directly; and skinned or split kernels, pre-germination in the field, and any heat damage are all counted against the lot.',
        },
        {
          type: 'paragraph',
          text: 'Two-row and six-row barleys are traded as distinct types with different processing behaviour, and maltsters commonly buy named varieties from approved lists rather than accepting any barley that meets the numbers. That is a real difference from most cereal trade: variety identity, normally a crop-level concept, becomes part of the commodity specification.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'A malting rejection is not a quality failure',
          text: 'Barley that misses a malting specification is sound feed grain. The two markets have different requirements, and a lot moving between them is being re-classed, not condemned.',
        },
      ],
    },
    {
      id: 'storage-and-handling',
      heading: 'Storage and handling context',
      body: [
        {
          type: 'paragraph',
          text: 'Storage practice for malting barley is set by a constraint no other cereal imposes: the drying air must stay cool enough to leave the embryo viable, so malting lots are dried more gently and more slowly than feed grain of the same moisture. After drying, the grain needs a dormancy-breaking period before it will germinate evenly, which means freshly harvested barley is not immediately maltable even when it meets every number.',
        },
        {
          type: 'paragraph',
          text: 'Beyond that, barley stores much like other cereals: dry, cool, aerated, monitored for insects and heating, and segregated by type and intended market. Because the hull protects the kernel, skinning during augering and free fall is a handling-induced defect worth engineering out of a malting chain.',
        },
      ],
    },
  ],
  primaryUses: ['feed', 'beverage', 'food'],
  secondaryUses: ['seed'],
  majorQualityAttributes: [
    'Germination capacity',
    'Protein content',
    'Kernel size and uniformity (screenings)',
    'Moisture content',
    'Test weight',
    'Skinned and broken kernels',
  ],
  commonDefects: [
    'Skinned and split kernels',
    'Pre-germination and sprout damage',
    'Heat damage from over-hot drying',
    'Thin kernels and screenings',
    'Mould and storage fungi',
    'Insect damage',
  ],
  moistureContext:
    'Dried before storage, but malting lots must be dried at air temperatures low enough to preserve germination; applicable limits come from the grade standard and the malting contract.',
  storageContext:
    'Held dry, cool, and aerated in bins and silos, segregated by type and intended market; malting lots also need a post-harvest dormancy period before they will germinate evenly.',
  transportContext:
    'Moves in bulk by truck, rail, and vessel; free fall and augering cause skinning, which matters for malting lots and not for feed.',
  majorProducingRegions: [
    'Europe and Central Asia',
    'North America',
    'Australia',
    'Middle East and North Africa',
  ],
  majorTradingRegions: [
    'Europe and Central Asia',
    'Australia',
    'North America',
    'East Asia and the Middle East (major importing regions)',
  ],
  commodityCodes: [
    {
      system: 'HS',
      code: '1003.90',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Barley, other than seed. Barley for sowing falls under 1003.10.',
    },
  ],
  primaryProducts: [{ type: 'commodity-product', slug: 'malted-barley' }],
  coProducts: [{ type: 'commodity-product', slug: 'pearl-barley' }],
  storageSystems: [
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'machinery', slug: 'combine-harvester' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['ruminant'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Barley as a traded cereal and its feed and malting uses',
    },
    {
      sourceId: 'ahdb',
      citedFor:
        'Malting barley specification, germination, and storage context',
    },
    {
      sourceId: 'usda',
      citedFor: 'Barley grading attributes and commodity classes',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Commodity item coverage for barley and malt',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, malting specifications, approved variety lists, and tariff subheadings are jurisdiction- and buyer-specific.',
  limitations: [
    'This entry is reference information, not a malting contract specification, grading determination, or customs classification.',
    'No protein bands, germination percentages, screening sizes, or moisture limits are given — these are set by the standard and the buyer contract.',
    'Malting acceptance depends on buyer-specific and often variety-specific criteria that vary by market and season.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Barley Grain: Malting and Feed Commodity',
    description:
      'Barley grain as a commodity: how malting and feed routes split after harvest, why germination and protein decide value, plus grading and storage constraints.',
    keywords: [
      'barley grain',
      'malting barley',
      'feed barley',
      'germination capacity',
      'barley grading',
    ],
  },
  structuredData: { article: true },
};
