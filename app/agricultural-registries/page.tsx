import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { countryName } from '@/lib/geo/registry';
import {
  listedRegistries,
  publishedRegistries,
  registryPath,
} from '@/lib/registries/registry';
import { humanizeToken } from '@/lib/authorities/registry';
import { AuthorityNonAffiliationNotice } from '@/components/authorities/AuthorityNonAffiliationNotice';
import { RegistryFilters } from '@/components/registries/RegistryFilters';

const TITLE = 'Official Agricultural Registries & Databases';
const PATH = '/agricultural-registries';

export const metadata: Metadata = buildMetadata({
  title: 'Official Agricultural Registries & Databases',
  description:
    'A verified directory of official agricultural registries and databases — pesticide and variety registers, organic operator databases, plant-health and statistics systems — with what each contains, who runs it, and how to search it.',
  path: PATH,
});

export default function RegistriesPage() {
  const listed = listedRegistries();
  const published = new Set(publishedRegistries().map((r) => r.slug));

  const facetOf = (values: string[]) => {
    const counts = new Map<string, number>();
    for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
    return [...counts]
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value));
  };

  const facets = [
    {
      key: 'jurisdiction',
      label: 'Jurisdiction',
      values: facetOf(
        listed.map((r) =>
          r.countryCode ? countryName(r.countryCode) : r.jurisdictionName,
        ),
      ),
    },
    {
      key: 'type',
      label: 'Registry type',
      values: facetOf(listed.map((r) => humanizeToken(r.registryType))),
    },
    {
      key: 'access',
      label: 'Access',
      values: facetOf(listed.map((r) => humanizeToken(r.accessType))),
    },
  ].filter((f) => f.values.length > 1);

  // Group by registry type — the axis a reader actually navigates by ("where
  // do I check a pesticide authorisation?") rather than by country.
  const types = [...new Set(listed.map((r) => r.registryType))].sort((a, b) =>
    humanizeToken(a).localeCompare(humanizeToken(b)),
  );

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Verified directory of official agricultural registries and databases.',
          path: PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Official systems you can search yourself — verified against the systems themselves."
      >
        <p>
          Each entry records what the system actually contains, which authority
          administers it where that is established, and whether it can be
          searched, downloaded or queried programmatically. Access
          characteristics are read from the system, never assumed: an API is
          only recorded where a public or documented one exists, and update
          frequency stays <em>unknown</em> unless the operator publishes it.
        </p>
        <p>
          One logical public system is one entry. A landing page, a search form
          and a download endpoint belonging to the same register are recorded as
          that register, not as three.
        </p>
      </PageIntro>

      <AuthorityNonAffiliationNotice />

      {facets.length > 0 && <RegistryFilters facets={facets} />}

      {types.map((type) => {
        const inType = listed.filter((r) => r.registryType === type);
        return (
          <section key={type} data-registry-group="" className="mt-10">
            <h2 className="font-serif text-xl text-forest-900">
              {humanizeToken(type)}
              <span className="ml-2 text-sm font-normal text-ink-500">
                {inType.length}
              </span>
            </h2>
            <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
              {inType.map((r) => {
                const hasPage = published.has(r.slug);
                const jur = r.countryCode
                  ? countryName(r.countryCode)
                  : r.jurisdictionName;
                return (
                  <li
                    key={r.id}
                    data-registry-row=""
                    data-jurisdiction={jur}
                    data-type={humanizeToken(r.registryType)}
                    data-access={humanizeToken(r.accessType)}
                    className="py-3"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-medium text-ink-900">
                        {hasPage ? (
                          <Link
                            href={registryPath(r.slug)}
                            className="text-forest-800 hover:underline"
                          >
                            {r.officialName}
                          </Link>
                        ) : (
                          r.officialName
                        )}
                        {r.shortName && (
                          <span className="ml-2 text-sm text-ink-500">
                            {r.shortName}
                          </span>
                        )}
                      </p>
                      <span className="text-xs text-ink-500">{jur}</span>
                    </div>
                    <p className="mt-1 text-sm text-ink-600">{r.scope[0]}</p>
                    <p className="mt-1 flex flex-wrap gap-x-3 text-xs">
                      <a
                        href={r.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-700 underline-offset-2 hover:underline"
                      >
                        Official system
                      </a>
                      {r.searchable && (
                        <span className="text-ink-500">Searchable</span>
                      )}
                      {r.downloadable && (
                        <span className="text-ink-500">Downloadable</span>
                      )}
                      {r.loginRequired && (
                        <span className="text-ink-500">Account required</span>
                      )}
                      {!hasPage && (
                        <span className="text-ink-500">Directory record</span>
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
