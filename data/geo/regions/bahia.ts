import type { RegionProfile } from '@/types/region';

export const bahia: RegionProfile = {
  regionId: 'bahia',
  slug: 'bahia',
  countryCode: 'BRA',
  countrySlug: 'brazil',
  name: 'Bahia',
  adminLevel: 'State',
  officialCode: 'BR-BA',
  climateContext:
    'A strongly contrasted climate — dry-winter tropical savanna (Aw) on the western Cerrado plateau, a hot semi-arid (BSh) interior sertão, and a humid tropical (Am) Atlantic coastal belt in the south.',
  agroecologicalZones: ['Aw', 'BSh', 'Am'],
  agriculturalLandContext:
    "One of Brazil's most agriculturally diverse states, ranging from a modern grain frontier in the west to drought-prone family farming in the sertão and irrigated fruit in the São Francisco valley.",
  majorCropSystems: [
    'Cocoa on the humid southern Atlantic coast — Bahia is the historic heart of Brazilian cacao',
    'Soybean, maize and cotton on the western Cerrado plateau (Oeste Baiano, around Barreiras and Luís Eduardo Magalhães)',
    'Irrigated fruit — grape, mango and melon — in the São Francisco river valley around Juazeiro',
    'Coffee on the Chapada and drought-tolerant crops in the semi-arid interior',
  ],
  majorLivestockSystems: [
    'Beef cattle across the interior',
    'Goats and sheep adapted to the semi-arid sertão',
  ],
  irrigationContext:
    'Rainfed cropping dominates the coast and western plateau, but irrigation is decisive for the São Francisco valley fruit belt and supports centre-pivot systems in the western Cerrado.',
  officialInstitutions: [
    {
      name: 'Instituto Brasileiro de Geografia e Estatística (IBGE)',
      note: 'National statistical institute; agricultural census and municipal production surveys.',
    },
    {
      name: 'Companhia Nacional de Abastecimento (CONAB)',
      note: 'Federal crop-supply agency; official production and harvest surveys.',
    },
    {
      name: 'Empresa Brasileira de Pesquisa Agropecuária (Embrapa)',
      note: 'Federal agricultural research corporation; Embrapa Mandioca e Fruticultura (Cruz das Almas) is based in the state.',
    },
    {
      name: 'Comissão Executiva do Plano da Lavoura Cacaueira (CEPLAC) / SEAGRI-BA',
      note: 'Federal cacao-development agency and the Bahia state agriculture secretariat.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Bahia are published by IBGE, CONAB, Embrapa and CEPLAC and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'embrapa',
      citedFor: 'Cocoa, Cerrado grain and irrigated-fruit agronomy',
    },
    { sourceId: 'faostat', citedFor: 'National production and yield context' },
  ],
  connections: [
    { type: 'crop', slug: 'cocoa' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'grape' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code BR-BA.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'The state combines a modern western grain frontier, semi-arid smallholder farming and coastal cacao, so state totals blend very different systems.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
