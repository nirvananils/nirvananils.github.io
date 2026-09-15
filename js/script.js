const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll(".js-email").forEach((el) => {
  const user = el.getAttribute("data-email-user");
  const domain = el.getAttribute("data-email-domain");
  if (!user || !domain) return;
  const address = `${user}@${domain}`;
  el.setAttribute("href", `mailto:${address}`);
  if (el.hasAttribute("data-email-text")) {
    el.textContent = address;
  }
});

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

    const mailUser = bookingForm.getAttribute("data-email-user");
    const mailDomain = bookingForm.getAttribute("data-email-domain");
    const target = `${mailUser}@${mailDomain}`;

    window.location.href =
      `mailto:${target}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
