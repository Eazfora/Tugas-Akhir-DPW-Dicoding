// untuk munculin navigation hamburger
const nav_list = document.querySelector(".nav-list");




// katika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  nav_list.classList.toggle("active");
};

// untuk munculin searchform
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// klik luar element
const hamburger = document.querySelector("#hamburger-menu");
const searchbutton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !nav_list.contains(e.target)) {
    nav_list.classList.remove("active");
  }

  if (!searchbutton.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }

});
