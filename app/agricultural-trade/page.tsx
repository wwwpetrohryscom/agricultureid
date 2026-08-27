import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageIntro } from '@/components/content/PageIntro';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { buildMetadata } from '@/lib/seo/metadata';
import { TRADE_HUB_PATH } from '@/lib/trade/paths';
import {
  CERTIFICATE_INSTRUMENT,
  RESERVED_CERTIFICATE_TYPES,
  TRADE_CAVEAT,
  TREATMENT_CAVEAT,
} from '@/types/trade-requirement';
import {
  TRADE_REQUIREMENTS,
  jurisdictionsWithRequirements,
  unresolvedConditionCount,
} from '@/lib/trade/registry';
import { REGISTRIES } from '@/data/registries';
import { AUTHORITIES } from '@/data/authorities';
import { getSource } from '@/lib/sources/registry';

const TITLE = 'Agricultural Border Requirements';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Which authority controls an agricultural movement across a border, and which official system decides what applies to it.',
  path: TRADE_HUB_PATH,
});

export default function AgriculturalTradePage() {
  const byJurisdiction = jurisdictionsWithRequirements();
  const registryName = new Map(REGISTRIES.map((r) => [r.id, r]));
  const authorityName = new Map(AUTHORITIES.map((a) => [a.id, a.officialName]));
  const certsUsed = [
    ...new Set(
      TRADE_REQUIREMENTS.map((r) => r.certificateType).filter(Boolean),
    ),
  ] as (keyof typeof CERTIFICATE_INSTRUMENT)[];

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Official systems and authorities that decide agricultural import and export conditions.',
          path: TRADE_HUB_PATH,
        })}
      />

      <PageIntro
        title={TITLE}
        lead="Which authority controls an agricultural movement, and which official system decides what applies to it."
      >
        <p>
          What an official system requires for a particular consignment depends
          on the commodity, its origin, the pest status of the production area,
          the intended use and any treatment applied. Australia&rsquo;s BICON,
          Canada&rsquo;s AIRS and the United States&rsquo; PExD are decision
          trees for exactly that reason: they ask a series of questions because
          the answer genuinely depends on them.
        </p>
        <p>
          So this page does not answer for them. It names the system that
          decides, the authority that operates it, and — for each — the
          conditions that system resolves and AgricultureID deliberately does
          not. A flattened rule would lose the conditions that decide whether it
          is true, and a reader acting on the flattened version can have a
          consignment refused, or skip a requirement that did apply.
        </p>
        <p>
          For how much of a commodity actually moved, see{' '}
          <Link
            href="/agricultural-markets"
            className="text-forest-800 hover:underline"
          >
            trade statistics
          </Link>
          . That is a different question with a different source.
        </p>
      </PageIntro>

      <section className="mt-8" aria-label="Summary">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['Jurisdictions', byJurisdiction.length],
            ['Official systems named', TRADE_REQUIREMENTS.length],
            ['Conditions left to them', unresolvedConditionCount()],
            ['Rules stated flatly', 0],
          ].map(([label, value]) => (
            <div
              key={String(label)}
              className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-3"
            >
              <dt className="text-xs uppercase tracking-wide text-ink-500">
                {label}
              </dt>
              <dd className="mt-1 font-serif text-2xl text-forest-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-sm text-ink-600">
          Every record here points at a system rather than stating a rule. None
          of the conditions examined for this wave was unconditional, and a
          record that stated one would have to carry the operative text making
          it so.
        </p>
      </section>

      {byJurisdiction.map((j) => (
        <section key={j.key} className="mt-10" aria-label={j.name}>
          <h2 className="font-serif text-xl text-forest-900">{j.name}</h2>
          <div className="mt-3 space-y-4">
            {j.requirements.map((r) => (
              <article
                key={r.id}
                className="rounded-lg border border-ink-100 bg-[#FAFAF7] p-4"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-medium text-ink-900">{r.title}</h3>
                  <span className="rounded-full border border-ink-200 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-600">
                    {r.direction}
                  </span>
                  <span className="rounded-full border border-ink-200 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide text-ink-600">
                    {r.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-700">{r.summary}</p>

                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    What the official system decides, and this page does not
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-ink-700">
                    {r.unresolvedConditions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>

                <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink-500">
                      Official system
                    </dt>
                    <dd className="text-ink-700">
                      {r.registryIds.length ? (
                        r.registryIds.map((id) => {
                          const reg = registryName.get(id);
                          return reg ? (
                            <span key={id} className="block">
                              <a
                                href={reg.officialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-forest-800 hover:underline"
                              >
                                {reg.officialName}
                              </a>
                            </span>
                          ) : null;
                        })
                      ) : (
                        <span className="text-ink-500">
                          Published as government guidance rather than a system
                        </span>
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink-500">
                      Authority
                    </dt>
                    <dd className="text-ink-700">
                      {r.authorityIds.length
                        ? r.authorityIds
                            .map((a) => authorityName.get(a) ?? a)
                            .join(', ')
                        : 'Not recorded in this corpus for this jurisdiction'}
                    </dd>
                  </div>
                  {r.certificateType ? (
                    <div className="sm:col-span-2">
                      <dt className="text-xs uppercase tracking-wide text-ink-500">
                        Document
                      </dt>
                      <dd className="text-ink-700">
                        {CERTIFICATE_INSTRUMENT[r.certificateType].label}
                        <span className="block text-xs text-ink-500">
                          {CERTIFICATE_INSTRUMENT[r.certificateType].instrument}
                        </span>
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <ul className="mt-3 list-disc space-y-0.5 pl-5 text-xs text-ink-500">
                  {r.limitations.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                  <li>
                    Verified {r.lastVerifiedAt}
                    {r.officialSourceIds
                      .map((s) => getSource(s)?.title)
                      .filter(Boolean)
                      .map((t) => ` · ${t}`)
                      .join('')}
                  </li>
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-10" aria-label="Certificates">
        <h2 className="font-serif text-xl text-forest-900">
          The documents are not interchangeable
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">
          A phytosanitary certificate attests plant health under the
          International Plant Protection Convention. An export health
          certificate attests animal health under different law, issued by a
          different authority, on a different form. Treating them as one
          document sends a reader to the wrong authority with the wrong
          paperwork.
        </p>
        <dl className="mt-3 space-y-3 text-sm">
          {certsUsed.map((c) => (
            <div key={c}>
              <dt className="font-medium text-ink-900">
                {CERTIFICATE_INSTRUMENT[c].label}
              </dt>
              <dd className="text-ink-700">
                Attests {CERTIFICATE_INSTRUMENT[c].attests}.
                <span className="block text-xs text-ink-500">
                  {CERTIFICATE_INSTRUMENT[c].instrument}
                </span>
              </dd>
            </div>
          ))}
          {RESERVED_CERTIFICATE_TYPES.map((r) => (
            <div key={r.certificateType}>
              <dt className="font-medium text-ink-900">
                {CERTIFICATE_INSTRUMENT[r.certificateType].label}
                <span className="ml-2 text-xs font-normal text-ink-500">
                  defined, not attached to a requirement here
                </span>
              </dt>
              <dd className="text-ink-700">{r.why}</dd>
            </div>
          ))}
        </dl>
      </section>

      <aside
        className="mt-10 rounded-lg border border-olive-200 bg-olive-50/60 p-4 text-sm text-ink-700"
        aria-label="How to read this page"
      >
        <p>{TRADE_CAVEAT}</p>
        <p className="mt-2">{TREATMENT_CAVEAT}</p>
      </aside>
    </Container>
  );
}
