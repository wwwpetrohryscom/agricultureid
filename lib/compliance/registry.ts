/**
 * Query layer over the compliance corpus. Publication is gated here so a
 * caller cannot surface a superseded or under-evidenced topic.
 */
import { COMPLIANCE_TOPICS } from '@/data/compliance';
import {
  isListableComplianceTopic,
  isPublishableComplianceTopic,
} from '@/types/compliance';
import type {
  AgriculturalComplianceTopic,
  ComplianceTopicType,
} from '@/types/compliance';

export { COMPLIANCE_TOPICS };

export const REGULATIONS_HUB_PATH = '/agricultural-regulations';

export function compliancePath(slug: string): string {
  return `${REGULATIONS_HUB_PATH}/${slug}`;
}

export function publishedComplianceTopics(): AgriculturalComplianceTopic[] {
  return COMPLIANCE_TOPICS.filter(isPublishableComplianceTopic).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}

export function listedComplianceTopics(): AgriculturalComplianceTopic[] {
  return COMPLIANCE_TOPICS.filter(isListableComplianceTopic).sort((a, b) =>
    a.title.localeCompare(b.title),
  );
}

const BY_SLUG = new Map(COMPLIANCE_TOPICS.map((t) => [t.slug, t]));

export function publishedComplianceTopicBySlug(
  slug: string,
): AgriculturalComplianceTopic | undefined {
  const found = BY_SLUG.get(slug);
  return found && isPublishableComplianceTopic(found) ? found : undefined;
}

export function complianceTopicsForCountry(
  iso3: string,
): AgriculturalComplianceTopic[] {
  return listedComplianceTopics().filter((t) => t.countryCode === iso3);
}

/** Topics that reference a given Wave 5 registry. */
export function complianceTopicsForRegistry(
  registryId: string,
): AgriculturalComplianceTopic[] {
  return listedComplianceTopics().filter(
    (t) =>
      t.relatedRegistryIds.includes(registryId) ||
      t.requirements.some((r) => (r.registryIds ?? []).includes(registryId)),
  );
}

/** Topics an authority is responsible for. */
export function complianceTopicsForAuthority(
  authorityId: string,
): AgriculturalComplianceTopic[] {
  return listedComplianceTopics().filter(
    (t) =>
      t.responsibleAuthorityIds.includes(authorityId) ||
      t.requirements.some((r) => r.authorityIds.includes(authorityId)),
  );
}

/** Topic types actually present, so no empty facet is offered. */
export function presentComplianceTopicTypes(): ComplianceTopicType[] {
  return [...new Set(listedComplianceTopics().map((t) => t.topicType))].sort();
}

/** The standing disclosure shown on every compliance surface. */
export const COMPLIANCE_DISCLOSURE =
  'AgricultureID provides informational references to official sources and does not replace legal or professional advice.';
