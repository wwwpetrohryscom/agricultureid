import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { countryPath } from '@/lib/geo/registry';
import { jurisdictionsForCountry } from '@/lib/jurisdictions/registry';
import {
  AUTHORITY_VIEW_COUNTRIES,
  countryAuthoritiesPath,
  subnationalAuthoritiesByJurisdiction,
  publishedAuthorities,
  authorityPath,
  authoritiesForCountry,
  humanizeToken,
  AUTHORITIES_HUB_PATH,
} from '@/lib/authorities/registry';
import { AuthorityNonAffiliationNotice } from '@/components/authorities/AuthorityNonAffiliationNotice';

type Params = { params: Promise<{ country: string }> };

/**
 * Country-scoped authority view.
 *
 * This route is the reason a jurisdiction with no `RegionProfile` is still
 * discoverable: it lists every canonical jurisdiction of the country, whether
 * or not that jurisdiction has a rich agricultural profile, and links each
 * verified authority. Directory-only records appear here with their official
 * link — this is the real page search points them at instead of inventing a
 * detail route for them.
 */
export function generateStaticParams() {
  return AUTHORITY_VIEW_COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country } = await params;
  const c = AUTHORITY_VIEW_COUNTRIES.find((x) => x.slug === country);
  if (!c) return {};
  const total = authoritiesForCountry(c.iso3).length;
  return buildMetadata({
    title: `Agricultural Authorities in ${c.name}`,
    description: `Verified official agricultural authorities across ${c.name} — ${total} bodies listed by jurisdiction, each with its official website and the evidence it was verified against.`,
    path: countryAuthoritiesPath(c.slug),
  });
}

export default async function CountryAuthoritiesPage({ params }: Params) {
  const { country } = await params;
  const c = AUTHORITY_VIEW_COUNTRIES.find((x) => x.slug === country);
  if (!c) notFound();

  const jurisdictions = jurisdictionsForCountry(c.iso3);
  const byJurisdiction = subnationalAuthoritiesByJurisdiction(c.iso3);
  const published = new Set(publishedAuthorities().map((a) => a.slug));
  const national = authoritiesForCountry(c.iso3).filter(
    (a) => !a.jurisdictionId,
  );

  // Group by jurisdiction kind so provinces and territories read distinctly,
  // derived from the registry rather than hardcoded per country.
  const kinds = [...new Set(jurisdictions.map((j) => j.kind))];
  const covered = jurisdictions.filter(
    (j) => (byJurisdiction.get(j.id) ?? []).length > 0,
  );

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: `Agricultural Authorities in ${c.name}`,
            description: `Official agricultural authorities across ${c.name}, by jurisdiction.`,
            path: countryAuthoritiesPath(c.slug),
          }),
          breadcrumbSchema([
            { name: 'Agricultural Authorities', path: AUTHORITIES_HUB_PATH },
            { name: c.name, path: countryAuthoritiesPath(c.slug) },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={AUTHORITIES_HUB_PATH} className="hover:underline">
          Agricultural Authorities
        </Link>
        <span className="mx-2">/</span>
        <Link href={countryPath(c.slug)} className="hover:underline">
          {c.name}
        </Link>
      </nav>

      <header className="mt-3">
        <h1 className="font-serif text-3xl text-forest-950 lg:text-4xl">
          Agricultural Authorities in {c.name}
        </h1>
        <p className="mt-3 max-w-3xl text-ink-700">
          Official public bodies responsible for agriculture, listed by
          jurisdiction. {covered.length} of {jurisdictions.length} jurisdictions
          currently have a verified authority; the rest are listed so coverage
          gaps stay visible rather than looking like they do not exist.
        </p>
      </header>

      <AuthorityNonAffiliationNotice />

      {national.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-xl text-forest-900">
            National and federal
          </h2>
          <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
            {national.map((a) => (
              <AuthorityRow key={a.id} a={a} published={published} />
            ))}
          </ul>
        </section>
      )}

      {kinds.map((kind) => {
        const group = jurisdictions.filter((j) => j.kind === kind);
        if (group.length === 0) return null;
        return (
          <section key={kind} className="mt-10">
            <h2 className="font-serif text-xl capitalize text-forest-900">
              {kind === 'state'
                ? 'States'
                : kind === 'province'
                  ? 'Provinces'
                  : 'Territories'}
            </h2>
            <ul className="mt-3 divide-y divide-ink-100 border-y border-ink-100">
              {group.map((j) => {
                const auths = byJurisdiction.get(j.id) ?? [];
                return (
                  <li key={j.id} className="py-3">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-medium text-ink-900">{j.name}</span>
                      <span className="text-xs uppercase tracking-wide text-ink-400">
                        {j.id}
                      </span>
                    </div>
                    {auths.length === 0 ? (
                      <p className="mt-1 text-sm text-ink-500">
                        Authority research pending — no verified authority
                        published yet.
                      </p>
                    ) : (
                      <ul className="mt-1 space-y-1">
                        {auths.map((a) => {
                          const hasProfile = published.has(a.slug);
                          return (
                            <li key={a.id} className="text-sm">
                              {hasProfile ? (
                                <Link
                                  href={authorityPath(a.slug)}
                                  className="font-medium text-forest-800 hover:underline"
                                >
                                  {a.officialName}
                                </Link>
                              ) : (
                                <span className="font-medium text-ink-800">
                                  {a.officialName}
                                </span>
                              )}
                              <span className="ml-2 text-xs text-ink-500">
                                {humanizeToken(a.authorityType)}
                                {!hasProfile && ' · directory record'}
                              </span>
                              <a
                                href={a.officialWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-xs text-forest-700 underline-offset-2 hover:underline"
                              >
                                Official site
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      <p className="mt-10 text-sm">
        <Link
          href={AUTHORITIES_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          ← All agricultural authorities
        </Link>
      </p>
    </Container>
  );
}

function AuthorityRow({
  a,
  published,
}: {
  a: ReturnType<typeof authoritiesForCountry>[number];
  published: Set<string>;
}) {
  const hasProfile = published.has(a.slug);
  return (
    <li className="py-3">
      <p className="font-medium text-ink-900">
        {hasProfile ? (
          <Link
            href={authorityPath(a.slug)}
            className="text-forest-800 hover:underline"
          >
            {a.officialName}
          </Link>
        ) : (
          a.officialName
        )}
        <span className="ml-2 text-xs text-ink-500">
          {humanizeToken(a.governmentLevel)} · {humanizeToken(a.authorityType)}
        </span>
      </p>
      <p className="mt-0.5 text-sm text-ink-600">{a.summary}</p>
    </li>
  );
}
