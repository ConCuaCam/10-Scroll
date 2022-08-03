const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

window.addEventListener("scroll", function() {
  var navCenter = this.document.querySelector(".nav");
  navCenter.classList.toggle("sticky", this.window.scrollY > 0);
})
