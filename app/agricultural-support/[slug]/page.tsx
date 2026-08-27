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
  publishedSupportPrograms,
  publishedSupportProgramBySlug,
  supportPath,
  SUPPORT_HUB_PATH,
} from '@/lib/support/registry';
import { SUPPORT_ELIGIBILITY_NOTICE } from '@/types/support';
import {
  authorityById,
  authorityPath,
  publishedAuthorities,
  humanizeToken,
} from '@/lib/authorities/registry';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedSupportPrograms().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = publishedSupportProgramBySlug(slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.officialName} — Agricultural Support in ${p.jurisdictionName}`,
    description: p.seo?.description ?? p.summary.slice(0, 200),
    path: supportPath(p.slug),
  });
}

export default async function SupportProgramPage({ params }: Params) {
  const { slug } = await params;
  const p = publishedSupportProgramBySlug(slug);
  if (!p) notFound();

  const profile = p.countryCode ? getProfileByCode(p.countryCode) : undefined;
  const publishedAuthSlugs = new Set(publishedAuthorities().map((a) => a.slug));

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: p.officialName,
            description: p.summary,
            path: supportPath(p.slug),
          }),
          breadcrumbSchema([
            { name: 'Agricultural Support', path: SUPPORT_HUB_PATH },
            { name: p.officialName, path: supportPath(p.slug) },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={SUPPORT_HUB_PATH} className="hover:underline">
          Agricultural Support
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-700">{p.jurisdictionName}</span>
      </nav>

      <header className="mt-3">
        <h1 className="font-serif text-3xl text-forest-950 lg:text-4xl">
          {p.officialName}
        </h1>
        <p className="mt-4 max-w-3xl text-ink-700">{p.summary}</p>
      </header>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Fact label="Jurisdiction">
          {profile ? (
            <Link
              href={countryPath(profile.slug)}
              className="text-forest-700 hover:underline"
            >
              {p.jurisdictionName}
            </Link>
          ) : (
            p.jurisdictionName
          )}
        </Fact>
        <Fact label="Programme type">{humanizeToken(p.programType)}</Fact>
        <Fact label="Status">{humanizeToken(p.status)}</Fact>
        <Fact label="Last verified">{p.lastVerifiedAt}</Fact>
      </dl>

      <p className="mt-4">
        <a
          href={p.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-forest-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-forest-900"
        >
          Official programme page
        </a>
        <span className="ml-3 break-all text-xs text-ink-500">
          {p.officialUrl}
        </span>
      </p>

      <Section heading="Who it is for">
        <ul className="flex flex-wrap gap-2">
          {p.beneficiaryTypes.map((b) => (
            <li
              key={b}
              className="rounded-full border border-ink-200 bg-white px-2.5 py-1 text-xs text-ink-700"
            >
              {humanizeToken(b)}
            </li>
          ))}
        </ul>
        {p.eligibilitySummary && (
          <p className="mt-3 text-ink-700">{p.eligibilitySummary}</p>
        )}
        <p className="mt-3 rounded-lg border border-olive-200 bg-olive-50/60 p-3 text-sm text-ink-700">
          {SUPPORT_ELIGIBILITY_NOTICE}
        </p>
      </Section>

      {p.applicationWindow ? (
        <Section heading="Application period">
          <p className="text-ink-700">
            {p.applicationWindow.opens && (
              <>Opens {p.applicationWindow.opens}. </>
            )}
            {p.applicationWindow.closes && (
              <>Closes {p.applicationWindow.closes}.</>
            )}
          </p>
        </Section>
      ) : (
        <Section heading="Application period">
          <p className="text-ink-600">
            Not established from the official page read during verification.
            Check the official programme page or the administering authority for
            current application periods.
          </p>
        </Section>
      )}

      {p.fundingAmounts && p.fundingAmounts.length > 0 && (
        <Section heading="Funding">
          <ul className="space-y-2 text-ink-700">
            {p.fundingAmounts.map((f, i) => (
              <li key={i}>
                <span className="font-medium">{humanizeToken(f.basis)}:</span>{' '}
                {f.value !== undefined && (
                  <>
                    {f.currency ? `${f.currency} ` : ''}
                    {f.value}
                    {f.unit ? ` ${f.unit}` : ''}
                  </>
                )}
                {f.note && <span className="text-ink-600"> — {f.note}</span>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section heading="Administered by">
        <ul className="space-y-2">
          {p.administeringAuthorityIds.map((aid) => {
            const a = authorityById(aid);
            if (!a) return null;
            return (
              <li key={aid}>
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
            );
          })}
        </ul>
      </Section>

      <Section heading="Sources and verification">
        <ul className="space-y-3">
          {p.verification.map((v) => {
            const src = getSource(v.sourceId);
            return (
              <li key={v.url} className="rounded-lg border border-ink-100 p-4">
                <p className="text-sm text-ink-700">{v.evidenceNote}</p>
                <p className="mt-2 text-xs text-ink-500">
                  Verified {v.verifiedAt}
                  {src ? ` · ${src.title}` : ''}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section heading="Important limitations">
        <ul className="list-disc space-y-2 pl-5 text-ink-700">
          {p.limitations.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Section>

      <p className="mt-8 text-sm">
        <Link
          href={SUPPORT_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          ← All agricultural support programmes
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
