console.log("script loaded");
document.addEventListener("DOMContentLoaded", function () {

    const carousel = document.getElementById("carousel");
    const indicatorsContainer = document.getElementById("indicators");

    const cards = carousel.querySelectorAll(".min-w-\\[300px\\]");
    const cardWidth = 320;

    // Create indicators
    cards.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.className = "indicator w-3 h-3 bg-gray-400 rounded-full cursor-pointer";

        dot.addEventListener("click", () => {
            carousel.scrollTo({
                left: index * cardWidth,
                behavior: "smooth"
            });
        });

        indicatorsContainer.appendChild(dot);
    });

    const indicators = document.querySelectorAll(".indicator");

    // Update active indicator
    carousel.addEventListener("scroll", () => {
        let index = Math.round(carousel.scrollLeft / cardWidth);

        indicators.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("bg-black");
                dot.classList.remove("bg-gray-400");
            } else {
                dot.classList.remove("bg-black");
                dot.classList.add("bg-gray-400");
            }
        });
    });

    // ✅ IMPORTANT: expose functions globally
    window.scrollLeftCarousel = function () {
        carousel.scrollBy({
            left: -cardWidth,
            behavior: "smooth"
        });
    };

    window.scrollRightCarousel = function () {
        carousel.scrollBy({
            left: cardWidth,
            behavior: "smooth"
        });
    };

});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("bg-black/80", "backdrop-blur-md");
    } else {
        navbar.classList.remove("bg-black/80", "backdrop-blur-md");
    }
});