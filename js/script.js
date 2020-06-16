// let allWindow = document.getElementsByName("body");

// show navigation upon scroll, hide navigation till then
let headr = document.querySelector(".headr");

window.scroll(function() {
  if (window.scrollTop() > 100) {
    headr.classList.add("navigation");
  } else {
    headr.classList.remove("navigation");
  }
});

// when nav turns to hamburger menu and is clicked, menu expands vertically to half the screen
const hamburgerMenu = document.querySelector(".mobile-toggle");

hamburgerMenu.addEventListener("click", function() {
  console.log("clicked");
});
