const themeButton = document.querySelector(".theme-btn");

const body = document.body;


themeButton.addEventListener("click", () => {

    body.classList.toggle("light-mode");


    if(body.classList.contains("light-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuButton.classList.toggle("active");
});

const features = document.querySelector(".features");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

observer.observe(features);

const cards = document.querySelectorAll(".feature-card");

const cardObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

cards.forEach((card) => {

    cardObserver.observe(card);

});