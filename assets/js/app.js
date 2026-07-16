const themeBtn = document.querySelector(".theme-btn");

const body = document.body;

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){

        themeBtn.textContent="☀️";

    }

    else{

        themeBtn.textContent="🌙";

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

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;
            const speed = target / 100;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;
                    counter.textContent = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach((counter) => {

    counterObserver.observe(counter);

});