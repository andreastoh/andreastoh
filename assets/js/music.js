// Fade in each photo (.star) once it scrolls into view
function showImages() {
    const trigger = window.innerHeight - 200;
    document.querySelectorAll('.star:not(.fadeIn)').forEach(img => {
        if (img.getBoundingClientRect().top < trigger) {
            img.classList.add('fadeIn');
        }
    });
}

showImages();
window.addEventListener('scroll', showImages, { passive: true });
window.addEventListener('load', showImages);

// Mobile menu toggle
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
if (menu && navbar) {
    menu.addEventListener('click', e => {
        e.preventDefault();
        navbar.classList.toggle('active');
    });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
