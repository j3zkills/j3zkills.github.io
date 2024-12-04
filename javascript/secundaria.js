let currentSlide = 1;
const totalSlides = 2;

function showSlide(n) {
    let slides = document.querySelectorAll(".itemCarrusel");
    if (n > totalSlides) { currentSlide = 1; }
    if (n < 1) { currentSlide = totalSlides; }
    slides.forEach((slide, index) => {
        slide.style.display = (index === currentSlide - 1) ? "block" : "none";
    });
}

document.querySelectorAll(".next").forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        currentSlide++;
        showSlide(currentSlide);
    });
});

document.querySelectorAll(".prev").forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        currentSlide--;
        showSlide(currentSlide);
    });
});

setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 8000);

showSlide(currentSlide);