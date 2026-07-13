import type { RegionProfile } from '@/types/region';

export const rioGrandeDoSul: RegionProfile = {
  regionId: 'rio-grande-do-sul',
  slug: 'rio-grande-do-sul',
  countryCode: 'BRA',
  countrySlug: 'brazil',
  name: 'Rio Grande do Sul',
  adminLevel: 'State',
  officialCode: 'BR-RS',
  climateContext:
    'A humid subtropical climate — hot-summer (Cfa) across most of the state and cooler warm-summer (Cfb) on the higher Serra Gaúcha — with well-distributed rainfall and the coldest, most frost-prone winters in Brazil.',
  agroecologicalZones: ['Cfa', 'Cfb'],
  agriculturalLandContext:
    "Brazil's southernmost state combines mechanised grain farming on the northern plateau with the extensive natural grasslands of the Pampa and the low-lying lagoon plains where flooded rice dominates.",
  majorCropSystems: [
    'Summer soybean, the leading grain crop on the northern plateau',
    "Irrigated (flooded) paddy rice on the coastal and Campanha lowlands — the state is Brazil's dominant rice producer",
    'Winter wheat and other cool-season small grains',
    'Flue-cured tobacco, concentrated in the Vale do Rio Pardo and family-farm areas',
  ],
  majorLivestockSystems: [
    'Beef cattle on the natural grasslands of the Pampa (Campanha)',
    'Dairy cattle in the north and northwest',
    'Sheep for wool and meat in the Campanha',
  ],
  irrigationContext:
    'Unusually for Brazil, irrigation is essential to the main rice system, which relies on flood irrigation drawn from rivers and coastal lagoons; upland grain crops remain largely rainfed.',
  officialInstitutions: [
    {
      name: 'Instituto Brasileiro de Geografia e Estatística (IBGE)',
      note: 'National statistical institute; agricultural census and municipal production surveys.',
    },
    {
      name: 'Companhia Nacional de Abastecimento (CONAB)',
      note: 'Federal crop-supply agency; official grain and rice production and harvest surveys.',
    },
    {
      name: 'Empresa Brasileira de Pesquisa Agropecuária (Embrapa)',
      note: 'Federal agricultural research corporation; Embrapa Trigo (Passo Fundo), Embrapa Clima Temperado (Pelotas) and Embrapa Pecuária Sul are located in the state.',
    },
    {
      name: 'Instituto Rio Grandense do Arroz (IRGA)',
      note: 'State institute for rice research, extension and irrigated-rice statistics.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Rio Grande do Sul are published by IBGE, CONAB, Embrapa and IRGA and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'embrapa',
      citedFor:
        'Subtropical grain, irrigated-rice and temperate-livestock agronomy',
    },
    { sourceId: 'faostat', citedFor: 'National production and yield context' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'tobacco' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code BR-RS.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'The state spans very different systems — flooded lowland rice, upland grain plateaus and Pampa grazing — so state totals blend contrasting production models.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
