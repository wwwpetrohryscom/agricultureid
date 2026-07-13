import type { ComparisonSeed } from '@/types/comparison';

/**
 * Curated comparison registry (Phase 4B). Every entry is hand-selected for
 * search/user value and compares COMPATIBLE entities on meaningful dimensions.
 * This is deliberately NOT a Cartesian product of all pairs. Comparison facts
 * are resolved from the source entities at render time — never duplicated here.
 */

const crop = (s: string): { sourceId: string; citedFor?: string } => ({
  sourceId: s,
});
const CROP_SRC = [crop('fao'), crop('usda-plants')];
const CULT_SRC = [crop('usda-grin')];
const BREED_SRC = [crop('fao-dad-is')];
const FERT_SRC = [crop('ifa')];
const CTRY_SRC = [
  { sourceId: 'worldbank', citedFor: 'Indicator values (WDI)' },
];

const CROP_METHOD =
  'Descriptive dimensions (family, lifecycle, associated diseases/pests, soils) are read from each crop’s reference entry. No crop is ranked as “better”; agronomic outcomes are region- and system-specific.';
const CROP_LIMITS = [
  'Descriptive comparison only — not a yield, profitability, or suitability ranking.',
  'Associated diseases/pests and soils are typical, not exhaustive, and vary by region.',
];

export const COMPARISONS: ComparisonSeed[] = [
  /* ------------------------------- Crops -------------------------------- */
  {
    slug: 'temperate-cereals',
    entityType: 'crop',
    title: 'Temperate cereals: wheat vs barley vs oats vs rye',
    comparedEntityIds: ['wheat', 'barley', 'oats', 'rye'],
    purpose:
      'Compare the main cool-season small-grain cereals by family, lifecycle, and associated pests, diseases, and soils.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'warm-season-cereals',
    entityType: 'crop',
    title: 'Warm-season cereals: maize vs sorghum vs rice vs millet',
    comparedEntityIds: ['maize', 'sorghum', 'rice', 'millet'],
    purpose:
      'Compare major warm-season and tropical cereals and their agronomic associations.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'major-oilseeds',
    entityType: 'crop',
    title: 'Oilseeds: soybean vs sunflower vs oilseed rape vs groundnut',
    comparedEntityIds: ['soybean', 'sunflower', 'oilseed-rape', 'groundnut'],
    purpose:
      'Compare the leading oilseed crops by classification and agronomic context.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'grain-legumes',
    entityType: 'crop',
    title: 'Grain legumes: common bean vs chickpea vs lentil vs pea',
    comparedEntityIds: ['common-bean', 'chickpea', 'lentil', 'pea'],
    purpose: 'Compare cool- and warm-season pulse crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'root-and-tuber-staples',
    entityType: 'crop',
    title: 'Root & tuber staples: potato vs cassava vs sweet potato vs yam',
    comparedEntityIds: ['potato', 'cassava', 'sweet-potato', 'yam'],
    purpose: 'Compare the principal starchy root and tuber staples.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'pome-fruits',
    entityType: 'crop',
    title: 'Pome fruits: apple vs pear',
    comparedEntityIds: ['apple', 'pear'],
    purpose: 'Compare temperate pome fruit tree crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'stone-fruits',
    entityType: 'crop',
    title: 'Stone fruits: peach vs apricot vs plum vs cherry',
    comparedEntityIds: ['peach', 'apricot', 'plum', 'cherry'],
    purpose: 'Compare temperate Prunus stone-fruit crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'citrus-fruits',
    entityType: 'crop',
    title: 'Citrus: orange vs lemon vs lime vs grapefruit',
    comparedEntityIds: ['orange', 'lemon', 'lime', 'grapefruit'],
    purpose: 'Compare major citrus tree crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'brassica-vegetables',
    entityType: 'crop',
    title: 'Brassica vegetables: cabbage vs cauliflower vs broccoli vs kale',
    comparedEntityIds: ['cabbage', 'cauliflower', 'broccoli', 'kale'],
    purpose: 'Compare cole crops in the Brassica oleracea group.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'allium-crops',
    entityType: 'crop',
    title: 'Alliums: onion vs garlic vs leek',
    comparedEntityIds: ['onion', 'garlic', 'leek'],
    purpose: 'Compare bulb and stem alliums.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'cucurbit-crops',
    entityType: 'crop',
    title: 'Cucurbits: cucumber vs melon vs watermelon vs pumpkin',
    comparedEntityIds: ['cucumber', 'melon', 'watermelon', 'pumpkin'],
    purpose: 'Compare vine cucurbit crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'solanaceous-vegetables',
    entityType: 'crop',
    title:
      'Solanaceous vegetables: tomato vs eggplant vs sweet pepper vs chili pepper',
    comparedEntityIds: ['tomato', 'eggplant', 'sweet-pepper', 'chili-pepper'],
    purpose: 'Compare fruiting nightshade vegetables.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'tropical-beverage-crops',
    entityType: 'crop',
    title: 'Beverage crops: coffee vs cocoa vs tea',
    comparedEntityIds: ['coffee', 'cocoa', 'tea'],
    purpose: 'Compare the major tropical/subtropical beverage crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'fibre-crops',
    entityType: 'crop',
    title: 'Fibre crops: cotton vs flax vs hemp vs jute',
    comparedEntityIds: ['cotton', 'flax', 'hemp', 'jute'],
    purpose: 'Compare natural fibre crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'tree-nuts',
    entityType: 'crop',
    title: 'Tree nuts: almond vs walnut vs hazelnut vs pistachio',
    comparedEntityIds: ['almond', 'walnut', 'hazelnut', 'pistachio'],
    purpose: 'Compare temperate tree-nut crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'sugar-crops',
    entityType: 'crop',
    title: 'Sugar crops: sugarcane vs sugar beet',
    comparedEntityIds: ['sugarcane', 'sugar-beet'],
    purpose:
      'Compare the two principal sugar crops (tropical grass vs temperate root).',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'tropical-spices',
    entityType: 'crop',
    title: 'Spices: black pepper vs cinnamon vs clove vs nutmeg',
    comparedEntityIds: ['black-pepper', 'cinnamon', 'clove', 'nutmeg'],
    purpose: 'Compare major tropical spice crops.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },
  {
    slug: 'leafy-greens',
    entityType: 'crop',
    title: 'Leafy greens: lettuce vs spinach vs kale vs watercress',
    comparedEntityIds: ['lettuce', 'spinach', 'kale', 'watercress'],
    purpose: 'Compare leafy salad and cooking greens.',
    methodology: CROP_METHOD,
    limitations: CROP_LIMITS,
    sourceReferences: CROP_SRC,
  },

  /* ----------------------------- Cultivars ------------------------------ */
  {
    slug: 'historic-bread-wheats',
    entityType: 'cultivar',
    title:
      'Historic bread wheats: Marquis vs Norin 10 vs Yecora Rojo vs Chinese Spring',
    comparedEntityIds: [
      'marquis-wheat',
      'norin-10',
      'yecora-rojo',
      'chinese-spring',
    ],
    purpose:
      'Compare landmark bread-wheat cultivars by type, origin, and documented role.',
    methodology:
      'Descriptive cultivar attributes are read from each entry; no unsourced yield comparison is made.',
    limitations: [
      'Historic/reference cultivars; not current commercial recommendations.',
      'No yield comparison — trial context differs.',
    ],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'durum-wheats',
    entityType: 'cultivar',
    title: 'Durum wheats: Kronos vs Svevo',
    comparedEntityIds: ['kronos-durum', 'svevo-durum'],
    purpose: 'Compare two widely used durum wheat cultivars.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Descriptive only; adaptation is region-specific.'],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'potato-cultivars',
    entityType: 'cultivar',
    title:
      'Potato cultivars: Russet Burbank vs Maris Piper vs Yukon Gold vs King Edward vs Désirée',
    comparedEntityIds: [
      'russet-burbank',
      'maris-piper',
      'yukon-gold',
      'king-edward',
      'desiree-potato',
    ],
    purpose:
      'Compare well-known potato cultivars by type, origin, maturity, and use.',
    methodology: 'Cooking/agronomic behaviour read from each entry.',
    limitations: [
      'Cooking and agronomic behaviour is region- and season-specific.',
      'No yield or resistance ranking.',
    ],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'apple-cultivars',
    entityType: 'cultivar',
    title:
      'Apple cultivars: Golden Delicious vs Gala vs Granny Smith vs Fuji vs Honeycrisp',
    comparedEntityIds: [
      'golden-delicious',
      'gala-apple',
      'granny-smith',
      'fuji-apple',
      'honeycrisp',
    ],
    purpose:
      'Compare popular apple cultivars by origin, use, and quality traits.',
    methodology: 'Attributes read from each entry.',
    limitations: [
      'Storage/flavour/scab behaviour is region-, rootstock-, and season-specific.',
    ],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'green-revolution-rices',
    entityType: 'cultivar',
    title: 'Rice varieties: IR8 vs IR64 vs IR36 vs Koshihikari vs Nipponbare',
    comparedEntityIds: ['ir8', 'ir64', 'ir36', 'koshihikari', 'nipponbare'],
    purpose: 'Compare Green-Revolution and reference rice varieties.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Performance is environment- and management-specific.'],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'red-wine-grapes',
    entityType: 'cultivar',
    title:
      'Red wine grapes: Cabernet Sauvignon vs Merlot vs Pinot Noir vs Tempranillo',
    comparedEntityIds: [
      'cabernet-sauvignon',
      'merlot',
      'pinot-noir',
      'tempranillo',
    ],
    purpose: 'Compare major red wine grape varieties.',
    methodology: 'Attributes read from each entry.',
    limitations: [
      'Wine style depends heavily on terroir, clone, and winemaking.',
    ],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'white-wine-grapes',
    entityType: 'cultivar',
    title: 'White wine grapes: Chardonnay vs Sauvignon Blanc vs Riesling',
    comparedEntityIds: ['chardonnay', 'sauvignon-blanc', 'riesling'],
    purpose: 'Compare major white wine grape varieties.',
    methodology: 'Attributes read from each entry.',
    limitations: [
      'Wine style depends heavily on terroir, clone, and winemaking.',
    ],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'processing-tomatoes',
    entityType: 'cultivar',
    title: 'Tomato cultivars: Heinz 1706 vs San Marzano vs Roma vs Brandywine',
    comparedEntityIds: [
      'heinz-1706',
      'san-marzano',
      'roma-tomato',
      'brandywine',
    ],
    purpose: 'Compare processing and heirloom tomato cultivars/types.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Several are broad type-names; strains vary widely.'],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'malting-and-reference-barleys',
    entityType: 'cultivar',
    title: 'Barley cultivars: Morex vs Golden Promise vs Maris Otter vs Optic',
    comparedEntityIds: [
      'morex-barley',
      'golden-promise',
      'maris-otter',
      'optic-barley',
    ],
    purpose: 'Compare malting and reference barley cultivars.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Malting quality and adaptation are region-specific.'],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'reference-soybeans',
    entityType: 'cultivar',
    title: 'Soybean cultivars: Williams 82 vs Forrest vs Lee',
    comparedEntityIds: ['williams-82', 'forrest-soybean', 'lee-soybean'],
    purpose: 'Compare reference/heritage US soybean cultivars.',
    methodology:
      'Attributes read from each entry; documented resistance is source-attributed.',
    limitations: ['Public research cultivars; maturity group differs.'],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'public-maize-inbreds',
    entityType: 'cultivar',
    title: 'Maize inbred lines: B73 vs Mo17 vs W22',
    comparedEntityIds: ['b73-maize', 'mo17-maize', 'w22-maize'],
    purpose: 'Compare public maize inbred/reference lines.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Public research lines, not commercial hybrids.'],
    sourceReferences: CULT_SRC,
  },
  {
    slug: 'almond-cultivars',
    entityType: 'cultivar',
    title: 'Almond cultivars: Nonpareil vs Carmel vs Marcona',
    comparedEntityIds: ['nonpareil-almond', 'carmel-almond', 'marcona-almond'],
    purpose: 'Compare leading almond cultivars.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Kernel and tree traits vary with climate and rootstock.'],
    sourceReferences: CULT_SRC,
  },

  /* ------------------------------- Breeds ------------------------------- */
  {
    slug: 'dairy-cattle-breeds',
    entityType: 'breed',
    title:
      'Dairy cattle breeds: Holstein Friesian vs Jersey vs Guernsey vs Ayrshire vs Brown Swiss',
    comparedEntityIds: [
      'holstein-friesian',
      'jersey-cattle',
      'guernsey-cattle',
      'ayrshire-cattle',
      'brown-swiss',
    ],
    purpose:
      'Compare the principal dairy cattle breeds by origin, use, and characteristics.',
    methodology: 'Descriptive breed attributes read from each entry.',
    limitations: [
      'Breed characteristics vary with strain, management, and environment.',
      'No milk-yield numbers are compared.',
    ],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'beef-cattle-breeds',
    entityType: 'breed',
    title:
      'Beef cattle breeds: Angus vs Hereford vs Charolais vs Limousin vs Belgian Blue',
    comparedEntityIds: [
      'aberdeen-angus',
      'hereford-cattle',
      'charolais',
      'limousin',
      'belgian-blue',
    ],
    purpose: 'Compare major beef cattle breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Descriptive only; performance is system-dependent.'],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'zebu-cattle-breeds',
    entityType: 'breed',
    title: 'Zebu cattle breeds: Brahman vs Nellore vs Gir',
    comparedEntityIds: ['brahman', 'nellore', 'gir-cattle'],
    purpose: 'Compare heat-tolerant Bos indicus (zebu) cattle breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Adaptation varies by regional population.'],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'terminal-sire-sheep',
    entityType: 'breed',
    title:
      'Meat sheep breeds: Suffolk vs Poll Dorset vs Texel vs Hampshire Down',
    comparedEntityIds: [
      'suffolk-sheep',
      'poll-dorset',
      'texel',
      'hampshire-down',
    ],
    purpose: 'Compare meat/terminal-sire sheep breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Descriptive only; carcase traits are system-dependent.'],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'wool-sheep-breeds',
    entityType: 'breed',
    title: 'Wool sheep breeds: Merino vs Rambouillet vs Corriedale',
    comparedEntityIds: ['merino', 'rambouillet', 'corriedale'],
    purpose: 'Compare fine- and dual-purpose wool sheep breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Fleece characteristics vary with strain and environment.'],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'dairy-goat-breeds',
    entityType: 'breed',
    title:
      'Dairy goat breeds: Saanen vs Anglo-Nubian vs French Alpine vs Toggenburg',
    comparedEntityIds: [
      'saanen',
      'anglo-nubian',
      'french-alpine',
      'toggenburg',
    ],
    purpose: 'Compare the main dairy goat breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Descriptive only; yields are management-dependent.'],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'meat-pig-breeds',
    entityType: 'breed',
    title: 'Pig breeds: Large White vs Duroc vs Hampshire vs Pietrain',
    comparedEntityIds: ['large-white', 'duroc', 'hampshire-pig', 'pietrain'],
    purpose: 'Compare major meat pig breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: [
      'Descriptive only; carcase/growth traits are system-dependent.',
    ],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'laying-chicken-breeds',
    entityType: 'breed',
    title: 'Chicken breeds: Leghorn vs Rhode Island Red vs Australorp',
    comparedEntityIds: ['leghorn', 'rhode-island-red', 'australorp'],
    purpose: 'Compare classic laying/dual-purpose chicken breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Descriptive only; historic laying records are non-typical.'],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'draught-horse-breeds',
    entityType: 'breed',
    title: 'Draught horse breeds: Clydesdale vs Percheron vs Shire',
    comparedEntityIds: ['clydesdale', 'percheron', 'shire-horse'],
    purpose: 'Compare heavy draught horse breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Descriptive only.'],
    sourceReferences: BREED_SRC,
  },
  {
    slug: 'light-horse-breeds',
    entityType: 'breed',
    title: 'Light horse breeds: Arabian vs Thoroughbred vs Quarter Horse',
    comparedEntityIds: [
      'arabian-horse',
      'thoroughbred',
      'american-quarter-horse',
    ],
    purpose: 'Compare riding/sport light horse breeds.',
    methodology: 'Attributes read from each entry.',
    limitations: ['Descriptive only.'],
    sourceReferences: BREED_SRC,
  },

  /* ----------------------------- Fertilizers ---------------------------- */
  {
    slug: 'nitrogen-fertilizers',
    entityType: 'fertilizer',
    title:
      'Nitrogen fertilizers: urea vs ammonium nitrate vs ammonium sulfate vs CAN',
    comparedEntityIds: [
      'urea',
      'ammonium-nitrate',
      'ammonium-sulfate',
      'calcium-ammonium-nitrate',
    ],
    purpose: 'Compare common straight nitrogen fertilizers by grade and class.',
    methodology:
      'Grade/class read from each entry. No application rate or product recommendation is given.',
    limitations: [
      'Educational comparison — not a fertilizer or application-rate recommendation.',
      'Handling and environmental behaviour are context-specific.',
    ],
    sourceReferences: FERT_SRC,
  },
  {
    slug: 'phosphorus-fertilizers',
    entityType: 'fertilizer',
    title: 'Phosphorus fertilizers: SSP vs TSP vs DAP vs MAP vs rock phosphate',
    comparedEntityIds: [
      'single-superphosphate',
      'triple-superphosphate',
      'diammonium-phosphate',
      'monoammonium-phosphate',
      'rock-phosphate',
    ],
    purpose:
      'Compare common phosphorus fertilizer materials by grade and class.',
    methodology: 'Grade/class read from each entry.',
    limitations: [
      'Educational only — not a recommendation. Availability depends on soil pH and conditions.',
    ],
    sourceReferences: FERT_SRC,
  },
  {
    slug: 'potassium-fertilizers',
    entityType: 'fertilizer',
    title:
      'Potassium fertilizers: muriate of potash vs sulfate of potash vs potassium nitrate',
    comparedEntityIds: [
      'muriate-of-potash',
      'sulfate-of-potash',
      'potassium-nitrate',
    ],
    purpose: 'Compare common potassium fertilizer materials.',
    methodology: 'Grade/class read from each entry.',
    limitations: [
      'Educational only — chloride sensitivity and cost differ by crop and context.',
    ],
    sourceReferences: FERT_SRC,
  },
  {
    slug: 'organic-amendments',
    entityType: 'fertilizer',
    title:
      'Organic amendments: compost vs farmyard manure vs poultry manure vs vermicompost',
    comparedEntityIds: [
      'compost',
      'farmyard-manure',
      'poultry-manure',
      'vermicompost',
    ],
    purpose: 'Compare bulky organic amendments by class and context.',
    methodology: 'Class/description read from each entry.',
    limitations: [
      'Nutrient content of organic materials is highly variable — test before use.',
    ],
    sourceReferences: FERT_SRC,
  },
  {
    slug: 'sulfur-sources',
    entityType: 'fertilizer',
    title:
      'Sulfur sources: elemental sulfur vs ammonium sulfate vs gypsum vs kieserite',
    comparedEntityIds: [
      'elemental-sulfur',
      'ammonium-sulfate',
      'gypsum',
      'kieserite',
    ],
    purpose:
      'Compare materials that supply sulfur, with their other nutrient/pH effects.',
    methodology: 'Class/grade read from each entry.',
    limitations: [
      'Educational only; gypsum supplies Ca+S without raising pH, unlike lime.',
    ],
    sourceReferences: FERT_SRC,
  },
  {
    slug: 'compound-npk-vs-straights',
    entityType: 'fertilizer',
    title: 'NPK compound vs DAP vs MAP',
    comparedEntityIds: [
      'npk-compound-fertilizer',
      'diammonium-phosphate',
      'monoammonium-phosphate',
    ],
    purpose:
      'Compare a balanced compound fertilizer with ammonium-phosphate compounds.',
    methodology: 'Grade/class read from each entry.',
    limitations: [
      'Educational only — the right choice depends on the soil test and crop.',
    ],
    sourceReferences: FERT_SRC,
  },
  {
    slug: 'calcium-amendments',
    entityType: 'fertilizer',
    title: 'Calcium amendments: agricultural lime vs gypsum vs calcium nitrate',
    comparedEntityIds: ['agricultural-lime', 'gypsum', 'calcium-nitrate'],
    purpose:
      'Compare materials that supply calcium and their differing effects on pH and other nutrients.',
    methodology: 'Class/description read from each entry.',
    limitations: [
      'Educational only; lime raises pH, gypsum does not, and calcium nitrate also supplies N.',
    ],
    sourceReferences: FERT_SRC,
  },

  /* ------------------------------ Countries ----------------------------- */
  {
    slug: 'americas-grain-exporters',
    entityType: 'country',
    title:
      'Americas grain producers: United States vs Brazil vs Argentina vs Canada',
    comparedEntityIds: ['USA', 'BRA', 'ARG', 'CAN'],
    indicators: [
      'AG.YLD.CREL.KG',
      'AG.PRD.CREL.MT',
      'AG.LND.AGRI.ZS',
      'NV.AGR.TOTL.ZS',
    ],
    purpose:
      'Compare major grain-producing economies of the Americas on cereal yield/production, agricultural land, and agriculture value added.',
    methodology:
      'Each indicator is compared at the latest year for which ALL four countries have a value, using the same World Bank dataset and unit; a common year is enforced.',
    limitations: [
      'World Bank figures are compiled/revised and partly modeled; not a ranking of overall agriculture.',
    ],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'eu-major-producers',
    entityType: 'country',
    title: 'EU producers: France vs Germany vs Spain vs Italy vs Poland',
    comparedEntityIds: ['FRA', 'DEU', 'ESP', 'ITA', 'POL'],
    indicators: [
      'AG.YLD.CREL.KG',
      'AG.LND.AGRI.ZS',
      'NV.AGR.TOTL.ZS',
      'AG.CON.FERT.ZS',
    ],
    purpose:
      'Compare major EU agricultural economies on yield, land, value added, and fertilizer use.',
    methodology: 'Common-year comparison per indicator, same dataset/unit.',
    limitations: ['Compiled/revised figures; not an overall ranking.'],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'asia-rice-economies',
    entityType: 'country',
    title:
      'Asian rice economies: China vs India vs Indonesia vs Vietnam vs Thailand',
    comparedEntityIds: ['CHN', 'IND', 'IDN', 'VNM', 'THA'],
    indicators: [
      'AG.YLD.CREL.KG',
      'AG.LND.ARBL.ZS',
      'SL.AGR.EMPL.ZS',
      'SP.RUR.TOTL.ZS',
    ],
    purpose:
      'Compare major Asian agricultural economies on yield, arable land, agricultural employment, and rural population.',
    methodology:
      'Common-year comparison per indicator; employment is a modeled estimate (flagged).',
    limitations: ['Employment is a modeled estimate; not an overall ranking.'],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'sub-saharan-africa-producers',
    entityType: 'country',
    title: 'Sub-Saharan Africa: South Africa vs Kenya vs Ethiopia vs Nigeria',
    comparedEntityIds: ['ZAF', 'KEN', 'ETH', 'NGA'],
    indicators: [
      'AG.LND.AGRI.ZS',
      'SL.AGR.EMPL.ZS',
      'SP.RUR.TOTL.ZS',
      'NV.AGR.TOTL.ZS',
    ],
    purpose:
      'Compare Sub-Saharan agricultural economies on land, employment, rural population, and value added.',
    methodology: 'Common-year comparison per indicator.',
    limitations: ['Data coverage varies; employment is modeled.'],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'mena-water-limited',
    entityType: 'country',
    title:
      'Water-limited agriculture: Egypt vs Morocco vs Saudi Arabia vs UAE vs Türkiye',
    comparedEntityIds: ['EGY', 'MAR', 'SAU', 'ARE', 'TUR'],
    indicators: [
      'AG.LND.AGRI.ZS',
      'AG.LND.IRIG.AG.ZS',
      'AG.LND.PRCP.MM',
      'SP.RUR.TOTL.ZS',
    ],
    purpose:
      'Compare water-limited agricultural economies on agricultural land, irrigated share, precipitation, and rural population.',
    methodology:
      'Common-year comparison per indicator; irrigation coverage is sparse.',
    limitations: [
      'Irrigation data is sparse; some cells may be unavailable at a common year.',
    ],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'eastern-europe-producers',
    entityType: 'country',
    title: 'Eastern Europe: Ukraine vs Poland vs Romania vs Hungary vs Czechia',
    comparedEntityIds: ['UKR', 'POL', 'ROU', 'HUN', 'CZE'],
    indicators: [
      'AG.YLD.CREL.KG',
      'AG.LND.AGRI.ZS',
      'AG.CON.FERT.ZS',
      'NV.AGR.TOTL.ZS',
    ],
    purpose: 'Compare Eastern European agricultural economies.',
    methodology: 'Common-year comparison per indicator.',
    limitations: ['Compiled/revised figures; not an overall ranking.'],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'oceania-producers',
    entityType: 'country',
    title: 'Oceania: Australia vs New Zealand',
    comparedEntityIds: ['AUS', 'NZL'],
    indicators: [
      'AG.LND.AGRI.ZS',
      'AG.YLD.CREL.KG',
      'NV.AGR.TOTL.ZS',
      'AG.PRD.LVSK.XD',
    ],
    purpose: 'Compare the two major Oceania agricultural economies.',
    methodology:
      'Common-year comparison per indicator; the livestock index is base-period relative (not cross-country absolute).',
    limitations: [
      'The livestock production index is an index, not an absolute quantity.',
    ],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'andean-producers',
    entityType: 'country',
    title: 'Andean economies: Chile vs Peru vs Colombia',
    comparedEntityIds: ['CHL', 'PER', 'COL'],
    indicators: [
      'AG.LND.AGRI.ZS',
      'AG.YLD.CREL.KG',
      'SL.AGR.EMPL.ZS',
      'NV.AGR.TOTL.ZS',
    ],
    purpose: 'Compare Andean/Pacific South American agricultural economies.',
    methodology: 'Common-year comparison per indicator.',
    limitations: ['Employment is modeled; not an overall ranking.'],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'north-america-producers',
    entityType: 'country',
    title: 'North America: United States vs Canada vs Mexico',
    comparedEntityIds: ['USA', 'CAN', 'MEX'],
    indicators: [
      'AG.YLD.CREL.KG',
      'AG.LND.AGRI.ZS',
      'SL.AGR.EMPL.ZS',
      'NV.AGR.TOTL.ZS',
    ],
    purpose: 'Compare the three North American agricultural economies.',
    methodology: 'Common-year comparison per indicator.',
    limitations: ['Employment is modeled; not an overall ranking.'],
    sourceReferences: CTRY_SRC,
  },
  {
    slug: 'south-asia-vs-southeast-asia',
    entityType: 'country',
    title: 'India vs Pakistan vs Vietnam vs Thailand',
    comparedEntityIds: ['IND', 'PAK', 'VNM', 'THA'],
    indicators: [
      'AG.YLD.CREL.KG',
      'AG.LND.ARBL.ZS',
      'SL.AGR.EMPL.ZS',
      'SP.RUR.TOTL.ZS',
    ],
    purpose:
      'Compare large monsoon-agriculture economies of South and Southeast Asia.',
    methodology: 'Common-year comparison per indicator.',
    limitations: ['Employment is modeled; not an overall ranking.'],
    sourceReferences: CTRY_SRC,
  },
];
