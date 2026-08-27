import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const mapaRegistroFitosanitarios: AgriculturalRegistryEntry = {
  id: 'mapa-registro-fitosanitarios',
  slug: 'mapa-registro-fitosanitarios',
  officialName: 'Registro de Productos Fitosanitarios',
  registryType: 'pesticideProductRegistry',
  countryCode: 'ESP',
  jurisdictionName: 'Spain',
  responsibleAuthorityIds: ['es-mapa'],
  officialUrl:
    'https://www.mapa.gob.es/es/agricultura/temas/sanidad-vegetal/productos-fitosanitarios/registro/menu.asp',
  accessType: 'mixed',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Plant protection products registered for use in Spain',
    'Authorised uses and registration holders',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-mapa-registro-fitosanitarios'],
  verification: [
    {
      url: 'https://www.mapa.gob.es/es/agricultura/temas/sanidad-vegetal/productos-fitosanitarios/registro/menu.asp',
      sourceId: 'reg-mapa-registro-fitosanitarios',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Registro de Productos Fitosanitarios.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
