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
