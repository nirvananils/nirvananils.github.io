# Nils Wiesmann — Portfolio-Website

Statische Website für Nils Wiesmann, Fahrzeugdiagnose-Spezialist für den Volkswagen-Konzern (VCDS, VCP, ODIS, SFD/SFD2, UNECE, Steuergeräte-/Datensatzmodifikation).

## Struktur

- `index.html` — Startseite
- `about.html` — Über mich / beruflicher Werdegang
- `schulungen.html` — Schulungsübersicht mit Anfrage-/Buchungsformular (mailto-basiert, kein Server nötig)
- `blog.html` — Blog-Übersicht
- `blog/*.html` — einzelne Blog-Artikel
- `impressum.html` — Impressum
- `datenschutz.html` — Datenschutzerklärung
- `css/style.css` — Styles
- `js/script.js` — Mobile-Navigation, E-Mail-Verschleierung gegen Bots, Buchungsformular-Logik
- `.nojekyll` — deaktiviert die Jekyll-Verarbeitung auf GitHub Pages

## Rechtliche Hinweise

- Es wird von der Kleinunternehmerregelung (§ 19 Abs. 1 UStG) Gebrauch gemacht, daher wird keine USt-ID ausgewiesen.
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

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder z. B. mit:

```
npx serve .
```

## Veröffentlichen mit GitHub Pages

1. Neues Repository auf GitHub anlegen (z. B. `nils-wiesmann-diagnose`).
2. In diesem Ordner:

   ```
   git init
   git add .
   git commit -m "Initial commit: Website Nils Wiesmann"
   git branch -M main
   git remote add origin https://github.com/<dein-github-nutzername>/<repo-name>.git
   git push -u origin main
   ```

3. Auf GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, Branch `main`, Ordner `/ (root)` auswählen und speichern.
4. Nach kurzer Zeit ist die Seite unter `https://<dein-github-nutzername>.github.io/<repo-name>/` erreichbar.

Für eine eigene Domain kann zusätzlich eine `CNAME`-Datei mit dem Domainnamen angelegt werden.
