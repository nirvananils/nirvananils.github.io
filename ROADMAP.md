# Roadmap — nächste Schritte

Stand: 2026-09-27. Diese Datei sammelt die nächsten Schritte für die Website nilswiesmann.net.

## Zuletzt erledigt

- [x] Unterseite `referenzen.html` angelegt und im Hauptmenü aller Seiten (nach „Projekte") verlinkt, Eintrag in `llms.txt`
- [x] Referenz „Schulung von Prüforganisationen" (ohne Namensnennung aus Datenschutzgründen)
- [x] Referenz „Experte in einer TV-Reportage" (Ausstrahlung Frühjahr 2027)
- [x] Projekte-Seite: Billify, VCDS Autoscan Parser, VCDS HV Manager (in Planung)
- [x] Blogbeitrag „Heute Videodreh für eine TV-Reportage" (26.09.2026, `blog/videodreh-tv-reportage.html`), verlinkt von der Referenzen-Karte

- [x] Eigene Unterseiten für Kompetenzen, Leistungen, Ablauf und Kontakt; Menü auf allen Seiten umgestellt, Startseite mit Teasern
- [x] AGB (`agb.html`) mit Widerrufsbelehrung erstellt, Datenschutzerklärung überarbeitet, Impressum auf § 5 DDG aktualisiert
- [x] Mobile Navigation: Burger-Menü jetzt bis 1040 px Breite (vorher lief das Menü auf Tablets über)
- [x] Spitzenstellungs-Werbung („einer der führenden …“) entfernt, „zertifizierte Zugangswege“ durch „offizielle Zugangswege“ ersetzt
- [x] Impressum, Datenschutz und AGB mit Menü und Footer wie alle anderen Seiten
- [x] Technische SEO für alle Seiten: canonical, Open Graph, strukturierte Daten (JSON-LD), `sitemap.xml`, `robots.txt`, `404.html`, Bilder verkleinert (PNG → WebP)

## 1. Inhalte von Nils (Bilder & Infos)

- [ ] Referenzen: Bilder und Infos liefern (z. B. Fotos von Schulungen/Dreh, Eckdaten, Zeitraum, Freigaben)
- [ ] Projekte: Bilder und Infos liefern (Screenshots, Kurzbeschreibung, Links zu Repo/Demo)
- [ ] Leistungen: Bilder und Infos liefern (Beschreibung je Leistung, Ablauf, ggf. Preise/Konditionen)
- [ ] Danach: Inhalte auf den jeweiligen Seiten einbauen

## 2. Eigene Unterseite für jeden Menüpunkt

Ziel: Jeder Menüpunkt in der Kopfzeile führt auf eine eigene Unterseite statt auf einen Abschnitt der Startseite.

- [x] Über mich (`about.html`), Schulungen (`schulungen.html`), Blog (`blog.html`), Projekte (`projekte.html`), Referenzen (`referenzen.html`)
- [x] Kompetenzen: eigene Unterseite (z. B. `kompetenzen.html`, aktuell `index.html#kompetenzen`)
- [x] Leistungen: eigene Unterseite (z. B. `leistungen.html`, aktuell `index.html#leistungen`)
- [x] Ablauf: eigene Unterseite (z. B. `ablauf.html`, aktuell `index.html#ablauf`)
- [x] Kontakt: eigene Unterseite (z. B. `kontakt.html`, aktuell `index.html#kontakt`)
- [x] Menü auf allen Seiten auf die neuen Unterseiten umstellen; Startseite behält kurze Teaser mit Link auf die Unterseiten
- [x] Neue Unterseiten in `sitemap.xml`, `llms.txt` und README eintragen; `<head>` (canonical, Open Graph, JSON-LD) von bestehender Unterseite übernehmen
- [ ] Hero-Einleitungstexte der vier neuen Unterseiten prüfen und ggf. eigene Formulierung einsetzen

## 0. Sofort (Nils, in GitHub)

- [ ] HTTPS erzwingen: Repo `nirvananils.github.io` → Settings → Pages → Haken bei „Enforce HTTPS“ (aktuell liefert `http://nilswiesmann.net` die Seite unverschlüsselt aus)

## 2a. Rechtstexte

- [ ] AGB, Widerrufsbelehrung und Datenschutzerklärung rechtlich prüfen lassen (z. B. IHK, Anwalt oder Rechtstexte-Dienst)
- [ ] AGB § 7: Absagefrist 48 Stunden für Diagnose-/Codiertermine bestätigen oder anpassen
- [ ] Prüfen, ob die c/o-Anschrift als ladungsfähige Anschrift im Impressum ausreicht

## 3. Referenzen (`referenzen.html`)

- [ ] Kartentexte der beiden Referenzen prüfen und ggf. eigene Formulierung einsetzen
- [ ] TV-Reportage: nach Freigabe Sender, Sendungsname und Sendetermin ergänzen
- [ ] TV-Reportage: Folge-Blogbeitrag mit Details (Sender, Sendetermin) schreiben, sobald freigegeben
- [ ] TV-Reportage: nach Ausstrahlung (Frühjahr 2027) Text auf Vergangenheit umstellen und Link zur Mediathek ergänzen
- [ ] Weitere Referenzen ergänzen, sobald vorhanden (Karte `<article class="card">` kopieren)
- [ ] Optional: Referenzen-Teaser auf der Startseite (`index.html`) oder auf `about.html`

## 4. Projekte (`projekte.html`)

- [ ] Platzhalter-Intro („Platzhalter — hier entstehen …") durch echten Einleitungstext ersetzen und `TODO (Nils)`-Kommentar entfernen
- [ ] VCDS Autoscan Parser: Link zu Repo/Demo ergänzen, sobald veröffentlicht
- [ ] VCDS HV Manager: Karte aktualisieren, sobald die Umsetzung beginnt

## 5. Startseite (`index.html`)

- [ ] Eigene Bilder für die Kompetenz-Karten „VCP" und „UNECE R155 / R156" erstellen (aktuell `img/placeholder.svg`)

## 6. Mittelfristig

- [ ] Google-Unternehmensprofil (Google Business Profile) anlegen; Name, Anschrift und Kontaktdaten identisch zum Impressum
- [ ] Einsatzgebiet nennen (Region vor Ort, was remote möglich ist), z. B. auf `leistungen.html` und `kontakt.html`
- [ ] Eigene E-Mail-Adresse auf der eigenen Domain (z. B. `kontakt@nilswiesmann.net`) statt `gruppe.ai` + Gmail; danach Kontaktseiten, Impressum, Datenschutz und AGB anpassen
- [ ] Kundenstimmen (mit Zustimmung) auf `referenzen.html` ergänzen
- [ ] FAQ-Seite (z. B. Kosten einer Codierung, Garantie, Remote-Möglichkeit), mit `FAQPage`-JSON-LD
- [ ] Barrierefreiheit weiter verbessern (Kontraste, Tastaturbedienung prüfen); gesetzlich nicht verpflichtend, da Kleinstunternehmen vom BFSG ausgenommen

- [ ] Google Search Console und Bing Webmaster Tools einrichten, `https://nilswiesmann.net/sitemap.xml` einreichen
- [ ] Eigene Vorschaubilder je Blogbeitrag (statt `img/og-image.jpg` für alle Seiten)

- [ ] Weitere Blog-Artikel (Anleitung siehe `README.md`)
- [ ] Schulungs-Anfrageformular (`schulungen.html`) auf Formular-Dienst umstellen (z. B. Web3Forms oder Formspree) statt `mailto:`
- [ ] Neue Seiten jeweils in `llms.txt`, `sitemap.xml` und in der README-Struktur nachtragen; im `<head>` canonical, Open-Graph-Tags und JSON-LD von einer bestehenden Seite übernehmen
