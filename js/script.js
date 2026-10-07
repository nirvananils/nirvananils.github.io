const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* Easter Egg: Gruß an neugierige Entwickler in der Konsole */
console.log(
  "%c NW %c VCDS> Fehlerspeicher dieser Seite: leer. Guter Code. \n%cTipp: der Konami-Code (↑ ↑ ↓ ↓ ← → ← → B A) tut hier auch etwas.",
  "background:#ff5566;color:#0d131b;font-family:monospace;font-weight:700;padding:2px 6px;border-radius:4px 0 0 4px;",
  "background:#131a23;color:#eef2f6;font-family:monospace;padding:2px 6px;border-radius:0 4px 4px 0;",
  "color:#9fb0c3;font-family:monospace;"
);

/* Easter Egg: Konami-Code startet eine kleine Diagnose-Terminal-Simulation */
const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let konamiProgress = 0;

window.addEventListener("keydown", (event) => {
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  if (key === konamiSequence[konamiProgress]) {
    konamiProgress++;
    if (konamiProgress === konamiSequence.length) {
      konamiProgress = 0;
      runDiagnosticEasterEgg();
    }
  } else {
    konamiProgress = key === konamiSequence[0] ? 1 : 0;
  }
});

function runDiagnosticEasterEgg() {
  if (document.getElementById("easterEggOverlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "easterEggOverlay";
  overlay.className = "easter-egg-overlay";
  overlay.innerHTML = `
    <div class="easter-egg-terminal">
      <p>&gt; VCDS-Konami-Modus gestartet…</p>
      <p>&gt; Verbindung zu Steuergerät 17 (Nostalgie) hergestellt.</p>
      <p>&gt; Fehlerspeicher lesen…</p>
      <p>&gt; 1 Eintrag gefunden:</p>
      <p class="easter-egg-code">00042 – Kein Fehler. Nur ein Gruß von Nils an alle, die im Quellcode stöbern.</p>
      <p>&gt; Klick irgendwo oder ESC zum Schließen.</p>
    </div>
  `;
  document.body.appendChild(overlay);

  const close = () => {
    overlay.remove();
    window.removeEventListener("keydown", onKey);
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
  };
  overlay.addEventListener("click", close);
  window.addEventListener("keydown", onKey);
}

/*
 * Kontakt-Werte (E-Mail/Telefon) liegen nur Base64-kodiert im Markup und werden
 * erst nach einem echten Klick entschlüsselt und in href/Text geschrieben.
 * Das verhindert, dass einfache Scraper die Adressen aus dem statischen HTML lesen.
 */
document.querySelectorAll("[data-reveal-enc]").forEach((el) => {
  el.addEventListener("click", (event) => {
    if (el.dataset.revealed === "true") return;
    event.preventDefault();

    let value;
    try {
      value = atob(el.getAttribute("data-reveal-enc"));
    } catch (e) {
      return;
    }

    const type = el.getAttribute("data-reveal-type");
    const href = type === "tel" ? `tel:${value.replace(/\s+/g, "")}` : `mailto:${value}`;
    el.setAttribute("href", href);

    if (el.hasAttribute("data-reveal-text")) {
      el.textContent = type === "tel" ? value : value.split(",")[0];
    }

    el.dataset.revealed = "true";

    if (el.hasAttribute("data-reveal-navigate")) {
      window.location.href = href;
    }
  });
});

/* Parallax: Elemente mit data-parallax="<faktor>" verschieben sich beim
   Scrollen um scrollY * Faktor - erzeugt Tiefe (z. B. Hero-Hintergrund
   langsamer, Portraitfoto minimal versetzt zum Text). Deaktiviert bei
   "reduzierte Bewegung"-Systemeinstellung. */
const parallaxEls = document.querySelectorAll("[data-parallax]");
if (parallaxEls.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;
  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax")) || 0;
      el.style.transform = `translate3d(0, ${(scrollY * speed).toFixed(1)}px, 0)`;
    });
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateParallax();
}

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(bookingForm);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const topic = data.get("topic") || "";
    const teilnehmer = data.get("teilnehmer") || "";
    const termin = data.get("termin") || "";
    const message = data.get("message") || "";

    const subject = `Schulungsanfrage: ${topic || "Allgemein"}`;
    const body =
      `Name: ${name}\n` +
      `E-Mail: ${email}\n` +
      `Telefon: ${phone}\n` +
      `Thema: ${topic}\n` +
      `Anzahl Teilnehmer: ${teilnehmer}\n` +
      `Terminwunsch: ${termin}\n\n` +
      `Nachricht:\n${message}`;

    let recipients;
    try {
      recipients = atob(bookingForm.getAttribute("data-reveal-enc"));
    } catch (e) {
      return;
    }

    window.location.href =
      `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

/* Lightbox: Links mit class="gallery-link" öffnen das Bild groß.
   Alle Galerie-Links innerhalb derselben .card bilden eine Galerie
   (Vor/Zurück per Button oder Pfeiltasten, ESC schließt). */
document.querySelectorAll(".card").forEach((card) => {
  const links = Array.from(card.querySelectorAll("a.gallery-link"));
  links.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openLightbox(links, index);
    });
  });
});

function openLightbox(links, startIndex) {
  let index = startIndex;
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Schließen">&times;</button>
    ${links.length > 1 ? '<button class="lightbox-prev" aria-label="Vorheriges Bild">&lsaquo;</button><button class="lightbox-next" aria-label="Nächstes Bild">&rsaquo;</button>' : ""}
    <img alt="">
    <p class="lightbox-caption"></p>
  `;
  const img = overlay.querySelector("img");
  const caption = overlay.querySelector(".lightbox-caption");

  const show = () => {
    const link = links[index];
    const thumb = link.querySelector("img");
    img.src = link.getAttribute("href");
    img.alt = thumb ? thumb.alt : "";
    caption.textContent = link.dataset.caption || (thumb ? thumb.alt : "");
  };
  const step = (delta) => {
    index = (index + delta + links.length) % links.length;
    show();
  };
  const close = () => {
    overlay.remove();
    document.removeEventListener("keydown", onKey);
  };
  const onKey = (e) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft" && links.length > 1) step(-1);
    if (e.key === "ArrowRight" && links.length > 1) step(1);
  };

  overlay.addEventListener("click", (e) => {
    if (e.target.closest(".lightbox-prev")) return step(-1);
    if (e.target.closest(".lightbox-next")) return step(1);
    if (e.target === overlay || e.target.closest(".lightbox-close")) close();
  });
  document.addEventListener("keydown", onKey);
  document.body.appendChild(overlay);
  show();
  overlay.querySelector(".lightbox-close").focus();
}

/*
 * Google Analytics 4 mit Einwilligung (§ 25 TDDDG, Art. 6 Abs. 1 lit. a DSGVO).
 * gtag.js wird erst geladen, nachdem der Besucher im Banner zugestimmt hat –
 * vorher gehen keine Daten an Google. Die Entscheidung liegt im localStorage
 * und kann jederzeit über "Cookie-Einstellungen" im Footer geändert werden.
 * Ohne Mess-ID (leerer String) erscheint weder Banner noch Footer-Link.
 */
const GA_MEASUREMENT_ID = "G-KW9K12VK40";
const CONSENT_KEY = "nw-consent-analytics";

function readConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch (e) {
    return null;
  }
}

function writeConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch (e) {
    /* Speicher blockiert: Entscheidung gilt nur für diesen Seitenaufruf */
  }
}

function loadAnalytics() {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
}

/* Entfernt die GA-Cookies (_ga, _ga_<ID>) für alle in Frage kommenden Domains */
function removeAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (!/^_ga/.test(name) && name !== "_gid") return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  });
}

function privacyHref() {
  const link = document.querySelector('.footer-nav a[href$="datenschutz.html"]');
  return link ? link.getAttribute("href") : "/datenschutz.html";
}

function showConsentBanner() {
  if (document.getElementById("consentBanner")) return;
  const banner = document.createElement("div");
  banner.id = "consentBanner";
  banner.className = "consent-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Cookie-Einstellungen");
  banner.innerHTML = `
    <div class="consent-inner">
      <p>
        Darf ich mit <strong>Google Analytics</strong> Statistiken über die Nutzung dieser Website erheben?
        Dafür werden Cookies gesetzt und Daten an Google (ggf. auch in die USA) übertragen.
        Ihre Entscheidung können Sie jederzeit über „Cookie-Einstellungen“ im Seitenfuß ändern.
        Mehr dazu in der <a href="${privacyHref()}#analytics">Datenschutzerklärung</a>.
      </p>
      <div class="consent-actions">
        <button type="button" class="btn btn-ghost" data-consent="denied">Ablehnen</button>
        <button type="button" class="btn btn-ghost" data-consent="granted">Akzeptieren</button>
      </div>
    </div>
  `;
  banner.querySelectorAll("[data-consent]").forEach((button) => {
    button.addEventListener("click", () => {
      const previous = readConsent();
      const choice = button.getAttribute("data-consent");
      writeConsent(choice);
      banner.remove();
      if (choice === "granted") {
        loadAnalytics();
      } else if (previous === "granted") {
        /* Widerruf: Cookies löschen und neu laden, damit gtag.js nicht weiterläuft */
        window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
        removeAnalyticsCookies();
        window.location.reload();
      }
    });
  });
  document.body.appendChild(banner);
}

if (GA_MEASUREMENT_ID) {
  const consent = readConsent();
  if (consent === "granted") loadAnalytics();
  else if (consent !== "denied") showConsentBanner();

  const footerNav = document.querySelector(".footer-nav");
  if (footerNav) {
    const settingsLink = document.createElement("a");
    settingsLink.href = "#";
    settingsLink.textContent = "Cookie-Einstellungen";
    settingsLink.addEventListener("click", (event) => {
      event.preventDefault();
      showConsentBanner();
    });
    footerNav.appendChild(settingsLink);
  }
}
