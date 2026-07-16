import type { PostHarvestContent } from '@/types/content';

export const chilledGrainStorage: PostHarvestContent = {
  id: 'post-harvest-chilled-grain-storage',
  slug: 'chilled-grain-storage',
  contentType: 'post-harvest',
  title: 'Chilled Grain Storage',
  postHarvestClass: 'cooling',
  processStage: 'storage',
  operatingPrinciple:
    'A refrigeration unit conditions air and delivers it into the aeration plenum of an existing bin or store, so a cooling front is driven through the bulk exactly as in ambient aeration — but with air that is manufactured rather than taken as the atmosphere provides it. The decisive feature is that the unit conditions humidity as well as temperature: refrigerating air condenses water out of it, and the machine then re-tempers the air so it does not arrive so dry that it desiccates the grain or so wet that it rewets it. This breaks aeration’s dependence on the weather, making cooling possible in climates and seasons where ambient air is never cool enough, and allowing grain to be cooled on demand rather than when conditions permit.',
  riskFactors: [
    'Treating chilling as a substitute for drying — it lowers temperature, and grain stored too wet will still deteriorate, more slowly',
    'Air delivered at the wrong humidity, either drying the surface grain and losing saleable weight or adding moisture to the bulk',
    'Condensation where chilled air meets warm surfaces, or where a cooled bulk meets warm store air at its surface',
    'Refrigeration or control failure during a run, leaving a partially cooled bulk with a warm-cool boundary inside it',
    'Rewarming after the unit is removed, since a chilled bulk in a warm climate gains heat through the structure from outside inward',
    'Fines and trash cores that divert air, exactly as in ambient aeration — refrigeration does not overcome an airflow problem',
    'Reliance on continuous power in settings where supply is unreliable, so the method fails precisely where the climate makes it necessary',
    'Cost and energy demand leading operators to cut runs short, leaving fronts incomplete',
  ],
  monitoringMethods: [
    { type: 'quality-measurement', slug: 'temperature-probe' },
    { type: 'quality-measurement', slug: 'electronic-moisture-meter' },
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'rice-paddy' },
    { type: 'commodity', slug: 'milled-rice' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'soybeans' },
    { type: 'commodity', slug: 'sorghum-grain' },
  ],
  equipment: [{ type: 'machinery', slug: 'grain-auger' }],
  qualityEffects: [
    'Suppresses storage insect development by holding the bulk below the temperature at which they breed, without chemicals or residues',
    'Slows mould growth and the respiration losses that accumulate in warm grain',
    'Preserves germination and seed vigour, which is why the method is used for seed and malting lots where viability is the product',
    'Allows grain to be held at a moisture that would be unsafe at ambient temperature, because activity is temperature-limited — within the limits national guidance sets',
    'Where delivered air is too dry, surface grain loses moisture and therefore saleable weight',
    'Does not dry grain and does not reverse deterioration that has already occurred',
  ],
  environmentalContext:
    'Chilled aeration exists because ambient aeration is a temperate privilege. In tropical and subtropical storage, and in temperate regions during a warm autumn, the atmosphere never supplies air cool enough to bring a bulk to a biologically quiet temperature, and a fan can only circulate warm air through warm grain. Refrigerated aeration manufactures the air instead. Its cost and power demand mean it is generally reserved for high-value lots — seed, malting barley, milled rice, speciality grains — or for situations where residue-free insect control is a market requirement.',
  alternativeNames: [
    'Grain chilling',
    'Refrigerated aeration',
    'Chilled aeration',
    'Grain cooling with refrigeration',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Cooling & cold storage',
  summary:
    'Chilled grain storage uses a refrigeration unit to feed conditioned air into a store’s aeration system, cooling a bulk where ambient air never can. It controls insects without chemicals — but it is not drying.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Chilled grain storage is aeration with manufactured air. A mobile or fixed refrigeration unit is connected to the aeration plenum of a bin, silo, or flat store, and delivers cooled and humidity-conditioned air into the bulk. The cooling front behaves exactly as it does in ambient aeration; what has changed is that the air no longer has to be waited for. This matters wherever the atmosphere cannot supply air cool enough to condition grain — through a warm autumn in a temperate region, and permanently across much of the tropics and subtropics.',
    },
    {
      type: 'paragraph',
      text: 'The reason to spend energy on this is that temperature, not chemistry, is the most general control over stored-grain insects. Insects that infest grain are ectothermic: below a certain temperature they stop developing and breeding, and a bulk held below it does not sustain an infestation regardless of what arrived in it. Chilling therefore delivers insect control with no fumigant, no insecticide, and no residue, which is why it appears in seed, malting, organic, and residue-sensitive supply chains. It is also why the method is honestly described as insect control, not as a way to store wet grain.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'A refrigeration unit feeding conditioned air into a store’s existing aeration system',
    },
    {
      label: 'Why it exists',
      value:
        'Ambient aeration fails where the atmosphere never supplies air cool enough',
    },
    {
      label: 'Conditions two things',
      value:
        'Temperature and humidity — air is dehumidified by cooling, then re-tempered',
    },
    {
      label: 'Main benefit',
      value:
        'Insect development is suppressed by temperature alone, without chemicals or residues',
    },
    {
      label: 'What it is not',
      value:
        'Not drying; a bulk stored too wet still deteriorates, only more slowly',
    },
    {
      label: 'Typically used for',
      value:
        'Seed, malting, milled rice, and other high-value or residue-sensitive lots',
    },
    {
      label: 'Main constraints',
      value: 'Capital and energy cost, and dependence on reliable power',
    },
  ],
  sections: [
    {
      id: 'why-chill',
      heading: 'Why manufacture the air',
      body: [
        {
          type: 'paragraph',
          text: 'Ambient aeration rests on an assumption that is invisible until it fails: that the atmosphere will, at some point in the storage season, offer air colder than the grain. In continental grain regions it reliably does, and cooling costs almost nothing but fan power. Across much of the world it does not. In tropical and subtropical storage the coolest night air of the year may still be warm enough for storage insects to breed in, so a fan run on the best night available circulates warm air through warm grain and achieves nothing but the illusion of management.',
        },
        {
          type: 'paragraph',
          text: 'Refrigerated aeration removes the assumption. The unit produces air at the condition wanted, so the bulk can be brought to a chosen temperature at a chosen time. This also decouples cooling from harvest timing in temperate regions: grain arriving warm from a hot harvest can be chilled immediately rather than left to wait for autumn, which matters because deterioration and insect development happen during the wait. The target temperatures involved — the level below which the relevant insects stop developing, and how it varies by species and commodity — are set by national storage guidance and entomological references, and are not stated here.',
        },
      ],
    },
    {
      id: 'humidity',
      heading: 'Why humidity control is the hard part',
      body: [
        {
          type: 'paragraph',
          text: 'Cooling air condenses water out of it. That is a straightforward consequence of refrigeration, and it means the air leaving the cooling coil is cold and, in absolute terms, dry. If that air were delivered straight into a grain bulk it would take moisture out of the grain it passed over, because grain equilibrates with the air around it. That sounds beneficial until one recognises what grain moisture is commercially: weight. Grain sold by mass, dried below the moisture the grade permits, is weight given away — and over-drying can also damage grain structurally and reduce processing quality.',
        },
        {
          type: 'paragraph',
          text: 'So a grain chilling unit does not simply refrigerate. It cools the air, dehumidifying it in the process, and then re-tempers it — typically by adding back a controlled amount of heat — so that the air arrives at the bulk at a humidity in equilibrium with the moisture the grain is meant to hold. Get this wrong in one direction and the bulk is desiccated at its inlet face; wrong in the other and moisture is deposited into the grain. This conditioning is what distinguishes a purpose-built grain chiller from a general refrigeration plant, and it is why the humidity setting matters as much as the temperature one. Both are commodity-specific and are set by the applicable national storage guidance.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Chilling is not drying',
          text: 'Refrigerated aeration lowers temperature; it does not remove the water in a wet crop. Grain must still be dried to a moisture suitable for the intended holding period. Chilling slows the deterioration of a too-wet lot — it does not prevent it.',
        },
      ],
    },
    {
      id: 'limits',
      heading: 'What it costs and where it fails',
      body: [
        {
          type: 'paragraph',
          text: 'Chilling is aeration with a large energy bill attached. Ambient aeration costs the fan; refrigerated aeration costs the fan plus the refrigeration plant, plus the capital of the unit itself, which is why the method concentrates in high-value lots — seed where germination is the product, malting barley where viability is graded, milled rice where insect damage is visible in the retail pack, and organic or residue-sensitive supply chains where chemical alternatives are foreclosed. For a bulk feed-grade commodity in a temperate region, ambient aeration achieves the same end for a fraction of the cost.',
        },
        {
          type: 'paragraph',
          text: 'The other failure is more awkward. Chilling is most valuable in hot climates, and hot climates frequently coincide with unreliable electricity supply — so the method is least dependable precisely where it is most needed. A chilled bulk also does not stay chilled on its own: in a warm climate heat flows in through the structure, warming the store from the outside inward, so runs must be repeated. Where power is uncertain and the lot is not high-value, hermetic methods — which need no power at all once sealed — are frequently the more realistic answer to the same insect problem.',
        },
      ],
    },
    {
      id: 'how-it-differs',
      heading: 'How it differs from related systems',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Versus aerated storage',
              description:
                'The same cooling front through the same ducts. Ambient aeration takes the air the weather offers; chilling manufactures it, and conditions its humidity as well as its temperature.',
            },
            {
              term: 'Versus cold storage',
              description:
                'Cold storage refrigerates a room of living perishable produce, managing respiration and chilling injury. Grain chilling conditions air and blows it through a dormant bulk; the grain is not the thing being refrigerated, the air is.',
            },
            {
              term: 'Versus grain drying',
              description:
                'A dryer removes water. A chiller removes heat. Chilling a wet lot does not make it safe to store — it slows what is already happening.',
            },
            {
              term: 'Versus hermetic storage',
              description:
                'Both control insects without chemicals, and both are used in warm climates. Hermetic storage seals the bulk and needs no power; chilling moves conditioned air through it and needs continuous power. Hermetic methods are the usual answer where supply is unreliable.',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'barley' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'aerated-storage' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-drying' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Grain cooling and storage in warm climates',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Temperature suppression of stored-grain insects and aeration research',
    },
    {
      sourceId: 'irri',
      citedFor: 'Cool storage of rice and paddy in tropical systems',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Temperature thresholds for stored-product insect development',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Used wherever ambient aeration is insufficient — notably tropical and subtropical storage, and warm-autumn temperate storage. Target temperature and humidity are commodity-specific and set by national storage guidance.',
  limitations: [
    'This entry states no target temperature, air humidity, safe moisture, or run duration: all are commodity-, climate-, and pest-specific and are set by the applicable national storage guidance and entomological references.',
    'Chilling does not dry grain. Grain must still be dried to a moisture suitable for the intended holding period; chilling only slows the deterioration of a lot stored too wet.',
    'The method depends on capital equipment and continuous power, and is often impractical in exactly the settings where the climate makes it most useful.',
    'Insect species differ in the temperature at which development stops, and effectiveness against a particular pest in a particular commodity cannot be assumed from this entry.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Chilled Grain Storage: Refrigerated Aeration',
    description:
      'How grain chilling cools bulks where ambient air cannot: refrigerated aeration, why humidity conditioning matters, chemical-free insect control, and its limits.',
    keywords: [
      'chilled grain storage',
      'grain chilling',
      'refrigerated aeration',
      'stored grain insect control',
      'tropical grain storage',
    ],
  },
  structuredData: { article: true },
};
