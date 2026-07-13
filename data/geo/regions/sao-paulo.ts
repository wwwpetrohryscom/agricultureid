import type { RegionProfile } from '@/types/region';

export const saoPaulo: RegionProfile = {
  regionId: 'sao-paulo',
  slug: 'sao-paulo',
  countryCode: 'BRA',
  countrySlug: 'brazil',
  name: 'São Paulo',
  adminLevel: 'State',
  officialCode: 'BR-SP',
  climateContext:
    'A humid subtropical climate — dry-winter (Cwa) across the interior plateau and consistently humid (Cfa) toward the south and the coast — giving warm summers and mild, drier winters.',
  agroecologicalZones: ['Cwa', 'Cfa'],
  agriculturalLandContext:
    'A highly capitalised, agro-industrial farming sector on fertile interior plateaus, closely tied to sugar–ethanol mills, citrus processors and a large domestic market.',
  majorCropSystems: [
    "Sugarcane for sugar and ethanol — the state is Brazil's leading cane producer, feeding the Center-South mill complex",
    'Sweet oranges for the export-oriented orange-juice (citrus) belt',
    'Arabica coffee, historically centred on the Mogiana and northeast of the state',
    'Grain maize and soybean in the south and west',
  ],
  majorLivestockSystems: [
    'Beef cattle, including feedlot finishing near the cane-and-grain belts',
    'Dairy cattle supplying the metropolitan market',
    'Intensive poultry and eggs',
  ],
  irrigationContext:
    'Field crops are largely rainfed; supplemental irrigation and fertigation (including sugarcane vinasse) support citrus, horticulture and cane in the drier interior.',
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
      name: 'Instituto Agronômico de Campinas (IAC) / Instituto de Economia Agrícola (IEA)',
      note: 'State research and agricultural-economics institutes (Agência Paulista de Tecnologia dos Agronegócios).',
    },
    {
      name: 'Empresa Brasileira de Pesquisa Agropecuária (Embrapa)',
      note: 'Federal agricultural research corporation supporting sugarcane, citrus and grain systems.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for São Paulo are published by IBGE, CONAB, IAC/IEA and Embrapa and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'embrapa', citedFor: 'Sugarcane, citrus and coffee agronomy' },
    { sourceId: 'faostat', citedFor: 'National production and yield context' },
  ],
  connections: [
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'coffee' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code BR-SP.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'Sugar–ethanol and citrus output is tied to processing capacity, so cropping patterns shift with mill and juice-industry demand.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
