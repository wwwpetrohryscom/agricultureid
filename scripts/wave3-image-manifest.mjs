// Wave-3 image manifest (concrete entities: crops, livestock, pests).
import { writeFileSync } from 'node:fs';
const E = [];
const add = (type, slug, query, alt) =>
  E.push({ key: `${type}:${slug}`, query, localName: slug, alt });

const crops = {
  watermelon: ['watermelon plant fruit field', 'Watermelons in a field'],
  melon: ['melon cantaloupe plant fruit', 'A melon on the plant'],
  pineapple: ['pineapple plant fruit field', 'A pineapple plant'],
  papaya: ['papaya tree fruit', 'Papayas on a tree'],
  avocado: ['avocado tree fruit orchard', 'Avocados on a tree'],
  fig: ['fig tree fruit Ficus', 'Figs on a tree'],
  pomegranate: ['pomegranate fruit tree', 'Pomegranates on a tree'],
  cherry: ['cherry tree fruit orchard', 'Cherries on a tree'],
  peach: ['peach tree fruit orchard', 'Peaches on a tree'],
  plum: ['plum tree fruit orchard', 'Plums on a tree'],
  pear: ['pear tree fruit orchard', 'Pears on a tree'],
  apricot: ['apricot tree fruit', 'Apricots on a tree'],
  'date-palm': [
    'date palm tree fruit Phoenix dactylifera',
    'A date palm with fruit',
  ],
  lemon: ['lemon citrus tree fruit', 'Lemons on a tree'],
  lime: ['lime citrus tree fruit', 'Limes on a tree'],
  grapefruit: ['grapefruit citrus tree fruit', 'Grapefruit on a tree'],
  guava: ['guava tree fruit Psidium', 'Guavas on a tree'],
  kiwifruit: ['kiwifruit vine fruit Actinidia', 'Kiwifruit on the vine'],
  lychee: ['lychee tree fruit Litchi', 'Lychees on a tree'],
  persimmon: ['persimmon tree fruit Diospyros', 'Persimmons on a tree'],
  almond: ['almond tree orchard nuts', 'An almond orchard'],
  walnut: ['walnut tree nuts orchard', 'Walnuts on a tree'],
  hazelnut: ['hazelnut tree nuts Corylus', 'Hazelnuts on a tree'],
  cashew: ['cashew tree nut apple Anacardium', 'Cashew fruit on a tree'],
  pistachio: ['pistachio tree nuts orchard', 'Pistachios on a tree'],
  pecan: ['pecan tree nuts orchard', 'Pecans on a tree'],
  chestnut: ['chestnut tree nuts Castanea', 'Chestnuts on a tree'],
  macadamia: ['macadamia tree nuts orchard', 'Macadamia nuts on a tree'],
  basil: ['basil herb plant Ocimum', 'A basil plant'],
  mint: ['mint herb plant Mentha', 'A mint plant'],
  coriander: ['coriander cilantro herb plant', 'A coriander plant'],
  cumin: ['cumin plant seeds Cuminum', 'A cumin crop'],
  fennel: ['fennel plant bulb Foeniculum', 'A fennel plant'],
  dill: ['dill herb plant Anethum', 'A dill plant'],
  parsley: ['parsley herb plant Petroselinum', 'A parsley plant'],
  oregano: ['oregano herb plant Origanum', 'An oregano plant'],
  thyme: ['thyme herb plant Thymus', 'A thyme plant'],
  rosemary: ['rosemary herb plant Salvia rosmarinus', 'A rosemary plant'],
  sage: ['sage herb plant Salvia officinalis', 'A sage plant'],
  lavender: ['lavender field plant Lavandula', 'A lavender field'],
  chamomile: ['chamomile flower plant Matricaria', 'Chamomile flowers'],
  cardamom: ['cardamom plant pods Elettaria', 'A cardamom plant'],
  clove: ['clove tree buds Syzygium aromaticum', 'Clove buds'],
  nutmeg: ['nutmeg tree fruit Myristica', 'Nutmeg fruit on a tree'],
  vanilla: ['vanilla orchid pods Vanilla planifolia', 'Vanilla pods'],
  saffron: ['saffron crocus flower stigma', 'Saffron crocus flowers'],
  mustard: [
    'mustard plant flowering field Brassica',
    'A flowering mustard field',
  ],
  sweetcorn: ['sweet corn cob plant field', 'Sweet corn on the plant'],
  watercress: [
    'watercress plant water crop Nasturtium',
    'Watercress growing in water',
  ],
  artichoke: ['globe artichoke plant Cynara', 'A globe artichoke plant'],
};
for (const [s, [q, a]] of Object.entries(crops)) add('crop', s, q, a);

const livestock = {
  ostrich: ['ostrich farm bird Struthio', 'Farmed ostriches'],
  quail: ['quail bird poultry farm', 'Farmed quail'],
  'guinea-fowl': ['guinea fowl bird farm', 'Guinea fowl'],
  bison: ['american bison herd Bison bison', 'Bison'],
  yak: ['domestic yak Bos grunniens', 'A domestic yak'],
  mule: ['mule farm animal', 'A mule'],
  pheasant: ['pheasant bird farm Phasianus', 'A pheasant'],
};
for (const [s, [q, a]] of Object.entries(livestock)) add('livestock', s, q, a);

const pests = {
  leafhoppers: ['leafhopper insect Cicadellidae', 'A leafhopper'],
  psyllids: ['psyllid jumping plant louse insect', 'A psyllid'],
  sawflies: ['sawfly larva pest plant', 'A sawfly larva'],
  'leaf-rollers': [
    'leafroller caterpillar rolled leaf',
    'A leafroller caterpillar',
  ],
  snails: ['garden snail pest plant Helix', 'A snail on a plant'],
  'mole-crickets': ['mole cricket Gryllotalpa soil insect', 'A mole cricket'],
  'root-aphids': ['root aphid soil pest', 'Root aphids'],
};
for (const [s, [q, a]] of Object.entries(pests)) add('pest', s, q, a);

writeFileSync('/tmp/wave3_img_manifest.json', JSON.stringify(E, null, 2));
console.log(`Wrote ${E.length} wave-3 image manifest entries`);
