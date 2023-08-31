// Obtém uma referência para o elemento de imagem
var imagem = document.getElementById("bg-header-nav");

// Função para verificar a largura da tela e atualizar o src da imagem
function atualizarSrc() {
    if (window.innerWidth < 768) {
        imagem.src = "img/logo-colorida-final-slim.svg"; // Troque para o caminho da imagem desktop
    } else {
        imagem.src = "img/logo-colorida-final1.svg"; // Troque para o caminho da imagem mobile
    }
}

// Executa a função quando a página é carregada e quando a janela é redimensionada
window.addEventListener("load", atualizarSrc);
window.addEventListener("resize", atualizarSrc);
