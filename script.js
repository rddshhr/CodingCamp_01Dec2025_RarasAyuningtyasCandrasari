console.log('Hello World');

///Greeting Message

welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt('Welcome to Konnect! May I have your name, please?');

    if (userResponse === null || userResponse.trim() === '') {
        userResponse = 'Guest';
    }
    document.getElementById('greetingss').innerHTML = 'Hi, ' + userResponse;
    console.log('User entered name:', userResponse);
}

/// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// tampilkan slide pertama saat load
showSlide(currentSlide);

// ganti gambar tiap 3 detik
setInterval(nextSlide, 3000);