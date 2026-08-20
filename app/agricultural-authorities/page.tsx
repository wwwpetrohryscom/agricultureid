import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { countryName, getProfileByCode, countryPath } from '@/lib/geo/registry';
import {
  listedAuthorities,
  publishedAuthorities,
  authorityPath,
  humanizeToken,
  countryAuthoritiesPath,
  AUTHORITY_VIEW_COUNTRIES,
} from '@/lib/authorities/registry';
import { AuthorityNonAffiliationNotice } from '@/components/authorities/AuthorityNonAffiliationNotice';
import { AuthorityFilters } from '@/components/authorities/AuthorityFilters';

const TITLE = 'Agricultural Authorities';
const PATH = '/agricultural-authorities';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'A verified directory of official public bodies responsible for agriculture — ministries, departments, inspection services, plant-health and statistics authorities — each with its official website and the evidence it was verified against.',
  path: PATH,
});

/** Order government levels from broadest to narrowest for stable grouping. */
const LEVEL_ORDER = [
  'supranational',
  'national',
  'federal',
  'state',
  'provincial',
  'territorial',
  'regional',
  'local',
];

export default function AgriculturalAuthoritiesPage() {
  const listed = listedAuthorities();
  const published = new Set(publishedAuthorities().map((a) => a.slug));

  // Facet values are computed from the corpus, never hardcoded, so a new
  // authority record changes the filters with no UI edit.
  const facetOf = (values: string[]) => {
    const counts = new Map<string, number>();
    for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
    return [...counts]
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
  };

  const facets = [
    {
      key: 'country',
      label: 'Country',
      values: facetOf(
        listed.map((a) =>
          a.countryCode ? countryName(a.countryCode) : 'Supranational',
        ),
      ),
    },
    {
      key: 'level',
      label: 'Government level',
      values: facetOf(listed.map((a) => humanizeToken(a.governmentLevel))),
    },
    {
      key: 'type',
      label: 'Authority type',
      values: facetOf(listed.map((a) => humanizeToken(a.authorityType))),
    },
    {
      key: 'responsibility',
      label: 'Responsibility',
      values: facetOf(
        listed.flatMap((a) => [
          ...new Set(a.responsibilities.map((r) => humanizeToken(r.area))),
        ]),
      ),
    },
  ].filter((f) => f.values.length > 1);

  // Group by government level, then country, so the directory reads as
  // government structure rather than an undifferentiated list.
  const levels = [...new Set(listed.map((a) => a.governmentLevel))].sort(
    (a, b) => LEVEL_ORDER.indexOf(a) - LEVEL_ORDER.indexOf(b),
  );

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Verified directory of official agricultural authorities and departments.',
          path: PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Official public bodies responsible for agriculture, verified against government sources."
      >
        <p>
          Every body listed here was checked against an official government
          source, and each entry records the URL, the date, and what was
          actually observed. Nothing is inferred from an organisation’s name.
        </p>
        <p>
          Entries with enough verified detail have their own page. The rest are
          listed as directory records — real and verified, but not yet carrying
          enough evidence to justify a page of their own.
        </p>
      </PageIntro>

      <AuthorityNonAffiliationNotice />

      <nav aria-label="Country authority views" className="mt-6">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
          By country
        </h2>
        <ul className="mt-2 flex flex-wrap gap-2">
          {AUTHORITY_VIEW_COUNTRIES.map((c) => (
            <li key={c.iso3}>
              <Link
                href={countryAuthoritiesPath(c.slug)}
                className="inline-block rounded-md border border-ink-200 bg-white px-3 py-1.5 text-sm font-medium text-forest-800 hover:bg-forest-50"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {facets.length > 0 && <AuthorityFilters facets={facets} />}

      {levels.map((level) => {
        const inLevel = listed.filter((a) => a.governmentLevel === level);
        return (
          <section key={level} data-authority-group="" className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {humanizeToken(level)}
              <span className="ml-2 text-sm font-normal text-ink-500">
                {inLevel.length}
              </span>
            </h2>
            <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
              {inLevel.map((a) => {
                const hasPage = published.has(a.slug);
                const country = a.countryCode
                  ? countryName(a.countryCode)
                  : 'Supranational';
                const profile = a.countryCode
                  ? getProfileByCode(a.countryCode)
                  : undefined;
                return (
                  <li
                    key={a.id}
                    data-authority-row=""
                    data-country={country}
                    data-level={humanizeToken(a.governmentLevel)}
                    data-type={humanizeToken(a.authorityType)}
                    data-responsibility={[
                      ...new Set(
                        a.responsibilities.map((r) => humanizeToken(r.area)),
                      ),
                    ].join('|')}
                    className="py-3"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-medium text-ink-900">
                        {hasPage ? (
                          <Link
                            href={authorityPath(a.slug)}
                            className="text-forest-800 hover:underline"
                          >
                            {a.officialName}
                          </Link>
                        ) : (
                          a.officialName
                        )}
                        {a.shortName && (
                          <span className="ml-2 text-sm text-ink-500">
                            {a.shortName}
                          </span>
                        )}
                      </p>
                      <span className="text-xs text-ink-500">
                        {a.jurisdictionName} · {humanizeToken(a.authorityType)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink-600">{a.summary}</p>
                    <p className="mt-1 text-xs">
                      <a
                        href={a.officialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-700 underline-offset-2 hover:underline"
                      >
                        Official website
                      </a>
                      {profile && (
                        <Link
                          href={countryPath(profile.slug)}
                          className="ml-3 text-ink-500 hover:underline"
                        >
                          {country}
                        </Link>
                      )}
                      {!hasPage && (
                        <span className="ml-3 text-ink-500">
                          Verified directory record
                        </span>
                      )}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </Container>
  );
}
