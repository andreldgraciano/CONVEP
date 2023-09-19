//btn-open-menu-mobile
const botaoAbrirMenuMobile = document.getElementById("botaoAbrirMenuMobile");
const menuMobileOpen = document.querySelector(".navigation-mobile__open");

botaoAbrirMenuMobile.addEventListener("click", function () {
    botaoAbrirMenuMobile.style.display = "none";
    menuMobileOpen.style.display = "flex";
});

//btn-close-menu-mobile
const botaoFecharMenuMobile = document.getElementById("botaoFecharMenuMobile");
const menuMobileClose = document.querySelector(".navigation-mobile__open");


botaoFecharMenuMobile.addEventListener("click", function () {
    
    menuMobileClose.style.display = "none";
    botaoAbrirMenuMobile.style.display = "block";
});
