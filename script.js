/* eslint-disable no-undef*/

jQuery(document).ready(function() {
  $(window).scroll(function(e) {
    parallaxScroll();
  });

  function parallaxScroll() {
    var scrolled = $(window).scrollTop();

    $("#parallax-bg-1").css("top", 0 - scrolled * 0.25 + "px");
    $("#parallax-bg-2").css("top", 0 - scrolled * 0.4 + "px");
    $("#parallax-bg-3").css("top", 0 - scrolled * 0.7 + "px");
    $("#parallax-bg-4").css("top", 0 - scrolled * 0.2 + "px");
    $("#parallax-bg-5").css("top", 0 - scrolled * 0.35 + "px");
  }
});

const hamburgerMenu = document.querySelector(".hamburger");
const sideNav = document.querySelector(".nav-links");
const navLink = document.querySelectorAll("span");

hamburgerMenu.addEventListener("click", function() {
  sideNav.classList.toggle("side-nav");
  for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.toggle("hamburger-bar");
    navLink[i].classList.toggle("hamburger-bar-" + [i]);
  }
});
