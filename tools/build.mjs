#!/usr/bin/env node
/*
 * Baut die veröffentlichbare Website nach _site/.
 *
 * - Blog-Artikel (blog/*.html) mit einem Veröffentlichungsdatum in der Zukunft
 *   (<meta property="article:published_time">) oder mit
 *   <meta name="blog-status" content="draft"> werden NICHT nach _site kopiert.
 * - Blog-Übersicht (blog.html), deren JSON-LD (blogPost) und sitemap.xml werden
 *   aus den veröffentlichten Artikeln erzeugt.
 *
 * Aufruf:
 *   node tools/build.mjs                    Stand "heute" (Europe/Berlin)
 *   node tools/build.mjs --date=2026-12-01  Stand an einem bestimmten Tag
 *   node tools/build.mjs --all              Vorschau inkl. geplanter Artikel und Entwürfe
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "_site");
const SITE_URL = "https://nilswiesmann.net";

// Nicht in die veröffentlichte Website kopieren
const EXCLUDE = new Set([".git", ".github", ".claude", "_site", "tools", "node_modules", ".gitignore", "README.md", "ROADMAP.md", "Nils.jpg"]);

const args = process.argv.slice(2);
const includeAll = args.includes("--all");
const dateArg = args.find((a) => a.startsWith("--date="));
const today = dateArg
  ? dateArg.slice("--date=".length)
  : new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin" }).format(new Date());

if (!/^\d{4}-\d{2}-\d{2}$/.test(today)) {
  fail(`Ungültiges Datum: ${today} (erwartet JJJJ-MM-TT)`);
}

function fail(message) {
  console.error(`Fehler: ${message}`);
  process.exit(1);
}

function metaContent(html, attr, name) {
  const re = new RegExp(`<meta\\s+${attr}="${name}"\\s+content="([^"]*)"`, "i");
  const m = html.match(re);
  return m ? m[1] : null;
}

function decodeEntities(text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function plainText(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, "")).trim();
}

// Erzeugte Abschnitte nutzen \n; an die Zeilenenden der Quelldatei angleichen
function keepLineEndings(text) {
  return text.includes("\r\n") ? text.replace(/\r?\n/g, "\r\n") : text;
}

function germanDate(isoDate) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" })
    .format(new Date(`${isoDate}T00:00:00Z`));
}

// --- Artikel einlesen ---------------------------------------------------

const posts = fs
  .readdirSync(path.join(ROOT, "blog"))
  .filter((f) => f.endsWith(".html"))
  .map((file) => {
    const html = fs.readFileSync(path.join(ROOT, "blog", file), "utf8");
    const date = metaContent(html, "property", "article:published_time");
    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      fail(`blog/${file}: <meta property="article:published_time" content="JJJJ-MM-TT"> fehlt oder ist ungültig`);
    }
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (!h1) fail(`blog/${file}: <h1> fehlt`);
    const tags = html.match(/<p class="post-meta">[\s\S]*?<span class="blog-tags">([\s\S]*?)<\/span>/i);
    const summary = metaContent(html, "name", "blog-summary") ?? metaContent(html, "name", "description") ?? "";
    const draft = (metaContent(html, "name", "blog-status") || "").toLowerCase() === "draft";
    const modified = metaContent(html, "property", "article:modified_time");
    return {
      file,
      date,
      modified: modified && modified > date ? modified : date,
      titleHtml: h1[1].trim(),
      tagsHtml: tags ? tags[1].trim() : "",
      summaryHtml: summary,
      draft,
      published: includeAll || (!draft && date <= today),
    };
  })
  .sort((a, b) => (a.date === b.date ? a.file.localeCompare(b.file) : b.date.localeCompare(a.date)));

const published = posts.filter((p) => p.published);
const hidden = posts.filter((p) => !p.published);

// --- Dateien kopieren ---------------------------------------------------

const hiddenPaths = new Set(hidden.map((p) => path.join(ROOT, "blog", p.file)));

fs.rmSync(OUT, { recursive: true, force: true });

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (src === ROOT && EXCLUDE.has(entry.name)) continue;
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (hiddenPaths.has(from)) continue;
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}
copyDir(ROOT, OUT);

// --- blog.html: Liste + JSON-LD ----------------------------------------

const blogPath = path.join(OUT, "blog.html");
let blogHtml = fs.readFileSync(blogPath, "utf8");

const listItems = published
  .map(
    (p) => `        <li class="blog-item">
          <a href="blog/${p.file}" class="blog-item-link">
            <div class="blog-item-meta">
              <time datetime="${p.date}">${germanDate(p.date)}</time>${p.tagsHtml ? `\n              <span class="blog-tags">${p.tagsHtml}</span>` : ""}
            </div>
            <h2>${p.titleHtml}</h2>
            <p>${p.summaryHtml}</p>
          </a>
        </li>`
  )
  .join("\n");

const listRe = /(<!-- BLOG-LIST:START[^>]*-->)[\s\S]*?(\s*<!-- BLOG-LIST:END -->)/;
if (!listRe.test(blogHtml)) fail("blog.html: Marker <!-- BLOG-LIST:START --> / <!-- BLOG-LIST:END --> fehlen");
blogHtml = blogHtml.replace(listRe, (_, start, end) => `${start}\n${listItems}${end}`);

const ldRe = /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/;
const ldMatch = blogHtml.match(ldRe);
if (!ldMatch) fail("blog.html: JSON-LD-Block fehlt");
const ld = JSON.parse(ldMatch[2]);
const blogNode = ld["@graph"].find((n) => n["@type"] === "Blog");
blogNode.blogPost = published.map((p) => ({
  "@type": "BlogPosting",
  headline: plainText(p.titleHtml),
  datePublished: p.date,
  url: `${SITE_URL}/blog/${p.file}`,
}));
blogHtml = blogHtml.replace(ldRe, (_, open, __, close) => `${open}\n${JSON.stringify(ld, null, 2)}\n${close}`);
fs.writeFileSync(blogPath, keepLineEndings(blogHtml));

// --- sitemap.xml ---------------------------------------------------------

const sitemapPath = path.join(OUT, "sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
sitemap = sitemap.replace(/\s*<url>\s*<loc>[^<]*\/blog\/[^<]*<\/loc>[\s\S]*?<\/url>/g, "");
const sitemapEntries = published
  .map(
    (p) => `
  <url>
    <loc>${SITE_URL}/blog/${p.file}</loc>
    <lastmod>${p.modified}</lastmod>
    <priority>0.7</priority>
  </url>`
  )
  .join("");
sitemap = sitemap.replace(/(<loc>[^<]*\/blog\.html<\/loc>[\s\S]*?<\/url>)/, `$1${sitemapEntries}`);
fs.writeFileSync(sitemapPath, keepLineEndings(sitemap));

// --- Warnung: Links auf noch nicht veröffentlichte Artikel ---------------

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(p);
    return e.name.endsWith(".html") ? [p] : [];
  });
}
const warnings = [];
for (const file of htmlFiles(OUT)) {
  const html = fs.readFileSync(file, "utf8");
  for (const p of hidden) {
    if (html.includes(`blog/${p.file}`) || (path.basename(path.dirname(file)) === "blog" && html.includes(`"${p.file}"`))) {
      warnings.push(`${path.relative(OUT, file)} verlinkt auf noch nicht veröffentlichten Artikel blog/${p.file}`);
    }
  }
}

// --- Ausgabe -------------------------------------------------------------

console.log(`Stand: ${today}${includeAll ? " (Vorschau: alle Artikel)" : ""}`);
console.log(`Veröffentlicht (${published.length}):`);
for (const p of published) console.log(`  ${p.date}  blog/${p.file}${p.draft ? "  [Entwurf]" : ""}`);
if (hidden.length) {
  console.log(`Zurückgehalten (${hidden.length}):`);
  for (const p of hidden) console.log(`  ${p.date}  blog/${p.file}${p.draft ? "  [Entwurf]" : "  [geplant]"}`);
}
for (const w of warnings) console.warn(`Warnung: ${w}`);
console.log(`Fertig: ${path.relative(ROOT, OUT)}/`);
