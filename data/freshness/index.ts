import type { SourceSnapshotDescriptor } from '@/types/freshness';

/**
 * Every source capture the repository holds, as identity records.
 *
 * These are DESCRIPTORS. The payloads stay in the layer-specific files under
 * `data/snapshots`, which the market, input and variety layers already read;
 * copying rows here would create a second copy that could disagree with the
 * first. What this file adds is the part those files do not carry uniformly:
 * which source a capture belongs to, which release it is of, which parser read
 * it, and how the retrieval went.
 *
 * ## Every release identifier here is the source's own
 *
 * `sourceReleaseId` is the version the publisher states — FAOSTAT's release
 * date, the gazette's edition month, the register's own dataset version. It is
 * never the retrieval date and never a build timestamp. Where the two coincide
 * it is because the source publishes continuously and dates its extract, not
 * because one was substituted for the other.
 *
 * ## Twenty-eight captures, two of them comparable
 *
 * Only the UK Seeds Gazette is held at two releases, because it is the only
 * source in this corpus that retains its earlier editions. Everything else is
 * a single capture of a source that publishes current state only, so there is
 * nothing yet to compare it against — and the freshness layer reports that
 * plainly rather than inventing a baseline.
 */
export const SOURCE_SNAPSHOTS: SourceSnapshotDescriptor[] = [
  {
    id: 'ers-cost-of-production-forecasts-2026-08-27',
    releaseLineId: 'ers:cost-of-production-forecasts',
    sourceId: 'reg-usda-ers-data-products',
    snapshotKind: 'api-response',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026f-2027f',
    checksum:
      '1aeb312a3f724ecc416295906e69dac04fcc60678a122e57f8793b421a597310',
    byteLength: 88433,
    parserVersion: 'ers-cop@1',
    normalizationVersion: 'ers-cop@1',
    status: 'success',
    payloadPath:
      'data/snapshots/ers__cost-of-production-forecasts__2026-08-27.json',
  },
  {
    id: 'eurostat-agricultural-economics-2026-08-27',
    releaseLineId: 'eurostat:agricultural-economics',
    sourceId: 'reg-eurostat-agriculture',
    snapshotKind: 'api-response',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-08-11',
    checksum:
      '5c5e495337d91d3dc4a616d0dc2f7d580fe99d064c68cc1fbc73f4f558b80155',
    byteLength: 4458202,
    parserVersion: 'eurostat-jsonstat@1',
    normalizationVersion: 'eurostat-jsonstat@1',
    status: 'success',
    payloadPath:
      'data/snapshots/eurostat__agricultural-economics__2026-08-27.json',
  },
  {
    id: 'ssurgo-component-surface-horizons-2026-08-27',
    releaseLineId: 'ssurgo:component-surface-horizons',
    sourceId: 'reg-usda-nrcs-ssurgo',
    snapshotKind: 'api-response',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-08-27',
    checksum:
      '75210d67efdb8adec406b2d38ce015f1802ae78aa72b508d6cbcd1b3eb41972c',
    byteLength: 6907658,
    parserVersion: 'ssurgo-sda@1',
    normalizationVersion: 'ssurgo-sda@1',
    status: 'success',
    payloadPath:
      'data/snapshots/ssurgo__component-surface-horizons__2026-08-27.json',
  },
  {
    id: 'apvma-pubcris-2026-06-25',
    releaseLineId: 'apvma:pubcris',
    sourceId: 'reg-apvma-pubcris',
    snapshotKind: 'registry',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-06-25',
    checksum:
      '830e1a8758939f96342056f281071ea7161c414002df7be138a09479e8b2718a',
    byteLength: 5368598,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/apvma__pubcris__2026-06-25.json',
  },
  {
    id: 'ephy-2026-08-25',
    releaseLineId: 'anses:ephy',
    sourceId: 'reg-anses-ephy',
    snapshotKind: 'registry',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-08-25',
    checksum:
      'e43cb8052574f8c0128a5b46b09c6e9f9af2d5f46cd1353b9172b2c655b59a45',
    byteLength: 6077287,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/ephy__products__2026-08-25.json',
  },
  {
    id: 'eu-pesticides-active-substances-2026-08-27',
    releaseLineId: 'eu-pesticides:active-substances',
    sourceId: 'reg-eu-pesticides-database',
    snapshotKind: 'registry',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-08-27',
    checksum:
      '0d620d99d49b395a4d33b032494ac81863a945c125ad8b50415a2514748bb4d2',
    byteLength: 186784,
    normalizationVersion: '1',
    status: 'success',
    payloadPath:
      'data/snapshots/eu-pesticides__active-substances__2026-08-27.json',
  },
  {
    id: 'faostat-producer-prices-2026-01-09',
    releaseLineId: 'faostat:producer-prices',
    sourceId: 'faostat',
    snapshotKind: 'dataset',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-01-09',
    checksum:
      'fec6225c43c1cfda81cddab54856756ee7c93b1ae1b334fc3749f278fcc063af',
    byteLength: 1088601,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/faostat__producer-prices__2026-01-09.json',
  },
  {
    id: 'faostat-production-2025-12-31',
    releaseLineId: 'faostat:production',
    sourceId: 'faostat',
    snapshotKind: 'dataset',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2025-12-31',
    checksum:
      '3c2a250164a890947dc5bbdeabeef886e58e8d7f73eeba16473177b62b20972d',
    byteLength: 1239474,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/faostat__production__2025-12-31.json',
  },
  {
    id: 'faostat-trade-cl-2026-07-24',
    releaseLineId: 'faostat:trade-cl',
    sourceId: 'faostat',
    snapshotKind: 'dataset',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-07-24',
    checksum:
      '270080023be20dab10ec35286f35ef86ea72d3f8f0dd1adffb5f3c7d0933455a',
    byteLength: 2599977,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/faostat__trade-cl__2026-07-24.json',
  },
  {
    id: 'faostat-trade-matrix-2025-12-18',
    releaseLineId: 'faostat:trade-matrix',
    sourceId: 'faostat',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-16',
    sourceReleaseId: '2025-12-18',
    checksum:
      '7bf652b9205c0ff7200e77b5da28c0a07ed909219db8ed4521dc3750cefd6093',
    byteLength: 347462,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/faostat__trade-matrix__2025-12-18.json',
  },
  {
    id: 'pmra-products-2026-08-27',
    releaseLineId: 'pmra:products',
    sourceId: 'reg-health-canada-pesticide-label-search',
    snapshotKind: 'api-response',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-08-27',
    checksum:
      '503c19ea9eed92697eca56dc4cef3a77a09b2a1e4168101d73b60a9105f9b8a9',
    byteLength: 6458085,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/pmra__products__2026-08-27.json',
  },
  {
    id: 'uk-seeds-gazette-variety-lists-2026-07-01',
    releaseLineId: 'uk-seeds-gazette:variety-lists',
    sourceId: 'reg-uk-seeds-gazette',
    snapshotKind: 'download',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-07-01',
    checksum:
      'b8a2aea5270c9fe73d7e0b2670f950d8ee81d6d4fd9427e178fa921cb3c58167',
    byteLength: 2474927,
    parserVersion: 'uk-seeds-gazette@3',
    normalizationVersion: 'uk-seeds-gazette@3',
    status: 'success',
    payloadPath:
      'data/snapshots/uk-seeds-gazette__variety-lists__2026-07-01.json',
  },
  {
    id: 'uk-seeds-gazette-variety-lists-2026-08-01',
    releaseLineId: 'uk-seeds-gazette:variety-lists',
    sourceId: 'reg-uk-seeds-gazette',
    snapshotKind: 'download',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-08-01',
    checksum:
      '790ee76e3069fdee63d122a07f29c0fc490f90beb8e6f3c747b3c5cae8c129bc',
    byteLength: 2513103,
    parserVersion: 'uk-seeds-gazette@3',
    normalizationVersion: 'uk-seeds-gazette@3',
    status: 'success',
    payloadPath:
      'data/snapshots/uk-seeds-gazette__variety-lists__2026-08-01.json',
  },
  {
    id: 'usda-psd-2026-08-12',
    releaseLineId: 'usda-fas:psd-supply-use',
    sourceId: 'usda-fas',
    snapshotKind: 'dataset',
    retrievedAt: '2026-08-27',
    sourceReleaseId: '2026-08-12',
    checksum:
      '8ee0d2b8a8efa087089a5c4aef2eade988a45e3f8ed7b247066b565193dd78c8',
    byteLength: 427440,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/usda-psd__supply-use__2026-08-12.json',
  },
  {
    id: 'worldbank-AG.CON.FERT.ZS-2026-07-01',
    releaseLineId: 'worldbank:AG.CON.FERT.ZS',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:65d1b6153fc4a596261b4409afd62d6d2f8ca245b5f3b34b52aed77272d835e8',
    byteLength: 390155,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.CON.FERT.ZS__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.LND.AGRI.K2-2026-07-01',
    releaseLineId: 'worldbank:AG.LND.AGRI.K2',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:1930c7c22e52e141c1b0f69fe78f60bf0ced5d50119dab13869c742aca1421fe',
    byteLength: 379125,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.LND.AGRI.K2__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.LND.AGRI.ZS-2026-07-01',
    releaseLineId: 'worldbank:AG.LND.AGRI.ZS',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:ad834d658c34ac79295b63b69f83bb9b3e0bbe84316c90488fdc32a64e9e0b9b',
    byteLength: 428323,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.LND.AGRI.ZS__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.LND.ARBL.HA.PC-2026-07-01',
    releaseLineId: 'worldbank:AG.LND.ARBL.HA.PC',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:c72ee93bcd8f8077587057b2752d45844a7ce6d033a33079acfd7a775ef9edd1',
    byteLength: 429814,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.LND.ARBL.HA.PC__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.LND.ARBL.ZS-2026-07-01',
    releaseLineId: 'worldbank:AG.LND.ARBL.ZS',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:94721962387e5e6839318233d1d230e6743c25533428eda29e9b2ba5d41fedfb',
    byteLength: 421263,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.LND.ARBL.ZS__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.LND.FRST.ZS-2026-07-01',
    releaseLineId: 'worldbank:AG.LND.FRST.ZS',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:62ed13efa2fb13b8dcae1c625ddc5d7376e441d37a19f0a4a505e9d064f89b12',
    byteLength: 433329,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.LND.FRST.ZS__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.LND.IRIG.AG.ZS-2026-07-01',
    releaseLineId: 'worldbank:AG.LND.IRIG.AG.ZS',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:f2d67f4666abe292e63394ff3ad74365096855085c3e59d552d3131d3abcdfc2',
    byteLength: 105599,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.LND.IRIG.AG.ZS__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.LND.PRCP.MM-2026-07-01',
    releaseLineId: 'worldbank:AG.LND.PRCP.MM',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:c8c7a9702d71451989d88883a56b8055796b14c3b1a626e98de2395fde65df1a',
    byteLength: 306754,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.LND.PRCP.MM__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.PRD.CREL.MT-2026-07-01',
    releaseLineId: 'worldbank:AG.PRD.CREL.MT',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:a09803cfa04856db0fbe86fa21d00fce48fd490535c1d5f22525a14e08ea4884',
    byteLength: 339486,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.PRD.CREL.MT__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.PRD.CROP.XD-2026-07-01',
    releaseLineId: 'worldbank:AG.PRD.CROP.XD',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:a4ec9140d3c36985869070806fc5662514c818ae3b57e05ed4a5f297d6c2851e',
    byteLength: 335930,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.PRD.CROP.XD__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.PRD.FOOD.XD-2026-07-01',
    releaseLineId: 'worldbank:AG.PRD.FOOD.XD',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:f1727f3db2f049f28e02c28eefd351de6593d2e96b9a45d03fd0160c6bbbec71',
    byteLength: 335841,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.PRD.FOOD.XD__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.PRD.LVSK.XD-2026-07-01',
    releaseLineId: 'worldbank:AG.PRD.LVSK.XD',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:110ed0bf4de5bb89bb706d2e877d71ec38df7736c62f2abae282e387709ab36f',
    byteLength: 334137,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.PRD.LVSK.XD__2026-07-01.json',
  },
  {
    id: 'worldbank-AG.YLD.CREL.KG-2026-07-01',
    releaseLineId: 'worldbank:AG.YLD.CREL.KG',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:a9b3c26d8e84a49ad1c89feeae262ca51d19f55fe1e68883520dd358b98c5bbd',
    byteLength: 330378,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__AG.YLD.CREL.KG__2026-07-01.json',
  },
  {
    id: 'worldbank-NV.AGR.TOTL.ZS-2026-07-01',
    releaseLineId: 'worldbank:NV.AGR.TOTL.ZS',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:959d8dd117a9675e6eb44e84471dd5fe3234b48c54718b7152aa3306b91e7bc2',
    byteLength: 419225,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__NV.AGR.TOTL.ZS__2026-07-01.json',
  },
  {
    id: 'worldbank-SL.AGR.EMPL.ZS-2026-07-01',
    releaseLineId: 'worldbank:SL.AGR.EMPL.ZS',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:ecdcc94246a272eeb1603b0158b5e1731fe595ff131d88802910e2d8ad809bbe',
    byteLength: 401899,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__SL.AGR.EMPL.ZS__2026-07-01.json',
  },
  {
    id: 'worldbank-SP.RUR.TOTL.ZS-2026-07-01',
    releaseLineId: 'worldbank:SP.RUR.TOTL.ZS',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-01',
    checksum:
      'sha256:86c6c5b13a12e080c319b346a0379529275a0ea23fa75b342f11070680e0b663',
    byteLength: 462413,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__SP.RUR.TOTL.ZS__2026-07-01.json',
  },
  {
    id: 'worldbank-countries-2026-07-12',
    releaseLineId: 'worldbank:countries',
    sourceId: 'worldbank',
    snapshotKind: 'dataset',
    retrievedAt: '2026-07-12',
    sourceReleaseId: '2026-07-12',
    checksum:
      'sha256:f3add29a0651c11b35161450eeed001d418c3a40e69b6b6d9e1d87eaa22bb1af',
    byteLength: 61874,
    normalizationVersion: '1',
    status: 'success',
    payloadPath: 'data/snapshots/worldbank__countries.json',
  },
];
