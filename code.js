const toggleBars = document.getElementById("bars");
const menuLinks = document.getElementById("menu");
toggleBars.addEventListener("click", navigationFunction);
function blockOnScroll() {
    document.querySelector("body").classList.toggle("block-on-scroll");
}
function navigationFunction() {
    toggleBars.classList.toggle("rotate");
    menuLinks.classList.toggle("show-menu");
    blockOnScroll();
}