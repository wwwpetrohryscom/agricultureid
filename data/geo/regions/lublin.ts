import type { RegionProfile } from '@/types/region';

export const lublin: RegionProfile = {
  regionId: 'lublin',
  slug: 'lublin',
  countryCode: 'POL',
  countrySlug: 'poland',
  name: 'Lublin',
  alternativeNames: ['Lublin Voivodeship', 'Lubelskie'],
  adminLevel: 'Voivodeship',
  officialCode: 'PL-06',
  climateContext:
    'Lublin, in southeastern Poland, has the country’s most continental climate, with warm summers, cold winters and moderate rainfall; the fertile loess uplands (Lublin Upland, Roztocze) give it a longer and more reliable growing season than much of Poland.',
  agroecologicalZones: ['Dfb', 'Cfb'],
  agriculturalLandContext:
    'Fertile chernozem-like and loess soils make Lublin one of Poland’s most agricultural regions, with a high share of good arable land worked by many small and medium family farms and a strong tradition of horticulture and specialty crops.',
  majorCropSystems: [
    'Cereals — wheat, rye, barley and triticale — on the fertile loess soils',
    'Hops in the Lublin area, the heart of Polish hop growing',
    'Soft fruit, especially raspberries and strawberries — Lublin is Poland’s leading berry region',
    'Sugar beet and oilseed rape on the better arable land',
    'Vegetables, herbs and tobacco as regional specialities',
  ],
  majorLivestockSystems: [
    'Dairy and beef cattle on mixed family farms',
    'Pigs and poultry integrated with cereal production',
    'Honey bees and beekeeping supported by the diverse cropping and orchards',
  ],
  irrigationContext:
    'Field crops are essentially rainfed; the loess soils hold moisture relatively well, and irrigation is limited mainly to soft fruit, vegetables and nurseries.',
  officialInstitutions: [
    {
      name: 'Lubelski Ośrodek Doradztwa Rolniczego (LODR)',
      note: 'Lublin Agricultural Advisory Centre, Końskowola.',
    },
    {
      name: 'GUS (Główny Urząd Statystyczny)',
      note: 'Statistics Poland — the central statistical office.',
    },
    {
      name: 'IUNG-PIB',
      note: 'Institute of Soil Science and Plant Cultivation, based in Puławy within the region (national research institute).',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Lublin are published by Statistics Poland (GUS) and its regional office and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor:
        'EU Common Agricultural Policy framework and Eurostat regional farm statistics',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global crop and livestock production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rye' },
    { type: 'crop', slug: 'raspberry' },
    { type: 'crop', slug: 'strawberry' },
    { type: 'crop', slug: 'sugar-beet' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'Farming is dominated by small holdings and labour-intensive soft-fruit and specialty crops, so the region’s structure and output differ markedly from the larger arable farms of western Poland.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
