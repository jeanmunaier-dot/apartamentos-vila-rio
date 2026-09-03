// ---- Config ----
const WHATSAPP_NUMBER = "5511954561026";

// ---- Wire up every WhatsApp CTA with a prefilled message ----
document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
  const text = el.getAttribute("data-whatsapp-text") || "Olá! Vi o anúncio dos apartamentos no Portal dos Gramados.";
  el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
});

// ---- Footer year ----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Sticky nav shrink on scroll ----
const nav = document.getElementById("nav");
const onScroll = () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ---- Mobile nav toggle ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  })
);

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);
revealEls.forEach((el) => revealObserver.observe(el));

// ---- Active nav link on scroll ----
const sections = ["porque", "unidades", "localizacao", "condicoes", "fotos"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinkEls = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinkEls.forEach((link) =>
          link.classList.toggle("active", link.dataset.section === id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => sectionObserver.observe(s));
