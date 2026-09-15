const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
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
