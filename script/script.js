//menu animado
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

//scroll smooth
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var id = this.getAttribute("href").substring(1); // Remove o caractere '#'
            var target = document.getElementById(id);

            if (target) {
                var targetOffset =
                    target.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: targetOffset - 100,
                    behavior: "smooth",
                });
            }
        });
    });
});


//mudanca de imagens
const backgroundsDesktop1900 = [
    "url(../../../img/bg-desktop1900-fall-1.svg)",
    "url(../../../img/bg-desktop1900-fall-2.svg)",
    "url(../../../img/bg-desktop1900-galho.svg)",
    "url(../../../img/bg-desktop1900-fingerprint.svg)",
];

const backgroundsDesktop1366 = [
    "url(../../../img/bg-desktop1366-fall-1.svg)",
    "url(../../../img/bg-desktop1366-fall-2.svg)",
    "url(../../../img/bg-desktop1366-galho.svg)",
    "url(../../../img/bg-desktop1366-fingerprint.svg)",
];

const backgroundsMobile = [
    "url(../../../img/bg-mobile-fall-1.svg)",
    "url(../../../img/bg-mobile-fall-2.svg)",
    "url(../../../img/bg-mobile-galho.svg)",
    "url(../../../img/bg-mobile-fingerprint.svg)",
];

const header = document.getElementById("header");
let currentBackgroundIndex = 0;
var backgrounds;

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    backgrounds = backgroundsMobile;
} else {
    const larguraDaTela = window.innerWidth;
    if (larguraDaTela > 1400) {
        backgrounds = backgroundsDesktop1900;
    } else {
        backgrounds = backgroundsDesktop1366;
    }
}

function changeBackground() {
    if (backgrounds != backgroundsMobile) {
        const larguraDaTela = window.innerWidth;
        if (larguraDaTela > 1400) {
            backgrounds = backgroundsDesktop1900;
        } else {
            backgrounds = backgroundsDesktop1366;
        }
    }
    header.style.backgroundImage = backgrounds[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 2000);
