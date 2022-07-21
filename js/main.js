const nav = document.querySelector("nav");
const courses = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
// Swiper Js
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      // when window width is >= 320px
      340: {
         slidesPerView: 2,
         slidesPerGroup: 1,
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         slidesPerGroup: 4,
      },
      992: {
         slidesPerView: 4,
         slidesPerGroup: 4,
      },
   },
});
var swiper2 = new Swiper(".mySwiper2", {
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
   },
});
// NavBar
document.addEventListener("scroll", function () {
   if (scrollY >= 300) {
      nav.classList.add("fixed-top");
   } else {
      nav.classList.remove("fixed-top");
   }
});
// nav links
navLinks.forEach((link) => {
   link.addEventListener("click", function (e) {
      link.closest("ul").querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
   });
});
