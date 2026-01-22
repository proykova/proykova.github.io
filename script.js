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
document.getElementById("email-content").innerHTML = `<a href="mailto:${email}">${email}</a>`;


// Lightbox images
const images = document.querySelectorAll('.movie-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.dataset.full;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});
