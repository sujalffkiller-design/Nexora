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