AOS.init({
    duration: 2000, // Animation duration
    once: true, // Whether animation should happen only once
});

window.onload = inicializarCards;   
window.onload = inicializarCards2;

let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("carousel-image");
    const indicators = document.getElementsByClassName("indicator");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        indicators[i].classList.remove("active"); // Elimina la clase active
    }
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0}    
    slides[slideIndex].style.display = "block";  
    indicators[slideIndex].classList.add("active"); // Agrega la clase active
    setTimeout(showSlides, 4000); // Cambia la imagen cada 4 segundos
}

function moveSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("carousel-image");
    const indicators = document.getElementsByClassName("indicator");
    if (slideIndex >= slides.length) {slideIndex = 0}    
    if (slideIndex < 0) {slideIndex = slides.length - 1;}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        indicators[i].classList.remove("active"); // Elimina la clase active
    }
    slides[slideIndex].style.display = "block";  
    indicators[slideIndex].classList.add("active"); // Agrega la clase active
}

function currentSlide(n) {
    slideIndex = n;
    moveSlide(0); // Llama a moveSlide para mostrar la imagen correcta
}

showSlides(); // Llama inicialmente a showSlides



function inicializarCards() {
    const cards = document.querySelectorAll('.card');
    console.log(cards);
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = "articulo.html"; // Cambia la ruta a la página que desees
        });
    });
}

function inicializarCards2() {
    const cards2 = document.querySelectorAll('.card2');
    console.log(cards2);
    
    cards2.forEach(card2 => {
        card2.addEventListener('click', function() {
            window.location.href = "articulo.html"; // Cambia la ruta a la página que desees
        });
    });
}

function redirigir() {
    window.location.href = "subscribir.html";
}

