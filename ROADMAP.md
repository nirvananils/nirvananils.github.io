# Roadmap — nächste Schritte

Stand: 2026-09-27. Diese Datei sammelt die nächsten Schritte für die Website nilswiesmann.net.

## Zuletzt erledigt

- [x] Bilder für die Kompetenz-Karten „VCP" und „UNECE R155 / R156" eingebaut (WebP), keine Platzhalter mehr
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
- [x] Projekte und Referenzen ausgebaut: Details je Karte, Status, Technologien, Titel-Illustrationen, Bildergalerie mit Lightbox; Referenzen um „Mitwirkung und laufende Tätigkeiten“ ergänzt
- [x] Kompetenzen, Leistungen, Ablauf und Kontakt um Vertiefungslinks, Zielgruppen, Vorbereitungs-Checkliste und weitere Kontaktwege ergänzt
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
- [ ] Neue Texte prüfen: Zielgruppen-Karten (`leistungen.html`), Vorbereitungs-Checkliste (`ablauf.html`), Einleitungen auf `projekte.html` und `referenzen.html`
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
- [ ] Fotos zu den Referenzen ergänzen (nur mit Freigabe), Anleitung in `README.md`
- [ ] Kundenstimmen: vorbereiteten, auskommentierten Abschnitt in `referenzen.html` aktivieren, sobald Zitate vorliegen
- [ ] Weitere Referenzen ergänzen, sobald vorhanden (Karte `<article class="card">` kopieren)
- [ ] Optional: Referenzen-Teaser auf der Startseite (`index.html`) oder auf `about.html`

## 4. Projekte (`projekte.html`)

- [x] Platzhalter-Intro durch echten Einleitungstext ersetzt
- [ ] Screenshots je Projekt ergänzen (Anleitung in `README.md`, Abschnitt „Bilder für Projekte und Referenzen“)
- [ ] VCDS Autoscan Parser: Link zu Repo/Demo ergänzen, sobald veröffentlicht
- [ ] VCDS HV Manager: Karte aktualisieren, sobald die Umsetzung beginnt

## 5. Fehlende Bilder und Platzhalter

Stand 2026-09-27. Echte Platzhalter (`img/placeholder.svg`) gibt es keine mehr. Die folgenden Stellen zeigen aber nur abstrakte SVG-Illustrationen oder gar kein eigenes Bild.

- [x] Kompetenz-Karten „VCP" und „UNECE R155 / R156" (`kompetenzen.html`): `img/VCP.webp` und `img/UNECE.webp` eingebaut
- [ ] UNECE-Bild prüfen: Auf dem Fahrzeug steht „LUCID" (Fremdmarke); ggf. durch ein Bild ohne Markenschriftzug ersetzen
- [ ] Blog: Eigenes Beitragsbild je Artikel (auf `blog.html` und im Artikel selbst gibt es aktuell keine Bilder)
  - [ ] `blog/sfd-in-vcds-verfuegbar.html`
  - [ ] `blog/sfd-und-sfd2-erklaert.html`
  - [ ] `blog/unece-r155-r156-werkstatt.html`
  - [ ] `blog/vcds-update-26-9-sfd.html`
  - [ ] `blog/vcds-vcp-odis-im-vergleich.html`
  - [ ] `blog/videodreh-tv-reportage.html`
- [ ] Blog: Eigenes Vorschaubild (`og:image`, 1200 × 630) je Beitrag statt `img/og-image.jpg` für alle Seiten
- [ ] Projekte (`projekte.html`): echte Screenshots statt Illustration
  - [ ] Billify (`img/projekte/billify.svg`)
  - [ ] VCDS Autoscan Parser (`img/projekte/autoscan-parser.svg`)
  - [ ] VCDS HV Manager (`img/projekte/hv-manager.svg`)
- [ ] Referenzen (`referenzen.html`): echte Fotos statt Illustration (nur mit Freigabe)
  - [ ] Schulung von Prüforganisationen (`img/referenzen/schulung-pruefinstitution.svg`)
  - [ ] TV-Reportage (`img/referenzen/tv-reportage.svg`)
  - [ ] Experte für den Zoll (`img/referenzen/zoll-plagiate.svg`)
  - [ ] Werbeclip zur Einführung des HEX-NET (`img/referenzen/werbeclip-hexnet.svg`)
- [ ] Schulungs-Unterseiten (`schulungen/`): echte Fotos statt Illustration
  - [ ] VCDS, VCP & ODIS im Praxiseinsatz (`img/schulung-diagnose.svg`)
  - [ ] Retrofit-Schulung mit VCDS (`img/schulung-retrofit.svg`)
  - [ ] SFD, SFD2 & UNECE-Konformität (`img/schulung-sfd.svg`)
- [ ] Danach `img/placeholder.svg` löschen, falls nicht mehr benötigt

## 6. Mittelfristig

- [ ] Google-Unternehmensprofil (Google Business Profile) anlegen; Name, Anschrift und Kontaktdaten identisch zum Impressum
- [ ] Einsatzgebiet nennen (Region vor Ort, was remote möglich ist), z. B. auf `leistungen.html` und `kontakt.html`
- [ ] Eigene E-Mail-Adresse auf der eigenen Domain (z. B. `kontakt@nilswiesmann.net`) statt `gruppe.ai` + Gmail; danach Kontaktseiten, Impressum, Datenschutz und AGB anpassen
- [ ] Kundenstimmen (mit Zustimmung) auf `referenzen.html` ergänzen
- [ ] FAQ-Seite (z. B. Kosten einer Codierung, Garantie, Remote-Möglichkeit), mit `FAQPage`-JSON-LD
- [ ] Barrierefreiheit weiter verbessern (Kontraste, Tastaturbedienung prüfen); gesetzlich nicht verpflichtend, da Kleinstunternehmen vom BFSG ausgenommen

- [ ] Google Search Console und Bing Webmaster Tools einrichten, `https://nilswiesmann.net/sitemap.xml` einreichen
- [ ] Eigene Vorschaubilder je Blogbeitrag: siehe Abschnitt 5

- [ ] Weitere Blog-Artikel (Anleitung siehe `README.md`)
- [ ] Schulungs-Anfrageformular (`schulungen.html`) auf Formular-Dienst umstellen (z. B. Web3Forms oder Formspree) statt `mailto:`
- [ ] Neue Seiten jeweils in `llms.txt`, `sitemap.xml` und in der README-Struktur nachtragen; im `<head>` canonical, Open-Graph-Tags und JSON-LD von einer bestehenden Seite übernehmen
