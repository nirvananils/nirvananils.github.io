# Nils Wiesmann — Portfolio-Website

Statische Website für Nils Wiesmann, Fahrzeugdiagnose-Spezialist für den Volkswagen-Konzern (VCDS, VCP, ODIS, SFD, UNECE, Steuergeräte-/Datensatzmodifikation).

## Struktur

- `index.html` — Startseite
- `impressum.html` — Impressum (enthält Platzhalter, siehe unten)
- `datenschutz.html` — Datenschutzerklärung
- `css/style.css` — Styles
- `js/script.js` — Mobile-Navigation
- `.nojekyll` — deaktiviert die Jekyll-Verarbeitung auf GitHub Pages

## Offene Punkte vor Veröffentlichung

Im Impressum (`impressum.html`) sind noch Platzhalter markiert mit `[BITTE ERGÄNZEN]`:

- Telefonnummer
- Umsatzsteuer-ID (falls vorhanden)
- Gewerbeanmeldung / zuständige Kammer

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
