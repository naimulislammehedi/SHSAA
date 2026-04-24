// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Navbar Scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm", "py-2");
    navbar.classList.remove("py-4");
  } else {
    navbar.classList.remove("shadow-sm", "py-2");
    navbar.classList.add("py-4");
  }
});

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("hidden");
}

function handleFormSubmit(e) {
  e.preventDefault();
  document.getElementById("modal").classList.remove("hidden");
  e.target.reset();
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
