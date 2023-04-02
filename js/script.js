const mobileMenu = document.querySelector("#menu");

const menuBtn = document.querySelector("#menu-btn");

const menuLinks = document.querySelectorAll(".menu-link");

const toggleMenu = function () {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
  if (mobileMenu.classList.contains("hidden")) {
    enableScrolling();
  } else {
    disableScrolling();
  }
};

menuBtn.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));

// Disabel and Enable Scrolling
function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}
