import type { RegionProfile } from '@/types/region';

export const goias: RegionProfile = {
  regionId: 'goias',
  slug: 'goias',
  countryCode: 'BRA',
  countrySlug: 'brazil',
  name: 'Goiás',
  adminLevel: 'State',
  officialCode: 'BR-GO',
  climateContext:
    'A tropical savanna (Cerrado) climate with a hot, wet summer and a marked dry winter, concentrating rainfed cropping into the October–April rainy season.',
  agroecologicalZones: ['Aw'],
  agriculturalLandContext:
    "A central-Cerrado state where corrected, flat plateau soils support large-scale mechanised grain farming alongside one of Brazil's largest cattle herds.",
  majorCropSystems: [
    'Summer soybean as the leading grain crop',
    'Second-crop ("safrinha") maize following soybean within the same season',
    'Sorghum as a drought-tolerant second-crop alternative to maize',
    'Cotton and sugarcane in rotation on parts of the plateau',
  ],
  majorLivestockSystems: [
    'Extensive and semi-intensive beef cattle on Cerrado and cultivated pastures',
    'Dairy cattle in the south and southwest',
    'Growing confined poultry and swine linked to local grain supply',
  ],
  irrigationContext:
    'Cropping is predominantly rainfed within the wet season; centre-pivot irrigation is locally important for second crops and horticulture on the plateaus.',
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
      note: 'Federal agricultural research corporation; Embrapa Arroz e Feijão (Santo Antônio de Goiás) is based in the state.',
    },
    {
      name: 'Secretaria de Estado de Agricultura, Pecuária e Abastecimento (SEAPA) / Emater-GO',
      note: 'State agriculture secretariat and rural-extension agency.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Goiás are published by IBGE, CONAB, Embrapa and the state secretariat (SEAPA) and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'embrapa',
      citedFor: 'Cerrado grain and beef systems agronomy',
    },
    { sourceId: 'faostat', citedFor: 'National production and yield context' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code BR-GO.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    "The Federal District (Brasília) is a separate unit and is not included in the state's figures.",
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
