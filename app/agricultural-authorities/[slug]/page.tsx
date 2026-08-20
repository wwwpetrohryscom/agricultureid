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
  publishedAuthorities,
  publishedAuthorityBySlug,
  authorityPath,
  humanizeToken,
  AUTHORITIES_HUB_PATH,
} from '@/lib/authorities/registry';
import { AuthorityNonAffiliationNotice } from '@/components/authorities/AuthorityNonAffiliationNotice';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedAuthorities().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = publishedAuthorityBySlug(slug);
  if (!a) return {};
  return buildMetadata({
    // Exact official name first, then a plain jurisdiction qualifier. No
    // keyword stacking — the name is the query people actually use.
    title: `${a.officialName} — Agriculture Authority in ${a.jurisdictionName}`,
    description:
      a.seo?.description ??
      `${a.officialName} is the ${humanizeToken(a.authorityType).toLowerCase()} for agriculture in ${a.jurisdictionName}. Verified official website, remit and sources.`,
    path: authorityPath(a.slug),
  });
}

export default async function AuthorityPage({ params }: Params) {
  const { slug } = await params;
  const a = publishedAuthorityBySlug(slug);
  if (!a) notFound();

  const profile = a.countryCode ? getProfileByCode(a.countryCode) : undefined;

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: a.officialName,
            description: a.summary,
            path: authorityPath(a.slug),
          }),
          breadcrumbSchema([
            { name: 'Agricultural Authorities', path: AUTHORITIES_HUB_PATH },
            { name: a.officialName, path: authorityPath(a.slug) },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={AUTHORITIES_HUB_PATH} className="hover:underline">
          Agricultural Authorities
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-700">{a.jurisdictionName}</span>
      </nav>

      <header className="mt-3">
        <h1 className="font-serif text-3xl text-forest-950 lg:text-4xl">
          {a.officialName}
        </h1>
        {a.shortName && (
          <p className="mt-1 text-lg text-ink-600">{a.shortName}</p>
        )}
        <p className="mt-4 max-w-3xl text-ink-700">{a.summary}</p>
      </header>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Fact label="Jurisdiction">
          {profile ? (
            <Link
              href={countryPath(profile.slug)}
              className="text-forest-700 hover:underline"
            >
              {a.jurisdictionName}
            </Link>
          ) : (
            a.jurisdictionName
          )}
        </Fact>
        <Fact label="Government level">{humanizeToken(a.governmentLevel)}</Fact>
        <Fact label="Authority type">{humanizeToken(a.authorityType)}</Fact>
        <Fact label="Status">{humanizeToken(a.authorityStatus)}</Fact>
      </dl>

      <p className="mt-4">
        <a
          href={a.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-forest-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-900"
        >
          Visit the official website
        </a>
        <span className="ml-3 break-all text-xs text-ink-500">
          {a.officialWebsite}
        </span>
      </p>

      {a.localLanguageNames && a.localLanguageNames.length > 0 && (
        <Section heading="Official name in local language">
          <ul className="space-y-1 text-ink-700">
            {a.localLanguageNames.map((n) => (
              <li key={n.lang}>
                <span className="text-xs uppercase text-ink-500">{n.lang}</span>{' '}
                {n.name}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section heading="Responsibilities">
        <p className="mb-3 text-sm text-ink-600">
          Each item below is recorded from the authority’s own published
          material, not inferred from its name.
        </p>
        <ul className="divide-y divide-ink-100 border-y border-ink-100">
          {a.responsibilities.map((r) => {
            const src = getSource(r.sourceId);
            return (
              <li key={r.area} className="py-3">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-medium text-ink-900">
                    {humanizeToken(r.area)}
                  </span>
                  {r.statutory && (
                    <span className="rounded-full bg-forest-100 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-forest-800">
                      Statutory
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ink-700">{r.note}</p>
                {src && (
                  <p className="mt-1 text-xs text-ink-500">
                    Source: {src.title}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      {a.registries && a.registries.length > 0 && (
        <Section heading="Registries and datasets">
          <ul className="space-y-3">
            {a.registries.map((g) => (
              <li key={g.url}>
                <a
                  href={g.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest-700 hover:underline"
                >
                  {g.name}
                </a>
                <span className="ml-2 text-xs uppercase text-ink-500">
                  {g.kind}
                </span>
                {g.note && (
                  <p className="mt-0.5 text-sm text-ink-600">{g.note}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {a.services && a.services.length > 0 && (
        <Section heading="Official services">
          <ul className="space-y-3">
            {a.services.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest-700 hover:underline"
                >
                  {s.name}
                </a>
                {s.note && (
                  <p className="mt-0.5 text-sm text-ink-600">{s.note}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section heading="Sources and verification">
        <ul className="space-y-4">
          {a.verification.map((v) => (
            <li key={v.url} className="rounded-lg border border-ink-100 p-4">
              <p className="text-sm text-ink-700">{v.evidenceNote}</p>
              <p className="mt-2 break-all text-xs text-ink-500">
                Verified {v.verifiedAt} against{' '}
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {v.url}
                </a>{' '}
                · domain classification: {humanizeToken(v.domainVerification)}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {a.limitations && a.limitations.length > 0 && (
        <Section heading="Important limitations">
          <ul className="list-disc space-y-2 pl-5 text-ink-700">
            {a.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Section>
      )}

      <AuthorityNonAffiliationNotice />

      <p className="mt-6 text-sm">
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
