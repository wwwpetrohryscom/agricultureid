// Wave-2 image manifest (concrete entities). Abstract topics use SVG figures.
import { writeFileSync } from 'node:fs';
const E = [];
const add = (type, slug, query, alt) =>
  E.push({ key: `${type}:${slug}`, query, localName: slug, alt });

const crops = {
  oats: ['oat field crop Avena', 'A field of oats'],
  rye: ['rye field crop Secale cereale', 'A field of rye'],
  millet: ['pearl millet crop field', 'A millet crop'],
  triticale: ['triticale cereal field', 'A triticale crop'],
  quinoa: ['quinoa plant crop field', 'Quinoa plants'],
  buckwheat: ['buckwheat crop field flowering', 'A flowering buckwheat field'],
  blueberry: ['blueberry bush fruit', 'Blueberries on the bush'],
  raspberry: ['raspberry fruit plant', 'Raspberries on the plant'],
  blackberry: ['blackberry fruit bramble', 'Blackberries on the bramble'],
  cranberry: ['cranberry bog harvest fruit', 'Cranberries'],
  broccoli: ['broccoli plant head field', 'A broccoli head on the plant'],
  cauliflower: ['cauliflower plant head field', 'A cauliflower head'],
  eggplant: ['eggplant aubergine fruit plant', 'Eggplants on the plant'],
  zucchini: ['zucchini courgette plant fruit', 'A zucchini on the plant'],
  'sweet-potato': ['sweet potato plant tuber Ipomoea', 'Sweet potato tubers'],
  okra: ['okra plant pods Abelmoschus', 'Okra pods on the plant'],
  asparagus: ['asparagus spears field crop', 'Asparagus spears'],
  celery: ['celery plant crop field', 'Celery growing in a field'],
  pumpkin: ['pumpkin field crop Cucurbita', 'Pumpkins in a field'],
  radish: ['radish root vegetable harvest', 'Harvested radishes'],
  beetroot: ['beetroot beet root vegetable', 'Beetroot'],
  leek: ['leek plant crop Allium', 'Leeks growing in a field'],
  kale: ['kale plant leaves crop', 'Kale plants'],
  cassava: ['cassava plant root manioc', 'A cassava crop'],
  yam: ['yam tuber Dioscorea crop', 'Yam tubers'],
  sesame: ['sesame plant crop Sesamum', 'A sesame crop'],
  safflower: ['safflower flower crop Carthamus', 'Safflower flowers'],
  olive: ['olive tree orchard fruit', 'Olives on a tree'],
  coconut: ['coconut palm tree plantation', 'Coconut palms'],
  'oil-palm': ['oil palm plantation fruit Elaeis', 'An oil palm plantation'],
  jute: ['jute plant crop Corchorus', 'A jute crop'],
  flax: ['flax plant flowering field Linum', 'A flowering flax field'],
  hemp: [
    'industrial hemp plant crop Cannabis sativa',
    'An industrial hemp crop',
  ],
  coffee: ['coffee plant cherries plantation', 'Coffee cherries on the plant'],
  tea: ['tea plantation Camellia sinensis field', 'A tea plantation'],
  cocoa: ['cocoa pod tree Theobroma', 'Cocoa pods on a tree'],
  tobacco: ['tobacco plant crop field Nicotiana', 'A tobacco crop'],
  rubber: ['rubber tree tapping plantation Hevea', 'A rubber plantation'],
  'black-pepper': [
    'black pepper vine Piper nigrum',
    'Black pepper on the vine',
  ],
  'chili-pepper': [
    'chili pepper plant fruit Capsicum',
    'Chili peppers on the plant',
  ],
  ginger: ['ginger plant rhizome Zingiber', 'Ginger rhizomes'],
  turmeric: ['turmeric plant rhizome Curcuma', 'Turmeric rhizomes'],
  cinnamon: ['cinnamon tree bark Cinnamomum', 'Cinnamon bark'],
  'aloe-vera': ['aloe vera plant', 'An aloe vera plant'],
};
for (const [s, [q, a]] of Object.entries(crops)) add('crop', s, q, a);

const soils = {
  'chalky-soil': ['chalky soil calcareous', 'Chalky soil'],
  'saline-soil': ['saline soil salt affected land', 'Salt-affected soil'],
  'alluvial-soil': ['alluvial soil floodplain', 'Alluvial soil'],
  'volcanic-soil': ['volcanic soil andosol', 'Volcanic soil'],
  'laterite-soil': ['laterite soil red tropical', 'Laterite soil'],
  vertisol: ['vertisol black cotton soil cracking', 'A cracking vertisol'],
  chernozem: ['chernozem black soil', 'Chernozem (black soil)'],
  podzol: ['podzol soil profile', 'A podzol soil profile'],
};
for (const [s, [q, a]] of Object.entries(soils)) add('soil', s, q, a);

const livestock = {
  ducks: ['domestic ducks farm poultry', 'Domestic ducks'],
  geese: ['domestic geese farm', 'Domestic geese'],
  rabbits: ['domestic rabbit farm', 'A domestic rabbit'],
  'water-buffalo': ['water buffalo farm Bubalus', 'Water buffalo'],
  camels: ['dromedary camel livestock', 'A camel'],
  donkeys: ['donkey farm Equus asinus', 'A donkey'],
  alpacas: ['alpaca farm livestock', 'Alpacas'],
  silkworms: ['silkworm Bombyx mori cocoon', 'Silkworms'],
};
for (const [s, [q, a]] of Object.entries(livestock)) add('livestock', s, q, a);

const machinery = {
  planter: ['precision planter tractor field', 'A precision planter'],
  cultivator: ['field cultivator tractor', 'A field cultivator'],
  subsoiler: ['subsoiler tractor tillage', 'A subsoiler'],
  'fertilizer-spreader': [
    'fertilizer spreader tractor field',
    'A fertilizer spreader',
  ],
  'forage-harvester': ['forage harvester silage field', 'A forage harvester'],
  'grain-dryer': ['grain dryer silo facility', 'A grain dryer'],
  thresher: ['threshing machine grain', 'A thresher'],
  transplanter: ['rice transplanter machine field', 'A rice transplanter'],
};
for (const [s, [q, a]] of Object.entries(machinery)) add('machinery', s, q, a);

const pests = {
  'white-grubs': ['white grub beetle larva soil', 'A white grub'],
  'stem-borers': ['stem borer larva maize', 'A stem borer larva'],
  'pod-borer': ['pod borer Helicoverpa larva', 'A pod borer caterpillar'],
  'cotton-bollworm': [
    'cotton bollworm Helicoverpa armigera',
    'A cotton bollworm',
  ],
  'fruit-flies': ['fruit fly Tephritidae Bactrocera', 'A fruit fly'],
  mealybugs: ['mealybug plant pest Pseudococcidae', 'Mealybugs on a plant'],
  'scale-insects': ['scale insect plant pest', 'Scale insects on a stem'],
  grasshoppers: ['grasshopper crop pest', 'A grasshopper'],
  'flea-beetles': ['flea beetle leaf damage', 'A flea beetle'],
  weevils: ['weevil beetle crop pest', 'A weevil'],
  armyworms: ['armyworm caterpillar Spodoptera', 'An armyworm caterpillar'],
  'stink-bugs': ['stink bug shield bug Pentatomidae', 'A stink bug'],
};
for (const [s, [q, a]] of Object.entries(pests)) add('pest', s, q, a);

const diseases = {
  'stem-rust': ['wheat stem rust Puccinia graminis', 'Stem rust on wheat'],
  'common-smut': ['corn smut Ustilago maydis', 'Common smut on maize'],
  ergot: ['ergot Claviceps rye grain', 'Ergot on a cereal head'],
  sclerotinia: ['sclerotinia white mold stem', 'Sclerotinia white mould'],
  'fire-blight': ['fire blight Erwinia apple pear', 'Fire blight on a branch'],
  'citrus-canker': ['citrus canker leaf fruit', 'Citrus canker lesions'],
  'common-scab': ['potato common scab tuber', 'Common scab on a potato'],
  'black-sigatoka': [
    'black sigatoka banana leaf',
    'Black sigatoka on a banana leaf',
  ],
  'coffee-leaf-rust': ['coffee leaf rust Hemileia', 'Coffee leaf rust'],
};
for (const [s, [q, a]] of Object.entries(diseases))
  add('plant-disease', s, q, a);

const fertilizers = {
  gypsum: ['gypsum agricultural mineral', 'Agricultural gypsum'],
  'agricultural-lime': [
    'agricultural lime spreading field',
    'Agricultural lime',
  ],
  'poultry-manure': ['poultry chicken manure heap', 'Poultry manure'],
};
for (const [s, [q, a]] of Object.entries(fertilizers))
  add('fertilizer', s, q, a);

const systems = {
  aquaponics: ['aquaponics system fish plants', 'An aquaponics system'],
  silvopasture: ['silvopasture trees livestock pasture', 'Silvopasture'],
  'contour-farming': [
    'contour farming terraces slope field',
    'Contour farming on a slope',
  ],
  'no-till-farming': [
    'no till farming crop residue field',
    'A no-till field with residue',
  ],
};
for (const [s, [q, a]] of Object.entries(systems))
  add('farming-system', s, q, a);

const climate = {
  monsoon: ['monsoon rain field agriculture', 'Monsoon rain'],
  hail: ['hail storm crop damage', 'Hail'],
};
for (const [s, [q, a]] of Object.entries(climate)) add('climate', s, q, a);

writeFileSync('/tmp/wave2_img_manifest.json', JSON.stringify(E, null, 2));
console.log(`Wrote ${E.length} wave-2 image manifest entries`);
