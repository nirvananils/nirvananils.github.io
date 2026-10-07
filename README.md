# Nils Wiesmann — Portfolio-Website

Statische Website für Nils Wiesmann, Fahrzeugdiagnose-Spezialist für den Volkswagen-Konzern (VCDS, VCP, ODIS, SFD/SFD2, UNECE, Steuergeräte-/Datensatzmodifikation).

**Live:** [https://nilswiesmann.net/](https://nilswiesmann.net/) (Custom Domain, gehostet über GitHub Pages im Repo `nirvananils/nirvananils.github.io`)

## Struktur

- `index.html` — Startseite (Hero mit Portraitfoto und Parallax-Effekt, Über mich, Kompetenzen, Werdegang-Teaser, Schulungen-Teaser, Portfolio, Leistungen, Ablauf, Kontakt)
- `kompetenzen.html`, `leistungen.html`, `ablauf.html`, `kontakt.html` — eigene Unterseiten je Menüpunkt (die Startseite zeigt dazu nur kurze Teaser mit Link)
- `about.html` — Über mich, beruflicher Werdegang, Partner-Übersicht (Kartenraster mit LH.next (ehemals LHCoding), vcds.de, sfd.vcds.de, auto-intern.de)
- `schulungen.html` — Schulungsübersicht: verlinktes offizielles Auto-Intern-Schulungsprogramm + eigenes individuelles Angebot, Anfrage-/Buchungsformular (mailto-basiert, kein Server nötig)
- `schulungen/*.html` — Detailseiten der eigenen Schulungsthemen (Diagnose VCDS/VCP/ODIS, SFD/SFD2/UNECE, Retrofit mit VCDS), je mit eigener Illustration
- `blog.html` — Blog-Übersicht (Liste und JSON-LD werden beim Build aus `blog/*.html` erzeugt)
- `blog/*.html` — einzelne Blog-Artikel (auch geplante, siehe unten)
- `tools/build.mjs` — Build-Skript: erzeugt die veröffentlichte Website in `_site/` (ohne geplante Artikel und Entwürfe)
- `.github/workflows/deploy.yml` — baut und veröffentlicht die Seite bei jedem Push und täglich um ca. 04:15/05:15 Uhr
- `projekte.html` — eigene Projekte (Kartenraster)
- `referenzen.html` — Referenzen (Kartenraster, z. B. Schulungen für Prüforganisationen, TV-Reportage, Zoll-Expertise zu Diagnose-Plagiaten, HEX-NET-Werbeclip auf YouTube)
- `impressum.html` — Impressum
- `datenschutz.html` — Datenschutzerklärung
- `agb.html` — Allgemeine Geschäftsbedingungen inkl. Widerrufsbelehrung und Muster-Widerrufsformular (im Footer aller Seiten verlinkt)
- `img/*.svg` — eigene, abstrakte Illustrationen (keine Fotos, außer dem Portraitfoto)
- `img/nils.jpg` — Portraitfoto (Original liegt zusätzlich als `Nils.jpg` im Projektordner, aber `.gitignore`t)
- `css/style.css` — Styles (inkl. Hero-Layout mit Portrait, Parallax-Klassen, Pfeil-Icons bei externen Links)
- `js/script.js` — Mobile-Navigation, E-Mail-Verschleierung gegen Bots, Buchungsformular-Logik, Parallax-Scrolleffekt, Cookie-Banner und Google Analytics
- `favicon.svg`, `llms.txt` — Favicon bzw. Kurzbeschreibung der Seite für LLM-Crawler
- `ROADMAP.md` — offene Punkte und nächste Schritte
- `robots.txt`, `sitemap.xml` — Crawler-Regeln und Sitemap aller Seiten (bei neuen Seiten `sitemap.xml` ergänzen)
- `404.html` — Fehlerseite für nicht gefundene Seiten (GitHub Pages nutzt sie automatisch)
- `img/og-image.jpg` — Vorschaubild (1200 × 630) für geteilte Links in Social Media und Messengern
- `CNAME` — Custom-Domain-Konfiguration für GitHub Pages (`nilswiesmann.net`)
- `.nojekyll` — deaktiviert die Jekyll-Verarbeitung auf GitHub Pages
- `.gitignore` — schließt lokale Claude-Code-Einstellungen (`.claude/`) und das Root-Foto-Duplikat (`Nils.jpg`) vom Repo aus

## Design-Hinweise

- Hero-Bereich (Startseite + alle Unterseiten) hat einen dezenten **Parallax-Scrolleffekt**: Elemente mit `data-parallax="<Faktor>"` verschieben sich beim Scrollen anteilig zur Scroll-Position (siehe `js/script.js`). Wird bei aktivierter Systemeinstellung „Bewegung reduzieren" automatisch deaktiviert.
- Externe Links (`target="_blank"`) tragen die Klasse `arrow-link` und bekommen automatisch ein „↗"-Symbol angehängt.

## Bilder für Projekte und Referenzen

Projekt- und Referenzkarten (`projekte.html`, `referenzen.html`) zeigen aktuell abstrakte SVG-Illustrationen aus `img/projekte/` bzw. `img/referenzen/`. Echte Fotos oder Screenshots ergänzen:

1. Bilder als WebP (ca. 1200 px breit) z. B. nach `img/projekte/billify/` legen.
2. Titelbild: den `<div class="card-image-wrap">` der Karte durch `<a class="card-image-wrap gallery-link" href="…" data-caption="…"><img class="card-image" …></a>` ersetzen.
3. Weitere Bilder als Vorschaubilder in `<div class="card-thumbs">` direkt darunter, jeweils als `<a class="gallery-link" href="…"><img …></a>`.

Alle Galerie-Links einer Karte öffnen sich gemeinsam in einer Lightbox (Vor/Zurück, Pfeiltasten, ESC; siehe `js/script.js`). Ein fertiges Beispiel steht als HTML-Kommentar oben in beiden Seiten. Bei Referenzen nur Fotos mit Freigabe der Abgebildeten bzw. Auftraggeber verwenden.

## Rechtliche Hinweise

- Es wird von der Kleinunternehmerregelung (§ 19 Abs. 1 UStG) Gebrauch gemacht, daher wird keine USt-ID ausgewiesen.
- Die im Impressum angegebene Anschrift ist eine c/o-Adresse bei Auto-Intern GmbH.
- E-Mail-Adressen und Telefonnummer liegen nur Base64-kodiert im HTML (`data-reveal-enc`) und werden erst nach einem echten Klick clientseitig entschlüsselt (`js/script.js`). Das schützt nicht vor Bots, die JavaScript ausführen und Klicks simulieren, reduziert aber Spam durch einfache Harvester deutlich, da die Adresse nirgends im statischen HTML im Klartext steht.
- Es werden keine Google Fonts oder andere externe Drittanbieter-Ressourcen geladen (nur Systemschriften) — dadurch entfällt das in Deutschland bekannte rechtliche Risiko rund um IP-Übermittlung an Google-Server beim Laden von Web-Fonts.
- Einzige Ausnahme: Google Analytics 4, aber **nur nach Einwilligung** im Cookie-Banner (siehe unten und `datenschutz.html`, Abschnitte 6 und 7).

## Neuen Blog-Artikel hinzufügen (auch geplant)

Die Blog-Übersicht, das JSON-LD in `blog.html` und die Blog-Einträge in `sitemap.xml` werden beim Veröffentlichen automatisch erzeugt. Pro Artikel reicht eine Datei in `blog/`.

1. **Vorlage kopieren:** Eine bestehende Datei aus `blog/` duplizieren, z. B. `blog/sfd-und-sfd2-erklaert.html`, und unter einem neuen, sprechenden Dateinamen speichern (nur Kleinbuchstaben, Bindestriche statt Leerzeichen), z. B. `blog/mein-neuer-artikel.html`.
2. **Veröffentlichungsdatum setzen:** `<meta property="article:published_time" content="JJJJ-MM-TT">` bestimmt, **ab wann der Artikel live ist**. Liegt das Datum in der Zukunft, bleibt der Artikel bis zu diesem Tag unsichtbar: keine Übersicht, keine Sitemap, direkte URL liefert 404. Am Stichtag geht er morgens automatisch online (täglicher Lauf in GitHub Actions, ca. 04:15/05:15 Uhr deutscher Zeit). Dasselbe Datum auch in `datePublished` (JSON-LD) und in `<p class="post-meta"><time datetime="…">` eintragen.
3. **Entwurf ohne Datum:** Soll ein Artikel vorerst gar nicht erscheinen, zusätzlich `<meta name="blog-status" content="draft">` in den `<head>` schreiben. Zum Veröffentlichen die Zeile wieder entfernen.
4. **Kopf anpassen:**
   - `<title>` — Artikeltitel + „| Nils Wiesmann"
   - `<meta name="description" ...>` — 1–2 Sätze Kurzbeschreibung (für Google)
   - `<meta name="blog-summary" ...>` — Text, der in der Blog-Übersicht unter dem Titel steht (fehlt die Zeile, wird `description` verwendet)
   - `<link rel="canonical">` und `og:url` — neue URL des Artikels
   - `og:title`, `og:description` — wie Titel und Beschreibung
   - JSON-LD-Block (`application/ld+json`): `headline`, `description`, `datePublished`, `url`, `mainEntityOfPage` und letzter Eintrag der `BreadcrumbList`
   - optional `<meta property="article:modified_time" content="JJJJ-MM-TT">` bei späteren Überarbeitungen (wird als `lastmod` in die Sitemap übernommen)
5. **Artikel-Header anpassen:** `<h1>` (Titel, erscheint auch in der Übersicht) und `<p class="post-meta">` mit Datum und Tags in `<span class="blog-tags">Tag1 · Tag2</span>` (Tags erscheinen auch in der Übersicht).
6. **Inhalt schreiben:** Zwischen `<h2>`-Zwischenüberschriften und `<p>`-Absätzen; `<ul class="check-list">` eignet sich für Aufzählungen. Interne Links z. B. auf `../schulungen.html` oder `../index.html#kontakt`.
7. **Vorschau:** `node tools/build.mjs --all` baut `_site/` inklusive geplanter Artikel und Entwürfe, danach `npx serve _site`. Mit `node tools/build.mjs --date=2026-12-01` lässt sich prüfen, wie die Seite an einem bestimmten Tag aussieht. Das Skript listet auf, welche Artikel veröffentlicht bzw. zurückgehalten werden, und warnt, wenn eine andere Seite schon auf einen noch nicht veröffentlichten Artikel verlinkt.
8. **Hochladen:** In GitHub Desktop committen und „Push origin" klicken. Fertige Artikel sind nach ca. 1–2 Minuten live, geplante am eingestellten Tag.

**Wichtig:** Das Repository ist öffentlich. Geplante Artikel und Entwürfe sind auf der Website erst ab ihrem Datum sichtbar, aber im Quellcode auf GitHub für jeden lesbar, der das Repo aufruft. Vertrauliches erst kurz vor Veröffentlichung pushen.

Hinweis: `blog/*.html`-Dateien liegen eine Ebene tiefer als die Startseite, daher zeigen alle internen Links darin auf `../` (z. B. `../css/style.css`, `../index.html`).

## Google Analytics und Cookie-Banner

- Die Mess-ID steht in `js/script.js` (Abschnitt „Google Analytics 4 mit Einwilligung“) in `const GA_MEASUREMENT_ID = "";`. Leer = kein Banner, kein Analytics.
- Mit gesetzter ID (`G-XXXXXXXXXX`) erscheint beim ersten Besuch ein Banner mit gleichwertigen Buttons „Ablehnen“/„Akzeptieren“. `gtag.js` wird **erst nach Zustimmung** geladen. Die Wahl liegt im `localStorage` (`nw-consent-analytics`). Über den automatisch ergänzten Footer-Link „Cookie-Einstellungen“ lässt sie sich ändern; ein Widerruf löscht die `_ga`-Cookies.
- Konfiguration: Google Signals und Werbepersonalisierung sind im Code deaktiviert.
- Einmalig in Google Analytics einstellen (sonst stimmt die Datenschutzerklärung nicht):
  - Verwaltung → Kontoeinstellungen → **Zusatz zur Datenverarbeitung (Auftragsverarbeitung) akzeptieren**
  - Verwaltung → Datenerfassung und -änderung → Datenaufbewahrung → **14 Monate**
  - Verwaltung → Datenerfassung → **Google Signals aus**, granulare Standort- und Gerätedaten nach Bedarf aus
- Bei Änderungen an Cookies/Diensten `datenschutz.html` (Abschnitte 6 und 7) und dessen „Stand“-Datum anpassen.

## Neue Schulungs-Detailseite hinzufügen

Analog zum Blog: Eine bestehende Datei aus `schulungen/` duplizieren (z. B. `schulungen/diagnose-vcds-vcp-odis.html`), Titel/Beschreibung/Inhalt anpassen, bei Bedarf eine neue Illustration unter `img/` ablegen (SVG, gleicher roter Farbstil wie die bestehenden), und in `schulungen.html` im Kartenraster (`<div class="card-grid">`) einen neuen `<article class="card">`-Eintrag mit Link auf die neue Datei ergänzen. Auch hier zeigen interne Links aus dem Unterordner auf `../`.

## Lokal ansehen

Quelldateien direkt (Blog-Übersicht ist hier leer, weil sie erst beim Build entsteht):

```
npx serve .
```

Veröffentlichungsstand inkl. Blog-Übersicht:

```
node tools/build.mjs
npx serve _site
```

## GitHub Pages / Custom Domain

Die Seite ist bereits veröffentlicht: Repository `nirvananils/nirvananils.github.io` (Public), **Settings → Pages → Source: GitHub Actions** (Workflow `.github/workflows/deploy.yml` baut mit `tools/build.mjs` und veröffentlicht `_site/`). Ein manueller Neubau ist unter Actions → „Website veröffentlichen“ → „Run workflow“ möglich. Für die Custom Domain `nilswiesmann.net` liegt eine `CNAME`-Datei im Repo (wird von GitHub automatisch angelegt/aktualisiert, sobald unter Settings → Pages eine Custom Domain eingetragen wird) — der DNS-Eintrag beim Domain-Provider muss zusätzlich auf GitHub Pages zeigen.

Für ein komplett neues, unabhängiges Projekt nach diesem Muster:

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<nutzername>/<repo-name>.git
git push -u origin main
```

Bei einem Repo-Namen nach dem Muster `<nutzername>.github.io` wird daraus automatisch die „User Page" unter `https://<nutzername>.github.io/` (ohne Unterpfad); jeder andere Repo-Name ergibt ein „Project Page" unter `https://<nutzername>.github.io/<repo-name>/`.
