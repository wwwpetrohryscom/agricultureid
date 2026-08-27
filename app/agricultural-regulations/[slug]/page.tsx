import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { getSource } from '@/lib/sources/registry';
import {
  publishedComplianceTopics,
  publishedComplianceTopicBySlug,
  compliancePath,
  REGULATIONS_HUB_PATH,
  COMPLIANCE_DISCLOSURE,
} from '@/lib/compliance/registry';
import {
  authorityById,
  authorityPath,
  publishedAuthorities,
  humanizeToken,
} from '@/lib/authorities/registry';
import {
  REGISTRIES,
  publishedRegistries,
  registryPath,
} from '@/lib/registries/registry';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedComplianceTopics().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const t = publishedComplianceTopicBySlug(slug);
  if (!t) return {};
  return buildMetadata({
    title: `${t.title} — Authorities, Registers & Official Sources`,
    description: t.seo?.description ?? t.summary.slice(0, 200),
    path: compliancePath(t.slug),
  });
}

const STATUS_LABEL: Record<string, string> = {
  required: 'Required',
  conditional: 'Conditional',
  recommended: 'Recommended',
  uncertain: 'Check the official source',
};

export default async function CompliancePage({ params }: Params) {
  const { slug } = await params;
  const t = publishedComplianceTopicBySlug(slug);
  if (!t) notFound();

  const publishedAuthSlugs = new Set(publishedAuthorities().map((a) => a.slug));
  const publishedRegSlugs = new Set(publishedRegistries().map((r) => r.slug));
  const registryById = new Map(REGISTRIES.map((r) => [r.id, r]));

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({
            name: t.title,
            description: t.summary,
            path: compliancePath(t.slug),
          }),
          breadcrumbSchema([
            { name: 'Agricultural Regulations', path: REGULATIONS_HUB_PATH },
            { name: t.title, path: compliancePath(t.slug) },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-ink-500">
        <Link href={REGULATIONS_HUB_PATH} className="hover:underline">
          Agricultural Regulations
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-700">{t.jurisdictionName}</span>
      </nav>

      <header className="mt-3">
        <h1 className="font-serif text-3xl text-forest-950 lg:text-4xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-3xl text-ink-700">{t.summary}</p>
        <p className="mt-2 text-sm text-ink-500">
          {t.jurisdictionName} · {humanizeToken(t.topicType)} · last verified{' '}
          {t.lastVerifiedAt}
        </p>
      </header>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-forest-900">What applies</h2>
        <ul className="mt-3 space-y-5">
          {t.requirements.map((r) => (
            <li key={r.id} className="rounded-lg border border-ink-100 p-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-medium text-ink-900">{r.title}</span>
                <span
                  className={
                    r.mandatoryStatus === 'required'
                      ? 'rounded-full bg-forest-100 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-forest-800'
                      : 'rounded-full border border-ink-200 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-600'
                  }
                >
                  {STATUS_LABEL[r.mandatoryStatus] ?? r.mandatoryStatus}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-700">{r.note}</p>

              {r.conditions && r.conditions.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Documented exceptions
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-ink-600">
                    {r.conditions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-3 text-xs text-ink-500">
                Applies to: {r.appliesTo.join('; ')}
              </p>

              {(r.registryIds ?? []).length > 0 && (
                <p className="mt-2 text-sm">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Check in:
                  </span>{' '}
                  {(r.registryIds ?? []).map((rid, i) => {
                    const reg = registryById.get(rid);
                    if (!reg) return null;
                    return (
                      <span key={rid}>
                        {i > 0 && ', '}
                        {publishedRegSlugs.has(reg.slug) ? (
                          <Link
                            href={registryPath(reg.slug)}
                            className="text-forest-700 hover:underline"
                          >
                            {reg.officialName}
                          </Link>
                        ) : (
                          reg.officialName
                        )}
                      </span>
                    );
                  })}
                </p>
              )}

              <p className="mt-2 text-xs text-ink-500">
                Source:{' '}
                {r.officialSourceIds
                  .map((sid) => getSource(sid)?.title ?? sid)
                  .join('; ')}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-forest-900">
          Who regulates this
        </h2>
        <ul className="mt-3 space-y-2">
          {t.responsibleAuthorityIds.map((aid) => {
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
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-forest-900">Official sources</h2>
        <ul className="mt-3 space-y-2">
          {t.officialSources.map((sid) => {
            const s = getSource(sid);
            if (!s) return null;
            return (
              <li key={sid} className="text-sm">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-700 hover:underline"
                >
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-forest-900">
          Important limitations
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-700">
          {t.limitations.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <aside
        className="mt-8 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="Scope of this information"
      >
        {COMPLIANCE_DISCLOSURE}
      </aside>

      <p className="mt-6 text-sm">
        <Link
          href={REGULATIONS_HUB_PATH}
          className="text-forest-700 hover:underline"
        >
          ← All agricultural regulations
        </Link>
      </p>
    </Container>
  );
}
