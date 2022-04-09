
// Loader/Splash Screen
let intro = document.querySelector(".intro-cont");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let quote = document.querySelector(".quote");

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {


        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add("active");
            }, (idx + 1) * 400);
        });
        setTimeout(() => {
            quote.classList.add("active");
        }, 1200);

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    setTimeout(() => {
                        span.classList.remove("active");
                        span.classList.add("fade");
                    }, (idx + 0.1) * 100);
                }, 800);
            });
            setTimeout(() => {
                quote.classList.remove("active");
                quote.classList.add("fade");
            }, 850);
        }, 2000);

        setTimeout(() => {
            intro.style.top = "-100vh";
        }, 3200);

    });
})

// Fixed navbar on scroll

window.addEventListener("scroll", () => {
    var navbar = document.getElementById("header");
    navbar.classList.toggle("block", window.scrollY > 100);
});


// navabr
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".testimonial-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
