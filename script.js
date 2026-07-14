const hamburger = document.querySelector(".hamburger");
const spNav = document.querySelector(".sp_nav");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("open");

    spNav.classList.toggle("open");

});