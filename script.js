document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = document.querySelectorAll(".menu-link");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("open");
        })
    })
});

window.onscroll = function () {
    let btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const user = "proykovadima";
const domain = "gmail.com";

// Сглобяване на имейла
const email = user + "@" + domain;

// Показване в страницата
document.getElementById("email-footer").innerHTML = `<a href="mailto:${email}">${email}</a>`;
const el = document.getElementById('email-content');
if (el) {
    el.innerHTML = `<a href="mailto:${email}">${email}</a>`;
}

// Lightbox images
const images = document.querySelectorAll('.movie-img');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;


// показва снимката

function showImage(index) {

    current = index;

    lightboxImg.src = images[current].dataset.full;

}


// отваряне

images.forEach((img, index) => {

    img.addEventListener('click', () => {

        showImage(index);

        lightbox.style.display = 'flex';

    });

});


// затваряне

lightbox.addEventListener('click', () => {

    lightbox.style.display = 'none';

    lightboxImg.src = '';

});


// да не затварят стрелките

prev.addEventListener('click', (e) => {

    e.stopPropagation();

    current--;

    if (current < 0) current = images.length - 1;

    showImage(current);

});

next.addEventListener('click', (e) => {

    e.stopPropagation();

    current++;

    if (current >= images.length) current = 0;

    showImage(current);

});


// клавиатура

document.addEventListener('keydown', (e) => {

    if (lightbox.style.display !== 'flex') return;

    if (e.key === 'ArrowLeft') {

        current--;

        if (current < 0) current = images.length - 1;

        showImage(current);

    }

    if (e.key === 'ArrowRight') {

        current++;

        if (current >= images.length) current = 0;

        showImage(current);

    }

    if (e.key === 'Escape') {

        lightbox.style.display = 'none';

    }

});




