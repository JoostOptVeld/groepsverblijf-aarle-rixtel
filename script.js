document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

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

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const naam = data.get("naam");
  const email = data.get("email");
  const telefoon = data.get("telefoon");
  const personen = data.get("personen");
  const aankomst = data.get("aankomst");
  const vertrek = data.get("vertrek");
  const bericht = data.get("bericht");

  const body = [
    `Naam: ${naam}`,
    `E-mail: ${email}`,
    telefoon ? `Telefoon: ${telefoon}` : null,
    personen ? `Aantal personen: ${personen}` : null,
    aankomst ? `Aankomstdatum: ${aankomst}` : null,
    vertrek ? `Vertrekdatum: ${vertrek}` : null,
    "",
    bericht || "",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const mailto = `mailto:info@groepsverblijf-aarle-rixtel.nl?subject=${encodeURIComponent(
    "Aanvraag groepsverblijf Aarle-Rixtel"
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  formNote.textContent = "Je e-mailprogramma wordt geopend om de aanvraag te versturen.";
});
