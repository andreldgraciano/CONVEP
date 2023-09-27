//menu animado
const toggleButton = document.getElementById("toggleButton");
const animatedDiv = document.getElementById("animatedDiv");
const buttonChange = document.getElementsByClassName(
    ".navigation-mobile__toggle"
);

toggleButton.addEventListener("click", () => {
    if (animatedDiv.clientHeight === 0) {
        animatedDiv.style.height = "185px";
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
            var id = this.getAttribute("href").substring(1);
            var target = document.getElementById(id);

            if (target) {
                var targetOffset =
                    target.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: targetOffset - 50,
                    behavior: "smooth",
                });
            }
        });
    });
});