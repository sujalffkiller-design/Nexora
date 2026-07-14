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

});