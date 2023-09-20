const toggleButton = document.getElementById("toggleButton");
const animatedDiv = document.getElementById("animatedDiv");
const buttonChange = document.getElementsByClassName(
    ".navigation-mobile__toggle"
);

toggleButton.addEventListener("click", () => {
    if (animatedDiv.clientHeight === 0) {
        animatedDiv.style.height = "180px";
    } else {
        animatedDiv.style.height = "0";
    }
});

// Lista de imagens de fundo
const backgroundsDesktop = [
    "url(../../../img/bg-desktop-fall-1.svg)",
    "url(../../../img/bg-desktop-fall-2.svg)",
    "url(../../../img/bg-desktop-galho.svg)",
    "url(../../../img/bg-desktop-fingerprint.svg)",
];

const backgroundsMobile = [
    "url(../../../img/bg-mobile-fall-1.svg)",
    "url(../../../img/bg-mobile-galho.svg)",
    "url(../../../img/bg-mobile-fingerprint.svg)",
];

const header = document.getElementById("header");
let currentBackgroundIndex = 0;

function changeBackground() {
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        backgrounds = backgroundsMobile;
    } else {
        backgrounds = backgroundsDesktop;
    }

    header.style.backgroundImage = backgrounds[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Iniciar a troca de fundo a cada 3 segundos
setInterval(changeBackground, 2000);
