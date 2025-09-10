import { promises as fs } from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(process.cwd());
const distDir = path.join(projectRoot, 'dist');

// Determine base URL from environment (preferred) or fallbacks
const envUrl = process.env.SITE_URL || process.env.URL || process.env.DEPLOY_URL || process.env.DEPLOY_PRIME_URL || '';
const baseUrl = envUrl?.replace(/\/$/, '');

// Define your site routes here
const routes = [
  '/',
  '/careers',
];

const now = new Date().toISOString();

function buildSitemapXml(base) {
  const useBase = base?.length > 0 ? base : '';
  const urls = routes.map((route) => {
    const loc = useBase ? `${useBase}${route}` : route;
    const priority = route === '/' ? '1.0' : '0.8';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.join('\n') +
    `\n</urlset>\n`;
}

async function ensureDist() {
  try {
    await fs.mkdir(distDir, { recursive: true });
  } catch {
    // ignore
  }
}

async function writeSitemap() {
  const xml = buildSitemapXml(baseUrl);
  await ensureDist();
  const target = path.join(distDir, 'sitemap.xml');
  await fs.writeFile(target, xml, 'utf8');
  console.log(`[sitemap] wrote ${target}`);
}

async function updateRobots() {
  const robotsPath = path.join(distDir, 'robots.txt');
  let content = '';
  try {
    content = await fs.readFile(robotsPath, 'utf8');
  } catch {
    // If not present in dist, try to copy from public
    try {
      const publicRobots = path.join(projectRoot, 'public', 'robots.txt');
      content = await fs.readFile(publicRobots, 'utf8');
      await fs.writeFile(robotsPath, content, 'utf8');
    } catch {
      // create a minimal robots
      content = 'User-agent: *\nAllow: /\n';
    }
  }

  // Remove existing Sitemap lines
  const lines = content.split(/\r?\n/).filter((l) => !/^\s*Sitemap:/i.test(l));
  const sitemapLine = `Sitemap: ${baseUrl ? `${baseUrl}/sitemap.xml` : '/sitemap.xml'}`;
  lines.push('', sitemapLine);
  await fs.writeFile(robotsPath, lines.join('\n'), 'utf8');
  console.log(`[sitemap] updated ${robotsPath}`);
}

async function main() {
  await writeSitemap();
  await updateRobots();
  if (!baseUrl) {
    console.warn('[sitemap] Warning: No base URL detected. Set SITE_URL to include absolute URLs in sitemap.');
  } else {
    console.log(`[sitemap] Using base URL: ${baseUrl}`);
  }
}

main().catch((err) => {
  console.error('[sitemap] Failed:', err);
  process.exitCode = 1;
});


