const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".nav-logo");
const hider = document.getElementById("hider");


logo.addEventListener("click", ()=> {
    hider.classList.remove("hiding");
    logo.classList.add("hiding");
});