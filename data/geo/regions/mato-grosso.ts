import type { RegionProfile } from '@/types/region';

export const matoGrosso: RegionProfile = {
  regionId: 'mato-grosso',
  slug: 'mato-grosso',
  countryCode: 'BRA',
  countrySlug: 'brazil',
  name: 'Mato Grosso',
  adminLevel: 'State',
  officialCode: 'BR-MT',
  climateContext:
    'A tropical savanna (Cerrado) climate with a hot, wet summer (roughly October–April) and a pronounced dry winter; the northern fringe grades toward the more consistently humid southern Amazon.',
  agroecologicalZones: ['Aw', 'Am'],
  agriculturalLandContext:
    "The state is Brazil's largest grain producer, built on the mechanised conversion of flat, acidic Cerrado tableways (chapadões) into large-scale rainfed farms after lime and phosphate correction.",
  majorCropSystems: [
    'Large-scale rainfed soybean sown at the onset of the summer rains',
    'Second-crop ("safrinha") maize planted immediately after the soybean harvest within the same season',
    'Cotton, frequently as a second crop following soybean, on the eastern and southeastern plateaus',
    'Expanding sugarcane and off-season sorghum in rotation',
  ],
  majorLivestockSystems: [
    'Extensive and semi-intensive beef cattle on Cerrado and cleared pastures — one of the largest cattle herds of any Brazilian state',
    'Integrated crop–livestock–forest (ILPF) systems that rotate pasture with grain',
  ],
  irrigationContext:
    'Production is overwhelmingly rainfed within the summer wet season; supplemental centre-pivot irrigation is localised, used mainly to extend second-crop and specialty cropping.',
  officialInstitutions: [
    {
      name: 'Instituto Brasileiro de Geografia e Estatística (IBGE)',
      note: 'National statistical institute; agricultural census and municipal crop and livestock surveys.',
    },
    {
      name: 'Companhia Nacional de Abastecimento (CONAB)',
      note: 'Federal crop-supply agency; official grain and fibre production and harvest surveys.',
    },
    {
      name: 'Empresa Brasileira de Pesquisa Agropecuária (Embrapa)',
      note: 'Federal agricultural research corporation; Embrapa Agrossilvipastoril (Sinop) leads Cerrado and integrated-systems research in the state.',
    },
    {
      name: 'Instituto Mato-grossense de Economia Agropecuária (IMEA)',
      note: 'State-level farm-economics institute publishing regional planting, yield and cost surveys.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Mato Grosso are published by IBGE, CONAB, Embrapa and IMEA and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'embrapa',
      citedFor: 'Cerrado and tropical cropping-systems agronomy',
    },
    { sourceId: 'faostat', citedFor: 'National production and yield context' },
  ],
  connections: [
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'cotton' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classifications follow the official ISO 3166-2 code BR-MT.',
    'Any production statistics are dated, source-specific and periodically revised; read them with their year and dataset version.',
    'A single state spans frontier expansion and established mechanised farming; land-use change is a significant environmental consideration.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
