import type { RegionProfile } from '@/types/region';

export const parana: RegionProfile = {
  regionId: 'parana',
  slug: 'parana',
  countryCode: 'BRA',
  countrySlug: 'brazil',
  name: 'Paraná',
  adminLevel: 'State',
  officialCode: 'BR-PR',
  climateContext:
    'A humid subtropical climate with rainfall in all seasons — hot-summer (Cfa) across most of the state and milder, occasionally frost-prone warm-summer (Cfb) on the higher southern plateaus.',
  agroecologicalZones: ['Cfa', 'Cfb'],
  agriculturalLandContext:
    "Fertile basaltic and red soils on rolling plateaus support one of Brazil's most intensive and highly mechanised grain-and-livestock economies, with widespread no-till farming.",
  majorCropSystems: [
    'Summer soybean as the principal cash crop',
    'Second-crop ("safrinha") maize following soybean within the same year',
    'Winter wheat as the main cool-season grain',
    'Common bean and, locally, sugarcane and cassava',
  ],
  majorLivestockSystems: [
    'Intensive confined broiler poultry — the western part of the state is a leading Brazilian poultry-processing hub',
    'Intensive swine (pig) production integrated with grain supply',
    'Dairy and beef cattle',
  ],
  irrigationContext:
    'Reliable year-round rainfall means field crops are predominantly rainfed; irrigation is limited and mostly serves horticulture and risk management.',
  officialInstitutions: [
    {
      name: 'Instituto Brasileiro de Geografia e Estatística (IBGE)',
      note: 'National statistical institute; agricultural census and municipal production surveys.',
    },
    {
      name: 'Companhia Nacional de Abastecimento (CONAB)',
      note: 'Federal crop-supply agency; official grain production and harvest surveys.',
    },
    {
      name: 'Empresa Brasileira de Pesquisa Agropecuária (Embrapa)',
      note: 'Federal agricultural research corporation; Embrapa Soja (Londrina) is based in the state.',
    },
    {
      name: 'Departamento de Economia Rural (DERAL) / Instituto de Desenvolvimento Rural do Paraná (IDR-Paraná)',
      note: 'State agriculture secretariat bodies publishing regional production estimates and rural extension.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Paraná are published by IBGE, CONAB, Embrapa and the state secretariat (DERAL/IDR-Paraná) and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'embrapa', citedFor: 'Subtropical grain and soybean agronomy' },
    { sourceId: 'faostat', citedFor: 'National production and yield context' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code BR-PR.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'Poultry and swine output is concentrated in integrated agro-industrial clusters rather than spread evenly across the state.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
