import type { RegionProfile } from '@/types/region';

export const minasGerais: RegionProfile = {
  regionId: 'minas-gerais',
  slug: 'minas-gerais',
  countryCode: 'BRA',
  countrySlug: 'brazil',
  name: 'Minas Gerais',
  adminLevel: 'State',
  officialCode: 'BR-MG',
  climateContext:
    'A varied climate spanning dry-winter tropical savanna (Aw) in the west and Triângulo, dry-winter humid subtropical highlands (Cwa) in the cooler south, and a hot semi-arid (BSh) belt in the north.',
  agroecologicalZones: ['Aw', 'Cwa', 'BSh'],
  agriculturalLandContext:
    'A large, topographically diverse state combining highland coffee terrain in the south with mechanised Cerrado grain and cane in the west and dairy across the centre.',
  majorCropSystems: [
    "Arabica coffee — Minas Gerais is Brazil's leading coffee state, spanning Sul de Minas, the Cerrado Mineiro and the Matas de Minas",
    'Grain maize, widely grown for feed and processing',
    'Sugarcane, concentrated in the Triângulo Mineiro',
    'Soybean, common bean and horticulture',
  ],
  majorLivestockSystems: [
    'Dairy cattle — the state is a leading milk producer in Brazil',
    'Beef cattle on pasture across the centre and north',
  ],
  irrigationContext:
    'Most cropping is rainfed; centre-pivot and drip irrigation are important for Cerrado coffee, horticulture and grain in the drier west and north.',
  officialInstitutions: [
    {
      name: 'Instituto Brasileiro de Geografia e Estatística (IBGE)',
      note: 'National statistical institute; agricultural census and municipal production surveys.',
    },
    {
      name: 'Companhia Nacional de Abastecimento (CONAB)',
      note: 'Federal crop-supply agency; official coffee and grain production and harvest surveys.',
    },
    {
      name: 'Empresa Brasileira de Pesquisa Agropecuária (Embrapa)',
      note: 'Federal agricultural research corporation; Embrapa Milho e Sorgo (Sete Lagoas) is based in the state and coordinates coffee research (Embrapa Café).',
    },
    {
      name: 'Empresa de Pesquisa Agropecuária de Minas Gerais (EPAMIG) / Emater-MG',
      note: 'State agricultural research enterprise and rural-extension agency.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Minas Gerais are published by IBGE, CONAB, Embrapa and EPAMIG and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'embrapa',
      citedFor: 'Coffee, maize and dairy systems agronomy',
    },
    { sourceId: 'faostat', citedFor: 'National production and yield context' },
  ],
  connections: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code BR-MG.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'Marked internal contrasts — humid highlands, Cerrado plateaus and a semi-arid north — mean state totals blend distinct farming regions.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
