# Editorial standards and sources

This document summarises how AgricultureID sources and stands behind its
content. The public-facing versions are the
[editorial policy](https://agricultureid.com/editorial-policy) and
[sources & methodology](https://agricultureid.com/methodology) pages.

## Source registry

Sources live in [`data/sources.ts`](../data/sources.ts) and are typed by
[`types/sources.ts`](../types/sources.ts). Each source records:

`id`, `organization`, `title`, `url`, optional `publicationDate`, `accessDate`,
`sourceType`, `jurisdiction`, `language`, optional `notes`, and a `reliability`
classification (`authoritative` | `high` | `moderate`).

Content cites sources by `id`, so the same authority can be referenced across
many entries without duplication, and every citation is validated to resolve.

## Evidence hierarchy

In broad order of preference:

1. Intergovernmental and government bodies (FAO, USDA and its agencies, the
   European Commission, EFSA) and official registries
2. Peer-reviewed literature and agricultural research institutes (CGIAR centres
   such as CIMMYT, IRRI, CIP)
3. University extension services and recognised standards bodies (e.g. EPPO)
4. Reputable reference works, for general or historical context only

## Preferred vs avoided sources

**Preferred:** national agriculture ministries, FAO, USDA/ARS/NRCS/NASS/ERS/APHIS/FAS,
European Commission, EFSA, EPPO, universities and extension services,
agricultural research institutes, peer-reviewed literature, and official breed
and crop registries (e.g. FAO DAD-IS).

**Avoided:** anonymous blogs, affiliate articles used as scientific sources,
content farms and copied material, unsupported commercial claims, and
AI-generated or invented citations and URLs.

We reference durable, canonical pages (organization or program level) rather than
deep links that rot, and we do not fabricate publication dates for living
databases.

## Handling claims and uncertainty

- Agricultural figures vary by region and season, so we link to primary datasets
  rather than republishing volatile numbers, and describe scale qualitatively
  where a precise figure would mislead.
- Rates, dates, volumes, and yields that depend on local conditions are framed as
  region-specific, never universal.
- Every entry states its geographic scope and an explicit list of limitations.
- We do not claim each article is reviewed by a named agronomist; entries are
  prepared against authoritative sources and our editorial standards.

## Safety framing

Disease, pest, and livestock entries describe identification, biology, hosts,
risk factors, prevention, and monitoring. They do **not** provide chemical
treatment instructions, product names, doses, or veterinary protocols. Any use of
pesticides, fertilizers, veterinary medicines, or regulated products must follow
local law, product labels, current regional guidance, and qualified
professionals.

## Corrections

A published [corrections process](https://agricultureid.com/corrections) invites
readers to report factual errors. Confirmed material corrections update the entry
and its `updatedAt` date.

## Validation as an editorial guarantee

The checks in `lib/validation/validate.ts` enforce these standards mechanically —
see [docs/seo-architecture.md](seo-architecture.md) and the list on the
methodology page. A published entry cannot ship without resolvable sources,
unique metadata, resolvable links, valid dates, and no placeholder text.
