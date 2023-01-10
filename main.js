const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");
toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
        this.classList.add("clicked");
    }
});

const header = document.querySelector("header");
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY == 0) {
        goUp.style.opacity = "0";
        header.style.boxShadow = "none";
    } else if (this.scrollY > 500){
        goUp.style.opacity = "1";
        header.style.boxShadow = "0 0 10px #F6F6F6";
    }
})