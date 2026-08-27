/**
 * Query layer over the official-registries corpus.
 *
 * Publication is gated here rather than at render sites, so a caller cannot
 * accidentally surface an evidence-thin or non-active system.
 */
import { REGISTRIES } from '@/data/registries';
import { isListableRegistry, isPublishableRegistry } from '@/types/registry';
import type { AgriculturalRegistryEntry, RegistryType } from '@/types/registry';

export { REGISTRIES };

export const REGISTRIES_HUB_PATH = '/agricultural-registries';

export function registryPath(slug: string): string {
  return `${REGISTRIES_HUB_PATH}/${slug}`;
}

export function countryRegistriesPath(countrySlug: string): string {
  return `/countries/${countrySlug}/agricultural-registries`;
}

export function publishedRegistries(): AgriculturalRegistryEntry[] {
  return REGISTRIES.filter(isPublishableRegistry).sort((a, b) =>
    a.officialName.localeCompare(b.officialName),
  );
}

export function listedRegistries(): AgriculturalRegistryEntry[] {
  return REGISTRIES.filter(isListableRegistry).sort((a, b) =>
    a.officialName.localeCompare(b.officialName),
  );
}

const BY_SLUG = new Map(REGISTRIES.map((r) => [r.slug, r]));

export function publishedRegistryBySlug(
  slug: string,
): AgriculturalRegistryEntry | undefined {
  const found = BY_SLUG.get(slug);
  return found && isPublishableRegistry(found) ? found : undefined;
}

/** Listed registries for one country. */
export function registriesForCountry(
  iso3: string,
): AgriculturalRegistryEntry[] {
  return listedRegistries().filter((r) => r.countryCode === iso3);
}

/**
 * Registries a given authority administers. Data-driven from the registry
 * records, so an authority page never hardcodes a registry link and cannot go
 * stale when a ministry is renamed.
 */
export function registriesForAuthority(
  authorityId: string,
): AgriculturalRegistryEntry[] {
  return listedRegistries().filter((r) =>
    r.responsibleAuthorityIds.includes(authorityId),
  );
}

/** Supranational and global systems, which belong to no single country. */
export function supranationalRegistries(): AgriculturalRegistryEntry[] {
  return listedRegistries().filter((r) => !r.countryCode);
}

/** Registry types actually present, so no empty facet is ever offered. */
export function presentRegistryTypes(): RegistryType[] {
  return [...new Set(listedRegistries().map((r) => r.registryType))].sort();
}

/** Countries with at least one listed registry. */
export function countriesWithRegistries(): string[] {
  return [
    ...new Set(
      listedRegistries()
        .map((r) => r.countryCode)
        .filter((c): c is string => Boolean(c)),
    ),
  ].sort();
}
