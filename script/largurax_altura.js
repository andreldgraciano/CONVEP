function capturarDimensoesTela() {
    const larguraTela =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    const alturaTela =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    return { largura: larguraTela, altura: alturaTela };
}

function atualizarDimensoes() {
    const dimensoesTela = capturarDimensoesTela();
    document.getElementById("larguraTela").textContent = dimensoesTela.largura;
    document.getElementById("alturaTela").textContent = dimensoesTela.altura;
}

window.onload = function () {
    atualizarDimensoes();
};

window.addEventListener("resize", atualizarDimensoes);

//ATUALIZAR A IMAGEM A CADA RESOLUÇAO
function atualizarImagem() {
    var larguraDaJanela = window.innerWidth;

    var minhaImagem = document.getElementById("arvore");

    if (larguraDaJanela <= 1366) {
        minhaImagem.src = "./img/arvore-1366x619.svg";
    } else if (larguraDaJanela <= 500) {
        minhaImagem.src = "./img/arvore-mobile.svg";
    } else {
        minhaImagem.src = "./img/arvore-1920x931.svg";
    }
}

window.onload = atualizarImagem;

window.addEventListener("resize", atualizarImagem);
