// Builds the wave-1 image manifest (concrete entities only) for the Commons
// pipeline. Abstract topics (most nutrients, soil properties, climate metrics,
// abstract systems) are intentionally omitted — they use original SVG figures.
import { writeFileSync } from 'node:fs';

const E = []; // entries
const add = (key, query, localName, alt) =>
  E.push({ key, query, localName, alt });

// Crops (concrete photos)
const crops = {
  wheat: ['ripe wheat field', 'A field of ripening wheat'],
  maize: ['maize corn field crop', 'A field of maize (corn)'],
  rice: ['rice paddy field', 'A flooded rice paddy field'],
  soybean: ['soybean field crop', 'A soybean field'],
  potato: ['potato plants field', 'A field of potato plants'],
  tomato: ['tomato plant fruit', 'Ripe tomatoes on the plant'],
  sunflower: ['sunflower field', 'A field of sunflowers'],
  barley: ['barley field crop', 'A field of ripening barley'],
  onion: ['onion bulb crop field', 'Onion plants in a field'],
  carrot: ['carrot roots harvest', 'Freshly harvested carrots'],
  cabbage: ['cabbage field crop', 'A field of cabbages'],
  lettuce: ['lettuce crop field', 'Lettuce growing in a field'],
  cucumber: ['cucumber plant fruit', 'Cucumbers growing on the vine'],
  'sweet-pepper': [
    'bell pepper plant capsicum',
    'Sweet (bell) peppers on the plant',
  ],
  spinach: ['spinach leaves crop', 'Spinach leaves growing'],
  garlic: ['garlic bulbs harvest', 'Harvested garlic bulbs'],
  'common-bean': [
    'common bean Phaseolus plant pods',
    'Common bean plants with pods',
  ],
  pea: ['pea plant pods field', 'Pea pods on the plant'],
  lentil: ['lentil crop field Lens culinaris', 'A lentil crop'],
  chickpea: ['chickpea plant Cicer arietinum', 'Chickpea plants'],
  groundnut: ['peanut groundnut plant Arachis', 'A groundnut (peanut) crop'],
  apple: ['apple orchard fruit tree', 'Apples on a tree in an orchard'],
  grape: ['grape vineyard bunches', 'Bunches of grapes in a vineyard'],
  banana: ['banana plant fruit plantation', 'Bananas growing on a plant'],
  orange: ['orange citrus fruit tree', 'Oranges on a citrus tree'],
  mango: ['mango fruit tree', 'Mangoes on a tree'],
  strawberry: [
    'strawberry plant fruit field',
    'Strawberries growing on plants',
  ],
  cotton: ['cotton plant boll field', 'A cotton field with open bolls'],
  alfalfa: ['alfalfa lucerne field crop', 'An alfalfa (lucerne) field'],
  sugarcane: ['sugarcane field crop', 'A field of sugarcane'],
  sorghum: ['sorghum crop field', 'A field of sorghum'],
  'oilseed-rape': [
    'oilseed rape canola field flowering',
    'A flowering oilseed rape (canola) field',
  ],
  'sugar-beet': ['sugar beet crop field', 'A sugar beet crop'],
};
for (const [slug, [q, alt]] of Object.entries(crops))
  add(`crop:${slug}`, q, slug, alt);

// Soils
const soils = {
  'clay-soil': ['clay soil texture', 'Clay soil'],
  'sandy-soil': ['sandy soil texture', 'Sandy soil'],
  'loam-soil': ['loam soil texture hands', 'Loam soil'],
  'silt-soil': ['silt soil texture', 'Silt soil'],
  'peat-soil': ['peat soil bog', 'Dark peat soil'],
};
for (const [slug, [q, alt]] of Object.entries(soils))
  add(`soil:${slug}`, q, slug, alt);

// Diseases
const diseases = {
  'powdery-mildew': ['powdery mildew leaf disease', 'Powdery mildew on a leaf'],
  'late-blight': [
    'late blight potato Phytophthora leaf',
    'Late blight lesions on a leaf',
  ],
  'fusarium-wilt': [
    'fusarium wilt plant disease',
    'A plant affected by fusarium wilt',
  ],
  'root-rot': ['root rot plant disease roots', 'Roots affected by rot'],
  'wheat-leaf-rust': [
    'wheat leaf rust Puccinia',
    'Leaf rust pustules on wheat',
  ],
  'wheat-stripe-rust': [
    'wheat stripe rust yellow rust',
    'Stripe rust on wheat leaves',
  ],
  'downy-mildew': ['downy mildew leaf disease', 'Downy mildew on a leaf'],
  'gray-mold': ['botrytis grey mould fruit', 'Grey mould (Botrytis) on fruit'],
  anthracnose: ['anthracnose plant disease lesion', 'Anthracnose lesions'],
  'bacterial-leaf-spot': [
    'bacterial leaf spot plant disease',
    'Bacterial leaf spots',
  ],
  'tobacco-mosaic-virus': [
    'tobacco mosaic virus leaf symptoms',
    'Mosaic virus symptoms on a leaf',
  ],
  'damping-off': [
    'damping off seedling disease',
    'Seedlings affected by damping-off',
  ],
  'rice-blast': [
    'rice blast Magnaporthe leaf lesion',
    'Rice blast lesions on a leaf',
  ],
  'apple-scab': ['apple scab Venturia leaf fruit', 'Apple scab on fruit'],
};
for (const [slug, [q, alt]] of Object.entries(diseases))
  add(`plant-disease:${slug}`, q, slug, alt);

// Pests
const pests = {
  aphids: ['aphids colony plant', 'A colony of aphids on a plant'],
  thrips: ['thrips insect Thysanoptera', 'A thrips insect'],
  whiteflies: [
    'whitefly insect Aleyrodidae leaf',
    'Whiteflies on the underside of a leaf',
  ],
  'colorado-potato-beetle': [
    'Colorado potato beetle Leptinotarsa',
    'A Colorado potato beetle',
  ],
  'spider-mites': [
    'spider mite Tetranychus webbing leaf',
    'Spider mites and webbing on a leaf',
  ],
  'fall-armyworm': [
    'fall armyworm Spodoptera frugiperda larva',
    'A fall armyworm caterpillar',
  ],
  'european-corn-borer': [
    'European corn borer Ostrinia',
    'A European corn borer',
  ],
  wireworms: ['wireworm click beetle larva soil', 'A wireworm larva'],
  cutworms: ['cutworm caterpillar soil', 'A cutworm caterpillar'],
  'desert-locust': ['desert locust Schistocerca swarm', 'A desert locust'],
  'codling-moth': ['codling moth Cydia pomonella apple', 'A codling moth'],
  'leaf-miners': [
    'leaf miner damage mine leaf',
    'Leaf miner tunnels in a leaf',
  ],
  'root-knot-nematode': [
    'root knot nematode galls roots Meloidogyne',
    'Root-knot nematode galls on roots',
  ],
  slugs: ['slug garden pest plant', 'A slug on a plant'],
};
for (const [slug, [q, alt]] of Object.entries(pests))
  add(`pest:${slug}`, q, slug, alt);

// Livestock
const livestock = {
  cattle: ['dairy cattle cows pasture', 'Cattle grazing in a pasture'],
  sheep: ['sheep flock pasture', 'A flock of sheep'],
  goats: ['goats farm pasture', 'Goats on a farm'],
  pigs: ['pigs farm domestic', 'Domestic pigs'],
  chickens: ['chickens hens poultry farm', 'Chickens on a farm'],
  horses: ['horse farm pasture', 'A horse in a pasture'],
  'honey-bees': ['honey bee hive apiary', 'Honey bees on a frame'],
  'farmed-fish': ['aquaculture fish farm cages', 'A fish farm (aquaculture)'],
  turkeys: ['turkey poultry farm domestic', 'Domestic turkeys'],
};
for (const [slug, [q, alt]] of Object.entries(livestock))
  add(`livestock:${slug}`, q, slug, alt);

// Machinery
const machinery = {
  tractor: ['farm tractor field', 'A tractor working in a field'],
  'combine-harvester': [
    'combine harvester wheat field',
    'A combine harvester at work',
  ],
  'seed-drill': ['seed drill planter tractor', 'A seed drill'],
  sprayer: ['agricultural sprayer boom field', 'A boom sprayer in a field'],
  'moldboard-plough': [
    'moldboard plough ploughing field',
    'A moldboard plough turning soil',
  ],
  'disc-harrow': ['disc harrow field cultivation', 'A disc harrow'],
  baler: ['round baler hay bales field', 'A baler making bales'],
  'rotary-mower': [
    'agricultural mower cutting grass field',
    'A mower cutting a field',
  ],
  'agricultural-drone': [
    'agricultural drone spraying field',
    'An agricultural drone over a field',
  ],
};
for (const [slug, [q, alt]] of Object.entries(machinery))
  add(`machinery:${slug}`, q, slug, alt);

// Fertilizers (concrete only)
const fertilizers = {
  urea: ['urea fertilizer granules', 'Urea fertilizer granules'],
  compost: ['compost heap organic matter', 'A compost heap'],
  'farmyard-manure': ['farmyard manure heap', 'A heap of farmyard manure'],
  vermicompost: ['vermicompost worms castings', 'Vermicompost'],
  'npk-compound-fertilizer': [
    'compound fertilizer granules NPK',
    'Compound fertilizer granules',
  ],
};
for (const [slug, [q, alt]] of Object.entries(fertilizers))
  add(`fertilizer:${slug}`, q, slug, alt);

// Irrigation (concrete)
const irrigation = {
  'drip-irrigation': [
    'drip irrigation emitter crop',
    'A drip irrigation line watering plants',
  ],
  'sprinkler-irrigation': [
    'sprinkler irrigation field water',
    'Sprinkler irrigation in a field',
  ],
  'center-pivot-irrigation': [
    'center pivot irrigation aerial field',
    'A center-pivot irrigation system',
  ],
  'furrow-irrigation': [
    'furrow irrigation field water',
    'Furrow irrigation between crop rows',
  ],
  'surface-irrigation': [
    'flood surface irrigation field',
    'Surface (flood) irrigation of a field',
  ],
};
for (const [slug, [q, alt]] of Object.entries(irrigation))
  add(`irrigation-method:${slug}`, q, slug, alt);

// Farming systems (concrete)
const systems = {
  'organic-farming': [
    'organic farm vegetables field',
    'An organic vegetable farm',
  ],
  hydroponics: [
    'hydroponics lettuce system greenhouse',
    'Plants grown in a hydroponic system',
  ],
  'greenhouse-farming': [
    'greenhouse crop production tomatoes',
    'Crops growing in a greenhouse',
  ],
  'vertical-farming': [
    'vertical farming indoor lettuce',
    'An indoor vertical farm',
  ],
  agroforestry: [
    'agroforestry trees crops field',
    'Trees integrated with crops (agroforestry)',
  ],
};
for (const [slug, [q, alt]] of Object.entries(systems))
  add(`farming-system:${slug}`, q, slug, alt);

// Climate (concrete)
const climate = {
  drought: ['drought cracked dry soil field', 'Cracked, drought-affected soil'],
  frost: ['frost crop plant leaves ice', 'Frost on a crop'],
};
for (const [slug, [q, alt]] of Object.entries(climate))
  add(`climate:${slug}`, q, slug, alt);

// Soil topics (a couple concrete)
const soilTopics = {
  'soil-testing': [
    'soil sampling testing hand auger field',
    'Soil sampling for testing',
  ],
  'soil-organic-matter': [
    'dark soil organic matter humus hands',
    'Dark soil rich in organic matter',
  ],
};
for (const [slug, [q, alt]] of Object.entries(soilTopics))
  add(`soil-topic:${slug}`, q, slug, alt);

writeFileSync('/tmp/wave1_img_manifest.json', JSON.stringify(E, null, 2));
console.log(
  `Wrote ${E.length} image manifest entries to /tmp/wave1_img_manifest.json`,
);
