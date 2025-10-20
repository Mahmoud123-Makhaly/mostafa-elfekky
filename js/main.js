// home page logic
// navbar scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    // scrolling up
    navbar.classList.remove("hide");
  }
  if (window.scrollY > 0) {
    // scrolling down
    navbar.classList.add("hide");
  }
  if (window.scrollY > 100) {
    // scrolling down
    navbar.classList.remove("hide");
  }
});
/* owl carousel ****************************** */
$(document).ready(function () {
  $(".sayings-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rtl: true,
    responsive: {
      0: { items: 1 },
    },
    navText: [
      // Use this array to set custom icons
      '<i class="fa-solid fa-arrow-right"></i>', // This will be the "next" button in RTL
      '<i class="fa-solid fa-arrow-left"></i>', // This will be the "previous" button in RTL
    ],
    dots: false,
  });
});
$(document).ready(function () {
  $(".photo-gallery-carousel").owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    rtl: true,
    responsive: {
      0: { items: 2 },
      991: { items: 3 },
      1200: { items: 4 },
    },
    navText: [
      // Use this array to set custom icons
      '<i class="fa-solid fa-arrow-right"></i>', // This will be the "next" button in RTL
      '<i class="fa-solid fa-arrow-left"></i>', // This will be the "previous" button in RTL
    ],
    dots: false,
  });
});
$(".programs-carousel").owlCarousel({
  rtl: true,
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  merge: true, // Enable the merge functionality
  responsive: {
    0: {
      items: 1,
      mergeFit: true,
    },
    768: {
      items: 2,
      mergeFit: true,
    },
    992: {
      items: 3,
      mergeFit: true,
    },
  },
  navText: [
    '<i class="fa-solid fa-chevron-right"></i>',
    '<i class="fa-solid fa-chevron-left"></i>',
  ],
  dots: false,
});
$(document).ready(function () {
  $(".best-seller-carousel").owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    rtl: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      991: { items: 3 },
    },
    navText: [
      // Use this array to set custom icons
      '<i class="fa-solid fa-arrow-right"></i>', // This will be the "next" button in RTL
      '<i class="fa-solid fa-arrow-left"></i>', // This will be the "previous" button in RTL
    ],
    dots: false,
  });
});
