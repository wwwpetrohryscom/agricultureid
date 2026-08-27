/**
 * Query layer over the support-programme corpus. Publication is gated here so a
 * closed programme can never be surfaced as though it were open.
 */
import { SUPPORT_PROGRAMS } from '@/data/support';
import {
  isListableSupportProgram,
  isPublishableSupportProgram,
} from '@/types/support';
import type {
  AgriculturalSupportProgram,
  SupportProgramType,
} from '@/types/support';

export { SUPPORT_PROGRAMS };

export const SUPPORT_HUB_PATH = '/agricultural-support';

export function supportPath(slug: string): string {
  return `${SUPPORT_HUB_PATH}/${slug}`;
}

export function publishedSupportPrograms(): AgriculturalSupportProgram[] {
  return SUPPORT_PROGRAMS.filter(isPublishableSupportProgram).sort((a, b) =>
    a.officialName.localeCompare(b.officialName),
  );
}

export function listedSupportPrograms(): AgriculturalSupportProgram[] {
  return SUPPORT_PROGRAMS.filter(isListableSupportProgram).sort((a, b) =>
    a.officialName.localeCompare(b.officialName),
  );
}

const BY_SLUG = new Map(SUPPORT_PROGRAMS.map((p) => [p.slug, p]));

export function publishedSupportProgramBySlug(
  slug: string,
): AgriculturalSupportProgram | undefined {
  const found = BY_SLUG.get(slug);
  return found && isPublishableSupportProgram(found) ? found : undefined;
}

export function supportProgramsForCountry(
  iso3: string,
): AgriculturalSupportProgram[] {
  return listedSupportPrograms().filter((p) => p.countryCode === iso3);
}

/** Programmes a given authority administers. Data-driven, survives renames. */
export function supportProgramsForAuthority(
  authorityId: string,
): AgriculturalSupportProgram[] {
  return listedSupportPrograms().filter((p) =>
    p.administeringAuthorityIds.includes(authorityId),
  );
}

export function presentSupportProgramTypes(): SupportProgramType[] {
  return [...new Set(listedSupportPrograms().map((p) => p.programType))].sort();
}

export function countriesWithSupportPrograms(): string[] {
  return [
    ...new Set(
      listedSupportPrograms()
        .map((p) => p.countryCode)
        .filter((c): c is string => Boolean(c)),
    ),
  ].sort();
}
