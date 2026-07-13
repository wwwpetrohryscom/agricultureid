import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { contentPath, resolveRef } from '@/lib/content/registry';
import { getSource } from '@/lib/sources/registry';
import type {
  BreedContent,
  ConservationStatus,
  CultivarContent,
  RegistrationStatus,
  RegistryReference,
} from '@/types/content';

const STATUS_LABEL: Record<RegistrationStatus, string> = {
  listed: 'Listed',
  registered: 'Registered',
  protected: 'Protected',
  expired: 'Protection expired',
  withdrawn: 'Withdrawn',
  historical: 'Historical',
  conservation: 'Conservation',
  unknown: 'Not established',
};

const CONSERVATION_LABEL: Record<ConservationStatus, string> = {
  'not-at-risk': 'Not at risk',
  vulnerable: 'Vulnerable',
  endangered: 'Endangered',
  'endangered-maintained': 'Endangered (maintained)',
  critical: 'Critical',
  'critical-maintained': 'Critical (maintained)',
  extinct: 'Extinct',
  unknown: 'Not established',
};

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-0.5 py-2 sm:grid-cols-[10rem_1fr] sm:gap-3">
      <dt className="text-sm font-semibold text-ink-700">{label}</dt>
      <dd className="text-sm leading-6 text-ink-700">{children}</dd>
    </div>
  );
}

function RegistryList({ refs }: { refs: RegistryReference[] }) {
  return (
    <ul className="space-y-1.5">
      {refs.map((r, i) => {
        const src = r.sourceId ? getSource(r.sourceId) : undefined;
        const href = r.url ?? src?.url;
        const label = r.registry;
        return (
          <li key={i} className="leading-6">
            {href ? (
              <a
                href={href}
                className="font-medium text-olive-800 underline decoration-olive-300 underline-offset-2 hover:text-olive-900"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {label}
              </a>
            ) : (
              <span className="font-medium">{label}</span>
            )}
            {r.jurisdiction && (
              <span className="text-ink-500"> · {r.jurisdiction}</span>
            )}
            {r.status && (
              <span className="text-ink-500"> · {STATUS_LABEL[r.status]}</span>
            )}
            {r.asOf && <span className="text-ink-500"> · as of {r.asOf}</span>}
            {r.note && (
              <span className="block text-xs text-ink-500">{r.note}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ClaimList({ items, caution }: { items: string[]; caution: string }) {
  return (
    <div>
      <ul className="list-disc space-y-1 pl-5">
        {items.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <p className="mt-1.5 text-xs italic text-ink-500">{caution}</p>
    </div>
  );
}

/**
 * Structured facts panel for a cultivar or breed. Renders the typed sub-entity
 * fields (parent link, origin, registry status/references, adaptation, and
 * source-attributed trait claims) that the generic article body does not. The
 * status-semantics caveat is always shown so listing/protection is never read
 * as availability or recommendation.
 */
export function SubEntityPanel({
  item,
}: {
  item: CultivarContent | BreedContent;
}) {
  const isCultivar = item.contentType === 'cultivar';
  const parentRef = isCultivar ? item.parentCrop : item.parentLivestock;
  const parent = resolveRef(parentRef);
  const parentLabel = parent?.title ?? parentRef.slug;
  const parentHref = contentPath(parentRef.type, parentRef.slug);

  return (
    <section
      aria-labelledby="record-heading"
      className="mt-8 rounded-card border border-ink-100 bg-white p-5 shadow-sm"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h2
          id="record-heading"
          className="font-serif text-lg font-bold text-ink-900"
        >
          Record
        </h2>
        <Badge tone="olive">
          {isCultivar ? 'Cultivar / variety' : 'Livestock breed'}
        </Badge>
      </div>

      <dl className="mt-3 divide-y divide-ink-100">
        <Row label={isCultivar ? 'Variety of' : 'Breed of'}>
          <Link
            href={parentHref}
            className="font-medium text-olive-800 underline decoration-olive-300 underline-offset-2 hover:text-olive-900"
          >
            {parentLabel}
          </Link>
        </Row>

        {isCultivar && item.botanicalTaxon && (
          <Row label="Botanical taxon">
            <span className="italic">{item.botanicalTaxon}</span>
          </Row>
        )}
        {!isCultivar && item.species && (
          <Row label="Species">{item.species}</Row>
        )}

        {isCultivar && item.cultivarType && (
          <Row label="Type">{item.cultivarType}</Row>
        )}
        {!isCultivar && item.breedType && (
          <Row label="Type">{item.breedType}</Row>
        )}
        {isCultivar && item.breedingType && (
          <Row label="Breeding method">{item.breedingType}</Row>
        )}

        {(item.originCountry || item.originRegion) && (
          <Row label="Origin">
            {[item.originRegion, item.originCountry].filter(Boolean).join(', ')}
          </Row>
        )}
        {isCultivar && item.yearReleased && (
          <Row label="Released">{item.yearReleased}</Row>
        )}
        {isCultivar && item.breederOrInstitution && (
          <Row label="Breeder / institution">{item.breederOrInstitution}</Row>
        )}

        {isCultivar ? (
          <Row label="Registry status">
            <span className="font-medium">
              {STATUS_LABEL[item.registrationStatus]}
            </span>
            {item.registrationJurisdiction && (
              <span className="text-ink-500">
                {' '}
                · {item.registrationJurisdiction}
              </span>
            )}
            {item.registrationAsOf && (
              <span className="text-ink-500">
                {' '}
                · as of {item.registrationAsOf}
              </span>
            )}
            {item.protectedStatus && (
              <span className="block text-xs text-ink-500">
                {item.protectedStatus}
              </span>
            )}
          </Row>
        ) : (
          item.breedStatus && (
            <Row label="Recognition">{STATUS_LABEL[item.breedStatus]}</Row>
          )
        )}

        {!isCultivar && item.conservationStatus && (
          <Row label="Conservation status">
            {CONSERVATION_LABEL[item.conservationStatus]}
            <span className="block text-xs text-ink-500">
              Reported per source and date (e.g. FAO DAD-IS); not a fixed
              property of the breed.
            </span>
          </Row>
        )}

        {item.registryReferences && item.registryReferences.length > 0 && (
          <Row label="Registries">
            <RegistryList refs={item.registryReferences} />
          </Row>
        )}

        {(item.climateAdaptation ||
          (item.contentType === 'cultivar' && item.soilAdaptation)) && (
          <Row label="Adaptation">
            {[
              item.climateAdaptation,
              item.contentType === 'cultivar' ? item.soilAdaptation : undefined,
            ]
              .filter(Boolean)
              .join(' ')}
          </Row>
        )}

        {isCultivar && item.intendedUse && item.intendedUse.length > 0 && (
          <Row label="Intended use">{item.intendedUse.join(', ')}</Row>
        )}
        {!isCultivar && item.primaryUses && item.primaryUses.length > 0 && (
          <Row label="Primary uses">{item.primaryUses.join(', ')}</Row>
        )}

        {isCultivar &&
          item.diseaseResistanceClaims &&
          item.diseaseResistanceClaims.length > 0 && (
            <Row label="Disease resistance">
              <ClaimList
                items={item.diseaseResistanceClaims}
                caution="Source-attributed claims for specific conditions; resistance can break down and is not a guarantee under all pathogen populations or environments."
              />
            </Row>
          )}
        {isCultivar &&
          item.pestResistanceClaims &&
          item.pestResistanceClaims.length > 0 && (
            <Row label="Pest resistance">
              <ClaimList
                items={item.pestResistanceClaims}
                caution="Source-attributed claims; efficacy varies with pest biotype, pressure, and region."
              />
            </Row>
          )}
        {isCultivar && item.yieldCharacteristics && (
          <Row label="Yield notes">
            {item.yieldCharacteristics}
            <span className="mt-1 block text-xs italic text-ink-500">
              Trial-context figures, not a yield you should expect in a
              different environment or management system.
            </span>
          </Row>
        )}
      </dl>

      <p className="mt-3 border-t border-ink-100 pt-3 text-xs leading-5 text-ink-500">
        Registry listing or variety protection is jurisdiction- and
        date-specific and does <span className="font-semibold">not</span> by
        itself indicate current commercial availability, universal cultivation
        approval, patent status, or a recommendation.
      </p>
    </section>
  );
}
