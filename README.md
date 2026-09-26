# Nils Wiesmann — Portfolio-Website

Statische Website für Nils Wiesmann, Fahrzeugdiagnose-Spezialist für den Volkswagen-Konzern (VCDS, VCP, ODIS, SFD/SFD2, UNECE, Steuergeräte-/Datensatzmodifikation).

**Live:** [https://nilswiesmann.net/](https://nilswiesmann.net/) (Custom Domain, gehostet über GitHub Pages im Repo `nirvananils/nirvananils.github.io`)

## Struktur

- `index.html` — Startseite (Hero mit Portraitfoto und Parallax-Effekt, Über mich, Kompetenzen, Werdegang-Teaser, Schulungen-Teaser, Portfolio, Leistungen, Ablauf, Kontakt)
- `about.html` — Über mich, beruflicher Werdegang, Partner-Übersicht (Kartenraster mit LH.next (ehemals LHCoding), vcds.de, sfd.vcds.de, auto-intern.de)
- `schulungen.html` — Schulungsübersicht: verlinktes offizielles Auto-Intern-Schulungsprogramm + eigenes individuelles Angebot, Anfrage-/Buchungsformular (mailto-basiert, kein Server nötig)
- `schulungen/*.html` — Detailseiten der eigenen Schulungsthemen (Diagnose VCDS/VCP/ODIS, SFD/SFD2/UNECE, Retrofit mit VCDS), je mit eigener Illustration
- `blog.html` — Blog-Übersicht
- `blog/*.html` — einzelne Blog-Artikel
- `projekte.html` — eigene Projekte (Kartenraster)
- `referenzen.html` — Referenzen (Kartenraster, z. B. Schulungen für Prüforganisationen, TV-Reportage)
- `impressum.html` — Impressum
- `datenschutz.html` — Datenschutzerklärung
- `img/*.svg` — eigene, abstrakte Illustrationen (keine Fotos, außer dem Portraitfoto)
- `img/nils.jpg` — Portraitfoto (Original liegt zusätzlich als `Nils.jpg` im Projektordner, aber `.gitignore`t)
- `css/style.css` — Styles (inkl. Hero-Layout mit Portrait, Parallax-Klassen, Pfeil-Icons bei externen Links)
- `js/script.js` — Mobile-Navigation, E-Mail-Verschleierung gegen Bots, Buchungsformular-Logik, Parallax-Scrolleffekt
- `favicon.svg`, `llms.txt` — Favicon bzw. Kurzbeschreibung der Seite für LLM-Crawler
- `ROADMAP.md` — offene Punkte und nächste Schritte
- `CNAME` — Custom-Domain-Konfiguration für GitHub Pages (`nilswiesmann.net`)
- `.nojekyll` — deaktiviert die Jekyll-Verarbeitung auf GitHub Pages
- `.gitignore` — schließt lokale Claude-Code-Einstellungen (`.claude/`) und das Root-Foto-Duplikat (`Nils.jpg`) vom Repo aus

## Design-Hinweise

- Hero-Bereich (Startseite + alle Unterseiten) hat einen dezenten **Parallax-Scrolleffekt**: Elemente mit `data-parallax="<Faktor>"` verschieben sich beim Scrollen anteilig zur Scroll-Position (siehe `js/script.js`). Wird bei aktivierter Systemeinstellung „Bewegung reduzieren" automatisch deaktiviert.
- Externe Links (`target="_blank"`) tragen die Klasse `arrow-link` und bekommen automatisch ein „↗"-Symbol angehängt.

## Rechtliche Hinweise

- Es wird von der Kleinunternehmerregelung (§ 19 Abs. 1 UStG) Gebrauch gemacht, daher wird keine USt-ID ausgewiesen.
- Die im Impressum angegebene Anschrift ist eine c/o-Adresse bei Auto-Intern GmbH.
- E-Mail-Adressen und Telefonnummer liegen nur Base64-kodiert im HTML (`data-reveal-enc`) und werden erst nach einem echten Klick clientseitig entschlüsselt (`js/script.js`). Das schützt nicht vor Bots, die JavaScript ausführen und Klicks simulieren, reduziert aber Spam durch einfache Harvester deutlich, da die Adresse nirgends im statischen HTML im Klartext steht.
- Es werden keine Google Fonts oder andere externe Drittanbieter-Ressourcen geladen (nur Systemschriften) — dadurch entfällt das in Deutschland bekannte rechtliche Risiko rund um IP-Übermittlung an Google-Server beim Laden von Web-Fonts.

## Neuen Blog-Artikel hinzufügen

1. **Vorlage kopieren:** Eine bestehende Datei aus `blog/` duplizieren, z. B. `blog/sfd-und-sfd2-erklaert.html`, und unter einem neuen, sprechenden Dateinamen speichern (nur Kleinbuchstaben, Bindestriche statt Leerzeichen), z. B. `blog/mein-neuer-artikel.html`.
2. **Kopf anpassen:** In der neuen Datei ändern:
   - `<title>` — Artikeltitel + „| Nils Wiesmann"
   - `<meta name="description" ...>` — 1–2 Sätze Kurzbeschreibung
3. **Artikel-Header anpassen:**
   - `<h1>` — der eigentliche Titel
   - `<p class="post-meta">` — Datum (`datetime="JJJJ-MM-TT"` + lesbares Datum) und Tags in `<span class="blog-tags">Tag1 · Tag2</span>`
4. **Inhalt schreiben:** Zwischen `<h2>`-Zwischenüberschriften und `<p>`-Absätzen; `<ul class="check-list">` eignet sich für Aufzählungen. Interne Links z. B. auf `../schulungen.html` oder `../index.html#kontakt`.
5. **In der Blog-Übersicht eintragen:** In `blog.html` innerhalb `<ol class="blog-list">` einen neuen Eintrag nach diesem Muster ergänzen (am besten ganz oben, damit die neuesten Artikel zuerst erscheinen):

   ```html
   <li class="blog-item">
     <a href="blog/mein-neuer-artikel.html" class="blog-item-link">
       <div class="blog-item-meta">
         <time datetime="2026-10-01">01. Oktober 2026</time>
         <span class="blog-tags">Tag1 · Tag2</span>
       </div>
       <h2>Mein neuer Artikel</h2>
       <p>Kurze Zusammenfassung, die auch in der Übersicht angezeigt wird.</p>
     </a>
   </li>
   ```

6. **Veröffentlichen:** Änderungen speichern, dann in GitHub Desktop committen und auf „Push origin" klicken — nach kurzer Zeit ist der neue Artikel live.

Hinweis: `blog/*.html`-Dateien liegen eine Ebene tiefer als die Startseite, daher zeigen alle internen Links darin auf `../` (z. B. `../css/style.css`, `../index.html`).

## Neue Schulungs-Detailseite hinzufügen

Analog zum Blog: Eine bestehende Datei aus `schulungen/` duplizieren (z. B. `schulungen/diagnose-vcds-vcp-odis.html`), Titel/Beschreibung/Inhalt anpassen, bei Bedarf eine neue Illustration unter `img/` ablegen (SVG, gleicher roter Farbstil wie die bestehenden), und in `schulungen.html` im Kartenraster (`<div class="card-grid">`) einen neuen `<article class="card">`-Eintrag mit Link auf die neue Datei ergänzen. Auch hier zeigen interne Links aus dem Unterordner auf `../`.

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder z. B. mit:

```
npx serve .
```

## GitHub Pages / Custom Domain

Die Seite ist bereits veröffentlicht: Repository `nirvananils/nirvananils.github.io` (Public), **Settings → Pages → Source: Deploy from a branch → main / (root)**. Für die Custom Domain `nilswiesmann.net` liegt eine `CNAME`-Datei im Repo (wird von GitHub automatisch angelegt/aktualisiert, sobald unter Settings → Pages eine Custom Domain eingetragen wird) — der DNS-Eintrag beim Domain-Provider muss zusätzlich auf GitHub Pages zeigen.

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
