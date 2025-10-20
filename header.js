document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");

  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      headerContainer.innerHTML = data;

      const hamburger = headerContainer.querySelector("#hamburger");
      const navLinks = headerContainer.querySelector("#nav-links");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
      });
    })
    .catch((err) => console.error("Error loading header:", err));
});
