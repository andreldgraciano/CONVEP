// Encontre o botão e o elemento que você deseja esconder
const botaoAbrirMenuMobile = document.getElementById("botaoAbrirMenuMobile");
const menuMobileOpen = document.querySelector(".navigation-mobile__open");

// Adicione um ouvinte de eventos para o clique no botão
botaoAbrirMenuMobile.addEventListener("click", function () {
    // Altere o estilo do elemento para "none"
    botaoAbrirMenuMobile.style.display = "none";
    menuMobileOpen.style.display = "flex";
});

// Encontre o botão e o elemento que você deseja esconder
const botaoFecharMenuMobile = document.getElementById("botaoFecharMenuMobile");
const menuMobileClose = document.querySelector(".navigation-mobile__open");

// Adicione um ouvinte de eventos para o clique no botão
botaoFecharMenuMobile.addEventListener("click", function () {
    // Altere o estilo do elemento para "none"
    menuMobileClose.style.display = "none";
    botaoAbrirMenuMobile.style.display = "block";
});
