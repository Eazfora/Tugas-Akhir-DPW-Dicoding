// untuk munculin navigation
const nav_list = document.querySelector(".nav-list");

document.querySelector("#hamburger-menu").onclick = () => {
  nav_list.classList.toggle("active");
};

// untuk menyembunyikan navigation ketika klik di luar area navigation
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e) {
  if (!hamburger.contains(e.target) && !nav_list.contains(e.target)) {
    nav_list.classList.remove("active");
  }
});