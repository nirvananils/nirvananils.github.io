# Nils Wiesmann — Portfolio-Website

Statische Website für Nils Wiesmann, Fahrzeugdiagnose-Spezialist für den Volkswagen-Konzern (VCDS, VCP, ODIS, SFD/SFD2, UNECE, Steuergeräte-/Datensatzmodifikation).

## Struktur

- `index.html` — Startseite
- `schulungen.html` — Schulungsübersicht mit Anfrage-/Buchungsformular (mailto-basiert, kein Server nötig)
- `impressum.html` — Impressum
- `datenschutz.html` — Datenschutzerklärung
- `css/style.css` — Styles
- `js/script.js` — Mobile-Navigation, E-Mail-Verschleierung gegen Bots, Buchungsformular-Logik
- `.nojekyll` — deaktiviert die Jekyll-Verarbeitung auf GitHub Pages

## Rechtliche Hinweise

- Es wird von der Kleinunternehmerregelung (§ 19 Abs. 1 UStG) Gebrauch gemacht, daher wird keine USt-ID ausgewiesen.
- E-Mail-Adressen und Telefonnummer liegen nur Base64-kodiert im HTML (`data-reveal-enc`) und werden erst nach einem echten Klick clientseitig entschlüsselt (`js/script.js`). Das schützt nicht vor Bots, die JavaScript ausführen und Klicks simulieren, reduziert aber Spam durch einfache Harvester deutlich, da die Adresse nirgends im statischen HTML im Klartext steht.
- Es werden keine Google Fonts oder andere externe Drittanbieter-Ressourcen geladen (nur Systemschriften) — dadurch entfällt das in Deutschland bekannte rechtliche Risiko rund um IP-Übermittlung an Google-Server beim Laden von Web-Fonts.

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
