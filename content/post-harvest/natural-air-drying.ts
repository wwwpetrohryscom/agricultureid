import type { PostHarvestContent } from '@/types/content';

export const naturalAirDrying: PostHarvestContent = {
  id: 'post-harvest-natural-air-drying',
  slug: 'natural-air-drying',
  contentType: 'post-harvest',
  title: 'Natural-Air and Low-Temperature Drying',
  postHarvestClass: 'drying',
  processStage: 'conditioning',
  alternativeNames: [
    'Natural air drying',
    'Near-ambient drying',
    'Low-temperature drying',
    'In-store drying',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Drying',
  summary:
    'Natural-air drying blows unheated or slightly warmed air through grain resting in a bin or floor store. It is gentle and cheap to run, but the air does the work at its own pace, and the race is between the drying front and the grain waiting above it.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Natural-air drying — also called near-ambient or low-temperature drying — uses a fan to push outside air, unheated or with only slight supplementary heat, through a resting bed of grain. There is no drying chamber and no throughput: the grain is already where it will be stored, and it dries in place over days or weeks. Where a heated-air dryer imposes drying on the grain, natural-air drying arranges conditions and waits.',
    },
    {
      type: 'paragraph',
      text: "What makes it work is equilibrium. Air of a given temperature and humidity will bring grain to a corresponding moisture and no further — the equilibrium moisture content. Ambient air in a suitable climate is, much of the time, already dry enough to take grain to a storable moisture; the fan simply delivers enough of it. Slight heating is used not to cook water out but to lower the air's relative humidity, which lowers the moisture the grain will settle at. This makes the method's strengths and its limits the same fact: it cannot dry grain below what the air will support, however long it runs.",
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'Unheated or slightly warmed air blown through grain resting in store',
    },
    {
      label: 'What sets the endpoint',
      value:
        'The equilibrium moisture content of the air, not the running time',
    },
    {
      label: 'Why slight heat is added',
      value:
        "To lower the air's relative humidity, not to force water out with heat",
    },
    {
      label: 'Main advantage',
      value:
        'Gentle on the grain, low running cost, no separate dryer or handling step',
    },
    {
      label: 'Main risk',
      value:
        'The top of the bulk spoils while it waits for the drying front to arrive',
    },
    {
      label: 'What governs success',
      value:
        'Airflow per unit of grain, bed depth, intake moisture, and the weather',
    },
    {
      label: 'Suits',
      value:
        'Cooler, drier harvest climates; grain not far above storable moisture',
    },
  ],
  sections: [
    {
      id: 'the-front',
      heading: 'The drying front and the race above it',
      body: [
        {
          type: 'paragraph',
          text: 'Air entering the base of a bulk meets the wettest grain first and picks up water until it is close to saturation. Having done so, it can take no more, and it passes through the rest of the bulk doing very little except keeping it cool. The result is a drying zone — a front — that starts at the air inlet and moves slowly upward. Below it the grain is dry; above it the grain is essentially as wet as it went in, and waiting.',
        },
        {
          type: 'paragraph',
          text: 'This produces the defining hazard of the method. Drying is not gradual and even across the bulk; it is complete at the bottom and absent at the top. The wet grain above the front is not in stasis: it is respiring, and moulds are growing in it at whatever rate its moisture and temperature allow. Natural-air drying succeeds when the front reaches the top of the bulk before the top of the bulk spoils, and fails when it does not — a failure that appears as a crusted, heating, mouldy top layer over perfectly good grain.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'The top of the bulk is on a clock',
          text: 'Grain above the drying front is storing at its intake moisture, not its target moisture. How long it can safely wait depends on that moisture and its temperature, and it is shorter for wetter and warmer grain. Where the front cannot arrive in time, natural air alone is the wrong tool.',
        },
      ],
    },
    {
      id: 'what-governs-it',
      heading: 'What actually decides the outcome',
      body: [
        {
          type: 'definitionList',
          items: [
            {
              term: 'Airflow per unit of grain',
              description:
                'The single most important design variable. It sets how fast the front moves, and therefore whether the top survives. Under-fanning a bulk is the most common and most expensive error, because it is invisible until the top spoils.',
            },
            {
              term: 'Bed depth',
              description:
                'Deeper beds resist airflow disproportionately and give the front further to travel. A fan adequate for a shallow bed is not adequate for a deep one, and filling a bin higher than the fan can serve converts a working system into a failing one.',
            },
            {
              term: 'Intake moisture',
              description:
                'Wetter grain means more water to remove, a slower front, and a shorter safe wait for the top. The method has a ceiling of intake moisture above which it cannot be made to work by patience.',
            },
            {
              term: 'Weather during the drying period',
              description:
                'The air is the drying agent, so a humid spell stops progress entirely and a wet one can run the front backwards, re-wetting grain already dried. This is the risk heated-air drying exists to eliminate.',
            },
            {
              term: 'Uniform airflow distribution',
              description:
                'Fines and broken grain concentrate where the bulk is filled and choke airflow locally, sending air around the resistant region rather than through it. The unaerated pocket that results is where spoilage starts.',
            },
          ],
        },
      ],
    },
    {
      id: 'the-honest-trade',
      heading: 'Where it belongs, and where it does not',
      body: [
        {
          type: 'paragraph',
          text: 'Natural-air drying is not a cheaper version of heated-air drying; it is a different bargain. It costs little to run, needs no separate machine, does not handle the grain twice, and cannot heat-damage the crop — which makes it attractive for seed, where germination must survive, and for any operation where the alternative capital is unaffordable. In return it demands airflow, time, bin capacity standing idle while grain dries in it, and a climate that cooperates.',
        },
        {
          type: 'paragraph',
          text: 'It fails predictably in three situations: grain arriving far above storable moisture, harvest climates that are reliably humid, and bulks that are deeper than the fan can serve. Many operations therefore combine methods — a heated dryer to take the wettest grain down to a moisture that natural air can finish, which uses the expensive machine only for the water that is expensive to remove. This partial-drying approach is common precisely because it lets each method do the part it is good at.',
        },
      ],
    },
    {
      id: 'aeration-is-not-drying',
      heading: 'Aeration is not drying',
      body: [
        {
          type: 'paragraph',
          text: 'The same fans and ducts are used for aeration, and the two are routinely confused. Aeration moves a small volume of air through stored grain to even out and lower its temperature — controlling moisture migration, slowing insects, and preventing hot spots. It is not intended to remove significant water, and its airflow is a fraction of what drying requires. Running an aeration fan and expecting a bulk to dry is a well-known way to arrive at a spoiled top layer.',
        },
        {
          type: 'paragraph',
          text: 'The distinction matters commercially too: grain that is cool is not thereby dry, and grain that is dry is not thereby stable if it is warm. Both properties have to be achieved, and natural-air systems are asked to do the first continuously and the second only at the start.',
        },
      ],
    },
  ],
  applicableCommodityClasses: ['cereal-grain', 'oilseed', 'pulse'],
  applicableCommodities: [
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'commodity', slug: 'barley-grain' },
    { type: 'commodity', slug: 'maize-grain' },
    { type: 'commodity', slug: 'oat-grain' },
    { type: 'commodity', slug: 'dry-peas' },
  ],
  equipment: [
    { type: 'machinery', slug: 'grain-dryer' },
    { type: 'machinery', slug: 'grain-auger' },
  ],
  measurableInputs: [
    'Airflow delivered per unit of grain',
    'Ambient air temperature and relative humidity',
    'Bed depth and bulk mass',
    'Grain moisture at filling (meter)',
    'Fan running hours and electricity used',
  ],
  measurableOutputs: [
    'Moisture profile from the base to the top of the bulk',
    'Position and progress of the drying front over time',
    'Grain temperature at depth, as an early warning of spoilage',
    'Time taken to bring the whole bulk to a storable moisture',
    'Germination retained, where the lot is seed',
  ],
  qualityEffects: [
    'Dries without heat damage, preserving germination and processing quality',
    'Leaves grain cool, which itself slows insects and moulds',
    'Risks spoilage, heating, and crusting in the layer above the drying front',
    'Cannot dry below the moisture the ambient air supports, however long the fan runs',
    'Uneven airflow through fines leaves unaerated pockets where deterioration begins',
  ],
  environmentalContext:
    'This method is a direct function of climate: it works where harvest-season air is reliably cool and dry enough to support a storable equilibrium moisture, and does not work where it is not. It is markedly less energy-intensive than heated-air drying, since a fan replaces a burner, but the electricity for adequate airflow over a long period is not trivial and under-running the fan to save it is a false economy.',
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'oats' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'grain-drying' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  sourceReferences: [
    {
      sourceId: 'ahdb',
      citedFor:
        'Near-ambient drying, airflow, and grain store management guidance',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Natural-air and low-temperature grain drying research',
    },
    {
      sourceId: 'fao',
      citedFor: 'Ambient-air drying and equilibrium moisture in grain storage',
    },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Natural-air drying and aeration systems context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global but climate-bound. Practical where harvest-season air is cool and dry enough to support a storable equilibrium moisture; unreliable or unusable in persistently humid harvest climates.',
  limitations: [
    'No airflow rate, bed depth, moisture ceiling, or drying time is given here. All depend on commodity, climate, store design, and intake condition, and are set by national guidance and equipment specification.',
    'The safe waiting time for grain above the drying front is moisture- and temperature-dependent and is not stated here; where it is exceeded, the top of the bulk spoils regardless of how well the base dried.',
    'Success is weather-dependent in a way heated-air drying is not: a humid or wet period stops progress and can re-wet grain already dried.',
    'Aeration and drying use similar equipment but are different operations with different airflow requirements; aeration will not dry a bulk.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Natural-Air Drying: The Front, the Fan, the Weather',
    description:
      'How near-ambient grain drying works: equilibrium moisture sets the endpoint, the drying front races the top of the bulk, and airflow decides which one wins.',
    keywords: [
      'natural air drying',
      'near-ambient drying',
      'low temperature drying',
      'drying front',
      'in-store drying',
    ],
  },
  structuredData: { article: true },
};
