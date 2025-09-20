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


const btnModern = document.getElementById("backToTopModern");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnModern.classList.add("show");
    } else {
        btnModern.classList.remove("show");
    }
});
btnModern.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const user = "proykovadima";
const domain = "gmail.com";
const email = user + "@" + domain;
document.getElementById("email-footer").innerHTML = `<a href="mailto:${email}">${email}</a>`;
document.getElementById("email-content").innerHTML = `<a href="mailto:${email}">${email}</a>`;
