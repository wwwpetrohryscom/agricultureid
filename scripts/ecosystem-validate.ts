/**
 * Build-time validator for the HELPERG ecosystem registry.
 *
 * The registry is static trusted code, but it is edited by hand and its links
 * leave our domain, so every invariant that could silently ship a broken or
 * unsafe destination is enforced here and wired into CI.
 *
 * Rejects: malformed URLs, non-HTTPS URLs, duplicate ids within a registry,
 * duplicate canonical web-project URLs, apps with no store link at all,
 * store URLs on unexpected hosts, and empty/whitespace names.
 *
 * Deliberately does NOT reject the same brand appearing in both registries:
 * "Twin Phone" is legitimately both a website and an iOS app. Id uniqueness is
 * therefore scoped PER REGISTRY, never globally.
 */
import {
  HELPERG_WEB_PROJECTS,
  HELPERG_APPS,
  PLATFORM_ORDER,
  appStoreDestinationCount,
  CURRENT_PROJECT_ID,
  type EcosystemApp,
} from '../lib/ecosystem/registry';

/** Counts asserted by the brief. A mismatch is a hard error, never auto-fixed. */
const EXPECTED_WEB_PROJECTS = 18;
const EXPECTED_APPS = 8;
const EXPECTED_APP_DESTINATIONS = 14;

/** Hosts an app-store link is allowed to point at. */
const STORE_HOSTS: Record<string, string> = {
  ios: 'apps.apple.com',
  android: 'play.google.com',
};

const errors: string[] = [];
const fail = (msg: string) => errors.push(msg);

/** Parse and structurally validate one absolute HTTPS URL. */
function checkUrl(label: string, raw: string, expectedHost?: string): void {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    fail(`${label}: malformed URL ${JSON.stringify(raw)}`);
    return;
  }
  if (url.protocol !== 'https:') {
    fail(`${label}: non-HTTPS URL ${raw} (protocol ${url.protocol})`);
  }
  if (!url.hostname || !url.hostname.includes('.')) {
    fail(`${label}: URL has no usable hostname — ${raw}`);
  }
  if (expectedHost && url.hostname !== expectedHost) {
    fail(
      `${label}: unexpected domain ${url.hostname} — expected ${expectedHost} (${raw})`,
    );
  }
}

// ---------------------------------------------------------------- web projects
{
  const ids = new Set<string>();
  const urls = new Set<string>();

  for (const p of HELPERG_WEB_PROJECTS) {
    const label = `web project "${p.id}"`;

    if (!p.id.trim()) fail('web project: empty id');
    if (!p.name.trim()) fail(`${label}: empty name`);
    if (p.name !== p.name.trim())
      fail(`${label}: name has surrounding whitespace`);
    if (!/^[a-z0-9-]+$/.test(p.id)) fail(`${label}: id is not kebab-case`);

    if (ids.has(p.id)) fail(`${label}: duplicate project id`);
    ids.add(p.id);

    // Canonical URL uniqueness is compared on the exact published string.
    if (urls.has(p.url))
      fail(`${label}: duplicate canonical web-project URL ${p.url}`);
    urls.add(p.url);

    checkUrl(label, p.url);
  }

  if (HELPERG_WEB_PROJECTS.length !== EXPECTED_WEB_PROJECTS) {
    fail(
      `web projects: expected exactly ${EXPECTED_WEB_PROJECTS}, found ${HELPERG_WEB_PROJECTS.length} — inspect the registry rather than adjusting this number`,
    );
  }
  if (!ids.has(CURRENT_PROJECT_ID)) {
    fail(
      `CURRENT_PROJECT_ID "${CURRENT_PROJECT_ID}" is not present in HELPERG_WEB_PROJECTS — the current-site marker would never render`,
    );
  }
}

// ------------------------------------------------------------------------ apps
{
  const ids = new Set<string>();

  const storeUrls = new Map<string, string>();

  for (const app of HELPERG_APPS as readonly EcosystemApp[]) {
    const label = `app "${app.id}"`;

    if (!app.id.trim()) fail('app: empty id');
    if (!app.name.trim()) fail(`${label}: empty name`);
    if (!/^[a-z0-9-]+$/.test(app.id)) fail(`${label}: id is not kebab-case`);

    if (ids.has(app.id)) fail(`${label}: duplicate app id`);
    ids.add(app.id);

    const present = PLATFORM_ORDER.filter((p) => app.platforms[p] != null);
    if (present.length === 0) {
      fail(`${label}: has no store link on any platform`);
    }

    for (const platform of PLATFORM_ORDER) {
      const url = app.platforms[platform];
      if (url == null) continue;
      if (!url.trim()) {
        fail(`${label}: empty ${platform} URL`);
        continue;
      }
      checkUrl(`${label} (${platform})`, url, STORE_HOSTS[platform]);

      const seen = storeUrls.get(url);
      if (seen)
        fail(`${label}: store URL duplicated with app "${seen}" — ${url}`);
      storeUrls.set(url, app.id);
    }
  }

  if (HELPERG_APPS.length !== EXPECTED_APPS) {
    fail(
      `apps: expected exactly ${EXPECTED_APPS}, found ${HELPERG_APPS.length} — inspect the registry rather than adjusting this number`,
    );
  }

  const destinations = appStoreDestinationCount();
  if (destinations !== EXPECTED_APP_DESTINATIONS) {
    fail(
      `app-store destinations: expected exactly ${EXPECTED_APP_DESTINATIONS}, found ${destinations} — inspect the registry rather than adjusting this number`,
    );
  }
}

// ---------------------------------------------------------------------- report
if (errors.length > 0) {
  console.error('ecosystem registry: FAILED\n');
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}

console.log(
  `ecosystem registry: OK — ${HELPERG_WEB_PROJECTS.length} web projects, ${HELPERG_APPS.length} apps, ${appStoreDestinationCount()} app-store destinations.`,
);
