// Typing Effect
const text = ["Web Developer", "CSE Student", "Frontend Enthusiast"];
let i = 0,
  j = 0,
  currentText = "",
  isDeleting = false;

function typeEffect() {
  currentText = text[i];
  if (!isDeleting) {
    document.getElementById("typing").textContent = currentText.substring(
      0,
      j++,
    );
    if (j > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = currentText.substring(
      0,
      j--,
    );
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Scroll Reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 150) {
      el.classList.add("active");
    }
  });
});

// Dark/Light Mode
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("light-mode");
};
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});
