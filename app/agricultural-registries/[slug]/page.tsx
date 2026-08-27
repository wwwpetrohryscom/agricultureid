import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { countryPath, getProfileByCode } from '@/lib/geo/registry';
import { getSource } from '@/lib/sources/registry';
import {
  publishedRegistries,
  publishedRegistryBySlug,
  registryPath,
  REGISTRIES_HUB_PATH,
} from '@/lib/registries/registry';
import {
  authorityById,
  authorityPath,
  publishedAuthorities,
  humanizeToken,
} from '@/lib/authorities/registry';
import { AuthorityNonAffiliationNotice } from '@/components/authorities/AuthorityNonAffiliationNotice';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedRegistries().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const r = publishedRegistryBySlug(slug);
  if (!r) return {};
  return buildMetadata({
    // Official name first, then a plain type + jurisdiction qualifier.
    title: `${r.officialName} — ${humanizeToken(r.registryType)} in ${r.jurisdictionName}`,
    description:
      r.seo?.description ??
      `${r.officialName} is an official ${humanizeToken(r.registryType).toLowerCase()} for ${r.jurisdictionName}. ${r.scope[0] ?? ''}`,
    path: registryPath(r.slug),
  });
}

export default async function RegistryPage({ params }: Params) {
  const { slug } = await params;
  const r = publishedRegistryBySlug(slug);
  if (!r) notFound();

  const profile = r.countryCode ? getProfileByCode(r.countryCode) : undefined;
  const publishedAuthSlugs = new Set(publishedAuthorities().map((a) => a.slug));
  const authorities = r.responsibleAuthorityIds
    .map((id) => authorityById(id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: r.officialName,
            description: r.scope[0] ?? r.officialName,
            path: registryPath(r.slug),
          }),
          breadcrumbSchema([
            { name: 'Agricultural Registries', path: REGISTRIES_HUB_PATH },
            { name: r.officialName, path: registryPath(r.slug) },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={REGISTRIES_HUB_PATH} className="hover:underline">
          Agricultural Registries
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-700">{r.jurisdictionName}</span>
      </nav>

      <header className="mt-3">
        <h1 className="font-serif text-3xl text-forest-950 lg:text-4xl">
          {r.officialName}
        </h1>
        {r.shortName && (
          <p className="mt-1 text-lg text-ink-600">{r.shortName}</p>
        )}
      </header>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Fact label="Jurisdiction">
          {profile ? (
            <Link
              href={countryPath(profile.slug)}
              className="text-forest-700 hover:underline"
            >
              {r.jurisdictionName}
            </Link>
          ) : (
            r.jurisdictionName
          )}
        </Fact>
        <Fact label="Registry type">{humanizeToken(r.registryType)}</Fact>
        <Fact label="Access">{humanizeToken(r.accessType)}</Fact>
        <Fact label="Update frequency">
          {r.updateFrequency === 'unknown' ? (
            <span className="text-ink-500">Not documented</span>
          ) : (
            humanizeToken(r.updateFrequency)
          )}
        </Fact>
      </dl>

      <p className="mt-4">
        <a
          href={r.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-forest-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-900"
        >
          Open the official system
        </a>
        <span className="ml-3 break-all text-xs text-ink-500">
          {r.officialUrl}
        </span>
      </p>

      <Section heading="What this system contains">
        <ul className="list-disc space-y-1.5 pl-5 text-ink-700">
          {r.scope.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {r.coverageDescription && (
          <p className="mt-3 text-sm text-ink-600">{r.coverageDescription}</p>
        )}
      </Section>

      <Section heading="How you can use it">
        <ul className="space-y-1.5 text-ink-700">
          <li>Searchable: {r.searchable ? 'yes' : 'no'}</li>
          <li>Bulk download: {r.downloadable ? 'yes' : 'no'}</li>
          <li>
            Public API:{' '}
            {r.apiAvailable ? (
              'yes'
            ) : (
              <span className="text-ink-600">
                none documented — AgricultureID records an API only where a
                public or documented endpoint exists
              </span>
            )}
          </li>
          {r.loginRequired && (
            <li>An account is required to use this system.</li>
          )}
        </ul>
      </Section>

      {authorities.length > 0 && (
        <Section heading="Administered by">
          <ul className="space-y-2">
            {authorities.map((a) => (
              <li key={a.id}>
                {publishedAuthSlugs.has(a.slug) ? (
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
                  {a.jurisdictionName}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section heading="Sources and verification">
        <ul className="space-y-3">
          {r.verification.map((v) => {
            const src = getSource(v.sourceId);
            return (
              <li key={v.url} className="rounded-lg border border-ink-100 p-4">
                <p className="text-sm text-ink-700">{v.evidenceNote}</p>
                <p className="mt-2 break-all text-xs text-ink-500">
                  Verified {v.verifiedAt}
                  {src ? ` · ${src.title}` : ''}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      {r.limitations && r.limitations.length > 0 && (
        <Section heading="Important limitations">
          <ul className="list-disc space-y-2 pl-5 text-ink-700">
            {r.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Section>
      )}

      <AuthorityNonAffiliationNotice />

      <p className="mt-6 text-sm">
        <Link
          href={REGISTRIES_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          ← All agricultural registries
        </Link>
      </p>
    </Container>
  );
}

function Fact({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-ink-100 bg-white p-3">
      <dt className="text-xs uppercase tracking-wide text-ink-500">{label}</dt>
      <dd className="mt-1 text-sm text-ink-900">{children}</dd>
    </div>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl text-forest-900">{heading}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
