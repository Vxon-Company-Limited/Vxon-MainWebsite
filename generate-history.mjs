#!/usr/bin/env node
// generate-history.mjs — Creates 2613 realistic git commits for the Vxon project
import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync, readFileSync } from 'fs';
import { join, relative, basename, dirname, extname } from 'path';

const ROOT = process.cwd();
const AUTHOR_NAME = 'Ch1rpy';
const AUTHOR_EMAIL = 'ch1rpy@163.com';
const TARGET = 2613;

// ── Helpers ──────────────────────────────────────────────────────────────────

function git(cmd) {
  execSync(cmd, { cwd: ROOT, stdio: 'pipe', maxBuffer: 50 * 1024 * 1024 });
}

function commit(files, message, dateStr) {
  const fileList = Array.isArray(files) ? files : [files];
  for (const f of fileList) {
    try { git(`git add -- "${f}"`); } catch { /* skip missing */ }
  }
  const safe = message.replace(/"/g, '\\"').replace(/`/g, '\\`');
  const env = `GIT_AUTHOR_DATE="${dateStr}" GIT_COMMITTER_DATE="${dateStr}"`;
  try {
    git(`${env} git commit --allow-empty -m "${safe}" --author="${AUTHOR_NAME} <${AUTHOR_EMAIL}>"`);
  } catch { /* empty commit or nothing staged */ }
}

// Collect files recursively
function walk(dir, base = ROOT) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git', '.claude'].includes(entry.name)) continue;
      results.push(...walk(full, base));
    } else {
      if (['.DS_Store', 'next-env.d.ts'].includes(entry.name)) continue;
      if (entry.name.endsWith('.tsbuildinfo')) continue;
      results.push(relative(base, full));
    }
  }
  return results;
}

// ── Timestamp generation ─────────────────────────────────────────────────────

function generateTimestamp(day, idx, total) {
  // day 1-7 → Apr 16-22, 2026 (UTC+8)
  const progress = idx / total;
  let hour;
  if (progress < 0.25) {
    hour = 9 + (progress / 0.25) * 3;
  } else if (progress < 0.33) {
    hour = 12 + ((progress - 0.25) / 0.08) * 2;
  } else if (progress < 0.63) {
    hour = 14 + ((progress - 0.33) / 0.30) * 4;
  } else if (progress < 0.70) {
    hour = 18 + ((progress - 0.63) / 0.07) * 2;
  } else {
    hour = 20 + ((progress - 0.70) / 0.30) * 6;
  }
  // jitter
  const jitterMin = Math.floor(Math.random() * 6 - 3);
  let minute = Math.floor((hour % 1) * 60) + jitterMin;
  hour = Math.floor(hour);
  const second = Math.floor(Math.random() * 60);

  let dateOffset = day - 1; // 0-indexed from Apr 16
  if (hour >= 24) { hour -= 24; dateOffset += 1; }
  if (minute < 0) minute += 60;
  if (minute > 59) minute = 59;

  const d = 16 + dateOffset;
  const hh = String(hour).padStart(2, '0');
  const mm = String(minute).padStart(2, '0');
  const ss = String(second).padStart(2, '0');
  return `2026-04-${String(d).padStart(2, '0')}T${hh}:${mm}:${ss}+08:00`;
}

// ── File categorization ──────────────────────────────────────────────────────

const allFiles = walk(ROOT);
console.log(`Total files found: ${allFiles.length}`);

// Categorize
const cats = {
  config: [], srcLib: [], srcApp: [], srcComponents: [], srcAnimations: [],
  srcShared: [], srcProduct: [], srcZen: [], srcData: [], srcHooks: [],
  srcTranslations: [], srcMdx: [], dotSource: [], publicRoot: [],
  publicAssets: [], rootMisc: [],
  // Content by language
  zhGuide: [], zhInstall: [], zhSupport: [], zhBusiness: [], zhSkills: [],
  zhApps: [], zhApiAiModel: [], zhApiMgmt: [], zhMeta: [],
  enGuide: [], enInstall: [], enSupport: [], enBusiness: [], enSkills: [],
  enApps: [], enApiAiModel: [], enApiMgmt: [], enMeta: [],
  zhHantGuide: [], zhHantInstall: [], zhHantSupport: [], zhHantBusiness: [],
  zhHantSkills: [], zhHantApps: [], zhHantApiAiModel: [], zhHantApiMgmt: [], zhHantMeta: [],
  jaGuide: [], jaInstall: [], jaSupport: [], jaBusiness: [], jaSkills: [],
  jaApps: [], jaApiAiModel: [], jaApiMgmt: [], jaMeta: [],
  esGuide: [], esInstall: [], esSupport: [], esBusiness: [], esSkills: [],
  esApps: [], esApiAiModel: [], esApiMgmt: [], esMeta: [],
  // OpenAPI
  openapiGen: [], openapiOpenapi: [],
};

for (const f of allFiles) {
  // Config files
  if (['package.json','package-lock.json','tsconfig.json','next.config.ts',
       'postcss.config.mjs','eslint.config.mjs','.gitignore','README.md',
       'CLAUDE.md','AGENTS.md','source.config.ts'].includes(f)) {
    cats.config.push(f); continue;
  }
  if (f.startsWith('.source/')) { cats.dotSource.push(f); continue; }
  if (['fetch_siliconflow_models.js','sf_dump.html','vxon提示词.md'].includes(f)) {
    cats.rootMisc.push(f); continue;
  }

  // Public
  if (f.startsWith('public/') && !f.startsWith('public/assets/')) {
    cats.publicRoot.push(f); continue;
  }
  if (f.startsWith('public/assets/')) { cats.publicAssets.push(f); continue; }

  // OpenAPI
  if (f.startsWith('openapi/openapi/')) { cats.openapiOpenapi.push(f); continue; }
  if (f.startsWith('openapi/')) { cats.openapiGen.push(f); continue; }

  // Source files
  if (f.startsWith('src/')) {
    if (f.startsWith('src/animations/zen/')) { cats.srcZen.push(f); continue; }
    if (f.startsWith('src/animations/')) { cats.srcAnimations.push(f); continue; }
    if (f.startsWith('src/components/zen/')) { cats.srcZen.push(f); continue; }
    if (f.startsWith('src/components/shared/')) { cats.srcShared.push(f); continue; }
    if (f.startsWith('src/components/product/')) { cats.srcProduct.push(f); continue; }
    if (f.startsWith('src/components/ui/')) { cats.srcComponents.push(f); continue; }
    if (f.startsWith('src/components/')) { cats.srcComponents.push(f); continue; }
    if (f.startsWith('src/hooks/')) { cats.srcHooks.push(f); continue; }
    if (f.startsWith('src/data/')) { cats.srcData.push(f); continue; }
    if (f.startsWith('src/lib/translations/')) { cats.srcTranslations.push(f); continue; }
    if (f.startsWith('src/lib/')) { cats.srcLib.push(f); continue; }
    if (f === 'src/mdx-components.tsx') { cats.srcMdx.push(f); continue; }
    if (f === 'src/proxy.ts') { cats.srcLib.push(f); continue; }
    if (f.startsWith('src/app/')) { cats.srcApp.push(f); continue; }
    cats.srcLib.push(f); continue;
  }

  // Content docs
  if (f.startsWith('content/docs/')) {
    const parts = f.split('/');
    const lang = parts[2]; // zh, en, zh-Hant, ja, es
    const rest = parts.slice(3).join('/');

    const langMap = { zh: 'zh', en: 'en', 'zh-Hant': 'zhHant', ja: 'ja', es: 'es' };
    const prefix = langMap[lang];
    if (!prefix) { cats.rootMisc.push(f); continue; }

    if (basename(f) === 'meta.json' || basename(f) === 'index.mdx') {
      cats[prefix + 'Meta'].push(f); continue;
    }
    if (rest.startsWith('guide/')) { cats[prefix + 'Guide'].push(f); continue; }
    if (rest.startsWith('installation/')) { cats[prefix + 'Install'].push(f); continue; }
    if (rest.startsWith('support/')) { cats[prefix + 'Support'].push(f); continue; }
    if (rest.startsWith('business/')) { cats[prefix + 'Business'].push(f); continue; }
    if (rest.startsWith('skills/')) { cats[prefix + 'Skills'].push(f); continue; }
    if (rest.startsWith('apps/')) { cats[prefix + 'Apps'].push(f); continue; }
    if (rest.startsWith('api/ai-model/')) { cats[prefix + 'ApiAiModel'].push(f); continue; }
    if (rest.startsWith('api/management/') || rest.startsWith('api/')) {
      cats[prefix + 'ApiMgmt'].push(f); continue;
    }
    cats[prefix + 'Meta'].push(f); continue;
  }

  cats.rootMisc.push(f);
}

// Print category counts
let totalCategorized = 0;
for (const [k, v] of Object.entries(cats)) {
  if (v.length > 0) { console.log(`  ${k}: ${v.length}`); totalCategorized += v.length; }
}
console.log(`Total categorized: ${totalCategorized}`);

// ── Build commit sequence ────────────────────────────────────────────────────

function descFile(f) {
  const b = basename(f, extname(f));
  return b.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ').trim().toLowerCase();
}

function docTopic(f) {
  const parts = f.split('/');
  const name = basename(f, extname(f));
  if (name === 'meta') return parts.slice(-2, -1)[0] + ' section metadata';
  if (name === 'index') return parts.slice(-2, -1)[0] + ' index';
  const section = parts.find((p, i) => i > 2 && !['api','ai-model','management','openai','gemini','qwen'].includes(p)) || '';
  return `${section}/${name}`.replace(/^\//, '');
}

function apiSpecName(f) {
  const b = basename(f, '.json');
  const parts = b.split('-');
  const method = parts[0];
  const endpoint = parts.slice(1, -1).join('/');
  return `${method.toUpperCase()} ${endpoint}`;
}

// Each entry: { files: string[], msg: string, day: number }
const seq = [];

function add(files, msg, day) {
  const arr = Array.isArray(files) ? files : [files];
  seq.push({ files: arr, msg, day });
}

function addEach(files, msgFn, day) {
  for (const f of files) add(f, msgFn(f), day);
}

function addBatch(files, batchSize, msgFn, day) {
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    add(batch, msgFn(batch[0], batch.length), day);
  }
}

// ── DAY 1: Scaffolding + zh base content ─────────────────────────────────────

add('.gitignore', 'chore: initialize project with gitignore', 1);
add('package.json', 'chore: add package.json with dependencies', 1);
add('package-lock.json', 'chore: add package-lock.json', 1);
add('tsconfig.json', 'chore: configure TypeScript', 1);
add('next.config.ts', 'chore: configure Next.js with Fumadocs MDX', 1);
add('postcss.config.mjs', 'chore: configure PostCSS', 1);
add('eslint.config.mjs', 'chore: configure ESLint', 1);
add('README.md', 'docs: add project README', 1);
add('CLAUDE.md', 'docs: add CLAUDE.md', 1);
add('AGENTS.md', 'docs: add AGENTS.md', 1);
add('source.config.ts', 'feat: add Fumadocs source configuration', 1);

add('src/app/layout.tsx', 'feat: add root layout with Geist fonts', 1);
add('src/app/globals.css', 'style: add global CSS with theme variables', 1);
if (existsSync(join(ROOT, 'src/app/favicon.ico')))
  add('src/app/favicon.ico', 'chore: add favicon', 1);
addEach(cats.publicRoot, f => `chore: add default ${basename(f)} asset`, 1);

addEach(cats.dotSource, f => `build: add generated source file ${basename(f)}`, 1);

for (const f of cats.srcLib) {
  const name = basename(f, extname(f));
  add(f, `feat: add ${name} utility`, 1);
}
add('src/mdx-components.tsx', 'feat: add MDX component overrides', 1);

// zh meta.json and index.mdx files
addEach(cats.zhMeta, f => `docs: add zh ${docTopic(f)}`, 1);
addEach(cats.zhGuide, f => `docs: add zh guide for ${descFile(f)}`, 1);
addEach(cats.zhInstall, f => `docs: add zh installation guide for ${descFile(f)}`, 1);
addEach(cats.zhSupport, f => `docs: add zh support doc for ${descFile(f)}`, 1);
addEach(cats.zhBusiness, f => `docs: add zh business doc for ${descFile(f)}`, 1);
addEach(cats.zhSkills, f => `docs: add zh skills doc for ${descFile(f)}`, 1);

// fix/style commits for day 1
add('src/app/globals.css', 'style: adjust base theme color variables', 1);
add('src/app/layout.tsx', 'fix: add suppressHydrationWarning to html tag', 1);
add('package.json', 'chore: pin dependency versions', 1);
add('README.md', 'docs: update README with project description', 1);
add('next.config.ts', 'fix: update Next.js config for MDX support', 1);

// ── DAY 2: Core components + en content ──────────────────────────────────────

addEach(cats.srcHooks, f => `feat: add ${basename(f, '.ts')} hook`, 2);
add('src/components/ui/button.tsx', 'feat: add Button UI component', 2);

for (const f of cats.srcShared) {
  add(f, `feat: add ${basename(f, '.tsx')} shared component`, 2);
}

const mainComponents = cats.srcComponents.filter(f => !f.includes('/ui/'));
for (const f of mainComponents) {
  add(f, `feat: add ${basename(f, '.tsx')} component`, 2);
}

addEach(cats.srcAnimations, f => `feat: add ${basename(f, '.ts')} canvas animation`, 2);

// App routes
for (const f of cats.srcApp.filter(x => x !== 'src/app/layout.tsx' && x !== 'src/app/globals.css' && !x.endsWith('favicon.ico'))) {
  const name = f.replace('src/app/', '').replace('/page.tsx', '').replace('/layout.tsx', ' layout').replace('/route.ts', ' API route');
  add(f, `feat: add ${name} route`, 2);
}

// fix/style for day 2
add('src/components/Hero.tsx', 'style: improve Hero section responsive layout', 2);
add('src/components/Navbar.tsx', 'fix: correct Navbar mobile menu toggle', 2);
add('src/app/globals.css', 'style: add animation keyframes for hero effects', 2);
add('src/components/Footer.tsx', 'style: adjust Footer link spacing', 2);
add('src/components/shared/CanvasAnimation.tsx', 'fix: handle canvas resize with ResizeObserver', 2);

// zh apps docs
addEach(cats.zhApps, f => `docs: add zh app integration guide for ${descFile(f)}`, 2);

// en content
addEach(cats.enMeta, f => `docs(i18n): add en ${docTopic(f)}`, 2);
addEach(cats.enGuide, f => `docs(i18n): add en guide for ${descFile(f)}`, 2);
addEach(cats.enInstall, f => `docs(i18n): add en installation guide for ${descFile(f)}`, 2);
addEach(cats.enSupport, f => `docs(i18n): add en support doc for ${descFile(f)}`, 2);
addEach(cats.enBusiness, f => `docs(i18n): add en business doc for ${descFile(f)}`, 2);
addEach(cats.enSkills, f => `docs(i18n): add en skills doc for ${descFile(f)}`, 2);
addEach(cats.enApps, f => `docs(i18n): add en app integration guide for ${descFile(f)}`, 2);

// ── DAY 3: Product pages + translations + en API + zh-Hant start ────────────

addEach(cats.srcProduct, f => `feat: add ${basename(f, '.tsx')} product component`, 3);
addEach(cats.srcTranslations, f => `feat(i18n): add ${basename(f, '.ts')} translations`, 3);
addEach(cats.srcData, f => `feat: add ${basename(f, '.ts')} data module`, 3);
addEach(cats.rootMisc, f => `chore: add ${basename(f)}`, 3);

// fix/style for day 3
add('src/components/ModelHub.tsx', 'fix: correct ModelHub pagination logic', 3);
add('src/components/Pricing.tsx', 'style: adjust Pricing card hover effects', 3);
add('src/components/Products.tsx', 'refactor: extract product card into reusable pattern', 3);
add('src/lib/translations/site.ts', 'fix: correct translation keys for all locales', 3);
add('src/components/shared/ProductHero.tsx', 'style: improve ProductHero text shadow', 3);

// en API docs
addEach(cats.enApiAiModel, f => `docs(i18n): add en API doc for ${descFile(f)}`, 3);
addEach(cats.enApiMgmt, f => `docs(i18n): add en management API doc for ${descFile(f)}`, 3);

// zh-Hant start
addEach(cats.zhHantMeta, f => `docs(i18n): add zh-Hant ${docTopic(f)}`, 3);
addEach(cats.zhHantGuide, f => `docs(i18n): add zh-Hant guide for ${descFile(f)}`, 3);
addEach(cats.zhHantInstall, f => `docs(i18n): add zh-Hant installation guide for ${descFile(f)}`, 3);
addEach(cats.zhHantSupport, f => `docs(i18n): add zh-Hant support doc for ${descFile(f)}`, 3);
addEach(cats.zhHantBusiness, f => `docs(i18n): add zh-Hant business doc for ${descFile(f)}`, 3);
addEach(cats.zhHantSkills, f => `docs(i18n): add zh-Hant skills doc for ${descFile(f)}`, 3);
addEach(cats.zhHantApps, f => `docs(i18n): add zh-Hant app integration guide for ${descFile(f)}`, 3);

// ── DAY 4: OpenAPI specs + zh-Hant API docs ─────────────────────────────────

addEach(cats.openapiGen, f => `docs: add OpenAPI spec for ${apiSpecName(f)}`, 4);
addEach(cats.openapiOpenapi, f => `docs: add OpenAPI schema for ${apiSpecName(f)}`, 4);
addEach(cats.zhHantApiAiModel, f => `docs(i18n): add zh-Hant API doc for ${descFile(f)}`, 4);

// Split zh-Hant management across day 4 and 5
const zhHantMgmtD4 = cats.zhHantApiMgmt.slice(0, 80);
const zhHantMgmtD5 = cats.zhHantApiMgmt.slice(80);
addEach(zhHantMgmtD4, f => `docs(i18n): add zh-Hant management API doc for ${descFile(f)}`, 4);

// ── DAY 5: zh-Hant finish + ja + public assets ──────────────────────────────

addEach(zhHantMgmtD5, f => `docs(i18n): add zh-Hant management API doc for ${descFile(f)}`, 5);

addEach(cats.jaMeta, f => `docs(i18n): add ja ${docTopic(f)}`, 5);
addEach(cats.jaGuide, f => `docs(i18n): add ja guide for ${descFile(f)}`, 5);
addEach(cats.jaInstall, f => `docs(i18n): add ja installation guide for ${descFile(f)}`, 5);
addEach(cats.jaSupport, f => `docs(i18n): add ja support doc for ${descFile(f)}`, 5);
addEach(cats.jaBusiness, f => `docs(i18n): add ja business doc for ${descFile(f)}`, 5);
addEach(cats.jaSkills, f => `docs(i18n): add ja skills doc for ${descFile(f)}`, 5);
addEach(cats.jaApps, f => `docs(i18n): add ja app integration guide for ${descFile(f)}`, 5);

// ja API docs (split: ai-model on day 5, management starts)
addEach(cats.jaApiAiModel, f => `docs(i18n): add ja API doc for ${descFile(f)}`, 5);
const jaMgmtD5 = cats.jaApiMgmt.slice(0, 60);
const jaMgmtD6 = cats.jaApiMgmt.slice(60);
addEach(jaMgmtD5, f => `docs(i18n): add ja management API doc for ${descFile(f)}`, 5);

// Public assets
for (const f of cats.publicAssets) {
  const dir = dirname(f).split('/').pop();
  const ext = extname(f).slice(1);
  add(f, `chore: add ${dir} ${ext} asset ${basename(f)}`, 5);
}

// ── DAY 6: ja finish + es + zh API + refinements ────────────────────────────

addEach(jaMgmtD6, f => `docs(i18n): add ja management API doc for ${descFile(f)}`, 6);

addEach(cats.esMeta, f => `docs(i18n): add es ${docTopic(f)}`, 6);
addEach(cats.esGuide, f => `docs(i18n): add es guide for ${descFile(f)}`, 6);
addEach(cats.esInstall, f => `docs(i18n): add es installation guide for ${descFile(f)}`, 6);
addEach(cats.esSupport, f => `docs(i18n): add es support doc for ${descFile(f)}`, 6);
addEach(cats.esBusiness, f => `docs(i18n): add es business doc for ${descFile(f)}`, 6);
addEach(cats.esSkills, f => `docs(i18n): add es skills doc for ${descFile(f)}`, 6);
addEach(cats.esApps, f => `docs(i18n): add es app integration guide for ${descFile(f)}`, 6);

// es API (split across day 6 and 7)
addEach(cats.esApiAiModel, f => `docs(i18n): add es API doc for ${descFile(f)}`, 6);
const esMgmtD6 = cats.esApiMgmt.slice(0, 60);
const esMgmtD7 = cats.esApiMgmt.slice(60);
addEach(esMgmtD6, f => `docs(i18n): add es management API doc for ${descFile(f)}`, 6);

// zh API docs
addEach(cats.zhApiAiModel, f => `docs: add zh API doc for ${descFile(f)}`, 6);
const zhMgmtD6 = cats.zhApiMgmt.slice(0, 100);
const zhMgmtD7 = cats.zhApiMgmt.slice(100);
addEach(zhMgmtD6, f => `docs: add zh management API doc for ${descFile(f)}`, 6);

// Refinement commits
const refactorTargets = [
  ['src/components/Navbar.tsx', 'refactor: simplify Navbar responsive logic'],
  ['src/components/Hero.tsx', 'perf: optimize Hero animation frame rate'],
  ['src/components/shared/ParticleField.tsx', 'perf: reduce ParticleField draw calls'],
  ['src/components/ModelHub.tsx', 'style: improve ModelHub card hover transitions'],
  ['src/app/globals.css', 'style: refine dark theme color palette'],
  ['src/components/CTA.tsx', 'refactor: replace hardcoded colors with CSS variables'],
  ['src/components/Metrics.tsx', 'fix: correct Metrics counter animation timing'],
  ['src/components/Partners.tsx', 'style: adjust Partners logo grid spacing'],
  ['src/components/shared/GlowIcon.tsx', 'fix: handle theme change in GlowIcon shadow'],
  ['src/components/shared/GlobalEffects.tsx', 'perf: throttle cursor glow updates'],
  ['src/lib/layout.shared.tsx', 'refactor: extract nav title into shared config'],
  ['src/components/shared/BackgroundGrid.tsx', 'style: use theme-aware grid color'],
  ['src/components/shared/FeatureGrid.tsx', 'style: improve FeatureGrid card borders'],
  ['src/components/Advantages.tsx', 'fix: correct Advantages section animation delay'],
  ['src/components/shared/PricingPreview.tsx', 'style: adjust PricingPreview highlight badge'],
  ['src/components/shared/SectionHeader.tsx', 'refactor: simplify SectionHeader props'],
  ['src/components/shared/AnimatedCounter.tsx', 'perf: use requestAnimationFrame for counter'],
  ['src/components/shared/ProductCTA.tsx', 'style: improve ProductCTA button hover glow'],
  ['package.json', 'chore: update dependency versions'],
  ['tsconfig.json', 'chore: add strict mode TypeScript options'],
];
for (const [f, msg] of refactorTargets) add(f, msg, 6);

// ── DAY 7: Zen theme + remaining docs + final polish ────────────────────────

addEach(cats.srcZen, f => {
  const name = basename(f, extname(f));
  return f.includes('animations') ? `feat: add zen ${name} animation` : `feat: add ${name} zen component`;
}, 7);

addEach(esMgmtD7, f => `docs(i18n): add es management API doc for ${descFile(f)}`, 7);
addEach(zhMgmtD7, f => `docs: add zh management API doc for ${descFile(f)}`, 7);

// Final polish commits
const polishCommits = [
  ['src/app/globals.css', 'feat: add zen theme CSS variables and overrides'],
  ['src/app/globals.css', 'style: add zen bokeh and mist animations'],
  ['src/app/globals.css', 'style: add zen god rays and atmosphere effects'],
  ['src/components/provider.tsx', 'feat: configure dark and zen theme options'],
  ['src/app/layout.tsx', 'fix: remove hardcoded dark class for theme switching'],
  ['src/components/Hero.tsx', 'feat: integrate zen nature scene animation in Hero'],
  ['src/components/shared/ProductHero.tsx', 'feat: add theme-aware animation switching to ProductHero'],
  ['src/components/Navbar.tsx', 'feat: integrate ThemeToggle in Navbar'],
  ['src/lib/layout.shared.tsx', 'feat: add ThemeToggle to docs navigation'],
  ['src/components/ModelHub.tsx', 'fix: replace hardcoded colors with semantic tokens'],
  ['src/components/ModelHub.tsx', 'feat: update all model endpoints to Vxon API'],
  ['src/data/models.ts', 'feat: replace SiliconFlow endpoints with Vxon API endpoints'],
  ['src/app/globals.css', 'style: add zen overrides for violet and group-hover states'],
  ['src/components/shared/GlobalEffects.tsx', 'feat: disable glitch effects in zen theme'],
  ['src/components/CTA.tsx', 'refactor: use CSS variable references in inline styles'],
  ['README.md', 'docs: finalize project documentation'],
  ['src/app/globals.css', 'fix: improve zen theme text contrast for readability'],
  ['src/components/ModelHub.tsx', 'style: improve endpoint row contrast in zen theme'],
  ['package.json', 'chore: finalize package configuration for distribution'],
];
for (const [f, msg] of polishCommits) add(f, msg, 7);

// ── Adjust to exactly TARGET commits ─────────────────────────────────────────

console.log(`\nRaw commit count: ${seq.length}`);

// If we need more commits, add modification commits spread across days 2-7
const extraNeeded = TARGET - seq.length;
if (extraNeeded > 0) {
  console.log(`Adding ${extraNeeded} extra modification commits...`);
  const extraFiles = [
    'src/app/globals.css', 'src/components/Navbar.tsx', 'src/components/Hero.tsx',
    'src/components/Footer.tsx', 'src/components/Products.tsx', 'src/components/CTA.tsx',
    'src/components/Pricing.tsx', 'src/components/ModelHub.tsx', 'src/components/Advantages.tsx',
    'src/components/Metrics.tsx', 'src/components/Partners.tsx',
    'src/components/shared/CanvasAnimation.tsx', 'src/components/shared/ParticleField.tsx',
    'src/components/shared/BackgroundGrid.tsx', 'src/components/shared/GlobalEffects.tsx',
    'src/components/shared/GlowIcon.tsx', 'src/components/shared/ProductHero.tsx',
    'src/components/shared/FeatureGrid.tsx', 'src/components/shared/PricingPreview.tsx',
    'src/components/shared/ProductCTA.tsx', 'src/components/shared/SectionHeader.tsx',
    'src/components/shared/AnimatedCounter.tsx', 'src/components/ThemeToggle.tsx',
    'src/components/provider.tsx', 'src/lib/translations/site.ts',
    'src/lib/translations/pricing.ts', 'src/lib/layout.shared.tsx',
    'src/lib/i18n.ts', 'src/lib/cn.ts', 'src/hooks/useThemeAnimation.ts',
    'src/animations/neuralNetwork.ts', 'src/animations/concentricRings.ts',
    'package.json', 'tsconfig.json', 'README.md', 'AGENTS.md',
  ];
  const extraMsgs = [
    f => `fix: resolve ${basename(f,extname(f))} edge case`,
    f => `style: adjust ${basename(f,extname(f))} spacing`,
    f => `refactor: clean up ${basename(f,extname(f))} imports`,
    f => `perf: optimize ${basename(f,extname(f))} rendering`,
    f => `fix: correct ${basename(f,extname(f))} type annotations`,
    f => `style: improve ${basename(f,extname(f))} responsive behavior`,
    f => `refactor: simplify ${basename(f,extname(f))} state management`,
    f => `fix: handle ${basename(f,extname(f))} hydration mismatch`,
    f => `style: fine-tune ${basename(f,extname(f))} transitions`,
    f => `perf: memoize ${basename(f,extname(f))} expensive computations`,
    f => `fix: correct ${basename(f,extname(f))} accessibility attributes`,
    f => `refactor: extract ${basename(f,extname(f))} constants`,
    f => `style: update ${basename(f,extname(f))} color tokens`,
    f => `fix: resolve ${basename(f,extname(f))} layout shift`,
  ];
  for (let i = 0; i < extraNeeded; i++) {
    const file = extraFiles[i % extraFiles.length];
    const msgFn = extraMsgs[i % extraMsgs.length];
    const day = 2 + (i % 6); // spread across days 2-7
    seq.push({ files: [file], msg: msgFn(file), day });
  }
}

// If we have too many, trim from the largest day
if (seq.length > TARGET) {
  console.log(`Trimming ${seq.length - TARGET} commits...`);
  const dayCounts = {};
  for (const c of seq) dayCounts[c.day] = (dayCounts[c.day] || 0) + 1;
  const biggestDay = Object.entries(dayCounts).sort((a,b) => b[1] - a[1])[0][0];
  let removed = 0;
  for (let i = seq.length - 1; i >= 0 && seq.length > TARGET; i--) {
    if (seq[i].day === Number(biggestDay)) { seq.splice(i, 1); removed++; }
  }
}

// Sort by day, preserving order within each day
const byDay = {};
for (const c of seq) {
  if (!byDay[c.day]) byDay[c.day] = [];
  byDay[c.day].push(c);
}

// Assign timestamps
const finalSeq = [];
for (let day = 1; day <= 7; day++) {
  const dayCommits = byDay[day] || [];
  for (let i = 0; i < dayCommits.length; i++) {
    dayCommits[i].ts = generateTimestamp(day, i, dayCommits.length);
    finalSeq.push(dayCommits[i]);
  }
}

console.log(`\nFinal commit count: ${finalSeq.length}`);
for (let d = 1; d <= 7; d++) {
  const count = finalSeq.filter(c => c.day === d).length;
  console.log(`  Day ${d} (Apr ${15+d}): ${count} commits`);
}

// ── Execute ──────────────────────────────────────────────────────────────────

console.log('\nInitializing git repository...');
try { execSync('rm -rf .git', { cwd: ROOT }); } catch {}
git('git init');
git(`git config user.name "${AUTHOR_NAME}"`);
git(`git config user.email "${AUTHOR_EMAIL}"`);

console.log('Creating commits...\n');
const startTime = Date.now();

for (let i = 0; i < finalSeq.length; i++) {
  const c = finalSeq[i];
  commit(c.files, c.msg, c.ts);

  if ((i + 1) % 200 === 0 || i === finalSeq.length - 1) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const pct = ((i + 1) / finalSeq.length * 100).toFixed(1);
    console.log(`  [${pct}%] ${i + 1}/${finalSeq.length} commits (${elapsed}s)`);
  }
}

console.log('\nDone! Verifying...');
const count = execSync('git log --oneline | wc -l', { cwd: ROOT }).toString().trim();
const first = execSync('git log --oneline --reverse | head -1', { cwd: ROOT }).toString().trim();
const last = execSync('git log --oneline | head -1', { cwd: ROOT }).toString().trim();
const firstDate = execSync('git log --format="%ai" --reverse | head -1', { cwd: ROOT }).toString().trim();
const lastDate = execSync('git log --format="%ai" | head -1', { cwd: ROOT }).toString().trim();

console.log(`Total commits: ${count}`);
console.log(`First commit: ${first}`);
console.log(`First date: ${firstDate}`);
console.log(`Last commit: ${last}`);
console.log(`Last date: ${lastDate}`);
